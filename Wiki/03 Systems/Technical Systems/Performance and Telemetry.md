---
title: "Performance and Telemetry"
aliases:
  - "Telemetry"
  - "Performance Budget"
tags:
  - systems
  - technical
  - performance
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Frame, memory, network, and load-time budgets, plus the telemetry events, dashboards, and privacy rules."
related:
  - "[[Technical Overview]]"
  - "[[Networking and Remotes]]"
  - "[[Anti-Cheat]]"
---

# Performance and Telemetry

> [!info] Target devices
> The game must run at **30+ FPS on a low-end mobile device** and **60 FPS on a mid-range PC**. The art direction is dark and detailed, but the budget is mobile-first.

## Performance budgets

| Metric | Budget |
|---|---|
| Server tick | 60 Hz |
| Replication | 20 Hz gameplay; 10 Hz distant props |
| Client frame time | < 33 ms mobile; < 16 ms PC |
| Draw calls | < 500 mobile; < 1,500 PC |
| Triangles | < 250k mobile; < 1M PC |
| Texture memory | < 512 MB mobile; < 1.5 GB PC |
| Map load | < 8s |
| Match join | < 15s |
| Network | < 50 KB/s per player |
| UI redraw | < 2 ms per frame |

## Rendering strategy

- **StreamingEnabled** for the map.
- **Occlusion culling** via walls and doors.
- **LOD** for props and furniture.
- **Baked lighting** for static rooms; dynamic lights limited to 4 per room.
- **Particles** capped per quality tier.
- **Rain** is a screen-space effect plus a few emitters, not a particle per drop.
- **Shadows** off on mobile; blob shadows only.

## Audio strategy

- 3D positional audio for footsteps, doors, and sigils.
- Max 16 simultaneous emitters per player.
- Voice is handled by Roblox, not the game.
- Music is adaptive but not per-frame.
- Subtitles for all voiced lines.

## Telemetry events

| Event | Fields | Purpose |
|---|---|---|
| `match_start` | seed, player_count, scenario_id | Balance |
| `shop_purchase` | item_id, price, remaining | Economy |
| `clue_found` | task, tier, room, item, time | Pacing |
| `task_submitted` | task, option, correct, time | Difficulty |
| `sigil_spawned` | victim, room, distance | Fairness |
| `sigil_broken` | breaker, item, time | Rescue loop |
| `death` | victim, cause, time | Pacing |
| `ritual_start` | channeler, time | Endgame |
| `ritual_interrupt` | killer, method | Balance |
| `reveal` | killers, time | Endgame |
| `shot` | shooter, target, hit, distance | Combat |
| `vote` | vote_id, candidate, tally | Social |
| `ending` | ending_id, tasks, killers, escape | Outcomes |
| `payout` | cinders, multiplier | Economy |
| `report` | category, context | Safety |
| `error` | code, stack, context | Stability |

## Dashboards

1. **Match health:** completion rate, crash rate, average duration.
2. **Case difficulty:** per-task solve rate, wrong-answer rate, item usage.
3. **Economy:** purchases, duplicate rate, Cinder inflow/outflow.
4. **Combat:** hit rate, friendly fire rate, average bullets used.
5. **Endgame:** ritual completion, interrupt rate, Last Hunt outcomes.
6. **Retention:** first-match, day 1, day 7.
7. **Safety:** reports per 1,000 matches, action rate.

## Privacy

- No voice recording.
- Chat text stored only for moderation review, with retention limits.
- Telemetry uses user IDs only where needed; aggregate where possible.
- Follow Roblox privacy policy and regional law.
- Provide a deletion path through platform support.

## A/B testing

Only for **presentation and tuning**, never for fairness:

- Shop prices within the proposed range.
- Hint text.
- HUD layout.
- Onboarding copy.
- Puzzle time.

Never A/B test the killer's identity, the answers, or the reward formula without disclosure.

## Related

- [[Technical Overview]]
- [[Networking and Remotes]]
- [[Anti-Cheat]]
