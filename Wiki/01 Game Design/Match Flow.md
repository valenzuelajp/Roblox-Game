---
title: "Match Flow"
aliases:
  - "Timeline"
  - "30-Minute Match"
tags:
  - game-design
  - status/locked
status: locked
updated: 2026-11-04
summary: "The full 30-minute match timeline from the solo Curio Shop to dawn, with phase goals, killer actions, UI, and lighting/audio cues."
related:
  - "[[Core Loop]]"
  - "[[Curio Shop]]"
  - "[[Ritual Overview]]"
  - "[[Last Hunt]]"
---

# Match Flow

One match. Thirty minutes. In-game time runs from **6:00 PM** to **7:00 AM**. There are no rounds and no meeting phases.

## Timeline

| Real time | In-game | Phase | Investigator goal | Killer goal | Lighting / audio |
|---|---|---|---|---|---|
| 0:00–4:00 | 6:00 PM | **Solo Curio Shop** | Spend 100 Shillings; choose a kit; read the letter | Choose a scenario; stage the body and clues; shop | Warm shop lamp; bell over the door; Vesper's voice |
| 4:00–6:00 | 7:00 PM | **Arrival + Discovery** | Enter the Foyer; meet the group; find the body; open the Case File | Blend in; react to the body; establish an alibi | Storm, rain, thunder; chandelier flicker |
| 6:00–14:00 | 8:00–11:00 PM | **Investigation I** | Search rooms; find free clues; buy/borrow items; solve tasks; survive marks | Learn the team; mark an isolated player; plant one false clue | Rain intensifies; clock ticks; distant piano |
| 14:00 | Midnight | **The Shift** | Adapt to the changed wing; find the chapel/vault | Use the confusion; reposition; mark | Lights surge; walls grind; bell tolls twelve |
| 14:00–24:00 | 12:00–5:00 AM | **Investigation II** | Finish the case; race for the second pistol; prepare the ritual | Protect the secret; contest the seals; interrupt the ritual | Darker; candles; heartbeat; strings |
| 24:00–28:00 | 5:00–6:30 AM | **Ritual / Endgame** | Channel the ritual; survive the reveal; get the fifth letter | Interrupt the ritual or prepare the Last Hunt | Choir; sigil hum; storm peaks |
| 28:00–30:00 | 6:30–7:00 AM | **Last Hunt / Escape** | Reach the exit with the Hollow Word | Kill the gun holders; stop the escape | Alarms; dawn light; final chase |
| 30:00 | 7:00 AM | **Dawn / Results** | Escape or be trapped | Complete the cult's work | Silence; rain stops; title card |

## Phase details

### 0:00–4:00 — Solo Curio Shop

- Each player is alone in a private shop instance.
- 100 Shillings.
- Investigator items are displayed with descriptions, prices, and limited stock.
- The killer has a hidden **Staging** tab: draw three scenario cards, pick one, customize victim identity, room, and red herring, then place the body and clues.
- The shop closes at 4:00. Unspent Shillings convert to Cinders at the end of the match.
- Voice is muted inside the shop (proposed) so the killer cannot be heard staging. Text is disabled or limited to the shop UI.

**Edge cases:**
- A player who does not finish shopping is auto-assigned a default kit.
- A killer who does not finish staging gets a default scenario and random staging.
- A disconnected player is replaced by a default loadout and can rejoin.

### 4:00–6:00 — Arrival and Discovery

- All players teleport into the Foyer.
- The storm cuts the road; the host is missing; the body is found in the staged room.
- The Case File opens. The four task names are revealed, but not the answers.
- The first mark is **not** available for 60 seconds (proposed) to give the team a grace period.
- The killer's staged scene is now visible and searchable.

**Goal:** establish the crime, the cast, and the first route.

### 6:00–14:00 — Investigation I

- The lodge is open. Rooms are searchable.
- Free clues are available in common containers.
- Item clues require the matching tool.
- The first task solved triggers the first pistol (see [[First Pistol]]).
- The killer can mark after the grace period; cooldown applies.
- The sigil loop begins.
- One false clue can be planted.

**Goal:** solve 1–2 tasks, find a gun, survive the first mark.

### 14:00 — The Midnight Shift

- The clock strikes twelve.
- One wing reconfigures: doors seal, stairs extend, rooms swap, a secret passage opens.
- The chapel and vault are unsealed (proposed).
- The map item updates; the Ghost Blueprint becomes useful.
- The killer gets a 10-second warning (proposed) so they can use the confusion.
- All sigils pause for 5 seconds during the shift (proposed).

**Goal:** adapt, regroup, and choose a new route.

### 14:00–24:00 — Investigation II

- The remaining tasks are solved.
- The three seals for the second pistol are active: one per floor, each a different puzzle.
- The vault cabinet opens when all three seals are solved.
- The ritual site is available.
- The killer is under pressure; marks are more frequent.
- The team should have 3–4 letters by the end of this phase.

**Goal:** finish the case, claim the second pistol, and prepare the ritual.

### 24:00–28:00 — Ritual / Endgame

- The ritual can be performed once all four tasks are correct.
- The ritual takes 30 seconds at the chapel (proposed site).
- A volunteer channels; the team defends.
- The killer can interrupt by marking the channeler or breaking an anchor.
- Success reveals all killers, grants the fifth letter, unlocks the exit, and triggers the Last Hunt.

**Goal:** complete the ritual or stop it.

### 28:00–30:00 — Last Hunt / Escape

- The killers are revealed.
- Last Hunt: 60 seconds, no mark cooldown, +15% speed, 10s wallhack (proposed).
- The exit is open but requires the five-letter Hollow Word.
- Investigators can detain or shoot the killers.
- The escape run is the final beat.

**Goal:** survive and escape, or stop the escape.

### 30:00 — Dawn / Results

- The match ends.
- Results screen: case progress, letters, kills, saves, reward tier, Cinders, coins.
- If the investigators escaped: investigator victory (reward tier depends on the case and killers stopped).
- If the killers prevented escape: killer victory.
- If both killers are detained and the investigators escape: 100% reward.

## Phase transition rules

| Transition | Trigger | Hard stop? |
|---|---|---|
| Shop → Arrival | Timer 4:00 | Yes |
| Arrival → Investigation I | Timer 6:00 | Yes |
| Investigation I → Shift | Timer 14:00 | Yes |
| Investigation II → Ritual window | 4/4 tasks or timer 24:00 | No; the ritual can start earlier if the chapel is open |
| Ritual → Last Hunt | Ritual success | Yes |
| Last Hunt → Escape | Timer 28:00 | Yes |
| Escape → Dawn | Timer 30:00 | Yes |

## What can go wrong

| Problem | Rule |
|---|---|
| Team solves 0 tasks by 24:00 | The ritual is unavailable; they must survive until dawn or find the exit another way (none at launch). |
| Team solves 4 tasks before midnight | The ritual must wait for the chapel to open at 14:00. |
| Killer interrupts every ritual | One interrupt per attempt; 60s retry; the killer must expose themselves. |
| Both killers are dead | Investigators still need the Hollow Word to escape; the ritual can still be performed. |
| All investigators are dead | Killers win immediately. |
| A player disconnects | Their body remains; items drop; they can rejoin if the match is still live. |

## Related

- [[Core Loop]]
- [[Case File Overview]]
- [[Ritual Overview]]
- [[Last Hunt]]
- [[Win Conditions]]
