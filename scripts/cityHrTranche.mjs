#!/usr/bin/env node
// cityHrTranche.mjs — cut one authoring tranche for the City of the Day bands.
//
//   node scripts/cityHrTranche.mjs <startIndex> <count> [outDir]
//
// Writes ONE json per tranche holding everything an author needs and nothing
// else: each city's English record (the only permitted source of fact) and its
// EXISTING A1/B1/C1 Croatian. Both halves matter —
//
//   * the English record is the factual boundary. The 2026-09-05/06 corpus was
//     written from it and nothing else, which is why the two halves cannot
//     contradict each other. Keep that rule.
//   * the existing bands are the ladder the new text must fit INTO. A2 sits
//     between the A1 and B1 of the same city; a B2 that repeats its own B1, or
//     runs shorter than it, is a level badge on a text written for another
//     level. Handing the author the neighbours is what makes that checkable
//     while writing rather than at merge time.
//
// Cities are cut in source order, so tranches partition the pool exactly and a
// re-cut of the same range is byte-identical.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { CROATIAN_CITIES } from '../src/data/cultural/geography.js';
import { CITY_INTRO_HR_A1 } from '../src/data/cultural/cityHr/A1.js';
import { CITY_INTRO_HR_B1 } from '../src/data/cultural/cityHr/B1.js';
import { CITY_INTRO_HR_C1 } from '../src/data/cultural/cityHr/C1.js';
import { BAND_RULES, windowFor, wordsIn } from './cityHrBandRules.mjs';

const start = Number(process.argv[2] ?? 0);
const count = Number(process.argv[3] ?? 12);
const outDir = process.argv[4] ?? '.';
mkdirSync(outDir, { recursive: true });

const slice = CROATIAN_CITIES.slice(start, start + count);
const tranche = {
  range: { start, count: slice.length },
  wanted: {
    A2: BAND_RULES.A2,
    B2: BAND_RULES.B2,
    C2: BAND_RULES.C2,
  },
  cities: slice.map((c) => ({
    name: c.name,
    region: c.region,
    tagline: c.tagline,
    intro: c.intro,
    history: c.history,
    didYouKnow: c.didYouKnow,
    facts: c.facts,
    vocab: c.vocab,
    existing: {
      A1: CITY_INTRO_HR_A1[c.name]?.introHrA1,
      B1: CITY_INTRO_HR_B1[c.name]?.introHr,
      C1: CITY_INTRO_HR_C1[c.name]?.introHrC1,
    },
    // The window that actually binds, for THIS city — see windowFor. A global
    // "55-80 words" is a corpus statistic; this is the rule an author can meet.
    window: (() => {
      const ladder = {
        A1: CITY_INTRO_HR_A1[c.name]?.introHrA1,
        B1: CITY_INTRO_HR_B1[c.name]?.introHr,
        C1: CITY_INTRO_HR_C1[c.name]?.introHrC1,
      };
      const w = {};
      for (const b of ['A2', 'B2', 'C2']) w[b] = windowFor(b, ladder);
      w.existingWords = {
        A1: wordsIn(ladder.A1),
        B1: wordsIn(ladder.B1),
        C1: wordsIn(ladder.C1),
      };
      return w;
    })(),
  })),
};

const file = join(outDir, `tranche-${String(start).padStart(3, '0')}.json`);
writeFileSync(file, JSON.stringify(tranche, null, 1));
console.log(`${file}  ${slice.length} cities  ${slice[0].name} … ${slice[slice.length - 1].name}`);
