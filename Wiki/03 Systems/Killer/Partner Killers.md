---
title: "Partner Killers"
aliases:
  - "Two Killers"
  - "The Hand and The Choir"
tags:
  - systems
  - killer
  - roles
  - status/locked
status: locked
updated: 2026-11-04
summary: "How the two-killer mode works at 8–10 players: shared cooldown, private channel, separate bodies, and both-must-be-stopped."
related:
  - "[[Killer Role]]"
  - "[[Mark and Cooldown]]"
  - "[[Sigil System]]"
  - "[[Win Conditions]]"
---

# Partner Killers

## When

At **8–10 players**, there are **two killers**:

- **The Hand** — the primary cultist.
- **The Choir** — the second cultist.

At **6–7 players**, there is one killer. Do not add a second killer to a small lobby; it becomes unwinnable.

## What they share

| Shared | Not shared |
|---|---|
| Identity (they know each other) | Health |
| Private text channel | Inventory |
| One mark cooldown | Position |
| Sabotage alerts | Pistol ownership |
| Scenario card and true answers | Cinders (individual) |
| Win condition | Detention status |

They are **partners**, not clones. Each has their own body, health, and items.

## The private channel

- A text-only channel, always available.
- Voice is not routed to the channel; they can use proximity voice like everyone else.
- The channel is not visible to investigators.
- The channel is logged for moderation.
- The channel is disabled after both killers are dead or detained.

The channel is how they coordinate:

- "I marked the doctor; defend the sigil in the cellar."
- "The team is in the archive; flicker the east wing."
- "I have the second pistol; meet at the chapel."
- "They solved the motive; plant the false clue in the study."

## Shared cooldown

The partners share **one** mark cooldown:

- If The Hand marks, The Choir cannot mark until the sigil resolves + 45 seconds.
- The cooldown UI shows the same timer to both.
- The partner who did not mark should defend the sigil or sabotage.
- The shared cooldown is the main balance lever. Without it, two killers could mark two victims at once and snowball.

## Both must be stopped

Investigators win only when **both** killers are stopped (dead or detained) and at least one investigator escapes. Stopping one killer:

- Removes their abilities.
- Leaves the other active.
- Does **not** end the match.
- Does **not** reveal the other killer (unless the ritual does).

If one killer is detained, the other can rescue them from the cellar cell (10 seconds). If both are detained, investigators win.

## Parity

The killers win at **parity**: living killers ≥ living investigators.

With two killers, parity is easier to reach. The match ends immediately when parity is met, even if one killer is detained? No — a detained killer does not count as living for parity. If The Hand is detained and The Choir is alive, parity is 1 vs. living investigators. The Choir must reach 1 vs. 1 or better.

## Communication rules

- The private channel is text-only. No voice.
- The channel cannot be used to reveal the killers to the table.
- The channel is muted during the reveal? No — it stays open, but the killers are exposed.
- The channel is logged. Toxic behavior is moderated.

## Edge cases

| Case | Rule |
|---|---|
| One killer disconnects before first mark | The remaining killer continues; no replacement |
| One killer disconnects after first mark | The remaining killer continues alone |
| Both disconnect | Investigators win after 60s |
| One killer is detained | The other can rescue; both must be stopped |
| One killer is killed | The other continues; the dead killer becomes a ghost |
| Both are detained | Investigators win immediately |
| One killer claims the second pistol | The other does not share it |
| One killer is marked | Killers cannot be marked |
| Parity reached with one detained | Only living killers count |

## Design notes

- Two killers should feel like **a conspiracy**, not a team deathmatch.
- The shared cooldown forces them to take turns; the private channel makes the turn-taking social.
- The killers should not be able to stand next to each other all match; that is too obvious.
- The second killer is not a "bonus life." Both must be stopped.
- The 8–10 player lobby is the only place for two killers. Do not scale to 3.

## Related

- [[Killer Role]]
- [[Mark and Cooldown]]
- [[Sigil System]]
- [[Win Conditions]]
- [[Detain System]]
