---
title: "Clue Placement"
aliases:
  - "Clue Distribution"
  - "Randomized Clues"
tags:
  - systems
  - clues
  - map
  - status/locked
status: locked
updated: 2026-11-04
summary: "How the four tasks' free and item clues are distributed across the procedural map, with validation rules that prevent soft-locks."
related:
  - "[[Clue System Overview]]"
  - "[[Clue Containers]]"
  - "[[Free vs Item Clues]]"
  - "[[Procedural Generation]]"
---

# Clue Placement

> [!info] Locked frame
> Clues are randomized from the same seed as the map (D-017). The killer knows the task rooms but not the exact containers (D-030). The killer may plant one false clue.

## The clue manifest

The server generates a **clue manifest** before the match. It is the authoritative list of every true clue:

```text
task: Victim
tier: free
room: Library
container: desk drawer
item: none
answer: Marguerite Vale
text_id: victim_free_02
```

Fields:

| Field | Meaning |
|---|---|
| `task` | Victim, Method, Scene, or Motive |
| `tier` | free or item |
| `room` | The room the clue is in |
| `container` | The prop or furniture that holds it |
| `item` | The investigator item required (item tier only) |
| `answer` | The correct option |
| `text_id` | The localized text card |

The manifest is **server-only**. The client receives only the clues it has discovered.

## The distribution rules

1. **Four tasks, two clues each.** One free clue and one item clue per task.
2. **No two clues in the same room.**
3. **The item clue is in a different room from the free clue.**
4. **At least two free clues are outside anchor rooms.**
5. **The killer's staging room contains no true clue.**
6. **No clue is behind a lock that requires the clue itself.**
7. **Every clue container is reachable from the foyer.**
8. **Every item clue has at least two valid items.** (The card can swap the pair.)
9. **The false clue is placed after the true clues**, in a room the killer can reach.
10. **No clue is placed in the chapel or vault before midnight.**

## Room assignment

The generator assigns rooms in this order:

1. **Task rooms** from the scenario card (e.g., Victim → Study or Archive).
2. **Free clue rooms** from the task room's adjacent rooms.
3. **Item clue rooms** from the same floor or the floor above.
4. **Fallback rooms** if a rule fails.

The goal is a **trail**, not a scavenger hunt:

- The free clue points to a room.
- The item clue is in a room the free clue mentions or implies.
- The player should be able to follow the story, not wander.

## The four trails

| Task | Free clue trail | Item clue trail |
|---|---|---|
| **Victim** | A scorched invitation in the dining room → the guest list in the study | The portrait plaque in the archive → the victim's full name |
| **Method** | A bloody letter opener in the study → the wound | The magnifying glass on the body → the true weapon |
| **Scene** | A strange smell in the ballroom → the rug | The UV torch under the rug → the sigil and blood trail |
| **Motive** | A torn ledger in the study → the debt | The cipher wheel on the letter → the threat |

The exact rooms vary by seed. The **shape** of the trail is constant.

## The killer's knowledge

The killer knows:

- The scenario card.
- The true answers.
- The task rooms.
- The staging room.

The killer does **not** know:

- The exact containers.
- The free clue's room.
- The item clue's room.
- Which item the team bought.

The killer can **plant one false clue** in a room they can reach. The false clue:

- Supports a wrong option.
- Is not the free clue and not the item clue.
- Can be exposed by the item clue.
- Is placed after the true clues, so it cannot overwrite them.

## No soft-locks

The generator validates:

- [ ] Every task has a free clue and an item clue.
- [ ] Every clue is reachable.
- [ ] No clue requires a key that is behind its own lock.
- [ ] No clue is in the staging room.
- [ ] No two clues share a room.
- [ ] Every item clue has at least two valid items.
- [ ] The false clue cannot overwrite a true clue.
- [ ] The chapel and vault clues are post-midnight only.

If any check fails, the clue manifest is regenerated before the match starts.

## Clue visibility

- **Free clues** are in common containers: desks, drawers, tables, bookshelves, mantels.
- **Item clues** are in hidden containers: false bottoms, locked boxes, behind paintings, under rugs.
- **The killer's false clue** is in a common container, so it can be found early.

The free clue should be findable in the first five minutes. The item clue should require the right tool and a little searching.

## Text and accessibility

Every clue has:

- A **text card** with the same evidence as the visual.
- A **container description** when examined.
- A **sound cue** when found (paper, glass, metal).
- A **map marker** only after discovery.

A player who cannot see the prop can still read the clue.

## Telemetry

Track per task:

- Room of the free clue.
- Room of the item clue.
- Time to discover each.
- Item used.
- Wrong-answer rate.
- False-clue discovery rate.
- Soft-lock reports (target: zero).

## Design notes

- **Clues should feel placed by a person, not a generator.** The trail should tell a story.
- **The free clue is the first act.** It should be easy to find and hard to interpret.
- **The item clue is the second act.** It should reward the player who bought the weird tool.
- **The killer's false clue is the third act.** It should make the team argue.
- **Never hide a true clue in a room the player has no reason to visit.**

## Related

- [[Clue System Overview]]
- [[Clue Containers]]
- [[Free vs Item Clues]]
- [[Procedural Generation]]
