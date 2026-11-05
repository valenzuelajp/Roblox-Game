---
title: "NPC Testimony"
aliases:
  - "Testimony"
  - "Witnesses"
  - "Staff Lines"
tags:
  - systems
  - npcs
  - clues
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "How staff testimony works: the truth/lie structure, the five witnesses, recording, contradictions, and fair-play rules."
related:
  - "[[NPC Overview]]"
  - "[[The Staff]]"
  - "[[Clue Types]]"
  - "[[Clue System Overview]]"
---

# NPC Testimony

> [!spoiler] Design spoiler
> This page includes the staff's true and false lines. Do not export it to the player wiki.

## The testimony contract

Every staff NPC gives:

1. **One true thing** about the case.
2. **One lie or half-truth.**
3. **One refusal.**
4. **One pressed confession** (with an item or a clue).

The player must decide which is which. The game never labels a line as true or false.

## The five witnesses

### Mr. Finch — the butler

| Line | Type | Content |
|---|---|---|
| "The study was locked all night." | Lie | The study was open; Finch locked it after the body was found. |
| "I heard the victim argue with a guest at eleven." | True | The victim argued with the killer. |
| "I do not discuss 1936." | Refusal | He was the young footman in 1936. |
| Pressed by the guest list | Confession | "There was a tenth guest. The list was rewritten." |

**Gameplay:** Finch is the social witness. He points to a guest, not a room.

### Ada — the maid

| Line | Type | Content |
|---|---|---|
| "I was hired in 1940." | Lie | She was hired in 1936, the week after the rite. |
| "The chapel was cleaned the morning after the guests left." | True | She cleaned blood from the altar. |
| "I do not go into the attic." | Refusal | She hears the child's toy. |
| Pressed by the UV torch | Confession | She shows the crypt stair behind the altar. |

**Gameplay:** Ada is the chapel witness. She opens the post-midnight route.

### The Cook — the cellar witness

| Line | Type | Content |
|---|---|---|
| "The cellar floods every spring." | Lie | It does not flood; the water is from the crypt. |
| "The wine racks were moved in 1936." | True | They hide the original ritual door. |
| "I do not discuss the meat." | Refusal | The freezer holds more than food. |
| Pressed by the Ghost Blueprint | Confession | She opens the wine rack. |

**Gameplay:** The Cook is the cellar witness. She opens the 1926 passage.

### Silas — the groundskeeper

| Line | Type | Content |
|---|---|---|
| "I never go into the woods." | Lie | He tends the grave. |
| "There is a path that only appears in the rain." | True | It leads to the gate. |
| "I do not discuss the grave." | Refusal | The grave is empty. |
| Pressed by the compass | Confession | He marks the path on the map. |

**Gameplay:** Silas is the escape witness. He opens the woods route.

### Rook — the chauffeur

| Line | Type | Content |
|---|---|---|
| "The victim arrived by train." | Lie | He drove the victim from Ashcombe. |
| "There was a trunk in the car." | True | The trunk held the ritual props. |
| "I do not discuss the trunk." | Refusal | The trunk is still in the garage. |
| Pressed by the camera | Confession | He shows the luggage tag with the victim's real name. |

**Gameplay:** Rook is the victim witness. He confirms the victim's identity.

## Recording testimony

- **Notebook:** records the line as text.
- **Recorder:** records the audio and can replay it.
- **Case chat:** the player can type the line for the team.
- **Evidence board:** the line can be pinned as a note.
- **No item:** the player must remember it.

Testimony is **team-shared** once recorded. The killer can hear it too if nearby.

## Contradictions

The staff's lines are designed to contradict each other:

- Finch says the study was locked; Ada says she cleaned it at midnight.
- The Cook says the cellar floods; Silas says the cellar is dry.
- Rook says the victim arrived by train; the luggage tag says otherwise.

The player must decide which witness to believe. The item clue resolves the contradiction.

## The killer and testimony

The killer can:

- Listen to testimony.
- Plant a false clue that contradicts a witness.
- Use the Whisper Mask to imitate a witness.
- Kill a player who recorded testimony (the recording drops with the item).

The killer cannot:

- Change a line.
- Silence a witness permanently.
- Use a witness as an alibi.

## Fair-play rules

- Every true line has a **prop or item** that corroborates it.
- Every lie has a **contradiction** that exposes it.
- No witness is the only source of a task answer.
- No witness requires voice to question.
- No witness is locked behind a task they do not help with.
- No witness gives the Hollow Word.

## Accessibility

- All lines are subtitled and logged.
- The dialogue wheel is keyboard/gamepad navigable.
- The recorder has a text transcript.
- The notebook has a text view.
- The pressed confession has a visual cue and a text prompt.

## Design notes

- **Testimony is the human layer of the case.** It should make the player suspect people, not just props.
- **The lie should be small.** A giant lie is a giveaway.
- **The pressed confession should feel earned.** The player used the right tool.
- **The staff should be memorable.** Give each one a gesture, a smell, a sound.
- **Never let a witness solve the case.** They point; the player decides.

## Related

- [[NPC Overview]]
- [[The Staff]]
- [[Clue Types]]
- [[Clue System Overview]]
