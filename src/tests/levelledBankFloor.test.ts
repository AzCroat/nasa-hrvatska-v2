// src/tests/levelledBankFloor.test.ts
//
// A LEVEL FILTER THAT STANDS DOWN AT THE LEVEL IT PROTECTS (2026-09-23).
//
// `levelledBank` serves a bank at or below the learner's level, and below
// `LEVELLED_BANK_MIN` survivors it serves the WHOLE bank instead. Its own
// docstring is explicit that this is a floor rather than a feature: "when it
// fires for a level the bank has no content there, and the honest fix is
// content."
//
// Nothing measured where it fires. `levelledBankReads.test.ts` — the guard
// written with the filter — asks whether every selecting use REACHES
// `levelledBank`, which is a different question: a bank can route through the
// filter correctly and still have the filter hand back everything, and the two
// outcomes are indistinguishable from the call site.
//
// Measured, this had exactly one live instance: `WritingScreen`'s `PROMPTS`
// carried A2 5 · B1 6 · B2 5 · C1 4 and NOTHING at A1, so an A1 learner was
// served all twenty, C1 entries included. The pool gates that screen at A2,
// which is why it looked unreachable — but the SEARCH index carries
// `go: 'writing'` and `SearchModal.navigate` calls `setScr` with no CEFR check,
// so A1 reaches it. Fixed by authoring the A1 tier, which is what the docstring
// prescribes.
//
// WHY THIS ASKS FOR THE SURVIVOR COUNT AND NOT THE RETURNED LENGTH, which is
// the whole subtlety and which the first draft of this file got WRONG: when the
// floor fires `levelledBank` returns the WHOLE bank, so the returned array is
// LONGER than `LEVELLED_BANK_MIN`, not shorter. A guard written as
// `levelledBank(bank, lv).length < MIN` therefore cannot fire on any bank big
// enough to matter — deleting the A1 tier this file was written about left it
// fully green. It is measured through the real function at `min = 0`, which
// disables the fallback and hands back the pure filter output, so the predicate
// under test is production's own `isUnlocked` and the comparison still tracks
// `LEVELLED_BANK_MIN` if that constant moves.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { levelledBank, LEVELLED_BANK_MIN } from '../lib/levelledBank';
import { CEFR_ORDER, cefrRank } from '../lib/cefr';
import type { CefrLevel } from '../lib/cefr';

const ROOT = join(__dirname, '..', '..');

/**
 * Pull a `const NAME = [ … ]` array literal out of a source file and read the
 * `level` of each element. Parsed rather than imported because three of these
 * banks are module-private to their screen — and making them exported just to
 * be testable would widen the surface for the test's convenience.
 */
function levelsOf(relPath: string, name: string): string[] {
  const src = readFileSync(join(ROOT, relPath), 'utf8');
  const decl = new RegExp(`const ${name}\\s*(?::[^=]+)?=\\s*\\[`).exec(src);
  if (!decl) throw new Error(`${name} not found in ${relPath}`);
  // The opening bracket is the one the MATCH ends on, not the first `[` after
  // the declaration: a typed bank (`const PROMPTS: WritingPrompt[] = [`) puts a
  // `[]` in the annotation, and scanning forward from `decl.index` balances on
  // THAT and yields an empty bank. Caught by this file's own empty-bank
  // assertion when the writing bank was extracted and typed (2026-09-23).
  const start = decl.index + decl[0].length - 1;
  let depth = 0;
  let end = -1;
  for (let i = start; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  const body = src.slice(start, end + 1);
  // One entry per `{`; an entry with no `level` is UNLEVELLED, which
  // `levelledBank` keeps at every level, so it must still be counted.
  const entries = body.split(/\{/).slice(1);
  return entries.map((e) => /level:\s*'([^']+)'/.exec(e)?.[1] ?? '');
}

/**
 * Every levelled bank, with the LOWEST level a learner can actually reach its
 * screen at. The gate is not always the pool's `cefr`: `writing` is gated A2
 * there and reachable at A1 through the ungated search index, which is the
 * whole reason the one real instance was live. Where a screen has more than one
 * door, the LOWEST is the honest one.
 */
const BANKS: Array<{
  file: string;
  name: string;
  screen: string;
  lowestReachable: CefrLevel;
  door: string;
}> = [
  {
    file: 'src/data/exercises.js',
    name: 'LISTEN',
    screen: 'listening',
    lowestReachable: 'A1',
    door: 'Practice tab + daily session, pool cefr A1',
  },
  {
    file: 'src/components/practice/DictationScreen.tsx',
    name: 'DICTATION_DATA',
    screen: 'dictation',
    lowestReachable: 'A1',
    door: 'pool cefr B1, but `go: dictation` is in the search index (ungated)',
  },
  {
    file: 'src/data/writingPrompts.ts',
    name: 'PROMPTS',
    screen: 'writing',
    lowestReachable: 'A1',
    door: 'pool cefr A2, but `go: writing` is in the search index (ungated)',
  },
  {
    file: 'src/components/practice/ProductionDrillScreen.tsx',
    name: 'TRANSFORMS',
    screen: 'production_drill',
    lowestReachable: 'B1',
    door: 'pool cefr B1; NOT in the search index',
  },
  {
    file: 'src/components/practice/ProductionDrillScreen.tsx',
    name: 'TRANSLATE_PROD',
    screen: 'production_drill',
    lowestReachable: 'B1',
    door: 'pool cefr B1; NOT in the search index',
  },
  {
    file: 'src/components/practice/ProductionDrillScreen.tsx',
    name: 'BUILD_SENTENCES',
    screen: 'production_drill',
    lowestReachable: 'B1',
    door: 'pool cefr B1; NOT in the search index',
  },
  {
    file: 'src/components/practice/ProductionDrillScreen.tsx',
    name: 'ERROR_CORRECT',
    screen: 'production_drill',
    lowestReachable: 'B1',
    door: 'pool cefr B1; NOT in the search index',
  },
];

describe('the whole-bank floor never fires at a level the screen can be reached at', () => {
  it.each(BANKS)(
    '$name ($screen, reachable from $lowestReachable)',
    ({ file, name, lowestReachable, door }) => {
      const levels = levelsOf(file, name);
      const bank = levels.map((level) => (level ? { level } : {}));
      expect(
        bank.length,
        `${name} parsed as empty — the extractor broke, not the bank`,
      ).toBeGreaterThan(4);

      // `min: 0` turns the fallback off, so this is the FILTER's output — the
      // number of items genuinely at or below `lv`. Comparing the RETURNED length
      // would measure the fallback's own result and can never be short.
      const firing = CEFR_ORDER.filter((lv) => cefrRank(lv) >= cefrRank(lowestReachable)).filter(
        (lv) => levelledBank(bank, lv as CefrLevel, 0).length < LEVELLED_BANK_MIN,
      );

      expect(
        firing,
        `${name} has fewer than ${LEVELLED_BANK_MIN} items at or below ${firing.join('/')}, so levelledBank ` +
          `serves the WHOLE bank there — including everything above the learner, which is what the filter ` +
          `exists to withhold. Reachable from ${lowestReachable} (${door}). The honest fix is content at ` +
          `that level, not a wider floor.`,
      ).toEqual([]);
    },
  );

  it('every bank actually carries levels (an all-unlevelled bank would pass vacuously)', () => {
    // `levelledBank` keeps an unlevelled item at every level, so a bank that lost
    // its `level` fields entirely would satisfy the assertion above while being
    // completely unfiltered. CLAUDE.md asserted exactly this of BUILD_SENTENCES
    // and ERROR_CORRECT until #630 levelled them and left the sentence standing.
    for (const { file, name } of BANKS) {
      const levels = levelsOf(file, name);
      const levelled = levels.filter(Boolean).length;
      expect(
        levelled,
        `${name}: ${levelled}/${levels.length} entries carry a level — an unlevelled bank is served whole ` +
          `at every level and this suite would not notice.`,
      ).toBeGreaterThan(levels.length / 2);
    }
  });
});
