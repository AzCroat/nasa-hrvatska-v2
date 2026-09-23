/**
 * dwellPreWriteSuppression.test.tsx — the launcher's `vs` pre-write is a VISIT
 * marker, and three screens were reading it as a COMPLETION marker (2026-09-23).
 *
 * THE MECHANISM. `launchPathItem` writes the screen id into `stats.vs` the
 * INSTANT a LEARN_PATH item whose `go` is in BLACK_HOLE_SCREENS is tapped —
 * synchronously, before a single question is answered — so that a learner who
 * leaves in under 20s still ticks the path node. The 20s dwell timer then adds
 * the lc/gc counter and DWELL_XP.
 *
 * That is correct for an informational screen, which is all the map was ever
 * meant to hold: `blackHoleScreens.ts` says so in its own header, and six
 * screens (grammarmap, reflexive, production_drill, pitchaccent, pitch_accent,
 * shadowing) were removed from it for having a built-in quiz. Four were left in
 * that have one, and in three of them the pre-write suppresses the screen's own
 * credit:
 *
 *   alphabet  — `firstCompletion = !stats.vs.includes('alphabet')` gates BOTH the
 *               20 XP quiz award AND the lc write. After any prior tap of lp10
 *               the award call is unreachable forever.
 *   falsefr   — award is ungated; only the lc write is suppressed, and only when
 *               the learner finishes inside 20s (after which the dwell timer,
 *               cleared on navigation, never runs).
 *   techvoc   — same shape as falsefr.
 *   writing   — self-writes `vs` and NO counter, so the dwell strictly ADDS the
 *               lc it would never have written. Nothing is suppressed; it stays
 *               dwell-credited, and the census below pins that reason in both
 *               staleness directions.
 *
 * THE BLOCKING CONSEQUENCE IS NOT THE XP. `award()` is what writes
 * `nh_session_completed` (useAward, before its own cooldown gate). Today's
 * Session launches the day-one curriculum drill as `alphabet`; for any learner
 * whose `vs` already carries the key — which is every learner who ever tapped
 * lp10, and every learner on the tree before this change — the Done button
 * calls no award, so nothing signals the session, and the activity is stranded
 * at N-1/N with no path to complete it on any later attempt either.
 *
 * TWO FIXES, NEITHER SUFFICIENT ALONE. Removing the three keys makes `vs` an
 * honest first-completion marker for a learner starting today; it does nothing
 * for the learners already carrying it, whose sessions would still strand. The
 * unconditional `signalSessionCompleteIfActive('alphabet')` covers them. The
 * first without the second leaves the installed base stranded; the second
 * without the first leaves the 20 XP unreachable.
 *
 * WHAT THIS COSTS, stated: a learner who opens Alphabet / False Friends / Tech
 * & Digital and leaves without finishing now earns nothing there, where before
 * they earned 1 lc and 5 XP for twenty seconds of presence. All three have a
 * completion control, and their path nodes still tick — on the screen's own
 * `vs` write, or on the `lcAtLeast` fallback the ckRule already carries. That
 * is exactly how pitchaccent and shadowing have worked since they were removed.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import React from 'react';

vi.mock('firebase/app', () => ({ initializeApp: vi.fn(() => ({})), getApps: vi.fn(() => []) }));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn(() => () => {}),
  initializeAuth: vi.fn(() => ({})),
  browserLocalPersistence: {},
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
  setPersistence: vi.fn(() => Promise.resolve()),
  GoogleAuthProvider: vi.fn(() => ({})),
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

const statsMock = {
  stats: { vs: [] as string[], lc: 0 },
  setStats: vi.fn(),
  dispatch: vi.fn(),
  award: vi.fn(),
  level: 1,
  writeDelta: vi.fn(),
};
vi.mock('../context/StatsContext.tsx', () => ({
  useStats: () => statsMock,
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

import AlphabetScreen from '../components/learn/AlphabetScreen';
import { BLACK_HOLE_SCREENS } from '../lib/blackHoleScreens';

/** Walk the 10-question quiz to the results screen (answers are not scored here). */
function playToDone() {
  fireEvent.click(screen.getByText(/Test the Alphabet/));
  for (let q = 0; q < 10; q++) {
    const opts = document.querySelectorAll('div[style*="grid"] > button');
    fireEvent.click(opts[opts.length - 1]!);
    const next = screen.queryByText(/Next →|See Results/);
    if (next) fireEvent.click(next);
  }
  fireEvent.click(screen.getByText(/✓ Done/));
}

describe('the day-one session activity completes for a learner who has seen the screen', () => {
  beforeEach(() => {
    statsMock.stats = { vs: [], lc: 0 };
    vi.clearAllMocks();
    localStorage.clear();
    sessionStorage.clear();
  });

  it('signals the session even when `vs` already carries the key', () => {
    // The installed base: every learner who ever tapped lp10 carries this,
    // written by the launcher before they answered anything.
    statsMock.stats = { vs: ['alphabet'], lc: 1 };
    sessionStorage.setItem('nh_session_started', 'alphabet');

    render(<AlphabetScreen goBack={vi.fn()} award={vi.fn()} />);
    playToDone();

    expect(
      sessionStorage.getItem('nh_session_completed'),
      'the learner finished the day-one alphabet drill and Today’s Session stayed at N-1/N',
    ).toBe('alphabet');
  });

  it('signals the session on a first completion too', () => {
    // Here `award()` would also signal, but only because AppRouter passes the
    // prop — the screen must not depend on that to advance a practice FLOW.
    sessionStorage.setItem('nh_session_started', 'alphabet');
    render(<AlphabetScreen goBack={vi.fn()} award={vi.fn()} />);
    playToDone();
    expect(sessionStorage.getItem('nh_session_completed')).toBe('alphabet');
  });

  it('does not complete an activity that was never launched', () => {
    // signalSessionCompleteIfActive is a no-op with no active activity, and a
    // screen-scoped call can never complete a DIFFERENT one.
    sessionStorage.setItem('nh_session_started', 'genitivedrill');
    render(<AlphabetScreen goBack={vi.fn()} award={vi.fn()} />);
    playToDone();
    expect(
      sessionStorage.getItem('nh_session_completed'),
      'the alphabet quiz completed somebody else’s session activity',
    ).toBeNull();
  });
});

/**
 * The census. Derived from the REAL router and the REAL component sources, so a
 * screen that gains a self-credit write — or a key added to the dwell map for a
 * screen that already has one — fails here rather than silently losing the
 * learner's credit. A source pin on one screen name would go stale on a rename;
 * this asks the general question of every key the map holds.
 */
describe('no dwell-credited screen writes a counter the pre-write suppresses', () => {
  const router = readFileSync('src/components/AppRouter.tsx', 'utf8');

  function componentFiles(): Map<string, string> {
    const out = new Map<string, string>();
    const walk = (dir: string) => {
      for (const e of readdirSync(dir)) {
        const p = join(dir, e);
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(tsx|jsx)$/.test(e)) {
          const name = e.replace(/\.(tsx|jsx)$/, '');
          if (!out.has(name)) out.set(name, p);
        }
      }
    };
    walk('src/components');
    return out;
  }
  const FILES = componentFiles();

  /** Every component rendered under `currentScreen === '<key>'`, bounded by the
   *  NEXT such marker — a fixed-size window bleeds into the following block. */
  function componentsFor(key: string): string[] {
    const marks = [...router.matchAll(/currentScreen === '([\w-]+)'/g)];
    const out = new Set<string>();
    for (let i = 0; i < marks.length; i++) {
      if (marks[i]![1] !== key) continue;
      const start = marks[i]!.index!;
      const end = i + 1 < marks.length ? marks[i + 1]!.index! : router.length;
      for (const m of router.slice(start, end).matchAll(/<([A-Z]\w+)\b/g)) {
        if (m[1] !== 'ScreenErrorBoundary') out.add(m[1]!);
      }
    }
    return [...out];
  }

  /** Does this screen write its own dwell key into `vs`, and does that same
   *  write bump lc/gc? The counter is what the pre-write costs the learner. */
  function selfCredit(key: string): { vs: boolean; counter: boolean } {
    let vsWrite = false;
    let counter = false;
    for (const c of componentsFor(key)) {
      const p = FILES.get(c);
      if (!p) continue;
      const src = readFileSync(p, 'utf8');
      const m = new RegExp(
        String.raw`vs:\s*\[\s*\.\.\..{0,24}?prev\.vs.{0,20}?,\s*'${key}'\s*\]`,
        's',
      ).exec(src);
      if (!m) continue;
      vsWrite = true;
      const seg = src.slice(Math.max(0, m.index - 260), m.index + m[0].length + 40);
      if (/\b(?:lc|gc):\s*\(?\s*prev\.(?:lc|gc)/.test(seg)) counter = true;
    }
    return { vs: vsWrite, counter };
  }

  const KEYS = Object.keys(BLACK_HOLE_SCREENS);

  // `writing` self-writes `vs` and NO counter, so dwell strictly ADDS the lc it
  // would never have written — nothing is suppressed. Held with its reason and
  // checked BOTH ways below, because an exemption that has stopped describing
  // its subject guards nothing while suspending a real check.
  const COUNTERLESS_SELF_WRITERS = new Set(['writing']);

  it('the map is not empty (an it.each over nothing registers no tests)', () => {
    expect(KEYS.length).toBeGreaterThan(10);
  });

  it.each(KEYS)('%s does not have a counter the launcher pre-empts', (key) => {
    const { vs, counter } = selfCredit(key);
    if (!vs) return; // a genuinely informational screen — dwell is its only credit
    expect(
      counter && !COUNTERLESS_SELF_WRITERS.has(key),
      `${key} writes its own vs key AND a counter, but the launcher pre-writes that key on tap — ` +
        `the screen's credit is suppressed for anyone who finishes inside 20s. ` +
        `It has a completion control, so it does not belong in BLACK_HOLE_SCREENS.`,
    ).toBe(false);
  });

  it.each([...COUNTERLESS_SELF_WRITERS])(
    '%s is still a counterless self-writer (stale exemption guard)',
    (key) => {
      expect(BLACK_HOLE_SCREENS[key], `${key} is no longer dwell-credited`).toBeDefined();
      const { vs, counter } = selfCredit(key);
      expect(vs, `${key} no longer writes its own vs key — the exemption describes nothing`).toBe(
        true,
      );
      expect(
        counter,
        `${key} now writes a counter too, so the pre-write suppresses it — remove the exemption ` +
          `and take the key out of BLACK_HOLE_SCREENS`,
      ).toBe(false);
    },
  );

  it.each(['alphabet', 'falsefr', 'techvoc'])('%s is no longer dwell-credited', (key) => {
    expect(
      BLACK_HOLE_SCREENS[key],
      `${key} is back in the dwell map — it has a built-in completion control, so the pre-write ` +
        `suppresses the credit it grants itself`,
    ).toBeUndefined();
  });
});
