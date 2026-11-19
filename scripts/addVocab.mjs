#!/usr/bin/env node
/**
 * addVocab.mjs — add vocabulary categories to the server deck, safely.
 *
 *   node scripts/addVocab.mjs [--write] < batch.json     (batch on stdin, no temp files)
 *
 * batch.json: { "level": "A1" | "A2" | "B1" | "B2" | "C1",
 *               "categories": { "<category key>": [["hr", "en", "example sentence"], ...] } }
 *
 * What it does, and why each step exists:
 *   - DEDUPES against every headword already in the deck (core V, V_B2, V_C1, V_C2), ignoring
 *     case, so the same lemma is never served twice and the per-level counts say what is new.
 *   - Refuses a row that is not exactly [hr, en, example] strings, and NOTES (does not refuse)
 *     an example that lacks the headword's first four letters — usually an inflected form.
 *   - A1–B1 categories go into `V` and get a `V_LEVELS` row; B2 into `V_B2`; C1 into `V_C1`
 *     (the payload-only tiers). The deck's level for a tier is its object, so no V_LEVELS row.
 *   - Without --write it only reports.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(root, 'functions/api/content/_data/vocabulary.js');
const write = process.argv.includes('--write');

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const { level, categories } = input;
if (!['A1', 'A2', 'B1', 'B2', 'C1'].includes(level)) throw new Error(`bad level ${level}`);

const mod = await import(file + '?t=' + Date.now());
const seen = new Set();
const norm = (s) => String(s).toLowerCase().trim();
for (const rows of Object.values(mod.V)) if (Array.isArray(rows)) for (const r of rows) seen.add(norm(r[0]));
for (const tier of [mod.V_B2, mod.V_C1, mod.V_C2])
  for (const rows of Object.values(tier)) for (const r of rows) seen.add(norm(r[0]));

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
let added = 0;
let skipped = 0;
const problems = [];
let out = '';
for (const [cat, rows] of Object.entries(categories)) {
  const keep = [];
  for (const r of rows) {
    if (!Array.isArray(r) || r.length !== 3 || r.some((x) => typeof x !== 'string' || !x.trim())) {
      problems.push(`${cat}: malformed row ${JSON.stringify(r)}`);
      continue;
    }
    const [hr, en, ex] = r;
    const k = norm(hr);
    if (seen.has(k)) {
      skipped++;
      continue;
    }
    const stem = k.replace(/[^\p{L}]/gu, '').slice(0, 4);
    if (stem.length >= 3 && !norm(ex).includes(stem)) {
      // Not fatal: an inflected or irregular form (donijeti → donesi) legitimately differs.
      console.log(`  NOTE ${cat}: check the example uses "${hr}": ${ex}`);
    }
    seen.add(k);
    keep.push(r);
  }
  added += keep.length;
  console.log(`${level} ${cat}: +${keep.length} (skipped ${rows.length - keep.length})`);
  if (!keep.length) continue;
  out += `  ${/^[A-Za-z_][\w]*$/.test(cat) ? cat : q(cat)}: [\n`;
  for (const r of keep) out += `    [${q(r[0])}, ${q(r[1])}, ${q(r[2])}],\n`;
  out += `  ],\n`;
}
console.log(`TOTAL +${added} new words; ${skipped} already in the deck; ${problems.length} problems`);
for (const p of problems) console.log('  PROBLEM', p);
if (problems.length) process.exit(1);
if (!write || !added) process.exit(0);

let text = fs.readFileSync(file, 'utf8');
const insertBefore = (re, block) => {
  const m = re.exec(text);
  if (!m) throw new Error(`marker not found: ${re}`);
  text = text.slice(0, m.index) + block + text.slice(m.index);
};
if (level === 'B2') insertBefore(/^};\n(?:\/\/.*\n|\n)*export const V_C1 = \{/m, out);
else if (level === 'C1') insertBefore(/^};\n(?:\/\/.*\n|\n)*export const V_C2 = \{/m, out);
else {
  insertBefore(/^};\nexport const TOP100 = \{/m, out);
  const keys = Object.entries(categories)
    .filter(([, rows]) => rows.length)
    .map(([c]) => `  ${/^[A-Za-z_][\w]*$/.test(c) ? c : q(c)}: '${level}',\n`)
    .join('');
  const m = /^export const V_LEVELS = \{[\s\S]*?^\};\n/m.exec(text);
  if (!m) throw new Error('V_LEVELS not found');
  const end = m.index + m[0].length - '};\n'.length;
  text = text.slice(0, end) + keys + text.slice(end);
}
fs.writeFileSync(file, text);
console.log('written');
