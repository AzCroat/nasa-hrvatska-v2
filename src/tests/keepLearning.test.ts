// src/tests/keepLearning.test.ts
//
// KEEP LEARNING (owner decision, 2026-09-29 — sweep 216; replaced the Stretch).
//
// After the core session Home shows a continuous REVIEW flow: only taught material
// the learner has not proven, in the owner's order, in blocks of about four, each
// appended as the last finishes, with no terminal state. These tests drive the REAL
// module against the real stores and the REAL session hook, and hold the ratchets:
//   - never an untaught lesson, never a new lesson (no lesson at all);
//   - never a closed check;
//   - the order;
//   - no terminal state;
//   - a repeated screen is credited to the activity that was launched.
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  KEEP_BLOCK_LENGTH,
  buildKeepBlock,
  extendWithKeepLearning,
  gatherKeepCandidates,
  keepProgress,
  keepState,
  ledgerEvidenceLevels,
  type KeepDeps,
} from '../lib/keepLearning';
import { useDailySession, selectProductionExercise } from '../hooks/useDailySession';
import {
  newSession,
  migrateStretchPlan,
  type DailySession,
  type SessionActivity,
} from '../lib/dailySessionStore';
import { recordMasteryPass, recordRetentionResult } from '../lib/lessonRetention';
import { recordCheckAttempt } from '../lib/lessonAttempts';
import { checkLockedToday } from '../lib/checkLock';
import { recordMasteryEvent, MIN_SAMPLES } from '../lib/masteryLedger';
import { markLessonComplete, readCompletedLessons } from '../lib/curriculumProgress';
import { readCourseState } from '../lib/courseStep';
import { readCourseAhead } from '../lib/courseGate';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import { isUnlocked } from '../lib/cefr';
import { localDateStr } from '../lib/dateUtils';
import { seedCourseAt, REAL_SPINE } from './helpers/courseSeed';

const TODAY = localDateStr();

const deps = (over: Partial<KeepDeps> = {}): KeepDeps => ({
  dueReviews: 0,
  micBlocked: false,
  recentScreens: [],
  selectProduction: (o) =>
    selectProductionExercise({ ...o, micState: 'available', recentScreens: [] }),
  ...over,
});

const act_ = (id: string, screen: string, keep?: number): SessionActivity => ({
  id,
  label: id,
  screen,
  category: 'general',
  ...(keep ? { keep } : {}),
});

/** Read a lesson and pass its check, as AnimatedLesson does on a pass. */
function readAndPass(lessonId: string, at = '2026-09-20') {
  markLessonComplete(lessonId, at);
  recordMasteryPass(lessonId, { score: 6, total: 6, results: [], at });
}

/** A lesson whose check was just failed today (the concept map's `notpassed`). */
function failToday(lessonId: string) {
  recordCheckAttempt(lessonId, { score: 2, total: 6, passed: false, kind: 'lesson', missed: [0] });
}

/** A lesson passed, then shaky: its last re-check went 2 of 6. */
function makeShaky(lessonId: string) {
  readAndPass(lessonId, '2026-09-01');
  recordRetentionResult(lessonId, {
    kind: 'retention',
    results: [0, 1, 2, 3, 4, 5].map((i) => ({ idx: i, correct: i < 2 })),
    at: TODAY,
  });
}

/** Is this Keep Learning item on taught material? */
function isTaught(a: SessionActivity): boolean {
  if (a.id.startsWith('keep_drill_')) {
    const lessonId = a.id.slice('keep_drill_'.length);
    const state = readCourseState();
    const inAdvanced = state.units.some(
      (u) => state.advanced.has(u.id) && u.lessons.some((l) => l.id === lessonId),
    );
    return readCompletedLessons().has(lessonId) || inAdvanced || failedOnce(lessonId);
  }
  if (a.id.startsWith('cat_')) return !readCourseAhead().categories.has(a.category);
  return true;
}
function failedOnce(lessonId: string): boolean {
  const raw = JSON.parse(localStorage.getItem('nh_lesson_attempts') || '{"lessons":{}}') as {
    lessons: Record<string, { attempts: unknown[] }>;
  };
  return (raw.lessons[lessonId]?.attempts.length ?? 0) > 0;
}

function isLesson(a: SessionActivity): boolean {
  return a.screen === 'animlesson' || a.id.startsWith('curriculum_') || a.screen === 'unittest';
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the order (owner, 2026-09-29)', () => {
  it('a failed check leads, then due review, then shaky, then passed-not-retained, then words, then measured skills', () => {
    seedCourseAt(2);
    const unit = readCourseState().units.find((u) => u.index === 2)!;
    const [l0, l1, l2] = unit.lessons;
    // Tier 4: passed, not re-checked (due in the future).
    readAndPass(l0!.id, TODAY);
    // Tier 3: shaky.
    makeShaky(l1!.id);
    // Tier 1: failed today.
    failToday(l2!.id);
    // Tier 6: a measured weak skill.
    for (let i = 0; i < MIN_SAMPLES + 1; i++) {
      recordMasteryEvent({ level: 'A1', skill: 'speaking', score: 0.3, weight: 1 });
      recordMasteryEvent({ level: 'A1', skill: 'writing', score: 0.95, weight: 1 });
    }
    const cands = gatherKeepCandidates('A1', { activities: [] }, 1, deps({ dueReviews: 4 }));
    const tiers = cands.map((c) => c.tier);
    expect([...tiers].sort((a, b) => a - b)).toEqual(tiers); // non-decreasing
    const idx = (pred: (a: SessionActivity) => boolean) => cands.findIndex((c) => pred(c.activity));
    const failed = idx((a) => a.id === `keep_drill_${l2!.id}`);
    const shaky = idx((a) => a.id === `keep_drill_${l1!.id}`);
    const passed = idx((a) => a.id === `keep_drill_${l0!.id}`);
    const words = idx((a) => a.screen === 'review');
    const speak = idx((a) => a.id === 'keep_weak_speak');
    for (const [name, i] of Object.entries({ failed, shaky, passed, words, speak })) {
      expect(i, `${name} is a candidate`).toBeGreaterThanOrEqual(0);
    }
    expect(failed).toBeLessThan(shaky);
    expect(shaky).toBeLessThan(passed);
    expect(passed).toBeLessThan(words);
    expect(words).toBeLessThan(speak);
    // Tier 7 appears only when nothing above remains.
    expect(cands.some((c) => c.tier === 7)).toBe(false);
    // Every item says why, and none claims a percentage it did not measure.
    expect(cands[failed]!.activity.reason).toMatch(/not passed the .* check yet/);
    expect(cands[shaky]!.activity.reason).toMatch(/2 of 6/);
  });

  it('a shaky concept whose drill is locked above the course level is routed to the EASIER drill', () => {
    const lesson = REAL_SPINE.find((l) => {
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      if (!c) return false;
      const primary = CATEGORY_SCREEN_MAP[c];
      const easier = CATEGORY_EASIER_SCREEN[c];
      return (
        !!primary &&
        !!easier &&
        !!SCREEN_CEFR[primary] &&
        !isUnlocked(SCREEN_CEFR[primary]!, l.level) &&
        (!SCREEN_CEFR[easier] || isUnlocked(SCREEN_CEFR[easier]!, l.level))
      );
    });
    expect(lesson, 'the spine holds such a lesson').toBeTruthy();
    seedCourseAt(1);
    makeShaky(lesson!.id);
    const hit = gatherKeepCandidates(lesson!.level, { activities: [] }, 1, deps()).find(
      (x) => x.activity.id === `keep_drill_${lesson!.id}`,
    );
    expect(hit).toBeTruthy();
    expect(hit!.activity.screen).toBe(CATEGORY_EASIER_SCREEN[LESSON_TAUGHT_CATEGORY[lesson!.id]!]);
  });

  it('a weakness the ledger measured at ANOTHER level is still a weakness (the course started a veteran at Unit 1)', () => {
    seedCourseAt(1);
    for (let i = 0; i < MIN_SAMPLES + 3; i++) {
      recordMasteryEvent({ level: 'B2', skill: 'speaking', score: 0.45, weight: 1 });
      recordMasteryEvent({ level: 'B2', skill: 'writing', score: 0.9, weight: 1 });
    }
    expect(ledgerEvidenceLevels('A1', ['speaking', 'writing'])).toEqual(['A1', 'B2']);
    const cands = gatherKeepCandidates('A1', { activities: [] }, 1, deps());
    const weak = cands.find((c) => c.activity.id === 'keep_weak_speak');
    expect(weak, 'the B2 verdict reaches the A1 flow').toBeTruthy();
    expect(weak!.tier).toBe(6);
    expect(weak!.activity.reason).toMatch(/Speaking is the skill your practice says needs/);
    // Served at the course level: an A1-gated screen.
    expect(isUnlocked(SCREEN_CEFR[weak!.activity.screen] ?? 'A1', 'A1')).toBe(true);
  });

  it('only when nothing is unproven does it fall to guided speaking and writing — which always serve', () => {
    const cands = gatherKeepCandidates('A1', { activities: [] }, 3, deps());
    expect(cands.map((c) => c.activity.id)).toEqual(['keep_speak_3', 'keep_write_3']);
    expect(cands.every((c) => c.tier === 7)).toBe(true);
    expect(cands[0]!.activity.reason).toMatch(/Everything taught so far is proven/);
  });
});

describe('never an untaught lesson, never a new lesson, never a closed check', () => {
  it('a lesson whose check is closed today is served as its drill — never the lesson or its check', () => {
    seedCourseAt(2);
    const lesson = readCourseState().units.find((u) => u.index === 2)!.lessons[1]!;
    failToday(lesson.id);
    expect(checkLockedToday(lesson.id)).toBe(true);
    const block = buildKeepBlock(
      1,
      gatherKeepCandidates('A1', { activities: [] }, 1, deps({ dueReviews: 5 })),
    );
    expect(block.some(isLesson)).toBe(false);
    // Its missed items are not due until tomorrow, which is what the lock promises.
    expect(block.some((a) => a.screen === 'lessonreview')).toBe(false);
  });

  // The realistic early-course states, driven through the REAL hook to eight blocks.
  const STATES: Array<{ name: string; pos: number; read: number; veteran?: boolean }> = [
    { name: 'Unit 1, brand new', pos: 1, read: 0 },
    { name: 'Unit 1, two lessons passed', pos: 1, read: 2 },
    { name: 'Unit 2, one passed', pos: 2, read: 1 },
    { name: 'Unit 3, veteran history at B2', pos: 3, read: 2, veteran: true },
    { name: 'Unit 7', pos: 7, read: 0 },
  ];
  for (const s of STATES) {
    for (const xp of ['A1', 'C1']) {
      it(`${s.name}, XP ${xp}: every block holds taught review only, and there is always a next one`, () => {
        seedCourseAt(s.pos);
        const unit = readCourseState().units.find((u) => u.index === s.pos)!;
        unit.lessons.slice(0, s.read).forEach((l) => readAndPass(l.id));
        if (s.veteran) {
          for (let i = 0; i < MIN_SAMPLES + 3; i++) {
            recordMasteryEvent({ level: 'B2', skill: 'speaking', score: 0.4, weight: 1 });
            recordMasteryEvent({ level: 'B2', skill: 'listening', score: 0.5, weight: 1 });
          }
        }
        const { result } = renderHook(() => useDailySession(xp));
        const coreIds = result.current.session.activities.map((a) => a.id);
        act(() => coreIds.forEach((id) => result.current.markDone(id)));
        let sawWeak = false;
        for (let block = 1; block <= 8; block++) {
          expect(result.current.isComplete, `no terminal state at block ${block}`).toBe(false);
          expect(result.current.keep.index).toBe(block);
          const open = result.current.session.activities.filter(
            (a) => a.keep === block && !result.current.session.completedIds.includes(a.id),
          );
          expect(open.length, `block ${block} holds something`).toBeGreaterThan(0);
          expect(open.length).toBeLessThanOrEqual(KEEP_BLOCK_LENGTH);
          for (const a of open) {
            expect(isLesson(a), `${a.id} is not a lesson`).toBe(false);
            expect(isTaught(a), `${a.id} is taught material`).toBe(true);
            expect(a.reason, `${a.id} says why`).toBeTruthy();
          }
          if (open.some((a) => a.id.startsWith('keep_weak_'))) sawWeak = true;
          act(() => open.forEach((a) => result.current.markDone(a.id)));
        }
        // A veteran's measured weak skill is reached once the unproven concepts ahead
        // of it in the order have had their turn.
        if (s.veteran) expect(sawWeak, 'the B2-measured weakness is served').toBe(true);
        // The core session is untouched by the flow, and the calendar records it.
        expect(coreIds.every((id) => result.current.session.completedIds.includes(id))).toBe(true);
        const history = JSON.parse(localStorage.getItem('nh_session_history') || '{}');
        expect(history[TODAY]).toBe(true);
      });
    }
  }
});

describe('a repeated screen is credited to the activity that was launched', () => {
  it('the core’s finished Word Review does not swallow the Keep Learning one', () => {
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        ...newSession(
          'A1',
          [act_('srsreview', 'review'), act_('c2', 'alphabet')],
          ['srsreview', 'c2'],
        ),
        activities: [
          act_('srsreview', 'review'),
          act_('c2', 'alphabet'),
          act_('keep_srs_1', 'review', 1),
          act_('keep_speak_1', 'speaking_guided', 1),
        ],
      }),
    );
    // Reviews are due, so the SRS auto-skip leaves the open one alone.
    localStorage.setItem(
      'nh_sr',
      JSON.stringify({ kuća: { s: 1, d: 5, r: 1, w: 1, l: 0, b: 1, due: Date.now() - 1 } }),
    );
    const { result } = renderHook(() => useDailySession('A1'));
    act(() => result.current.markDone('review'));
    expect(result.current.session.completedIds).toContain('keep_srs_1');
  });

  it('the SRS auto-skip settles the OPEN Word Review when nothing is due, not the finished one', () => {
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        ...newSession('A1', [], []),
        activities: [
          act_('srsreview', 'review'),
          act_('keep_srs_1', 'review', 1),
          act_('keep_speak_1', 'speaking_guided', 1),
        ],
        completedIds: ['srsreview'],
      }),
    );
    const { result } = renderHook(() => useDailySession('A1'));
    expect(result.current.session.completedIds).toContain('keep_srs_1');
    expect(result.current.nextActivity?.id).toBe('keep_speak_1');
  });

  it('an id equal to a screen name does not steal the credit (writing_guided in the core, again in a block)', () => {
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        ...newSession('A1', [], []),
        activities: [
          act_('writing_guided', 'writing_guided'),
          act_('keep_write_2', 'writing_guided', 2),
          act_('keep_speak_2', 'speaking_guided', 2),
          act_('keep_x_1', 'alphabet', 1),
        ],
        completedIds: ['writing_guided', 'keep_x_1'],
      }),
    );
    const { result } = renderHook(() => useDailySession('A1'));
    act(() => result.current.markDone('writing_guided'));
    expect(result.current.session.completedIds).toContain('keep_write_2');
  });
});

describe('keepState, extendWithKeepLearning and the legacy plan', () => {
  const core = [act_('c1', 'alphabet'), act_('c2', 'genitivedrill'), act_('c3', 'cityofday')];
  const plan = (completed: string[]): DailySession => newSession('A1', core, completed);

  it('does nothing while the core is unfinished, and returns the same object', () => {
    const s = plan(['c1']);
    expect(extendWithKeepLearning(s, 'A1', deps())).toBe(s);
    expect(keepState(s)).toMatchObject({ coreComplete: false, index: 0 });
  });

  it('an EMPTY plan is not a finished core (0 >= 0 is how a credit for nothing happens)', () => {
    const s = newSession('A1', [], []);
    expect(keepState(s).coreComplete).toBe(false);
    expect(extendWithKeepLearning(s, 'A1', deps())).toBe(s);
  });

  it('appends block 1 when the core completes, and block 2 only when block 1 is done', () => {
    const s1 = extendWithKeepLearning(plan(['c1', 'c2', 'c3']), 'A1', deps());
    expect(keepState(s1).index).toBe(1);
    expect(extendWithKeepLearning(s1, 'A1', deps())).toBe(s1);
    const block1 = s1.activities.filter((a) => a.keep === 1).map((a) => a.id);
    const s2 = extendWithKeepLearning(
      { ...s1, completedIds: [...s1.completedIds, ...block1] },
      'A1',
      deps(),
    );
    expect(keepState(s2).index).toBe(2);
    expect(s2.estimatedMinutes).toBe(s2.activities.length * 5);
  });

  it('a plan written by the Stretch build is read as Keep Learning blocks', () => {
    const legacy = {
      ...plan(['c1', 'c2', 'c3']),
      stretchTarget: 1,
      activities: [...core, { ...act_('s1', 'dictation'), stretch: 1 }],
    } as unknown as DailySession;
    const m = migrateStretchPlan(legacy);
    expect(m.activities.find((a) => a.id === 's1')!.keep).toBe(1);
    expect('stretchTarget' in m).toBe(false);
    expect(keepState(m)).toMatchObject({ coreComplete: true, index: 1, blockComplete: false });
  });
});

describe('the progress line counts what the flow draws from', () => {
  it('names the unit and the unproven concepts in it, never an untaught one', () => {
    seedCourseAt(1);
    const unit = readCourseState().units[0]!;
    readAndPass(unit.lessons[0]!.id, TODAY);
    makeShaky(unit.lessons[1]!.id);
    expect(keepProgress()).toEqual({ unitIndex: 1, line: '2 concepts still to prove in Unit 1' });
  });

  it('counts a passed unit whose check-ups have not held it', () => {
    seedCourseAt(2);
    const p = keepProgress();
    expect(p.unitIndex).toBe(2);
    expect(p.line).toMatch(/^5 concepts from earlier units still to prove$/);
  });

  it('says everything is proven when nothing is taught and unproven', () => {
    seedCourseAt(1);
    expect(keepProgress().line).toBe('Everything taught so far is proven · Unit 1');
  });
});
