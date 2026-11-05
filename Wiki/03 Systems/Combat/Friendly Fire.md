---
title: "Friendly Fire"
aliases:
  - "Innocent Shot"
  - "Wrong Accusation"
tags:
  - systems
  - combat
  - social
  - status/locked
status: locked
updated: 2026-11-04
summary: "What happens when an investigator shoots an innocent: the death, the two sigils, the dropped gun, and the no-reward outcome."
related:
  - "[[Pistols]]"
  - "[[Health and Damage]]"
  - "[[Voting Overview]]"
  - "[[Endings]]"
---

# Friendly Fire

## The rule

If an investigator shoots an **innocent investigator**:

1. The innocent **dies**.
2. The shooter receives **two sigils**.
3. The shooter **drops the gun**.
4. The real killer benefits.
5. The match continues.

This is the harshest penalty in the game. It is designed to make the table **certain** before anyone pulls the trigger.

## Why two sigils

One sigil would be a slap on the wrist. Two sigils:

- Create two rescue puzzles.
- Split the team's attention.
- Give the killer a window.
- Make the shooter feel the weight of the mistake.

The two sigils bind to the shooter. Each has its own countdown. The team must break **both** to save the shooter. If either completes, the shooter dies.

> [!note] Tuning
> Two sigils may be too harsh in playtests. The fallback is one sigil plus a 30-second mark immunity for the killer. The current design is two.

## The gun

- The gun drops at the innocent's feet.
- Anyone can pick it up, including the killer.
- The shooter cannot immediately reclaim it; they are marked and must survive.
- The gun retains its remaining bullets.

## The social aftermath

- The table knows the shooter was wrong.
- The shooter may be a killer who deliberately shot an innocent. The penalty applies to killers too? **No.** A killer who shoots an investigator is not penalized; the kill is the point. The two-sigil penalty only applies when an **investigator** shoots an **investigator**.
- The shooter's voice may be the only defense. Text players need a fast way to explain.

## Detection

How does the game know the victim was innocent?

- The server knows every player's role.
- If the shooter is an investigator and the victim is an investigator, the penalty triggers.
- If the shooter is a killer, no penalty.
- If the shooter is an investigator and the victim is a killer, no penalty; the shot is a correct kill.

The penalty is **not** based on the shooter's belief. It is based on the server's truth.

## Wrong accusation vs. friendly fire

| Event | Trigger | Penalty |
|---|---|---|
| **Friendly fire** | Investigator shoots investigator | Death, two sigils, gun drops, no reward |
| **Wrong accusation** | The fate vote executes an innocent | The innocent dies, the gun drops, the shooter gets two sigils, no reward |
| **Correct kill** | Investigator shoots killer | Killer downed; normal combat |
| **Killer shoots investigator** | Killer with a pistol | Investigator dies; no penalty |

The two are related but distinct. The fate vote is a **social** wrong accusation; friendly fire is a **mechanical** one.

## Recovery

Can the match be recovered?

- The innocent is dead. No revive.
- The shooter can survive if both sigils are broken.
- The gun can be recovered.
- The case can still be solved.
- The ending is **E-07 The Innocent** if the shot is the match-ending event; otherwise, the match continues with a heavy cost.

## UI

- A red banner: "AN INNOCENT HAS FALLEN."
- The shooter's screen: two sigil icons, two countdowns.
- The table: the gun's location is marked for 10 seconds.
- The victim: ghost view.

## Design notes

- The penalty must be **legible** before the shot. The tutorial and the HUD should warn: "You are aiming at an investigator."
- The game should not prevent the shot. The player must be able to make the mistake.
- The two sigils should be visible and breakable; the shooter is not instantly doomed.
- The killer should be able to exploit the chaos, but not puppeteer the shot.
- The innocent's death should be treated with weight, not a joke.

## Edge cases

| Case | Rule |
|---|---|
| Shooter is a killer | No penalty |
| Victim is a killer | No penalty |
| Shooter and victim are both killers | No penalty (friendly fire between killers is allowed) |
| Shooter disconnects | Sigils remain on the body; gun drops |
| Both sigils broken | Shooter survives; gun can be reclaimed |
| One sigil completes | Shooter dies; gun remains |
| Shot kills the last investigator | Killers win immediately |

## Related

- [[Pistols]]
- [[Health and Damage]]
- [[Voting Overview]]
- [[Endings]]
- [[Win Conditions]]
