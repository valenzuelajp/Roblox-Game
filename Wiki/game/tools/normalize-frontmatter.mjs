// Adds a status: field to pages that only declare status as a status/... tag.
// Usage:
//   node "A:/roblox game/game/tools/normalize-frontmatter.mjs" --dry-run
//   node "A:/roblox game/game/tools/normalize-frontmatter.mjs"
import fs from "node:fs";
import path from "node:path";

const root = "A:/roblox game";
const skipDirs = new Set([".obsidian", "attachments", "game", "node_modules"]);
const dryRun = process.argv.includes("--dry-run");
const allowed = new Set(["locked", "proposed", "open", "deferred", "deprecated", "active", "template"]);

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

const files = walk(root).sort();
const hasStatus = [];
const wouldAdd = [];
const noTag = [];
const malformed = [];

for (const file of files) {
  const full = path.join(root, file);
  const text = fs.readFileSync(full, "utf8");
  if (!text.startsWith("---\n")) {
    malformed.push(`${file}: missing opening frontmatter`);
    continue;
  }
  const end = text.indexOf("\n---", 4);
  if (end === -1) {
    malformed.push(`${file}: unclosed frontmatter`);
    continue;
  }
  const fm = text.slice(4, end);
  if (/^status:\s*\S+/m.test(fm)) {
    hasStatus.push(file);
    continue;
  }
  const match = fm.match(/status\/(locked|proposed|open|deferred|deprecated|active|template)/);
  const status = match && allowed.has(match[1])
    ? match[1]
    : file.startsWith("07 Player Wiki/")
      ? "active"
      : "proposed";
  if (!match || !allowed.has(match[1])) {
    noTag.push(`${file}: default ${status}`);
  }
  if (dryRun) {
    wouldAdd.push(`${file}: ${status}`);
    continue;
  }
  let nextFm;
  if (/^updated:/m.test(fm)) {
    nextFm = fm.replace(/^updated:/m, `status: ${status}\nupdated:`);
  } else {
    nextFm = `${fm}\nstatus: ${status}`;
  }
  const nextText = `---\n${nextFm}${text.slice(end)}`;
  fs.writeFileSync(full, nextText, "utf8");
  wouldAdd.push(`${file}: ${status}`);
}

console.log(`Pages: ${files.length}`);
console.log(`Already have status field: ${hasStatus.length}`);
console.log(`${dryRun ? "Would add" : "Added"} status field: ${wouldAdd.length}`);
for (const line of wouldAdd.slice(0, 40)) console.log(`  ${line}`);
console.log(`Pages with no status signal: ${noTag.length}`);
for (const line of noTag.slice(0, 40)) console.log(`  ${line}`);
console.log(`Malformed frontmatter: ${malformed.length}`);
for (const line of malformed.slice(0, 40)) console.log(`  ${line}`);
