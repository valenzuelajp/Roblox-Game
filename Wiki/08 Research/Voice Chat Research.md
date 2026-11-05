---
title: "Voice Chat Research"
aliases:
  - "Voice Notes"
  - "Spatial Voice Research"
tags:
  - research
  - voice
  - social
  - accessibility
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "How Roblox spatial voice works, why it cannot be required, and how Blackwood Lodge supports voice-first social play with a first-class text fallback."
related:
  - "[[Voice and Text]]"
  - "[[Roblox Platform Research]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[Moderation and Safety]]"
---

# Voice Chat Research

## The question

Can voice be the intended social experience without becoming a hard requirement?

**Answer: yes, if every social action has a text equivalent and the game never gates a mechanic on speaking.**

## How Roblox spatial voice works

- **Opt-in.** Players enable voice in settings.
- **Verification.** Many regions require age verification and a verified phone number.
- **Device support.** Not available on all devices; mobile support varies.
- **Spatial audio.** Voice attenuates with distance and walls.
- **Moderation.** Roblox filters and moderates voice; game-level reporting is still needed.
- **Team create.** Voice is per-experience, not per-team.

## Why voice matters

Voice is the best social deduction input because it carries:

- **Tone** — hesitation, confidence, fear.
- **Timing** — interruption, overlap, silence.
- **Identity** — the sound of a person, not a username.
- **Comedy** — the accidental confession, the bad lie.
- **Trust** — a voice is harder to fake than text.

A text-only social deduction game is possible, but it is a different game: slower, more deliberate, more readable. Blackwood Lodge should support both without making either feel like a penalty box.

## The four voice tiers

| Tier | Player state | What they can do |
|---|---|---|
| **V1 — Full voice** | Verified, microphone, voice enabled | Spatial voice, proximity chat, killer private voice? (text-only for killer) |
| **V2 — Listen-only** | Voice enabled, no microphone | Hear nearby voice; respond by text, pings, emotes |
| **V3 — Text-only** | No voice verification or no device support | Proximity text bubbles, case chat, evidence board, pings |
| **V4 — No chat** | Chat disabled by platform/parent | Pings, emotes, evidence board, pre-written quick chat |

The game must detect the tier and adapt the UI. It must never say "you cannot play without voice."

## The fallback design

### Proximity text

- Bubbles appear above the player, fade after 6 seconds.
- Text is filtered by Roblox chat rules.
- Nearby players see the bubble; far players do not.
- The killer sees the same bubbles; no special channel.

### Case chat

- A text channel for the whole lobby.
- Restricted to case-relevant messages? No — that is unenforceable and feels punitive.
- Rate-limited to prevent spam.
- Muted for dead players (dead chat is separate).

### Evidence board

- The board is the shared memory of the team.
- Players can pin clues, draw strings, and leave short notes.
- Notes are filtered and rate-limited.
- The killer can tamper with the board (one action per match).

### Pings and emotes

- Ping wheel: "come here," "danger," "I found something," "help," "yes," "no."
- Emotes: 8 at launch, cosmetic.
- Pings are visible through walls for 3 seconds; no audio required.

### Subtitles

- All voice lines from NPCs have subtitles.
- All critical audio cues have visual equivalents.
- Voice chat itself is not transcribed (privacy, cost, platform limits).

## Voice moderation

Voice is moderated by Roblox, but the game must:

- Provide a report flow with match ID and timestamp.
- Allow mute/block/leave.
- Detect and respond to reports of hate speech, harassment, and threats.
- Provide a "safe lobby" option that disables voice for the player.
- Never require a player to listen to voice to play.

## Voice leaks

The biggest voice risk is **information leaking to dead players or streams**:

- **Dead chat** must be text-only and separate. Ghosts cannot speak to the living.
- **Spectator voice** is disabled. Ghosts hear only other ghosts.
- **Streamer mode** hides the lobby code, player names, and role cards.
- **Killer private channel** is text-only; no voice channel.
- **Party voice** (external Discord) cannot be controlled; the game should not rely on it.

## Accessibility

- **Deaf and hard-of-hearing players** need visual cues for every sound.
- **Non-speaking players** need text, pings, and emotes.
- **Players with speech disabilities** may prefer text; never pressure them to speak.
- **Players in noisy environments** may be listen-only.
- **Players with social anxiety** may prefer text; the game should not punish them.

## Social dynamics

Voice creates:

- **Clusters.** Friends group up; strangers stand alone.
- **Eavesdropping.** A nearby conversation is content.
- **Pressure.** The silent player is suspicious.
- **Toxicity.** Accusation can become harassment.

Design responses:

- **Proximity text** gives silent players a presence.
- **Pings** let silent players participate in action.
- **Evidence board** lets silent players contribute knowledge.
- **Code of conduct** sets expectations.
- **Mute/block** is one click.

## Implementation options

| Option | Pros | Cons |
|---|---|---|
| **Roblox spatial voice** | Native, moderated, spatial | Opt-in, verification, device gaps |
| **Text chat only** | Universal, safe | Slower, less social |
| **External voice** | Full control | Not allowed/portable, moderation risk |
| **Voice-to-text** | Accessibility | Cost, latency, privacy, accuracy |

**Recommendation:** Roblox spatial voice + first-class text fallback. No external voice dependency. No voice-to-text at launch.

## Open questions

- **RQ-13:** What percentage of the target audience can use spatial voice?
- **RQ-14:** Does listen-only voice feel like a disadvantage in playtests?
- **RQ-15:** How do we detect and support V4 (no chat) players?
- **RQ-16:** What is the right report flow for voice incidents?

## Related

- [[Voice and Text]]
- [[Roblox Platform Research]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Moderation and Safety]]
