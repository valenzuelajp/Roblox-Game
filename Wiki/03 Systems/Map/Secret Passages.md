---
title: "Secret Passages"
aliases:
  - "Secrets"
  - "Hidden Routes"
tags:
  - systems
  - map
  - level-design
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How secret passages are generated, discovered, used, and countered, including the 1926 passages revealed by the Ghost Blueprint."
related:
  - "[[Map System Overview]]"
  - "[[Procedural Generation]]"
  - "[[Ghost Blueprint]]"
  - "[[Locked Doors and Keys]]"
---

# Secret Passages

> [!info] Status
> 4–6 secret passages per seed is **proposed**. The Ghost Blueprint's 1926 passages are a separate set.

## What counts as a secret passage

A secret passage is a **route that is not visible on the current map** until discovered. It must:

- Connect two rooms that are not already adjacent.
- Have a discoverable entrance (a prop, a sound, a draft, a scratch mark).
- Have a two-way route; no one-way traps.
- Not be the only route to an anchor.
- Not be inside the chapel or vault.
- Not be in the killer's staging room.

## The six entrance types

| Type | Example | Discovery |
|---|---|---|
| **Bookcase** | A shelf that swings open | Pull a specific book; a scratch on the floor |
| **Painting** | A portrait that hinges | The frame is warm; the eyes are cut out |
| **Dumbwaiter** | A kitchen lift | A rope; a smell from below |
| **Coal chute** | A cellar slide | Soot; a draft; a narrow fit |
| **Mirror** | A ballroom mirror that is a door | A reflection that does not match |
| **Chimney** | An attic shaft | Soot; a draft; a bell rope |

The entrance is **not** highlighted until discovered. The player can find it by:

- Searching a room (2s).
- Using the **Map** (shows a "draft" icon, not the passage).
- Using the **Compass** (points to the nearest anchor, not the passage).
- Following a sound cue (wind, a rattle, a whisper).
- Finding a scratch mark or a draft with the **UV torch** (some passages have a faint sigil).

## Discovery

When a player discovers a passage:

1. The entrance opens.
2. The passage is added to the team's map overlay.
3. A short text card describes it: "A narrow stair behind the ballroom mirror. It smells of cold stone."
4. The passage stays open for the rest of the match.

The killer can discover passages too. The killer's map overlay shows the same discovered passages.

## The 1926 passages

The Ghost Blueprint reveals four **walled-up** passages from the original house:

| Passage | Route | How to open |
|---|---|---|
| Library → Study | Behind the bookcase | Lockpick (1 charge) or rune puzzle |
| Kitchen → Cellar | The dumbwaiter | Lockpick (1 charge) or knot puzzle |
| Ballroom → Chapel crypt | Behind the mirror | Rune alignment puzzle |
| Attic → Archive | The chimney shaft | Lockpick (1 charge) or binary puzzle |

These are **not** the seed's current passages. They are historical routes. Opening one creates a new route that the killer did not know about — unless the killer has the blueprint too.

## Killer use

The killer can:

- Discover passages like anyone else.
- Use passages to bypass locked doors.
- Ambush a player in a narrow passage.
- Jam a passage entrance for 60 seconds (Wire Cutters).

The killer cannot:

- Create a new passage.
- Collapse a passage on a player.
- Use a passage during the Last Hunt if it is blocked by the ritual seal.

## Counterplay

- **Map:** reveals discovered passages and draft icons.
- **Compass:** orients the player, not the passage.
- **Lockpick:** opens the 1926 passages.
- **UV torch:** reveals faint sigils near some entrances.
- **Voice/text:** call out a discovered passage so the team can use it.
- **Killer counter:** jam the entrance, camp the exit, or use the passage first.

## Accessibility

- Passage entrances have a text description when examined.
- The map overlay lists discovered passages by name.
- Narrow passages have a "crawl" prompt, not a precision platforming challenge.
- Players with motion sensitivity can disable the crawl camera sway.
- The passage sound cue has a visual subtitle.

## Design notes

- **A secret passage should feel like a discovery, not a random door.**
- **Every passage needs a tell.** A draft, a scratch, a sound.
- **The killer should be able to use the same routes.** Fairness.
- **The best passage is the one the team finds at 13:59, just before the shift.**
- **Never make a passage the only route to the chapel or vault.**

## Related

- [[Map System Overview]]
- [[Procedural Generation]]
- [[Ghost Blueprint]]
- [[Locked Doors and Keys]]
