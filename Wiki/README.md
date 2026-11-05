---
title: "Blackwood Lodge — Design Vault & Game Wiki"
aliases:
  - "README"
  - "Vault Home"
  - "Blackwood Lodge Wiki"
tags:
  - start
  - moc/root
  - status/active
status: active
updated: 2026-11-04
summary: "Root README for the Blackwood Lodge Roblox game design vault. Explains the folder structure, Obsidian setup, status legend, and reading order for humans and AI agents."
related:
  - "[[Start Here]]"
  - "[[AI Read Me]]"
  - "[[Canonical Decisions]]"
  - "[[Open Questions]]"
---

# Blackwood Lodge — Design Vault & Game Wiki

> **Working title:** *Blackwood Lodge* (final title still open)
> **Project:** A 6–10 player, 30-minute noir social-deduction game for Roblox.
> **Vault root:** `A:\roblox game`
> **Game code:** `game/` (currently a placeholder until the build phase)
> **Status:** Design vault complete — game implementation not started.

This vault is the single source of truth for the game. It is written for two audiences:

1. **Humans** — designers, builders, writers, and playtesters.
2. **AI agents** — any model reading or editing the project should start at [[AI Read Me]] and treat [[Canonical Decisions]] as the final authority.

## Vault status

| Check | Result |
|---|---|
| Pages | **224** |
| Unresolved links | **0** |
| Ambiguous basenames | **0** |
| Frontmatter issues | **0** |
| Audit | `node "A:\roblox game\game\tools\audit-links.mjs"` → `AUDIT OK` |
| Game code | Not started — `game/` is a scaffold with generators and docs |

The design vault is content-complete. The next phase is a grey-box Roblox vertical slice built from the systems, scenarios, and room data in this vault. See [[Design Status]] and [[Build Roadmap]].

---

## What this game is

A group of investigators arrives at a storm-cut mansion to solve a decade-old cult crime. One or two of them are cult killers. There are no meeting phases. The investigators hunt physical clues, buy the right tools, answer a four-question Case File, perform a ritual that reveals the killers, and then survive the killers' last hunt long enough to escape before dawn.

The mansion rearranges itself every session. Clues spawn in different rooms. The killer stages a fresh crime scene. No two matches should play the same.

---

## Open this vault in Obsidian

1. Install Obsidian (if it is not already installed).
2. Choose **Open folder as vault**.
3. Select `A:\roblox game`.
4. Trust the vault when prompted.
5. Open **Graph View** to see the color-coded knowledge graph.

The vault ships with `.obsidian` configuration:

- Folder-based graph color groups.
- Templates folder set to `09 Templates`.
- Attachments folder set to `attachments`.
- Wikilinks update automatically when pages are renamed.

If Obsidian is not installed yet, the Markdown and `.obsidian` files still work; install Obsidian later and open the folder.

---

## Folder map

| Folder | Purpose |
|---|---|
| `00 Start Here` | Entry points, decision records, glossary, status, roadmap |
| `01 Game Design` | Vision, pillars, core loop, match flow, roles, win conditions |
| `02 Story` | Setting, cult, characters, timeline, endings, lore |
| `03 Systems` | Every mechanic: case file, clues, puzzles, ritual, sigils, pistols, map, shop, UI, technical rules |
| `04 Scenarios` | Ten scenario cards and the scenario design rules |
| `05 World` | Map overview, floor plans, room catalog, art, audio, lighting |
| `06 Development` | Roblox architecture, Studio MCP, Rojo, data, testing, roadmap |
| `07 Player Wiki` | Spoiler-light player documentation |
| `08 Research` | References and design research |
| `09 Templates` | Obsidian templates for new pages |
| `attachments` | Images, diagrams, audio references |
| `game` | Roblox/Luau source code and project files |

---

## Reading order

### For a human

1. [[Start Here]]
2. [[Vision]]
3. [[Core Loop]]
4. [[Match Flow]]
5. [[Case File Overview]]
6. [[Ritual Overview]]
7. [[Map System Overview]]
8. [[Open Questions]]

### For an AI agent

1. [[AI Read Me]]
2. [[Canonical Decisions]]
3. [[Design Status]]
4. [[Open Questions]]
5. [[00 Start Here/Glossary|Glossary]]
6. The relevant MOC for the task:
   - [[Game Design MOC]]
   - [[Systems MOC]]
   - [[World MOC]]
   - [[Development MOC]]
   - [[Scenarios MOC]]
   - [[Player Wiki MOC]]
7. The specific page you are editing, plus its `related` links.

---

## Status legend

Every design page carries a `status` field:

| Status | Meaning |
|---|---|
| `locked` | Decided. Do not change without a new decision entry. |
| `proposed` | A recommended default that still needs approval. |
| `open` | Unanswered; implementation must not assume an answer. |
| `deferred` | Intentionally postponed; do not build yet. |
| `deprecated` | Replaced by a newer decision; kept only for history. |

If two pages conflict, **[[Canonical Decisions]] wins**.

---

## Important warnings

- **Proposed is not canon.** Many numbers in this vault are recommendations from the design conversation, not approved rules.
- **Spoilers are real.** Story and scenario pages are tagged `spoiler/true`. The player wiki is not.
- **The vault is a design document, not a promise.** Scope can change; record changes in [[Decision Log]].
- **Do not invent canon privately.** If a detail is missing, add it to [[Open Questions]] instead of silently deciding it in a page.

---

## Quick links

- [[Start Here]]
- [[AI Read Me]]
- [[Canonical Decisions]]
- [[Decision Log]]
- [[Open Questions]]
- [[Design Status]]
- [[00 Start Here/Glossary|Glossary]]
- [[Roadmap]]
- [[Changelog]]
- [[Index]]
