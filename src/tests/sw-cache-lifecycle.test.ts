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
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(__dirname, '../..');
const SW = readFileSync(resolve(root, 'src/sw.js'), 'utf8');
const VITE = readFileSync(resolve(root, 'vite.config.js'), 'utf8');

/**
 * sw.js with comments removed, for assertions that must be about code only.
 *
 * LINE COMMENTS ARE STRIPPED FIRST, AND THE ORDER IS THE WHOLE POINT. Stripping
 * block comments first, as this did, opened one at the `/api/*` written inside a
 * `//` comment above the navigation route and closed it on the star-then-slash
 * that ends the Google Fonts route regex — swallowing **every registerRoute call in the file**.
 * SW_CODE was 6,430 characters of a 21,532-character file, so the assertion that
 * the SW never touches localStorage or IndexedDB was reading 30% of it and
 * reporting on all of it. Found while adding the asset-cache assertion below,
 * which matched nothing and had no business failing.
 */
const SW_CODE = SW.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * The strip must not eat the code it is meant to expose, and a LENGTH RATIO is
 * the wrong check: sw.js is 57% prose, so any threshold loose enough to pass
 * today is loose enough to miss a strip that ate half the routes. Count the
 * constructs instead — every `registerRoute` and `cacheName` in the file has to
 * survive, which is precisely what did not.
 */
function surviving(re: RegExp): [number, number] {
  const n = (src: string) => (src.match(re) ?? []).length;
  return [n(SW), n(SW_CODE)];
}

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

describe('the comment strip exposes the code it claims to', () => {
  // This is the guard on the guard. Without it, an assertion that matches
  // nothing is indistinguishable from an assertion that passes.
  it.each([
    ['registerRoute', /registerRoute\(/g],
    ['cacheName', /cacheName:/g],
  ])('every %s survives the strip', (_label, re) => {
    const [inFile, inCode] = surviving(re);
    expect(inFile).toBeGreaterThan(3);
    expect(inCode).toBe(inFile);
  });
});

describe('stale build caches are reclaimable', () => {
  const SUFFIXES = buildCoupledSuffixes();

  it('reclaims exactly the build-coupled caches, and nothing keyed by stable URLs', () => {
    // '-js' / '-data' / '-html' hold content-hashed URLs the new build will
    // never request again — pure waste.
    expect(SUFFIXES).toEqual(['-js', '-data', '-html']);
    // '-images' / '-audio' / '-fonts' are keyed by STABLE urls, so reclaiming
    // them on every deploy WOULD be a pointless re-download. What makes that
    // true is the assertion below: their cache NAME has to be stable too.
    expect(SUFFIXES).not.toContain('-audio');
    expect(SUFFIXES).not.toContain('-images');
    expect(SUFFIXES).not.toContain('-fonts');
  });

  /**
   * THIS FILE'S OWN HEADER NAMED '-images' / '-audio' / '-fonts' AS PART OF THE
   * ACCUMULATION PROBLEM, AND THEN THE FIX EXEMPTED THEM.
   *
   * The exemption's reason — "keyed by STABLE urls, so the previous build's
   * entries are still perfectly valid" — was true and beside the point: the
   * entries were valid but UNREACHABLE, because every route opened
   * `${CACHE_VER}-…` and CACHE_VER embeds the build id. So each deploy opened an
   * empty cache and orphaned the full one. The re-download the exemption existed
   * to prevent happened anyway, at ~6 deploys a day, while the orphans piled up.
   * The test above restated the premise instead of checking it, and so defended
   * the defect — which is only safe once the names are actually stable.
   */
  it('asset caches are named stably, or the exemption above orphans them', () => {
    for (const suffix of ['-images', '-audio', '-fonts']) {
      const versioned = new RegExp('cacheName: `\\$\\{CACHE_VER\\}' + suffix + '`');
      expect(
        SW_CODE,
        `${suffix} cache is build-versioned, so every deploy opens an empty one`,
      ).not.toMatch(versioned);
      expect(SW_CODE, `${suffix} cache should be named from ASSET_CACHE`).toMatch(
        new RegExp('cacheName: `\\$\\{ASSET_CACHE\\}' + suffix + '`'),
      );
    }
    // And the stable name must still survive public/sw-migration.js, which runs
    // on EVERY page load and deletes any cache not starting with this prefix.
    const m = /const ASSET_CACHE = '([^']+)'/.exec(SW);
    expect(m, 'ASSET_CACHE not found in sw.js').toBeTruthy();
    expect(m![1]!.startsWith('nasa-hrvatska-v')).toBe(true);
  });

  it('reclaims the versioned asset caches left by the old scheme', () => {
    // Without this the orphans already on learners' devices stay there for ever:
    // no build creates a versioned asset cache any more, so nothing else would
    // ever name them again.
    const m = /const allKeys = await caches\.keys\(\);([\s\S]*?)\} catch \{\}/.exec(SW);
    expect(m, 'the reclaim block was not found').toBeTruthy();
    const block = m![1]!;
    expect(block).toMatch(/ASSET_SUFFIXES/);
    // ...while sparing the live ones, which share those same suffixes.
    expect(block).toMatch(/startsWith\(ASSET_CACHE\)/);
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

/**
 * THE AUDIO ROUTE MATCHED NOTHING THE APP SHIPS.
 *
 * It read `/\/audio\/.*\.(mp3|ogg|wav)$/i`, and the one audio asset in the
 * repo is `public/audio/bojna-cavoglave-v3.m4a` — the song on the history
 * screen. So the '-audio' cache was never populated, and the RangeRequestsPlugin
 * configured for seeking never applied. A route that matches nothing reads
 * exactly like a route that works, which is the same shape as a guard alternation
 * naming a symbol that appears nowhere in the corpus.
 *
 * So the extensions are DERIVED from what is actually in public/ rather than
 * restated here. A new format dropped in that the route does not claim fails
 * here instead of silently never being cached.
 */
describe('the asset routes match the assets the app ships', () => {
  /** Extensions a route claims, read out of its regex in sw.js. */
  function claimed(re: RegExp, label: string): string[] {
    const m = re.exec(SW_CODE);
    if (!m) throw new Error(`${label} route regex not found in sw.js`);
    return m[1]!.split('|');
  }

  /** Extensions actually present under a public/ subtree. */
  function shipped(dir: string, only?: RegExp): string[] {
    const root = resolve(__dirname, '../../public', dir);
    const out = new Set<string>();
    const walk = (d: string) => {
      for (const e of readdirSync(d, { withFileTypes: true })) {
        const full = resolve(d, e.name);
        if (e.isDirectory()) walk(full);
        else {
          const ext = e.name.split('.').pop()!.toLowerCase();
          if (!only || only.test(ext)) out.add(ext);
        }
      }
    };
    walk(root);
    return [...out];
  }

  it('the audio route claims every audio format in public/audio', () => {
    const exts = claimed(/\\\/audio\\\/[^(]*\(([a-z0-9|]+)\)/i, 'audio');
    const present = shipped('audio');
    expect(present.length, 'no audio assets found — this test would be vacuous').toBeGreaterThan(0);
    expect(present.filter((e) => !exts.includes(e))).toEqual([]);
  });

  it('the image route claims every image format in public/', () => {
    const exts = claimed(/registerRoute\(\s*\/\\\.\(([a-z0-9|]+)\)\$\//, 'image');
    const present = shipped('.', /^(svg|png|webp|jpg|jpeg|gif|avif|bmp|ico)$/);
    // 'ico' is deliberately not claimed: the favicon is precached by Workbox, so
    // a runtime route for it would be dead weight. Everything else must match.
    const unclaimed = present.filter((e) => e !== 'ico' && !exts.includes(e));
    expect(present.length).toBeGreaterThan(1);
    expect(unclaimed).toEqual([]);
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
