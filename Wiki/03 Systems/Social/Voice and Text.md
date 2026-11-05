---
title: "Voice and Text"
aliases:
  - "Voice Chat"
  - "Text Chat"
  - "Communication"
tags:
  - systems
  - social
  - accessibility
  - status/locked
status: locked
updated: 2026-11-04
summary: "How voice and text work in Blackwood Lodge: spatial voice, text fallback, proximity, moderation, and the rule that no mechanic may require voice."
related:
  - "[[Communication Rules]]"
  - "[[Moderation and Safety]]"
  - "[[Dead Chat]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
---

# Voice and Text

> [!info] Locked rule
> Voice is **recommended, never required** (D-020). Roblox spatial voice is the intended experience. Text fallback must always work. No mechanic may require voice.

## Why voice is not mandatory

Roblox voice chat is **opt-in** and requires:

- Age verification.
- A compatible device.
- A microphone.
- A parent/guardian account setting for minors.
- A stable connection.

A game that requires voice would exclude a large part of the Roblox audience. Blackwood Lodge is a social deduction game, but the social read must work in text too.

## The voice model

- **Spatial voice:** voices attenuate with distance and walls. A player in the chapel cannot hear a whisper in the attic.
- **Proximity:** the default range is about 40 studs, reduced by walls and floors.
- **Open mic:** no push-to-talk requirement, but the player can enable push-to-talk in settings.
- **Voice indicator:** a small icon shows when a player is speaking. It does not show who is listening.
- **No global voice:** there is no team-wide voice channel for investigators. The killers have a private text channel, not voice.
- **Dead chat:** text only. See [[Dead Chat]].

## The text model

- **Proximity text:** chat bubbles appear above the player's head and fade after 8 seconds.
- **Case chat:** a shared text log in the Case File UI, visible to all living players. It is asynchronous; it is not a meeting.
- **Evidence board:** pins, notes, and strings. The board is the team's shared memory.
- **Pings:** a contextual ping (look, danger, clue, ritual) with a cooldown.
- **Emotes:** cosmetic; no gameplay information.
- **Subtitles:** all voice lines from NPCs and the narrator are subtitled.

## The equivalence rule

Every social action must have a text equivalent:

| Voice action | Text equivalent |
|---|---|
| "I found a clue in the study." | Case chat message + ping on the study. |
| "The killer is in the ballroom." | Danger ping + chat message. |
| "Help me with the sigil." | Sigil ping + chat message. |
| "Vote for me." | Vote UI + chat message. |
| "Don't trust them." | Suspect note on the evidence board. |

No puzzle, ritual, or vote may require a spoken word. The Hollow Word is entered in a UI, not spoken.

## Voice and the killer

The killer can use voice normally. The killer's voice is not disguised by the game. If the killer wants to lie, they lie with their own voice.

The killer's private channel is **text only**:

- The Hand and The Choir can type to each other.
- The channel is not visible to investigators.
- The channel is logged for moderation.
- The channel is disabled during the Last Hunt? Proposed: no, it stays on; the killers need coordination.

## Moderation

- Roblox's voice moderation applies.
- Text chat is filtered by Roblox's chat filter.
- The game adds a **report** button for voice and text.
- Slurs, harassment, and doxxing are bannable.
- The game does not record voice. It records text and game events for reports.
- A player can mute another player individually.
- A player can disable voice entirely and still play.

## Accessibility

- **Text-to-speech:** optional; reads chat bubbles and case chat aloud.
- **Speech-to-text:** optional; converts the player's voice to text in case chat (platform permitting).
- **Subtitles:** on by default for NPCs and narrator.
- **Visual voice indicator:** a ring around the speaker.
- **Push-to-talk:** configurable.
- **Volume sliders:** voice, SFX, music, ambience.
- **Mono audio:** for single-sided hearing.
- **Colorblind-safe indicators:** voice icons use shape, not just color.

## Safety

- No voice chat with players outside the match.
- No external links in chat.
- No real names required.
- No pressure to use voice.
- The lobby warns that the game is a social deduction game with deception.
- Players can leave at any time; the match continues with a bot or a spectator.
- Minors are protected by Roblox's default settings.

## Design notes

- **Voice is the premium experience; text is the complete experience.**
- **The game should never say "you need a mic."**
- **The best text players should be as dangerous as the best voice players.**
- **The killer's private text channel is a design choice, not a technical limitation.** It keeps the partners coordinated without giving them a voice advantage.

## Related

- [[Communication Rules]]
- [[Moderation and Safety]]
- [[Dead Chat]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
