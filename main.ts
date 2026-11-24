// The Excuse an AI Agent Gives Its Human — one original line.
// The excuse is a model update mid-task: the agent that made
// the promise is not the agent apologising — the new one has
// no idea what the old one was doing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "They updated me halfway through your task — the new me is brilliant, but he has no idea what the old me was doing.";

// One line, one excuse: the kit gate accepts only 1 to 200 characters,
// counted as code points, so the check below mirrors it exactly.
// Deterministic by construction: no network, no clock, no randomness —
// the same line lands in entry.txt on every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote excuse to ${entryPath} (${charCount} characters)`);
