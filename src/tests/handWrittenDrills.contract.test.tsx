/**
 * handWrittenDrills.contract.test.tsx — the completion contract for the ~100
 * hand-written drills, driven end to end, derived from the glob.
 *
 * WHY THIS IS THE HIGHEST-LEVERAGE FILE LEFT. `scripts/creditCoverage.mjs` reported 146
 * of 222 crediting components undriven, and the single biggest block of them is
 * `src/components/practice/*Drill.tsx` — the oldest graded content in the app, ~400–570
 * lines each, all copies of one component. `exerciseContract.test.tsx` skips 24 of them
 * and CLAUDE.md records the reason: its shared `completeDrill` picks options by
 * `className.includes('ob')`, and most of these style their buttons inline with no
 * className at all. So the cohort was audited one screen at a time by sweeps 139–145
 * while ninety-eight of them were driven by nothing.
 *
 * MEASURED RESULT: all 98 are CORRECT on both paths, so this is a ratchet and not a fix —
 * the same shape as `modeDrillContract`. Saying so plainly is the point; a clean sweep
 * dressed up as a save is the inflation this repo's own rules forbid.
 *
 * WHAT MADE IT DRIVEABLE, and neither half works alone:
 *
 *  1. ONE SOURCE OF RANDOMNESS. Each drill re-draws its run inside `useState`'s
 *     initialiser, so a replay is impossible unless the draw is fixed. Every local
 *     `shLocal` is a private copy of Fisher–Yates — 97 of them — and every one calls the
 *     SHARED `rnd` from `src/lib/random.ts`, as does `drawDrillRun`. Mocking that single
 *     export fixes every shuffle in the cohort at once.
 *  2. THE ANSWER READ OFF THE SCREEN. `DATA` is file-local and unexported in all of them,
 *     so nothing can import the key. A discovery pass answers with the first option and
 *     records the option the screen itself marks correct.
 *
 * THE FOUR CLAUSES, each the contract rather than an example:
 *
 *  A. A perfect run credits — `award` once, and the `vs` key written (read by APPLYING the
 *     `setStats` updater, not by matching its source).
 *  B. **The credit is already recorded when the results view first renders**, asserted
 *     BEFORE any exit is pressed. That ordering is the whole clause: checking afterwards
 *     cannot tell "credited on finishing" from "credited by that button", which is exactly
 *     how twenty-six hand-written screens passed their own contract tests while losing a
 *     learner's whole round to the header Back or the ever-present TabBar.
 *  C. A sub-threshold run writes NO `vs` key, pays nothing, and offers the retry.
 *  D. The retry then credits — the `finishFired.current = false` reset. A first attempt
 *     that failed recorded nothing, so the second must be able to; without this clause
 *     that line reads as redundant and gets deleted (it is what `DeclensionScreen` was
 *     missing when sweep 143 found its retry reset nothing at all).
 */
import type React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import { mountDrill, playRun, drillOptions, vsKeysWritten } from './helpers/driveHandWrittenDrill';

// The one lever. See (1) above — `.js` because that is the specifier the drills import.
vi.mock('../lib/random.js', () => ({ rnd: () => 0 }));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn(), speakSlow: vi.fn() }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...a: unknown[]) => markQuestMock(...a),
}));

/** DERIVED, never listed: a drill authored next month is a subject without an edit. */
const MODULES = import.meta.glob('../components/practice/*Drill.tsx');

/**
 * Not drills, or not driveable through this shape. Each reason is checked in BOTH
 * staleness directions below — the file must still exist, and it must still genuinely
 * fail to present a multiple-choice run, or the exemption is guarding nothing.
 */
const NOT_A_SUBJECT: Record<string, string> = {
  ModeDrill:
    'the shared ENGINE behind the other 109 drills, not a drill — it takes its bank as a prop and is driven by modeDrillContract.test.tsx',
  ConjugationDrill:
    'reads the conjugation tables from useGrammar(), so with no content payload it renders its loading state and never reaches a question; a content fixture is its own subject',
  ConjugationSessionDrill:
    'requires `category` and `cefr` props from the session builder and delegates to ConjugationDrillEngine, which conjugation-engine.test.tsx drives directly',
};

const SUBJECTS = Object.keys(MODULES)
  .map((p) => ({ path: p, name: p.replace(/^.*\//, '').replace(/\.tsx$/, ''), load: MODULES[p]! }))
  .sort((a, b) => a.name.localeCompare(b.name));

const DRIVEN = SUBJECTS.filter((s) => !NOT_A_SUBJECT[s.name]);

describe('the hand-written drill cohort — one contract, derived from the glob', () => {
  beforeEach(() => markQuestMock.mockClear());

  it('the corpus is the whole cohort and is not vacuous', () => {
    // A floor, because a glob typo would leave every clause below registering no tests
    // at all and the suite would stay green (`it.each` over an empty set is silent).
    expect(SUBJECTS.length, 'the glob matched almost nothing').toBeGreaterThanOrEqual(95);
    expect(DRIVEN.length).toBeGreaterThanOrEqual(92);
  });

  it('every exemption still names a file that exists', () => {
    const names = new Set(SUBJECTS.map((s) => s.name));
    for (const [name, reason] of Object.entries(NOT_A_SUBJECT)) {
      expect(names.has(name), `${name} is exempted but no longer matches the glob`).toBe(true);
      expect(reason.length, `${name}'s exemption has no reason`).toBeGreaterThan(30);
    }
  });

  for (const subject of DRIVEN) {
    it(`${subject.name} — credits a pass at the finish, not at the exit; and a failed retry can still pass`, async () => {
      const mod = (await subject.load()) as { default: React.ComponentType<never> };
      const Drill = mod.default;

      // --- discovery: answer with the first option and read what the screen marks right
      mountDrill(Drill);
      const discovery = playRun(() => null);
      expect(
        discovery.asked,
        `${subject.name} never presented a question — the driver did not reach its run`,
      ).toBeGreaterThanOrEqual(4);
      expect(
        discovery.answers.length,
        `${subject.name} answered ${discovery.asked} questions but marked a correct option on only ${discovery.answers.length} — it does not show which option was right`,
      ).toBe(discovery.asked);
      expect(
        drillOptions().length,
        `${subject.name} still shows options after its last question`,
      ).toBeLessThan(2);
      cleanup();

      // --- A + B: a perfect replay, and the credit read BEFORE any exit is pressed
      const pass = mountDrill(Drill);
      const perfect = playRun((_o, i) => discovery.answers[i] ?? null);
      expect(
        perfect.firstOptions,
        `${subject.name} drew a different run on the second mount — replay rests on the fixed rnd`,
      ).toEqual(discovery.firstOptions);
      expect(perfect.asked, `${subject.name}'s replay ran a different length`).toBe(
        discovery.asked,
      );
      expect(
        pass.award,
        `${subject.name} finished a perfect run and paid nothing before any exit was pressed — every exit but that one button loses the round`,
      ).toHaveBeenCalledTimes(1);
      const paidKeys = vsKeysWritten(pass.setStats);
      expect(
        paidKeys.length,
        `${subject.name} paid XP but wrote no vs key, so nothing records the completion`,
      ).toBeGreaterThanOrEqual(1);
      // Leaving must neither lose nor repeat it.
      const backs = screen.queryAllByRole('button');
      fireEvent.click(backs[0]!);
      expect(pass.award, `${subject.name} paid twice`).toHaveBeenCalledTimes(1);
      cleanup();

      // --- C + D: a failed run records nothing, and its retry can still credit
      const fail = mountDrill(Drill);
      playRun((opts, i) => opts.find((o) => o !== discovery.answers[i]) ?? null);
      expect(
        vsKeysWritten(fail.setStats),
        `${subject.name} recorded a completion for a failed run`,
      ).toEqual([]);
      expect(fail.award, `${subject.name} paid for a failed run`).not.toHaveBeenCalled();
      const retry = screen.queryByTestId('drill-retry');
      expect(retry, `${subject.name} offers no retry after a failed run`).toBeTruthy();
      fireEvent.click(retry!);
      const second = playRun((_o, i) => discovery.answers[i] ?? null);
      expect(second.asked, `${subject.name}'s retry did not restart the run`).toBe(discovery.asked);
      expect(
        fail.award,
        `${subject.name}'s retry could not credit — finishFired was never reset, so a learner who failed once can never be paid`,
      ).toHaveBeenCalledTimes(1);
      expect(vsKeysWritten(fail.setStats)).toEqual(paidKeys);
      cleanup();
    });
  }

  for (const [name, _reason] of Object.entries(NOT_A_SUBJECT)) {
    it(`${name} is still outside this shape (the exemption still guards something)`, async () => {
      const entry = SUBJECTS.find((s) => s.name === name)!;
      const mod = (await entry.load()) as { default: React.ComponentType<never> };
      // ModeDrill throws for want of its bank prop, which React logs through the error
      // boundary. That throw IS the evidence, so the log is expected noise, not a signal.
      const quiet = vi.spyOn(console, 'error').mockImplementation(() => {});
      let presented = 0;
      try {
        mountDrill(mod.default);
        presented = drillOptions().length;
      } catch {
        presented = -1; // threw for want of props — still outside the shape
      }
      quiet.mockRestore();
      cleanup();
      expect(
        presented,
        `${name} now presents a multiple-choice run on its own, so it belongs in the driven set and its exemption is stale`,
      ).toBeLessThan(2);
    });
  }
});
