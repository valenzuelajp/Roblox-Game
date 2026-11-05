---
title: "Clue and Scenario Generation"
aliases:
  - "Clue Generator"
  - "Scenario Generator"
tags:
  - development
  - generation
  - clues
  - scenarios
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How the server turns a scenario card and a map seed into a validated clue manifest, staging layout, and false-clue slot."
related:
  - "[[Procedural Map Generation]]"
  - "[[Clue Placement]]"
  - "[[Scenario Card Anatomy]]"
  - "[[Clue System Overview]]"
---

# Clue and Scenario Generation

## Purpose

The map generator decides **where the rooms are**. The clue generator decides **where the evidence is**. The scenario generator decides **what the evidence means**.

These are three separate passes over the same seed. Keeping them separate makes each one testable and prevents a map change from silently breaking the case.

## Inputs

| Input | Source | Notes |
|---|---|---|
| `seed` | Match server | One 64-bit seed per match. |
| `scenarioCard` | Killer's choice (S3) | The card supplies answers, clue themes, and valid rooms. |
| `mapManifest` | Map generator | Room IDs, floors, containers, locks, routes, secret passages. |
| `playerCount` | Lobby | Scales room count and clue redundancy. |
| `difficulty` | Lobby / card | Easy, medium, hard. |
| `contentFlags` | Card | Content boundaries, voice-safe text, accessibility variants. |

## Outputs

| Output | Consumer | Contents |
|---|---|---|
| `clueManifest` | Server, client (filtered) | One row per clue: task, tier, room, container, item, answer, text ID. |
| `stagingManifest` | Killer, server | Body anchor, weapon anchor, prop anchors, signature anchor, reserved room. |
| `falseClueSlot` | Killer, server | One valid room + container for the Forged Letter. |
| `letterOrder` | Server, exit UI | The five letters and their sources. |
| `npcVariants` | NPC service | Which testimony lines are active for this card. |
| `validationReport` | Telemetry | Pass/fail, seed, attempts, fallback used. |

## The generation pipeline

```text
1. Validate card
2. Pick task rooms from card.validRooms ∩ map.rooms
3. Pick containers for free clues
4. Pick containers for item clues (different rooms)
5. Assign item pairs from card.itemClues
6. Reserve the staging room
7. Pick the false-clue room (killer's Forged Letter)
8. Assign answer options and letters
9. Validate elimination math
10. Validate reachability and no soft-locks
11. Filter the killer's view
12. Bake and publish
```

### Step 1 — Validate the card

Reject the card if:

- Any task answer is missing.
- The Hollow Word is not exactly five letters.
- The card references a room that is not in the map pool.
- The item pair for a task has no valid item in the catalog.
- A content flag conflicts with the game rating.

Validation is server-side. A malformed card fails closed: the match does not start with a broken scenario.

### Step 2 — Pick task rooms

For each task, choose a room from `card.validRooms[task]` that exists in the current map. Use a weighted random:

- Prefer rooms that are not the staging room.
- Prefer rooms with at least two routes.
- Avoid placing all four tasks on one floor.
- Avoid placing a task in a room that is locked behind a key that is itself behind a task clue.

If a task has no valid room, fall back to the card's default room and log a warning.

### Step 3 — Pick free-clue containers

Free clues go in **common** or **hidden** containers. They should be findable within the first few minutes of entering the room. Avoid:

- Containers that require a lockpick.
- Containers in the staging room.
- Containers in the chapel or vault before midnight.

### Step 4 — Pick item-clue containers

Item clues go in a **different room** from their free clue. They can use hidden or locked containers. The matching item must be purchasable in the shop (or findable in the world, if the card allows it).

The item clue should be in a room the player has a reason to visit. If the free clue is in the Study, the item clue can be in the Archive, the Master Suite, or the Library — not the same room.

### Step 5 — Assign item pairs

Each task gets at least two valid items. The card can specify:

- `primaryItem` — the intended tool.
- `secondaryItem` — an alternate tool that reveals the same detail.
- `neverItem` — an item that must not solve this task (prevents a universal key).

Example:

| Task | Primary | Secondary | Never |
|---|---|---|---|
| Victim | Camera | Notebook | Cipher Wheel |
| Method | Magnifying Glass | Fingerprint Kit | Recorder |
| Scene | UV Torch | Compass | Camera |
| Motive | Cipher Wheel | Recorder | UV Torch |

### Step 6 — Reserve the staging room

The staging room is where the body is found. It cannot contain a true clue. It can contain:

- The body.
- The weapon (real or decoy).
- The signature prop.
- The red herring.
- The killer's false clue, if the killer chooses to place it there.

Reserving the room prevents the case from being solved by standing in one place.

### Step 7 — Pick the false-clue room

The false clue is optional. If the killer bought the **Forged Letter**, the generator picks one valid room and container that:

- Is not the staging room.
- Is not the same room as the item clue it contradicts.
- Is reachable without a key the team cannot get.
- Supports exactly one wrong option.

The killer can decline to place it. The slot expires at the end of the shop.

### Step 8 — Assign answer options and letters

Each task has three options. The card defines the correct answer and the two distractors. The generator shuffles the order per match so the answer is not always in the same slot.

The four task letters plus the ritual letter form the Hollow Word. The generator stores the order in `letterOrder` and never sends the full word to a client before the ritual.

### Step 9 — Validate elimination math

For every task:

- The free clue eliminates exactly one wrong option.
- The item clue confirms the correct option.
- The remaining option is the other wrong option.
- The false clue (if present) supports the eliminated or remaining wrong option, never the correct one.

If any check fails, regenerate the task's clue pair. If three attempts fail, fall back to the card's hand-authored default.

### Step 10 — Validate reachability

The clue generator asks the map generator:

- Is every clue room reachable from the foyer without crossing a locked door whose key is behind the clue?
- Is the chapel reachable after midnight?
- Is the vault reachable after the three seals?
- Is the exit reachable with the Hollow Word?
- Is there at least one route to each clue that does not require a secret passage?

If any answer is no, the match regenerates with a new seed. The fallback seed is a hand-tested golden seed.

### Step 11 — Filter the killer's view

The killer receives:

- The scenario card (full).
- The task rooms.
- The staging room.
- The false-clue slot.
- The true answers.

The killer does **not** receive:

- The exact container IDs.
- The item-clue rooms.
- The letter order.
- The client's clue manifest.

This is the D-030 contract. The killer can search, guess, and plant, but cannot read the case.

### Step 12 — Bake and publish

The server bakes:

- Clue props and their interaction anchors.
- Body, weapon, and signature props.
- NPC variant lines.
- The evidence board's initial state.
- The exit letter lock.

The client receives only the props it can see. The full manifest stays on the server.

## Data schema

```lua
type ClueEntry = {
    id: string,
    task: "victim" | "method" | "scene" | "motive",
    tier: "free" | "item" | "false",
    roomId: string,
    containerId: string,
    itemId: string?,
    answer: string,
    textId: string,
    eliminatedOption: string?,
    validated: boolean,
}
```

The schema is shared between the generator, the server, and the tests. The client gets a redacted view with `answer` and `tier` removed for undiscovered clues.

## Determinism

The generator uses a seeded PRNG:

```lua
local rng = Random.new(seed)
local room = rooms[rng:NextInteger(1, #rooms)]
```

Rules:

- Never use `math.random` for generation.
- Never depend on iteration order of a hash table.
- Sort candidate lists by a stable key before choosing.
- Store the seed in the match record for reproduction.

## Validation and fallbacks

| Failure | Fallback |
|---|---|
| No valid task room | Use the card's default room. |
| No valid container | Use the room's default container. |
| Item pair missing | Use the card's fallback item. |
| Elimination math fails | Regenerate the task up to 3 times, then use the card's default. |
| Reachability fails | Regenerate the whole match with a new seed. |
| New seed fails twice | Use the golden seed and log an incident. |

A match must never start with an invalid case. A delayed match is better than a broken one.

## Testing

- **Unit:** every card, every task, every item pair produces a valid elimination.
- **Property:** for 10,000 seeds, no two true clues share a room.
- **Property:** for 10,000 seeds, every item clue is in a different room from its free clue.
- **Property:** for 10,000 seeds, the four letters plus the ritual letter form the card's word.
- **Golden seeds:** 20 hand-verified seeds run in CI.
- **Failure injection:** remove a room, remove a container, remove an item; the fallback must fire.
- **Killer view:** assert the killer never receives container IDs or the letter order.
- **Client view:** assert undiscovered clues never include answers.

## Telemetry

Per match:

- Seed, card ID, difficulty.
- Generation attempts, fallback used.
- Time to generate.
- Validation failures by type.
- Clue discovery times.
- Item usage by task.
- Wrong-answer rate.
- False-clue placement rate.

## Related

- [[Procedural Map Generation]]
- [[Clue Placement]]
- [[Clue Containers]]
- [[Scenario Card Anatomy]]
- [[Clue System Overview]]
