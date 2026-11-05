---
title: "Scenario Card Overview"
aliases:
  - "Scenarios"
  - "Crime Cards"
  - "Case Cards"
tags:
  - systems
  - scenarios
  - killer
  - spoiler/design
  - status/locked
spoiler: true
status: locked
updated: 2026-11-04
summary: "The ten scenario cards: how the killer draws three, picks one, customizes the victim, room, and red herring, and how the game builds the crime."
related:
  - "[[Scenario Card Anatomy]]"
  - "[[Scenario Selection]]"
  - "[[Scenario Difficulty]]"
  - "[[The Killer]]"
---

# Scenario Card Overview

> [!spoiler] Design spoiler
> This page describes the crime deck. It must never appear in the player wiki.

## What a scenario card is

A scenario card is a **pre-authored crime**. It defines:

- Who the victim is.
- Why the cult wanted them dead.
- How they were killed.
- Where and how the scene was staged.
- The killer's signature.
- The red herring.
- The five-letter Hollow Word.
- The valid rooms and clue themes.

The card is **not** a script. It is a set of constraints the game uses to build the scene.

## The deck

There are **ten cards at launch**. Each card has a distinct:

- Victim profile (industrialist, politician, journalist, heiress, doctor, judge, priest, actress, banker, architect).
- Motive (silence, money, bloodline, betrayal, debt, revenge, inheritance, scandal, faith, art).
- Weapon (letter opener, bell cord, laudanum, ice pick, candlestick, razor, rope, poison, revolver, ritual blade).
- Staging (study, chapel, ballroom, cellar, archive, attic, conservatory, dining room, guest room, vault).
- Signature (coin on the eyes, flower in the mouth, a word on the wall, a stopped clock, a burned letter, a black candle, a mirror covered, a chair turned, a song sheet, a sigil).
- Red herring (forged will, planted knife, fake alibi, stolen ledger, staged struggle, false letter, duplicate key, misdated photo, wrong train ticket, a second body).

## The draw

At the start of the shop:

1. The server shuffles the ten cards.
2. The killer is dealt **three** face-down cards.
3. The killer picks **one**.
4. The other two are discarded and never revealed.
5. The killer customizes **three details**: victim identity, staging room, red herring.
6. The game builds the scene.

The killer cannot reroll. The draw is the first decision of the match.

## Customization

| Detail | Options | Why customize |
|---|---|---|
| **Victim identity** | 3–4 names/professions per card | Replayability; the victim's name is a clue |
| **Staging room** | 3–4 valid rooms per card | The map changes; the scene must fit |
| **Red herring** | 2–3 options per card | The lie varies; the team cannot memorize |

The killer **cannot** customize:

- The correct answers.
- The Hollow Word.
- The signature list (but picks one).
- The card's difficulty rating.

## What the game builds

The game auto-builds:

- The victim's body and clothing.
- The weapon and wound.
- The staging props.
- The signature.
- The free clue and item clue placements.
- The false clue slot.
- The NPC testimony variants.
- The evidence board header.

The killer places the **body, weapon, and signature** on valid anchors. The rest is automatic. This keeps the staging fast and fair.

## The card's role in the match

The card determines:

- The four task answers.
- The Hollow Word.
- The killer's knowledge.
- The false clue options.
- The ending's epilogue text.

The card does **not** determine:

- The map seed.
- The killer's identity.
- The players' roles.
- The pistol holder.
- The ritual outcome.

## Spoiler protection

- The card is server-only.
- The killer sees it in the shop.
- The card is never sent to investigator clients.
- The card is not shown in the ending UI.
- The player wiki never lists the cards.
- The vault's `04 Scenarios` folder is S3.

## Design notes

- **Ten cards is enough for launch.** Each card should feel distinct.
- **The draw is a choice, not a lottery.** Three cards, one pick.
- **Customization should change the clue, not the answer.**
- **The victim should be a person, not a prop.**
- **The best card is the one the killer almost picked.**

## Related

- [[Scenario Card Anatomy]]
- [[Scenario Selection]]
- [[Scenario Difficulty]]
- [[The Killer]]
