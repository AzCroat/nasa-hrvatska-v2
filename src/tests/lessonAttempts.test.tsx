// lessonAttempts.test.tsx — does the teaching take? (owner request, 2026-09-07)
//
// The depth contract enforces that a lesson is BUILT well. Nothing enforced —
// or even observed — whether it TEACHES well. The first-attempt outcome of the
// mastery check is the one measurement that can say, and until this store the
// fail path wrote nothing at all, so the evidence was being discarded.
//
// Four things pinned here, because each is a way to get it wrong:
//   1. The record is written on the FAIL as well as the pass. That is the whole
//      point; a store that only sees passes measures nothing.
//   2. It is a DIAGNOSTIC, not credit. The mastery gate's rule is untouched: a
//      failed check still writes no XP, no gc, no al_ key, no curriculum
//      completion, no taught-queue entry, no retention ladder.
//   3. TEST-OUT attempts are excluded from the signal. They happen before the
//      lesson is read, so counting them would report every confident learner's
//      failed test-out as a lesson that teaches badly.
//   4. A lesson never attempted is ABSENT, not a zero — "not taught yet" and
//      "taught badly" are different facts (NEVER DO 13).
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import fs from 'fs';
import path from 'path';

const setStats = vi.fn();
const writeDelta = vi.fn();
let vs: string[] = [];
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta, stats: { vs, lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
const markQuest = vi.fn();
vi.mock('../lib/quests.js', () => ({ markQuest: (...a: unknown[]) => markQuest(...a) }));
const recordLessonTaught = vi.fn();
vi.mock('../lib/teachPractice', () => ({
  recordLessonTaught: (...a: unknown[]) => recordLessonTaught(...a),
  recordScreenPractised: vi.fn(),
}));
const markLessonComplete = vi.fn();
vi.mock('../lib/curriculumProgress', () => ({
  markLessonComplete: (...a: unknown[]) => markLessonComplete(...a),
  readCurriculumSpine: () => [{ id: 'plural-nouns', title: 'Plural of Nouns', objectives: [] }],
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));

import AnimatedLesson from '../components/learn/AnimatedLesson';
import LessonAcquisitionCard from '../components/profile/LessonAcquisitionCard';
import {
  readAttempts,
  recordCheckAttempt,
  lessonQuality,
  qualityReport,
  mergeLessonAttempts,
  attemptsOrUndef,
  sanitizeAttempts,
  MAX_ATTEMPTS_PER_LESSON,
} from '../lib/lessonAttempts';
import { readRetention } from '../lib/lessonRetention';

const item = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});
const CHECK_ITEMS = [item(1, 0), item(2, 1), item(3, 2), item(4, 3), item(5, 0), item(6, 1)];
const LESSON = {
  id: 'plural-nouns',
  title: 'Plural of Nouns',
  level: 'A1',
  duration: '~6 min',
  bg: '#f0fdf4',
  color: '#16a34a',
  icon: '📚',
  slides: [
    { type: 'intro', title: 'From One to Many', body: 'b', icon: '📚' },
    { type: 'check', title: 'Mastery Check', items: CHECK_ITEMS },
    { type: 'summary', title: 'Summary', points: ['p1'] },
  ],
};

function answerCheck(wrong: number[] = []) {
  for (let i = 0; i < CHECK_ITEMS.length; i++) {
    const check = screen.getByTestId('lesson-check');
    const options = within(check).getAllByTestId('lesson-check-option');
    const n = Number(within(check).getByTestId('lesson-check-question').textContent!.slice(9));
    const correctSource = CHECK_ITEMS[n - 1]!.correct;
    const pick = wrong.includes(n)
      ? options.find((o) => Number(o.getAttribute('data-source')) !== correctSource)!
      : options.find((o) => Number(o.getAttribute('data-source')) === correctSource)!;
    fireEvent.click(pick);
    const nextQ = within(check).queryByTestId('lesson-check-next');
    if (nextQ) fireEvent.click(nextQ);
  }
}
const next = () => fireEvent.click(screen.getByTestId('lesson-nav-next'));

beforeEach(() => {
  localStorage.clear();
  vs = [];
  setStats.mockClear();
  writeDelta.mockClear();
  markQuest.mockClear();
  recordLessonTaught.mockClear();
  markLessonComplete.mockClear();
});

describe('1. the FAIL is recorded — that is the whole point', () => {
  it('a first-attempt failure is written, with the items missed', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    answerCheck([2, 4, 6]); // 3/6 — a fail
    next();
    expect(screen.getByTestId('lesson-check-failed')).toBeTruthy();

    const q = lessonQuality('plural-nouns')!;
    expect(q.firstAttemptPassed).toBe(false);
    expect(q.taught[0]!.score).toBe(3);
    expect(q.taught[0]!.total).toBe(6);
    // Source-order indices of items 2, 4 and 6.
    expect(q.firstAttemptMissed).toEqual([1, 3, 5]);
  });

  it('a first-attempt pass is recorded too, so the rate has a denominator', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    answerCheck();
    next();
    const q = lessonQuality('plural-nouns')!;
    expect(q.firstAttemptPassed).toBe(true);
    expect(q.passedOnAttempt).toBe(1);
    expect(q.firstAttemptMissed).toEqual([]);
  });

  it('a retake is a second attempt, and the FIRST one still says it failed', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    answerCheck([1, 2, 3]);
    next();
    fireEvent.click(screen.getByTestId('lesson-check-retake'));
    answerCheck();
    next();

    const q = lessonQuality('plural-nouns')!;
    expect(q.taught.length).toBe(2);
    expect(q.firstAttemptPassed).toBe(false); // the teaching did not land
    expect(q.passedOnAttempt).toBe(2); // but they got there
  });

  // The effect keys on [slide, passed], so it re-runs whenever the summary is
  // LEFT and re-entered. Without the per-attempt guard that is a second record
  // for one attempt, and the first-attempt rate drifts every time a learner
  // steps back to re-read a slide. Nav forward on the summary does NOT re-run
  // it — the first version of this test did that and proved nothing.
  it('one record per attempt — leaving the summary and returning does not double-count', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    answerCheck();
    next();
    expect(lessonQuality('plural-nouns')!.taught.length).toBe(1);

    fireEvent.click(screen.getByLabelText('Previous slide')); // back to the check
    next(); // and forward to the summary again — same attempt
    expect(lessonQuality('plural-nouns')!.taught.length).toBe(1);
  });
});

describe('2. it is a diagnostic, and credits nothing', () => {
  it('a failed check still writes no XP, no gc, no completion, no ladder', () => {
    const award = vi.fn();
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={award} />);
    next();
    answerCheck([1, 2, 3]);
    next();

    // The attempt IS recorded...
    expect(lessonQuality('plural-nouns')).toBeTruthy();
    // ...and nothing else is. This is the mastery gate's rule, unchanged.
    expect(award).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(markLessonComplete).not.toHaveBeenCalled();
    expect(recordLessonTaught).not.toHaveBeenCalled();
    expect(markQuest).not.toHaveBeenCalled();
    expect(readRetention().lessons).toEqual({});
    expect(readRetention().items).toEqual({});
  });
});

describe('3. test-out attempts are excluded from the signal', () => {
  it('a failed TEST-OUT is not a lesson that taught badly', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]);
    next();

    const q = lessonQuality('plural-nouns')!;
    expect(q.testOuts.length).toBe(1);
    expect(q.taught).toEqual([]); // nothing taught yet — they never read it
    expect(q.firstAttemptPassed).toBeNull();
    // And it is absent from the report entirely, rather than counted as a miss.
    expect(qualityReport().measured).toBe(0);
    expect(qualityReport().neededMore).toEqual([]);
  });

  it('the reading AFTER a failed test-out is the first taught attempt', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByTestId('lesson-test-out'));
    answerCheck([1, 2, 3]);
    next();
    fireEvent.click(screen.getByTestId('lesson-check-retake')); // "Take the lesson"
    next(); // intro -> check
    answerCheck();
    next();

    const q = lessonQuality('plural-nouns')!;
    expect(q.testOuts.length).toBe(1);
    expect(q.taught.length).toBe(1);
    expect(q.firstAttemptPassed).toBe(true);
    expect(qualityReport().measured).toBe(1);
  });
});

describe('4. the report states only what was measured', () => {
  const seed = (
    id: string,
    score: number,
    passed: boolean,
    kind: 'lesson' | 'testout' = 'lesson',
  ) => recordCheckAttempt(id, { score, total: 6, passed, kind, missed: [0], at: '2026-09-01' });

  it('a lesson never attempted is absent, not a zero', () => {
    seed('a', 6, true);
    const r = qualityReport();
    expect(r.measured).toBe(1);
    expect(Object.keys(readAttempts().lessons)).toEqual(['a']);
  });

  it('counts the first-attempt pass rate over measured lessons only', () => {
    seed('a', 6, true);
    seed('b', 2, false);
    seed('c', 6, true);
    const r = qualityReport();
    expect(r.measured).toBe(3);
    expect(r.firstAttemptPasses).toBe(2);
    expect(r.neededMore.map((q) => q.lessonId)).toEqual(['b']);
  });

  it('orders the strugglers worst first — never passed above passed-on-3', () => {
    recordCheckAttempt('never', { score: 1, total: 6, passed: false, kind: 'lesson', missed: [] });
    recordCheckAttempt('slow', { score: 2, total: 6, passed: false, kind: 'lesson', missed: [] });
    recordCheckAttempt('slow', { score: 3, total: 6, passed: false, kind: 'lesson', missed: [] });
    recordCheckAttempt('slow', { score: 6, total: 6, passed: true, kind: 'lesson', missed: [] });
    expect(qualityReport().neededMore.map((q) => q.lessonId)).toEqual(['never', 'slow']);
  });

  it('caps stored attempts and keeps the EARLIEST, where the signal is', () => {
    for (let i = 0; i < MAX_ATTEMPTS_PER_LESSON + 4; i++) {
      recordCheckAttempt('grind', {
        score: i,
        total: 6,
        passed: false,
        kind: 'lesson',
        missed: [],
        at: '2026-09-01',
      });
    }
    const kept = readAttempts().lessons['grind']!.attempts;
    expect(kept.length).toBe(MAX_ATTEMPTS_PER_LESSON);
    expect(kept[0]!.score).toBe(0); // the first attempt survived
  });

  it('rejects malformed records rather than trusting the blob', () => {
    const s = sanitizeAttempts({
      v: 1,
      lessons: {
        ok: {
          attempts: [
            { at: '2026-09-01', score: 4, total: 6, passed: false, kind: 'lesson', missed: [1] },
          ],
        },
        bad: { attempts: [{ at: '', score: 99, total: 0 } as never] },
      },
    } as never);
    expect(Object.keys(s.lessons)).toEqual(['ok']);
  });
});

describe('5. it syncs additively, and the first attempt survives the merge', () => {
  it('unions both devices and keeps the earliest attempts', () => {
    const local = {
      v: 1 as const,
      lessons: {
        a: {
          attempts: [
            {
              at: '2026-09-05',
              score: 6,
              total: 6,
              passed: true,
              kind: 'lesson' as const,
              missed: [],
            },
          ],
        },
      },
    };
    const remote = {
      v: 1 as const,
      lessons: {
        a: {
          attempts: [
            {
              at: '2026-09-01',
              score: 2,
              total: 6,
              passed: false,
              kind: 'lesson' as const,
              missed: [0],
            },
          ],
        },
        b: {
          attempts: [
            {
              at: '2026-09-02',
              score: 6,
              total: 6,
              passed: true,
              kind: 'lesson' as const,
              missed: [],
            },
          ],
        },
      },
    };
    const m = mergeLessonAttempts(local, remote);
    expect(Object.keys(m.lessons).sort()).toEqual(['a', 'b']);
    // The remote device saw the FIRST attempt; the merge must not lose it.
    expect(m.lessons['a']!.attempts[0]!.at).toBe('2026-09-01');
    expect(m.lessons['a']!.attempts.length).toBe(2);
    expect(lessonQuality('a', m)!.firstAttemptPassed).toBe(false);
  });

  it('is absent from the snapshot when empty, so a fresh device clobbers nothing', () => {
    expect(attemptsOrUndef()).toBeUndefined();
    recordCheckAttempt('a', { score: 6, total: 6, passed: true, kind: 'lesson', missed: [] });
    expect(attemptsOrUndef()).toBeTruthy();
  });

  it('is wired into BOTH sync points, not just the snapshot', () => {
    const snap = fs.readFileSync(path.join(__dirname, '../lib/progressSnapshot.ts'), 'utf8');
    const apply = fs.readFileSync(path.join(__dirname, '../lib/applyRemoteProgress.ts'), 'utf8');
    expect(snap).toMatch(/nh_lesson_attempts:\s*attemptsOrUndef\(\)/);
    expect(apply).toMatch(/mergeLessonAttempts\(readAttempts\(\)/);
  });
});

describe('6. the readout', () => {
  it('renders nothing before any lesson check has been taken', () => {
    const { container } = render(<LessonAcquisitionCard />);
    expect(container.firstChild).toBeNull();
  });

  it('reports the rate and names the lessons that took more than one go', () => {
    recordCheckAttempt('plural-nouns', {
      score: 3,
      total: 6,
      passed: false,
      kind: 'lesson',
      missed: [1, 3],
    });
    recordCheckAttempt('plural-nouns', {
      score: 6,
      total: 6,
      passed: true,
      kind: 'lesson',
      missed: [],
    });
    recordCheckAttempt('easy', { score: 6, total: 6, passed: true, kind: 'lesson', missed: [] });

    render(<LessonAcquisitionCard />);
    expect(screen.getByTestId('acquisition-summary').textContent).toContain('1 of 2');
    const row = screen.getByTestId('acquisition-row');
    expect(row.getAttribute('data-lesson')).toBe('plural-nouns');
    // Uses the spine title, and reports the missed questions 1-based for a human.
    expect(row.textContent).toContain('Plural of Nouns');
    expect(row.textContent).toContain('passed on attempt 2');
    expect(row.textContent).toContain('questions 2, 4');
  });

  it('a test-out-only lesson never reaches the card', () => {
    recordCheckAttempt('t', { score: 1, total: 6, passed: false, kind: 'testout', missed: [0] });
    const { container } = render(<LessonAcquisitionCard />);
    expect(container.firstChild).toBeNull();
  });

  it('is mounted in the Me tab', () => {
    const src = fs.readFileSync(
      path.join(__dirname, '../components/profile/InsightsTab.tsx'),
      'utf8',
    );
    expect(src).toMatch(/import LessonAcquisitionCard from '\.\/LessonAcquisitionCard'/);
    expect(src).toMatch(/<LessonAcquisitionCard \/>/);
  });
});
