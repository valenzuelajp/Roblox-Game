---
title: "Pistols"
aliases:
  - "Guns"
  - "The Revolver"
tags:
  - systems
  - combat
  - pistols
  - status/locked
status: locked
updated: 2026-11-04
summary: "The shared pistol model: four bullets, hitscan, no reload, drop on death, and who can pick it up."
related:
  - "[[First Pistol]]"
  - "[[Second Pistol]]"
  - "[[Health and Damage]]"
  - "[[Friendly Fire]]"
---

# Pistols

## The weapon

Both pistols are **.38 revolvers** with four bullets. They are mechanically identical. The difference is how they enter the match.

| Stat | Value |
|---|---|
| Capacity | 4 |
| Damage | 1 |
| Fire rate | 1 shot / 0.8s |
| Effective range | 60 studs |
| Maximum range | 100 studs |
| Reload | None |
| Drop on death | Yes |
| Pick up | Anyone |
| Holster | Yes |
| Safety | No |

## Firing

- **Hitscan** raycast from the camera to the crosshair.
- **Server validation:** the server checks range, line of sight, and fire rate.
- **Spread:** 1.5° standing, 4° moving.
- **Recoil:** visual only; no aim punch.
- **Muzzle flash:** visible through windows.
- **Sound:** map-wide.

## Claiming

- **First pistol:** awarded at 1/4 tasks solved. The delivery method is open (random or voted).
- **Second pistol:** claimed from the vault cabinet after three seals.
- **Dropped pistol:** anyone can pick it up, including the killer.
- **Detained player:** drops their pistol.
- **Ghost:** cannot pick up or use a pistol.

## Who can use it

- Investigators: yes.
- Killers: yes, if they claim or pick up a pistol.
- Spectators: no.
- NPCs: no.

The killer using a pistol is the game's biggest power spike. It bypasses the sigil loop and can kill an investigator at range.

## Bullets

- Four bullets, no reload.
- The HUD shows four chambers.
- Empty chambers are visible.
- The last bullet is a social decision: save it for the killer, or use it to stop a wrong accusation.

## Sound design

- **Shot:** a sharp crack, a long echo, a dog bark in the distance.
- **Empty:** a dry click that is audible within 10 studs.
- **Drop:** a heavy clatter.
- **Pickup:** a metallic snap.

## Counterplay

- **Cover:** the raycast respects walls.
- **Distance:** effective range is 60 studs; beyond that, damage falls off? No — max range is 100, but accuracy drops.
- **Movement:** strafing increases spread.
- **Sound:** every shot reveals the shooter's general location.
- **Ammo:** count the shots. Four is all they have.

## Design notes

- The pistol is a **story object**, not a power-up. It should be treated with caution.
- The four-bullet limit is the whole balance. Do not add reloads.
- The killer's access to a pistol is intentional. It makes the second-pistol race tense.
- The gun should feel heavy, loud, and final.

## Related

- [[First Pistol]]
- [[Second Pistol]]
- [[Health and Damage]]
- [[Friendly Fire]]
- [[Combat Overview]]
