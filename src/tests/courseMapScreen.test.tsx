/**
 * courseMapScreen — the course map, driven.
 *
 * WHY THE SCREEN AND NOT ONLY THE DERIVATION. `courseUnits.test.ts` proves the
 * shape is right; it cannot see whether a learner can reach it, whether the
 * current unit is the one that opens, or whether a tap that fails says so. Those
 * are the three things that have gone wrong repeatedly in this codebase — the
 * component-test / wiring-test split, the silent tap, and a screen rendering
 * "not arrived yet" and "it failed" identically.
 *
 * AND IT DRIVES `launchAnimLesson`'s NEW BOOLEAN. That return value is the whole
 * mechanism behind the failure notice, so a source pin on it would be the dead
 * branch this file's own NEVER list warns about: if the launcher always resolved
 * truthy, the notice could never render and would read exactly like coverage.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, act, fireEvent, renderHook } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { buildCourseUnits } from '../lib/courseUnits';
import { COURSE_UNIT_TITLES } from '../data/courseUnitTitles';
import type { CurriculumEntry } from '../lib/curriculum';

const getCurriculumSpine = vi.fn();
const getLessons = vi.fn(async () => [] as unknown[]);

vi.mock('../lib/contentClient', () => ({
  getCurriculumSpine: (...a: unknown[]) => getCurriculumSpine(...a),
  getContent: vi.fn(async () => ({ V: {} })),
  getLessons: (...a: unknown[]) => getLessons(...a),
  getGrammar: vi.fn(async () => ({})),
}));

vi.mock('../lib/exerciseData', () => ({
  _getData: vi.fn(async () => ({ LISTEN: [] })),
  _getVocab: vi.fn(async () => ({})),
  _buildAdaptivePool: (pool: unknown[]) => pool,
}));

vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

import CourseMapScreen from '../components/learn/CourseMapScreen';
import { useScreenLauncher } from '../hooks/useScreenLauncher';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);

function seedSpine(spine: readonly CurriculumEntry[] = SPINE): void {
  localStorage.setItem('nh_curriculum_spine', JSON.stringify(spine));
}
function seedDone(ids: readonly string[]): void {
  const done: Record<string, string> = {};
  for (const id of ids) done[id] = '2026-09-01';
  localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done }));
}

function src(rel: string): string {
  return readFileSync(resolve(__dirname, '..', rel), 'utf8');
}
/** Line comments FIRST, blocks LAST (sweep 72). */
function strip(s: string): string {
  return s.replace(/^\s*\/\/[^\n]*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
}

beforeEach(() => {
  getCurriculumSpine.mockReset();
  getCurriculumSpine.mockResolvedValue(SPINE);
  getLessons.mockReset();
  getLessons.mockResolvedValue([]);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('the map a learner sees', () => {
  it('renders every unit, with unit 1 current and open for a new learner', async () => {
    seedSpine();
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);

    expect(await screen.findByTestId('course-map')).toBeTruthy();
    for (const u of UNITS) {
      expect(screen.getByTestId(`course-unit-${u.id}`), u.id).toBeTruthy();
    }
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('current');
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('upcoming');
    expect(screen.getByText('Unit 1 of 36')).toBeTruthy();
    expect(screen.getByTestId('course-lessons-count').textContent).toBe('0 / 180 lessons');

    // The current unit's five lessons are the ones on screen.
    await waitFor(() => expect(screen.getByTestId('course-lesson-alphabet')).toBeTruthy());
    for (const l of UNITS[0]!.lessons) {
      expect(screen.getByTestId(`course-lesson-${l.id}`), l.id).toBeTruthy();
    }
    // A unit that is not current stays collapsed.
    expect(screen.queryByTestId('course-lesson-basic-questions')).toBeNull();
  });

  it('shows the authored unit title, not a positional placeholder', async () => {
    seedSpine();
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    // The authored title, verbatim — including the Croatian term. Asserting a
    // PREFIX would keep passing if the rest of the name were lost.
    expect(await screen.findByText(COURSE_UNIT_TITLES['A1-4']!.title)).toBeTruthy();
    expect(COURSE_UNIT_TITLES['A1-4']!.title).toBe('The Cases Begin (Padeži)');
    expect(screen.queryByText('A1 · Unit 4')).toBeNull();
  });

  it('moves the position on when a unit is finished, and ticks its lessons', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);

    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('done');
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('current');
    expect(screen.getByText('Unit 2 of 36')).toBeTruthy();
    expect(screen.getByTestId('course-lessons-count').textContent).toBe('5 / 180 lessons');

    await waitFor(() =>
      expect(screen.getByTestId('course-lesson-basic-questions').getAttribute('data-lesson-done')),
    );
    expect(
      screen.getByTestId('course-lesson-basic-questions').getAttribute('data-lesson-done'),
    ).toBe('0');
  });

  it('opens the lesson that was tapped', async () => {
    seedSpine();
    const onOpenLesson = vi.fn(async () => true);
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={onOpenLesson} />);
    const row = await screen.findByTestId('course-lesson-alphabet');
    fireEvent.click(row);
    expect(onOpenLesson).toHaveBeenCalledWith('alphabet');
    expect(screen.queryByTestId('course-open-failed')).toBeNull();
  });

  it('expands a unit the learner taps, and collapses it again', async () => {
    seedSpine();
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    const header = (await screen.findByText('Out in the World')).closest('button')!;
    fireEvent.click(header);
    expect(screen.getByTestId('course-lesson-likes-preferences')).toBeTruthy();
    fireEvent.click(header);
    expect(screen.queryByTestId('course-lesson-likes-preferences')).toBeNull();
  });

  // A TAP EITHER OPENS IT OR SAYS WHY. The lesson body is a separate fetch, so an
  // offline learner reaches a launcher that cannot navigate.
  it('says why when a lesson could not be opened', async () => {
    seedSpine();
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => false)} />);
    const row = await screen.findByTestId('course-lesson-alphabet');
    fireEvent.click(row);
    const notice = await screen.findByTestId('course-open-failed');
    expect(notice.textContent).toMatch(/could not be opened/i);
  });
});

describe('why the map cannot be shown — three facts, never conflated', () => {
  it('says "loading" while the spine is still coming', async () => {
    let settle: (v: unknown) => void = () => {};
    getCurriculumSpine.mockReturnValue(
      new Promise((r) => {
        settle = r;
      }),
    );
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    const block = await screen.findByTestId('course-map-block');
    expect(block.getAttribute('data-block')).toBe('loading');
    expect(block.textContent).toMatch(/one moment/i);
    expect(screen.queryByText(/0 \/ 0/)).toBeNull();
    await act(async () => {
      settle(SPINE);
    });
  });

  it('says "could not be loaded" when the fetch fails', async () => {
    getCurriculumSpine.mockRejectedValue(new Error('offline'));
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    await waitFor(() =>
      expect(screen.getByTestId('course-map-block').getAttribute('data-block')).toBe('unavailable'),
    );
  });

  it('says "no units yet" when the fetch succeeds with nothing', async () => {
    getCurriculumSpine.mockResolvedValue([]);
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    await waitFor(() =>
      expect(screen.getByTestId('course-map-block').getAttribute('data-block')).toBe('empty'),
    );
  });

  it('never renders a course count it does not have', async () => {
    getCurriculumSpine.mockRejectedValue(new Error('offline'));
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    await screen.findByTestId('course-map-block');
    expect(screen.queryByTestId('course-lessons-count')).toBeNull();
    expect(screen.queryByTestId('course-map')).toBeNull();
  });

  it('renders the map as soon as a spine is written by another surface', async () => {
    let settle: (v: unknown) => void = () => {};
    getCurriculumSpine.mockReturnValue(
      new Promise((r) => {
        settle = r;
      }),
    );
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} />);
    await screen.findByTestId('course-map-block');
    await act(async () => {
      seedSpine();
      window.dispatchEvent(new CustomEvent('nh:curriculum-spine'));
    });
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    await act(async () => {
      settle(SPINE);
    });
  });
});

// ── THE BOOLEAN THE NOTICE DEPENDS ON ───────────────────────────────────────
describe('launchAnimLesson reports whether it opened anything', () => {
  function params() {
    return {
      setScr: vi.fn(),
      navigate: vi.fn(),
      curEx: '',
      sCurEx: vi.fn(),
      currentScreen: 'dashboard',
      setStats: vi.fn(),
      award: vi.fn(),
      writeDelta: vi.fn(),
      allCats: ['basics'],
      gc: 0,
      tab: 'learn',
      setTab: vi.fn(),
      sLt: vi.fn(),
      sLi: vi.fn(),
      sLx: vi.fn(),
      sLs: vi.fn(),
      sLp: vi.fn(),
      sLa: vi.fn(),
      sLsl: vi.fn(),
      sQi: vi.fn(),
      sGl: vi.fn(),
      sGp: vi.fn(),
      sGx: vi.fn(),
      sGs: vi.fn(),
      sGa: vi.fn(),
      sGsl: vi.fn(),
      setMcInitQ: vi.fn(),
      setMcResultQ: vi.fn(),
      setMcResultScore: vi.fn(),
      setMcMistakes: vi.fn(),
      setFcInitPool: vi.fn(),
      setLsInitQ: vi.fn(),
      setMatchInitPool: vi.fn(),
      sSi: vi.fn(),
      sSx: vi.fn(),
      sSw: vi.fn(),
      sSr: vi.fn(),
      sSsc: vi.fn(),
      setAnimLesson: vi.fn(),
    };
  }

  it('resolves true and navigates when the lesson body is there', async () => {
    getLessons.mockResolvedValue([{ id: 'alphabet', title: 'A' }]);
    const p = params();
    const { result } = renderHook(() => useScreenLauncher(p));
    let ok: boolean | undefined;
    await act(async () => {
      ok = await result.current.launchAnimLesson('alphabet');
    });
    expect(ok).toBe(true);
    expect(p.setScr).toHaveBeenCalledWith('animlesson');
  });

  it('resolves false without navigating when the lesson is not in the payload', async () => {
    getLessons.mockResolvedValue([{ id: 'something-else' }]);
    const p = params();
    const { result } = renderHook(() => useScreenLauncher(p));
    let ok: boolean | undefined;
    await act(async () => {
      ok = await result.current.launchAnimLesson('alphabet');
    });
    expect(ok).toBe(false);
    expect(p.setScr).not.toHaveBeenCalledWith('animlesson');
  });

  // A THROW IS ALSO A FAILED TAP — offline, auth, rate limit.
  it('resolves false rather than rejecting when the fetch fails', async () => {
    getLessons.mockRejectedValue(new Error('offline'));
    const p = params();
    const { result } = renderHook(() => useScreenLauncher(p));
    let ok: boolean | undefined;
    await act(async () => {
      ok = await result.current.launchAnimLesson('alphabet');
    });
    expect(ok).toBe(false);
    expect(p.setScr).not.toHaveBeenCalledWith('animlesson');
  });
});

// ── REACHABILITY ────────────────────────────────────────────────────────────
// A component test that supplies its own props cannot see whether the app is
// wired to it. Comments are stripped, or this file's own prose about the route
// would satisfy the match.
describe('a learner can actually get here', () => {
  it('is routed by AppRouter', () => {
    const router = strip(src('components/AppRouter.tsx'));
    expect(router).toMatch(/import\('\.\/learn\/CourseMapScreen'\)/);
    expect(router).toMatch(/currentScreen === 'coursemap'/);
    expect(router).toMatch(/<CourseMapScreen[\s\S]{0,200}onOpenLesson=\{launchAnimLesson\}/);
  });

  it('has a door on the Learn tab', () => {
    const tab = strip(src('components/learn/LearnTab.tsx'));
    expect(tab).toMatch(/setScr\('coursemap'\)/);
    expect(tab).toMatch(/data-testid="open-course-map"/);
  });

  it('belongs to the Learn tab and survives a back-navigation', async () => {
    const { SCREEN_TAB, RESTORE_SAFE_SCREENS } = await import('../lib/screenTabs');
    expect(SCREEN_TAB.coursemap).toBe('learn');
    expect(RESTORE_SAFE_SCREENS.has('coursemap')).toBe(true);
  });
});
