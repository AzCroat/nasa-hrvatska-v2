#!/usr/bin/env node
// lessonClassCheck.mjs — the author's dry run for class-order lesson content.
//
//   node scripts/lessonClassCheck.mjs functions/api/content/_data/lessonClassA1.js
//
// A class file exports ONE object: lesson id -> { text, mix } (see lessonClassA1.js).
// This checks a file WITHOUT wiring it into the lessons, so several authors can work
// in parallel: the mix is resolved against the lesson's existing practice items, the
// structure rules run on every new exercise and on the text, and every Croatian string
// is put through the same Serbism and encoding checks the lint applies.
//
// FAIL lines must be fixed. WARN lines must each be looked at: fix it, or be able to
// say why it is fine.

import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { LESSONS } from '../functions/api/content/_data/lessons.js';
import { LESSON_PRACTICE } from '../functions/api/content/_data/lessonPractice.js';
import { exerciseKindProblems, textSlideProblems } from './lessonDepthRules.mjs';
import { exerciseStrings, textSlideStrings } from './lessonExerciseStrings.mjs';
import { findSerbism } from '../functions/api/_serbisms.js';
import { containsCyrillic } from '../functions/api/_croatianGuard.js';

const file = process.argv[2];
if (!file) {
  console.error('usage: node scripts/lessonClassCheck.mjs <class file>');
  process.exit(2);
}
const mod = await import(pathToFileURL(path.resolve(file)).href);
const data = Object.values(mod).find((v) => v && typeof v === 'object');
if (!data) {
  console.error('the file exports no object');
  process.exit(2);
}

const MIN_ITEMS = 12;
const MIN_TYPED = 4;
const MIN_NEW_KINDS = 6;
const MIN_LINES = 5;
const MIN_QUESTIONS = 3;
const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[.,!?;:"'„”“]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
const wholeWord = (hay, needle) =>
  new RegExp(
    `(?<![\\p{L}\\p{N}])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}])`,
    'iu',
  ).test(hay);

let fails = 0;
let warns = 0;
const fail = (id, m) => (fails++, console.log(`FAIL ${id}: ${m}`));
const warn = (id, m) => (warns++, console.log(`WARN ${id}: ${m}`));

function scanStrings(id, gen) {
  for (const s of gen) {
    if (containsCyrillic(s.content)) fail(id, `${s.loc}: Cyrillic character in "${s.content}"`);
    if (s.kind !== 'gloss') {
      const hit = findSerbism(s.content);
      if (hit) fail(id, `${s.loc}: "${hit.match}" — use "${hit.use}"`);
    }
  }
}

/** A produced answer must not have been printed by an earlier item of the same sequence. */
function answerLeaks(id, label, items) {
  items.forEach((it, i) => {
    if (!it || typeof it !== 'object') return;
    const answers = [];
    if (['type', 'transform', 'dictate'].includes(it.type) && typeof it.answer === 'string')
      answers.push(it.answer);
    if (it.type === 'fix' && typeof it.answer === 'string') answers.push(it.answer);
    for (const a of answers) {
      const n = norm(a);
      if (!n) continue;
      if (typeof it.hint === 'string' && wholeWord(norm(it.hint), n))
        fail(id, `${label} ${i}: the hint contains the answer "${a}"`);
      if (
        it.type !== 'transform' &&
        it.type !== 'dictate' &&
        typeof it.q === 'string' &&
        wholeWord(norm(it.q), n)
      )
        warn(id, `${label} ${i}: the question text contains the answer "${a}"`);
      for (let k = 0; k < i; k++) {
        const prev = items[k];
        if (!prev || typeof prev !== 'object') continue;
        // EVERYTHING an earlier item puts on screen counts, not only its question:
        // sort items and group names, match pairs, fix and order tiles, the heard
        // sentence. (2026-11-16: the A2 reviewers found ~60 answers given away by
        // exactly these, and by EXISTING items placed by index — none of which this
        // check looked at.)
        const seen = [
          prev.q,
          prev.hint,
          prev.explanation,
          prev.answer,
          prev.from,
          prev.audio,
          ...(prev.options || []),
          ...(prev.accept || []),
          ...(prev.groups || []),
          ...(prev.words || []),
          ...(prev.pairs || []).flat(),
          ...(prev.items || []).map((x) => x && x.hr),
        ]
          .filter((x) => typeof x === 'string')
          .map(norm)
          .join(' | ');
        if (wholeWord(seen, n)) {
          warn(
            id,
            `${label} ${i}: the answer "${a}" is printed by earlier item ${k} of the same sequence`,
          );
          break;
        }
      }
    }
  });
}

for (const [id, entry] of Object.entries(data)) {
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) {
    fail(id, 'no lesson with this id');
    continue;
  }
  const old = LESSON_PRACTICE[id]?.practice?.items;
  if (!Array.isArray(old)) {
    fail(id, 'the lesson has no existing practice items to mix with');
    continue;
  }
  // ── text ──
  const text = entry.text;
  if (!text) fail(id, 'text missing');
  else {
    for (const p of textSlideProblems({ type: 'text', ...text })) fail(id, p);
    if (!['dialogue', 'text'].includes(text.kind)) fail(id, `text.kind must be dialogue or text`);
    if ((text.lines || []).length < MIN_LINES) fail(id, `text needs >= ${MIN_LINES} lines`);
    const qs = text.questions || [];
    if (qs.length < MIN_QUESTIONS) fail(id, `text needs >= ${MIN_QUESTIONS} questions`);
    if (!qs.some((q) => q.type === 'type' || q.type === 'transform'))
      warn(id, 'no text question asks the learner to PRODUCE Croatian (type / transform)');
    scanStrings(id, textSlideStrings(text, 'text', 'hr'));
    answerLeaks(id, 'text question', qs);
  }
  // ── mix ──
  const mix = entry.mix;
  if (!Array.isArray(mix)) {
    fail(id, 'mix missing');
    continue;
  }
  const seenIdx = new Set();
  const items = [];
  mix.forEach((m, i) => {
    if (typeof m === 'number') {
      if (!Number.isInteger(m) || m < 0 || m >= old.length)
        fail(id, `mix[${i}]: index ${m} is out of range (0..${old.length - 1})`);
      else if (seenIdx.has(m)) fail(id, `mix[${i}]: index ${m} is used twice`);
      else {
        seenIdx.add(m);
        items.push(old[m]);
      }
    } else if (m && typeof m === 'object') {
      for (const p of exerciseKindProblems(m, `mix[${i}]`)) fail(id, p);
      scanStrings(id, exerciseStrings(m, `mix[${i}]`, 'hr'));
      items.push(m);
    } else fail(id, `mix[${i}]: must be an index or an exercise object`);
  });
  if (items.length < MIN_ITEMS)
    fail(id, `practice has ${items.length} items, needs >= ${MIN_ITEMS}`);
  const typed = items.filter((it) => it.type === 'type').length;
  if (typed < MIN_TYPED)
    fail(id, `practice keeps ${typed} typed (type) items, needs >= ${MIN_TYPED}`);
  const newKinds = mix.filter((m) => m && typeof m === 'object');
  if (newKinds.length < MIN_NEW_KINDS)
    fail(id, `only ${newKinds.length} new exercises, needs >= ${MIN_NEW_KINDS}`);
  const kinds = new Set(newKinds.map((m) => m.type || 'mc'));
  if (kinds.size < 5)
    fail(id, `only ${kinds.size} different new kinds (${[...kinds].join(', ')}), needs >= 5`);
  const mc = items.filter((it) => !it.type);
  if (mc.length >= 2 && new Set(mc.map((it) => it.correct)).size < 2)
    fail(id, 'the multiple-choice items all have their answer at the same position');
  answerLeaks(id, 'mix item', items);
}

console.log(`\n${Object.keys(data).length} lessons checked — ${fails} FAIL, ${warns} WARN`);
process.exit(fails ? 1 : 0);
