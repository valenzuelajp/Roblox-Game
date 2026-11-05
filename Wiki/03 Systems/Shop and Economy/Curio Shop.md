---
title: "Curio Shop"
aliases:
  - "The Shop"
  - "Vesper's Curio Shop"
  - "Pre-Match Shop"
tags:
  - systems
  - shop
  - economy
  - status/locked
status: locked
updated: 2026-11-04
summary: "The solo pre-match shop: four minutes, 100 Shillings, investigator items, the team purchase board, and the killer's hidden staging tab."
related:
  - "[[Shillings and Cinders]]"
  - "[[Item Catalog]]"
  - "[[Shop Balance]]"
  - "[[Killer Black Market]]"
  - "[[Match Flow]]"
---

# Curio Shop

> [!info] Locked frame
> Every player enters a **private** shop instance for the first **four minutes** of the match. Everyone starts with **100 Shillings**. Unspent Shillings convert to **Cinders** at match end. The killer stages the crime in this same window.

## Why the shop is solo

The shop solves three design problems at once:

1. **The killer needs cover.** If the killer walked into a shared shop and disappeared into a staging room, everyone would know. A solo instance hides the act.
2. **Purchases should be a commitment.** Players cannot see each other's carts, so they cannot coordinate perfectly. They must specialize, guess, and trade later.
3. **The shop is a mood beat.** Four minutes alone in a warm, cluttered curio shop before the storm is the last safe moment of the night.

The shop is not a lobby. It is a **scene**.

## The space

Vesper's shop is a narrow, overstuffed room that does not obey the lodge's architecture:

- A wooden counter with a brass bell.
- Shelves of taxidermy, snow globes, brass instruments, and locked boxes.
- A wall of keys, each tagged with a room name that is not on any floor plan.
- A gramophone playing a waltz that skips.
- A rain-streaked window that looks onto the lodge, even though the shop is not in the lodge.
- Vesper behind the counter, smoking, shuffling cards, or polishing something that should not be polished.

The shop is **diegetic**. The UI is the room: items sit on the counter, the team board is a ledger, the checkout is the brass bell.

## The four-minute flow

| Time | What happens |
|---|---|
| 0:00–0:15 | Fade in. Vesper greets the player by name (or by role, if the name is hidden). The 100 Shillings are on the counter. |
| 0:15–0:45 | Tutorial card: "Buy what you cannot afford to guess." The team purchase board updates. |
| 0:45–3:30 | Shopping. Players inspect items, read tags, and buy. The killer can open the staging tab. |
| 3:30–3:50 | Last call. Vesper warns that the road is closing. Unspent Shillings are counted. |
| 3:50–4:00 | Checkout. The player is moved to the arrival instance. |

There is no pause. The timer is the same for everyone.

## The team purchase board

A leather ledger on the counter shows **counts by item type**, not names:

```text
CAMERA ............ 2
NOTEBOOK .......... 1
MAGNIFYING GLASS .. 0
FINGERPRINT KIT ... 1
UV TORCH .......... 3
COMPASS ........... 0
CIPHER WHEEL ...... 1
RECORDER .......... 0
LOCKPICK .......... 2
MAP ............... 0
```

The board updates live. It exists to prevent five players from buying the same camera without revealing who bought what.

**What the board does not show:**

- Who bought an item.
- How many Shillings a player has left.
- Whether the killer bought anything.
- The killer's black-market purchases.

The killer sees the same board. This is intentional: the killer can infer what the team can and cannot prove.

## Buying rules

- **Starting balance:** 100 Shillings.
- **Item prices:** 20–35 Shillings (see [[Item Catalog]]).
- **Capacity:** 3 items per player, 2 if the item is a large tool (camera, recorder, lockpick set). The UI enforces the cap.
- **Charges:** Some items have limited charges. The tag shows the charges.
- **No refunds after checkout.** A player may sell an item back during the shop for 50% of its price, once.
- **Unspent Shillings:** convert to Cinders at **1 Shilling = 1 Cinder** (proposed). See [[Shillings and Cinders]].
- **No Robux.** Nothing in the shop costs Robux. No item, clue, bullet, or map advantage can be purchased with real money.

## The killer's staging tab

The killer's shop UI has a second tab that looks like a **private fitting room**. It contains:

1. **The scenario draw.** Three cards, face down. Pick one.
2. **The customization panel.** Victim identity, staging room, red herring.
3. **The tableau editor.** Place the body, weapon, props, and signature on valid anchors.
4. **The validation panel.** The game checks reachability, clue separation, and no-soft-lock rules.
5. **Confirm.** The tab closes and cannot be reopened.

The staging tab is **server-only**. It is never sent to investigator clients. The killer cannot open it after the shop.

The killer can stage in about two minutes and still shop. If they run out of time, the game picks the default scenario and customization.

## Vesper's role

Vesper is the shopkeeper, not a quest giver. She sells, hints, and deflects.

- She comments on items the player lingers on.
- She offers one free **rumor** per player: a line of flavor that may or may not be true. The rumor is not a Case File clue. It is a mood beat.
- She refuses to name the killer.
- She becomes evasive if asked about the 1936 guests.
- If the player has the **Ritual Anchor**, she will not touch it.

See [[Madame Vesper]] for her full dialogue.

## What the shop must never do

- Never show another player's face, name, or cart.
- Never show the killer's staging tab to an investigator.
- Never sell a clue answer, a Hollow Word letter, or a bullet.
- Never let a player buy more than the item cap.
- Never let a purchase fail silently.
- Never make the shop mandatory for a basic clue; the free clue is always available.

## Accessibility

- All item tags have text descriptions, not just icons.
- The shop can be navigated with keyboard/gamepad.
- The team board has a text readout.
- Vesper's dialogue is subtitled.
- The timer has an audio cue at 1 minute and 15 seconds.
- The shop can be skipped with a "quick buy" preset, but the player forfeits the rumor.

## Telemetry

Track:

- Items purchased per player and per lobby.
- Duplicate rate.
- Unspent Shillings.
- Time spent in the shop.
- Staging time (killer only).
- Rumor engagement.
- Refund rate.

## Design notes

- The shop should feel like a **reward**, not a menu.
- The team board is the only coordination tool. It should be readable in five seconds.
- The killer's staging tab should feel like a **confession booth**, not a level editor.
- The best shop moment is a player realizing they bought the wrong tool and must trade for the right one.

## Related

- [[Shillings and Cinders]]
- [[Item Catalog]]
- [[Shop Balance]]
- [[Killer Black Market]]
- [[Match Flow]]
