/**
 * After today's session, "what next?" is the COURSE — not an unrelated drill.
 *
 * Found walking a learner's day from Home in a browser (2026-09-27): a Unit 1 learner
 * who finished the session met a single hero, "Next up: Accusative — least-recently
 * practiced at your level", while their unit's next lesson went unoffered. The next-step
 * engine had no course rung at all, so every surface that asks it (Home's complete
 * state, the Practice tab's NextUpCard, the post-completion pill) bounced the learner
 * out of their course. Drives the REAL engine and the REAL course sequencer.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import { recordUnitTest, readUnitTestRequest } from '../lib/courseUnitProgress';
import { buildCourseUnits } from '../lib/courseUnits';
import { getNextStep } from '../lib/nextStep';
import type { CurriculumEntry } from '../lib/curriculum';
import { localDateStr } from '../lib/dateUtils';
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { CURRICULUM_SPINE_EVENT } from '../lib/curriculumProgress';
import AppContext from '../context/AppContext.jsx';
import { useNextStepEngine } from '../hooks/useNextStepEngine';
import { readUnitProductionRequest } from '../lib/unitProductionRequest';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);

function finishTodaysSession() {
  localStorage.setItem(
    'nh_daily_session',
    JSON.stringify({
      date: localDateStr(),
      activities: [{ id: 'a', label: 'A', screen: 'alphabet', category: 'vocab' }],
      completedIds: ['a'],
      estimatedMinutes: 5,
    }),
  );
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the next-step engine offers the course once the session is done', () => {
  it('with no session built today, a Unit 1 learner is sent to their unit’s next lesson', () => {
    writeCurriculumSpine(SPINE);
    markLessonComplete(UNITS[0]!.lessons[0]!.id, '2026-09-27');
    const step = getNextStep({ userCefr: 'A2', poolWords: new Set() });
    expect(step.kind).toBe('course');
    expect(step.screen).toBe('animlesson');
    expect(step.label).toContain(UNITS[0]!.lessons[1]!.title);
  });

  it('once today’s session is done it offers NO new lesson (owner, 2026-09-29: review, not new concepts)', () => {
    writeCurriculumSpine(SPINE);
    markLessonComplete(UNITS[0]!.lessons[0]!.id, '2026-09-27');
    finishTodaysSession();
    const step = getNextStep({ userCefr: 'A2', poolWords: new Set() });
    expect(step.screen).not.toBe('animlesson');
    expect(step.kind).not.toBe('course');
  });

  it('with the unit read, it offers the unit test — and the handoff waits for the tap', () => {
    writeCurriculumSpine(SPINE);
    for (const l of UNITS[0]!.lessons) markLessonComplete(l.id, '2026-09-27');
    finishTodaysSession();
    const step = getNextStep({ userCefr: 'A2', poolWords: new Set() });
    expect(step.kind).toBe('course');
    expect(step.screen).toBe('unittest');
    expect(step.label).toBe('Take the Unit 1 test');
    expect(step.course).toEqual({ unitId: UNITS[0]!.id, request: 'unit-test' });
    // getNextStep is read-only: computing the step must not make the handoff.
    expect(readUnitTestRequest()).toBeNull();
  });

  it('an UNFINISHED session still comes first — the course rung does not jump the plan', () => {
    writeCurriculumSpine(SPINE);
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        date: localDateStr(),
        activities: [{ id: 'a', label: 'A', screen: 'alphabet', category: 'vocab' }],
        completedIds: [],
        estimatedMinutes: 5,
      }),
    );
    expect(getNextStep({ userCefr: 'A2', poolWords: new Set() }).kind).toBe('session');
  });

  it('with no curriculum data the old ladder is unchanged', () => {
    finishTodaysSession();
    expect(getNextStep({ userCefr: 'A2', poolWords: new Set() }).kind).not.toBe('course');
  });

  it('a passed test with production owed sends the learner to produce', () => {
    writeCurriculumSpine(SPINE);
    for (const l of UNITS[0]!.lessons) markLessonComplete(l.id, '2026-09-27');
    recordUnitTest(UNITS[0]!.id, 15, 15, true);
    finishTodaysSession();
    const step = getNextStep({ userCefr: 'A2', poolWords: new Set() });
    expect(step.kind).toBe('course');
    expect(step.screen).toBe('unitproduction');
    expect(step.course?.request).toBe('production');
  });
});

// ── the launcher half: the tap makes the handoff, then opens the screen ─────────

vi.mock('../hooks/useContent.js', () => ({ useContent: () => ({ content: null }) }));

function engine(launchSessionActivity: (s: string) => void) {
  const value = { st: { xp: 0, lc: 0, gc: 0 }, setScr: vi.fn(), launchSessionActivity };
  const wrapper = ({ children }: { children: React.ReactNode }) =>
    React.createElement(AppContext.Provider, { value: value as never }, children);
  return renderHook(() => useNextStepEngine(), { wrapper }).result.current;
}

describe('launching a course step', () => {
  it('a unit-test step requests the test for THAT unit, then opens the screen', () => {
    const open = vi.fn();
    engine(open).launch({
      kind: 'course',
      screen: 'unittest',
      label: 'Take the Unit 1 test',
      reason: 'r',
      course: { unitId: 'A1-1', request: 'unit-test' },
    });
    expect(readUnitTestRequest()).toBe('A1-1');
    expect(open).toHaveBeenCalledWith('unittest', undefined);
  });

  it('a production step requests the owed task', () => {
    const open = vi.fn();
    engine(open).launch({
      kind: 'course',
      screen: 'unitproduction',
      label: 'Unit 1: write what you learned',
      reason: 'r',
      course: { unitId: 'A1-1', request: 'production', owed: 'write' },
    });
    expect(readUnitProductionRequest()).toEqual({ unitId: 'A1-1', kind: 'write' });
    expect(open).toHaveBeenCalledWith('unitproduction', undefined);
  });
});

// ── a surface that computes once must recompute when the spine lands ─────────────
// Measured in a browser: on a first load the spine arrives ~5 s after Home renders,
// and the completion hero — memoised on completion state and the review count only —
// kept its pre-spine answer ("Next up: Genitive") for the rest of the day.
describe('the engine announces the spine', () => {
  it('revision bumps when the curriculum spine is written', () => {
    const value = { st: { xp: 0, lc: 0, gc: 0 }, setScr: vi.fn() };
    const wrapper = ({ children }: { children: React.ReactNode }) =>
      React.createElement(AppContext.Provider, { value: value as never }, children);
    const { result } = renderHook(() => useNextStepEngine(), { wrapper });
    const before = result.current.revision;
    act(() => {
      window.dispatchEvent(new Event(CURRICULUM_SPINE_EVENT));
    });
    expect(result.current.revision).toBe(before + 1);
  });

  it("Home's hero and the Practice NextUpCard both recompute on it", () => {
    const home = readFileSync('src/components/home/HomeTab.tsx', 'utf8');
    expect(home).toMatch(/\[isComplete, dueCount, nextStepEngine\.revision\]/);
    const card = readFileSync('src/components/shared/NextUpCard.tsx', 'utf8');
    expect(card).toMatch(/useMemo<NextStep \| null>\(\(\) => computeStep\(\), \[revision\]\)/);
  });
});
