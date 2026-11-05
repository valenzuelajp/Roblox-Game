---
title: "False Clues"
aliases:
  - "Red Herrings"
  - "Killer's Lie"
  - "Forged Evidence"
tags:
  - systems
  - clues
  - killer
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "The killer's one false clue per match: how it is created, where it can go, how it is exposed, and why it must be fair."
related:
  - "[[Clue Placement]]"
  - "[[Free vs Item Clues]]"
  - "[[Killer Black Market]]"
  - "[[Sabotage]]"
---

# False Clues

> [!spoiler] Design spoiler
> This page explains the killer's lie. It must not appear in the player wiki.

## The rule

The killer may plant **one false clue** per match. It is a physical prop that supports a **wrong option** for one task. It cannot replace, hide, or destroy a true clue.

The false clue is the killer's **only permanent lie** in the evidence. Everything else is sabotage, timing, or voice.

## How it is created

1. The killer buys the **Forged Letter** in the Black Market (30 Shillings). Without it, the killer cannot plant a false clue.
2. During the shop, the killer chooses:
   - **Which task** the false clue attacks (Victim, Method, Scene, or Motive).
   - **Which wrong option** it supports.
   - **Which room** it goes in, from the rooms the killer can reach.
3. The game validates:
   - The room is reachable.
   - The room is not the staging room.
   - The room does not already contain a true clue.
   - The room is not the chapel or vault before midnight.
4. The prop spawns at the start of the investigation phase.

The killer can plant the false clue at any time during the match, not just in the shop. The Forged Letter is the **permission**; the placement is a physical action.

## What it can be

| Task | False clue | Wrong option it supports |
|---|---|---|
| **Victim** | A forged guest list with a different name | The victim was the journalist, not the industrialist |
| **Method** | A planted knife with blood on it | The victim was stabbed, not poisoned |
| **Scene** | A staged struggle in the study | The scene was the study, not the chapel |
| **Motive** | A forged will leaving everything to the cult | Money, not silence |

The false clue must be **plausible**. It cannot be a cartoonish lie. It should be the kind of evidence a tired detective would accept.

## How it is exposed

The false clue is always **exposable** by the item clue:

- The camera's photo shows the guest list's ink is fresher than the paper.
- The magnifying glass shows the knife's blade does not match the wound.
- The UV torch shows the struggle was staged after the blood dried.
- The cipher wheel decodes the will's seal as a forgery.

The item clue does not say "this is false." It gives the player the detail they need to **realize** it.

## False letters

A wrong answer can also plant a **false Hollow Word letter**. This is separate from the false clue:

- Chance: **35%** (proposed).
- The false letter is added to the team's letter bank.
- The letter is marked as "unverified" until the ritual.
- The item clue for that task can reveal the false letter as a forgery.
- The false letter cannot overwrite a true letter; it occupies a separate slot.

The team can choose which letters to enter at the gate. A false letter will fail the lock.

## What the false clue must never do

- Never replace a true clue.
- Never hide a true clue.
- Never make a task unsolvable.
- Never be the only clue for a task.
- Never be impossible to expose.
- Never be placed in the staging room.
- Never be placed in the chapel or vault before midnight.

## Counterplay

| Counter | How it works |
|---|---|
| **Item clue** | Reveals the contradiction. |
| **Second opinion** | Another player examines the same clue with a different item. |
| **Evidence board** | Cross-referencing the false clue with the true clues exposes the inconsistency. |
| **Killer behavior** | The player who pushes the false clue hardest is a suspect. |
| **Time** | The false clue takes time to plant; the killer may be seen. |

## The social effect

The false clue is not just a puzzle. It is a **social weapon**:

- The killer can "find" the false clue in front of the team.
- The killer can argue for the wrong option.
- The killer can accuse the player who doubts the clue.
- The team must decide whether to trust the evidence or the person who found it.

This is the heart of the game: **evidence is not the same as truth.**

## Telemetry

Track:

- False clues planted per match.
- Which task they attacked.
- Exposure rate.
- Wrong answers caused.
- Player reports of "unfair" false clues.
- Forged Letter purchase rate.

## Design notes

- **One false clue is enough.** More turns the case into noise.
- **The false clue should be findable early.** It should create doubt before the team commits.
- **The item clue is the antidote.** Never make the false clue immune to evidence.
- **The best false clue is the one the team wants to believe.**

## Related

- [[Clue Placement]]
- [[Free vs Item Clues]]
- [[Killer Black Market]]
- [[Sabotage]]
