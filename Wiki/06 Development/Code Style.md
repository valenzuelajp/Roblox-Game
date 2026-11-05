---
title: "Code Style"
aliases:
  - "Luau Style Guide"
  - "Engineering Standards"
tags:
  - development
  - code
  - standards
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The Luau naming, module, type, security, and review conventions for the Blackwood Lodge codebase."
related:
  - "[[Project Structure]]"
  - "[[Technical Architecture]]"
  - "[[Testing Strategy]]"
  - "[[Contributing]]"
---

# Code Style

## Principles

1. **Server owns the truth.** Client code never decides outcomes.
2. **Small modules, clear contracts.** One module, one job.
3. **Types at the boundary.** Every remote payload and data file has a type.
4. **No magic numbers.** Tuning values live in `shared/config`.
5. **No silent failures.** Log, telemetry, or error — never swallow.
6. **Readable beats clever.** The next contributor is tired.

## Formatting

- **StyLua** with the repo's `stylua.toml`.
- 4-space indentation.
- 120-column soft limit.
- Double quotes for strings.
- Trailing commas in multi-line tables.
- No tabs.
- One statement per line.

## Naming

| Kind | Convention | Example |
|---|---|---|
| ModuleScript | PascalCase | `CaseFileService` |
| Folder | PascalCase | `Systems` |
| Function | camelCase | `submitAnswer` |
| Local variable | camelCase | `clueManifest` |
| Constant | SCREAMING_SNAKE_CASE | `MAX_BULLETS` |
| Type | PascalCase | `ClueEntry` |
| Remote event | PascalCase | `SubmitAnswer` |
| Remote function | PascalCase | `RequestSnapshot` |
| Config key | camelCase | `sigilCountdown` |
| Asset | kebab-case | `study-desk-01` |
| Test | `*.spec.lua` | `case-file.spec.lua` |

## Module template

```lua
--!strict

local CaseFileService = {}
CaseFileService.__index = CaseFileService

export type Config = {
    lockoutSeconds: number,
}

function CaseFileService.new(config: Config)
    local self = setmetatable({}, CaseFileService)
    self._config = config
    self._tasks = {}
    return self
end

function CaseFileService:Submit(player: Player, taskId: string, optionId: string): boolean
    assert(type(taskId) == "string", "taskId must be a string")
    -- validate, mutate, notify
    return true
end

return CaseFileService
```

## Type rules

- `--!strict` at the top of every module.
- Export public types from the module that owns them.
- No `any` in new code. Use `unknown` and narrow.
- Remote payloads are validated at runtime, not just typed.
- Discriminated unions for state machines.
- `Readonly` tables for config.

## Server/client boundary

**Server may:**

- Read and write game state.
- Decide answers, hits, marks, votes, rewards.
- Generate the map and case.
- Send filtered snapshots.

**Client may:**

- Read its own filtered state.
- Send intents.
- Predict cosmetics.
- Render and play audio.

**Never:**

- Send the answer key to the client.
- Trust a client-provided position, hit, or item count.
- Let the client choose a reward.
- Put killer-only data in a replicated container.
- Use `RemoteFunction` for high-frequency calls.

## Error handling

```lua
local ok, result = pcall(function()
    return generator:Generate(seed)
end)

if not ok then
    telemetry:Error("generation_failed", { seed = seed, message = tostring(result) })
    return fallback:Generate(GOLDEN_SEED)
end
```

Rules:

- Use `pcall` around generation, DataStore, and external calls.
- Return `(success, valueOrError)` from service methods.
- Never expose stack traces to clients.
- Log with a stable event name and structured fields.
- Do not log personal data.

## Security

- Validate every remote argument: type, range, ownership, phase.
- Rate-limit per player and per remote.
- Check line of sight on the server for marks and shots.
- Check distance on the server for interactions.
- Reject impossible movement.
- Never trust `HumanoidRootPart.CFrame` from the client for hits.
- Keep killer identity in `ServerStorage` or a server-only table.
- Clear server-only data before `:Clone()` to the client.

## Performance

- Cache `FindFirstChild` results at startup.
- Use `workspace:GetPartBoundsInBox` sparingly.
- Avoid per-frame loops over all players.
- Use `task.spawn` for long work, not `wait`.
- Batch remote calls; do not send a remote per frame.
- Use `table.clear` for reuse.
- Profile before optimizing.

## Git

### Branches

```text
main
  feature/<short-name>
  fix/<short-name>
  content/<card-or-room>
```

### Commits

```text
feat(case-file): add 60s wrong-answer lockout
fix(sigil): prevent sigil spawn inside locked room
docs(dev): add testing strategy
content(s01): tune free clue text
```

### Pull requests

- One system or one content batch per PR.
- Description: what, why, how tested.
- Screenshots for UI changes.
- Telemetry for new mechanics.
- No direct pushes to `main`.

## Review checklist

- [ ] Does it preserve server authority?
- [ ] Are remote payloads validated?
- [ ] Are there tests?
- [ ] Is there telemetry?
- [ ] Is there an accessibility path?
- [ ] Is there a counterplay?
- [ ] Are tuning values in config?
- [ ] Are errors handled?
- [ ] Is the code readable without comments?
- [ ] Does it match the vault's design?

## Comments

Use comments to explain **why**, not **what**:

```lua
-- The killer must not see the container ID, only the room (D-030).
local killerView = manifest:RedactForKiller()
```

Do not comment out dead code. Delete it.

## Documentation

Every service has a header:

```lua
--[[
    CaseFileService
    Owns the four tasks, answer validation, and lockouts.
    Server-only. Never replicates the answer key.
    Design: 03 Systems/Case File/Case File Overview.md
]]
```

Every config file links to its design page.

## Related

- [[Project Structure]]
- [[Technical Architecture]]
- [[Testing Strategy]]
- [[Contributing]]
