---
title: "Secret Passages"
aliases:
  - "Hidden Passages"
  - "The House's Shortcuts"
tags:
  - world
  - secrets
  - map
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "The six secret-passage types, how they are generated, how they are discovered, and how the killer and investigators use them."
related:
  - "[[World MOC]]"
  - "[[Map System Overview]]"
  - "[[Procedural Generation]]"
  - "[[Ghost Blueprint]]"
---

# Secret Passages

> [!spoiler] Design spoiler
> This page lists the passage types and their tells. It is not for the player wiki.

## The rule

A secret passage is a **shortcut with a cost**. It saves time, but it is narrow, dark, and easy to trap. It is never the only route to a required room. The generator must guarantee a second path.

## The six types

| Type | Entrance | Tell | Cost |
|---|---|---|---|
| **Bookcase** | Library, Study, Archive | A book that is slightly too clean; a draft. | Slow to open; noisy. |
| **Painting** | Foyer, Ballroom, Master Suite | A portrait that hangs crooked; a hinge. | One-way view; the frame can be closed. |
| **Dumbwaiter** | Kitchen, Linen Room | A rope and a small door; a bell. | Clue-sized only; not a player route. |
| **Coal chute** | Carriage House, Boiler Room, Cellar | Coal dust; a cold draft. | Crawl speed; dirty footprints. |
| **Mirror** | Ballroom, Guest Room Rose, Chapel crypt | A reflection that is wrong; a cold surface. | Opens only after midnight or with the Ghost Blueprint. |
| **Chimney** | Attic, Study, Library | Soot; a draft; a distant echo. | Climb speed; soot mark on the player. |

## Generation rules

- **4–6 passages** per match.
- Each passage connects two rooms that are at least **two graph edges apart**.
- Each passage is **two-way** unless it is a chute (one-way down).
- No passage may bypass the chapel or vault seal before midnight.
- No passage may connect the killer's staging room directly to the exit.
- At least one passage must be discoverable without an item.
- At least one passage must require the Ghost Blueprint or a puzzle.
- No passage may be the only route to a task, the chapel, or the vault.

## Discovery

| Method | What it reveals | Counterplay |
|---|---|---|
| **Visual tell** | A crooked painting, a draft, a clean book. | The killer can close it behind them. |
| **Compass** | A faint direction pulse near a passage. | The pulse is short-range; the killer can ambush. |
| **Ghost Blueprint** | The 1926 passages, not the current ones. | Some 1926 passages are walled up; some are new. |
| **Map item** | Found passages only, not hidden ones. | The killer can use an undiscovered passage. |
| **Sound** | A hollow echo when knocking. | The killer hears the knock too. |

## Killer use

- **Escape.** The killer can vanish after a mark.
- **Ambush.** The killer can wait at the far end of a passage.
- **Jam.** The killer can jam one passage for 60 seconds, not permanently.
- **False trail.** The killer can leave a clue near a passage to bait a search.

## Investigator use

- **Shortcut.** The passage saves travel time during the 30-minute match.
- **Escape.** The passage can break a chase.
- **Flank.** The passage can get behind a camping killer.
- **Clue route.** The passage often connects two clue rooms.

## Accessibility

- The passage entrance has a text prompt and a ping.
- The passage interior has a lit fallback (a lantern or a glow) for players with low vision.
- The passage is never a maze; it is a straight line with one turn.
- The passage has no jump scare and no instant death.

## Related

- [[World MOC]]
- [[Map System Overview]]
- [[Procedural Generation]]
- [[Ghost Blueprint]]
- [[Room Catalog]]
