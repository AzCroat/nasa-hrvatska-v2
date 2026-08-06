/**
 * @vitest-environment node
 *
 * firstPaintGraph.test.ts — nothing on the first-paint path may statically
 * import the content library.
 *
 * THE BUG
 * -------
 * `useAuth.ts` imported nine Firebase functions from the content barrel:
 *
 *     import { fbLogin, fbRegister, … } from '../data';
 *
 * All nine are defined in `src/lib/firebase.ts` — the module the very next line
 * already imported from. Pure indirection. But `src/data.tsx` re-exports
 * `src/data/content.tsx`, which statically pulls in vocabulary, cultural (incl.
 * the 365-city geography file), exercises and scenarios. And `useAuth` is the
 * innermost hook on App's critical path, so the entire content library landed in
 * the module graph that must download, parse and execute before React mounts.
 *
 * `#root` has no static fallback in index.html, so every millisecond of that is
 * a blank white page. Production smoke twice caught `<div id="root"></div>` still
 * empty after 20 seconds.
 *
 * WHAT THIS TEST DOES AND DOES NOT COVER
 * -------------------------------------
 * This is a SOURCE-graph guard: it proves nothing on the first-paint path
 * statically reaches the content library. It deliberately does not assert
 * anything about bundle chunking, which is a separate mechanism with its own
 * failure mode: `manualChunks` in vite.config.js maps every `src/data/*` file to
 * `chunk-data`, so a small eagerly-imported data module can re-couple the whole
 * library at bundle level even when this test is green. That is tracked
 * separately — passing here is necessary, not sufficient.
 *
 * For the bundle side, run `node scripts/whyEager.mjs`. It asks Rollup — rather
 * than a regex — which import chain puts a chunk on the first-paint path, and
 * prints the shortest one. As of 2026-08-05 the content library is still eager
 * via a chain this test cannot see: main.tsx imports Vite's preload helper, that
 * helper was folded into chunk-data, and chunk-data holds src/data/content.tsx.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';

const ENTRY = 'src/main.tsx';

/** Extensionless-import resolution, in the order a bundler would try. */
const CANDIDATES = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js'];

function resolveRelative(fromFile: string, spec: string): string | null {
  if (!spec.startsWith('.')) return null; // bare package — not our graph
  const base = resolve(dirname(fromFile), spec).replace(/\.[jt]sx?$/, '');
  for (const ext of CANDIDATES) {
    const p = base + ext;
    if (existsSync(p) && extname(p) && statSync(p).isFile()) return p;
  }
  return null;
}

/**
 * Every module statically reachable from the entry, with the path that got there.
 *
 * STATIC only. `import(...)` is what defers a chunk, so a dynamic import is
 * precisely what this test wants people to use for heavy data — counting it
 * would defeat the purpose.
 */
function eagerGraph(): Map<string, string | null> {
  const root = resolve(ENTRY);
  const parent = new Map<string, string | null>([[root, null]]);
  const queue = [root];

  while (queue.length) {
    const file = queue.shift()!;
    let src: string;
    try {
      src = readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    // Strip comments: prose quoting `from '../data'` must not count as an edge.
    src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    // Strip `import type ... from '...'` — erased by the compiler, so it is not
    // a runtime edge and Rollup never emits one for it. Counting them made this
    // walker over-report: it named ExamRunner -> data/speakingTasks as eager
    // when the bundle graph had no such edge. Inline `{ type X }` specifiers are
    // deliberately NOT stripped — that statement still imports real values.
    src = src.replace(/^\s*import\s+type\s[\s\S]*?from\s*['"][^'"\n]*['"]\s*;?/gm, '');

    // Linear scan for quoted relative specifiers, then confirm from the preceding
    // characters that it really is a static import and not `import(` or a string.
    for (const m of src.matchAll(/['"](\.[^'"\n]{0,200})['"]/g)) {
      const before = src.slice(Math.max(0, m.index! - 40), m.index!);
      if (/import\s*\(\s*$/.test(before)) continue; // dynamic → deferred, fine
      if (!/(?:from\s*|import\s*)$/.test(before)) continue; // not an import at all
      const target = resolveRelative(file, m[1]!);
      if (!target || parent.has(target)) continue;
      parent.set(target, file);
      queue.push(target);
    }
  }
  return parent;
}

function chainTo(parent: Map<string, string | null>, file: string): string[] {
  const out: string[] = [];
  let cur: string | null | undefined = file;
  while (cur) {
    out.unshift(cur.replace(`${process.cwd()}/`, ''));
    cur = parent.get(cur);
  }
  return out;
}

describe('the first-paint module graph', () => {
  const graph = eagerGraph();
  const has = (rel: string) => graph.has(resolve(rel));

  it('the walker actually reaches the app it is supposed to police', () => {
    // Non-vacuity, and the whole test rests on it: if resolution silently broke,
    // every "must not be reachable" assertion below would pass over an empty
    // graph. These four are unambiguously on the critical path.
    for (const f of [
      'src/App.tsx',
      'src/hooks/useAuth.ts',
      'src/lib/firebase.ts',
      'src/context/AppContext.tsx',
    ]) {
      expect(has(f), `walker failed to reach ${f} — resolution is broken`).toBe(true);
    }
    expect(graph.size).toBeGreaterThan(50);
  });

  it('does not statically reach the content library', () => {
    // ~1.5 MB raw / ~510 KB gzipped of lesson content, none of which is needed to
    // render a login screen. Reach it lazily (`await import(...)`) from the screen
    // that needs it instead.
    const forbidden = [
      'src/data.tsx',
      'src/data/content.tsx',
      'src/data/vocabulary.js',
      'src/data/cultural.js',
      'src/data/exercises.js',
      'src/data/scenarios.js',
    ];
    const reached = forbidden.filter((f) => has(f));
    const detail = reached
      .map((f) => `\n  ${chainTo(graph, resolve(f)).join('\n    -> ')}`)
      .join('\n');
    expect(
      reached,
      `These are on the first-paint path, so React cannot mount until they parse:${detail}`,
    ).toEqual([]);
  });

  it('does not statically reach ANY module in src/data', () => {
    // The general form of the rule above, and the one that actually holds the
    // line. The named-file list only catches the library's front door; three
    // separate edges got past it into small leaf modules of the same chunk:
    //
    //   applyRemoteProgress.ts -> data/bakaPhrases.ts        (12 phrases)
    //   checkpointExam.ts      -> data/cefrEquivalencyItems.ts
    //   checkpointExam.ts      -> data/speakingTasks.ts
    //
    // Every src/data module is mapped to a content chunk by manualChunks, so ANY
    // eager edge into that directory — however small the file — pulls a whole
    // chunk onto the blocking path. bakaPhrases is 903 bytes and was holding
    // 212 kB there. Reach content with `await import(...)` from the code that
    // needs it, or copy the handful of values you need into src/lib.
    const reached = [...graph.keys()]
      .map((f) => f.replace(`${process.cwd()}/`, ''))
      .filter((f) => f.startsWith('src/data/') || f === 'src/data.tsx');
    const detail = reached
      .map((f) => `\n  ${chainTo(graph, resolve(f)).join('\n    -> ')}`)
      .join('\n');
    expect(reached, `src/data modules on the first-paint path:${detail}`).toEqual([]);
  });

  it('useAuth takes its Firebase functions from lib/firebase, not the barrel', () => {
    // Named explicitly because this is the exact edge that put the content
    // library on the critical path, and it reads as harmless in review: every
    // symbol in that import is defined in lib/firebase.ts anyway.
    const src = readFileSync('src/hooks/useAuth.ts', 'utf8');
    expect(src).not.toMatch(/}\s*from\s*'\.\.\/data'/);
    expect(src).toMatch(/fbOnAuthStateChanged,[\s\S]{0,200}?}\s*from\s*'\.\.\/lib\/firebase\.js'/);
  });
});
