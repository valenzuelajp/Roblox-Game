---
title: "Spoiler Policy"
aliases:
  - "Spoiler Rules"
  - "What Not to Publish"
tags:
  - story
  - wiki
  - policy
  - status/locked
status: locked
updated: 2026-11-04
summary: "The spoiler tiers, tagging rules, and export rules that keep the player wiki spoiler-free while the design vault stays complete."
related:
  - "[[AI Read Me]]"
  - "[[How to Use This Vault]]"
  - "[[Player Wiki MOC]]"
  - "[[Story Bible]]"
---

# Spoiler Policy

> [!important] This policy is locked
> The player wiki is a separate product from the design vault. Spoilers are a design failure, not a content accident.

## The four spoiler tiers

| Tier | Name | Who can see it | Examples |
|---|---|---|---|
| **S0** | Public | Everyone, including new players | Controls, roles, the four tasks, item names, the fact that the map changes |
| **S1** | Discoverable | Players who play the game | The lodge's rooms, staff names, the cult's existence, puzzle families |
| **S2** | Design | Designers, artists, builders | The killer's staging options, the ritual's story twist, the ending matrix |
| **S3** | Solution | Scenario authors and the game server | The true answers, the Hollow Word, the killer's identity, the full scenario card |

## Frontmatter rules

Every page must declare its spoiler level:

```yaml
spoiler: true        # S2 or S3
spoiler: false       # S0 or S1
```

For finer control, use tags:

```yaml
tags:
  - spoiler/player-safe
  - spoiler/discoverable
  - spoiler/design
  - spoiler/scenario
```

If a page has no spoiler field, treat it as **S2** and do not export it.

## Player wiki rules

The `07 Player Wiki` folder is **S0 only**. It may contain:

- How to play, controls, and accessibility.
- The investigator and killer roles, at the level of the lobby description.
- The four Case File tasks and how to submit answers.
- The five puzzle families, without solutions.
- Item names and what they broadly do.
- The lodge's public rooms and staff.
- Survival tips and etiquette.
- FAQ and reporting.

It may **not** contain:

- Scenario cards, victim lists, or staging options.
- The nine guests' identities, fates, or the survivor.
- Elias's role as cult leader.
- Vesper's defection.
- The killer's sabotage list or mark timings.
- The Hollow Word list.
- The ending matrix or reward table.
- Any page that links to an S2/S3 page.

> [!warning] Backlinks leak
> Obsidian backlinks and graph view can reveal the **names** of spoiler pages even if the text is hidden. Do not publish the design vault directly. Export the player wiki folder with a filter that excludes S2/S3 pages and their backlinks.

## In-game spoiler rules

- The lobby may show the **roles** and the **task list**. It may not show the scenario.
- The shop may show the **item catalog**. It may not show the scenario card.
- The Case File may show the **four questions** and the **three options**. It may not show which option is correct.
- The ritual may reveal the **killers**. It may not reveal the **Hollow Word** in chat or UI; the word is entered at the exit.
- The ending card may show the **outcome**. It may not show the **full truth** unless the players earned E-01.

## Marketing rules

Store page, thumbnails, trailers, and social posts are **S0/S1**:

- Show the lodge, the rain, the foyer, the shop, the evidence board.
- Show a silhouette of the killer, never a face or a name.
- Show the five puzzle families as icons, not solutions.
- Never show a scenario card, a victim's true identity, or the Hollow Word.
- Never show a full ending card. Show the typewriter, the stamp, the closed file.

## AI writing rules

When an AI writes for this vault:

1. **Read [[AI Read Me]] first.**
2. **Check the target folder.** `07 Player Wiki` is S0. `02 Story`, `04 Scenarios`, and `03 Systems` are S2/S3 unless the page says otherwise.
3. **Do not copy S2/S3 text into S0 pages.** Paraphrase the safe surface only.
4. **Do not add spoiler links to player pages.** A link named "The Killer" is a spoiler even if the page is empty.
5. **When in doubt, mark `spoiler: true` and keep it out of the player export.**
6. **Do not resolve intentional ambiguities.** The Hollow, Vesper's motives, and Elias's death are meant to stay uncertain.

## Safe vs unsafe examples

| Unsafe (S2/S3) | Safe (S0/S1) |
|---|---|
| "Elias is the survivor of the 1936 rite and the cult leader." | "The host, Elias Blackwood, is missing when the guests arrive." |
| "Vesper sent the letter because she defected from the cult." | "Madame Vesper runs the Curio Shop and seems to know more than she says." |
| "The killer draws three scenario cards and stages the body." | "One of the investigators staged the crime before the match." |
| "The Hollow Word for this scenario is BLACK." | "The four tasks each reveal a letter. The ritual reveals the fifth." |
| "The ritual feeds the cult and completes the Ninth Rite." | "The ritual reveals the killers and unlocks the exit. The lodge has its own reasons for wanting it completed." |

## Review checklist

Before publishing any player-facing page:

- [ ] Does it contain a scenario answer?
- [ ] Does it name the killer's role in a way that reveals the scenario?
- [ ] Does it describe the nine guests' fates?
- [ ] Does it describe Elias's or Vesper's secret?
- [ ] Does it contain a Hollow Word?
- [ ] Does it link to an S2/S3 page?
- [ ] Does it describe a puzzle solution rather than the puzzle type?
- [ ] Does it reveal an ending that the player has not earned?
- [ ] Is the frontmatter `spoiler: false`?
- [ ] Is the page in `07 Player Wiki`?

If any answer is "yes" to a spoiler question, move the page to the design vault or rewrite it.

## Related

- [[AI Read Me]]
- [[How to Use This Vault]]
- [[Player Wiki MOC]]
- [[Story Bible]]
