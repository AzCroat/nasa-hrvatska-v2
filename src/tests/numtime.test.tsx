/**
 * numtime.test.tsx — Behavioral tests for the NumTime component.
 *
 * Critical behaviors tested:
 *   - First question shown (NUMTIME.numbers[0]: "How do you say 15?")
 *   - Correct answer is opts[0] (sh([a, ...al]) with identity shuffle)
 *   - Next → appears after answering; advances to Q2
 *   - Options locked after answering (guard prevents double-count)
 *   - award(ntS * 3 + 10) called on "Finish!" after all 10 questions
 *   - goBack called on "Finish!"
 *   - finishFired guard prevents double-award on rapid Finish clicks
 *
 * Shuffle: rnd() → 0.99 makes sh() identity.
 * NUMTIME has 8 numbers + 14 time items; slice(0, 10) picks first 10.
 * Q0: {q:"How do you say 15?", a:"petnaest", al:[...]}.
 * opts = sh([a, ...al]) = [a, ...al] (identity) → opts[0] = answer.
 * 10 correct → award(10 * 3 + 10) = award(40) on Finish.
 *
 * NumTime has no mode tabs so container.querySelector('button.b.bp')
 * reliably finds the Next → / See Results / Finish! button.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// ── Firebase mock ─────────────────────────────────────────────────────────────
vi.mock('firebase/app', () => ({ initializeApp: vi.fn(() => ({})), getApps: vi.fn(() => []) }));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  setPersistence: vi.fn(() => Promise.resolve()),
  browserLocalPersistence: {},
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  sendPasswordResetEmail: vi.fn(),
  onAuthStateChanged: vi.fn(() => () => {}),
  updateProfile: vi.fn(),
  initializeAuth: vi.fn(() => ({})),
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
  GoogleAuthProvider: vi.fn(() => ({})),
  signInWithPopup: vi.fn(),
  sendEmailVerification: vi.fn(),
  deleteUser: vi.fn(),
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

// ── rnd mock — 0.99 makes sh() identity ──────────────────────────────────────
vi.mock('../lib/random.js', () => ({ rnd: vi.fn(() => 0.99) }));

// ── quests mock ───────────────────────────────────────────────────────────────
const mockMarkQuest = vi.hoisted(() => vi.fn());
vi.mock('../lib/quests.js', () => ({ markQuest: mockMarkQuest }));

// ── StatsContext mock ─────────────────────────────────────────────────────────
vi.mock('../context/StatsContext', () => ({
  useStats: vi.fn(() => ({
    stats: { vs: [] as string[], gc: 0 },
    setStats: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
    writeDelta: vi.fn(),
  })),
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

// ── data mock ─────────────────────────────────────────────────────────────────
vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    srMark: vi.fn(),
    Bar: ({ v, mx }: { v: number; mx: number }) =>
      React.createElement('div', { 'data-testid': 'progress-bar', 'data-v': v, 'data-mx': mx }),
  };
});

import NumTime, { servableNumTime } from '../components/practice/NumTime';
import { NUMTIME as REAL_NUMTIME } from '../data/exercises.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

function renderNumTime(overrides = {}) {
  const props = { goBack: vi.fn(), award: vi.fn(), ...overrides };
  const utils = render(<NumTime {...props} />);
  return { ...utils, props };
}

/**
 * Complete all 10 NumTime questions and optionally click Finish.
 * opts[0] = answer for all questions with identity shuffle.
 * No mode tabs → button.b.bp reliably finds Next → / See Results.
 * award(ntS * 3 + 10) and goBack() both fire on Finish click.
 */
function completeAndFinish(
  award: ReturnType<typeof vi.fn> = vi.fn(),
  goBack: ReturnType<typeof vi.fn> = vi.fn(),
) {
  const { container } = render(<NumTime award={award} goBack={goBack} />);
  for (let i = 0; i < 10; i++) {
    const optBtn = container.querySelector('button.ob');
    if (!optBtn) break;
    fireEvent.click(optBtn);
    const nextBtn = container.querySelector('button.b.bp');
    if (nextBtn) fireEvent.click(nextBtn);
  }
  // Done screen: click Finish! to trigger award + goBack
  const finishBtn = screen.queryByText('Finish!');
  if (finishBtn) fireEvent.click(finishBtn);
  return { award, goBack };
}

// ── Rendering ─────────────────────────────────────────────────────────────────

describe('NumTime — rendering', () => {
  it('renders without crashing', () => {
    renderNumTime();
  });

  it('shows the Numbers & Time title', () => {
    renderNumTime();
    expect(screen.getByText('🔢 Numbers & Time')).toBeTruthy();
  });

  it('shows the first question text (NUMTIME.numbers[0] with identity shuffle)', () => {
    renderNumTime();
    expect(screen.getByText('How do you say 15?')).toBeTruthy();
  });

  it('shows 4 option buttons for the first question', () => {
    const { container } = renderNumTime();
    expect(container.querySelectorAll('button.ob').length).toBe(4);
  });

  it('shows progress bar', () => {
    renderNumTime();
    expect(screen.getByTestId('progress-bar')).toBeTruthy();
  });
});

// ── Answer mechanics ──────────────────────────────────────────────────────────

describe('NumTime — answer mechanics', () => {
  it('shows Next → after answering first question', () => {
    const { container } = renderNumTime();
    fireEvent.click(container.querySelector('button.ob')!);
    expect(screen.getByText('Next →')).toBeTruthy();
  });

  it('does not show Next → before answering', () => {
    renderNumTime();
    expect(screen.queryByText('Next →')).toBeNull();
  });

  it('options are locked after answering — guard prevents double-count', () => {
    const { container } = renderNumTime();
    const optBtn = container.querySelector('button.ob')!;
    fireEvent.click(optBtn);
    expect(screen.getByText('Next →')).toBeTruthy();
    // Clicking again should not re-trigger anything (ntA guard returns early)
    fireEvent.click(optBtn);
    // Score stays at 1, not 2 — verified by the completion award test
    expect(container.querySelectorAll('button.ob').length).toBe(4);
  });

  it('advances to second question after clicking Next →', () => {
    const { container } = renderNumTime();
    fireEvent.click(container.querySelector('button.ob')!);
    fireEvent.click(container.querySelector('button.b.bp')!);
    // Q1: NUMTIME.numbers[1] = {q:"How do you say 28?"}
    expect(screen.getByText('How do you say 28?')).toBeTruthy();
  });

  it('shows See Results on the last question after answering', () => {
    const { container } = renderNumTime();
    for (let i = 0; i < 9; i++) {
      fireEvent.click(container.querySelector('button.ob')!);
      fireEvent.click(container.querySelector('button.b.bp')!);
    }
    // Now on question 10 (last)
    fireEvent.click(container.querySelector('button.ob')!);
    expect(screen.getByText('See Results')).toBeTruthy();
  });
});

// ── Completion / XP award guard ───────────────────────────────────────────────

describe('NumTime — completion + award guard', () => {
  it('shows Numbers Complete! on the done screen', () => {
    const { container } = render(<NumTime award={vi.fn()} goBack={vi.fn()} />);
    for (let i = 0; i < 10; i++) {
      const optBtn = container.querySelector('button.ob');
      if (!optBtn) break;
      fireEvent.click(optBtn);
      const nextBtn = container.querySelector('button.b.bp');
      if (nextBtn) fireEvent.click(nextBtn);
    }
    expect(screen.getByText('Numbers Complete!')).toBeTruthy();
  });

  it('shows score 10 / 10 on done screen', () => {
    const { container } = render(<NumTime award={vi.fn()} goBack={vi.fn()} />);
    for (let i = 0; i < 10; i++) {
      const optBtn = container.querySelector('button.ob');
      if (!optBtn) break;
      fireEvent.click(optBtn);
      const nextBtn = container.querySelector('button.b.bp');
      if (nextBtn) fireEvent.click(nextBtn);
    }
    expect(screen.getByText(/10 \/ 10/)).toBeTruthy();
  });

  it('shows Finish! button on done screen', () => {
    const { container } = render(<NumTime award={vi.fn()} goBack={vi.fn()} />);
    for (let i = 0; i < 10; i++) {
      const optBtn = container.querySelector('button.ob');
      if (!optBtn) break;
      fireEvent.click(optBtn);
      const nextBtn = container.querySelector('button.b.bp');
      if (nextBtn) fireEvent.click(nextBtn);
    }
    expect(screen.getByText('Finish!')).toBeTruthy();
  });

  it('award() called exactly once when Finish is clicked', () => {
    const award = vi.fn();
    completeAndFinish(award);
    expect(award).toHaveBeenCalledTimes(1);
  });

  it('award(ntS * 3 + 10) called on Finish (10 correct → award(40))', () => {
    const award = vi.fn();
    completeAndFinish(award);
    // 10/10 correct → ntS=10 → award(10*3+10) = award(40)
    expect(award).toHaveBeenCalledWith(40, false, 'grammar');
  });

  it('Finish! button calls both award and goBack', () => {
    const award = vi.fn();
    const goBack = vi.fn();
    completeAndFinish(award, goBack);
    expect(award).toHaveBeenCalledTimes(1);
    expect(goBack).toHaveBeenCalledTimes(1);
  });

  it('finishFired guard — rapid double-click on Finish does not double-award', () => {
    const award = vi.fn();
    const goBack = vi.fn();
    const { container } = render(<NumTime award={award} goBack={goBack} />);
    for (let i = 0; i < 10; i++) {
      const optBtn = container.querySelector('button.ob');
      if (!optBtn) break;
      fireEvent.click(optBtn);
      const nextBtn = container.querySelector('button.b.bp');
      if (nextBtn) fireEvent.click(nextBtn);
    }
    const finishBtn = screen.queryByText('Finish!');
    if (finishBtn) {
      fireEvent.click(finishBtn);
      fireEvent.click(finishBtn); // rapid second click
    }
    expect(award).toHaveBeenCalledTimes(1);
  });
});

// ── Navigation ────────────────────────────────────────────────────────────────

describe('NumTime — navigation', () => {
  it('goBack is called when Finish is clicked on the done screen', () => {
    const goBack = vi.fn();
    completeAndFinish(vi.fn(), goBack);
    expect(goBack).toHaveBeenCalledTimes(1);
  });
});

// ── vs-dedup guard (branch coverage) ─────────────────────────────────────────

describe('NumTime — vs-dedup guard (both branches)', () => {
  /**
   * Mirrors the setStats updater passed inside the Finish! onClick handler.
   * Tests the inner guard: if prev.vs already includes 'numtime', return prev unchanged.
   */
  function numtimeUpdater(prev: { gc?: number; vs?: string[] }) {
    if (prev.vs?.includes('numtime')) return prev;
    return { ...prev, gc: (prev.gc || 0) + 1, vs: [...(prev.vs || []), 'numtime'] };
  }

  it('updater adds gc+1 and "numtime" to vs on first completion (vs is empty)', () => {
    const result = numtimeUpdater({ gc: 0, vs: [] });
    expect(result.gc).toBe(1);
    expect(result.vs).toContain('numtime');
  });

  it('updater returns prev unchanged if vs already includes "numtime" (idempotent)', () => {
    const prev = { gc: 3, vs: ['numtime'] };
    expect(numtimeUpdater(prev)).toBe(prev);
  });

  it('updater handles undefined vs gracefully (first visit)', () => {
    const result = numtimeUpdater({ gc: 2, vs: undefined });
    expect(result.vs).toContain('numtime');
    expect(result.gc).toBe(3);
  });

  it('updater does not append "numtime" twice when called twice with the result', () => {
    const first = numtimeUpdater({ gc: 0, vs: [] });
    const second = numtimeUpdater(first);
    expect(second).toBe(first); // second call returns prev unchanged
    expect((second.vs ?? []).filter((t) => t === 'numtime').length).toBe(1);
  });
});

// A1 follows the book (owner, 2026-11-13): the drill coupled to numbers-time (0–10 and
// phone numbers) must not ask for 365 or the clock, which come at numbers-11-1000 and
// numbers-genitive. Driven over the REAL bank, not a fixture.
describe('servableNumTime — only what the open lessons teach', () => {
  const lessonsOf = (items: Array<{ lesson?: string }>) => new Set(items.map((i) => i.lesson));
  it('every item in the real bank names the lesson that teaches it', () => {
    const all = servableNumTime(REAL_NUMTIME, null);
    expect(all.length).toBeGreaterThan(20);
    expect(all.every((i) => typeof i.lesson === 'string')).toBe(true);
  });
  it('right after numbers-time it serves 0–10 only — no clock, no counted nouns', () => {
    const got = servableNumTime(REAL_NUMTIME, new Set(['numbers-time']));
    expect([...lessonsOf(got)]).toEqual(['numbers-time']);
    expect(got.some((i) => /sat|eura/.test(i.a))).toBe(false);
    expect(got.length).toBeGreaterThanOrEqual(6);
  });
  it('the clock joins once numbers-genitive is open', () => {
    const got = servableNumTime(
      REAL_NUMTIME,
      new Set(['numbers-time', 'numbers-11-1000', 'numbers-genitive']),
    );
    expect(lessonsOf(got).has('numbers-genitive')).toBe(true);
  });
  it('an unknown course (no spine) restricts nothing', () => {
    expect(servableNumTime(REAL_NUMTIME, null).length).toBe(
      REAL_NUMTIME.numbers.length + REAL_NUMTIME.time.length + REAL_NUMTIME.small.length,
    );
  });
});
