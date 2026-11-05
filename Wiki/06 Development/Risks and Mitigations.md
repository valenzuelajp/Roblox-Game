---
title: "Risks and Mitigations"
aliases:
  - "Risk Register"
  - "Project Risks"
tags:
  - development
  - risk
  - production
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The design, technical, and production risks that could sink Blackwood Lodge, with likelihood, impact, mitigations, and kill criteria."
related:
  - "[[Build Roadmap]]"
  - "[[Testing Strategy]]"
  - "[[Vision]]"
  - "[[Design Pillars]]"
---

# Risks and Mitigations

## Risk matrix

| Likelihood | Impact | Label |
|---|---|---|
| High | High | **Critical** |
| High | Medium | **Serious** |
| Medium | High | **Serious** |
| Medium | Medium | **Moderate** |
| Low | High | **Watch** |
| Low | Medium | **Low** |

## Design risks

### R-01 — The loop is not fun (Critical)

**Why:** Social deduction depends on tension, trust, and a good table. A procedural case can feel like busywork.

**Mitigation:**
- M2 vertical slice before content lock.
- 5 external playtesters must ask to play again.
- Measure "one more match" intent.
- Cut systems that do not create arguments.

**Kill criterion:** If M2 playtests do not produce at least one spontaneous accusation or rescue, stop and redesign.

### R-02 — Voice dependency (Serious)

**Why:** Voice makes social deduction better, but Roblox voice is opt-in and not available to everyone.

**Mitigation:**
- Text fallback for every social action.
- Ping wheel, evidence board, case chat.
- Test a full match with no voice.
- Never make a mechanic require voice.

**Kill criterion:** If a text-only team cannot win, the design is broken.

### R-03 — Killer feels unfair (Serious)

**Why:** A hidden killer with a mark power can feel like random death.

**Mitigation:**
- Visible sigil, countdown, and puzzle rescue.
- 60-second mark-free opening.
- Post-break immunity.
- Fair tells.
- Killer cannot read the case.

**Kill criterion:** If playtesters describe deaths as "unfair" more than "tense," retune.

### R-04 — Too complex for new players (Serious)

**Why:** Four tasks, five puzzle families, items, sigils, pistols, ritual, and votes is a lot.

**Mitigation:**
- 3-minute investigator tutorial.
- 3-minute killer tutorial.
- Contextual hints.
- New-player queue.
- First match uses easy scenario and simple rooms.
- One mechanic introduced at a time.

**Kill criterion:** If > 30% of new players fail to find the first clue in 5 minutes, simplify.

### R-05 — Match length (Moderate)

**Why:** 30 minutes is long for Roblox. Players may leave mid-match.

**Mitigation:**
- Phase banners and a visible clock.
- Early win conditions.
- Reconnect support.
- Fill-in bots? No — do not fake players.
- Keep the first 5 minutes dense.

**Kill criterion:** If median match completion < 60%, shorten the clock or the task count.

### R-06 — Procedural cases feel samey (Moderate)

**Why:** Ten cards and one map generator can repeat.

**Mitigation:**
- Card customization (victim, room, red herring).
- Random clue placement.
- Midnight shift.
- Seasonal cards.
- Community card contests.

**Kill criterion:** If players can predict the answer from the first clue, add more variation.

### R-07 — Toxicity (Serious)

**Why:** Social deduction attracts betrayal, shouting, and harassment.

**Mitigation:**
- Report/mute/block.
- Dead chat isolation.
- Moderator rota.
- Clear community rules.
- No voice requirement.
- Zero tolerance for slurs.

**Kill criterion:** If moderation incidents exceed capacity, pause voice or add lobby gates.

## Technical risks

### R-08 — Roblox platform limits (Serious)

**Why:** Part count, streaming, memory, and replication limits can break a 25-room procedural map.

**Mitigation:**
- Grey-box M1.
- Performance budgets.
- Pre-baked room modules.
- Streaming and LODs.
- Mobile test device from day one.

**Kill criterion:** If mobile cannot hold 30 FPS with 10 players, cut room count or effects.

### R-09 — DataStore outages (Moderate)

**Why:** Roblox DataStore can fail; losing Cinders or casebook progress is unacceptable.

**Mitigation:**
- Session locking.
- Idempotent reward keys.
- Retry with backoff.
- Local cache and reconciliation.
- Support flow for lost progress.

**Kill criterion:** If data loss exceeds 0.1% of matches, pause monetization.

### R-10 — Exploiters (Serious)

**Why:** Hidden roles and clues are attractive to cheaters.

**Mitigation:**
- Server authority.
- No answers on client.
- Rate limits.
- Remote validation.
- Anti-cheat telemetry.
- Ghost-leak prevention.

**Kill criterion:** If a public ESP or answer exploit spreads, hotfix before marketing.

### R-11 — Map generation bugs (Serious)

**Why:** A soft-lock ruins a 30-minute match.

**Mitigation:**
- 10,000-seed sweep.
- Golden seeds.
- Reachability validation.
- Fallback seed.
- Live "stuck" report button.

**Kill criterion:** Any soft-lock in production is a P0.

### R-12 — Voice moderation (Moderate)

**Why:** Voice is hard to moderate and can expose minors.

**Mitigation:**
- Use Roblox voice settings and age gates.
- Text fallback.
- Report flow with voice timestamps.
- Mute/block.
- No requirement to use voice.

**Kill criterion:** If voice incidents cannot be handled, launch text-first.

### R-13 — Toolchain fragility (Low)

**Why:** Studio MCP paths change on update; Rojo versions drift.

**Mitigation:**
- Stable wrapper script.
- Pinned Rokit versions.
- CI builds.
- Documented setup.
- Fallback to manual Studio.

**Kill criterion:** If the toolchain blocks a build for a day, switch to manual.

## Production risks

### R-14 — Scope creep (Critical)

**Why:** The design has many systems; every one can grow.

**Mitigation:**
- No new core mechanic after M2.
- One scenario per patch.
- YAGNI reviews.
- Canonical decisions.
- Cut list.

**Kill criterion:** If M2 slips by 4 weeks, cut content, not quality.

### R-15 — Art budget (Serious)

**Why:** A 25-room noir lodge is expensive.

**Mitigation:**
- Modular kit.
- Reused props.
- Stylized lighting.
- Grey-box until fun.
- Asset store where appropriate.
- One hero room per floor.

**Kill criterion:** If art cost exceeds 40% of budget, reduce room variants.

### R-16 — Content pipeline (Moderate)

**Why:** Ten cards and 25 rooms need authoring, validation, and localization.

**Mitigation:**
- Generators with schemas.
- Templates.
- Validation scripts.
- One owner per content type.
- Freeze before beta.

**Kill criterion:** If a card takes more than 2 days to author, improve the template.

### R-17 — Team burnout (Serious)

**Why:** Live ops and moderation are relentless.

**Mitigation:**
- Milestone-based scope.
- On-call rotation.
- Content cadence of one patch per month, not per week.
- Community moderators.
- Post-launch pause.

**Kill criterion:** If the team works > 50 hours/week for 3 weeks, stop and re-plan.

### R-18 — Marketing and discovery (Serious)

**Why:** Roblox is crowded; a new mystery game may not get seen.

**Mitigation:**
- Strong thumbnail and trailer.
- Short-form clips of reveals and rescues.
- Creator partnerships.
- Discord community.
- Seasonal events.
- Roblox analytics and A/B tests.

**Kill criterion:** If CTR is below genre baseline after 2 weeks, change the store page, not the game.

## Risk review cadence

- **Weekly:** critical and serious risks.
- **Milestone:** full register review.
- **Post-launch:** daily for 2 weeks, then weekly.

## Related

- [[Build Roadmap]]
- [[Testing Strategy]]
- [[Vision]]
- [[Design Pillars]]
- [[Publishing Checklist]]
