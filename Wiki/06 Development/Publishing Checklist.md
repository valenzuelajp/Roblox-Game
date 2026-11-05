---
title: "Publishing Checklist"
aliases:
  - "Launch Checklist"
  - "Roblox Publish"
tags:
  - development
  - publishing
  - launch
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Everything that must be true before Blackwood Lodge goes public on Roblox, from store page to moderation to rollback."
related:
  - "[[Build Roadmap]]"
  - "[[Monetization]]"
  - "[[Moderation and Safety]]"
  - "[[Spoiler Policy]]"
---

# Publishing Checklist

## 1. Roblox experience setup

- [ ] Experience name and description are final.
- [ ] Icon, thumbnails, and trailer are spoiler-free.
- [ ] Genre and tags are set.
- [ ] Age rating and content descriptors are accurate.
- [ ] Voice chat is enabled and explained.
- [ ] Private servers are configured.
- [ ] Badges are created and tested.
- [ ] Game passes and developer products are cosmetic-only.
- [ ] Place is published to the correct group.
- [ ] Studio MCP is disabled for the production place.

## 2. Store page

- [ ] Title: *Blackwood Lodge* (or final title).
- [ ] Tagline: one sentence, no spoilers.
- [ ] Description: 3 short paragraphs, no scenario answers.
- [ ] Thumbnails: lodge exterior, foyer, evidence board, silhouette.
- [ ] Trailer: 45–60 seconds, no full ending card.
- [ ] Social links: Discord, YouTube, TikTok, X.
- [ ] Support email or Discord ticket link.
- [ ] Privacy policy link.
- [ ] Terms of service link.

### Store copy guardrails

Safe:

- "A 30-minute social deduction mystery in a storm-bound lodge."
- "Solve the case. Read the room. Survive until dawn."
- "Voice is recommended, never required."

Unsafe:

- "One of you is the killer" is fine.
- "The host is the cult leader" is not.
- "Find the Hollow Word BLACK" is not.
- "Nine guests vanished in 1936" is fine; "Elias survived" is not.

## 3. Monetization review

- [ ] No item, clue, bullet, health, map, or vote advantage is purchasable.
- [ ] No loot boxes or random paid rewards.
- [ ] No ads.
- [ ] No gambling.
- [ ] Prices are displayed in Robux and local currency where supported.
- [ ] Refund policy is linked.
- [ ] Cosmetics do not break silhouette fairness.
- [ ] Private servers do not grant gameplay advantage.
- [ ] All paid content is tagged in the store.

## 4. Moderation and safety

- [ ] Report flow works from the HUD and the end screen.
- [ ] Mute/block works in voice and text.
- [ ] Dead chat cannot reach living players.
- [ ] Killer chat is private and moderated.
- [ ] Slurs and harassment are filtered.
- [ ] Underage voice chat is governed by Roblox settings.
- [ ] Content warnings are shown before the first match.
- [ ] A moderator rota is active for launch week.
- [ ] Escalation path for serious incidents is documented.

## 5. Accessibility

- [ ] Text mode covers every audio clue.
- [ ] Subtitles cover voice lines and stingers.
- [ ] Colorblind palettes are tested.
- [ ] Key remapping works.
- [ ] Controller support works.
- [ ] Reduced motion and photosensitivity modes work.
- [ ] UI scales 75–150%.
- [ ] Screen-reader labels exist on menus.
- [ ] No mechanic requires voice.
- [ ] A keyboard-only player can finish a match.

## 6. Performance and reliability

- [ ] 10-player match runs at 60 FPS on PC and 30 FPS on mobile.
- [ ] Server memory < 1.5 GB.
- [ ] Map load < 8 seconds.
- [ ] Reconnect works after a disconnect.
- [ ] DataStore outage does not corrupt profiles.
- [ ] Rollback plan is tested.
- [ ] Crash rate < 1% in beta.
- [ ] Match abandonment < 5%.
- [ ] No soft-locks in 10,000 seeds.

## 7. Analytics and telemetry

- [ ] Match start, end, and outcome events.
- [ ] Task completion and wrong-answer rates.
- [ ] Sigil break and death rates.
- [ ] Pistol claim and friendly-fire rates.
- [ ] Ritual completion and interruption rates.
- [ ] Shop purchase and duplicate rates.
- [ ] Voice vs text usage.
- [ ] Crash and error events.
- [ ] Privacy review: no personal data beyond Roblox IDs.
- [ ] Dashboards are live before launch.

## 8. Legal and platform

- [ ] Roblox community standards reviewed.
- [ ] Voice chat policy reviewed.
- [ ] Paid random items policy reviewed (none).
- [ ] Intellectual property review: no unlicensed music, art, or names.
- [ ] Cult iconography is fictional and not a real-world hate symbol.
- [ ] Content boundaries match the age rating.
- [ ] Privacy policy and terms are live.
- [ ] Data deletion request process exists.

## 9. Launch day

- [ ] Production place is published.
- [ ] Store page is approved.
- [ ] Trailer is live.
- [ ] Discord is open.
- [ ] Moderators are online.
- [ ] On-call engineer is available.
- [ ] Rollback build is ready.
- [ ] First patch notes are drafted.
- [ ] Social posts are scheduled.
- [ ] Community event is announced.

## 10. Post-launch

- [ ] 24-hour crash and error review.
- [ ] 72-hour retention review.
- [ ] First balance patch scoped.
- [ ] First content patch scheduled.
- [ ] Player feedback triaged.
- [ ] Spoiler leaks monitored and removed.
- [ ] Moderation incidents reviewed.
- [ ] Store page A/B test planned.

## Sign-off

| Area | Owner | Date | Signature |
|---|---|---|---|
| Design |  |  |  |
| Engineering |  |  |  |
| Art |  |  |  |
| Audio |  |  |  |
| QA |  |  |  |
| Moderation |  |  |  |
| Legal |  |  |  |
| Production |  |  |  |

## Related

- [[Build Roadmap]]
- [[Monetization]]
- [[Moderation and Safety]]
- [[Spoiler Policy]]
- [[Analytics and KPIs]]
