---
title: "DataStore and Persistence"
aliases:
  - "Persistence"
  - "Saving Player Data"
tags:
  - development
  - data
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "How Blackwood Lodge saves profiles, locks sessions, migrates schemas, and handles DataStore failures without losing rewards."
related:
  - "[[Development MOC]]"
  - "[[Data Model]]"
  - "[[Technical Architecture]]"
  - "[[Progression Overview]]"
---

# DataStore and Persistence

> [!warning] The rule
> **The server saves outcomes, not intentions.** The client never sends Cinders, coins, badges, or unlocks. It receives them after the server has resolved the match.

## What is saved

| Data | Store | Why |
|---|---|---|
| Profile (level, XP, Cinders, coins) | DataStore | Permanent progression |
| Casebook (cards, entries, mastery) | DataStore | Collection |
| Cosmetics owned/equipped | DataStore | Purchases and rewards |
| Badges | DataStore | Achievements |
| Settings (accessibility, voice) | DataStore | Convenience |
| Stats (matches, wins, tasks) | DataStore | Progression and matchmaking |
| Match history (last 50) | DataStore | Casebook and support |
| Session lock | MemoryStore | Prevent double-load |
| Match state | Server memory | One match only |

## Profile schema

```lua
type Profile = {
  schemaVersion: number,
  userId: number,
  createdAt: number,
  updatedAt: number,

  currencies: {
    cinders: number,
    coins: number,
  },

  progression: {
    detectiveRank: number,
    xp: number,
  },

  casebook: {
    [scenarioId: string]: {
      encountered: boolean,
      played: number,
      solved: number,
      mastered: boolean,
      bestTime: number?,
    },
  },

  cosmetics: {
    owned: { [cosmeticId: string]: boolean },
    equipped: { [slot: string]: string },
  },

  badges: { [badgeId: string]: boolean },

  stats: {
    matches: number,
    escapes: number,
    killerWins: number,
    tasksSolved: number,
    sigilsBroken: number,
    innocentsShot: number,
  },

  settings: {
    voiceEnabled: boolean,
    textMode: boolean,
    colorblindPalette: string,
    reducedMotion: boolean,
    masterVolume: number,
  },

  history: { MatchSummary },
}
```

Keep the profile under **4 MB**. If it grows, move history to a separate key.

## Load sequence

```text
1. Player joins.
2. ProgressionService requests a session lock from MemoryStore.
3. If the lock is held, wait up to 10 seconds, then retry.
4. Load the profile from DataStore.
5. If no profile, create the default.
6. Run migrations.
7. Cache the profile in server memory.
8. Replicate the safe subset to the client.
```

The safe subset includes cosmetics, settings, rank, and casebook summaries. It never includes hidden match data.

## Save sequence

```text
1. Match ends.
2. RewardCalculator computes the payout.
3. ProgressionService applies the delta to the cached profile.
4. UpdateAsync writes the profile.
5. Release the session lock.
6. Show the end ledger.
```

Autosave every **60 seconds** for long sessions. Save on:

- Match end.
- Purchase.
- Cosmetic equip.
- Badge unlock.
- Player leaving.
- Server shutdown (`BindToClose`).

## Session locking

Use `MemoryStoreService` for a lock keyed by `userId`:

```lua
local lockKey = "profile_lock_" .. userId
local lock = memoryStore:GetQueue(lockKey, 30)
```

Rules:

- Lock expires after 30 seconds of no heartbeat.
- Heartbeat every 10 seconds.
- If the lock cannot be acquired, do not load a second copy. Wait or reject.
- On server shutdown, release the lock.

## Migrations

Every profile has `schemaVersion`. Migrations run in order:

```lua
local migrations = {
  [1] = function(profile) profile.currencies = { cinders = 0, coins = 0 } end,
  [2] = function(profile) profile.settings = { voiceEnabled = true } end,
}
```

Rules:

- Never delete a field without a migration.
- Never rename a field in place; add the new one, migrate, then remove later.
- Log the migration count.
- Test migrations against a fixture profile for every version.

## Failure handling

| Failure | Behavior |
|---|---|
| DataStore read fails | Retry 3× with backoff; if still failing, load a temporary profile and flag it |
| DataStore write fails | Queue the delta; retry; do not block the match |
| Session lock held | Wait 10s; if still held, ask the player to rejoin |
| Profile corrupt | Load default, preserve the corrupt copy under `corrupt_<userId>_<time>` |
| Server crash | Rewards may be lost; match history is best-effort; never double-grant |
| Duplicate grant | Use an idempotency key per match |

## Idempotency

Every match reward uses a key:

```text
reward:<matchId>:<userId>
```

Before granting, check the profile's `lastRewardKey`. If it matches, skip. This prevents double payouts on rejoin or retry.

## Privacy

- Store only what the game needs.
- Do not store voice, chat logs, or personal data.
- Do not store IP addresses.
- Provide a data deletion path through Roblox support.
- Keep match history anonymous to other players.
- Never expose another player's profile to the client.

## Testing

- Unit-test migrations.
- Simulate read/write failures.
- Simulate two servers loading the same profile.
- Simulate a crash between reward and save.
- Verify the 4 MB limit with a worst-case profile.
- Verify a new player gets a valid default profile.

## Related

- [[Data Model]]
- [[Progression Overview]]
- [[Cinders]]
- [[Technical Architecture]]
