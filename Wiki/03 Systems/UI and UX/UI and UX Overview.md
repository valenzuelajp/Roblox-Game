---
title: "UI and UX Overview"
aliases:
  - "User Interface"
  - "User Experience"
  - "Diegetic UI"
tags:
  - systems
  - ui
  - ux
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The diegetic noir UI: case file, evidence board, shop cabinet, HUD, ritual, and the rules that keep it readable without voice."
related:
  - "[[HUD]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[Onboarding]]"
  - "[[Evidence Board]]"
---

# UI and UX Overview

> [!info] The UI is a document
> The player is a detective. The interface should feel like a case file, a corkboard, a curio cabinet, and a brass lock — not a generic game HUD.

## The five UI layers

| Layer | What it is | Examples |
|---|---|---|
| **World** | In-world interaction prompts and props | Search, pick up, open, read, mark |
| **Case** | The investigation tools | Case File, evidence board, notebook, letters |
| **Social** | Communication and identity | Voice indicator, text bubbles, pings, emotes |
| **Combat** | Immediate danger | Sigil timer, health, gun, detain prompt |
| **Meta** | Match and account | Clock, task tracker, shop, end ledger |

## Diegetic surfaces

| Surface | Looks like | Opens with |
|---|---|---|
| **Case File** | Typewritten police file | `Tab` / case button |
| **Evidence Board** | Corkboard in the foyer | Walk up + interact |
| **Curio Shop** | Cabinet of drawers | Shop phase |
| **Hollow Word lock** | Brass letter lock at the gate | Interact at exit |
| **Ritual** | Altar, candles, bell | Chapel interaction |
| **End ledger** | Closed case file with a stamp | Match end |

## The HUD rule

The HUD shows only what the player needs **right now**:

- The clock.
- The current task count.
- The equipped item.
- The sigil timer, if marked.
- The voice/text indicator.
- The interaction prompt.

Everything else lives in the Case File or on the evidence board. The screen should feel like a noir film, not a spreadsheet.

## Input and platform

- **PC:** mouse and keyboard; rebindable.
- **Mobile:** touch buttons; larger hit targets; no hover-only interactions.
- **Console:** controller prompts; no keyboard-only actions.
- **Text:** every voice action has a text equivalent.
- **Screen reader:** case file and prompts are narratable.

## Visual language

- **Typography:** typewriter for documents, serif for titles, sans-serif for HUD numbers.
- **Palette:** ink black, bone white, brass, oxblood, rain blue.
- **Motion:** slow fades, paper slides, no bouncing or neon.
- **Icons:** engraved line icons, not emoji.
- **Feedback:** stamps, bells, paper, rain — not explosions.

## Error and empty states

- **No clue found:** "The drawer is empty. Someone was here before you."
- **Wrong answer:** a red stamp, a 60-second lock, a bell in the distance.
- **Item missing:** "You need a closer look." (Never name the item the player did not buy.)
- **Disconnected:** "The line went dead. Reconnecting…"
- **Killer interrupted:** "The channel breaks. The candles go out."

## Performance

- UI is pooled and culled.
- No per-frame full-screen redraws.
- The evidence board uses static images, not live 3D renders.
- Mobile uses a reduced particle budget.
- Text is cached; no runtime font loading.

## Accessibility

See [[03 Systems/UI and UX/Accessibility|Accessibility]]. The short version: text mode, subtitles, colorblind palettes, remappable controls, reduced motion, photosensitivity options, and no voice requirement.

## Related

- [[HUD]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Onboarding]]
- [[Evidence Board]]
