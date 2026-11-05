---
title: "Death and Spectator"
aliases:
  - "Ghost Mode"
  - "Spectator"
  - "Death Rules"
tags:
  - systems
  - social
  - combat
  - status/open
status: open
updated: 2026-11-04
summary: "What happens when an investigator dies: the proposed ghost spectator mode, dead chat, no revive, rewards, and moderation."
related:
  - "[[Dead Chat]]"
  - "[[Win Conditions]]"
  - "[[Health and Damage]]"
  - "[[Open Questions]]"
---

# Death and Spectator

> [!warning] Open question O-001
> The final death rule is **open**. The recommendation is **Option A: ghost spectator + dead chat**. Do not implement it as locked until the project owner answers.

## The options

| Option | What happens | Trade-off |
|---|---|---|
| **A. Ghost spectator + dead chat** | Free-fly camera, dead-only chat, can watch the map and the living, cannot speak to the living, no revive. | Cleanest for moderation and pacing. |
| **B. Ghost with one haunt** | Same as A, but each ghost can trigger one distraction (a door slam, a flicker) once per match. | More fun for the dead, but can grief the living. |
| **C. Revive at the ritual** | Dead players return if the ritual completes, at 1 HP. | High drama, but breaks the killer's win condition. |

**Recommendation:** A. It is the cleanest for moderation, prevents voice leaks, and keeps the 30-minute match moving.

## Death in the fiction

Death is not gory. When an investigator dies:

- The screen desaturates.
- The rain gets louder.
- The body is not shown in detail; the camera pans to a fallen hat, a dropped notebook, a extinguished cigarette.
- A typewritten card appears: "The case loses a detective."
- The player becomes a **ghost**.

The ghost is not a zombie or a monster. It is the investigator's **shadow**: a translucent silhouette that can pass through walls but cannot touch the living.

## Ghost rules

| Can | Cannot |
|---|---|
| Fly freely through the map | Speak to the living |
| See the living and the killer | Open doors, search containers, pick up items |
| Read dead chat | Vote, shoot, or interact with the ritual |
| Watch the evidence board | Tamper with the board |
| See the killer's outline after the ritual | Reveal the killer to the living |
| Ping the dead chat | Ping the living |

The ghost camera is **free-fly** with a speed boost. It can clip through walls, but it cannot enter the killer's private channel or the server.

## Dead chat

Dead chat is **text only**:

- No voice. A ghost in a voice call with a living player is a leak.
- The chat is visible to all dead players.
- The chat is logged for moderation.
- The chat is disabled in the last 30 seconds? Proposed: no, keep it on for the ending.
- The dead can spectate the killer and comment, but the living cannot hear them.

See [[Dead Chat]].

## Why no revive?

Revive (Option C) sounds dramatic, but it breaks three things:

1. **The killer's work.** A mark that kills a player should matter.
2. **The win condition.** Parity is based on living players; revives make the count unstable.
3. **The social read.** A dead player who returns knows who killed them. That is a huge information advantage.

If revive is ever added, it should be a **post-launch mode**, not the default.

## Rewards for the dead

A dead investigator still earns:

- Cinders for the tasks they solved before death.
- Cinders for sigils they broke.
- A **spectator Cinder** bonus if they stay to the end (proposed +5).
- No survival bonus.

The killer earns Cinders for the kill, but not double for the same player.

## The killer's death

If a killer is reduced to 0 HP:

- They are **downed**, not immediately removed.
- They can be detained (cellar cell) or finished.
- If finished, they become a ghost with the same rules.
- The other killer (if any) continues.
- The match does not end until both killers are stopped or the clock runs out.

See [[Detain System]].

## Spectator UI

- **Free-fly camera:** WASD + mouse, speed boost, no collision.
- **Player list:** living/dead status, no role reveal until the ritual.
- **Case File overlay:** read-only.
- **Evidence board:** read-only.
- **Dead chat:** text.
- **Killer cam:** locked until the ritual reveal; after the reveal, the ghost can watch the killer.
- **Ending card:** the same as the living, with a "spectator" stamp.

## Accessibility

- Ghost mode has a "no free-fly" option for motion-sensitive players; it follows the living player's camera.
- Dead chat has text-to-speech.
- The death card is subtitled.
- The desaturation can be disabled.
- The ghost outline can be increased in contrast.

## Design notes

- **Death should feel like a loss, not a punishment.**
- **The dead should have something to do.** Dead chat and free-fly are enough.
- **The dead must not influence the living.** This is the hard rule.
- **The killer's death should be a setback, not the end.** Partners and the Last Hunt keep the match alive.
- **No gore.** The camera cuts away.

## Related

- [[Dead Chat]]
- [[Win Conditions]]
- [[Health and Damage]]
- [[Open Questions]]
