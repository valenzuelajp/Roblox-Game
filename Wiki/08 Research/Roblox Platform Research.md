---
title: "Roblox Platform Research"
aliases:
  - "Roblox Notes"
  - "Platform Research"
tags:
  - research
  - roblox
  - platform
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "What Roblox rewards, allows, and limits: audience, discovery, monetization, voice, devices, moderation, publishing, and analytics — and what it means for Blackwood Lodge."
related:
  - "[[Research MOC]]"
  - "[[Monetization and Progression Research]]"
  - "[[Publishing Checklist]]"
  - "[[Performance Budgets]]"
---

# Roblox Platform Research

## The question

What does Roblox reward, allow, and limit, and how should those constraints shape the game?

## Audience and discovery

Roblox is a broad platform with a young core audience and a long tail of older players. Discovery is driven by:

- **Thumbnails and icons.** The first impression is a image, not a description.
- **Title and tags.** Search and recommendations read them.
- **Playtime and retention.** The algorithm favors games players return to.
- **Social proof.** Friends playing, favorites, likes.
- **Updates.** Regular updates signal a live game.
- **Monetization signals.** Roblox takes a share; games need revenue to sustain updates.

### Implications

- The **thumbnail** must show the lodge, the rain, and a silhouette — not a crowded collage.
- The **title** must be searchable and evocative. *Blackwood Lodge* is the working title.
- The **first 60 seconds** must teach the fantasy and the goal.
- The game needs a **content cadence**: one scenario per patch, one seasonal event per quarter.
- The **store page** must be honest: no fake gameplay, no misleading rewards.

## Voice chat

Roblox spatial voice:

- Is **opt-in**.
- Requires **age verification** in many regions.
- Requires a **verified phone number** or eligible account.
- Is **not available on all devices**.
- Is moderated by Roblox, but game-level moderation is still needed.

### Implications

- Voice is **recommended, never required** (D-020).
- Text fallback must be first-class.
- The game must detect voice availability and explain it without shaming.
- Voice moderation is a shared responsibility: Roblox tools + game report flow + community rules.

## Devices and performance

Roblox runs on:

- PC (Windows/macOS).
- Mobile (iOS/Android).
- Console (Xbox, PlayStation).
- VR (limited).

Performance varies widely. A 10-player social deduction game with a large map must budget for:

- **Mobile first.** 30 FPS target, low draw calls, small textures.
- **Streaming.** Enable `StreamingEnabled` with a 512-stud radius.
- **Part count.** <15k visible parts, <250 unique meshes.
- **UI.** <150 draw calls, scalable text, touch targets.
- **Audio.** <32 voices, <40 MB.
- **Load time.** <8 seconds on mid-tier mobile.

## Monetization

Roblox monetization options:

- **Game passes** (permanent access or perks).
- **Developer products** (consumable purchases).
- **Private servers** (subscription).
- **Premium payouts** (engagement-based).
- **Engagement-based payouts** (qualified engagement).
- **Robux-to-Robux**? No; Robux is the platform currency.

### Implications

- **Cosmetic-only** (D-023): outfits, hats, glasses, gloves, gun skins, lobby themes, emotes, casebook skins.
- **No loot boxes, no gambling, no pay-to-win.**
- **Private servers** are a clean paid feature for friend groups.
- **No ads** inside the match.
- **Transparent pricing** and no fake scarcity.
- **Roblox policy** must be checked before every store update.

## Moderation and safety

Roblox provides:

- Chat filtering.
- Voice moderation.
- Report and block tools.
- Age ratings and content descriptors.
- Experience guidelines.

The game must add:

- A clear code of conduct.
- A report flow that captures match ID, timestamp, and category.
- Mute/block/leave.
- A streamer mode.
- A dead-chat rule that prevents ghost leaks.
- A policy for hate speech, harassment, and sexual content.

## Publishing

The publish flow:

1. Create the experience in Roblox Studio.
2. Set name, description, genre, tags, and thumbnails.
3. Configure permissions and age rating.
4. Enable voice chat if eligible.
5. Set up monetization.
6. Test on mobile, console, and PC.
7. Publish to private, then public.
8. Monitor analytics, reports, and crashes.

### Implications

- The **publishing checklist** is a gate, not a formality.
- **Staging** must mirror production.
- **Rollback** must be possible.
- **Patch notes** must be player-readable.

## Analytics

Roblox provides:

- DAU/MAU.
- Session length.
- Retention (D1, D7, D30).
- Monetization metrics.
- Performance and crash data.
- Custom events via `AnalyticsService` (limited).

### Implications

- Use Roblox analytics for platform-level metrics.
- Use custom telemetry for match-level metrics.
- Respect privacy and platform rules.
- Do not measure anything that could identify a player.

## What Roblox is not good at

- **Long, quiet, atmospheric horror.** The platform rewards fast, readable fun.
- **Complex UI.** Mobile screens are small; the Case File must be readable.
- **Voice-first design.** Voice is optional and uneven.
- **Persistent worlds.** The match must reset cleanly.
- **Mature themes.** Keep the horror implied, not explicit.

## Design implications for Blackwood Lodge

1. **Readable in 60 seconds.** The lobby, role card, and first task must be obvious.
2. **Mobile-first UI.** The evidence board must work on a phone.
3. **Short matches.** 30 minutes is the target; 45 is the ceiling.
4. **Cosmetic-only.** Trust is the monetization strategy.
5. **Voice-optional.** Text is a first-class path.
6. **Live content.** New scenarios and seasonal events keep discovery alive.
7. **Moderation is a feature.** A safe lobby is a retention feature.

## Open questions

- **RQ-09:** What is the actual voice-verification rate in our target regions?
- **RQ-10:** Which device mix will dominate the first month?
- **RQ-11:** Does Roblox discovery reward a 30-minute match or a 15-minute one?
- **RQ-12:** What is the platform's current policy on horror and cult imagery?

## Related

- [[Monetization and Progression Research]]
- [[Voice Chat Research]]
- [[Publishing Checklist]]
- [[Performance Budgets]]
