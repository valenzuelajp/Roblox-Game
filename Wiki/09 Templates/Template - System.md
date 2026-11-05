---
title: "System Page Template"
aliases:
  - "Gameplay System Template"
tags:
  - template
  - systems
status: proposed
updated: 2026-11-04
summary: "Template for a gameplay system page: purpose, loop, rules, edge cases, counterplay, telemetry."
related:
  - "[[Systems MOC]]"
---

# System name

> [!info] One-line contract
> What the system guarantees to the player.

## Purpose

What player problem does this system solve? What does it make fun?

## The loop

1. Trigger.
2. Player action.
3. Server resolution.
4. Feedback.
5. Next decision.

## Rules

| Rule | Value | Status |
|---|---|---|
| | | locked / proposed / open |

## State machine

```text
IDLE → ACTIVE → RESOLVED
```

List every state and transition. Note which are server-owned.

## Edge cases

- What if the player disconnects?
- What if two players act at once?
- What if the item is missing?
- What if the timer expires?
- What if the killer is dead?

## Counterplay

How the other side answers this system. If there is no counterplay, the system is not finished.

## UI and feedback

What the player sees, hears, and feels at each step.

## Accessibility

Text equivalent, colorblind support, timing adjustments, voice-free path.

## Telemetry

Events, metrics, and thresholds that tell us the system is working.

## Design notes

Why the numbers are what they are. What to tune first.

## Related

- [[Systems MOC]]
- [[Canonical Decisions]]
