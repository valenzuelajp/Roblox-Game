---
title: "Last Hunt"
aliases:
  - "The Endgame Chase"
  - "Final Hunt"
tags:
  - systems
  - ritual
  - endgame
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The 60-second Last Hunt after the ritual reveal: no mark cooldown, a speed boost, a short wallhack, and the escape window."
related:
  - "[[Ritual Reveal]]"
  - "[[Ritual Overview]]"
  - "[[The Killer]]"
  - "[[Endings]]"
---

# Last Hunt

## What it is

The Last Hunt is the **60-second endgame** that begins when the ritual completes. The killers are revealed. The exit is unlocked. The house stops pretending.

It is not a separate round. It is a state change inside the same 30-minute match.

## The rules

| Rule | Effect |
|---|---|
| **Duration** | 60 seconds, or until dawn, whichever is sooner |
| **Mark cooldown** | Removed; the killer can mark again immediately |
| **Speed** | Killers gain +15% movement speed |
| **Wallhack** | Killers see investigator outlines through walls for the first 10 seconds |
| **Exit** | The gate is unlocked; the Hollow Word opens it |
| **Pistols** | Both pistols remain live; no reload |
| **Ritual** | The altar is inert; the reveal cannot be repeated |

The Last Hunt is **global**. Every player hears the bell and sees the UI banner: "THE HOUSE IS AWAKE."

## Why it exists

Without the Last Hunt, the reveal would be a death sentence for the killers:

- The investigators would know exactly who to shoot.
- The killers would have no way to close the distance.
- The endgame would be a walk to the exit.

The Last Hunt gives the killers a **fighting chance** and gives the investigators a **reason to run**. It turns the last minute into a chase, not a cleanup.

## Killer strategy

- **Rush the exit.** If the investigators are split, the killer can reach the gate first and camp it.
- **Mark the gun holder.** Removing the pistol is worth more than a random kill.
- **Use the wallhack to find the channeler.** The channeler is usually the most vulnerable.
- **Ignore the ritual.** The altar is inert; do not waste time there.
- **Force parity.** Two quick marks can end the match before the investigators reach the gate.

## Investigator strategy

- **Do not scatter.** The killer's speed advantage punishes isolated players.
- **Escort the word holder.** The player with the fifth letter is the priority.
- **Leave a guard at the gate.** The killer can camp it.
- **Use the 10-second wallhack against the killer.** The killer's outline is visible during the reveal; the investigators know the approach.
- **Shoot first, ask later.** The fate vote is over; the killer is confirmed.

## The exit

The gate is at the end of the drive, beyond the front garden. It has:

- A brass five-letter lock.
- A bell that rings when the word is entered correctly.
- A 3-second opening animation.
- A kill zone in front of it; the killer can camp the approach.

The word can be entered by any player. If a killer enters it, the gate opens, but the killer does not win by escaping alone. The cult needs the investigators to stay.

## Failure states

| Event | Result |
|---|---|
| The 60 seconds end | The Last Hunt ends; normal rules resume until dawn |
| The gate is opened | Investigators can escape; the match ends when the last living investigator leaves or dawn arrives |
| All investigators die | Killers win immediately |
| Both killers are stopped | The Last Hunt ends; investigators can escape without pursuit |

## Presentation

- **Audio:** the rain stops; a low chord; the bell; the choir returns.
- **Visual:** the chapel windows glow red; the exit gate is outlined in gold.
- **UI:** a 60-second timer; a banner; the word input.
- **Accessibility:** the timer has a visual and audio cue; the wallhack outline can be reduced in settings.

## Design notes

- The Last Hunt should feel like **a sprint**, not a second match.
- 60 seconds is a tuning value. If playtests show it is too short, extend to 75; if too long, cut to 45.
- The speed boost should be noticeable but not absurd. +15% is about one body length per second.
- The wallhack is short on purpose. It gives the killer a read, not a permanent advantage.
- The exit should be visible from the chapel, so players know where to run.

## Related

- [[Ritual Reveal]]
- [[Ritual Overview]]
- [[The Killer]]
- [[Endings]]
- [[Win Conditions]]
