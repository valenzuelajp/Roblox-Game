---
title: "Detain System"
aliases:
  - "Detain"
  - "The Cellar Cell"
tags:
  - systems
  - combat
  - detain
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The non-lethal path: hold to detain a killer, lock them in the cellar cell, and rescue them in 10 seconds."
related:
  - "[[Health and Damage]]"
  - "[[Win Conditions]]"
  - "[[Partner Killers]]"
  - "[[05 World/Rooms/The Cellar|Cellar]]"
---

# Detain System

## Why detain

Shooting is fast. Detaining is hard. The game needs both:

- **Shoot** = stop the killer now, but leave the case incomplete (50% reward).
- **Detain** = stop the killer and preserve the 100% path, but risk a rescue.

Detain is the investigators' **non-lethal** tool. It is also the killer's worst outcome: alive, contained, and useless.

## How to detain

1. The investigator approaches a **living killer** from behind or while the killer is downed.
2. The investigator holds the **detain** interaction.
3. The hold time depends on the killer's health:

| Killer state | Hold time | Interrupt |
|---|---|---|
| **1 HP (wounded)** | 2 seconds | Any damage |
| **2 HP (full)** | 5 seconds | Any damage |
| **0 HP (downed)** | 1 second | None |

4. If the hold completes, the killer is **detained**.
5. The killer is transported to the **cellar cell**.

> [!warning] Risky by design
> Detaining a full-health killer takes 5 seconds. In a chase, that is a long time. Most detains happen at 1 HP or after a down.

## The cellar cell

- One cell, iron door, small window.
- The detained killer can see the cellar, hear the house, and talk to anyone nearby.
- The killer cannot mark, sabotage, use items, or pick up a gun.
- The killer can attempt to pick the lock: 30 seconds, no item, audible.
- The killer can be rescued by their partner or by a player who chooses to help them.

## Rescue

- A rescuer interacts with the cell door for **10 seconds**.
- The rescue is interrupted by damage.
- The rescuer can be an investigator (a traitor? no role for that; only the partner or a player who wants chaos) or the partner killer.
- If the partner is dead, no rescue.
- If both killers are detained, the match ends in an investigator win (if at least one investigator escapes).

## Both killers detained

At 8–10 players, both killers must be stopped. If both are detained:

- The investigators win the combat phase.
- The exit unlocks if the ritual is complete.
- The ending is **E-09 The Cage** (100% if the case is complete).

## Detain vs. shoot

| Action | Time | Result | Reward |
|---|---|---|---|
| **Shoot** | Instant | Killer downed/dead | 50% if case incomplete |
| **Detain** | 2–5s | Killer contained | 100% if case complete |
| **Finish** | 1s | Killer dead | 50% if case incomplete |

The choice is the endgame's moral beat: do you want justice or certainty?

## UI

- A hold ring around the crosshair.
- A text prompt: "HOLD TO DETAIN."
- The killer sees the same ring and can struggle (mash a key) to slow the hold by 20%.
- The cell has a rescue timer icon.

## Counterplay

The killer can:

- Struggle to slow the hold.
- Call for help.
- Pick the lock.
- Be rescued by a partner.

The investigators can:

- Guard the cell.
- Detain both killers.
- Use the cell as bait for the partner.

## Edge cases

| Case | Rule |
|---|---|
| Killer is downed | 1s detain |
| Killer is at 1 HP | 2s detain |
| Killer is at 2 HP | 5s detain |
| Detain interrupted | Killer is free; no penalty to investigator |
| Both killers detained | Investigators win |
| Detained killer disconnects | Counts as stopped |
| Cell door destroyed | Not possible |
| Rescue interrupted | Timer resets |

## Accessibility

- The hold is a button press, not a mash.
- The struggle is optional; the killer can choose to wait.
- The timer has a visual and audio cue.
- The cell has a text prompt for rescue.

## Design notes

- Detain is the **100% path**. It should be harder than shooting.
- The cellar cell should be a scary room, not a safe box.
- The rescue creates a **second front**: the investigators must guard the cell and the exit.
- Do not let detain become a guaranteed win. The partner can always try a rescue.

## Related

- [[Health and Damage]]
- [[Win Conditions]]
- [[Partner Killers]]
- [[05 World/Rooms/The Cellar|Cellar]]
- [[Friendly Fire]]
