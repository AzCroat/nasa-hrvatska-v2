// src/tests/a1VerbSyntaxDrills.test.tsx
//
// The A1 verb + word-order drills added by the 2026-08-20 recommender audit.
//
// What these tests are really protecting:
//   1. The HOLE STAYS CLOSED — A1 must keep at least one verb drill and one
//      syntax drill it can actually reach. This is the regression guard for the
//      audit finding itself, not just for the components.
//   2. The teach-before-test contract (#495) — both drills open on the concept.
//   3. The distractor contracts, which are what make the items diagnostic
//      rather than guessable.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

vi.mock('../lib/aiPost', () => ({
  _aiPost: vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) }),
}));
vi.mock('../lib/cefrCertification', () => ({ getCurrentContentLevel: () => 'A1' }));

import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { EXERCISE_DIFFICULTY } from '../lib/exerciseDifficulty';
import { PRESENT_DRILL_DATA as VERB_DATA } from '../data/drills/a2/presentDrill';
import { DATA as ORDER_DATA } from '../components/practice/WordOrderDrill';
import { A1_CONCEPTS, a1ConceptById } from '../data/a1Concepts';

describe('the A1 practice hole stays closed', () => {
  const a1 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'A1');

  it('A1 has at least one verb drill it can reach', () => {
    const verbCats = [
      'present-tense',
      'past-tense',
      'future-tense',
      'conditional',
      'aspect-imperfective',
      'aspect-perfective',
      'aspect-negation',
    ];
    const verbAtA1 = a1.filter((e) => verbCats.includes(e.category));
    expect(
      verbAtA1.map((e) => e.id),
      'A1 teaches verbs (present-tense-verbs, pronouns-biti) — it must be able to practice them. ' +
        'A1 cannot inherit from higher levels, so a verb drill AT A1 is the only way.',
    ).not.toEqual([]);
  });

  it('A1 has at least one syntax drill it can reach', () => {
    const syntaxAtA1 = a1.filter((e) => e.category === 'word-order');
    expect(syntaxAtA1.map((e) => e.id)).not.toEqual([]);
  });

  it('both new drills carry a difficulty tier (Priority-3 fill sort)', () => {
    expect(EXERCISE_DIFFICULTY['presentdrill']).toBeTypeOf('number');
    expect(EXERCISE_DIFFICULTY['wordorderdrill']).toBeTypeOf('number');
  });
});

// 2026-11-24: the screen's bank is now the A2 book drill. The old "options share a verb stem" check
// belonged to the single-mode ending drill; the book drill mixes sentence-choice items, so it is
// not applied here. Its format is pinned in a2BookLessonDrills.
describe('present-tense drill content', () => {
  it('has a usable bank and every item is internally consistent', () => {
    expect(VERB_DATA.length).toBeGreaterThanOrEqual(16);
    for (const item of VERB_DATA) {
      expect(item.opts, `"${item.q}" must offer 4 options`).toHaveLength(4);
      expect(item.opts, `"${item.q}" answer must be among its options`).toContain(item.answer);
      expect(new Set(item.opts).size, `"${item.q}" has a duplicated option`).toBe(4);
      expect(item.tip.length, `"${item.q}" needs a plain-English tip`).toBeGreaterThan(0);
    }
  });
});

describe('word-order drill content', () => {
  it('has a usable bank and every item is internally consistent', () => {
    expect(ORDER_DATA.length).toBeGreaterThanOrEqual(12);
    for (const item of ORDER_DATA) {
      expect(item.opts, `"${item.q}" must offer 4 options`).toHaveLength(4);
      expect(item.opts).toContain(item.answer);
      expect(new Set(item.opts).size, `"${item.q}" has a duplicated option`).toBe(4);
      expect(item.tip.length).toBeGreaterThan(0);
    }
  });

  it('every option is a permutation of the same words — only ORDER varies', () => {
    // Croatian constituent order is free, so this drill only works if each item
    // isolates a FIXED-order rule. If options differed in their words, the item
    // would be testing vocabulary or case, not order — and could mark real
    // Croatian wrong.
    //
    // This assertion earned its keep on the first run: four items originally
    // slipped in an extra "ja"/"ti" or swapped jesi→si in a distractor, which
    // would have let the learner answer by spotting the odd word out instead of
    // by knowing where the clitic sits.
    //
    // The two fusion items (nisam, nemam) are exempt BY DESIGN — there the
    // correct answer merges two words into one and that merge is the lesson.
    for (const item of ORDER_DATA.filter((i) => !i.fusion)) {
      const norm = (s: string) =>
        s.toLowerCase().replace(/[.?!]/g, '').split(/\s+/).sort().join(' ');
      const bags = new Set(item.opts.map(norm));
      expect(
        bags.size,
        `"${item.q}": all four options must contain the same words in different orders. ` +
          `Got ${JSON.stringify(item.opts)}`,
      ).toBe(1);
    }
  });
});

/** StatsProvider takes an explicit value — a minimal stats shape is enough here. */
async function withStats(node: React.ReactElement) {
  const { StatsProvider } = await import('../context/StatsContext');
  const value = {
    stats: { xp: 0, lc: 0, gc: 0, badges: [], vs: [] },
    setStats: vi.fn(),
    writeDelta: vi.fn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
  return <StatsProvider value={value}>{node}</StatsProvider>;
}

describe('teaching phase (concept-teaching directive)', () => {
  beforeEach(() => localStorage.clear());

  it('both concepts exist and lead with an English bridge', () => {
    for (const id of ['present-tense', 'word-order']) {
      const c = a1ConceptById(id);
      expect(c, `${id} concept missing`).toBeTruthy();
      expect(c!.bridge.length).toBeGreaterThan(40);
      expect(c!.points.length).toBeGreaterThanOrEqual(2);
      expect(c!.counter.wrong).not.toBe(c!.counter.right);
    }
    expect(A1_CONCEPTS).toHaveLength(2);
  });

  it('the verb drill opens on the concept, not on question 1', async () => {
    const { default: PresentTenseDrill } = await import('../components/practice/PresentTenseDrill');
    render(await withStats(<PresentTenseDrill goBack={vi.fn()} award={vi.fn()} />));
    expect(screen.getByTestId('a1-concept-intro')).toBeTruthy();
    fireEvent.click(screen.getByTestId('a1-intro-start'));
    expect(screen.queryByTestId('a1-concept-intro')).toBeNull();
  });

  it('the word-order drill opens on the concept, not on question 1', async () => {
    const { default: WordOrderDrill } = await import('../components/practice/WordOrderDrill');
    render(await withStats(<WordOrderDrill goBack={vi.fn()} award={vi.fn()} />));
    expect(screen.getByTestId('a1-concept-intro')).toBeTruthy();
    fireEvent.click(screen.getByTestId('a1-intro-start'));
    expect(screen.queryByTestId('a1-concept-intro')).toBeNull();
  });
});
