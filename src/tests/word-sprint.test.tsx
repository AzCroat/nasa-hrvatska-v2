/**
 * word-sprint.test.tsx — Behavioral tests for the WordSprint component.
 *
 * Critical behaviors tested:
 *   - Menu renders with title and Start Sprint button
 *   - Game starts after clicking Start Sprint
 *   - award() called with activityType 'grammar' on completion (pattern A)
 *   - markQuest('grammar') called on completion
 *   - setStats called with gc+1 and vs=['wordsprint'] on first completion
 *   - writeDelta called with { gc: 1, vs: ['wordsprint'] }
 *   - finishFired guard: award not called when score === 0 (no correct answers)
 *
 * Shuffle: rnd() → 0.9999 makes sh() identity (Fisher-Yates no-op).
 * Timer: faked with vi.useFakeTimers() so we can advance past 30s to trigger result.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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

// ── rnd mock — 0.9999 makes sh() identity ────────────────────────────────────
vi.mock('../lib/random.js', () => ({ rnd: vi.fn(() => 0.9999) }));

// ── quests mock ───────────────────────────────────────────────────────────────
const mockMarkQuest = vi.hoisted(() => vi.fn());
vi.mock('../lib/quests.js', () => ({ markQuest: mockMarkQuest }));

// ── knightSpeak / knightFlash mock ────────────────────────────────────────────
vi.mock('../lib/knightSpeak.js', () => ({
  knightFlash: vi.fn(),
  knightSpeak: vi.fn(),
}));

// ── StatsContext mock ─────────────────────────────────────────────────────────
const mockSetStats = vi.hoisted(() => vi.fn());
const mockWriteDelta = vi.hoisted(() => vi.fn());
vi.mock('../context/StatsContext', () => ({
  useStats: vi.fn(() => ({
    stats: { vs: [] as string[], gc: 0 },
    setStats: mockSetStats,
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
    writeDelta: mockWriteDelta,
  })),
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

// ── data mock — preserve V, H, Bar; mock srMark + speak ──────────────────────
vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual, srMark: vi.fn(), speak: vi.fn() };
});

// SP11d: WordSprint reads V via useContent(). Pull real V from the server-side
// vocabulary.js so the existing category tests (greetings/food/animals etc.) still pass.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyVocab = any;
vi.mock('../hooks/useContent', async () => {
  const vocabMod = (await vi.importActual(
    '../../functions/api/content/_data/vocabulary.js',
  )) as AnyVocab;
  return {
    useContent: () => ({
      content: {
        V: vocabMod.V ?? {},
        COUNTRIES: [],
        PROFESSIONS: [],
        WEATHER: {},
        CLOTHES: {},
        BODYDESC: [],
        TECH_VOC: {},
        BUREAUCRATIC: {},
        PROVERBS: [],
        IDIOMS: [],
        BRZALICE: [],
        HISTORY: {},
        EVENTS: [],
        KINGS: {},
        REGIONS: {},
        DIALECTS: {},
        CROATIAN_CITIES: [],
        FOODORDER: {},
        TRANSPORT: [],
        GROCERY: {},
        RECIPES: [],
        PRACTICAL: {},
        SCENES: [],
        LEVEL_NARRATIVE: {},
        SHADOWING: [],
      },
      loading: false,
      error: null,
      reload: () => {},
    }),
  };
});

import WordSprint from '../components/practice/WordSprint';

// ── sh helper (identity shuffle for tests) ────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const identitySh = (a: any[]) => [...a];

// ── Helpers ───────────────────────────────────────────────────────────────────

function renderWordSprint(overrides = {}) {
  const props = { goBack: vi.fn(), award: vi.fn(), sh: identitySh, ...overrides };
  const utils = render(<WordSprint {...props} />);
  return { ...utils, props };
}

/** Start the game from the menu screen. */
function startGame() {
  const startBtn = screen
    .getAllByRole('button')
    .find((b) => b.textContent?.includes('Start Sprint'));
  if (!startBtn) throw new Error('Start Sprint button not found');
  fireEvent.click(startBtn);
}

// ─── Menu rendering ───────────────────────────────────────────────────────────

describe('WordSprint — menu rendering', () => {
  beforeEach(() => {
    mockMarkQuest.mockClear();
    mockSetStats.mockClear();
    mockWriteDelta.mockClear();
  });

  it('renders without crashing', () => {
    renderWordSprint();
  });

  it('shows "Word Sprint" in the heading', () => {
    renderWordSprint();
    expect(screen.getByText(/Word Sprint/)).toBeTruthy();
  });

  it('shows "Start Sprint" button on the menu', () => {
    renderWordSprint();
    expect(
      screen.getAllByRole('button').find((b) => b.textContent?.includes('Start Sprint')),
    ).toBeTruthy();
  });

  it('shows category selector on menu', () => {
    renderWordSprint();
    expect(screen.getByText(/Choose Categories/)).toBeTruthy();
  });
});

// ─── Game start ───────────────────────────────────────────────────────────────

describe('WordSprint — game start', () => {
  beforeEach(() => {
    mockMarkQuest.mockClear();
    mockSetStats.mockClear();
    mockWriteDelta.mockClear();
  });

  it('clicking Start Sprint enters playing phase', () => {
    renderWordSprint();
    startGame();
    // Playing phase shows a timer countdown
    expect(screen.getByText(/\d+s/)).toBeTruthy();
  });

  it('shows question prompt in playing phase', () => {
    renderWordSprint();
    startGame();
    // Should show option buttons
    const optBtns = screen.getAllByRole('button').filter((b) => b.className.includes('ob'));
    expect(optBtns.length).toBeGreaterThan(0);
  });
});

// ─── Completion contract ──────────────────────────────────────────────────────

describe('WordSprint — completion contract (timer expires with score > 0)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockMarkQuest.mockClear();
    mockSetStats.mockClear();
    mockWriteDelta.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function playAndExpireTimer(award: ReturnType<typeof vi.fn>) {
    render(<WordSprint goBack={vi.fn()} award={award} sh={identitySh} />);
    // Start game
    const startBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Start Sprint'));
    fireEvent.click(startBtn!);

    // Answer at least one question correctly before the timer expires.
    // The floor matters: with no option buttons the round scores 0, WordSprint
    // deliberately awards nothing, and every assertion below would have been
    // skipped rather than failed (see the header note on the guards).
    act(() => {
      const optBtns = screen.getAllByRole('button').filter((b) => b.className.includes('ob'));
      expect(optBtns.length, 'the sprint renders answer options').toBeGreaterThan(0);
      fireEvent.click(optBtns[0]!);
    });

    // Advance timer by 600ms (feedback delay) then 31s (timer expiry)
    act(() => {
      vi.advanceTimersByTime(600);
    });
    act(() => {
      vi.advanceTimersByTime(31000);
    });
  }

  /**
   * THESE THREE ASSERTED NOTHING UNLESS THE CONTRACT ALREADY HELD (2026-09-24).
   *
   * Each body sat inside `if (award.mock.calls.length > 0)`, with a comment
   * saying a zero score is "also valid contract behavior". That is true of the
   * COMPONENT and false of the TEST: the helper above answers a question before
   * the timer runs out, so a score of 0 means the harness failed to drive the
   * drill — and the guard turned that failure into a pass. Break WordSprint's
   * completion path entirely and all three stayed green.
   *
   * WordSprint is `skip: true` in `exerciseContract.test.tsx` (timer-based, no
   * `.ob` MC loop the shared helper can drive), so these three were its only
   * completion coverage anywhere. Measured before removing the guard: the award
   * fires exactly once per run.
   */
  it('award() called with activityType "grammar" when timer expires with score > 0', () => {
    const award = vi.fn();
    playAndExpireTimer(award);
    expect(award).toHaveBeenCalledTimes(1);
    expect(award.mock.calls[0]![0]).toBeGreaterThan(0);
    expect(award.mock.calls[0]![2]).toBe('grammar');
  });

  it('markQuest("grammar") called after completing a round with score > 0', () => {
    const award = vi.fn();
    playAndExpireTimer(award);
    expect(award).toHaveBeenCalledTimes(1);
    expect(mockMarkQuest).toHaveBeenCalledWith('grammar');
  });

  it('writeDelta called with { gc: 1, vs: ["wordsprint"] } on first completion with score', () => {
    const award = vi.fn();
    playAndExpireTimer(award);
    expect(award).toHaveBeenCalledTimes(1);
    expect(mockWriteDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['wordsprint']) }),
    );
  });
});

// ─── vs-dedup guard (both branches) ──────────────────────────────────────────

describe('WordSprint — vs-dedup guard (both branches)', () => {
  /**
   * Mirrors the setStats updater passed inside the completion useEffect in WordSprint.
   * Tests both branches of the inner idempotency guard.
   */
  function wordsprintUpdater(prev: { gc?: number; vs?: string[] }) {
    if (prev.vs?.includes('wordsprint')) return prev;
    return { ...prev, gc: (prev.gc || 0) + 1, vs: [...(prev.vs || []), 'wordsprint'] };
  }

  it('updater adds gc+1 and "wordsprint" to vs on first completion', () => {
    const result = wordsprintUpdater({ gc: 0, vs: [] });
    expect(result.gc).toBe(1);
    expect(result.vs).toContain('wordsprint');
  });

  it('updater returns prev unchanged if vs already includes "wordsprint" (idempotent)', () => {
    const prev = { gc: 4, vs: ['wordsprint'] };
    expect(wordsprintUpdater(prev)).toBe(prev);
  });

  it('updater handles undefined vs gracefully', () => {
    const result = wordsprintUpdater({ gc: 0, vs: undefined });
    expect(result.vs).toContain('wordsprint');
    expect(result.gc).toBe(1);
  });

  it('updater is idempotent on repeated calls — tag appears exactly once', () => {
    const first = wordsprintUpdater({ gc: 0, vs: [] });
    const second = wordsprintUpdater(first);
    expect(second).toBe(first);
    expect((second.vs ?? []).filter((t) => t === 'wordsprint').length).toBe(1);
  });
});

// ─── No award when score is 0 ─────────────────────────────────────────────────

describe('WordSprint — no award when score is 0', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockMarkQuest.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('award() not called when timer expires with score === 0', () => {
    const award = vi.fn();
    render(<WordSprint goBack={vi.fn()} award={award} sh={identitySh} />);
    const startBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Start Sprint'));
    fireEvent.click(startBtn!);

    // Let timer expire without answering anything correctly
    act(() => {
      vi.advanceTimersByTime(32000);
    });

    // award() should NOT be called when score===0 (contract guard)
    expect(award).not.toHaveBeenCalled();
  });
});
