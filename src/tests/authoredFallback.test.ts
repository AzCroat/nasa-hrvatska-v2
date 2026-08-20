// src/tests/authoredFallback.test.ts
//
// DEGRADE VISIBLY (recommender audit, 2026-08-20) — the last residual weakness
// from the gating audit.
//
// The behaviour being pinned is a trade, and both halves matter:
//
//   * an AI activity that cannot generate must no longer credit the session for
//     work the learner never did;
//   * but it must still never STRAND the session at N-1/N, which is a real
//     production incident class.
//
// Those only reconcile because the substitute is authored content that cannot
// itself fail, and because finishing it credits the ORIGINAL slot through the
// completion signal. If a future edit points a fallback at something that can
// fail — or at a screen teaching a different skill — the trade stops working,
// so both properties are asserted here rather than left to review.

import { describe, it, expect } from 'vitest';
import { AUTHORED_FALLBACK, authoredFallbackFor } from '../lib/authoredFallback';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';

describe('the fallback map', () => {
  it('covers ai_listening — the screen the audit found crediting on failure', () => {
    const fb = authoredFallbackFor('ai_listening');
    expect(fb).toBeTruthy();
    expect(fb!.screen).toBe('listening_comprehension');
  });

  it('returns undefined for screens with no authored equivalent', () => {
    expect(authoredFallbackFor('writing_guided')).toBeUndefined();
    expect(authoredFallbackFor('not_a_screen')).toBeUndefined();
  });

  it('every fallback target is a REAL pool screen, not a dead route', () => {
    const screens = new Set(CEFR_EXERCISE_POOL.map((e) => e.screen));
    for (const [from, fb] of Object.entries(AUTHORED_FALLBACK)) {
      expect(screens.has(fb.screen), `${from} → ${fb.screen} is not in the pool`).toBe(true);
    }
  });

  it('every substitute teaches the SAME skill as the screen it replaces', () => {
    // The bar that keeps this helpful rather than a non-sequitur: sending a
    // learner from failed listening practice to a vocabulary game would be a
    // substitution in name only.
    const categoryOf = (screen: string) =>
      CEFR_EXERCISE_POOL.find((e) => e.screen === screen)?.category;
    for (const [from, fb] of Object.entries(AUTHORED_FALLBACK)) {
      const originalCategory = categoryOf(from);
      const fallbackCategory = categoryOf(fb.screen);
      expect(fallbackCategory, `${fb.screen} has no category`).toBeTruthy();
      if (originalCategory) {
        expect(
          fallbackCategory,
          `${from} (${originalCategory}) falls back to ${fb.screen} (${fallbackCategory}) — different skill`,
        ).toBe(originalCategory);
      }
    }
  });

  it('no fallback target is itself AI-dependent — a substitute that can fail is not a substitute', () => {
    for (const [from, fb] of Object.entries(AUTHORED_FALLBACK)) {
      expect(
        AUTHORED_FALLBACK[fb.screen],
        `${from} falls back to ${fb.screen}, which itself has a fallback — so it can fail too`,
      ).toBeUndefined();
    }
  });

  it('every entry carries a label and blurb that name the content, not the failure', () => {
    for (const [from, fb] of Object.entries(AUTHORED_FALLBACK)) {
      expect(fb.label.length, `${from} label`).toBeGreaterThan(0);
      expect(fb.blurb.length, `${from} blurb`).toBeGreaterThan(0);
      for (const word of ['error', 'failed', 'sorry', 'unavailable']) {
        expect(fb.label.toLowerCase(), `${from} label mentions "${word}"`).not.toContain(word);
      }
    }
  });
});
