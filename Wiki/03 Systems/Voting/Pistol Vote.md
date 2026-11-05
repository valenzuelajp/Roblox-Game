---
title: "Pistol Vote"
aliases:
  - "First Pistol Vote"
  - "Champion Vote"
tags:
  - systems
  - voting
  - combat
  - status/open
status: open
updated: 2026-11-04
summary: "The optional 15-second vote that chooses the first pistol holder, with candidates, tie rules, killer exclusion, and the random alternative."
related:
  - "[[Voting Overview]]"
  - "[[First Pistol]]"
  - "[[Open Questions]]"
  - "[[Pistols]]"
---

# Pistol Vote

> [!warning] Open question O-002
> The first pistol is either **random** or **voted**. The recommendation is **voted**, but the user has also said "random." Do not implement as locked until the project owner answers.

## When it happens

The first pistol is awarded when the **first Case File task is solved** (D-010). If the vote option is enabled:

- The ballot box appears for **15 seconds**.
- Every living investigator is a candidate.
- The killers are **secretly excluded** from the candidate list; they cannot win, even if they get votes.
- The player with the most votes receives the pistol.
- The holder is announced to the table.

## The candidate list

- All living investigators.
- The killers are excluded by the server, not by the UI. The UI does not show who is excluded.
- A player can vote for themselves (proposed; it is a social tell).
- A player can abstain.
- A disconnected player is removed from the list.

## The vote

- Secret ballot.
- Majority wins.
- Tie: random among the tied candidates.
- The winner is announced with a typewritten card: "The lodge has chosen [name]."
- The pistol is delivered to the winner's inventory with a 3-second inspection window.

## Why vote for a holder?

- The team chooses someone they trust.
- The killer can campaign for a scapegoat.
- The vote creates a social beat at the exact moment the team has its first proof.
- The holder becomes a target. The team knows it; the killer knows it.

## Why random?

- Faster.
- No popularity contest.
- The killer cannot manipulate the choice.
- The holder is a surprise, which is fun.

## The hybrid option (recommended)

- The team votes.
- If the vote ties, the server picks randomly among the tied.
- If the vote is unanimous for one player, that player gets the pistol.
- The killers are excluded from both the vote and the random fallback.

## What the holder gets

- One pistol.
- Four bullets (D-025).
- A visible holster.
- The ability to shoot or detain (see [[Pistols]]).
- The responsibility of the 100% path.

## What the holder does not get

- Immunity.
- A role reveal.
- The right to execute without a vote.
- Extra health.

## The killer's counterplay

- Campaign for a trusted investigator, then kill them.
- Campaign for a scapegoat, then let the team turn on them.
- Abstain to look neutral.
- Vote for the actual holder to look helpful.
- Mark the holder after the vote.

## Accessibility

- The ballot box has a text readout.
- The candidates have names and portraits.
- The timer has an audio cue at 5 seconds.
- The result is announced in text and audio.
- A player can abstain with one button.
- The vote can be disabled in private servers.

## Telemetry

Track:

- Vote participation.
- Winner's survival time.
- Winner's shots and hits.
- Killer's vote behavior.
- Tie rate.
- Player sentiment on random vs voted.

## Design notes

- **The vote is a social test, not a popularity contest.**
- **The killer must be able to influence it.**
- **The holder should feel a target on their back.**
- **The random option is a valid fallback; do not treat it as a failure.**

## Related

- [[Voting Overview]]
- [[First Pistol]]
- [[Open Questions]]
- [[Pistols]]
