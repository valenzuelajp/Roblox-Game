---
title: "Combat Overview"
aliases:
  - "Combat"
  - "Gunplay"
tags:
  - systems
  - combat
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The combat philosophy: guns are rare, decisive, and loud; the mark is the primary kill; no healing; no reload."
related:
  - "[[Health and Damage]]"
  - "[[Pistols]]"
  - "[[First Pistol]]"
  - "[[Second Pistol]]"
  - "[[Friendly Fire]]"
  - "[[Detain System]]"
---

# Combat Overview

## Philosophy

Combat is **rare, loud, and final**.

The killer's primary weapon is the **mark**, not a gun. The investigators' primary weapon is the **case**, not a gun. Guns exist to create a late-game power spike and a social dilemma: who holds one, who deserves one, and when do you use the last bullet?

There is no reload, no healing, and no respawn. A gunfight is a decision, not a duel.

## The rules

| Rule | Value |
|---|---|
| Investigator health | 1 HP |
| Killer health | 2 HP |
| Bullet damage | 1 |
| Pistol capacity | 4 bullets |
| Reload | None |
| Healing | None |
| Respawn | None (ghost spectator) |
| Friendly fire | Lethal; heavy penalty |
| Gunshot audio | Map-wide |
| Muzzle flash | Visible from outside the room |

## The two guns

| Pistol | How | Bullets | Claim |
|---|---|---|---|
| **First pistol** | Awarded at 1/4 tasks solved | 4 | Random or voted (open) |
| **Second pistol** | Three seals, one per floor | 4 | First to interact in the vault |

Both guns are **the same weapon** mechanically. The difference is how they enter the match.

## Why no reload

- **Scarcity creates drama.** Four bullets is a countdown.
- **No reload removes attrition.** The killer cannot win by out-shooting; the investigators cannot win by spraying.
- **The last bullet is a decision.** Do you save it for the killer, or use it to stop a wrong accusation?

## Why no healing

- **Damage is meaningful.** A killer at 1 HP stays wounded; the blood trail stays.
- **No heal loops.** The team cannot undo a mistake.
- **The 1 HP investigator is fragile.** One bullet, one mark, one mistake.

## Hit model

- **Hitscan** raycast, server-validated.
- **Effective range:** 60 studs.
- **Maximum range:** 100 studs.
- **Spread:** minimal when standing still; wider when moving.
- **Fire rate:** one shot per 0.8 seconds.
- **Headshot:** no special damage; a bullet is a bullet.

## Sound and light

- A gunshot is heard across the entire map.
- The muzzle flash is visible through windows.
- The shot creates a **3-second echo** that the killer can use to locate the shooter.
- The gun smoke lingers for 5 seconds.

## Death

- At 0 HP, the player dies.
- Investigators become ghosts (see [[Death and Spectator]]).
- Killers become downed; they can be detained or finished.
- Items drop at the death location.
- The pistol drops; anyone can pick it up.

## Friendly fire

If an investigator shoots an innocent investigator:

- The innocent dies.
- The shooter receives **two sigils**.
- The shooter drops the gun.
- The real killer benefits.

This is the harshest penalty in the game. It is intentional. See [[Friendly Fire]].

## Detain

A living killer can be detained without being shot:

- Hold the interaction.
- 2 seconds at 1 HP; 5 seconds at 2 HP.
- Damage interrupts.
- The detained killer goes to the cellar cell.
- An ally can rescue them in 10 seconds.

See [[Detain System]].

## Design rules

1. **Guns are loud.** Every shot is a map-wide event.
2. **Guns are finite.** Four bullets, no reload.
3. **Guns are social.** Who holds it is a table decision.
4. **Guns are not the win condition.** The case and the escape are.
5. **No gore.** Stylized blood, no dismemberment.
6. **No pay-to-win.** No gun skins with gameplay effects.

## Related

- [[Health and Damage]]
- [[Pistols]]
- [[First Pistol]]
- [[Second Pistol]]
- [[Friendly Fire]]
- [[Detain System]]
