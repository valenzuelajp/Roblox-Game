---
title: "Hollow Word"
aliases:
  - "The Word"
  - "Exit Word"
  - "Five-Letter Word"
tags:
  - systems
  - case-file
  - exit
  - status/locked
status: locked
updated: 2026-11-04
summary: "The five-letter word assembled from four Case File answers and the ritual, entered at the gate to unlock the exit."
related:
  - "[[Case File Overview]]"
  - "[[Case File Questions]]"
  - "[[Ritual Overview]]"
  - "[[Endings]]"
---

# Hollow Word

> [!info] Locked concept, open list
> The five-letter word is locked. The exact word for each scenario card is open (O-010). Proposed list: BLACK, NIGHT, THORN, CROWN, GRAVE, ASHEN, SHADE, EMBER, SAINT, STORM.

## What it is

The Hollow Word is the cult's name for the thing under the lodge. It is also the **exit code**. The gate at the end of the drive is a brass letter lock with five slots. Speak the word, and the house lets you leave.

The word is **scenario-specific**. It is not a global password. Each scenario card defines its own five-letter word. The killer knows it. The investigators assemble it.

## How it is assembled

| Source | Letter | When |
|---|---|---|
| Task 1 — Victim | 1st | Correct answer |
| Task 2 — Method | 2nd | Correct answer |
| Task 3 — Scene | 3rd | Correct answer |
| Task 4 — Motive | 4th | Correct answer |
| Ritual | 5th | Ritual complete |

The Case File displays five empty slots. Each correct answer slides a brass letter tile into its slot. The ritual slides the fifth tile into place.

The letters are **positional**. The word is not an anagram. If the team has all five letters but the wrong order, they need to read the word, not guess the order. The Case File shows the slots in order.

## The word list

The proposed launch list:

| Scenario | Word | Theme |
|---|---|---|
| 01 | **BLACK** | The lodge's name; the color of the soil |
| 02 | **NIGHT** | The long dark; the noir frame |
| 03 | **THORN** | The woods; the crown of the cult |
| 04 | **CROWN** | Old money; the cult's hierarchy |
| 05 | **GRAVE** | The nine guests; the cellar |
| 06 | **ASHEN** | The burned ledger; the storm |
| 07 | **SHADE** | The house's shadows; the ghost story |
| 08 | **EMBER** | The chapel candles; the last light |
| 09 | **SAINT** | The false piety; the cult's self-image |
| 10 | **STORM** | The weather; the night's engine |

Rules for the list:

- Five letters, one syllable where possible.
- No proper nouns.
- No ambiguous letters (avoid I/1, O/0, S/5 in the lock UI).
- No word that is already a common in-game label (e.g., "START," "ENTER").
- No word that gives away the scenario's answer.

## Entering the word

The gate lock is a physical brass panel:

- Five slots.
- A rotary letter dial or a keyboard-style letter picker.
- A lever to submit.
- A small brass plate: "SPEAK THE WORD."

Any living investigator can enter the word. The UI is available at the gate and in the Case File's exit tab. The word is **not** shown in chat; players can say it aloud or type it to each other.

**Correct word:** the gate opens. The exit is live. The Last Hunt begins if the ritual is complete.

**Wrong word:** the lock rejects the word, the lever resets, and a **30-second lockout** begins. A bell rings once. The killer hears the bell and sees the gate's location. The lock does **not** say which letter is wrong; it only says "THE HOUSE DOES NOT KNOW YOU."

## False letters

A wrong answer may plant a **false letter** (see [[Rewards and Penalties]]). The false letter:

- Occupies the slot.
- Looks identical to a true letter.
- Makes the word fail.
- Is marked with a hairline crack after the ritual reveal, or when the task is re-checked with the item clue.
- Is replaced by the true letter when the task is solved correctly.

The gate's rejection does not identify the false letter. The team must verify the case. This is intentional: the word is only as good as the investigation behind it.

## Fallback: if the ritual is blocked

The ritual can be interrupted. If it is interrupted three times in a row, the chapel seals for **90 seconds** and the altar goes dark. The team is **not** soft-locked:

- The **UV Torch** reveals the fifth letter carved under the altar.
- The **Ghost Blueprint** marks the original ritual entrance and the letter's position.
- The team can retry the ritual after the seal lifts.

The fifth letter is always recoverable. The ritual is the fast path, not the only path.

## Accessibility

- The lock is usable with keyboard, gamepad, and touch.
- The letter tiles are large, high-contrast, and screen-reader labeled.
- The word can be entered by typing, not only by rotating a dial.
- The lockout timer is visible and announced.
- The rejection message is text and audio.
- No color-only feedback; the crack on a false letter has a shape and a label.

## Story meaning

The word is not a password in the ordinary sense. It is a **name**. The cult believes the Hollow is a place that answers when called. The gate is not a lock; it is a mouth.

When the investigators speak the word, they are not just escaping. They are **finishing the sentence the cult started in 1936**. That ambiguity is the point. The ending should make the player wonder whether they escaped or were let out.

## Killer interaction

- The killer knows the word.
- The killer can enter the word at the gate. If they do, the gate opens for everyone. This is a desperate killer strategy: open the gate, start the Last Hunt, and try to stop the escape.
- The killer can camp the gate. The gate is a chokepoint.
- The killer can use the bell to bait investigators to the gate.
- The killer cannot change the word. The word is fixed at staging.

## Telemetry

Track:

- Time from fourth task to first gate attempt.
- Number of wrong-word attempts.
- Which slot was false, if any.
- Whether the ritual or the UV fallback provided the fifth letter.
- How many players reached the gate before dawn.

## Design notes

- **The word should be speakable.** A player should be able to shout it across the room.
- **The word should be memorable.** Five letters, one syllable, a clear image.
- **The word should not be guessable from the letters alone.** The team should need the ritual or the fallback.
- **The word should feel like a story beat, not a keypad.**
- **The word should never be shown in the player wiki.**

## Related

- [[Case File Overview]]
- [[Case File Questions]]
- [[Ritual Overview]]
- [[Rewards and Penalties]]
- [[Endings]]
