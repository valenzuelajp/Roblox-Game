---
title: "Binary Puzzle"
aliases:
  - "Punch Card Puzzle"
  - "Telegraph Puzzle"
tags:
  - systems
  - puzzles
  - binary
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The binary puzzle family: on/off patterns in punch cards, telegraphs, music boxes, and candle arrays."
related:
  - "[[Puzzle System Overview]]"
  - "[[03 Systems/Shop and Economy/Item Catalog#Cipher Wheel|Cipher Wheel]]"
  - "[[03 Systems/Shop and Economy/Item Catalog#Recorder|Recorder]]"
  - "[[Zodiac Puzzle]]"
---

# Binary Puzzle

## The idea

The lodge is old, but the cult is not stupid. It uses **binary** because it looks like machinery, not magic: a punch card, a telegraph, a music box cylinder, a row of candles. The player reads on/off states as a sequence of five-bit letters.

## Surfaces

| Surface | Where | What the player does |
|---|---|---|
| **Punch card** | Study, archive, office | Read holes as 1s and blanks as 0s |
| **Telegraph** | Foyer, servant's hall | Read short/long taps as bits or Morse |
| **Music box** | Ballroom, nursery | Read raised pins on the cylinder |
| **Candle array** | Chapel, cellar | Read lit/unlit candles as a row |
| **Fuse box** | Basement, utility hall | Read switches as a byte |

## Example — easy

A punch card on the desk has five rows of five holes:

```text
1 0 0 0 1
0 1 0 1 0
1 1 0 0 0
0 0 1 0 1
1 0 1 0 0
```

Read each row as a five-bit number. The card's legend maps `00001 = A`, `00010 = B`, and so on. The rows spell **A C H E R** — a name on the guest list.

## Example — medium

A telegraph in the servant's hall taps a sequence. The player uses the codebook on the wall to map short/long groups to letters. The message is a room name: **CHAPEL**.

## Example — hard

The second-floor seal is a fuse box with eight switches. The chapel window has eight panes, four lit by lightning. The player must set the switches to match the window pattern, then read the resulting byte as a letter. Three bytes spell the seal's code.

## Solution logic

1. **Find the legend.** A codebook, a card, or a chart in the same room.
2. **Read the bits.** On/off, hole/no hole, lit/unlit, short/long.
3. **Group the bits.** Five-bit letters (A=00001) or eight-bit ASCII for hard puzzles.
4. **Convert.** Use the legend, not memory.
5. **Apply.** Enter the letters, set the switches, or play the notes.

## Item synergy

| Item | Effect |
|---|---|
| **Cipher Wheel** | Converts bits to letters without the codebook. |
| **Recorder** | Records the telegraph taps and plays them back. |
| **Notebook** | Stores the bit string and highlights repeating groups. |
| **Magnifying Glass** | Reads tiny punch-card holes. |

## Integration

- **Clue:** A punch card hides the name of the victim's contact.
- **Sigil:** The sigil is a candle array; the player must extinguish the candles that do not match the pattern.
- **Seal:** The second-floor seal is a fuse box with a binary code.

## Accessibility

- All bit strings are shown as text, not only as holes or lights.
- The telegraph has a visual tap indicator.
- The candle puzzle has a list view.
- The music box has a notation view.

## Design notes

- Binary is intimidating to new players; always provide a legend.
- Five-bit letters are the default. Eight-bit ASCII is reserved for hard seals.
- The puzzle should take 30–60 seconds, not a cryptography lecture.
- The killer can hear the telegraph but cannot solve the sigil they created.

## Related

- [[Puzzle System Overview]]
- [[Zodiac Puzzle]]
- [[Blood Cipher]]
- [[Rune Alignment]]
- [[Knot and Pattern]]
