---
title: "Floor Plans"
aliases:
  - "The Four Floors"
  - "Map Layout"
tags:
  - world
  - map
  - layout
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "The four levels of Blackwood Lodge, their anchors, their modular rooms, and their vertical connections."
related:
  - "[[World MOC]]"
  - "[[Room Catalog]]"
  - "[[Map System Overview]]"
  - "[[Procedural Generation]]"
---

# Floor Plans

> [!info] These are schematics, not fixed maps
> The seed decides which modular rooms appear and where they connect. The anchors and the vertical connections are fixed. The diagrams below show the **baseline** layout, not a playable seed.

## Vertical connections

| Connection | From | To | Access |
|---|---|---|---|
| **Grand staircase** | Foyer | First-floor corridor | Always open |
| **Service stair** | Kitchen | First-floor corridor / Attic | Always open |
| **Attic stair** | First-floor corridor | Attic | Always open |
| **Cellar stairs** | Kitchen | The Cellar | Always open |
| **Crypt stair** | The Cellar | Chapel | Sealed until midnight |
| **Bell rope** | Chapel | Bell Tower | Post-midnight |
| **Dumbwaiter** | Kitchen pantry | Linen Room | Clue-sized, not player-sized |
| **Laundry chute** | Linen Room | The Cellar | One-way, safe landing |
| **Coal chute** | Carriage House | Boiler Room | Crawl route |
| **Balcony rope** | Master Suite / Balcony | Conservatory roof | Risky, one-way down |

## Cellar (L0)

```text
        [Crypt Stair]──[Chapel]  (sealed until midnight)
              │
        [Vault]──[The Cellar]──[Wine Cellar]
              │         │
        [Boiler Room]──[Kitchen stairs]
              │
        [Coal chute]──[Carriage House]
```

**Anchors:** The Cellar, Vault.
**Modular:** Wine Cellar, Boiler Room, Crypt Stair.
**Role:** the truth layer. The vault is the second pistol. The crypt stair is the ritual route. The boiler is the sabotage hub.

## Ground (L1)

```text
   [Carriage House]──[Conservatory]──[Chapel]
          │                 │            │
       [Library]──[Study]──[Foyer]──[Ballroom]
          │           │         │         │
       [Dining Room]──[Kitchen]──[Service stair]
```

**Anchors:** Foyer, Ballroom, Kitchen, Study, Chapel.
**Modular:** Dining Room, Library, Conservatory, Carriage House.
**Role:** the public layer. The foyer is the hub, the ballroom is the stage, the study is the crime scene, the chapel is the ritual.

## First Floor (L2)

```text
   [Balcony]──[Master Suite]──[Guest Room Rose]
        │             │               │
   [Nursery]──[First-floor corridor]──[Guest Room Ivy]
        │             │
   [Archive]────[Service stair]
```

**Anchors:** Archive.
**Modular:** Master Suite, Guest Room Rose, Guest Room Ivy, Balcony, Nursery.
**Role:** the private layer. The archive is the clue hub, the master suite is Elias's room, the guest rooms are the victims' memories.

## Attic (L3)

```text
   [Bell Tower]──[Observatory]
          │            │
       [Attic]──[Servant Quarters]
          │            │
      [Linen Room]──[Attic stair]
```

**Anchors:** Attic.
**Modular:** Servant Quarters, Bell Tower, Observatory, Linen Room.
**Role:** the memory layer. The attic holds the nine trunks; the bell tower is the voice; the observatory is the zodiac puzzle.

## Anchor placement rules

- The **Foyer** is always the spawn and the evidence board.
- The **Chapel** is always reachable from the Foyer by two routes.
- The **Vault** is always below the Chapel or the Cellar.
- The **Archive** is always on the First Floor.
- The **Attic** is always above the Archive.
- The **Kitchen** is always adjacent to the Cellar stairs.
- The **Ballroom** and **Study** are always on the Ground Floor, on opposite sides of the Foyer.
- The **Chapel** and **Vault** are sealed until midnight.

## Modular placement rules

- 12–16 modular rooms per match.
- No modular room may block the only route between two anchors.
- No two clue rooms may be the same room.
- The staging room is reserved and cannot be a clue room.
- The secret passages connect rooms that are at least two graph edges apart.
- The midnight shift swaps one wing, not the whole floor.

## Related

- [[World MOC]]
- [[Room Catalog]]
- [[Map System Overview]]
- [[Procedural Generation]]
- [[Midnight Shift]]
