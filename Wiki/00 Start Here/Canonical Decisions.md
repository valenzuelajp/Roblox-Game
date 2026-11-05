---
title: "Canonical Decisions"
aliases:
  - "Canon"
  - "Locked Decisions"
tags:
  - start
  - decisions
  - status/locked
status: locked
updated: 2026-11-04
summary: "The authoritative list of locked decisions for Blackwood Lodge. If any other page conflicts with this page, this page wins."
related:
  - "[[Decision Log]]"
  - "[[Open Questions]]"
  - "[[Design Status]]"
  - "[[AI Read Me]]"
---

# Canonical Decisions

> **Authority:** This page overrides every other page. If a design page disagrees with a locked row here, the design page is wrong.
>
> **Rule:** A decision is only `locked` when it is listed in the table below. Everything else is proposed, open, or deferred.

## Locked decisions

| ID | Decision | Details | Links |
|---|---|---|---|
| D-001 | **Player count and killer count** | 6–10 players. 6–7 players: 1 killer. 8–10 players: 2 partnered killers. | [[01 Game Design/Roles|Roles]] · [[Player Count and Matchmaking]] |
| D-002 | **Match length and clock** | One continuous 30-minute match. In-game time runs 6:00 PM to 7:00 AM. No rounds. | [[Match Flow]] |
| D-003 | **No meeting phases** | There is no emergency meeting, no discussion table, and no round reset. Communication is open mic and proximity text. | [[Core Loop]] · [[Voice and Text]] |
| D-004 | **Solo Curio Shop** | Each player enters a private shop instance before the match. Everyone starts with 100 Shillings. Unspent Shillings convert to Cinders at match end. | [[Curio Shop]] · [[Shillings and Cinders]] |
| D-005 | **Killer stages the scene during the shop** | The killer uses the shop window to choose a scenario, place the body, weapon, props, and signature. The solo instance hides the act. | [[Killer Role]] · [[Scenario Card Overview]] |
| D-006 | **Case File is four tasks plus a ritual** | The old fifth question ("Who is the killer?") was removed. The four tasks are Victim, Method, Scene, Motive. The fifth slot is the ritual. | [[Case File Overview]] · [[Case File Questions]] |
| D-007 | **Free clue and item clue** | Every task has a free low-quality clue and an item-gated definitive clue. The free clue is always available. The item clue reveals the truth. | [[Free vs Item Clues]] · [[Clue System Overview]] |
| D-008 | **Wrong answers have teeth** | A wrong answer costs Cinders, locks that task for 60 seconds, and may plant a false Hollow Word letter. | [[Rewards and Penalties]] |
| D-009 | **Five puzzle families** | Zodiac, binary, blood cipher, rune alignment, and knot/pattern. Reused for clues, sigils, and the second-pistol seals. | [[Puzzle System Overview]] |
| D-010 | **First pistol at 1/4** | The first pistol is awarded when the first Case File task is solved. It has four bullets. | [[First Pistol]] |
| D-011 | **Second pistol behind three seals** | Three seals, one per floor, each a different puzzle. Solving all three opens the vault cabinet. The first player to interact claims it — investigator or killer. It has four bullets. | [[Second Pistol]] |
| D-012 | **Asymmetric health** | Investigators have 1 HP. Killers have 2 HP. Each bullet deals 1 damage. | [[Health and Damage]] |
| D-013 | **Sigil kill loop** | The killer marks an investigator, a visible physical sigil spawns, a countdown begins, and anyone can break it by solving a puzzle. If it is not broken, the marked player dies. | [[Sigil System]] |
| D-014 | **Innocent shot penalty** | An investigator who shoots an innocent kills them, receives two sigils, and drops the gun. | [[Friendly Fire]] |
| D-015 | **Ritual reveals all killers** | Completing the ritual reveals every killer (1 or 2) to everyone. The reveal is intentional: it gives the killers a chance to strike. | [[Ritual Reveal]] |
| D-016 | **The map changes every session** | Room placement, connections, secret passages, locked doors, and the midnight shift target are randomized from a seed. | [[Procedural Generation]] · [[Map System Overview]] |
| D-017 | **Clues are randomized** | Clue rooms and containers are generated from the same seed as the map. Clues are not fixed to their anchor rooms. | [[Clue Placement]] |
| D-018 | **Scenario cards** | Ten scenario cards at launch. The killer draws three and picks one, then customizes the victim identity, room, and red herring. | [[Scenario Card Overview]] |
| D-019 | **Partnered killers** | At 8–10 players, the two killers know each other, share a private text channel, share one mark cooldown, and both must be stopped. | [[Killer Role]] |
| D-020 | **Voice is recommended, never required** | Roblox spatial voice is the intended experience. Text fallback must always work. No mechanic may require voice. | [[Voice and Text]] |
| D-021 | **Working title** | *Blackwood Lodge* is the working title. The final title is still open. | [[Vision]] · [[Open Questions]] |
| D-022 | **Wiki-first development** | This Obsidian vault is the source of truth. Game code lives in `game/`. | [[README]] · [[Development MOC]] |
| D-023 | **No pay-to-win** | Monetization is cosmetic-only. No item, clue, bullet, or map advantage can be purchased with Robux. | [[Monetization]] |
| D-024 | **No soft-locks** | The generator must guarantee that every task, the chapel, and the vault are reachable. The killer cannot steal a true clue. | [[Procedural Generation]] · [[Clue Placement]] |
| D-025 | **Four bullets per pistol** | Both the first and second pistol carry four bullets. | [[Pistols]] |
| D-026 | **First pistol holder exists at 1/4** | The first case solved triggers the first pistol immediately; it is not withheld until the ritual. | [[First Pistol]] |
| D-027 | **Four-letter word plus ritual letter** | The four tasks each yield one letter; the ritual yields the fifth. The five-letter word unlocks the exit. *(The five-letter word concept is locked; the exact word list is open.)* | [[Hollow Word]] |
| D-028 | **The ritual takes 30 seconds** | The channel is 30 seconds, interruptible, with one killer interrupt per attempt and a 60-second retry cooldown. *(Duration assumed from the design conversation; verify before implementation.)* | [[Ritual Overview]] |
| D-029 | **Clue search is physical** | Clues are props in the world. Searching takes about 2 seconds; the matching item reduces it to about 1 second or reveals a hidden layer. | [[Clue Containers]] |
| D-030 | **Killer knows task rooms, not containers** | The killer knows the scenario's task rooms but not the exact randomized containers. The killer may plant one false clue. | [[Clue Placement]] |

---

## Proposed defaults — not yet locked

These are recommendations. They are safe to prototype but must be confirmed before content lock.

| ID | Proposal | Why it matters | Page |
|---|---|---|---|
| P-001 | Dead investigators become ghosts with dead-only chat and no influence on the living. | Death rules affect pacing, moderation, and the killer's win condition. | [[Death and Spectator]] |
| P-002 | Pistol vote at 1/4; fate vote after the ritual. | The user has said both "random pistol" and "voting time"; this resolves it. | [[Voting Overview]] |
| P-003 | First pistol holder is voted, majority wins, tie is random. | Alternative: random holder with no vote. | [[First Pistol]] |
| P-004 | Escape is the win; stopping the killers is the 100% reward tier. | Cleaner than requiring both stop and escape. | [[Win Conditions]] |
| P-005 | Detain is a hold: 2s at 1 HP, 5s at 2 HP, interrupted by damage. | Creates the non-lethal 100% path. | [[Detain System]] |
| P-006 | Ritual site is the chapel. | Two entrances, thematic altar, good chokepoint. | [[Ritual Site]] |
| P-007 | Last Hunt lasts 60s; no mark cooldown, +15% speed, 10s wallhack. | Gives the revealed killers a fighting chance. | [[Last Hunt]] |
| P-008 | Map baseline is 24–28 rooms; scale 20–22 for 6–7 players, 26–30 for 8–10. | Balances traversal against hiding spots. | [[Map System Overview]] |
| P-009 | Shop items cost 20–35 Shillings; each player can buy 2–3. | Makes specialization meaningful. | [[Shop Balance]] |
| P-010 | Items drop on death and can be picked up. | Makes gun/items part of the map. | [[Investigator Items]] |
| P-011 | The chapel and vault are sealed until the midnight shift. | Concentrates the endgame. | [[Midnight Shift]] |
| P-012 | Ghost Blueprint is the Task 4 reward and the key to the original ritual entrance. | Ties the map to the story and the case. | [[Ghost Blueprint]] |
| P-013 | Hollow Word examples: BLACK, NIGHT, THORN, CROWN, GRAVE, ASHEN, SHADE, EMBER, SAINT, STORM. | Gives the ten scenario cards distinct words. | [[Hollow Word]] |
| P-014 | Monetization: cosmetic-only, private servers, no loot boxes. | Roblox policy and player trust. | [[Monetization]] |

---

## Open blockers

These have no answer yet. Do not implement them as if they were locked.

| ID | Question | Recommendation | Page |
|---|---|---|---|
| O-001 | What happens when an investigator dies? | Ghost spectator + dead chat. | [[Death and Spectator]] |
| O-002 | Is the first pistol random or voted? | Voted holder; majority; tie random. | [[First Pistol]] |
| O-003 | Is there a pistol vote, a fate vote, or both? | Both, but short. | [[Voting Overview]] |
| O-004 | Must investigators stop the killers *and* escape? | Escape = win; stopping = 100% reward. | [[Win Conditions]] |
| O-005 | How does detain/rescue work? | Hold + cellar cell + 10s rescue. | [[Detain System]] |
| O-006 | Is the ritual site the chapel? | Yes, with two entrances. | [[Ritual Site]] |
| O-007 | What are the item prices and the full catalog? | Draft in [[Item Catalog]]. | [[Shop Balance]] |
| O-008 | What is the final game title? | *Blackwood Lodge* as working title. | [[Open Questions]] |
| O-009 | What are the final story details? | Use the provisional story bible; resume the story round. | [[Story Bible]] |
| O-010 | What is the exact Hollow Word list? | One five-letter word per scenario card. | [[Hollow Word]] |

---

## Deprecated decisions

| ID | Old decision | Replaced by | Reason |
|---|---|---|---|
| X-001 | Case File had 10 deductions. | D-006 | Too long for a 30-minute match; five questions were tighter. |
| X-002 | Case File had 5 questions, including "Who is the killer?" | D-006 | The ritual reveal replaced the final accusation. |
| X-003 | The first pistol was random with no vote. | P-003 / O-002 | The user later introduced "voting time"; the final method is open. |
| X-004 | The map was a fixed mansion. | D-016 | The user wanted a more complex map that changes every session. |
| X-005 | Clues were fixed to their task rooms. | D-017 | The user wanted randomized clue placement. |
| X-006 | The killer's mark countdown was 90 seconds. | D-013 | The loop is locked; the exact countdown is still a tuning value. |
