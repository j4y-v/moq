//! Pull one RTSP session into a broadcast.

use futures::StreamExt;
use moq_mux::catalog::placement::{Frame, Placement, Step};
use moq_mux::codec::{aac, h264, h265};
use moq_tokio::RedactedUrl;
use retina::client::{Credentials, PlayOptions, Session, SessionOptions, SetupOptions, Transport};
use retina::codec::{
	CodecItem, FrameFormat, ParameterSetInsertion, ParametersRef, VideoParameters, VideoParametersCodec,
};
use url::Url;

use crate::{Error, Result};

/// Annex-B video and raw AAC with its AudioSpecificConfig out of band.
///
/// retina strips in-band parameter sets and would re-insert them only ahead of an IDR, missing
/// an H.265 CRA and an H.264 recovery point, so the ingest hands them to the splitter instead.
const FRAME_FORMAT: FrameFormat = FrameFormat {
	h26x_framing: retina::codec::h26x::Framing::AnnexB,
	parameter_set_insertion: ParameterSetInsertion::Never,
	aac_framing: retina::codec::aac::Framing::Raw,
};

/// How far a frame may land behind its stream's previous one before the session counts as
/// restarted. Generous enough for B-frame reordering.
const MAX_BACKWARD: std::time::Duration = std::time::Duration::from_secs(1);

/// How far a frame may land ahead of its stream's previous one, beyond the time between their
/// arrivals, before the session counts as restarted. A stream that pauses (motion-triggered
/// video beside continuous audio) returns that far ahead, while a camera resetting its RTP clock
/// lands anywhere in a 32-bit range, hours away.
const MAX_FORWARD: std::time::Duration = std::time::Duration::from_secs(10);

/// How long a request may go unanswered, or the session without a frame, before it counts as
/// stuck. retina's keepalives only prove the server answers, not that the camera sends media.
const TIMEOUT: std::time::Duration = std::time::Duration::from_secs(10);

/// How long every video stream may go without a keyframe after PLAY. One that never sends any
/// would withhold the catalog while the session's other streams keep [`TIMEOUT`] from firing.
/// Generous, since a camera's "smart" codec can stretch the keyframe interval well past 10s.
const KEYFRAME_TIMEOUT: std::time::Duration = std::time::Duration::from_secs(30);

/// Why [`Client::pull`] returned without an error.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
#[non_exhaustive]
pub enum End {
	/// The server ended the session.
	Closed,
	/// The session's RTP timeline jumped, so its tracks finished before the jump.
	///
	/// Its timestamps no longer continue the broadcast's, so the caller finishes the
	/// broadcast and restarts every session sharing it under a fresh instance.
	Jumped,
}

/// An RTSP source to pull, such as an IP camera's stream URL.
///
/// Credentials ride the URL's userinfo, as every RTSP tool takes them
/// (`rtsp://user:pass@camera/stream`).
#[derive(Clone)]
pub struct Client {
	/// The URL without its userinfo.
	url: Url,
	creds: Option<Credentials>,
	/// [`TIMEOUT`], lengthened by tests so only [`KEYFRAME_TIMEOUT`] fires.
	timeout: std::time::Duration,
	/// [`MAX_FORWARD`], shortened by tests.
	max_forward: std::time::Duration,
	/// How long a session waits for a sender report, when a test shortens the placement's default.
	report_wait: Option<std::time::Duration>,
}

impl Client {
	/// Pull from `url`, taking any credentials out of its userinfo.
	pub fn new(mut url: Url) -> Result<Self> {
		if url.scheme() != "rtsp" {
			return Err(Error::InvalidUrl(format!(
				"expected the rtsp scheme, got {}",
				url.scheme()
			)));
		}
		if url.host_str().is_none() {
			return Err(Error::InvalidUrl("missing host".to_string()));
		}

		let creds = if url.username().is_empty() && url.password().is_none() {
			None
		} else {
			let decode = |part: &str| {
				percent_encoding::percent_decode_str(part)
					.decode_utf8()
					.map(|part| part.into_owned())
					.map_err(|_| Error::InvalidUrl("credentials are not UTF-8".to_string()))
			};
			let creds = Credentials {
				username: decode(url.username())?,
				password: decode(url.password().unwrap_or_default())?,
			};
			// retina refuses a URL that still carries userinfo.
			let _ = url.set_username("");
			let _ = url.set_password(None);
			Some(creds)
		};

		Ok(Self {
			url,
			creds,
			timeout: TIMEOUT,
			max_forward: MAX_FORWARD,
			report_wait: None,
		})
	}

	/// Ingest one session into `broadcast`, publishing its renditions on `catalog`.
	///
	/// Publishes the session's H.264 and H.265 video and AAC audio, starting on a keyframe.
	/// Audio the stack cannot play is skipped with a warning. The session keeps the camera's
	/// timestamps, counted from PLAY, and places them on the catalog's clock where the camera's
	/// RTCP sender report says they were captured, or at the first frame's arrival when no usable
	/// report comes within one report interval. The catalog, and the frames since each stream's
	/// latest keyframe, wait for it. A later session sharing the catalog, like one on a clock fixed
	/// beforehand, keeps its timestamps, counted from its own PLAY: publish independent sessions as
	/// separate broadcasts.
	///
	/// Never reconnects: returns once the session ends or its timeline jumps, finishing its
	/// tracks, or fails, aborting them, including when a request or the media stalls. The
	/// caller owns the broadcast and decides whether to retry. Dropping the future stops the
	/// session and finishes its tracks.
	pub async fn pull(
		&self,
		broadcast: &moq_net::broadcast::Producer,
		catalog: &moq_mux::catalog::Producer,
	) -> Result<End> {
		let options = SessionOptions::default()
			.creds(self.creds.clone())
			.user_agent(concat!("moq-rtsp/", env!("CARGO_PKG_VERSION")).to_string());
		let mut session = self.within(Session::describe(self.url.clone(), options)).await??;

		// Every stream of one session shares one timebase, so its audio and video stay in sync,
		// while another session sharing the catalog gets its own.
		let timebase = catalog.timebase();
		let mut tracks = Vec::new();
		let mut skipped = Vec::new();
		for (index, stream) in session.streams().iter().enumerate() {
			let kind = match (stream.media(), stream.encoding_name()) {
				("video", "h264") => Kind::H264,
				("video", "h265") => Kind::H265,
				("audio", "mpeg4-generic") => Kind::Aac,
				(media, encoding) => {
					skipped.push(format!("{media}/{encoding}"));
					continue;
				}
			};
			tracks.push((index, kind));
		}

		let url = RedactedUrl::new(&self.url);
		if tracks.is_empty() {
			return Err(Error::NoSupportedStream(skipped.join(", ")));
		}
		if !skipped.is_empty() {
			tracing::warn!(%url, skipped = %skipped.join(", "), "skipping RTSP streams with a codec the stack cannot play");
		}

		for (index, _) in &tracks {
			let setup = SetupOptions::default()
				.transport(Transport::Tcp(Default::default()))
				.frame_format(FRAME_FORMAT);
			self.within(session.setup(*index, setup)).await??;
		}

		let reserved = timebase.reserve();
		let mut ingest = Ingest {
			streams: Vec::new(),
			video: tracks.iter().any(|(_, kind)| *kind != Kind::Aac),
			started: false,
			max_forward: self.max_forward,
			placement: Some(match self.report_wait {
				Some(wait) => Placement::new(timebase.clone()).with_wait(wait),
				None => Placement::new(timebase.clone()),
			}),
		};
		ingest.streams.resize_with(session.streams().len(), || None);
		// A failure here aborts the tracks already made rather than leaving `Drop` to finish them.
		let built = (|| -> Result<()> {
			for (index, kind) in &tracks {
				let track = match kind {
					Kind::H264 => {
						let track = broadcast.unique_track(".avc3", catalog.track_info(hang::catalog::PRIORITY.video));
						Track::Video(Box::new(Video::H264 {
							split: h264::Split::new(),
							import: h264::Import::new(track, reserved.clone(), Default::default())?,
						}))
					}
					Kind::H265 => {
						let track = broadcast.unique_track(".hev1", catalog.track_info(hang::catalog::PRIORITY.video));
						Track::Video(Box::new(Video::H265 {
							split: h265::Split::new(),
							import: h265::Import::new(track, reserved.clone(), Default::default())?,
						}))
					}
					Kind::Aac => {
						let Some(ParametersRef::Audio(params)) = session.streams()[*index].parameters() else {
							return Err(Error::Rtsp("AAC stream without an AudioSpecificConfig".to_string()));
						};
						let config = aac::config(params.extra_data())?;
						let track = broadcast.unique_track(".aac", catalog.track_info(hang::catalog::PRIORITY.audio));
						Track::Aac(Box::new(aac::Import::new(track, reserved.clone(), config)?))
					}
				};
				ingest.streams[*index] = Some(Stream {
					track,
					last: None,
					started: false,
					held: None,
					fresh: true,
				});
			}
			Ok(())
		})();
		if let Err(err) = built {
			ingest.abort(moq_net::Error::Transport(err.to_string()));
			return Err(err);
		}
		// The catalog waits for each video rendition's first keyframe, not for this.
		drop(reserved);

		// Not every camera sends `rtptime` for every stream; fall back to the first packet
		// rather than refusing it, leaving those streams only roughly in sync.
		let play = PlayOptions::default().initial_timestamp(retina::client::InitialTimestampPolicy::Permissive);
		let result: Result<End> = async {
			let mut session = self.within(session.play(play)).await??.demuxed()?;
			tracing::info!(%url, streams = tracks.len(), "RTSP session playing");
			let playing = kio::clock::now();
			// Measured from the last frame, so RTCP reports alone cannot keep a dead camera alive.
			let mut deadline = playing.saturating_add(self.timeout);
			let end = loop {
				// A camera that stops during the report wait still gets placed when the wait ends.
				let wake = ingest.placing().map_or(deadline, |placing| placing.min(deadline));
				let item = match kio::clock::timeout(wake - kio::clock::now(), session.next()).await {
					Ok(item) => item,
					Err(_) if kio::clock::now() < deadline => match ingest.expire()? {
						Some(Jump) => break End::Jumped,
						None => continue,
					},
					Err(_) => return Err(Error::Stalled(self.timeout)),
				};
				let Some(item) = item else {
					// A session ending while it waits to be placed still publishes what it held.
					match ingest.release()? {
						Some(Jump) => break End::Jumped,
						None => break End::Closed,
					}
				};
				let item = item?;
				if matches!(item, CodecItem::VideoFrame(_) | CodecItem::AudioFrame(_)) {
					deadline = kio::clock::now().saturating_add(self.timeout);
				}
				if ingest.push(item, session.streams())?.is_some() {
					break End::Jumped;
				}
				if ingest.awaiting_keyframe(playing, KEYFRAME_TIMEOUT) {
					return Err(Error::Stalled(KEYFRAME_TIMEOUT));
				}
			};
			if end == End::Jumped {
				tracing::warn!(%url, "RTSP timeline jumped, ending the session");
			}
			Ok(end)
		}
		.await;

		match result {
			Ok(end) => {
				ingest.finish()?;
				Ok(end)
			}
			Err(err) => {
				ingest.abort(moq_net::Error::Transport(err.to_string()));
				Err(err)
			}
		}
	}
}

impl Client {
	/// Fail `step` once it takes longer than the timeout.
	async fn within<T>(&self, step: impl Future<Output = T>) -> Result<T> {
		kio::clock::timeout(self.timeout, step)
			.await
			.map_err(|_| Error::Stalled(self.timeout))
	}
}

impl std::fmt::Debug for Client {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		// Never the credentials.
		f.debug_struct("Client")
			.field("url", &RedactedUrl::new(&self.url))
			.finish_non_exhaustive()
	}
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum Kind {
	H264,
	H265,
	Aac,
}

enum Track {
	Video(Box<Video>),
	Aac(Box<aac::Import>),
}

impl Track {
	/// End the track cleanly. It leaves the broadcast with this handle.
	fn finish(self) -> moq_mux::Result<()> {
		match self {
			Self::Video(video) => match *video {
				Video::H264 { import, .. } => import.finish().map(drop),
				Video::H265 { import, .. } => import.finish().map(drop),
			},
			Self::Aac(import) => import.finish().map(drop),
		}
	}

	fn abort(self, err: moq_net::Error) {
		match self {
			Self::Video(video) => match *video {
				Video::H264 { import, .. } => import.abort(err),
				Video::H265 { import, .. } => import.abort(err),
			},
			Self::Aac(import) => import.abort(err),
		}
	}
}

enum Video {
	H264 { split: h264::Split, import: h264::Import },
	H265 { split: h265::Split, import: h265::Import },
}

impl Video {
	/// Split one whole access unit into frames, inserting `params` ahead of it.
	///
	/// Flushes, since retina hands over no partial access units.
	fn split(
		&mut self,
		data: &[u8],
		params: Option<&VideoParameters>,
		pts: moq_net::Timestamp,
	) -> moq_mux::Result<Vec<moq_mux::container::Frame>> {
		let mut prefix = Vec::new();
		if let Some(params) = params {
			let sets: &[&[u8]] = match params.codec_params() {
				VideoParametersCodec::H264 { sps, pps } => &[sps, pps],
				VideoParametersCodec::H265 { vps, sps, pps } => &[vps, sps, pps],
				_ => &[],
			};
			for set in sets {
				prefix.extend_from_slice(&[0, 0, 0, 1]);
				prefix.extend_from_slice(set);
			}
		}

		// The splitter parses a stream, so the parameter sets and the access unit can arrive apart.
		let (mut frames, more, flushed) = match self {
			Self::H264 { split, .. } => (split.decode(&prefix, pts)?, split.decode(data, pts)?, split.flush(pts)?),
			Self::H265 { split, .. } => (split.decode(&prefix, pts)?, split.decode(data, pts)?, split.flush(pts)?),
		};
		frames.extend(more);
		frames.extend(flushed);
		Ok(frames)
	}

	/// Drop any access unit the splitter holds, keeping its parameter sets.
	fn reset(&mut self) {
		match self {
			Self::H264 { split, .. } => split.reset(),
			Self::H265 { split, .. } => split.reset(),
		}
	}

	fn decode(&mut self, frames: Vec<moq_mux::container::Frame>) -> moq_mux::Result<()> {
		match self {
			Self::H264 { import, .. } => import.decode(frames),
			Self::H265 { import, .. } => import.decode(frames),
		}
	}
}

struct Stream {
	track: Track,
	/// The previous frame's timestamp, in the stream's clock units since the session start, and
	/// when it arrived.
	last: Option<(i64, kio::clock::Instant)>,
	/// Whether a keyframe has been published (video) or the session started (audio).
	started: bool,
	/// When a lost packet broke the video's reference chain, so it waits for a keyframe.
	held: Option<kio::clock::Instant>,
	/// Whether retina's parameter sets still need inserting: until the splitter emits a keyframe
	/// carrying them, after which it re-inserts them ahead of every keyframe itself.
	fresh: bool,
}

/// The session's tracks, indexed by retina stream id.
struct Ingest {
	streams: Vec<Option<Stream>>,
	/// Whether the session carries video, so audio waits for its first keyframe.
	video: bool,
	/// Whether any video stream published its first keyframe.
	started: bool,
	/// [`MAX_FORWARD`], or a test's override.
	max_forward: std::time::Duration,
	/// Places the session on the catalog's clock, holding its frames until then, each with the
	/// video parameters its stream had: retina strips in-band parameter sets, and a later frame may
	/// change the stream's. `None` once the session is placed.
	placement: Option<Placement<usize, (CodecItem, Option<VideoParameters>)>>,
}

/// Seconds from the NTP epoch (1900) to the Unix one (1970).
const NTP_UNIX: i128 = 2_208_988_800;

/// An NTP timestamp (Q32.32 seconds since 1900) as a wall time, or `None` before 1970.
///
/// NTP seconds wrap in 2036; a value below 2^31 is read as the next era (RFC 4330 §3), so a camera
/// clock never set (zero) reads as 2036, far from any arrival. The rest reads from 1968 on.
fn ntp_wall(ntp: u64) -> Option<kio::clock::Wall> {
	let mut secs = i128::from(ntp >> 32);
	if secs < 1 << 31 {
		secs += 1 << 32;
	}
	let micros = (secs - NTP_UNIX) * 1_000_000 + ((i128::from(ntp & 0xFFFF_FFFF) * 1_000_000) >> 32);
	let micros = u64::try_from(micros).ok()?;
	kio::clock::Wall::UNIX_EPOCH.checked_add(std::time::Duration::from_micros(micros))
}

/// A sender report: its stream, the RTP time it names, and the NTP time the camera gave that.
fn sender_report(rtcp: &retina::rtcp::ReceivedCompoundPacket) -> Option<(usize, moq_net::Timestamp, kio::clock::Wall)> {
	let at = rtcp.rtp_timestamp()?;
	let report = rtcp.pkts().next()?.as_sender_report().ok()??;
	let rate = u64::from(at.clock_rate().get());
	let wall = ntp_wall(report.ntp_timestamp().0)?;
	// A report naming an RTP time before PLAY names PLAY's too, that much later on the camera's clock.
	let (units, wall) = match u64::try_from(at.elapsed()) {
		Ok(units) => (units, wall),
		Err(_) => {
			let before = at.elapsed().unsigned_abs();
			let later = std::time::Duration::from_micros(before.saturating_mul(1_000_000) / rate);
			(0, wall.checked_add(later)?)
		}
	};
	let pts = moq_net::Timestamp::from_scale(units, rate).ok()?;
	Some((rtcp.stream_id(), pts, wall))
}

/// The video parameters `item`'s stream has now.
fn parameters<'a>(streams: &'a [retina::client::Stream], item: &CodecItem) -> Option<&'a VideoParameters> {
	let CodecItem::VideoFrame(frame) = item else {
		return None;
	};
	match streams.get(frame.stream_id())?.parameters()? {
		ParametersRef::Video(params) => Some(params),
		_ => None,
	}
}

/// A media item's stream, timestamp since PLAY, arrival, and whether it may start its stream, or
/// `None` for an item before PLAY, which publishes nothing.
fn media(item: &CodecItem) -> Option<(usize, moq_net::Timestamp, kio::clock::Instant, bool)> {
	let (stream_id, timestamp, received, keyframe) = match item {
		CodecItem::VideoFrame(frame) => (
			frame.stream_id(),
			frame.timestamp(),
			frame.end_ctx().received(),
			frame.is_random_access_point(),
		),
		CodecItem::AudioFrame(frame) => (frame.stream_id(), frame.timestamp(), frame.ctx().received(), true),
		_ => return None,
	};
	let units = u64::try_from(timestamp.elapsed()).ok()?;
	let pts = moq_net::Timestamp::from_scale(units, u64::from(timestamp.clock_rate().get())).ok()?;
	Some((stream_id, pts, kio::clock::Instant::from_std(received), keyframe))
}

/// Dropping the [`Client::pull`] future stops the session: its tracks end cleanly, so a caller
/// restarting a broadcast never leaves subscribers with a dropped track.
impl Drop for Ingest {
	fn drop(&mut self) {
		if let Err(err) = self.finish() {
			tracing::warn!(%err, "failed to finish an RTSP track");
		}
	}
}

/// [`MAX_BACKWARD`] in units of a `rate` Hz clock.
fn backward(rate: u32) -> i128 {
	MAX_BACKWARD.as_micros() as i128 * i128::from(rate) / 1_000_000
}

/// A frame's timestamp landed too far from its stream's previous one.
struct Jump;

impl Ingest {
	/// Publish one depacketized item, or report that the timeline jumped. Until the session is
	/// placed on the catalog's clock, items are held, then published in order.
	fn push(&mut self, item: CodecItem, streams: &[retina::client::Stream]) -> Result<Option<Jump>> {
		let Some(placement) = self.placement.take() else {
			let params = parameters(streams, &item);
			return self.publish(item, params);
		};
		let step = match &item {
			CodecItem::Rtcp(rtcp) => match sender_report(rtcp) {
				Some((stream, pts, wall)) => placement.report(stream, pts, wall)?,
				None => Step::Waiting(placement),
			},
			_ => match media(&item) {
				Some((stream, pts, arrival, keyframe)) if self.streams.get(stream).is_some_and(Option::is_some) => {
					let params = parameters(streams, &item).cloned();
					placement.hold(Frame {
						stream,
						pts,
						arrival,
						keyframe,
						item: (item, params),
					})?
				}
				// Nothing the session publishes, such as a picture before PLAY: no reason to hold it.
				_ => {
					self.placement = Some(placement);
					let params = parameters(streams, &item);
					return self.publish(item, params);
				}
			},
		};
		self.step(step)
	}

	/// Place a session still waiting on its first held frame's arrival, and publish what it held:
	/// for a session that ends first.
	fn release(&mut self) -> Result<Option<Jump>> {
		match self.placement.take() {
			Some(placement) => self.replay(placement.finish()?),
			None => Ok(None),
		}
	}

	/// When the report wait ends with no frame to end it, while the session waits to be placed.
	fn placing(&self) -> Option<kio::clock::Instant> {
		self.placement.as_ref().and_then(Placement::deadline)
	}

	/// Place a session whose report wait is over, publishing what it held.
	fn expire(&mut self) -> Result<Option<Jump>> {
		match self.placement.take() {
			Some(placement) => self.step(placement.expire()?),
			None => Ok(None),
		}
	}

	/// Keep waiting, or publish what the session held now that it is placed.
	fn step(&mut self, step: Step<usize, (CodecItem, Option<VideoParameters>)>) -> Result<Option<Jump>> {
		match step {
			Step::Waiting(placement) => {
				self.placement = Some(placement);
				Ok(None)
			}
			Step::Placed(held) => self.replay(held),
		}
	}

	/// Publish the frames held while waiting, now that the session is placed.
	fn replay(&mut self, held: Vec<(CodecItem, Option<VideoParameters>)>) -> Result<Option<Jump>> {
		for (item, params) in held {
			if let Some(jump) = self.publish(item, params.as_ref())? {
				return Ok(Some(jump));
			}
		}
		Ok(None)
	}

	/// Publish one depacketized item under its stream's video `params`, or report that the timeline
	/// jumped.
	fn publish(&mut self, item: CodecItem, params: Option<&VideoParameters>) -> Result<Option<Jump>> {
		let (stream_id, timestamp, data, changed, received, loss) = match &item {
			CodecItem::VideoFrame(frame) => (
				frame.stream_id(),
				frame.timestamp(),
				frame.data(),
				frame.has_new_parameters(),
				kio::clock::Instant::from_std(frame.end_ctx().received()),
				frame.loss(),
			),
			CodecItem::AudioFrame(frame) => (
				frame.stream_id(),
				frame.timestamp(),
				frame.data(),
				false,
				kio::clock::Instant::from_std(frame.ctx().received()),
				// AAC packets decode alone, and the decoder conceals a lost one.
				0,
			),
			_ => return Ok(None),
		};
		let Some(stream) = self.streams.get_mut(stream_id).and_then(Option::as_mut) else {
			return Ok(None);
		};

		let elapsed = timestamp.elapsed();
		let rate = timestamp.clock_rate().get();
		if let Some((last, arrived)) = stream.last {
			let delta = i128::from(elapsed) - i128::from(last);
			let slack = self.max_forward + received.saturating_duration_since(arrived);
			let forward = slack.as_micros() as i128 * i128::from(rate) / 1_000_000;
			if delta < -backward(rate) || delta > forward {
				return Ok(Some(Jump));
			}
		}
		let Ok(units) = u64::try_from(elapsed) else {
			// A reordered picture can land just before the session's start, such as a leading
			// picture of the keyframe it opened on. Undecodable from here, so drop it. Further
			// back, the server's `rtptime` is wrong and nothing would ever publish.
			if i128::from(elapsed) < -backward(rate) {
				return Err(Error::Rtsp(format!(
					"stream {stream_id} starts {elapsed} units before the server's rtptime"
				)));
			}
			return Ok(None);
		};
		let pts = moq_net::Timestamp::from_scale(units, u64::from(rate)).map_err(moq_mux::Error::from)?;

		match &mut stream.track {
			Track::Video(video) => {
				// Before any drop, so the next clean keyframe still gets retina's new parameters.
				stream.fresh |= changed;
				if loss > 0 {
					// The pictures after a lost packet reference what it carried, so hold the
					// video until the next keyframe rather than publish a broken chain. This
					// access unit is damaged too, even when it is a keyframe, so drop it.
					if stream.started && stream.held.is_none() {
						tracing::warn!(stream_id, loss, "RTP packets lost, waiting for the next keyframe");
						stream.held = Some(kio::clock::now());
					}
					video.reset();
					return Ok(None);
				}
				let params = params.filter(|_| stream.fresh);
				let frames = video.split(data, params, pts)?;
				let keyframe = frames.iter().any(|frame| frame.keyframe);
				stream.fresh &= !keyframe;
				if !stream.started || stream.held.is_some() {
					// Publish nothing before a keyframe, by the splitter's reckoning (an IDR, an
					// H.264 recovery point, or any H.265 IRAP picture).
					if !frames.first().is_some_and(|frame| frame.keyframe) {
						return Ok(None);
					}
					stream.started = true;
					stream.held = None;
					self.started = true;
				}
				stream.last = Some((elapsed, received));
				video.decode(frames)?;
			}
			Track::Aac(import) => {
				if !stream.started {
					// Audio waits for the first keyframe too.
					if self.video && !self.started {
						return Ok(None);
					}
					stream.started = true;
				}
				stream.last = Some((elapsed, received));
				import.decode(data, Some(pts))?;
				// Each packet its own group (one QUIC stream), so relays forward it at once.
				import.cut(None)?;
			}
		}
		Ok(None)
	}

	/// Whether a video stream has waited longer than `timeout` for a keyframe: its first since
	/// `playing`, or its next since a loss held it. A session waiting to be placed holds its
	/// keyframes, so that wait counts too.
	fn awaiting_keyframe(&self, playing: kio::clock::Instant, timeout: std::time::Duration) -> bool {
		self.streams.iter().flatten().any(|stream| {
			let since = match stream.held {
				Some(held) => held,
				None if !stream.started => playing,
				None => return false,
			};
			matches!(stream.track, Track::Video(_)) && since.elapsed() > timeout
		})
	}

	/// Flush every track and end it cleanly, reporting the first failure.
	fn finish(&mut self) -> Result<()> {
		let mut result = Ok(());
		for stream in self.streams.drain(..).flatten() {
			result = result.and(stream.track.finish().map_err(Error::from));
		}
		result
	}

	/// End every track with `err`, so subscribers see the cause.
	fn abort(&mut self, err: moq_net::Error) {
		for stream in self.streams.drain(..).flatten() {
			stream.track.abort(err.clone());
		}
	}
}

#[cfg(test)]
mod tests {
	use std::time::Duration;

	use super::*;
	use crate::fake::{self, Media, Server};

	/// Real sockets, so a wall-clock bound on every wait instead of paused time.
	const WAIT: Duration = Duration::from_secs(10);
	/// 30 fps at the RTP video clock.
	const FRAME: u32 = 3000;

	/// A client whose session is placed on its first frame's arrival, unless a test waits for a
	/// sender report.
	fn client(url: Url) -> Result<Client> {
		Ok(Client::new(url)?.waiting(Duration::ZERO))
	}

	impl Client {
		/// Wait up to `wait` after the first frame for a sender report.
		fn waiting(mut self, wait: Duration) -> Self {
			self.report_wait = Some(wait);
			self
		}
	}

	/// Microseconds from the Unix epoch to `wall`, negative before it.
	fn unix_micros(wall: kio::clock::Wall) -> i128 {
		let epoch = kio::clock::Wall::UNIX_EPOCH;
		wall.saturating_duration_since(epoch).as_micros() as i128
			- epoch.saturating_duration_since(wall).as_micros() as i128
	}

	#[expect(
		clippy::disallowed_methods,
		reason = "the watchdog runs on tokio's host timer: tests that install a manual clock advance the ambient one past it"
	)]
	async fn within<T>(what: &str, step: impl Future<Output = T>) -> T {
		tokio::time::timeout(WAIT, step)
			.await
			.unwrap_or_else(|_| panic!("{what} timed out"))
	}

	/// Make the test runtime's clock one only the test moves, so a setup step on a loaded runner
	/// never reaches a deadline. Call it before anything reads the clock.
	fn manual() -> kio::clock::Installed {
		kio::clock::Manual::new().install(&tokio::runtime::Handle::current())
	}

	fn broadcast() -> (moq_net::broadcast::Producer, moq_mux::catalog::Producer) {
		let mut broadcast = moq_net::broadcast::Info::new().produce();
		let catalog = moq_mux::catalog::Producer::new(&mut broadcast, Default::default()).unwrap();
		(broadcast, catalog)
	}

	/// The first catalog snapshot with `video` video and `audio` audio renditions.
	async fn catalog_with(
		catalog: &moq_mux::catalog::Producer,
		video: usize,
		audio: usize,
	) -> moq_mux::catalog::hang::Catalog {
		let mut updates = catalog.consume().unwrap();
		within("the catalog", async {
			loop {
				let snapshot = updates.next().await.expect("catalog update").expect("catalog open");
				if snapshot.video.renditions.len() == video && snapshot.audio.renditions.len() == audio {
					return snapshot;
				}
			}
		})
		.await
	}

	/// Subscribe to `name` from its first group, before it finishes and leaves the broadcast.
	async fn subscribe(
		broadcast: &moq_net::broadcast::Producer,
		(name, container): (String, moq_mux::catalog::hang::Container),
	) -> moq_mux::container::Consumer<moq_mux::catalog::hang::Container> {
		let subscription = moq_net::track::Subscription::default().with_ranges([moq_net::track::Range::from(
			moq_net::track::Start::Live {
				min: Some(Duration::from_secs(60)),
				max: Some(Duration::from_secs(60)),
			},
		)]);
		let track = broadcast
			.consume()
			.track(&name)
			.unwrap()
			.subscribe(subscription)
			.await
			.unwrap();
		moq_mux::container::Consumer::new(track, container)
	}

	/// Every frame left on a track, failing unless it finishes cleanly.
	async fn frames(
		mut reader: moq_mux::container::Consumer<moq_mux::catalog::hang::Container>,
	) -> Vec<moq_mux::container::Frame> {
		let mut frames = Vec::new();
		within("the track to finish", async {
			while let Some(read) = reader.read().await.expect("track finishes cleanly") {
				if let moq_mux::container::Read::Frame { frame, .. } = read {
					frames.push(frame);
				}
			}
		})
		.await;
		frames
	}

	fn video_track(snapshot: &moq_mux::catalog::hang::Catalog) -> (String, moq_mux::catalog::hang::Container) {
		let (name, config) = snapshot.video.renditions.iter().next().unwrap();
		(name.clone(), config.try_into().unwrap())
	}

	fn audio_track(snapshot: &moq_mux::catalog::hang::Catalog) -> (String, moq_mux::catalog::hang::Container) {
		let (name, config) = snapshot.audio.renditions.iter().next().unwrap();
		(name.clone(), config.try_into().unwrap())
	}

	/// H.264 with the parameter sets only in the SDP, plus AAC: nothing publishes before the
	/// first keyframe, which carries the SDP's SPS and PPS in band.
	#[tokio::test]
	async fn h264_and_aac_start_on_a_keyframe() {
		let server = Server::bind(vec![Media::H264 { sprop: true }, Media::Aac]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(1000)).await;
		// Before the first keyframe: dropped, audio included.
		session.aac(1, 1000, b"early").await;
		session.video(0, 1000, &[fake::H264_SLICE]).await;
		// Only the slice in band; the ingest inserts the SDP's parameter sets.
		session.video(0, 1000 + FRAME, &[fake::H264_IDR]).await;
		session.aac(1, 1000 + 2048, b"audio").await;
		session.video(0, 1000 + 2 * FRAME, &[fake::H264_SLICE]).await;

		let snapshot = catalog_with(&catalog, 1, 1).await;
		let video = snapshot.video.renditions.values().next().unwrap();
		let hang::catalog::VideoCodec::H264(h264) = &video.codec else {
			panic!("expected H.264, got {:?}", video.codec);
		};
		assert!(h264.inline, "parameter sets ride in band");
		assert_eq!((h264.profile, h264.level), (0x42, 0x0d));
		assert_eq!((video.coded_width, video.coded_height), (Some(320), Some(240)));
		let audio = snapshot.audio.renditions.values().next().unwrap();
		assert!(matches!(audio.codec, hang::catalog::AudioCodec::AAC(_)));
		assert_eq!((audio.sample_rate, audio.channel_count), (48_000, 2));

		let video = subscribe(&broadcast, video_track(&snapshot)).await;
		let audio = subscribe(&broadcast, audio_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let video = frames(video).await;
		assert_eq!(video.len(), 2, "the slice before the keyframe never publishes");
		assert!(video[0].keyframe);
		assert_eq!(
			video[0].timestamp.as_micros().unwrap(),
			33_333,
			"one frame past the session start"
		);
		let sps = [&[0, 0, 0, 1], fake::H264_SPS].concat();
		assert!(
			video[0].payload.windows(sps.len()).any(|window| window == sps),
			"the keyframe carries the SDP's SPS"
		);
		assert!(!video[1].keyframe);

		let audio = frames(audio).await;
		assert_eq!(audio.len(), 1, "audio before the keyframe never publishes");
		assert_eq!(audio[0].payload.as_ref(), b"audio");
		assert_eq!(
			audio[0].timestamp.as_micros().unwrap(),
			42_666,
			"two AAC frames past the session start"
		);
	}

	/// An H.264 recovery point starts the broadcast, though retina flags only an IDR as a
	/// keyframe, and it carries the SDP's parameter sets.
	#[tokio::test]
	async fn h264_starts_on_a_recovery_point() {
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_SLICE]).await;
		session.video(0, FRAME, &[fake::H264_RECOVERY, fake::H264_SLICE]).await;

		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.video(0, 2 * FRAME, &[fake::H264_SLICE]).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(frames.len(), 2, "the slice before the recovery point never publishes");
		assert!(frames[0].keyframe && !frames[1].keyframe);
		let sps = [&[0, 0, 0, 1], fake::H264_SPS].concat();
		assert!(
			frames[0].payload.windows(sps.len()).any(|window| window == sps),
			"the recovery point carries the SDP's SPS"
		);
		assert!(
			!frames[1].payload.windows(sps.len()).any(|window| window == sps),
			"a delta frame carries no parameter sets"
		);
	}

	/// An open-GOP CRA starts the broadcast, though retina flags only an IDR as a keyframe and
	/// strips the parameter sets it carries. Its leading pictures, displayed before the session
	/// started, are dropped rather than taken for a jump.
	#[tokio::test]
	async fn h265_starts_on_a_cra() {
		let server = Server::bind(vec![Media::H265]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(FRAME)).await;
		session
			.video(
				0,
				FRAME,
				&[fake::H265_VPS, fake::H265_SPS, fake::H265_PPS, fake::H265_CRA],
			)
			.await;

		let snapshot = catalog_with(&catalog, 1, 0).await;
		let video = snapshot.video.renditions.values().next().unwrap();
		assert!(
			matches!(video.codec, hang::catalog::VideoCodec::H265(_)),
			"{:?}",
			video.codec
		);
		assert_eq!((video.coded_width, video.coded_height), (Some(320), Some(240)));

		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.video(0, 0, &[fake::H265_RASL]).await;
		session.video(0, 2 * FRAME, &[fake::H265_TRAIL]).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(frames.len(), 2, "the leading picture never publishes");
		assert!(frames[0].keyframe && !frames[1].keyframe);
		let sps = [&[0, 0, 0, 1], fake::H265_SPS].concat();
		assert!(
			frames[0].payload.windows(sps.len()).any(|window| window == sps),
			"the CRA carries its parameter sets"
		);
	}

	/// G.711, common on cameras, is skipped with one warning and the broadcast goes on
	/// video-only.
	#[tokio::test]
	#[tracing_test::traced_test]
	async fn g711_is_skipped() {
		let server = Server::bind(vec![Media::H264 { sprop: true }, Media::Pcmu]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		catalog_with(&catalog, 1, 0).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		assert!(logs_contain("audio/pcmu"));
	}

	#[tokio::test]
	async fn no_supported_stream_is_refused() {
		let server = Server::bind(vec![Media::Pcmu]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });
		// DESCRIBE only: the client gives up before SETUP, so `accept` never sees a PLAY.
		let _accept = tokio::spawn(async move { server.accept(0).await });
		let err = within("the pull", pull).await.unwrap().unwrap_err();
		assert!(matches!(err, Error::NoSupportedStream(_)), "{err}");
	}

	/// A camera resetting its RTP clock mid-session ends the pull with `Jumped`, finishing
	/// the tracks cleanly with only the frames before the jump.
	#[tokio::test]
	async fn a_timestamp_jump_ends_the_session() {
		// Parameter sets in band only, as many cameras send them.
		let server = Server::bind(vec![Media::H264 { sprop: false }]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(1000)).await;
		session
			.video(0, 1000, &[fake::H264_SPS, fake::H264_PPS, fake::H264_IDR])
			.await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let video = subscribe(&broadcast, video_track(&snapshot)).await;
		session.video(0, 1000 + FRAME, &[fake::H264_SLICE]).await;
		session.video(0, 0x8000_0000, &[fake::H264_IDR]).await;

		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Jumped);
		assert_eq!(frames(video).await.len(), 2);
	}

	/// Two sessions (a camera's SD and HD URLs) publish renditions of one broadcast. When one
	/// session's timeline jumps, the caller ends the broadcast and restarts both under a fresh
	/// instance, each new broadcast with its own catalog.
	#[tokio::test]
	async fn two_sessions_restart_together_on_a_jump() {
		let (origin, driver) = moq_net::origin::Producer::new(moq_net::origin::Config::default());
		tokio::spawn(moq_net::time::run(driver));
		let sd = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let hd = Server::bind(vec![Media::H265]).await;
		let sd_client = client(sd.url()).unwrap();
		let hd_client = client(hd.url()).unwrap();

		let (published_tx, mut published) = tokio::sync::mpsc::unbounded_channel();
		let caller = tokio::spawn({
			let origin = origin.clone();
			async move {
				let mut ends = Vec::new();
				for _ in 0..2 {
					let route = origin
						.route("camera", moq_net::origin::RouteOptions::default())
						.unwrap();
					let broadcast = route.broadcast();
					let mut catalog =
						moq_mux::catalog::Producer::new(&mut broadcast.clone(), Default::default()).unwrap();
					published_tx
						.send((route.instance(), broadcast.clone(), catalog.clone()))
						.unwrap();
					// The first session to return ends the run; dropping the other's pull
					// finishes its tracks.
					let end = tokio::select! {
						end = sd_client.pull(broadcast, &catalog) => end,
						end = hd_client.pull(broadcast, &catalog) => end,
					};
					ends.push(end.unwrap());
					catalog.finish().unwrap();
					broadcast.close();
				}
				ends
			}
		});

		let mut instances = Vec::new();
		for run in 0..2 {
			let (instance, broadcast, catalog) = within("the broadcast", published.recv()).await.unwrap();
			instances.push(instance);
			let mut sd_session = within("SD PLAY", sd.accept(500)).await;
			let mut hd_session = within("HD PLAY", hd.accept(9000)).await;
			sd_session.video(0, 500, &[fake::H264_IDR]).await;
			hd_session.video(0, 9000, &[fake::H265_IDR]).await;

			let snapshot = catalog_with(&catalog, 2, 0).await;
			if run == 0 {
				let mut readers = Vec::new();
				for (name, config) in &snapshot.video.renditions {
					readers.push(subscribe(&broadcast, (name.clone(), config.try_into().unwrap())).await);
				}
				sd_session.video(0, 500 + FRAME, &[fake::H264_SLICE]).await;
				hd_session.video(0, 0x8000_0000, &[fake::H265_IDR]).await;
				// Both sessions' tracks finish cleanly: the jumped one's and the dropped one's.
				for reader in readers {
					assert!(frames(reader).await[0].keyframe);
				}
			} else {
				sd_session.close().await;
				hd_session.close().await;
			}
		}

		let ends = within("the caller", caller).await.unwrap();
		assert_eq!(ends[0], End::Jumped);
		assert_eq!(ends[1], End::Closed);
		assert_ne!(instances[1], instances[0], "the restart mints a fresh instance");
	}

	/// Credentials come out of the URL, never reach a log, and still authenticate.
	#[tokio::test]
	#[tracing_test::traced_test]
	async fn credentials_ride_the_userinfo() {
		let server = Server::bind(vec![Media::H264 { sprop: true }])
			.await
			.with_basic_auth("admin", "p@ss word");
		let mut url = server.url();
		url.set_username("admin").unwrap();
		url.set_password(Some("p%40ss%20word")).unwrap();

		let client = client(url).unwrap();
		let debug = format!("{client:?}");
		assert!(!debug.contains("admin") && !debug.contains("ss"), "{debug}");
		assert!(client.url.username().is_empty() && client.url.password().is_none());

		let (broadcast, catalog) = broadcast();
		let pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });
		let session = within("PLAY", server.accept(0)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);
		assert!(logs_contain("RTSP session playing"));
		assert!(!logs_contain("p@ss") && !logs_contain("p%40ss"));
	}

	/// A camera that keeps the session up but stops sending media ends the pull, so a caller
	/// redials it rather than waiting forever.
	#[tokio::test]
	async fn a_silent_session_stalls() {
		let clock = manual();
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let mut reader = subscribe(&broadcast, video_track(&snapshot)).await;

		// Just short of the deadline the session is still up, so a frame still publishes.
		clock.advance(super::TIMEOUT - Duration::from_millis(1));
		session.video(0, FRAME, &[fake::H264_SLICE]).await;
		within("both frames", async {
			let mut frames = 0;
			while frames < 2 {
				let read = reader.read().await.unwrap().expect("track open");
				frames += usize::from(matches!(read, moq_mux::container::Read::Frame { .. }));
			}
		})
		.await;

		clock.advance(super::TIMEOUT);
		let err = within("the pull", pull).await.unwrap().unwrap_err();
		assert!(
			matches!(err, Error::Stalled(timeout) if timeout == super::TIMEOUT),
			"{err}"
		);
	}

	/// A camera that stops sending media but keeps sending RTCP reports still stalls.
	#[tokio::test]
	async fn rtcp_alone_stalls() {
		let clock = manual();
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let catalog = catalog.clone();
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		// Published once the frame armed the deadline.
		catalog_with(&catalog, 1, 0).await;
		for _ in 0..4 {
			session.rtcp(0, 0).await;
			// On this current-thread runtime a yield resumes only after the I/O driver polls, so
			// the pull sees the report as readable before the clock moves. Its timeout polls the
			// read before the deadline, so it takes the report even when the deadline is due.
			tokio::task::yield_now().await;
			clock.advance(super::TIMEOUT / 4);
		}
		let err = within("the pull", pull).await.unwrap().unwrap_err();
		assert!(
			matches!(err, Error::Stalled(timeout) if timeout == super::TIMEOUT),
			"{err}"
		);
	}

	/// A video stream that never sends a keyframe would withhold the catalog while its audio
	/// keeps the session alive, so the pull fails rather than idling.
	#[tokio::test]
	async fn a_stream_without_keyframes_stalls() {
		let clock = manual();
		let server = Server::bind(vec![Media::H264 { sprop: true }, Media::Aac]).await;
		let (broadcast, catalog) = broadcast();
		let mut client = client(server.url()).unwrap();
		// Lengthened so the clock can run well ahead of the frames read and only the keyframe
		// deadline fires.
		client.timeout = 10 * KEYFRAME_TIMEOUT;
		let mut pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });

		let mut session = within("PLAY", server.accept(0)).await;
		let err = within("the pull", async {
			for frame in 0.. {
				session.video(0, frame * FRAME, &[fake::H264_SLICE]).await;
				session.aac(1, frame * 1600, b"audio").await;
				clock.advance(Duration::from_secs(1));
				tokio::select! {
					result = &mut pull => return result.unwrap().unwrap_err(),
					// A driver turn, so the pull can read what was sent.
					_ = kio::clock::sleep(Duration::ZERO) => {}
				}
			}
			unreachable!()
		})
		.await;
		assert!(
			matches!(err, Error::Stalled(timeout) if timeout == KEYFRAME_TIMEOUT),
			"{err}"
		);
	}

	/// A stream that pauses, such as motion-triggered video beside continuous audio, returns as
	/// far ahead as it paused, which continues the timeline rather than jumping it.
	#[tokio::test]
	async fn a_paused_stream_is_not_a_jump() {
		kio::clock::host_time(); // real RTSP sockets, and the pause is real time
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let mut client = client(server.url()).unwrap();
		client.max_forward = Duration::from_millis(100);
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		// Half a second of silence, well past the 100ms allowance, then the matching timestamp.
		kio::clock::sleep(Duration::from_millis(500)).await;
		session.video(0, 45_000, &[fake::H264_SLICE]).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);
		assert_eq!(frames(reader).await.len(), 2);
	}

	/// A lost packet holds the video until the next keyframe rather than publishing pictures
	/// whose references never arrived.
	#[tokio::test]
	async fn packet_loss_waits_for_a_keyframe() {
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.video(0, FRAME, &[fake::H264_SLICE]).await;
		session.lose(0, 1);
		session.video(0, 3 * FRAME, &[fake::H264_SLICE]).await;
		session.video(0, 4 * FRAME, &[fake::H264_SLICE]).await;
		// A keyframe that itself lost a packet is damaged too.
		session.lose(0, 1);
		session.video(0, 5 * FRAME, &[fake::H264_IDR]).await;
		session.video(0, 6 * FRAME, &[fake::H264_IDR]).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		let keyframes: Vec<bool> = frames.iter().map(|frame| frame.keyframe).collect();
		assert_eq!(
			keyframes,
			[true, false, true],
			"the slices after the loss never publish"
		);
	}

	/// A first keyframe that lost a packet is damaged, so the track opens on the next one.
	#[tokio::test]
	async fn a_lossy_first_keyframe_is_dropped() {
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_SLICE]).await;
		session.lose(0, 1);
		session.video(0, 2 * FRAME, &[fake::H264_IDR]).await;
		session.video(0, 3 * FRAME, &[fake::H264_IDR]).await;

		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);
		let frames = frames(reader).await;
		assert_eq!(frames.len(), 1, "the lossy keyframe never publishes");
		assert_eq!(
			frames[0].timestamp.as_micros().unwrap(),
			100_000,
			"the track opens on the clean keyframe"
		);
	}

	/// The wall time `frame` advertises under the catalog's `sync.clock`, in Unix microseconds.
	fn wall_of(snapshot: &moq_mux::catalog::hang::Catalog, frame: &moq_mux::container::Frame) -> i128 {
		let clock = snapshot.sync.clock.expect("the catalog advertises its clock");
		unix_micros(clock.wall_clock(frame.timestamp).unwrap())
	}

	/// The wall clock now, in Unix microseconds.
	fn wall_now() -> i128 {
		unix_micros(kio::clock::wall())
	}

	/// `unix` microseconds as an NTP timestamp.
	fn ntp(unix: i128) -> u64 {
		let secs = (unix.div_euclid(1_000_000) + NTP_UNIX) as u64;
		let frac = ((unix.rem_euclid(1_000_000) as u64) << 32).div_ceil(1_000_000);
		(secs << 32) | frac
	}

	/// Any NTP time a camera sends reads as a wall time or none, never a panic: before 1970 is
	/// none, and zero (a clock never set) is the next era.
	#[test]
	fn ntp_times_map_or_refuse() {
		let unix = 1_764_000_000_123_456;
		assert_eq!(ntp_wall(ntp(unix)).map(unix_micros), Some(unix));
		assert_eq!(ntp_wall((NTP_UNIX as u64 - 1) << 32), None, "1969");
		assert_eq!(ntp_wall(1 << 63), None, "1968");
		assert_eq!(
			ntp_wall(0).map(unix_micros),
			Some(((1i128 << 32) - NTP_UNIX) * 1_000_000),
			"2036"
		);
		for ntp in [u64::MAX, (1 << 63) - 1, 1] {
			ntp_wall(ntp);
		}
	}

	const H265_KEYFRAME: &[&[u8]] = &[fake::H265_VPS, fake::H265_SPS, fake::H265_PPS, fake::H265_IDR];

	/// Pull `server` into a fresh catalog with `client`, returning the broadcast, its catalog, and
	/// the pull.
	fn pull(
		client: Client,
	) -> (
		moq_net::broadcast::Producer,
		moq_mux::catalog::Producer,
		tokio::task::JoinHandle<Result<End>>,
	) {
		let (broadcast, catalog) = broadcast();
		let pull = tokio::spawn({
			let (broadcast, catalog) = (broadcast.clone(), catalog.clone());
			async move { client.pull(&broadcast, &catalog).await }
		});
		(broadcast, catalog, pull)
	}

	/// Without a sender report, `sync.clock` places the session's first frame at its arrival,
	/// while its timestamps stay the session's own.
	#[tokio::test]
	async fn the_catalog_clock_times_a_frame_at_its_arrival() {
		let server = Server::bind(vec![Media::H265]).await;
		let (broadcast, catalog, pull) = pull(client(server.url()).unwrap());

		let mut session = within("PLAY", server.accept(0)).await;
		let sent = wall_now();
		session.video(0, 0, H265_KEYFRAME).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let listed = wall_now();
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.video(0, FRAME, &[fake::H265_TRAIL]).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(
			frames[0].timestamp.as_micros().unwrap(),
			0,
			"the session's own timestamps"
		);
		let wall = wall_of(&snapshot, &frames[0]);
		assert!(
			(sent..=listed).contains(&wall),
			"the first frame lands {} µs after it was sent, {} µs before the catalog listed it",
			wall - sent,
			listed - wall
		);
		assert_eq!(wall_of(&snapshot, &frames[1]) - wall, 33_333, "one frame later");
	}

	/// A camera's sender report times the session at capture: `sync.clock` places each frame where
	/// the camera's NTP clock says it was taken, not when it arrived. Waiting for the report holds
	/// the opening keyframe rather than dropping it.
	#[tokio::test]
	async fn a_sender_report_times_the_session_at_capture() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H265]).await;
		let client = client(server.url()).unwrap().waiting(WAIT);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(1000)).await;
		session.video(0, 1000, H265_KEYFRAME).await;
		// The camera took the opening keyframe 300 ms before it arrived, on its NTP clock; its
		// report names the RTP time a second earlier.
		let captured = wall_now() - 300_000;
		session
			.report(0, 1000u32.wrapping_sub(90_000), ntp(captured - 1_000_000))
			.await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.video(0, 1000 + FRAME, &[fake::H265_TRAIL]).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(frames.len(), 2, "the keyframe held for the report publishes");
		assert!(frames[0].keyframe);
		assert_eq!(
			frames[0].timestamp.as_micros().unwrap(),
			0,
			"the session's own timestamps"
		);
		assert_eq!(
			wall_of(&snapshot, &frames[0]),
			captured,
			"timed at the camera's capture"
		);
		assert_eq!(wall_of(&snapshot, &frames[1]), captured + 33_333);
	}

	/// A camera without RTCP that falls silent during the report wait is still placed when the wait
	/// ends, rather than holding its catalog until a frame that never comes.
	#[tokio::test]
	async fn a_silent_camera_is_placed_when_the_report_wait_ends() {
		// Real sockets stamp each frame's arrival on the host clock, so the wait runs on it too.
		kio::clock::host_time();
		const REPORT_WAIT: Duration = Duration::from_millis(200);
		let server = Server::bind(vec![Media::H265]).await;
		let (broadcast, catalog, pull) = pull(client(server.url()).unwrap().waiting(REPORT_WAIT));

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, H265_KEYFRAME).await;
		session.video(0, FRAME, &[fake::H265_TRAIL]).await;
		// Nothing follows, so only the end of the wait can publish the catalog.
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let published = wall_now();
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(frames.len(), 2, "both held frames publish");
		let arrived = wall_of(&snapshot, &frames[0]);
		assert!(
			published - arrived >= REPORT_WAIT.as_micros() as i128,
			"published {} µs after the first frame arrived, before the wait was over",
			published - arrived
		);
		assert_eq!(wall_of(&snapshot, &frames[1]) - arrived, 33_333, "one frame later");
	}

	/// A report far from the frame's arrival is a camera clock set wrong: the session is timed on
	/// arrival, and the wait ends there.
	#[tokio::test]
	async fn a_sender_report_far_from_arrival_is_ignored() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H265]).await;
		let client = client(server.url()).unwrap().waiting(10 * WAIT);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		let sent = wall_now();
		session.video(0, 0, H265_KEYFRAME).await;
		// Captured 6 s before its arrival: longer than any camera takes.
		session.report(0, 0, ntp(sent - 6_000_000)).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let listed = wall_now();
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let wall = wall_of(&snapshot, &frames(reader).await[0]);
		assert!(
			(sent..=listed).contains(&wall),
			"timed {} µs after it was sent",
			wall - sent
		);
	}

	/// A camera whose clock was never set reports NTP time zero: no waiting on it either.
	#[tokio::test]
	async fn a_camera_clock_never_set_ends_the_wait() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H265]).await;
		let client = client(server.url()).unwrap().waiting(10 * WAIT);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		let sent = wall_now();
		session.video(0, 0, H265_KEYFRAME).await;
		session.rtcp(0, 0).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let listed = wall_now();
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let wall = wall_of(&snapshot, &frames(reader).await[0]);
		assert!(
			(sent..=listed).contains(&wall),
			"timed {} µs after it was sent",
			wall - sent
		);
	}

	/// Without a report by the end of the wait, the session is timed on its first frame's arrival,
	/// every frame held meanwhile included.
	#[tokio::test]
	async fn the_wait_for_a_report_ends_on_arrival() {
		kio::clock::host_time();
		let server = Server::bind(vec![Media::H265]).await;
		let wait = Duration::from_millis(200);
		let client = client(server.url()).unwrap().waiting(wait);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		let sent = wall_now();
		session.video(0, 0, H265_KEYFRAME).await;
		kio::clock::sleep(wait).await;
		session.video(0, FRAME, &[fake::H265_TRAIL]).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(frames.len(), 2, "the frames held during the wait publish");
		let wall = wall_of(&snapshot, &frames[0]);
		assert!(wall >= sent, "timed {} µs before the first frame was sent", sent - wall);
	}

	/// A session ending during its report wait still publishes the frames it held.
	#[tokio::test]
	async fn a_session_ending_during_its_report_wait_publishes_what_it_held() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H265]).await;
		let client = client(server.url()).unwrap().waiting(10 * WAIT);
		let (broadcast, _catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		// Read from before the end, as no catalog lists the track until the session is placed:
		// `0.hev1` is the first name `unique_track` mints for H.265 on a fresh broadcast.
		let reader = subscribe(
			&broadcast,
			(
				"0.hev1".to_string(),
				moq_mux::catalog::hang::Container::Legacy(moq_mux::container::Kind::Video),
			),
		)
		.await;
		session.video(0, 0, H265_KEYFRAME).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);
		assert_eq!(frames(reader).await.len(), 1, "the held keyframe publishes");
	}

	/// A held keyframe publishes under the parameter sets it arrived with, even when a frame after
	/// it changes them before the session is placed.
	#[tokio::test]
	async fn a_held_keyframe_keeps_its_parameter_sets() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let client = client(server.url()).unwrap().waiting(10 * WAIT);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		// The next frame brings a new SPS, at another level, while the keyframe is still held.
		let mut changed = fake::H264_SPS.to_vec();
		changed[3] = 0x1e;
		session
			.video(0, FRAME, &[&changed, fake::H264_PPS, fake::H264_SLICE])
			.await;
		session.report(0, 0, ntp(wall_now() - 300_000)).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		let contains = |payload: &[u8], sps: &[u8]| {
			let sps = [&[0, 0, 0, 1], sps].concat();
			payload.windows(sps.len()).any(|window| window == sps)
		};
		assert!(
			contains(&frames[0].payload, fake::H264_SPS),
			"the keyframe keeps the SDP's SPS"
		);
		assert!(
			!contains(&frames[0].payload, &changed),
			"not the SPS a later frame brought"
		);
	}

	/// AAC alone lists its rendition before any frame, yet the catalog still waits for the
	/// session to be placed.
	#[tokio::test]
	async fn an_audio_only_session_is_timed_on_its_first_frame() {
		let server = Server::bind(vec![Media::Aac]).await;
		let (broadcast, catalog, pull) = pull(client(server.url()).unwrap());

		let mut session = within("PLAY", server.accept(0)).await;
		let sent = wall_now();
		session.aac(0, 0, b"audio").await;
		let snapshot = catalog_with(&catalog, 0, 1).await;
		let listed = wall_now();
		let reader = subscribe(&broadcast, audio_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let wall = wall_of(&snapshot, &frames(reader).await[0]);
		assert!(
			(sent..=listed).contains(&wall),
			"timed {} µs after it was sent",
			wall - sent
		);
	}

	/// A camera clock slightly ahead of this host's says a frame was captured after it arrived:
	/// the session is timed at its arrival rather than in the future.
	#[tokio::test]
	async fn a_camera_clock_slightly_ahead_is_timed_at_arrival() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H265]).await;
		let client = client(server.url()).unwrap().waiting(10 * WAIT);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		let sent = wall_now();
		session.video(0, 0, H265_KEYFRAME).await;
		session.report(0, 0, ntp(wall_now() + 200_000)).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let listed = wall_now();
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let wall = wall_of(&snapshot, &frames(reader).await[0]);
		assert!(
			(sent..=listed).contains(&wall),
			"timed {} µs after it was sent",
			wall - sent
		);
	}

	/// A report on the audio stream times the whole session, video included, so the video's
	/// keyframe never waits for a report of its own.
	#[tokio::test]
	async fn an_audio_report_times_the_video_too() {
		kio::clock::host_time(); // real RTSP sockets, and the report wait is real time
		let server = Server::bind(vec![Media::H264 { sprop: true }, Media::Aac]).await;
		let client = client(server.url()).unwrap().waiting(10 * WAIT);
		let (broadcast, catalog, pull) = pull(client);

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		session.aac(1, 0, b"audio").await;
		// The audio's RTP time 0, on its 48 kHz clock, was captured 300 ms ago.
		let captured = wall_now() - 300_000;
		session.report(1, 0, ntp(captured)).await;
		let snapshot = catalog_with(&catalog, 1, 1).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		let frames = frames(reader).await;
		assert_eq!(frames[0].timestamp.as_micros().unwrap(), 0);
		assert_eq!(
			wall_of(&snapshot, &frames[0]),
			captured,
			"the video lands on the audio's capture time"
		);
	}

	/// A catalog whose clock was fixed before the pull, such as one shared by several cameras,
	/// cannot be moved: the session keeps its timestamps.
	#[tokio::test]
	async fn a_clock_fixed_before_the_session_is_left_alone() {
		let server = Server::bind(vec![Media::H265]).await;
		let (broadcast, catalog, pull) = pull(client(server.url()).unwrap());
		let _fixed = catalog.clock();

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, H265_KEYFRAME).await;
		let snapshot = catalog_with(&catalog, 1, 0).await;
		let reader = subscribe(&broadcast, video_track(&snapshot)).await;
		session.close().await;
		assert_eq!(within("the pull", pull).await.unwrap().unwrap(), End::Closed);

		assert_eq!(frames(reader).await[0].timestamp.as_micros().unwrap(), 0);
	}

	/// Video held after a loss still has to see a keyframe in time, or the pull fails rather
	/// than leaving the broadcast frozen.
	#[tokio::test]
	async fn held_video_without_a_keyframe_stalls() {
		let clock = manual();
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await;
		let (broadcast, catalog) = broadcast();
		let mut client = client(server.url()).unwrap();
		// Lengthened so the clock can run well ahead of the frames read and only the keyframe
		// deadline fires.
		client.timeout = 10 * KEYFRAME_TIMEOUT;
		let mut pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });

		let mut session = within("PLAY", server.accept(0)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		session.lose(0, 1);
		let err = within("the pull", async {
			for frame in 2.. {
				session.video(0, frame * FRAME, &[fake::H264_SLICE]).await;
				clock.advance(Duration::from_secs(1));
				tokio::select! {
					result = &mut pull => return result.unwrap().unwrap_err(),
					// A driver turn, so the pull can read what was sent.
					_ = kio::clock::sleep(Duration::ZERO) => {}
				}
			}
			unreachable!()
		})
		.await;
		assert!(
			matches!(err, Error::Stalled(timeout) if timeout == KEYFRAME_TIMEOUT),
			"{err}"
		);
	}

	/// A server whose `rtptime` lands well after its packets would never publish anything, so
	/// the pull fails rather than idling.
	#[tokio::test]
	async fn a_wrong_rtptime_fails() {
		// retina reads `rtptime` only when playing several streams.
		let server = Server::bind(vec![Media::H264 { sprop: true }, Media::Aac]).await;
		let (broadcast, catalog) = broadcast();
		let client = client(server.url()).unwrap();
		let pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });

		let mut session = within("PLAY", server.accept(10 * 90_000)).await;
		session.video(0, 0, &[fake::H264_IDR]).await;
		let err = within("the pull", pull).await.unwrap().unwrap_err();
		assert!(matches!(err, Error::Rtsp(_)), "{err}");
	}

	#[tokio::test]
	async fn wrong_credentials_are_unauthorized() {
		let server = Server::bind(vec![Media::H264 { sprop: true }])
			.await
			.with_basic_auth("admin", "secret");
		let mut url = server.url();
		url.set_username("admin").unwrap();
		url.set_password(Some("wrong")).unwrap();

		let client = client(url).unwrap();
		let (broadcast, catalog) = broadcast();
		let pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });
		let _accept = tokio::spawn(async move { server.accept(0).await });
		let err = within("the pull", pull).await.unwrap().unwrap_err();
		assert!(matches!(err, Error::Unauthorized(_)), "{err}");
	}

	#[tokio::test]
	async fn forbidden_is_unauthorized() {
		let server = Server::bind(vec![Media::H264 { sprop: true }]).await.forbidden();
		let client = client(server.url()).unwrap();
		let (broadcast, catalog) = broadcast();
		let pull = tokio::spawn(async move { client.pull(&broadcast, &catalog).await });
		let _accept = tokio::spawn(async move { server.accept(0).await });
		let err = within("the pull", pull).await.unwrap().unwrap_err();
		assert!(matches!(err, Error::Unauthorized(_)), "{err}");
	}

	#[test]
	fn only_rtsp_urls_are_accepted() {
		assert!(matches!(
			client("http://camera/stream".parse().unwrap()),
			Err(Error::InvalidUrl(_))
		));
	}
}
