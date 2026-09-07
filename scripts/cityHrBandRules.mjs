// cityHrBandRules.mjs — the contract a City of the Day band must meet.
//
// ONE DEFINITION, two consumers: `scripts/cityHrBandCheck.mjs` is the author's
// dry run and `src/tests/cityOfDayGraded.test.ts?(x)` is the build gate. The
// lesson-depth precedent applies verbatim — never state a rule in the script or
// the test alone, or the two drift and only one of them is enforced.
//
// The ranges for the three SHIPPED bands are not invented: they are the
// measured distribution of the corpus authored 2026-09-05/06, widened to its
// observed min/max so the existing text passes unchanged.
//
//   A1  min 28  p10 36  median 40  p90 44  max 45
//   B1  min 78  p10 91  median 99  p90 103 max 105
//   C1  min 116 p10 147 median 160 p90 167 max 170
//
// The three NEW bands interpolate that ladder. THE BINDING CONSTRAINT IS
// PER-CITY, not the global range: a band must sit strictly between its own
// city's neighbours, because the whole claim of a graded corpus is that reading
// up the ladder is reading more — a B2 text shorter than its own B1 would be a
// level badge on a simpler text.
//
// The global ranges below are a SANITY NET around that, and the first draft got
// them wrong in a way worth recording. B2 was written [115,145] and C1 allows
// 116, so a city whose C1 is 116 words needed a B2 that was both >= 115 and
// <= 115 — a one-word window, and four cities were inside 40 of it. Measured,
// the per-city windows are all >= 34 words wide (tightest: Dubrovnik B2 82-115,
// Split 83-118), so the ladder was never the problem; the global band was.
// Ranges are now wide enough that they can never contradict a real ladder, and
// `windowFor` hands an author the actual window for the city in front of them.

/** Field name carrying each band. B1 keeps the BARE name (gradedHr's baseline). */
export const BAND_FIELD = {
  A1: 'introHrA1',
  A2: 'introHrA2',
  B1: 'introHr',
  B2: 'introHrB2',
  C1: 'introHrC1',
  C2: 'introHrC2',
};

/** Ascending. A band's text must be longer than every band below it. */
export const BAND_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const BAND_RULES = {
  A1: {
    words: [28, 50],
    brief:
      'Short simple sentences. Subject forms and the present tense; no cases beyond the nominative and the most basic accusative. Say where the place is, what it is, one thing you can see or do there.',
  },
  A2: {
    words: [45, 100],
    brief:
      'Still simple, but a paragraph rather than a list: past tense allowed, the common prepositions with their cases (u/na + locative, iz/do + genitive), a because-clause. Everyday register — what a visitor notices first.',
  },
  B1: {
    words: [78, 110],
    brief:
      'The baseline register HISTORY established. Connected prose with subordinate clauses, dates and numbers, a sense of what the place is known for. Neutral and factual.',
  },
  B2: {
    words: [80, 165],
    brief:
      'Reportage. Concrete detail with figures and dates, a contrast or a tension named (what has changed, what is disputed, what the season does to the place), participles and the passive where they read naturally.',
  },
  C1: {
    words: [116, 175],
    brief:
      'An argued paragraph about what the place MEANS — not a gloss of the English facts. A claim, evidence for it, and a qualification. Analytical register.',
  },
  C2: {
    words: [180, 245],
    brief:
      'Essayistic. The place as an instance of something larger — a pattern in Croatian settlement, memory, economy or landscape — with the counter-reading acknowledged. Nominalisation, embedded clauses, precise lexis; never ornament for its own sake.',
  },
};

/**
 * The word window for `band` at one city, given the bands it already has:
 * strictly between the nearest authored neighbour below and the nearest above,
 * intersected with the global sanity range. This is what an author should be
 * given — "55 to 80 words" is a corpus statistic, "longer than this city's 41
 * and shorter than its 96" is the rule they can actually satisfy.
 */
export function windowFor(band, ladder) {
  const i = BAND_ORDER.indexOf(band);
  let [lo, hi] = BAND_RULES[band].words;
  for (let j = i - 1; j >= 0; j--) {
    const t = ladder[BAND_ORDER[j]];
    if (typeof t === 'string') {
      lo = Math.max(lo, wordsIn(t) + 1);
      break;
    }
  }
  for (let j = i + 1; j < BAND_ORDER.length; j++) {
    const t = ladder[BAND_ORDER[j]];
    if (typeof t === 'string') {
      hi = Math.min(hi, wordsIn(t) - 1);
      break;
    }
  }
  return [lo, hi];
}

/** Bands whose text ships today; the rest are the authoring target. */
export const SHIPPED_BANDS = ['A1', 'B1', 'C1'];

export const wordsIn = (s) =>
  String(s ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

/**
 * A whole band must look like Croatian, even though any single short text
 * legitimately may not. Corpus-level, for the reason given in `checkCity`.
 */
export function bandIsCroatian(texts) {
  const joined = texts.join(' ');
  const diacritics = (joined.match(/[čćđšž]/gi) || []).length;
  return diacritics >= texts.length; // at least one per text, on average
}

/**
 * Every rule violation for one city's bands, as strings. `bands` maps band →
 * text; absent bands are skipped, so this checks a tranche in progress as
 * happily as a finished corpus.
 */
export function checkCity(city, bands) {
  const problems = [];
  for (const [band, text] of Object.entries(bands)) {
    const rule = BAND_RULES[band];
    if (!rule) {
      problems.push(`${city} ${band}: not a band`);
      continue;
    }
    const n = wordsIn(text);
    const [lo, hi] = rule.words;
    if (n < lo || n > hi) problems.push(`${city} ${band}: ${n} words, want ${lo}-${hi}`);
    // NOT a per-text diacritic check. Its first run flagged 13 A1 texts —
    // "Ilok je grad na krajnjem istoku Hrvatske…" — which are correct Croatian
    // that simply happens to contain no č/ć/đ/š/ž in forty words. A check that
    // fires on good content is how a lint earns the reputation that gets it
    // ignored. Diacritics are asserted over the BAND (`bandIsCroatian`), where
    // their absence would mean something real.
  }
  // Monotonic: a higher band is a longer text, at every city.
  const present = BAND_ORDER.filter((b) => typeof bands[b] === 'string');
  for (let i = 1; i < present.length; i++) {
    const lo = present[i - 1];
    const hi = present[i];
    if (wordsIn(bands[hi]) <= wordsIn(bands[lo]))
      problems.push(
        `${city}: ${hi} (${wordsIn(bands[hi])}) must be longer than ${lo} (${wordsIn(bands[lo])})`,
      );
  }
  // No band may repeat another verbatim — a copied text is a level badge on a
  // text that was not written for it.
  const seen = new Map();
  for (const b of present) {
    const t = String(bands[b]).trim();
    if (seen.has(t)) problems.push(`${city}: ${b} duplicates ${seen.get(t)}`);
    seen.set(t, b);
  }
  return problems;
}
