---
title: "Development MOC"
aliases:
  - "Build MOC"
  - "Engineering Index"
tags:
  - moc
  - development
  - status/active
status: active
updated: 2026-11-04
summary: "Map of Content for building Blackwood Lodge: architecture, toolchain, generation, testing, milestones, and publishing."
related:
  - "[[Technical Overview]]"
  - "[[Build Roadmap]]"
  - "[[Studio MCP Setup]]"
  - "[[Project Structure]]"
---

# Development MOC

> [!info] What this folder is for
> The design vault explains **what** the game is. This folder explains **how to build it**. Every page here should be actionable by a programmer, a builder, or an AI agent working in `game/`.

## Build principles

1. **The vault is the source of truth.** If code and wiki disagree, fix one and record the decision.
2. **Server authority, always.** The client sends intentions, never outcomes.
3. **No soft-locks.** Every generated match must be completable.
4. **Build the loop before the content.** A grey-box match that works beats a beautiful match that does not.
5. **Test the seed, not just the feature.** Procedural systems need batch validation.
6. **Measure before tuning.** Every balance change needs telemetry.
7. **Ship small.** A vertical slice on the platform is worth more than a private alpha with no date.

## Reading order

### For a new programmer

1. [[Technical Architecture]]
2. [[Project Structure]]
3. [[Toolchain and Rojo]]
4. [[Studio MCP Setup]]
5. [[DataStore and Persistence]]
6. [[Procedural Map Generation]]
7. [[Clue and Scenario Generation]]
8. [[Client Architecture]]
9. [[Testing Strategy]]
10. [[Build Roadmap]]

### For a builder or artist

1. [[Project Structure]]
2. [[Asset Pipeline]]
3. [[05 World/Art Direction|Art Direction]]
4. [[05 World/Audio Direction|Audio Direction]]
5. [[05 World/Floor Plans|Floor Plans]]
6. [[05 World/Room Catalog|Room Catalog]]
7. [[Performance Budgets]]

### For a producer

1. [[Build Roadmap]]
2. [[Risks and Mitigations]]
3. [[Publishing Checklist]]
4. [[Analytics and KPIs]]
5. [[LiveOps and Updates]]
6. [[Contributing]]

## Page index

| Page | Purpose | Status |
|---|---|---|
| [[Technical Architecture]] | Service map, data flow, server/client split | proposed |
| [[Studio MCP Setup]] | Connect Roblox Studio to OpenCode | proposed |
| [[Toolchain and Rojo]] | Install and use the build toolchain | proposed |
| [[Project Structure]] | Folder layout and naming | proposed |
| [[DataStore and Persistence]] | Profiles, saving, migrations | proposed |
| [[Procedural Map Generation]] | Seed-to-map pipeline | proposed |
| [[Clue and Scenario Generation]] | Scenario loading, clue placement, validation | proposed |
| [[Client Architecture]] | UI, input, camera, audio, replication | proposed |
| [[Testing Strategy]] | Unit, integration, playtest, soak, security | proposed |
| [[Build Roadmap]] | M0–M5 milestones and exit criteria | proposed |
| [[Publishing Checklist]] | Roblox listing, moderation, launch | proposed |
| [[Risks and Mitigations]] | Risk matrix and owners | proposed |
| [[Code Style]] | Luau conventions | proposed |
| [[Asset Pipeline]] | Blender, textures, optimization | proposed |
| [[Audio Implementation]] | Sound groups, occlusion, voice | proposed |
| [[Performance Budgets]] | Frame, memory, network, load targets | proposed |
| [[Analytics and KPIs]] | Events, dashboards, experiments | proposed |
| [[LiveOps and Updates]] | Seasons, cadence, moderation | proposed |
| [[Contributing]] | Workflow, branches, reviews, wiki updates | proposed |

## Current build state

| Area | State | Notes |
|---|---|---|
| Design vault | **Complete first pass** | Story, systems, scenarios, world, development |
| Code | **Not started** | `game/` contains tools and a README only |
| Roblox place | **Not created** | Need a starter `.rbxlx` or Rojo project |
| Studio MCP | **Researched** | Wrapper and config pending |
| Playtest | **Not started** | Needs grey-box map and match loop |

## The first vertical slice

The first playable build should include:

- [ ] One grey-box map with 8 anchors and 8 modular rooms.
- [ ] Lobby, role assignment, and 30-minute clock.
- [ ] Curio Shop with 5 items and 100 Shillings.
- [ ] Four Case File tasks with free clues and item clues.
- [ ] One puzzle family (zodiac) for sigils and seals.
- [ ] Killer mark → sigil → countdown → death.
- [ ] First pistol at 1/4.
- [ ] Ritual, reveal, exit, and one ending.
- [ ] Server-authoritative state and a results screen.
- [ ] A full 6-player bot playtest.

Everything else is content, polish, and scale.

## Related

- [[Technical Overview]]
- [[Build Roadmap]]
- [[Risks and Mitigations]]
- [[Canonical Decisions]]
