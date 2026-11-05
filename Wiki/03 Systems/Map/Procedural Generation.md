---
title: "Procedural Generation"
aliases:
  - "Map Generator"
  - "Seed"
  - "Procedural Map"
tags:
  - systems
  - map
  - technical
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How the lodge is generated each session: seed, room graph, anchors, routes, secrets, locks, validation, and player-count scaling."
related:
  - "[[Map System Overview]]"
  - "[[Midnight Shift]]"
  - "[[Clue Placement]]"
  - "[[Technical Overview]]"
---

# Procedural Generation

> [!info] Locked vs proposed
> The map changing every session is **locked** (D-016). The algorithm, room counts, and validation rules are **proposed**.

## The seed

Every match has one **seed**. The seed drives:

- Room selection and placement.
- Door and corridor connections.
- Secret passage locations.
- Locked doors and key placement.
- Clue rooms and containers.
- The midnight shift target.
- The killer's staging room.

The seed is generated server-side and never sent to clients in full. Clients receive only the rooms they have discovered and the props they can see.

The seed is stored in the match record for replay, bug reports, and telemetry.

## The generation pipeline

```text
1. Pick the floor skeleton
2. Place the 8 anchors
3. Fill modular rooms
4. Connect routes
5. Add secret passages
6. Place locks and keys
7. Place clues and containers
8. Place the killer's staging room
9. Place the midnight shift target
10. Validate
11. Bake lighting and occlusion
12. Publish the seed
```

### 1. Floor skeleton

Four levels, fixed vertical order:

- L0 Cellar
- L1 Ground
- L2 First
- L3 Attic

The skeleton defines the stairwells, the central stair, the service stair, and the exterior walls. The skeleton is the same every match; the rooms inside it are not.

### 2. Anchors

The 8 anchors are placed first, with fixed adjacency rules:

- **Foyer** on L1, adjacent to the front door and the central stair.
- **Ballroom** on L1, adjacent to the foyer.
- **Kitchen** on L1, adjacent to the service stair and the cellar door.
- **Study** on L1, adjacent to the foyer or ballroom.
- **Chapel** on L1, in a wing with two entrances and a crypt stair to L0.
- **Archive** on L2, adjacent to the central stair.
- **Vault** on L0, adjacent to the crypt stair and the service stair.
- **Attic** on L3, adjacent to the central stair and the bell tower.

### 3. Modular rooms

The generator fills the remaining slots from the variant pool. Each room has:

- A footprint (small, medium, large).
- A door count (1–3).
- A job (clue, shortcut, hiding, ritual, killer).
- A variant family.

The generator avoids:

- Two identical variants on the same floor.
- Three rooms in a row with one door.
- A floor with no hiding spot.
- A floor with no shortcut.

### 4. Routes

The generator builds a graph, not a grid:

- Every anchor has at least two routes to the central stair.
- Every floor has at least two routes between its anchors.
- The service stair connects L1, L0, and L3.
- The crypt stair connects the chapel to the vault.
- The front drive connects the foyer to the gate.

The graph is validated for **connectivity** before props are placed.

### 5. Secret passages

4–6 per seed. Each passage:

- Connects two rooms that are not already adjacent.
- Has a discoverable entrance (a bookcase, a painting, a coal chute).
- Has a two-way route; no one-way traps.
- Is not the only route to an anchor.
- Is not inside the chapel or vault.

### 6. Locks and keys

- **Private rooms:** 20% chance locked. Key is on a staff belt, in the study, or in the archive.
- **Chapel:** sealed until midnight. No key.
- **Vault:** sealed until midnight. Three seals open the cabinet.
- **Front gate:** locked until the Hollow Word.
- **Cellar cell:** locked from the outside; the killer can be detained there.

Keys are never placed behind a lock they open. This is a hard validation rule.

### 7. Clues and containers

Clues are placed **after** the room graph is validated. See [[Clue Placement]].

Rules:

- No two clues in the same room.
- At least two free clues outside anchor rooms.
- The item clue is in a different room from the free clue.
- The killer's staging room is reserved and contains no true clue.
- Every clue container is reachable without a key that is itself behind a soft-lock.

### 8. Staging room

The killer's staging room is chosen from the scenario card's valid rooms. It:

- Is reachable from the foyer.
- Has a body anchor and a prop anchor.
- Is not the foyer, chapel, or vault.
- Is not a room with a true clue.
- Is not a dead end without a secret.

### 9. Midnight shift

One wing is tagged as the shift target. The wing must:

- Contain at least two rooms.
- Have a pre-baked variant.
- Not contain the chapel or vault (they unseal instead).
- Not disconnect an anchor.

### 10. Validation

The generator runs a **hard validation pass**. If any check fails, the seed is rerolled:

- [ ] All anchors reachable from the foyer.
- [ ] All task rooms reachable.
- [ ] Chapel has two entrances.
- [ ] Vault has two entrances.
- [ ] Gate reachable.
- [ ] No key behind its own lock.
- [ ] No clue in the staging room.
- [ ] No two clues in the same room.
- [ ] Every sigil anchor reachable by two routes.
- [ ] Every secret passage two-way.
- [ ] No room with zero doors.
- [ ] No floor with zero hiding spots.
- [ ] The killer's staging room is valid.

### 11. Bake

Lighting, occlusion, and navigation meshes are baked per seed before the match starts. The bake is cached for the match; the midnight shift uses a pre-baked variant.

### 12. Publish

The server publishes:

- The room graph (to the client, progressively).
- The props and containers the player can see.
- The map item overlay (if held).
- The Ghost Blueprint overlay (if earned).

The client never receives the full seed, the clue manifest, or the killer's identity.

## Player-count scaling

| Players | Rooms | Secret passages | Clue spread | Shift target |
|---|---|---|---|---|
| 6–7 | 20–22 | 4 | 2 floors | 1 wing |
| 8–10 | 26–30 | 6 | 3 floors | 1 wing + 1 room |

More players means more rooms, more routes, and more hiding spots, not more clues. The four tasks are constant.

## Difficulty scaling

The generator can tune:

- **Room distance:** how far the task rooms are from the foyer.
- **Lock density:** how many doors need keys.
- **Secret density:** how many passages exist.
- **Clue visibility:** how obvious the free clue container is.
- **Shift severity:** how much the wing changes.

The default is **medium**. See [[Difficulty and Pacing]].

## Failure modes

| Failure | Response |
|---|---|
| No valid seed after 20 attempts | Fall back to the hand-authored tutorial seed |
| A room fails to bake | Swap to a safe variant |
| A clue container is unreachable | Move the clue to the nearest valid container |
| The chapel has one entrance | Add a side door from the adjacent room |
| The killer's staging room is invalid | Pick the next valid room from the card |

## Telemetry

Track:

- Seed generation time.
- Reroll rate.
- Room visitation heatmap.
- Route usage.
- Secret passage discovery rate.
- Soft-lock reports (should be zero).
- Shift impact on traversal time.

## Design notes

- **The map is a mystery, not a maze.** Players should get lost for a minute, not ten.
- **The anchors are the memory palace.** Learn the foyer, chapel, vault, and attic first.
- **The shift should feel like a rule, not a glitch.** Telegraph it with the clock and the bell.
- **The seed is a promise.** If the generator says a route exists, it must exist.

## Related

- [[Map System Overview]]
- [[Midnight Shift]]
- [[Clue Placement]]
- [[Technical Overview]]
