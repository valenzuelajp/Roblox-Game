---
title: "Studio MCP Setup"
aliases:
  - "Roblox Studio MCP"
  - "AI Studio Connection"
tags:
  - development
  - tooling
  - ai
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How to connect Roblox Studio to OpenCode through the official Studio MCP server so an AI agent can inspect and edit the place."
related:
  - "[[Development MOC]]"
  - "[[Toolchain and Rojo]]"
  - "[[Project Structure]]"
---

# Studio MCP Setup

> [!warning] Security
> The Studio MCP server can execute Luau and inspect the open place. Treat it like a local developer credential. Do not expose it to the internet, do not run it on an untrusted place, and close Studio when you are done.

## What it is

Roblox Studio ships an official **MCP (Model Context Protocol) server**. It lets an MCP client — OpenCode, Claude Code, or another compatible agent — talk to the open Studio session.

The server exposes tools such as:

| Tool | What it does |
|---|---|
| `list_roblox_studios` | Lists open Studio sessions |
| `get_studio_state` | Returns the current place, selection, and play state |
| `execute_luau` | Runs Luau in the open place |
| `inspect_instance` | Reads the data model |

The agent can edit scripts, inspect instances, run Luau, and playtest. It **cannot** move the mouse or click Studio's GUI. If a task needs a GUI click, a human must do it.

## Current machine state

| Item | Value |
|---|---|
| Studio version path | `C:\Users\jpagu\AppData\Local\Roblox\Versions\version-7aaa6838d36c4448\` |
| MCP executable | `...\StudioMCP.exe` |
| OpenCode config | `C:\Users\jpagu\.config\opencode\opencode.jsonc` |
| Wrapper | `C:\Users\jpagu\.config\opencode\roblox-studio-mcp.cmd` (to create) |
| Status | Researched; not yet enabled |

The version folder changes when Studio updates. Do not hard-code it in the OpenCode config. Use a wrapper that finds the newest `StudioMCP.exe`.

## Step 1 — Enable the server in Studio

1. Open Roblox Studio.
2. Open **Assistant**.
3. Open the **...** menu.
4. Choose **Manage MCP Servers**.
5. Enable **Studio as MCP server**.
6. Leave Studio open.

If the menu is missing, update Studio. The feature is version-gated.

## Step 2 — Create the wrapper

Create `C:\Users\jpagu\.config\opencode\roblox-studio-mcp.cmd`:

```bat
@echo off
setlocal
set "ROBLOX=%LOCALAPPDATA%\Roblox\Versions"
set "MCP="
for /f "delims=" %%D in ('dir /b /ad /o-d "%ROBLOX%\version-*" 2^>nul') do (
  if exist "%ROBLOX%\%%D\StudioMCP.exe" (
    set "MCP=%ROBLOX%\%%D\StudioMCP.exe"
    goto :found
  )
)
echo StudioMCP.exe not found. Is Roblox Studio installed? 1>&2
exit /b 1
:found
"%MCP%" --stdio
```

The wrapper picks the newest Studio version that contains the executable. It passes `--stdio`, which is what OpenCode expects for a local MCP server.

## Step 3 — Add the server to OpenCode

Open `C:\Users\jpagu\.config\opencode\opencode.jsonc` and add a `roblox-studio` entry to the `mcp` object:

```jsonc
{
  "mcp": {
    "roblox-studio": {
      "type": "local",
      "command": ["C:\\Users\\jpagu\\.config\\opencode\\roblox-studio-mcp.cmd"],
      "enabled": true
    }
  }
}
```

If the config uses a different shape, keep the existing style and add only the new key. Do not replace the other MCP servers.

## Step 4 — Restart OpenCode

MCP servers are started when OpenCode starts. After saving the config:

1. Quit OpenCode completely.
2. Open Studio and load the place.
3. Start OpenCode.
4. Ask the agent to list Studio sessions.

A healthy connection returns the open place name and the play state.

## Step 5 — Verify

Ask the agent to run a harmless read:

```lua
print(game.Name)
print(#game:GetService("Players"):GetPlayers())
```

If it prints, the connection works. If it fails:

| Symptom | Fix |
|---|---|
| "StudioMCP.exe not found" | Update Studio; check the `Versions` folder |
| "No studios found" | Studio is not open, or the MCP server is not enabled |
| Timeout | Restart Studio, then OpenCode |
| Permission error | Run OpenCode as the same Windows user as Studio |
| Multiple versions | The wrapper picks the newest; close old Studio windows |

## What the agent can do

- Read and edit scripts in the open place.
- Create and configure instances.
- Run Luau for tests and inspections.
- Start and stop playtests.
- Read logs and output.

## What the agent cannot do

- Click Studio's menus.
- Move the mouse.
- Approve a Roblox asset upload.
- Publish the place without a human.
- Bypass Roblox moderation.

## Working with Rojo

You can use **either** Rojo or Studio MCP, but they overlap. The recommended split:

- **Rojo** for source-controlled code, so edits are diffable and AI-friendly.
- **Studio MCP** for inspecting the live place, running Luau, and playtesting.
- Do not edit the same script in both at once. Rojo will overwrite Studio changes.

If Rojo is not installed, Studio MCP can bootstrap the place, but the code will live in the `.rbxlx` binary/XML rather than in `game/src`. For a project of this size, install Rojo.

## Safety rules

1. **Local only.** Never expose the MCP port or proxy to the internet.
2. **Trusted place only.** Do not connect to a place with unreviewed plugins or backdoors.
3. **Review Luau.** The agent can run code; read before you run.
4. **Close when done.** Stop Studio or disable the server after a session.
5. **No secrets in prompts.** Do not paste API keys, cookies, or personal data.
6. **Commit often.** MCP edits are not a substitute for version control.

## Troubleshooting the wrapper

Test the wrapper directly in PowerShell:

```powershell
& "C:\Users\jpagu\.config\opencode\roblox-studio-mcp.cmd" --version
```

Expected: the StudioMCP version. If it hangs, the wrapper is waiting for stdio; that is normal for `--stdio`. Test with `--version` instead.

To see which executable the wrapper found:

```powershell
Get-ChildItem "$env:LOCALAPPDATA\Roblox\Versions" -Directory |
  Sort-Object LastWriteTime -Descending |
  ForEach-Object { Join-Path $_.FullName 'StudioMCP.exe' } |
  Where-Object { Test-Path $_ } |
  Select-Object -First 1
```

## Related

- [[Toolchain and Rojo]]
- [[Project Structure]]
- [[Development MOC]]
- [[Technical Architecture]]
