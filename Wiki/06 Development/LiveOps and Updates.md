---
title: "LiveOps and Updates"
aliases:
  - "Live Operations"
  - "Post-Launch"
tags:
  - development
  - liveops
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The cadence, process, and safety rules for updating Blackwood Lodge after launch."
related:
  - "[[Build Roadmap]]"
  - "[[Publishing Checklist]]"
  - "[[Analytics and KPIs]]"
  - "[[Risks and Mitigations]]"
---

# LiveOps and Updates

## Cadence

| Cadence | What ships | Owner |
|---|---|---|
| **Hotfix** | Crash, exploit, data loss, broken match | On-call engineer |
| **Weekly** | Bug fixes, balance tweaks, telemetry fixes | Core team |
| **Biweekly** | One scenario card rotation, small content | Content lead |
| **Monthly** | New room variant, cosmetic drop, quality-of-life | Product lead |
| **Quarterly** | Seasonal event, new scenario pack, major feature | Full team |

The game is a 30-minute social experience. It does not need a daily content treadmill.

## Release channels

| Channel | Audience | Purpose |
|---|---|---|
| **Dev** | Team | Every commit |
| **Staging** | Playtesters | Release candidate |
| **Live** | Players | Stable |

- Staging must run the exact build that will ship.
- Live updates go out Tuesday–Thursday, 10:00–14:00 UTC, never before a weekend.
- No content update on the same day as a Roblox platform update.

## Feature flags

Use server-side flags for:

- New scenario cards.
- New rooms.
- Balance changes.
- Seasonal events.
- Experimental UI.

Rules:

- Every flag has an owner, a default, a kill switch, and an expiry date.
- Flags are evaluated on the server, not the client.
- A flag may not change the odds of a paid item.
- Remove dead flags within one release cycle.

## Hotfix checklist

- [ ] Reproduce the bug on staging.
- [ ] Identify the smallest safe fix.
- [ ] Add a regression test.
- [ ] Run the full test suite and a 10-player bot match.
- [ ] Get a second reviewer.
- [ ] Deploy to staging; verify.
- [ ] Deploy to live during the window.
- [ ] Watch error rate, crash rate, and match completion for 30 minutes.
- [ ] Write a postmortem within 48 hours.

## Content rotation

- Ten scenario cards at launch. Rotate one card per two weeks only if the data shows staleness.
- Do not remove a card players have learned; add, don't subtract.
- Seasonal events use the same core loop with a cosmetic skin. No limited-time mechanics that split the player base.
- The casebook remembers every card the player has encountered, even after rotation.

## Balance changes

- Balance changes are data-driven, not code-driven where possible.
- Every change needs a hypothesis, a metric, and a rollback plan.
- Change one variable at a time.
- Announce gameplay changes in the patch notes with the reason.
- Never nerf a paid cosmetic; cosmetics have no gameplay effect.

## Communication

- **Patch notes:** what changed, why, and what players should notice.
- **Known issues:** a pinned post with workarounds.
- **Roadmap:** quarterly, honest, and subject to change.
- **Apology policy:** if the team breaks the game, say so, fix it, and grant a small cosmetic or Cinders compensation.
- **No hype for unshipped features.** Under-promise, over-deliver.

## Moderation and support

- Reports are triaged within 24 hours.
- Appeals go to a second moderator.
- Voice reports follow Roblox's platform process; the game adds context and evidence.
- Support macros are written in plain language, never corporate.
- A banned player can still read the player wiki.

## Data and migrations

- Every persisted schema change has a migration.
- Migrations are backward-compatible for one release.
- Back up profile data before a migration.
- Test migrations on a copy of production data.
- Never delete player data without a retention notice.

## Postmortem template

```text
Incident:
Date/time:
Duration:
Impact:
Root cause:
Detection:
Response:
What went well:
What went wrong:
Action items (owner, date):
```

Postmortems are blameless. The system failed, not the person.

## Seasonal events

A seasonal event is a **cosmetic layer**, not a new game:

- New lobby theme.
- New outfit set.
- New casebook skin.
- New title.
- Maybe one themed scenario card.

It does not add a new mechanic, a new currency, or a new grind. The core match is the product.

## Sunset plan

If the game must end:

- Announce 90 days ahead.
- Keep servers open for the announced period.
- Refund unspent Robux where required.
- Publish the final casebook and credits.
- Leave the player wiki online.
- Do not delete the community.

## Related

- [[Build Roadmap]]
- [[Publishing Checklist]]
- [[Analytics and KPIs]]
- [[Risks and Mitigations]]
