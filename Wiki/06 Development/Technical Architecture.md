---
title: "Technical Architecture"
aliases:
  - "Architecture"
  - "System Architecture"
tags:
  - development
  - architecture
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The high-level architecture of Blackwood Lodge: Roblox services, server/client split, match lifecycle, and the data flow between systems."
related:
  - "[[Development MOC]]"
  - "[[Project Structure]]"
  - "[[Technical Overview]]"
  - "[[Server Authority]]"
---

# Technical Architecture

> [!info] Scope
> This page is the 10,000-foot view. The detailed contracts live in [[Technical Overview]], [[Server Authority]], [[Networking and Remotes]], and [[Data Model]].

## The shape

Blackwood Lodge is a **server-authoritative Roblox experience** built in **Luau**. The server owns the match; the client renders it and sends intentions.

```text
┌─────────────────────────────────────────────────────────────┐
│                        ROBLOX PLACE                         │
│                                                             │
│  ┌──────────────┐    remotes    ┌─────────────────────────┐  │
│  │   CLIENT     │◄────────────►│         SERVER          │  │
│  │              │               │                         │  │
│  │ UI / Camera  │               │ MatchService            │  │
│  │ Input        │               │ MapService              │  │
│  │ Audio        │               │ ScenarioService         │  │
│  │ Prediction   │               │ ClueService             │  │
│  │ Accessibility│               │ CaseFileService         │  │
│  └──────────────┘               │ CombatService           │  │
│                                 │ SigilService            │  │
│                                 │ RitualService           │  │
│                                 │ VoteService             │  │
│                                 │ InventoryService        │  │
│                                 │ ProgressionService      │  │
│                                 │ TelemetryService        │  │
│                                 └───────────┬─────────────┘  │
│                                             │                │
│                              ┌──────────────┴─────────────┐  │
│                              │ DataStore / MemoryStore    │  │
│                              └────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Server responsibilities

| Service | Owns | Never trusts the client for |
|---|---|---|
| **MatchService** | Clock, phase, player lifecycle, win conditions | Phase transitions, timer changes |
| **MapService** | Seed, layout, rooms, doors, secrets, shift | Position, teleport, door state |
| **ScenarioService** | Card draw, customization, true answers | Scenario choice, answer values |
| **ClueService** | Clue manifest, containers, discovery, false clues | Search success, clue text |
| **CaseFileService** | Task state, submissions, letters, locks | Answers, correctness, letters |
| **CombatService** | Health, bullets, hits, friendly fire | Damage, hit registration |
| **SigilService** | Marks, sigil spawns, countdowns, breaks | Mark target, sigil break |
| **RitualService** | Channel, anchors, interruptions, reveal | Channel progress, reveal state |
| **VoteService** | Ballots, tallies, outcomes | Votes, results |
| **InventoryService** | Items, charges, trades, drops | Ownership, charges |
| **ProgressionService** | Cinders, coins, casebook, badges | Rewards, unlocks |
| **TelemetryService** | Events, counters, funnels | — |

## Client responsibilities

The client may:

- Render the world, UI, and audio.
- Predict movement, camera, and local animation.
- Show prompts and previews.
- Request interactions.
- Cache static content (item descriptions, lore text).

The client may **not**:

- Decide whether a clue is found.
- Decide whether an answer is correct.
- Know the killer's identity before the reveal.
- Know the scenario's answers.
- Change health, bullets, Cinders, or the clock.
- See other players' hidden information.

## The match lifecycle

```text
LOBBY
  └─ ALLOCATING (assign roles, seed, scenario)
      └─ SHOP (solo Curio Shop, killer staging)
          └─ ARRIVAL (teleport to foyer, discovery)
              └─ INVESTIGATION_I
                  └─ SHIFT (midnight reconfiguration)
                      └─ INVESTIGATION_II
                          └─ RITUAL (optional)
                              └─ LAST_HUNT (if revealed)
                                  └─ ESCAPE
                                      └─ RESULTS
                                          └─ CLEANUP
```

Each transition is a server event with a duration and a validation check. The client receives a phase snapshot and renders the matching HUD.

## Data flow: one clue

```text
1. MapService generates a seed.
2. ClueService builds a manifest: task, room, container, item, answer.
3. The server spawns the container and its prop.
4. The player interacts; the client sends SearchContainer(containerId).
5. The server validates distance, line of sight, cooldown, and state.
6. The server marks the clue found and replicates it to the team.
7. CaseFileService unlocks the task's answer options.
8. The player submits; the server validates and resolves.
9. ProgressionService awards Cinders and a letter.
```

## Data flow: one mark

```text
1. Killer sends MarkTarget(playerId).
2. Server validates range, line of sight, phase, cooldown, and immunity.
3. Server picks a sigil anchor with two routes and no locked-room trap.
4. Server spawns the sigil, starts the countdown, and replicates the mark.
5. Anyone sends BreakSigil(sigilId) after solving the puzzle.
6. Server validates the puzzle result and marks the victim saved.
7. If the timer expires, CombatService kills the victim.
```

## Persistence boundary

| Data | Store | Lifetime |
|---|---|---|
| Match state | Server memory | One match |
| Inventory | Server memory | One match |
| Scenario card | Server memory | One match |
| Profile | DataStore | Permanent |
| Session lock | MemoryStore | One session |
| Telemetry | Analytics queue | Eventual |
| Match history | DataStore (bounded) | 30 days |

## Failure modes

| Failure | Response |
|---|---|
| Server crashes | Match lost; players return to lobby; no penalty |
| Player disconnects | Rejoin window; role held; bot/spectator fallback |
| DataStore outage | Play continues; rewards queued; retry |
| Map generation fails | Fallback seed; log; no match start |
| Remote spam | Rate limit; kick on repeat |
| Exploit detected | Server correction; telemetry; escalation |

## Technology choices

| Choice | Decision | Why |
|---|---|---|
| Language | Luau | Roblox native, typed, fast enough |
| Sync | Rojo (recommended) | Files on disk, version control, AI-editable |
| UI | Roblox GUI + custom components | Native input, accessibility, performance |
| Data | DataStore + MemoryStore | Native, no external backend at launch |
| Map | Pre-baked modules + runtime assembly | Performance, art quality, determinism |
| Audio | Roblox SoundGroups + 3D emitters | Native spatialization |
| Voice | Roblox spatial voice | Platform-native, opt-in |

## What we are not building

- A custom engine.
- A dedicated external server fleet at launch.
- Cross-server matchmaking beyond Roblox teleport.
- User-generated content.
- A trading economy.
- A battle pass at launch.

## Related

- [[Technical Overview]]
- [[Server Authority]]
- [[Project Structure]]
- [[Match State Machine]]
- [[Data Model]]
