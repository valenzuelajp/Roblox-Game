---
title: "Sigil System"
aliases:
  - "The Mark"
  - "Sigil Kill Loop"
tags:
  - systems
  - killer
  - sigil
  - status/locked
status: locked
updated: 2026-11-04
summary: "The full mark-to-sigil-to-rescue loop: how the killer marks, where the sigil spawns, how long the countdown lasts, and how anyone can break it."
related:
  - "[[Killer Role]]"
  - "[[Mark and Cooldown]]"
  - "[[Puzzle System Overview]]"
  - "[[Health and Damage]]"
---

# Sigil System

## The loop

```text
KILLER MARKS
    ↓
SIGIL SPAWNS (random reachable spot)
    ↓
COUNTDOWN STARTS (default 90s)
    ↓
ANYONE SOLVES THE SIGIL PUZZLE
    ↓
SIGIL BREAKS → VICTIM SAVED
```

If the countdown reaches zero:

```text
SIGIL COMPLETES → VICTIM DIES
```

The sigil is the game's central tension. It is not a stealth kill; it is a **public rescue timer**.

## Marking

The killer selects a living investigator within:

- **Range:** 40 studs.
- **Line of sight:** clear.
- **State:** not already marked, not in a safe zone, not within the first 60 seconds.

The mark is instant. The victim sees a red flash and hears a whisper. The killer sees a confirmation.

## Sigil spawn

The sigil spawns at a **random valid anchor** on the map:

- At least 25 studs from the victim.
- At least 15 studs from the killer.
- Reachable by at least two routes.
- Not inside a locked room that cannot be opened.
- Not in the safe zone.
- Not in the same room as another active sigil.

The spawn is server-authoritative and seed-driven. The sigil is visible to everyone:

- A red antler glyph on the floor or wall.
- A low hum within 20 studs.
- A directional pulse in the HUD for the victim.
- A marker on the map item (if the player has it).

## The countdown

Default: **90 seconds**.

Tuning range: **75–105 seconds**.

The countdown is shown:

- In the victim's HUD.
- On the sigil itself (five candles burn down).
- In the team's ritual UI (a small red icon).

The countdown pauses if the server is paused (e.g., a player joins mid-match). It does not pause for combat, blackout, or the midnight shift.

## Breaking the sigil

Anyone can interact with the sigil:

- The victim.
- Another investigator.
- The killer (to defend or fake-help).
- A spectator? No.

The interaction starts a **puzzle** from one of the five families at **medium** difficulty. The puzzle is generated from the match seed and is different each time.

On success:

- The sigil shatters.
- The victim is saved.
- The victim gains **10 seconds of mark immunity**.
- The breaker gains **5 Cinders**.
- The killer is notified: "The sigil was broken."

On failure:

- The puzzle resets.
- The countdown continues.
- The breaker can retry after 5 seconds.

## If the countdown ends

The victim dies:

- Investigators have 1 HP, so the mark is lethal.
- The death is **stylized**: the victim collapses, the sigil burns into the floor, the screen fades to the spectator view.
- The killer gains **15 Cinders**.
- The victim's items drop.
- The victim becomes a ghost (see [[Death and Spectator]]).

The sigil remains for 10 seconds as a scar, then fades.

## Defense

The killer can defend the sigil:

- Stand near it.
- Mark a rescuer (if the cooldown allows).
- Lock the door.
- Flicker the lights.
- Use the environment.

The killer cannot:

- Interact with the sigil puzzle.
- Destroy the sigil.
- Move the sigil.
- Mark the victim again while the sigil is active.

## Multiple sigils

- At 6–7 players, one sigil at a time.
- At 8–10 players, two killers can have one sigil each, but the shared cooldown means they cannot mark simultaneously.
- A victim can only have one sigil.
- A sigil must be broken or completed before the same killer can mark again.

## Anti-soft-lock

The generator guarantees:

- At least two routes to the sigil.
- At least one route is unlocked.
- The sigil is reachable without an item.
- The puzzle is solvable without voice.
- The sigil is not in the ritual site during the ritual.
- The sigil is not in the escape gate's safe zone.

If no valid anchor exists, the sigil spawns at the nearest valid anchor to the victim.

## Presentation

- **Visual:** red antler glyph, five candles, a pulse that syncs with the countdown.
- **Audio:** a low hum, a whisper, a heartbeat that speeds up.
- **UI:** a red icon with the victim's name and the countdown.
- **Accessibility:** the countdown has a text and audio cue; the sigil has a high-contrast mode; the puzzle has a text mode.

## Telemetry

- Marks per match.
- Sigil spawn distance from victim and killer.
- Time to break.
- Break rate by family.
- Deaths by sigil.
- False rescues (killer pretending to help).

## Design notes

- The sigil is a **shared problem**. The whole table should feel the clock.
- The killer should not be able to camp a sigil into an automatic kill. The puzzle window and multiple routes prevent it.
- The victim should not be helpless. They can break their own sigil.
- The countdown should be long enough for a rescue, short enough to matter. 90 seconds is the current default.
- The sigil is the game's signature visual. It should be iconic.

## Related

- [[Killer Role]]
- [[Mark and Cooldown]]
- [[Puzzle System Overview]]
- [[Health and Damage]]
- [[Death and Spectator]]
