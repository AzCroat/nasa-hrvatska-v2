/**
 * whyEager.mjs — name the exact import chain that puts a chunk on the
 * first-paint path.
 *
 * WHY THIS EXISTS
 * ---------------
 * index.html modulepreloads ~2.8 MB raw / ~895 kB gzipped of JavaScript, and
 * #root has no static fallback, so nothing renders until all of it has
 * downloaded, parsed and executed. Most of that is the lesson content library
 * (geography, cultural, vocabulary, exercises, scenarios), which first paint
 * does not need.
 *
 * Two attempts to fix it by reasoning about the source failed — a manualChunks
 * split and a dual-import normalisation each moved the number by zero — because
 * a hand-written regex walk over `import` statements is not the graph Rollup
 * actually builds. Rollup sees re-exports, resolved extensions, `export * from`,
 * side-effect imports and its own chunk-merging decisions. This script asks
 * Rollup instead of guessing, and prints the SHORTEST static chain, so the answer
 * is one edge to fix rather than a list of suspects.
 *
 * Usage:  node scripts/whyEager.mjs
 *
 * Reads nothing, writes to a throwaway outDir, and leaves dist/ alone.
 *
 * WHAT IT FOUND (2026-08-05) — the answer two rounds of guessing missed
 * --------------------------------------------------------------------
 *   src/main.tsx
 *     -> vite/preload-helper.js        <- a ~1 kB VIRTUAL module
 *          which Rollup folded into chunk-data
 *            chunk-data contains src/data/content.tsx
 *              which statically imports chunk-cultural, chunk-exercises,
 *              chunk-scenarios, chunk-vocabulary (and chunk-geo via cultural)
 *
 * main.tsx imports the preload helper because it contains dynamic imports. That
 * made chunk-data a STARTUP dependency, and chunk-data happened to also hold the
 * content hub — so ~511 kB gzipped of lesson content became blocking because of
 * where a virtual helper module got parked.
 *
 * WHY THE OBVIOUS FIXES DON'T WORK: THE MAGNET MOVES
 * -------------------------------------------------
 * chunk-data is a magnet. Rollup folds modules that no manualChunks rule claims
 * into it, and any one of those that main.tsx reaches makes the chunk eager.
 * Verified by severing the edges one at a time and re-running this script:
 *
 *   give the preload helper its own chunk  -> src/lib/platform.ts takes over
 *   isolate the content hub as well        -> platform.ts follows into the hub
 *
 * So the fix is NOT to keep moving content between chunks. It is to give the
 * unclaimed shared lib modules an explicit home so they stop being folded into a
 * chunk that holds content. That is exactly the change the config warns about —
 * "src/hooks intentionally has NO manual chunk — previous chunk-hooks caused a
 * chunk-data <-> chunk-hooks circular dependency (TDZ crash at runtime)" — so it
 * needs its own PR, a preview deploy, and this script re-run to confirm.
 *
 * Run this BEFORE and AFTER any chunking change. A chunking change that does not
 * move the reported edges has not done anything, however plausible it reads.
 */
import { build } from 'vite';
import { rm } from 'node:fs/promises';

const OUT = '.why-eager-out';
const CWD = process.cwd() + '/';
const rel = (p) => (p ? p.replace(CWD, '').replace(/\?.*$/, '') : String(p));

/** Chunks whose presence on the first-paint path is the thing under investigation. */
const SUSPECT = /chunk-(geo|cultural|vocabulary|exercises|scenarios|data|content-hub|grammar)/;

const report = [];

const analyse = {
  name: 'why-eager',
  generateBundle(_opts, bundle) {
    // 1. Which chunk owns each module.
    const owner = new Map();
    for (const c of Object.values(bundle))
      if (c.type === 'chunk')
        for (const id of Object.keys(c.modules || {})) owner.set(id, c.fileName);

    const entry = Object.values(bundle).find((c) => c.type === 'chunk' && c.isEntry);
    if (!entry) return;

    const entryModules = new Set(Object.keys(entry.modules || {}));
    const rootId = [...entryModules].find((m) => /src\/main\.tsx$/.test(m));

    // 2. Breadth-first over STATIC edges only. `importedIds` is Rollup's own
    //    resolved static import list; `dynamicallyImportedIds` is deliberately
    //    ignored, because a dynamic import is what a deferred chunk looks like.
    const shortestPathTo = (startIds, isTarget) => {
      const parent = new Map();
      const queue = [];
      for (const s of startIds) {
        parent.set(s, null);
        queue.push(s);
      }
      while (queue.length) {
        const id = queue.shift();
        const info = this.getModuleInfo(id);
        for (const next of info?.importedIds || []) {
          if (parent.has(next)) continue;
          parent.set(next, id);
          if (isTarget(next)) {
            const chain = [];
            for (let c = next; c != null; c = parent.get(c)) chain.unshift(rel(c));
            return chain;
          }
          queue.push(next);
        }
      }
      return null;
    };

    // 3. For every suspect chunk the entry statically imports, explain it.
    const suspects = (entry.imports || []).filter((f) => SUSPECT.test(f));
    report.push(`entry chunk: ${entry.fileName}  (${entryModules.size} modules)`);
    report.push(
      `entry statically imports ${entry.imports.length} chunk(s); ${suspects.length} suspect:`,
    );

    for (const chunkFile of suspects) {
      const inChunk = (id) => owner.get(id) === chunkFile;
      report.push(`\n── ${chunkFile} ${'─'.repeat(Math.max(0, 56 - chunkFile.length))}`);

      // Preferred explanation: a static chain from the app's own entry module.
      let chain = rootId ? shortestPathTo([rootId], inChunk) : null;
      let via = 'src/main.tsx';

      // Fallback: the chunk may be pulled in by a module that Rollup hoisted
      // into the entry chunk without it being statically reachable from
      // main.tsx. Say so explicitly rather than reporting "no path".
      if (!chain) {
        chain = shortestPathTo([...entryModules], inChunk);
        via = 'a module hoisted into the entry chunk (not reachable from main.tsx)';
      }

      if (!chain) {
        // No module in the entry chunk imports this one directly, so the entry
        // depends on it TRANSITIVELY: chunk A imports chunk B imports chunk C.
        // Vite's modulepreload injection follows those transitive chunk edges,
        // which is how a chunk nothing eager imports still blocks first paint.
        // Walk the chunk graph and name a module pair for each hop, because an
        // edge you cannot point at is an edge you cannot delete.
        const chunkPath = (() => {
          const parent = new Map([[entry.fileName, null]]);
          const q = [entry.fileName];
          while (q.length) {
            const f = q.shift();
            for (const next of bundle[f]?.imports || []) {
              if (parent.has(next)) continue;
              parent.set(next, f);
              if (next === chunkFile) {
                const out = [];
                for (let c = next; c != null; c = parent.get(c)) out.unshift(c);
                return out;
              }
              q.push(next);
            }
          }
          return null;
        })();

        if (!chunkPath) {
          report.push('  NOT reachable even through the chunk graph — unexplained.');
          continue;
        }
        report.push('  no direct module edge; reached transitively through chunks:');
        report.push('    ' + chunkPath.map((c) => c.replace('assets/', '')).join('\n      -> '));
        report.push('  the module edge behind each hop:');
        for (let i = 0; i < chunkPath.length - 1; i++) {
          const from = chunkPath[i];
          const to = chunkPath[i + 1];
          let named = null;
          for (const m of Object.keys(bundle[from]?.modules || {})) {
            for (const imp of this.getModuleInfo(m)?.importedIds || []) {
              if (owner.get(imp) === to) {
                named = `${rel(m)}  -->  ${rel(imp)}`;
                break;
              }
            }
            if (named) break;
          }
          report.push(`    [${from.replace('assets/', '')} -> ${to.replace('assets/', '')}]`);
          report.push(`      ${named ?? '(no module-level edge — chunk merged by Rollup)'}`);
        }
        continue;
      }
      report.push(`  shortest static chain from ${via}:`);
      chain.forEach((step, i) =>
        report.push(`${i === 0 ? '    ' : '      '.padEnd(4 + i * 2)}${i ? '-> ' : ''}${step}`),
      );
      report.push(
        `  ⇒ fix the LAST arrow to move ${chunkFile.replace('assets/', '')} off first paint.`,
      );
    }
  },
};

await build({
  configFile: 'vite.config.js',
  logLevel: 'warn',
  build: { outDir: OUT, emptyOutDir: true, write: true },
  plugins: [analyse],
});

await rm(OUT, { recursive: true, force: true });

console.log('\n' + '='.repeat(72));
console.log('WHY IS IT EAGER? (Rollup graph, static edges only)');
console.log('='.repeat(72));
console.log(report.join('\n'));
console.log('');
