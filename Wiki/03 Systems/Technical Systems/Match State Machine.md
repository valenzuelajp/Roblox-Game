---
title: "Match State Machine"
aliases:
  - "Match Flow State"
  - "Game States"
tags:
  - systems
  - technical
  - status/locked
status: locked
updated: 2026-11-04
summary: "The authoritative match states, transition conditions, timers, disconnect handling, and failure recovery."
related:
  - "[[Match Flow]]"
  - "[[Technical Overview]]"
  - "[[Server Authority]]"
---

# Match State Machine

> [!info] One clock
> The server owns the match clock. Every phase transition is a server event. Clients render the phase; they never decide it.

## States

```text
LOBBY
  → ALLOCATING
  → SHOP
  → ARRIVAL
  → INVESTIGATION_I
  → SHIFT
  → INVESTIGATION_II
  → RITUAL
  → LAST_HUNT
  → ESCAPE
  → RESULTS
  → CLEANUP
```

| State | Duration | Server checks |
|---|---|---|
| **LOBBY** | Until 6–10 players | Player count, cosmetics, voice opt-in |
| **ALLOCATING** | ≤ 5s | Server slot, teleport |
| **SHOP** | 4:00 | Shop timer, staging confirmation, purchases |
| **ARRIVAL** | 2:00 | Body discovery, Case File open |
| **INVESTIGATION_I** | 8:00 | Tasks, clues, marks |
| **SHIFT** | 3s transition | Map variant swap, chapel/vault unseal |
| **INVESTIGATION_II** | 10:00 | Tasks, marks, second pistol |
| **RITUAL** | 30s channel + retries | Channel, anchors, interrupts |
| **LAST_HUNT** | 60s | Speed, wallhack, no cooldown |
| **ESCAPE** | Until 7:00 AM | Gate word, exits |
| **RESULTS** | 15s | Payout, ledger |
| **CLEANUP** | ≤ 5s | Persist, teleport back |

## Transition rules

- A phase cannot be skipped.
- The clock advances only on the server.
- The ritual can start only after 4/4 tasks and the midnight shift.
- The Last Hunt starts only when the ritual completes.
- The match ends at 7:00 AM, or earlier on a win condition.
- If the server crashes, the match is void; players keep match-earned Cinders? Proposed: yes, but no win badge. Log it.

## Disconnect and rejoin

| When | Behavior |
|---|---|
| Lobby | Remove from queue; no penalty |
| Shop | Hold slot 2 minutes; rejoin resumes shop |
| Match, < 2 min | Reconnect with full snapshot |
| Match, > 2 min | Become a ghost; no rejoin |
| Results | Ledger is shown on next login |
| Server crash | Match void; partial Cinders; no badge |

## Failure recovery

- **Map validation fails:** regenerate up to 3 times; if it still fails, fall back to a hand-authored safe map.
- **Scenario validation fails:** fall back to the default card.
- **Clue placement fails:** place the clue in the task's anchor room.
- **DataStore fails:** queue the write; retry with backoff.
- **Player teleport fails:** keep them in the lobby; do not start the match with a missing player.

## Observability

Every transition logs:

- Match ID, seed, player count.
- Phase, timestamp, duration.
- Task count, sigil count, kills.
- Errors and retries.

## Related

- [[Match Flow]]
- [[Technical Overview]]
- [[Server Authority]]
