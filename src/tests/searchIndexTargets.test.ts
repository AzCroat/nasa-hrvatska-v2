// src/tests/searchIndexTargets.test.ts
//
// Every row search offers can actually be opened.
//
// `buildSearchIndex` is a HAND-LISTED array of ~48 screens plus derived vocab
// and phrase rows, and `SearchModal.navigate` sends a row's `go` straight to
// `setScr` with no CEFR check and no existence check. A `go` naming a screen the
// router does not render is a tap that changes the screen key to something
// nothing matches — no error, no boundary, just the app sitting on a blank
// route. Nothing connected the list to the router.
//
// THIS FILE IS A RATCHET, NOT A FIX, AND SAYING SO IS THE POINT. Measured when
// it was written: 2,467 rows, 67 distinct targets, **all 67 routed** — so it
// buys nothing today. The reason to write it anyway is that this exact index has
// already decayed once: `learningIndex.test.ts` records `buildSearchIndex`
// reaching **0 of 180 lessons** while its own placeholder said "Search
// lessons…". A hand-maintained list cannot report what it fails to mention.
//
// It is deliberately NOT a restatement of the list. It calls the REAL
// `buildSearchIndex()` and reads the REAL router, so adding a screen row with a
// typo fails here rather than in a learner's hands.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { buildSearchIndex } from '../data';

interface SearchRow {
  hr?: string;
  en?: string;
  type?: string;
  go?: string;
  cat?: string;
}

const rows = buildSearchIndex() as SearchRow[];

/** Screen keys the router actually renders. */
const ROUTED = new Set(
  [
    ...readFileSync('src/components/AppRouter.tsx', 'utf8').matchAll(
      /currentScreen === '([^']+)'/g,
    ),
  ].map((m) => m[1]!),
);

describe('the derivation is real', () => {
  it('reads the live index and the live router', () => {
    // Floors sit well under the measured values (2,467 rows / 67 targets / 430
    // routes) so ordinary content churn never trips them, while a build that
    // returns nothing — the shape that would make every assertion below vacuous
    // — does.
    expect(rows.length).toBeGreaterThan(500);
    expect(new Set(rows.map((r) => r.go).filter(Boolean)).size).toBeGreaterThan(30);
    expect(ROUTED.size).toBeGreaterThan(100);
  });

  it('still contains the hand-listed SCREEN rows, which are the decaying half', () => {
    expect(rows.filter((r) => r.type === 'screen').length).toBeGreaterThan(40);
  });
});

describe('every search result opens something', () => {
  it('every target is a screen the REAL router renders', () => {
    const bad = [
      ...new Map(
        rows
          .filter((r) => r.go && !ROUTED.has(r.go))
          .map((r) => [r.go!, `${r.go} (type=${r.type}, e.g. "${r.hr}")`]),
      ).values(),
    ];
    expect(
      bad,
      'SearchModal sends `go` to setScr unchecked — an unrouted key is a blank screen',
    ).toEqual([]);
  });

  it('every row HAS a target', () => {
    expect(rows.filter((r) => !r.go).length).toBe(0);
  });

  it('every vocab row carries the category its navigation passes as a topic', () => {
    // `navigate` sends a vocab row through `launchPathItem({ go: 'lesson',
    // topic: r.cat })`, so a vocab row without `cat` silently falls through to
    // the bare `setScr('lesson')` branch and opens the lesson screen on no topic.
    const vocab = rows.filter((r) => r.type === 'vocab');
    expect(vocab.length).toBeGreaterThan(100);
    expect(vocab.filter((r) => !r.cat).length).toBe(0);
  });
});
