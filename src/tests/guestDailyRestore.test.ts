/**
 * SWEEP 115 — A LEGACY GUEST LOST THE DAY'S DAILY-CHALLENGE ANSWERS ON RELOAD,
 * WITH THE DATA ONE KEY AWAY.
 *
 * Sweep 111 established that `dcDay3` — the PRIMARY source `useDaily` reads in a
 * first-render initializer, under a comment saying it is "written on every answer
 * click" — is written by nothing outside the sync layer, and left the consequence
 * as a sharp open question: the documented fallback `loadFromMainDoc` needs
 * `uS.u`, so does a signed-out learner lose the state?
 *
 * ANSWERED, from App.tsx's own words: *"sS() — the only writer of the 'uS' session
 * record — runs solely in the fbUser branch … so a legacy guest never has one."*
 * A legacy guest (the anonymous-sign-in-unavailable path) therefore had NO primary
 * source and NO fallback — while `App.tsx` was writing their whole progress
 * snapshot, `dc` included, to `uP_guest` the entire time.
 *
 * `GUEST_UID` moved to `lib/guestIdentity` because two places must agree on it.
 * NOT into `lib/constants/storage`: that is a `.ts`/`.js` pair whose resolvers
 * disagree (TypeScript reads `storage.ts`, Vite bundles `storage.js`, and the two
 * have already drifted by `PLACEMENT_DECLINED`) — measured the hard way, by adding
 * the constant there first and watching `tsc` fail to see it.
 */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { GUEST_UID } from '../lib/guestIdentity';

const TODAY = '2026-09-25';
const DC = { day: TODAY, answered: [true, false, true], selected: ['a', '', 'c'] };

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(new Date(`${TODAY}T09:00:00Z`));
});
afterEach(() => vi.useRealTimers());

/** The real hook's module, imported fresh so its initializers re-run. */
async function loadDaily() {
  vi.resetModules();
  return (await import('../hooks/useDaily')) as unknown as {
    useDaily: () => { dchlA: boolean[]; dchlSl: string[] };
  };
}

describe('a guest with no session record still gets today’s answers back', () => {
  it('restores from uP_guest when there is no uS — the legacy-guest path', async () => {
    localStorage.setItem(`uP_${GUEST_UID}`, JSON.stringify({ dc: DC }));
    // deliberately NO 'uS': that is exactly the legacy-guest state
    expect(localStorage.getItem('uS')).toBe(null);
    const { useDaily } = await loadDaily();
    const { renderHook } = await import('@testing-library/react');
    const { result } = renderHook(() => useDaily());
    expect(result.current.dchlA).toEqual([true, false, true]);
    expect(result.current.dchlSl).toEqual(['a', '', 'c']);
  });

  it('a signed-in learner still reads THEIR blob, not the guest one', async () => {
    localStorage.setItem('uS', JSON.stringify({ u: 'ana@example.com' }));
    localStorage.setItem(
      'uP_ana@example.com',
      JSON.stringify({
        dc: { day: TODAY, answered: [true, true, true], selected: ['x', 'y', 'z'] },
      }),
    );
    // A stale guest blob must NOT win. (App.tsx removes it on sign-in; this pins
    // that the fallback cannot reach it while a session exists.)
    localStorage.setItem(`uP_${GUEST_UID}`, JSON.stringify({ dc: DC }));
    const { useDaily } = await loadDaily();
    const { renderHook } = await import('@testing-library/react');
    const { result } = renderHook(() => useDaily());
    expect(result.current.dchlSl).toEqual(['x', 'y', 'z']);
  });

  it('yesterday’s guest answers are discarded, not carried into today', async () => {
    localStorage.setItem(
      `uP_${GUEST_UID}`,
      JSON.stringify({
        dc: { day: '2026-09-24', answered: [true, true, true], selected: ['a', 'b', 'c'] },
      }),
    );
    const { useDaily } = await loadDaily();
    const { renderHook } = await import('@testing-library/react');
    const { result } = renderHook(() => useDaily());
    expect(result.current.dchlA).toEqual([false, false, false]);
  });

  it('GUEST_UID has ONE home, and App.tsx reads it from there', () => {
    // The two-copies rule: App.tsx must not declare its own literal again.
    const app = readFileSync('src/App.tsx', 'utf8');
    expect(app).toMatch(/import \{ GUEST_UID \} from '\.\/lib\/guestIdentity'/);
    expect(app).not.toMatch(/const GUEST_UID\s*=/);
    const hook = readFileSync('src/hooks/useDaily.ts', 'utf8');
    expect(hook).toMatch(/import \{ GUEST_UID \} from '\.\.\/lib\/guestIdentity'/);
    // …and it is NOT in the resolver-ambiguous constants pair.
    for (const f of ['src/lib/constants/storage.ts', 'src/lib/constants/storage.js'])
      expect(readFileSync(f, 'utf8')).not.toMatch(/GUEST_UID/);
  });
});
