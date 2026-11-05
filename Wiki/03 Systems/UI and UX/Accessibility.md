---
title: "Accessibility"
aliases:
  - "A11y"
  - "Inclusive Design"
tags:
  - systems
  - ui
  - accessibility
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Vision, hearing, motor, cognitive, and speech accessibility: text mode, subtitles, colorblind palettes, remapping, photosensitivity, and voice-optional play."
related:
  - "[[UI and UX Overview]]"
  - "[[HUD]]"
  - "[[Voice and Text]]"
  - "[[Puzzle Fairness]]"
---

# Accessibility

> [!important] Non-negotiable
> A player must be able to complete a match without voice chat, without perfect color vision, without fast reflexes, and without a high-end device. Accessibility is a design constraint, not a post-launch patch.

## Vision

| Need | Solution |
|---|---|
| Low vision | Text size 100/125/150%; high-contrast HUD; scalable subtitles |
| Blind / screen reader | Case File, clues, prompts, and chat are narratable; audio cues for sigils and ritual |
| Colorblind | Protan, deutan, tritan palettes; patterns and icons, never color alone |
| Photosensitivity | Disable lightning strobe, muzzle flash bloom, and ritual pulses |
| Motion sensitivity | Reduce camera shake, rain streaks, and screen pulses |
| Dark scenes | Flashlight, UV torch, and a minimum ambient light floor; no pitch-black critical clue |

## Hearing

| Need | Solution |
|---|---|
| Deaf / hard of hearing | Subtitles for all voice lines and NPC dialogue; visual audio cues |
| Directional audio | On-screen arrows for gunshots, sigils, and whispers |
| Music cues | Visual phase banner and clock changes |
| Voice chat | Text fallback for every social action |

## Motor

| Need | Solution |
|---|---|
| Limited dexterity | Remappable controls; toggle instead of hold; larger hit targets |
| One-handed play | Full keyboard/mouse and controller remapping; no simultaneous button chords |
| Slow reaction | Puzzle timers +50%; sigil countdown +15s in accessibility mode; aim assist option |
| Mobile | Touch buttons, no hover-only interactions, no precise drag |

## Cognitive

| Need | Solution |
|---|---|
| New players | Tutorial, contextual tooltips, "detective's notebook" recap |
| Memory | Case File records every found clue; no need to memorize |
| Reading | Short sentences; plain language; optional "explain this clue" button |
| Overwhelm | Minimal HUD mode; hide non-critical UI |
| Anxiety | No jumpscares in the first 60 seconds; content warning; opt-out of startle effects |

## Speech

| Need | Solution |
|---|---|
| No microphone | Text chat, ping wheel, emotes, evidence board |
| Social anxiety | Text-first lobby; voice is opt-in |
| Language | Short English prompts at launch; localization-ready strings; no voice-only clues |

## Difficulty options

Accessibility mode changes **time and clarity**, not the puzzle's logic:

- Puzzle time +50%.
- Sigil countdown +15 seconds.
- Hint budget +1.
- Free clue text is more explicit (still eliminates only one option).
- No change to the killer's HP, bullets, or answers.

## Testing

- Test with colorblind players.
- Test with deaf players.
- Test with mobile-only players.
- Test with low-end devices.
- Test with text-only lobbies.
- Test with screen readers.
- Test with photosensitive players.

## Compliance

- Follow Roblox accessibility guidance.
- Use WCAG-inspired contrast targets for UI text.
- Do not rely on audio-only or color-only information.
- Provide a content warning for flashing lights, blood, and death.

## Related

- [[UI and UX Overview]]
- [[HUD]]
- [[Voice and Text]]
- [[Puzzle Fairness]]
