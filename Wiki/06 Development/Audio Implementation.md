---
title: "Audio Implementation"
aliases:
  - "Sound Design Implementation"
  - "Audio Tech"
tags:
  - development
  - audio
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How the noir soundscape is built in Roblox: buses, spatialization, reverb zones, dynamic music, voice, and accessibility."
related:
  - "[[Audio Direction]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[Performance Budgets]]"
  - "[[Asset Pipeline]]"
---

# Audio Implementation

## The soundscape in one sentence

**Rain is the baseline; the house is the instrument; silence is the threat.**

The audio system has six layers. Each layer has its own bus, its own mix target, and its own gameplay job.

| Layer | Job | Examples |
|---|---|---|
| **Weather** | Mask and reveal | Rain, thunder, wind, hail |
| **House** | Orient and unsettle | Clock, settling wood, pipes, bells |
| **Human** | Inform | Footsteps, breathing, cloth, doors |
| **Ritual** | Pressure | Chant, bell, candles, heartbeat |
| **Music** | Emotion | Noir strings, piano, low brass |
| **UI** | Feedback | Typewriter, paper, clicks, stamps |

## Buses and mix targets

```text
Master
  ├── Music        -16 LUFS, ducked -6 dB under voice
  ├── Ambience     -20 LUFS
  ├── SFX          -14 LUFS short, -18 LUFS sustained
  ├── Voice        0 dB reference, compressed
  ├── UI           -12 LUFS
  └── Accessibility cues (never ducked)
```

- Use `SoundGroup` for each bus.
- Master limiter on `Master`; no clipping.
- Duck music and ambience by 6 dB when voice chat is active.
- Accessibility cues bypass ducking and are always audible.

## Spatialization

- All diegetic sounds are `Sound` objects parented to a `Part` or `Attachment`.
- Use `RollOffMode = InverseTapered` for most sounds; `Linear` for UI and ritual cues.
- `RollOffMinDistance`: 5 studs for footsteps, 15 for voices, 30 for music, 60 for thunder.
- `RollOffMaxDistance`: 40 for footsteps, 80 for voices, 150 for ritual, 300 for thunder.
- Walls attenuate via `SoundService.AcousticSimulationEnabled` when available, or a manual occlusion check.
- Never rely on stereo panning for gameplay-critical cues. Every cue has a visual subtitle.

## Reverb zones

| Zone | Reverb | Character |
|---|---|---|
| Foyer | Large hall, 3.5s decay | Grand, empty |
| Ballroom | Large hall, 4.5s | Ghostly |
| Chapel | Cathedral, 6s | Sacred, wrong |
| Cellar | Small stone room, 1.2s | Close, wet |
| Attic | Wooden room, 0.8s | Dry, cramped |
| Outdoors | Open, 0.4s + wind | Exposed |
| Secret passage | Tight, 0.6s | Claustrophobic |

- Use `ReverbSoundEffect` per zone, blended by region.
- Crossfade reverb over 0.5s when crossing a zone boundary.
- The chapel reverb is intentionally too long. It should feel bigger than the room.

## Footsteps

- Surface tags: `wood`, `stone`, `carpet`, `marble`, `metal`, `gravel`, `water`, `snow`.
- Each character has a footstep `Sound` with 4–6 random variants.
- Volume and pitch vary ±10%.
- The killer's footsteps are not different. Fair play.
- Running is louder than walking; crouching is quieter but slower.
- The rain masks footsteps outdoors and near windows.

## Doors and props

- Every door has: open, close, locked rattle, forced bang, and key click.
- Drawers, cabinets, and chests have search loops.
- The evidence board has pin, paper, string, and stamp sounds.
- The shop cabinet has drawer slides, coin counts, and a bell.
- The ritual altar has candle light, cloth, and a low hum.

## Dynamic music

Music is stems, not tracks:

| Stem | When |
|---|---|
| **Rain** | Always, very low |
| **Strings** | Investigation I, low intensity |
| **Piano** | Discovery, clue found |
| **Low brass** | Killer nearby, ritual progress |
| **Choir** | Ritual, reveal, Last Hunt |
| **Silence** | After a death, for 3s |

- Intensity parameter 0–1 driven by: tasks solved, deaths, ritual progress, time remaining.
- Crossfade stems over 2s; never hard-cut except the post-death silence.
- The Last Hunt uses a single 60s cue with a hard ending at dawn.
- Music must loop seamlessly; no audible seam at 30s.

## Ritual audio

The ritual is the audio climax:

1. **Channel start:** a low heartbeat, once per second.
2. **0–10s:** candle flicker, paper, whispered Latin-ish syllables (fictional, no real prayer).
3. **10–20s:** the bell begins to hum; the choir joins.
4. **20–30s:** the heartbeat doubles; the room tone rises.
5. **Success:** a single bell strike, then 2s of silence.
6. **Interrupt:** the sound cuts to a dry click; the heartbeat stops.
7. **Failure:** a cracked bell, a low detuned chord.

The ritual audio must be audible from the chapel door so nearby players know it is happening.

## Voice chat

- Roblox spatial voice is the intended social layer. It is opt-in and never required.
- Voice is attenuated by walls and floors; the chapel has a long tail.
- The killer's voice has no effect. A voice changer would be an unfair tell.
- Voice activity indicators are visible to nearby players only.
- Dead players cannot speak to the living. Dead chat is text-only.
- Moderation is platform-level plus game-level reporting. See [[Moderation and Safety]].

## Accessibility

- **Subtitles** for all diegetic speech, ritual lines, and important sounds: `[bell tolls]`, `[door locks]`, `[sigil hum]`.
- **Visual cues** for audio-only signals: a screen-edge pulse for the sigil, a bell icon for the ritual, a footprint icon for nearby steps.
- **Mono mix** option.
- **Separate volume sliders** for master, music, ambience, SFX, voice, UI.
- **Reduce startle** option: lowers thunder and jump-scare peaks by 12 dB.
- **No audio-only clues.** Every audio clue has a text card.
- **Photosensitivity:** lightning flashes are capped at 3 Hz and can be disabled.

## Performance

- < 32 simultaneous voices.
- < 8 reverb zones active at once.
- < 40 MB audio memory at launch.
- Stream long music tracks; do not preload the entire soundtrack.
- Cull sounds beyond 150 studs except thunder and the ritual bell.
- Use `Sound.PlaybackSpeed` sparingly; it changes pitch and can sound comic.

## Implementation notes

- `SoundService.RespectFilteringEnabled = true`.
- Server decides one-shot gameplay sounds (gunshot, sigil break, ritual success); client may play local UI sounds.
- A gunshot is server-broadcast to all clients in the match; it is a map-wide information event.
- The ritual bell is server-broadcast; the killer hears it too.
- Do not put jumpscares in the first 60 seconds. The player is still learning the controls.

## Related

- [[Audio Direction]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Performance Budgets]]
- [[Asset Pipeline]]
