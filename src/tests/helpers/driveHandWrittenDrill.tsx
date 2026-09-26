/**
 * driveHandWrittenDrill — one driver for the ~100 hand-written `*Drill.tsx` screens.
 *
 * WHY THIS EXISTS. Those drills are the oldest graded content in the app and each is a
 * ~400–570-line copy of one component: `shLocal(DATA).slice(0,10)` or `drawDrillRun(DATA)`,
 * a `pick()` that locks, a `next()` that calls `completeExercise` on the last question, a
 * results view printing `{score} / {total}` with a `drill-retry`. Measured over all 101
 * files in `src/components/practice`: 100 call `completeExercise`, 100 hold a `finishFired`
 * ref, 99 render `drill-retry`, 98 print `{score} / {total}`. One driver therefore stands
 * for a hundred screens, which is the same leverage argument `modeDrillContract` makes for
 * the other 109.
 *
 * `exerciseContract.test.tsx` skips 24 of them because its shared `completeDrill` picks
 * options by `className.includes('ob')` and most of these style their buttons inline with
 * no className at all. This driver needs no className:
 *
 *  - THE RUN IS MADE DETERMINISTIC AT ITS ONE SOURCE. Every local `shLocal` is a private
 *    copy of Fisher–Yates (97 of them) and every one draws from the SHARED `rnd` in
 *    `src/lib/random.ts`, as does `drawDrillRun`. Mocking `rnd` to 0 fixes every shuffle,
 *    so the same questions come back in the same order on every mount — verified here
 *    rather than assumed (`assertDeterministic`). Without that the driver could not replay
 *    a run, because each mount re-draws in `useState`'s initialiser.
 *  - THE ANSWER IS READ FROM THE SCREEN, not from the bank. `DATA` is file-local and
 *    unexported in every one of them, so a discovery pass answers with the first option
 *    and records which button the screen itself marks correct: `borderColor` becomes
 *    `rgb(22, 163, 74)`, under BOTH styling conventions in the cohort (the inline `border`
 *    shorthand and the `.ob` class's `borderColor`). Reading the shorthand alone returns
 *    '' for the `.ob` drills and finds nothing — which is how the first version of this
 *    helper reported every case drill as having no correct answer.
 *
 * STRUCTURAL RULES, each measured over a diverse sample before being relied on:
 *   button[0] is always the header Back (`H(title, subtitle, goBack)` is uniform);
 *   an opening teaching phase is a lone `b bp` button (`case-intro-start`, `a1-intro-start`);
 *   the options are the remaining non-`bp` buttons;
 *   the advance button appears only after answering and carries `b bp`.
 */
import React from 'react';
import { expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { StatsProvider } from '../../context/StatsContext';
import AppContext from '../../context/AppContext';

/** A `b bp` button — the advance control, the intro's Start, and the retry. */
function isPrimary(b: Element): boolean {
  return /\bbp\b/.test(b.className || '');
}

/** The current question's option buttons: everything but the header Back and the primaries. */
export function drillOptions(): HTMLElement[] {
  return screen
    .queryAllByRole('button')
    .slice(1)
    .filter((b) => !isPrimary(b)) as HTMLElement[];
}

/**
 * The option the SCREEN says is correct, or null before an answer.
 * Read from `borderColor`, never the `border` shorthand — see the header.
 */
export function markedCorrect(): string | null {
  for (const b of drillOptions()) {
    if (/\b22,\s*163,\s*74\b/.test(b.style.borderColor || '')) return (b.textContent || '').trim();
  }
  return null;
}

/** The advance/retry control, if one is showing. */
function primaryButton(match?: RegExp): HTMLElement | undefined {
  return screen
    .queryAllByRole('button')
    .filter(isPrimary)
    .find((b) => !match || match.test(b.textContent || '')) as HTMLElement | undefined;
}

export interface DrillHandles {
  award: ReturnType<typeof vi.fn>;
  setStats: ReturnType<typeof vi.fn>;
  writeDelta: ReturnType<typeof vi.fn>;
  goBack: ReturnType<typeof vi.fn>;
}

/** Mount a drill and click past any opening teaching phase. */
export function mountDrill(Component: React.ComponentType<never>): DrillHandles {
  const setStats = vi.fn();
  const writeDelta = vi.fn();
  const award = vi.fn();
  const goBack = vi.fn();
  const stats = { xp: 0, lc: 0, gc: 0, sp: 0, rc: 0, vs: [], ct: [], badges: [] };
  const value = { stats, setStats, writeDelta, dispatch: vi.fn(), award, level: 1 };
  const Drill = Component as React.ComponentType<Record<string, unknown>>;
  render(
    // Several of these mount `DrillExplainCard`/`WrongAnswerHelp`, which read `useApp()`.
    <AppContext.Provider value={{ setScr: vi.fn(), currentScreen: 'drill' } as never}>
      <StatsProvider value={value as never}>
        <Drill goBack={goBack} award={award} />
      </StatsProvider>
    </AppContext.Provider>,
  );
  // A teaching phase (the seven case drills, the A1 word-order drill) shows one primary
  // and no options. Bounded, so a drill that never reaches questions fails loudly below.
  for (let i = 0; i < 4 && drillOptions().length < 2; i++) {
    const start = primaryButton();
    if (!start) break;
    fireEvent.click(start);
  }
  return { award, setStats, writeDelta, goBack };
}

/** The `vs` keys an updater would add, by APPLYING it to a real shape. */
export function vsKeysWritten(setStats: ReturnType<typeof vi.fn>): string[] {
  const out: string[] = [];
  for (const [fn] of setStats.mock.calls) {
    if (typeof fn !== 'function') continue;
    const before = { vs: [] as string[], xp: 0, gc: 0, lc: 0, sp: 0, rc: 0 };
    let after: { vs?: string[] };
    try {
      after = fn(before) as { vs?: string[] };
    } catch {
      continue;
    }
    for (const k of after?.vs ?? []) if (!before.vs.includes(k)) out.push(k);
  }
  return out;
}

/**
 * Answer every question of one run and return the option each screen marked correct.
 * `choose` picks from the options on screen; returning null means "the first one".
 */
export function playRun(
  choose: (opts: string[], index: number) => string | null,
  max = 30,
): { answers: string[]; asked: number; firstOptions: string[] } {
  const answers: string[] = [];
  let firstOptions: string[] = [];
  let asked = 0;
  for (; asked < max; asked++) {
    const opts = drillOptions();
    if (opts.length < 2) break; // the results view has no options
    const texts = opts.map((b) => (b.textContent || '').trim());
    if (asked === 0) firstOptions = texts;
    const want = choose(texts, asked);
    let btn: HTMLElement;
    if (want === null) {
      btn = opts[0]!;
    } else {
      const at = texts.indexOf(want);
      // NO SILENT FALLBACK. A replay that quietly answered something else would
      // produce an imperfect run that still credits on most drills, so the test
      // would pass while proving nothing — the shape this repo keeps finding.
      expect(
        at,
        `question ${asked + 1} does not offer ${JSON.stringify(want)} — the run is not a replay of the same questions (options: ${JSON.stringify(texts)})`,
      ).toBeGreaterThanOrEqual(0);
      btn = opts[at]!;
    }
    fireEvent.click(btn);
    const correct = markedCorrect();
    if (correct) answers.push(correct);
    const advance = primaryButton();
    expect(advance, `no advance control after answering question ${asked + 1}`).toBeTruthy();
    fireEvent.click(advance!);
  }
  return { answers, asked, firstOptions };
}

/** Mount twice and require the same first question — the premise the replay rests on. */
export function assertDeterministic(Component: React.ComponentType<never>, name: string) {
  const seen: string[][] = [];
  for (let i = 0; i < 2; i++) {
    mountDrill(Component);
    seen.push(drillOptions().map((b) => (b.textContent || '').trim()));
    cleanup();
  }
  expect(seen[0]!.length, `${name} showed no options`).toBeGreaterThanOrEqual(2);
  expect(seen[0], `${name} is not deterministic under a fixed rnd — replay is impossible`).toEqual(
    seen[1],
  );
}
