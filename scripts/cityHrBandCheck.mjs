#!/usr/bin/env node
// cityHrBandCheck.mjs — the author's dry run for City of the Day band text.
//
//   node scripts/cityHrBandCheck.mjs            # every band that ships
//   node scripts/cityHrBandCheck.mjs A2 B2 C2   # a tranche in progress
//
// Reports, per band: coverage against CROATIAN_CITIES, word-range misses, the
// monotonic ladder (a higher band must be a longer text at every city), Cyrillic
// homoglyphs, and Serbisms — the last two through the SHARED modules the lint
// and the live-output sweep use, never a private copy of the rules.
//
// The build gate is `src/tests/cityOfDayGraded.test.tsx`, which imports the same
// `cityHrBandRules.mjs`. This script exists so an author sees the failures
// before CI does, not so there is a second definition of the contract.
import { readdirSync } from 'node:fs';
import { CROATIAN_CITIES } from '../src/data/cultural/geography.js';
import { findSerbism } from '../functions/api/_serbisms.js';
import { containsCyrillic } from '../functions/api/_croatianGuard.js';
import {
  BAND_FIELD,
  BAND_ORDER,
  BAND_RULES,
  bandIsCroatian,
  checkCity,
  wordsIn,
} from './cityHrBandRules.mjs';

const want = process.argv.slice(2).filter((a) => BAND_ORDER.includes(a));
const onDisk = readdirSync(new URL('../src/data/cultural/cityHr/', import.meta.url))
  .filter((f) => /^[A-C][12]\.js$/.test(f))
  .map((f) => f.replace('.js', ''));
const bandsToCheck = (want.length ? want : onDisk).filter((b) => onDisk.includes(b));
const missingFiles = (want.length ? want : []).filter((b) => !onDisk.includes(b));

const names = CROATIAN_CITIES.map((c) => c.name);
/** band → { city → text } */
const loaded = {};
for (const b of bandsToCheck) {
  const mod = await import(`../src/data/cultural/cityHr/${b}.js`);
  const map = mod[`CITY_INTRO_HR_${b}`];
  if (!map) {
    console.log(`${b}: module exports no CITY_INTRO_HR_${b}`);
    continue;
  }
  loaded[b] = Object.fromEntries(
    Object.entries(map).map(([city, rec]) => [city, rec?.[BAND_FIELD[b]]]),
  );
}

let problems = 0;
const show = (msg) => {
  problems++;
  if (problems <= 40) console.log('  ' + msg);
};

for (const b of bandsToCheck) {
  const map = loaded[b] ?? {};
  const ws = Object.values(map).map(wordsIn).sort((x, y) => x - y);
  const total = ws.reduce((a, c) => a + c, 0);
  console.log(
    `\n${b}  ${Object.keys(map).length}/${names.length} cities  ${total.toLocaleString('en-US')} words  ` +
      `(min ${ws[0] ?? 0} median ${ws[Math.floor(ws.length / 2)] ?? 0} max ${ws[ws.length - 1] ?? 0}; want ${BAND_RULES[b].words.join('-')})`,
  );
  const missing = names.filter((n) => typeof map[n] !== 'string' || !map[n].trim());
  if (missing.length) show(`${b}: ${missing.length} cities missing — e.g. ${missing.slice(0, 5).join(', ')}`);
  const orphans = Object.keys(map).filter((k) => !names.includes(k));
  if (orphans.length) show(`${b}: ${orphans.length} entries name no real city — ${orphans.slice(0, 5).join(', ')}`);
  const texts = Object.values(map).filter((t) => typeof t === 'string');
  if (texts.length && !bandIsCroatian(texts))
    show(`${b}: the band as a whole carries almost no Croatian diacritics`);
}

for (const city of names) {
  const bands = {};
  for (const b of bandsToCheck) if (typeof loaded[b]?.[city] === 'string') bands[b] = loaded[b][city];
  for (const p of checkCity(city, bands)) show(p);
  for (const [b, text] of Object.entries(bands)) {
    if (containsCyrillic(text)) show(`${city} ${b}: CYRILLIC in the text`);
    const sb = findSerbism(text);
    if (sb) show(`${city} ${b}: Serbism "${sb.term ?? ''}" — use ${sb.use ?? '?'}`);
  }
}

for (const b of missingFiles) {
  problems++;
  console.log(`\n${b}: no module at src/data/cultural/cityHr/${b}.js yet`);
}

console.log(`\nproblems ${problems}${problems > 40 ? ' (first 40 shown)' : ''}`);
process.exit(problems ? 1 : 0);
