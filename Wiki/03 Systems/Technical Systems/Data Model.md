---
title: "Data Model"
aliases:
  - "Schema"
  - "Player Data"
tags:
  - systems
  - technical
  - data
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The profile, match, scenario, clue, inventory, vote, and telemetry schemas, with DataStore keys and migration rules."
related:
  - "[[Technical Overview]]"
  - "[[Server Authority]]"
  - "[[Progression Overview]]"
---

# Data Model

> [!info] Two scopes
> **Profile data** persists in DataStore. **Match data** lives in server memory and dies with the match. Never write match secrets to the client or to persistent storage.

## Profile (persistent)

```lua
type Profile = {
  version: number,
  userId: number,
  createdAt: number,
  lastSeen: number,

  cinders: number,
  rank: number,
  xp: number,

  cosmetics: {
    owned: { [string]: boolean },
    equipped: {
      outfit: string?,
      hat: string?,
      glasses: string?,
      gloves: string?,
      gunSkin: string?,
      lobbyTheme: string?,
      title: string?,
    },
  },

  casebook: {
    [scenarioId: string]: {
      encountered: boolean,
      played: number,
      solved: boolean,
      mastered: boolean,
      bestTasks: number,
      word: string?,
      lastPlayed: number,
    },
  },

  badges: { [badgeId: string]: number }, -- earned timestamp
  stats: {
    matches: number,
    escapes: number,
    deaths: number,
    tasksSolved: number,
    sigilsBroken: number,
    killersStopped: number,
    killerWins: number,
  },

  settings: {
    voiceOptIn: boolean,
    textOnly: boolean,
    reduceMotion: boolean,
    reduceBlood: boolean,
    colorblind: "none" | "protan" | "deutan" | "tritan",
    textSize: 100 | 125 | 150,
  },
}
```

## Match (server memory)

```lua
type Match = {
  id: string,
  seed: number,
  phase: MatchPhase,
  startedAt: number,
  endsAt: number,

  players: { [userId: number]: PlayerState },
  scenario: ScenarioCard,       -- server-only
  clueManifest: { ClueEntry },  -- server-only
  map: MapLayout,                -- public after load

  caseFile: CaseFileState,
  evidenceBoard: EvidenceBoardState,
  ritual: RitualState,
  sigils: { [sigilId: string]: SigilState },
  votes: { [voteId: string]: VoteState },

  killers: { number },           -- server-only until reveal
  winner: "investigators" | "killers" | nil,
  endingId: string?,
}
```

## Player state (match)

```lua
type PlayerState = {
  userId: number,
  role: "investigator" | "killer",
  alive: boolean,
  downed: boolean,
  detained: boolean,
  hp: number,
  maxHp: number,

  position: Vector3,
  inventory: { [itemId: string]: ItemState },
  shillings: number,
  cindersEarned: number,

  hasPistol: boolean,
  bullets: number,
  sigils: { string },

  voteCooldown: number,
  lastMarkAt: number,
  lastSearchAt: number,
}
```

## Scenario card (server-only)

```lua
type ScenarioCard = {
  id: string,
  title: string,
  difficulty: "easy" | "medium" | "hard",
  victimProfile: VictimProfile,
  motive: string,
  weapon: string,
  stagingRoom: string,
  signature: string,
  redHerring: string,
  hollowWord: string,
  validRooms: { string },
  clueThemes: { string },
  answers: {
    victim: string,
    method: string,
    scene: string,
    motive: string,
  },
  npcVariants: { [npcId: string]: string },
  epilogue: string,
  contentFlags: { string },
}
```

## Clue manifest (server-only)

```lua
type ClueEntry = {
  id: string,
  task: "victim" | "method" | "scene" | "motive",
  tier: "free" | "item" | "false",
  roomId: string,
  containerId: string,
  requiredItem: string?,
  answer: string,
  textId: string,
  foundBy: number?,
}
```

## Persistence keys

| Key | Scope | TTL |
|---|---|---|
| `profile:{userId}` | DataStore | Permanent |
| `session:{userId}` | MemoryStore | 5 minutes |
| `queue:{region}:{mode}` | MemoryStore | 5 minutes |
| `match:{matchId}` | MemoryStore | 60 minutes |

## Migration rules

- Every profile has a `version`.
- Migrations are pure functions: `migrate_v1_to_v2(profile)`.
- Never delete a field without a migration.
- Unknown fields are preserved.
- If a profile fails to load, create a default profile and log the error. Do not block the match.

## Privacy

- Do not store voice data.
- Do not store chat text beyond moderation needs.
- Do not store IP addresses.
- Telemetry is aggregated and anonymized.
- Players can request deletion per platform policy.

## Related

- [[Technical Overview]]
- [[Server Authority]]
- [[Progression Overview]]
