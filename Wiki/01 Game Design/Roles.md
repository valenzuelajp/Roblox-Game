---
title: "Roles"
aliases:
  - "Role List"
tags:
  - game-design
  - status/locked
status: locked
updated: 2026-11-04
summary: "Investigator, killer, channeler, NPC, and spectator roles: abilities, information, goals, and role assignment rules."
related:
  - "[[Win Conditions]]"
  - "[[Killer Role]]"
  - "[[Ritual Overview]]"
  - "[[Player Count and Matchmaking]]"
---

# Roles

## Role summary

| Role | Count | Health | Goal |
|---|---|---|---|
| **Investigator** | 5–9 | 1 HP | Solve the Case File, perform the ritual, stop the killers, escape |
| **Killer** | 1–2 | 2 HP | Stage the crime, mark investigators, stop the ritual, prevent escape |
| **Channeler** | 0–1 at a time | 1 HP | Perform the ritual; a temporary role, not a permanent one |
| **Victim (NPC)** | 1 | — | The body; the crime |
| **Madame Vesper (NPC)** | 1 | — | Run the Curio Shop; lore |
| **Staff (NPCs)** | 3–5 | — | Testimony, keys, atmosphere |
| **Spectator** | 0–9 | — | Dead players; watch, dead chat, no influence |

## Investigator

**Fantasy:** a 1940s detective trapped in a house that is lying to them.

**Abilities:**
- Search containers and rooms.
- Read free clues.
- Use investigator items to reveal definitive clues.
- Submit answers to the Case File.
- Carry and use a pistol (if they get one).
- Detain a suspect.
- Vote (if voting is enabled).
- Perform or defend the ritual.
- Escape.

**Information:**
- Knows the four task names.
- Knows their own inventory and Shillings.
- Knows the Case File progress and the letters found.
- Does **not** know who the killer is until the ritual.

**Constraints:**
- 1 HP.
- No healing (proposed).
- Cannot see dead chat.
- Cannot use killer items.

## Killer

**Fantasy:** the cultist who staged the crime and is hiding in plain sight.

**Abilities:**
- Stage the crime during the shop.
- Mark an investigator with a sigil.
- Plant one false clue.
- Tamper with the evidence board (proposed; see [[Evidence Board]]).
- Access the black market tab.
- Use a pistol if they claim one.
- Last Hunt buffs after the ritual reveal.

**Information:**
- Knows the scenario card, the true answers, the victim, the weapon, the staging, and the Hollow Word.
- Knows the task rooms but not the exact randomized containers.
- At 8–10 players: knows the other killer; shares a private text channel; shares one mark cooldown.

**Constraints:**
- 2 HP.
- Cannot mark during the first 60 seconds of the match (proposed).
- Cannot steal a true clue.
- Cannot mark an NPC.
- Shared cooldown with the partner.

## Channeler

**Fantasy:** the investigator who risks everything to speak the ritual.

**How it works:**
- After 4/4 tasks, any living investigator can volunteer at the chapel.
- The channeler must stand in the ritual circle for 30 seconds.
- The channeler cannot search, shoot, or run while channeling.
- If the channeler is marked or leaves the circle, the ritual pauses or fails (see [[Ritual Interruption]]).
- The channeler is visible to everyone during the ritual (proposed).

**Why it exists:** it creates a defensible, exposed objective and a clear target for the killer.

## NPCs

### The Victim
- Scenario-defined.
- The body is the first clue.
- Cannot be marked, searched by the killer, or moved after staging.

### Madame Vesper
- Runs the Curio Shop.
- Fortune-teller flavor; gives the opening letter.
- May appear in the lodge as a neutral NPC (proposed) to deliver a mid-match hint.
- Not a killer; not a vote target.

### Staff
- Butler, maid, cook, groundskeeper, chauffeur (proposed).
- Provide testimony, keys, and atmosphere.
- Some are frightened, some are hostile, some are lying about what they saw.
- Not killers; cannot be marked.

## Spectator

- Dead players.
- Free-fly camera (proposed).
- Dead-only chat.
- Can see the map and the living players.
- Cannot speak to the living, vote, mark, or interact.
- Can watch the endgame and results.

## Role assignment

| Lobby size | Investigators | Killers | Notes |
|---|---|---|---|
| 6 | 5 | 1 | One killer; no partner channel |
| 7 | 6 | 1 | One killer |
| 8 | 6 | 2 | Partners; shared cooldown |
| 9 | 7 | 2 | Partners |
| 10 | 8 | 2 | Partners |

**Rules:**
- Roles are assigned randomly at match start.
- No role selection at launch.
- Party members can be split across teams; no forced team stacking (proposed).
- The killer is never revealed at the start.
- The first pistol is never given to a killer (secret exclusion) until the vote system is finalized.

## Role card UI

At match start, each player sees a private role card:

- **Investigator:** "You are an investigator. Solve the case. Trust carefully."
- **Killer:** "You are a killer. You staged the scene. Do not get caught."
- **Killer (partner):** "Your partner is [name]. You share one mark cooldown."
- **Channeler:** appears only when the ritual begins.

## Edge cases

| Situation | Rule |
|---|---|
| Killer disconnects | The partner continues; if solo, the match continues with one killer; no replacement |
| Investigator disconnects | Body remains; items drop; can rejoin |
| Both killers disconnect | Investigators can still complete the case and escape; reward tier applies |
| Player joins late | Not supported at launch; matches are sealed at start |
| Party of 5 in a 10-player lobby | The party can be split; no guarantee of same team |

## Related

- [[Win Conditions]]
- [[Killer Role]]
- [[Sigil System]]
- [[Ritual Overview]]
- [[Player Count and Matchmaking]]
