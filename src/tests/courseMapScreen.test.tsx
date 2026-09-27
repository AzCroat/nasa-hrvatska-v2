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
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );

    expect(await screen.findByTestId('course-map')).toBeTruthy();
    for (const u of UNITS) {
      expect(screen.getByTestId(`course-unit-${u.id}`), u.id).toBeTruthy();
    }
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('current');
    // THE COURSE OPENS ONE UNIT AT A TIME. Unit 2 waits on unit 1's test.
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('locked');
    expect(screen.getByTestId('course-unit-C2-6').getAttribute('data-unit-state')).toBe('locked');
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
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    // The authored title, verbatim — including the Croatian term. Asserting a
    // PREFIX would keep passing if the rest of the name were lost.
    expect(await screen.findByText(COURSE_UNIT_TITLES['A1-4']!.title)).toBeTruthy();
    expect(COURSE_UNIT_TITLES['A1-4']!.title).toBe('The Cases Begin (Padeži)');
    expect(screen.queryByText('A1 · Unit 4')).toBeNull();
  });

  // READING IS NOT THE BAR. Five lessons read offers the unit test and leaves the
  // unit current — the whole point of increment 2.
  it('offers the unit test once every lesson in the unit is read', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    const setScr = vi.fn();
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={setScr} />,
    );

    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('current');
    expect(screen.getByText('Unit 1 of 36')).toBeTruthy();
    expect(screen.getByTestId('course-lessons-count').textContent).toBe('5 / 180 lessons');

    const take = await screen.findByTestId('course-unit-test-A1-1');
    fireEvent.click(take);
    expect(setScr).toHaveBeenCalledWith('unittest');
    // The handoff names the unit the test is about.
    expect(sessionStorage.getItem('nh_unit_test')).toBe('A1-1');
  });

  // TEST-OUT IS THE SAME TEST AT THE SAME BAR. Offered before the reading is
  // done, because one path for everyone only works if a learner who already knows
  // A1 can clear it quickly — and a failed attempt records nothing.
  it('offers the test as a TEST-OUT before the reading is done', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.slice(0, 4).map((l) => l.id));
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    const btn = await screen.findByTestId('course-unit-test-A1-1');
    expect(btn.getAttribute('data-offer')).toBe('testout');
    expect(btn.textContent).toMatch(/Already know this/);
  });

  it('offers it as the unit’s PRIMARY action once every lesson is read', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    const btn = await screen.findByTestId('course-unit-test-A1-1');
    expect(btn.getAttribute('data-offer')).toBe('primary');
    expect(btn.textContent).toBe('Take the unit test →');
  });

  // A LOCK IS NEVER SILENT, and it says what it does NOT cover.
  it('says why a locked unit is not open, and names the library as still open', async () => {
    seedSpine();
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    fireEvent.click(
      (await screen.findByText('Asking, Doing, Denying, Describing')).closest('button')!,
    );
    const notice = await screen.findByTestId('course-unit-locked-A1-2');
    expect(notice.textContent).toMatch(/opens this after Unit 1/);
    expect(notice.textContent).toMatch(/Learning Center/);
    // No test offer on a locked unit, and its lessons are not tappable from here.
    expect(screen.queryByTestId('course-unit-test-A1-2')).toBeNull();
    expect(
      (screen.getByTestId('course-lesson-basic-questions') as HTMLButtonElement).disabled,
    ).toBe(true);
  });

  it('opens the next unit once the current one is mastered', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({
        units: {
          'A1-1': {
            passedAt: '2026-09-20',
            // BOTH HALVES plus a HELD ladder: the bar opens the next unit, retention
            // is what earns the tick.
            production: { wroteAt: '2026-09-20', spokeAt: '2026-09-20' },
            recheck: { stage: 2, dueAt: '2026-10-20', heldAt: '2026-10-20' },
          },
        },
      }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('current');
    expect(screen.getByTestId('course-unit-A1-3').getAttribute('data-unit-state')).toBe('locked');
  });

  // A LOCK MUST NEVER STRAND ANYONE: an unassemblable test stands in for the
  // ACCURACY half, and a refused evaluator for the PRODUCTION half. Both are needed
  // to open the next unit, so this seeds both.
  it('opens the next unit when neither half could be served', async () => {
    seedSpine();
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({
        units: { 'A1-1': { insufficient: true, production: { unavailable: true } } },
      }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).not.toBe(
      'locked',
    );
  });

  // AN UNASSEMBLABLE TEST ALONE IS NOT THE WHOLE BAR.
  it('keeps the next unit locked when only the accuracy half was excused', async () => {
    seedSpine();
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({ units: { 'A1-1': { insufficient: true } } }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('locked');
  });

  // MASTERED MEANS THE WHOLE BAR (increment 4): the test AND both production halves.
  // A passed test with an owed written task leaves the unit CURRENT, because that is
  // where the learner is and what the map has to ask them for.
  it('keeps a unit current when its test is passed but production is owed', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({ units: { 'A1-1': { passedAt: '2026-09-20' } } }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('current');
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('locked');
    expect(screen.getByText(/0 of 36 units mastered/)).toBeTruthy();
    // And the map asks for the owed half rather than showing a tick that is not true.
    expect(await screen.findByTestId('course-unit-write-A1-1')).toBeTruthy();
    expect(screen.queryByTestId('course-unit-mastered-A1-1')).toBeNull();
  });

  // MASTERY IS RETENTION (increment 5). The bar met makes the unit `cleared` and opens
  // the next one; the tick waits on the 7/30-day check-ups.
  it('says a unit is holding, not mastered, until its retention ladder is held', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({
        units: {
          'A1-1': {
            passedAt: '2026-09-20',
            production: { wroteAt: '2026-09-21', spokeAt: '2026-09-21' },
            recheck: { stage: 0, dueAt: '2026-09-28' },
          },
        },
      }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('cleared');
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('current');
    // A1-1's own line needs the row expanded: the CURRENT unit opens by itself and
    // that is now A1-2.
    fireEvent.click(screen.getByTestId('course-unit-A1-1').querySelector('button')!);
    expect(await screen.findByTestId('course-unit-holding-A1-1')).toBeTruthy();
    expect(screen.queryByTestId('course-unit-mastered-A1-1')).toBeNull();
    // The summary counts RETAINED units, so nothing is mastered yet. Matched on the
    // span's own text content, because JSX splits `{a} of {b} units mastered` across
    // text nodes and a regex over the document cannot span them.
    expect(screen.getByTestId('course-units-mastered').textContent).toBe('0 of 36 units mastered');
  });

  // A DUE CHECK-UP MUST BE TAKEABLE FROM THE MAP, not only from the daily session.
  // The map promised "we will check it again" and offered nothing when the day came;
  // the E2E found it, because it is the only test that walks the learner's route.
  it('offers a due check-up, and requests it in recheck mode', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({
        units: {
          'A1-1': {
            passedAt: '2026-09-01',
            production: { wroteAt: '2026-09-01', spokeAt: '2026-09-01' },
            recheck: { stage: 0, dueAt: '2020-01-01' },
          },
        },
      }),
    );
    const setScr = vi.fn();
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={setScr} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    fireEvent.click(screen.getByTestId('course-unit-A1-1').querySelector('button')!);
    const btn = await screen.findByTestId('course-unit-recheck-A1-1');
    expect(screen.getByTestId('course-unit-holding-A1-1').textContent).toMatch(/Time to check/);
    fireEvent.click(btn);
    expect(setScr).toHaveBeenCalledWith('unittest');
    // THE MARKER IS WHAT STOPS THE SCREEN RECORDING A FIRST PASS.
    expect(sessionStorage.getItem('nh_unit_test')).toBe('A1-1|recheck');
  });

  it('offers no check-up before one is due', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({
        units: {
          'A1-1': {
            passedAt: '2026-09-01',
            production: { wroteAt: '2026-09-01', spokeAt: '2026-09-01' },
            recheck: { stage: 0, dueAt: '2099-01-01' },
          },
        },
      }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    fireEvent.click(screen.getByTestId('course-unit-A1-1').querySelector('button')!);
    expect(screen.queryByTestId('course-unit-recheck-A1-1')).toBeNull();
    expect(screen.getByTestId('course-unit-holding-A1-1').textContent).toMatch(/in a few days/);
  });

  it('marks a unit mastered once the ladder is held', async () => {
    seedSpine();
    seedDone(UNITS[0]!.lessons.map((l) => l.id));
    localStorage.setItem(
      'nh_course_units',
      JSON.stringify({
        units: {
          'A1-1': {
            passedAt: '2026-09-20',
            production: { wroteAt: '2026-09-21', spokeAt: '2026-09-21' },
            // The bar opens the next unit; the HELD ladder is what earns the tick.
            recheck: { stage: 2, dueAt: '2026-10-20', heldAt: '2026-10-20' },
          },
        },
      }),
    );
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    expect(await screen.findByTestId('course-map')).toBeTruthy();
    expect(screen.getByTestId('course-unit-A1-1').getAttribute('data-unit-state')).toBe('mastered');
    expect(screen.getByTestId('course-unit-A1-2').getAttribute('data-unit-state')).toBe('current');
    expect(screen.getByText('Unit 2 of 36')).toBeTruthy();
    expect(screen.getByTestId('course-units-mastered').textContent).toBe('1 of 36 units mastered');
    // The row's own line, which needs the row expanded — the CURRENT unit is A1-2 now.
    fireEvent.click(screen.getByTestId('course-unit-A1-1').querySelector('button')!);
    expect(await screen.findByTestId('course-unit-mastered-A1-1')).toBeTruthy();
  });

  it('opens the lesson that was tapped', async () => {
    seedSpine();
    const onOpenLesson = vi.fn(async () => true);
    render(<CourseMapScreen goBack={vi.fn()} onOpenLesson={onOpenLesson} setScr={vi.fn()} />);
    const row = await screen.findByTestId('course-lesson-alphabet');
    fireEvent.click(row);
    expect(onOpenLesson).toHaveBeenCalledWith('alphabet');
    expect(screen.queryByTestId('course-open-failed')).toBeNull();
  });

  it('expands a unit the learner taps, and collapses it again', async () => {
    seedSpine();
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
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
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => false)} setScr={vi.fn()} />,
    );
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
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
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
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    await waitFor(() =>
      expect(screen.getByTestId('course-map-block').getAttribute('data-block')).toBe('unavailable'),
    );
  });

  it('says "no units yet" when the fetch succeeds with nothing', async () => {
    getCurriculumSpine.mockResolvedValue([]);
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
    await waitFor(() =>
      expect(screen.getByTestId('course-map-block').getAttribute('data-block')).toBe('empty'),
    );
  });

  it('never renders a course count it does not have', async () => {
    getCurriculumSpine.mockRejectedValue(new Error('offline'));
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
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
    render(
      <CourseMapScreen goBack={vi.fn()} onOpenLesson={vi.fn(async () => true)} setScr={vi.fn()} />,
    );
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
