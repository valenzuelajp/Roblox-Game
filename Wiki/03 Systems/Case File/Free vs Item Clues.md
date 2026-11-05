---
title: "Free vs Item Clues"
aliases:
  - "Clue Quality"
  - "Free Clue and Item Clue"
tags:
  - systems
  - case-file
  - clues
  - status/locked
status: locked
updated: 2026-11-04
summary: "The two-tier clue contract: every task has a free low-quality clue that eliminates one option and an item-gated definitive clue that reveals the truth."
related:
  - "[[Case File Overview]]"
  - "[[Case File Questions]]"
  - "[[Clue Types]]"
  - "[[Investigator Items]]"
---

# Free vs Item Clues

> [!info] The core contract
> **Free clue:** always available, low quality, eliminates one wrong option. **Item clue:** requires the matching investigator item, definitive, confirms the truth. The item is an advantage, not a hard gate — but without it, the team is guessing between two options.

## Why two tiers exist

The shop is only interesting if items change what the team **knows**. The free clue keeps a broke or unlucky team moving. The item clue makes specialization, trade, and purchase decisions matter.

| Tier | Cost | Quality | Effect | Risk |
|---|---|---|---|---|
| **Free** | 0 Shillings | Low | Eliminates one of three options | Can be misread; killer can plant a false clue |
| **Item** | 20–35 Shillings | Definitive | Confirms the correct option | Requires the right item in the right room |

## The elimination math

Each task has three options:

- **Free clue** always eliminates exactly **one wrong option**. Two remain.
- **Item clue** confirms the **correct** option. One remains.
- **Without the item**, the team has a 50/50 guess between the two remaining options.
- **With the item**, the team knows.

This is intentionally a **soft gate**. A team with no items can still finish the case, but they will guess. A team with the right items can solve it with confidence.

> [!note] Why not hard-gate the answer?
> A hard gate would let one player's bad purchase soft-lock the team. The 50/50 guess preserves tension without creating a dead end.

## The five item-clue pairs

The full item list is in [[Item Catalog]]. The core pairs are:

| Task | Free clue | Item | Definitive clue |
|---|---|---|---|
| **Victim** | Scorched invitation with a partial name | **Camera** or **Notebook** | Full guest list and portrait plaque |
| **Method** | Bloody letter opener with smeared blood | **Magnifying Glass** | Wound shape that does not match the blade |
| **Scene** | Strange smell (wax, incense, perfume) | **UV Torch** | Blood trail and sigil under the rug |
| **Motive** | Torn ledger page with a circled debt | **Cipher Wheel** or **Recorder** | Decoded letter threatening to expose the expedition |
| **Ritual** | — | **Ritual Anchor** (found in the chapel) | The fifth letter |

Some items can serve two tasks. The scenario card can swap the item pair, but every task must have at least two valid items.

## What "low quality" means

Low quality is not "wrong." It is **incomplete, ambiguous, or contaminated**:

- **Incomplete:** half a name, a torn page, a partial fingerprint.
- **Ambiguous:** a wound that could be a knife or an ice pick; a smell that could be wax or incense.
- **Contaminated:** blood that is not the victim's; a footprint that is too big; a letter written after the death.
- **Staged:** a clue the killer placed to support the wrong answer.

The free clue should make the player say, "That's not enough." The item clue should make them say, "Now I see it."

## What "definitive" means

The item clue is not a magic answer key. It is a **physical detail** that only the item can reveal:

- The camera's flash reveals the portrait's plaque.
- The magnifying glass reveals the wound's cross-section.
- The UV torch reveals the blood trail and the sigil.
- The cipher wheel decodes the letter.
- The recorder plays the victim's last message.

The player still has to **interpret** the detail and choose the option. The item gives them certainty; it does not choose for them.

## The killer's false clue

The killer may plant **one false clue** per match. The false clue:

- Is a physical prop.
- Supports a wrong option.
- Is placed in a room the killer can reach.
- Is not the free clue and not the item clue.
- Can be exposed by the item clue.

Example: the killer plants a forged will that points to **Money** for Task 4. The free clue (a circled debt) is consistent with both Money and Silence. The item clue (the decoded letter) says Silence. The forged will is the red herring.

## Item acquisition and sharing

- Items are bought in the **Curio Shop** before the match.
- Each player starts with **100 Shillings**.
- Items cost **20–35 Shillings**; most players can buy 2–3.
- Items are **durable** for the match.
- Items **drop on death** and can be picked up.
- Items can be **traded**? Proposed: yes, via a trade prompt; the killer can trade too. This lets the team cover gaps after the shop. Marked proposed; not locked.
- The **team purchase board** shows counts by item type, not names. This helps a solo-shop team avoid five cameras.

## Shop vs free clue balance

The shop must not make the free clue useless:

- The free clue is enough to eliminate one option, so a team with no items still has agency.
- The item clue is the difference between a guess and a conviction.
- The killer can win by making the team doubt the item clue, not by denying it.
- If the team buys no items, the match is harder but not unwinnable.

## Text and accessibility

- Each free clue has a text card: "A scorched invitation. The visible letters are '...VALE'. The rest is ash."
- Each item clue has a text card and an image: "Under the UV light, a thin triangular wound. The letter opener's blade is flat."
- The text card does not give the answer. It gives the same evidence.
- Color is never the only signal. The UV clue has a pattern, not just a glow.
- Audio clues have visual subtitles.

## Telemetry

Track, per task:

- Time to first free clue.
- Time to item clue.
- Which item was used.
- Which option was submitted.
- Whether the team had the item.
- Wrong-answer rate.
- False-letter rate.

This tells us whether the free clue is too strong, the item clue too obscure, or the shop too expensive.

## Design notes

- **The free clue is the hook.** It should be the first thing a new player finds and understands.
- **The item clue is the payoff.** It should reward the player who bought the weird tool.
- **The killer's false clue is the twist.** It should make the team argue, not rage.
- **Never make the free clue lie.** It can be incomplete, but it must not eliminate the correct option. Fairness first.
- **Never make the item clue missable.** If the item exists, the clue must be reachable.

## Related

- [[Case File Overview]]
- [[Case File Questions]]
- [[Clue Types]]
- [[Investigator Items]]
- [[False Clues]]
