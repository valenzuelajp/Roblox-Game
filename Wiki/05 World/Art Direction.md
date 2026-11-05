---
title: "Art Direction"
aliases:
  - "Visual Style"
  - "Look and Feel"
tags:
  - world
  - art
  - style
  - status/proposed
spoiler: false
status: proposed
updated: 2026-11-04
summary: "The noir-gothic visual language of Blackwood Lodge: palette, materials, architecture, props, characters, UI, VFX, and performance."
related:
  - "[[World MOC]]"
  - "[[Tone and References]]"
  - "[[Lighting and Weather]]"
  - "[[Audio Direction]]"
---

# Art Direction

> [!info] One-line style
> **1940s film noir, shot inside a Gothic house that is trying to remember a crime.**

## Three layers

| Layer | Visual language | Player feeling |
|---|---|---|
| **Noir** | Black, cream, amber, rain, venetian blinds, smoke, trench coats | Stylish, adult, dangerous |
| **Gothic** | Stone, dark wood, stained glass, candles, antlers, dust | Old, haunted, wrong |
| **Cult** | Antler sigils, five-letter words, red thread, black wax, inverted candles | Secret, ritual, inevitable |

## Palette

| Color | Hex | Use |
|---|---|---|
| **Blackwood** | `#12100E` | Shadows, UI background, wood |
| **Lodge Amber** | `#C9A227` | Practical light, brass, accents |
| **Oxblood** | `#6B1F1F` | Blood, upholstery, ritual |
| **Bone** | `#E8DFC8` | Paper, text, candlelight |
| **Storm Blue** | `#2B3A4A` | Night, rain, exterior |
| **UV Violet** | `#7A4FA3` | Clues, sigils, hidden writing |
| **Forest** | `#24352A` | Woods, conservatory, decay |

The palette is **warm interior vs cold exterior**. The house is a warm trap. The storm is a cold way out.

## Architecture

- **Ground floor:** public, symmetrical, high ceilings, marble, dark wood, chandeliers.
- **First floor:** private, low ceilings, wallpaper, closed doors, carpet.
- **Attic:** exposed beams, trunks, dust, single bulbs.
- **Cellar:** stone, pipes, water, low ceilings, practical darkness.
- **Chapel:** stone, stained glass, candles, no shadows.
- **Exterior:** Gothic revival, ivy, dead elms, iron gate, gravel, rain.

The house should look **expensive and tired**. Old money, not new. Repairs are visible. The storm is winning.

## Materials

- **Wood:** mahogany, oak, walnut; scratched, waxed, not glossy.
- **Metal:** brass, iron, tarnished silver; no chrome.
- **Fabric:** velvet, wool, linen, leather; worn edges.
- **Paper:** yellowed, foxed, typewritten, ink-stained.
- **Stone:** wet, dark, mossy; no clean marble outside the foyer.
- **Glass:** leaded, stained, rain-streaked; reflections are important.

## Character design

### Investigators

- 1940s civilian clothes: trench coats, suits, dresses, hats, gloves.
- Each investigator has a **silhouette** readable at 20 studs: coat, hat, bag, camera, umbrella.
- Cosmetics change color and accessories, not silhouette.
- No character is visually coded as "the killer."

### The killer

- Same silhouette rules as investigators.
- The killer's **cult robe** is hidden in the world, not worn at start.
- The killer's tell is behavioral, not visual. Blood on a cuff is a tell, not a glow.
- The killer's mark creates a **sigil**, not a costume change.

### NPCs

- **Vesper:** black lace, veils, rings, a cigarette holder, eyes too bright.
- **Elias:** impeccable suit, no tie, a watch that is ten minutes fast, a smile that never arrives.
- **Finch:** butler's tailcoat, white gloves, a ledger under his arm.
- **Ada:** maid's uniform, mended cuffs, a photograph in her pocket.
- **Cook:** apron, flour, a cleaver she never uses.
- **Silas:** groundskeeper's coat, mud, a lantern, a dog that is not there.
- **Rook:** chauffeur's cap, gloves, a car key, his father's watch.

## Props

- Every prop has a **story reason** and a **gameplay reason**.
- Interactive props have a subtle brass glint, not a floating icon.
- Clue props are readable at a glance: paper, glass, metal, fabric.
- Red herrings look **more** obvious than true clues.
- No prop is a pixel hunt. The interaction prompt appears within 8 studs.

## UI art

- **Case File:** typewriter, manila folder, red string, wax seal.
- **Evidence Board:** cork, pins, string, photographs, handwritten notes.
- **Shop:** curio cabinet, velvet, brass labels, handwritten price tags.
- **Gate lock:** brass letters, five slots, engraved instructions.
- **Ritual:** candle circle, antler shadow, red thread.
- **End card:** closed file, stamp, typewriter line.

## VFX

- **Rain:** screen-space streaks, puddle ripples, wet sheen.
- **Lightning:** brief blue-white flash, no strobe by default.
- **Blood:** dark stain, red ribbon, smear; no spray, no gore.
- **Sigil:** red-black glow, antler line, slow pulse; readable in blackout.
- **UV:** violet pattern, visible shapes, not just color.
- **Whisper:** subtle distortion, subtitle, no jump scare.
- **Last Hunt:** red vignette, speed lines, bell audio.

## Performance

- Modular kits: 4 floor kits, 6 prop kits, 3 lighting kits.
- Texture atlas: 2K for hero props, 512 for modular.
- Draw calls: < 1,500 per frame on PC, < 800 on mobile.
- Particles: rain 2 emitters, lightning 1, sigil 1.
- LOD: 3 levels for furniture, 2 for props.
- No real-time shadows on mobile; baked lighting + blob shadows.

## Content boundaries

- No gore, dismemberment, or photorealistic wounds.
- No sexual content or nudity.
- No real-world hate symbols.
- No harm to children; the nursery is atmospheric, not graphic.
- No flashing lights without an accessibility toggle.

## Related

- [[World MOC]]
- [[Tone and References]]
- [[Lighting and Weather]]
- [[Audio Direction]]
- [[UI and UX Overview]]
