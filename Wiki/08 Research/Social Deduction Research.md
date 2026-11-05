---
title: "Social Deduction Research"
aliases:
  - "Social Deduction Notes"
  - "Competitive Social Deduction"
tags:
  - research
  - social-deduction
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "What social deduction games teach us about onboarding, meetings, death, voice, map readability, and social safety — and what Blackwood Lodge borrows or rejects."
related:
  - "[[Research MOC]]"
  - "[[Competitive Analysis]]"
  - "[[Core Loop]]"
  - "[[Voice and Text]]"
---

# Social Deduction Research

## The question

What makes social deduction games fun, what makes them frustrating, and which lessons apply to a 30-minute, no-meeting, voice-optional game?

## The reference set

| Game | What it does well | Where it struggles | What we borrow |
|---|---|---|---|
| **Among Us** | Instant readability, short rounds, tasks give everyone something to do, death is spectatable | Meeting spam, dead players disengage, voice is not built in | Task feedback, ghost role, clear sabotage |
| **Town of Salem** | Deep role space, social claim/counterclaim | Complexity, length, night phases slow the room | Role clarity, claim tension |
| **Project Winter** | Survival + social deduction, proximity voice | Long matches, griefing, steep onboarding | Proximity voice, weather pressure |
| **Deceit** | Paranoia, transformation, trust | Frustration, unclear rules, toxic meta | The reveal moment, trust tests |
| **Dread Hunger** | Roleplay, shared objectives, voice | Length, complexity, team coordination burden | Shared objectives, voice-first social |
| **Goose Goose Duck** | Variety, accessibility, fun roles | Role overload, meeting reliance | Accessibility, role variety |
| **First Class Trouble** | Physics comedy, social chaos | Tone mismatch, griefing | Environmental interaction |
| **Trouble in Terrorist Town** | Investigation, traitor hunting | RDM, meta, poor onboarding | Evidence-based suspicion |
| **The Ship** | Social simulation, paranoia | Dated, unclear goals | The house as a social space |

## Findings

### 1. Meetings are a crutch and a tax

Meeting phases solve a real problem: they give the table a **scheduled moment to compare notes**. They also:

- Stop the action.
- Reward the loudest voice.
- Punish players who are dead or text-only.
- Turn every round into a debate minigame.

Blackwood Lodge removes meetings and replaces them with:

- A **shared Case File** that records evidence.
- An **evidence board** in the foyer.
- **Proximity voice and text**.
- A **ritual** that forces the table together at the end.

This is a risk. The evidence board and the ritual must carry the social load that meetings would otherwise carry.

### 2. Dead players need a job

The worst social deduction experience is dying in the first five minutes and watching a 25-minute match with nothing to do. Good games give the dead:

- A spectator camera.
- A separate chat.
- A way to contribute without leaking information.
- A reason to stay (rewards, story, next-match queue).

Blackwood Lodge uses **ghost spectators + dead chat** (recommended, O-001). Ghosts cannot speak to the living, cannot vote, and cannot interact. They can watch, learn the map, and earn partial Cinders.

### 3. Onboarding is the real killer

Most social deduction games lose players in the first match, not the fiftieth. The first match must teach:

- What the role does.
- What the goal is.
- How to communicate.
- What "normal" looks like.

Blackwood Lodge uses a **3-minute investigator tutorial**, a **3-minute killer tutorial**, contextual hints, and a safe default loadout. The first match is protected: new players are queued with new players when possible.

### 4. Voice is a social advantage, not a requirement

Voice makes social deduction better: tone, hesitation, interruption, and laughter are the game. But voice also:

- Excludes players without a microphone.
- Excludes players who cannot or will not verify.
- Creates moderation problems.
- Creates a disadvantage for text-only players.

The design rule is **voice recommended, never required** (D-020). Every social action has a text equivalent: proximity bubbles, pings, the evidence board, quick chat, and the Case File.

### 5. The map is a social instrument

A good social deduction map:

- Has clear landmarks so players can say "I was in the chapel."
- Has enough rooms to hide a body and enough traffic to create witnesses.
- Has short routes so players can verify alibis.
- Has one or two dangerous chokepoints.

Blackwood Lodge uses **8 anchors + 12–16 modular rooms**, a central stair, a service stair, and 4–6 secret passages. The anchors are the vocabulary; the modular rooms are the uncertainty.

### 6. Proximity voice changes everything

Proximity voice creates:

- Private conversations.
- Eavesdropping.
- The feeling of being alone with the wrong person.
- Natural grouping and splitting.

It also creates **voice leaks**: a dead player can be heard, a killer can metagame, a streamer can leak. The design needs a hard **dead chat** and a **streamer mode**.

### 7. Social safety is a feature

Social deduction attracts:

- Accusation as harassment.
- Slurs and hate speech.
- Stream sniping.
- Meta-gaming and ghosting.
- Griefing.

The game needs:

- A clear report flow.
- Mute/block/leave.
- Voice moderation.
- A code of conduct.
- A "safe lobby" option.
- No mechanic that rewards real-world harassment.

### 8. Catch-up mechanics matter

If the killer gets ahead, the match can become unwinnable. Good games add:

- Comeback resources.
- Information that becomes easier to find over time.
- A timer that forces action.

Blackwood Lodge uses:

- The **first pistol at 1/4** (a comeback tool).
- The **second pistol** as a race, not a guarantee.
- The **midnight shift** opening new routes.
- The **ritual** as a fixed endgame.
- The **Last Hunt** giving the killer a chance after the reveal.

## What we borrow

- Task feedback and ghost roles from **Among Us**.
- Proximity voice and weather pressure from **Project Winter**.
- Evidence-based suspicion from **TTT**.
- The reveal moment from **Deceit**.
- Accessibility and role variety from **Goose Goose Duck**.
- The house-as-character social space from **The Ship**.

## What we reject

- **Meeting phases.** They break the continuous-night fantasy.
- **Night phases that stop the room.** The clock never stops.
- **Role overload at launch.** Five puzzle families and four tasks are enough.
- **Punishing text-only players.** No mechanic may require voice.
- **Instant death without counterplay.** Every kill has a sigil, a timer, or a rescue.
- **A dead player with nothing to do.** Ghosts get a camera, a chat, and rewards.

## Open questions

- **SQ-01:** Without meetings, will players naturally return to the evidence board?
- **SQ-02:** Is the ritual enough of a social climax to replace a meeting?
- **SQ-03:** Does proximity voice create too much downtime for solo players?
- **SQ-04:** How do we prevent the loudest player from dominating the Case File?
- **SQ-05:** What is the right punishment for a wrong accusation?

## Related

- [[Competitive Analysis]]
- [[Core Loop]]
- [[Voice and Text]]
- [[Death and Spectator]]
- [[Onboarding]]
