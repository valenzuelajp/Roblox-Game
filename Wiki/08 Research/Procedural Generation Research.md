---
title: "Procedural Generation Research"
aliases:
  - "Procgen Notes"
  - "Map Generation Research"
tags:
  - research
  - procedural-generation
  - level-design
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "How to make a changing mansion readable, fair, and performant: graph grammars, modular kits, seeded layouts, validation, and why full WFC is the wrong tool here."
related:
  - "[[Research MOC]]"
  - "[[Procedural Generation]]"
  - "[[Map System Overview]]"
  - "[[Procedural Map Generation]]"
---

# Procedural Generation Research

## The question

How do we make a mansion that changes every session without making it unreadable, unfair, or expensive?

## The options

| Method | How it works | Pros | Cons | Verdict |
|---|---|---|---|---|
| **Hand-authored map** | Fixed layout | Readable, art-directed, cheap to test | Same every match, no replay value | Not enough |
| **Full WFC** | Solves tile constraints | Novel layouts | Unreadable, hard to art-direct, slow, brittle | Reject for the whole map |
| **Graph grammar** | Rooms as nodes, doors as edges | Readable, controllable, testable | Less surprising | **Use for the skeleton** |
| **Modular kit** | Pre-built rooms snap together | Art-directed, fast, consistent | Can feel repetitive | **Use for the rooms** |
| **Seeded shuffle** | Randomize anchors/rooms | Cheap, predictable | Not enough variety alone | Use for variation |
| **Hybrid** | Graph + modules + seeds | Readable and varied | More engineering | **Recommended** |

## The recommendation

**Hand-authored modular rooms + a seeded graph skeleton + a validation pass.**

Why:

- The player must be able to say "I was in the chapel" and be understood. A graph of named anchors preserves that.
- The art must look intentional. A modular kit with 12–16 rooms can be art-directed.
- The layout must be fair. A validation pass can guarantee routes, keys, and clue reachability.
- The game must load fast. Pre-baked modules are cheaper than runtime WFC.
- The map must change. The seed changes the graph, the room pool, the secrets, and the shift target.

Full WFC is attractive for variety but produces layouts that are hard to read, hard to validate, and hard to art-direct. It also tends to create "noise" rather than "surprise."

## The graph skeleton

Nodes:

- **8 anchors:** Foyer, Ballroom, Kitchen, Study, Chapel, Archive, Vault, Attic.
- **12–16 modular rooms** from a pool of 20–26.
- **Corridors, stairs, passages** as edges.

Edges:

- Each anchor connects to at least two routes.
- Each modular room connects to at least two routes.
- The chapel and vault have two entrances (main + secret/crypt).
- The front gate is the only exit; it requires the Hollow Word.

Constraints:

- No isolated rooms.
- No key behind its own lock.
- No clue behind a lock that requires the clue.
- No one-entrance chapel or vault.
- No spawn-camping sightline from the killer's start to the foyer.
- No room with zero escape routes.

## Readability

A procedural map is only fun if players can build a mental model. Techniques:

- **Anchor landmarks.** The foyer has a clock; the chapel has a bell; the ballroom has a piano; the archive has a card catalog; the cellar has wine racks.
- **Consistent floor identity.** Ground = social; first = private; cellar = industrial; attic = forgotten.
- **Color and light.** Each floor has a palette and a light temperature.
- **Sound.** Each anchor has a unique ambient loop.
- **Signage.** Brass room plates, painted door numbers, a floor map in the foyer.
- **The map item.** A hand-drawn map that fills in as rooms are visited.
- **The Ghost Blueprint.** A 1926 map that reveals the original passages, not the current layout.

## Validation

Every seed must pass:

- [ ] All 8 anchors reachable from spawn.
- [ ] Chapel and vault have two routes.
- [ ] Every task clue reachable without another task's item.
- [ ] No key behind its own lock.
- [ ] No soft-lock from a one-way passage.
- [ ] No clue in the staging room.
- [ ] No two clues in the same room.
- [ ] At least two free clues outside anchors.
- [ ] The killer can reach the staging room in the shop window.
- [ ] The exit is reachable from the chapel.
- [ ] The map loads in <2s generation and <8s total.
- [ ] The navmesh covers every walkable route.
- [ ] The mobile part budget is met.

## Testing

- **Golden seeds.** 20 seeds with known-good layouts, used for regression.
- **Seed sweep.** 10,000 seeds per build; assert constraints.
- **Failure injection.** Remove a door, block a route, duplicate a key; assert recovery.
- **Playtests.** Humans test 10 seeds; look for "I'm lost" moments.
- **Telemetry.** Track time-to-first-clue, rooms visited, backtracking, deaths by room.

## Performance

- Pre-bake room modules; do not generate geometry at runtime.
- Use `StreamingEnabled` with a 512-stud radius.
- Keep <15k visible parts, <250 unique meshes.
- Use shared materials and textures.
- Bake lighting where possible; use few dynamic lights.
- Generate the clue manifest on the server, not the client.
- Cache the layout for the match; no re-generation mid-match except the scripted shift.

## What can go wrong

| Failure | Symptom | Fix |
|---|---|---|
| **Unreadable layout** | Players wander, matches time out | More anchors, clearer landmarks |
| **Samey layouts** | "I've seen this before" | Larger room pool, more secret types |
| **Soft-lock** | No route to a clue | Validation + fallback seed |
| **Key behind its own lock** | Progression stops | Lock graph validation |
| **One-entrance chapel** | Killer camps, ritual impossible | Two entrances enforced |
| **Performance spike** | Mobile crashes | Part budget, streaming, LOD |
| **Clue in staging room** | Killer knows too much | Reserve the room |
| **Secret passage too strong** | Killer escapes every chase | Two-way, discoverable, not only route |

## Open questions

- **RQ-17:** How many unique modular rooms does the game need before players stop noticing repeats?
- **RQ-18:** Does the midnight shift feel like a story beat or a random shuffle?
- **RQ-19:** Can players learn the anchor vocabulary in one match?
- **RQ-20:** What is the right seed-sweep size for CI?

## Related

- [[Procedural Generation]]
- [[Map System Overview]]
- [[Procedural Map Generation]]
- [[Clue Placement]]
- [[Testing Strategy]]
