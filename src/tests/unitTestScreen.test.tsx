/**
 * unitTestScreen — the cumulative test, driven to a pass and to a fail.
 *
 * WHAT ONLY A DRIVEN TEST CAN SAY. `unitTest.test.ts` proves the paper is built
 * and graded correctly; it cannot see whether the screen RECORDS the result, pays
 * for a first pass exactly once, or — the one that matters most — writes nothing at
 * all when the learner fails. That last is the gate's own rule and the reason the
 * course can be trusted: a fail must leave no XP, no pass record and no mastery.
 *
 * It also pins that the credit is taken on REACHING the result view, not from the
 * onClick of the button that leaves it (`creditFollowsWork`), because that is the
 * defect twenty-one screens shipped.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const getLessons = vi.fn(async () => LESSONS as unknown[]);
vi.mock('../lib/contentClient', () => ({
  getLessons: (...a: unknown[]) => getLessons(...a),
  getCurriculumSpine: vi.fn(async () => []),
  getContent: vi.fn(async () => ({ V: {} })),
  getGrammar: vi.fn(async () => ({})),
}));
vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

import UnitTestScreen, { UNIT_TEST_XP } from '../components/learn/UnitTestScreen';
import { buildCourseUnits } from '../lib/courseUnits';
import { buildUnitTest, unitItemsNeeded, type LessonBodyLike } from '../lib/unitTest';
import { passedUnits, unitRecord, readCourseUnits } from '../lib/courseUnitProgress';
import type { CurriculumEntry } from '../lib/curriculum';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);
const BY_ID = new Map((LESSONS as LessonBodyLike[]).map((l) => [l.id, l]));

function seed(unitId = 'A1-1'): void {
  localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));
  sessionStorage.setItem('nh_unit_test', unitId);
}

/** The paper the screen will serve, so the driver knows the answers. */
function paper(unitId = 'A1-1', attempt = 0) {
  const unit = UNITS.find((u) => u.id === unitId)!;
  return buildUnitTest(
    unit.lessons.map((l) => BY_ID.get(l.id)!),
    attempt,
  );
}

function mount(award = vi.fn(), onOpenLesson = vi.fn(async () => true)) {
  return {
    award,
    onOpenLesson,
    ...render(<UnitTestScreen goBack={vi.fn()} award={award} onOpenLesson={onOpenLesson} />),
  };
}

/**
 * Answer the whole paper. `wrongFrom` makes every item at or after that index
 * wrong, so a score can be aimed exactly.
 */
async function sit(items: ReturnType<typeof paper>, wrongFrom = items.length): Promise<void> {
  for (let i = 0; i < items.length; i++) {
    await screen.findByTestId('unit-test-progress');
    expect(screen.getByTestId('unit-test-progress').textContent).toBe(
      `Question ${i + 1} of ${items.length}`,
    );
    const it = items[i]!;
    const pick = i >= wrongFrom ? (it.correct + 1) % it.options.length : it.correct;
    fireEvent.click(screen.getByTestId(`unit-test-opt-${pick}`));
    fireEvent.click(await screen.findByTestId('unit-test-next'));
  }
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  getLessons.mockReset();
  getLessons.mockResolvedValue(LESSONS as unknown[]);
});

describe('a passing sitting', () => {
  it('records the pass, pays once, and says the count needed', async () => {
    seed();
    const items = paper();
    const { award } = mount();
    await sit(items);

    const result = await screen.findByTestId('unit-test-result');
    expect(result.getAttribute('data-passed')).toBe('1');
    expect(screen.getByTestId('unit-test-verdict').textContent).toMatch(/Unit passed/);
    expect(screen.getByText(`${items.length} of ${items.length}`)).toBeTruthy();
    // STATE THE COUNT, NOT THE PERCENTAGE.
    expect(
      screen.getByText(new RegExp(`${unitItemsNeeded(items.length)} of ${items.length} needed`)),
    ).toBeTruthy();

    expect([...passedUnits()]).toEqual(['A1-1']);
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(UNIT_TEST_XP, 'grammar');
  });

  it('pays for the FIRST pass only', async () => {
    seed();
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({ units: { 'A1-1': { passedAt: '2026-09-01' } } }),
    );
    const { award } = mount();
    await sit(paper());
    await screen.findByTestId('unit-test-result');
    expect(award).not.toHaveBeenCalled();
    // The earlier pass date survives.
    expect(unitRecord('A1-1')!.passedAt).toBe('2026-09-01');
  });
});

describe('a failing sitting', () => {
  it('records the attempt and NOTHING else — no XP, no pass', async () => {
    seed();
    const items = paper();
    // One correct answer: far below the bar.
    const { award } = mount();
    await sit(items, 1);

    const result = await screen.findByTestId('unit-test-result');
    expect(result.getAttribute('data-passed')).toBe('0');
    expect(screen.getByTestId('unit-test-verdict').textContent).toMatch(/Not yet/);
    expect([...passedUnits()]).toEqual([]);
    expect(award).not.toHaveBeenCalled();
    const rec = unitRecord('A1-1')!;
    expect(rec.passedAt).toBeUndefined();
    expect(rec.attempts).toHaveLength(1);
    expect(rec.attempts![0]!.passed).toBe(false);
  });

  it('names the lessons the misses came from, and offers each for review', async () => {
    seed();
    const items = paper();
    const { onOpenLesson } = mount();
    await sit(items, 1);
    await screen.findByTestId('unit-test-result');

    // Everything after item 0 was wrong, so every lesson but the first item's has
    // at least one miss.
    const missed = [...new Set(items.slice(1).map((i) => i.lessonId))];
    for (const id of missed) {
      expect(screen.getByTestId(`unit-test-review-${id}`), id).toBeTruthy();
    }
    fireEvent.click(screen.getByTestId(`unit-test-review-${missed[0]}`));
    await waitFor(() => expect(onOpenLesson).toHaveBeenCalledWith(missed[0]));
  });

  it('says why a review lesson could not be opened', async () => {
    seed();
    const items = paper();
    mount(
      vi.fn(),
      vi.fn(async () => false),
    );
    await sit(items, 1);
    await screen.findByTestId('unit-test-result');
    const missed = [...new Set(items.slice(1).map((i) => i.lessonId))];
    fireEvent.click(screen.getByTestId(`unit-test-review-${missed[0]}`));
    expect(await screen.findByTestId('unit-test-open-failed')).toBeTruthy();
  });

  it('offers a retake with DIFFERENT questions', async () => {
    seed();
    const first = paper('A1-1', 0);
    mount();
    await sit(first, 1);
    fireEvent.click(await screen.findByTestId('unit-test-retake'));

    const second = paper('A1-1', 1);
    await screen.findByTestId('unit-test-progress');
    // The first question of the retake is not the first question of attempt 0.
    await waitFor(() => expect(screen.getByText(second[0]!.q)).toBeTruthy());
    expect(second[0]!.q === first[0]!.q && second[0]!.lessonId === first[0]!.lessonId).toBe(false);
  });
});

describe('when the test cannot be served', () => {
  it('says the connection failed when the bodies could not be fetched', async () => {
    seed();
    getLessons.mockRejectedValue(new Error('offline'));
    mount();
    expect(await screen.findByTestId('unit-test-failed')).toBeTruthy();
    expect(screen.queryByTestId('unit-test')).toBeNull();
  });

  // MEASURED, NOT INVENTED. A stale payload must not wall a learner out of the
  // course, so the screen records that it tried and could not assemble a test.
  it('records the insufficient marker rather than failing the learner', async () => {
    seed();
    getLessons.mockResolvedValue(
      UNITS[0]!.lessons.map((l) => ({ id: l.id, slides: [{ type: 'intro' }] })),
    );
    mount();
    expect(await screen.findByTestId('unit-test-insufficient')).toBeTruthy();
    expect(readCourseUnits().units['A1-1']!.insufficient).toBe(true);
    expect([...passedUnits()]).toEqual([]);
  });

  it('reports a missing unit without claiming a network failure', async () => {
    localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));
    sessionStorage.setItem('nh_unit_test', 'ZZ-9');
    mount();
    expect(await screen.findByTestId('unit-test-insufficient')).toBeTruthy();
  });
});

describe('the sitting itself', () => {
  it('shows the item explanation after an answer, not before', async () => {
    seed();
    const items = paper();
    mount();
    await screen.findByTestId('unit-test-progress');
    expect(screen.queryByTestId('unit-test-explanation')).toBeNull();
    expect(screen.queryByTestId('unit-test-next')).toBeNull();
    fireEvent.click(screen.getByTestId(`unit-test-opt-${items[0]!.correct}`));
    expect(await screen.findByTestId('unit-test-next')).toBeTruthy();
    if (items[0]!.explanation) {
      expect(screen.getByTestId('unit-test-explanation').textContent).toBe(items[0]!.explanation);
    }
  });

  it('cannot be answered twice', async () => {
    seed();
    const items = paper();
    mount();
    await screen.findByTestId('unit-test-progress');
    const wrong = (items[0]!.correct + 1) % items[0]!.options.length;
    fireEvent.click(screen.getByTestId(`unit-test-opt-${items[0]!.correct}`));
    fireEvent.click(screen.getByTestId(`unit-test-opt-${wrong}`));
    fireEvent.click(await screen.findByTestId('unit-test-next'));
    // Answer the rest WRONG, so a second-click that had registered would show up
    // as a score above one.
    for (let i = 1; i < items.length; i++) {
      const it = items[i]!;
      fireEvent.click(
        await screen.findByTestId(`unit-test-opt-${(it.correct + 1) % it.options.length}`),
      );
      fireEvent.click(await screen.findByTestId('unit-test-next'));
    }
    const rec = await waitFor(() => unitRecord('A1-1')!);
    // The first answer stood: one correct out of fifteen.
    expect(rec.attempts![0]!.correct).toBe(1);
  });
});

describe('the credit follows the work, not a button', () => {
  it('is taken from an effect on reaching the result, not from the exit onClick', () => {
    const src = readFileSync(
      resolve(__dirname, '..', 'components/learn/UnitTestScreen.tsx'),
      'utf8',
    );
    // Comments stripped, or the prose explaining the rule would satisfy it.
    const code = src.replace(/^\s*\/\/[^\n]*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    // BOUND THE EFFECT TO ITS OWN BRACES. Slicing to the end of the file is the
    // fixed-window defect this repo keeps rediscovering: the first version of this
    // assertion read from the effect to EOF, so it also saw the retake button's
    // onClick — and it SURVIVED the mutation that moved the award there, while the
    // behavioural test above caught it. A clause that survives its own mutation is
    // decoration until it is fixed.
    const start = code.indexOf('useEffect(() => {\n    if (phase !== ');
    expect(start, 'the credit effect was not found').toBeGreaterThan(-1);
    const end = code.indexOf('\n  }, [', start);
    expect(end, 'the credit effect has no dependency array').toBeGreaterThan(start);
    const effect = code.slice(start, end);
    expect(effect).toContain('award(UNIT_TEST_XP');
    expect(effect).toContain('total <= 0');
    // And it is the ONLY award call in the file, so nothing pays twice.
    expect(code.match(/award\(/g) ?? []).toHaveLength(1);
  });
});

describe('a learner can get here', () => {
  it('is routed, tab-mapped and reachable from the course map', () => {
    const strip = (s: string) =>
      s.replace(/^\s*\/\/[^\n]*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    const router = strip(
      readFileSync(resolve(__dirname, '..', 'components/AppRouter.tsx'), 'utf8'),
    );
    expect(router).toMatch(/import\('\.\/learn\/UnitTestScreen'\)/);
    expect(router).toMatch(/currentScreen === 'unittest'/);
    expect(router).toMatch(/<UnitTestScreen[\s\S]{0,200}award=\{award\}/);
    const map = strip(
      readFileSync(resolve(__dirname, '..', 'components/learn/CourseMapScreen.tsx'), 'utf8'),
    );
    expect(map).toMatch(/requestUnitTest\(row\.unit\.id\)/);
    expect(map).toMatch(/setScr\('unittest'\)/);
  });
});
