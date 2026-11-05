---
title: "Scenario Selection"
aliases:
  - "Card Draw"
  - "Crime Selection"
tags:
  - systems
  - scenarios
  - killer
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "How the killer draws three cards, picks one, customizes it, and what happens on disconnect, replay, or duplicate picks."
related:
  - "[[Scenario Card Overview]]"
  - "[[Scenario Card Anatomy]]"
  - "[[Scenario Difficulty]]"
  - "[[The Killer]]"
---

# Scenario Selection

> [!spoiler] Design spoiler
> This page describes the killer's private selection flow. Do not export it.

## The selection flow

```text
1. Server shuffles the 10-card deck
2. Deals 3 cards to the killer
3. Killer inspects all 3
4. Killer picks 1
5. Killer customizes victim, room, red herring
6. Killer places body, weapon, signature
7. Server validates
8. Scene is built
9. Shop closes
```

The whole flow fits in the **4-minute shop window**. The killer can stage in about 2 minutes and still buy items.

## What the killer sees

Each card shows:

- The title and difficulty.
- The victim profile.
- The motive.
- The weapon.
- The valid staging rooms.
- The signature options.
- The red herring options.
- The Hollow Word (hidden until picked? Proposed: shown after pick).
- The clue themes.
- A one-line "pitch" for the crime.

The killer does **not** see:

- The map seed until the shop closes.
- The investigators' roles.
- The item purchases (until the board updates).
- The other players' screens.

## The pick

- The killer picks **one** card.
- The other two are discarded.
- The discard is permanent for the match.
- The killer cannot reroll.
- The killer cannot pick a card that is already in another active match? Proposed: no, cards can repeat across matches; the deck is per-match.

## Customization

| Detail | Options | Constraint |
|---|---|---|
| **Victim identity** | 3–4 per card | Must fit the victim profile |
| **Staging room** | 3–4 per card | Must be valid for the map |
| **Red herring** | 2–3 per card | Must be exposable |
| **Signature** | 3–5 per card | Must have a prop anchor |

The killer cannot customize the answers, the word, or the difficulty.

## Disconnect and timeout

| Situation | Response |
|---|---|
| Killer disconnects before picking | The server picks a random card and default customization. |
| Killer disconnects after picking, before confirm | The server confirms the current selections. |
| Killer disconnects after confirm | The match continues; the killer is replaced by a bot until they reconnect. |
| Killer does not confirm by 3:45 | The server confirms the default. |
| Both killers disconnect | The match is cancelled and players are refunded. |

The bot replacement is a **proposed** fallback; it should not be better than a human killer.

## Replay and duplicates

- The same card can appear in different matches.
- The same card cannot be picked twice in the same lobby session? Proposed: no restriction; the deck is per-match.
- A killer who plays the same card twice should get a different customization.
- The server logs the card and customization for telemetry.

## Spoiler protection

- The card is never sent to investigator clients.
- The card is not shown in the ending UI.
- The card is not shown in the death cam.
- The card is not shown in the spectator UI.
- The card is not listed in the player wiki.
- The card's title is not used in the store page or thumbnails.

## Telemetry

Track:

- Card pick rate.
- Card win rate.
- Customization choices.
- Staging time.
- Validation failures.
- Disconnect/timeout rate.
- Player reports of unfair cards.

## Design notes

- **Three cards is enough choice.** More is paralysis; fewer is a lottery.
- **The pitch line is important.** It should make the killer want to stage that crime.
- **The customization should be fast.** The killer has four minutes.
- **The default should be playable.** A disconnected killer should not break the match.
- **The card should never be guessable from the lobby.**

## Related

- [[Scenario Card Overview]]
- [[Scenario Card Anatomy]]
- [[Scenario Difficulty]]
- [[The Killer]]
