/**
 * learningCenterLaunch.test.tsx — every screen the Learning Center lists can be
 * ENTERED, not merely navigated to.
 *
 * THE DEFECT THIS PINS, which phase 2 shipped and phase 4 found. Six screens in
 * the app render a `ScreenGuard` — "this exercise needs to be started properly"
 * — unless a launcher has seeded their state first. The Center opened every row
 * with a bare `setScr`, so Flashcards, Quiz, Match, Listening and Speaking each
 * landed on that guard instead of the exercise, and `animlesson` on its own.
 *
 * SAY WHAT IT DID, NOT THE WORST THING IT COULD HAVE DONE: those rows did not
 * render blank or crash. ScreenGuard is a real screen with a way back. They
 * were dead ends, which is bad enough and is what this fixes.
 *
 * The codebase had already met this and written the answer down — GradTab
 * routes QuestTracker's "Start →" through the real launchers, noting that "a
 * plain setScr there would have put Start → on a dead end". What was missing
 * was a shared place to build the payload, so a second caller could do the same
 * without a second copy that drifts.
 *
 * THE DERIVATION BELOW IS THE POINT, and two earlier attempts at it were wrong
 * in opposite directions. Slicing each screen's block up to the next
 * `currentScreen ===` missed `animlesson`, whose guard sits in a SEPARATE block;
 * a fixed character window instead invented `boje` and lost `speaking`.
 * Splitting the router on `currentScreen === '` and attributing each segment to
 * the screen it names is right by construction: a screen with several blocks
 * gets all of them, and no segment can be credited to its neighbour.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import React from 'react';
import { LAUNCH_PAYLOAD } from '../components/learn/LearningCenter';

const { CEFR_EXERCISE_POOL } = await import('../lib/sessionPools');
const { CROATIA_POOL } = await import('../lib/croatiaPool');
const { PRODUCTION_POOL } = await import('../hooks/useDailySession');

const ROUTER = readFileSync('src/components/AppRouter.tsx', 'utf8');

/** Screens whose route can fall through to ScreenGuard. Segment-attributed. */
const GUARDED: Set<string> = (() => {
  const out = new Set<string>();
  for (const seg of ROUTER.split("currentScreen === '").slice(1)) {
    const name = seg.slice(0, seg.indexOf("'"));
    if (seg.includes('ScreenGuard')) out.add(name);
  }
  return out;
})();

const POOLED: Set<string> = new Set([
  ...(CEFR_EXERCISE_POOL as Array<{ screen: string }>).map((p) => p.screen),
  ...(CROATIA_POOL as Array<{ screen: string }>).map((p) => p.screen),
  ...(PRODUCTION_POOL as Array<{ screen: string }>).map((p) => p.screen),
]);

describe('every guarded screen is either launched properly or not listed', () => {
  it('the derivation still finds guarded screens at all', () => {
    // Without this the two assertions below pass vacuously the day someone
    // renames ScreenGuard.
    expect(GUARDED.size).toBeGreaterThanOrEqual(6);
    expect(GUARDED.has('flashcards')).toBe(true);
    expect(GUARDED.has('animlesson')).toBe(true);
  });

  it('every guarded POOLED screen has a payload builder or is excluded', () => {
    const assembler = readFileSync('src/hooks/useLearningIndex.ts', 'utf8');
    const excluded = [...assembler.matchAll(/NOT_A_DESTINATION = new Set\(\[([^\]]*)\]/g)].flatMap(
      (m) => [...m[1]!.matchAll(/'([^']+)'/g)].map((x) => x[1]!),
    );
    const unhandled = [...GUARDED]
      .filter((s) => POOLED.has(s))
      .filter((s) => !(s in LAUNCH_PAYLOAD) && !excluded.includes(s));
    expect(
      unhandled,
      `these open on a ScreenGuard dead end from the Learning Center: ${unhandled.join(', ')}`,
    ).toEqual([]);
    expect(excluded).toContain('animlesson');
  });

  it('has no builder for a screen that does not need one', () => {
    // The other staleness direction. A builder for an unguarded screen is dead
    // weight that looks like coverage.
    const spurious = Object.keys(LAUNCH_PAYLOAD).filter((s) => !GUARDED.has(s));
    expect(spurious, `no ScreenGuard on: ${spurious.join(', ')}`).toEqual([]);
    expect(Object.keys(LAUNCH_PAYLOAD).length).toBeGreaterThanOrEqual(5);
  });

  it('the router sends a payload to the REAL launcher, never to setScr', () => {
    const block = ROUTER.slice(
      ROUTER.indexOf('<LearningCenter'),
      ROUTER.indexOf('/>', ROUTER.indexOf('<LearningCenter')),
    );
    for (const [screen, fn] of [
      ['flashcards', 'launchFlashcards'],
      ['mcgame', 'launchMcGame'],
      ['match', 'launchMatch'],
      ['listening', 'launchListening'],
      ['speaking', 'launchSpeaking'],
    ] as const) {
      expect(block, `${screen} must go through ${fn}`).toContain(fn);
    }
    // And it must NOT reuse the session launcher, which clears
    // nh_session_started on a failed launch — looking something up may never
    // disturb a daily session already in progress.
    //
    // Comments are stripped first, and that is load-bearing: the block's own
    // note explains WHY the session launcher is not used and names it, so a raw
    // `toContain` failed against correct code. Prose about a thing is not a use
    // of it — the same trap that made the phase-2 catalogue guard decorative.
    const code = block.replace(/^\s*\/\/.*$/gm, ' ').replace(/\/\*[\s\S]*?\*\//g, ' ');
    expect(code).not.toContain('launchSessionActivity');
    expect(code).toContain('launchFlashcards');
  });
});

// ───────────────────────────────────────────────────────────────────────────
// The behaviour, driven through the real screen
// ───────────────────────────────────────────────────────────────────────────

vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0 }, dispatch: vi.fn(), setStats: vi.fn() }),
}));
let contentState: { content: unknown; loading: boolean } = { content: {}, loading: false };
vi.mock('../hooks/useContent', () => ({
  useContent: () => contentState,
  peekContent: () => contentState.content,
}));

vi.mock('../lib/contentClient', () => ({ getCurriculumSpine: vi.fn(async () => []) }));

const VOCAB = Array.from({ length: 40 }, (_, i) => [`hr${i}`, `en${i}`, `ph${i}`]);
let poolRows: unknown[] = VOCAB;
vi.mock('../lib/vocabPool', () => ({
  acquisitionPool: () => poolRows,
  vocabLevel: () => 'A1',
  // The index assembles vocabulary rows too, since the Center took over the
  // retired browse modal's category browsing. Empty here: this file is about
  // the SCREEN launch path, and real categories would add rows its searches
  // would then have to step around.
  vocabCategories: () => [],
}));

const LearningCenter = (await import('../components/learn/LearningCenter')).default;

function renderCenter() {
  const onOpenScreen = vi.fn();
  render(
    React.createElement(LearningCenter, {
      goBack: vi.fn(),
      launchAnimLesson: vi.fn(),
      onOpenScreen,
      onOpenVocab: vi.fn(),
      sh: <T,>(a: T[]) => a,
    }),
  );
  return { onOpenScreen };
}

describe('opening a guarded screen from the Center', () => {
  beforeEach(() => {
    poolRows = VOCAB;
    contentState = { content: {}, loading: false };
    localStorage.clear();
  });
  afterEach(cleanup);

  it('hands Flashcards a seeded deck rather than a bare navigation', async () => {
    const { onOpenScreen } = renderCenter();
    fireEvent.change(screen.getByTestId('lc-search'), { target: { value: 'flashcards' } });
    const row = screen
      .getAllByTestId('lc-row')
      .find((r) => r.getAttribute('data-kind') === 'drill');
    fireEvent.click(row!);
    await waitFor(() => expect(onOpenScreen).toHaveBeenCalled());
    const [scr, payload] = onOpenScreen.mock.calls[0]!;
    expect(scr).toBe('flashcards');
    expect(Array.isArray(payload)).toBe(true);
    expect((payload as unknown[]).length).toBeGreaterThan(0);
  });

  it('opens an UNGUARDED screen cold, with no payload — the common case', async () => {
    const { onOpenScreen } = renderCenter();
    fireEvent.change(screen.getByTestId('lc-search'), { target: { value: 'genitive case' } });
    const row = screen
      .getAllByTestId('lc-row')
      .find((r) => r.getAttribute('data-kind') === 'drill');
    fireEvent.click(row!);
    await waitFor(() => expect(onOpenScreen).toHaveBeenCalled());
    expect(onOpenScreen.mock.calls[0]![1]).toBeUndefined();
  });

  it('distinguishes "still loading" from "your deck is empty"', async () => {
    // Two different facts, and saying the wrong one is NEVER-DO 13 — a message
    // stating something the app never measured. The vocabulary arrives after
    // first paint, so a learner who taps Flashcards immediately has an empty
    // pool for a reason that has nothing to do with their deck; telling them to
    // "try a lesson first" would be false advice. CI caught exactly this: the
    // tap passed locally on a warm machine and failed on a loaded runner.
    contentState = { content: null, loading: true };
    const { onOpenScreen } = renderCenter();
    fireEvent.change(screen.getByTestId('lc-search'), { target: { value: 'flashcards' } });
    fireEvent.click(
      screen.getAllByTestId('lc-row').find((r) => r.getAttribute('data-kind') === 'drill')!,
    );
    await waitFor(() => expect(screen.getByTestId('lc-launch-error')).toBeTruthy());
    expect(screen.getByTestId('lc-launch-error').textContent).toMatch(/loading/i);
    expect(screen.getByTestId('lc-launch-error').textContent).not.toMatch(/try a lesson/i);
    expect(onOpenScreen).not.toHaveBeenCalled();
  });

  it('says the content failed when it is not loading and never arrived', async () => {
    contentState = { content: null, loading: false };
    renderCenter();
    fireEvent.change(screen.getByTestId('lc-search'), { target: { value: 'flashcards' } });
    fireEvent.click(
      screen.getAllByTestId('lc-row').find((r) => r.getAttribute('data-kind') === 'drill')!,
    );
    await waitFor(() => expect(screen.getByTestId('lc-launch-error')).toBeTruthy());
    expect(screen.getByTestId('lc-launch-error').textContent).toMatch(/connection/i);
  });

  it('refuses to navigate when the deck is genuinely empty, and says why', async () => {
    poolRows = [];
    const { onOpenScreen } = renderCenter();
    fireEvent.change(screen.getByTestId('lc-search'), { target: { value: 'flashcards' } });
    fireEvent.click(
      screen.getAllByTestId('lc-row').find((r) => r.getAttribute('data-kind') === 'drill')!,
    );
    await waitFor(() => expect(screen.getByTestId('lc-launch-error')).toBeTruthy());
    // Sending the learner to the guard and calling it an exercise is the dead
    // end this change removes — so nothing is opened at all.
    expect(onOpenScreen).not.toHaveBeenCalled();
  });

  it('never lists animlesson as a destination of its own', () => {
    renderCenter();
    fireEvent.change(screen.getByTestId('lc-search'), { target: { value: 'animated lesson' } });
    const rows = screen.queryAllByTestId('lc-row');
    for (const r of rows) expect(r.textContent).not.toMatch(/^Animated Lesson/);
  });
});
