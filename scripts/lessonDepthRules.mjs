// scripts/lessonDepthRules.mjs — THE TEACHING-DEPTH CONTRACT for the 180
// animated lessons (owner directive, 2026-09-07: "taught in-depth and then
// tested"). One definition, two consumers: `lessonDepthCheck.mjs` (an author's
// per-level dry run) and `src/tests/lessonDepth.test.ts` (the build gate). A
// rule that lived only in the test would be re-derived by the next author; one
// that lived only in the script would never fail a build.
//
// Why these numbers. The 2026-09-07 census found every level the same thin
// template — ~28 Croatian example words and two ungated quiz questions per
// lesson, C2 thinner than A1. A mastery check of SIX items at the shared 75%
// threshold allows one slip (5/6) and not two; fewer items make the pass a
// coin toss, and correct answers spread over ≥3 positions stop a reader who
// notices "it's always B". The example floors SCALE WITH LEVEL because depth
// should: A1/A2 50 words is ~8 short present-tense sentences, C1/C2 80 is
// argued prose. "Common Mistakes" is the one slide that teaches what the drill
// will later penalise, in the learner's own interference terms.

export const MIN_CHECK_ITEMS = 6;
export const CHECK_OPTIONS = 4;
export const MIN_DISTINCT_CORRECT = 3;
export const MIN_EXAMPLE_ITEMS = 8;
export const MIN_EXAMPLE_HR_WORDS = { A1: 50, A2: 50, B1: 65, B2: 65, C1: 80, C2: 80 };
export const COMMON_MISTAKES_RE = /common mistakes/i;

export const words = (s) =>
  typeof s === 'string' ? s.trim().split(/\s+/).filter(Boolean).length : 0;

/** Croatian example words in a lesson: every `hr` of every example slide. */
export function exampleHrWords(lesson) {
  let n = 0;
  for (const s of lesson.slides || []) {
    if (s.type === 'example' && Array.isArray(s.items)) for (const it of s.items) n += words(it.hr);
  }
  return n;
}

export function exampleItemCount(lesson) {
  let n = 0;
  for (const s of lesson.slides || []) {
    if (s.type === 'example' && Array.isArray(s.items)) n += s.items.length;
  }
  return n;
}

/** Every rule this lesson violates, as human-readable strings. Empty = deep. */
export function lessonDepthProblems(l) {
  const out = [];
  const slides = l.slides || [];
  const checks = slides.filter((s) => s.type === 'check');
  if (checks.length !== 1) out.push(`exactly one check slide (found ${checks.length})`);
  const summaryIdx = slides.findIndex((s) => s.type === 'summary');
  const checkIdx = slides.findIndex((s) => s.type === 'check');
  if (checks.length === 1 && summaryIdx !== checkIdx + 1) {
    out.push('check slide must sit immediately before the summary');
  }
  if (checks.length === 1) {
    const items = Array.isArray(checks[0].items) ? checks[0].items : [];
    if (items.length < MIN_CHECK_ITEMS) {
      out.push(`check needs >= ${MIN_CHECK_ITEMS} items (has ${items.length})`);
    }
    const corrects = new Set();
    items.forEach((it, i) => {
      if (typeof it.q !== 'string' || !it.q.trim()) out.push(`check item ${i}: q missing`);
      if (!Array.isArray(it.options) || it.options.length !== CHECK_OPTIONS) {
        out.push(`check item ${i}: needs exactly ${CHECK_OPTIONS} options`);
      } else if (new Set(it.options.map((o) => String(o).trim())).size !== CHECK_OPTIONS) {
        out.push(`check item ${i}: duplicate options`);
      }
      if (!Number.isInteger(it.correct) || it.correct < 0 || it.correct >= CHECK_OPTIONS) {
        out.push(`check item ${i}: correct index out of range`);
      } else corrects.add(it.correct);
      if (typeof it.explanation !== 'string' || !it.explanation.trim()) {
        out.push(`check item ${i}: explanation missing`);
      }
    });
    if (items.length >= MIN_CHECK_ITEMS && corrects.size < MIN_DISTINCT_CORRECT) {
      out.push(
        `check correct indices must use >= ${MIN_DISTINCT_CORRECT} distinct positions (uses ${corrects.size})`,
      );
    }
  }
  for (const s of slides) {
    if (s.type === 'example' && Array.isArray(s.items)) {
      for (const it of s.items) {
        if (typeof it.hr !== 'string' || !it.hr.trim()) out.push('example item without hr');
        if (typeof it.en !== 'string' || !it.en.trim()) {
          out.push(`example item without en: ${String(it.hr).slice(0, 30)}`);
        }
      }
    }
  }
  const exItems = exampleItemCount(l);
  if (exItems < MIN_EXAMPLE_ITEMS) {
    out.push(`needs >= ${MIN_EXAMPLE_ITEMS} example items (has ${exItems})`);
  }
  const floor = MIN_EXAMPLE_HR_WORDS[l.level] ?? 50;
  const exWords = exampleHrWords(l);
  if (exWords < floor) out.push(`needs >= ${floor} Croatian example words (has ${exWords})`);
  const mistakes = slides.some(
    (s) => s.type === 'rule' && COMMON_MISTAKES_RE.test(String(s.title || '')),
  );
  if (!mistakes) out.push("needs a rule slide titled 'Common Mistakes'");
  const mistakesSlide = slides.find(
    (s) => s.type === 'rule' && COMMON_MISTAKES_RE.test(String(s.title || '')),
  );
  if (
    mistakesSlide &&
    typeof mistakesSlide.highlight === 'string' &&
    mistakesSlide.highlight &&
    !String(mistakesSlide.body || '').includes(mistakesSlide.highlight)
  ) {
    out.push('Common Mistakes highlight must appear verbatim in its body');
  }
  const quizzes = slides.filter((s) => s.type === 'quiz').length;
  if (quizzes < 1) out.push('needs >= 1 formative quiz slide');
  if (DEEPENED_LEVELS.includes(l.level)) out.push(...practiceProblems(l));
  if (PRODUCTIVE_LEVELS.includes(l.level)) out.push(...productiveProblems(l));
  return out;
}

// ── Worked examples and guided practice (owner request, 2026-09-27) ──────────
// "More learning and then reaffirming testing at every level." A lesson went
// explanation → finished example sentences → two single-shot questions → check.
// Between the explanation and the check it now also WORKS problems through step by
// step and gives PRACTICE with a hint and a second try. Rolled out level by level:
// a level joins DEEPENED_LEVELS when every lesson in it has been authored, and
// from then on the build holds every lesson in it to these rules.
export const DEEPENED_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const MIN_WORKED = 2;
export const MIN_WORKED_STEPS = 3;
export const MIN_PRACTICE_ITEMS = 4;

/** Every worked/practice rule this lesson violates. */
export function practiceProblems(l) {
  const out = [];
  const slides = l.slides || [];
  const worked = slides.filter((s) => s.type === 'worked');
  const practice = slides.filter((s) => s.type === 'practice');
  if (worked.length < MIN_WORKED)
    out.push(`needs >= ${MIN_WORKED} worked examples (has ${worked.length})`);
  // A SPARSE ARRAY IS NOT A LIST OF ITEMS (C1 authoring, 2026-09-29): a stray double
  // comma gives an array whose length counts a hole that forEach skips, so every rule
  // below read "problems 0" over a slot a learner would reach as undefined.
  for (const s of practice) {
    for (const field of ['items']) {
      const arr = s[field];
      if (Array.isArray(arr) && Object.keys(arr).length !== arr.length)
        out.push(`practice ${field}: has an empty slot (sparse array)`);
    }
  }
  for (const s of slides.filter((x) => x.type === 'check')) {
    for (const field of ['items', 'itemsB']) {
      const arr = s[field];
      if (Array.isArray(arr) && Object.keys(arr).length !== arr.length)
        out.push(`check ${field}: has an empty slot (sparse array)`);
    }
  }
  worked.forEach((w, i) => {
    if (typeof w.problem !== 'string' || !w.problem.trim())
      out.push(`worked ${i}: problem missing`);
    if (typeof w.answer !== 'string' || !w.answer.trim()) out.push(`worked ${i}: answer missing`);
    if (typeof w.en !== 'string' || !w.en.trim()) out.push(`worked ${i}: en missing`);
    const steps = Array.isArray(w.steps) ? w.steps : [];
    if (steps.length < MIN_WORKED_STEPS)
      out.push(`worked ${i}: needs >= ${MIN_WORKED_STEPS} steps`);
    steps.forEach((st, k) => {
      if (typeof st?.text !== 'string' || !st.text.trim())
        out.push(`worked ${i} step ${k}: text missing`);
    });
  });
  if (practice.length !== 1)
    out.push(`exactly one guided-practice slide (found ${practice.length})`);
  const checkIdx = slides.findIndex((s) => s.type === 'check');
  const practiceIdx = slides.findIndex((s) => s.type === 'practice');
  if (practice.length === 1 && practiceIdx !== checkIdx - 1) {
    out.push('guided practice must sit immediately before the check');
  }
  const lastWorked = slides.map((s) => s.type).lastIndexOf('worked');
  if (worked.length && practiceIdx >= 0 && lastWorked > practiceIdx) {
    out.push('worked examples must come before the guided practice');
  }
  if (practice.length === 1) {
    const items = Array.isArray(practice[0].items) ? practice[0].items : [];
    if (items.length < MIN_PRACTICE_ITEMS) {
      out.push(`guided practice needs >= ${MIN_PRACTICE_ITEMS} items (has ${items.length})`);
    }
    const corrects = new Set();
    items.forEach((it, i) => {
      if (typeof it.q !== 'string' || !it.q.trim()) out.push(`practice item ${i}: q missing`);
      if (it.type === 'type') {
        out.push(...typedItemProblems(it, `practice item ${i}`));
        return;
      }
      if (!Array.isArray(it.options) || it.options.length !== CHECK_OPTIONS) {
        out.push(`practice item ${i}: needs exactly ${CHECK_OPTIONS} options`);
      } else if (new Set(it.options.map((o) => String(o).trim())).size !== CHECK_OPTIONS) {
        out.push(`practice item ${i}: duplicate options`);
      }
      if (!Number.isInteger(it.correct) || it.correct < 0 || it.correct >= CHECK_OPTIONS) {
        out.push(`practice item ${i}: correct index out of range`);
      } else corrects.add(it.correct);
      if (typeof it.hint !== 'string' || !it.hint.trim())
        out.push(`practice item ${i}: hint missing`);
      if (typeof it.explanation !== 'string' || !it.explanation.trim()) {
        out.push(`practice item ${i}: explanation missing`);
      }
      // A hint that contains the answer is the answer, not a hint.
      const ans = Array.isArray(it.options) ? String(it.options[it.correct] ?? '') : '';
      if (
        ans &&
        typeof it.hint === 'string' &&
        it.hint.toLowerCase().includes(ans.toLowerCase()) &&
        ans.length > 2
      ) {
        out.push(`practice item ${i}: hint gives the answer away (${ans})`);
      }
    });
    if (items.length >= MIN_PRACTICE_ITEMS && corrects.size < 2) {
      out.push('guided practice correct indices must use >= 2 distinct positions');
    }
  }
  return out;
}

// ── Parallel forms, productive practice, lesson vocabulary ───────────────────
// (academic recommendations 2 and 3, owner go-ahead 2026-09-29). Measured before:
// every one of the ~12 items a learner answered in a lesson was multiple choice, the
// check had one paper, and a lesson's words never reached review. A level joins
// PRODUCTIVE_LEVELS once every lesson in it carries all three, and from then on the
// build holds it to them. `scripts/lessonPracticeCheck.mjs <LEVEL>` is the dry run.
export const PRODUCTIVE_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const MIN_PRODUCTIVE_PRACTICE = 12;
export const MIN_TYPED_PRACTICE = 4;
export const MIN_LESSON_VOCAB = 8;

const W = 'A-Za-zČĆĐŠŽčćđšž';
const wholeWord = (hay, word) =>
  new RegExp(`(?<![${W}])${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![${W}])`, 'iu').test(hay);

/** A typed practice item: a blank to fill, an answer, a hint that does not give it. */
export function typedItemProblems(it, where) {
  const out = [];
  if (typeof it.q !== 'string' || !/_{2,}/.test(it.q))
    out.push(`${where}: typed q needs a ____ blank`);
  const ans = typeof it.answer === 'string' ? it.answer.trim() : '';
  if (!ans) out.push(`${where}: typed answer missing`);
  if (
    it.accept !== undefined &&
    !(Array.isArray(it.accept) && it.accept.every((a) => typeof a === 'string'))
  ) {
    out.push(`${where}: accept must be an array of strings`);
  }
  if (typeof it.hint !== 'string' || !it.hint.trim()) out.push(`${where}: hint missing`);
  if (typeof it.explanation !== 'string' || !it.explanation.trim())
    out.push(`${where}: explanation missing`);
  if (ans.length > 2 && typeof it.hint === 'string' && wholeWord(it.hint, ans)) {
    out.push(`${where}: hint gives the answer away (${ans})`);
  }
  if (ans.length > 2 && typeof it.q === 'string' && wholeWord(it.q, ans)) {
    out.push(`${where}: the question contains its own answer (${ans})`);
  }
  return out;
}

/** Every parallel-form / productive-practice / vocabulary rule this lesson violates. */
export function productiveProblems(l) {
  const out = [];
  const slides = l.slides || [];
  const check = slides.find((s) => s.type === 'check');
  const formA = Array.isArray(check?.items) ? check.items : [];
  const formB = Array.isArray(check?.itemsB) ? check.itemsB : [];
  if (formB.length < MIN_CHECK_ITEMS) {
    out.push(`check form B needs >= ${MIN_CHECK_ITEMS} items (has ${formB.length})`);
  }
  const aQs = new Set(formA.map((it) => String(it.q).trim()));
  const corrects = new Set();
  formB.forEach((it, i) => {
    const where = `check B item ${i}`;
    if (typeof it.q !== 'string' || !it.q.trim()) out.push(`${where}: q missing`);
    else if (aQs.has(it.q.trim()) && !/^which sentence|^koja rečenica/i.test(it.q.trim())) {
      // A generic stem is fine (the options carry the item); an identical specific
      // question is the same item twice, which is not a parallel form.
      const aTwin = formA.find((a) => String(a.q).trim() === it.q.trim());
      if (aTwin && JSON.stringify(aTwin.options) === JSON.stringify(it.options)) {
        out.push(`${where}: repeats a form A item`);
      }
    }
    if (!Array.isArray(it.options) || it.options.length !== CHECK_OPTIONS) {
      out.push(`${where}: needs exactly ${CHECK_OPTIONS} options`);
    } else if (new Set(it.options.map((o) => String(o).trim())).size !== CHECK_OPTIONS) {
      out.push(`${where}: duplicate options`);
    }
    if (!Number.isInteger(it.correct) || it.correct < 0 || it.correct >= CHECK_OPTIONS) {
      out.push(`${where}: correct index out of range`);
    } else corrects.add(it.correct);
    if (typeof it.explanation !== 'string' || !it.explanation.trim())
      out.push(`${where}: explanation missing`);
  });
  if (formB.length >= MIN_CHECK_ITEMS && corrects.size < MIN_DISTINCT_CORRECT) {
    out.push(`check form B correct indices must use >= ${MIN_DISTINCT_CORRECT} distinct positions`);
  }
  const practice = slides.find((s) => s.type === 'practice');
  const items = Array.isArray(practice?.items) ? practice.items : [];
  if (items.length < MIN_PRODUCTIVE_PRACTICE) {
    out.push(`guided practice needs >= ${MIN_PRODUCTIVE_PRACTICE} items (has ${items.length})`);
  }
  const typed = items.filter((it) => it.type === 'type').length;
  if (typed < MIN_TYPED_PRACTICE) {
    out.push(`guided practice needs >= ${MIN_TYPED_PRACTICE} typed items (has ${typed})`);
  }
  const vocab = Array.isArray(l.vocab) ? l.vocab : [];
  if (vocab.length < MIN_LESSON_VOCAB)
    out.push(`needs >= ${MIN_LESSON_VOCAB} vocab entries (has ${vocab.length})`);
  const seen = new Set();
  vocab.forEach((v, i) => {
    if (
      !Array.isArray(v) ||
      v.length < 3 ||
      v.slice(0, 3).some((x) => typeof x !== 'string' || !x.trim())
    ) {
      out.push(`vocab ${i}: must be [hr, en, example] strings`);
      return;
    }
    const k = v[0].trim().toLowerCase();
    if (seen.has(k)) out.push(`vocab ${i}: duplicate ${v[0]}`);
    seen.add(k);
  });
  return out;
}
