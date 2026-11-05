---
title: "Midnight Shift"
aliases:
  - "The Shift"
  - "House Shift"
  - "14:00 Shift"
tags:
  - systems
  - map
  - ritual
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "At 14:00 the lodge reconfigures one wing, unseals the chapel and vault, and changes the map item. The house corrects the story."
related:
  - "[[Map System Overview]]"
  - "[[Procedural Generation]]"
  - "[[Ghost Blueprint]]"
  - "[[Ritual Site]]"
---

# Midnight Shift

> [!info] Status
> The shift is **proposed** as a signature feature. The clock time (14:00, in-game midnight) is locked by the match flow.

## What happens

At **14:00** of the 30-minute match, the in-game clock strikes midnight. The lodge **reconfigures one wing**:

1. The clock in the foyer rings twelve times. The twelfth ring is wrong.
2. The lights in the target wing go out for 3 seconds.
3. The wing swaps to its pre-baked variant.
4. A door appears where a wall was. A corridor is longer. A room is gone.
5. The chapel and vault **unseal**.
6. The map item updates. The Ghost Blueprint does not.
7. The guest book in the foyer gains a new line.

The shift is not random chaos. It is the house **correcting the story**.

## What changes

| Element | Changes? | Notes |
|---|---|---|
| Target wing rooms | Yes | Swap to variant; doors and corridors change |
| Chapel | Unseals | Two entrances; crypt stair opens |
| Vault | Unseals | Three seals become interactable |
| Clues | No | True clues stay where they were; the route to them may change |
| Killer's staging room | No | The scene stays; the room may be harder to reach |
| Secret passages | Some | One passage may close; one may open |
| Map item | Yes | Updates to the new layout |
| Ghost Blueprint | No | Shows the 1926 layout, not the current one |
| Safe rooms | No | The foyer, cellar cell, and gate are unchanged |

## Why the shift exists

- **Pacing:** it splits the match into two investigation phases with a hard beat in the middle.
- **Pressure:** it invalidates memorized routes and forces players to re-read the house.
- **Story:** the house is a character; the shift is its biggest action.
- **Endgame:** it gates the chapel and vault, concentrating the last ten minutes.
- **Replayability:** even a familiar seed feels different after the shift.

## The target wing

The generator tags one wing as the shift target. A wing is 2–4 connected rooms, not a single room. The target:

- Contains at least two rooms.
- Has a pre-baked variant.
- Does not contain the chapel or vault (they unseal instead).
- Does not disconnect an anchor.
- Does not contain the killer's staging room (the scene stays intact).

The target is announced **only** by the clock and the lights. The map item does not warn the player before the shift.

## Telegraphing

The shift should be surprising but not unfair:

- The clock in the foyer is visible from the central stair.
- The 11:59 PM chime plays 10 seconds before.
- The lights flicker once at 11:59.
- Vesper's gramophone skips.
- The staff stop moving for 3 seconds.
- The chapel bell rings once, though the bell was removed in 1936.

A player who knows the game can prepare. A new player will feel the house move.

## The chapel and vault

### Chapel

- Sealed before midnight. The main door is cold; the side door is painted over.
- At midnight, both doors open. The crypt stair from the cellar unlocks.
- The altar is lit with five candles; the fifth is black.
- The ritual can begin.

### Vault

- Sealed before midnight. The door has three seals: a zodiac, a binary, and a knot.
- At midnight, the seals glow and become interactable.
- Solving all three opens the cabinet, not the room. The second pistol is inside.
- The vault is also the safest room in the house; the killer cannot mark inside it.

## What the shift does not do

- It does not move true clues.
- It does not move the body.
- It does not reveal the killer.
- It does not open the front gate.
- It does not kill anyone.
- It does not reset the Case File.
- It does not change the Hollow Word.

## Player guidance

After the shift, the map item shows:

- The new room layout.
- The new route to the chapel.
- The new route to the vault.
- The front gate.
- The foyer.

It does **not** show:

- Clue containers.
- The killer.
- Secret passages the player has not discovered.
- The Ghost Blueprint's original layout.

## Accessibility

- The shift has a text banner: "The clock strikes midnight. The east wing has changed."
- The lights-out moment is 3 seconds, not a flash.
- Players with photosensitivity can disable the flicker; the audio cue remains.
- The map item's update is announced in text.
- The chapel bell has a visual indicator.

## Telemetry

Track:

- Time to first chapel entry after the shift.
- Time to vault entry.
- Player deaths in the target wing.
- Map item usage after the shift.
- Route re-discovery time.
- Soft-lock reports.

## Design notes

- **The shift is a rule, not a trick.** It must be consistent.
- **The house should feel like it is correcting the story, not trolling the player.**
- **The chapel and vault unseal together.** The endgame has two doors.
- **The shift is the best time for the killer to strike.** The lights are out; the routes are new.
- **Never shift the foyer, the gate, or the cellar cell.** Those are the player's anchors.

## Related

- [[Map System Overview]]
- [[Procedural Generation]]
- [[Ghost Blueprint]]
- [[Ritual Site]]
