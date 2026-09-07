// scripts/lessonDepthCheck.mjs — dry-run the teaching-depth contract.
// Usage: node scripts/lessonDepthCheck.mjs [A1|A2|B1|B2|C1|C2|core|all]
//   <level>  the lessons in that level's own file (lessons<LEVEL>.js)
//   core     the 45 lessons inside lessons.js's LESSONS_CORE
//   all      every lesson (the build gate's view)
// Prints one block per failing lesson naming every violated rule; exit 1 if any.
// The rules live in lessonDepthRules.mjs, shared with src/tests/lessonDepth.test.ts.
import { LESSONS } from '../functions/api/content/_data/lessons.js';
import { lessonDepthProblems, exampleHrWords } from './lessonDepthRules.mjs';

const which = process.argv[2] || 'all';
const files = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const inLevel = new Set();
for (const f of files) {
  const mod = await import('../functions/api/content/_data/lessons' + f + '.js');
  for (const l of mod['LESSONS_' + f]) inLevel.add(l.id);
}

const chosen = LESSONS.filter((l) =>
  which === 'all'
    ? true
    : which === 'core'
      ? !inLevel.has(l.id)
      : l.level === which && inLevel.has(l.id),
);
let bad = 0;
let hrWords = 0;
for (const l of chosen) {
  hrWords += exampleHrWords(l);
  const p = lessonDepthProblems(l);
  if (p.length) {
    bad++;
    console.log(`${l.level} ${l.id}:\n  - ${p.join('\n  - ')}`);
  }
}
console.log(
  `\n${chosen.length} lessons checked, ${bad} failing, ${hrWords} Croatian example words`,
);
process.exit(bad ? 1 : 0);
