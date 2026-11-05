---
title: "Shop Balance"
aliases:
  - "Economy Balance"
  - "Item Pricing"
tags:
  - systems
  - shop
  - economy
  - balance
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The balance targets for the shop: item prices, purchase counts, team coverage, duplicate risk, killer economy, and tuning levers."
related:
  - "[[Curio Shop]]"
  - "[[Item Catalog]]"
  - "[[Shillings and Cinders]]"
  - "[[Open Questions]]"
---

# Shop Balance

> [!info] Status
> This page is a **proposed** balance pass. The exact numbers are tuning values, not canon. O-007 (item catalog and prices) is still open.

## The targets

| Target | Value | Why |
|---|---|---|
| Items per player | 2–3 | Enough to specialize; not enough to cover everything |
| Team coverage | 5 clue families + 2 utility | The team should be able to cover the case if they coordinate |
| Duplicate rate | 20–30% | Some overlap is healthy; too much is a wasted shop |
| No-item team | Still finishable | Free clues + 50/50 guesses |
| Killer spend | 2 items max | The killer should not out-economy the team |
| Unspent Shillings | 0–30 per player | A meaningful choice, not a forced spend |

## Price bands

| Band | Price | Items | Intent |
|---|---|---|---|
| **Cheap** | 20 | Notebook, Compass | Utility and information; low commitment |
| **Standard** | 25 | Camera, Magnifying Glass, Lockpick, Map | The core toolkit |
| **Premium** | 30 | Fingerprint Kit, UV Torch, Cipher Wheel | The definitive clue tools |
| **Luxury** | 35 | Recorder | The strongest single clue tool; hardest to afford |

A player with 100 Shillings can buy:

- 2 premium (30 + 30) + 40 left.
- 3 cheap/standard (20 + 25 + 25) + 30 left.
- 1 luxury + 1 standard (35 + 25) + 40 left.
- 4 cheap (20 × 4 = 80) + 20 left, but the item cap is 3.

## Team coverage

The ideal 8-player team:

| Role | Items | Covers |
|---|---|---|
| Forensic | Magnifying Glass + Fingerprint Kit | Method |
| Photographer | Camera + UV Torch | Victim / Scene |
| Archivist | Notebook + Cipher Wheel | Victim / Motive |
| Listener | Recorder | Motive |
| Navigator | Compass + Map | Utility / escape |
| Breacher | Lockpick | Utility / secrets |
| Spare | any duplicate | Insurance |
| Killer | investigator item + black market | Blends in |

The team does not need all ten items. It needs **coverage of the four tasks** and **a way out**.

## Duplicate risk

Duplicates are not always bad:

- Two cameras can photograph two scenes.
- Two UV torches can sweep two wings.
- Two lockpicks can open two doors.

But five cameras is a disaster. The team purchase board exists to reduce that risk without revealing names.

### Duplicate mitigation

- The board shows counts.
- Vesper comments on duplicates: "Another camera? The house is already watching."
- The tutorial recommends "buy a tool you have not seen on the board."
- The shop can highlight a **team gap** (a dim icon for an item nobody has) without naming a player.

## Killer economy

The killer starts with the same 100 Shillings. The killer's spending is constrained:

- **Two black-market items max.**
- Black-market items are not on the team board.
- The killer can buy investigator items, but the board shows them as team purchases. This is a tell if the team is counting.
- The killer's staging is free.
- The killer does not get a refund for unused black-market items.

The killer's economy should create **paranoia**, not an arms race. The killer cannot buy a pistol, a bullet, or a clue.

## The no-item team

A team that buys nothing should still have a path:

- Free clues eliminate one wrong option per task.
- The 50/50 guess can be correct.
- The ritual still works.
- The exit still opens.
- The Second Pistol is still claimable.

The no-item team is **harder**, not **locked out**. This is a core fairness rule.

## Tuning levers

If the team solves too easily:

- Raise premium item prices by 5.
- Reduce the free clue's elimination to "one wrong option" (already the floor).
- Increase duplicate rate by hiding the team board for the first 60 seconds.
- Make the killer's false clue more convincing.

If the team struggles too much:

- Lower premium prices by 5.
- Add a 5-Shilling "team gap" discount.
- Make the free clue eliminate one wrong option **and** narrow the remaining two with a hint.
- Increase starting Shillings to 110.

## Telemetry

Track per lobby:

- Average items bought.
- Duplicate rate.
- Task solve rate by item coverage.
- Wrong-answer rate with and without the item.
- Unspent Shillings.
- Killer black-market purchases.
- Win rate by team coverage.

## Design notes

- **The shop is a social system.** The team board is the only coordination tool; it should be readable at a glance.
- **The free clue is the safety net.** Never let the shop become a hard gate.
- **The killer's budget is the paranoia dial.** Two black-market items is enough to feel dangerous; three is too many.
- **The best balance is a team that almost had the right item.**

## Related

- [[Curio Shop]]
- [[Item Catalog]]
- [[Shillings and Cinders]]
- [[Open Questions]]
