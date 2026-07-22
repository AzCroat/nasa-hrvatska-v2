import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { BLACK_HOLE_SCREENS } from '../lib/blackHoleScreens';

// Dwell credit (useScreenLauncher.launchPathItem) fires ONLY when a LEARN_PATH
// item's `go` field matches a BLACK_HOLE_SCREENS key AND that key isn't handled
// by an explicit launch branch first. LEARN_PATH is served from
// functions/api/content/_data/learnPath.js (the client hydrates it via
// /api/content/core — there is no bundled client LEARN_PATH), so the served
// `go` values are the authoritative set of reachable screens. This guard makes
// dead config (a screen reachable only via search/setScr, which runs no dwell
// timer) a test failure instead of silent, misleading cruft.
const servedPath = readFileSync('functions/api/content/_data/learnPath.js', 'utf8');
const SERVED_GO = new Set(
  [...servedPath.matchAll(/\bgo\s*:\s*['"]([a-zA-Z0-9_]+)['"]/g)].map((m) => m[1]),
);

// Handled by earlier branches in launchPathItem before the black-hole `else`,
// so a key equal to one of these would be shadowed and never grant dwell credit.
const EXPLICIT_BRANCHES = new Set([
  'lesson',
  'grammar',
  'listening',
  'speaking',
  'mcgame',
  'animlesson',
]);

describe('BLACK_HOLE_SCREENS reachability', () => {
  const keys = Object.keys(BLACK_HOLE_SCREENS);

  it('every dwell-credit key is launched by a served LEARN_PATH item (no dead config)', () => {
    const dead = keys.filter((k) => !SERVED_GO.has(k));
    expect(dead, `dead black-hole keys (no served LEARN_PATH go): ${dead.join(', ')}`).toEqual([]);
  });

  it('no key is shadowed by an explicit (non-else) launch branch', () => {
    const shadowed = keys.filter((k) => EXPLICIT_BRANCHES.has(k));
    expect(shadowed, `shadowed keys: ${shadowed.join(', ')}`).toEqual([]);
  });

  it('every value is lc or gc', () => {
    for (const [k, v] of Object.entries(BLACK_HOLE_SCREENS)) {
      expect(['lc', 'gc'], k).toContain(v);
    }
  });

  it('quiz-gated / self-reporting screens are NOT dwell-credited (no gate bypass)', () => {
    // These self-report via completeLesson/completeExercise on a comprehension
    // pass, so a dwell entry would bypass their gate. Regression guard against
    // re-adding any of them.
    const mustNotBeCredited = [
      'declension',
      'tenses',
      'conditional',
      'impersonal',
      'formalregister',
      'future_tense_lesson',
      'aspect',
      'wordform',
      'diminutives',
      'phonology',
      'conjdrill',
      'negation',
      'clitic',
      'padezi',
      'padezifull',
      'svojmoj',
      'modal',
      'vocative',
      'aspectdrill',
      'past_tense_lesson',
    ];
    for (const id of mustNotBeCredited) {
      expect(BLACK_HOLE_SCREENS[id], `${id} must not be dwell-credited`).toBeUndefined();
    }
  });
});
