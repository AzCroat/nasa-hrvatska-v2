/**
 * masteryCounterIdempotent.test.tsx — finishing an exercise twice must not count twice.
 *
 * THE DEFECT, DEMONSTRATED RATHER THAN INFERRED (2026-09-26). `getCEFR(xp, lc, gc)` scores
 * a learner `xp + lc * 15 + gc * 25`, and that score drives the Learn Path stage. Ten
 * single-page grammar exercises incremented `gc` with **no once-only mechanism of any
 * kind** — no `vs` flag, and where there was a ref it does not survive a remount — so
 * finishing, leaving and finishing again added `gc` again, unbounded. Driven twice over one
 * shared stats object, `gc` went 1 → 2 on every one of them: twenty-five CEFR points per
 * replay of a fifteen-question sheet, in the one number a mastery course has to gate on.
 *
 * THE FIX IS THE AUTHORITY, NOT A REF PER SCREEN. `completeExercise` already owns an
 * idempotent `vs` write, and 140 components route through it, none of which can have this
 * bug. A per-screen ref fixes one mount and loses the flag on navigation — which is the
 * shape that has to be fixed ten times instead of once.
 *
 * WHAT THIS TEST DOES **NOT** ASSERT, deliberately. It does not touch the pass gate: these
 * screens credit on a genuine finish whatever the score (`effort`), and whether a grammar
 * exercise's `gc` should require 75% is a COURSE decision. Changing both at once would make
 * it impossible to say which change caused what. The per-answer XP is asserted UNCHANGED
 * for the same reason — practice is still worth practising.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import fs from 'node:fs';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import AppContext from '../context/AppContext';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

vi.mock('../lib/random.js', () => ({ rnd: () => 0 }));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn(), speakSlow: vi.fn() }));

const MODULES = import.meta.glob('../components/practice/exercises/*.tsx');

/**
 * THE POPULATION IS DERIVED FROM THE REGISTRY, VIA EACH FILE'S OWN COMPLETION KEY, and the
 * two earlier attempts are why:
 *
 *  1. Deriving from the DEFECT — files writing `s.gc + 1` themselves — emptied the
 *     population the moment all ten were routed through the authority, turning ten named
 *     failures into one vacuous pass. A population defined by a bug vanishes when it is
 *     fixed.
 *  2. Taking every counter-crediting screen in the directory pulled in the GATED ones,
 *     which this driver cannot pass: clicking an option per question scores about a
 *     quarter, so "credited nothing" is their correct outcome and says nothing about
 *     idempotency. **And they cannot be driven to a pass either** — measured: these screens
 *     colour only the CHOSEN option, so a wrong answer leaves the right one unmarked and no
 *     driver can learn the key from the DOM. That is good pedagogy and a hard limit here.
 *
 * So the subjects are exactly the `effort`-policy rows: screens that credit on a genuine
 * finish whatever the score, which is what this driver can honestly complete.
 */
const KEY_IN_FILE = /completeExercise\(\s*\{[^}]*?\bkey:\s*'([^']+)'/;

const SUBJECTS = Object.keys(MODULES)
  .map((p) => {
    const src = fs.readFileSync(p.replace('../', 'src/'), 'utf8');
    const key = src.match(KEY_IN_FILE)?.[1];
    return {
      path: p,
      name: p.replace(/^.*\//, '').replace(/\.tsx$/, ''),
      load: MODULES[p]!,
      key,
      policy: key ? EXERCISE_COMPLETION[key]?.policy.kind : undefined,
    };
  })
  .filter((s) => s.policy === 'effort')
  .sort((a, b) => a.name.localeCompare(b.name));

/** Option buttons on the sheet: everything but the header Back and the `b bp` primaries. */
function optionButtons(): HTMLElement[] {
  return screen
    .queryAllByRole('button')
    .slice(1)
    .filter((b) => !/\bbp?\b/.test(b.className)) as HTMLElement[];
}

function answerSheet(): void {
  // Three passes: answering one question can reveal controls for another. Each question
  // carries its own answered-guard, so the extra clicks are ignored and the whole sheet is
  // answered. Correctness is irrelevant for an `effort` row, which is the population here.
  for (let pass = 0; pass < 3; pass++) {
    for (const b of optionButtons()) fireEvent.click(b);
  }
}

interface Handles {
  counters: { lc: number; gc: number; sp: number; rc: number };
  xpPaid: number;
}

function mount(
  C: React.ComponentType<Record<string, unknown>>,
  stats: { lc: number; gc: number; sp: number; rc: number } & Record<string, unknown>,
) {
  const setStats = vi.fn((fn: (s: typeof stats) => typeof stats) => {
    Object.assign(stats, fn(stats));
  });
  const award = vi.fn();
  render(
    <AppContext.Provider value={{ setScr: vi.fn(), currentScreen: 'x' } as never}>
      <StatsProvider
        value={
          { stats, setStats, writeDelta: vi.fn(), dispatch: vi.fn(), award, level: 1 } as never
        }
      >
        <C goBack={vi.fn()} award={award} />
      </StatsProvider>
    </AppContext.Provider>,
  );
  return {
    award,
    read: (): Handles => ({
      counters: { lc: stats.lc, gc: stats.gc, sp: stats.sp, rc: stats.rc },
      xpPaid: award.mock.calls.reduce((n, c) => n + (typeof c[0] === 'number' ? c[0] : 0), 0),
    }),
  };
}

const fresh = () => ({ xp: 0, lc: 0, gc: 0, sp: 0, rc: 0, vs: [] as string[], ct: [], badges: [] });

/**
 * Screens this driver cannot carry to a credited finish, with the reason — checked in BOTH
 * staleness directions below, so the set can neither grow silently nor keep an entry that
 * has become driveable.
 */
const NOT_DRIVEABLE: Record<string, string> = {
  ProfessionGenderScreen:
    'the quiz sits behind a TAB (setTab), so a driver that clicks every option button ' +
    'clicks the tab strip and never reaches a question — a limit of this driver, not a ' +
    'defect in the screen. Its idempotency rests on the same registry row as the other nine.',
};

const unreached: string[] = [];
const credited: string[] = [];

describe('a mastery counter must be credited once, however often the exercise is replayed', () => {
  beforeEach(() => localStorage.clear());

  it('the derivation found the cohort', () => {
    // Ten screens were converted here; the floor guards the glob, the key extraction and
    // the registry lookup all at once. Zero reads exactly like a clean sweep.
    expect(
      SUBJECTS.length,
      `effort-policy screens found: ${SUBJECTS.map((s) => s.key).join(', ')}`,
    ).toBeGreaterThan(8);
  });

  for (const subject of SUBJECTS) {
    it(`${subject.name} counts one completion for two finishes`, async () => {
      const mod = (await subject.load()) as { default: React.ComponentType<never> };
      const C = mod.default as React.ComponentType<Record<string, unknown>>;
      const stats = fresh();
      const one = mount(C, stats);
      answerSheet();
      const first = one.read();
      cleanup();

      const two = mount(C, stats);
      answerSheet();
      const second = two.read();
      cleanup();

      const moved = (['lc', 'gc', 'sp', 'rc'] as const).filter((k) => first.counters[k] > 0);
      if (!moved.length) {
        unreached.push(subject.name);
        expect(
          NOT_DRIVEABLE[subject.name],
          `${subject.name} credited nothing on a full run and is not a known driver limit — ` +
            `either the screen stopped crediting, or this driver stopped reaching its questions`,
        ).toBeTruthy();
        return;
      }
      credited.push(subject.name);
      expect(moved.length, `${subject.name} moved more than one counter`).toBe(1);
      const k = moved[0]!;
      expect(first.counters[k], `${subject.name} should credit ${k} once`).toBe(1);
      expect(
        second.counters[k],
        `${subject.name} credited ${k} AGAIN on a replay — ${k === 'gc' ? 25 : 15} CEFR ` +
          `points per repeat, in the number the Learn Path stage is derived from`,
      ).toBe(1);
      expect(second.xpPaid, `${subject.name} stopped paying XP on a replay`).toBe(first.xpPaid);
    });
  }

  it('every screen is either driven or a recorded driver limit, and the limits are still real', () => {
    // Without this, a driver that stopped completing anything would report every screen as
    // "unreached" and the suite would be green while asserting nothing at all.
    expect(
      credited.length + unreached.length,
      'some subject neither credited nor was recorded — a test threw before either',
    ).toBe(SUBJECTS.length);
    expect(
      credited.length,
      `only ${credited.length} of ${SUBJECTS.length} reached a credited finish; ` +
        `unreached: ${unreached.join(', ') || 'none'}`,
    ).toBeGreaterThan(SUBJECTS.length - 2);
    // The other direction: an entry that has become driveable must be removed, or it sits
    // here excusing a screen nothing checks.
    for (const name of Object.keys(NOT_DRIVEABLE)) {
      expect(
        unreached,
        `${name} is now driveable — delete its NOT_DRIVEABLE entry so it is asserted`,
      ).toContain(name);
    }
  });
});
