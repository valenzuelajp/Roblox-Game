---
title: "Clue System Overview"
aliases:
  - "Clues"
  - "Evidence System"
tags:
  - systems
  - clues
  - status/locked
status: locked
updated: 2026-11-04
summary: "How clues are authored, generated, hidden, found, validated, and logged: the pipeline from scenario card to evidence board."
related:
  - "[[Clue Types]]"
  - "[[Clue Containers]]"
  - "[[Clue Placement]]"
  - "[[Free vs Item Clues]]"
  - "[[False Clues]]"
---

# Clue System Overview

> [!info] Clues are physical
> Every clue is a prop in the world. There are no floating waypoints, no quest markers, and no "press E to reveal the answer" prompts. The player searches, finds, and interprets.

## The clue pipeline

```text
Scenario card
  └── Task definition (question, options, true answer)
        ├── Free clue (prop, room pool, container pool)
        ├── Item clue (prop, item requirement, hidden layer)
        ├── Red herring (prop, false support)
        └── Testimony (NPC line, optional corroboration)

Map seed
  └── Room graph
        ├── Clue room assignment (no two clues in one room)
        ├── Container assignment
        ├── Reachability validation
        └── Killer staging room reservation

Server
  └── Clue manifest (authoritative)
        ├── task, room, container, item, answer
        ├── discovered_by, discovered_at
        └── false flag

Client
  └── Discovered clues only
        ├── Board card
        ├── Hotkey UI card
        └── Text description
```

## The clue manifest

The server generates a **clue manifest** at match start. It is the single source of truth.

| Field | Type | Example |
|---|---|---|
| `clue_id` | string | `task2_item_01` |
| `task` | enum | `method` |
| `kind` | enum | `free`, `item`, `false`, `testimony` |
| `room_id` | string | `study` |
| `container_id` | string | `desk_drawer_02` |
| `required_item` | string? | `magnifying_glass` |
| `prop_id` | string | `wound_detail` |
| `answer_option` | enum | `ice_pick` |
| `discovered_by` | player ID? | `player_3` |
| `discovered_at` | timestamp? | `12:34:56` |
| `is_false` | boolean | `false` |

The manifest is **never replicated to clients**. Clients receive only the clues they have discovered and the board state.

## Discovery

A clue has two layers:

1. **Surface layer:** the prop is visible or searchable. Searching takes about **2 seconds**.
2. **Hidden layer:** the item clue requires the matching item. Using the item takes about **1 second** and reveals the definitive detail.

Examples:

- A desk drawer opens in 2 seconds; the **Magnifying Glass** reveals a hidden compartment in 1 second.
- A painting is searchable in 2 seconds; the **UV Torch** reveals the sigil under the varnish in 1 second.
- A guest book is readable in 2 seconds; the **Camera** captures the faded page in 1 second.

The item does not consume the clue. The clue remains for other players.

## Clue ownership

- Clues are **team-shared** once discovered. The board updates for everyone.
- The discovering player gets a small Cinders bonus (proposed).
- The physical prop remains in the world. Other players can examine it.
- The killer can see which clues the team has found only by watching the board or the team's behavior.
- The killer cannot steal a true clue. They can plant a false one.

## Clue families

There are five **content families**, which map to the five puzzle families but are not the same thing:

| Family | What it looks like | Example |
|---|---|---|
| **Document** | Letters, ledgers, guest books, wills | A torn ledger page |
| **Physical** | Weapons, wounds, clothing, furniture | A bloody letter opener |
| **Trace** | Blood, ash, perfume, footprints | A blood trail under a rug |
| **Testimony** | NPC dialogue, staff answers | "The study was locked all night." |
| **Symbol** | Sigils, zodiac, binary, runes, knots | A sigil painted under the board |

The **puzzle families** are locks, not clue families. A document clue may be locked by a zodiac puzzle; a symbol clue may be a binary code.

## Clue validation

Before a match starts, the server validates:

- Every task has one free clue and one item clue.
- Every clue is reachable from the spawn.
- No two clues are in the same room.
- At least two free clues are outside anchor rooms.
- The killer's staging room is reserved.
- The item required for each item clue is either in the shop or guaranteed in a reachable container.
- The false clue is reachable and does not block a true clue.
- The Hollow Word's letters are all obtainable.

If validation fails, the server rerolls the seed. It never starts a broken match.

## Clue presentation

| Surface | What it shows | When |
|---|---|---|
| **World** | The prop, its model, its sound | Always |
| **Search prompt** | "Search the drawer" | On interact |
| **Clue card** | Title, description, image | On discovery |
| **Board** | Pinned card, string | On discovery |
| **Hotkey UI** | Text card, answer context | On discovery |
| **Toast** | "New evidence: Method" | On discovery |

The clue card is **diegetic**: it looks like a photograph or a typed note, not a tooltip.

## Anti-soft-lock rules

1. Every clue has at least two reachable routes.
2. No clue is behind a one-way door.
3. No clue requires a key that can be permanently lost.
4. No clue requires voice.
5. No clue requires a specific player to be alive.
6. No clue is destroyed by the killer.
7. No clue is in the killer's staging room.
8. If the item is lost, the clue can still be found with a backup item or the free clue.

## Telemetry

Track per clue:

- Time to first search.
- Time to discovery.
- Item used.
- Player who found it.
- Whether the team submitted the supported answer.
- Whether the clue was ever found before the ritual.

This identifies clues that are too hidden, too obvious, or never found.

## Design notes

- **A clue is a sentence, not a key.** It should tell the player something about the crime.
- **A clue is a place.** The room should matter to the clue's meaning.
- **A clue is a risk.** The killer can watch the player who finds it.
- **A clue is a reward.** Finding it should feel like a small win.
- **A clue is not a collectible.** Do not fill the map with meaningless props.

## Related

- [[Clue Types]]
- [[Clue Containers]]
- [[Clue Placement]]
- [[Free vs Item Clues]]
- [[False Clues]]
- [[Puzzle System Overview]]
