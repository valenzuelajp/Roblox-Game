---
title: "Scenario Difficulty"
aliases:
  - "Card Difficulty"
  - "Crime Difficulty"
tags:
  - systems
  - scenarios
  - balance
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "How scenario cards are rated easy, medium, or hard, and how the game tunes clue density, red herrings, and word difficulty."
related:
  - "[[Scenario Card Overview]]"
  - "[[Scenario Card Anatomy]]"
  - "[[Difficulty and Pacing]]"
  - "[[Scenario Selection]]"
---

# Scenario Difficulty

> [!spoiler] Design spoiler
> This page describes how hard each card should be. It is for designers, not players.

## The three ratings

| Rating | Target solve time | Clue visibility | Red herring | Word |
|---|---|---|---|---|
| **Easy** | 12–16 min | Obvious containers | One weak lie | Common (BLACK, NIGHT) |
| **Medium** | 16–20 min | Mixed containers | One strong lie | Thematic (THORN, CROWN) |
| **Hard** | 20–26 min | Hidden containers | Two lies | Uncommon (ASHEN, STORM) |

The default for public lobbies is **medium**. Easy is for onboarding; hard is for private servers or experienced lobbies.

## What makes a card easy

- The victim's name is visible on the body.
- The weapon matches the wound at a glance.
- The staging room is obvious.
- The motive is stated in a letter.
- The red herring is physically implausible.
- The word is common.

## What makes a card hard

- The victim's identity is split across two props.
- The weapon is not the obvious one.
- The staging room is a room the player has no reason to visit.
- The motive is encoded.
- Two red herrings contradict each other.
- The word is uncommon.
- The free clue is in a common container, but the item clue is behind a puzzle.

## Difficulty and player count

| Players | Recommended card |
|---|---|
| 6–7 | Easy or medium |
| 8–10 | Medium or hard |

With more players, the team can cover more ground, so the card can be harder. With fewer players, a hard card can stall.

## Difficulty and the shop

The card's difficulty should interact with the shop:

- An easy card needs only one or two items.
- A hard card needs the full five-family coverage.
- A hard card should not require a **specific** item that the team cannot afford.

## Difficulty and the killer

The killer's skill matters more than the card:

- A new killer should pick an easy card.
- An experienced killer can pick a hard card.
- The card's difficulty is shown to the killer, not the investigators.
- The killer can use the difficulty to calibrate their sabotage.

## Tuning levers

| Lever | Effect |
|---|---|
| Clue container visibility | Common → hidden → locked |
| Number of red herrings | 1 → 2 |
| Word commonness | Common → uncommon |
| NPC testimony reliability | Clear → contradictory |
| Staging room distance | Near foyer → far wing |
| Puzzle depth | One step → three steps |

## Telemetry

Track:

- Card difficulty vs solve time.
- Card difficulty vs win rate.
- Card difficulty vs wrong answers.
- Player sentiment by card.
- New player performance by card.

## Design notes

- **Difficulty is not the same as obscurity.** A hard card should be hard to interpret, not hard to find.
- **The free clue should always be findable.** The item clue can be hidden.
- **The red herring should be the wrong answer the team wants to believe.**
- **The word should be a reward, not a gate.** A team that solves the case should be able to enter it.
- **Easy cards are not "baby mode."** They are the first match.

## Related

- [[Scenario Card Overview]]
- [[Scenario Card Anatomy]]
- [[Difficulty and Pacing]]
- [[Scenario Selection]]
