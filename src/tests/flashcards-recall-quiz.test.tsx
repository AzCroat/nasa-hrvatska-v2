/**
 * flashcards-recall-quiz.test.tsx
 *
 * Behavioral tests for FlashcardRecallQuiz (the standalone quiz component)
 * and the Flashcards integration (verifying the quiz intro does NOT appear
 * before deck completion, and verifying the initial render is stable).
 *
 * Full integration tests (flip-through + quiz) require fake timers to advance
 * the advanceCard() setTimeout(180ms/220ms) chain; those are marked with
 * `vi.useFakeTimers()` accordingly.
 *
 * Critical behaviors tested:
 *   FlashcardRecallQuiz:
 *     - Shows "Quick Recall Check" intro with "Take Quiz" and "Skip quiz" buttons
 *     - "Take Quiz" transitions to quiz screen (Question 1 of N)
 *     - "Skip quiz" calls onComplete(-1, true) immediately
 *     - Answering all questions fires onComplete(score, false) exactly once
 *     - markQuest("flashcards") called after quiz completion (not on skip)
 *     - writeDelta({ vs: ["flashcards-quiz"] }) called after quiz completion (not on skip)
 *     - Correct answer highlighted green, wrong answer highlighted red
 *     - "See Results" on last question, "Next" on others
 *     - award fires ONCE with correct XP for the full quiz path (via parent Flashcards)
 *
 *   Flashcards integration:
 *     - Renders without crashing
 *     - Quiz intro NOT shown before deck is complete
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
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

// ── quests mock ───────────────────────────────────────────────────────────────
const mockMarkQuest = vi.hoisted(() => vi.fn());
vi.mock('../lib/quests.js', () => ({ markQuest: mockMarkQuest }));

// ── knightSpeak / knightFlash mocks ──────────────────────────────────────────
vi.mock('../lib/knightSpeak.js', () => ({ knightSpeak: vi.fn(), knightFlash: vi.fn() }));

// ── audio / sound mocks ───────────────────────────────────────────────────────
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/soundSettings.js', () => ({
  playCorrect: vi.fn(),
  playWrong: vi.fn(),
  haptic: vi.fn(),
}));

// ── canvas-confetti mock ──────────────────────────────────────────────────────
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));

// ── apiFetch mock — prevents real network calls ───────────────────────────────
vi.mock('../lib/apiFetch.js', () => ({
  apiFetch: vi.fn(() => Promise.resolve({ ok: false })),
}));

// ── StatsContext mock ─────────────────────────────────────────────────────────
const mockSetStats = vi.hoisted(() => vi.fn());
const mockWriteDelta = vi.hoisted(() => vi.fn());
vi.mock('../context/StatsContext', () => ({
  useStats: vi.fn(() => ({
    stats: { vs: [] as string[] },
    setStats: mockSetStats,
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
    writeDelta: mockWriteDelta,
  })),
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

// ── AppContext mock (needed by FlashcardResultScreen) ─────────────────────────
vi.mock('../context/AppContext', () => ({
  useApp: vi.fn(() => ({ setScr: vi.fn() })),
}));

// ── useNotifications mock (needed by FlashcardResultScreen) ──────────────────
vi.mock('../hooks/useNotifications', () => ({ markPracticed: vi.fn() }));

// ── data mock — srMark + Bar ───────────────────────────────────────────────────
vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    srMark: vi.fn(),
    Bar: ({ v, mx }: { v: number; mx: number }) =>
      React.createElement('div', { 'data-testid': 'progress-bar', 'data-v': v, 'data-mx': mx }),
  };
});

import Flashcards from '../components/practice/Flashcards';
import FlashcardRecallQuiz from '../components/practice/FlashcardRecallQuiz';

// ── Test pool helpers ─────────────────────────────────────────────────────────
// Each card: [hr, en, phonetic?]
function makePool(n = 5) {
  return Array.from({ length: n }, (_, i) => [`hrWord${i}`, `enWord${i}`, `ph${i}`]);
}

// ── FlashcardRecallQuiz standalone tests ──────────────────────────────────────
describe('FlashcardRecallQuiz — intro screen', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderQuiz(overrides: Record<string, unknown> = {}) {
    const onComplete = vi.fn();
    const props = { pool: makePool(5), knownCount: 3, onComplete, ...overrides };
    const utils = render(<FlashcardRecallQuiz {...props} />);
    return { ...utils, onComplete };
  }

  it('renders without crashing', () => {
    renderQuiz();
  });

  it('shows "Quick Recall Check" heading', () => {
    renderQuiz();
    expect(screen.getByText(/Quick Recall Check/i)).toBeTruthy();
  });

  it('shows "Take Quiz" button', () => {
    renderQuiz();
    expect(screen.getByTestId('quiz-start-btn')).toBeTruthy();
  });

  it('shows "Skip quiz" button', () => {
    renderQuiz();
    expect(screen.getByTestId('quiz-skip-btn')).toBeTruthy();
  });

  it('shows max XP in the intro description', () => {
    renderQuiz();
    // With 5 questions: max = 10 + 5*5 = 35 XP
    expect(screen.getByText(/35 XP/i)).toBeTruthy();
  });

  it('does NOT show quiz questions on intro screen', () => {
    renderQuiz();
    expect(screen.queryByText(/Question \d+ of/i)).toBeNull();
  });
});

// ── Skip path ─────────────────────────────────────────────────────────────────
describe('FlashcardRecallQuiz — skip path', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderQuiz(overrides: Record<string, unknown> = {}) {
    const onComplete = vi.fn();
    const props = { pool: makePool(5), knownCount: 3, onComplete, ...overrides };
    render(<FlashcardRecallQuiz {...props} />);
    return { onComplete };
  }

  it('clicking "Skip quiz" calls onComplete(-1, true)', () => {
    const { onComplete } = renderQuiz();
    fireEvent.click(screen.getByTestId('quiz-skip-btn'));
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenCalledWith(-1, true);
  });

  it('skip does NOT call markQuest("flashcards")', () => {
    renderQuiz();
    fireEvent.click(screen.getByTestId('quiz-skip-btn'));
    const flashcardsCalls = mockMarkQuest.mock.calls.filter(
      (c: unknown[]) => c[0] === 'flashcards',
    );
    expect(flashcardsCalls.length).toBe(0);
  });

  it('skip does NOT call writeDelta with flashcards-quiz', () => {
    renderQuiz();
    fireEvent.click(screen.getByTestId('quiz-skip-btn'));
    const quizDeltaCalls = mockWriteDelta.mock.calls.filter((c: unknown[]) =>
      (c[0] as { vs?: string[] })?.vs?.includes('flashcards-quiz'),
    );
    expect(quizDeltaCalls.length).toBe(0);
  });
});

// ── Quiz start ────────────────────────────────────────────────────────────────
describe('FlashcardRecallQuiz — starting the quiz', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderAndStart(overrides: Record<string, unknown> = {}) {
    const onComplete = vi.fn();
    const props = { pool: makePool(5), knownCount: 5, onComplete, ...overrides };
    render(<FlashcardRecallQuiz {...props} />);
    fireEvent.click(screen.getByTestId('quiz-start-btn'));
    return { onComplete };
  }

  it('shows "Question 1 of N" after clicking Take Quiz', () => {
    renderAndStart();
    expect(screen.getByText(/Question 1 of \d+/i)).toBeTruthy();
  });

  it('shows 4 option buttons after starting', () => {
    renderAndStart();
    const opts = [0, 1, 2, 3].map((i) => screen.queryByTestId(`quiz-opt-${i}`));
    const shown = opts.filter(Boolean).length;
    expect(shown).toBeGreaterThanOrEqual(2); // at least 2 opts for small pool
  });

  it('does NOT show Next button before answering', () => {
    renderAndStart();
    expect(screen.queryByTestId('quiz-next-btn')).toBeNull();
  });

  it('shows a Croatian word from the pool', () => {
    renderAndStart();
    const hasWord = makePool(5).some(([hr]) => screen.queryByText(hr as string));
    expect(hasWord).toBe(true);
  });
});

// ── Quiz answer mechanics ─────────────────────────────────────────────────────
describe('FlashcardRecallQuiz — answer mechanics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderStarted(overrides: Record<string, unknown> = {}) {
    const onComplete = vi.fn();
    const props = { pool: makePool(5), knownCount: 5, onComplete, ...overrides };
    render(<FlashcardRecallQuiz {...props} />);
    fireEvent.click(screen.getByTestId('quiz-start-btn'));
    return { onComplete };
  }

  it('clicking an option shows the Next/See Results button', () => {
    renderStarted();
    fireEvent.click(screen.getByTestId('quiz-opt-0'));
    expect(screen.getByTestId('quiz-next-btn')).toBeTruthy();
  });

  it('clicking an option twice does not re-fire (locked after answer)', () => {
    const onComplete = vi.fn();
    render(<FlashcardRecallQuiz pool={makePool(2)} knownCount={2} onComplete={onComplete} />);
    fireEvent.click(screen.getByTestId('quiz-start-btn'));
    const opt0 = screen.getByTestId('quiz-opt-0');
    fireEvent.click(opt0);
    // Click again — should be disabled
    fireEvent.click(opt0);
    // Next still shows just once, not doubled
    expect(screen.getAllByTestId('quiz-next-btn').length).toBe(1);
  });

  it('shows feedback text after answering', () => {
    renderStarted();
    fireEvent.click(screen.getByTestId('quiz-opt-0'));
    // Either "Correct!" or "Correct answer: ..."
    const hasFeedback = screen.queryByText(/Correct!/) || screen.queryByText(/Correct answer:/);
    expect(hasFeedback).toBeTruthy();
  });

  it('last question shows "See Results" instead of "Next"', () => {
    // Use a 2-card pool so quiz has 2 questions
    const pool = makePool(2);
    render(<FlashcardRecallQuiz pool={pool} knownCount={2} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByTestId('quiz-start-btn'));

    // Answer Q1
    fireEvent.click(screen.getByTestId('quiz-opt-0'));
    expect(screen.getByTestId('quiz-next-btn').textContent).toMatch(/Next/i);
    fireEvent.click(screen.getByTestId('quiz-next-btn'));

    // Answer Q2 (last)
    fireEvent.click(screen.getByTestId('quiz-opt-0'));
    expect(screen.getByTestId('quiz-next-btn').textContent).toMatch(/See Results/i);
  });
});

// ── Quiz completion ───────────────────────────────────────────────────────────
describe('FlashcardRecallQuiz — completion contract', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /** Complete all questions in a rendered quiz by always clicking opt-0 then Next. */
  function completeAllQuestions(totalQuestions: number) {
    fireEvent.click(screen.getByTestId('quiz-start-btn'));
    for (let i = 0; i < totalQuestions; i++) {
      fireEvent.click(screen.getByTestId('quiz-opt-0'));
      fireEvent.click(screen.getByTestId('quiz-next-btn'));
    }
  }

  it('onComplete called once after all questions answered', () => {
    const onComplete = vi.fn();
    const pool = makePool(3); // 3 cards → 3 questions
    render(<FlashcardRecallQuiz pool={pool} knownCount={3} onComplete={onComplete} />);
    completeAllQuestions(3);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('onComplete called with (score, false) — not skipped', () => {
    const onComplete = vi.fn();
    const pool = makePool(3);
    render(<FlashcardRecallQuiz pool={pool} knownCount={3} onComplete={onComplete} />);
    completeAllQuestions(3);
    const [score, skipped] = onComplete.mock.calls[0] as [number, boolean];
    expect(typeof score).toBe('number');
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(3);
    expect(skipped).toBe(false);
  });

  // `vocab`, not `flashcards`. This assertion used to PIN THE DEFECT: no quest
  // with id `flashcards` has ever existed, so it checked that the call happened
  // and never that it credited anything — markQuest writes
  // nh_quest_<id>_<date> for any string. See questIdsExist.test.ts.
  it('markQuest("vocab") called exactly once on completion', () => {
    const onComplete = vi.fn();
    const pool = makePool(3);
    render(<FlashcardRecallQuiz pool={pool} knownCount={3} onComplete={onComplete} />);
    completeAllQuestions(3);
    const vocabCalls = mockMarkQuest.mock.calls.filter((c: unknown[]) => c[0] === 'vocab');
    expect(vocabCalls.length).toBe(1);
    expect(mockMarkQuest).not.toHaveBeenCalledWith('flashcards');
  });

  it('writeDelta called with vs:["flashcards-quiz"] on completion', () => {
    const onComplete = vi.fn();
    const pool = makePool(3);
    render(<FlashcardRecallQuiz pool={pool} knownCount={3} onComplete={onComplete} />);
    completeAllQuestions(3);
    // mockWriteDelta should have been called with { vs: ['flashcards-quiz'] }
    expect(mockWriteDelta).toHaveBeenCalled();
    const args = mockWriteDelta.mock.calls.map((c: unknown[]) => c[0]);
    const hasQuizTag = args.some(
      (a: unknown) =>
        Array.isArray((a as { vs?: unknown })?.vs) &&
        (a as { vs: string[] }).vs.includes('flashcards-quiz'),
    );
    expect(hasQuizTag).toBe(true);
  });

  it('does not crash when called multiple times (idempotency guard exists)', () => {
    // Verify the component can be completed without throwing even if called repeatedly.
    // The guard (!stats.vs.includes('flashcards-quiz')) is verified via code inspection;
    // the mock always returns vs:[] so the guard fires — this test ensures no crash occurs.
    const onComplete = vi.fn();
    const pool = makePool(3);
    expect(() => {
      render(<FlashcardRecallQuiz pool={pool} knownCount={3} onComplete={onComplete} />);
      completeAllQuestions(3);
    }).not.toThrow();
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});

// ── Flashcards integration (smoke tests) ─────────────────────────────────────
describe('Flashcards — smoke tests (quiz not yet shown)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
  });

  function renderFlashcards(overrides: Record<string, unknown> = {}) {
    const props = { pool: makePool(5), goBack: vi.fn(), award: vi.fn(), ...overrides };
    const utils = render(<Flashcards {...props} />);
    return { ...utils, props };
  }

  it('renders without crashing', async () => {
    await act(async () => {
      renderFlashcards();
    });
  });

  it('shows first card Croatian word', async () => {
    await act(async () => {
      renderFlashcards();
    });
    expect(screen.getByText('hrWord0')).toBeTruthy();
  });

  it('quiz intro NOT shown before deck is complete', async () => {
    await act(async () => {
      renderFlashcards();
    });
    expect(screen.queryByText(/Quick Recall Check/i)).toBeNull();
  });

  it('award NOT called before deck is complete', async () => {
    const award = vi.fn();
    await act(async () => {
      renderFlashcards({ award });
    });
    expect(award).not.toHaveBeenCalled();
  });

  it('shows "Perfect" and "Still Learning" buttons when card is flipped', async () => {
    const { container } = renderFlashcards();
    await act(async () => {
      const card = container.querySelector('.fc-card');
      if (card) fireEvent.click(card);
    });
    expect(screen.getByText('Perfect ✓')).toBeTruthy();
    // Use aria-label to find the specific button (text can appear elsewhere on the screen)
    expect(
      container.querySelector('button[aria-label="Still learning — review again soon"]'),
    ).toBeTruthy();
  });
});

// ── Flashcards + quiz integration (fake timers) ───────────────────────────────
describe('Flashcards — full integration with fake timers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function renderFlashcards(overrides: Record<string, unknown> = {}) {
    const props = { pool: makePool(5), goBack: vi.fn(), award: vi.fn(), ...overrides };
    const utils = render(<Flashcards {...props} />);
    return { ...utils, props };
  }

  /**
   * Flip through all cards using fake timers to advance the advanceCard() timeouts.
   * Each card: click fc-card to flip, click Perfect, advance timers.
   * Uses act() wrapping + synchronous DOM queries (no waitFor, which conflicts with fake timers).
   */
  function flipAllWithFakeTimers(container: HTMLElement, cardCount: number) {
    for (let i = 0; i < cardCount; i++) {
      act(() => {
        const card = container.querySelector('.fc-card');
        if (card) fireEvent.click(card);
      });

      act(() => {
        const perfectBtn =
          screen.queryByText('Perfect ✓') ||
          screen.queryAllByRole('button').find((b) => b.textContent?.includes('Perfect'));
        if (perfectBtn) fireEvent.click(perfectBtn);
        // Advance both setTimeout calls in advanceCard (180ms + 220ms)
        vi.advanceTimersByTime(500);
      });
    }
  }

  it('shows quiz intro after all cards flipped', () => {
    const { container } = renderFlashcards();
    flipAllWithFakeTimers(container, 5);
    expect(screen.queryByText(/Quick Recall Check/i)).toBeTruthy();
  });

  it('award NOT fired during flip-through (only after quiz/skip)', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    expect(screen.queryByText(/Quick Recall Check/i)).toBeTruthy();
    expect(award).not.toHaveBeenCalled();
  });

  it('skip path fires award with vocabulary activity type', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-skip-btn'));
    });
    expect(award).toHaveBeenCalledTimes(1);
    expect(award.mock.calls[0]?.[2]).toBe('vocabulary');
  });

  it('skip path fires award with old XP formula (5*2+5=15, all known)', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-skip-btn'));
    });
    // All 5 flipped as "Perfect" → known=5 → 5*2+5=15
    expect(award).toHaveBeenCalledWith(15, false, 'vocabulary');
  });

  /** Answer all quiz questions using separate act() calls for each click. */
  function answerAllQuizQuestions(count: number) {
    for (let i = 0; i < count; i++) {
      // Click opt — renders the Next button as a side effect
      act(() => {
        const opt = screen.queryByTestId('quiz-opt-0');
        if (opt) fireEvent.click(opt);
      });
      // Click Next/See Results in a separate act() so the previous render has flushed
      act(() => {
        const next = screen.queryByTestId('quiz-next-btn');
        if (next) fireEvent.click(next);
      });
    }
  }

  /**
   * ANSWER EVERY QUESTION CORRECTLY, DETERMINISTICALLY.
   *
   * `answerAllQuizQuestions` above always clicks option 0, so the score is however
   * many times the shuffle happened to put the correct answer first — which is why
   * its own test asserts a RANGE. That is fine for a range, and fatal for a test
   * that compares two XP formulas: on the run where the score lands on 1 the quiz
   * rate (10 + 1*5) EQUALS the review rate (5*2 + 5) and the comparison proves
   * nothing. The coincidence guard below caught exactly that, on its fifth run.
   *
   * `makePool` builds `[hrWordN, enWordN, phN]`, so the correct gloss is derivable
   * from the question on screen whatever the shuffle does.
   */
  function answerAllQuizQuestionsCorrectly(count: number) {
    for (let i = 0; i < count; i++) {
      const asked = document.body.textContent?.match(/hrWord(\d+)/);
      expect(asked, `question ${i + 1} rendered no Croatian prompt`).toBeTruthy();
      const gloss = `enWord${asked![1]}`;
      act(() => {
        const opt = screen
          .queryAllByRole('button')
          .find(
            (b) =>
              b.getAttribute('data-testid')?.startsWith('quiz-opt-') &&
              b.textContent?.trim() === gloss,
          );
        expect(opt, `no option offered the correct answer ${gloss}`).toBeTruthy();
        fireEvent.click(opt!);
      });
      act(() => {
        const next = screen.queryByTestId('quiz-next-btn');
        if (next) fireEvent.click(next);
      });
    }
  }

  it('quiz path fires award with flashcards activity type', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-start-btn'));
    });
    answerAllQuizQuestions(5);
    expect(award).toHaveBeenCalledTimes(1);
    expect(award.mock.calls[0]?.[2]).toBe('flashcards');
  });

  it('quiz path XP = 10 + score*5 (within valid range)', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-start-btn'));
    });
    answerAllQuizQuestions(5);
    const xp = award.mock.calls[0]?.[0] as number;
    expect(xp).toBeGreaterThanOrEqual(10); // 10 + 0*5
    expect(xp).toBeLessThanOrEqual(35); // 10 + 5*5
    expect((xp - 10) % 5).toBe(0);
  });

  /**
   * THE RESULT SCREEN MUST PRINT WHAT WAS PAID, ON BOTH PATHS (2026-09-26).
   *
   * `FlashcardResultScreen` printed `knownCount * 2 + 5` — its OWN hardcoded copy of
   * the REVIEW rate — on both of this screen's completion paths, while the quiz path
   * pays `QUIZ_XP_BASE + quizScore * QUIZ_XP_PER_CORRECT`. So a learner who took the
   * quiz read a figure they had not earned, wrong in EITHER direction depending on
   * the numbers: knew 15 of 20 and scored 12 → paid 70, printed 35; knew 20 and
   * scored 2 → paid 20, printed 45.
   *
   * These two assert the EFFECT rather than the wiring. A source pin on the prop
   * would pass just as happily if the parent computed the figure a second time and
   * the two expressions drifted — which is the defect, one layer up. Reading the
   * rendered number and comparing it to `award`'s own argument cannot.
   */
  function printedXp(): number {
    const m = document.body.textContent?.match(/\+(\d+)\s*XP/);
    expect(m, 'the result screen printed no XP figure').toBeTruthy();
    return Number(m![1]);
  }

  it('skip path: the result screen prints exactly what was awarded', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-skip-btn'));
    });
    const paid = award.mock.calls[0]?.[0] as number;
    expect(paid, 'nothing was awarded — the scenario never reached completion').toBe(15);
    expect(printedXp()).toBe(paid);
  });

  it('quiz path: the result screen prints exactly what was awarded', () => {
    const award = vi.fn();
    const { container } = renderFlashcards({ award });
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-start-btn'));
    });
    answerAllQuizQuestionsCorrectly(5);
    const paid = award.mock.calls[0]?.[0] as number;
    // 5 of 5 correct: QUIZ_XP_BASE 10 + 5 * QUIZ_XP_PER_CORRECT 5. Pinned exactly,
    // which also means the scenario cannot drift onto a score where the two rates
    // coincide — the flake that made this assertion vacuous before the helper above.
    expect(paid, 'the quiz did not complete with a full score').toBe(35);
    expect(printedXp()).toBe(paid);
    // AND the two formulas genuinely differ here, or the test proves nothing: all 5
    // known would pay 15 by the review rate the result screen used to hardcode.
    const reviewRateFigure = 5 * 2 + 5;
    expect(paid, 'the two rates coincide here — pick a scenario where they differ').not.toBe(
      reviewRateFigure,
    );
  });

  it('markQuest("vocab") called after quiz completion', () => {
    const { container } = renderFlashcards();
    flipAllWithFakeTimers(container, 5);
    act(() => {
      fireEvent.click(screen.getByTestId('quiz-start-btn'));
    });
    answerAllQuizQuestions(5);
    expect(mockMarkQuest).toHaveBeenCalledWith('vocab');
  });
});
