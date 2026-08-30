/**
 * AlphabetScreenAward.test.tsx — the alphabet quiz pays its XP (2026-08-30).
 *
 * WHY THIS FILE EXISTS. `AlphabetScreen` has always contained
 * `award(20, false, 'vocabulary')` behind a `typeof award === 'function'`
 * check, and AppRouter rendered it as `<AlphabetScreen goBack={goBack} />` —
 * no `award` prop. So the guard was always false and the call was DEAD for the
 * whole life of the screen: the quiz credited its lesson completion and its
 * daily quest, and paid nothing. Nothing failed, because a dead branch behind a
 * typeof check looks exactly like a deliberate optional dependency.
 *
 * A survey of all 397 routed screens found this was the only one: `levelquiz`
 * and `graded_input` do pass the prop, and `AIConversation` takes `award` from
 * useStats() rather than props.
 *
 * TWO THINGS ARE PINNED, and the second is the one that makes the first safe:
 *
 *   1. finishing the quiz awards XP at all — the regression that hid for years
 *   2. a REPEAT pays nothing. `awardFired` is an in-instance ref that resets on
 *      remount, so gating on it alone would have made this the one screen in
 *      the app paying 20 XP every time a learner re-enters it. The house rule
 *      is `completeExercise`'s: XP on first completion, and a repeat pays only
 *      if the screen opts in via `awardOnReplay`. This one does not.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

vi.mock('firebase/app', () => ({ initializeApp: vi.fn(() => ({})), getApps: vi.fn(() => []) }));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn(() => () => {}),
  initializeAuth: vi.fn(() => ({})),
  browserLocalPersistence: {},
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
  setPersistence: vi.fn(() => Promise.resolve()),
  GoogleAuthProvider: vi.fn(() => ({})),
}));
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  limit: vi.fn(),
  orderBy: vi.fn(),
}));

const statsMock = {
  stats: { vs: [] as string[], lc: 0 },
  setStats: vi.fn(),
  dispatch: vi.fn(),
  award: vi.fn(),
  level: 1,
  writeDelta: vi.fn(),
};
vi.mock('../context/StatsContext.tsx', () => ({
  useStats: () => statsMock,
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

import AlphabetScreen from '../components/learn/AlphabetScreen';
import { recordLessonTaught, pendingTaughtCategories } from '../lib/teachPractice';

/** Walk the 10-question quiz to the results screen. Answers do not matter — the
 *  Done button is shown for any score, and the award is not score-gated. */
function playToDone() {
  fireEvent.click(screen.getByText(/Test the Alphabet/));
  for (let q = 0; q < 10; q++) {
    // Any option finishes the question; the first one is always present.
    const opts = document.querySelectorAll('div[style*="grid"] > button');
    fireEvent.click(opts[opts.length - 1]!);
    const next = screen.queryByText(/Next →|See Results/);
    if (next) fireEvent.click(next);
  }
}

describe('the alphabet quiz pays the XP it always intended to', () => {
  beforeEach(() => {
    statsMock.stats = { vs: [], lc: 0 };
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('awards 20 XP when the learner finishes and taps Done', () => {
    const award = vi.fn();
    render(<AlphabetScreen goBack={vi.fn()} award={award} />);
    playToDone();
    fireEvent.click(screen.getByText(/✓ Done/));
    expect(
      award,
      'the alphabet quiz finished and paid nothing — the award call is dead again',
    ).toHaveBeenCalledWith(20, false, 'vocabulary');
  });

  it('pays nothing on a repeat, because the lesson is already credited', () => {
    // A learner who has finished it before: `vs` already carries the key, which
    // is the persisted first-completion marker the lc/vs write uses too.
    statsMock.stats = { vs: ['alphabet'], lc: 1 };
    const award = vi.fn();
    render(<AlphabetScreen goBack={vi.fn()} award={award} />);
    playToDone();
    fireEvent.click(screen.getByText(/✓ Done/));
    expect(
      award,
      'a repeat paid XP — this screen has no awardOnReplay opt-in, so it must not',
    ).not.toHaveBeenCalled();
  });

  it('still discharges the coupling on a repeat, even though it pays nothing', () => {
    // The clearing call sits before the award guards on purpose: the queue holds
    // an intention, and a learner retaking the quiz has satisfied it.
    statsMock.stats = { vs: ['alphabet'], lc: 1 };
    // Queue it through the REAL writer rather than hand-building the storage
    // shape — a fixture that restates production data cannot check it.
    recordLessonTaught('alphabet');
    expect(pendingTaughtCategories(), 'the fixture failed to queue anything').toContain('alphabet');

    render(<AlphabetScreen goBack={vi.fn()} award={vi.fn()} />);
    playToDone();
    fireEvent.click(screen.getByText(/✓ Done/));
    expect(
      pendingTaughtCategories(),
      'the queue still holds alphabet — a retake did the work and never cleared it',
    ).not.toContain('alphabet');
  });
});
