#!/usr/bin/env node
// scripts/lessonPracticeCheck.mjs <LEVEL> — an author's dry run for one level's
// worked examples and guided practice (2026-09-27), BEFORE the level is wired into
// lessonPractice.js. It merges functions/api/content/_data/lessonPractice<LEVEL>.js
// into that level's lessons exactly as the build will, then reports:
//   - lessons in the level with no entry, and entries naming no lesson in the level;
//   - every practiceProblems() finding (the same rules the build gate enforces);
//   - any Cyrillic character, or any Serbism the shared rules flag, in any string.
// Exit code 1 on any finding. The build gate itself is src/tests/lessonDepth.test.ts
// once the level joins DEEPENED_LEVELS; this is how a level gets there.

import { LESSONS } from '../functions/api/content/_data/lessons.js';
import { practiceProblems } from './lessonDepthRules.mjs';
import { findSerbism } from '../functions/api/_serbisms.js';
import { containsCyrillic } from '../functions/api/_croatianGuard.js';

const level = (process.argv[2] || '').toUpperCase();
if (!/^(A1|A2|B1|B2|C1|C2)$/.test(level)) {
  console.error('usage: node scripts/lessonPracticeCheck.mjs <A1|A2|B1|B2|C1|C2>');
  process.exit(2);
}
const mod = await import(`../functions/api/content/_data/lessonPractice${level}.js`);
const map = mod[`PRACTICE_${level}`];
if (!map) {
  console.error(`lessonPractice${level}.js must export PRACTICE_${level}`);
  process.exit(2);
}

// The same placement lessonPractice.js applies (kept in step by lessonPracticeSlides.test).
function place(lesson, extra) {
  const slides = lesson.slides.filter((s) => s.type !== 'worked' && s.type !== 'practice');
  const worked = (extra.worked || []).map((w) => ({ type: 'worked', ...w }));
  const firstQuiz = slides.findIndex((s) => s.type === 'quiz');
  const checkAt = slides.findIndex((s) => s.type === 'check');
  slides.splice(firstQuiz >= 0 ? firstQuiz : checkAt, 0, ...worked);
  const at = slides.findIndex((s) => s.type === 'check');
  slides.splice(at, 0, { type: 'practice', ...extra.practice });
  return { ...lesson, slides };
}

const lessons = LESSONS.filter((l) => l.level === level);
const ids = new Set(lessons.map((l) => l.id));
const findings = [];
for (const id of Object.keys(map)) if (!ids.has(id)) findings.push(`${id}: not a ${level} lesson`);
for (const l of lessons) {
  if (!map[l.id]) {
    findings.push(`${l.id}: no entry`);
    continue;
  }
  for (const p of practiceProblems(place(l, map[l.id]))) findings.push(`${l.id}: ${p}`);
}

function* strings(x, path) {
  if (typeof x === 'string') yield [path, x];
  else if (Array.isArray(x))
    for (let i = 0; i < x.length; i++) yield* strings(x[i], `${path}[${i}]`);
  else if (x && typeof x === 'object')
    for (const [k, v] of Object.entries(x)) if (k !== 'en') yield* strings(v, `${path}.${k}`);
}
for (const [path, s] of strings(map, level)) {
  if (containsCyrillic(s)) findings.push(`${path}: Cyrillic character in "${s.slice(0, 60)}"`);
  const sb = findSerbism(s);
  if (sb) findings.push(`${path}: Serbism ${JSON.stringify(sb)} in "${s.slice(0, 60)}"`);
}

const entries = Object.keys(map).length;
const worked = Object.values(map).reduce((n, e) => n + (e.worked || []).length, 0);
const items = Object.values(map).reduce((n, e) => n + (e.practice?.items || []).length, 0);
console.log(
  `${level}: ${entries}/${lessons.length} lessons, ${worked} worked examples, ${items} practice items`,
);
if (findings.length) {
  for (const f of findings) console.log('  ✗ ' + f);
  console.log(`${findings.length} problem(s)`);
  process.exit(1);
}
console.log('problems 0');
