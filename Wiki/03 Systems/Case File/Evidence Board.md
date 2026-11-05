---
title: "Evidence Board"
aliases:
  - "The Corkboard"
  - "Foyer Board"
tags:
  - systems
  - case-file
  - ui
  - level-design
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The physical corkboard in the foyer and its mirrored hotkey UI: what it shows, how it updates, how the killer can tamper with it, and how it stays accessible."
related:
  - "[[Case File Overview]]"
  - "[[UI and UX Overview]]"
  - "[[Foyer]]"
  - "[[03 Systems/Killer/Sabotage|Killer Sabotage]]"
---

# Evidence Board

> [!info] Two surfaces, one truth
> The physical board in the foyer and the hotkey UI must always show the same state. The board is the social surface. The UI is the accessible surface. If they disagree, the server is wrong.

## The physical board

A large corkboard in the **foyer**, opposite the front door. It is the first thing a player sees when they enter the lodge.

It is made of:

- **Cork** stained by years of smoke.
- **Red string** connecting pins.
- **Photographs** with white borders.
- **Index cards** in three colors: victim (cream), method (blue), scene (green), motive (red).
- **Brass tacks**.
- **A typewriter** on a side table, with a sheet of paper that updates.

The board is not a menu. It is a **prop the team gathers around**. Players can point at it, move pins, and argue. That social friction is the point.

## What the board shows

| Section | Contents | Visible at start |
|---|---|---|
| **Victim** | Portrait, guest list fragment, personal effects | Question only |
| **Method** | Weapon photos, wound diagram, coroner's note | Question only |
| **Scene** | Room photos, floor plan sketch, sigil rubbing | Question only |
| **Motive** | Ledger page, letter fragment, will | Question only |
| **Timeline** | Clock face, guest movements, staff testimony | Empty |
| **Suspects** | Index cards for every player, no names filled | Empty |
| **Letters** | Five brass slots | Empty |

As the team finds clues, cards appear. As they submit answers, the task card is stamped **SOLVED** or **WRONG**. Letters slide into the slots.

## What the board does not show

- The true answers before submission.
- The killer's identity.
- The exact location of undiscovered clues.
- The Hollow Word until all five letters are earned.
- The killer's staging options.

The board is an **investigator tool**, not a server log.

## Interactions

| Action | Input | Effect |
|---|---|---|
| **Read** | Look at a card | Opens a text card with the clue description |
| **Pin** | Click a card, then a board spot | Moves a card; cosmetic only |
| **String** | Drag from one pin to another | Draws a red string; cosmetic only |
| **Submit** | Click a task card's answer buttons | Locks the task |
| **Zoom** | Hold interact | Camera zooms to the card |
| **Compare** | Select two cards | Side-by-side view in the hotkey UI |

The board supports **pinning** and **stringing** as free-form collaboration. These actions do not change the game state; they are a shared whiteboard. The server syncs them so everyone sees the same board.

## The hotkey UI

Press **Tab** (or the gamepad equivalent) to open the Case File UI. It mirrors the board:

- Same four tasks.
- Same clue cards.
- Same letters.
- Same answer buttons.
- Same 60-second lock timer.

Differences:

- The UI is **personal**; it cannot be tampered with.
- The UI has **text descriptions** for every card.
- The UI has a **screen-reader mode**.
- The UI can be opened anywhere, not just at the board.

The UI is the **accessibility path**. A player who cannot见 the board or reach the foyer can still play the case.

## Updates and sync

The server owns the board state. The client receives:

- A **board snapshot** on join and on phase change.
- **Delta events** for new cards, stamps, letters, and pins.
- **Permission checks** for submit and tamper actions.

The board state is small: four tasks, a list of discovered clue IDs, five letters, and a pin map. It can be replicated as a single table.

## Killer tampering

The killer can tamper with the **physical board** as a sabotage action:

| Tamper | Effect | Counterplay |
|---|---|---|
| **Move a pin** | A string now points to the wrong card | The hotkey UI shows the true links |
| **Hide a photo** | One clue card is face-down for 30 seconds | Re-interact to flip it; the UI still has it |
| **Add a false card** | A forged card supports a wrong option | The item clue contradicts it; the card has a different typeface |
| **Turn the board** | The board faces the wall for 15 seconds | Any player can turn it back |

The killer gets **one tamper per match** (proposed). The tamper is loud: a bell, a draft, or a flicker. The team can notice.

The killer cannot:

- Delete a true clue.
- Change a submitted answer.
- Read the team's UI.
- Tamper with the hotkey UI.

## Midnight shift

At midnight, the board changes:

- The victim's portrait is replaced with a new photo: the victim at the lodge, ten years ago.
- The guest list gains a tenth line.
- One task card is **restamped** with a different room name (the house correcting the story).
- The letters remain.

The shift is a story beat and a gameplay beat: the team must re-check one task. The restamp does not change the true answer; it changes the **evidence** around it.

## Art and sound

- The board should look **handmade**: crooked pins, overlapping photos, coffee rings.
- The typewriter should clack when a new card appears.
- The strings should be slightly loose.
- The board's lamp flickers during the midnight shift.
- The "SOLVED" stamp should sound like a heavy rubber stamp.
- The "WRONG" stamp should sound like a gavel, not a buzzer.

## Performance

- The board is a single **SurfaceGui** or a set of decals; it should not be hundreds of individual parts.
- Cards are pooled; only the visible board section is rendered in detail.
- The hotkey UI is a 2D layer, not a 3D render.
- Pin/string updates are throttled to 10 Hz.

## Accessibility

- The hotkey UI is the primary accessible surface.
- The board has a **text narration** prompt: "The board shows four tasks. Task 1 has a scorched invitation."
- Pins and strings are decorative; they never carry required information.
- The board's colors are paired with icons and labels.
- The typewriter sound can be muted.
- The 60-second lock has a visual and audio timer.

## Design notes

- **The board is a place.** Players should want to stand near it. It is the team's campfire.
- **The board is a liability.** The killer can watch who gathers there.
- **The board is not a quest log.** It should feel like evidence, not objectives.
- **The board should reward argument.** Two players reading the same card should be able to disagree.
- **The board should never be the only place to submit.** The hotkey UI exists for a reason.

## Related

- [[Case File Overview]]
- [[UI and UX Overview]]
- [[Foyer]]
- [[03 Systems/Killer/Sabotage|Killer Sabotage]]
- [[Midnight Shift]]
