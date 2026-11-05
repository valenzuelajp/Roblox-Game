---
title: "Player Count and Matchmaking"
aliases:
  - "Lobby Sizes"
  - "Matchmaking"
tags:
  - game-design
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Lobby sizes, killer count, role assignment, party rules, queue behavior, disconnects, and the matchmaking flow."
related:
  - "[[01 Game Design/Roles|Roles]]"
  - "[[Win Conditions]]"
  - "[[Match Flow]]"
---

# Player Count and Matchmaking

## Supported sizes

| Players | Investigators | Killers | Rooms | Notes |
|---|---|---|---|---|
| 6 | 5 | 1 | 20–22 | Minimum viable match |
| 7 | 6 | 1 | 20–22 | One killer |
| 8 | 6 | 2 | 26–28 | Partners |
| 9 | 7 | 2 | 26–28 | Partners |
| 10 | 8 | 2 | 26–30 | Full lobby |

**Minimum:** 6 players.
**Maximum:** 10 players.

## Why 6–10

- 6 is the smallest number where a killer can hide and the team can split across tasks.
- 10 is the largest number where a 30-minute match still gives everyone a meaningful role.
- More than 10 makes the house too crowded and the Case File too easy to brute-force.
- Fewer than 6 makes the killer too obvious.

## Matchmaking flow

```text
Lobby
  → Ready check
  → Count players
  → Assign roles (random)
  → Teleport to a reserved match server
  → Solo shop (4 min)
  → Match (30 min)
  → Results
  → Return to lobby
```

## Queue rules

- **Solo queue:** fills with other solo players.
- **Party queue:** parties up to 5; parties can be split across teams.
- **Private server:** host sets the player count; roles still random.
- **Region:** prefer the same region for voice latency.
- **Fill:** a lobby waits up to 60 seconds for the minimum; then it starts with 6+.
- **No backfill:** matches are sealed at start; a disconnect can rejoin but a new player cannot join.

## Party rules

| Rule | Value |
|---|---|
| Max party size | 5 |
| Party split | Allowed |
| Same-team guarantee | None at launch |
| Voice | Party voice is separate from proximity voice? No; proximity voice only in-match |
| Streamer mode | Hides names in the lobby; not in-match |

## Role assignment

- Random at match start.
- Killers are never in the same party? Not guaranteed; parties can contain both killers.
- The first pistol is never given to a killer (until the vote system is finalized).
- If a killer disconnects, the partner continues; if solo, the match continues.
- If the lobby drops below 6 before the match starts, requeue.

## Disconnect and rejoin

| Situation | Rule |
|---|---|
| Disconnect in the shop | Rejoin within 2 minutes; default loadout if not |
| Disconnect in the match | Body remains; items drop; rejoin within 5 minutes |
| Disconnect as killer | Partner continues; solo killer match continues |
| Host disconnect | Roblox server persists; no host migration needed |
| All players disconnect | Server shuts down; no rewards |

## Voice and text

- Voice is recommended, never required.
- Text chat is always available (subject to Roblox filters).
- The lobby shows a voice icon for players with voice enabled.
- A text-only player must be able to solve every task and vote.
- The ping wheel covers "come here," "danger," "I found something," "follow me," "yes," "no."

## Matchmaking edge cases

| Case | Rule |
|---|---|
| 5 players ready | Wait up to 60s; then cancel and return to lobby |
| 11 players | Cannot start; split into two lobbies |
| Party of 5 + solo queue | Fill to 10 if possible; otherwise start at 6+ |
| Duplicate names | Roblox handles display names; use user IDs internally |
| Underage voice | Text fallback; no voice requirement |
| Console/mobile | Same matchmaking pool; UI adapts |

## Related

- [[01 Game Design/Roles|Roles]]
- [[Match Flow]]
- [[Voice and Text]]
- [[Open Questions]]
