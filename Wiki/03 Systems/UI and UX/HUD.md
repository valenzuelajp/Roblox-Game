---
title: "HUD"
aliases:
  - "Heads Up Display"
  - "In-Match UI"
tags:
  - systems
  - ui
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "Every HUD element, where it sits, what it shows, and the rule that the HUD never reveals a clue location or a killer identity."
related:
  - "[[UI and UX Overview]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[Sigil System]]"
---

# HUD

> [!info] Minimal by design
> The HUD is a noir film overlay, not a quest log. It shows the clock, the task count, the equipped item, the sigil timer, and the social indicators. Everything else is in the world.

## Elements

| Element | Position | Shows | Hides |
|---|---|---|---|
| **Clock** | Top center | In-game time, phase name | Exact ritual timing |
| **Task tracker** | Top left | Tasks solved / 4, letters found | Clue locations |
| **Equipped item** | Bottom left | Icon, charges, durability | Other players' items |
| **Health** | Bottom center | 1 HP investigator / 2 HP killer (self only) | Other players' exact HP |
| **Sigil timer** | Center, when marked | Countdown, sigil direction | Who marked you |
| **Voice indicator** | Bottom right | Speaking, muted, text-only | — |
| **Text chat** | Bottom right | Proximity bubbles, case chat | Dead chat (separate) |
| **Ping wheel** | Hold `Q` / button | "Look here," "Danger," "Come here," "I found something" | — |
| **Interaction prompt** | Center bottom | Search, open, read, take, mark | — |
| **Ritual progress** | Top center, chapel | Channel bar, anchors | Killer interrupt cooldown |
| **Last Hunt banner** | Top center, 5s | "The house has seen you." | — |

## Task tracker

The tracker shows:

- **Victim** — empty / clue found / solved.
- **Method** — empty / clue found / solved.
- **Scene** — empty / clue found / solved.
- **Motive** — empty / clue found / solved.
- **Letters** — four slots, then the ritual slot.

It does **not** show which room to search. The player must read the clue, ask the board, or use the compass.

## Sigil timer

When marked:

- A red sigil icon appears at the center.
- A countdown ring fills.
- A compass arrow points toward the physical sigil (not the killer).
- The screen edges pulse with the victim's heartbeat.
- The timer is audible: a slow tick that speeds up.

The compass arrow is a **navigation aid**, not a wallhack. It points to the sigil, which everyone can see.

## Killer HUD

The killer sees the same HUD plus:

- **Mark cooldown** — a hand icon with a radial timer.
- **Partner channel** — text-only, separate tab.
- **Sabotage wheel** — false clue, flicker, lock, whisper, cold spot.
- **Scenario card** — only in the shop, never in the match.
- **Task room hints** — a faint highlight of the themed rooms, not the containers.

The killer's HUD is never visible to investigators. The killer's nameplate is identical to everyone else's.

## Ghost HUD

If O-001 A is approved:

- No health, no inventory, no interaction.
- Free-fly camera.
- Dead chat tab.
- A "spectate" button that follows a living player; killer spectate unlocks only after the ritual.
- No voice to the living. No pings to the living.

## Mobile layout

- Clock and task tracker top.
- Equipped item bottom left; interact bottom right.
- Voice/text collapse into one button.
- Ping wheel becomes a radial tap.
- Sigil timer is larger and higher contrast.

## Accessibility

- Text size: 100/125/150%.
- Contrast: standard/high.
- Colorblind: protan/deutan/tritan palettes.
- Reduced motion: no pulse, no shake, no rain streaks.
- Photosensitivity: no lightning strobe; optional flash reduction.
- Screen reader: all HUD text is narratable.
- Hold-to-press can be toggled.

## Related

- [[UI and UX Overview]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Sigil System]]
