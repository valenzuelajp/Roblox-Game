---
title: "Technical Overview"
aliases:
  - "Architecture"
  - "Tech Stack"
tags:
  - systems
  - technical
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The Roblox/Luau architecture: server-authoritative match state, procedural generation, DataStore persistence, and the Studio MCP build workflow."
related:
  - "[[Server Authority]]"
  - "[[Networking and Remotes]]"
  - "[[Data Model]]"
  - "[[Match State Machine]]"
  - "[[Studio MCP Setup]]"
---

# Technical Overview

> [!info] Platform
> Roblox experience, Luau, server-authoritative. The server owns the truth. The client is a view and an input device.

## Architecture layers

```text
Roblox client (Luau)
  ├── Input, camera, UI, audio, prediction
  ├── Never owns answers, killer identity, clue locations, health, or the clock
  └── Sends intents: search, submit, mark, shoot, vote, interact

Roblox server (Luau)
  ├── Match state machine
  ├── Procedural map + clue manifest
  ├── Scenario selection + staging validation
  ├── Inventory, health, sigils, bullets, votes
  ├── Anti-cheat validation
  └── Persistence + telemetry

Roblox services
  ├── DataStoreService (profiles, casebook, stats)
  ├── MemoryStoreService (matchmaking queues, session locks)
  ├── MessagingService (cross-server events, optional)
  ├── TeleportService (lobby → match, rejoin)
  └── Analytics / custom telemetry
```

## Core services

| Service | Responsibility | Authority |
|---|---|---|
| **MatchService** | Creates, starts, ends matches | Server |
| **MapService** | Generates and validates the map | Server |
| **ScenarioService** | Draws cards, validates staging, owns answers | Server-only |
| **ClueService** | Places clues, owns the manifest | Server-only |
| **CaseFileService** | Task state, submissions, letters | Server |
| **InventoryService** | Items, charges, drops, trades | Server |
| **CombatService** | Health, bullets, hits, friendly fire | Server |
| **SigilService** | Marks, sigil spawns, countdowns, breaks | Server |
| **RitualService** | Channel, anchors, interrupts, reveal | Server |
| **VoteService** | Pistol/fate votes | Server |
| **ProgressionService** | Cinders, casebook, badges | Server + DataStore |
| **TelemetryService** | Events, funnels, errors | Server |

## Match lifecycle

1. **Lobby:** players queue, choose cosmetics, opt into voice.
2. **Allocate:** server reserves a match slot; players teleport.
3. **Shop:** solo shop instances; killer stages; purchases.
4. **Load:** the procedural map is generated, validated, and replicated.
5. **Play:** the state machine runs the 30-minute clock.
6. **Resolve:** ending, rewards, ledger.
7. **Persist:** profile and casebook update; teleport back to lobby.

## Procedural generation

The map is generated from a **seed**:

- Room graph and connections.
- Anchor placement.
- Modular room selection.
- Locks and keys.
- Secret passages.
- Clue manifest.
- Staging room.
- Midnight shift target.
- Validation pass.

The server generates the map once, validates it, then replicates the final layout. Clients never generate the map independently.

## Persistence

- **Profile:** Cinders, rank, cosmetics, badges, casebook, settings.
- **Session lock:** MemoryStore lock per player to prevent duplicate writes.
- **Autosave:** every 60 seconds and at match end.
- **Migrations:** versioned schema; backward-compatible reads.
- **Failure:** if DataStore is unavailable, the match still runs; progression is queued and retried.

## Security

- Server owns all answers and killer identity.
- No scenario data in the client until the reveal.
- Remote rate limits.
- Hit validation on the server.
- Movement sanity checks.
- Vote validation.
- Report and exploit telemetry.

See [[Anti-Cheat]].

## Performance targets

| Metric | Target |
|---|---|
| Server tick | 60 Hz |
| Replication | 20 Hz for most state; 10 Hz for distant props |
| Players per server | 10 |
| Map load | < 8 seconds |
| Client memory | < 1.5 GB on mobile |
| Frame rate | 30+ on low-end mobile, 60 on PC |
| Network | < 50 KB/s per player average |

## Tooling

- **Roblox Studio** for the place, UI, and playtesting.
- **Rojo** for source-controlled Luau (install planned).
- **Studio MCP** for AI-assisted inspection and Luau execution (see [[Studio MCP Setup]]).
- **Git** for the vault and code.
- **Selene / StyLua** for linting and formatting (optional).

## Deployment

- Development place: local Studio.
- Staging place: private Roblox experience.
- Production: public experience, versioned releases.
- Rollback: keep the previous place version; publish only after a smoke test.

## Risks

| Risk | Mitigation |
|---|---|
| Roblox API changes | Pin versions; abstract services; test in Studio |
| DataStore limits | Session locks, batching, retries |
| Exploiters | Server authority, validation, telemetry |
| Map generation soft-lock | Validation pass; reject and regenerate |
| Mobile performance | LOD, streaming, budget |
| Voice inconsistency | Text fallback; never require voice |
| Scope creep | MVP first; content behind flags |

## Related

- [[Server Authority]]
- [[Networking and Remotes]]
- [[Data Model]]
- [[Match State Machine]]
- [[Anti-Cheat]]
- [[Performance and Telemetry]]
