---
title: "Networking and Remotes"
aliases:
  - "Remotes"
  - "Replication"
tags:
  - systems
  - technical
  - networking
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The remote event map, replication strategy, bandwidth budget, prediction rules, and the 10-player networking model."
related:
  - "[[Technical Overview]]"
  - "[[Server Authority]]"
  - "[[Performance and Telemetry]]"
---

# Networking and Remotes

> [!info] Model
> 10 players per server, 60 Hz server tick, 20 Hz replication for most gameplay state. The server is authoritative; the client predicts only its own movement and UI.

## Remote map

### Client → Server (intents)

| Remote | Payload | Rate limit |
|---|---|---|
| `SearchContainer` | `containerId` | 4/s |
| `SubmitAnswer` | `taskId`, `optionId` | 1/s |
| `UseItem` | `itemId`, `targetId` | 4/s |
| `Interact` | `targetId`, `action` | 4/s |
| `MarkTarget` | `targetPlayerId` | 1/s |
| `BreakSigil` | `sigilId`, `solution` | 2/s |
| `Fire` | `origin`, `direction` | 8/s |
| `Detain` | `targetPlayerId`, `holdTime` | 2/s |
| `Vote` | `voteId`, `candidateId` | 1/s |
| `TradeRequest` | `targetPlayerId`, `offer` | 1/s |
| `Ping` | `type`, `position` | 2/s |
| `Chat` | `channel`, `text` | 4/s |

### Server → Client (state)

| Remote | Payload | Frequency |
|---|---|---|
| `MatchState` | phase, clock, task count | On change + 1 Hz |
| `CaseFileSnapshot` | tasks, options, letters, locks | On change |
| `InventorySnapshot` | items, charges | On change |
| `SigilState` | sigil id, position, timer, victim | On change + 1 Hz |
| `HealthState` | player id, hp, wounded | On change |
| `VoteState` | vote id, candidates, tally | On change |
| `RitualState` | channel, anchors, interrupt | On change + 1 Hz |
| `Reveal` | killer ids, fifth letter | Once |
| `EndLedger` | outcome, payout lines | Once |

## Serialization

- Prefer **arrays and numbers** over long strings.
- Send IDs, not full objects.
- Batch clue discoveries into one snapshot per second.
- Compress the map layout into a seed + room list; clients build the visual from the same seed.
- Do not send the clue manifest to the client. Send only discovered clues.

## Prediction

| Action | Predicted? | Correction |
|---|---|---|
| Local movement | Yes | Server reconciliation |
| UI open/close | Yes | None |
| Search progress | Visual only | Server timer wins |
| Gun fire | Muzzle flash only | Server hit decides |
| Mark | Cooldown UI only | Server decides |
| Sigil break | Puzzle UI only | Server decides |

## Bandwidth budget

| Category | Budget |
|---|---|
| Movement | 15 KB/s per player |
| Gameplay state | 10 KB/s per player |
| UI snapshots | 5 KB/s per player |
| Chat/voice signaling | 5 KB/s per player |
| Total | < 50 KB/s per player |

## Latency handling

- The clock is server-authoritative; the client interpolates.
- Search and puzzle timers use server time, with a 200 ms grace.
- Votes have a 500 ms grace at the end.
- A player with > 300 ms ping sees a "poor connection" icon; the game does not kick them unless they are inactive.

## Reconnect

- The server keeps the player's slot for 120 seconds.
- On reconnect, the client receives a full snapshot: phase, inventory, case file, health, sigil state.
- If the match ended, the player receives the ledger.

## Related

- [[Server Authority]]
- [[Anti-Cheat]]
- [[Performance and Telemetry]]
