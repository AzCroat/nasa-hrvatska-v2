// src/tests/poolCategoryAgreement.test.ts
//
// ONE SCREEN, ONE CATEGORY — ACROSS POOLS (2026-09-23).
//
// The defect this exists to keep closed. `dictation` is the only id that appears
// in more than one session pool, and for five weeks the two copies disagreed:
// `PRODUCTION_POOL` carried `category: 'writing'` with an explicit "Retagged
// 'speaking' -> 'writing' (2026-08-18)" comment, while `CEFR_EXERCISE_POOL` still
// carried `category: 'speaking'`. PR #492 wrote the rule — CLAUDE.md asserts
// 'writing' of all three of writing_guided/writing/dictation — and never touched
// sessionPools.ts, so the retag reached one copy of a fact kept in two places.
// Nothing could notice, because each pool is read by different code.
//
// The live effect was narrow and real: `makeSessionSkillBoost` resolves
// `category -> skillForCategory -> profile[skill]`, so a learner measured weak at
// SPEAKING had a hear-it-and-type-it screen with no microphone boosted for them.
//
// WHY THIS ASSERTS AGREEMENT RATHER THAN A PARTICULAR VALUE: which value is right
// is a judgement that belongs in the pools and their comments. What no judgement
// can justify is the SAME screen carrying two categories, because then the answer
// depends on which slot happened to serve it.

import { describe, it, expect } from 'vitest';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { PRODUCTION_POOL } from '../hooks/useDailySession';
import { skillForCategory } from '../lib/masteryLedger';
import { inputKindOf } from '../lib/inputSlot';
import { skillGroupOf } from '../lib/skillGroups';

type Row = { id: string; category?: string; screen?: string };

const POOLS: Array<[string, readonly Row[]]> = [
  ['CEFR_EXERCISE_POOL', CEFR_EXERCISE_POOL as readonly Row[]],
  ['PRODUCTION_POOL', PRODUCTION_POOL as readonly Row[]],
  ['CROATIA_POOL', CROATIA_POOL as readonly Row[]],
];

/** id -> every (pool, category) that claims it. */
function byId(): Map<string, Array<{ pool: string; category?: string }>> {
  const m = new Map<string, Array<{ pool: string; category?: string }>>();
  for (const [pool, rows] of POOLS) {
    for (const r of rows) {
      if (!m.has(r.id)) m.set(r.id, []);
      m.get(r.id)!.push({ pool, category: r.category });
    }
  }
  return m;
}

const shared = [...byId()].filter(([, rows]) => rows.length > 1);

describe('an id in more than one pool carries one category', () => {
  it('there IS at least one shared id (an empty set asserts nothing)', () => {
    // The `it.each` over an empty set registers no tests — the couplingClearingPath
    // lesson. If the pools ever stop sharing an id this test fails and says so,
    // rather than the suite silently guarding nothing.
    expect(
      shared.map(([id]) => id),
      'no id appears in two pools any more — this guard now covers nothing',
    ).not.toEqual([]);
  });

  it('no shared id disagrees with itself', () => {
    const disagreeing = shared
      .filter(([, rows]) => new Set(rows.map((r) => r.category)).size > 1)
      .map(([id, rows]) => `${id}: ${rows.map((r) => `${r.pool}=${r.category}`).join(' vs ')}`);
    expect(
      disagreeing,
      'The same screen carries different categories in different pools, so what the ' +
        'session records about it depends on which slot served it. Pick one value and ' +
        'put the reasoning in the pool comment.',
    ).toEqual([]);
  });
});

describe("dictation's tag, and the two values it is NOT", () => {
  const fill = CEFR_EXERCISE_POOL.find((e) => e.id === 'dictation')!;
  const prod = PRODUCTION_POOL.find((p) => p.id === 'dictation')!;

  it('both pools say writing', () => {
    expect(fill.category).toBe('writing');
    expect(prod.category).toBe('writing');
  });

  it('is not enrolled in the guaranteed-input slot', () => {
    // 'listening' is what the screen SCORES, and tagging it so would put it in the
    // P2.8 input set while it stays a PRODUCTION_POOL member — one session could
    // then count it as a comprehension slot AND an output slot. Measured: that
    // version fails 4 tests, 3 of them the "A1/A2 one output slot, B1+ two"
    // contract in useDailySession.production.test.ts.
    expect(inputKindOf(fill.category)).toBeNull();
  });

  it('the retag moved no variety, because both tags share one family', () => {
    // This is why the change is composition-neutral rather than merely measured to
    // be: SKILL_GROUP maps 'speaking' and 'writing' to the same family, so the P3
    // variety pass cannot tell the two tags apart.
    expect(skillGroupOf('writing')).toBe(skillGroupOf('speaking'));
  });

  it('the session boost now follows the writing skill, not speaking', () => {
    // The defect: a typed, microphone-free screen recommended to a learner the
    // ledger had measured weak at SPEAKING.
    expect(skillForCategory(fill.category)).toBe('writing');
  });
});
