---
title: "Case File Overview"
aliases:
  - "The Case File"
  - "Case File System"
tags:
  - systems
  - case-file
  - status/locked
status: locked
updated: 2026-11-04
summary: "The four-task investigation at the heart of Blackwood Lodge: how it opens, how it updates, how answers are submitted, and how it ends in the ritual."
related:
  - "[[Case File Questions]]"
  - "[[Free vs Item Clues]]"
  - "[[Hollow Word]]"
  - "[[Evidence Board]]"
  - "[[Ritual Overview]]"
---

# Case File Overview

> [!info] Locked shape
> The Case File is **four tasks plus a ritual**. The old fifth question ("Who is the killer?") was removed. The ritual reveals the killers.

## What the Case File is

The Case File is the investigators' shared notebook. It is both:

- A **physical evidence board** in the foyer.
- A **personal hotkey UI** that mirrors the board's state.

It tracks four questions, the clues the team has found, the letters they have earned, and the ritual's progress. It is the spine of the investigator experience: every search, puzzle, purchase, and conversation should feed it.

## The four tasks

| # | Task | The question | Letter |
|---|---|---|---|
| 1 | **Victim** | Who was the victim? | 1st letter |
| 2 | **Method** | How were they killed? | 2nd letter |
| 3 | **Scene** | Where and how was the scene staged? | 3rd letter |
| 4 | **Motive** | Why did the cult want them dead? | 4th letter |
| 5 | **Ritual** | Not a question: a 30-second channel that reveals the killers and grants the fifth letter. | 5th letter |

The four tasks each have **three answer options**. The team chooses one. The ritual has no options; it is a physical, interruptible action.

## The task loop

Every task follows the same five-step loop:

1. **Hear the question.** The Case File opens with the four questions visible. No answers are visible.
2. **Find the free clue.** A physical prop in the world. Low quality, always available. It eliminates one wrong option.
3. **Find the item clue.** A hidden prop that requires the matching investigator item. It reveals the definitive answer.
4. **Submit an answer.** Any living investigator can submit at the board or from the hotkey UI. The first submission locks the task.
5. **Resolve.** Correct: letter, Cinders, progress. Wrong: 60-second lock, Cinders loss, possible false letter.

A task can be solved in any order. The team does not have to finish Task 1 before Task 2.

## State machine

```text
LOCKED
  │  first free clue found
  ▼
CLUE_FOUND
  │  item clue used
  ▼
EVIDENCE_READY
  │  answer submitted
  ├── correct ──► SOLVED ──► letter granted
  └── wrong ────► LOCKED_OUT (60s) ──► CLUE_FOUND
```

| State | Board display | Player action |
|---|---|---|
| `LOCKED` | Question, no pins | Search the world |
| `CLUE_FOUND` | Free clue pinned; one option struck | Search for the item clue |
| `EVIDENCE_READY` | Item clue pinned; two options remain | Submit an answer |
| `SOLVED` | Answer stamped; letter revealed | Move to the next task |
| `LOCKED_OUT` | Red stamp; countdown | Wait 60 seconds |

## Who can submit

- **Any living investigator** can submit. The Case File is shared.
- **The killer can submit.** They know the true answers. A killer who solves tasks is helping the team, which is a powerful cover. A killer who submits wrong answers burns locks and Cinders.
- **Dead investigators cannot submit.** They can watch the board from spectator mode.
- **Detained investigators cannot submit.** They can talk to rescuers.

The first submission locks the task. There is no "unsubmit." The team must live with the answer.

## What the killer knows

The killer knows:

- The scenario card.
- All four true answers.
- The task rooms.
- The general clue wing.
- The reserved staging room.

The killer does **not** know:

- The exact containers.
- Which free clue the team has found.
- Which item the team has bought.
- The team's submitted answer until it resolves.

The killer may plant **one false clue** per match. The false clue supports a wrong option. It cannot replace a true clue.

## The ritual slot

The fifth slot is not a question. It is the **Revealing Ritual**:

- The team must have at least one letter? No. The ritual can be attempted at any time after the midnight shift, even with zero tasks solved.
- The ritual takes **30 seconds** of channeling at the chapel altar.
- It can be interrupted by marking the channeler or breaking an anchor.
- Completing it reveals all killers, grants the fifth letter, unlocks the exit, and starts the Last Hunt.

See [[Ritual Overview]].

## Rewards and penalties

| Event | Effect |
|---|---|
| Correct answer | +1 task progress, +Cinders, one Hollow Word letter, clue entry |
| Wrong answer | −Cinders, 60-second lock, possible false letter |
| Fourth correct answer | All four letters; ritual available |
| Ritual complete | Fifth letter; killers revealed; exit unlocked; Last Hunt |
| Ritual interrupted | No letter; 60-second retry cooldown |

Exact Cinders values are in [[Rewards and Penalties]].

## The false letter

A wrong answer **may** plant a false letter. The false letter:

- Looks identical to a true letter in the Case File.
- Makes the Hollow Word fail at the exit.
- Can be detected by re-checking the task with the item clue, or by the ritual's reveal.
- Is replaced when the task is solved correctly.

The false letter is a **risk**, not a guaranteed punishment. The exact chance is a tuning value (proposed 35%). The team should always have a way to verify.

## Anti-soft-lock guarantees

The Case File must never become unsolvable:

- Every task has a free clue that is always reachable.
- Every item clue has at least two valid items that can reveal it, or the item is guaranteed in the shop.
- No clue is hidden behind a one-way door.
- The killer cannot steal or destroy a true clue.
- A wrong answer only locks the task for 60 seconds.
- The ritual can be retried until dawn.
- The fifth letter has a fallback if the ritual is permanently blocked (see [[Hollow Word]]).

## UI surfaces

| Surface | What it shows | Who sees it |
|---|---|---|
| **Foyer board** | Pins, strings, photos, task stamps, letters | Everyone physically present |
| **Hotkey UI** | Same state, personal view, answer buttons | Each player |
| **Task toast** | "New evidence: Task 2" | Team |
| **Letter animation** | A letter slides into the word slot | Team |
| **Wrong-answer stamp** | Red stamp, 60-second countdown | Team |
| **Killer alert** | "The case is moving" (no details) | Killer only |

The foyer board is the social surface. The hotkey UI is the accessibility surface. They must never disagree.

## Design notes

- **The Case File is not a checklist.** It is a document the team argues over. The board should look hand-made, not like a quest log.
- **The free clue is not a hint.** It is evidence with a flaw. The player should feel smart for noticing the flaw.
- **The item clue is not a key.** It is a lens. The player should feel like they *understand* the evidence, not like they unlocked a door.
- **The killer's help is real help.** A killer who solves tasks is not cheating; they are playing a dangerous social game.
- **The ritual is a trap.** The team should feel the cost of completing it, not just the reward.

## Related

- [[Case File Questions]]
- [[Free vs Item Clues]]
- [[Hollow Word]]
- [[Evidence Board]]
- [[Ritual Overview]]
- [[Rewards and Penalties]]
