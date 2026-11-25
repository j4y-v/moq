window.BENCHMARK_DATA = {
  "lastUpdate": 1795634053830,
  "repoUrl": "https://github.com/j4y-v/moq",
  "entries": {
    "MoQ nightly costs": [
      {
        "commit": {
          "author": {
            "name": "Luke Curley",
            "username": "kixelated",
            "email": "kixelated@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3717c893a96c92ecae666115757972773be2ac3b",
          "message": "fix(net): a frame read through a front resumes on a flight once the pool evicts its copy (#9546)\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-24T23:34:30Z",
          "url": "https://github.com/j4y-v/moq/commit/3717c893a96c92ecae666115757972773be2ac3b"
        },
        "date": 1795634053429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=1/updates=20/probes=0/us_per_update",
            "value": 20.806,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=1/updates=200/probes=0/us_per_update",
            "value": 16.454,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=8/updates=20/probes=0/us_per_update",
            "value": 19.705,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=8/updates=200/probes=0/us_per_update",
            "value": 33.012,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=32/updates=20/probes=0/us_per_update",
            "value": 41.725,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=32/updates=200/probes=0/us_per_update",
            "value": 51.387,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=0ms/ns_per_callback",
            "value": 305.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=80ms/ns_per_callback",
            "value": 301.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=0ms/ns_per_callback",
            "value": 195.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=80ms/ns_per_callback",
            "value": 178.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=0ms/ns_per_callback",
            "value": 167.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=80ms/ns_per_callback",
            "value": 92,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=0ms/ns_per_callback",
            "value": 38,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=80ms/ns_per_callback",
            "value": 45.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=0ms/ns_per_callback",
            "value": 33.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=80ms/ns_per_callback",
            "value": 32.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=0ms/ns_per_callback",
            "value": 38.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=80ms/ns_per_callback",
            "value": 32.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=0ms/ns_per_callback",
            "value": 35.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=80ms/ns_per_callback",
            "value": 39.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=0ms/ns_per_callback",
            "value": 42.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=80ms/ns_per_callback",
            "value": 42.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=0ms/ns_per_callback",
            "value": 30.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=80ms/ns_per_callback",
            "value": 30.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 10475,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 20236,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 127087,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 352654,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 16130,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 56870,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 327574,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 56023,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=estimate/ns_per_op",
            "value": 70183,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=estimate/ns_per_op",
            "value": 68075,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 346354,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 11575,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 24163,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 85515,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 365482,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=demand/ns_per_op",
            "value": 23413,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=demand/ns_per_op",
            "value": 63137,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=demand/ns_per_op",
            "value": 280186,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=demand/ns_per_op",
            "value": 61018,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=demand/ns_per_op",
            "value": 72959,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=demand/ns_per_op",
            "value": 225882,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 717217,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 4387,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 14324,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 57582,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 323374,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 14156,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 53192,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 279261,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 56542,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=ceiling/ns_per_op",
            "value": 68267,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=ceiling/ns_per_op",
            "value": 60879,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 350847,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 131,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 4903,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 70617,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 1344216,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=peek/ns_per_op",
            "value": 4917,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=peek/ns_per_op",
            "value": 72030,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=peek/ns_per_op",
            "value": 1463350,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=peek/ns_per_op",
            "value": 83721,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=peek/ns_per_op",
            "value": 71087,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=peek/ns_per_op",
            "value": 68981,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 277961,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=1/update_us",
            "value": 351.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=8/update_us",
            "value": 939.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=32/update_us",
            "value": 2693.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=1/update_us",
            "value": 360.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=8/update_us",
            "value": 2283.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=32/update_us",
            "value": 9738.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=1/update_us",
            "value": 1187,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=8/update_us",
            "value": 9669.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=32/update_us",
            "value": 38091.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=1/update_us",
            "value": 108.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=8/update_us",
            "value": 613.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=32/update_us",
            "value": 2333.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=1/update_us",
            "value": 294.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=8/update_us",
            "value": 1972.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=32/update_us",
            "value": 7473.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=1/update_us",
            "value": 972.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=8/update_us",
            "value": 7333,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=32/update_us",
            "value": 27762,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=1/update_us",
            "value": 46.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=8/update_us",
            "value": 310,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=32/update_us",
            "value": 1129.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=1/update_us",
            "value": 123.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=8/update_us",
            "value": 755.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=32/update_us",
            "value": 3026.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=1/update_us",
            "value": 424.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=8/update_us",
            "value": 2527.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=32/update_us",
            "value": 9882.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=1/update_us",
            "value": 77.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=8/update_us",
            "value": 245.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=32/update_us",
            "value": 1057.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=1/update_us",
            "value": 119.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=8/update_us",
            "value": 925.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=32/update_us",
            "value": 2823.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=1/update_us",
            "value": 381.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=8/update_us",
            "value": 2530,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=32/update_us",
            "value": 9726.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=8/observers=1/update_us",
            "value": 202.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=8/observers=8/update_us",
            "value": 805.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=8/observers=32/update_us",
            "value": 3489.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=32/observers=1/update_us",
            "value": 403.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=32/observers=8/update_us",
            "value": 3077.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=32/observers=32/update_us",
            "value": 11369.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=128/observers=1/update_us",
            "value": 1336.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=128/observers=8/update_us",
            "value": 10867.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=128/observers=32/update_us",
            "value": 44658.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=8/observers=1/update_us",
            "value": 14.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=8/observers=8/update_us",
            "value": 68.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=8/observers=32/update_us",
            "value": 340.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=32/observers=1/update_us",
            "value": 33.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=32/observers=8/update_us",
            "value": 241.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=32/observers=32/update_us",
            "value": 912,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=128/observers=1/update_us",
            "value": 166.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=128/observers=8/update_us",
            "value": 890.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=128/observers=32/update_us",
            "value": 3154.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=1/create_remove_and_read_us",
            "value": 28.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=8/create_remove_and_read_us",
            "value": 31.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=32/create_remove_and_read_us",
            "value": 87.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=1/create_remove_and_read_us",
            "value": 15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=8/create_remove_and_read_us",
            "value": 16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=32/create_remove_and_read_us",
            "value": 43.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=1/create_remove_and_read_us",
            "value": 7.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=8/create_remove_and_read_us",
            "value": 12.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=32/create_remove_and_read_us",
            "value": 47.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=1/update_and_read_us",
            "value": 102.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=8/update_and_read_us",
            "value": 51.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=32/update_and_read_us",
            "value": 66.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=1/update_and_read_us",
            "value": 29.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=8/update_and_read_us",
            "value": 30.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=32/update_and_read_us",
            "value": 50,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=1/update_and_read_us",
            "value": 47.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=8/update_and_read_us",
            "value": 47.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=32/update_and_read_us",
            "value": 54.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=1/update_and_read_us",
            "value": 19.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=8/update_and_read_us",
            "value": 16.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=32/update_and_read_us",
            "value": 36.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=1/update_and_read_us",
            "value": 15.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=8/update_and_read_us",
            "value": 18.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=32/update_and_read_us",
            "value": 41.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=1/update_and_read_us",
            "value": 24.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=8/update_and_read_us",
            "value": 217.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=32/update_and_read_us",
            "value": 39.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=8/fetches=1/grant_update_us",
            "value": 2.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=8/fetches=8/grant_update_us",
            "value": 4.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=8/fetches=32/grant_update_us",
            "value": 12.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=32/fetches=1/grant_update_us",
            "value": 1.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=32/fetches=8/grant_update_us",
            "value": 3.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=32/fetches=32/grant_update_us",
            "value": 14.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=128/fetches=1/grant_update_us",
            "value": 1.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=128/fetches=8/grant_update_us",
            "value": 4.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/prefixes=128/fetches=32/grant_update_us",
            "value": 17.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=1/update_us",
            "value": 677.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=8/update_us",
            "value": 260.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=32/update_us",
            "value": 396.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=1/update_us",
            "value": 402.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=8/update_us",
            "value": 409.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=32/update_us",
            "value": 971.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=1/update_us",
            "value": 1131.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=8/update_us",
            "value": 1744.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=32/update_us",
            "value": 2628.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=8/update_and_consume_us",
            "value": 6.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=32/update_and_consume_us",
            "value": 9.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=128/update_and_consume_us",
            "value": 26.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=8/update_and_consume_us",
            "value": 3.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=32/update_and_consume_us",
            "value": 3.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=128/update_and_consume_us",
            "value": 8.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=8/update_and_consume_us",
            "value": 3.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=32/update_and_consume_us",
            "value": 3.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=128/update_and_consume_us",
            "value": 3.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=1/duplicates=0/select_us",
            "value": 10.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=8/duplicates=0/select_us",
            "value": 49.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=32/duplicates=0/select_us",
            "value": 186.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=1/duplicates=0/select_us",
            "value": 4.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=8/duplicates=0/select_us",
            "value": 40.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=32/duplicates=0/select_us",
            "value": 176.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=1/duplicates=0/select_us",
            "value": 5.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=8/duplicates=0/select_us",
            "value": 53.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=32/duplicates=0/select_us",
            "value": 171.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=1/stale=0/invalidate_us",
            "value": 5.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=8/stale=0/invalidate_us",
            "value": 22.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=32/stale=0/invalidate_us",
            "value": 111.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=1/stale=0/invalidate_us",
            "value": 2.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=8/stale=0/invalidate_us",
            "value": 16.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=32/stale=0/invalidate_us",
            "value": 82.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=1/stale=0/invalidate_us",
            "value": 2.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=8/stale=0/invalidate_us",
            "value": 17.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=32/stale=0/invalidate_us",
            "value": 85.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=1/refused=256/retire_us",
            "value": 7.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=8/refused=2048/retire_us",
            "value": 38.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=32/refused=8192/retire_us",
            "value": 148.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=1/refused=256/retire_us",
            "value": 8.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=8/refused=2048/retire_us",
            "value": 35.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=32/refused=8192/retire_us",
            "value": 183.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=1/refused=256/retire_us",
            "value": 15.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=8/refused=2048/retire_us",
            "value": 45.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=32/refused=8192/retire_us",
            "value": 314.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=1/update_us",
            "value": 400.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=8/update_us",
            "value": 34.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=32/update_us",
            "value": 29.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=1/update_us",
            "value": 32.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=8/update_us",
            "value": 27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=32/update_us",
            "value": 28.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=1/update_us",
            "value": 53.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=8/update_us",
            "value": 50.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=32/update_us",
            "value": 56.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 104848,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1/frames=30/publishers=1/players=1/ops=8220/gaps=0/warnings=0/ns_per_op",
            "value": 11636,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 44499,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=16/frames=30/publishers=1/players=1/ops=8640/gaps=0/warnings=0/ns_per_op",
            "value": 12048,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 33843,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=256/frames=30/publishers=1/players=1/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 8785,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 34327,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1024/frames=30/publishers=1/players=1/ops=30720/gaps=0/warnings=0/ns_per_op",
            "value": 9801,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 73518,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1/frames=30/publishers=1/players=1/ops=8220/gaps=0/warnings=0/ns_per_op",
            "value": 10552,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 37061,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=16/frames=30/publishers=1/players=1/ops=8640/gaps=0/warnings=0/ns_per_op",
            "value": 12619,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 125852,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=256/frames=30/publishers=1/players=1/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 50520,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 619030,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1024/frames=30/publishers=1/players=1/ops=30720/gaps=0/warnings=0/ns_per_op",
            "value": 538913,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 67114,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1/frames=30/publishers=1/players=1/ops=8220/gaps=0/warnings=0/ns_per_op",
            "value": 9774,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=7680/warnings=7680/ns_per_op",
            "value": 64912,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=16/frames=30/publishers=1/players=1/ops=8640/gaps=270/warnings=270/ns_per_op",
            "value": 15960,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=8160/warnings=8160/ns_per_op",
            "value": 199364,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=256/frames=30/publishers=1/players=1/ops=15360/gaps=510/warnings=510/ns_per_op",
            "value": 154773,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=8184/warnings=8184/ns_per_op",
            "value": 1135507,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1024/frames=30/publishers=1/players=1/ops=30720/gaps=1023/warnings=1023/ns_per_op",
            "value": 984256,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=8192/ns_per_op",
            "value": 60898,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=8192/ns_per_op",
            "value": 77053,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=512/ns_per_op",
            "value": 4259,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=16/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=512/ns_per_op",
            "value": 4832,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=32/ns_per_op",
            "value": 2757,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=256/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=32/ns_per_op",
            "value": 2967,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=8/ns_per_op",
            "value": 2356,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1024/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=8/ns_per_op",
            "value": 3164,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=1/players=1/ops=9600/gaps=0/warnings=0/ns_per_op",
            "value": 16169,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=1/players=8/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 21959,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=4/players=1/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 20691,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=4/players=8/ops=61440/gaps=0/warnings=0/ns_per_op",
            "value": 31064,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=1/catalog_publishes=2/subscribe_updates=2/unlimited_subscribe_updates=1000/elapsed_ms",
            "value": 43.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=4/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 31.7,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=16/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 37.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=1/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 45.9,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=4/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 48.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=16/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 57.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=1/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 114.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=4/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 114.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=16/catalog_publishes=2/subscribe_updates=512/unlimited_subscribe_updates=256000/elapsed_ms",
            "value": 127.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/arm_us",
            "value": 210.65199999999962,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/advance_us",
            "value": 7.222999999999757,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/cancel_us",
            "value": 212.77100000000004,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/arm_us",
            "value": 100.71399999999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/advance_us",
            "value": 12.85500000000006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/cancel_us",
            "value": 147.27099999999993,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/arm_us",
            "value": 70.3390000000006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/advance_us",
            "value": 52.98099999999906,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/cancel_us",
            "value": 71.62800000000047,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/arm_us",
            "value": 843.3729999999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/advance_us",
            "value": 7.471999999999923,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1504.9820000000018,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/arm_us",
            "value": 732.2849999999974,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/advance_us",
            "value": 12.97599999999477,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1449.1769999999988,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/arm_us",
            "value": 666.248000000003,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/advance_us",
            "value": 56.885000000001185,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1297.6829999999993,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 727.9169999999908,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 308.3419999999961,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 669.0159999999992,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/arm_us",
            "value": 12829.18699999999,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/advance_us",
            "value": 9.151000000002796,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 16837.084000000003,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/arm_us",
            "value": 8611.894000000008,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/advance_us",
            "value": 24.357999999949698,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 20110.528999999984,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/arm_us",
            "value": 9142.678999999931,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/advance_us",
            "value": 109.36200000003282,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 20231.074000000037,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 9493.336999999996,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 757.7219999999443,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 19818.449999999983,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/arm_us",
            "value": 70.6759999999349,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/advance_us",
            "value": 0.9839999999030624,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/cancel_us",
            "value": 28.909999999996217,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/arm_us",
            "value": 71.73999999997704,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/advance_us",
            "value": 3.6079999999856227,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/cancel_us",
            "value": 27.045999999927517,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/arm_us",
            "value": 70.94000000006417,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/advance_us",
            "value": 25.90999999995347,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/cancel_us",
            "value": 1.8000000000029104,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1886.9999999999436,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/advance_us",
            "value": 4.151999999976397,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 400.23200000007364,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1823.8199999999551,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/advance_us",
            "value": 10.071000000039021,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 379.25700000005236,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1764.199000000076,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/advance_us",
            "value": 50.83700000000135,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 342.5479999999652,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1822.1549999999525,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 358.19500000002336,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 9.799000000043634,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/arm_us",
            "value": 330231.9689999999,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/advance_us",
            "value": 17.063000000007378,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 13134.28900000008,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/arm_us",
            "value": 331792.3960000003,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/advance_us",
            "value": 49.997000000075786,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13296.631000000161,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/arm_us",
            "value": 334803.226,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/advance_us",
            "value": 326.8449999995937,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 13243.547000000035,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 337299.95599999983,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 2633.498999999574,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10540.171000000555,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/arm_us",
            "value": 74.49199999973644,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/advance_us",
            "value": 125.26400000024296,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/cancel_us",
            "value": 144.0149999998539,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/arm_us",
            "value": 61.30900000061956,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/advance_us",
            "value": 138.82299999932002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/cancel_us",
            "value": 122.1850000001723,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/arm_us",
            "value": 62.5240000008489,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/advance_us",
            "value": 633.8980000000447,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/cancel_us",
            "value": 67.04400000126043,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/arm_us",
            "value": 682.0719999996072,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/advance_us",
            "value": 53.88400000083493,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1518.7569999998232,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/arm_us",
            "value": 677.1119999993971,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/advance_us",
            "value": 127.33599999955914,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1657.8300000001036,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/arm_us",
            "value": 755.7789999991655,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/advance_us",
            "value": 750.372000000425,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1555.618999998842,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 737.9639999999199,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 7012.237999999343,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 732.0760000002338,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/arm_us",
            "value": 10269.835000000967,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/advance_us",
            "value": 120.29700000130106,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 20515.344000001278,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/arm_us",
            "value": 10056.255999999848,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/advance_us",
            "value": 210.83600000019942,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 22400.375999999596,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/arm_us",
            "value": 10605.774999999994,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/advance_us",
            "value": 958.2700000009936,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 24297.91800000021,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 12770.614000000933,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 8921.507999999449,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 18564.204000000245,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/arm_us",
            "value": 65.45199999891338,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/advance_us",
            "value": 25.381999999808613,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/cancel_us",
            "value": 30.66199999921082,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/arm_us",
            "value": 55.70900000020629,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/advance_us",
            "value": 77.02700000118057,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/cancel_us",
            "value": 27.342999999746098,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/arm_us",
            "value": 69.19500000003609,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/advance_us",
            "value": 731.06099999859,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/cancel_us",
            "value": 4.631000001609209,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1853.0250000003434,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/advance_us",
            "value": 44.24500000095577,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 395.4409999987547,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1828.1470000001718,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/advance_us",
            "value": 126.44899999941117,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 376.3460000009218,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1903.0299999994895,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/advance_us",
            "value": 807.1599999984755,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 362.01100000107544,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1900.1589999988937,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 7463.059000001522,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 17.286000000240165,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/arm_us",
            "value": 330785.00100000016,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/advance_us",
            "value": 163.75800000059826,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 13546.304000001328,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/arm_us",
            "value": 288167.78299999895,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/advance_us",
            "value": 914.5609999995941,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13717.076999999335,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/arm_us",
            "value": 285396.80899999983,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/advance_us",
            "value": 2034.7099999999045,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 13629.300000000512,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 292361.7610000001,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 10520.508999998128,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10442.050000001473,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1/decoded=1/us_per_fragment",
            "value": 19.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=64/decoded=64/us_per_fragment",
            "value": 29.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1024/decoded=1024/us_per_fragment",
            "value": 157.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=4294967295/decoded=0/us_per_fragment",
            "value": 6.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1/decoded=1/us_per_fragment",
            "value": 72.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=64/decoded=64/us_per_fragment",
            "value": 81.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1024/decoded=1024/us_per_fragment",
            "value": 139.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=4294967295/decoded=0/us_per_fragment",
            "value": 4.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/us",
            "value": 3587.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/us",
            "value": 1142.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/us",
            "value": 1445.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/us",
            "value": 388.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/us",
            "value": 1019.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/us",
            "value": 569.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/us",
            "value": 3734,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/us",
            "value": 1341.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/us",
            "value": 2888,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/us",
            "value": 1621.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/us",
            "value": 3444.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/us",
            "value": 1283.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/us",
            "value": 11909.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/us",
            "value": 3664.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/us",
            "value": 12072.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/us",
            "value": 3030.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/us",
            "value": 10710.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/us",
            "value": 4568.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle/size_bytes",
            "value": 222226,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle_gzip/size_bytes",
            "value": 67567,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 1642,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=0/size_bytes",
            "value": 4608000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 13910,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=1/size_bytes",
            "value": 2340002,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 5442,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 32513792,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 8146167,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 32537848,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 2266,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=0/size_bytes",
            "value": 4608000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 12991,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=1/size_bytes",
            "value": 2340002,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 9350,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 32513792,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 8018828,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 32537848,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 1073,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=0/size_bytes",
            "value": 18432000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 11837,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=1/size_bytes",
            "value": 9360008,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 1475,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 130055168,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 7974183,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 130151392,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 2018,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=0/size_bytes",
            "value": 18432000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 13296,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=1/size_bytes",
            "value": 9360008,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 2739,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 130055168,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 7939275,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 130151392,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=1/ns_per_join",
            "value": 22278.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=1/ns_per_delivery",
            "value": 1564.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=16/ns_per_join",
            "value": 8432.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=16/ns_per_delivery",
            "value": 611.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=64/ns_per_join",
            "value": 3300,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=64/ns_per_delivery",
            "value": 553.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=1/ns_per_join",
            "value": 6419.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=1/ns_per_delivery",
            "value": 1393,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=16/ns_per_join",
            "value": 1232.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=16/ns_per_delivery",
            "value": 596.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=64/ns_per_join",
            "value": 520.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=64/ns_per_delivery",
            "value": 676.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=1/ns_per_join",
            "value": 739.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=1/ns_per_delivery",
            "value": 1460.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=16/ns_per_join",
            "value": 429.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=16/ns_per_delivery",
            "value": 691.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=64/ns_per_join",
            "value": 296,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=64/ns_per_delivery",
            "value": 705.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 25379,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 12142,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 10391,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 6941,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 7119,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 6195,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 6789,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 7876,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 8513,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 7392,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 7766,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 8086,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 7250,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 7459,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 7555,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 5971,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 7010,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 6321,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 6502,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 7137,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 6757,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 7697,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 7900,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 7806,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 7855,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 9458,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 6344,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 6403,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 6120,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 7063,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 6592,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 6242,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 6576,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 8850,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 8759,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 8653,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/seal_us",
            "value": 47.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/open_us",
            "value": 39.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/seal_us",
            "value": 43.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/open_us",
            "value": 37.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/seal_us",
            "value": 40.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/open_us",
            "value": 36.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/seal_us",
            "value": 42.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/open_us",
            "value": 38.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/seal_us",
            "value": 43.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/open_us",
            "value": 38.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/seal_us",
            "value": 39.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/open_us",
            "value": 38.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/seal_us",
            "value": 67.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/open_us",
            "value": 56.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/seal_us",
            "value": 69.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/open_us",
            "value": 54.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/seal_us",
            "value": 65.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/open_us",
            "value": 53.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/seal_us",
            "value": 263.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/open_us",
            "value": 180.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/seal_us",
            "value": 278.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/open_us",
            "value": 204.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/seal_us",
            "value": 258.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/open_us",
            "value": 223.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=250/readers=1/step_us",
            "value": 311.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=250/readers=8/step_us",
            "value": 52.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=1000/readers=1/step_us",
            "value": 130.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=1000/readers=8/step_us",
            "value": 39.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=4000/readers=1/step_us",
            "value": 213.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=4000/readers=8/step_us",
            "value": 53.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=16000/readers=1/step_us",
            "value": 760.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=16000/readers=8/step_us",
            "value": 124.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=2/subscribers=1/fill_us",
            "value": 1707.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=2/subscribers=8/fill_us",
            "value": 3608.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=16/subscribers=1/fill_us",
            "value": 705.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=16/subscribers=8/fill_us",
            "value": 3008.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=128/subscribers=1/fill_us",
            "value": 925.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=128/subscribers=8/fill_us",
            "value": 5179.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=8/update_us",
            "value": 562.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=32/update_us",
            "value": 695.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=128/update_us",
            "value": 1465.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=8/update_us",
            "value": 219.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=32/update_us",
            "value": 534.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=128/update_us",
            "value": 1436.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=8/update_us",
            "value": 422.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=32/update_us",
            "value": 653.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=128/update_us",
            "value": 1663.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=8/update_us",
            "value": 172.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=32/update_us",
            "value": 392.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=128/update_us",
            "value": 1266.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=8/update_us",
            "value": 194.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=32/update_us",
            "value": 462,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=128/update_us",
            "value": 1320.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=8/update_us",
            "value": 306.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=32/update_us",
            "value": 550.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=128/update_us",
            "value": 1418.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=1/watch_us",
            "value": 67.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=8/watch_us",
            "value": 130.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=32/watch_us",
            "value": 384.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=1/watch_us",
            "value": 47.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=8/watch_us",
            "value": 114.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=32/watch_us",
            "value": 433.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=1/watch_us",
            "value": 43.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=8/watch_us",
            "value": 147.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=32/watch_us",
            "value": 471.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/ns_per_frame",
            "value": 5016,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/first_frame_us",
            "value": 12.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 1083,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 41.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1078,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 41.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1095,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 40.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 6302,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 13.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1477,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 18.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1121,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 41.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1126,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 41.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 6536,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 13.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 5640,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 12.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 1539,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 25.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1033,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 38.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 1121,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 2484.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/ns_per_frame",
            "value": 13753,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/first_frame_us",
            "value": 223.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 4164,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 181.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 3649,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 150.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 2664,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 110.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 10698,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 94.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 3245,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 80.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 2552,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 101.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 2514,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 103.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 11612,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 84.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 10980,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 86.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 3492,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 93.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 2001,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 81.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 1151,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 2491.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=in/ns_per_frame",
            "value": 242,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=reordered/ns_per_frame",
            "value": 87.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=in/ns_per_frame",
            "value": 204.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=reordered/ns_per_frame",
            "value": 91.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=in/ns_per_frame",
            "value": 238.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=reordered/ns_per_frame",
            "value": 102.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=in/ns_per_frame",
            "value": 280.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=reordered/ns_per_frame",
            "value": 110.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/ms_per_update",
            "value": 0.005741,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/ms_per_update",
            "value": 0.004528,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/ms_per_update",
            "value": 0.005407,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/ms_per_update",
            "value": 0.022121,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/ms_per_update",
            "value": 0.023334,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/ms_per_update",
            "value": 0.665183,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/ms_per_update",
            "value": 0.66821,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/json_parse_us",
            "value": 1.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/parse_us",
            "value": 5.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-16/bytes=199/json_parse_us",
            "value": 0.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-16/bytes=199/parse_us",
            "value": 0.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-1024/bytes=12295/json_parse_us",
            "value": 21.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-1024/bytes=12295/parse_us",
            "value": 26.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-65536/bytes=786439/json_parse_us",
            "value": 1099.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-65536/bytes=786439/parse_us",
            "value": 1741.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/json_parse_us",
            "value": 1.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/parse_us",
            "value": 7.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/json_parse_us",
            "value": 13.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/parse_us",
            "value": 67.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/json_parse_us",
            "value": 285.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/parse_us",
            "value": 845.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compress=false/ns_per_record",
            "value": 5574.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compress=true/ns_per_record",
            "value": 18639.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compress=false/ns_per_record",
            "value": 7970.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compress=true/ns_per_record",
            "value": 15025,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compress=false/ns_per_record",
            "value": 1341.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compress=true/ns_per_record",
            "value": 6199.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compress=false/ns_per_record",
            "value": 3244.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compress=true/ns_per_record",
            "value": 10003.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=ascending/ns_per_arrival",
            "value": 3470,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=descending/ns_per_arrival",
            "value": 3302,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=shuffled/ns_per_arrival",
            "value": 2537,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=rolling/ns_per_arrival",
            "value": 2408,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=ascending/ns_per_arrival",
            "value": 1111,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=descending/ns_per_arrival",
            "value": 2491,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=shuffled/ns_per_arrival",
            "value": 2692,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=rolling/ns_per_arrival",
            "value": 1544,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=ascending/ns_per_arrival",
            "value": 1115,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=descending/ns_per_arrival",
            "value": 2713,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=shuffled/ns_per_arrival",
            "value": 3277,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=rolling/ns_per_arrival",
            "value": 1955,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/encode_ns",
            "value": 63982,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/decode_ns",
            "value": 9137,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/encode_ns",
            "value": 63619,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/decode_ns",
            "value": 8885,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/encode_ns",
            "value": 52894,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/decode_ns",
            "value": 7306,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/encode_ns",
            "value": 53252,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/decode_ns",
            "value": 7278,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/encode_ns",
            "value": 5645,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/decode_ns",
            "value": 1992,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/encode_ns",
            "value": 5436,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/decode_ns",
            "value": 1972,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/encode_ns",
            "value": 12610,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/decode_ns",
            "value": 5817,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=27/encode_ns",
            "value": 13412,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=27/decode_ns",
            "value": 6622,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/encode_ns",
            "value": 2259,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/decode_ns",
            "value": 1658,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=9/encode_ns",
            "value": 2475,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=9/decode_ns",
            "value": 1951,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/encode_ns",
            "value": 9027,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/decode_ns",
            "value": 4903,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=5/encode_ns",
            "value": 6861,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=5/decode_ns",
            "value": 3263,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=0/held_estimates=1/update_us",
            "value": 6.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=1/held_estimates=1/update_us",
            "value": 9.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=8/held_estimates=1/update_us",
            "value": 21.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=64/held_estimates=1/update_us",
            "value": 137.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=0/held_estimates=32/update_us",
            "value": 3.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=1/held_estimates=32/update_us",
            "value": 7.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=8/held_estimates=32/update_us",
            "value": 19.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=64/held_estimates=32/update_us",
            "value": 141.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=0/held_estimates=256/update_us",
            "value": 3.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=1/held_estimates=256/update_us",
            "value": 5.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=8/held_estimates=256/update_us",
            "value": 18.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=64/held_estimates=256/update_us",
            "value": 139.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=0/held_estimates=0/update_us",
            "value": 1.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=1/held_estimates=1/update_us",
            "value": 4.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=8/held_estimates=1/update_us",
            "value": 23.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=64/held_estimates=1/update_us",
            "value": 189.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=0/held_estimates=0/update_us",
            "value": 0.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=1/held_estimates=32/update_us",
            "value": 3.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=8/held_estimates=32/update_us",
            "value": 22.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=64/held_estimates=32/update_us",
            "value": 221.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=0/held_estimates=0/update_us",
            "value": 0.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=1/held_estimates=256/update_us",
            "value": 3.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=8/held_estimates=256/update_us",
            "value": 24.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=64/held_estimates=256/update_us",
            "value": 173.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=mask/op=collect/members=126/ms_per_op",
            "value": 4.042,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=mask/op=covers/members=126/ms_per_op",
            "value": 2.995,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=mask/op=collect/members=510/ms_per_op",
            "value": 43.474,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=mask/op=covers/members=510/ms_per_op",
            "value": 37.548,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=mask/op=collect/members=2046/ms_per_op",
            "value": 506.852,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=mask/op=covers/members=2046/ms_per_op",
            "value": 474.315,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=chain/op=collect/members=62/ms_per_op",
            "value": 0.989,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=chain/op=covers/members=62/ms_per_op",
            "value": 0.641,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=chain/op=collect/members=126/ms_per_op",
            "value": 6.592,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=chain/op=covers/members=126/ms_per_op",
            "value": 4.885,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=chain/op=collect/members=254/ms_per_op",
            "value": 43.255,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=chain/op=covers/members=254/ms_per_op",
            "value": 38.33,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=prefix/op=collect/members=272/ms_per_op",
            "value": 0.081,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=prefix/op=covers/members=272/ms_per_op",
            "value": 0.254,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=prefix/op=intersect/members=272/ms_per_op",
            "value": 0.551,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=prefix/op=collect/members=1092/ms_per_op",
            "value": 0.317,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=prefix/op=covers/members=1092/ms_per_op",
            "value": 1.199,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=prefix/op=intersect/members=1092/ms_per_op",
            "value": 2.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=prefix/op=collect/members=4368/ms_per_op",
            "value": 1.216,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=prefix/op=covers/members=4368/ms_per_op",
            "value": 5.908,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=prefix/op=intersect/members=4368/ms_per_op",
            "value": 12.231,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=4/ns_per_change",
            "value": 6082.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=16/ns_per_change",
            "value": 9834.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=64/ns_per_change",
            "value": 13558.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=4/ns_per_change",
            "value": 675.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=16/ns_per_change",
            "value": 2291.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=64/ns_per_change",
            "value": 11359.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=4/ns_per_change",
            "value": 663.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=16/ns_per_change",
            "value": 2151,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=64/ns_per_change",
            "value": 8909.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=16/edit=edit1/update_us",
            "value": 60.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=16/edit=edit16/update_us",
            "value": 298.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=16/edit=steer/update_us",
            "value": 20.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=1024/edit=edit1/update_us",
            "value": 55.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=1024/edit=edit16/update_us",
            "value": 412.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=1024/edit=steer/update_us",
            "value": 20.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=8192/edit=edit1/update_us",
            "value": 55.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=8192/edit=edit16/update_us",
            "value": 438.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/publisher-update/ranges=8192/edit=steer/update_us",
            "value": 20.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=1/us_per_read",
            "value": 7.855,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=32/us_per_read",
            "value": 0.672,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=1024/us_per_read",
            "value": 0.309,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=16384/us_per_read",
            "value": 0.276,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1025/kind=stream/frames=1/us_per_record",
            "value": 11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=16/us_per_record",
            "value": 33.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=256/us_per_record",
            "value": 236.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=empty/frames=256/us_per_record",
            "value": 181.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=max_data/frames=204/us_per_record",
            "value": 90.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16381/kind=stream/frames=1/us_per_record",
            "value": 9.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16384/kind=stream/frames=16/us_per_record",
            "value": 16.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16128/kind=stream/frames=256/us_per_record",
            "value": 221.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=empty/frames=4095/us_per_record",
            "value": 3697.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=max_data/frames=3276/us_per_record",
            "value": 1087.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1200/chunks=14/ns_per_byte",
            "value": 1.143,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=16384/chunks=1/ns_per_byte",
            "value": 0.114,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.066,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1200/chunks=219/ns_per_byte",
            "value": 0.508,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=16384/chunks=16/ns_per_byte",
            "value": 0.24,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.004,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1200/chunks=874/ns_per_byte",
            "value": 0.473,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=16384/chunks=64/ns_per_byte",
            "value": 0.232,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.001,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=1/refresh_us",
            "value": 2092.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=8/refresh_us",
            "value": 3460.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=32/refresh_us",
            "value": 5882.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=1/refresh_us",
            "value": 917.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=8/refresh_us",
            "value": 1394.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=32/refresh_us",
            "value": 3275.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=1/refresh_us",
            "value": 749.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=8/refresh_us",
            "value": 1335.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=32/refresh_us",
            "value": 2828.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=1/refresh_us",
            "value": 692.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=8/refresh_us",
            "value": 2122.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=32/refresh_us",
            "value": 6594.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=1/refresh_us",
            "value": 762.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=8/refresh_us",
            "value": 2041.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=32/refresh_us",
            "value": 6547.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=1/refresh_us",
            "value": 720.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=8/refresh_us",
            "value": 2137.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=32/refresh_us",
            "value": 7224.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=1/refresh_us",
            "value": 3665.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=8/refresh_us",
            "value": 27000.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=32/refresh_us",
            "value": 97146.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=1/refresh_us",
            "value": 3493.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=8/refresh_us",
            "value": 21939.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=32/refresh_us",
            "value": 104142.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=1/refresh_us",
            "value": 4471.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=8/refresh_us",
            "value": 21262.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=32/refresh_us",
            "value": 94942.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=1/us_per_op",
            "value": 168.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=1/max_us",
            "value": 167,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=1/us_per_op",
            "value": 6.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=1/max_us",
            "value": 36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=8/us_per_op",
            "value": 96.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=8/max_us",
            "value": 142,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=8/us_per_op",
            "value": 19.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=8/max_us",
            "value": 54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=1/us_per_op",
            "value": 143.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=1/max_us",
            "value": 141,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=1/us_per_op",
            "value": 8.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=1/max_us",
            "value": 46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=8/us_per_op",
            "value": 112.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=8/max_us",
            "value": 146,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=8/us_per_op",
            "value": 21.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=8/max_us",
            "value": 61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=1/us_per_op",
            "value": 132.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=1/max_us",
            "value": 132,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=1/us_per_op",
            "value": 6.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=1/max_us",
            "value": 13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=8/us_per_op",
            "value": 126.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=8/max_us",
            "value": 160,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=8/us_per_op",
            "value": 22.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=8/max_us",
            "value": 62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=1/us_per_op",
            "value": 719.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=1/max_us",
            "value": 717,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=1/us_per_op",
            "value": 5.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=1/max_us",
            "value": 16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=8/us_per_op",
            "value": 631.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=8/max_us",
            "value": 743,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=8/us_per_op",
            "value": 23.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=8/max_us",
            "value": 59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=1/us_per_op",
            "value": 739.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=1/max_us",
            "value": 736,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=1/us_per_op",
            "value": 6.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=1/max_us",
            "value": 35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=8/us_per_op",
            "value": 1001.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=8/max_us",
            "value": 2067,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=8/us_per_op",
            "value": 29.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=8/max_us",
            "value": 76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=1/us_per_op",
            "value": 858,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=1/max_us",
            "value": 851,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=1/us_per_op",
            "value": 7.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=1/max_us",
            "value": 32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=8/us_per_op",
            "value": 1104.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=8/max_us",
            "value": 2181,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=8/us_per_op",
            "value": 24.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=8/max_us",
            "value": 60,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=1/us_per_op",
            "value": 4471.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=1/max_us",
            "value": 4470,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=1/us_per_op",
            "value": 6.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=1/max_us",
            "value": 12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=8/us_per_op",
            "value": 2844.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=8/max_us",
            "value": 6576,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=8/us_per_op",
            "value": 22.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=8/max_us",
            "value": 61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=1/us_per_op",
            "value": 4669.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=1/max_us",
            "value": 4668,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=1/us_per_op",
            "value": 9.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=1/max_us",
            "value": 37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=8/us_per_op",
            "value": 4638.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=8/max_us",
            "value": 7666,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=8/us_per_op",
            "value": 38.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=8/max_us",
            "value": 88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=1/us_per_op",
            "value": 4391.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=1/max_us",
            "value": 4390,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=1/us_per_op",
            "value": 9.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=1/max_us",
            "value": 40,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=8/us_per_op",
            "value": 4362.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=8/max_us",
            "value": 6543,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=8/us_per_op",
            "value": 35.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=8/max_us",
            "value": 79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=1/update_us",
            "value": 79.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=8/update_us",
            "value": 209.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=32/update_us",
            "value": 746.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=1/update_us",
            "value": 45.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=8/update_us",
            "value": 193.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=32/update_us",
            "value": 723.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=1/update_us",
            "value": 77.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=8/update_us",
            "value": 235.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=32/update_us",
            "value": 767.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=1/update_us",
            "value": 10.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=8/update_us",
            "value": 9.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=32/update_us",
            "value": 10.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=1/update_us",
            "value": 16.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=8/update_us",
            "value": 15.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=32/update_us",
            "value": 15.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=1/update_us",
            "value": 30.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=8/update_us",
            "value": 29.63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=32/update_us",
            "value": 33.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=1/cancel_us",
            "value": 19.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=8/cancel_us",
            "value": 75.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=32/cancel_us",
            "value": 159.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=1/cancel_us",
            "value": 8.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=8/cancel_us",
            "value": 38.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=32/cancel_us",
            "value": 102.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=1/cancel_us",
            "value": 8.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=8/cancel_us",
            "value": 44.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=32/cancel_us",
            "value": 117.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=128/landed=1/settle_us",
            "value": 44.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=128/landed=16/settle_us",
            "value": 91.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=128/landed=128/settle_us",
            "value": 499.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=1024/landed=1/settle_us",
            "value": 45.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=1024/landed=16/settle_us",
            "value": 103.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=1024/landed=128/settle_us",
            "value": 511.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=8192/landed=1/settle_us",
            "value": 71.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=8192/landed=16/settle_us",
            "value": 182.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=8192/landed=128/settle_us",
            "value": 926.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=0/cancel_us",
            "value": 3.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=128/cancel_us",
            "value": 4.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=0/cancel_us",
            "value": 3.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=128/cancel_us",
            "value": 4.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=0/cancel_us",
            "value": 5.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=128/cancel_us",
            "value": 7.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=0/cancel_us",
            "value": 20.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=128/cancel_us",
            "value": 34.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/active_ms",
            "value": 4.35,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/settled_ms",
            "value": 7.03,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/active_ms",
            "value": 16.03,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/settled_ms",
            "value": 23.63,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/active_ms",
            "value": 19.87,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/settled_ms",
            "value": 30.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/active_ms",
            "value": 51.82,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/settled_ms",
            "value": 91.66,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/active_ms",
            "value": 82.72,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/settled_ms",
            "value": 124.17,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/active_ms",
            "value": 191.25,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/settled_ms",
            "value": 335.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/active_ms",
            "value": 5.25,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/settled_ms",
            "value": 7.92,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/active_ms",
            "value": 12.64,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/settled_ms",
            "value": 20.52,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/active_ms",
            "value": 20.55,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/settled_ms",
            "value": 29.18,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/active_ms",
            "value": 53.22,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/settled_ms",
            "value": 87.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/active_ms",
            "value": 88.37,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/settled_ms",
            "value": 126.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/active_ms",
            "value": 234.67,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/settled_ms",
            "value": 368.04,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/active_ms",
            "value": 6.29,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/settled_ms",
            "value": 6.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/active_ms",
            "value": 6.94,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/settled_ms",
            "value": 6.95,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/active_ms",
            "value": 20.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/settled_ms",
            "value": 20.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/active_ms",
            "value": 26.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/settled_ms",
            "value": 26.21,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/active_ms",
            "value": 92.81,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/settled_ms",
            "value": 92.82,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/active_ms",
            "value": 109.79,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/settled_ms",
            "value": 109.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/active_us",
            "value": 10.05,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/settled_us",
            "value": 18.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/active_us",
            "value": 119.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/settled_us",
            "value": 259.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/active_us",
            "value": 2022.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/settled_us",
            "value": 4040.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/active_us",
            "value": 14.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/settled_us",
            "value": 27.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/active_us",
            "value": 135.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/settled_us",
            "value": 266.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/active_us",
            "value": 2418.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/settled_us",
            "value": 4999.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/active_us",
            "value": 29.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/settled_us",
            "value": 50.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/active_us",
            "value": 161.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/settled_us",
            "value": 316.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/active_us",
            "value": 3089.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/settled_us",
            "value": 5965.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/active_us",
            "value": 3.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/settled_us",
            "value": 8.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/active_us",
            "value": 135.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/settled_us",
            "value": 257.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/active_us",
            "value": 2556.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/settled_us",
            "value": 5486.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/active_us",
            "value": 8.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/settled_us",
            "value": 18.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/active_us",
            "value": 125.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/settled_us",
            "value": 274.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/active_us",
            "value": 2385.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/settled_us",
            "value": 5109.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/active_us",
            "value": 11.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/settled_us",
            "value": 29.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/active_us",
            "value": 166.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/settled_us",
            "value": 339.96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/active_us",
            "value": 2963.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/settled_us",
            "value": 5926.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=1/update_us",
            "value": 587.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=8/update_us",
            "value": 1436.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=1/update_us",
            "value": 1720.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=8/update_us",
            "value": 10168.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=1/update_us",
            "value": 4997.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=8/update_us",
            "value": 35449.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=1/update_us",
            "value": 163.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=8/update_us",
            "value": 593.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=1/update_us",
            "value": 1153.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=8/update_us",
            "value": 8370.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=1/update_us",
            "value": 4365.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=8/update_us",
            "value": 34026.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/direct_us",
            "value": 8.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/front_us",
            "value": 16.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/fork_us",
            "value": 15.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/direct_us",
            "value": 4.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/front_us",
            "value": 8.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/fork_us",
            "value": 8.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/direct_us",
            "value": 3.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/front_us",
            "value": 10.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/fork_us",
            "value": 10.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/direct_us",
            "value": 7.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/front_us",
            "value": 18.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/fork_us",
            "value": 18.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/direct_us",
            "value": 4.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/front_us",
            "value": 11.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/fork_us",
            "value": 11.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/direct_us",
            "value": 3.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/front_us",
            "value": 9.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/fork_us",
            "value": 10.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/direct_us",
            "value": 6.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/front_us",
            "value": 15.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/fork_us",
            "value": 15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/direct_us",
            "value": 4.03,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/front_us",
            "value": 10.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/fork_us",
            "value": 10.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/direct_us",
            "value": 3.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/front_us",
            "value": 11.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/fork_us",
            "value": 11.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=1/flap_us",
            "value": 238.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=16/flap_us",
            "value": 209.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=64/flap_us",
            "value": 127.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=1/flap_us",
            "value": 101.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=16/flap_us",
            "value": 57.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=64/flap_us",
            "value": 49.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=1/flap_us",
            "value": 50.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=16/flap_us",
            "value": 38.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=64/flap_us",
            "value": 33.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=0/readable_us",
            "value": 7.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=0/readable_us",
            "value": 4.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=0/readable_us",
            "value": 1.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1/readable_us",
            "value": 5.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1/readable_us",
            "value": 2.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1/readable_us",
            "value": 1.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=64/readable_us",
            "value": 7.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=64/readable_us",
            "value": 5.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=64/readable_us",
            "value": 4.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1024/readable_us",
            "value": 30.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1024/readable_us",
            "value": 11.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1024/readable_us",
            "value": 7.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/signals/op=new-error/ns_per_op",
            "value": 325,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-close/ns_per_op",
            "value": 2403,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-get-close/ns_per_op",
            "value": 2393,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/slow-group/groups=1/warnings=1/bytes=51/catchup_ms",
            "value": 2.735,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=16/warnings=1/bytes=53/catchup_ms",
            "value": 1.292,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=256/warnings=1/bytes=55/catchup_ms",
            "value": 3.662,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=1024/warnings=1/bytes=57/catchup_ms",
            "value": 8.605,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=1/groups=128/drop_us",
            "value": 220.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=4/groups=128/drop_us",
            "value": 103.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=16/groups=128/drop_us",
            "value": 69.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=1/groups=128/drop_us",
            "value": 79.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=4/groups=128/drop_us",
            "value": 67.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=16/groups=128/drop_us",
            "value": 58.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=1/groups=128/drop_us",
            "value": 68.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=4/groups=128/drop_us",
            "value": 61.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=16/groups=128/drop_us",
            "value": 70.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/publish_us",
            "value": 38.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/end_us",
            "value": 34.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/idle_us",
            "value": 148,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/publish_us",
            "value": 19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/end_us",
            "value": 37.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/idle_us",
            "value": 310.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/publish_us",
            "value": 19.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/end_us",
            "value": 57.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/idle_us",
            "value": 1106.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/publish_us",
            "value": 15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/end_us",
            "value": 128.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/idle_us",
            "value": 3957.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/publish_us",
            "value": 37.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/end_us",
            "value": 48.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/idle_us",
            "value": 149.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/publish_us",
            "value": 27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/end_us",
            "value": 40,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/idle_us",
            "value": 329.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/publish_us",
            "value": 30.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/end_us",
            "value": 66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/idle_us",
            "value": 1427.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/publish_us",
            "value": 27.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/end_us",
            "value": 156.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/idle_us",
            "value": 7021,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/publish_us",
            "value": 122.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/end_us",
            "value": 64.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/idle_us",
            "value": 242.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/publish_us",
            "value": 129.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/end_us",
            "value": 76.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/idle_us",
            "value": 828.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/publish_us",
            "value": 106.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/end_us",
            "value": 117.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/idle_us",
            "value": 3670.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/publish_us",
            "value": 101.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/end_us",
            "value": 344.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/idle_us",
            "value": 19544.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/publish_us",
            "value": 238.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/end_us",
            "value": 33.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/idle_us",
            "value": 402.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/publish_us",
            "value": 232,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/end_us",
            "value": 38.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/idle_us",
            "value": 543.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/publish_us",
            "value": 218.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/end_us",
            "value": 46.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/idle_us",
            "value": 1145.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/publish_us",
            "value": 279.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/end_us",
            "value": 132.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/idle_us",
            "value": 4238.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/publish_us",
            "value": 1299.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/end_us",
            "value": 37.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/idle_us",
            "value": 475.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/publish_us",
            "value": 1235.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/end_us",
            "value": 41.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/idle_us",
            "value": 679.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/publish_us",
            "value": 1145.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/end_us",
            "value": 73.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/idle_us",
            "value": 1830.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/publish_us",
            "value": 1062.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/end_us",
            "value": 179,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/idle_us",
            "value": 7952.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/publish_us",
            "value": 4754.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/end_us",
            "value": 85.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/idle_us",
            "value": 1019.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/publish_us",
            "value": 4634.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/end_us",
            "value": 103.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/idle_us",
            "value": 1999.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/publish_us",
            "value": 4319.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/end_us",
            "value": 170.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/idle_us",
            "value": 5266.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/publish_us",
            "value": 4143.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/end_us",
            "value": 415,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/idle_us",
            "value": 21873.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/publish_us",
            "value": 154.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/end_us",
            "value": 31.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/idle_us",
            "value": 338.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/publish_us",
            "value": 166.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/end_us",
            "value": 34.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/idle_us",
            "value": 469,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/publish_us",
            "value": 193.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/end_us",
            "value": 54.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/idle_us",
            "value": 1107.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/publish_us",
            "value": 174.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/end_us",
            "value": 108.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/idle_us",
            "value": 4251.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/publish_us",
            "value": 746.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/end_us",
            "value": 49.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/idle_us",
            "value": 469.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/publish_us",
            "value": 728.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/end_us",
            "value": 63.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/idle_us",
            "value": 698.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/publish_us",
            "value": 750.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/end_us",
            "value": 92.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/idle_us",
            "value": 1875.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/publish_us",
            "value": 711.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/end_us",
            "value": 282.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/idle_us",
            "value": 8419.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/publish_us",
            "value": 2978.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/end_us",
            "value": 128.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/idle_us",
            "value": 1229.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/publish_us",
            "value": 3010.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/end_us",
            "value": 154.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/idle_us",
            "value": 2018.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/publish_us",
            "value": 2870.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/end_us",
            "value": 181.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/idle_us",
            "value": 5862.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/publish_us",
            "value": 2771.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/end_us",
            "value": 492.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/idle_us",
            "value": 22068.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=encode/ns_per_op",
            "value": 46.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode/ns_per_op",
            "value": 5.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode-varint/ns_per_op",
            "value": 8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=encode/ns_per_op",
            "value": 47.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode/ns_per_op",
            "value": 8.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode-varint/ns_per_op",
            "value": 8.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=encode/ns_per_op",
            "value": 52.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode/ns_per_op",
            "value": 7.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode-varint/ns_per_op",
            "value": 8.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=encode/ns_per_op",
            "value": 57,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode/ns_per_op",
            "value": 17.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode-varint/ns_per_op",
            "value": 11.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=encode/ns_per_op",
            "value": 52.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode/ns_per_op",
            "value": 5.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode-varint/ns_per_op",
            "value": 11.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=encode/ns_per_op",
            "value": 52.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode/ns_per_op",
            "value": 9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode-varint/ns_per_op",
            "value": 13,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=encode/ns_per_op",
            "value": 55.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode/ns_per_op",
            "value": 9.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode-varint/ns_per_op",
            "value": 13.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=encode/ns_per_op",
            "value": 60.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode/ns_per_op",
            "value": 21.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode-varint/ns_per_op",
            "value": 16,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/window-drop/ranges=1/drops=1/drop_us",
            "value": 28.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=32/drops=1/drop_us",
            "value": 18.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=32/drops=32/drop_us",
            "value": 43.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=1024/drops=1/drop_us",
            "value": 22.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=1024/drops=32/drop_us",
            "value": 129.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=1024/drops=1024/drop_us",
            "value": 86.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=8192/drops=1/drop_us",
            "value": 35.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=8192/drops=32/drop_us",
            "value": 1230.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=8192/drops=1024/drop_us",
            "value": 924.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/window-drop/ranges=8192/drops=8192/drop_us",
            "value": 447.95,
            "unit": "us"
          }
        ]
      }
    ]
  }
}