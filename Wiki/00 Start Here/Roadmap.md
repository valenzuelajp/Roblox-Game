---
title: "Roadmap"
aliases:
  - "Project Roadmap"
  - "Milestones"
tags:
  - start
  - planning
  - status/active
status: active
updated: 2026-11-04
summary: "Phased plan from design lock to Roblox publish, with deliverables and exit criteria for each milestone."
related:
  - "[[Design Status]]"
  - "[[Build Roadmap]]"
  - "[[06 Development/Build Roadmap#Milestones|Milestones]]"
---

# Roadmap

The project moves in phases. Each phase has an exit criterion; do not start the next phase because the previous one is "mostly done."

## Phase 0 — Design capture (current)

**Goal:** put the whole design into the vault so humans and AI share one source of truth.

**Deliverables:**
- Obsidian vault with `.obsidian` config and graph colors.
- Start Here, decision records, glossary, open questions.
- Game design, story, systems, scenarios, world, development, player wiki, research, templates.
- Roblox Studio MCP documented.

**Exit:** the seven blockers are answered and the vault has no orphan core pages.

## Phase 1 — Prototype

**Goal:** prove the core loop in a grey-box place.

**Deliverables:**
- Rojo project skeleton.
- Match state machine with a 30-minute timer.
- Four Case File tasks with placeholder clues.
- Sigil mark → physical sigil → puzzle → death.
- First pistol with four bullets and 1/2 HP.
- Basic shop with three items.
- Ritual channel and killer reveal.
- Grey-box map with 8 rooms.

**Exit:** two full 30-minute matches can be played start to finish without admin intervention.

## Phase 2 — Vertical slice

**Goal:** prove the game feels like Blackwood Lodge.

**Deliverables:**
- 12–16 rooms with art pass.
- Procedural layout with 20 validated seeds.
- Randomized clue placement with manifest.
- Full item catalog draft.
- Four scenarios.
- Voice/text integration and dead chat.
- Voting and detain (once answered).
- Basic UI/UX for Case File, shop, map, ritual.
- One complete art/audio direction pass.

**Exit:** external playtesters can learn the game from the tutorial and finish a match; killer/investigator win rates are within 35–65%.

## Phase 3 — Content complete

**Goal:** all launch content exists.

**Deliverables:**
- 24–28 rooms and variants.
- 10 scenario cards.
- All five puzzle families with difficulty tiers.
- Full investigator and killer item catalog.
- All NPCs, dialogue, testimony, and keys.
- All UI screens, accessibility options, settings.
- Tutorial and player handbook.
- Full audio pass: ambience, music, stingers, voice lines.
- Localization-ready strings.

**Exit:** content lock; no placeholders in player-facing text.

## Phase 4 — Polish and balance

**Goal:** make it shippable.

**Deliverables:**
- Performance pass for PC, mobile, console.
- Anti-cheat and exploit review.
- Moderation and reporting flows.
- Balance telemetry and tuning.
- Bug fixing.
- Store page, thumbnail, description, age rating.
- Private playtests and creator feedback.

**Exit:** crash-free rate, match completion, and report rate meet targets; no severity-1 bugs.

## Phase 5 — Publish and live ops

**Goal:** launch and keep it healthy.

**Deliverables:**
- Published experience.
- Update cadence.
- Seasonal cosmetics.
- Community events.
- Balance patches.
- Content roadmap.

**Exit:** live.

## Milestones

| Milestone | Phase | Definition of done |
|---|---|---|
| M0 — Vault complete | 0 | All core pages exist and are linked |
| M1 — Grey-box loop | 1 | 30-minute match playable |
| M2 — Vertical slice | 2 | Art pass + 4 scenarios + procedural map |
| M3 — Content complete | 3 | 10 scenarios + 24–28 rooms + all items |
| M4 — Release candidate | 4 | No severity-1 bugs; performance targets met |
| M5 — Launch | 5 | Published and monitored |

## Critical path

1. Answer the seven blockers.
2. Finish the story round.
3. Build the map generator and validate seeds.
4. Build the sigil loop and combat.
5. Build the Case File and clue manifest.
6. Build the ritual and Last Hunt.
7. Build the shop and item catalog.
8. Build the UI.
9. Art/audio pass.
10. Playtest and balance.

## Scope guardrails

- No ranked mode at launch.
- No user-generated maps at launch.
- No trading economy at launch.
- No characters beyond the core cast at launch.
- No more than 28 rooms at launch.
- No mechanic that requires voice.
- No pay-to-win.
