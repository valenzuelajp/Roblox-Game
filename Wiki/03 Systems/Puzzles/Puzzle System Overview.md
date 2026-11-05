---
title: "Puzzle System Overview"
aliases:
  - "Puzzles"
  - "Puzzle Families"
tags:
  - systems
  - puzzles
  - status/locked
status: locked
updated: 2026-11-04
summary: "The five puzzle families, how they are generated, where they appear, and the rules that keep them fair, readable, and replayable."
related:
  - "[[Zodiac Puzzle]]"
  - "[[Binary Puzzle]]"
  - "[[Blood Cipher]]"
  - "[[Rune Alignment]]"
  - "[[Knot and Pattern]]"
  - "[[Sigil System]]"
  - "[[Second Pistol]]"
---

# Puzzle System Overview

## Why puzzles exist

Puzzles are the game's **shared language**. They appear in three places:

1. **Clues.** A document, symbol, or lock that hides part of a Case File answer.
2. **Sigils.** The rescue loop when a player is marked. Break the sigil, save the player.
3. **Seals.** The three locks on the second-pistol cabinet.

The same five families are reused everywhere. A player who learns the zodiac wheel in the study can use it on a sigil in the cellar. That is intentional: mastery carries across systems without new tutorials.

## The five families

| Family | Core idea | Typical surface | Best item | Time target |
|---|---|---|---|---|
| **Zodiac** | Map symbols to dates, elements, or houses | Star chart, engraved wheel, almanac | Notebook / Compass | 45–75s |
| **Binary** | Decode 1/0 or on/off patterns into letters | Punch card, telegraph, music box | Cipher Wheel / Recorder | 30–60s |
| **Blood Cipher** | Read writing that is mirrored, smeared, or hidden | Wall writing, ledger, photograph | UV Torch / Magnifying Glass | 45–90s |
| **Rune Alignment** | Rotate rings or stones until the antler runes match | Altar, door lock, cabinet | Ritual Anchor / Compass | 60–90s |
| **Knot and Pattern** | Read a knot, weave, or branching pattern as a sequence | Rope, tapestry, antlers, sheet music | Camera / Magnifying Glass | 45–90s |

## Generation rules

Every puzzle is generated from a **template + seed**:

```text
puzzle = template(family, difficulty, seed)
```

The template defines the valid symbols, the solution space, and the failure states. The seed determines the specific arrangement. The server validates the solution; the client never receives the answer.

### Fairness contract

- **Solvable without voice.** Every puzzle has a visual or text surface. Voice may speed it up, never gate it.
- **Solvable in blackout.** If the lights go out, the puzzle must be readable with the UV torch, a flashlight, or a text prompt.
- **No pixel hunts.** The interactive element is highlighted when the player is within 6 studs and looking at it.
- **No guessing.** The solution is derivable from information in the world or the puzzle surface.
- **No soft-locks.** A failed puzzle can be retried after a short cooldown. A sigil puzzle that is failed does not instantly kill; the countdown continues.
- **No color-only solutions.** Every color cue has a shape, symbol, or text equivalent.
- **No real-language requirement beyond English.** All prompts are short and plain.

## Difficulty tiers

| Tier | Used for | Solution steps | Hint budget |
|---|---|---|---|
| **Easy** | First task, tutorial sigil | 1 step | 1 free hint after 20s |
| **Medium** | Standard tasks, sigils | 2 steps | 1 free hint after 30s |
| **Hard** | Second-pistol seals, late-game sigils | 3 steps | No free hint; item required |

The match's overall difficulty is **medium**. The first task and first sigil are always easy. The three seals are always hard.

## Where puzzles appear

### Clue puzzles

A clue puzzle hides a **word, number, or symbol** that points to the correct answer. Example: a zodiac chart with three marked houses yields the numbers 3–7–1, which open a desk drawer containing the item clue.

Clue puzzles are optional. The free clue and item clue can be found without solving them; the puzzle is a shortcut or an alternate route.

### Sigil puzzles

When a player is marked, a physical sigil spawns. The sigil presents one random family at **medium** difficulty. Anyone can interact. Solving it breaks the sigil and saves the marked player. Failing it does not kill the player immediately; the countdown continues, and the puzzle can be retried.

### Seal puzzles

The second-pistol cabinet has three seals, one per floor. Each seal is a different family at **hard** difficulty. Solving a seal locks it permanently for the match. Solving all three opens the cabinet.

## Hints

- **Item hints.** The matching investigator item reveals the first step or removes one wrong option.
- **Environmental hints.** A nearby prop (a book, a plaque, a stained-glass window) contains the key.
- **Time hints.** After 30 seconds, the puzzle surface offers a subtle pulse on the next interactive element. This is an accessibility feature and can be disabled.
- **Voice hints.** Other players can talk the solver through it. Voice is never required.

## Failure and retry

| Context | On failure | Retry |
|---|---|---|
| Clue puzzle | No penalty; the puzzle resets | Immediate |
| Sigil puzzle | Countdown continues; the sigil remains | After 5s |
| Seal puzzle | The seal resets; no progress lost on other seals | After 10s |
| Exit lock | 30s lockout; the killer hears a bell | After 30s |

## Accessibility

- All puzzles have a **text mode** that replaces symbols with letters or numbers.
- All timed puzzles have an **extended time** setting (+50%) in the accessibility menu.
- Colorblind palettes are built into the symbol sets.
- Screen-reader prompts describe the current state and the available interactions.
- Motion-sensitive effects (spinning rings, pulsing sigils) can be reduced.

## Telemetry

Track per puzzle:

- Family, tier, context (clue/sigil/seal/exit).
- Time to solve.
- Number of failures.
- Whether an item was used.
- Whether voice was active.
- Whether the player abandoned the puzzle.

Use this to tune difficulty, not to punish players.

## Design rules

1. **A puzzle is a conversation, not a test.** The player should feel smart, not grilled.
2. **The answer is in the room.** Never require outside knowledge.
3. **The same family looks different in different rooms.** Reuse mechanics, not layouts.
4. **The killer can watch, not solve.** The killer sees the puzzle surface but cannot interact with a sigil they created.
5. **The puzzle must be readable in a screenshot.** If a player posts it, the community should be able to help.
6. **No puzzle requires a purchase.** Items make puzzles faster, not possible.

## Related

- [[Zodiac Puzzle]]
- [[Binary Puzzle]]
- [[Blood Cipher]]
- [[Rune Alignment]]
- [[Knot and Pattern]]
- [[Sigil System]]
- [[Second Pistol]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
