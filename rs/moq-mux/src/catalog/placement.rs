//! Placing an RTP session's timebase on the wall clock from its RTCP sender reports.

use std::time::Duration;

use kio::clock::{Instant, Wall};

use super::hang::CatalogExt;
use super::{Reserved, Timebase};

/// How long a placement waits for a sender report by default: RFC 3550's minimum report
/// interval, which a sender keeping it reports within.
const REPORT_INTERVAL: Duration = Duration::from_secs(5);

/// The most frames a placement holds: beyond it, the session is placed at once rather than held
/// for a report, so a sender's frame rate never sizes what the wait keeps.
const MAX_HELD: usize = 1024;

/// How long before its arrival a sender report may say a frame was captured: longer than any
/// encoder and network take. Further back is a sender clock set wrong, or never set.
const MAX_CAPTURE_LATENCY: Duration = Duration::from_secs(5);

/// How far after its arrival a sender report may say a frame was captured: a sender clock slightly
/// ahead of this host's, timed at its arrival instead. Further ahead is a clock set wrong.
const MAX_CAPTURE_LEAD: Duration = Duration::from_secs(1);

/// Places an RTP session's [`Timebase`] on the wall clock before any of its frames is published.
///
/// The session's frames land where its first usable RTCP sender report says they were captured,
/// or, when no report comes within the wait after its first frame (a sender without RTCP, or with
/// its clock set wrong), where that frame arrived. Until then the catalog is withheld, so nothing
/// fixes its clock, and the frames are held as [frames](Frame), each with whatever state the caller gave it,
/// such as the parameter sets its stream had then. Only what a decoder needs is kept: every stream
/// from the latest point all of them can start at, the earliest of their latest keyframes, so the
/// audio held covers the video held.
///
/// On a catalog whose clock was fixed beforehand, the placement gives the timebase an offset onto
/// that clock rather than moving it; frames land there through importers that shift by their
/// timebase.
///
/// Each step consumes the placement and returns it while it still waits, or the frames it held
/// once it placed the session. The wait is checked as frames arrive; a caller whose frames may
/// stop wakes at [`deadline`](Self::deadline) and calls [`expire`](Self::expire), and
/// [`finish`](Self::finish) places a session that ends before it.
pub struct Placement<K, T, E: CatalogExt = ()> {
	/// The timebase to place, and the reservation that withholds its catalog meanwhile, so nothing
	/// fixes its clock before the placement. Boxed, so a [`Step`] stays small.
	timebase: Box<(Timebase<E>, Reserved<E>)>,
	wait: Duration,
	/// Each stream's latest sender report.
	reports: Vec<(K, Report)>,
	hold: Hold<K, T>,
}

/// What a [`Placement`] step left.
pub enum Step<K, T, E: CatalogExt = ()> {
	/// Not placed yet: the frames stay held.
	Waiting(Placement<K, T, E>),
	/// Placed: the frames it held, in arrival order, to publish before any later one.
	Placed(Vec<T>),
}

/// A frame for a [`Placement`] to hold.
pub struct Frame<K, T> {
	/// The stream it belongs to.
	pub stream: K,
	/// Its timestamp, on the timeline every stream of the session shares.
	pub pts: moq_net::Timestamp,
	/// When it arrived.
	pub arrival: Instant,
	/// Whether a decoder can start at it, as at every audio frame.
	pub keyframe: bool,
	/// The caller's own value, returned once the session is placed.
	pub item: T,
}

enum Hold<K, T> {
	Empty,
	/// `since` is when the first frame arrived, which the wait counts from: dropping that frame
	/// for a later keyframe does not restart the wait.
	Holding {
		since: Instant,
		frames: Vec<Frame<K, T>>,
	},
}

/// A sender report: the NTP time the sender gave a stream's RTP time.
#[derive(Clone, Copy)]
struct Report {
	pts: moq_net::Timestamp,
	wall: Wall,
}

impl<K: Copy + Eq, T, E: CatalogExt> Placement<K, T, E> {
	/// Place `timebase`, waiting one RTCP report interval after the first frame for a sender report.
	pub fn new(timebase: Timebase<E>) -> Self {
		Self {
			timebase: Box::new((timebase.clone(), timebase.reserve())),
			wait: REPORT_INTERVAL,
			reports: Vec::new(),
			hold: Hold::Empty,
		}
	}

	/// Wait `wait` after the first frame for a sender report instead.
	pub fn with_wait(mut self, wait: Duration) -> Self {
		self.wait = wait;
		self
	}

	/// Take a sender report: `stream`'s RTP time `pts`, counted like its frames', is the sender's
	/// NTP time `wall`.
	pub fn report(mut self, stream: K, pts: moq_net::Timestamp, wall: Wall) -> crate::Result<Step<K, T, E>> {
		let report = Report { pts, wall };
		match self.reports.iter_mut().find(|(id, _)| *id == stream) {
			Some((_, slot)) => *slot = report,
			None => self.reports.push((stream, report)),
		}
		self.place(false)
	}

	/// Take a frame.
	pub fn hold(mut self, frame: Frame<K, T>) -> crate::Result<Step<K, T, E>> {
		let frames = match &mut self.hold {
			Hold::Holding { frames, .. } => frames,
			Hold::Empty => {
				self.hold = Hold::Holding {
					since: frame.arrival,
					frames: Vec::new(),
				};
				let Hold::Holding { frames, .. } = &mut self.hold else {
					unreachable!("just set");
				};
				frames
			}
		};
		frames.push(frame);
		prune(frames)?;
		let full = frames.len() >= MAX_HELD;
		self.place(full)
	}

	/// When the wait ends, while it holds a frame: the caller wakes then to [`expire`](Self::expire)
	/// the wait, as no frame may arrive to end it.
	pub fn deadline(&self) -> Option<Instant> {
		match &self.hold {
			Hold::Holding { since, .. } => Some(since.saturating_add(self.wait)),
			Hold::Empty => None,
		}
	}

	/// Place a session whose wait is over at its first held frame's arrival: for a wait no frame
	/// arrived to end. It keeps waiting before the [`deadline`](Self::deadline).
	pub fn expire(self) -> crate::Result<Step<K, T, E>> {
		self.place(false)
	}

	/// Place a session that ends during the wait at its first held frame's arrival, returning what
	/// it held.
	pub fn finish(self) -> crate::Result<Vec<T>> {
		match self.place(true)? {
			Step::Placed(frames) => Ok(frames),
			Step::Waiting(placement) => Ok(placement.release()),
		}
	}

	/// Place the session once it can: on a held frame whose stream has a sender report, or on the
	/// first held frame's arrival once a report proved unusable, the wait is over, or `now` says so.
	fn place(self, now: bool) -> crate::Result<Step<K, T, E>> {
		let Hold::Holding { since, frames } = &self.hold else {
			return Ok(Step::Waiting(self));
		};
		let Some(first) = frames.first() else {
			return Ok(Step::Waiting(self));
		};
		let host = kio::clock::now();
		// A host whose wall clock is unset has nothing to place on: the timebase then anchors on
		// its first frame's release, as any importer's does.
		let Some(wall) = crate::clock::host_wall() else {
			return Ok(Step::Placed(self.release()));
		};
		let arrived = |at: Instant| wall - host.saturating_duration_since(at);

		let report = frames.iter().find_map(|frame| {
			let (_, report) = self.reports.iter().find(|(id, _)| *id == frame.stream)?;
			Some((frame, *report))
		});
		let placement = match report {
			Some((frame, report)) => match captured(report, frame.pts, arrived(frame.arrival))? {
				Some(captured) => Some((frame.pts, captured)),
				None => Some((first.pts, arrived(first.arrival))),
			},
			None if now || host.saturating_duration_since(*since) >= self.wait => {
				Some((first.pts, arrived(first.arrival)))
			}
			None => None,
		};
		let Some((pts, wall)) = placement else {
			return Ok(Step::Waiting(self));
		};
		self.timebase.0.place(pts, wall)?;
		Ok(Step::Placed(self.release()))
	}

	/// End the wait, returning the held frames in order.
	fn release(self) -> Vec<T> {
		match self.hold {
			Hold::Holding { frames, .. } => frames.into_iter().map(|frame| frame.item).collect(),
			Hold::Empty => Vec::new(),
		}
	}
}

/// Drop the frames no decoder needs. Every stream starts at its latest keyframe at or before the
/// earliest of the streams' latest keyframes (or, with none there, its first keyframe), and keeps
/// what arrived from it on: a picture reordered before its keyframe still decodes from it. A
/// stream with no keyframe held keeps what it has, as its caller may know a start this flag does
/// not, such as a recovery point; it bounds no other stream.
fn prune<K: Copy + Eq, T>(frames: &mut Vec<Frame<K, T>>) -> crate::Result<()> {
	let mut latest: Vec<(K, u128)> = Vec::new();
	for frame in frames.iter().filter(|frame| frame.keyframe) {
		let at = frame.pts.as_micros()?;
		match latest.iter_mut().find(|(stream, _)| *stream == frame.stream) {
			Some((_, slot)) => *slot = at,
			None => latest.push((frame.stream, at)),
		}
	}
	let Some(start) = latest.iter().map(|(_, at)| *at).min() else {
		return Ok(());
	};

	// Each stream's starting keyframe, by its index in arrival order.
	let mut starts: Vec<(K, usize, u128)> = Vec::new();
	for (index, frame) in frames.iter().enumerate().filter(|(_, frame)| frame.keyframe) {
		let at = frame.pts.as_micros()?;
		match starts.iter_mut().find(|(stream, ..)| *stream == frame.stream) {
			None => starts.push((frame.stream, index, at)),
			// A later keyframe still at or before the start moves the stream's start up to it.
			Some(slot) if at <= start && (slot.2 > start || at >= slot.2) => *slot = (frame.stream, index, at),
			Some(_) => {}
		}
	}
	let mut index = 0;
	frames.retain(|frame| {
		let keep = match starts.iter().find(|(stream, ..)| *stream == frame.stream) {
			Some((_, from, _)) => index >= *from,
			None => true,
		};
		index += 1;
		keep
	});
	Ok(())
}

/// When `report` says the frame at `pts` was captured, no later than its `arrival`, or `None` when
/// that is too far from its arrival to trust.
fn captured(report: Report, pts: moq_net::Timestamp, arrival: Wall) -> crate::Result<Option<Wall>> {
	let since = pts.as_micros()? as i128 - report.pts.as_micros()? as i128;
	let captured = unix_micros(report.wall) + since;
	let latency = unix_micros(arrival) - captured;
	if latency > MAX_CAPTURE_LATENCY.as_micros() as i128 || -latency > MAX_CAPTURE_LEAD.as_micros() as i128 {
		tracing::warn!(
			latency_ms = latency as f64 / 1000.0,
			"sender report far from the frame's arrival, placing the session at arrival"
		);
		return Ok(None);
	}
	// A sender clock a little ahead puts capture after arrival: no frame is from the future.
	let captured = arrival - Duration::from_micros(latency.max(0) as u64);
	Ok(Some(captured))
}

/// Microseconds from the Unix epoch to `wall`, negative before it.
fn unix_micros(wall: Wall) -> i128 {
	let epoch = Wall::UNIX_EPOCH;
	wall.saturating_duration_since(epoch).as_micros() as i128
		- epoch.saturating_duration_since(wall).as_micros() as i128
}

#[cfg(test)]
mod test {
	use super::*;
	use crate::catalog::{Config, Producer};

	fn ms(millis: u64) -> moq_net::Timestamp {
		moq_net::Timestamp::from_micros(millis * 1_000).unwrap()
	}

	fn catalog(config: Config) -> Producer {
		let mut broadcast = moq_net::broadcast::Info::new().produce();
		Producer::new(&mut broadcast, config).unwrap()
	}

	/// Where the catalog puts a frame of `timebase` at `pts` on the wall clock.
	fn wall_of(catalog: &Producer, timebase: &Timebase, pts: moq_net::Timestamp) -> Wall {
		catalog.clock().wall_clock(timebase.shift(pts).unwrap()).unwrap()
	}

	/// Stream `stream`'s frame at `pts`, arriving now.
	fn frame<T>(stream: u8, pts: moq_net::Timestamp, keyframe: bool, item: T) -> Frame<u8, T> {
		Frame {
			stream,
			pts,
			arrival: kio::clock::now(),
			keyframe,
			item,
		}
	}

	#[track_caller]
	fn waiting<T>(step: crate::Result<Step<u8, T>>) -> Placement<u8, T> {
		match step.unwrap() {
			Step::Waiting(placement) => placement,
			Step::Placed(_) => panic!("placed before it should be"),
		}
	}

	#[track_caller]
	fn placed<T>(step: crate::Result<Step<u8, T>>) -> Vec<T> {
		match step.unwrap() {
			Step::Placed(frames) => frames,
			Step::Waiting(_) => panic!("still waiting"),
		}
	}

	/// A sender report places the session's frames at their capture, and the frames held for it
	/// publish then, in order.
	#[kio::test]
	async fn a_sender_report_places_frames_at_capture() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		let mut placement = Placement::new(timebase.clone());
		for held in [
			frame(0, ms(10_000), true, "stale"),
			frame(0, ms(10_040), false, "delta"),
			frame(0, ms(10_080), true, "key"),
			frame(1, ms(10_090), true, "audio"),
		] {
			placement = waiting(placement.hold(held));
		}

		// The sender captured the keyframe 300 ms before it arrived; its report names a second earlier.
		let captured = kio::clock::wall() - Duration::from_millis(300);
		let held = placed(placement.report(0, ms(9_080), captured - Duration::from_secs(1)));
		assert_eq!(held, ["key", "audio"], "only what a decoder needs");
		assert_eq!(wall_of(&catalog, &timebase, ms(10_080)), captured);
	}

	/// The audio held covers the video held: every stream starts at the earliest of the streams'
	/// latest keyframes, though each audio frame is one.
	#[kio::test]
	async fn the_audio_held_covers_the_video_held() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let mut placement = Placement::new(catalog.timebase());
		for held in [
			frame(1, ms(980), true, "audio 980"),
			frame(0, ms(1_000), true, "video key"),
			frame(1, ms(1_000), true, "audio 1000"),
			frame(1, ms(1_020), true, "audio 1020"),
			frame(0, ms(1_040), false, "video delta"),
			frame(1, ms(1_040), true, "audio 1040"),
		] {
			placement = waiting(placement.hold(held));
		}
		assert_eq!(
			placement.finish().unwrap(),
			["video key", "audio 1000", "audio 1020", "video delta", "audio 1040"]
		);
	}

	/// A stream with no keyframe held keeps its frames, as its caller may start it on one the flag
	/// does not mark, and bounds no other stream.
	#[kio::test]
	async fn a_stream_without_a_keyframe_keeps_its_frames() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let mut placement = Placement::new(catalog.timebase());
		for held in [
			frame(0, ms(0), false, "recovery point"),
			frame(1, ms(0), true, "audio 0"),
			frame(0, ms(40), false, "delta"),
			frame(1, ms(20), true, "audio 20"),
		] {
			placement = waiting(placement.hold(held));
		}
		assert_eq!(placement.finish().unwrap(), ["recovery point", "delta", "audio 20"]);
	}

	/// Without a report within the wait, the session is placed at its first frame's arrival.
	#[kio::test]
	async fn without_a_report_the_wait_ends_at_arrival() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		let arrival = kio::clock::wall();
		let placement = waiting(Placement::new(timebase.clone()).hold(frame(0, ms(1_000), true, 0)));
		kio::clock::sleep(Duration::from_secs(5)).await;
		assert_eq!(placed(placement.hold(frame(0, ms(6_000), false, 1))), [0, 1]);
		assert_eq!(wall_of(&catalog, &timebase, ms(1_000)), arrival);
	}

	/// The wait counts from the first frame, though a keyframe drops it: audio, whose every frame
	/// is a keyframe, and video with a group shorter than the wait still get placed.
	#[kio::test]
	async fn the_wait_survives_keyframes() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		let mut placement = Placement::new(timebase.clone());
		for second in 0..5 {
			placement = waiting(placement.hold(frame(0, ms(second * 1_000), true, second)));
			kio::clock::sleep(Duration::from_secs(1)).await;
		}
		let arrival = kio::clock::wall();
		assert_eq!(placed(placement.hold(frame(0, ms(5_000), true, 5))), [5]);
		assert_eq!(wall_of(&catalog, &timebase, ms(5_000)), arrival);
	}

	/// A wait no frame arrives to end is over at its deadline, which a caller wakes for.
	#[kio::test]
	async fn a_wait_expires_at_its_deadline() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		let placement = Placement::new(timebase.clone());
		assert_eq!(placement.deadline(), None, "nothing held, nothing to wake for");

		let first = kio::clock::now();
		let arrival = kio::clock::wall();
		let placement = waiting(placement.hold(frame(0, ms(1_000), true, 0)));
		assert_eq!(placement.deadline(), Some(first.saturating_add(REPORT_INTERVAL)));
		let placement = waiting(placement.expire());

		kio::clock::sleep(REPORT_INTERVAL).await;
		assert_eq!(placed(placement.expire()), [0]);
		assert_eq!(wall_of(&catalog, &timebase, ms(1_000)), arrival);
	}

	/// A placement holds a bounded number of frames: past it, the session is placed at once.
	#[kio::test]
	async fn a_full_hold_places_at_once() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let mut placement = waiting(Placement::new(catalog.timebase()).hold(frame(0, ms(0), true, 0)));
		for index in 1..MAX_HELD as u64 - 1 {
			placement = waiting(placement.hold(frame(0, ms(index), false, index)));
		}
		let last = MAX_HELD as u64 - 1;
		assert_eq!(placed(placement.hold(frame(0, ms(last), false, last))).len(), MAX_HELD);
	}

	/// The latest report is the one that counts, and a report on a stream with no frame held
	/// places nothing.
	#[kio::test]
	async fn the_latest_report_on_a_held_stream_places() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		let captured = kio::clock::wall() - Duration::from_millis(200);
		let placement = waiting(Placement::new(timebase.clone()).report(0, ms(0), captured - Duration::from_secs(3)));
		let placement = waiting(placement.report(0, ms(0), captured));
		let placement = waiting(placement.report(1, ms(0), captured));
		let placement = waiting(placement.hold(frame(2, ms(0), true, "unreported")));
		assert_eq!(
			placed(placement.hold(frame(0, ms(0), true, "key"))),
			["unreported", "key"]
		);
		assert_eq!(wall_of(&catalog, &timebase, ms(0)), captured);
	}

	/// A report as far from the arrival as a sender may take is trusted; further, it is a sender
	/// clock set wrong, or never set, or ahead: the session is placed at arrival right away rather
	/// than waiting out a better one.
	#[kio::test]
	async fn a_report_is_trusted_up_to_its_bounds() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let latest = MAX_CAPTURE_LATENCY.as_millis() as i64;
		let lead = MAX_CAPTURE_LEAD.as_millis() as i64;
		for (skew, trusted) in [(-latest, true), (-latest - 1, false), (lead + 1, false)] {
			let catalog = catalog(Config::default());
			let timebase = catalog.timebase();
			let arrival = kio::clock::wall();
			let placement = waiting(Placement::new(timebase.clone()).hold(frame(0, ms(0), true, ())));
			let wall = match skew < 0 {
				true => arrival - Duration::from_millis(skew.unsigned_abs()),
				false => arrival + Duration::from_millis(skew as u64),
			};
			assert_eq!(placed(placement.report(0, ms(0), wall)).len(), 1);
			let expected = if trusted { wall } else { arrival };
			assert_eq!(wall_of(&catalog, &timebase, ms(0)), expected, "skew {skew} ms");
		}
	}

	/// A sender clock a little ahead never times a frame after its arrival.
	#[kio::test]
	async fn a_capture_never_follows_arrival() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		let arrival = kio::clock::wall();
		let placement = waiting(Placement::new(timebase.clone()).hold(frame(0, ms(0), true, ())));
		placed(placement.report(0, ms(0), arrival + Duration::from_millis(500)));
		assert_eq!(wall_of(&catalog, &timebase, ms(0)), arrival);
	}

	/// A session ending during the wait still publishes what it held, placed at its arrival.
	#[kio::test]
	async fn finishing_releases_the_held_frames() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let catalog = catalog(Config::default());
		let timebase = catalog.timebase();
		assert!(Placement::<u8, ()>::new(timebase.clone()).finish().unwrap().is_empty());

		let arrival = kio::clock::wall();
		let placement = waiting(Placement::new(timebase.clone()).hold(frame(0, ms(500), true, "key")));
		kio::clock::sleep(Duration::from_secs(1)).await;
		assert_eq!(placement.finish().unwrap(), ["key"]);
		assert_eq!(wall_of(&catalog, &timebase, ms(500)), arrival);
	}

	/// A host whose wall clock is unset releases the frames unplaced, rather than refuse them.
	#[kio::test]
	async fn an_unset_host_clock_releases_unplaced() {
		crate::clock::fake_host_wall(Wall::UNIX_EPOCH + Duration::from_secs(86_400));
		let catalog = catalog(Config::default());
		assert_eq!(
			placed(Placement::new(catalog.timebase()).hold(frame(0, ms(0), true, 7))),
			[7]
		);
	}

	/// On a clock fixed before the session, or one another session placed, each session still
	/// lands its frames at their capture.
	#[kio::test]
	async fn sessions_on_a_fixed_clock_each_land_at_capture() {
		kio::clock::sleep(Duration::from_secs(60)).await;
		let fixed = crate::Clock::new();
		for catalog in [catalog(Config::default().with_clock(fixed)), catalog(Config::default())] {
			let mut captures = Vec::new();
			for (start, latency) in [(0, 300), (3_600_000, 120)] {
				let timebase = catalog.timebase();
				let captured = kio::clock::wall() - Duration::from_millis(latency);
				let placement = waiting(Placement::new(timebase.clone()).hold(frame(0, ms(start), true, ())));
				assert_eq!(placed(placement.report(0, ms(start), captured)).len(), 1);
				captures.push((timebase, start, captured));
				kio::clock::sleep(Duration::from_secs(2)).await;
			}
			for (timebase, start, captured) in captures {
				assert_eq!(wall_of(&catalog, &timebase, ms(start)), captured);
				assert_eq!(
					wall_of(&catalog, &timebase, ms(start + 40)),
					captured + Duration::from_millis(40)
				);
			}
		}
	}
}
