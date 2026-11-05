---
title: "Testing Strategy"
aliases:
  - "QA Plan"
  - "Test Plan"
tags:
  - development
  - testing
  - quality
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The test pyramid, CI pipeline, golden seeds, bot matches, playtest scripts, and release gates for Blackwood Lodge."
related:
  - "[[Build Roadmap]]"
  - "[[Publishing Checklist]]"
  - "[[Clue and Scenario Generation]]"
  - "[[Procedural Map Generation]]"
---

# Testing Strategy

## The test pyramid

```text
                 ┌──────────────┐
                 │  Live betas  │  small, real players
                 ├──────────────┤
                 │  Playtests   │  scripted sessions
                 ├──────────────┤
                 │ Bot matches  │  automated 6–10 players
                 ├──────────────┤
                 │ Integration  │  services + remotes
                 ├──────────────┤
                 │    Unit      │  pure functions, data
                 └──────────────┘
```

The lower the layer, the faster and more numerous the tests. The higher the layer, the more realistic and expensive.

## Unit tests

Test pure functions and data:

- PRNG determinism.
- Elimination math.
- Letter order.
- Answer validation.
- Cinders formula.
- Vote tie-breaking.
- Sigil countdown math.
- Inventory charge consumption.
- Scenario card schema.
- Room graph connectivity.

Tooling: **TestEZ** or **Jest-Lua** for Luau, run headless with Lune where possible.

## Integration tests

Test services with a mock Roblox environment:

- Match state machine transitions.
- Clue search → manifest update → evidence board.
- Answer submit → correct/wrong → lockout.
- Mark → sigil spawn → break → save/death.
- Pistol claim → fire → damage → drop.
- Ritual → reveal → Last Hunt → exit.
- Vote → result → detain/execute.
- Disconnect → reconnect → state restore.

Use a fake clock so a 30-minute match runs in seconds.

## Property-based tests

Generate hundreds of cases and assert invariants:

| Property | Assertion |
|---|---|
| Every seed | Four tasks, four free clues, four item clues. |
| Every seed | No two true clues share a room. |
| Every seed | Every item clue is in a different room from its free clue. |
| Every seed | Free clue eliminates exactly one wrong option. |
| Every seed | Item clue confirms the correct option. |
| Every seed | Letters form the card's word. |
| Every seed | Chapel, vault, and exit are reachable. |
| Every seed | No key is behind its own lock. |
| Every seed | Every sigil has two routes. |
| Every card | All four tasks are valid. |

## Golden seeds

Twenty hand-verified seeds are checked into the repo:

```text
tests/golden/seeds/
  seed-001.json
  seed-002.json
  ...
  seed-020.json
```

Each file records:

- Seed.
- Player count.
- Scenario card.
- Expected room assignments.
- Expected clue manifest.
- Expected letter order.
- Screenshot hash of the grey-box.

CI regenerates the seed and diffs the output. A golden seed change requires a design review.

## Bot matches

Bots simulate a full match:

- **Investigator bot:** searches containers, reads clues, submits answers, breaks sigils, votes.
- **Killer bot:** marks, sabotages, defends sigils, claims the second pistol.
- **Chaos bot:** disconnects, reconnects, spams intents, sends malformed remotes.

Run 100 bot matches per build:

- Assert no server errors.
- Assert every match ends in a valid state.
- Assert no soft-locks.
- Assert the winner is reachable.
- Measure match length and task completion.

## Playtests

### Scripted playtest (weekly)

| Step | What to watch |
|---|---|
| 1. Six players, one killer | Does the first clue get found in 3 minutes? |
| 2. First task solved | Does the first pistol feel earned? |
| 3. First sigil | Does the rescue loop create tension or frustration? |
| 4. Midnight shift | Does the map change read as intentional? |
| 5. Ritual | Is 30 seconds too short/long? |
| 6. Last Hunt | Does the killer have a fair chance? |
| 7. Ending | Is the reward legible? |

### Unmoderated playtest (biweekly)

- 10 new players, no coaching.
- Record voice, screen, and timestamps.
- Ask: "What were you trying to do?" "What confused you?" "What did you trust?"
- Do not explain the game during the session.

### Accessibility playtest (monthly)

- Keyboard-only player.
- Screen-reader player.
- Colorblind player.
- Hard-of-hearing player.
- Low-end mobile device.

## Security tests

- Remote fuzzing: malformed IDs, huge payloads, rapid calls.
- Permission tests: investigator tries killer remotes; dead player tries to vote; killer tries to read the manifest.
- Ghost leak: dead player's voice/text cannot reach the living.
- Speed/teleport: server rejects impossible movement.
- Answer brute-force: rate limit + lockout + telemetry.
- Vote stuffing: one vote per player, server-authoritative.

## Performance tests

| Test | Target |
|---|---|
| 10-player match, 30 minutes | Server < 60% CPU, < 1.5 GB RAM |
| Mobile client | 30 FPS, < 33 ms frame time |
| PC client | 60 FPS, < 16.6 ms frame time |
| Map load | < 8 seconds |
| Snapshot size | < 50 KB/s per client |
| Clue generation | < 100 ms |
| Map generation | < 2 seconds |

## CI pipeline

```text
push / pull request
  → lint (Selene)
  → format check (StyLua)
  → type check (Luau LSP)
  → unit tests
  → property tests (1,000 seeds)
  → golden seeds
  → Rojo build
  → place file artifact
  → bot match smoke test (10 matches)
  → deploy to staging
```

Nightly:

- 10,000-seed sweep.
- 100 bot matches.
- Performance benchmark.
- Link/status audit of the vault.

## Release gates

A build is releasable only when:

- [ ] All unit and property tests pass.
- [ ] Golden seeds pass.
- [ ] 100 bot matches complete without a soft-lock.
- [ ] No P0/P1 bugs open.
- [ ] Accessibility checklist passes.
- [ ] Voice-optional path passes.
- [ ] Monetization review passes (no pay-to-win).
- [ ] Moderation and reporting flow passes.
- [ ] Store page and thumbnails are spoiler-free.
- [ ] Rollback plan is tested.

## Definition of done

A feature is done when:

1. It has a design page in the vault.
2. It has unit tests.
3. It has an integration test.
4. It has telemetry.
5. It has an accessibility path.
6. It has a counterplay (if it is a killer tool).
7. It has a player-facing explanation (if it is a mechanic).
8. It has been played in a bot match and a human playtest.

## Related

- [[Build Roadmap]]
- [[Publishing Checklist]]
- [[Clue and Scenario Generation]]
- [[Procedural Map Generation]]
- [[Performance Budgets]]
