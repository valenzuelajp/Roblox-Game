---
title: "Open Questions"
aliases:
  - "Design Blockers"
  - "Unresolved Questions"
tags:
  - start
  - decisions
  - status/open
status: open
updated: 2026-11-04
summary: "The unresolved design questions that block implementation, with options, recommendations, and the exact answer format the project owner can use."
related:
  - "[[Canonical Decisions]]"
  - "[[Decision Log]]"
  - "[[Design Status]]"
---

# Open Questions

These are the questions the design conversation did not fully answer. **Do not implement an open question as if it were locked.**

Answer format: `O-001 A`, `O-002 C`, etc. Accepted answers can be recorded in [[Decision Log]] and promoted to [[Canonical Decisions]].

---

## O-001 — Death and spectator rules

**Question:** What happens when an investigator dies?

**Options:**
- **A. Ghost spectator + dead chat.** Free-fly camera, dead-only chat, can watch the map and the living, cannot speak to the living, no revive.
- **B. Ghost with one haunt.** Same as A, but each ghost can trigger one distraction (a door slam, a flicker) once per match.
- **C. Revive at the ritual.** Dead players return if the ritual completes, but only at 1 HP.

**Recommendation:** A. It is the cleanest for moderation, prevents voice leaks, and keeps the 30-minute match moving.

**Impact:** Killer win condition, spectator UI, voice moderation, reward payouts.

**Links:** [[Death and Spectator]] · [[Win Conditions]] · [[Dead Chat]]

---

## O-002 — First pistol: random or voted?

**Question:** How is the first pistol holder chosen?

**Options:**
- **A. Random** among living investigators; killers secretly excluded; holder announced.
- **B. Voted** by the lobby; majority wins; tie is random among the tied; holder announced.
- **C. Random, but the holder can pass it once.**

**Recommendation:** B, because the user introduced "voting time" and a vote creates a social beat. If the project owner prefers speed, A is the fallback.

**Impact:** [[Pistol Vote]], [[First Pistol]], social pacing.

---

## O-003 — Voting phases

**Question:** Is there a pistol vote, a fate vote, or both?

**Options:**
- **A. Pistol vote only** at 1/4.
- **B. Fate vote only** after the ritual: detain vs. execute.
- **C. Both.** 15-second pistol vote at 1/4; 30-second fate vote after the ritual.

**Recommendation:** C. Keep both votes short and dangerous; the killer can campaign and act during the fate vote.

**Impact:** [[Voting Overview]], [[Pistol Vote]], [[Fate Vote]], match flow.

---

## O-004 — Win condition

**Question:** Do investigators need to stop the killers *and* escape, or is escape enough?

**Options:**
- **A. Escape = win.** Stopping the killers = 100% reward; escaping without stopping them = 50%. Killers win at parity or if no one escapes by dawn.
- **B. Stop + escape = win.** Escape alone is not enough; the killers must be stopped. This is harsher and can create a “we escaped but lost” feeling.
- **C. Stop = win.** Escape is only the reward multiplier.

**Recommendation:** A. It gives the survivors a clear goal and preserves the 100/50 reward tension.

**Impact:** [[Win Conditions]], [[03 Systems/Case File/Rewards and Penalties|Rewards]], [[Last Hunt]], [[Fate Vote]].

---

## O-005 — Detain and rescue

**Question:** How does detain work, and can allies rescue a detained killer?

**Options:**
- **A. Hold + cell.** 2s hold at 1 HP, 5s at 2 HP; damage interrupts. Detained killer is locked in the cellar cell. Allies rescue in 10s. Both detained = investigators win.
- **B. Hold only.** No cell; a detained killer is out for the rest of the match.
- **C. Interrogation.** Detain opens a 30-second interrogation minigame that can reveal one clue; the killer can lie.

**Recommendation:** A. It creates a non-lethal path and a rescue sub-objective.

**Impact:** [[Detain System]], [[Win Conditions]], [[05 World/Rooms/The Cellar|Cellar]] page, killer counterplay.

---

## O-006 — Ritual site

**Question:** Is the ritual site the chapel, the cellar, or a random room?

**Options:**
- **A. Chapel.** Two entrances, altar, stained glass, easy to guard, thematic.
- **B. Cellar.** One entrance, claustrophobic, killer can camp; high tension.
- **C. Random room.** The ritual site moves each session; the Ghost Blueprint reveals it.

**Recommendation:** A at launch; C as a post-launch variant.

**Impact:** [[Ritual Site]], [[Chapel]] page, map generation, endgame pacing.

---

## O-007 — Item catalog and prices

**Question:** What is the full item list, and what does each item cost?

**Options:**
- **A. Ten investigator items at 20–35 Shillings**, plus five killer black-market items.
- **B. Six items at 30–40 Shillings**, forcing hard specialization.
- **C. Twelve items at 15–30 Shillings**, more variety, more duplicate risk.

**Recommendation:** A. It supports five clue types plus utility without overwhelming new players.

**Impact:** [[Item Catalog]], [[Shop Balance]], [[Curio Shop]], economy.

---

## O-008 — Final game title

**Question:** What is the game called?

**Options:**
- **A. Blackwood Lodge** (working title; evocative, location-based).
- **B. The Hollow Word** (mystery-forward).
- **C. Last Light at Blackwood** (noir-forward).
- **D. The Ninth Guest** (story-forward).

**Recommendation:** Keep *Blackwood Lodge* for the vault and prototype; decide after the story round and a title test.

**Impact:** Roblox listing, logo, wiki root, domain/social handles.

---

## O-009 — Story details

**Question:** Are the provisional story answers canon?

The deferred story round proposed: Ashcombe, Vermont; 1947; the Hollow Court; the nine guests; the survivor; the original detectives; Madame Vesper as defector; stylized blood. None were approved.

**Recommendation:** Treat them as `proposed` until the story round is completed. The [[Story Bible]] marks each item.

**Impact:** Scenario cards, NPCs, lore, player wiki.

---

## O-010 — Hollow Word list

**Question:** What are the ten five-letter words?

**Proposed list:** BLACK, NIGHT, THORN, CROWN, GRAVE, ASHEN, SHADE, EMBER, SAINT, STORM.

**Recommendation:** One word per scenario card. Avoid words that are too easy to guess from the first two letters. The word must be enterable at the exit.

**Impact:** [[Hollow Word]], [[04 Scenarios/Scenarios MOC|04 Scenarios]], exit UI.

---

## O-011 — Map size and room count

**Question:** Is 24–28 rooms the right baseline?

**Options:**
- **A. 24–28** baseline, scaling 20–22 / 26–30 by lobby size.
- **B. 30–34** for 10-player lobbies, with more shortcuts.
- **C. 18–22** for a tighter, more claustrophobic game.

**Recommendation:** A. It is the best balance of exploration and a 30-minute timer.

**Impact:** [[Map System Overview]], room catalog, art budget.

---

## O-012 — Monetization and progression

**Question:** What is sold, and what is earned?

**Recommendation:** Cosmetic-only outfits, hats, glasses, gloves, gun skins, lobby themes, emotes; private servers; no loot boxes; no gameplay advantage. Cinders and coins are earned only.

**Impact:** [[Monetization]], [[03 Systems/Progression/Progression Overview|Progression]], Roblox policy.

---

## Answer template

Copy this into a message or a new decision entry:

```text
O-001: A
O-002: B
O-003: C
O-004: A
O-005: A
O-006: A
O-007: A
O-008: A
O-009: provisional
O-010: proposed list
O-011: A
O-012: cosmetic-only
```
