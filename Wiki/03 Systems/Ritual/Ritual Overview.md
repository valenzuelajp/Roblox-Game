---
title: "Ritual Overview"
aliases:
  - "The Revealing Ritual"
  - "The Channel"
tags:
  - systems
  - ritual
  - endgame
  - status/locked
status: locked
updated: 2026-11-04
summary: "The 30-second Revealing Ritual: who channels, how it is interrupted, what it reveals, and why it is also the cult's rite."
related:
  - "[[Ritual Reveal]]"
  - "[[Ritual Site]]"
  - "[[Last Hunt]]"
  - "[[Case File Overview]]"
  - "[[Endings]]"
---

# Ritual Overview

## Purpose

The ritual is the **fifth Case File slot**. It replaces the old "Who is the killer?" question. It is the moment the investigation becomes a confrontation.

The ritual does three things:

1. **Reveals every killer** to everyone.
2. **Grants the fifth letter** of the Hollow Word.
3. **Unlocks the exit** and starts the **Last Hunt**.

It is also the cult's Ninth Rite. The investigators are completing the ritual the cult wants completed. The story's final turn is that **every escape is also a completion**.

## Prerequisites

The ritual can only start when:

- All four Case File tasks are **solved** (not merely attempted).
- At least one living investigator is in the **chapel**.
- The chapel is **open** (after the midnight shift).
- The ritual has not been permanently sealed (it cannot be permanently sealed; see failure).

If any task is unsolved, the chapel altar is inert. The UI says: "The altar is waiting for the rest of the story."

## The channel

One player volunteers as the **channeler**. Any living investigator can channel. The killer can also channel, but doing so exposes them at the reveal.

The channel is a **30-second** interaction:

- The channeler stands at the altar and holds the interaction.
- A ring of five candles lights one by one.
- The channeler cannot move, attack, or use items.
- The channeler can speak and hear.
- Other players can defend the chapel, solve anchors, or search for the killer.

The channeler's screen shows the ritual's progress and the three **anchors**.

## The three anchors

The chapel has three ritual anchors:

| Anchor | Location | Interaction |
|---|---|---|
| **The Word** | Altar | The channeler's hold |
| **The Blood** | Chapel floor sigil | A second player must stand on the sigil |
| **The Bell** | Bell rope | A third player must ring the bell at the start |

The anchors are optional at easy difficulty and required at medium/hard. They give more players a job and more openings for the killer.

If an anchor is broken, the channel pauses. It does not reset unless the channeler is interrupted.

## Interruption

The killer can interrupt the ritual in two ways:

1. **Mark the channeler.** The mark's sigil spawns as normal. If the channeler is marked, the channel breaks immediately. The channeler is not instantly killed; the sigil countdown begins.
2. **Break an anchor.** The killer interacts with an anchor for 3 seconds. The anchor goes dark. The channel pauses until it is restored.

The killer gets **one interrupt per attempt**. After an interrupt, the ritual cannot be interrupted again until the next attempt.

## Failure and retry

| Event | Result |
|---|---|
| Channeler breaks the hold | The ritual pauses; the channeler can resume |
| Channeler is marked | The ritual breaks; the killer's interrupt is spent |
| Anchor is broken | The ritual pauses; a player can restore it in 3s |
| Channeler dies | The ritual fails; a new channeler can start after 60s |
| Three failed attempts | The chapel seals for **90 seconds**; the fifth letter can be recovered under the altar with a UV torch |

The ritual is **retryable until dawn**. There is no permanent soft-lock. The 90-second seal is a tempo penalty, not a game over.

## The reveal

When the channel completes:

- The five candles flare.
- Every killer's outline is visible through walls for **5 seconds**.
- The killers' names are shown in the ritual UI.
- The fifth letter appears on the altar.
- The exit gate unlocks.
- The **Last Hunt** begins.

The reveal is intentional. The killers get a chance to strike. The investigators get certainty and a head start.

## The cult twist

The ritual is the **Ninth Rite**:

- Ten souls in the house.
- A witness who chooses to stay.
- The Hollow Word spoken at the altar.

The investigators think they are exposing the cult. In fact, they are giving it the final witness. The game does not tell them this until the ending. The ritual's UI uses the cult's own language, but the players may not recognize it.

## Design rules

1. **The ritual is a group activity.** One player channels; at least two others have jobs.
2. **The killer can always interrupt once.** No ritual is unopposed.
3. **The ritual is not a cutscene.** The channeler can be attacked, the anchors can be broken, and the chapel can be entered from two routes.
4. **The ritual is retryable.** Failure costs time, not the match.
5. **The fifth letter is recoverable.** If the ritual is blocked, the UV fallback prevents a soft-lock.
6. **The reveal is fair.** The killers are exposed, but they get the Last Hunt.
7. **The story twist is optional for gameplay.** A player who never learns the cult connection can still win.

## Telemetry

- Attempts per match.
- Interrupt type (mark/anchor).
- Time to complete.
- Channeler role (investigator/killer).
- Failures and retries.
- Whether the UV fallback was used.

## Related

- [[Ritual Reveal]]
- [[Ritual Site]]
- [[Last Hunt]]
- [[Case File Overview]]
- [[Hollow Word]]
- [[Endings]]
