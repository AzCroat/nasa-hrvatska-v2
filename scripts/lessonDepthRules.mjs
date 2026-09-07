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
  return out;
}
