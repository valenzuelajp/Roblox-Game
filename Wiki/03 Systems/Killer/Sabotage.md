---
title: "Sabotage"
aliases:
  - "Killer Sabotage"
  - "Dirty Tricks"
tags:
  - systems
  - killer
  - sabotage
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The killer's sabotage kit: false clues, flickers, locks, whispers, and cold spots, with cooldowns and counterplay."
related:
  - "[[Killer Role]]"
  - "[[Mark and Cooldown]]"
  - "[[Clue Placement]]"
  - "[[Investigator Items]]"
---

# Sabotage

## Why sabotage

The killer cannot win by marks alone. The investigators have 30 minutes, five puzzle families, and a shared brain. Sabotage is how the killer **buys time**, **sows doubt**, and **breaks the team's rhythm** without instantly killing anyone.

Sabotage is not a second kill system. It is a **tempo system**.

## The kit

| Sabotage | Effect | Cooldown | Limit |
|---|---|---|---|
| **False clue** | Plants one prop supporting a wrong answer | Once per match | 1 |
| **Flicker** | Kills lights in one wing for 15s | 90s | — |
| **Lock** | Locks one door for 20s | 60s | — |
| **Whisper** | Plays a cult whisper near a player | 45s | — |
| **Cold spot** | Drops temperature in one room for 30s | 60s | — |

All sabotage is **server-authoritative**. The client requests; the server validates range, cooldown, and target.

## False clue

The false clue is the killer's most powerful tool. It is a physical prop that supports a **wrong answer** to one Case File task.

Rules:

- The killer chooses the task and the wrong answer.
- The prop spawns in a valid container in a room the killer can reach.
- The prop looks like a real clue but has a **tell** that the item clue can expose.
- The killer cannot steal, move, or destroy a true clue.
- The false clue is **one per match**.
- The false clue cannot be placed in the same room as the item clue.
- The false clue cannot be placed in the staging room (too obvious).

The false clue is how the killer makes the free clue **look** reliable while the item clue contradicts it. The team must decide which to trust.

## Flicker

The lights in one wing die for 15 seconds.

- The killer chooses a wing, not a room.
- Emergency lights and candles remain.
- The UV torch and flashlight still work.
- The killer can see in the dark (cult sight) but not through walls.
- The flicker is announced by a low hum and a single light pop.

Counterplay: memorize the layout, carry a light, use the map item, stay in groups.

## Lock

The killer locks one door for 20 seconds.

- The door must be a standard door, not a sealed ritual door.
- The lock is visible: a red antler glyph on the handle.
- The lockpick opens it instantly.
- The killer cannot lock a door on a player who is inside a dead-end with no other exit (anti-soft-lock).
- The lock can be broken by two players together in 5 seconds.

Counterplay: lockpick, secret passage, second route, or wait.

## Whisper

The killer plays a cult whisper near a player.

- The whisper is directional.
- It says one of a small set of lines: "This way," "He is in the study," "Do not trust the letter."
- It is a **bait** tool, not a voice.
- The whisper is not the killer's real voice; it cannot be recognized.
- The whisper has a visual cue (a faint red glyph) for deaf players.

Counterplay: ignore it, follow it carefully, or use it to bait the killer.

## Cold spot

The killer drops the temperature in one room for 30 seconds.

- The victim's breath fogs.
- The room's candles dim.
- A cold spot often marks a hidden clue or a secret passage, so it can be used as a **false lead**.
- The cold spot does not damage players.

Counterplay: the cold spot is a clue in itself; the killer may be nearby.

## Limits

- The killer cannot use sabotage during the first 30 seconds of the investigation.
- The killer cannot use sabotage in the shop, lobby, or safe zone.
- The killer cannot stack two sabotage effects on the same room.
- The killer cannot use sabotage while downed or detained.
- The killer cannot sabotage the ritual altar directly; the anchors are the target.

## Counterplay summary

| Sabotage | Best counter | Item |
|---|---|---|
| False clue | Compare with item clue | Any task item |
| Flicker | Light source, memory, map | UV Torch, Flashlight, Map |
| Lock | Lockpick, secret passage | Lockpick |
| Whisper | Ignore, verify, bait | Notebook, Recorder |
| Cold spot | Search the room | Magnifying Glass, UV Torch |

## Design rules

1. **Sabotage creates decisions, not damage.** No sabotage should directly kill.
2. **Every sabotage has a tell.** The team can learn to read it.
3. **The killer cannot soft-lock.** Locks and false clues have limits.
4. **The killer cannot spam.** Cooldowns are long enough to matter.
5. **The killer cannot hide forever.** Sabotage leaves traces the item clues can expose.

## Telemetry

- Sabotage use per match.
- False clue success rate (did the team choose the wrong answer?).
- Flicker deaths (did anyone die in the dark?).
- Lock escapes (how often was the lockpick used?).
- Whisper follow rate.
- Cold spot search rate.

## Related

- [[Killer Role]]
- [[Mark and Cooldown]]
- [[Clue Placement]]
- [[Investigator Items]]
- [[Puzzle System Overview]]
