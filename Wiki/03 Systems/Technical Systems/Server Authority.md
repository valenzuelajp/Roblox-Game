---
title: "Server Authority"
aliases:
  - "Server-Authoritative Design"
  - "Trust Model"
tags:
  - systems
  - technical
  - security
  - status/locked
status: locked
updated: 2026-11-04
summary: "What the server owns, what the client may request, and the validation rules that prevent exploiters from reading answers or faking actions."
related:
  - "[[Technical Overview]]"
  - "[[Networking and Remotes]]"
  - "[[Anti-Cheat]]"
---

# Server Authority

> [!important] The trust rule
> **The client is never trusted with a secret.** Answers, killer identity, clue locations, the scenario card, health, bullets, and the clock live on the server. The client receives only what the player has earned the right to see.

## Server-owned state

| State | Why it is server-owned |
|---|---|
| Scenario card | Reveals the answers and the killer |
| Killer identity | The core secret |
| Clue manifest | Reveals where every clue is |
| Task answers | The core puzzle |
| Hollow Word | The exit key |
| Health and damage | Prevents god mode |
| Bullets and hits | Prevents aimbot/instant kill |
| Sigil timers | Prevents timer manipulation |
| Votes | Prevents ballot stuffing |
| Inventory | Prevents item duplication |
| Clock and phase | Prevents skipping |
| Cinders and profile | Prevents currency exploits |

## Client responsibilities

The client may:

- Render the world, UI, and audio.
- Send **intents**: move, search, interact, submit answer, mark, shoot, vote, trade, ping.
- Predict local movement and UI feedback.
- Cache public data (map layout, public props, own inventory).

The client may **not**:

- Decide whether a search succeeds.
- Decide whether a hit lands.
- Decide whether a sigil is broken.
- Decide whether an answer is correct.
- Read the scenario card or the killer identity before the reveal.
- Spawn items, bullets, or Cinders.
- Change the clock.

## Validation rules

### Movement

- Server checks speed against the player's current state (base, Last Hunt, wounded).
- Teleport distance is capped; large jumps are rejected and logged.
- Flying and noclip are detected by Y-position and collision checks.

### Search

- The server checks the player's distance to the container (≤ 8 studs).
- The server checks the container state (not already searched, not jammed).
- The server checks the item requirement.
- The server starts the search timer; the client shows the progress bar.

### Answers

- The client sends `task_id` and `option_id`, not the answer text.
- The server compares against the scenario's answer key.
- The server enforces the 60-second lockout.
- The server decides whether a false letter is planted.

### Combat

- The client sends "fire" with a direction, not a hit.
- The server raycasts from the shooter's position.
- The server checks range, line of sight, fire rate, ammo, and friendly fire.
- The server applies damage and death.

### Marks

- The client sends "mark target."
- The server checks range, line of sight, cooldown, immunity, and phase.
- The server spawns the sigil and starts the countdown.

### Votes

- The client sends a candidate ID.
- The server checks the voter is alive, the candidate is valid, and the vote is in the window.
- The server tallies; ties are resolved by the rule.

## Remote design

- Use **RemoteEvents** for fire-and-forget intents.
- Use **RemoteFunctions** only for request/response (e.g., get case file snapshot).
- Never trust a RemoteFunction's return on the client for a security decision.
- Rate-limit every remote.
- Validate argument types and ranges.

## Anti-exploit logging

Log and aggregate:

- Rejected movement.
- Rejected searches.
- Rejected submissions.
- Rejected shots.
- Remote spam.
- Impossible item pickups.
- Client errors.

A single rejection is normal (lag). A pattern is an exploit.

## Related

- [[Networking and Remotes]]
- [[Anti-Cheat]]
- [[Data Model]]
