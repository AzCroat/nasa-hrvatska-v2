// conceptMap.test.tsx — per-concept standing, derived and never estimated
// (owner recommendation 5, 2026-09-07).
//
// Two halves, because they fail differently:
//   1. The DERIVATION — every state comes from something the app measured, and
//      the drill offered for a concept is the one the session's teach→practice
//      coupling would route to. A state the data does not support is the
//      fabrication rule (NEVER DO 13).
//   2. The WIRING — the card is mounted in the Me tab and its Practise button
//      launches the real screen. A component test that supplies its own props
//      cannot see whether the app is connected to it (the `award` finding).
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import fs from 'fs';
import path from 'path';

import {
  buildConceptMap,
  conceptSummaryLine,
  practiceFor,
  type SpineLike,
} from '../lib/conceptMap';
import {
  recordMasteryPass,
  recordRetentionResult,
  readRetention,
  writeRetention,
  addDays,
  itemKey,
  RETENTION_INTERVALS,
} from '../lib/lessonRetention';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from '../lib/categoryRoutes';
import { localDateStr } from '../lib/dateUtils';

const TODAY = '2026-09-07';
const spine = (...ids: string[]): SpineLike[] =>
  ids.map((id) => ({ id, level: 'A1', title: `Lesson ${id}` }));

/** A finished re-check of `total` items with `correct` of them right. */
const recheck = (lessonId: string, correct: number, total: number, at?: string) =>
  recordRetentionResult(lessonId, {
    kind: 'retention',
    results: Array.from({ length: total }, (_, i) => ({ idx: i, correct: i < correct })),
    ...(at ? { at } : {}),
  });

beforeEach(() => localStorage.clear());

describe('the derivation states what was measured, and nothing else', () => {
  it('a lesson never passed is UNTAUGHT — and is never listed as a weakness', () => {
    const map = buildConceptMap(spine('a', 'b'), readRetention(), TODAY);
    expect(map.counts.untaught).toBe(2);
    expect(map.needsWork).toEqual([]);
    // Not knowing something you were never taught is not a gap.
    expect(map.entries.every((e) => e.state === 'untaught')).toBe(true);
  });

  it('a clean pass with no re-check yet is PASSED, not solid — one pass is not retention', () => {
    recordMasteryPass('a', { score: 6, total: 6, results: [], at: TODAY });
    const map = buildConceptMap(spine('a'), readRetention(), TODAY);
    expect(map.entries[0]!.state).toBe('passed');
    expect(map.counts.solid).toBe(0);
  });

  it('a pass that has HELD through a re-check is SOLID', () => {
    const passedAt = addDays(TODAY, -RETENTION_INTERVALS[0]!);
    recordMasteryPass('a', { score: 6, total: 6, results: [], at: passedAt });
    recheck('a', 6, 6, TODAY);
    const map = buildConceptMap(spine('a'), readRetention(), TODAY);
    expect(map.entries[0]!.state).toBe('solid');
  });

  it('a passed lesson whose re-check date has arrived is DUE', () => {
    recordMasteryPass('a', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(TODAY, -RETENTION_INTERVALS[0]!),
    });
    const map = buildConceptMap(spine('a'), readRetention(), TODAY);
    expect(map.entries[0]!.state).toBe('due');
  });

  it('a FAILED re-check makes the concept SHAKY', () => {
    recordMasteryPass('a', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(TODAY, -RETENTION_INTERVALS[0]!),
    });
    recheck('a', 2, 6, TODAY);
    const map = buildConceptMap(spine('a'), readRetention(), TODAY);
    expect(map.entries[0]!.state).toBe('shaky');
  });

  it('a clean lesson with items the scheduler wants back is SHAKY, and counts them', () => {
    recordMasteryPass('a', { score: 6, total: 6, results: [], at: TODAY });
    // Two missed items, both scheduled into the past → open.
    const store = readRetention();
    store.items[itemKey('a', 1)] = {
      due: 1000,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 1000,
      last: 0,
    };
    store.items[itemKey('a', 4)] = {
      due: 1000,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 1000,
      last: 0,
    };
    writeRetention(store);
    const map = buildConceptMap(spine('a'), readRetention(), TODAY, 5000);
    expect(map.entries[0]!.state).toBe('shaky');
    expect(map.entries[0]!.openMisses).toBe(2);
  });

  it('a card scheduled into the FUTURE is not an open miss — being wrong once is not slipping', () => {
    recordMasteryPass('a', { score: 6, total: 6, results: [], at: TODAY });
    const store = readRetention();
    store.items[itemKey('a', 1)] = {
      due: 9_000,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 9_000,
      last: 0,
    };
    writeRetention(store);
    const map = buildConceptMap(spine('a'), readRetention(), TODAY, 5_000);
    expect(map.entries[0]!.openMisses).toBe(0);
    expect(map.entries[0]!.state).toBe('passed');
  });

  it('another lesson’s cards are not counted against this one', () => {
    recordMasteryPass('a', { score: 6, total: 6, results: [], at: TODAY });
    const store = readRetention();
    store.items[itemKey('ab', 1)] = {
      due: 1,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 1,
      last: 0,
    };
    writeRetention(store);
    const map = buildConceptMap(spine('a'), readRetention(), TODAY, 5_000);
    expect(map.entries[0]!.openMisses).toBe(0);
  });

  it('needsWork is shaky first, then due, worst first within each', () => {
    const old = addDays(TODAY, -RETENTION_INTERVALS[0]!);
    recordMasteryPass('due1', { score: 6, total: 6, results: [], at: old });
    recordMasteryPass('shakyA', { score: 6, total: 6, results: [], at: old });
    recordMasteryPass('shakyB', { score: 6, total: 6, results: [], at: old });
    recordMasteryPass('fine', { score: 6, total: 6, results: [], at: TODAY });
    const store = readRetention();
    store.items[itemKey('shakyA', 0)] = {
      due: 1,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 1,
      last: 0,
    };
    store.items[itemKey('shakyB', 0)] = {
      due: 1,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 1,
      last: 0,
    };
    store.items[itemKey('shakyB', 2)] = {
      due: 1,
      s: 1,
      d: 1,
      r: 1,
      w: 0,
      l: 1,
      b: 0,
      nextDue: 1,
      last: 0,
    };
    writeRetention(store);

    const map = buildConceptMap(
      spine('due1', 'shakyA', 'shakyB', 'fine'),
      readRetention(),
      TODAY,
      5_000,
    );
    expect(map.needsWork.map((e) => e.lessonId)).toEqual(['shakyB', 'shakyA', 'due1']);
  });

  it('defaults to the live store and today when nothing is passed in', () => {
    recordMasteryPass('a', { score: 6, total: 6, results: [] });
    expect(buildConceptMap(spine('a')).entries[0]!.state).toBe('passed');
    expect(localDateStr()).toBeTruthy();
  });
});

describe('the practice route is the coupling’s route, not a second opinion', () => {
  it('resolves through CATEGORY_SCREEN_MAP, then the easier fallback', () => {
    const mapped = Object.keys(LESSON_TAUGHT_CATEGORY).filter((id) => {
      const c = LESSON_TAUGHT_CATEGORY[id]!;
      return !!(CATEGORY_SCREEN_MAP[c] || CATEGORY_EASIER_SCREEN[c]);
    });
    expect(mapped.length).toBeGreaterThan(50);
    for (const id of mapped) {
      const c = LESSON_TAUGHT_CATEGORY[id]!;
      expect(practiceFor(id)).toEqual({
        screen: CATEGORY_SCREEN_MAP[c] || CATEGORY_EASIER_SCREEN[c],
        category: c,
      });
    }
  });

  it('a lesson the coupling deliberately leaves unmapped gets NO button, not a wrong one', () => {
    expect(practiceFor('a-lesson-that-does-not-exist')).toBeNull();
    const map = buildConceptMap(spine('a-lesson-that-does-not-exist'), readRetention(), TODAY);
    expect(map.entries[0]!.practiceScreen).toBeUndefined();
  });

  it('a real coupled lesson carries its screen onto the entry', () => {
    const id = Object.keys(LESSON_TAUGHT_CATEGORY).find((k) => practiceFor(k))!;
    recordMasteryPass(id, { score: 6, total: 6, results: [], at: TODAY });
    const entry = buildConceptMap(spine(id), readRetention(), TODAY).entries[0]!;
    expect(entry.practiceScreen).toBe(practiceFor(id)!.screen);
  });
});

describe('the summary line never states a count it does not hold', () => {
  it('says nothing at all before anything is passed', () => {
    expect(conceptSummaryLine(buildConceptMap(spine('a', 'b'), readRetention(), TODAY))).toBeNull();
  });

  it('names the slipping count when there is one', () => {
    recordMasteryPass('a', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(TODAY, -RETENTION_INTERVALS[0]!),
    });
    recheck('a', 1, 6, TODAY);
    const line = conceptSummaryLine(buildConceptMap(spine('a'), readRetention(), TODAY))!;
    expect(line).toMatch(/1 of your 1 concept is slipping/);
  });

  it('reports held re-checks when nothing is slipping', () => {
    const passedAt = addDays(TODAY, -RETENTION_INTERVALS[0]!);
    recordMasteryPass('a', { score: 6, total: 6, results: [], at: passedAt });
    recheck('a', 6, 6, TODAY);
    expect(conceptSummaryLine(buildConceptMap(spine('a'), readRetention(), TODAY))).toMatch(
      /1 concept held through a re-check/,
    );
  });
});

// ── The card ────────────────────────────────────────────────────────────────

import ConceptMapCard from '../components/profile/ConceptMapCard';
import type { CurriculumEntry } from '../lib/curriculum';

const spineEntries = (...ids: string[]): CurriculumEntry[] =>
  ids.map((id, i) => ({
    id,
    level: 'A1' as const,
    order: i + 1,
    prerequisites: [],
    objectives: [],
    title: `Lesson ${id}`,
  }));

describe('the card', () => {
  it('renders nothing at all before a first pass', () => {
    const { container } = render(
      <ConceptMapCard setScr={vi.fn()} spine={spineEntries('a', 'b')} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('shows the summary, the proportions and the taught count once something is passed', () => {
    recordMasteryPass('a', { score: 6, total: 6, results: [] });
    render(<ConceptMapCard setScr={vi.fn()} spine={spineEntries('a', 'b', 'c')} />);
    expect(screen.getByTestId('concept-map-summary').textContent).toBeTruthy();
    expect(screen.getByTestId('concept-bar-passed').getAttribute('data-count')).toBe('1');
    expect(screen.getByTestId('concept-map-total').textContent).toBe('1 of 3 taught');
  });

  it('lists a slipping concept and launches ITS drill, not a generic screen', () => {
    const id = Object.keys(LESSON_TAUGHT_CATEGORY).find((k) => practiceFor(k))!;
    recordMasteryPass(id, {
      score: 6,
      total: 6,
      results: [],
      at: addDays(localDateStr(), -RETENTION_INTERVALS[0]!),
    });
    recheck(id, 1, 6);

    const setScr = vi.fn();
    render(<ConceptMapCard setScr={setScr} spine={spineEntries(id)} />);
    const row = screen.getByTestId('concept-row');
    expect(row.getAttribute('data-state')).toBe('shaky');
    fireEvent.click(within(row).getByTestId('concept-practice'));
    expect(setScr).toHaveBeenCalledWith(practiceFor(id)!.screen);
  });

  it('a concept with no honest drill is listed WITHOUT a practice button', () => {
    recordMasteryPass('no-such-lesson', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(localDateStr(), -RETENTION_INTERVALS[0]!),
    });
    render(<ConceptMapCard setScr={vi.fn()} spine={spineEntries('no-such-lesson')} />);
    expect(screen.getByTestId('concept-row')).toBeTruthy();
    expect(screen.queryByTestId('concept-practice')).toBeNull();
  });

  it('caps the list and expands on request', () => {
    const ids = ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7'];
    for (const id of ids) {
      recordMasteryPass(id, {
        score: 6,
        total: 6,
        results: [],
        at: addDays(localDateStr(), -RETENTION_INTERVALS[0]!),
      });
    }
    render(<ConceptMapCard setScr={vi.fn()} spine={spineEntries(...ids)} />);
    expect(screen.getAllByTestId('concept-row').length).toBe(5);
    fireEvent.click(screen.getByTestId('concept-map-more'));
    expect(screen.getAllByTestId('concept-row').length).toBe(7);
  });
});

describe('the card is WIRED into the Me tab', () => {
  it('InsightsTab mounts it and hands it the app’s own setScr', () => {
    const src = fs.readFileSync(
      path.join(__dirname, '../components/profile/InsightsTab.tsx'),
      'utf8',
    );
    expect(src).toMatch(/import ConceptMapCard from '\.\/ConceptMapCard'/);
    expect(src).toMatch(/<ConceptMapCard setScr=\{setScr\}\s*\/>/);
  });
});
