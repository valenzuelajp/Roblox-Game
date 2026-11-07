---
title: "Implementation Plan"
aliases:
  - "Step-by-Step Implementation Plan"
  - "Grey-Box Prototype Plan"
tags:
  - development
  - roadmap
  - implementation
  - status/proposed
  status: proposed
  updated: 2026-11-06
  summary: "The step-by-step technical implementation plan for Milestone 1 (Grey-Box Prototype) and beyond."
  related:
    - "[[Build Roadmap]]"
    - "[[Technical Architecture]]"
    - "[[Project Structure]]"
    - "[[Development MOC]]"
---

# Implementation Plan

> [!info] Purpose of this page
> This document outlines the concrete, step-by-step engineering roadmap to transition *Blackwood Lodge* from design documentation (M0) to a fully playable grey-box prototype (M1).

---

## Milestone 1: The Grey-Box Prototype (Phase 1)

The primary goal of Milestone 1 is to get 6 players into a single 30-minute match that runs from lobby to escape without human intervention or soft-locks.

### Step 1: Initialize the Toolchain & Rojo Project Structure
*Establish the file-sync bridge between VS Code and Roblox Studio.*
- **Deliverables**:
  - `default.project.json` at root mapping `src/server`, `src/client`, and `src/shared` to `ServerScriptService`, `StarterPlayerScripts`, and `ReplicatedStorage`.
  - Directory structure (`src/server/services`, `src/client/controllers`, `src/shared/types`, `src/shared/constants`).
  - Core type definitions (`MatchState`, `PlayerRole`, `ScenarioData`, `ClueEntry`) in `src/shared/types`.
- **Exit Criteria**: `rojo serve` successfully syncs files into Roblox Studio.

### Step 2: Build the Server-Authoritative Match State Machine (`MatchService`)
*The heartbeat of the match.*
- **Deliverables**:
  - Server-side state machine handling phases: `Lobby` → `Shop` → `Arrival` → `Investigation` → `Shift` → `Ritual` → `LastHunt` → `Results`.
  - Secure role assignment (1 Killer, rest Investigators; excluding killers from first-pistol pool per [[Canonical Decisions|D-001 / D-002]]).
  - 30-minute match clock replication to clients.
- **Exit Criteria**: Players transition through phases synchronously on the server and client.

### Step 3: Implement Procedural Map Generation & Room Seeding (`MapService`)
*The house that changes every session.*
- **Deliverables**:
  - Room data structures for the 8 anchor rooms (Foyer, Ballroom, Kitchen, Study, Chapel, Archive, Vault, Attic) and modular rooms.
  - Seed-based procedural room placement algorithm guaranteeing reachability ([[Canonical Decisions|D-024]]).
  - Clue container spawning within rooms based on the generated seed.
- **Exit Criteria**: 100 consecutive random seeds generate valid, fully connected 3-floor lodges with zero unreachable rooms or blocked tasks.

### Step 4: Build the Clue & Case File System (`ClueService` & `CaseFileService`)
*The core investigation loop.*
- **Deliverables**:
  - Server-authoritative clue manifest (never replicated to clients).
  - Physical interaction handler for searching containers (~2s search time per [[Canonical Decisions|D-029]]).
  - 4-part Case File submission logic with incorrect answer penalties (60s lock per [[Canonical Decisions|D-008]]).
- **Exit Criteria**: Players can search containers, discover clues, and submit answers to the Case File.

### Step 5: Implement Killer Mechanics & Sigil Loop (`KillerService` & `SigilService`)
*The antagonist pressure.*
- **Deliverables**:
  - Server-validated Proximity Mark ability (no wall-hacks, 60s initial grace period).
  - Visible sigil placement and countdown puzzle break system.
  - Sabotage toggles (lights, doors).
- **Exit Criteria**: Killer can mark investigators, place sigils, and investigators can break sigils or rescue marked targets.

### Step 6: Build the Endgame Ritual & Escape (`RitualService`)
*The climax of the match.*
- **Deliverables**:
  - 30-second chapel channel interaction, anchor requirements, and interruption logic ([[Canonical Decisions|D-028]]).
  - Killer reveal and Last Hunt buffs (speed boost, wallhack preview).
  - 5-letter Hollow Word exit gate check.
- **Exit Criteria**: Completing 4 tasks enables the ritual, which reveals killers, grants the 5th letter, and unlocks the exit gate upon correct word entry.

### Step 7: Basic UI & Client Controllers
*Making it playable.*
- **Deliverables**:
  - Minimal HUD (Case File progress, match timer, inventory/Shillings).
  - Voting UI (Pistol Vote / Fate Vote) and proximity interaction prompts.
- **Exit Criteria**: Players have clear visual feedback for tasks, inventory, and phase timers.

---

## Subsequent Milestones Preview

- **Milestone 2 (Vertical Slice)**: Full art pass on scenario `S01 The Founder's Debt`, all 5 puzzle families, second pistol + seals, detain/rescue, and spatial voice integration.
- **Milestone 3 (Content Complete)**: All 10 scenarios, 25 rooms, all items, cosmetics, badges, and localization hooks.
- **Milestone 4 (Beta)**: Closed beta with 100+ players, analytics dashboards, and polish.
- **Milestone 5 (Launch)**: Public release on Roblox.
