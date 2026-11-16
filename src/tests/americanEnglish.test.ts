// americanEnglish.test.ts — all English in the app is AMERICAN English (owner rule,
// 2026-11-15). `scripts/americanEnglish.mjs` is the checker; this is the build gate.
//
// SPELLING is zero-tolerance: a British spelling in any English string fails.
// USAGE words (flat, holiday, lift…) have a legitimate non-British sense — a flat tire,
// a public holiday, a ski lift, "the phone rang" — so each word has a REVIEWED count:
// the occurrences read on 2026-11-16 and kept on purpose. A new occurrence fails, and
// the fix is the American word (apartment, vacation, elevator), or — when the new use is
// one of the legitimate senses — raising that word's count here, deliberately.
import { describe, it, expect } from 'vitest';
import {
  ROOTS,
  walk,
  collectIds,
  setIds,
  scanFile,
  // @ts-expect-error — plain .mjs script, no types
} from '../../scripts/americanEnglish.mjs';

interface Finding {
  file: string;
  line: number;
  kind: 'spelling' | 'usage';
  match: string;
  use: string;
}

const REVIEWED_USAGE: Record<string, number> = {
  flat: 133, // level ground, a flat tire, a flat tone, the tongue held flat
  flats: 4, // salt flats, tidal flats
  holiday: 19, // public and religious holidays
  holidays: 14,
  rang: 19, // the phone / the doorbell rang
  lift: 13, // Croatian "lift", a ski lift, the verb
  sweets: 6,
  booking: 5, // "booking a hotel"
  pavement: 4, // the road surface, Roman stone pavement
  queue: 3, // a software queue (the review queue)
  cinema: 2, // the art form
  litre: 2, // Croatian genitive "litre" quoted in English prose
  kilometre: 1, // Croatian form quoted
  surgery: 1, // an operation
};

const files: string[] = (ROOTS as string[]).flatMap((r) => walk(r));
setIds(collectIds(files));
const all: Finding[] = files.flatMap((f) => scanFile(f));
const show = (f: Finding) => `${f.file}:${f.line} ${f.match} → ${f.use}`;

describe('American English', () => {
  it('the checker reads the app (non-vacuity)', () => {
    expect(files.length).toBeGreaterThan(1000);
  });

  it('no British spelling in any English string', () => {
    expect(all.filter((f) => f.kind === 'spelling').map(show)).toEqual([]);
  });

  it('no new British vocabulary beyond the reviewed, legitimate uses', () => {
    const counts: Record<string, Finding[]> = {};
    for (const f of all.filter((x) => x.kind === 'usage'))
      (counts[f.match.toLowerCase()] ??= []).push(f);
    const over = Object.entries(counts)
      .filter(([w, list]) => list.length > (REVIEWED_USAGE[w] ?? 0))
      .map(
        ([w, list]) =>
          `"${w}": ${list.length} uses, ${REVIEWED_USAGE[w] ?? 0} reviewed — e.g. ${list.slice(0, 3).map(show).join(' | ')}`,
      );
    expect(over).toEqual([]);
  });
});
