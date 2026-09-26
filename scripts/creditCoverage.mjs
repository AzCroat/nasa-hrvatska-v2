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
 * TWO THINGS IT DOES NOT CLAIM. It cannot tell whether the assertion in a file is
 * about the component that file also renders, so it can over-credit; and a single
 * subject can stand for many screens — `ModeDrill` is the engine behind 109 lazy
 * wrappers, so driving that one entry covers 109 drills a learner can reach. Read
 * the number as a floor on work remaining, not as a percentage of the product.
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
const ASSERTS = /expect\(\s*(award|setStats|writeDelta|markQuest\w*|mockAward|\w*[Aa]ward\w*)/;
let driven = [], not = [];
for (const f of pop) {
  const name = path.basename(f, '.tsx');
  const rendered = tests.filter(([, s]) =>
    new RegExp(`(render\\(\\s*<\\s*${name}\\b)|(<${name}\\s)|(default as ${name}\\b)|(\\{\\s*default:\\s*${name}\\s*\\})`).test(s)
      || (new RegExp(`import\\s+${name}\\b|\\bdefault:\\s*${name}\\b|await import\\([^)]*/${name}'`).test(s) && /render\(/.test(s)),
  );
  const ok = rendered.some(([, s]) => ASSERTS.test(s));
  (ok ? driven : not).push(name);
}
console.log('population (components that credit a learner):', pop.length);
console.log('DRIVEN (rendered by a test that asserts a credit writer):', driven.length);
console.log('NOT driven:', not.length);
console.log('\n--- not driven ---');
console.log(not.sort().join('\n'));
