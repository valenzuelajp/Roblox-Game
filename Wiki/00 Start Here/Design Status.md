---
title: "Design Status"
aliases:
  - "Dashboard"
  - "Project Status"
tags:
  - start
  - status/active
status: active
updated: 2026-11-04
summary: "One-page dashboard of what is locked, proposed, open, and next for Blackwood Lodge."
related:
  - "[[Canonical Decisions]]"
  - "[[Open Questions]]"
  - "[[Roadmap]]"
---

# Design Status

**Last updated:** 2026-11-04
**Phase:** Design capture → vault build
**Working title:** Blackwood Lodge

## Counts

| Status | Count | Notes |
|---|---|---|
| Locked | 30 | Core concept, match shape, Case File, combat numbers, map randomization |
| Proposed | 14 | Death, voting, detain, ritual site, prices, Last Hunt |
| Open | 12 | The blockers listed below |
| Deferred | 1 | Full story round |
| Deprecated | 6 | Kept in [[Decision Log]] for history |

## The seven blockers

1. **Death/spectator** — [[Death and Spectator]]
2. **First pistol selection** — [[First Pistol]]
3. **Voting phases** — [[Voting Overview]]
4. **Win condition** — [[Win Conditions]]
5. **Detain/rescue** — [[Detain System]]
6. **Ritual site** — [[Ritual Site]]
7. **Item catalog/prices** — [[Item Catalog]]

## What is safe to build now

- Vault structure and documentation.
- Roblox Studio MCP connection.
- Project skeleton and Rojo setup.
- Map socket/room data schema.
- Puzzle prototypes (five families).
- Clue container props and search interaction.
- Case File UI shell with placeholder answers.
- Shop UI shell with placeholder prices.
- Match state machine skeleton.

## What must wait for answers

- Death/spectator implementation.
- Vote UI and flow.
- Detain cell and rescue.
- Ritual site layout.
- Final item economy.
- Story canon and final title.

## Vault build status

| Check | Result |
|---|---|
| Markdown pages | **224** |
| Unresolved links | **0** |
| Ambiguous basenames | **0** |
| Frontmatter issues | **0** |
| Audit command | `node "A:\roblox game\game\tools\audit-links.mjs"` |
| Last audit | 2026-11-04 — `AUDIT OK` |

The design vault is content-complete. The Roblox place, Luau systems, UI, and map geometry are **not built yet**.

## Next actions

### Design

- [ ] Answer the seven blockers in [[Open Questions]].
- [ ] Finish the story round (setting, cult, nine guests, characters, endings).
- [ ] Decide the final game title (O-008).
- [ ] Confirm the exact Hollow Word list (O-010).
- [ ] Review the ten scenario cards for balance and tone.
- [ ] Run a table-read of the Case File and ritual flow.

### Implementation

- [ ] Restart OpenCode, open Roblox Studio, and verify the `roblox-studio` MCP server.
- [ ] Create the Rojo project skeleton from `06 Development/Project Structure`.
- [ ] Build the grey-box vertical slice: 8 anchors + 8 modular rooms, lobby, roles, clock, shop, 4 tasks, zodiac puzzle, mark/sigil/death, first pistol, ritual/reveal/exit/ending, results.
- [ ] Prototype the map generator with 100 validated seeds.
- [ ] Prototype the sigil loop.
- [ ] Build the Case File and evidence board UI.
- [ ] Run the first 6-player bot playtest.
- [ ] Run the first human playtest.

## Health check

| Area | State |
|---|---|
| Core loop | Strong |
| Case File | Strong; answer flow locked at four tasks + ritual |
| Killer loop | Strong |
| Endgame | Strong concept; voting/detain and win condition still open |
| Map | Designed; generation validation pending |
| Story | Provisional; story round deferred |
| Economy | Item catalog and prices drafted; balance pass pending |
| UI | Designed; not implemented |
| Technical | Architecture and toolchain documented; no code yet |
| Wiki | **Complete — 224 pages, audit clean** |
