// Normalizes known broken or ambiguous wikilinks across the vault.
// Usage: node "A:/roblox game/game/tools/fix-links.mjs"
import fs from "node:fs";
import path from "node:path";

const root = "A:/roblox game";
const skipDirs = new Set([".obsidian", "attachments", "game", "node_modules"]);

function walk(dir, rel = "") {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const childRel = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      out.push(...walk(path.join(dir, entry.name), childRel));
    } else if (entry.name.endsWith(".md")) {
      out.push(childRel);
    }
  }
  return out;
}

const fixedTargets = new Map([
  ["Killer Sabotage", "03 Systems/Killer/Sabotage"],
  ["Killer Partners", "03 Systems/Killer/Partner Killers"],
  ["Knot Pattern", "03 Systems/Puzzles/Knot and Pattern"],
  ["Cellar", "05 World/Rooms/The Cellar"],
  ["Blackwood Lodge", "02 Story/Blackwood Lodge (Story)"],
  ["Vesper Shopkeeper", "02 Story/Characters/Madame Vesper"],
  ["Staff NPCs", "02 Story/Characters/The Staff"],
  ["04 Scenarios", "04 Scenarios/Scenarios MOC"],
  ["Progression", "03 Systems/Progression/Progression Overview"],
  ["Milestones", "06 Development/Build Roadmap#Milestones"],
  ["Social Deduction Design", "08 Research/Social Deduction Research"],
  ["Noir References", "08 Research/Noir and Horror References"],
  ["Procedural Generation References", "08 Research/Procedural Generation Research"],
  ["Rewards", "03 Systems/Case File/Rewards and Penalties"],
  ["Camera", "03 Systems/Shop and Economy/Item Catalog#Camera"],
  ["Notebook", "03 Systems/Shop and Economy/Item Catalog#Notebook"],
  ["Magnifying Glass", "03 Systems/Shop and Economy/Item Catalog#Magnifying Glass"],
  ["Fingerprint Kit", "03 Systems/Shop and Economy/Item Catalog#Fingerprint Kit"],
  ["UV Torch", "03 Systems/Shop and Economy/Item Catalog#UV Torch"],
  ["Compass", "03 Systems/Shop and Economy/Item Catalog#Compass"],
  ["Cipher Wheel", "03 Systems/Shop and Economy/Item Catalog#Cipher Wheel"],
  ["Recorder", "03 Systems/Shop and Economy/Item Catalog#Recorder"],
  ["Lockpick", "03 Systems/Shop and Economy/Item Catalog#Lockpick"],
  ["Ritual Anchor", "03 Systems/Ritual/Ritual Anchor"],
]);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceLink(text, from, to) {
  const re = new RegExp(`\\[\\[${escapeRegExp(from)}(\\|[^\\]]+)?\\]\\]`, "g");
  return text.replace(re, (_match, display) => {
    const label = display ? display.slice(1) : from;
    return `[[${to}|${label}]]`;
  });
}

let changedFiles = 0;
let replacements = 0;

for (const file of walk(root)) {
  const full = path.join(root, file);
  const original = fs.readFileSync(full, "utf8");
  let text = original;
  const top = file.split("/")[0];

  for (const [from, to] of fixedTargets) {
    const before = text;
    text = replaceLink(text, from, to);
    if (text !== before) replacements += 1;
  }

  const ambiguous = new Map([
    ["Glossary", top === "07 Player Wiki" ? "07 Player Wiki/Glossary" : "00 Start Here/Glossary"],
    ["Roles", top === "07 Player Wiki" ? "07 Player Wiki/Roles" : "01 Game Design/Roles"],
    ["Accessibility", top === "07 Player Wiki" ? "07 Player Wiki/Accessibility" : "03 Systems/UI and UX/Accessibility"],
    ["Secret Passages", top === "05 World" ? "05 World/Secret Passages" : "03 Systems/Map/Secret Passages"],
  ]);

  for (const [from, to] of ambiguous) {
    const before = text;
    text = replaceLink(text, from, to);
    if (text !== before) replacements += 1;
  }

  if (text !== original) {
    fs.writeFileSync(full, text, "utf8");
    changedFiles += 1;
  }
}

console.log(`Changed ${changedFiles} files; ${replacements} replacement groups.`);
