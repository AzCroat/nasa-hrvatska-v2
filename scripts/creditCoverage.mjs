#!/usr/bin/env node
/**
 * creditCoverage.mjs — how many screens that credit a learner are DRIVEN by a test.
 *
 * `npm test` reporting 10,016 green says nothing about this, and that is the gap
 * that let twenty-six screens lose a learner's finished work while the suite passed.
 * This prints one number so progress is auditable instead of asserted:
 *
 *     node scripts/creditCoverage.mjs          # the count, plus what is not driven
 *
 * DRIVEN means some test RENDERS the component and asserts a credit writer fired.
 * The predicate is deliberately generous on the assert side (`expect(award…)`,
 * `setStats`, `writeDelta`, `markQuest`) and strict on the render side, because the
 * failure this measures is "nothing ever renders it", not "the assertion is weak".
 *
 * THREE THINGS IT DOES NOT CLAIM. It cannot tell whether the assertion in a file is
 * about the component that file also renders, so it can over-credit; a single
 * subject can stand for many screens — `ModeDrill` is the engine behind 109 lazy
 * wrappers, so driving that one entry covers 109 drills a learner can reach; and a
 * GLOB-DRIVEN suite is credited with every file its pattern matches, while such a
 * suite may exempt a subject it matches (those exemptions are asserted inside the
 * suite itself, with reasons, not here). Read the number as a floor on work
 * remaining, not as a percentage of the product.
 *
 * The glob expansion is why the number moves at all when a suite drives a derived
 * corpus: `handWrittenDrills.contract.test.tsx` names none of its 98 subjects — it
 * takes them from `import.meta.glob`, deliberately, so a drill authored next month is
 * covered without an edit. A name-only detector reads that as zero coverage.
 */
import fs from 'node:fs';
import path from 'node:path';
const ROOT = process.cwd();
const strip = (s) => s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');
function walk(d, out = []) {
  for (const e of fs.readdirSync(path.join(ROOT, d))) {
    const r = path.join(d, e);
    if (fs.statSync(path.join(ROOT, r)).isDirectory()) walk(r, out);
    else out.push(r);
  }
  return out;
}
// Population: components that credit a learner.
const WRITER = /\b(completeExercise|completeLesson|award|markQuest|recordExerciseOutcome|recordSrsReview|recordMasteryEvent)\s*\(/;
const comps = walk('src/components').filter((f) => f.endsWith('.tsx'));
const pop = comps.filter((f) => WRITER.test(strip(fs.readFileSync(path.join(ROOT, f), 'utf8'))));

// Every test file's text, once.
const tests = walk('src/tests').filter((f) => /\.tsx?$/.test(f))
  .map((f) => [f, fs.readFileSync(path.join(ROOT, f), 'utf8')]);

// DRIVEN = some test RENDERS the component AND asserts a credit writer.
// `[\w.]*\.?` so a handle read off a driver (`expect(pass.award…)`) counts — the
// assert side is deliberately generous; see the header.
const ASSERTS = /expect\(\s*[\w.]*\b(award|setStats|writeDelta|markQuest\w*|mockAward|\w*[Aa]ward\w*)/;

/**
 * Components covered by a suite that derives its corpus from `import.meta.glob`.
 * The pattern is resolved relative to the test file, exactly as vite resolves it.
 *
 * IT MATCHES LINE-STRIPPED SOURCE, NOT `strip()`. A glob pattern like
 * `'../components/practice/*Drill.tsx'` contains `/*`, so the block-comment pass in the
 * shared `strip` idiom reads the pattern as the START of a comment and deletes
 * everything up to the next `*\/` — which is how the first version of this function
 * reported zero coverage for a suite that drives ninety-eight screens. Anything that
 * strips comments and then matches a PATH has the same hazard.
 */
function globDriven() {
  const covered = new Set();
  for (const [file, src] of tests) {
    if (!ASSERTS.test(src)) continue;
    const noLineComments = src.replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    for (const m of noLineComments.matchAll(/import\.meta\.glob\(\s*['\"`]([^'\"`]+)['\"`]/g)) {
      const pattern = m[1];
      const base = path.posix.join(path.dirname(file).split(path.sep).join('/'), pattern);
      const dir = path.posix.dirname(base);
      const rx = new RegExp(
        '^' + path.posix.basename(base).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^/]*') + '$',
      );
      let entries = [];
      try {
        entries = fs.readdirSync(path.join(ROOT, dir));
      } catch {
        continue;
      }
      for (const e of entries) if (rx.test(e)) covered.add(path.posix.join(dir, e));
    }
  }
  return covered;
}
const GLOBBED = globDriven();
let driven = [], not = [], viaGlob = 0;
for (const f of pop) {
  const name = path.basename(f, '.tsx');
  if (GLOBBED.has(f.split(path.sep).join('/'))) {
    driven.push(name);
    viaGlob++;
    continue;
  }
  const rendered = tests.filter(([, s]) =>
    new RegExp(`(render\\(\\s*<\\s*${name}\\b)|(<${name}\\s)|(default as ${name}\\b)|(\\{\\s*default:\\s*${name}\\s*\\})`).test(s)
      || (new RegExp(`import\\s+${name}\\b|\\bdefault:\\s*${name}\\b|await import\\([^)]*/${name}'`).test(s) && /render\(/.test(s)),
  );
  const ok = rendered.some(([, s]) => ASSERTS.test(s));
  (ok ? driven : not).push(name);
}
console.log('population (components that credit a learner):', pop.length);
console.log('DRIVEN (rendered by a test that asserts a credit writer):', driven.length);
console.log('  of which via a glob-derived corpus:', viaGlob);
console.log('NOT driven:', not.length);
console.log('\n--- not driven ---');
console.log(not.sort().join('\n'));
