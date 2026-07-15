/**
 * session-screen-guards.test.ts — guards the "Today's Session" critical learning
 * tool against STRANDED SESSIONS.
 *
 * Motivated by a real P0 (2026-07-15): a B2 user could not proceed past the
 * Speaking activity in the daily session. Root cause: `SpeakingScreen` reads
 * launch-time state held by the parent (App.tsx) — `sw`/`si`/`ssc`/… — and
 * renders `null` (a blank, back-button-less screen) when that state is absent
 * (page reload, or any parent re-render that clears it lands the router on
 * `currentScreen === 'speaking'` with `sw` undefined). Because the route
 * rendered `<SpeakingScreen>` UNCONDITIONALLY — the ONE launch-state exercise
 * without a ScreenGuard fallback — the stale `nh_session_started` marker was
 * never cleared, PINNING the session: re-tapping "Start" re-dropped onto the
 * same blank activity.
 *
 * Its siblings (mcgame, mcresult, flashcards, listening, match) were already
 * guarded with the `state?.[0] ? <Screen/> : <ScreenGuard/>` pattern — that
 * fallback both shows a recovery path AND clears the stale session markers.
 * Speaking was the gap. This test reads the ACTUAL AppRouter source so it
 * cannot be fooled by a stale hard-coded expectation, and fails if any
 * launch-state-dependent session screen regresses to an unconditional render.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { SESSION_SCREEN_IDS } from '../hooks/useDailySession';

const routerSrc = readFileSync('src/components/AppRouter.tsx', 'utf8');

// Session-reachable exercise screens whose rendered component depends on
// parent-held launch-time state and renders blank/null without it. Each MUST
// have a ScreenGuard fallback in its route block so a lost-state render offers
// a recovery path and clears the session markers instead of stranding the user.
const LAUNCH_STATE_DEPENDENT_SCREENS = [
  'speaking', // reads sw/si/sx/sr/ssc — the P0 regression
  'flashcards', // reads fcInitPool
  'mcgame', // reads mcInitQ
  'listening', // reads lsInitQ
  'match', // reads matchInitPool
];

/** Return the JSX source for a single `{currentScreen === 'X' && (…)}` block:
 *  everything from that screen's guard up to the next `currentScreen ===`. */
function routeBlock(screen: string): string | null {
  const start = routerSrc.indexOf(`currentScreen === '${screen}'`);
  if (start === -1) return null;
  const nextIdx = routerSrc.indexOf('currentScreen ===', start + 1);
  return routerSrc.slice(start, nextIdx === -1 ? undefined : nextIdx);
}

describe("Today's Session — no stranded sessions", () => {
  it('speaking is a real session screen (guarding it is meaningful)', () => {
    // If speaking ever leaves the session pool this test still holds, but the
    // assertion below would otherwise silently protect a dead route.
    expect(SESSION_SCREEN_IDS.has('speaking')).toBe(true);
  });

  it.each(LAUNCH_STATE_DEPENDENT_SCREENS)(
    "route '%s' has a ScreenGuard fallback for absent launch state",
    (screen) => {
      const block = routeBlock(screen);
      expect(block, `no AppRouter route block found for '${screen}'`).not.toBeNull();
      // Match the rendered JSX element `<ScreenGuard`, not the bare word — a
      // comment mentioning "ScreenGuard" must not satisfy the guard requirement.
      expect(
        block!.includes('<ScreenGuard'),
        `route '${screen}' renders its screen unconditionally — a lost/absent ` +
          `launch state would render blank and pin the daily session. Wrap it in ` +
          `the \`state?.[0] ? <Screen/> : <ScreenGuard/>\` pattern (see the 2026-07-15 ` +
          `Speaking P0).`,
      ).toBe(true);
    },
  );
});
