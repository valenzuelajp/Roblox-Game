---
title: "Killer Black Market"
aliases:
  - "Black Market"
  - "Killer Shop"
tags:
  - systems
  - shop
  - killer
  - economy
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "The killer's hidden shop tab: five black-market items, purchase limits, counterplay, and the paranoia economy."
related:
  - "[[Curio Shop]]"
  - "[[Item Catalog]]"
  - "[[Killer Role]]"
  - "[[Sabotage]]"
  - "[[Shop Balance]]"
---

# Killer Black Market

> [!spoiler] Design spoiler
> This page describes the killer's secret purchases. It must never appear in the player wiki.

## What it is

The Black Market is a hidden tab in the solo Curio Shop. It is only visible to the killer. It uses the same **100 Shillings** as the investigator shop, and it closes when the shop closes.

The Black Market is not a second shop. It is a **drawer under the counter**: Vesper does not acknowledge it, the items are wrapped in brown paper, and the prices are written in a hand that is not hers.

## The five items

| Item | Price | Charges | Effect | Counterplay |
|---|---|---|---|---|
| **Forged Letter** | 30 | 1 | Enables the one false clue. The letter supports a wrong option and looks authentic. | The item clue contradicts it. |
| **Gloves** | 25 | 1 match | No fingerprints and no blood trail for 60 seconds after a mark. | UV torch still reveals the sigil; witnesses still see the mark. |
| **Wire Cutters** | 20 | 1 | Cut the lights in one wing for 15 seconds, or jam one lock for 60 seconds. | Flashlight, map, lockpick, secret passage. |
| **Cult Sigil** | 35 | 1 | Reduce the next mark cooldown by 10 seconds. | The sigil is still visible and breakable. |
| **Whisper Mask** | 30 | 2 | Play a whisper in a room to bait a player; it sounds like a staff member. | Voice chat can confirm who is where; the whisper is directional. |

## Purchase limits

- **Two black-market items max** per killer. If there are two killers, each can buy two, but they share the team's 100 Shillings? Proposed: each killer has their own 100 Shillings and their own two-item limit. The team board does not show black-market purchases.
- The killer can also buy investigator items. Those **do** appear on the team board. This is a deliberate tell.
- The killer cannot buy a pistol, a bullet, a clue answer, or the Hollow Word.
- The killer cannot buy an item that directly kills a player.
- The killer cannot refund a black-market item.

## Why these five?

Each item solves a different killer problem:

1. **Forged Letter** — the killer needs a lie that survives the free clue.
2. **Gloves** — the killer needs to mark without leaving a trail.
3. **Wire Cutters** — the killer needs to control a room without a fight.
4. **Cult Sigil** — the killer needs a faster second mark in the endgame.
5. **Whisper Mask** — the killer needs to move investigators without touching them.

The five items map to the five pressures of the killer loop: **lie, trace, space, time, and attention.**

## What the Black Market must never do

- Never sell a gun. The second pistol is a map race, not a purchase.
- Never sell a guaranteed kill. Every mark is breakable.
- Never sell a clue answer. The killer already knows the answers; selling them would be redundant.
- Never hide a purchase from the server. The server owns the transaction.
- Never let the killer buy more than two items.
- Never let the killer buy an item after the shop closes.

## The paranoia economy

The Black Market's real product is **uncertainty**:

- The team board shows a camera purchase. Was it an investigator or the killer?
- A witness hears a whisper. Was it a staff member or the Whisper Mask?
- A lock is jammed. Was it the killer or a coincidence?
- A blood trail stops. Was it the Gloves or a dead end?

The killer's purchases should make the team **question their own evidence**, not just lose a fight.

## Telemetry

Track:

- Black-market items bought per match.
- Win rate by item.
- Forged Letter exposure rate.
- Gloves vs UV torch interactions.
- Wire Cutters vs lockpick interactions.
- Whisper Mask vs voice chat.

## Design notes

- **The Black Market is a confession the killer pays for.** Every purchase is a risk.
- **Two items is the paranoia dial.** Three would make the killer too flexible.
- **The best black-market item is the one the team never notices.**
- **The killer's budget should feel tight.** They are sacrificing investigator tools to lie better.

## Related

- [[Curio Shop]]
- [[Item Catalog]]
- [[Killer Role]]
- [[Sabotage]]
- [[Shop Balance]]
