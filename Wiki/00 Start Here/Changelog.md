---
title: "Changelog"
aliases:
  - "Vault Changelog"
tags:
  - start
  - meta
  - status/active
status: active
updated: 2026-11-04
summary: "Record of changes to the vault itself: new pages, renames, decisions, and structural updates."
related:
  - "[[Decision Log]]"
  - "[[README]]"
---

# Changelog

## 2026-11-04 — Vault created and populated

### Structure
- Created the Obsidian vault at `A:\roblox game`.
- Added `.obsidian` configuration: graph color groups, templates folder, attachments folder, core plugins.
- Created the folder structure: `00 Start Here` through `09 Templates`, plus `game/` and `attachments/`.

### Start Here
- Added `README.md` at the vault root.
- Added [[Start Here]], [[How to Use This Vault]], [[AI Read Me]], [[Canonical Decisions]], [[Decision Log]], [[00 Start Here/Glossary|Glossary]], [[Open Questions]], [[Design Status]], [[Roadmap]], [[Changelog]], and [[Index]].
- Recorded 30 locked decisions, 14 proposed defaults, and 12 open questions.
- Documented the superseded decisions: 10 → 5 → 4 Case File tasks, random → open pistol choice, fixed → procedural map, fixed → randomized clues.

### Next
- Game Design pages.
- Story pages.
- Systems pages.
- Scenario cards.
- World and room catalog.
- Development and Studio MCP setup.
- Player wiki.
- Research and templates.

## 2026-11-04 — Vault v1.0 (content complete)

### Added
- Completed the design vault: **224 Markdown pages** across all ten sections.
- `01 Game Design`: vision, pillars, core loop, match flow, roles, win conditions, difficulty, matchmaking, tone, principles, inspirations.
- `02 Story`: story bible, setting, timeline, cult, nine guests, the lodge, the letter, characters, the killer, endings, environmental storytelling, spoiler policy.
- `03 Systems`: Case File, clues, five puzzle families, ritual, killer, combat, voting, shop, map, NPCs, scenario cards, social, progression, UI/UX, technical systems.
- `04 Scenarios`: ten complete scenario cards plus overview, template, and difficulty rules.
- `05 World`: floor plans, room catalog, 25 room pages, secret passages, landmarks, lighting, art direction, audio direction.
- `06 Development`: architecture, Studio MCP, Rojo, project structure, persistence, procedural generation, clue/scenario generation, client architecture, testing, roadmap, publishing, risks, code style, asset pipeline, audio implementation, performance, analytics, LiveOps, contributing.
- `07 Player Wiki`: spoiler-free player documentation, guides, FAQ, glossary, accessibility, safety, patch notes.
- `08 Research`: social deduction, noir/horror references, Roblox platform, voice chat, procedural generation, monetization, accessibility, competitive analysis.
- `09 Templates`: 13 page templates using the `Template - X` naming convention.
- Generated `00 Start Here/Index.md` from the vault contents.

### Tooling
- `game/tools/generate-scenarios.mjs` — scenario deck generator with answer validation.
- `game/tools/generate-rooms.mjs` — room catalog generator.
- `game/tools/build-index.mjs` — index generator.
- `game/tools/normalize-frontmatter.mjs` — adds a `status:` field derived from `status/...` tags.
- `game/tools/audit-links.mjs` — link and frontmatter audit.
- `game/tools/fix-links.mjs` — rewrites known broken or ambiguous wikilinks.
- Added the Studio MCP wrapper at `C:\Users\jpagu\.config\opencode\roblox-studio-mcp.cmd` and the `roblox-studio` entry in `opencode.jsonc`.

### Audit
- **224 pages, 0 unresolved links, 0 ambiguous basenames, 0 frontmatter issues.**
- Audit command: `node "A:\roblox game\game\tools\audit-links.mjs"` → `AUDIT OK`.

### Not built yet
- The Roblox place, Luau systems, UI, map geometry, and playable vertical slice. `game/` is still a project scaffold with generators and documentation. Implementation is the next phase.

## Template for future entries

```markdown
## YYYY-MM-DD — Title

### Added
- ...

### Changed
- ...

### Deprecated
- ...

### Decisions
- D-### ...
```
