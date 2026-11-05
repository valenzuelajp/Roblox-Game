---
title: "Asset Pipeline"
aliases:
  - "Art Pipeline"
  - "Import Pipeline"
tags:
  - development
  - art
  - pipeline
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How art, animation, and UI assets move from source files into Roblox Studio, with naming, scale, budget, and review rules."
related:
  - "[[Art Direction]]"
  - "[[Project Structure]]"
  - "[[Performance Budgets]]"
  - "[[Toolchain and Rojo]]"
---

# Asset Pipeline

## Principles

1. **Source first.** Every asset has a source file in `game/assets/source/`. The Roblox upload is a build artifact, not the source of truth.
2. **One scale.** All assets are authored in studs. One Roblox stud is the unit; do not import in meters and scale later.
3. **Budget before beauty.** A beautiful prop that breaks the mobile frame budget is a bug.
4. **No orphan assets.** Every mesh, texture, and sound has an owner, a source path, and a use.
5. **License clean.** No ripped assets, no copyrighted music, no AI-generated art with unclear provenance.

## Folder structure

```text
game/assets/
  source/
    models/
      props/
      architecture/
      characters/
    textures/
    animations/
    audio/
    ui/
  exports/
    models/
    textures/
    animations/
    audio/
    ui/
  manifests/
    assets.json
```

`assets.json` is the manifest: asset name, source file, Roblox asset ID, upload date, owner, license, triangle count, texture size, and usage.

## Naming

| Type | Prefix | Example |
|---|---|---|
| Static mesh | `SM_` | `SM_Desk_Library_01` |
| Skeletal mesh | `SK_` | `SK_Butler_Finch` |
| Texture | `TX_` | `TX_Wood_DarkOak_01` |
| Material | `MAT_` | `MAT_Wood_DarkOak` |
| Animation | `AN_` | `AN_Finch_Bow` |
| Sound | `SFX_` / `MUS_` | `SFX_Clock_Tick_01` |
| UI image | `UI_` | `UI_Icon_Camera` |
| Decal | `DC_` | `DC_Poster_NineGuests` |

Rules:

- PascalCase, underscores between segments, two-digit variant suffix.
- No spaces, no version numbers in the name; versions live in git.
- A variant is a new asset, not a renamed old one.

## Scale and orientation

| Asset | Target |
|---|---|
| Door | 7 studs high, 4 studs wide |
| Ceiling | 14 studs (ground), 12 studs (upper), 10 studs (attic/cellar) |
| Character | 5–6 studs tall, R15 rig |
| Prop (handheld) | 0.5–2 studs |
| Prop (furniture) | 2–6 studs |
| Hero prop | 4–8 studs |
| Stair riser | 0.5 studs |
| Corridor width | 6–8 studs |

- Forward axis is **-Z** in Blender, converted to Roblox **-Z** forward.
- Origin at the base center for props; at the floor for architecture.
- Apply all transforms before export.
- No negative scale. No unapplied rotation.

## Triangle and texture budgets

| Asset class | Triangles | Textures |
|---|---|---|
| Small prop | 300–1,500 | 512×512 |
| Medium prop | 1,500–5,000 | 1024×1024 |
| Hero prop | 5,000–15,000 | 2048×2048 |
| Character | 8,000–20,000 | 1024×1024 atlas |
| Room shell | 2,000–10,000 | 2048×2048 atlas |
| Set piece | 15,000–30,000 | 2048×2048 |

Global budgets:

- **Unique meshes:** < 250.
- **Unique textures:** < 150.
- **Texture memory:** < 512 MB.
- **Visible parts per frame:** < 15,000.
- **Transparent parts on screen:** < 100.
- **Particle emitters:** < 40.

If an asset exceeds its class budget, it needs an art lead approval and a performance note.

## Import settings

### Meshes

- Export from Blender as **FBX** (binary) or **OBJ** for static props.
- Use `MeshPart` for anything with a texture; `Part` + `SpecialMesh` only for simple shapes.
- Set `CollisionFidelity` to `Box` or `Hull` for props; `PreciseConvexDecomposition` only for hero props and stairs.
- Set `RenderFidelity` to `Automatic`; `Precise` for hero props only.
- Set `DoubleSided` off unless the asset is cloth or a leaf.
- Set `CastShadow` off for small props and UI-adjacent geometry.

### Textures

- Use PNG for UI and decals, JPG for large environment textures, TGA only if required.
- Power-of-two sizes. No 4096 textures at launch.
- sRGB for color, linear for data maps.
- No text baked into textures unless it is a prop (a label, a sign). Localizable text is a UI layer.

### Animations

- R15 rig for characters; R6 only for legacy NPC props.
- 30 FPS bake, loop points on frame boundaries.
- Root motion off; motion is driven by code.
- Animation events for footsteps, cloth, and prop swaps.

### Audio

- WAV source, OGG export for Roblox.
- 44.1 kHz, 16-bit, mono for 3D, stereo for music/UI.
- Normalize to -16 LUFS for music, -20 LUFS for ambience, -12 LUFS for UI.
- Loop points set in the source; no gaps.
- See [[Audio Implementation]].

## UI assets

- 9-slice panels for the case file, evidence board, and shop.
- Vector-first (Figma/SVG) for icons; export PNG at 2× and 3×.
- No baked text in icons.
- Color tokens from [[Art Direction]].
- Every icon has a text label in the accessibility layer.

## Review checklist

- [ ] Source file exists and is committed.
- [ ] Name follows the prefix table.
- [ ] Scale is correct against the door/character reference.
- [ ] Origin and transforms are applied.
- [ ] Triangle/texture budget is met.
- [ ] Collision is set and tested.
- [ ] Material uses the shared palette.
- [ ] No visible seams or z-fighting at 1 stud.
- [ ] LOD/impostor exists for distant assets.
- [ ] Asset is in `assets.json` with a license.
- [ ] Asset is tested on mobile and in blackout lighting.
- [ ] Asset does not depict gore or real-world hate symbols.

## Upload and versioning

- Upload to the project's Roblox group, not a personal account.
- Record the asset ID in `assets.json` immediately.
- Never re-upload a new version under the same name without updating the manifest.
- Deprecated assets stay in the manifest with `status: deprecated`.
- Builds reference asset IDs, not free-model IDs.

## Performance and streaming

- Enable `StreamingEnabled` with a 512-stud radius.
- Use `ModelStreamingBehavior` and `Persistent` for the foyer and chapel landmarks.
- Collapse static architecture into unions only when it reduces part count; never union animated or moving pieces.
- Use `Texture` atlases for room shells to reduce draw calls.
- Bake lighting where possible; dynamic lights only for practicals and the ritual.

## Content boundaries

- Stylized blood only; no gore.
- No real-world hate symbols.
- No sexual content.
- No photorealistic child harm.
- No copyrighted characters, logos, or music.
- AI-assisted assets must be disclosed and reviewed for provenance.

## Related

- [[Art Direction]]
- [[Performance Budgets]]
- [[Project Structure]]
- [[Toolchain and Rojo]]
