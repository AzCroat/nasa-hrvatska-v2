/**
 * dwellCredit — the Learn-Path black-hole dwell timer, extracted from
 * useScreenLauncher.
 *
 * The hook was at its 800-line max-lines cap (`blackHoleScreens.ts` was split
 * out of it for the same reason, as were `sessionPools` and `croatiaPool` from
 * useDailySession). THE CAP WAS NOT RAISED and no override was added: the
 * content gate below needed a few lines of logic and this block is the part of
 * the launcher with the most rules attached to it, so it is the part that earns
 * its own file.
 *
 * Nothing about the mechanism changed in the move. The caller still owns the
 * `vs` VISIT pre-write and the ref that cancels the timer on navigation.
 */
import {
  CONTENT_DEPENDENT_BLACK_HOLE_SCREENS,
  DWELL_CONTENT_WAITS,
  DWELL_XP,
} from './blackHoleScreens';
import { peekContent } from '../hooks/useContent';
import type { Stats, StatsDelta } from '../types/index.js';
import type { AwardActivityType } from './activityXp.js';

export const DWELL_MS = 20000;

export type DwellCreditParams = {
  /** The black-hole screen being dwelt on — `BLACK_HOLE_SCREENS`' key. */
  screenId: string;
  /** Which counter this screen pays: 'lc' or 'gc'. */
  bhStat: string;
  /**
   * Read at fire time, not at arm time: the caller assigns it inside the `vs`
   * updater, which React runs after this timer is scheduled. False means a
   * repeat visit, whose counters were credited the first time.
   */
  wasFirstVisit: () => boolean;
  setStats: (updater: (prev: Stats) => Stats) => void;
  writeDelta?: ((delta: StatsDelta & Record<string, unknown>) => void) | undefined;
  award: (
    amount: number,
    celebrate?: boolean,
    activityType?: AwardActivityType,
    exerciseId?: string,
  ) => void;
  /**
   * Called with each freshly armed timer so the caller's cancel-on-navigate ref
   * always points at the live one. A re-armed timer that the ref does not know
   * about would keep running after the learner left the screen.
   */
  onArm: (timer: ReturnType<typeof setTimeout>) => void;
};

/**
 * Arm the 20-second dwell credit. Returns the first timer; later re-arms are
 * handed to `onArm`.
 */
export function armDwellCredit(p: DwellCreditParams): ReturnType<typeof setTimeout> {
  let waits = 0;
  const arm = (): ReturnType<typeof setTimeout> => {
    const timer = setTimeout(() => {
      if (!p.wasFirstVisit()) return; // repeat visit — counters already credited
      // NEVER-DO 14, reached between two features that are each correct alone:
      // this timer knows the screen id and nothing about whether that screen had
      // anything to SHOW. Seven of the thirteen black-hole screens render from
      // the content payload, which lands seconds after first paint and never at
      // all on a failed fetch — so twenty seconds spent on "Loading this page"
      // or "couldn't be loaded" used to pay a completed informational lesson and
      // DWELL_XP for reading nothing.
      //
      // IT RE-ARMS RATHER THAN RETURNING, and that is the load-bearing half.
      // `vs` is written on TAP, so `wasFirstVisit` is false on every later visit
      // — a bare `return` here would have withheld the counter PERMANENTLY from
      // the ordinary learner who tapped in during the content window, which is
      // far commoner than a failed fetch and would trade one silent unfairness
      // for a worse one. Re-arming a full dwell means the credit is paid for
      // twenty seconds on a page that could actually be read, whenever the
      // payload turns up. The wait is CAPPED: past DWELL_CONTENT_WAITS the page
      // has been unreadable for over a minute and nothing is owed.
      //
      // The `vs` VISIT marker the caller wrote is deliberately untouched: it is
      // a different claim, and the path node must not stick incomplete.
      if (CONTENT_DEPENDENT_BLACK_HOLE_SCREENS.has(p.screenId) && !peekContent()) {
        if (waits >= DWELL_CONTENT_WAITS) return;
        waits += 1;
        p.onArm(arm());
        return;
      }
      p.setStats((prev) => {
        if (p.bhStat === 'lc') return { ...prev, lc: prev.lc + 1 };
        if (p.bhStat === 'gc') return { ...prev, gc: prev.gc + 1 };
        return prev;
      });
      if (p.writeDelta) {
        const delta: StatsDelta & Record<string, unknown> = {};
        if (p.bhStat === 'lc') delta.lc = 1;
        if (p.bhStat === 'gc') delta.gc = 1;
        if (Object.keys(delta).length > 0) p.writeDelta(delta);
      }
      // Credit the black-hole screen BY NAME. `award` is a useCallback over
      // [curEx, …], so the one captured here carries curEx as it was at the
      // click — i.e. before the sCurEx(item.go) further down the launcher.
      // Without the explicit id this 20s-later award attributes itself to
      // whatever exercise the user was in previously, which is not cosmetic: it
      // stamps that exercise's XP cooldown (destroying its XP for the rest of
      // the day), counts a synced production rep for it if it is a production
      // screen, and can complete an abandoned daily-session activity. Only
      // goBack() clears curEx, so any exit via the tab bar or browser-back
      // leaves a stale id to be mis-credited.
      //
      // XP rebalance (fluency initiative #3, 2026-08-14): dwell XP trimmed
      // 15 → 5. Presence on an info screen is worth a token amount, not a third
      // of a drill; the lc/gc counter credit above is untouched (it drives
      // Learn-Path completion, which stays as designed).
      p.award(DWELL_XP, undefined, 'lesson', p.screenId);
    }, DWELL_MS);
    return timer;
  };
  return arm();
}
