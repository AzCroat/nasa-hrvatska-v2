/**
 * modeDrillContract.test.tsx — the engine behind 109 drills, driven end to end.
 *
 * THE GAP THIS CLOSES, MEASURED (2026-09-26). `ModeDrill` is the shared engine for
 * the whole practice programme: 109 drills are a ~12-line lazy wrapper over it, so
 * its completion contract IS their completion contract. Two test files rendered it
 * (`wrongAnswerHelp`, `lessonLookup`) and **neither asserted a single credit writer**
 * — `grep -cE 'expect\((award|mockAward|setStats)' ` returns 0 on both. So the most
 * leveraged completion path in the app was covered by nothing, while the last four
 * sweeps found credit defects in twenty-six hand-written screens one at a time.
 *
 * It is also why the coverage figure I first reported was wrong in the alarming
 * direction: `exerciseContract.test.tsx` drives 17 of its 41 subjects and skips 24,
 * and I read that as the app's coverage. Every one of those 24 has its own
 * `*.contract.test.tsx`. Measured properly over every component that credits a
 * learner: 75 of 222 driven. This file is the single biggest remaining item, because
 * one subject stands for 109 screens.
 *
 * WHAT IS ASSERTED, and why each clause is the contract rather than an example:
 *
 *  1. Finishing correctly credits — `award`, `setStats`, and `writeDelta` carrying
 *     the `vs` key. The key is the drill's `id`, NOT its screen id, because the
 *     teach→practice coupling clears on it (several drills differ between the two).
 *  2. **The credit is already recorded when the results view first renders.** That
 *     is what makes ModeDrill immune to the defect that cost twenty-six screens: it
 *     credits from the final ADVANCE click, so `← Back`, the header Back button and
 *     the ever-present TabBar are all equivalent exits. The assertion is ordered —
 *     award BEFORE any exit is pressed — because an assertion made after the click
 *     cannot tell the two designs apart.
 *  3. Pressing an exit does not credit a second time.
 *  4. Below the pass gate nothing is written to `vs`, and the retry appears.
 *  5. A failed attempt followed by a passing retry DOES credit (`finishFired` is
 *     reset by the retry handler, and a first attempt that failed recorded nothing,
 *     so the second must be able to).
 *  6. The results view states the COUNT needed, never a bare percentage — the
 *     owner's 8-of-12 report, here for 109 screens at once.
 *
 * The driver reads the rendered question and clicks the option whose text is that
 * item's own `answer`, so it is correct whatever the engine's per-run shuffle does.
 * Clicking a fixed index would make the score a property of the RNG.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import AppContext from '../context/AppContext';
import type { Stats, StatsContextValue } from '../types';
import ModeDrill, { type ModeDrillItem } from '../components/practice/ModeDrill';
import { DRILL_RUN_PER_MODE } from '../lib/drillRun';
import { itemsNeededToPass } from '../lib/lessonGate';

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

vi.mock('../lib/audio.js', () => ({ speak: vi.fn(), speakSlow: vi.fn() }));

/**
 * Two modes so `drawDrillRun` behaves as it does in production (it draws
 * DRILL_RUN_PER_MODE from EACH mode), and every `q` distinct so the driver can
 * identify the current item from the DOM.
 */
const BANK: ModeDrillItem[] = [];
for (const mode of ['alpha', 'beta']) {
  for (let i = 0; i < DRILL_RUN_PER_MODE; i++) {
    const n = `${mode}${i}`;
    BANK.push({
      mode,
      q: `pitanje-${n}`,
      en: `gloss ${n}`,
      opts: [`tocno-${n}`, `krivo1-${n}`, `krivo2-${n}`, `krivo3-${n}`],
      answer: `tocno-${n}`,
      tip: `savjet ${n}`,
    });
  }
}
const RUN_SIZE = DRILL_RUN_PER_MODE * 2;

function makeCtx() {
  const setStats = vi.fn();
  const writeDelta = vi.fn();
  const dispatch = vi.fn();
  const award = vi.fn();
  const stats: Stats = {
    xp: 0,
    lc: 0,
    gc: 0,
    sp: 0,
    de: 0,
    rc: 0,
    pf: 0,
    mv: 0,
    hi: 0,
    str: 0,
    authLoading: 0,
    diff: 'beginner',
    ct: [],
    vs: [],
    rs: [],
    badges: [],
  } as unknown as Stats;
  const value: StatsContextValue = { stats, setStats, writeDelta, dispatch, award, level: 1 };
  return { value, setStats, writeDelta, award };
}

function renderDrill() {
  const ctx = makeCtx();
  const goBack = vi.fn();
  render(
    // `WrongAnswerHelp` is mounted by the engine on every WRONG answer and reads
    // `useApp()` for its "learn this" link, so the failing-run cases below cannot
    // render without the provider. In production the engine is always inside it.
    <AppContext.Provider value={{ setScr: vi.fn(), currentScreen: 'testdrill' } as never}>
      <StatsProvider value={ctx.value}>
        <ModeDrill
          id="testdrill"
          title="Test Drill"
          subtitle="sub"
          modeLabels={{ alpha: 'Alpha', beta: 'Beta' }}
          data={BANK}
          goBack={goBack}
          award={ctx.value.award}
        />
      </StatsProvider>
    </AppContext.Provider>,
  );
  return { ...ctx, goBack };
}

/** The option button for a given text — they carry no className and no testid. */
function optionButton(text: string): HTMLElement | undefined {
  return screen.queryAllByRole('button').find((b) => (b.textContent || '').trim() === text);
}

/**
 * Answer the current question, `correct` deciding which option is clicked, then
 * advance. Returns false once the results view is reached.
 */
function answerOne(correct: boolean): boolean {
  const body = document.body.textContent || '';
  const m = body.match(/pitanje-([a-z]+\d+)/);
  if (!m) return false;
  const item = BANK.find((b) => b.q === `pitanje-${m[1]}`)!;
  const wanted = correct ? item.answer : item.opts.find((o) => o !== item.answer)!;
  const btn = optionButton(wanted);
  expect(btn, `no option button reading "${wanted}"`).toBeTruthy();
  fireEvent.click(btn!);
  const advance = screen
    .queryAllByRole('button')
    .find((b) => /next|see results|dalje|rezultat/i.test(b.textContent || ''));
  expect(advance, 'no advance button after answering').toBeTruthy();
  fireEvent.click(advance!);
  return true;
}

/** Play a whole run; `correctCount` of them answered correctly, the rest wrongly. */
function playRun(correctCount: number) {
  for (let i = 0; i < RUN_SIZE; i++) {
    const ok = answerOne(i < correctCount);
    expect(ok, `the run ended early at question ${i + 1} of ${RUN_SIZE}`).toBe(true);
  }
}

/** The `vs` keys a setStats updater would add, by applying it to a real shape. */
function vsKeysWritten(setStats: ReturnType<typeof vi.fn>): string[] {
  const out: string[] = [];
  for (const [fn] of setStats.mock.calls) {
    if (typeof fn !== 'function') continue;
    const before = { vs: [] as string[], xp: 0, gc: 0, lc: 0 };
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

describe('ModeDrill — the completion contract for 109 drills', () => {
  beforeEach(() => markQuestMock.mockClear());

  it('the fixture really drives the engine — a full run reaches the results view', () => {
    // A floor. Every assertion below is about what happens at the END of a run, and
    // a driver that silently stopped at question one would satisfy several of them
    // vacuously (the sweep-98 lesson: `not.toHaveBeenCalled()` is the easiest
    // assertion in any suite to satisfy by accident).
    renderDrill();
    playRun(RUN_SIZE);
    expect(screen.getByText(`${RUN_SIZE} / ${RUN_SIZE}`)).toBeTruthy();
  });

  it('a perfect run credits: award, setStats with the vs key, and writeDelta', () => {
    const { setStats, writeDelta, award } = renderDrill();
    playRun(RUN_SIZE);

    expect(award, 'a finished drill paid nothing').toHaveBeenCalled();
    expect(award.mock.calls[0]![0]).toBe(RUN_SIZE * 5);
    // The vs key is the drill's `id`, which is what the teach→practice coupling
    // clears on — not the screen id, and several drills differ between the two.
    expect(vsKeysWritten(setStats)).toContain('testdrill');
    expect(writeDelta).toHaveBeenCalled();
  });

  it('THE CREDIT IS ALREADY RECORDED WHEN THE RESULTS VIEW APPEARS', () => {
    // This is the clause that makes ModeDrill immune to the defect that cost
    // twenty-six hand-written screens: it credits from the final ADVANCE click,
    // not from the exit button on the results view. So the header Back, the
    // "← Back" button and the ever-present TabBar are all equivalent.
    //
    // The ORDER is the whole assertion. Checking `award` after clicking an exit
    // cannot distinguish "credited on finishing" from "credited by that button",
    // which is exactly how the twenty-six survived their own contract tests.
    const { award } = renderDrill();
    playRun(RUN_SIZE);

    expect(screen.getByText(`${RUN_SIZE} / ${RUN_SIZE}`), 'not on the results view').toBeTruthy();
    expect(
      award,
      'the credit waits for a button — every other exit loses it',
    ).toHaveBeenCalledTimes(1);
  });

  it('leaving by ← Back neither loses nor repeats the credit', () => {
    const { award, goBack } = renderDrill();
    playRun(RUN_SIZE);
    const paidOnFinish = award.mock.calls.length;

    const back = screen.queryAllByRole('button').find((b) => /←\s*Back/.test(b.textContent || ''));
    expect(back, 'the results view has no Back affordance').toBeTruthy();
    fireEvent.click(back!);

    expect(goBack).toHaveBeenCalled();
    expect(award).toHaveBeenCalledTimes(paidOnFinish);
  });

  it('below the pass gate nothing is written to vs, and a retry is offered', () => {
    const { setStats } = renderDrill();
    playRun(0); // every answer wrong

    expect(vsKeysWritten(setStats), 'a failed run recorded a completion').not.toContain(
      'testdrill',
    );
    expect(screen.getByTestId('drill-retry')).toBeTruthy();
  });

  it('a failed attempt followed by a passing retry DOES credit', () => {
    // The first attempt recorded nothing, so the second must be able to — which is
    // what `finishFired.current = false` in the retry handler is for. Without this
    // case that reset looks like a redundant line.
    const { setStats, award } = renderDrill();
    playRun(0);
    expect(vsKeysWritten(setStats)).not.toContain('testdrill');

    fireEvent.click(screen.getByTestId('drill-retry'));
    playRun(RUN_SIZE);

    expect(award, 'the retry could not credit').toHaveBeenCalled();
    expect(vsKeysWritten(setStats)).toContain('testdrill');
  });

  it('the results view states the COUNT needed, not a bare percentage', () => {
    // The owner's 8-of-12 report, asserted for 109 screens at once: a percentage
    // beside a fraction asks the learner to do the arithmetic to find out whether
    // they passed. Derived from `itemsNeededToPass` so the number cannot drift
    // from the gate that decides the verdict.
    renderDrill();
    playRun(0);

    const body = document.body.textContent || '';
    expect(body).toContain(`${itemsNeededToPass(RUN_SIZE)} of ${RUN_SIZE}`);
    expect(body, 'the threshold is stated as a bare percentage').not.toMatch(/need\s*75\s*%/i);
  });
});
