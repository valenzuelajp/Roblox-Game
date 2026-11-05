---
title: "Audio Direction"
aliases:
  - "Sound Design"
  - "The Sound of the Lodge"
tags:
  - world
  - audio
  - style
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "The soundscape of Blackwood Lodge: rain, thunder, house creaks, piano, bell, whispers, voice, music, mixing, and accessibility."
related:
  - "[[World MOC]]"
  - "[[Lighting and Weather]]"
  - "[[Art Direction]]"
  - "[[Tone and References]]"
---

# Audio Direction

> [!info] One-line style
> **A house breathing through the rain, with a jazz record playing in a room no one is in.**

## The audio layers

| Layer | Role | Examples |
|---|---|---|
| **Weather** | The clock and the mask | Rain, thunder, wind, hail |
| **House** | The antagonist | Creaks, settling, pipes, doors, clock |
| **Human** | The social game | Footsteps, breath, cloth, glasses, paper |
| **Ritual** | The threat | Bell, whisper, candle flutter, low drone |
| **Music** | The noir frame | Jazz, piano, strings, typewriter rhythm |
| **UI** | The document | Paper, stamp, pin, brass click, typewriter |

## Weather

- **Rain** is the baseline. It is never silent. It masks footsteps and creates a constant hiss.
- **Thunder** is a **cover event**. It rolls every 30–60 seconds and covers doors, marks, and gunshots.
- **Wind** is the house's voice. It moans in the chimney and rattles the windows.
- **Hail** starts at midnight and stops at 5:00 AM. It is a time cue.

## The house

- **Creaks** are randomized but not random: they follow the player's weight and the house's age.
- **Pipes** knock in the cellar and the kitchen. They can mask a conversation or a body being moved.
- **The clock** in the foyer is always ten minutes fast. Its tick is a tempo.
- **Doors** have three sounds: open, close, and **the one that closes by itself**.
- **The bell** is cracked. It rings once at midnight, once at the ritual, and once for a wrong gate word.
- **The piano** plays one note when the chapel opens. It is always in tune.

## Human sound

- **Footsteps** change by floor: marble, wood, carpet, stone, gravel, mud.
- **Breath** is audible when a player is marked or sprinting.
- **Cloth** rustles when a player turns quickly. It is a tell in a quiet room.
- **Paper** is the most important sound: a clue being found, a page being turned, a letter being unfolded.
- **Gunshot** is a **map-wide event**: a sharp crack, a ringing tail, a moment of silence.

## Ritual

- **The drone** starts at midnight. It is low, felt more than heard.
- **The whisper** follows the killer's mark. It is directional with headphones, subtitled for everyone.
- **The chant** is never intelligible. It is a rhythm, not words.
- **The bell** is the ritual's punctuation.
- **The Last Hunt** adds a heartbeat, a rising string, and the bell at double speed.

## Music

- **Lobby:** a 1940s jazz record, warm, slightly scratched.
- **Investigation:** sparse piano, brushed drums, a walking bass. Never louder than the rain.
- **Tension:** a held string, a low pulse, no melody.
- **Ritual:** a choir without words, a drone, a bell.
- **Last Hunt:** fast strings, a heartbeat, a brass stab.
- **Ending:** the record returns, slowed, then stops.

The music must **duck under voice chat** and under critical sound cues. It is a frame, not a wall.

## Mixing

| Priority | Source | Ducking |
|---|---|---|
| 1 | Voice chat | Never ducked |
| 2 | Gunshot, bell, sigil | Duck music |
| 3 | Footsteps, doors, clues | Duck music slightly |
| 4 | Rain, wind, house | Constant bed |
| 5 | Music | Ducks under 1–3 |

- **Spatial audio** for voice and footsteps. Walls attenuate; floors muffle.
- **Distance** matters: a gunshot is loud everywhere; a whisper is local.
- **No audio jumpscares** without a toggle.
- **Subtitles** for thunder, bell, whisper, gunshot, and ritual chant.

## Voice

- **Proximity voice** is the default. It is optional, never required.
- **Voice indicator** shows who is speaking and whether they are near.
- **Killer channel** is text-only, private, and never voice.
- **Dead chat** is text-only.
- **Voice moderation** uses Roblox systems plus game reports.

## Accessibility

- **Subtitles** for all narrative and critical audio.
- **Visual cues** for thunder (screen flash), bell (UI icon), whisper (subtitle + direction arrow).
- **Mono audio** option.
- **Music volume** and **SFX volume** separate.
- **Photosensitivity:** no rapid audio-driven flashes.
- **Hearing impairment:** no mechanic requires audio only. Every sound cue has a visual twin.

## Related

- [[World MOC]]
- [[Lighting and Weather]]
- [[Art Direction]]
- [[Tone and References]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
