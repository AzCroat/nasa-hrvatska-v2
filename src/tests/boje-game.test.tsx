/**
 * boje-game.test.tsx — Behavioral tests for the BojeGame component.
 *
 * Critical behaviors tested:
 *   - Learn screen shows colors grid and mode tabs
 *   - Quiz starts (Start Quiz → / ✏️ Quiz button)
 *   - First question loaded lazily via setTimeout (awaited with async act)
 *   - award(5) called per correct answer during quiz
 *   - award(bjSc * 2) called when "See Results" clicked on last question
 *   - "🏠 Done" on results screen calls goBack() only (NOT award())
 *   - "📖 Review" on results screen returns to learn mode
 *   - THE COMPLETION CONTRACT (added sweep 98, 2026-09-24): gc, the `boje` vs
 *     tag, writeDelta and the vocab quest — and the 75% gate in the direction
 *     that matters, where a failing run must record NONE of them.
 *
 * Shuffle is deterministic: rnd() → 0.99 makes sh() identity.
 * BOJE.quiz has 15 items. Q0: {noun:"Ruža", answer:"crvena", g:"f"}.
 * Options for Q0 (g="f"): sh(["crvena", "žuta", "plava", "zelena"]) = identity.
 * opts[0] = "crvena" = answer → clicking first .ob button is always correct.
 * 15 correct → award(30) fired on "See Results" click (bjSc * 2 = 15 * 2 = 30).
 *
 * Lazy load pattern: first render shows "Loading...", setTimeout(fn, 0) fires.
 * Tests use waitFor() to poll until Loading... disappears — each waitFor attempt
 * is wrapped in act(), which flushes the sBjOpts state update when it fires.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

// ── StatsContext mock — provides useStats() without needing a Provider ────────
//
// CAPTURABLE, AND THAT IS THE POINT (sweep 98, 2026-09-24). This mock used to
// return a FRESH object with brand-new inline `vi.fn()`s on every call, so
// nothing outside could ever see `setStats` or `writeDelta` — the screen's
// entire completion contract (gc, the `boje` vs tag, the quest) was asserted
// NOWHERE, while the per-answer `award(5)` calls were asserted eight times over.
// One hoisted object, so a test can both seed `stats` and read what was written.
const statsMock = vi.hoisted(() => ({
  stats: { vs: [] as string[], gc: 0 },
  setStats: vi.fn(),
  writeDelta: vi.fn(),
}));
vi.mock('../context/StatsContext', () => ({ useStats: () => statsMock }));

// ── quests mock ───────────────────────────────────────────────────────────────
// The `.js` specifier DOES intercept `useExerciseCompletion`'s extensionless
// `from '../lib/quests'` — verified by probe, not assumed, because a mock that
// silently fails to apply would make the assertion below vacuous in the one
// direction no green run can show.
const questsMock = vi.hoisted(() => ({ markQuest: vi.fn() }));
vi.mock('../lib/quests.js', () => questsMock);

// ── rnd mock — 0.99 makes sh() identity ──────────────────────────────────────
vi.mock('../lib/random.js', () => ({ rnd: vi.fn(() => 0.99) }));

// ── data mock ─────────────────────────────────────────────────────────────────
vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    srMark: vi.fn(),
    speak: vi.fn(),
    Bar: ({ v, mx }: { v: number; mx: number }) =>
      React.createElement('div', { 'data-testid': 'progress-bar', 'data-v': v, 'data-mx': mx }),
  };
});

import BojeGame from '../components/practice/BojeGame';

// ── Helpers ───────────────────────────────────────────────────────────────────

function renderBojeGame(overrides = {}) {
  const props = { goBack: vi.fn(), award: vi.fn(), ...overrides };
  const utils = render(<BojeGame {...props} />);
  return { ...utils, props };
}

/**
 * Start the quiz and wait for the initial setTimeout(fn, 0) to fire.
 * fireEvent triggers a synchronous re-render showing "Loading..." while
 * BojeGame schedules setTimeout(() => sBjOpts(...), 0). waitFor polls
 * (with automatic act wrapping each attempt) until Loading... disappears,
 * allowing the macrotask to fire and React to flush the sBjOpts state update.
 */
async function startQuizAndWait() {
  fireEvent.click(screen.getByText('Start Quiz →'));
  // Poll until the 0ms setTimeout fires and sBjOpts state update is flushed
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });
}

/**
 * Complete all 15 BOJE quiz questions and click "🏠 Done".
 * With identity shuffle, opts[0] = answer always → all 15 correct.
 * award(5) fired per question; award(bjSc*2) fired on "See Results" click.
 * "🏠 Done" → goBack() only.
 *
 * NOTE: BojeGame keeps mode tabs ("✏️ Quiz" = class "b bp") visible during
 * quiz mode, so container.querySelector('button.b.bp') hits the tab instead
 * of "Next →". Use text-based selectors to target the correct button.
 */
async function completeQuizAndClickDone(
  award: ReturnType<typeof vi.fn> = vi.fn(),
  goBack: ReturnType<typeof vi.fn> = vi.fn(),
) {
  const { container } = render(<BojeGame award={award} goBack={goBack} />);
  await playQuiz(container);
  // Text, not `button.b.bp` — the "✏️ Quiz" tab carries that class too.
  // ASSERTED rather than `if (doneBtn)`: a results screen with no way home is
  // the defect this helper would otherwise hide.
  const doneBtn = screen.queryByText('🏠 Done');
  expect(doneBtn, 'the results screen offered no 🏠 Done').toBeTruthy();
  fireEvent.click(doneBtn!);
  return { award, goBack };
}

// ── Rendering — learn screen ──────────────────────────────────────────────────

describe('BojeGame — learn screen', () => {
  it('renders without crashing', () => {
    renderBojeGame();
  });

  it('shows the Colors & Gender title', () => {
    renderBojeGame();
    expect(screen.getByText('🎨 Boje i Rod — Colors & Gender')).toBeTruthy();
  });

  it('shows Learn and Quiz mode tabs', () => {
    renderBojeGame();
    expect(screen.getByText('📖 Learn')).toBeTruthy();
    expect(screen.getByText('✏️ Quiz')).toBeTruthy();
  });

  it('shows Start Quiz → button on learn screen', () => {
    renderBojeGame();
    expect(screen.getByText('Start Quiz →')).toBeTruthy();
  });

  it('shows color gender explanation text', () => {
    renderBojeGame();
    expect(screen.getByText(/How Colors Change by Gender/)).toBeTruthy();
  });

  it('shows color entries in learn grid', () => {
    renderBojeGame();
    expect(screen.getByText('red')).toBeTruthy();
  });
});

// ── Quiz start ────────────────────────────────────────────────────────────────

describe('BojeGame — quiz start', () => {
  it('does not show Loading... after Start Quiz → click — opts are pre-computed', async () => {
    renderBojeGame();
    // opts are pre-computed in startQuiz() so Loading... is never shown
    fireEvent.click(screen.getByText('Start Quiz →'));
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  it('transitions to quiz mode and loads first question', async () => {
    renderBojeGame();
    await startQuizAndWait();
    expect(screen.queryByText('Start Quiz →')).toBeNull();
    expect(screen.getByText('Ruža')).toBeTruthy();
  });

  it('shows 4 option buttons after lazy load completes', async () => {
    const { container } = renderBojeGame();
    await startQuizAndWait();
    expect(container.querySelectorAll('button.ob').length).toBe(4);
  });

  it('shows progress counter 1 / 15', async () => {
    renderBojeGame();
    await startQuizAndWait();
    expect(screen.getByText(/1 \/ 15/)).toBeTruthy();
  });

  it('shows progress bar', async () => {
    renderBojeGame();
    await startQuizAndWait();
    expect(screen.getByTestId('progress-bar')).toBeTruthy();
  });

  it('clicking ✏️ Quiz tab also starts the quiz', async () => {
    renderBojeGame();
    fireEvent.click(screen.getByText('✏️ Quiz'));
    await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
    expect(screen.getByText('Ruža')).toBeTruthy();
  });
});

// ── Answer mechanics ──────────────────────────────────────────────────────────

describe('BojeGame — answer mechanics', () => {
  it('shows Next → after answering first question', async () => {
    const { container } = renderBojeGame();
    await startQuizAndWait();
    fireEvent.click(container.querySelector('button.ob')!);
    expect(screen.getByText('Next →')).toBeTruthy();
  });

  it('does not show Next → before answering', async () => {
    renderBojeGame();
    await startQuizAndWait();
    expect(screen.queryByText('Next →')).toBeNull();
  });

  it('award(5) called when correct answer is given', async () => {
    const award = vi.fn();
    const { container } = render(<BojeGame award={award} goBack={vi.fn()} />);
    await startQuizAndWait();
    fireEvent.click(container.querySelector('button.ob')!);
    expect(award).toHaveBeenCalledWith(5, false, 'vocabulary');
  });

  it('options are locked after answering', async () => {
    const award = vi.fn();
    const { container } = render(<BojeGame award={award} goBack={vi.fn()} />);
    await startQuizAndWait();
    const optBtn = container.querySelector('button.ob')!;
    fireEvent.click(optBtn);
    const callsAfterFirst = award.mock.calls.length;
    fireEvent.click(optBtn);
    expect(award.mock.calls.length).toBe(callsAfterFirst);
  });

  it('advances to next question after clicking Next →', async () => {
    const { container } = renderBojeGame();
    await startQuizAndWait();
    fireEvent.click(container.querySelector('button.ob')!);
    fireEvent.click(screen.getByText('Next →'));
    expect(screen.getByText('Žaba')).toBeTruthy();
  });

  it('shows See Results on the last question after answering', async () => {
    const { container } = renderBojeGame();
    await startQuizAndWait();
    for (let i = 0; i < 14; i++) {
      fireEvent.click(container.querySelector('button.ob')!);
      fireEvent.click(screen.getByText('Next →'));
    }
    fireEvent.click(container.querySelector('button.ob')!);
    expect(screen.getByText('See Results')).toBeTruthy();
  });
});

// ── Completion / XP award ─────────────────────────────────────────────────────

describe('BojeGame — completion + award guard', () => {
  it('shows Colors Quiz Complete! after all questions answered', async () => {
    const { container } = render(<BojeGame award={vi.fn()} goBack={vi.fn()} />);
    await playQuiz(container);
    expect(screen.getByText('Colors Quiz Complete!')).toBeTruthy();
  });

  it('shows score 15 / 15 on done screen', async () => {
    const { container } = render(<BojeGame award={vi.fn()} goBack={vi.fn()} />);
    await playQuiz(container);
    expect(screen.getByText(/15 \/ 15/)).toBeTruthy();
  });

  it('award(5) called 15 times (once per correct answer)', async () => {
    const award = vi.fn();
    const { container } = render(<BojeGame award={award} goBack={vi.fn()} />);
    await playQuiz(container);
    expect(award.mock.calls.filter((c) => c[0] === 5).length).toBe(15);
  });

  it('award(bjSc * 2) fired on See Results (15 correct → award(30))', async () => {
    const award = vi.fn();
    const { container } = render(<BojeGame award={award} goBack={vi.fn()} />);
    await playQuiz(container);
    expect(award).toHaveBeenCalledWith(30, false, 'vocabulary');
  });

  it('🏠 Done does NOT call award — only goBack', async () => {
    const award = vi.fn();
    const goBack = vi.fn();
    const { container } = render(<BojeGame award={award} goBack={goBack} />);
    await playQuiz(container);
    const callsBefore = award.mock.calls.length;
    const doneBtn = screen.queryByText('🏠 Done');
    // Not `if (doneBtn)`: with the button absent, "award was not called again"
    // is true for the wrong reason and this test passes having clicked nothing.
    expect(doneBtn, 'the results screen offered no 🏠 Done').toBeTruthy();
    fireEvent.click(doneBtn!);
    expect(award.mock.calls.length).toBe(callsBefore);
    expect(goBack).toHaveBeenCalledTimes(1);
  });
});

// ── Completion CONTRACT — what the screen actually records ───────────────────

/**
 * Play the whole 15-question quiz, answering `correct` of them right.
 *
 * WHY THIS EXISTS RATHER THAN AN EIGHTH COPY OF THE LOOP. The block above
 * repeats `for (…) { const b = container.querySelector('button.ob'); if (!b)
 * break; … if (nextText) fireEvent.click(nextText); }` eight times, and each of
 * those three conditionals is a SILENT early-out: a run that renders no options
 * on question 2 simply stops, and the test then asserts about a quiz that was
 * never played. That is the loop-shaped blind spot sweep 96 stated it could not
 * see, sitting in the very file sweep 96 named as its one real remainder.
 * Here the same conditions are ASSERTIONS, so a quiz that cannot be played
 * fails instead of passing quietly.
 *
 * `opts[0]` is the answer under the identity shuffle, so index 0 is correct and
 * any later index is a genuine wrong answer — not a skip.
 */
async function playQuiz(container: HTMLElement, correct = 15) {
  await startQuizAndWait();
  for (let i = 0; i < 15; i++) {
    const optBtns = container.querySelectorAll('button.ob');
    expect(optBtns.length, `question ${i + 1} rendered no options`).toBeGreaterThan(1);
    fireEvent.click(optBtns[i < correct ? 0 : 1]!);
    const next = screen.queryByText('Next →') || screen.queryByText('See Results');
    expect(next, `question ${i + 1} offered no way forward`).toBeTruthy();
    fireEvent.click(next!);
  }
}

/** Apply the updater the screen handed `setStats` to the stats it was given. */
function statsAfter() {
  expect(statsMock.setStats, 'setStats was never called').toHaveBeenCalledTimes(1);
  const updater = statsMock.setStats.mock.calls[0]![0] as (
    p: typeof statsMock.stats,
  ) => typeof statsMock.stats;
  return updater(statsMock.stats);
}

describe('BojeGame — completion contract', () => {
  beforeEach(() => {
    statsMock.stats = { vs: [], gc: 0 };
    statsMock.setStats.mockClear();
    statsMock.writeDelta.mockClear();
    questsMock.markQuest.mockClear();
  });

  it('a passing run credits gc, tags vs with boje, and marks the vocab quest', async () => {
    const { container } = render(<BojeGame award={vi.fn()} goBack={vi.fn()} />);
    await playQuiz(container);
    // The screen passes an updater, so drive it — this is the real reducer the
    // component handed over, not a restatement of what it ought to do.
    const next = statsAfter();
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('boje');
    expect(statsMock.writeDelta).toHaveBeenCalledWith({ gc: 1, vs: ['boje'] });
    expect(questsMock.markQuest).toHaveBeenCalledWith('vocab');
  });

  it('BELOW the 75% gate nothing is recorded at all', async () => {
    // 10 of 15 is 66.7% — under LESSON_PASS_THRESHOLD, so `completeExercise`
    // returns before the credit block. This is the direction the suite never
    // tested: every existing completion test plays a perfect round.
    const award = vi.fn();
    const { container } = render(<BojeGame award={award} goBack={vi.fn()} />);
    await playQuiz(container, 10);
    expect(statsMock.setStats).not.toHaveBeenCalled();
    expect(statsMock.writeDelta).not.toHaveBeenCalled();
    expect(questsMock.markQuest).not.toHaveBeenCalled();
    // The per-answer award(5) still fired for the ten right answers; what must
    // NOT fire is the completion bonus, which is the only award of bjSc * 2.
    expect(award).not.toHaveBeenCalledWith(20, false, 'vocabulary');
  });

  it('12 of 15 is 80% and does credit — the gate is a threshold, not perfection', async () => {
    const { container } = render(<BojeGame award={vi.fn()} goBack={vi.fn()} />);
    await playQuiz(container, 12);
    expect(statsAfter().gc).toBe(1);
    expect(questsMock.markQuest).toHaveBeenCalledWith('vocab');
  });

  it('a learner already credited for boje is never credited twice', async () => {
    statsMock.stats = { vs: ['boje'], gc: 1 };
    const { container } = render(<BojeGame award={vi.fn()} goBack={vi.fn()} />);
    await playQuiz(container);
    expect(statsMock.setStats).not.toHaveBeenCalled();
    expect(statsMock.writeDelta).not.toHaveBeenCalled();
    expect(questsMock.markQuest).not.toHaveBeenCalled();
  });
});

// ── Navigation ────────────────────────────────────────────────────────────────

describe('BojeGame — navigation', () => {
  it('goBack is called when 🏠 Done is clicked on results screen', async () => {
    const goBack = vi.fn();
    await completeQuizAndClickDone(vi.fn(), goBack);
    expect(goBack).toHaveBeenCalledTimes(1);
  });

  it('📖 Review returns to learn mode from results screen', async () => {
    const { container } = render(<BojeGame award={vi.fn()} goBack={vi.fn()} />);
    await playQuiz(container);
    fireEvent.click(screen.getByText('📖 Review'));
    expect(screen.getByText(/How Colors Change by Gender/)).toBeTruthy();
  });
});
