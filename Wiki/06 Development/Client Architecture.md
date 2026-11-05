---
title: "Client Architecture"
aliases:
  - "Roblox Client"
  - "Client Controllers"
tags:
  - development
  - client
  - architecture
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How the Roblox client renders, predicts, and presents the game without ever owning the truth."
related:
  - "[[Technical Architecture]]"
  - "[[Server Authority]]"
  - "[[Networking and Remotes]]"
  - "[[UI and UX Overview]]"
---

# Client Architecture

## The client's job

The client is a **presentation and intent** layer. It:

- Renders the world, characters, props, and effects.
- Reads input and sends intents to the server.
- Predicts local movement and cosmetic feedback.
- Presents the Case File, evidence board, shop, ritual, votes, and results.
- Plays audio, voice indicators, and subtitles.
- Interpolates other players and reconciles corrections.

The client does **not**:

- Decide whether a clue is real.
- Decide whether an answer is correct.
- Know the killer's identity before the reveal.
- Own health, bullets, sigils, votes, Cinders, or the clock.
- Generate the map or the case.

## Controller map

| Controller | Responsibility | Server dependency |
|---|---|---|
| `MatchController` | Phase banners, clock display, countdowns, end screen | Match state snapshots |
| `MapController` | Room streaming, doors, lights, map item, waypoints | Map manifest (filtered) |
| `CaseFileController` | Task list, options, submit, lockout timers | Case File state |
| `EvidenceBoardController` | Pin/string/zoom UI, compare mode | Board state |
| `InventoryController` | Equipped item, charges, trade prompts | Inventory state |
| `ShopController` | Catalog, cart, checkout, team board | Shop state |
| `CombatController` | Aim, fire, hit feedback, gun state | Combat state |
| `SigilController` | Marked overlay, sigil direction, countdown | Sigil state |
| `RitualController` | Channel bar, anchors, interrupt feedback | Ritual state |
| `VoteController` | Ballot, timer, result | Vote state |
| `SocialController` | Chat, pings, emotes, voice indicators | Chat service |
| `SpectatorController` | Ghost camera, dead chat, spectate targets | Spectator state |
| `AudioController` | Music, stingers, ambience, subtitles | Audio cues |
| `AccessibilityController` | Settings, remaps, text mode, reduced motion | Local settings |

Each controller is a ModuleScript with:

```lua
function Controller:Init(dependencies)
function Controller:Start()
function Controller:Stop()
function Controller:OnState(snapshot)
```

Controllers do not call each other directly. They communicate through a small client event bus, and they read state from a client-side store that mirrors server snapshots.

## State flow

```text
Server snapshot
  → ClientStore:Apply(snapshot)
    → Controllers read slices
      → UI renders
        → Player input
          → Intent remote
            → Server validates
              → New snapshot
```

The client store is **read-only** to UI. Only the store's reducer can apply a server snapshot. UI code never mutates game state directly.

## Prediction and reconciliation

The client predicts:

- Local character movement (Roblox default).
- Cosmetic gun recoil and muzzle flash.
- Interaction prompt highlights.
- UI transitions and timers.

The client does not predict:

- Hits or damage.
- Clue discovery.
- Answer correctness.
- Sigil break success.
- Vote results.
- Cinders.

When the server corrects the client, the client snaps the affected value and plays a short "correction" cue if the difference is visible. No rubber-banding of the camera.

## UI architecture

| Layer | Technology | Notes |
|---|---|---|
| World UI | BillboardGui, SurfaceGui, Highlight | Diegetic props, nameplates, sigil markers |
| HUD | ScreenGui | Minimal, safe-area aware, scalable |
| Menus | ScreenGui + UIGridLayout | Case File, evidence board, shop, settings |
| Text | RichText + localized strings | No hard-coded English in scripts |
| Icons | Sprite sheets | Colorblind-safe shapes |
| Cursor | Custom cursor on menus | Restored on close |

UI rules:

- Every screen has a **close** and a **back** path.
- No screen traps the player without a visible exit.
- No screen pauses the match unless the server says so.
- The Case File can be opened while walking; it is a diegetic file, not a modal pause.
- The shop is the only modal screen, and it is pre-match.
- Mobile controls never overlap the HUD's critical elements.

## Performance budget

| Budget | Target |
|---|---|
| Client FPS (PC) | 60 |
| Client FPS (mobile) | 30 |
| UI draw calls | < 150 |
| Visible parts | < 15,000 |
| Streamed radius | 512 studs |
| Audio voices | < 32 simultaneous |
| Texture memory | < 512 MB |
| Script memory | < 250 MB |
| Frame time | < 16.6 ms (PC), < 33.3 ms (mobile) |

Techniques:

- `StreamingEnabled` with a 512-stud radius.
- Model LODs for furniture and props.
- Occlusion culling via room-based streaming.
- Object pooling for clue highlights and damage numbers.
- UI recycling for the evidence board.
- Texture atlases for props.
- No per-frame `FindFirstChild` in loops.
- `RunService.RenderStepped` only for camera and UI that needs it.

## Networking

The client sends **intents**, not state:

```lua
SearchContainer:FireServer(containerId)
SubmitAnswer:FireServer(taskId, optionId)
UseItem:FireServer(itemId, targetId)
MarkTarget:FireServer(targetUserId) -- killer only; server validates
Fire:FireServer(origin, direction)
Vote:FireServer(ballotId, choice)
```

Every intent is rate-limited and validated. The client never sends "I found the clue" or "I hit the killer." It sends "I searched this container" or "I fired in this direction"; the server decides the result.

For lag compensation, the server keeps a 250 ms history of player positions for hitscan. The client's shot origin is clamped to the server's last known position.

## Error handling

| Error | Client behavior |
|---|---|
| Snapshot gap | Request a full resync; show a subtle "reconnecting" indicator. |
| Remote timeout | Retry with backoff; never spam. |
| Desync | Snap to server state; log a telemetry event. |
| Disconnect | Preserve UI state; offer rejoin if the match allows. |
| Map load failure | Show a fallback loading screen; request a new seed. |
| Missing asset | Use a placeholder; report the asset ID. |

## Accessibility

- Text mode replaces all audio-only clues.
- Subtitles for voice lines, stingers, and ritual chants.
- Colorblind palettes for sigils, clues, and UI.
- Remappable keys and controller support.
- Reduced motion for screen shake, camera sway, and lightning.
- Photosensitivity mode for flashes.
- UI scale from 75% to 150%.
- Screen-reader labels on all menu buttons.
- No voice requirement.

## Testing

- **Unit:** controllers reduce snapshots correctly.
- **Integration:** intent → server → snapshot → UI.
- **Visual:** screenshot tests for each screen at 3 resolutions.
- **Performance:** 10-player stress test on mobile.
- **Accessibility:** keyboard-only, screen-reader, colorblind, reduced motion.
- **Chaos:** drop packets, delay snapshots, disconnect mid-ritual.

## Related

- [[Technical Architecture]]
- [[Server Authority]]
- [[Networking and Remotes]]
- [[UI and UX Overview]]
- [[HUD]]
