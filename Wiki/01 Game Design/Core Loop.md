---
title: "Core Loop"
aliases:
  - "Gameplay Loop"
tags:
  - game-design
  - status/locked
status: locked
updated: 2026-11-04
summary: "The macro loop, investigator loop, killer loop, tension curve, and anti-loop safeguards for a Blackwood Lodge match."
related:
  - "[[Match Flow]]"
  - "[[Case File Overview]]"
  - "[[Killer Role]]"
  - "[[Ritual Overview]]"
---

# Core Loop

## Macro loop

```text
Lobby
  → Solo Curio Shop (100 Shillings; killer stages the crime)
  → Arrival + body discovery
  → Investigation I (explore, search, decode, answer tasks)
  → Midnight Shift (the house changes; chapel and vault open)
  → Investigation II (deep clues, second pistol race, ritual setup)
  → Ritual (30s channel; reveals killers; fifth letter)
  → Last Hunt (killers get one aggressive window)
  → Vote / Detain / Escape
  → Dawn / Results / Rewards
```

One pass is one 30-minute match. There are no rounds.

## Investigator loop

```text
Enter a room
  → Read the room (props, stains, papers, sounds)
  → Search containers (about 2s each)
  → Find a free clue (low quality)
  → Decide: is this enough to answer, or do we need the item?
  → Buy, borrow, or find the matching investigator item
  → Reveal the definitive clue
  → Submit the answer at the Case File / evidence board
  → Correct: +1 progress, Cinders, one Hollow Word letter
  → Wrong: 60s lock, Cinders loss, possible false letter
  → Repeat for four tasks
  → Perform the ritual
  → Survive the Last Hunt
  → Escape before 7 AM
```

### Investigator decisions

| Decision | Tension |
|---|---|
| Search this room or move to the next? | Time vs. coverage |
| Spend Shillings on an item or save for Cinders? | Information vs. reward |
| Answer now with the free clue or wait for the item? | Speed vs. accuracy |
| Share the clue or keep it? | Trust vs. control |
| Follow the killer's suggestion or split up? | Safety vs. coverage |
| Shoot the suspect or detain? | Speed vs. 100% reward |
| Break the sigil or keep working? | Save a teammate vs. finish the case |

## Killer loop

```text
Stage the scene in the shop
  → Choose a scenario card
  → Place the body, weapon, props, signature, red herring
  → Enter the lodge as an investigator
  → Blend in, help search, gain trust
  → Learn which tasks the team is close to solving
  → Mark a isolated investigator
  → Defend the sigil or bait the rescue
  → Sabotage: plant a false clue, tamper with the board, lie in voice
  → Protect the secret until the ritual
  → Survive the reveal
  → Last Hunt: no cooldown, speed, wallhack
  → Kill the gun holders, reach parity, or stall until dawn
```

### Killer decisions

| Decision | Tension |
|---|---|
| Mark now or wait for a better target? | Pressure vs. exposure |
| Defend the sigil or fake helping? | Rescue denial vs. cover |
| Plant the false clue here or save it? | Confusion vs. evidence |
| Kill the pistol holder or the clue expert? | Threat removal vs. suspicion |
| Let the ritual happen or interrupt it? | Stop the reveal vs. reveal the team's position |
| Chase the escapee or stop the ritual? | Endgame priority |

## Tension curve

| Phase | Tension | Source |
|---|---|---|
| Shop | Low | Planning, shopping, paranoid glances |
| Arrival | Medium | Body discovery, first impressions |
| Investigation I | Rising | Empty rooms, missing players, first mark |
| Midnight Shift | Spike | The map changes; a safe route disappears |
| Investigation II | High | The case is close; the killer is desperate |
| Ritual | Peak | A 30-second exposed channel |
| Last Hunt | Peak | The killers are known and dangerous |
| Escape | Resolution | The run to the exit |

## Anti-loop safeguards

| Bad loop | Safeguard |
|---|---|
| Camping the evidence board | The board is in the Foyer; the killer can mark campers; clues are elsewhere. |
| Guessing all answers | Wrong answers lock the task for 60s and cost Cinders. |
| Following the pistol holder forever | The killer can mark the holder; the second pistol is contested. |
| Hiding in one room | The midnight shift moves rooms; the ritual and exit require movement. |
| Killer camping the ritual | Two entrances; the ritual can be interrupted, but the killer must expose themselves. |
| Dead players leaking info | Dead chat is separate; no living communication. |
| One player doing everything | Four tasks spread across the map; items are limited; the team must split. |

## Loop length targets

| Activity | Target |
|---|---|
| Cross the lodge | 20–40s |
| Search a container | 2s |
| Solve a puzzle | 20–60s |
| Complete one task | 3–6 min |
| Complete all four tasks | 18–24 min |
| Ritual | 30s |
| Last Hunt | 60s |
| Escape run | 60–120s |

## Related

- [[Match Flow]] — the exact timeline.
- [[Case File Overview]] — the four tasks.
- [[Sigil System]] — the killer's pressure.
- [[Ritual Overview]] — the endgame trigger.
- [[Win Conditions]] — how the loop resolves.
