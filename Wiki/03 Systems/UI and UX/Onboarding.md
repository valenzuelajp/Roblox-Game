---
title: "Onboarding"
aliases:
  - "Tutorial"
  - "New Player Experience"
tags:
  - systems
  - ui
  - onboarding
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The first-match experience: tutorial, safe defaults, contextual hints, killer onboarding, and the retention beats."
related:
  - "[[UI and UX Overview]]"
  - "[[03 Systems/UI and UX/Accessibility|Accessibility]]"
  - "[[Progression Overview]]"
---

# Onboarding

> [!info] The first 90 seconds
> A new player should understand three things before the shop: **you are a detective, one of you is a killer, and the house wants you to stay.** Everything else can be taught in context.

## First launch

1. **Content warning.** Blood, death, flashing lights, and cult imagery. Continue / reduce effects.
2. **Voice consent.** "Voice is optional. You can play entirely with text." Never auto-join voice.
3. **Name and cosmetics.** Default outfit; no pressure to buy.
4. **Tutorial prompt.** "Play the 3-minute tutorial?" Yes / Skip.

## The tutorial

### Investigator tutorial (3 minutes)

- Wake in the foyer. The host is missing. A body is in the study.
- Walk to the body. Search it. Find a free clue.
- Open the Case File. See three options. One is crossed out by the clue.
- Walk to the evidence board. Pin the clue.
- Buy an item in the shop. Use it on the item clue.
- Submit the answer. Get a letter.
- End with: "Four tasks. One ritual. One word. Get out before dawn."

The tutorial does not teach the killer's identity or the scenario answers. It teaches the loop.

### Killer tutorial (3 minutes)

- Enter the shop. Open the staging tab.
- Pick a card. Place the body. Choose a signature.
- Mark a training dummy. Watch the sigil spawn.
- Break the sigil as the investigator would.
- End with: "You are not the monster. You are the guest who knows the house."

The killer tutorial is only shown to players who have opted into the killer queue or after their first 5 matches.

## Contextual hints

| Situation | Hint |
|---|---|
| Player has not moved for 30s | "The foyer board has a pin missing." |
| Player searches the same container twice | "You already searched this. Try the next room." |
| Player has a free clue but no item | "A closer look needs the right tool." |
| Player is marked | "The sigil is real. Someone can break it." |
| Player is lost | Compass points to the nearest task room, not the clue |
| Player is dead | "You can watch. You cannot speak." |

Hints are **suggestions**, not quest markers. They never reveal a clue location or a killer.

## Safe defaults

- Voice off.
- Text chat on.
- Minimal HUD.
- Standard difficulty.
- No blood decals? (Stylized blood is core; offer "reduce blood" toggle.)
- No screenshots or streaming prompts.

## New player queue

Proposed: the first **3 matches** place the player with other new players and bots? No bots in a social deduction game. Instead:

- First 3 matches are matched with other low-match-count players when possible.
- The killer role is not assigned in the first match unless the player opts in.
- The first match always has at least one experienced "host" player? Optional; can be exploitative. Better: a tutorial and a clear loop.

## Reconnect and drop-in

- If a player disconnects in the shop, they can rejoin before the match starts.
- If they disconnect during the match, they can rejoin within 2 minutes; otherwise they become a ghost.
- The lobby shows "reconnecting" for 60 seconds.

## Retention beats

- First match: one cosmetic unlock.
- First case solved: a badge and a casebook page.
- First ritual: a title.
- First win: a set piece.
- First loss: a "you learned something" line and partial Cinders.

## Metrics

- Tutorial completion rate.
- Time to first clue.
- Time to first task.
- First-match retention.
- Voice opt-in rate.
- Text-only match completion.
- Report rate for new players.

## Related

- [[UI and UX Overview]]
- [[03 Systems/UI and UX/Accessibility|Accessibility]]
- [[Progression Overview]]
