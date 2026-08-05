/**
 * @vitest-environment node
 *
 * dualImport.test.ts — a module must not be both statically and dynamically
 * imported.
 *
 * THE PROBLEM
 * -----------
 * Rollup says it plainly during every build:
 *
 *   (!) src/lib/cefrCertification.ts is dynamically imported by src/App.tsx but
 *       also statically imported by src/lib/applyRemoteProgress.ts, … ,
 *       dynamic import will not move module into another chunk.
 *
 * Once anything imports a module statically, the module is in that chunk. Every
 * `await import()` of it elsewhere then buys nothing: no deferral, no smaller
 * first paint. What it does buy is an async boundary that has to be awaited, a
 * `__vitePreload` wrapper, and — worst — the *appearance* of laziness. Reviewers
 * read `await import('./heavy')` as "this is deferred" and it is not.
 *
 * Four modules were in that state (apiFetch, cefrCertification, contentClient,
 * nativePost) across thirteen call sites. App.tsx was importing
 * cefrCertification statically on line 31 and dynamically 800 lines later.
 *
 * WHAT THIS DID NOT FIX
 * ---------------------
 * Not first-paint size. The eager payload was 2842 kB raw / 895 kB gzipped
 * before and after, because none of these four is the content library — they
 * were already eager via their static importers, so normalising to static
 * changed nothing about what loads. This test exists to keep the graph honest,
 * not because it made the app faster. The blank-screen cold start is a separate,
 * still-open problem (see firstPaintGraph.test.ts).
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';

const CANDIDATES = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js'];

function resolveRelative(fromFile: string, spec: string): string | null {
  if (!spec.startsWith('.')) return null;
  const base = resolve(dirname(fromFile), spec).replace(/\.[jt]sx?$/, '');
  for (const ext of CANDIDATES) {
    const p = base + ext;
    if (extname(p)) {
      try {
        readFileSync(p);
        return p;
      } catch {
        /* keep trying */
      }
    }
  }
  return null;
}

interface Usage {
  static: Set<string>;
  dynamic: Set<string>;
}

/** Map every app module to the files that import it, split by import kind. */
function importKinds(): Map<string, Usage> {
  const files = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f: string) => !f.includes('/tests/') && !f.includes('__tests__') && !f.includes('.test.'),
  );
  const usage = new Map<string, Usage>();
  const record = (target: string, importer: string, kind: 'static' | 'dynamic') => {
    if (!usage.has(target)) usage.set(target, { static: new Set(), dynamic: new Set() });
    usage.get(target)![kind].add(importer);
  };

  for (const file of files) {
    let src = readFileSync(file, 'utf8');
    src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    for (const m of src.matchAll(/['"](\.[^'"\n]{0,200})['"]/g)) {
      const before = src.slice(Math.max(0, m.index! - 40), m.index!);
      const isDynamic = /import\s*\(\s*$/.test(before);
      const isStatic = !isDynamic && /(?:from\s*|import\s*)$/.test(before);
      if (!isDynamic && !isStatic) continue;
      const target = resolveRelative(file, m[1]!);
      if (!target) continue;
      record(target, resolve(file), isDynamic ? 'dynamic' : 'static');
    }
  }
  return usage;
}

describe('module import kinds', () => {
  const usage = importKinds();
  const rel = (p: string) => p.replace(`${process.cwd()}/`, '');

  it('the scan finds both kinds of import at all', () => {
    // Non-vacuity: with no dynamic edges found, the check below would pass
    // trivially and this file would assert nothing for the rest of its life.
    const anyDynamic = [...usage.values()].filter((u) => u.dynamic.size > 0).length;
    const anyStatic = [...usage.values()].filter((u) => u.static.size > 0).length;
    expect(anyDynamic, 'no dynamic imports found — the scan is broken').toBeGreaterThan(10);
    expect(anyStatic, 'no static imports found — the scan is broken').toBeGreaterThan(100);
  });

  it('no module is imported both statically and dynamically', () => {
    // Scoped to lib/ and hooks/ — the shared utility modules, which is where all
    // four real offenders lived and the only place Rollup actually warns.
    //
    // Components are deliberately excluded: a screen is routinely BOTH a
    // lazy-loaded route and a child composed statically by another screen
    // (AppRouter lazy-loads Flashcards; LessonScreen imports it directly). That
    // is a legitimate shape, Rollup does not complain about it, and forcing one
    // kind there would mean restructuring how screens compose — a different
    // change from keeping utility imports honest.
    const inScope = (p: string) => /\/src\/(lib|hooks)\//.test(p);
    const offenders = [...usage.entries()]
      .filter(([target, u]) => inScope(target) && u.static.size > 0 && u.dynamic.size > 0)
      .map(
        ([target, u]) =>
          `\n  ${rel(target)}\n    dynamic from: ${[...u.dynamic].map(rel).join(', ')}` +
          `\n    static from:  ${[...u.static].map(rel).slice(0, 4).join(', ')}` +
          (u.static.size > 4 ? ` (+${u.static.size - 4} more)` : ''),
      );
    // Pick one kind per module. If it should be deferred, every importer must use
    // `await import()`; if it is needed eagerly, drop the dynamic form so nobody
    // reads it as lazy.
    expect(
      offenders,
      `Rollup cannot defer these — pick one import kind:${offenders.join('')}`,
    ).toEqual([]);
  });
});
