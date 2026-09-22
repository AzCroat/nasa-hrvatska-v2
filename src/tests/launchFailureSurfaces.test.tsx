// src/tests/launchFailureSurfaces.test.tsx
//
// EVERY LAUNCH SURFACE WAS SILENT EXCEPT THE FIRST ONE BUILT (found 2026-09-22).
//
// `lib/launchFailure.ts` exists because a tap must never be a silent no-op:
// "a launch either navigates, or it visibly fails HERE" (P0, 2026-07-18). It
// BROADCASTS; something has to RENDER. Exactly one thing did — SessionCard's
// fresh / in-progress CTA — and every surface built after it did not:
//
//   SessionCard STATE C (`next-up-primary`)  the complete-state hero, which the
//                                            owner's 2026-08-17 directive made
//                                            the primary guided path
//   NextUpCard                               pinned atop the Practice tab
//   NextStepPrompt                           the pill after every completion
//
// All three route through `useNextStepEngine`, so the app's entire "what next"
// mechanism — the thing the constant-prompting directive exists to guarantee —
// was the silent half. The pill was worst: `go()` called `setStep(null)` BEFORE
// `launch()`, so a failed launch made the pill vanish and nothing happen,
// restoring the exact "← Back" dead end the component was written to abolish.
//
// SECOND DEFECT, in the one surface that DID render: it showed the same
// "check your connection" sentence for both reasons. `empty-pool` is a content
// or classification gap with nothing to do with the network, so that learner
// was sent to check their router — the same error as ClozeEngine's
// explain-error copy, which CLAUDE.md forbids by name ("never imply learner
// fault for a server condition"). The reason now picks the sentence.
//
// THE GUARD IS DERIVED, not a list of three component names: it walks src/ for
// every file that CALLS a next-step launch and requires each to reach the
// shared failure hook. A fourth surface added next month fails here rather
// than shipping silent — which is precisely how these three got in.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import React from 'react';
import { LAUNCH_FAILED_EVENT } from '../lib/launchFailure';
import LaunchFailureNotice, { LAUNCH_FAILURE_COPY } from '../components/shared/LaunchFailureNotice';

const ROOT = join(__dirname, '..', '..');

function srcFiles(): string[] {
  const out: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir)) {
      if (e === 'node_modules' || e.startsWith('.')) continue;
      const p = join(dir, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(p)) out.push(p);
    }
  })(join(ROOT, 'src'));
  return out.filter((f) => !f.includes('/tests/') && !/__tests__|\.test\./.test(f));
}

const strip = (s: string) =>
  s
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\/.*$/gm, '');

/**
 * THE SUBJECT IS THE NEXT-STEP ENGINE'S CONSUMERS, and narrowing it to that was
 * a correction. The first draft matched any `launch(` and pulled in GradMap,
 * PlaceScreen, GrammarTrackScreen and the Learn Path tiles — different
 * launchers with their own bail paths. That was not noise: five of those bails
 * only called `reportError` and returned, so the tap was silent for the learner
 * while looking handled in Sentry. They now go through `notifyLaunchFailure`
 * too, so ONE renderer can cover every path — but they are a separate concern
 * from this file's subject and are tracked in AUDIT-STATE, not conflated here.
 */
const LAUNCHES = /useNextStepEngine|onNextStart/;
/** ...must be able to SAY it failed. */
const HANDLES = /useLaunchFailure|LAUNCH_FAILED_EVENT|LaunchFailureNotice|LAUNCH_FAILURE_COPY/;

/**
 * The hook and the engine are infrastructure: one DEFINES the launch, the other
 * DEFINES the failure. Neither renders, so neither can show a strip. Checked in
 * both staleness directions below.
 */
const NOT_A_SURFACE: Record<string, string> = {
  'src/hooks/useNextStepEngine.ts': 'the engine performs the launch; it renders nothing',
  'src/components/home/HomeTab.tsx':
    'holds the engine but renders no control — it passes onNextStart to SessionCard, which shows the strip',
};

const surfaces = srcFiles()
  .map((f) => ({ file: relative(ROOT, f), body: strip(readFileSync(f, 'utf8')) }))
  .filter((c) => LAUNCHES.test(c.body));

describe('every surface that can start an activity can also say it failed', () => {
  it('the derivation finds the launch surfaces at all', () => {
    // Anti-vacuity: if the call pattern stops matching, every assertion below
    // passes trivially — the decorative guard this file exists to replace.
    expect(surfaces.length).toBeGreaterThanOrEqual(4);
    const names = surfaces.map((s) => s.file);
    expect(names).toContain('src/components/shared/NextStepPrompt.tsx');
    expect(names).toContain('src/components/shared/NextUpCard.tsx');
    expect(names).toContain('src/components/home/SessionCard.tsx');
  });

  it('no launch surface is silent on failure', () => {
    const silent = surfaces
      .filter((s) => !HANDLES.test(s.body) && !(s.file in NOT_A_SURFACE))
      .map((s) => s.file);
    expect(
      silent,
      'These can start an activity but render nothing when the launch fails, so ' +
        'the tap is a silent no-op — the dead end lib/launchFailure.ts exists to ' +
        'abolish. Use useLaunchFailure + LaunchFailureNotice:\n  ' +
        silent.join('\n  '),
    ).toEqual([]);
  });

  it('NOT_A_SURFACE holds nothing stale (both directions)', () => {
    const byFile = new Map(surfaces.map((s) => [s.file, s]));
    const stale: string[] = [];
    for (const [file, why] of Object.entries(NOT_A_SURFACE)) {
      const s = byFile.get(file);
      if (!s) stale.push(`${file} — no longer launches anything (${why})`);
      else if (HANDLES.test(s.body))
        stale.push(`${file} — now handles failure; remove it (${why})`);
    }
    expect(stale, `stale exemptions:\n  ${stale.join('\n  ')}`).toEqual([]);
    expect(Object.keys(NOT_A_SURFACE).length).toBe(2);
  });
});

describe('the two reasons get two sentences', () => {
  it('empty-pool does NOT blame the connection', () => {
    expect(LAUNCH_FAILURE_COPY['empty-pool']).not.toMatch(/connection|internet|offline/i);
    expect(LAUNCH_FAILURE_COPY['empty-pool']).toMatch(/nothing to practise/i);
  });

  it('load-error DOES, because that is what actually failed', () => {
    expect(LAUNCH_FAILURE_COPY['load-error']).toMatch(/connection/i);
  });

  it('the notice renders the reason it is given, and nothing when there is none', () => {
    const { rerender } = render(<LaunchFailureNotice reason={null} />);
    expect(screen.queryByTestId('launch-error')).toBeNull();
    rerender(<LaunchFailureNotice reason="empty-pool" />);
    expect(screen.getByTestId('launch-error').textContent).toBe(LAUNCH_FAILURE_COPY['empty-pool']);
    rerender(<LaunchFailureNotice reason="load-error" />);
    expect(screen.getByTestId('launch-error').textContent).toBe(LAUNCH_FAILURE_COPY['load-error']);
  });
});

// ── The pill, driven for real ────────────────────────────────────────────────
//
// The engine is mocked because `useNextStepEngine` reaches the whole app
// context; what is under test is the PILL's own behaviour on a failed launch,
// which is where the defect was.
const { mockLaunch, mockCompute } = vi.hoisted(() => ({
  mockLaunch: vi.fn(),
  mockCompute: vi.fn(),
}));
vi.mock('../hooks/useNextStepEngine.js', () => ({
  useNextStepEngine: () => ({ computeStep: mockCompute, launch: mockLaunch, navKey: 'x' }),
}));

import NextStepPrompt from '../components/shared/NextStepPrompt';
import { EXERCISE_COMPLETE_EVENT } from '../lib/sessionSignal';

const STEP = { kind: 'session', screen: 'genitivedrill', label: 'Genitive drill', reason: 'why' };

function showPill() {
  mockCompute.mockReturnValue(STEP);
  render(<NextStepPrompt />);
  act(() => {
    window.dispatchEvent(new Event(EXERCISE_COMPLETE_EVENT));
    vi.advanceTimersByTime(800);
  });
}

describe('the pill survives a failed launch instead of vanishing', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockLaunch.mockReset();
    mockCompute.mockReset();
  });

  it('shows the recommendation after a completion', () => {
    showPill();
    expect(screen.getByTestId('next-up-bar').textContent).toMatch(/Next up: Genitive drill/);
  });

  it('STAYS and names the cause when the launch fails', () => {
    // THE DEFECT: go() called setStep(null) BEFORE launch(), so the pill
    // disappeared and nothing happened — the "← Back" dead end restored.
    showPill();
    fireEvent.click(screen.getByTestId('next-up-bar'));
    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'empty-pool' } }),
      );
    });
    const pill = screen.getByTestId('next-up-bar');
    expect(pill, 'the pill vanished on a failed launch').toBeTruthy();
    expect(pill.getAttribute('data-launch-failure')).toBe('empty-pool');
    expect(pill.textContent).toMatch(/nothing to practise/i);
    // ...and it does not blame the connection for an empty pool.
    expect(pill.textContent).not.toMatch(/connection/i);
  });

  it('tapping again retries, hiding the pill, and a second failure brings it back', () => {
    // The pill hides on tap — that is its documented contract and an existing
    // NextStepPrompt test pins it. The fix is not that it STAYS; it is that it
    // COMES BACK carrying the cause, which needs no assumption about whether
    // the launch navigated. (Keeping the step instead made hiding depend on the
    // launch changing navKey, so a recommendation for the screen the learner is
    // already on would strand the pill there.)
    showPill();
    fireEvent.click(screen.getByTestId('next-up-bar'));
    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'load-error' } }),
      );
    });
    expect(screen.getByTestId('next-up-bar').getAttribute('data-launch-failure')).toBe(
      'load-error',
    );

    fireEvent.click(screen.getByTestId('next-up-bar'));
    expect(mockLaunch).toHaveBeenCalledTimes(2);
    expect(screen.queryByTestId('next-up-bar'), 'the retry did not hide the pill').toBeNull();

    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'empty-pool' } }),
      );
    });
    const back = screen.getByTestId('next-up-bar');
    expect(back.getAttribute('data-launch-failure')).toBe('empty-pool');
    // ...and it still knows WHICH step to retry.
    expect(back.textContent).toMatch(/nothing to practise/i);
  });

  it('the wrapper still refuses pointer events (the NEVER rule)', () => {
    showPill();
    const wrapper = screen.getByTestId('next-up-bar').parentElement!;
    expect(wrapper.style.pointerEvents).toBe('none');
    expect(screen.getByTestId('next-up-bar').style.pointerEvents).toBe('auto');
  });
});

// ── The two card surfaces, rendered ──────────────────────────────────────────
//
// THE SOURCE PIN ABOVE IS NOT ENOUGH, and mutation proved it: deleting the
// <LaunchFailureNotice> element from NextUpCard and from SessionCard's hero
// left `useLaunchFailure` imported and `clearLaunchError` called, so the regex
// still matched and the suite stayed green. That is the couplingClearingPath
// lesson — an import satisfying a guard written about a call. These render.
import NextUpCard from '../components/shared/NextUpCard';
import SessionCard from '../components/home/SessionCard';

const ACT = { screen: 'genitivedrill', label: 'Genitive', kind: 'practice', minutes: 5 };
const COMPLETE_PROPS = {
  session: {
    date: '2026-09-22',
    activities: [ACT],
    completedIds: ['genitivedrill'],
    estimatedMinutes: 10,
  },
  isComplete: true,
  progress: 1,
  nextActivity: null,
  tomorrowLabel: 'Come back tomorrow',
  onKeepPracticing: vi.fn(),
  streak: 3,
  xpThisWeek: 120,
  wordsdue: 0,
  nextStep: STEP,
  onNextStart: vi.fn(),
};

function fail(reason: string) {
  act(() => {
    window.dispatchEvent(new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason } }));
  });
}

describe('the card surfaces render the failure, not just import the hook', () => {
  beforeEach(() => {
    vi.useRealTimers();
    mockCompute.mockReturnValue(STEP);
    mockLaunch.mockReset();
  });

  it('NextUpCard shows it (Practice tab had no failure surface at all)', () => {
    render(<NextUpCard />);
    expect(screen.queryByTestId('next-up-card-error')).toBeNull();
    fail('load-error');
    expect(screen.getByTestId('next-up-card-error').textContent).toBe(
      LAUNCH_FAILURE_COPY['load-error'],
    );
  });

  it("SessionCard's COMPLETE-state hero shows it — the owner's primary guided path", () => {
    render(<SessionCard {...(COMPLETE_PROPS as never)} />);
    // Anti-vacuity: we must actually be looking at the hero, not the CTA state.
    expect(screen.getByTestId('next-up-primary')).toBeTruthy();
    expect(screen.queryByTestId('next-up-primary-error')).toBeNull();
    fail('empty-pool');
    expect(screen.getByTestId('next-up-primary-error').textContent).toBe(
      LAUNCH_FAILURE_COPY['empty-pool'],
    );
  });

  it('tapping the hero again clears it and still starts', () => {
    const onNextStart = vi.fn();
    render(<SessionCard {...(COMPLETE_PROPS as never)} onNextStart={onNextStart} />);
    fail('load-error');
    expect(screen.getByTestId('next-up-primary-error')).toBeTruthy();
    fireEvent.click(screen.getByTestId('next-up-primary'));
    expect(onNextStart).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('next-up-primary-error')).toBeNull();
  });
});

// ── Every empty-pool bail uses the one channel ───────────────────────────────
//
// Five launcher bails (checkpoint, legendary, path lesson, path speaking, path
// mcgame) called `reportError` and returned. Their comments said "never
// silent-fail" — but that meant reported to SENTRY; for the learner the tap did
// nothing, with nothing on screen. They now broadcast like every other bail, so
// the day a renderer is added for those surfaces, all of them light up at once
// instead of five more edits.
//
// NO RENDERER EXISTS FOR THEM YET — the Learn Path tiles and the checkpoint
// entry still show nothing. Stated, not papered over; tracked in AUDIT-STATE.
describe('every empty-pool bail goes through notifyLaunchFailure', () => {
  const LAUNCHER = strip(readFileSync('src/hooks/useScreenLauncher.ts', 'utf8'));

  it('no bail reports directly instead of broadcasting', () => {
    expect(LAUNCHER, 'a launch bail still reports without broadcasting').not.toMatch(
      /reportError\([^)]*launch-empty-pool/,
    );
  });

  it('...and the broadcasts are actually there (anti-vacuity)', () => {
    // Without this the assertion above is satisfied by deleting the bails
    // entirely, which would navigate into a dead screen — the exact regression
    // the `legendary launch` guard was written for.
    const calls = [...LAUNCHER.matchAll(/notifyLaunchFailure\(\s*'empty-pool'/g)];
    expect(calls.length).toBeGreaterThanOrEqual(11);
    for (const name of [
      'checkpoint launch',
      'legendary launch',
      'path lesson launch',
      'path speaking launch',
      'path mcgame launch',
    ])
      expect(LAUNCHER, `${name} no longer broadcasts its empty pool`).toMatch(
        new RegExp(`notifyLaunchFailure\\(\\s*'empty-pool',\\s*new Error\\('${name}`),
      );
  });
});

// ── The floor: a launch with no inline surface still says something ──────────
//
// Scope keeps the two families apart so nobody is told twice: the session /
// next-step surfaces render an inline strip at the button tapped, and the Learn
// Path tiles and checkpoint entry — which have none — get a toast from App.tsx.
import AppToasts from '../components/shared/AppToasts';
import { notifyLaunchFailure } from '../lib/launchFailure';

const TOAST_PROPS = {
  comebackBonus: false,
  freezeUsedToast: false,
  earnBackPrompt: null,
  streakRestoredCount: 0,
  ttsFailedToast: false,
  streakRepairAvailable: false,
  onRepairStreak: null,
  showAndroidInstall: false,
  setShowAndroidInstall: vi.fn(),
  deferredInstallPrompt: null,
  showPwaInstall: false,
  setShowPwaInstall: vi.fn(),
  showBackupBanner: false,
  setShowBackupBanner: vi.fn(),
  emailUnverified: false,
  setEmailUnverified: vi.fn(),
  resendVerification: vi.fn(),
};

describe('a path launch with no inline surface still reaches the learner', () => {
  it('AppToasts renders the message it is given, and nothing without one', () => {
    const { rerender } = render(<AppToasts {...(TOAST_PROPS as never)} />);
    expect(screen.queryByTestId('launch-failed-toast')).toBeNull();
    rerender(
      <AppToasts
        {...(TOAST_PROPS as never)}
        launchFailedMessage={LAUNCH_FAILURE_COPY['empty-pool']}
      />,
    );
    expect(screen.getByTestId('launch-failed-toast').textContent).toBe(
      LAUNCH_FAILURE_COPY['empty-pool'],
    );
  });

  it('scope separates the two families — a path failure does not light the session strips', () => {
    // Without the scope filter the Learn Path toast and the Practice-tab strip
    // would both fire for one tap.
    render(<NextUpCard />);
    act(() => notifyLaunchFailure('empty-pool', undefined, 'path'));
    expect(screen.queryByTestId('next-up-card-error')).toBeNull();
    act(() => notifyLaunchFailure('empty-pool'));
    expect(screen.getByTestId('next-up-card-error')).toBeTruthy();
  });

  it('App.tsx listens for the path scope and passes a message through (source pin)', () => {
    // App.tsx cannot be rendered in this repo; the wiring is pinned instead.
    const app = strip(readFileSync('src/App.tsx', 'utf8'));
    expect(app).toMatch(/addEventListener\(LAUNCH_FAILED_EVENT/);
    expect(app, 'App.tsx no longer filters on the path scope').toMatch(/scope !== 'path'/);
    expect(app).toMatch(/launchFailedMessage=\{launchFailedMsg\}/);
  });
});
