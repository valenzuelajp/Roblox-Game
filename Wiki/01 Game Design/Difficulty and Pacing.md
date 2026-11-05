---
title: "Difficulty and Pacing"
aliases:
  - "Balance"
  - "Tension Curve"
tags:
  - game-design
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The target difficulty, the 30-minute tension curve, player-count scaling, onboarding, and the tuning levers for investigators and killers."
related:
  - "[[Match Flow]]"
  - "[[Core Loop]]"
  - "[[Case File Overview]]"
  - "[[Sigil System]]"
---

# Difficulty and Pacing

## Target difficulty

**Medium.** A first-time team should be able to solve 1–2 tasks and survive the first mark. A coordinated team should solve all four tasks, perform the ritual, and escape — but not without losses.

The user's instruction: *"make it medium difficulty."*

## Why medium

- Too easy: the killer feels like a spectator; the ritual is a formality.
- Too hard: the Case File becomes a lottery; the killer wins by default.
- Medium: the free clue gives a path, the item confirms it, and the killer can still lie.

## The answer structure

Each task has **three options**:

1. One correct answer.
2. One wrong answer eliminated by the free clue.
3. One plausible wrong answer that the item clue disproves.

This means:
- A team with no items can still guess between two options (50%).
- A team with the item gets certainty.
- A team that ignores the free clue can waste the item.

## Tension curve

| Minute | Tension | What the players feel |
|---|---|---|
| 0–4 | Low | Shopping, planning, "who is acting strange?" |
| 4–6 | Medium | The body; the first lie |
| 6–10 | Rising | Empty rooms; the first missing player |
| 10–14 | High | First pistol; first mark; the house creaks |
| 14–16 | Spike | Midnight shift; a route disappears |
| 16–22 | High | The case is close; the killer is desperate |
| 22–26 | Peak | Ritual setup; exposed channel |
| 26–30 | Peak | Last Hunt; escape |

## Pacing targets

| Beat | Target time | If it is late… |
|---|---|---|
| First clue found | 2–3 min | Add a free clue near the Foyer |
| First task solved | 6–9 min | Lower the item requirement or add a supporting clue |
| First pistol | 8–12 min | The first task should be achievable early |
| Midnight shift | 14:00 | Fixed |
| Third task solved | 20–24 min | Add a supporting clue or shorten a puzzle |
| Ritual | 24–28 min | The chapel opens at 14:00; the team must choose the timing |
| Escape | 28–30 min | Fixed |

## Player-count scaling

| Lobby | Killers | Rooms | Tasks | Pistols | Marks |
|---|---|---|---|---|---|
| 6–7 | 1 | 20–22 | 4 | 2 | 90s cooldown |
| 8–10 | 2 | 26–30 | 4 | 2 | Shared 90s cooldown |

**Rules:**
- More players means more rooms, not more tasks.
- More players means more items in the shop, not cheaper items.
- Two killers share one cooldown; they cannot double-mark.
- The second pistol is always contested; with two killers, it is a major swing.

## Onboarding

- A 60-second tutorial in the lobby: movement, search, Case File, sigil.
- A "Detective's Notes" panel with the four task names and a one-line explanation.
- The first free clue is always close to the Foyer.
- The first mark is delayed 60 seconds.
- The first pistol holder gets a private tooltip.
- Voice is recommended, but the ping wheel and text callouts must work.

## Killer difficulty

The killer is the hardest role. The first-time killer needs:

- A clear staging UI with a preview.
- A checklist: victim, weapon, staging, signature, red herring.
- A reminder that the free clues are vague and the item clues are definitive.
- A marker for the task rooms, not the containers.
- A "suggest a wrong answer" prompt that costs nothing but risks suspicion.

## Anti-frustration rules

| Frustration | Fix |
|---|---|
| "I searched 10 rooms and found nothing." | Every room has at least one searchable container; free clues are guaranteed to spawn. |
| "The killer is too strong." | One mark cooldown; sigils are breakable by anyone; the killer has 2 HP but no gun at start. |
| "The investigators are too strong." | The killer can interrupt the ritual; the second pistol is contested; friendly fire is deadly. |
| "I died and now I'm bored." | Spectator free-cam + dead chat + endgame predictions. |
| "The map is too confusing." | Landmarks, compass, map item, consistent floor themes. |
| "The puzzle is too hard." | Three difficulty tiers; hints after 30s; item shortcuts. |

## Tuning levers

| Lever | Effect |
|---|---|
| Mark cooldown | Lower = more pressure; higher = more breathing room |
| Sigil countdown | Lower = harder rescues; higher = more saves |
| Ritual duration | Lower = easier reveal; higher = more interruption |
| Item prices | Lower = more certainty; higher = more guessing |
| Free clue vagueness | Higher = more item dependence |
| Second-pistol seals | More seals = later gun; fewer = earlier swing |
| Last Hunt duration | Longer = more killer pressure |
| Exit window | Shorter = more tension; longer = more forgiving |

## Related

- [[Match Flow]]
- [[Sigil System]]
- [[Case File Overview]]
- [[Shop Balance]]
- [[Open Questions]]
