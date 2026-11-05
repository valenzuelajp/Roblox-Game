---
title: "Anti-Cheat"
aliases:
  - "Exploit Prevention"
  - "Security"
tags:
  - systems
  - technical
  - security
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Threat model, server-side checks, detection signals, response ladder, and the rule that no anti-cheat may punish a laggy player."
related:
  - "[[Server Authority]]"
  - "[[Networking and Remotes]]"
  - "[[Moderation and Safety]]"
---

# Anti-Cheat

> [!important] Fairness rule
> Anti-cheat must never punish a player for lag, accessibility settings, or a low-end device. Validate the **action**, not the frame rate.

## Threat model

| Threat | Example | Impact |
|---|---|---|
| **Answer reading** | Client reads the scenario card or clue manifest | Trivializes the case |
| **Killer identity leak** | Client reads the killer ID before the ritual | Ruins the social game |
| **ESP / wallhack** | Client renders players through walls | Unfair info |
| **Aimbot** | Client snaps to heads | Unfair combat |
| **Speed / fly** | Client moves faster or through walls | Unfair escape |
| **Remote spam** | Client floods search/submit/fire | Server lag |
| **Item duplication** | Client spawns items | Economy break |
| **Vote stuffing** | Client votes multiple times | Unfair outcome |
| **Timer manipulation** | Client changes the clock | Phase skip |
| **Ghost leak** | Dead player uses voice/text to living | Info leak |

## Server-side checks

### Movement

- Compare position delta to max speed × delta time + tolerance.
- Reject vertical movement above the allowed jump height.
- Reject teleports beyond 40 studs unless a known transition (stairs, passage, shift).
- Log three rejections in 5 seconds as a signal.

### Search and interaction

- Distance ≤ 8 studs.
- Line of sight for containers behind glass? No; use a simple raycast.
- Container exists and is not already searched.
- Item requirement checked server-side.

### Combat

- Fire rate ≤ 0.8s.
- Ammo > 0.
- Range ≤ 100 studs; effective ≤ 60.
- Raycast from the shooter's server position.
- Friendly fire rule applied server-side.

### Marks

- Range ≤ 40 studs.
- Line of sight.
- Cooldown ≥ 45s.
- Not in the first 60s.
- Victim not immune (10s post-break).
- One killer per cooldown (shared).

### Votes

- Voter alive.
- One vote per player per window.
- Candidate valid.
- Window open.
- Tie rule applied server-side.

### Secrets

- Scenario card never replicated to clients.
- Killer identity sent only at the ritual reveal.
- Clue manifest sent only as discovered entries.
- Hollow Word checked server-side at the gate.

## Detection signals

- Movement rejection rate.
- Remote calls per second.
- Search attempts on non-existent containers.
- Submissions with impossible task states.
- Shots with impossible angles.
- Item pickups without a drop.
- Votes with invalid candidates.
- Client memory anomalies? (Not reliable; do not use as a sole signal.)

## Response ladder

| Level | Signal | Response |
|---|---|---|
| 1 | One rejection | Ignore (lag) |
| 2 | Repeated rejections | Throttle the remote; log |
| 3 | Pattern across a match | Flag the account for review |
| 4 | Confirmed exploit | Remove from match; apply platform report |
| 5 | Repeated confirmed exploits | Temporary or permanent ban per platform policy |

Never auto-ban on a single signal. Never punish accessibility settings. Always allow an appeal path through Roblox support.

## Ghost leak prevention

- Dead chat is text-only and separate.
- Dead players cannot use proximity voice.
- Dead players cannot ping the living.
- Dead players cannot see the killer's identity until the ritual.
- Party voice (external) cannot be controlled; the game can only discourage it in the rules and detect suspicious behavior.

## Reporting

- In-match report button.
- Category: cheating, harassment, voice abuse, griefing, spoilers.
- Include match ID, timestamp, and relevant telemetry.
- Confirm to the reporter; never reveal the outcome.

## Related

- [[Server Authority]]
- [[Networking and Remotes]]
- [[Moderation and Safety]]
