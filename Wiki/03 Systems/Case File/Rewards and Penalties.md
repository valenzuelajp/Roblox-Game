---
title: "Rewards and Penalties"
aliases:
  - "Case File Rewards"
  - "Wrong Answer Penalty"
  - "Case Progress"
tags:
  - systems
  - case-file
  - economy
  - status/locked
  - status/proposed
status: locked
updated: 2026-11-04
summary: "What happens when a Case File task is answered correctly or incorrectly: progress, letters, Cinders, locks, false letters, and killer alerts."
related:
  - "[[Case File Overview]]"
  - "[[Case File Questions]]"
  - "[[Hollow Word]]"
  - "[[Cinders]]"
  - "[[Killer Role]]"
---

# Rewards and Penalties

> [!info] The short version
> A correct answer moves the case forward and gives the team a letter. A wrong answer costs time, Cinders, and trust. Neither outcome ends the match.

## Correct answer

| Reward | Amount | Notes |
|---|---|---|
| **Case progress** | +1 task | 4/4 is required for the ritual. |
| **Hollow Word letter** | 1 letter | Position is fixed by the task. |
| **Cinders** | +20 | Proposed; paid at the end, not immediately. |
| **Clue entry** | 1 | The evidence board locks the solved card. |
| **Narrative beat** | 1 | The narrator reads the confirmed fact. |
| **Killer alert** | 1 | The killer is told a task was solved, not which answer was chosen. |

A correct answer is **team-wide**. Every living investigator benefits. The killer also sees the case progress; they cannot stop the letter from being awarded.

## Wrong answer

| Penalty | Amount | Notes |
|---|---|---|
| **Cinders** | −10 | Proposed; cannot go below 0. |
| **Task lock** | 60 seconds | The task cannot be submitted by anyone during the lock. |
| **False letter** | 35% chance | Adds a wrong letter to the team's word board. |
| **Killer alert** | 1 | The killer is told the task was answered incorrectly. |
| **Narrative beat** | 1 | The narrator reads a misleading line. |

A wrong answer does **not** kill a player, destroy a clue, or end the match. It costs time. The 60-second lock is the real penalty in a 30-minute game.

## The false letter

When a wrong answer plants a false letter:

- The letter appears in the team's word board as if it were real.
- It occupies the position of the task that was answered wrong.
- The true letter for that task is **not** awarded until the task is solved correctly.
- The false letter can be removed by solving the task correctly, or by using the **UV Torch** on the evidence board (one charge, proposed).
- The killer knows which letter is false. The investigators do not.

The false letter is a **social** penalty: the team may argue about a word that is one letter wrong. It should create doubt, not a dead end.

## Case progress states

| Tasks solved | State | What unlocks |
|---|---|---|
| 0/4 | Cold | Free clues only. |
| 1/4 | First blood | First pistol is awarded (D-010, D-026). |
| 2/4 | Warming | Second-pistol seal #1 becomes visible. |
| 3/4 | Closing in | Second-pistol seal #2 becomes visible. |
| 4/4 | Complete | Ritual can begin; second-pistol seal #3 and vault cabinet unlock. |

The ritual requires **4/4**. A team at 3/4 can still escape if they find another way, but the intended path is the ritual.

## Individual vs team rewards

| Reward | Paid to | Why |
|---|---|---|
| Case progress | Team | The case is shared. |
| Letter | Team | The word is shared. |
| Cinders for a correct answer | Team (split or pooled) | Proposed: every living investigator gets +20. |
| Cinders for breaking a sigil | Breaker | Rewards the rescuer. |
| Cinders for surviving | Each survivor | Rewards survival. |
| Cinders for stopping a killer | Team | Rewards the group. |

The exact split is a tuning value. The principle is: **the case is cooperative; the rescue is personal.**

## Killer interaction

The killer cannot submit a correct answer for the team unless they know it. They do know the true answers from the scenario card. This is intentional: the killer can **solve the case to gain trust**, then use that trust to mislead the team later.

The killer can also:

- Answer wrong on purpose to burn the 60-second lock.
- Plant a false letter via a wrong answer.
- Use the **Forged Letter** black-market item to add a false clue.

The killer cannot delete a correct letter or roll back case progress.

## Anti-frustration rules

- A wrong answer never destroys a found clue.
- A task lock is global but short; the team can work on another task.
- The false letter is always removable.
- The correct answer is always reachable with the free clue plus one item.
- The UI always shows which tasks are solved, locked, or open.
- The narrator never mocks the players.

## UI feedback

| Event | Visual | Audio |
|---|---|---|
| Correct | Stamp hits the file; letter slides into the word board. | Typewriter ding; low string swell. |
| Wrong | Red ink blot; file closes with a snap. | Clock tick; paper tear. |
| Locked | 60-second countdown on the task card. | Metronome. |
| False letter | Letter appears with a faint ink bleed. | Whisper, easy to miss. |
| Killer alert | No visible UI; the killer's HUD pulses once. | Sub-bass thump, killer-only. |

## Telemetry

Track per task:

- Correct/wrong submissions.
- Time between free clue and submission.
- Whether the team had the item.
- False-letter rate.
- Whether the false letter was removed.
- Killer submissions and their outcomes.

## Design notes

- The penalty should **cost time**, not morale.
- The false letter should be **findable**, not punishing.
- The killer's ability to solve the case is a feature; it makes the social game richer.
- Never let a wrong answer soft-lock the ritual.

## Related

- [[Case File Overview]]
- [[Case File Questions]]
- [[Hollow Word]]
- [[Cinders]]
- [[Killer Role]]
