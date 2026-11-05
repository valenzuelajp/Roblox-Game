---
title: "Project Structure"
aliases:
  - "Folder Structure"
  - "Code Layout"
tags:
  - development
  - architecture
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The on-disk and in-place folder layout for Blackwood Lodge, including server, client, shared, assets, tools, and tests."
related:
  - "[[Development MOC]]"
  - "[[Technical Architecture]]"
  - "[[Toolchain and Rojo]]"
---

# Project Structure

> [!info] Rule
> A file should have one job. If a module needs the word "and" to describe it, split it.

## Repository root

```text
A:\roblox game\
  00 Start Here\
  01 Game Design\
  02 Story\
  03 Systems\
  04 Scenarios\
  05 World\
  06 Development\
  07 Player Wiki\
  08 Research\
  09 Templates\
  attachments\
  game\
  .obsidian\
  README.md
```

The vault is the documentation. `game/` is the code.

## Game root

```text
game/
  default.project.json       # Rojo mapping
  rokit.toml                 # pinned toolchain
  README.md                  # how to build and run
  .gitignore
  src/
    server/
      init.server.luau
      services/
      systems/
      data/
      security/
    client/
      init.client.luau
      controllers/
      ui/
      audio/
      input/
    shared/
      types/
      constants/
      util/
      puzzle/
      economy/
  assets/
    models/
    textures/
    audio/
    animations/
    ui/
  tools/
    generate-scenarios.mjs
    generate-rooms.mjs
    validate-links.mjs
    seed-sweep.mjs
  tests/
    unit/
    integration/
    seeds/
  build/
    .gitkeep
```

## Server layout

```text
src/server/
  init.server.luau
  services/
    MatchService.luau
    MapService.luau
    ScenarioService.luau
    ClueService.luau
    CaseFileService.luau
    InventoryService.luau
    CombatService.luau
    SigilService.luau
    RitualService.luau
    VoteService.luau
    ProgressionService.luau
    TelemetryService.luau
    ModerationService.luau
  systems/
    Clock.luau
    SeededRandom.luau
    DoorGraph.luau
    SigilPlacer.luau
    PuzzleGenerator.luau
    AnswerResolver.luau
    RewardCalculator.luau
  data/
    ProfileStore.luau
    SessionLock.luau
    Migrations.luau
    ScenarioDeck.luau        # loaded from JSON/ModuleScript
  security/
    RateLimiter.luau
    Validators.luau
    AuditLog.luau
```

## Client layout

```text
src/client/
  init.client.luau
  controllers/
    MatchController.luau
    HudController.luau
    CaseFileController.luau
    EvidenceBoardController.luau
    ShopController.luau
    InventoryController.luau
    CombatController.luau
    SigilController.luau
    RitualController.luau
    VoteController.luau
    ChatController.luau
    PingController.luau
  ui/
    components/
    screens/
    themes/
  audio/
    AudioController.luau
    MusicController.luau
  input/
    InputMap.luau
    Gamepad.luau
    Touch.luau
    Remap.luau
```

## Shared layout

```text
src/shared/
  types/
    PlayerState.luau
    MatchState.luau
    ScenarioCard.luau
    ClueEntry.luau
    RemoteContracts.luau
  constants/
    Timings.luau
    ItemCatalog.luau
    Words.luau
    Rooms.luau
    UiTokens.luau
  util/
    Result.luau
    Logger.luau
    TableUtil.luau
    VectorUtil.luau
    TimeUtil.luau
  puzzle/
    Zodiac.luau
    Binary.luau
    BloodCipher.luau
    RuneAlignment.luau
    KnotPattern.luau
  economy/
    Prices.luau
    Rewards.luau
```

Shared code must be **pure**: no `game`, no `workspace`, no player data, no HTTP. It can be unit-tested outside Studio.

## Naming conventions

| Kind | Convention | Example |
|---|---|---|
| Module file | PascalCase | `MatchService.luau` |
| Server entry | `init.server.luau` | — |
| Client entry | `init.client.luau` | — |
| Function | camelCase | `startMatch()` |
| Variable | camelCase | `playerState` |
| Constant | SCREAMING_SNAKE | `MAX_PLAYERS` |
| Type | PascalCase | `type MatchPhase = ...` |
| Remote | PascalCase | `SearchContainer` |
| Remote folder | `Remotes` | — |
| UI screen | PascalCase | `CaseFileScreen` |

## Module contract

Every service should expose:

```lua
local MatchService = {}

function MatchService.start(config: Config): ()
function MatchService.stop(): ()
function MatchService.getState(): MatchState
function MatchService.onPhaseChanged(callback: (Phase) -> ()): ()
```

No service reaches into another service's internals. Use events or a small mediator.

## Data files

Scenario cards and room definitions are **data**, not code:

```text
game/src/shared/data/
  scenarios.json
  rooms.json
  items.json
  words.json
```

The server loads and validates them at startup. Invalid data fails the build, not the match.

## Assets

```text
assets/
  models/
    rooms/            # one .rbxm per room module
    props/
    characters/
  textures/
    materials/
    ui/
  audio/
    ambience/
    sfx/
    music/
  animations/
  ui/
```

Naming: `room_study_v01.rbxm`, `prop_letter_opener_v01.rbxm`, `sfx_bell_cracked_01.ogg`. Version suffixes are allowed; `final` is not.

## Tests

```text
tests/
  unit/               # pure Luau modules
  integration/        # server services with mocked remotes
  seeds/              # batch generation and validation
  fixtures/           # sample scenarios and maps
```

## What goes where

| Thing | Location | Why |
|---|---|---|
| Match rules | server service | Authority |
| UI look | client UI | Presentation |
| Item prices | shared constants | Server and client read the same table |
| Scenario answers | server data | Never replicated |
| Room geometry | assets/models | Build once, assemble at runtime |
| Generated rooms | not committed | Build artifacts |
| Decisions | `00 Start Here` | Single source of truth |

## Related

- [[Technical Architecture]]
- [[Toolchain and Rojo]]
- [[Code Style]]
- [[DataStore and Persistence]]
