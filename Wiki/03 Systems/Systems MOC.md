---
title: "Systems MOC"
aliases:
  - "Systems Map"
  - "Game Systems"
tags:
  - moc
  - systems
  - status/active
status: active
updated: 2026-11-04
summary: "Map of Content for every gameplay system in Blackwood Lodge, with reading order, dependencies, and status."
related:
  - "[[Game Design MOC]]"
  - "[[Case File Overview]]"
  - "[[Killer Role]]"
  - "[[Technical Overview]]"
---

# Systems MOC

> [!info] How to read this folder
> Start with the **Case File** and **Clues**. Those two systems define what the investigators do for the first twenty minutes. Then read **Puzzles**, **Ritual**, and **Killer** for the pressure. Combat, voting, shop, and map are support systems. Technical pages are for builders.

## The system stack

```text
Match clock
  └── Case File (4 tasks + ritual)
        ├── Clues (free + item)
        │     ├── Containers
        │     ├── Placement
        │     └── False clues
        ├── Puzzles (5 families)
        │     ├── Sigil rescue
        │     ├── Second-pistol seals
        │     └── Map locks
        └── Hollow Word (5 letters)
              └── Exit lock

Killer pressure
  ├── Mark → Sigil → countdown → death
  ├── Sabotage
  ├── Partners
  └── Last Hunt

Investigator pressure
  ├── Shop economy
  ├── Items and clues
  ├── Pistols and bullets
  ├── Detain vs shoot
  └── Escape before dawn

World pressure
  ├── Procedural map
  ├── Midnight shift
  ├── Locked doors and keys
  └── Secret passages
```

## Reading order

### First pass — the core loop

1. [[Case File Overview]]
2. [[Case File Questions]]
3. [[Free vs Item Clues]]
4. [[Clue System Overview]]
5. [[Puzzle System Overview]]
6. [[Ritual Overview]]
7. [[Killer Role]]
8. [[Sigil System]]
9. [[Combat Overview]]
10. [[Win Conditions]]

### Second pass — the support systems

11. [[Curio Shop]]
12. [[Item Catalog]]
13. [[Map System Overview]]
14. [[Procedural Generation]]
15. [[Midnight Shift]]
16. [[Voice and Text]]
17. [[Progression Overview]]
18. [[UI and UX Overview]]

### Builder pass — implementation

19. [[Technical Overview]]
20. [[Server Authority]]
21. [[Networking and Remotes]]
22. [[Data Model]]
23. [[Match State Machine]]
24. [[Anti-Cheat]]

## Pages by folder

### Case File
- [[Case File Overview]]
- [[Case File Questions]]
- [[Free vs Item Clues]]
- [[Hollow Word]]
- [[Evidence Board]]

### Clues
- [[Clue System Overview]]
- [[Clue Types]]
- [[Clue Containers]]
- [[Clue Placement]]
- [[False Clues]]

### Puzzles
- [[Puzzle System Overview]]
- [[Zodiac Puzzle]]
- [[Binary Puzzle]]
- [[Blood Cipher]]
- [[Rune Alignment]]
- [[03 Systems/Puzzles/Knot and Pattern|Knot Pattern]]
- [[Puzzle Fairness]]

### Ritual
- [[Ritual Overview]]
- [[Ritual Site]]
- [[Ritual Interruption]]
- [[Ritual Reveal]]
- [[Last Hunt]]

### Killer
- [[Killer Role]]
- [[Sigil System]]
- [[03 Systems/Killer/Sabotage|Killer Sabotage]]
- [[03 Systems/Killer/Partner Killers|Killer Partners]]
- [[Killer Tells]]

### Combat
- [[Combat Overview]]
- [[Health and Damage]]
- [[Pistols]]
- [[First Pistol]]
- [[Second Pistol]]
- [[Friendly Fire]]
- [[Detain System]]
- [[Death and Spectator]]

### Voting
- [[Voting Overview]]
- [[Pistol Vote]]
- [[Fate Vote]]

### Shop and Economy
- [[Curio Shop]]
- [[Shillings and Cinders]]
- [[Item Catalog]]
- [[Investigator Items]]
- [[Killer Black Market]]
- [[Shop Balance]]

### Map
- [[Map System Overview]]
- [[Procedural Generation]]
- [[Floor Plans]]
- [[Anchors and Modular Rooms]]
- [[03 Systems/Map/Secret Passages|Secret Passages]]
- [[Midnight Shift]]
- [[Ghost Blueprint]]
- [[Locked Doors and Keys]]

### NPCs
- [[NPC Overview]]
- [[NPC Testimony]]

### Scenario Cards
- [[Scenario Card Overview]]
- [[Scenario Card Anatomy]]
- [[Scenario Selection]]
- [[Scenario Difficulty]]

### Social
- [[Voice and Text]]
- [[Communication Rules]]
- [[Moderation and Safety]]
- [[Dead Chat]]

### Progression
- [[Progression Overview]]
- [[Cinders]]
- [[Unlocks]]
- [[Cosmetics]]
- [[Badges]]
- [[Monetization]]

### UI and UX
- [[UI and UX Overview]]
- [[HUD]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Onboarding]]

### Technical Systems
- [[Technical Overview]]
- [[Server Authority]]
- [[Networking and Remotes]]
- [[Data Model]]
- [[Match State Machine]]
- [[Anti-Cheat]]
- [[Performance and Telemetry]]

## Cross-cutting rules

These apply to every system on this page:

1. **Server authority.** The server owns the truth: answers, killer identity, clue locations, sigils, health, and the clock.
2. **No soft-locks.** Every task, the chapel, and the vault must be reachable from every seed.
3. **Voice is optional.** No mechanic may require voice. Every social action has a text equivalent.
4. **No pay-to-win.** Nothing in the shop or the Robux store changes the odds.
5. **No instant death without counterplay.** Every kill has a warning, a timer, or a rescue.
6. **No gore.** Stylized blood only.
7. **Readable in blackout.** Every critical clue has a non-visual or lit fallback.
8. **The killer can be found.** No unfair tells, no random reveals before the ritual.
9. **The house is the third player.** The map, the shift, and the staff create pressure without taking sides.
10. **Every system has a counterplay.** If a system cannot be countered, it is not finished.

## Status legend

| Status | Meaning |
|---|---|
| `locked` | Decided; do not change without updating [[Canonical Decisions]]. |
| `proposed` | Recommended; safe to prototype; not final. |
| `open` | No decision; do not implement as final. |
| `deferred` | Intentionally postponed. |
| `deprecated` | Replaced; kept for history. |

## Related

- [[Game Design MOC]]
- [[Canonical Decisions]]
- [[Open Questions]]
- [[Technical Overview]]
