// src/tests/produceSlot.test.tsx — on a LESSON day the production slot is the
// lesson's own produce step (Daily Session redesign, increment 2a; owner decision 4,
// 2026-09-28: "production on lesson days").
//
// Driven through the REAL builder over the REAL 180-lesson spine, the real course
// stores, the real hook (for the credit effect) and the real standalone screen.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, renderHook, act } from '@testing-library/react';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));
const aiPostMock = vi.fn();
vi.mock('../lib/aiPost', () => ({ _aiPost: (...a: unknown[]) => aiPostMock(...a) }));

import {
  buildSessionActivities,
  useDailySession,
  PRODUCTION_SCREEN_IDS,
} from '../hooks/useDailySession';
import { newSession } from '../lib/dailySessionStore';
import { creditProducedSlots, selectLessonProduceSlot, pickProduceKind } from '../lib/produceSlot';
import { recordMasteryEvent } from '../lib/masteryLedger';
import {
  lessonProduceActivityId,
  lessonIdOfProduceActivity,
  readLessonProduceRequest,
  requestLessonProduce,
  LESSON_PRODUCE_REQUEST_KEY,
  lastProducedKind,
} from '../lib/lessonProduceRequest';
import { rearmCourseHandoff } from '../lib/curriculumSlot';
import { recordMasteryPass, markLessonProduced } from '../lib/lessonRetention';
import { markLessonComplete } from '../lib/curriculumProgress';
import { readCourseState } from '../lib/courseStep';
import { seedCourseAt, readWholeUnit } from './helpers/courseSeed';
import LessonProduceScreen from '../components/learn/LessonProduceScreen';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.clearAllMocks();
});

/** The lesson the course serves at unit 1, and a "passed" retention record for it. */
function dayOneLesson(): string {
  return readCourseState().units[0]!.lessons[0]!.id;
}
function passLesson(lessonId: string): void {
  markLessonComplete(lessonId, '2026-09-28');
  recordMasteryPass(lessonId, { score: 6, total: 6, results: [] });
}

describe('the builder — which day shapes carry the produce step', () => {
  it('a lesson day: the production slot IS the lesson’s produce step, and the pool pick is gone', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.screen).toBe('animlesson');
    const produce = acts.find((a) => a.screen === 'lessonproduce');
    expect(produce).toBeDefined();
    expect(produce!.id).toBe(lessonProduceActivityId(lessonId));
    expect(produce!.category).toBe('writing');
    expect(produce!.label.startsWith('Write it: ')).toBe(true);
    expect(produce!.reason).toMatch(/two or three sentences/);
    // No pool production beside it.
    expect(acts.filter((a) => PRODUCTION_SCREEN_IDS.has(a.screen))).toEqual([]);
    // The handoff names the lesson.
    expect(readLessonProduceRequest()).toEqual({ lessonId, kind: 'write' });
  });

  it('a B1 unit’s lesson day keeps its conversation anchor beside the produce step (decision 3)', () => {
    seedCourseAt(13);
    const acts = buildSessionActivities('A1');
    expect(acts.some((a) => a.screen === 'lessonproduce')).toBe(true);
    expect(acts.some((a) => a.screen === 'dialogue')).toBe(true);
  });

  it('a unit-test day keeps the POOL pick — no second production task', () => {
    seedCourseAt(1);
    readWholeUnit(1);
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.screen).toBe('unittest');
    expect(acts.some((a) => a.screen === 'lessonproduce')).toBe(false);
    expect(acts.some((a) => PRODUCTION_SCREEN_IDS.has(a.screen))).toBe(true);
  });

  it('the length contract is untouched: the produce step takes the pool pick’s slot', () => {
    seedCourseAt(1);
    const lessonDay = buildSessionActivities('A1').length;
    localStorage.clear();
    seedCourseAt(1);
    readWholeUnit(1);
    const testDay = buildSessionActivities('A1').length;
    expect(lessonDay).toBe(testDay);
  });

  it('selectLessonProduceSlot is null unless the FIRST P0 slot is the lesson', () => {
    expect(selectLessonProduceSlot([], 'A1')).toBeNull();
    expect(
      selectLessonProduceSlot(
        [{ id: 'course_unit_test_A1-1', label: 'Unit 1 test', screen: 'unittest' }],
        'A1',
      ),
    ).toBeNull();
    // A re-check day puts the lesson SECOND — no produce step (decision 4's scope).
    expect(
      selectLessonProduceSlot(
        [
          { id: 'course_unit_recheck_A1-1', label: 'Unit 1 check-up', screen: 'unittest' },
          { id: 'curriculum_alphabet', label: 'Alphabet', screen: 'animlesson' },
        ],
        'A1',
      ),
    ).toBeNull();
    const slot = selectLessonProduceSlot(
      [{ id: 'curriculum_alphabet', label: 'Alphabet', screen: 'animlesson' }],
      'A1',
    );
    expect(slot?.id).toBe('curriculum_produce_write_alphabet');
  });
});

describe('the handoff', () => {
  it('rearmCourseHandoff re-arms the produce request from the activity id', () => {
    rearmCourseHandoff('curriculum_produce_speak_present-tense-verbs');
    expect(sessionStorage.getItem(LESSON_PRODUCE_REQUEST_KEY)).toBe('present-tense-verbs|speak');
    // A 2a-shaped id (no kind) is a WRITE step — that is what it was.
    rearmCourseHandoff('curriculum_produce_present-tense-verbs');
    expect(sessionStorage.getItem(LESSON_PRODUCE_REQUEST_KEY)).toBe('present-tense-verbs|write');
    expect(lessonIdOfProduceActivity('curriculum_produce_write_x')).toEqual({
      lessonId: 'x',
      kind: 'write',
    });
    expect(lessonIdOfProduceActivity('curriculum_produce_speak_x')).toEqual({
      lessonId: 'x',
      kind: 'speak',
    });
    expect(lessonIdOfProduceActivity('curriculum_produce_x')).toEqual({
      lessonId: 'x',
      kind: 'write',
    });
    expect(lessonIdOfProduceActivity('curriculum_practice_x')).toBeNull();
    expect(lessonIdOfProduceActivity('curriculum_produce_')).toBeNull();
  });
});

describe('credit follows the work — a step written on the lesson page settles the slot', () => {
  it('creditProducedSlots marks the slot done only once `produced` is recorded', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    const session = newSession('A1', buildSessionActivities('A1'), []);
    const produceId = lessonProduceActivityId(lessonId);
    expect(session.activities.some((a) => a.id === produceId)).toBe(true);
    // Nothing recorded → the very same object back (a state setter no-ops).
    expect(creditProducedSlots(session)).toBe(session);
    // A pass without a written step still records nothing.
    passLesson(lessonId);
    expect(creditProducedSlots(session)).toBe(session);
    // The graded submission on the lesson page → the slot is done.
    markLessonProduced(lessonId, 80);
    const after = creditProducedSlots(session);
    expect(after.completedIds).toContain(produceId);
  });

  it('the hook credits the slot on its own (the effect), like the SRS auto-skip', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    const { result, rerender } = renderHook(() => useDailySession('A1'));
    const produceId = lessonProduceActivityId(lessonId);
    expect(result.current.session.activities.some((a) => a.id === produceId)).toBe(true);
    expect(result.current.session.completedIds).not.toContain(produceId);
    act(() => {
      passLesson(lessonId);
      markLessonProduced(lessonId, 75);
      // Something the hook re-renders on: completing the lesson slot, as the app does.
      result.current.markDone('animlesson');
    });
    rerender();
    expect(result.current.session.completedIds).toContain(produceId);
  });
});

describe('the standalone screen — four honest states', () => {
  const goBack = vi.fn();
  const award = vi.fn();

  it('no handoff → says so, never a blank page', () => {
    render(<LessonProduceScreen goBack={goBack} award={award} />);
    expect(screen.getByTestId('lesson-produce-none')).toBeTruthy();
  });

  it('lesson not read → "finish the lesson first", with the lesson one tap away', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    requestLessonProduce(lessonId);
    const open = vi.fn();
    render(<LessonProduceScreen goBack={goBack} award={award} onOpenLesson={open} />);
    expect(screen.getByTestId('lesson-produce-unread')).toBeTruthy();
    fireEvent.click(screen.getByTestId('lesson-produce-open-lesson'));
    expect(open).toHaveBeenCalledWith(lessonId);
    expect(screen.queryByTestId('produce-step')).toBeNull();
  });

  it('already written → the score, and the session slot is freed on open', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    markLessonProduced(lessonId, 82);
    requestLessonProduce(lessonId);
    sessionStorage.setItem('nh_session_started', 'lessonproduce');
    render(<LessonProduceScreen goBack={goBack} award={award} />);
    expect(screen.getByTestId('lesson-produce-done')).toHaveTextContent('82/100');
    expect(sessionStorage.getItem('nh_session_completed')).toBe('lessonproduce');
    expect(award).not.toHaveBeenCalled();
  });

  it('otherwise → the step; a graded submission awards, records and frees the slot', async () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    // The day's session is built BEFORE the lesson is read (that is when it is built
    // in the app); once the lesson is complete the course serves the next one.
    const session = newSession('A1', buildSessionActivities('A1'), []);
    passLesson(lessonId);
    requestLessonProduce(lessonId);
    sessionStorage.setItem('nh_session_started', 'lessonproduce');
    aiPostMock.mockResolvedValue({
      ok: true,
      json: async () => ({ score: 80, corrected: 'Zovem se Ana.', changes: [] }),
    });
    render(<LessonProduceScreen goBack={goBack} award={award} />);
    expect(screen.getByTestId('produce-step')).toBeTruthy();
    fireEvent.change(screen.getByTestId('produce-input'), {
      target: {
        value: 'Zovem se Ana i živim u Zagrebu. Imam brata i sestru i volim učiti hrvatski jezik.',
      },
    });
    fireEvent.click(screen.getByTestId('produce-submit'));
    await waitFor(() => expect(screen.getByTestId('produce-result')).toBeTruthy());
    expect(award).toHaveBeenCalledWith(13, false, 'writing');
    expect(sessionStorage.getItem('nh_session_completed')).toBe('lessonproduce');
    expect(creditProducedSlots(session).completedIds).toContain(lessonProduceActivityId(lessonId));
  });

  it('an evaluator refusal names its cause and frees the slot — the learner wrote', async () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    requestLessonProduce(lessonId);
    sessionStorage.setItem('nh_session_started', 'lessonproduce');
    aiPostMock.mockResolvedValue({
      ok: false,
      status: 503,
      headers: { get: () => 'application/json' },
      json: async () => ({ error: 'budget-paused' }),
      text: async () => '{"error":"budget-paused"}',
      clone() {
        return this;
      },
    });
    render(<LessonProduceScreen goBack={goBack} award={award} />);
    fireEvent.change(screen.getByTestId('produce-input'), {
      target: {
        value: 'Zovem se Ana i živim u Zagrebu. Imam brata i sestru i volim učiti hrvatski jezik.',
      },
    });
    fireEvent.click(screen.getByTestId('produce-submit'));
    await waitFor(() => expect(screen.getByTestId('produce-failed')).toBeTruthy());
    expect(sessionStorage.getItem('nh_session_completed')).toBe('lessonproduce');
    expect(award).not.toHaveBeenCalled();
  });

  it('inside a LESSON the step does not touch a slot that is not its own', async () => {
    // Started screen is the lesson: the signal is a no-op, and the Home effect
    // credits the produce slot from the record instead.
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    requestLessonProduce(lessonId);
    sessionStorage.setItem('nh_session_started', 'animlesson');
    aiPostMock.mockResolvedValue({ ok: true, json: async () => ({ score: 70, changes: [] }) });
    render(<LessonProduceScreen goBack={goBack} award={award} />);
    fireEvent.change(screen.getByTestId('produce-input'), {
      target: {
        value: 'Zovem se Ana i živim u Zagrebu. Imam brata i sestru i volim učiti hrvatski jezik.',
      },
    });
    fireEvent.click(screen.getByTestId('produce-submit'));
    await waitFor(() => expect(screen.getByTestId('produce-result')).toBeTruthy());
    expect(sessionStorage.getItem('nh_session_completed')).toBeNull();
  });
});

// ── Increment 2b: the same step, SPOKEN — and which modality the day asks for.
describe('2b — write or speak', () => {
  it('opens on WRITE, then alternates from the last graded step when the ledger has no verdict', () => {
    expect(lastProducedKind()).toBeNull();
    expect(pickProduceKind('A1')).toBe('write');
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    markLessonProduced(lessonId, 80, '2026-09-27', 'write');
    expect(lastProducedKind()).toBe('write');
    expect(pickProduceKind('A1')).toBe('speak');
    markLessonProduced(lessonId, 70, '2026-09-28', 'speak');
    expect(pickProduceKind('A1')).toBe('write');
  });

  it('the ledger’s weaker production skill decides when it has one', () => {
    // Enough WRITING evidence to be tested and strong; no speaking at all → the
    // ledger names speaking as weakest (an unmeasured skill scores maximum need).
    for (let i = 0; i < 6; i++) {
      recordMasteryEvent({ level: 'A1', skill: 'writing', score: 0.9, weight: 2 });
      recordMasteryEvent({ level: 'A1', skill: 'speaking', score: 0.3, weight: 2 });
    }
    expect(pickProduceKind('A1')).toBe('speak');
  });

  it('a SPEAK slot carries category speaking, a "Say it" label, and its kind in the handoff', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    markLessonProduced(lessonId, 80, '2026-09-27', 'write'); // last was write → speak today
    localStorage.removeItem('nh_daily_session');
    const acts = buildSessionActivities('A1');
    const produce = acts.find((a) => a.screen === 'lessonproduce')!;
    expect(produce.category).toBe('speaking');
    expect(produce.label.startsWith('Say it: ')).toBe(true);
    expect(readLessonProduceRequest()?.kind).toBe('speak');
    expect(lessonIdOfProduceActivity(produce.id)?.kind).toBe('speak');
  });

  it('a written step settles a SPEAK slot too — the work is production on the concept', () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    const session = newSession(
      'A1',
      [
        {
          id: lessonProduceActivityId(lessonId, 'speak'),
          label: 'Say it',
          screen: 'lessonproduce',
          category: 'speaking',
        },
      ],
      [],
    );
    passLesson(lessonId);
    markLessonProduced(lessonId, 80, undefined, 'write');
    expect(creditProducedSlots(session).completedIds).toContain(
      lessonProduceActivityId(lessonId, 'speak'),
    );
  });

  it('the spoken step: typed transcript → the speaking coach; awards speaking, records the kind, frees the slot', async () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    requestLessonProduce(lessonId, 'speak');
    sessionStorage.setItem('nh_session_started', 'lessonproduce');
    aiPostMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        scores: { range: 0.8, accuracy: 0.7, fluency: 0.75, task: 0.9 },
        overall: 0.79,
        errors: [],
        advice: 'Pazi na akuzativ.',
        encouragement: 'Bravo!',
      }),
    });
    const award = vi.fn();
    render(<LessonProduceScreen goBack={vi.fn()} award={award} />);
    expect(screen.getByText('Now say it')).toBeTruthy();
    // jsdom has no recogniser: no mic button, and the typed path counts the same.
    expect(screen.queryByTestId('produce-mic')).toBeNull();
    fireEvent.change(screen.getByTestId('produce-input'), {
      target: {
        value: 'Zovem se Ana i živim u Zagrebu. Imam brata i sestru i volim učiti hrvatski jezik.',
      },
    });
    fireEvent.click(screen.getByTestId('produce-submit'));
    await waitFor(() => expect(screen.getByTestId('produce-result')).toBeTruthy());
    expect(aiPostMock.mock.calls[0]![0]).toBe('/api/speaking-coach');
    expect(screen.getByTestId('produce-advice')).toHaveTextContent('Pazi na akuzativ.');
    expect(award).toHaveBeenCalledWith(13, false, 'speaking');
    expect(sessionStorage.getItem('nh_session_completed')).toBe('lessonproduce');
    expect(lastProducedKind()).toBe('speak');
  });

  it('a coach refusal on the spoken step names its cause and frees the slot', async () => {
    seedCourseAt(1);
    const lessonId = dayOneLesson();
    passLesson(lessonId);
    requestLessonProduce(lessonId, 'speak');
    sessionStorage.setItem('nh_session_started', 'lessonproduce');
    aiPostMock.mockResolvedValue({
      ok: false,
      status: 429,
      headers: { get: () => 'application/json' },
      json: async () => ({ error: 'daily_limit' }),
      text: async () => '{"error":"daily_limit"}',
      clone() {
        return this;
      },
    });
    const award = vi.fn();
    render(<LessonProduceScreen goBack={vi.fn()} award={award} />);
    fireEvent.change(screen.getByTestId('produce-input'), {
      target: {
        value: 'Zovem se Ana i živim u Zagrebu. Imam brata i sestru i volim učiti hrvatski jezik.',
      },
    });
    fireEvent.click(screen.getByTestId('produce-submit'));
    await waitFor(() => expect(screen.getByTestId('produce-failed')).toBeTruthy());
    expect(sessionStorage.getItem('nh_session_completed')).toBe('lessonproduce');
    expect(award).not.toHaveBeenCalled();
    expect(lastProducedKind()).toBeNull();
  });
});
