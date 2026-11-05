---
title: "Investigator Items"
aliases:
  - "Items"
  - "Tools"
  - "Investigator Tools"
tags:
  - systems
  - shop
  - items
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How investigator items work: acquisition, inventory, charges, drops, trading, task synergy, and counterplay. The full catalog lives in Item Catalog."
related:
  - "[[Item Catalog]]"
  - "[[Curio Shop]]"
  - "[[Shop Balance]]"
  - "[[Free vs Item Clues]]"
  - "[[Clue System Overview]]"
---

# Investigator Items

> [!info] The short version
> Items turn low-quality clues into definitive evidence. They are bought before the match, carried for the whole match, and dropped on death. They are never purchasable with Robux.

## The ten items

The full prices, charges, and fiction are in [[Item Catalog]]. This page covers the **system**:

| Item | Primary use | Task |
|---|---|---|
| **Camera** | Photograph a scene, reveal a plaque or hidden detail | Victim |
| **Notebook** | Record testimony, cross-reference names | Victim |
| **Magnifying Glass** | Read a wound, trace, or tool mark | Method |
| **Fingerprint Kit** | Lift and match prints | Method |
| **UV Torch** | Reveal blood, sigils, and hidden writing | Scene |
| **Compass** | Direction to a sigil or a landmark; navigate in blackout | Scene |
| **Cipher Wheel** | Decode a substitution or shift cipher | Motive |
| **Recorder** | Capture and replay testimony or a last message | Motive |
| **Lockpick** | Open a locked door or container | Utility |
| **Map** | Reveal the current floor and discovered rooms | Utility |

Five items are **clue tools**. Five are **utility tools**. A balanced team brings at least one clue tool per task and one utility tool.

## Acquisition

- Bought in the **Curio Shop** during the 4-minute pre-match phase.
- Cost: 20–35 Shillings.
- Each player starts with **100 Shillings**.
- Most players can buy **2–3 items**.
- The **team purchase board** shows counts by item type, not names. It helps a solo-shop team avoid five cameras.
- Unspent Shillings convert to Cinders at match end.

## Inventory

- Items are **durable** for the match. They do not expire.
- Charge-based items show pips (e.g., Camera 3/3).
- Items are **not** dropped on a wrong answer or a failed puzzle.
- Items **drop on death** and can be picked up by anyone, including the killer.
- Items can be **traded** (proposed) via a short trade prompt. The killer can trade too.
- A player can carry **3 items** (proposed). The fourth purchase goes to the team stash in the foyer.

## Charges

| Item | Charges | Recharge |
|---|---|---|
| Camera | 3 | None |
| Notebook | ∞ | — |
| Magnifying Glass | ∞ | — |
| Fingerprint Kit | 2 | None |
| UV Torch | 4 | None |
| Compass | ∞ | — |
| Cipher Wheel | ∞ | — |
| Recorder | 3 | None |
| Lockpick | 2 | None |
| Map | ∞ | — |

A charge is spent only when the item **reveals** something. Inspecting an already-found clue does not cost a charge.

## Task synergy

| Task | Best item | Why |
|---|---|---|
| **Victim** | Camera or Notebook | The camera reveals the portrait plaque; the notebook cross-references the guest list. |
| **Method** | Magnifying Glass or Fingerprint Kit | The glass reads the wound; the kit matches the print on the weapon. |
| **Scene** | UV Torch or Compass | The UV reveals the sigil; the compass finds the sigil anchor in the dark. |
| **Motive** | Cipher Wheel or Recorder | The wheel decodes the letter; the recorder plays the victim's last message. |
| **Utility** | Lockpick, Map, Compass | Opens routes, reveals layout, prevents getting lost. |

## Drop, trade, and loss

- **Death:** all items drop where the player fell. A small glow marks the drop for 30 seconds.
- **Trade:** both players must confirm; the trade window is 10 seconds; the killer can lie about what they are trading? No — the item is shown. The killer can trade a **Forged Letter** as if it were a clue item (proposed).
- **Stash:** the foyer stash holds up to 3 unclaimed items. The killer can steal from it (proposed).
- **Match end:** items are lost; they are not persistent.

## Counterplay

| Item | Killer counter | Investigator counter |
|---|---|---|
| Camera | Flicker the lights; stand outside the flash. | Use the camera in a lit room; bring a flashlight. |
| Notebook | Plant a false testimony. | Cross-reference with a second NPC. |
| Magnifying Glass | Stage a wound that fits the wrong weapon. | Use the Fingerprint Kit as a second source. |
| Fingerprint Kit | Wear gloves (black market). | Lift a print from a surface the killer touched before gloving. |
| UV Torch | Use the **Gloves** black-market item. | Check the room twice; UV residue lasts. |
| Compass | Jam the sigil room. | Use the Map and the Ghost Blueprint. |
| Cipher Wheel | Plant a forged letter. | Use the Recorder to hear the real message. |
| Recorder | Whisper Mask distorts the recording. | Record the same testimony twice. |
| Lockpick | Lock a door from the other side. | Find the key or the secret passage. |
| Map | Move a pin on the evidence board. | Compare with the Ghost Blueprint. |

## Accessibility

- Every item has a text description and a visual icon.
- Charge pips are numeric as well as graphical.
- The UV reveal has a pattern, not just a color.
- The Compass has a text direction ("north-east, 40 studs").
- The Map has a text list of discovered rooms.
- The Recorder has subtitles.

## UI

- Inventory: `I`; radial or grid.
- Equipped item: bottom-right slot.
- Charge: pips + number.
- Interaction prompt: "Use Camera" / "Use UV Torch."
- Trade: `TradeRequest` remote; both confirm.
- Drop: `DropItem`; the item falls at the player's feet.

## Telemetry

- Items bought per player and per team.
- Duplicate rate.
- Item usage per task.
- Items dropped, traded, stolen.
- Win rate by item composition.
- Charge waste (used with no reveal).

## Design notes

- Items should **change knowledge**, not just open doors.
- The best item is the one that makes the player feel clever.
- No item should be mandatory for a task; the free clue plus one of two items must always work.
- The killer's black market should create **paranoia**, not a power gap.

## Related

- [[Item Catalog]]
- [[Curio Shop]]
- [[Shop Balance]]
- [[Free vs Item Clues]]
- [[Clue System Overview]]
