/**
 * sw-cache-lifecycle.test.ts — the service worker's cache housekeeping.
 *
 * Two findings, both verified by reading src/sw.js:
 *
 * 1. STALE BUILD CACHES WERE NEVER RECLAIMED. CACHE_VER embeds __BUILD_ID__, so
 *    every deploy creates a fresh '<ver>-js' / '-data' / '-html' / '-images' /
 *    '-audio' / '-fonts' set. Nothing deleted the old ones:
 *      - cleanupOutdatedCaches() handles only the Workbox PRECACHE.
 *      - the activate handler deleted '-html' caches to force a fresh reload,
 *        and nothing else.
 *      - public/sw-migration.js deliberately KEEPS every 'nasa-hrvatska-v' cache
 *        (it only removes foreign names).
 *    So build-coupled caches accumulated across every deploy the app has ever
 *    shipped. chunk-data is ~700 kB and chunk-geo ~557 kB, so this grew fast and
 *    pushed the origin toward its storage quota — where the browser starts
 *    evicting, which is the opposite of what a cache is for.
 *
 * 2. THE DATA-CHUNK CACHE HELD 3 OF 10 ENTRIES. vite.config.js manualChunks
 *    emits ten chunks matching route 1's pattern, against maxEntries: 3, so
 *    opening a fourth content area evicted the first. Offline study content was
 *    effectively uncacheable while still paying every write.
 *
 * These tests pin the POLICY (which cache names are reclaimable, and the cap
 * against the real chunk count) by reading sw.js and vite.config.js. The SW's
 * event wiring itself is not unit-testable without a full ServiceWorkerGlobalScope,
 * and the skill's checklist calls for verifying update behaviour against a real
 * previous-version client — that part is a manual step, not something this file
 * claims to cover.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(__dirname, '../..');
const SW = readFileSync(resolve(root, 'src/sw.js'), 'utf8');
const VITE = readFileSync(resolve(root, 'vite.config.js'), 'utf8');

/** sw.js with comments removed, for assertions that must be about code only. */
const SW_CODE = SW.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

/** The suffix list the activate handler treats as safe to reclaim. */
function buildCoupledSuffixes(): string[] {
  const m = /const BUILD_COUPLED_SUFFIXES = \[([^\]]*)\]/.exec(SW);
  if (!m) throw new Error('BUILD_COUPLED_SUFFIXES not found in sw.js');
  return [...m[1]!.matchAll(/'([^']+)'/g)].map((x) => x[1]!);
}

/** Chunk names route 1 claims to cache. */
function dataRouteChunkNames(): string[] {
  const m = /\/\\\/assets\\\/chunk-\(([^)]*)\)/.exec(SW);
  if (!m) throw new Error('data-chunk route regex not found in sw.js');
  return m[1]!.split('|');
}

/** Chunk names vite actually emits, from manualChunks return values. */
function emittedChunkNames(): string[] {
  return [...VITE.matchAll(/return '(chunk-[a-z-]+)'/g)].map((x) => x[1]!.replace(/^chunk-/, ''));
}

describe('stale build caches are reclaimable', () => {
  const SUFFIXES = buildCoupledSuffixes();

  it('reclaims exactly the build-coupled caches, and nothing keyed by stable URLs', () => {
    // '-js' / '-data' / '-html' hold content-hashed URLs the new build will
    // never request again — pure waste.
    expect(SUFFIXES).toEqual(['-js', '-data', '-html']);
    // '-images' / '-audio' / '-fonts' are keyed by STABLE urls, so the previous
    // build's entries are still valid. Reclaiming them would force a re-download
    // of hundreds of MP3s for no benefit.
    expect(SUFFIXES).not.toContain('-audio');
    expect(SUFFIXES).not.toContain('-images');
    expect(SUFFIXES).not.toContain('-fonts');
  });

  it('scopes deletion by the app prefix and spares the current version', () => {
    // Both guards matter: without the prefix the SW would delete caches owned by
    // other origins/PWAs; without the CACHE_VER check it would delete its own.
    expect(SW).toMatch(/startsWith\('nasa-hrvatska-v'\)/);
    expect(SW).toMatch(/!k\.startsWith\(CACHE_VER\)/);
  });

  it('never reclaims the Workbox precache', () => {
    // The precache holds the offline app shell and is repopulated only during
    // INSTALL, which does not re-run between deploys. Deleting it broke
    // cold-start offline navigation once already.
    const m = /const allKeys = await caches\.keys\(\);([\s\S]*?)\} catch \{\}/.exec(SW);
    expect(m, 'the reclaim block was not found').toBeTruthy();
    expect(m![1]).not.toMatch(/workbox/i);
  });

  it('touches Cache Storage only — never storage where progress lives', () => {
    // A SW update must never destroy data outside its own caches. Assert against
    // CODE, not prose: the comments in sw.js legitimately name localStorage when
    // explaining why the handler stays away from it.
    expect(SW_CODE).not.toMatch(/localStorage/);
    expect(SW_CODE).not.toMatch(/indexedDB/);
    expect(SW_CODE).not.toMatch(/CLEAR_LOCAL_STORAGE/);
  });
});

describe('the data-chunk cache is sized to the real chunk count', () => {
  /** Chunks vite emits that route 1 actually claims. */
  function emittedDataChunks(): string[] {
    const claimed = dataRouteChunkNames();
    // Not every emitted chunk is a data chunk — 'chunk-context' exists to break
    // circular deps between screen chunks and belongs to route 2. Intersect
    // rather than asserting the route claims everything.
    return emittedChunkNames().filter((n) => claimed.includes(n));
  }

  it('the data route still matches the data chunks vite emits', () => {
    // Guards against a rename on either side quietly dropping a chunk out of
    // the route (it would fall through to route 2's NetworkFirst).
    expect(emittedDataChunks().length).toBeGreaterThanOrEqual(10);
  });

  it('maxEntries can hold one full build of data chunks', () => {
    // Anchored on the ExpirationPlugin call, NOT a loose search after the
    // cacheName — the explanatory comment above it contains the old value, and a
    // looser regex read that instead (observed while writing this test).
    const m =
      /cacheName: `\$\{CACHE_VER\}-data`[\s\S]*?new ExpirationPlugin\(\{ maxEntries: (\d+)/.exec(
        SW,
      );
    expect(m, 'the -data ExpirationPlugin was not found').toBeTruthy();
    const maxEntries = Number(m![1]);
    const emitted = emittedDataChunks();
    // The bug: 3 entries for 10 chunks meant permanent thrash.
    expect(emitted.length).toBeGreaterThan(3);
    expect(
      maxEntries,
      `maxEntries ${maxEntries} cannot hold ${emitted.length} emitted data chunks`,
    ).toBeGreaterThanOrEqual(emitted.length);
  });
});
