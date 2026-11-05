---
title: "Win Conditions"
aliases:
  - "Victory"
  - "Outcomes"
tags:
  - game-design
  - status/open
status: open
updated: 2026-11-04
summary: "How investigators and killers win, the reward tiers, wrong-accusation penalties, and the edge cases that still need a decision."
related:
  - "[[Open Questions#O-004 — Win condition|O-004]]"
  - "[[03 Systems/Case File/Rewards and Penalties|Rewards]]"
  - "[[Ritual Reveal]]"
  - "[[Last Hunt]]"
---

# Win Conditions

> [!warning] Open decision
> The final win condition is **O-004** in [[Open Questions]]. This page shows the current recommendation and the alternatives. Do not treat the recommendation as locked.

## The core question

Do investigators need to **stop the killers and escape**, or is **escape enough**?

| Option | Investigator win | Killer win | Feel |
|---|---|---|---|
| **A. Escape = win** (recommended) | Escape before 7 AM with the Hollow Word | Parity, eliminate gun holders, or prevent escape until dawn | Clear goal; stopping killers is the 100% reward tier |
| **B. Stop + escape = win** | Both killers stopped **and** escape | Same | Harsher; a team can escape and still lose |
| **C. Stop = win** | Both killers stopped; escape is only a multiplier | Same | Makes the exit feel secondary |

**Recommendation:** A. It keeps the exit as the dramatic goal and makes "stop the killers" the mastery path.

## Investigator outcomes

| Case File | Killers stopped? | Escaped? | Reward | Result |
|---|---|---|---|---|
| 4/4 | Yes (both) | Yes | **100%** | Full victory |
| 4/4 | No | Yes | **50%** | Escape, case solved, killers still out |
| 3/4 | Yes | Yes | **50%** | Incomplete case, killers stopped |
| 3/4 | No | Yes | **25%** | Partial escape |
| 2/4 or less | Any | Yes | **10%** | Survival reward |
| Any | Any | No | **0%** | Killers win |
| Any | Wrong accusation | — | **0%** | Innocent dies; shooter gets two sigils; gun drops |

> These percentages are a proposed reward curve, not locked. The exact numbers belong in [[03 Systems/Case File/Rewards and Penalties|Rewards]].

## Killer outcomes

Killers win if any of the following happens:

1. **Parity:** living killers ≥ living investigators (proposed).
2. **Gun holders eliminated:** both pistol holders are dead and the investigators cannot recover a gun (proposed).
3. **Dawn:** the investigators have not escaped by 7:00 AM.
4. **Ritual prevented:** the investigators never complete the ritual and never escape (a subset of dawn).

Killers do **not** win merely by killing the Case File experts. The case can still be solved by others.

## Wrong accusation

A wrong accusation is the worst outcome for the investigators.

| Trigger | Consequence |
|---|---|
| Pistol holder shoots an innocent | Innocent dies; shooter receives two sigils; gun drops; no reward for the shooter |
| Team votes to execute an innocent (if fate vote is enabled) | Innocent dies; the real killers get a Last Hunt preview; reward tier drops |
| Team detains an innocent | Innocent is held for 30s; the real killer is free; no reward penalty (proposed) |

## Escape rules

- The exit is locked until the ritual succeeds and the Hollow Word is entered.
- The Hollow Word is five letters: four from the Case File tasks, one from the ritual.
- Any living investigator can enter the word at the exit.
- The exit opens for a short window during the Last Hunt (proposed: 60 seconds).
- If the word is entered incorrectly, the exit locks for 15 seconds (proposed).
- The killer can use the exit? No. The killer's goal is to prevent escape, not leave.

## Edge cases

| Situation | Proposed rule |
|---|---|
| Both killers detained | Investigators can escape for 100% if 4/4 |
| One killer dead, one detained | 100% if 4/4 and escape |
| All killers dead | The ritual still works; the exit still needs the word |
| All investigators dead | Killers win immediately |
| Timer expires during the ritual | The ritual fails; dawn; killers win |
| Timer expires during the escape run | Anyone who crossed the exit line escapes; the rest are trapped |
| A killer is detained but rescued | The rescue timer must finish before dawn |
| A player disconnects at the exit | Their body must cross the line; no free escape |

## Reward formula (proposed)

```text
base = 0.5 * case_progress        // 0.0 to 0.5
bonus = 0.5 if both killers stopped
escape = 1.0 if escaped else 0.0
reward = base * escape + bonus * escape
```

This yields 100% for 4/4 + both killers + escape, 50% for 4/4 + escape without stopping, and 0% for no escape. It is a starting point for tuning, not a locked formula.

## Related

- [[03 Systems/Case File/Rewards and Penalties|Rewards]] — the economy.
- [[Detain System]] — the non-lethal path.
- [[Fate Vote]] — the execution path.
- [[Last Hunt]] — the endgame.
- [[Open Questions]] — O-004.
