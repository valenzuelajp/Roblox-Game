---
title: "Contributing"
aliases:
  - "How to Contribute"
  - "Team Guide"
tags:
  - development
  - process
  - status/locked
status: locked
updated: 2026-11-04
summary: "How humans and AI contribute to the Blackwood Lodge vault and codebase without breaking canon, tests, or trust."
related:
  - "[[AI Read Me]]"
  - "[[Code Style]]"
  - "[[Testing Strategy]]"
  - "[[Decision Log]]"
---

# Contributing

## Who can change what

| Area | Who | Review |
|---|---|---|
| Canonical decisions | Project owner | Project owner |
| Story canon | Project owner + narrative lead | Narrative lead |
| Scenario cards | Content lead | Narrative lead + design lead |
| Game design pages | Designers | Design lead |
| Systems pages | Designers + engineers | Design lead + tech lead |
| Code | Engineers | One reviewer |
| Art/audio | Artists | Art lead |
| Player wiki | Community lead | Design lead |
| This vault | Anyone on the team | Area owner |

If you are unsure, ask. A wrong edit is cheaper than a wrong canon.

## Design change process

1. **Propose** the change in [[Open Questions]] or a new decision entry.
2. **Discuss** with the area owner.
3. **Decide**: record it in [[Decision Log]] and, if locked, [[Canonical Decisions]].
4. **Propagate**: update every affected page, link, and test.
5. **Verify**: run the link/status audit and the relevant tests.

Never silently change canon. If a page disagrees with [[Canonical Decisions]], the page is wrong.

## Code contribution

- Branch from `main`: `feat/<short-name>`, `fix/<short-name>`, `content/<short-name>`, `docs/<short-name>`.
- Commit messages: `feat: add sigil break puzzle`, `fix: prevent clue duplication`, `docs: update item catalog`.
- Keep commits small and focused.
- Open a pull request with: what changed, why, how tested, screenshots for UI, and a risk note.
- One approval required. Two for security, data, or monetization changes.
- CI must pass: Selene, StyLua, Luau LSP, unit, property, golden seeds, Rojo build, bot smoke.
- Do not merge your own PR without review, even if you are the lead.

## Definition of done

A change is done when:

- [ ] The behavior is implemented.
- [ ] Tests cover the happy path and at least one failure path.
- [ ] The relevant vault page is updated.
- [ ] The change is recorded in [[Changelog]] if it is player-visible.
- [ ] Accessibility impact is considered.
- [ ] Performance impact is measured.
- [ ] Security impact is reviewed.
- [ ] A second person has reviewed it.

## Writing style for the vault

- Short paragraphs. One idea per paragraph.
- Tables for comparisons, not prose.
- Every page starts with YAML frontmatter.
- Every page has `related` links.
- Use `[[wikilinks]]`, not raw URLs, for internal pages.
- Mark spoilers with `spoiler: true` and a callout.
- Use `locked`, `proposed`, `open`, `deferred`, `deprecated` accurately.
- Do not invent canon silently. If you need a detail, add it as `proposed` and link to [[Open Questions]].

## AI contribution rules

AI assistants may:

- Draft pages, code, tests, and scenarios.
- Summarize decisions.
- Find broken links and inconsistencies.
- Generate placeholder data for prototyping.

AI assistants may not:

- Promote a `proposed` decision to `locked` without the project owner.
- Resolve intentional story ambiguities.
- Add a paid gameplay advantage.
- Copy S2/S3 content into the player wiki.
- Delete a page or decision without a replacement and a changelog entry.
- Invent a canon fact and present it as locked.

Every AI-generated change gets a human review. The reviewer is accountable, not the model.

## Communication

- **Daily:** a short async standup in the team channel: yesterday, today, blockers.
- **Weekly:** a 30-minute design/build review. Decisions are recorded, not just discussed.
- **Milestone:** a playtest and a written retrospective.
- **Incident:** a blameless postmortem within 48 hours.

## Onboarding

A new contributor should be able to:

1. Open the vault in Obsidian.
2. Read [[Start Here]], [[Vision]], [[Core Loop]], and [[Systems MOC]].
3. Run the game locally with [[Toolchain and Rojo]] and [[Studio MCP Setup]].
4. Run the test suite with [[Testing Strategy]].
5. Make one small docs or code change and get it reviewed.

If any step is confusing, fix the docs. That is your first contribution.

## Code of conduct

- Be direct about the work, generous about the person.
- No harassment, slurs, or exclusion.
- Credit contributors publicly.
- Disagree with ideas, not identities.
- Protect player privacy and safety.
- Do not ship something you would not show the player.

## Licensing and credits

- All code is owned by the project.
- All art, audio, and writing must have a license or a release.
- Roblox marketplace assets require a commercial license.
- Music must be original or licensed; no copyrighted tracks.
- AI-assisted assets must be disclosed.
- Credits are in the game and in the vault.

## Related

- [[AI Read Me]]
- [[Code Style]]
- [[Testing Strategy]]
- [[Decision Log]]
