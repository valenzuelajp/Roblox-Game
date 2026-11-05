---
title: "Endings"
aliases:
  - "Ending Matrix"
  - "How the Night Ends"
tags:
  - story
  - endings
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "Every way a match can end, from the full-truth escape to the cult's completed rite, with proposed rewards and epilogue text."
related:
  - "[[Story Bible]]"
  - "[[Win Conditions]]"
  - "[[Ritual Overview]]"
  - "[[Last Hunt]]"
  - "[[The Killer]]"
---

# Endings

> [!spoiler] Design spoiler
> This page contains ending text and story outcomes. Do not export it to the player wiki.

## The ending matrix

The match ends at **7:00 AM** or earlier if a win condition resolves. The ending is determined by four flags:

| Flag | Values |
|---|---|
| **Case** | 0–4 tasks solved |
| **Ritual** | not attempted / interrupted / completed |
| **Killers** | both active / one stopped / both stopped |
| **Escape** | none / some / all |

The main endings below are **proposed**. Rewards are marked where they are locked or proposed.

---

## Investigators escape

### E-01 — The Whole Truth (100%)

**Condition:** All four tasks solved, ritual completed, both killers stopped, at least one investigator escapes.

**What happens:** The survivors reach the road as the storm breaks. The Hollow Word is spoken at the gate. The lodge goes dark behind them. In the morning, the town finds the gate open and the house empty.

**Epilogue card:**
> The case was never closed. It was only waiting for someone to read it correctly. You did. The nine guests finally have names. The tenth guest is still missing.

**Reward:** 100% coin payout, full Cinders conversion, "Whole Truth" badge, scenario card unlocked in the casebook.

**Story note:** This is the only ending where the player learns the full truth of the 1926 expedition and the 1936 rite.

### E-02 — The Open Case (50%)

**Condition:** Ritual completed, both killers stopped, but at least one task unsolved, and at least one investigator escapes.

**What happens:** The survivors stop the cult, but they leave with an incomplete story. The police find a house full of evidence and no explanation. The case reopens.

**Epilogue card:**
> You stopped them. You did not understand them. The file goes back on the shelf, thicker than before.

**Reward:** 50% coin payout, partial Cinders, "Open Case" badge.

### E-03 — The Survivors (25%)

**Condition:** At least one investigator escapes, but the ritual is not completed or the killers are still active.

**What happens:** The survivors run. The lodge keeps its secret. The cult is wounded but not broken. Somewhere behind them, a light comes on in the chapel.

**Epilogue card:**
> You got out. That is not the same as getting away.

**Reward:** 25% coin payout (proposed), partial Cinders, "Survivor" badge.

---

## The cult completes the rite

### E-04 — The Ninth Rite (0%)

**Condition:** The clock reaches 7:00 AM, at least one killer is active, and no investigator has escaped.

**What happens:** The chapel doors close. The ten seats are filled. The Hollow Word is spoken by the house itself. The storm stops. The lodge is quiet for the first time in ten years.

**Epilogue card:**
> The train arrives at 7:10. No one gets off. The conductor does not remember stopping.

**Reward:** No coin payout. Killers receive cult cosmetics and a "Ninth Rite" badge.

### E-05 — The Tenth Guest (0%)

**Condition:** Every investigator is dead or detained, and at least one killer is active.

**What happens:** The last investigator is seated at the table. The host pours a tenth glass. The camera pulls back through the chapel window into the rain.

**Epilogue card:**
> Nine guests vanished in 1936. The file says nine. The table says ten.

**Reward:** No coin payout. Killers receive the "Tenth Guest" badge.

### E-06 — The House Keeps Its Own (0%)

**Condition:** Both killers are stopped, but no investigator escapes before dawn.

**What happens:** The survivors lock the killers in the cellar. At 7:00 AM, the doors lock from the outside. The house does not need the cult to finish the rite. It only needs the guests to stay.

**Epilogue card:**
> You won. The house did not notice.

**Reward:** 50% coin payout (proposed), "House Keeps Its Own" badge. This ending is intentionally bitter: stopping the cult is not the same as escaping the house.

---

## Failure and tragedy

### E-07 — The Innocent (0%)

**Condition:** An investigator shoots an innocent investigator, and the shot is the match-ending event (the real killer escapes or the table collapses).

**What happens:** The body falls. The gun drops. Two sigils burn themselves into the shooter's hands. The real killer walks out through the front door.

**Epilogue card:**
> The case was solved by the wrong person. The wrong person was sure.

**Reward:** No coin payout. The shooter receives the "Innocent" mark on their record (cosmetic only, not a permanent penalty).

### E-08 — The Broken Choir

**Condition:** The ritual is interrupted three times in a row, and the chapel seals itself for 90 seconds.

**What happens:** The altar cracks. The killers are not revealed. The exit remains locked. The fifth letter is still recoverable: the UV torch reveals it carved under the altar. The team can retry after the seal lifts.

**Note:** This is a **temporary state**, not a permanent ending. It becomes E-04 or E-03 depending on the clock. It must never soft-lock the case.

### E-09 — The Cage (100% / 50%)

**Condition:** Both killers are detained in the cellar cell, and at least one investigator escapes.

**What happens:** The cellar door is bolted. The killers speak through the wood. The survivors walk out with the case file and the Hollow Word.

**Epilogue card:**
> The cult is not dead. It is just downstairs.

**Reward:** 100% if the case is complete, 50% if not. "The Cage" badge.

---

## Reward table

| Ending | Case | Ritual | Killers | Escape | Proposed payout |
|---|---|---|---|---|---|
| E-01 Whole Truth | 4/4 | completed | both stopped | yes | 100% |
| E-02 Open Case | 1–3/4 | completed | both stopped | yes | 50% |
| E-03 Survivors | any | no | any | yes | 25% |
| E-04 Ninth Rite | any | no | active | no | 0% |
| E-05 Tenth Guest | any | no | active | no | 0% |
| E-06 House Keeps Its Own | any | any | both stopped | no | 50% |
| E-07 The Innocent | any | any | active | yes | 0% |
| E-09 The Cage | 4/4 | completed | both detained | yes | 100% |
| E-09 The Cage | 1–3/4 | completed | both detained | yes | 50% |

> [!note] Locked vs proposed
> The **100/50** split for a stopped killer with a complete/incomplete case is locked in the design conversation. The 25% and 0% tiers are proposed. The final economy pass may change them.

---

## Epilogue presentation

Each ending uses the same three-beat structure:

1. **The clock.** The in-game time freezes. The rain sound cuts out.
2. **The card.** A typewritten card slides into frame with the ending title and one line of text.
3. **The ledger.** A short stat block: tasks solved, killers stopped, investigators escaped, Cinders earned, word discovered.

The epilogue is **diegetic**: it looks like a case file being closed, not a victory screen. The player can skip it, but the card is saved to their casebook.

## Canon ambiguity

The endings intentionally leave three questions unanswered:

- **Is the Hollow real?** No ending confirms it. The house may be haunted, the cult may be deluded, or both may be true.
- **Is Vesper helping?** In E-01 she is gone before dawn. In E-04 her shop is empty. In E-06 her voice is on the radio.
- **Did Elias plan to die?** His body is never found in any ending. In E-01, the chapel has ten chairs and one is warm.

These ambiguities are canon. Do not resolve them in a later page unless the story round explicitly decides to.

## Related

- [[Win Conditions]]
- [[Ritual Overview]]
- [[The Killer]]
- [[Story Bible]]
- [[Spoiler Policy]]
