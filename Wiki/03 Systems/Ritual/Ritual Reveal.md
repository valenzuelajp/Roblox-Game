---
title: "Ritual Reveal"
aliases:
  - "The Reveal"
  - "Killer Reveal"
tags:
  - systems
  - ritual
  - reveal
  - status/locked
status: locked
updated: 2026-11-04
summary: "What happens when the ritual completes: the killer outline, the fifth letter, the exit unlock, and the social aftermath."
related:
  - "[[Ritual Overview]]"
  - "[[Last Hunt]]"
  - "[[The Killer]]"
  - "[[Hollow Word]]"
---

# Ritual Reveal

## The moment

The channel completes. For **five seconds**, every killer is outlined in **ritual red** through walls. Their name appears in the ritual UI. The chapel candles flare. The bell rings once.

Then the outline fades. The killers are known, but they are still dangerous.

## What the reveal shows

| Information | Shown | Duration |
|---|---|---|
| Killer outline through walls | Yes | 5 seconds |
| Killer name in UI | Yes | Permanent (until match end) |
| Killer role (Hand/Choir) | Yes | Permanent |
| Killer health | No | — |
| Killer inventory | No | — |
| Killer position after 5s | No | — |

The reveal is **team-wide**. Every living investigator sees it. Dead spectators see it too, but cannot communicate it to the living.

## The fifth letter

The altar produces the fifth letter of the Hollow Word. It is shown:

- In the ritual UI.
- On the physical altar as a glowing letter.
- In the Case File's letter row.

The letter is **positional**: it is the fifth letter, not a random letter. The first four come from the tasks.

If the ritual is completed by a killer (they channeled), the letter still appears. The killer learns it too. The reveal exposes them, but they gain the word.

## Exit unlock

The gate at the end of the drive unlocks. The lock is a brass five-letter combination. The word can be entered by any player who reaches it. The killer can also enter it and escape, but a killer who escapes before the investigators does not win; the cult needs the investigators to stay.

The exit has three states:

1. **Locked** — before the ritual.
2. **Unlocked** — after the ritual; the word is required.
3. **Open** — the word has been entered; the gate swings open.

## The social aftermath

The reveal changes the table:

- The investigators no longer need to deduce. They need to **act**.
- The killers no longer need to hide. They need to **survive**.
- The fate vote (if enabled) happens immediately after the reveal.
- The Last Hunt begins at the same moment.

The reveal is the **midpoint of the endgame**, not the end. The investigators still have to stop the killers and escape. The killers still have a chance to reach parity or run out the clock.

## If the ritual is completed by a killer

A killer can channel the ritual to:

- Learn the fifth letter.
- Force the reveal early, before the investigators are ready.
- Trigger the Last Hunt while the investigators are split.

This is a high-risk, high-reward play. The killer is exposed, but they control the timing.

## If the ritual is interrupted

No reveal. No fifth letter. The chapel may seal for 90 seconds after three failures. The killers remain hidden. The investigators must retry or use the UV fallback.

## Presentation

- **Camera:** slow push toward the altar; the channeler's hands are visible.
- **Audio:** the rain stops; a low choir note; the bell.
- **UI:** the five candles become five letters; the killer's name burns into the case file.
- **Accessibility:** the reveal has a text banner, a sound cue, and a screen-reader announcement.

## Design notes

- The reveal must be **unmissable** but not **long**. Five seconds is enough.
- The outline should not be so bright that it ruins the killer's escape; it is a heads-up, not a wallhack for the whole endgame.
- The killer's name should be shown in the same typewriter font as the Case File. It is a document, not a kill feed.
- Do not play a triumphant sting. The reveal is a door opening, not a victory.

## Related

- [[Ritual Overview]]
- [[Last Hunt]]
- [[The Killer]]
- [[Hollow Word]]
- [[Endings]]
