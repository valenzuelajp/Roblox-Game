---
title: "Voting Overview"
aliases:
  - "Votes"
  - "Voting"
  - "The Vote"
tags:
  - systems
  - voting
  - social
  - status/open
status: open
updated: 2026-11-04
summary: "How voting works without meeting phases: the optional pistol vote at 1/4 and the fate vote after the ritual, with open questions and recommendations."
related:
  - "[[Pistol Vote]]"
  - "[[Fate Vote]]"
  - "[[Open Questions]]"
  - "[[Win Conditions]]"
---

# Voting Overview

> [!warning] Open question O-003
> The final voting model is **open**. Options: pistol vote only, fate vote only, or both. The recommendation is **both, kept short**. Do not implement as locked.

## The no-meeting rule

Blackwood Lodge has **no meeting phases** (D-003). There is no discussion table, no round reset, and no global voice channel. A vote is a **short UI window**, not a trial:

- It opens for a fixed time.
- It does not pause the match.
- The killer can act during it.
- The dead cannot vote.
- The result is announced in the UI, not in a cutscene.

The vote is a **pressure beat**, not a conversation.

## The two votes

| Vote | When | Duration | Question | Result |
|---|---|---|---|---|
| **Pistol Vote** | At 1/4 tasks solved | 15s (proposed) | Who receives the first pistol? | Majority; tie random among tied |
| **Fate Vote** | After the ritual reveal | 30s (proposed) | Detain or execute the revealed killer? | Majority; tie = detain |

The pistol vote is optional because the first pistol can also be **random** (O-002). The fate vote only happens if a killer is **detained** after the reveal.

## Why vote at all?

Voting creates social pressure without a meeting:

- The pistol vote makes the team **choose a champion**. The killer can campaign for a trusted investigator or push a scapegoat.
- The fate vote makes the team **choose a punishment**. Detain preserves the 100% path; execute is faster but leaves the case incomplete.

Both votes are short enough to keep the match moving. Neither vote pauses the killer.

## The vote UI

- A small brass ballot box appears in the corner of the HUD.
- The player selects a candidate or an option.
- A 15/30-second timer counts down.
- The ballot is secret.
- The result is announced with a typewritten card: "The lodge has chosen."
- The winner is highlighted for 3 seconds.

The UI is diegetic: a ballot box, a ledger, a stamp. It is not a full-screen menu.

## Tie rules

| Vote | Tie rule | Why |
|---|---|---|
| Pistol | Random among tied candidates | Prevents a split team from stalling |
| Fate | Detain | The non-lethal option is the safe default |

## The killer and the vote

The killer can:

- Vote.
- Campaign in voice/text.
- Lie about their vote.
- Use the vote window to mark a distracted player.
- Push a scapegoat.

The killer cannot:

- See the ballots.
- Change a vote after submission.
- Block the vote.
- Vote twice.

## The dead and the vote

The dead cannot vote. They can watch the ballot box and comment in dead chat. This is intentional: death removes agency, not attention.

## Accessibility

- The ballot box has a text readout.
- The timer has an audio cue at 5 seconds.
- The candidates have portraits and names.
- The result is announced in text and audio.
- A player can abstain.
- A player who does not vote is counted as abstain.

## Anti-abuse

- Vote spam is blocked by the UI.
- A player cannot vote for themselves in the pistol vote? Proposed: allowed, but it is a social tell.
- A player cannot change their vote after submission.
- A disconnected player's vote is abstain.
- A player who joins mid-match cannot vote until the next vote.

## Telemetry

Track:

- Vote participation rate.
- Pistol vote winner vs match outcome.
- Fate vote choice vs ending.
- Tie rate.
- Killer campaign behavior.
- Player reports of vote manipulation.

## Design notes

- **The vote should feel like a stamp, not a debate.**
- **Short timers are the point.** The team does not get to solve the case in the vote.
- **The killer should be able to win the vote.** A fixed vote is a boring vote.
- **The fate vote is the moral choice.** Detain is the 100% path; execute is the fast path.
- **Never pause the match for a vote.** The pressure is the point.

## Related

- [[Pistol Vote]]
- [[Fate Vote]]
- [[Open Questions]]
- [[Win Conditions]]
