#!/usr/bin/env node
/**
 * Regenerates the Agent Skills discovery index from the SKILL.md files on disk.
 *
 * The index carries a SHA-256 digest per skill so an agent can verify it got
 * the artifact the site meant to publish. Hand-maintaining those digests is
 * impossible, so this runs as part of `npm run build` — edit a SKILL.md and
 * the digest follows automatically.
 *
 * Spec: Agent Skills Discovery RFC v0.2.0
 * https://github.com/cloudflare/agent-skills-discovery-rfc
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(root, "public", ".well-known", "agent-skills");
const INDEX = join(SKILLS_DIR, "index.json");
const SCHEMA = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";

/** RFC v0.2.0: 1–64 chars, lowercase alphanumeric + single interior hyphens. */
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Pull a scalar field out of the YAML frontmatter block. */
function frontmatterField(source, field) {
  const block = source.match(/^---\n([\s\S]*?)\n---/);
  if (!block) return null;
  const line = block[1].match(new RegExp(`^${field}:\\s*(.+)$`, "m"));
  return line ? line[1].trim().replace(/^["']|["']$/g, "") : null;
}

const skills = [];

for (const entry of readdirSync(SKILLS_DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const file = join(SKILLS_DIR, entry.name, "SKILL.md");
  if (!existsSync(file)) {
    console.warn(`agent-assets: ${entry.name}/ has no SKILL.md — skipped`);
    continue;
  }

  const source = readFileSync(file, "utf8");
  const name = frontmatterField(source, "name") ?? entry.name;
  const description = frontmatterField(source, "description");

  if (!NAME_RE.test(name) || name.length > 64) {
    throw new Error(
      `agent-assets: skill name "${name}" is not a valid RFC v0.2.0 name ` +
        `(lowercase alphanumeric, single interior hyphens, max 64 chars)`,
    );
  }
  if (!description) {
    throw new Error(`agent-assets: ${entry.name}/SKILL.md has no description:`);
  }
  if (description.length > 1024) {
    throw new Error(
      `agent-assets: ${name} description is ${description.length} chars (max 1024)`,
    );
  }
  if (name !== entry.name) {
    throw new Error(
      `agent-assets: ${entry.name}/SKILL.md declares name "${name}" — ` +
        `the directory name must match, because it forms the published URL`,
    );
  }

  skills.push({
    name,
    type: "skill-md",
    description,
    url: `/.well-known/agent-skills/${name}/SKILL.md`,
    digest: `sha256:${createHash("sha256").update(source).digest("hex")}`,
  });
}

skills.sort((a, b) => a.name.localeCompare(b.name));

writeFileSync(INDEX, `${JSON.stringify({ $schema: SCHEMA, skills }, null, 2)}\n`);
console.log(`agent-assets: indexed ${skills.length} skill(s)`);
for (const s of skills) console.log(`  ${s.name} ${s.digest.slice(0, 19)}…`);
