---
title: "Scenario Card Anatomy"
aliases:
  - "Card Fields"
  - "Scenario Schema"
  - "Crime Card Template"
tags:
  - systems
  - scenarios
  - design
  - spoiler/design
  - status/proposed
spoiler: true
status: proposed
updated: 2026-11-04
summary: "The fields, data schema, authoring checklist, and balance rules for a scenario card."
related:
  - "[[Scenario Card Overview]]"
  - "[[Scenario Selection]]"
  - "[[Scenario Difficulty]]"
  - "[[04 Scenarios/Scenarios MOC|Scenarios MOC]]"
---

# Scenario Card Anatomy

> [!spoiler] Design spoiler
> This page is the authoring contract for the ten scenario cards. It contains answer-level detail.

## The fields

| Field | Type | Required | Example |
|---|---|---|---|
| `id` | string | yes | `SC-01` |
| `title` | string | yes | "The Industrialist's Debt" |
| `difficulty` | enum | yes | easy / medium / hard |
| `victim_profile` | object | yes | name, profession, age, connection |
| `motive` | enum | yes | silence / money / bloodline / betrayal / debt / revenge / inheritance / scandal / faith / art |
| `weapon` | enum | yes | letter opener / bell cord / laudanum / ice pick / candlestick / razor / rope / poison / revolver / ritual blade |
| `staging_room` | list | yes | study, chapel, ballroom, cellar |
| `signature` | list | yes | coin on eyes, flower in mouth, word on wall |
| `red_herring` | list | yes | forged will, planted knife, fake alibi |
| `hollow_word` | string | yes | BLACK |
| `valid_rooms` | list | yes | rooms the scene can use |
| `clue_themes` | list | yes | documents, traces, testimony, symbols |
| `free_clues` | list | yes | one per task |
| `item_clues` | list | yes | one per task |
| `answers` | object | yes | the four correct options |
| `npc_variants` | object | yes | which staff line changes |
| `epilogue` | string | yes | the ending card text |
| `content_flags` | list | yes | gore, religion, self-harm (must be none) |

## The answers object

```json
{
  "victim": "Marguerite Vale",
  "method": "Ice pick",
  "scene": "Chapel crypt",
  "motive": "Silence"
}
```

The answers are **fixed per card**. Customization changes the victim's name, the staging room, and the red herring, but not the four answers. The answers are the card's identity.

## The free clue and item clue

Each task has:

- **Free clue:** a low-quality prop that eliminates one wrong option.
- **Item clue:** a definitive prop that confirms the correct option.

The card supplies the **content**; the generator supplies the **room and container**.

Example:

| Task | Free clue | Item clue |
|---|---|---|
| Victim | A scorched invitation with "...VALE" | The portrait plaque: "Marguerite Vale, 1888–1947" |
| Method | A bloody letter opener | The wound: a triangular puncture, not a flat blade |
| Scene | A smell of candle wax and cold stone | The UV sigil under the crypt rug |
| Motive | A torn ledger with a circled debt | The decoded letter: "You will be silent by dawn" |

## The red herring

The red herring is a **wrong option** the card supports. It must:

- Be plausible.
- Be exposable by the item clue.
- Not be the free clue.
- Not be the item clue.
- Not be the correct answer.

Example: the card's red herring is **Money**. The forged will leaves the victim's estate to the cult. The decoded letter reveals the cult wanted **Silence**, not money.

## The signature

The signature is the killer's **tell**. It is a repeated gesture:

- A coin on each eye.
- A flower in the mouth.
- A word on the wall.
- A stopped clock.
- A burned letter.
- A black candle.
- A covered mirror.
- A turned chair.
- A song sheet.
- A sigil.

The signature is **not** the answer. It is the pattern that connects the scene to the cult. The investigators can use it to confirm the staging, not the killer's identity.

## The Hollow Word

Five letters. One per task plus the ritual. The word must:

- Be five letters.
- Be pronounceable.
- Be enterable on a brass letter lock.
- Not be guessable from the first two letters.
- Fit the card's theme.

Proposed list: BLACK, NIGHT, THORN, CROWN, GRAVE, ASHEN, SHADE, EMBER, SAINT, STORM.

## Validation

Before a card ships, it must pass:

- [ ] All four answers are distinct and unambiguous.
- [ ] Every free clue eliminates exactly one wrong option.
- [ ] Every item clue confirms the correct option.
- [ ] The red herring is exposable.
- [ ] The Hollow Word is five letters and unique in the deck.
- [ ] The staging rooms are valid for the map.
- [ ] The card has no gore, sexual content, or real-world hate symbols.
- [ ] The card works without voice.
- [ ] The card works in blackout.
- [ ] The card has an epilogue for every ending.
- [ ] The card does not require a specific NPC.
- [ ] The card does not soft-lock.

## Difficulty rating

| Rating | Clues | Red herring | Word | Intended |
|---|---|---|---|---|
| **Easy** | Obvious containers | One weak red herring | Common word | New players |
| **Medium** | Mixed containers | One strong red herring | Thematic word | Default |
| **Hard** | Hidden containers | Two red herrings | Uncommon word | Experienced lobbies |

See [[Scenario Difficulty]].

## Design notes

- **The card should be a story, not a checklist.**
- **The victim should have a reason to be at the lodge.**
- **The motive should be personal, not abstract.**
- **The signature should be visual and memorable.**
- **The red herring should be the answer the killer wants the team to pick.**

## Related

- [[Scenario Card Overview]]
- [[Scenario Selection]]
- [[Scenario Difficulty]]
- [[04 Scenarios/Scenarios MOC|Scenarios MOC]]
