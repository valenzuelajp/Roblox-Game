---
title: "Clue Containers"
aliases:
  - "Searchables"
  - "Containers"
tags:
  - systems
  - clues
  - interaction
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The physical props that hold clues: container types, search times, hidden layers, states, and accessibility."
related:
  - "[[Clue System Overview]]"
  - "[[Clue Placement]]"
  - "[[Clue Types]]"
  - "[[Curio Shop]]"
---

# Clue Containers

> [!info] Locked frame
> Clue search is physical: about **2 seconds**; the matching item reduces it to about **1 second** or reveals a hidden layer (D-029).

## What a container is

A container is any prop that can hold a clue:

- A desk drawer.
- A bookshelf.
- A painting.
- A clock.
- A piano bench.
- A wine rack.
- A laundry basket.
- A fireplace.
- A grave marker.
- A locked box.

Containers are **props with state**, not UI buttons. The player walks up, interacts, and watches the search.

## Container tiers

| Tier | Search time | Holds | Examples |
|---|---|---|---|
| **Common** | 2s | Free clues, false clues, flavor | Desk, drawer, bookshelf, mantel |
| **Hidden** | 3s | Item clues, keys, story props | False bottom, behind painting, under rug |
| **Locked** | 2s + key/lockpick | Item clues, second-pistol seals, story rooms | Safe, cabinet, cellar cell |
| **Puzzle-locked** | 2s + puzzle | Ritual anchors, vault seals, 1926 passages | Rune door, zodiac lock |

The matching item reduces the search time by **1 second** and can reveal a hidden layer (e.g., the UV torch reveals writing on a blank page).

## The search interaction

1. **Approach.** The container highlights with a faint outline when the player is within 3 studs.
2. **Interact.** Hold the interact key. A radial progress ring fills.
3. **Search.** The player character opens the drawer, lifts the painting, or checks the clock.
4. **Result.** The clue card appears; the prop changes state.
5. **Log.** The clue is added to the team's evidence board.

The search is **interruptible**:

- Taking damage cancels the search.
- Moving cancels the search.
- The killer can slam the container shut (sabotage) and waste the search.

## Container states

| State | Meaning |
|---|---|
| `UNSEARCHED` | Default; the prop looks normal. |
| `SEARCHING` | A player is interacting; the ring is visible. |
| `FOUND` | The clue has been taken; the prop stays open. |
| `EMPTY` | The player searched and found nothing. |
| `JAMMED` | The killer jammed it; 60s cooldown. |
| `HIDDEN_LAYER` | The item revealed a second clue or message. |

States are server-authoritative. A client cannot mark a container as searched.

## Container placement rules

- **No two clue containers in the same room.**
- **No container inside another container** (no drawer inside a drawer).
- **No container behind a collision mesh.**
- **No container that requires crouching under geometry** for accessibility.
- **Every container has a text description** for screen readers.
- **Every container has a silhouette** that reads as searchable.

## The five content families

| Family | Container examples | Clue type |
|---|---|---|
| **Document** | Desk, drawer, bookshelf, safe | Letter, ledger, guest list |
| **Physical** | Coat, suitcase, wine rack, piano | Weapon, clothing, monogram |
| **Trace** | Rug, windowsill, fireplace, drain | Blood, ash, fibers, footprints |
| **Testimony** | Staff NPC, portrait, diary | Spoken line, recorded message |
| **Symbol** | Painting, clock, ritual object | Sigil, zodiac, binary, rune |

Each task should use at least two families. A case made only of documents is boring.

## Hidden layers

Some containers have a **second layer**:

- A blank page that reveals writing under UV.
- A painting with a second painting behind it.
- A clock with a folded note inside the case.
- A piano bench with a false bottom.
- A wine rack with a loose brick.

Hidden layers are revealed by:

- The matching item.
- A puzzle.
- A second search after the first clue is found.

Hidden layers are **optional**. They add depth, not gates.

## The killer and containers

The killer can:

- Search containers like anyone else.
- Jam one container for 60 seconds (Wire Cutters).
- Plant one false clue in a common container.
- Move a prop to hide a clue (tamper, once per match).
- Watch a player search and mark them.

The killer cannot:

- Steal a true clue.
- Destroy a true clue.
- Lock a container permanently.
- Search a container faster than anyone else.

## Accessibility

- All containers have a text label when focused: "Desk drawer. Search."
- The search ring has an audio tick.
- The result card is text-first.
- The hidden layer has a text description, not just a visual reveal.
- Containers are reachable from a seated position; no crouch-only props.
- The container outline can be increased in the accessibility settings.

## Telemetry

Track:

- Search time per container.
- Abandoned searches.
- Jammed containers.
- Hidden-layer discovery rate.
- Containers never searched.
- Container frustration reports.

## Design notes

- **A container should look like it belongs in the room.** No gamey chests.
- **The search should feel like snooping, not looting.**
- **The best container is the one the player almost walked past.**
- **The item should make the container feel new, not skip it.**

## Related

- [[Clue System Overview]]
- [[Clue Placement]]
- [[Clue Types]]
- [[Curio Shop]]
