// src/tests/teachingSlotRetry.test.tsx
//
// PRIORITY 0's SECOND CHANCE — the fix for a defect found by driving the real
// app in a browser, not by reading code.
//
// On a learner's FIRST load on a device the daily plan contained no lesson at
// all, and nothing put one back for the rest of that day. HomeTab builds the
// plan from a SYNCHRONOUS read of the cached curriculum spine at mount, while
// the spine is fetched by a fire-and-forget effect in App.tsx — so the build
// always precedes the data it needs (measured: plan at 550ms, curriculum
// request at 6474ms). The plan is persisted and invalidated only by a date or
// CEFR change, so navigation and a full reload both kept the lesson-less plan.
//
// THE FIRST VERSION OF THE FIX SILENTLY NEVER FIRED, which is why the signal is
// pinned here by DERIVATION. It listened to `poolWords`, on the reasoning that
// the content load that fills the vocabulary pool also writes the spine. It does
// not: getContent() fetches /api/content/core and getCurriculumSpine() fetches
// /api/content/curriculum — two calls kicked off together (14ms apart in the
// trace), which is exactly why they looked like one event. Only re-running the
// browser walk caught it.

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { shouldRetryTeachingSlot } from '../lib/curriculumSlot';
import {
  CURRICULUM_SPINE_EVENT,
  writeCurriculumSpine,
  hasCurriculumSpine,
} from '../lib/curriculumProgress';
import { useTeachingSlotRetry } from '../hooks/useTeachingSlotRetry';
import { localDateStr } from '../lib/dateUtils';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '../..');

const SPINE = [
  { id: 'alphabet', level: 'A1', order: 1, prerequisites: [] },
  { id: 'greetings', level: 'A1', order: 2, prerequisites: ['alphabet'] },
];

const untouched = () => ({ date: localDateStr(), completedIds: [], spineSeen: false });

beforeEach(() => {
  localStorage.clear();
});

describe('shouldRetryTeachingSlot — every clause is a reason NOT to rebuild', () => {
  const base = {
    spineSeen: false as boolean | undefined,
    sessionDate: '2026-09-22',
    today: '2026-09-22',
    completedCount: 0,
    spineAvailable: () => true,
  };

  it('rebuilds when the plan was built without a spine and one exists now', () => {
    expect(shouldRetryTeachingSlot(base)).toBe(true);
  });

  it('refuses when the plan already had a spine', () => {
    expect(shouldRetryTeachingSlot({ ...base, spineSeen: true })).toBe(false);
  });

  it('refuses a plan from another day — the rollover effect owns that', () => {
    expect(shouldRetryTeachingSlot({ ...base, sessionDate: '2026-09-21' })).toBe(false);
  });

  it('refuses a session the learner has already started', () => {
    // Re-rolling one is the 2026-05-21 "I did my activities but the card
    // forgot" incident, which is strictly worse than a missing lesson.
    expect(shouldRetryTeachingSlot({ ...base, completedCount: 1 })).toBe(false);
  });

  it('refuses when there is still no spine to teach from', () => {
    expect(shouldRetryTeachingSlot({ ...base, spineAvailable: () => false })).toBe(false);
  });

  it('does not pay for the spine read unless every cheap guard passes', () => {
    const spineAvailable = vi.fn(() => true);
    shouldRetryTeachingSlot({ ...base, completedCount: 1, spineAvailable });
    expect(spineAvailable).not.toHaveBeenCalled();
  });
});

describe('the spine write announces itself', () => {
  it('dispatches on a successful write, and hasCurriculumSpine then agrees', () => {
    const seen = vi.fn();
    window.addEventListener(CURRICULUM_SPINE_EVENT, seen);
    expect(hasCurriculumSpine()).toBe(false);
    writeCurriculumSpine(SPINE as never);
    expect(seen).toHaveBeenCalledTimes(1);
    expect(hasCurriculumSpine()).toBe(true);
    window.removeEventListener(CURRICULUM_SPINE_EVENT, seen);
  });

  it('stays silent when nothing was stored', () => {
    // A full quota must not announce a spine that is not there — a listener
    // would rebuild the plan and get no lesson, burning its one attempt.
    const seen = vi.fn();
    window.addEventListener(CURRICULUM_SPINE_EVENT, seen);
    const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    writeCurriculumSpine(SPINE as never);
    setItem.mockRestore();
    expect(seen).not.toHaveBeenCalled();
    window.removeEventListener(CURRICULUM_SPINE_EVENT, seen);
  });
});

describe('useTeachingSlotRetry', () => {
  it('rebuilds when a spine is written after the plan was committed', () => {
    const rebuild = vi.fn();
    renderHook(() => useTeachingSlotRetry(untouched(), rebuild));
    expect(rebuild).not.toHaveBeenCalled(); // nothing to teach from yet
    act(() => writeCurriculumSpine(SPINE as never));
    expect(rebuild).toHaveBeenCalledTimes(1);
  });

  it('rebuilds on mount when the spine is already cached', () => {
    writeCurriculumSpine(SPINE as never);
    const rebuild = vi.fn();
    renderHook(() => useTeachingSlotRetry(untouched(), rebuild));
    expect(rebuild).toHaveBeenCalledTimes(1);
  });

  it('fires at most once, however many spines are written', () => {
    const rebuild = vi.fn();
    renderHook(() => useTeachingSlotRetry(untouched(), rebuild));
    act(() => writeCurriculumSpine(SPINE as never));
    act(() => writeCurriculumSpine(SPINE as never));
    act(() => writeCurriculumSpine(SPINE as never));
    expect(rebuild).toHaveBeenCalledTimes(1);
  });

  it('never re-rolls a session the learner has started', () => {
    const rebuild = vi.fn();
    renderHook(() =>
      useTeachingSlotRetry(
        { date: localDateStr(), completedIds: ['a'], spineSeen: false },
        rebuild,
      ),
    );
    act(() => writeCurriculumSpine(SPINE as never));
    expect(rebuild).not.toHaveBeenCalled();
  });

  it('leaves a plan that already had a spine alone', () => {
    const rebuild = vi.fn();
    renderHook(() =>
      useTeachingSlotRetry({ date: localDateStr(), completedIds: [], spineSeen: true }, rebuild),
    );
    act(() => writeCurriculumSpine(SPINE as never));
    expect(rebuild).not.toHaveBeenCalled();
  });

  it('stops listening when unmounted', () => {
    const rebuild = vi.fn();
    const { unmount } = renderHook(() => useTeachingSlotRetry(untouched(), rebuild));
    unmount();
    act(() => writeCurriculumSpine(SPINE as never));
    expect(rebuild).not.toHaveBeenCalled();
  });
});

describe('the wiring is pinned by source, not by restating it', () => {
  const read = (p: string) => readFileSync(join(root, p), 'utf8');

  it('the retry listens for the event the spine writer exports', () => {
    // DERIVED: the name comes from curriculumProgress, so renaming it there
    // cannot leave the listener watching a string nothing dispatches.
    const writer = read('src/lib/curriculumProgress.ts');
    const name = writer.match(/CURRICULUM_SPINE_EVENT = '([^']+)'/)?.[1];
    expect(name, 'curriculumProgress must export the event name').toBeTruthy();
    expect(writer).toMatch(/dispatchEvent\(new CustomEvent\(CURRICULUM_SPINE_EVENT\)\)/);
    expect(read('src/hooks/useTeachingSlotRetry.ts')).toMatch(
      /addEventListener\(CURRICULUM_SPINE_EVENT/,
    );
  });

  it('the retry does NOT key off the content payload', () => {
    // The first version did, and never fired: getContent() and
    // getCurriculumSpine() are different fetches.
    const hook = read('src/hooks/useTeachingSlotRetry.ts');
    const code = hook.replace(/(^|[^:])\/\/.*$/gm, '$1').replace(/\/\*[\s\S]*?\*\//g, '');
    expect(code).not.toMatch(/poolWords|useContent/);
  });

  it('useDailySession records whether a spine existed at every build site', () => {
    // One constructor for all four build sites, so a field set at three of them
    // cannot be forgotten at the fourth.
    const store = read('src/lib/dailySessionStore.ts');
    expect(store).toMatch(/spineSeen: hasCurriculumSpine\(\)/);
    const hook = read('src/hooks/useDailySession.ts');
    expect(hook).not.toMatch(/date: localDateStr\(\),\s*\n\s*cefrLevel: userCefr,/);
    expect(hook).toMatch(/useTeachingSlotRetry\(/);
  });
});
