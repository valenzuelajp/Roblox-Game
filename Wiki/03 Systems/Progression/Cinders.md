---
title: "Cinders"
aliases:
  - "Cinder Currency"
  - "Match Currency"
tags:
  - systems
  - progression
  - economy
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The earned-only match currency: sources, payout formula, caps, anti-farm rules, and how it converts to cosmetics."
related:
  - "[[Progression Overview]]"
  - "[[Shillings and Cinders]]"
  - "[[Unlocks]]"
  - "[[Monetization]]"
---

# Cinders

> [!info] Earned only
> Cinders are the persistent currency. They cannot be bought with Robux, traded between players, or converted back into Shillings. They buy cosmetics and casebook skins, never power.

## Sources

| Source | Cinders | Notes |
|---|---|---|
| Unspent Shillings | 1:1 | Converted at match end; proposed |
| Task solved | +20 | Per task, max 80 |
| Sigil broken | +5 | Per rescue, max 20 |
| Survived to dawn | +10 | Investigator only |
| Killer stopped | +15 | Per killer, max 30 |
| Ritual completed | +10 | Team-wide |
| All four tasks | +25 | Bonus |
| Killer death | +15 | Per killer, killer player only |
| Prevented escape | +25 | Killer player only |

## Payout formula

```text
base = task_cinders + sigil_cinders + survival_cinders
      + killer_stop_cinders + ritual_cinders + all_tasks_bonus
      + unspent_shillings

multiplier = 1.00  # 4/4 tasks + both killers stopped + escape
           = 0.50  # killers stopped, case incomplete
           = 0.25  # escaped, killers active or ritual incomplete
           = 0.00  # cult completes the rite / no escape

payout = floor(base * multiplier)
payout = min(payout, 150)
```

The **150 Cinder cap** is proposed. It prevents one dominant match from distorting the economy.

## Anti-farm rules

- **No AFK farming.** A player who deals no damage, solves no puzzle, and searches no clue earns the minimum survival share only.
- **No kill farming.** The killer's Cinders are capped per match; repeating the same mark on the same victim is not rewarded.
- **No alt-account trading.** Cinders are account-bound.
- **No intentional throwing.** Repeated friendly fire or intentional self-sabotage reduces the payout.
- **No disconnect exploit.** Leaving before the result screen forfeits the match bonus.
- **No Cinder purchase.** There is no Robux-to-Cinder path.

## Transparency

The end-of-match ledger shows every line:

```text
Tasks solved            4/4       +80
Sigils broken           2         +10
Survived to dawn        yes       +10
Killers stopped         2         +30
Ritual completed        yes       +10
All tasks bonus         yes       +25
Unspent Shillings       15        +15
Subtotal                          180
Multiplier              x1.00
Payout                            150 (cap)
```

No hidden math. If a player feels cheated, the ledger shows why.

## Uses

- Cosmetic outfits, hats, glasses, gloves.
- Gun skins.
- Lobby themes.
- Casebook skins.
- Emotes and titles.
- **Not** items, clues, bullets, health, speed, or map information.

## Story framing

Cinders are the ash left after a case closes. Vesper calls them "the house's change." The currency is diegetic: the player's casebook fills with ash-gray stamps, and the cosmetic shop is a curiosity cabinet in the lobby.

## Related

- [[Shillings and Cinders]]
- [[Progression Overview]]
- [[Unlocks]]
- [[Monetization]]
