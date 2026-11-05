---
title: "Anchors and Modular Rooms"
aliases:
  - "Anchors"
  - "Modular Rooms"
  - "Room Graph"
tags:
  - systems
  - map
  - level-design
  - status/locked
status: locked
updated: 2026-11-04
summary: "The eight fixed anchors and the modular room pool that make every Blackwood Lodge layout readable but different."
related:
  - "[[Map System Overview]]"
  - "[[Procedural Generation]]"
  - "[[Floor Plans]]"
  - "[[Room Catalog]]"
  - "[[Locked Doors and Keys]]"
---

# Anchors and Modular Rooms

> [!info] The rule
> **Anchors are fixed. Rooms are modular. Routes are generated.** The player should always recognize the lodge, but never know the exact path.

## The eight anchors

Anchors are always present and always in the same vertical relationship. Their exact position on a floor can shift within a zone, but their identity and function do not.

| Anchor | Level | Function | Why fixed |
|---|---|---|---|
| **Foyer** | Ground | Spawn, evidence board, front door | Social hub; everyone must find it. |
| **Ballroom** | Ground | Large social space, piano, stage | Landmark; sightline; ritual alternative. |
| **Kitchen** | Ground | Service route, food, staff | Connects to cellar and service stair. |
| **Study** | Ground | Case File desk, ledgers, fireplace | Investigation hub. |
| **Chapel** | Ground | Ritual site, altar, bell | Endgame. |
| **Archive** | First | Records, blueprint, sealed files | Task 4 lore. |
| **Vault** | Cellar | Second pistol, sealed cabinet | Race objective. |
| **Attic** | Attic | Bell tower access, hidden room | Vertical landmark. |

## The modular pool

The pool contains **16 room types**. A match uses **12–16** of them, depending on player count.

| Room | Level | Role | Variants |
|---|---|---|---|
| Dining Room | Ground | Social, long table, silver | 2 |
| Library | First | Clues, secret passage | 2 |
| Conservatory | Ground | Glass, plants, rain | 2 |
| Carriage House | Ground | Exterior, vehicle, escape | 2 |
| Wine Cellar | Cellar | Bottles, hidden door | 2 |
| Boiler Room | Cellar | Power, sabotage, noise | 2 |
| Crypt Stair | Cellar | Chapel access, bones | 1 |
| Master Suite | First | Victim's room, locked | 2 |
| Guest Room — Rose | First | Personal effects | 2 |
| Guest Room — Ivy | First | Personal effects | 2 |
| Nursery | First | Uncanny, child's toy | 1 |
| Servant Quarters | Attic | Staff, bells | 2 |
| Bell Tower | Attic | Vertical, rope, storm | 1 |
| Observatory | Attic | Telescope, sky, signal | 1 |
| Linen Room | First | Small, hiding, uniforms | 1 |
| Balcony | First | Exterior, sightline, rain | 1 |

## Placement rules

- Each floor has **2–3 routes** between anchors.
- No anchor is more than **2 rooms** from a stair.
- No room has only one entrance; every room has at least two exits, except the vault and the cell.
- Secret passages connect **non-adjacent** rooms and are never the only route.
- The chapel and vault are sealed until midnight; their outer routes are still walkable.
- The killer's staging room is reserved and cannot contain a random clue.
- The Foyer is always within **3 rooms** of the front gate.

## Player count scaling

| Players | Modular rooms | Total rooms | Secrets |
|---|---|---|---|
| 6–7 | 8–10 | 20–22 | 4 |
| 8–9 | 10–12 | 24–26 | 5 |
| 10 | 12–16 | 26–30 | 6 |

The anchors are always all present. The modular count changes.

## Room graph

The generator builds a graph:

```text
Anchor nodes: Foyer, Ballroom, Kitchen, Study, Chapel, Archive, Vault, Attic
Modular nodes: 8–16 rooms from the pool
Edges: 2–3 routes per floor + stairs + secrets
```

It then validates:

- Every anchor is reachable from the Foyer.
- Every modular room is reachable.
- Every room has two exits (except vault/cell).
- No secret is the only route.
- No key is behind its own lock.
- The chapel and vault have two entrances after midnight.

## Art and readability

- Anchors have a unique silhouette, color accent, and sound.
- Modular rooms share a kit but have a unique landmark (a painting, a clock, a crack).
- Every room has a name plate or a discoverable sign.
- The Map item uses the room's name, not a generic icon.
- The Ghost Blueprint shows the 1926 layout, not the current one.

## Performance

- Modular rooms are pre-baked models; the generator places them, not builds them.
- Each room is a single Model with streaming enabled.
- The generator never creates new parts at runtime beyond markers.
- Target: <2s generation, <60k parts, <250 unique meshes.

## Related

- [[Map System Overview]]
- [[Procedural Generation]]
- [[Floor Plans]]
- [[Room Catalog]]
- [[Locked Doors and Keys]]
