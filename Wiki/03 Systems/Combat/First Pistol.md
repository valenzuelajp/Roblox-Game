---
title: "First Pistol"
aliases:
  - "The First Gun"
  - "1/4 Pistol"
tags:
  - systems
  - combat
  - pistols
  - status/locked
status: locked
updated: 2026-11-04
summary: "The first pistol: awarded at 1/4 tasks solved, four bullets, delivery method still open between random and voted."
related:
  - "[[Pistols]]"
  - "[[Voting Overview]]"
  - "[[Pistol Vote]]"
  - "[[Case File Overview]]"
---

# First Pistol

## When

The first pistol is awarded when the **first Case File task is solved** (1/4).

It is not withheld until the ritual. The moment the team solves Task 1, the gun enters the match.

## How

The delivery method is **open** (O-002):

| Option | Description | Pros | Cons |
|---|---|---|---|
| **A. Random** | A living investigator is chosen at random; killers are excluded; the holder is announced. | Fast; no metagaming; no popularity contest. | No social beat; the holder may be a poor shot. |
| **B. Voted** | The lobby votes; majority wins; tie is random; the holder is announced. | Social beat; the table has agency; the killer can campaign. | Voice bias; text players may be excluded; toxic voting. |
| **C. Random with one pass** | Random holder can pass once. | Fast; gives agency. | Extra UI; unclear timing. |

**Recommendation:** B, with a 15-second vote and a text ballot. If playtests show it slows the match, switch to A.

> [!warning] Not locked
> The final method is O-002. Do not implement a vote as if it were canon until the project owner answers.

## Who can hold it

- Any **living investigator**.
- Killers are **excluded** from the random pool and from the vote.
- The holder is announced to the table: "The first pistol is with [name]."
- The holder can holster, draw, and fire.
- The holder can drop the gun; anyone can pick it up.

## What it changes

The first pistol creates:

- **A power spike.** The holder can kill a killer in two shots.
- **A target.** The killer wants the gun.
- **A social dilemma.** Who do you trust with it?
- **A countdown.** Four bullets, no reload.

## The holder's job

- **Do not waste bullets.** Four is all you get.
- **Stay alive.** If you die, the gun drops.
- **Coordinate.** Tell the table when you are drawing.
- **Do not shoot without certainty.** Friendly fire is catastrophic.

## The killer's counterplay

- Mark the holder.
- Force the holder to waste bullets on a false accusation.
- Steal the gun after a death.
- Claim the second pistol to match the firepower.

## UI

- A 15-second vote panel (if voted).
- A center-screen announcement.
- A gold gun icon next to the holder's name.
- A four-chamber HUD for the holder.

## Edge cases

| Case | Rule |
|---|---|
| Holder disconnects | Gun drops at their last position |
| Holder dies | Gun drops; anyone can pick it up |
| Holder is marked | Gun does not drop until death |
| Holder shoots an innocent | See [[Friendly Fire]] |
| No living investigator | Killers win |
| Vote ties | Random among the tied |

## Design notes

- The first pistol should arrive **early enough** to matter, not so early that it dominates.
- 1/4 is the right trigger: the team has learned the case, but the killer has not been revealed.
- The holder's name should be public. Secret guns create paranoia without information.
- The gun should be visually distinct: brass, worn, a white grip.

## Related

- [[Pistols]]
- [[Voting Overview]]
- [[Pistol Vote]]
- [[Friendly Fire]]
- [[Second Pistol]]
