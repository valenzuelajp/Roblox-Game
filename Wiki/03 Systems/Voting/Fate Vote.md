---
title: "Fate Vote"
aliases:
  - "Detain or Execute"
  - "Killer's Fate"
tags:
  - systems
  - voting
  - ritual
  - status/open
status: open
updated: 2026-11-04
summary: "The 30-second vote after the ritual reveal: detain the killer for the 100% path or execute for speed, with tie rules and killer counterplay."
related:
  - "[[Voting Overview]]"
  - "[[Detain System]]"
  - "[[Ritual Reveal]]"
  - "[[Win Conditions]]"
---

# Fate Vote

> [!warning] Open question O-003
> The fate vote is **proposed**, not locked. It only happens if a killer is detained after the ritual reveal.

## When it happens

After the **Revealing Ritual**:

1. Every killer is revealed.
2. The exit unlocks.
3. The Last Hunt begins.
4. If a killer is **detained** (not killed), the fate vote opens for **30 seconds**.

The vote does not pause the Last Hunt. The other killer can still act.

## The question

> **What happens to the detained killer?**

| Option | Result | Reward path |
|---|---|---|
| **Detain** | The killer is locked in the cellar cell until dawn. | 100% if the case is complete |
| **Execute** | The killer is removed from the match. | 50% (the case is incomplete) |

The vote is **not** "is this the killer?" The ritual already revealed that. It is "what do we do with them?"

## The vote

- Secret ballot.
- Majority wins.
- Tie: **detain** (the non-lethal default).
- The result is announced with a typewritten card: "The lodge has decided."
- The detained killer hears the result through the cell door.

## Why detain?

- Preserves the 100% reward path.
- Keeps the killer alive as a source of information (interrogation is optional).
- The cellar cell can be rescued by a partner, which creates a final sub-objective.
- It is the moral choice: the investigators are not executioners.

## Why execute?

- Faster.
- Removes the rescue risk.
- The killer cannot escape or mark again.
- It is the noir choice: the case ends with a gunshot, not a trial.

## The killer's counterplay

- The detained killer can argue for detain (survival).
- The partner can campaign for execute (remove the liability) or detain (rescue later).
- The killer can lie about the cell's location.
- The killer can promise information.
- The killer can try to escape during the vote.

## The cell

The cellar cell is:

- A stone room with one door.
- Locked from the outside.
- Guarded by the investigators or a trap.
- Rescuable by a partner in 10 seconds.
- Visible on the map item.

If both killers are detained, the investigators win (proposed). See [[Win Conditions]].

## Accessibility

- The ballot box has a text readout.
- The options have descriptions, not just labels.
- The timer has an audio cue at 5 seconds.
- The result is announced in text and audio.
- A player can abstain; abstain counts as detain.

## Telemetry

Track:

- Detain vs execute rate.
- Win rate by choice.
- Rescue rate.
- Player sentiment.
- Killer escape rate.

## Design notes

- **The fate vote is the moral climax.** Make the choice feel heavy.
- **Detain should be harder, not just nicer.** The partner can rescue.
- **Execute should be faster, not free.** The 50% cap is the cost.
- **The vote must not pause the Last Hunt.** The pressure is the point.
- **Tie goes to detain.** Mercy is the default.

## Related

- [[Voting Overview]]
- [[Detain System]]
- [[Ritual Reveal]]
- [[Win Conditions]]
