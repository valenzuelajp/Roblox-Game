---
title: "Analytics and KPIs"
aliases:
  - "Telemetry"
  - "Metrics"
tags:
  - development
  - analytics
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The events, KPIs, dashboards, and privacy rules used to tell whether Blackwood Lodge is fun, fair, and healthy."
related:
  - "[[Performance and Telemetry]]"
  - "[[Testing Strategy]]"
  - "[[LiveOps and Updates]]"
  - "[[Monetization]]"
---

# Analytics and KPIs

## What we measure

We measure three things:

1. **Fun:** do players finish matches, replay, and bring friends?
2. **Fairness:** do investigators and killers win at healthy rates, and do losses feel earned?
3. **Health:** does the game run, retain, and stay safe?

We do not measure anything we cannot explain to a player in one sentence.

## Event taxonomy

All events use `snake_case`, a `match_id`, a `player_id` (hashed), a timestamp, and a schema version.

### Match lifecycle

| Event | Payload |
|---|---|
| `match_start` | player_count, killer_count, scenario_id, seed_hash |
| `match_end` | ending_id, duration, tasks_solved, killers_stopped, escaped |
| `player_leave` | phase, reason, elapsed |
| `player_rejoin` | phase, elapsed |

### Shop and items

| Event | Payload |
|---|---|
| `shop_open` | player_count |
| `shop_purchase` | item_id, price, remaining_shillings |
| `shop_sellback` | item_id, refund |
| `item_use` | item_id, task, room |
| `item_drop` | item_id, reason |
| `item_trade` | item_id, from_role, to_role |

### Case File

| Event | Payload |
|---|---|
| `clue_found` | task, tier (free/item/false), room, container |
| `task_submit` | task, option_id, correct, had_item |
| `task_lockout` | task, duration |
| `false_letter` | task, planted |
| `ritual_start` | channeler_role, task_count |
| `ritual_interrupt` | cause, elapsed |
| `ritual_complete` | elapsed, attempts |
| `word_entered` | correct, attempts |

### Killer and combat

| Event | Payload |
|---|---|
| `mark` | killer_role, victim_role, distance, phase |
| `sigil_spawn` | room, distance_to_victim, distance_to_killer |
| `sigil_break` | breaker_role, puzzle_family, elapsed |
| `sigil_expire` | victim_role, elapsed |
| `shot` | shooter_role, target_role, hit, distance |
| `detain` | target_role, duration |
| `death` | role, cause, phase |
| `vote_cast` | vote_type, option, phase |
| `escape` | player_role, gate, elapsed |

### Technical

| Event | Payload |
|---|---|
| `load_time` | total_ms, map_ms, ui_ms |
| `fps_sample` | p50, p10, platform |
| `network_sample` | out_kb, in_kb, latency |
| `error` | code, context, build |
| `report` | category, phase |

## KPI targets

### Fun and retention

| KPI | Target | Why |
|---|---|---|
| Tutorial completion | > 80% | If they cannot learn it, they cannot love it |
| First-match completion | > 70% | Quitting mid-match is the loudest signal |
| Match completion | > 85% | The 30-minute commitment must hold |
| D1 retention | > 25% | Genre benchmark, not a promise |
| D7 retention | > 10% | Long-tail health |
| Average session | > 25 min | At least one match |
| Replay rate (same day) | > 30% | "One more match" |
| Friend invite rate | > 15% | Social games grow socially |

### Fairness

| KPI | Target | Why |
|---|---|---|
| Investigator win rate | 45–55% | Both sides must feel viable |
| Killer win rate | 45–55% | A killer who always loses is not scary |
| 4/4 task solve rate | 40–60% | The case is hard but not impossible |
| Wrong-answer rate | 20–35% | Mistakes should happen, not dominate |
| Sigil break rate | 50–70% | The rescue loop must feel playable |
| Ritual completion rate | 50–70% | The endgame must be reachable |
| Escape rate | 45–60% | The exit must be earned |

### Health

| KPI | Target |
|---|---|
| Crash-free sessions | > 99.5% |
| Report rate per 100 matches | < 2 |
| Voice opt-in rate | tracked, not targeted |
| Median FPS (mobile) | > 24 |
| Median FPS (PC) | > 45 |
| Load time p95 | < 12s |

## Dashboards

### Daily dashboard

- Matches started/ended.
- Completion rate by phase.
- Investigator/killer win rate.
- Crash rate.
- Report rate.
- FPS p10 by platform.

### Weekly dashboard

- Retention cohorts (D1/D7/D30).
- Task solve rate by task.
- Item pick rate and win rate.
- Sigil break rate by puzzle family.
- Ritual completion and interruption causes.
- Ending distribution.
- Monetization conversion (cosmetic only).

### Balance dashboard

- Win rate by player count, killer count, scenario, and map seed family.
- Average match duration by ending.
- Time-to-first-task, time-to-pistol, time-to-ritual.
- Deaths by phase and cause.
- Wrong-answer rate by task and item ownership.

## A/B testing rules

- Test one variable at a time.
- No test may change the odds of a paid item; monetization is cosmetic-only.
- No test may hide a mechanic from new players without disclosure.
- Run for at least 7 days or 10,000 matches, whichever is longer.
- Pre-register the hypothesis and the metric.
- Stop a test early only for safety or a catastrophic bug.
- Ship the winner only if the effect is > 2% and not explained by novelty.

## Privacy

- No real names, emails, or voice recordings.
- Player IDs are hashed per match; cross-match analysis uses a salted account hash.
- No chat content in analytics; only message counts and report categories.
- Data retention: raw events 90 days, aggregates 2 years.
- Players can opt out of non-essential analytics in settings where platform policy allows.
- Analytics must comply with Roblox's terms and applicable privacy law.

## Telemetry budget

- < 50 events per player per match.
- < 2 KB per event.
- Batch events every 10s; send on match end.
- Sample FPS/network at 1 Hz, not per frame.
- Drop non-critical events under server load; never drop reward or security events.

## What we do not measure

- Voice content.
- Political opinions.
- Personal identity.
- Anything that could be used to deanonymize a player.
- "Engagement" metrics that reward addiction rather than fun.

## Related

- [[Performance and Telemetry]]
- [[Testing Strategy]]
- [[LiveOps and Updates]]
- [[Monetization]]
