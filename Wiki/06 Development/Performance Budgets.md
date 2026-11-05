---
title: "Performance Budgets"
aliases:
  - "Perf Budgets"
  - "Frame Budget"
tags:
  - development
  - performance
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The frame, memory, network, and load budgets for Blackwood Lodge, with profiling gates and degradation modes."
related:
  - "[[Technical Overview]]"
  - "[[Client Architecture]]"
  - "[[Asset Pipeline]]"
  - "[[Testing Strategy]]"
---

# Performance Budgets

## Targets

| Platform | Target | Minimum |
|---|---|---|
| PC (dedicated GPU) | 60 FPS | 45 FPS |
| PC (integrated GPU) | 45 FPS | 30 FPS |
| Mobile (mid-range) | 30 FPS | 24 FPS |
| Console | 60 FPS | 30 FPS |
| Server | 60 Hz tick | 30 Hz under load |
| Load time | < 8s | < 12s |
| Reconnect | < 5s | < 10s |

The game is a 10-player social deduction match, not a shooter. **Stable 30 FPS on mobile is better than unstable 60 on PC.**

## Frame budget (16.6 ms at 60 FPS)

| System | Budget |
|---|---|
| Rendering | 8.0 ms |
| Physics | 3.0 ms |
| Luau (server) | 2.0 ms |
| Luau (client) | 1.5 ms |
| Animation | 1.0 ms |
| Audio | 0.5 ms |
| UI | 0.6 ms |
| Headroom | 1.0 ms |

At 30 FPS mobile, the budget doubles. The rendering budget is the first to degrade.

## Rendering budgets

| Metric | Budget |
|---|---|
| Visible parts | < 15,000 |
| Draw calls (world) | < 800 |
| Draw calls (UI) | < 150 |
| Unique meshes on screen | < 150 |
| Transparent parts | < 100 |
| Particle emitters | < 40 |
| Dynamic lights | < 12 |
| Shadow-casting lights | < 4 |
| Texture memory | < 512 MB |
| Streaming radius | 512 studs |

Rules:

- Bake lighting for static rooms. Dynamic lights only for practicals, the ritual, and the killer's sabotage.
- Use `Future` lighting on PC; fall back to `ShadowMap` on mobile.
- No real-time reflections at launch.
- No more than 2 transparent layers over the camera.
- Use impostors for distant rooms and the exterior.
- Cull the cellar and attic when the player is on the opposite floor.

## Physics budgets

| Metric | Budget |
|---|---|
| Awake parts | < 2,000 |
| Assembly count | < 1,500 |
| Contact pairs | < 8,000 |
| Raycasts per frame (server) | < 200 |
| Raycasts per frame (client) | < 100 |

- Most architecture is anchored.
- Props are anchored until interacted with.
- No unanchored clutter.
- Use `SpatialQuery` and `OverlapParams` with tight filters.
- Do not use `Touched` for gameplay-critical detection; use raycasts and region checks.

## Network budgets

| Metric | Budget |
|---|---|
| Outbound per client | < 50 KB/s |
| Inbound per client | < 100 KB/s |
| Remote events per second | < 30 |
| Replication rate | 20 Hz |
| Snapshot size | < 8 KB |
| Chat messages per second | < 5 |

- Server broadcasts state snapshots at 20 Hz, not per-frame.
- Clue and inventory updates are event-driven, not replicated every frame.
- Use `UnreliableRemoteEvent` only for cosmetic effects.
- Compress large payloads (clue manifests) into compact arrays.
- Never send the scenario card or true answers to a non-killer client.

## Memory budgets

| Metric | Budget |
|---|---|
| Server memory | < 1.5 GB |
| Client memory (PC) | < 2.0 GB |
| Client memory (mobile) | < 1.2 GB |
| Luau heap (server) | < 300 MB |
| Luau heap (client) | < 200 MB |
| Audio memory | < 40 MB |
| UI textures | < 128 MB |

Watch for:

- Leaked connections (`Touched`, `Heartbeat`, `RenderStepped`).
- Unparented instances held by tables.
- Growing arrays of telemetry events.
- Cloned models that are never destroyed.
- `wait()` loops that never terminate.

## Load time

| Phase | Budget |
|---|---|
| Join server | < 3s |
| Load lobby | < 2s |
| Generate map | < 2s |
| Stream first room | < 1s |
| Total to playable | < 8s |

- Preload UI and shop assets during the lobby.
- Generate the map on the server before the shop ends.
- Stream the foyer and the player's spawn room first.
- Show a diegetic loading card (a case file stamp), not a spinner.

## Profiling tools

- **MicroProfiler** for frame spikes.
- **Developer Console** for memory and network.
- **Stats** panel for parts, draw calls, triangles.
- **Luau profiler** for script hot spots.
- **Roblox Analytics** for crash rate and FPS percentiles.
- Custom telemetry for load time, generation time, and remote size.

## Gates

A build fails the performance gate if:

- Mobile median FPS < 24 in a 10-player match.
- PC median FPS < 45.
- Load time > 12s at p95.
- Server memory > 1.5 GB after 30 minutes.
- Any remote sends the scenario card or true answers to a non-killer.
- A single frame spike > 100 ms in the first minute.

## Degradation modes

| Mode | Trigger | Changes |
|---|---|---|
| **High** | PC, good GPU | Future lighting, full particles, shadows |
| **Medium** | PC integrated / console | ShadowMap, reduced particles, no reflections |
| **Low** | Mobile | Voxel lighting, no dynamic shadows, half particles, 30 FPS cap |
| **Battery** | Mobile low power | 24 FPS cap, no rain particles, reduced audio voices |
| **Blackout** | Gameplay event | Lights off, but critical clues keep a faint emissive fallback |

The player can override the mode in settings. The game never silently drops below 24 FPS without a visible notice.

## Performance testing

- 10-player bot match on a mid-range mobile device every build.
- 30-minute soak test for memory leaks.
- 10,000-seed map generation sweep for generation time and part count.
- Network simulation: 150 ms latency, 5% packet loss, 1 Mbps.
- Thermal test: 20 minutes on mobile, measure FPS decay.
- Regression gate: no more than 10% slower than the previous build.

## Related

- [[Technical Overview]]
- [[Client Architecture]]
- [[Asset Pipeline]]
- [[Testing Strategy]]
