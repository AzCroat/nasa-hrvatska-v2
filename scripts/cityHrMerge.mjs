#!/usr/bin/env node
// cityHrMerge.mjs — validate authored tranches and emit the new band modules.
//
//   node scripts/cityHrMerge.mjs <dirOfTrancheResults> [--write]
//
// A tranche result is `{ "<city>": { "A2": "…", "B2": "…", "C2": "…" }, … }`.
//
// WHY THE AUTHORING HAPPENS OUTSIDE `src/data/cultural/cityHr/`: a band module
// that exists on disk but is not in `CITY_HR_BANDS` never loads, and the test
// derives the list FROM the directory — so a half-finished band file in there
// is a red build for as long as authoring takes, and a band listed while still
// partial would serve some cities no Croatian at all. Tranches are assembled
// here and land complete or not at all.
//
// Every city is checked against the FULL six-band ladder — the three new texts
// beside the three that already ship — because the monotonic rule and the
// no-duplicate rule are about a city's whole ladder, not about the new half.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { CROATIAN_CITIES } from '../src/data/cultural/geography.js';
import { CITY_INTRO_HR_A1 } from '../src/data/cultural/cityHr/A1.js';
import { CITY_INTRO_HR_B1 } from '../src/data/cultural/cityHr/B1.js';
import { CITY_INTRO_HR_C1 } from '../src/data/cultural/cityHr/C1.js';
import { findSerbism } from '../functions/api/_serbisms.js';
import { containsCyrillic } from '../functions/api/_croatianGuard.js';
import { BAND_FIELD, BAND_RULES, checkCity, wordsIn } from './cityHrBandRules.mjs';

const dir = process.argv[2];
const write = process.argv.includes('--write');
if (!dir) {
  console.error('usage: cityHrMerge.mjs <dir> [--write]');
  process.exit(2);
}

const NEW_BANDS = ['A2', 'B2', 'C2'];
const names = CROATIAN_CITIES.map((c) => c.name);
const nameSet = new Set(names);

/** city → band → text, merged across every tranche file in the directory. */
const authored = {};
let files = 0;
// Only `out-*.json` is authored output. This was once "any .json that is not a
// tranche file", which silently parsed anything else in the directory AS a
// tranche: the per-tranche `FIX.json` written for the overlap repair pass was
// read as authored cities and reported as two spurious "names no real city"
// lines. An input filter defined by exclusion accepts whatever nobody thought
// to exclude.
for (const f of readdirSync(dir).filter((f) => /^out-.*\.json$/.test(f))) {
  files++;
  const data = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  for (const [city, bands] of Object.entries(data)) {
    authored[city] ??= {};
    for (const b of NEW_BANDS) if (typeof bands?.[b] === 'string') authored[city][b] = bands[b];
  }
}

let problems = 0;
const say = (m) => {
  problems++;
  if (problems <= 50) console.log('  ' + m);
};

for (const [city, bands] of Object.entries(authored)) {
  if (!nameSet.has(city)) {
    say(`${city}: names no real city`);
    continue;
  }
  const ladder = {
    A1: CITY_INTRO_HR_A1[city]?.introHrA1,
    A2: bands.A2,
    B1: CITY_INTRO_HR_B1[city]?.introHr,
    B2: bands.B2,
    C1: CITY_INTRO_HR_C1[city]?.introHrC1,
    C2: bands.C2,
  };
  for (const k of Object.keys(ladder)) if (typeof ladder[k] !== 'string') delete ladder[k];
  for (const p of checkCity(city, ladder)) say(p);
  for (const b of NEW_BANDS) {
    const t = bands[b];
    if (typeof t !== 'string') continue;
    if (containsCyrillic(t)) say(`${city} ${b}: CYRILLIC in the text`);
    const sb = findSerbism(t);
    if (sb) say(`${city} ${b}: Serbism "${sb.term ?? ''}" — use ${sb.use ?? '?'}`);
  }
}

console.log(
  `\ntranche files ${files}  cities authored ${Object.keys(authored).length}/${names.length}`,
);
for (const b of NEW_BANDS) {
  const have = names.filter((n) => typeof authored[n]?.[b] === 'string');
  const w = have.map((n) => wordsIn(authored[n][b])).sort((x, y) => x - y);
  const total = w.reduce((a, c) => a + c, 0);
  console.log(
    `  ${b}  ${have.length}/${names.length}  ${total.toLocaleString('en-US')} words  ` +
      `(min ${w[0] ?? 0} median ${w[Math.floor(w.length / 2)] ?? 0} max ${w[w.length - 1] ?? 0}; want ${BAND_RULES[b].words.join('-')})`,
  );
}
console.log(`problems ${problems}${problems > 50 ? ' (first 50 shown)' : ''}`);

if (!write) process.exit(problems ? 1 : 0);
if (problems) {
  console.log('\nnot writing: fix the problems first');
  process.exit(1);
}

const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
for (const band of NEW_BANDS) {
  const field = BAND_FIELD[band];
  const rows = [];
  let words = 0;
  for (const name of names) {
    const t = authored[name]?.[band];
    if (typeof t !== 'string') continue;
    words += wordsIn(t);
    rows.push(`  ${q(name)}: { ${field}: ${q(t)} },`);
  }
  if (rows.length !== names.length) {
    console.log(`\nnot writing ${band}: ${names.length - rows.length} cities missing`);
    process.exit(1);
  }
  const header = `// cityHr/${band}.js — City of the Day's Croatian intro at ${band}, keyed by the
// city's \`name\` in CROATIAN_CITIES.
//
// ${BAND_RULES[band].brief}
//
// ONE BAND PER MODULE: \`lib/cityIntroHr\` resolves the learner's band and
// dynamically imports THIS file alone, so nobody downloads six bands to read
// one. Every band file gets its own \`chunk-geo-hr-*\` chunk, which the service
// worker's existing \`chunk-geo*\` precache exclusion covers by construction.
//
// THE ENTRY SHAPE IS LOAD-BEARING: each city maps to an OBJECT carrying a
// \`${field}\` field rather than to a bare string, because
// \`lintCroatianText.mjs\` matches Croatian by FIELD NAME and a bare
// \`'Zagreb': '…'\` would key the text by a city name the matcher cannot see.
// This file must be in that script's TARGETS and in \`CITY_HR_BANDS\`.
//
// Written from each city's own English record and nothing else, so the two
// halves of the screen cannot contradict each other. Generated by
// \`scripts/cityHrMerge.mjs\` from authored tranches; the contract it was
// checked against is \`scripts/cityHrBandRules.mjs\`.
//
// ${rows.length} cities, ${words.toLocaleString('en-US')} Croatian words.
export const CITY_INTRO_HR_${band} = {`;
  const out = `src/data/cultural/cityHr/${band}.js`;
  writeFileSync(out, `${header}\n${rows.join('\n')}\n};\n`);
  console.log(`wrote ${out}  ${rows.length} cities  ${words.toLocaleString('en-US')} words`);
}
