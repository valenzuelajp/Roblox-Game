---
title: "Ritual Interruption"
aliases:
  - "Interrupting the Ritual"
  - "Ritual Counterplay"
tags:
  - systems
  - ritual
  - killer
  - status/locked
status: locked
updated: 2026-11-04
summary: "How the killer can interrupt the 30-second Revealing Ritual, what the investigators can do about it, and why the ritual never soft-locks."
related:
  - "[[Ritual Overview]]"
  - "[[Ritual Site]]"
  - "[[Ritual Reveal]]"
  - "[[Killer Role]]"
  - "[[Hollow Word]]"
---

# Ritual Interruption

> [!info] Locked rule
> The ritual takes **30 seconds** (D-028). It is interruptible. The killer gets **one interrupt per attempt**. A failed attempt can be retried after **60 seconds**. The ritual is retryable until dawn.

## The interrupt window

The ritual has three phases:

| Phase | Time | What happens | Can the killer interrupt? |
|---|---|---|---|
| **Opening** | 0–5s | The channeler lights the five candles. | No; the chapel is warded. |
| **Channel** | 5–25s | The channeler holds the word; the anchors glow. | Yes. |
| **Closing** | 25–30s | The fifth letter is granted; the reveal begins. | No; the ritual is committed. |

The killer must act during the **Channel** phase. This gives the investigators a 20-second window to protect the channeler and the anchors.

## Two interrupt actions

The killer can choose **one** per attempt:

### 1. Mark the channeler

- The killer marks the channeler with the normal sigil loop.
- The mark does **not** instantly cancel the ritual; it starts a sigil countdown.
- If the channeler leaves the altar to break the sigil, the ritual pauses.
- If the channeler stays, the sigil countdown continues; if it expires, the channeler dies and the ritual fails.
- The sigil can be broken by another investigator while the channeler holds the ritual. This is the intended teamwork moment.

### 2. Break an anchor

The ritual has three anchors:

| Anchor | Location | Break action |
|---|---|---|
| **The Word** | The altar book | Tear out the page (2s hold). |
| **The Blood** | The floor sigil | Scuff the chalk (2s hold). |
| **The Bell** | The bell rope | Cut the rope (2s hold). |

Breaking one anchor **pauses** the ritual for 10 seconds. The channeler can repair it (3s hold). If the killer breaks a second anchor during the same attempt, the ritual fails.

The killer can only break **one** anchor per attempt. They cannot break all three.

## Failure and retry

| Event | Result |
|---|---|
| Channeler marked and sigil expires | Ritual fails; channeler dies. |
| Channeler leaves the altar | Ritual pauses; 10s to return. |
| One anchor broken | Ritual pauses 10s; repairable. |
| Two anchors broken | Ritual fails. |
| Channeler dies | Ritual fails. |
| 30 seconds completed | Ritual succeeds; reveal. |

After a failure:

- The chapel seals for **60 seconds** (retry cooldown).
- The killer's interrupt is spent.
- The investigators can retry after the cooldown.
- The fifth letter is **not** lost.

After **three failures**:

- The chapel seals for **90 seconds**.
- The fifth letter becomes recoverable under the altar with the **UV Torch**.
- The ritual can still be retried until dawn.
- No permanent soft-lock.

## Investigator counterplay

| Counter | How |
|---|---|
| **Guard the channeler** | Stand between the killer and the altar; body-block. |
| **Clear the anchors** | Assign one investigator per anchor. |
| **Break the sigil** | A second investigator solves the sigil while the channeler holds. |
| **Pre-clear the chapel** | Check the crypt stair and side door before starting. |
| **Use the Ritual Anchor item** | Extends the channel by 5 seconds (proposed). |
| **Fake the ritual** | Start the candle-lighting to bait the killer's interrupt, then cancel. |

## Killer counterplay

| Counter | How |
|---|---|
| **Mark the solver** | If the team sends one person to break sigils, mark them next. |
| **Break the bell** | The bell anchor is the hardest to repair; force a 10s pause. |
| **Ambush the side door** | The chapel has two entrances; wait at the one they are not guarding. |
| **Use the Last Hunt** | If the ritual succeeds, the killer gets the Last Hunt; the interrupt is not the only win condition. |

## UI

- **Channel bar:** 30 seconds, with phase markers at 5s and 25s.
- **Anchor status:** three icons; broken anchors flash red.
- **Interrupt warning:** a bell tolls when the killer enters the chapel.
- **Retry timer:** 60s, then 90s after three failures.
- **Fifth-letter fallback:** the UV prompt appears under the altar after three failures.

## Telemetry

- Attempts per match.
- Interrupt type (mark vs anchor).
- Success rate by killer count.
- Time to first attempt.
- Failure/retry rate.
- Fifth-letter fallback usage.

## Design notes

- The ritual should be **tense**, not a cutscene.
- The killer's interrupt should feel like a **choice**, not a random event.
- The investigators should be able to **protect** the ritual with positioning and puzzle skill.
- The ritual must never soft-lock the match.

## Related

- [[Ritual Overview]]
- [[Ritual Site]]
- [[Ritual Reveal]]
- [[Killer Role]]
- [[Hollow Word]]
