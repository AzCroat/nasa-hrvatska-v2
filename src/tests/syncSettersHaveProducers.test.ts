/**
 * SWEEP 117 — EVERY SETTER THE SYNC LAYER IS HANDED MUST HAVE A CALLER THAT IS
 * NOT THE SYNC LAYER.
 *
 * Sweep 116 found the daily challenge to be a CLOSED SYNC LOOP: `sDchlA` /
 * `sDchlSl` are called by `applyRemoteProgress` and by nothing else, `HomeTab`
 * voids both props, and no UI renders the result — so the state is threaded through
 * seven modules and uploaded to Firestore while nothing can produce it and nobody
 * can see it. Sweep 111 had already flagged `dcDay3` as a `NO_PRODUCER` key without
 * anyone noticing the whole FEATURE was dead.
 *
 * `RemoteProgressSetters` is the exact population that can go that way: the app
 * state the sync layer writes. This asks of each one the question nothing asked —
 * **does anything else ever set it?** Measured when written: 4 of 6 have real
 * producers (`usePreferences` toggles favourites, `AIConversation`/`AppRouter` add
 * journal words, `AppModals` completes onboarding, `WelcomeScreen` sets the name);
 * the daily-challenge pair does not.
 *
 * WHAT THIS CANNOT SEE, stated: a setter with a live caller whose RESULT nothing
 * renders — half of sweep 116's evidence. "Something sets it" is necessary, not
 * sufficient; `doneCount` proves a render site can exist and still be dead.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

/** The sync layer: writing a value here is a CONDUIT, not a producer. */
const SYNC_LAYER = new Set([
  'src/lib/applyRemoteProgress.ts',
  'src/lib/progressSnapshot.ts',
  'src/lib/firebase.ts',
  'src/lib/mergeStatsFromRemote.ts',
  'src/hooks/useSyncManager.ts',
]);

const APPLY = 'src/lib/applyRemoteProgress.ts';

const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

/** Names in `RemoteProgressSetters`, derived from the interface itself. */
function settersFromInterface(): string[] {
  const src = readFileSync(APPLY, 'utf8');
  const at = src.indexOf('export interface RemoteProgressSetters');
  expect(at, 'RemoteProgressSetters not found — the population moved').toBeGreaterThan(-1);
  const open = src.indexOf('{', at);
  const close = src.indexOf('}', open);
  expect(close).toBeGreaterThan(open);
  return [...src.slice(open, close).matchAll(/^\s*([A-Za-z_$][\w$]*)\s*[?:]/gm)].map((m) => m[1]!);
}

/**
 * Files that CALL `name(` somewhere, excluding the sync layer, the declaration
 * site, and plumbing that merely forwards the prop. A prop being passed down
 * (`sDchlA={sDchlA}`) or destructured is not a call, so the `(` is required.
 */
function nonSyncCallers(name: string): string[] {
  // A CLEAR IS NOT A PRODUCER, and this cost a surviving mutation to learn.
  // `App.tsx` calls `setFavs([])` on sign-out; with a bare `name(` matcher,
  // gutting `usePreferences`'s real toggle left the guard GREEN — a feature could
  // lose every producer and still look alive because only the wipe path remained.
  // A call whose sole argument is an empty or falsy literal resets the field; it
  // never originates learner data.
  const EMPTY_ARG = String.raw`\s*(?:\[\s*\]|\{\s*\}|''|""|false|null|undefined|0)\s*\)`;
  const call = new RegExp(`(?<![\\w$.])${name}\\s*\\((?!${EMPTY_ARG})`);
  const out: string[] = [];
  for (const f of globSync('src/**/*.{ts,tsx}')) {
    if (/(^|\/)(tests|__tests__)\//.test(f) || /\.test\./.test(f)) continue;
    if (SYNC_LAYER.has(f)) continue;
    const s = strip(readFileSync(f, 'utf8'));
    // `const [x, setX] = useState(...)` is the declaration, not a producer.
    const withoutDecl = s.replace(
      new RegExp(`\\[[^\\]]*\\b${name}\\b[^\\]]*\\]\\s*=\\s*(?:React\\.)?useState`, 'g'),
      '',
    );
    if (call.test(withoutDecl)) out.push(f);
  }
  return out;
}

/**
 * Setters the sync layer writes that nothing else sets. Sweep 116 measured the
 * reason; both staleness directions are checked below.
 */
const NO_PRODUCER: Record<string, string> = {
  sDchlA:
    'the daily challenge is VESTIGIAL (sweep 116) — HomeTab voids the prop, doneCount feeds a discarded _dcOpen, and there is no daily-challenge UI in src/components. Recorded, not repaired: removing the plumbing touches seven modules including the root component for no learner-visible gain',
  sDchlSl: 'as sDchlA — the same vestigial daily-challenge pair',
};

describe('the sync layer is a conduit: every setter it writes has a real producer', () => {
  const setters = settersFromInterface();

  it('the population is derived and non-empty', () => {
    expect(setters.length).toBeGreaterThanOrEqual(6);
    expect(setters).toContain('setFavs');
    expect(setters).toContain('sDchlA');
  });

  it('non-vacuity: the matcher finds a real producer and rejects a name nothing calls', () => {
    expect(nonSyncCallers('setFavs').length).toBeGreaterThan(0);
    expect(nonSyncCallers('sDchlA')).toEqual([]);
    expect(nonSyncCallers('setNoSuchSetterAnywhere')).toEqual([]);
    // THE CLEAR-EXCLUSION, PINNED ON REAL DATA. `App.tsx` calls `setFavs([])` on
    // sign-out and nothing else there produces favourites, so App.tsx must NOT
    // count as a producer. Without this assertion the exclusion survives its own
    // mutation: the orphan test only fails at ZERO callers, so dropping the clause
    // is invisible until a real producer ALSO disappears (measured — removing the
    // producer in usePreferences went from passing to failing 2 once the clause
    // existed). A clause that is load-bearing only jointly still needs a test of
    // its own.
    const favProducers = nonSyncCallers('setFavs');
    expect(readFileSync('src/App.tsx', 'utf8')).toMatch(/setFavs\(\[\]\)/);
    expect(favProducers).not.toContain('src/App.tsx');
    expect(favProducers).toContain('src/hooks/usePreferences.ts');
  });

  it('every sync-written setter is also set by something that is not the sync layer', () => {
    const orphans = setters
      .filter((n) => !(n in NO_PRODUCER) && nonSyncCallers(n).length === 0)
      .map((n) => `${n} — only the sync layer ever calls it`);
    expect(
      orphans,
      'A setter only the sync layer calls is a CLOSED LOOP: sync writes the state, ' +
        'sync reads it back, and nothing in the app can produce it. That is how the ' +
        'daily challenge died while remaining threaded through seven modules and ' +
        'uploaded to Firestore on every save (sweep 116).\n' +
        orphans.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });

  it('every NO_PRODUCER entry is still in the interface and still unproduced', () => {
    for (const [n, reason] of Object.entries(NO_PRODUCER)) {
      expect(reason.length, `${n} needs a reason`).toBeGreaterThan(40);
      expect(setters, `${n} left RemoteProgressSetters — drop the entry`).toContain(n);
      expect(
        nonSyncCallers(n),
        `${n} gained a producer — take it off NO_PRODUCER, the feature is alive again`,
      ).toEqual([]);
    }
    expect(Object.keys(NO_PRODUCER)).toHaveLength(2);
  });
});
