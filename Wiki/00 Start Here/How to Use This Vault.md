---
title: "How to Use This Vault"
aliases:
  - "Vault Guide"
  - "Obsidian Guide"
tags:
  - start
  - meta
  - status/locked
status: locked
updated: 2026-11-04
summary: "How to navigate, edit, and extend the Obsidian vault: graph view, frontmatter, tags, MOCs, templates, callouts, and AI-friendly conventions."
related:
  - "[[README]]"
  - "[[AI Read Me]]"
  - "[[Template - System]]"
---

# How to Use This Vault

## Open it

Obsidian → **Open folder as vault** → `A:\roblox game`.

The graph colors are already configured. Open **Graph View** from the left ribbon or the command palette.

## The four navigation tools

1. **Graph View** — color-coded by folder. Use it to spot orphans and clusters.
2. **Search** — `Ctrl+Shift+F`. Search tags with `tag:#system`, paths with `path:"03 Systems"`.
3. **Backlinks** — every page shows what links to it. Use it to find the context.
4. **MOCs** — Maps of Content. Start at [[Start Here]], then jump to the section MOC.

## Frontmatter

Every page starts with:

```yaml
---
title: "Page Title"
aliases: []
tags: []
status: proposed
updated: 2026-11-04
summary: "One or two sentences."
related: []
spoiler: false
---
```

`status` must be one of: `locked`, `proposed`, `open`, `deferred`, `deprecated`.
`spoiler` must be `true` or `false`.

## Tags

| Tag | Use |
|---|---|
| `#start` | Entry points and dashboards |
| `#moc` | Maps of Content |
| `#game-design` | Vision, pillars, loop |
| `#story` | Setting, characters, lore |
| `#system` | Mechanics |
| `#scenario` | Scenario cards |
| `#world` | Map, rooms, art, audio |
| `#development` | Technical docs |
| `#player-wiki` | Spoiler-light player docs |
| `#research` | References |
| `#template` | Templates |
| `#status/locked` | Canon |
| `#status/proposed` | Recommendation |
| `#status/open` | Unanswered |
| `#status/deferred` | Postponed |
| `#spoiler/true` | Contains spoilers |

## Callouts

Use Obsidian callouts for emphasis:

```markdown
> [!warning] Blocker
> This needs an answer before implementation.

> [!spoiler]- Spoiler
> The killer is...
```

## Templates

The `09 Templates` folder is configured as the template folder. Use the core Templates plugin:

- [[Template - System]]
- [[Template - Room]]
- [[Template - Scenario Card]]
- [[Template - Item]]
- [[Template - NPC]]
- [[Template - Decision]]
- [[Template - Session Log]]
- [[Template - MOC]]
- [[Template - Player Page]]

## Naming conventions

- Page names are singular: `Room`, not `Rooms`.
- MOCs end in `MOC`: `Systems MOC`.
- Templates start with `Template - `.
- Scenario cards start with a number: `01 The Industrialist`.
- No duplicate page names across folders. Qualify if needed: `Vesper Shopkeeper`.
- Use title case.

## Linking rules

- Link the first mention of a system to its page.
- Every page links to its MOC and at least one sibling.
- Every MOC links to every page in its section.
- Use aliases for display text: `[[First Pistol|the first gun]]`.

## Writing for AI readers

- Put the answer in the first two sentences.
- Use tables for exact numbers.
- Separate **Locked**, **Proposed**, and **Open**.
- Avoid pronouns with unclear antecedents.
- Define terms in [[00 Start Here/Glossary|Glossary]].
- Do not bury a rule in a story paragraph.
- If a page depends on another, put it in `related`.

## Backup and version control

- The vault is plain Markdown; back it up with Git or a sync service.
- Do not store large binaries in the vault; use `attachments/` and Git LFS if needed.
- The `game/` folder is for code; keep it in the same repository if possible.

## Keeping the graph healthy

- No orphans: every page must be linked from a MOC.
- No duplicate names.
- No dead links to pages that do not exist.
- Keep hub pages (MOCs) under ~40 links; split if they grow.
- Use tags for cross-cutting themes, not folders.
