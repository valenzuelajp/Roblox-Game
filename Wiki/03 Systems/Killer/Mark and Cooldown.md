---
title: "Mark and Cooldown"
aliases:
  - "Mark Cooldown"
  - "Killer Cooldown"
tags:
  - systems
  - killer
  - combat
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Mark targeting, range, line of sight, cooldown values, immunity windows, and the shared cooldown for partnered killers."
related:
  - "[[Killer Role]]"
  - "[[Sigil System]]"
  - "[[Partner Killers]]"
  - "[[Sabotage]]"
---

# Mark and Cooldown

## Targeting

The killer marks a **living investigator**. The mark requires:

| Requirement | Value |
|---|---|
| Range | 40 studs |
| Line of sight | Clear |
| Target state | Not marked, not immune, not in a safe zone |
| Match time | After the first 60 seconds of investigation |
| Cooldown | Ready |
| Killer state | Alive, not downed, not detained |

The mark is a **soft lock**: the killer must keep the target in view for **0.75 seconds**. If the target breaks line of sight, the mark cancels. This prevents drive-by marks through doorways.

## Cooldown

| Mode | Cooldown |
|---|---|
| One killer | 45 seconds after the sigil is broken or completed |
| Two killers (shared) | 45 seconds, shared: if The Hand marks, The Choir waits |
| Last Hunt | 0 seconds |

The cooldown starts when the **sigil resolves**, not when the mark is placed. A killer cannot mark a second victim while the first sigil is active.

## Immunity

| Source | Duration |
|---|---|
| First 60 seconds of investigation | All investigators immune |
| After a sigil is broken | Victim immune for 10 seconds |
| After a sigil completes (victim dies) | No immunity; the victim is dead |
| Safe zone | Permanent while inside |
| Ritual channel | The channeler is markable, but marking breaks the channel |
| Last Hunt | No immunity except the safe zone |

## Shared cooldown (two killers)

At 8–10 players:

- The Hand and The Choir share **one** cooldown.
- They can coordinate: The Hand marks, The Choir defends the sigil.
- They cannot mark two victims at once.
- The cooldown UI shows both partners the same timer.
- If one killer is dead or detained, the other keeps the cooldown and can mark alone.

The shared cooldown is the main balancing lever for two killers. It keeps the pair from snowballing.

## Mark resolution

| Outcome | Cooldown starts | Cinders |
|---|---|---|
| Sigil broken | 45s | +5 to breaker, +0 to killer |
| Sigil completes | 45s | +15 to killer |
| Victim disconnected | 45s | +0 |
| Mark cancelled | 0s | +0 |
| Killer downed | Cooldown resets on revive/detain | +0 |

## Mark and the ritual

- The killer can mark the **channeler**. The mark breaks the channel immediately.
- The killer can mark a **guard** outside the chapel.
- The killer cannot mark a player inside the **ritual circle** during the channel? No — the channeler is markable; the guards are markable. The safe zone is only the shop/lobby/exit.
- The sigil cannot spawn inside the chapel during the ritual. It spawns at the nearest valid anchor outside.

## Mark and the Last Hunt

- Cooldown removed.
- The killer can mark repeatedly, but each mark still spawns a sigil and starts a countdown.
- The victim still has a chance to break it.
- The Last Hunt's speed boost and wallhack make marks easier to place.

## UI

The killer sees:

- A reticle that turns red when a target is markable.
- A range indicator.
- A cooldown ring.
- A small icon for each partner's cooldown (two-killer mode).
- A warning when the target is in a safe zone.

The victim sees:

- A red flash.
- A whisper.
- A HUD icon with the sigil direction and countdown.

## Counterplay

Investigators can:

- Break line of sight.
- Stay in groups.
- Use doorways and corners.
- Watch for the killer's approach.
- Force the killer to choose between marking and defending.

## Tuning

| Value | Default | Range |
|---|---|---|
| Mark range | 40 studs | 30–50 |
| Mark lock time | 0.75s | 0.5–1.0 |
| Cooldown | 45s | 30–60 |
| Sigil countdown | 90s | 75–105 |
| Post-break immunity | 10s | 5–15 |
| First mark delay | 60s | 45–90 |

## Edge cases

| Case | Rule |
|---|---|
| Target enters safe zone during mark | Mark cancels |
| Killer is downed during mark | Mark cancels |
| Target disconnects | Mark cancels; no cooldown |
| Two killers mark the same target | Second mark cancels; first wins |
| Sigil spawn fails | Server retries nearest valid anchor |
| Killer marks a ghost | Not allowed |

## Related

- [[Killer Role]]
- [[Sigil System]]
- [[Partner Killers]]
- [[Sabotage]]
- [[Health and Damage]]
