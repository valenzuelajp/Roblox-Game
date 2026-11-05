---
title: "Procedural Map Generation"
aliases:
  - "Map Generator"
  - "Seed Pipeline"
tags:
  - development
  - generation
  - map
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The implementation pipeline that turns a seed into a validated, playable four-level lodge with anchors, modular rooms, routes, secrets, locks, and clues."
related:
  - "[[Development MOC]]"
  - "[[Map System Overview]]"
  - "[[Procedural Generation]]"
  - "[[Clue and Scenario Generation]]"
---

# Procedural Map Generation

> [!info] Goal
> Every seed produces a lodge that is **different**, **readable**, **fair**, and **completable**. The generator is a constraint solver, not a randomizer.

## Inputs

| Input | Source | Notes |
|---|---|---|
| `seed` | Server | 64-bit integer; logged with the match |
| `playerCount` | Match | 6–10 |
| `difficulty` | Scenario | easy / medium / hard |
| `scenario` | ScenarioService | Staging room, valid rooms |
| `version` | Build | Generator version for reproducibility |

## Outputs

```lua
type GeneratedMap = {
  seed: number,
  version: string,
  levels: { Level },
  rooms: { RoomInstance },
  doors: { Door },
  secrets: { SecretPassage },
  locks: { Lock },
  anchors: { [string]: RoomId },
  clueRooms: { [task: string]: { free: RoomId, item: RoomId } },
  stagingRoom: RoomId,
  shiftTarget: Wing,
  escape: EscapeRoute,
  validation: ValidationReport,
}
```

## Pipeline

```text
1. Validate inputs
2. Build the level skeleton
3. Place the 8 anchors
4. Add modular rooms
5. Connect routes
6. Add secret passages
7. Add locks and keys
8. Assign clue rooms
9. Reserve the staging room
10. Choose the shift target
11. Validate
12. Bake and replicate
```

### 1. Validate inputs

- Player count in range.
- Scenario exists and is enabled.
- Difficulty exists.
- Seed is a number.

Fail fast. A bad input should never produce a half-built map.

### 2. Build the level skeleton

Each level gets a fixed **budget**:

| Level | Anchors | Modular rooms | Notes |
|---|---|---|---|
| L0 Cellar | Vault | 2–4 | Chapel crypt stair, boiler, wine cellar |
| L1 Ground | Foyer, Ballroom, Kitchen, Study, Chapel | 4–6 | Social heart; two exits |
| L2 First | Archive | 4–6 | Guest rooms, master suite, balcony |
| L3 Attic | Attic | 2–4 | Servant quarters, bell tower, observatory |

The skeleton is a graph of slots. Anchors have fixed slots; modular rooms fill the rest.

### 3. Place anchors

Anchors are never randomized in identity, only in **position within their level**:

- Foyer is always the ground-floor entry.
- Chapel is always ground floor, but its door orientation varies.
- Vault is always cellar, behind the wine cellar or boiler.
- Attic is always top, connected to the first floor by the service stair.

Constraints:

- Foyer connects to the front gate and at least two ground routes.
- Chapel has two entrances (main + side/crypt).
- Vault has one entrance and one secret entrance (or a second route after midnight).
- Attic has two routes (service stair + one secret or bell tower).

### 4. Add modular rooms

Pick from the enabled pool:

| Pool | Examples |
|---|---|
| Social | Dining Room, Library, Conservatory |
| Private | Master Suite, Guest Room — Rose, Guest Room — Ivy, Nursery |
| Service | Servant Quarters, Linen Room, Kitchen Annex |
| Utility | Carriage House, Boiler Room, Wine Cellar |
| Vertical | Balcony, Bell Tower, Observatory |

Rules:

- No duplicate unique rooms.
- At least one social room per floor.
- At least one service room on L1/L2.
- At least one vertical room for sightlines.
- Room count within the player-count band.

### 5. Connect routes

Build a graph with:

- **2–3 routes per floor.**
- A central stair, a service stair, and the crypt stair.
- At least two routes between the foyer and the chapel.
- No dead-end anchor.
- No room with only one entrance unless it has a secret.

Validate:

- Every room reachable from the foyer.
- Every anchor reachable without a key.
- The chapel reachable after midnight.
- The gate reachable from the foyer.

### 6. Add secret passages

- 4–6 per match.
- Types: bookcase, painting, dumbwaiter, coal chute, mirror, chimney.
- Two-way except chutes.
- At least one connects two floors.
- At least one is near the chapel.
- None is the only route to a required room.
- None opens into a wall or a locked area without a key.

### 7. Add locks and keys

- 2–4 locked doors.
- Keys spawn in rooms reachable without the locked door.
- At least one key is in a modular room, not an anchor.
- The chapel and vault are sealed by the midnight shift, not by a key.
- The front gate is sealed by the Hollow Word, not a key.

### 8. Assign clue rooms

The clue generator (see [[Clue and Scenario Generation]]) receives:

- The room graph.
- The scenario's task themes.
- The forbidden rooms (staging, ritual, safe rooms).
- The requirement that no two clues share a room.

It returns a clue manifest. The map generator places containers and props.

### 9. Reserve the staging room

The killer's chosen staging room is reserved:

- No clue spawns there.
- The body and props are placed there.
- It must be reachable and have a valid staging anchor.
- It cannot be the chapel, vault, or a safe room.

### 10. Choose the shift target

Pick one wing on L1 or L2. The wing must:

- Contain at least two rooms.
- Have a pre-baked variant.
- Not contain the ritual site or the vault.
- Not orphan a room when it changes.

### 11. Validate

Run the full validation suite:

- Reachability.
- No soft-locks.
- No key behind its own lock.
- No clue behind its own lock.
- No two clues in one room.
- Staging room clear.
- All anchors present.
- Two routes to chapel and vault.
- Secret passages valid.
- Room count in band.
- Performance budget.

If validation fails, retry with `seed + 1`, up to 10 times. If all fail, use the **fallback map** and log.

### 12. Bake and replicate

- Assemble room models from `assets/models/rooms`.
- Parent to `Workspace.Generated`.
- Set collision, lighting, and audio emitters.
- Replicate the room graph and door states to clients.
- Keep the clue manifest server-only.

## Determinism

Use a seeded PRNG, not `math.random()`:

```lua
local Random = Random.new(seed)
local index = Random:NextInteger(1, #pool)
```

Every random choice must come from the same seeded stream, in a fixed order. If the order changes, old seeds break.

## Performance

| Budget | Target |
|---|---|
| Generation time | < 2 seconds |
| Part count | < 60,000 |
| Unique meshes | < 250 |
| Streaming | Enabled |
| Load time | < 8 seconds |
| Server memory | < 1.5 GB |

Use pre-baked room modules. Do not use runtime CSG. Do not generate unique meshes at runtime.

## Testing

- **Seed sweep:** generate 1,000 seeds per player count; validate all.
- **Golden seeds:** keep 20 seeds as regression fixtures.
- **Failure injection:** remove a room, break a door, orphan an anchor; the validator must catch it.
- **Performance test:** measure generation and part count.
- **Playtest:** walk every seed route in Studio.

## Telemetry

Log per match:

- Seed and generator version.
- Retry count.
- Validation failures.
- Room count.
- Generation time.
- Fallback used.

## Related

- [[Procedural Generation]]
- [[Map System Overview]]
- [[Clue and Scenario Generation]]
- [[Testing Strategy]]
