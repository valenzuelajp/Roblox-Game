---
title: "Accessibility Research"
aliases:
  - "A11y Notes"
  - "Accessibility References"
tags:
  - research
  - accessibility
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "How to make Blackwood Lodge playable across vision, hearing, motor, cognitive, and speech differences — and what Roblox supports or limits."
related:
  - "[[Research MOC]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[UI and UX Overview]]"
  - "[[Voice Chat Research]]"
---

# Accessibility Research

## The question

How do we make a 30-minute social deduction game playable for more people without changing its identity?

## The principles

1. **No single sense is required.** Every critical cue has a visual and an audio form.
2. **No voice is required.** Text, pings, and the evidence board are first-class.
3. **No precise reflex is required.** Combat is deliberate; puzzles have time.
4. **No color-only information.** Icons, patterns, and labels carry meaning.
5. **No unreadable text.** Scalable, high-contrast, sans-serif, short lines.
6. **No forced motion.** Camera shake, flashing, and startle effects are adjustable.
7. **No hidden settings.** Accessibility is in the main menu, not buried.
8. **No penalty for using options.** Achievements and rewards remain available.

## Vision

| Barrier | Support |
|---|---|
| **Low vision** | Scalable UI, high contrast, large text, screen reader on menus, zoom on the Case File |
| **Blindness** | Screen reader for menus and case text; audio cues; text-to-speech for NPC testimony; puzzle text mode |
| **Color blindness** | Palette-safe signals; icons + patterns; no red/green-only |
| **Photosensitivity** | Reduce flashing, disable lightning strobe, cap brightness |
| **Motion sensitivity** | Reduce camera shake, FOV, head bob; static crosshair |

### Screen reader scope

At launch, screen reader support is realistic for:

- Menus.
- Role cards.
- Case File text.
- Item descriptions.
- NPC subtitles.
- Chat.

It is not realistic for:

- Fast combat.
- Spatial navigation.
- Reading the 3D room.

The game should be honest about this: "screen reader support for menus and case text; combat requires visual play."

## Hearing

| Barrier | Support |
|---|---|
| **Deaf/hard of hearing** | Subtitles for NPCs and voice lines; visual sound cues; vibration on mobile; chat |
| **Tinnitus** | Audio sliders; no forced high-pitched ringing |
| **Auditory processing** | Text alternatives; slower voice lines; replay |

Every critical sound has a visual cue:

- A door opens → door icon + directional indicator.
- A gunshot → muzzle flash + screen edge flash.
- A sigil hum → sigil icon + pulse.
- The ritual bell → bell icon + screen text.

## Motor

| Barrier | Support |
|---|---|
| **Limited dexterity** | Remappable controls; toggle aim; hold-to-interact option; larger touch targets |
| **One-handed play** | Gamepad layout; mobile layout; no simultaneous key chords |
| **Fatigue** | No rapid tapping; hold durations adjustable; auto-run option |
| **Tremor** | Aim assist option; wider interaction radius; no precision shooting required for core loop |

## Cognitive

| Barrier | Support |
|---|---|
| **Dyslexia** | Sans-serif font, short lines, text-to-speech, no timed reading |
| **ADHD** | Clear objectives, task tracker, "what to do next" hint |
| **Memory** | Case File and evidence board store information; no need to memorize |
| **Anxiety** | Safe lobby, mute/block, no forced voice, clear win conditions |
| **Language** | Short English prompts at launch; localization later |

## Speech

| Barrier | Support |
|---|---|
| **Non-speaking** | Text, pings, emotes, evidence board |
| **Speech disability** | No voice requirement; no penalty for text |
| **Social anxiety** | Text-first options; no "speak to vote" mechanic |

## Platform limits

- **Roblox UI** supports scaling, but not full screen-reader semantics.
- **Roblox voice** is opt-in and not on all devices.
- **Console** has limited text input; ping wheel and quick chat are essential.
- **Mobile** has small screens; the Case File must be readable at 5 inches.
- **VR** is not a launch target.

## The accessibility settings list

| Setting | Options | Default |
|---|---|---|
| **Text size** | 80–150% | 100% |
| **High contrast** | On/off | Off |
| **Colorblind palette** | Default / deuteranopia / protanopia / tritanopia | Default |
| **Subtitles** | On/off, size, background | On |
| **Visual sound cues** | On/off | On |
| **Reduce flashing** | On/off | Off |
| **Reduce motion** | On/off | Off |
| **Camera shake** | 0–100% | 50% |
| **Aim assist** | Off / low / high | Low |
| **Toggle aim** | On/off | Off |
| **Hold to interact** | On/off | On |
| **Puzzle time** | 100% / 125% / 150% | 100% |
| **Sigil timer** | 100% / 125% / 150% | 100% |
| **Voice** | On/off/listen-only | Off until consent |
| **Chat** | On/off | On |
| **Screen reader** | On/off (menus/case text) | Off |
| **Profanity filter** | On/off (platform) | On |

## Testing

- **Recruit testers** with different access needs.
- **Test on mobile** with large text and one hand.
- **Test without audio.**
- **Test without voice.**
- **Test in blackout** with the UV torch and visual cues.
- **Test the Case File** with a screen reader.
- **Test the ritual** with reduced motion and flashing.
- **Test the report flow** with a keyboard only.

## What we will not promise

- Full blind-playable combat.
- Full screen-reader support for 3D navigation.
- Voice-to-text transcription.
- Perfect colorblind safety for every palette.
- Console text chat parity.

Honesty is part of accessibility. A clear limitation is better than a broken promise.

## Open questions

- **RQ-25:** What is the actual screen-reader support in Roblox UI?
- **RQ-26:** Which settings do players use most?
- **RQ-27:** Can the Case File be fully navigable with a gamepad?
- **RQ-28:** What is the right text size for mobile?

## Related

- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[UI and UX Overview]]
- [[Voice Chat Research]]
- [[HUD]]
