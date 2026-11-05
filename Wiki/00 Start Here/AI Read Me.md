---
title: "AI Read Me"
aliases:
  - "Machine Read Me"
  - "Agent Instructions"
tags:
  - start
  - ai
  - status/locked
status: locked
updated: 2026-11-04
summary: "Machine-readable instructions for AI agents editing or reading the Blackwood Lodge vault: authority order, frontmatter schema, status values, link conventions, and safety rules."
related:
  - "[[README]]"
  - "[[Canonical Decisions]]"
  - "[[Design Status]]"
  - "[[Open Questions]]"
  - "[[00 Start Here/Glossary|Glossary]]"
---

# AI Read Me

This page is the contract for any AI agent working on this project. Read it before editing.

## 1. Authority order

When two sources disagree, use this order:

1. **[[Canonical Decisions]]** — locked decisions only.
2. **[[Decision Log]]** — the newest entry wins over an older entry.
3. **Page-level `status: locked`** content.
4. **Page-level `status: proposed`** content.
5. **[[Open Questions]]** — unanswered; do not silently decide.
6. Older discussion, drafts, or deprecated pages.

If a conflict cannot be resolved, add an entry to [[Open Questions]] instead of guessing.

## 2. Required frontmatter

Every page should start with YAML:

```yaml
---
title: "Page Title"
aliases: []
tags: []
status: proposed
updated: 2026-11-04
summary: "One or two sentences describing the page."
related: []
spoiler: false
---
```

Required keys: `title`, `tags`, `status`, `updated`, `summary`, `related`.
Optional keys: `aliases`, `spoiler`, `owner`, `reviewed`.

## 3. Status values

| Value | Meaning | May implement? |
|---|---|---|
| `locked` | Approved canon | Yes |
| `proposed` | Recommended, not approved | Only behind a feature flag or prototype |
| `open` | No answer yet | No |
| `deferred` | Postponed on purpose | No |
| `deprecated` | Replaced | No; link to replacement |

## 4. Link conventions

- Use Obsidian wikilinks: `[[Page Name]]`.
- Use aliases when the display text differs: `[[Page Name|display text]]`.
- Every page must link to at least one MOC and at least one sibling page.
- Every MOC must link to every page in its section.
- Avoid duplicate page names. If a name would collide, add a qualifier: `Vesper Shopkeeper`, `Madame Vesper (Story)`.
- Do not link to pages that do not exist unless the link is marked as a planned page in the MOC.

## 5. Spoiler rules

- Story, scenario, and ending pages are `spoiler: true`.
- The `07 Player Wiki` folder is `spoiler: false` by default.
- Use this callout for inline spoilers:

```markdown
> [!spoiler]- Spoiler
> The butler did it.
```

## 6. Writing rules

- Prefer short sections, tables, and numbered rules over long prose.
- Put exact numbers in a **Rules** table.
- Separate **Locked**, **Proposed**, and **Open** subsections when a page mixes them.
- Do not use "we" in canonical rules; use "the investigators", "the killer", or imperative voice.
- Define a term the first time it appears and link it to [[00 Start Here/Glossary|Glossary]].
- When you add a mechanic, also add:
  - its counterplay,
  - its failure state,
  - its edge cases,
  - its UI/feedback,
  - its telemetry event (if relevant).

## 7. How to add a decision

1. Copy [[Template - Decision]].
2. Give it an ID: `D-###`.
3. Add a row to [[Decision Log]].
4. If it is locked, add it to [[Canonical Decisions]].
5. Update every page affected by it.
6. Add a changelog entry.

## 8. How to add a page

1. Pick the correct folder and MOC.
2. Copy the matching template from `09 Templates`.
3. Fill the frontmatter.
4. Add the page to the MOC.
5. Add at least two `related` links.
6. Add it to [[Index]].
7. If it changes canon, update [[Decision Log]].

## 9. Current build state

- The vault is being populated.
- The game code in `game/` is a placeholder.
- Roblox Studio MCP setup is documented in [[Studio MCP Setup]].
- The next design blockers are listed in [[Open Questions]].

## 10. Do not do these things

- Do not invent a final game title.
- Do not treat the story recommendations as approved canon.
- Do not add pay-to-win mechanics.
- Do not require voice chat; it must remain optional.
- Do not create a mechanic that can soft-lock the Case File.
- Do not let dead players talk to living players.
- Do not put a random clue in the killer's staging room.
- Do not let the killer steal a true clue.
- Do not claim a page is finished without checking its links and frontmatter.
