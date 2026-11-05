---
title: "Killer Tells"
aliases:
  - "Tells"
  - "Fair Tells"
  - "Killer Behavior"
tags:
  - systems
  - killer
  - social
  - status/proposed
status: proposed
updated: 2026-11-04
summary: "The fair and unfair clues that let investigators identify the killer through behavior, evidence, and social play."
related:
  - "[[Killer Role]]"
  - "[[The Killer]]"
  - "[[Sabotage]]"
  - "[[Communication Rules]]"
  - "[[Case File Overview]]"
---

# Killer Tells

> [!info] Design goal
> The killer must be **findable**, not obvious. Every tell should be reconstructible from something the killer did, not from a random reveal or a UI leak.

## The fairness test

A tell is fair if a careful player could have noticed it and reasoned from it. A tell is unfair if it requires information the game never showed, or if it reveals the killer without any action.

| Fair | Unfair |
|---|---|
| The killer knows a layout before it is shown. | The killer has a glowing outline. |
| The killer is calm at a body. | The killer's name tag is a different color. |
| The killer pushes a wrong answer. | The killer's voice has a filter they cannot disable. |
| The killer avoids the chapel. | The chapel door only opens for investigators. |
| The killer has blood on a cuff. | The killer's footsteps are silent. |
| The killer buys an item that only helps a killer. | The shop hides the killer's purchases from the audit. |

## Behavioral tells

| Tell | What it looks like | What it means | Counterplay |
|---|---|---|---|
| **Too early** | The killer names a room before the map is revealed. | They scouted during staging. | Ask how they knew; compare with the map seed. |
| **Too calm** | No reaction to the body; changes the subject. | They knew the victim was dead. | Watch who avoids the foyer. |
| **Too helpful** | Volunteers to solve every task, especially the one they staged. | They want to control the answer. | Split the team; make them search with someone else. |
| **Too lost** | Pretends not to know a room they have already visited. | They are hiding map knowledge. | Ask them to lead the way. |
| **Too quick to accuse** | Pushes a suspect before the evidence is in. | They are redirecting. | Ask for the clue, not the conclusion. |
| **Too quiet** | Stops talking when the Case File opens. | They are listening for the team's answer. | Use text chat; make the answer public. |
| **Too generous** | Gives away an item or a clue. | They are buying trust. | Check whether the item is real. |

## Environmental tells

- **Blood trail:** a wounded killer leaves a trail. It fades after 20 seconds.
- **Cold spot:** the killer's sabotage leaves frost on a window.
- **Sigil residue:** a used sigil leaves a faint mark for 10 seconds.
- **Locked door:** a door locked from the wrong side.
- **False clue:** a prop that supports a wrong answer but contradicts the item clue.
- **Missing item:** a black-market item is not on the team purchase board.
- **Staging room:** the room the killer reserved is unusually clean, or the body was placed there.

## Social tells

The killer is a player. They will have habits:

- They avoid the chapel after midnight.
- They are the first to suggest the ritual is too dangerous.
- They know the victim's name before the guest list is found.
- They defend the wrong answer too strongly.
- They are absent during a sigil break.
- They hover near the evidence board without pinning anything.
- They trade an item at a suspicious moment.
- They call the ghost chat "dead chat" correctly (a meta tell; not reliable).

## Post-reveal tells

After the ritual, the killers are revealed. The tells change:

- They run toward the exit, not away.
- They target the pistol holder first.
- They use the Last Hunt speed boost to close distance.
- They try to split the group at the gate.
- They avoid the chapel if the ritual is still active.

## Unfair tells to avoid

- A visible killer outline before the ritual.
- A different footstep sound.
- A name tag color.
- A shop purchase that is invisible to the audit.
- A mark that cannot be seen by the victim.
- A sigil that spawns in an unreachable room.
- A killer-only door.
- A narrator line that says "one of you is lying" only when the killer is near.

## Testing tells

- Run a 6-player bot match with the killer using a fixed strategy. Can the bots identify them from behavior?
- Run a human playtest with the killer instructed to be "the most helpful player." Do investigators suspect them?
- Run a playtest with the killer instructed to be silent. Do investigators notice?
- Measure: time to first suspicion, time to accusation, accuracy of accusation.

## Design notes

- The best tell is the one the killer **chose** to leave.
- The killer should be able to **manage** their tells, not erase them.
- The table should argue about tells, not just vote.
- A tell that only works with voice is not a fair tell; text players must see it too.

## Related

- [[Killer Role]]
- [[The Killer]]
- [[Sabotage]]
- [[Communication Rules]]
- [[Case File Overview]]
