// Audits wikilinks and frontmatter across the vault.
// Usage: node "A:/roblox game/game/tools/audit-links.mjs"
import fs from "node:fs";
import path from "node:path";

const root = "A:/roblox game";
const skipDirs = new Set([".obsidian", "attachments", "game", "node_modules"]);
const placeholder = new Set([
  "Page Name", "Page", "Note", "New Page", "...", "Folder", "File",
  "04 Scenarios/Scenarios MOC", "README", "Target",
  "Page One", "Page Two", "Page Three",
]);

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
const byPath = new Set(files.map((f) => f.replace(/\.md$/, "")));
const byBase = new Map();
for (const f of files) {
  const base = path.basename(f, ".md");
  if (!byBase.has(base)) byBase.set(base, []);
  byBase.get(base).push(f.replace(/\.md$/, ""));
}

const unresolved = [];
const ambiguous = [];
const frontmatterIssues = [];

for (const file of files) {
  const full = path.join(root, file);
  const text = fs.readFileSync(full, "utf8");

  if (!text.startsWith("---\n")) {
    frontmatterIssues.push(`${file}: missing opening frontmatter`);
  } else {
    const end = text.indexOf("\n---", 4);
    if (end === -1) frontmatterIssues.push(`${file}: unclosed frontmatter`);
    const fm = end === -1 ? text.slice(4) : text.slice(4, end);
    for (const key of ["title:", "status:", "updated:", "summary:"]) {
      if (!fm.includes(key)) frontmatterIssues.push(`${file}: missing ${key}`);
    }
  }

  // Ignore wikilink-like text inside fenced blocks and inline code.
  const linkText = text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "");
  const links = [...linkText.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);
  for (const raw of links) {
    // Obsidian tables escape the pipe as \|. Normalize before parsing.
    const normalized = raw.replace(/\\\|/g, "|");
    const target = normalized.split("|")[0].split("#")[0].trim();
    if (!target || placeholder.has(target)) continue;
    if (byPath.has(target)) continue;
    if (byBase.has(target)) {
      const matches = byBase.get(target);
      if (matches.length > 1) ambiguous.push(`${file}: [[${target}]] matches ${matches.length}: ${matches.join(", ")}`);
      continue;
    }
    unresolved.push(`${file}: [[${target}]]`);
  }
}

const uniq = (arr) => [...new Set(arr)];

console.log(`Pages: ${files.length}`);
console.log(`Unresolved links: ${uniq(unresolved).length}`);
for (const line of uniq(unresolved).slice(0, 200)) console.log(`  ${line}`);
console.log(`Ambiguous basenames: ${uniq(ambiguous).length}`);
for (const line of uniq(ambiguous).slice(0, 120)) console.log(`  ${line}`);
console.log(`Frontmatter issues: ${uniq(frontmatterIssues).length}`);
for (const line of uniq(frontmatterIssues).slice(0, 120)) console.log(`  ${line}`);

if (uniq(unresolved).length === 0 && uniq(frontmatterIssues).length === 0) {
  console.log("AUDIT OK");
}
