---
title: "Game Code"
aliases:
  - "game/"
  - "Roblox Project"
tags:
  - development
  - code
  - status/proposed
updated: 2026-11-04
summary: "Entry point for the Roblox/Luau code folder. Design lives in the vault; this folder holds the implementation, tools, and build project."
related:
  - "[[Development MOC]]"
  - "[[Project Structure]]"
  - "[[Technical Architecture]]"
  - "[[Toolchain and Rojo]]"
---

# Game Code

> [!warning] Status: design phase
> The design vault is the source of truth. The Roblox place has not been built yet. This folder currently holds the generators and will hold the Rojo project.

## What lives here

```text
game/
  README.md                  this file
  default.project.json       Rojo project mapping (to be added)
  rokit.toml                 toolchain pins (to be added)
  src/
    server/                  server-authoritative services
    client/                  controllers, UI, audio, input
    shared/                  types, constants, puzzle logic, economy
  assets/                    source art/audio references
  tools/
    generate-scenarios.mjs   builds 04 Scenarios
    generate-rooms.mjs       builds 05 World/Rooms
    build-index.mjs          builds 00 Start Here/Index.md
  tests/                     unit/property/golden-seed tests
  build/                     generated .rbxlx / .rbxl (gitignored)
```

## Current tools

| Tool | Command | Output |
|---|---|---|
| Scenario generator | `node "A:/roblox game/game/tools/generate-scenarios.mjs"` | `04 Scenarios/*.md` |
| Room generator | `node "A:/roblox game/game/tools/generate-rooms.mjs"` | `05 World/Rooms/*.md` + `Room Catalog.md` |
| Index builder | `node "A:/roblox game/game/tools/build-index.mjs"` | `00 Start Here/Index.md` |

The generators are idempotent: they rewrite their generated pages from the data arrays at the top of each file. Edit the data, not the generated pages, when changing scenarios or rooms.

## Toolchain

The recommended stack is documented in [[Toolchain and Rojo]]:

- Roblox Studio
- Rojo
- Rokit
- Git
- Node.js (already installed)
- Optional: Studio MCP for AI-assisted Studio work ([[Studio MCP Setup]])

## First build target

The first vertical slice is defined in [[Development MOC]]:

- Grey-box 8 anchors + 8 modular rooms.
- Lobby, role assignment, 30-minute clock.
- Shop with 5 items.
- Four Case File tasks.
- One puzzle family (zodiac).
- Mark → sigil → death.
- First pistol.
- Ritual → reveal → exit → ending.
- Results screen.
- 6-player bot playtest.

Do not build content before the loop is fun. See [[Build Roadmap]].

## Rules

- **Server owns truth.** No answer, clue location, killer identity, health, bullet, or Cinder value is decided on the client.
- **No soft-locks.** Every generated seed must be completable.
- **No secrets in the repo.** Do not commit API keys, webhooks, or private tokens.
- **Design changes go through the vault.** Update [[Open Questions]] or [[Decision Log]] first, then code.
- **Generated files are disposable.** Change the generator, not the output.

## Related

- [[Development MOC]]
- [[Project Structure]]
- [[Technical Architecture]]
- [[Code Style]]
- [[Testing Strategy]]
