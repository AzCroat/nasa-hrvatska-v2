/**
 * The Course tab never leaves a learner without a way to test out and without a next move.
 *
 * Owner, 2026-11-19: "I see NO test-out anywhere", on a state (Unit 1 test passed, production
 * owed, everything ahead locked) in which the tab rendered neither test-out button. A guard
 * that walks learner states against the REAL Course tab render: every state must carry the
 * always-on test-out entry and a primary next action. Real stores, real components.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import {
  recordUnitTest,
  recordUnitProduction,
  markUnitTestInsufficient,
  recordLevelReview,
  startUnitRetention,
} from '../lib/courseUnitProgress';
import { buildCourseUnits } from '../lib/courseUnits';
import AppContext from '../context/AppContext.jsx';
import LearnTab from '../components/learn/LearnTab';
import type { CurriculumEntry } from '../lib/curriculum';

vi.mock('../components/family/CharacterPortrait', () => ({ default: () => null }));

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);

const readUnit = (i: number) =>
  UNITS[i]!.lessons.forEach((l) => markLessonComplete(l.id, '2026-09-01'));

function mount() {
  const setScr = vi.fn();
  const props = new Proxy({}, { get: () => vi.fn() }) as never;
  render(
    <AppContext.Provider value={{ setScr } as never}>
      <LearnTab {...(props as object)} icons={{}} launchAnimLesson={vi.fn()} />
    </AppContext.Provider>,
  );
  return { setScr };
}

const STATES: Array<{ name: string; seed: () => void; primary: RegExp }> = [
  { name: 'a fresh learner', seed: () => {}, primary: /learn-lesson-start/ },
  {
    name: 'lessons 1–2 done in Unit 1',
    seed: () =>
      UNITS[0]!.lessons.slice(0, 2).forEach((l) => markLessonComplete(l.id, '2026-09-01')),
    primary: /learn-lesson-start/,
  },
  {
    name: 'all five lessons of Units 1 and 2 passed, no tests',
    seed: () => {
      readUnit(0);
      readUnit(1);
    },
    primary: /learn-lesson-start/,
  },
  {
    name: 'Unit 1 test passed with production owed',
    seed: () => {
      readUnit(0);
      recordUnitTest('A1-1', 15, 15, true);
    },
    primary: /learn-lesson-start/,
  },
  {
    name: 'Unit 1 fully advanced (test and both tasks)',
    seed: () => {
      readUnit(0);
      recordUnitTest('A1-1', 15, 15, true);
      recordUnitProduction('A1-1', 'write', 78);
      recordUnitProduction('A1-1', 'speak', 0.8);
    },
    primary: /learn-lesson-start/,
  },
  {
    name: 'a unit whose test cannot be assembled',
    seed: () => {
      markUnitTestInsufficient('A1-1');
    },
    primary: /learn-lesson-start/,
  },
  {
    name: 'a due check-up',
    seed: () => {
      readUnit(0);
      recordUnitTest('A1-1', 15, 15, true);
      startUnitRetention('A1-1', '2020-01-01');
    },
    primary: /learn-course-next-go/,
  },
  {
    name: 'the end of the course',
    seed: () => {
      for (let i = 0; i < UNITS.length; i++) {
        readUnit(i);
        recordUnitTest(UNITS[i]!.id, 15, 15, true);
        recordUnitProduction(UNITS[i]!.id, 'write', 80);
        recordUnitProduction(UNITS[i]!.id, 'speak', 0.8);
      }
      for (const level of ['A1', 'A2', 'B1', 'B2', 'C1']) recordLevelReview(level, 15, 18);
    },
    primary: /learn-testout-any/,
  },
];

beforeEach(() => {
  cleanup();
  localStorage.clear();
  sessionStorage.clear();
  writeCurriculumSpine(SPINE);
});

describe('the Course tab, in every learner state', () => {
  for (const s of STATES) {
    it(`${s.name}: carries the always-on test-out entry and a primary next action`, () => {
      s.seed();
      const { setScr } = mount();
      // (1) the always-on test-out entry, which opens the course map
      const any = screen.getByTestId('learn-testout-any');
      expect(any.hasAttribute('hidden'), 'the entry is visible, not merely present').toBe(false);
      fireEvent.click(any);
      expect(setScr).toHaveBeenCalledWith('coursemap');
      // (2) a primary next action: a lesson to start or a course step with its button
      const ids = [...document.querySelectorAll('[data-testid]')].map((e) =>
        e.getAttribute('data-testid'),
      );
      expect(
        ids.some((id) => s.primary.test(id ?? '')),
        `${s.name}: ${ids.join(',')}`,
      ).toBe(true);
    });
  }

  it('production owed is named in one sentence with a button, never a dead end', () => {
    readUnit(0);
    recordUnitTest('A1-1', 15, 15, true);
    mount();
    const card = screen.getByTestId('learn-course-next');
    expect(card.getAttribute('data-kind')).toBe('production');
    expect(card.textContent).toMatch(/written task/);
    expect(card.textContent).toMatch(/never blocks the next unit/);
    expect(screen.getByTestId('learn-course-next-go')).toBeTruthy();
  });
});
