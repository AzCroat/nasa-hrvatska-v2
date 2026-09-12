/**
 * viteEnvReachesBuild.test.ts — every `import.meta.env.VITE_*` the client READS
 * must be PASSED to the production build.
 *
 * THE BUG CLASS, met three times now and silent every time. A build-time value
 * that never reaches the bundle is `undefined` at runtime, and every consumer
 * of it is written as a guard — `if (KEY)` / `if (config.measurementId)` —
 * because absence is supposed to be the graceful case. So the feature simply
 * does not exist, correctly, invisibly, forever:
 *
 *   - SENTRY_DSN (2026-09-04): installed under the wrong name for the relay and
 *     `VITE_`-prefixed onto Pages where prebuilt assets can never see it. Zero
 *     browser telemetry, and the bundle looked healthy.
 *   - __BUILD_ID__ (2026-09-12): read off `globalThis`, which Vite's `define`
 *     does not substitute. The Sentry release was undefined so every session
 *     was discarded client-side, and `isStaleBuild` never fired once.
 *   - VITE_POSTHOG_KEY + VITE_FIREBASE_MEASUREMENT_ID (2026-09-12, this file):
 *     read in `src/` and passed by NO build step, so `initPostHog` is gated
 *     false and `getAnalytics` is never constructed. Both analytics paths dead;
 *     no posthog chunk is even emitted, exactly as `vendor-sentry` was not.
 *
 * WHAT MAKES IT INVISIBLE is that the INPUT and the OUTPUT are different facts.
 * A secret existing in GitHub says nothing about whether the build was handed
 * it, and CI's own "Verify the built bundle carries the Sentry DSN" step exists
 * because that distinction had to be learned the hard way. This test guards the
 * first half — is it even passed — mechanically and from source.
 *
 * DERIVED IN BOTH DIRECTIONS. The read set comes from `src/`, the passed set
 * from `ci.yml`'s Build step. Neither is restated, so a variable added to
 * either side next month is covered without anyone remembering this file.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CI = readFileSync('.github/workflows/ci.yml', 'utf8');

function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === 'node_modules' || e === 'tests') continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) sourceFiles(p, out);
    else if (/\.(ts|tsx|js|jsx)$/.test(p)) out.push(p);
  }
  return out;
}

/** Comments stripped: prose naming a variable is not a read of it. */
function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
}

/** Every VITE_ var the client actually reads. */
const READS: string[] = (() => {
  const found = new Set<string>();
  for (const f of sourceFiles('src')) {
    for (const m of stripComments(readFileSync(f, 'utf8')).matchAll(
      /import\.meta\.env\.(VITE_[A-Z0-9_]+)/g,
    )) {
      found.add(m[1]);
    }
  }
  return [...found].sort();
})();

/**
 * Every VITE_ var the PRODUCTION build step is handed. Sliced from the `Build`
 * step specifically — the E2E build is a different step with placeholder
 * values, and counting it would mask exactly the gap this test is for.
 */
const PASSED: string[] = (() => {
  const start = CI.indexOf('\n      - name: Build\n');
  const block = CI.slice(start, CI.indexOf('\n      - name:', start + 10));
  return [...new Set([...block.matchAll(/(VITE_[A-Z0-9_]+):/g)].map((m) => m[1]))].sort();
})();

describe('the two sets are real', () => {
  it('finds the reads in src/', () => {
    expect(READS.length).toBeGreaterThanOrEqual(7);
    expect(READS).toContain('VITE_SENTRY_DSN');
    expect(READS).toContain('VITE_FIREBASE_API_KEY');
  });

  it('finds the vars the production Build step passes', () => {
    // If this slice ever comes back empty the test below passes vacuously and
    // guards nothing — the decorative-guard failure this repo keeps meeting.
    expect(PASSED.length).toBeGreaterThanOrEqual(6);
    expect(PASSED).toContain('VITE_SENTRY_DSN');
  });
});

describe('every VITE_ var the client reads reaches the production build', () => {
  it('has no read that the build never supplies', () => {
    const orphans = READS.filter((v) => !PASSED.includes(v));
    expect(
      orphans,
      'These are READ in src/ but passed by NO build step, so they are ' +
        '`undefined` in the shipped bundle. Every consumer guards on them, so ' +
        'the feature is silently absent rather than broken:\n' +
        orphans.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });
});
