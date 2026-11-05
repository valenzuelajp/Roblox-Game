---
title: "Toolchain and Rojo"
aliases:
  - "Build Toolchain"
  - "Rojo Setup"
tags:
  - development
  - tooling
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The recommended Roblox development toolchain: Studio, Rojo, Rokit, Git, Node, and the optional tools that are not required."
related:
  - "[[Development MOC]]"
  - "[[Studio MCP Setup]]"
  - "[[Project Structure]]"
---

# Toolchain and Rojo

> [!info] Current machine
> Roblox Studio and Roblox Player are installed. Node v24.21.0 and npm 11.19.0 are installed. Rojo, Rokit, Aftman, Wally, and Lune are **not** installed yet.

## The recommended stack

| Tool | Purpose | Required? |
|---|---|---|
| **Roblox Studio** | Build, playtest, publish | Yes |
| **Rojo** | Sync files from `game/src` into Studio | Strongly recommended |
| **Rokit** | Install and pin Rojo versions | Recommended |
| **Git** | Version control | Yes |
| **Node.js** | Tools and generators | Yes (already installed) |
| **OpenCode + Studio MCP** | AI-assisted Studio work | Optional but useful |
| **Blender** | Custom meshes and props | Optional |
| **Aseprite / Photoshop** | Textures and UI art | Optional |
| **Wally** | Luau package manager | Not needed at launch |

## Why Rojo

Without Rojo, the code lives inside the `.rbxlx` place file. That is hard to diff, hard to review, and hard for an AI agent to edit safely.

With Rojo:

- Code lives in `game/src` as `.luau` files.
- Git tracks every change.
- Studio syncs the files into the place.
- The same source can be reviewed, tested, and generated.

The wiki and the code stay in one repository.

## Install Rojo with Rokit

Rokit is the modern toolchain manager for Roblox projects. It replaces Aftman.

```powershell
# Install Rokit (official installer)
Invoke-RestMethod https://raw.githubusercontent.com/rojo-rbx/rokit/main/scripts/install.ps1 | Invoke-Expression
```

Then, in the project root:

```powershell
rokit init
rokit add rojo-rbx/rojo
rokit install
```

Verify:

```powershell
rojo --version
```

> [!note] If Rokit is unavailable
> Download the Rojo release directly from GitHub and put `rojo.exe` on `PATH`. Pin the version in `rokit.toml` or a `README` note.

## Create the project file

`game/default.project.json`:

```jsonc
{
  "name": "BlackwoodLodge",
  "tree": {
    "$className": "DataModel",
    "ReplicatedStorage": {
      "$className": "ReplicatedStorage",
      "Shared": {
        "$path": "src/shared"
      }
    },
    "ServerScriptService": {
      "$className": "ServerScriptService",
      "Server": {
        "$path": "src/server"
      }
    },
    "StarterPlayer": {
      "$className": "StarterPlayer",
      "StarterPlayerScripts": {
        "$className": "StarterPlayerScripts",
        "Client": {
          "$path": "src/client"
        }
      }
    },
    "Workspace": {
      "$className": "Workspace",
      "$properties": {
        "FilteringEnabled": true
      }
    }
  }
}
```

This maps:

- `src/shared` → `ReplicatedStorage.Shared`
- `src/server` → `ServerScriptService.Server`
- `src/client` → `StarterPlayer.StarterPlayerScripts.Client`

## Run the sync

```powershell
cd "A:\roblox game\game"
rojo serve
```

In Studio:

1. Install the Rojo plugin (Studio → Plugins → Manage Plugins, or the Rojo docs).
2. Open the plugin.
3. Connect to `localhost:34872`.
4. Sync.

Now edits in `game/src` appear in Studio.

## Build a place file

```powershell
rojo build default.project.json -o BlackwoodLodge.rbxlx
```

This produces a place you can open in Studio or upload. Use it for CI and for a clean baseline.

## Recommended project layout

```text
game/
  default.project.json
  rokit.toml
  README.md
  src/
    server/
    client/
    shared/
  assets/
  tools/
  tests/
  docs/
```

See [[Project Structure]] for the full tree.

## Git

Initialize the repository at `A:\roblox game` (the vault root) or at `game/`. The vault itself is valuable; track both.

```powershell
cd "A:\roblox game"
git init
git add .
git commit -m "Initial vault and project scaffold"
```

Recommended `.gitignore`:

```gitignore
# Roblox
*.rbxl
*.rbxlx
*.rbxl.lock
*.rbxlx.lock
*.rbxm
*.rbxmx

# Rojo
*.sourcemap.json

# Node
node_modules/
npm-debug.log*

# OS
Thumbs.db
.DS_Store

# Secrets
.env
*.key
```

> [!note] Place files
> If you want a committed baseline place, commit **one** generated `.rbxlx` under `game/build/` and document that it is generated. Do not commit every build.

## Node tools

The vault already uses Node for generators:

```powershell
node "game/tools/generate-scenarios.mjs"
node "game/tools/generate-rooms.mjs"
```

Keep generators deterministic. They should print a summary and fail loudly on invalid data.

## Optional: Wally

Wally is a Luau package manager. It is useful for large dependency graphs. This project has few external dependencies, so Wally is not required at launch. If added later:

```powershell
rokit add UpliftGames/wally
wally init
```

Do not add a package manager before there is a package to manage.

## Optional: Lune

Lune runs Luau outside Roblox. It is useful for unit-testing pure modules (math, generation, validation) without Studio. It is not required for the first slice. If added later, use it to test:

- Seed determinism.
- Clue manifest validation.
- Puzzle generation.
- Economy math.

## What not to install

- **Aftman** — superseded by Rokit; do not run both.
- **Multiple Rojo versions** — pin one.
- **Exploit tools** — never.
- **Untrusted Studio plugins** — they can backdoor the place.

## Troubleshooting

| Problem | Fix |
|---|---|
| `rojo` not found | Reopen the terminal after install; check `PATH` |
| Studio plugin cannot connect | Start `rojo serve`; check port 34872 |
| Sync overwrites Studio edits | Edit in `src`, not Studio |
| `default.project.json` parse error | Validate JSON; no comments in strict JSON |
| Build fails on missing folder | Create the folder; Rojo needs the path |
| Git shows place file churn | Ignore generated `.rbxlx` or commit one baseline |

## Related

- [[Studio MCP Setup]]
- [[Project Structure]]
- [[Build Roadmap]]
- [[Contributing]]
