---
title: "Puzzle Fairness"
aliases:
  - "Fair Puzzles"
  - "Puzzle Contract"
tags:
  - systems
  - puzzles
  - accessibility
  - status/locked
status: locked
updated: 2026-11-04
summary: "The fairness contract for every puzzle: solvable without voice, readable in blackout, no guessing, no pixel hunts, and no soft-locks."
related:
  - "[[Puzzle System Overview]]"
  - "[[Puzzle System Overview|Puzzle Families]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[Clue System Overview]]"
  - "[[Testing Strategy]]"
---

# Puzzle Fairness

> [!info] The contract
> Every puzzle must be solvable by a single player with no voice, no color vision, no sound, and no prior knowledge. If it is not, it is not finished.

## The ten fairness rules

1. **No guessing.** Every puzzle has a logical path to the answer.
2. **No pixel hunts.** The interactive elements are at least 1.5 studs wide and highlighted on hover.
3. **No voice requirement.** The puzzle and its hints are fully readable in text.
4. **No color-only signal.** Every color cue has a shape, pattern, or label.
5. **No sound-only signal.** Every audio cue has a visual subtitle or icon.
6. **No soft-locks.** A failed puzzle can be retried; a missed hint can be found again.
7. **No prior knowledge.** The puzzle teaches its own grammar in the first 10 seconds.
8. **No unfair timing.** The timer is visible; the player can pause to read.
9. **No hidden math.** The required operation is shown or discoverable in the room.
10. **No killer-only solution.** The killer can solve the puzzle, but the investigators can too.

## Solvability

| Puzzle family | Minimum information | Hint source |
|---|---|---|
| **Zodiac** | A symbol wheel and a date/name | The almanac in the Study; the Notebook. |
| **Binary** | A row of lights and a key | The breaker panel; the Magnifying Glass. |
| **Blood Cipher** | A blood-written message and a key phrase | The UV Torch; the Recorder. |
| **Rune Alignment** | Three rotatable rings and a target pattern | The chapel mural; the Cipher Wheel. |
| **Knot/Pattern** | A knot board and a sequence | The sailor's handbook; the Compass. |

## Difficulty tiers

| Tier | Solve time | Hints | Used for |
|---|---|---|---|
| **Easy** | 15–30s | 3 | Free clues, first puzzle. |
| **Medium** | 30–60s | 2 | Sigils, standard clues. |
| **Hard** | 60–120s | 1 | Second-pistol seals, ritual anchors. |

The default for a sigil is **medium**. The default for a seal is **hard**. The default for a clue is **medium**, with an easy variant for the first task.

## Hints

Hints are **diegetic**:

- An item in the room.
- A line from an NPC.
- A pattern on the wall.
- A note in the Case File.
- A voice line from Vesper (text-subtitled).

Hints never give the answer. They narrow the search.

## Failure and retry

- A wrong answer **does not** destroy the puzzle.
- The puzzle resets after 3 seconds.
- The player can retry immediately.
- The puzzle can be solved by another player.
- The puzzle state is server-owned; two players cannot solve it twice for double rewards.

## Accessibility

- **Text mode:** every puzzle has a text equivalent.
- **Screen reader:** puzzles expose labels and state.
- **Colorblind:** palettes for deuteranopia, protanopia, tritanopia.
- **Motor:** no timed input faster than 1.5s; remappable.
- **Cognitive:** +50% puzzle time; simplified mode for the first match.
- **Photosensitivity:** no flashing faster than 3 Hz; reduce-motion option.
- **Hearing:** visual cues for every sound.

## Validation

The generator validates:

- The puzzle is reachable from the spawn.
- The puzzle has at least two routes.
- The hint is reachable.
- The puzzle is not behind a lock that requires the puzzle itself.
- The puzzle is not in the killer's staging room.
- The puzzle can be solved in blackout.

## Testing

- 100 bot solves per family.
- 10 human playtests per family, including at least two text-only players.
- Time-to-solve distribution.
- Hint usage rate.
- Failure rate.
- Accessibility audit.

## Telemetry

- Puzzle family.
- Context (clue/sigil/seal/exit).
- Time to solve.
- Hints used.
- Failures.
- Abandonment.
- Accessibility settings active.

## Design notes

- A puzzle should be **learnable in one attempt**.
- The first puzzle in a match should be easy.
- The hardest puzzle should be optional or reward-gated.
- The killer should be able to solve the same puzzle; fairness is symmetric.

## Related

- [[Puzzle System Overview]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Clue System Overview]]
- [[Testing Strategy]]
