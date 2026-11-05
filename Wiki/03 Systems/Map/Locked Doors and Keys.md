---
title: "Locked Doors and Keys"
aliases:
  - "Locks"
  - "Keys"
  - "Locked Doors"
tags:
  - systems
  - map
  - access
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How locks, keys, lockpicks, and the killer's lock sabotage work, and why no key is ever behind its own lock."
related:
  - "[[Map System Overview]]"
  - "[[Anchors and Modular Rooms]]"
  - "[[Procedural Generation]]"
  - "[[Investigator Items]]"
  - "[[Midnight Shift]]"
---

# Locked Doors and Keys

> [!info] The rule
> **No key is behind its own lock.** Every locked route has at least one key, one lockpick route, or one secret passage. The generator validates this.

## Lock types

| Type | Opens with | Time | Used for |
|---|---|---|---|
| **Standard** | Key | Instant | Guest rooms, studies, service doors. |
| **Deadbolt** | Key + 1s hold | 1s | Master Suite, Archive cage. |
| **Padlock** | Key or Lockpick | 2s | Cellar cages, wine racks. |
| **Puzzle lock** | Solve a puzzle | 10–60s | Vault cabinet, chapel crypt. |
| **Seal** | Three seals | Instant | Second-pistol cabinet. |
| **Ward** | Ritual / Hollow Word | Instant | Chapel (until midnight), front gate. |

## Key placement

- **2–4 locks** per match.
- Each lock has **one key** and **one alternate route**.
- Keys spawn in **common containers** in rooms the player can reach without the lock.
- A key can be:
  - A physical key on a ring.
  - A code written in a ledger.
  - A fingerprint on a lock (Fingerprint Kit).
  - A spoken password from an NPC (Notebook/Recorder).
- The killer can **move one key** once per match (proposed). They cannot destroy it.
- The Map marks **discovered** locks, not keys.

## Lockpick

- The **Lockpick** item opens standard and padlock locks.
- It has **2 charges**.
- It takes **2 seconds**; the player is vulnerable.
- It does **not** open deadbolts, puzzle locks, seals, or wards.
- A failed lockpick (wrong timing) costs a charge and makes noise.

## Killer lock sabotage

The killer's **Lock** sabotage:

- Locks one door for **20 seconds**.
- Does not affect the door's key state.
- Can trap a player in a room with two exits; never a one-exit room.
- Can be countered by a secret passage, a second route, or waiting.
- Has a **60-second cooldown**.

The killer cannot lock the chapel or vault doors during the ritual.

## Chapel and vault

- **Chapel:** sealed until midnight; opens with the midnight shift. After midnight, two entrances (main door, crypt stair). The ritual can be interrupted at either.
- **Vault:** sealed until midnight; opens with the shift. The second-pistol cabinet is inside. The vault has one main door and one crypt-side door.
- **Front gate:** requires the Hollow Word. Wrong word = 30-second lockout + bell heard by the killer.

## Anti-soft-lock validation

The generator checks:

- Every key is reachable without its lock.
- Every lock has at least two routes.
- No key is in the vault before the vault opens.
- No key is in the chapel before midnight.
- No key is in the killer's staging room.
- No key is inside a container that requires the key.
- A lockpick route exists for every standard/padlock lock.
- A secret passage bypasses at least one lock.

If validation fails, the generator rerolls the lock placement, then the seed.

## UI

- Lock icon: keyhole, deadbolt, padlock, puzzle, seal, ward.
- Prompt: "Locked — find the key" / "Lockpick (2s)".
- Key inventory: a separate key ring.
- Map: discovered locks show a lock icon; undiscovered locks do not.
- Sound: a distinct click for each lock type.

## Telemetry

- Locks per match.
- Time to find each key.
- Lockpick usage.
- Killer lock sabotage success.
- Soft-lock validation failures.

## Design notes

- Locks create **routes**, not walls.
- A lock should make the player **choose** a route, not backtrack for five minutes.
- The killer's lock should be an **annoyance**, not a death sentence.
- The front gate is the only lock that can end the match.

## Related

- [[Map System Overview]]
- [[Anchors and Modular Rooms]]
- [[Procedural Generation]]
- [[Investigator Items]]
- [[Midnight Shift]]
