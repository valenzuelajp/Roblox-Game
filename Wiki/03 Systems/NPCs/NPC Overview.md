---
title: "NPC Overview"
aliases:
  - "NPCs"
  - "Non-Player Characters"
tags:
  - systems
  - npcs
  - world
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How NPCs work in Blackwood Lodge: the victim, Vesper, Elias, and the staff, with schedules, testimony, and no combat."
related:
  - "[[NPC Testimony]]"
  - "[[Madame Vesper]]"
  - "[[Elias Blackwood]]"
  - "[[The Staff]]"
  - "[[The Victim]]"
---

# NPC Overview

> [!info] Status
> NPC behavior is **proposed**. The cast is defined in the Story folder; this page defines how they function in play.

## The cast

| NPC | Where | Role | Gameplay function |
|---|---|---|---|
| **The Victim** | Staging room | The body | The crime scene; Task 1–3 evidence |
| **Madame Vesper** | Curio Shop | Shopkeeper | Items, rumors, story |
| **Elias Blackwood** | Missing | Host / cult leader | Story; appears at the ritual |
| **Mr. Finch** | Foyer / study | Butler | Testimony; keys |
| **Ada** | Guest wing | Maid | Testimony; chapel access |
| **The Cook** | Kitchen | Cook | Testimony; cellar access |
| **Silas** | Grounds | Groundskeeper | Testimony; woods route |
| **Rook** | Drive / garage | Chauffeur | Testimony; the victim's arrival |

The killer is **not** an NPC. The killer is a player.

## The NPC rules

1. **NPCs cannot be killed by players.** They are not combatants.
2. **NPCs cannot solve the case for the players.** They provide testimony, not answers.
3. **NPCs cannot soft-lock a task.** Every NPC clue has a prop equivalent.
4. **NPCs are server-controlled.** Their positions and lines are deterministic per seed.
5. **NPCs do not vote.** They are not players.
6. **NPCs can lie.** Some testimony is true; some is not.
7. **NPCs can be questioned in voice or text.** The dialogue UI works for both.
8. **NPCs are not romanceable, recruitable, or playable.**

## Schedules

NPCs move on a schedule:

| Time | Finch | Ada | Cook | Silas | Rook |
|---|---|---|---|---|---|
| 0:00–4:00 | Shop (off-screen) | Shop | Shop | Shop | Shop |
| 4:00–6:00 | Foyer | Guest wing | Kitchen | Grounds | Drive |
| 6:00–14:00 | Study | Guest wing | Kitchen | Grounds | Garage |
| 14:00–24:00 | Foyer | Chapel | Cellar | Woods | Drive |
| 24:00–28:00 | Chapel | Chapel | Cellar | Woods | Gate |
| 28:00–30:00 | Chapel | Chapel | Cellar | Woods | Gate |

The schedule creates opportunities:

- Finch is near the study early.
- Ada can open the chapel after midnight.
- The Cook knows the cellar.
- Silas knows the woods route.
- Rook knows how the victim arrived.

## Questioning

To question an NPC:

1. Approach within 3 studs.
2. Press interact.
3. Choose a topic from the dialogue wheel:
   - The victim.
   - The lodge.
   - The night.
   - The staff.
   - The cult.
   - A specific clue.
4. The NPC answers with a short line.
5. The line is added to the notebook/recorder if the player has the item.

The dialogue wheel is text-first. Voice players can ask in voice, but the NPC's answer is always subtitled and logged.

## What NPCs know

Each NPC knows:

- One true thing about the case.
- One lie or half-truth.
- One thing they refuse to discuss.
- One thing they will say only if pressed (with an item or a clue).

Example:

- **Finch:** knows the killer left the study; lies that the study was locked; refuses to discuss 1936; pressed by the guest list, he admits the tenth guest.
- **Ada:** knows the chapel was cleaned after the rite; lies that she was hired in 1940; refuses to discuss the child's toy; pressed by the UV torch, she shows the crypt stair.
- **The Cook:** knows the cellar has a hidden door; lies that it floods; refuses to discuss the meat; pressed by the Ghost Blueprint, she opens the wine rack.
- **Silas:** knows the woods path; lies that he never goes there; refuses to discuss the grave; pressed by the compass, he marks the path.
- **Rook:** knows the victim arrived by car; lies that they arrived by train; refuses to discuss the trunk; pressed by the camera, he shows the luggage.

## NPC testimony and the killer

The killer cannot control NPCs. The killer can:

- Listen to testimony.
- Plant a false clue that contradicts it.
- Kill a player who recorded it.
- Use the Whisper Mask to imitate an NPC.

The killer cannot:

- Change an NPC's line.
- Move an NPC.
- Kill an NPC.
- Use an NPC as an alibi.

## Accessibility

- All NPC dialogue is subtitled.
- The dialogue wheel is keyboard/gamepad navigable.
- The NPCs have text descriptions.
- The testimony log is text.
- The NPCs do not require voice to question.
- The NPCs' lines are short and plain.

## Design notes

- **NPCs are witnesses, not quest givers.**
- **The staff should feel like people with secrets, not clue dispensers.**
- **Every NPC clue has a prop equivalent.** No soft-locks.
- **The best NPC line is the one the player remembers after the match.**
- **The victim is the most important NPC and never speaks.**

## Related

- [[NPC Testimony]]
- [[Madame Vesper]]
- [[Elias Blackwood]]
- [[The Staff]]
- [[The Victim]]
