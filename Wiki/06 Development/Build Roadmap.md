---
title: "Build Roadmap"
aliases:
  - "Milestones"
  - "Development Plan"
tags:
  - development
  - roadmap
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The M0–M5 build plan from design capture to live operations, with deliverables, exit criteria, and dependencies."
related:
  - "[[Roadmap]]"
  - "[[Testing Strategy]]"
  - "[[Publishing Checklist]]"
  - "[[Development MOC]]"
---

# Build Roadmap

> [!info] Relationship to the design roadmap
> [[Roadmap]] is the product roadmap. This page is the engineering plan that delivers it. Dates are relative weeks from the first commit.

## Milestone overview

| Milestone | Name | Goal | Exit criteria |
|---|---|---|---|
| **M0** | Design capture | The vault is the source of truth. | Canonical decisions, open questions, scenario deck, room catalog, and system pages exist. |
| **M1** | Grey-box | A playable loop with no art. | 6 players can join, shop, investigate, mark, break, ritual, and escape. |
| **M2** | Vertical slice | One scenario, one map seed, full polish. | 30-minute match is fun with placeholder art and 5 external playtesters. |
| **M3** | Content complete | 10 scenarios, 25 rooms, all items, all puzzles. | Every card is playable; no soft-locks in 10,000 seeds. |
| **M4** | Beta | Real players, real devices, real moderation. | 100 matches, < 1% crash rate, accessibility pass, store page ready. |
| **M5** | Launch and live ops | Public release. | Launch checklist complete; first content patch scheduled. |

## M0 — Design capture (weeks 0–2)

**Deliverables:**

- Vault structure and decisions.
- 10 scenario cards.
- 25 room pages.
- Systems pages for every mechanic.
- Technical architecture.
- Art and audio direction.
- Open questions list.

**Exit criteria:**

- A new contributor can read [[Start Here]] and understand the game.
- Every locked decision is in [[Canonical Decisions]].
- Every open question is in [[Open Questions]].
- The scenario generator validates all 10 cards.

**Risks:** design churn, unresolved story, scope creep.

## M1 — Grey-box (weeks 3–6)

**Deliverables:**

- Roblox place with 8 anchor rooms and 8 modular rooms.
- Lobby, role assignment, match clock.
- Shop with 5 items.
- 4 tasks with free and item clues.
- One puzzle family (zodiac).
- Mark → sigil → death loop.
- First pistol and friendly fire.
- Ritual, reveal, exit, and one ending.
- Results screen and Cinders stub.
- Bot harness.

**Exit criteria:**

- 6 players can complete a full match.
- No soft-locks in 100 generated seeds.
- The first pistol appears at 1/4.
- The ritual is interruptible.
- The match ends at 7:00 AM or earlier.

**Risks:** map generation, remote design, match state bugs.

## M2 — Vertical slice (weeks 7–10)

**Deliverables:**

- One scenario card fully art-passed: S01 *The Founder's Debt*.
- One hand-built map seed with all 25 rooms.
- All five puzzle families (one easy, one medium, one hard each).
- 10 investigator items, 5 killer items.
- Second pistol and three seals.
- Detain, cellar cell, rescue.
- Evidence board and Case File UI.
- Voice + text + dead chat.
- Tutorial for investigators and killers.
- Telemetry v1.

**Exit criteria:**

- 5 external playtesters finish a match and ask to play again.
- The killer can win without a pistol.
- The investigators can win without voice.
- The free clue is understood without explanation.
- The ritual reveal produces a visible reaction.

**Risks:** fun factor, pacing, killer balance, UI clarity.

## M3 — Content complete (weeks 11–18)

**Deliverables:**

- All 10 scenario cards.
- 25 room pages with art.
- All items and cosmetics.
- All badges.
- All endings and epilogues.
- Full accessibility pass.
- Localization hooks.
- Moderation and reporting.
- Monetization (cosmetic-only).
- Private servers.
- Performance pass.

**Exit criteria:**

- Every card is playable.
- 10,000-seed sweep passes.
- 100 bot matches pass.
- No P0/P1 bugs.
- Mobile 30 FPS, PC 60 FPS.
- Store page and thumbnails are spoiler-free.

**Risks:** content volume, art budget, card balance, localization.

## M4 — Beta (weeks 19–22)

**Deliverables:**

- Closed beta with 100+ players.
- Analytics dashboards.
- Crash reporting.
- Community Discord and feedback loop.
- Moderation rota.
- Launch trailer and store assets.
- Pricing and passes.

**Exit criteria:**

- < 1% crash rate.
- < 5% match abandonment.
- 70% of players finish a match.
- 30% replay within 24 hours.
- No unresolved moderation incidents.
- Accessibility sign-off.

**Risks:** server load, toxicity, voice moderation, platform review.

## M5 — Launch and live ops (weeks 23+)

**Deliverables:**

- Public launch.
- First content patch (new scenario card).
- Seasonal cosmetic drop.
- Live event (Halloween, Friday the 13th).
- Community case contest.
- Balance patch cadence.

**Exit criteria:**

- Launch checklist complete.
- Rollback plan tested.
- On-call rota active.
- First patch shipped within 4 weeks.

**Risks:** live ops burnout, content cadence, retention, competition.

## Critical path

```text
M0 design → M1 match loop → M2 fun → M3 content → M4 beta → M5 launch
```

The critical path is **fun**, not content. If M2 is not fun, do not start M3. More content will not fix a weak loop.

## Team shape (minimum)

| Role | M1 | M2 | M3 | M4 |
|---|---|---|---|---|
| Game designer | 1 | 1 | 1 | 1 |
| Luau engineer | 1 | 2 | 2 | 2 |
| Environment artist | 0 | 1 | 2 | 2 |
| Character/prop artist | 0 | 1 | 1 | 1 |
| UI designer | 0 | 1 | 1 | 1 |
| Audio designer | 0 | 0.5 | 1 | 1 |
| QA / community | 0 | 0.5 | 1 | 2 |
| Producer | 0.5 | 0.5 | 0.5 | 1 |

A solo developer can do M0–M2 but will need help for M3.

## Scope guardrails

- **No new core mechanic after M2.** Add content, not systems.
- **No new map level after M3.** Reuse the four levels.
- **No new currency.** Cinders and Shillings only.
- **No pay-to-win.** Ever.
- **No voice requirement.** Ever.
- **No gore.** Ever.
- **One scenario per patch, not five.**
- **One seasonal event per quarter, not per month.**

## Related

- [[Roadmap]]
- [[Testing Strategy]]
- [[Publishing Checklist]]
- [[Risks and Mitigations]]
- [[Development MOC]]
