---
title: "Health and Damage"
aliases:
  - "HP"
  - "Damage Model"
tags:
  - systems
  - combat
  - health
  - status/locked
status: locked
updated: 2026-11-04
summary: "The asymmetric health model: investigators 1 HP, killers 2 HP, one damage per bullet, no healing."
related:
  - "[[Combat Overview]]"
  - "[[Pistols]]"
  - "[[Sigil System]]"
  - "[[Detain System]]"
---

# Health and Damage

## The model

| Role | Health | Bullet damage | Mark damage | Healing |
|---|---|---|---|---|
| **Investigator** | 1 HP | 1 | 1 (lethal) | None |
| **Killer** | 2 HP | 1 | — | None |

The asymmetry is the core of combat:

- An investigator dies to **one** bullet or **one** completed sigil.
- A killer survives **one** bullet, then becomes wounded.
- The killer's second HP is the reason the investigators need a plan, not just a gun.

## Wounded state

When a killer reaches **1 HP**:

- They are **wounded**.
- They leave a **blood trail** for 20 seconds.
- They move 5% slower.
- Their breathing is audible within 10 studs.
- Their outline is not visible, but the blood is.
- They can still mark, sabotage, and shoot.

The wounded state is the investigators' best lead. The blood trail points toward the killer's **last position**, not their current one, so it is a clue, not a tracker.

## Death

### Investigator death

- At 0 HP, the investigator dies.
- The screen fades to the ghost spectator view.
- The body remains for 30 seconds (prop, not collision).
- Items drop.
- The ghost can see the map, the living, and the killer's outline? No — the ghost sees the living and the map, but not the killer's outline unless the ritual revealed them.
- The ghost cannot speak to the living.

### Killer death

- At 0 HP, the killer is **downed**, not dead.
- The killer can crawl slowly (2 studs/s).
- The killer can whisper to their partner.
- The killer can be **detained** (see [[Detain System]]) or **finished**.
- If finished, the killer dies and becomes a ghost.
- If detained, the killer is locked in the cellar cell.

## Damage sources

| Source | Damage | Notes |
|---|---|---|
| Pistol bullet | 1 | Hitscan |
| Completed sigil | 1 | Lethal to investigators |
| Friendly fire | 1 | Lethal; shooter gets two sigils |
| Environmental | 0 | No fall damage, no fire damage |
| Killer melee | 0 | The killer has no melee attack |

## No healing

- No medkits.
- No doctor role.
- No revive.
- No regeneration.
- The only way to remove a wound is to survive to the end.

## UI

- Investigator HUD: a single heart; it is always full until it is not.
- Killer HUD: two hearts; the second heart cracks at 1 HP.
- Wounded killer: a red vignette, a heartbeat, and a blood trail.
- Ghost: a desaturated screen and a "SPECTATING" label.

## Accessibility

- Health is shown as text and icon.
- The heartbeat has a visual pulse.
- The blood trail has a high-contrast mode.
- Death has a text banner and a sound cue.

## Design notes

- The 1 HP investigator is intentionally fragile. It makes every gunshot matter.
- The 2 HP killer is intentionally tanky. It makes the first bullet a warning, not a kill.
- No healing keeps the match moving and prevents stalemates.
- No melee keeps the killer's power in the mark, not in a chase.

## Related

- [[Combat Overview]]
- [[Pistols]]
- [[Sigil System]]
- [[Detain System]]
- [[Death and Spectator]]
