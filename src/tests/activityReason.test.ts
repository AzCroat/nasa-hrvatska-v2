// src/tests/activityReason.test.ts
//
// Per-activity "why am I seeing this" (recommender audit, 2026-08-20).
//
// The behaviour worth pinning is not the wording — it is the HONESTY RULE
// inherited from buildPlanReason: never fabricate. A reason the learner can
// catch being wrong is worse than no reason at all, and there are two specific
// ways this could quietly start lying:
//
//   * the adaptive store seeds recentAccuracy at 0.5 for categories never
//     practised, so a naive reader would report "50% accurate" for a drill the
//     learner has never opened;
//   * the mastery ledger returns null when it has measured neither production
//     skill, so naming one as "weakest" would be evidence-free.
//
// THE SECOND NOTE WAS TRUE AND TOO NARROW, AND THIS FILE DEFENDED THE GAP
// (2026-09-23). `weakest*Kind` returns null only when BOTH skills in a pair are
// unmeasured; it scores an ABSENT or not-yet-tested cell as MAXIMUM need, which
// is right for choosing what to serve and is not evidence of anything. So with
// one skill measured and the other never attempted it returns the unmeasured
// one — and the reason said "your practice says needs the most work" about a
// skill with no cell in the ledger at all. Measured: six reading activities and
// no listening produced "Listening is the skill your practice says needs the
// most work."
// The test below called `productionReason('speak')` against an EMPTY ledger and
// asserted the sentence contained "Speaking", inside a describe block named
// "no evidence, no claim". It encoded the defect and then defended it. It now
// seeds real evidence before expecting a claim, and the no-evidence and
// not-enough-evidence states are asserted separately.
//
// Both are tested here against the real storage layer rather than a mock, so a
// change to the seeding behaviour surfaces as a failure in these tests.

import { describe, it, expect, beforeEach } from 'vitest';
import { recordMasteryEvent, MIN_SAMPLES } from '../lib/masteryLedger';
import {
  inputSlotReason,
  reviewReason,
  taughtReason,
  adaptiveReason,
  productionReason,
  conversationReason,
  grammarSlotReason,
  croatiaReason,
  categoryLabel,
  withReason,
} from '../lib/activityReason';
import { rateCategorySession } from '../lib/adaptive';

describe('reviewReason — counts are real', () => {
  it('says nothing when nothing is due', () => {
    expect(reviewReason(0)).toBeNull();
    expect(reviewReason(-1)).toBeNull();
  });

  it('reports the actual due count, singular and plural', () => {
    expect(reviewReason(1)).toContain('1 word is due');
    expect(reviewReason(12)).toContain('12 words are due');
  });
});

describe('adaptiveReason — never invents a score', () => {
  beforeEach(() => localStorage.clear());

  it('a never-practised category is described as never practised, NOT as 50%', () => {
    const reason = adaptiveReason('genitive');
    expect(reason).toBe("You haven't practised the genitive yet.");
    // The seeded 0.5 must never surface as a claimed result.
    expect(reason).not.toContain('50');
    expect(reason).not.toContain('%');
  });

  it('cites the measured accuracy once the category has really been practised', () => {
    rateCategorySession('genitive', 0.4);
    const reason = adaptiveReason('genitive');
    expect(reason).toMatch(/\d+% accurate on the genitive/);
    expect(reason).not.toContain("haven't practised");
  });

  it('a strong category is described as due, not as weak', () => {
    // recentAccuracy is an EWMA (α=0.3) seeded at 0.5, so ONE perfect session
    // only reaches 0.65 — still below the 0.75 "strong" line, and correctly
    // reported as an accuracy rather than a refresh. Three sessions clear it
    // (0.5 → 0.65 → 0.755 → 0.8285). Asserting on the seeded value's behaviour
    // here is deliberate: it pins that "strong" means sustained, not lucky.
    rateCategorySession('genitive', 1);
    rateCategorySession('genitive', 1);
    rateCategorySession('genitive', 1);
    const reason = adaptiveReason('genitive');
    expect(reason).toContain('due for a refresh');
    expect(reason).not.toContain('accurate');
  });
});

const LEVEL = 'B1' as never;
/** Enough scored events for the ledger to call a skill `tested`. */
function measure(skill: string, score: number) {
  for (let i = 0; i < MIN_SAMPLES + 2; i++)
    recordMasteryEvent({ level: LEVEL, skill, score, weight: 1 } as never);
}

describe('productionReason — no evidence, no claim', () => {
  // Own reset: the clear() above lives inside the FIRST describe only, so
  // without this a measured skill leaks from the previous test and the
  // no-evidence cases silently become evidence cases.
  beforeEach(() => localStorage.clear());

  it('names the weaker skill ONLY once the ledger has actually measured it', () => {
    measure('speaking', 0.4);
    expect(productionReason('speak', LEVEL)).toContain('Speaking');
  });

  it('says the learner has not practised it, rather than claiming a measurement', () => {
    // The commonest early state: the OTHER skill has been practised, so
    // weakestProductionKind returns this one — with nothing behind it.
    measure('writing', 0.95);
    const reason = productionReason('speak', LEVEL);
    expect(reason).toBe("You haven't practised speaking yet.");
    expect(reason).not.toMatch(/your practice says/);
  });

  it('claims nothing while the evidence is too thin to be tested', () => {
    recordMasteryEvent({ level: LEVEL, skill: 'speaking', score: 0.2, weight: 1 } as never);
    const reason = productionReason('speak', LEVEL);
    expect(reason).not.toMatch(/your practice says/);
    expect(reason).not.toMatch(/haven't practised/);
    expect(reason).toContain('produce Croatian yourself');
  });

  it('falls back to the guarantee — never names a skill — on null evidence', () => {
    const reason = productionReason(null, LEVEL);
    expect(reason).not.toMatch(/Speaking is|Writing is/);
    expect(reason).toContain('produce Croatian yourself');
  });
});

describe('inputSlotReason — the same rule for comprehension', () => {
  // Own reset: the clear() above lives inside the FIRST describe only, so
  // without this a measured skill leaks from the previous test and the
  // no-evidence cases silently become evidence cases.
  beforeEach(() => localStorage.clear());

  it('names the weaker skill ONLY once the ledger has measured it', () => {
    measure('listening', 0.4);
    expect(inputSlotReason('listening', 'listening', LEVEL)).toContain('Listening');
  });

  it('says the learner has not practised it, rather than claiming a measurement', () => {
    // The exact measured case: reading practised, listening never attempted.
    measure('reading', 0.95);
    const reason = inputSlotReason('listening', 'listening', LEVEL);
    expect(reason).toBe("You haven't practised listening yet.");
    expect(reason).not.toMatch(/your practice says/);
  });

  it('names the guarantee when the slot did not follow the ledger', () => {
    measure('listening', 0.4);
    expect(inputSlotReason('reading', 'listening', LEVEL)).toContain(
      'one listening or reading activity',
    );
  });
});

describe('the always-true reasons state a guarantee, not a measurement', () => {
  it('conversation, grammar and culture read as structural facts', () => {
    expect(conversationReason()).toContain('every session');
    expect(grammarSlotReason()).toContain('Every session');
    expect(croatiaReason().length).toBeGreaterThan(0);
  });

  it('taughtReason names the concept, not an invented lesson title', () => {
    const reason = taughtReason('present-tense');
    expect(reason).toContain('the present tense');
    expect(reason).toContain('just finished a lesson');
  });
});

describe('categoryLabel reads as English inside a sentence', () => {
  it('maps known categories and degrades gracefully for unmapped ones', () => {
    expect(categoryLabel('genitive')).toBe('the genitive');
    expect(categoryLabel('present-tense')).toBe('the present tense');
    // Unmapped → de-hyphenated rather than a raw slug with dashes.
    expect(categoryLabel('subordination' as never)).not.toContain('-');
  });
});

describe('withReason keeps "no reason" out of the data', () => {
  it('omits the key entirely rather than writing undefined', () => {
    expect(withReason(null)).toEqual({});
    expect(withReason(undefined)).toEqual({});
    expect('reason' in withReason(null)).toBe(false);
  });

  it('includes the key when there is a real reason', () => {
    expect(withReason('because')).toEqual({ reason: 'because' });
  });
});
