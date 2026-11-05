---
title: "Map System Overview"
aliases:
  - "The Lodge Map"
  - "Map System"
  - "Level Design Overview"
tags:
  - systems
  - map
  - level-design
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The four-level procedural lodge: anchors, modular rooms, routes, secret passages, the midnight shift, and the escape route."
related:
  - "[[Procedural Generation]]"
  - "[[Midnight Shift]]"
  - "[[Ghost Blueprint]]"
  - "[[Floor Plans]]"
  - "[[Blackwood Lodge (Story)]]"
---

# Map System Overview

> [!info] Status
> The **map changes every session** is locked (D-016). The room count and exact layout rules are proposed (O-011).

## The shape of the lodge

Blackwood Lodge is four levels stacked around a central staircase, with a service stair and a cellar crypt. It is large enough to hide, small enough to cross in 45 seconds if you know the route.

| Level | Name | Role | Anchors |
|---|---|---|---|
| **L0** | Cellar | The house's underside | Vault, Crypt Stair, Boiler, Wine Cellar |
| **L1** | Ground | The public face | Foyer, Ballroom, Kitchen, Study, Chapel |
| **L2** | First | The private face | Archive, Guest Rooms, Master Suite, Balcony |
| **L3** | Attic | The house's memory | Attic, Servant Quarters, Bell Tower, Observatory |

## Room budget

| Lobby size | Rooms | Notes |
|---|---|---|
| 6–7 players | 20–22 | Tighter, more encounters, less walking |
| 8–10 players | 26–30 | More hiding spots, more routes, more clue spread |

The baseline is **24–28 rooms**. Corridors, stairs, and secret passages are **not** counted as rooms.

### The 8 anchors

Every seed includes these rooms, though their positions and connections change:

1. **Foyer** — spawn, evidence board, front door (locked until the Hollow Word).
2. **Ballroom** — the largest room; the piano; the mirror; the midnight shift target.
3. **Kitchen** — staff testimony; the service stair; the cellar door.
4. **Study** — the victim's papers; the safe; the typewriter.
5. **Chapel** — the ritual site; two entrances; the crypt stair; sealed until midnight.
6. **Archive** — the 1926 and 1936 files; the Ghost Blueprint; the map table.
7. **Vault** — the second pistol; three seals; the cellar; sealed until midnight.
8. **Attic** — the house's memory; the child's toy; the bell rope; the hidden room.

### Modular rooms

12–16 rooms are drawn from a pool of variants:

- Guest Room (four variants)
- Library
- Parlor
- Conservatory
- Dining Room
- Smoking Room
- Nursery
- Bathroom
- Laundry
- Servant Quarters
- Storage
- Boiler Room
- Wine Cellar
- Root Cellar
- Bell Tower
- Observatory
- Hidden Room (rare)
- Priest Hole (rare)

Each modular room has a **gameplay job**: clue container, shortcut, hiding spot, ritual anchor, or killer advantage. A room without a job is cut.

## Routes

Every floor must have **at least two routes** between its anchors:

- **Main route:** the obvious corridor. Fast, lit, exposed.
- **Service route:** the back stair, the kitchen corridor, the servants' passage. Slower, darker, quieter.
- **Secret route:** a passage behind a bookcase, a dumbwaiter, a coal chute. Fastest, but requires discovery.

The killer should never be able to camp the only route to the chapel. The investigators should never be able to lock the killer out of the endgame.

## The central staircase

The main stair is the map's spine:

- It connects L1, L2, and L3.
- It is visible from the foyer.
- It is the fastest route and the most dangerous.
- It can be blocked by the midnight shift (one landing rotates).
- It has a **bell** at the top that rings when the chapel is opened.

## The service stair

- Connects the kitchen (L1) to the servant quarters (L3) and the cellar (L0).
- Narrow, dark, one player wide.
- The killer's favorite route.
- The investigators can jam the door with the lockpick or a chair.

## Secret passages

4–6 per seed. See [[03 Systems/Map/Secret Passages|Secret Passages]]. They are:

- Hidden behind props, not marked on the map until discovered.
- Two-way, but some close behind you.
- The killer can use them; so can the investigators.
- The Ghost Blueprint reveals the original 1926 passages, not the new ones.

## Locked doors and keys

- **Main doors** are unlocked. The lodge wants the guests to move.
- **Private rooms** are locked; keys are on staff belts, in the study, or in the archive.
- **The chapel** is sealed until midnight. No key opens it early.
- **The vault** is sealed until midnight. The three seals open the cabinet, not the room.
- **The front door** is locked until the Hollow Word is entered.
- **The cellar cell** is locked from the outside; the killer can be detained there.

See [[Locked Doors and Keys]].

## The midnight shift

At **14:00**, one wing reconfigures:

- A corridor lengthens or shortens.
- A door appears where a wall was.
- A room swaps with its variant.
- The chapel and vault unseal.
- The map item updates; the Ghost Blueprint does not.

See [[Midnight Shift]].

## The escape route

The exit is the **front gate**, at the end of the drive:

1. The investigators must have the five-letter Hollow Word.
2. The gate has a brass letter lock.
3. Entering the word opens the gate for **60 seconds**.
4. A wrong word locks the gate for 30 seconds and rings the chapel bell (the killer hears it).
5. The Last Hunt begins when the gate opens.

The gate is visible from the foyer. The drive is exposed. The killer can wait there.

## No soft-locks

The generator validates:

- Every anchor is reachable from the foyer.
- Every task room is reachable without a key that is itself behind a soft-lock.
- The chapel has two entrances.
- The vault has two entrances (cellar and service stair).
- Every secret passage has a two-way route.
- The gate is reachable from the foyer.
- The killer's staging room is reachable and has a valid body anchor.

If validation fails, the seed is rerolled before the match starts.

## Art and readability

- **Warm practicals** mark safe rooms and clue containers.
- **Cold moonlight** marks windows, balconies, and escape routes.
- **Red light** marks the chapel, the vault, and the killer's sabotage.
- **Blackout** is a gameplay state, not a permanent art choice.
- Every room has a **silhouette read**: a player should recognize the room from the doorway in under two seconds.
- Every room has a **text description** for accessibility and screen readers.

## Performance

- Rooms are streamed by floor; only the player's floor and the adjacent stairwell are fully loaded.
- Props are pooled; clue containers are swapped, not duplicated.
- The midnight shift is a pre-baked variant swap, not a live rebuild.
- Secret passages are separate collision volumes, not new geometry.
- Target: 60 FPS on a mid-range laptop, 30 FPS on mobile.

## Design notes

- **The house is the third player.** It should create pressure without taking sides.
- **Every room needs a job.** No decorative rooms.
- **Every route needs a risk.** The fast route is exposed; the safe route is slow.
- **The map should be learnable in three matches and still surprising in the fourth.**
- **No room should be a dead end without a secret.**

## Related

- [[Procedural Generation]]
- [[Midnight Shift]]
- [[Ghost Blueprint]]
- [[Floor Plans]]
- [[03 Systems/Map/Secret Passages|Secret Passages]]
- [[Locked Doors and Keys]]
