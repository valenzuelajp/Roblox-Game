---
title: "The Killer"
aliases:
  - "The Cultist"
  - "The Hand"
  - "The Choir"
  - "Player Killer"
tags:
  - story
  - character
  - killer
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "The player-controlled cultist role: who they are, what they know, how they stage the crime, how they hunt, and how they lose. Spoiler-heavy."
related:
  - "[[Story Bible]]"
  - "[[The Hollow Court]]"
  - "[[Killer Role]]"
  - "[[Scenario Card Overview]]"
  - "[[Sigil System]]"
  - "[[Endings]]"
---

# The Killer

> [!spoiler] Design spoiler
> This page describes the killer's secret knowledge and win condition. It must never appear in the player wiki.

## Who the killer is

The killer is a player. They are a member of **The Hollow Court**, planted among the investigators. They are not a monster, a ghost, or a scripted NPC. They are a guest with a clean coat, a steady voice, and a reason to be here.

At **6–7 players**, there is **one killer**: **The Hand**.

At **8–10 players**, there are **two partnered killers**: **The Hand** and **The Choir**. They know each other from the first second, share a private text channel, and share one mark cooldown. They do not share health, inventory, or position. Both must be stopped.

The killer's role is assigned secretly at match start. The assignment is server-authoritative and never exposed to the client until the reveal.

## What the killer knows

The killer knows more than anyone else in the lobby:

| Knowledge | The killer knows | The killer does not know |
|---|---|---|
| The scenario | The full card: victim, motive, weapon, staging, signature, red herring, Hollow Word | — |
| The true answers | All four Case File answers | — |
| The task rooms | Which rooms the tasks are themed around | The exact containers |
| The clue placement | The general wing and the reserved staging room | The randomized hiding spots |
| The map | The seed's layout after the first minute | Secret passages until they find them |
| The ritual | The chapel location, the channel time, the interrupt windows | Whether the investigators will complete it |

The killer may **plant one false clue** per match. The false clue is a physical prop that supports a wrong answer. It cannot replace or steal a true clue. It must be placed in a room the killer can physically reach.

The killer cannot read the investigators' Case File UI. They can see the physical evidence board, hear the table talk, and watch who searches where.

## The staging window

The crime is staged during the **solo Curio Shop** phase (`0:00–4:00`). The killer enters the same shop instance as everyone else, but their interface has a hidden **Staging Tab**.

The staging flow:

1. **Draw three scenario cards** from the ten-card deck.
2. **Pick one.** The other two are discarded and never shown to anyone.
3. **Customize three details:** the victim's identity, the staging room, and the red herring. The card supplies valid options; the killer cannot invent a victim or a room outside the card's list.
4. **Place the body, weapon, and props** using the card's placement rules. The game snaps them to valid anchors and validates reachability.
5. **Choose the signature** from the card's signature list. This is the tell the investigators can read.
6. **Confirm.** The staging tab closes. The killer buys items like everyone else.

The staging timer is the same four minutes as the shop. The killer can stage in about two minutes and still shop. If the killer does not confirm a scenario, the game picks one at random and uses the default customization.

> [!note] Why the shop hides it
> Every player is alone in the shop. The killer is not visibly absent from a shared lobby. The staging happens in the same four minutes everyone spends spending Shillings, so the act leaves no social tell.

## The killer's loop

The killer's match has four jobs:

1. **Protect the lie.** The staged scene is the story. If the investigators read it correctly, the killer is exposed.
2. **Slow the case.** Mislead, plant the false clue, interrupt searches, and make the free clues look more reliable than they are.
3. **Thin the house.** Mark investigators, force rescues, and drain the team's time and items.
4. **Survive the reveal.** The ritual reveals the killers. After that, the killer must win the Last Hunt or reach parity before dawn.

### Marking

The killer marks a living investigator within range and line of sight. The mark is not instant death. It creates a **visible sigil** somewhere on the map and starts a countdown. The victim is marked; everyone can see the sigil. Anyone can break it by solving a puzzle.

The killer wants the sigil to be **hard to reach**, not impossible. A sigil in a locked room, a distant wing, or a room with one entrance buys time. A sigil in the foyer is a gift to the investigators.

The killer can defend the sigil. Standing near it does not stop a solver, but the killer can mark a rescuer, block a door, or use the environment.

### Sabotage

The killer has a small sabotage kit, separate from the mark:

| Sabotage | Effect | Counterplay |
|---|---|---|
| **False clue** | Plants one prop that supports a wrong answer. | The item clue contradicts it. |
| **Flicker** | Kills the lights in one wing for 15 seconds. | UV torch, flashlight, memorized layout. |
| **Lock** | Locks one door for 20 seconds. | Lockpick, secret passage, second route. |
| **Whisper** | Plays a cult whisper near a player to bait them away. | Voice chat coordination; ignore and search. |
| **Cold spot** | Drops the temperature in a room; the victim's breath fogs. | Cosmetic tell; the room may hide a clue. |

Sabotage has a shared cooldown. The killer cannot spam all five. The exact cooldowns are tuning values.

### Combat

The killer has **2 HP**. Investigators have **1 HP**. A bullet deals **1 damage**.

The killer can pick up a pistol if they find one, claim the second pistol, or take a dropped gun. With a pistol, the killer can shoot at range and bypass the sigil loop. This is the killer's biggest power spike and the reason the second pistol is a race.

If the killer is reduced to **1 HP**, they leave a **blood trail**. The trail is visible with the naked eye and glows under UV. It leads toward the killer's last known position, not their current position. The trail fades after 20 seconds.

If a killer reaches **0 HP**, they are **downed**, not instantly removed. Downed killers can be detained or finished. A downed killer can crawl slowly and whisper to their partner. The exact downed rules are part of the detain design.

### Partners

The Hand and The Choir:

- Know each other's identity from the start.
- Share a private text channel.
- Share one mark cooldown. If The Hand marks, The Choir cannot mark until the cooldown ends.
- Can see each other's sigils and sabotage.
- Do **not** share health, items, or position.
- Both must be stopped. One dead killer does not end the match.
- If one is detained, the other can rescue them from the cellar cell.

The partners are not told which one is "primary." They decide.

## Win condition

The killers win by any of the following:

1. **Parity.** The number of living killers is greater than or equal to the number of living investigators. At that point the investigators cannot stop them.
2. **Disarmament.** Every pistol holder is dead or detained, and no investigator can claim another gun.
3. **Dawn.** The clock reaches 7:00 AM and the investigators have not escaped. The ritual completes.

The killers do **not** win by killing a fixed number of players. They win by making the house impossible to leave.

## The reveal

The **Revealing Ritual** exposes every killer to everyone. This is not a bug. It is the endgame's design:

- The investigators get certainty.
- The killers get the **Last Hunt**: no mark cooldown, a speed boost, and a short wallhack.
- The exit unlocks.
- The fifth letter is granted.

The reveal turns a hidden social game into a visible chase. The killer's last job is to make the chase end before dawn.

## Tells and fair play

The killer should be **findable**, not obvious. Fair tells:

- They know a room's layout before they should.
- They are calm when a body is found.
- They push the team toward a wrong answer.
- They are near a sigil but do not help solve it.
- They have blood on their coat after a mark.
- They avoid the chapel.
- They buy an item that only helps the killer.
- They are the first to suggest the ritual is too dangerous.

Unfair tells:

- A random glowing outline.
- A name tag that behaves differently.
- A voice effect the killer cannot control.
- A UI element only the killer sees.
- A sigil that spawns on top of the killer.

The killer's identity should be reconstructible from behavior and evidence. The player wiki may list "things to watch for," but never the exact scenario answers.

## Voice and roleplay

The killer is a roleplay role. The best killers do not announce themselves; they become the most helpful investigator in the room.

Suggested voice lines for the killer's internal "cult voice" (played only to the killer, never to the table):

- "The house remembers you."
- "You were always the tenth."
- "One more guest. One more seat."
- "Do not let them finish the word."

These lines are optional flavor. They must not leak the killer's identity to the table.

## Design notes

- **No instant kills.** Every mark gives the table a chance to respond.
- **No spawn camping.** The first 60 seconds of the investigation phase are mark-free.
- **No unwinnable sigils.** The generator validates that every sigil is reachable and solvable by at least two routes.
- **No voice-only tells.** Text players must be able to participate in the social read.
- **No pay-to-win.** The killer's power is not purchasable.
- **No gore.** The horror is in the staging, not the wound.

## Related

- [[The Hollow Court]]
- [[Killer Role]]
- [[Sigil System]]
- [[Scenario Card Overview]]
- [[Endings]]
- [[Spoiler Policy]]
