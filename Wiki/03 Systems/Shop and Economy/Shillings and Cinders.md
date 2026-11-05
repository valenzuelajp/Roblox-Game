---
title: "Shillings and Cinders"
aliases:
  - "Currency"
  - "Economy"
  - "Shillings"
  - "Cinders"
tags:
  - systems
  - shop
  - economy
  - progression
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The two-currency economy: Shillings buy items before the match; Cinders are the end-of-match score that converts to progression."
related:
  - "[[Curio Shop]]"
  - "[[Item Catalog]]"
  - "[[Shop Balance]]"
  - "[[Progression Overview]]"
  - "[[Cinders]]"
---

# Shillings and Cinders

> [!info] Two currencies, two jobs
> **Shillings** are spent before the match. **Cinders** are earned during and after it. Shillings are a decision; Cinders are a record.

## Shillings

| Property | Value |
|---|---|
| Starting balance | 100 per player |
| Earned during match | No |
| Spent on | Investigator items, killer black-market items |
| Conversion | Unspent Shillings → Cinders at 1:1 (proposed) |
| Transferable | No |
| Purchasable with Robux | **Never** |

Shillings exist to force a **loadout decision**. Every player can afford two or three items. Nobody can afford everything. The team must cover the five clue families and the utility needs with imperfect information.

### Why 100?

- Enough for **two mid-priced items** (25 + 30) with 45 left over.
- Enough for **three cheap items** (20 + 20 + 25) with 35 left over.
- Not enough for **three premium items** (35 + 35 + 35 = 105).
- The cap creates a real trade-off without being punishing.

The exact prices are in [[Item Catalog]]. The balance targets are in [[Shop Balance]].

## Cinders

Cinders are the **end-of-match score**. They are earned by:

| Source | Cinders | Notes |
|---|---|---|
| Correct Case File task | +20 | Per task, first correct answer |
| Wrong answer | −10 | Per wrong answer; floor at 0 |
| Breaking a sigil | +5 | To the breaker |
| Surviving the night | +10 | If the investigator escapes |
| Stopping a killer | +15 | Split among the team if partnered |
| Completing the ritual | +10 | To the channeler and anchors |
| Escaping with 4/4 | +25 | Bonus |
| Unspent Shillings | +1 per Shilling | Converted at match end |
| Killer: successful mark | +15 | Per death |
| Killer: preventing escape | +25 | If the cult wins |
| Killer: surviving the reveal | +10 | If the killer is alive at dawn |

Cinders are **not** a currency for gameplay advantages. They unlock cosmetics, casebook entries, and profile badges. See [[Progression Overview]].

## The payout formula

The end-of-match payout has two layers:

1. **Performance Cinders** — the table above.
2. **Outcome multiplier** — based on the ending (see [[Endings]]).

```text
payout = (performance Cinders × outcome multiplier) + unspent Shillings
```

Proposed multipliers:

| Outcome | Multiplier |
|---|---|
| E-01 Whole Truth | 1.00 |
| E-02 Open Case | 0.75 |
| E-03 Survivors | 0.50 |
| E-06 House Keeps Its Own | 0.50 |
| E-09 The Cage | 1.00 / 0.75 |
| E-04 Ninth Rite (killer win) | 1.00 for killers, 0 for investigators |
| E-05 Tenth Guest (killer win) | 1.25 for killers, 0 for investigators |
| E-07 The Innocent | 0 for the shooter, 0.5 for the rest |

> [!warning] Proposed, not locked
> The 100/50 coin split for a stopped killer with a complete/incomplete case is locked in the design conversation. The Cinder values and multipliers above are a **proposed** economy pass. Do not treat them as final.

## Why two currencies?

- **Shillings** create tension **before** the match. They are a loadout choice.
- **Cinders** create tension **after** the match. They are a score and a progression track.
- Merging them would let players hoard one currency and skip the loadout decision.
- Splitting them lets the game reward both **preparation** and **performance**.

## Anti-farm rules

- Cinders are capped per match (proposed 150).
- Repeated kills on the same player in one match do not stack killer Cinders.
- Disconnecting before the match ends forfeits unspent Shillings.
- AFK players earn no Cinders.
- Exploiting a soft-lock or a spawn trap voids the match's Cinders for the exploiter.
- No Cinders can be bought with Robux.

## Transparency

At match end, the player sees a **ledger**:

```text
CASE FILE
  Victim ................ +20
  Method ................ +20
  Scene ................. −10
  Motive ................ +20
RITUAL .................. +10
SIGILS BROKEN ........... +10
SURVIVAL ................ +10
UNSPENT SHILLINGS ....... +45
OUTCOME ................. ×1.00
TOTAL ................... +125 Cinders
```

The ledger is diegetic: it looks like a case file being stamped. The player can inspect every line.

## Design notes

- **Shillings should feel like a budget, not a wallet.** The player should feel the cost of the third item.
- **Cinders should feel like a record, not a grind.** The player should want to see the ledger, not optimize it.
- **Never sell Cinders.** It breaks the trust of the no-pay-to-win promise.
- **Never make Cinders a requirement for a core mechanic.** They are a reward, not a gate.

## Related

- [[Curio Shop]]
- [[Item Catalog]]
- [[Shop Balance]]
- [[Progression Overview]]
- [[Cinders]]
