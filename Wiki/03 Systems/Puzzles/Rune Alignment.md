---
title: "Rune Alignment"
aliases:
  - "Antler Runes"
  - "Ring Puzzle"
tags:
  - systems
  - puzzles
  - runes
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The rune alignment family: rotating rings, antler-shaped runes, and altar stones that must be aligned to open doors and break sigils."
related:
  - "[[Puzzle System Overview]]"
  - "[[Ritual Overview#The three anchors|Ritual Anchor]]"
  - "[[03 Systems/Shop and Economy/Item Catalog#Compass|Compass]]"
  - "[[Knot and Pattern]]"
---

# Rune Alignment

## The idea

The Hollow Court carves **antler runes**: branching symbols that look like trees, horns, or cracks. The runes are placed on rotating rings, stone doors, and altar pieces. The player must align them by matching the **branch count**, **direction**, or **paired halves**.

Rune alignment is the most physical puzzle family. It is about rotating, sliding, and matching, not reading.

## Surfaces

| Surface | Where | What the player does |
|---|---|---|
| **Rotating rings** | Chapel door, vault cabinet | Rotate three rings until the runes form a sentence |
| **Antler stones** | Cellar, garden, chapel | Arrange stones by branch count |
| **Split runes** | Door, altar, mirror | Match the left and right halves |
| **Rune dial** | Study, archive | Point the dial at the rune that matches a clue |
| **Floor mosaic** | Ballroom, foyer | Step on the runes in the correct order |

## Example — easy

A chapel door has three rings of runes. The inscription reads:

> "The stag walks three steps, then turns."

The player rotates the rings so the stag rune is on the third ring, facing the door. The door opens.

## Example — medium

Six antler stones are scattered in the cellar. Each has a different number of branches: 2, 3, 4, 5, 6, 7. The wall carving shows a sequence: `2-3-5-7-11`. The player must place the prime-number stones in order. The missing stone (11 branches) is hidden under a loose brick.

## Example — hard

The vault cabinet has three rings with 12 runes each. The Ghost Blueprint shows the original chapel alignment. The player must rotate the rings to match the blueprint, but the blueprint is mirrored. The correct alignment is the mirror image.

## Solution logic

1. **Identify the rule.** Branch count, direction, paired halves, or sequence.
2. **Find the reference.** Inscription, blueprint, mosaic, or a nearby prop.
3. **Rotate or place.** Align the runes to match the rule.
4. **Confirm.** The mechanism clicks; the door, seal, or sigil opens.

## Item synergy

| Item | Effect |
|---|---|
| **Ritual Anchor** | Reveals the correct alignment for one ring. |
| **Compass** | Shows the direction each rune must face. |
| **Ghost Blueprint** | Shows the original chapel alignment. |
| **Magnifying Glass** | Reveals the tiny branch-count marks. |

## Integration

- **Clue:** A rune dial points to the room where the victim was killed.
- **Sigil:** The sigil is a set of three rings; the player must align the rune that matches the victim's mark.
- **Seal:** The vault seal is a three-ring rune lock.

## Accessibility

- The rings have a text mode: a list of runes and a rotation input.
- The rune shapes have high-contrast outlines.
- The sequence puzzle has a visual list of branch counts.
- No puzzle requires fine motor precision; rotation is click-based.

## Design notes

- Rune alignment should feel like **handling a mechanism**, not solving a math problem.
- The runes are fictional; do not use real runic alphabets in a way that implies a real culture.
- The antler motif is the cult's signature, not a real religious symbol.
- The puzzle should be solvable by a player who has never seen the runes before; the rule is always printed nearby.

## Related

- [[Puzzle System Overview]]
- [[Zodiac Puzzle]]
- [[Binary Puzzle]]
- [[Blood Cipher]]
- [[Knot and Pattern]]
