---
title: "Decision Log"
aliases:
  - "Design History"
  - "Changelog of Decisions"
tags:
  - start
  - decisions
  - status/active
status: active
updated: 2026-11-04
summary: "Chronological record of every major design decision, including superseded ideas, so future readers understand why the game looks the way it does."
related:
  - "[[Canonical Decisions]]"
  - "[[Open Questions]]"
  - "[[Changelog]]"
---

# Decision Log

Newest entries at the top. Each entry records what changed, why, and what it replaced.

| ID | Date | Status | Decision | Rationale / source |
|---|---|---|---|---|
| D-030 | 2026-11-04 | locked | Killer knows the scenario's task rooms but not the exact randomized clue containers. | Keeps the killer hunting with the team instead of camping a drawer. |
| D-029 | 2026-11-04 | locked | Clues are physical props; search takes about 2 seconds, item reduces to 1 second or reveals a hidden layer. | Makes the mansion feel physical and makes items meaningful. |
| D-028 | 2026-11-04 | locked | Ritual channel is 30 seconds; one killer interrupt per attempt; 60-second retry cooldown. | Creates a defensible endgame beat. Duration assumed from "ritual for 30". |
| D-027 | 2026-11-04 | locked | Four task letters plus one ritual letter form the five-letter Hollow Word. | Preserves the five-letter exit lock after the fifth question was removed. |
| D-026 | 2026-11-04 | locked | First pistol triggers at 1/4, not 3/4. | User: "first pistol will trigger on first case solved." |
| D-025 | 2026-11-04 | locked | Four bullets per pistol. | User: "4 bullet per pistol." |
| D-024 | 2026-11-04 | locked | No soft-locks: every task, chapel, and vault must be reachable; killer cannot steal a true clue. | Procedural generation safety. |
| D-023 | 2026-11-04 | locked | Cosmetic-only monetization; no pay-to-win. | Roblox policy and player trust. |
| D-022 | 2026-11-04 | locked | Obsidian vault is the source of truth; game code lives in `game/`. | User wants a whole wiki that other AI can read. |
| D-021 | 2026-11-04 | locked | Working title *Blackwood Lodge*. | Final title deferred by the user. |
| D-020 | 2026-11-04 | locked | Voice recommended, never required; text fallback always works. | Roblox voice is opt-in and not available to every player. |
| D-019 | 2026-11-04 | locked | Two killers at 8–10 are partners: know each other, private text, shared cooldown, both must be stopped. | User approved partnered killers. |
| D-018 | 2026-11-04 | locked | Ten scenario cards; killer draws three and picks one; customizes victim, room, red herring. | Replayability and killer authorship. |
| D-017 | 2026-11-04 | locked | Clue placement is randomized by room and container. | User: "randomize the clue where it placed." |
| D-016 | 2026-11-04 | locked | Map layout, connections, secrets, locks, and shift target are procedural per session. | User: "the map is more complex and every session the map is changing." |
| D-015 | 2026-11-04 | locked | Ritual reveals all killers (1 or 2) to everyone. | User: "reveal the 1 or 2 killers to everyone so the killer have the chance to kill the investigators." |
| D-014 | 2026-11-04 | locked | Innocent shot: victim dies, shooter gets two sigils, gun drops. | Makes friendly fire a real cost. |
| D-013 | 2026-11-04 | locked | Sigil kill loop: visible mark, physical sigil, countdown, break by puzzle. | Core killer pressure; no meeting to fall back on. |
| D-012 | 2026-11-04 | locked | Investigators 1 HP, killers 2 HP, 1 damage per bullet. | User: "killers have 2 hp and investigators only 1 hp; the bullet will get 1 per hit." |
| D-011 | 2026-11-04 | locked | Second pistol: three seals, one per floor, cabinet in the vault, first to claim. | Creates a contested objective. |
| D-010 | 2026-11-04 | locked | First pistol awarded at 1/4 solved. | User changed it from 3 correct to the first solved case. |
| D-009 | 2026-11-04 | locked | Five puzzle families: zodiac, binary, blood cipher, rune alignment, knot/pattern. | Reusable content across clues, sigils, and seals. |
| D-008 | 2026-11-04 | locked | Wrong Case File answer: 60s lock, Cinders loss, possible false letter. | Makes guessing costly. |
| D-007 | 2026-11-04 | locked | Free low-quality clue + item-gated definitive clue for every task. | User: "they must buy investigator items to know; or have the low quality for free." |
| D-006 | 2026-11-04 | locked | Case File is four tasks plus a ritual; the fifth question is removed. | User: "remove the number 5 mission... replace it to complete the ritual... finish the 4 tasks." |
| D-005 | 2026-11-04 | locked | Killer stages the crime during the solo shop window. | Hides the act and gives the killer authorship. |
| D-004 | 2026-11-04 | locked | Solo Curio Shop, 100 Shillings, unspent converts to Cinders. | Makes the shop a real economy. |
| D-003 | 2026-11-04 | locked | No meeting phases; no round resets; open mic. | User wanted social deduction without a meeting simulator. |
| D-002 | 2026-11-04 | locked | One 30-minute match, 6 PM to 7 AM. | User chose a continuous night. |
| D-001 | 2026-11-04 | locked | 6–10 players; 1 killer at 6–7; 2 at 8–10. | User wanted a flexible social-deduction lobby. |
| X-006 | 2026-11-04 | deprecated | The killer's mark countdown was 90 seconds. | Replaced by the locked loop D-013; the exact countdown is a tuning value. |
| X-005 | 2026-11-04 | deprecated | Clues were fixed to their task rooms. | Replaced by D-017. |
| X-004 | 2026-11-04 | deprecated | The map was a fixed mansion. | Replaced by D-016. |
| X-003 | 2026-11-04 | deprecated | The first pistol was random with no vote. | The user later introduced "voting time"; final method is O-002. |
| X-002 | 2026-11-04 | deprecated | Case File had five questions including "Who is the killer?" | Replaced by D-006. |
| X-001 | 2026-11-04 | deprecated | Case File had ten deductions. | Replaced by the five-question version, then D-006. |

## Pending decisions

These are logged but not resolved:

- O-001 Death and spectator rules.
- O-002 First pistol: random vs. voted.
- O-003 Voting phases.
- O-004 Win condition: escape vs. stop + escape.
- O-005 Detain and rescue details.
- O-006 Ritual site.
- O-007 Item catalog and prices.
- O-008 Final title.
- O-009 Story details.
- O-010 Hollow Word list.

See [[Open Questions]] for the full briefs.
