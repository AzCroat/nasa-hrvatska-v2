// src/lib/answerContrast.ts
//
// WHY THAT ONE AND NOT THIS ONE (owner recommendation 7, 2026-09-07).
//
// The gap: a wrong answer in the practice programme showed the item's `tip` —
// the SAME line the learner sees when they get it right. It says what the rule
// is; it never says what THEY chose or why it does not fit. `/api/explain-error`
// does say that, and it reached 10 of ~170 practice screens: the seven case
// drills plus three others. The other 109 ModeDrill-backed drills, which are
// the whole practice programme built this month, had nothing.
//
// The obvious fix — wire `useExplainError` into ModeDrill — would put a Claude
// call on EVERY wrong answer across 109 drills. Against a $10/month ceiling and
// a 300-turn daily quota that is not a fix, it is the cache-served-endpoint
// mistake in a new place: a per-learner cost on the commonest event in the app.
//
// So the same layering rec #6 established for word taps:
//   1. the item's authored tip — always, free, already there
//   2. THIS: a rule-based contrast of the two forms — free, offline, instant,
//      and the piece that was actually missing
//   3. the AI explanation, behind a button the learner presses
//
// The contrast is built from `croatianMorphology`, so it inherits that module's
// honesty rule exactly: it reports every reading each form permits and never
// picks one. When the readings genuinely OVERLAP it says so rather than
// inventing a distinction, and when neither form can be read it returns null
// and nothing is shown — a wrong explanation of a wrong answer is worse than
// the tip alone.

import { analyzeForm, describeReading, nounStemKey, CASE_NAME } from './croatianMorphology';

export interface ContrastSide {
  word: string;
  /** What the form can be, capped at MAX_READINGS. */
  readings: string[];
  /** True when the form permits MORE readings than are listed — the line must say so. */
  more?: boolean;
}

export interface AnswerContrast {
  /** The learner's word, and what it can be. */
  chosen: ContrastSide;
  /** The right word, and what it can be. */
  answer: ContrastSide;
  /**
   * The one line worth reading, when the two forms differ in a way the rules
   * can name. Absent when they do not — never filled with a guess.
   */
  headline?: string;
}

const MAX_READINGS = 3;

function readingLines(word: string): { lines: string[]; more: boolean } {
  const seen = new Set<string>();
  const all: string[] = [];
  // Case readings only: once the pair is known to be two forms of one declinable
  // word (below), a verb reading the ending also permits (stola as a participle)
  // is not what this word is.
  for (const c of analyzeForm(word).candidates) {
    if (!c.case) continue;
    const line = describeReading(c);
    if (seen.has(line)) continue;
    seen.add(line);
    all.push(line);
  }
  return { lines: all.slice(0, MAX_READINGS), more: all.length > MAX_READINGS };
}

const hasCase = (word: string) => analyzeForm(word).candidates.some((c) => Boolean(c.case));
const hasVerb = (word: string) => analyzeForm(word).candidates.some((c) => c.pos === 'verb');

/** Closed-class words (ga, mu, meni, nas) are read off a table, not guessed. */
function closedClass(word: string): boolean {
  const cs = analyzeForm(word).candidates;
  return cs.length > 0 && cs.every((c) => c.pos === 'pronoun' || c.pos === 'clitic');
}

/** The cases a reading set can be, as a set of case letters. */
function caseSet(word: string): Set<string> {
  const s = new Set<string>();
  for (const c of analyzeForm(word).candidates) if (c.case) s.add(c.case);
  return s;
}

const CASE_ORDER = ['N', 'G', 'D', 'A', 'V', 'L', 'I'];

/** "is the dative" / "can be the genitive or the accusative" — every case, in order. */
function caseList(cases: Set<string>): string {
  const names = CASE_ORDER.filter((c) => cases.has(c)).map(
    (c) => `the ${CASE_NAME[c as keyof typeof CASE_NAME]}`,
  );
  if (names.length === 1) return `is ${names[0]}`;
  return `can be ${names.slice(0, -1).join(', ')} or ${names[names.length - 1]}`;
}

/**
 * What the learner picked against what was needed. Single words only: a
 * multi-word option is a whole clause, and the ending rules say nothing about
 * word order or clitic position, so claiming otherwise would be fabrication.
 */
export function contrastAnswers(chosen: string, answer: string): AnswerContrast | null {
  const a = chosen.trim();
  const b = answer.trim();
  if (!a || !b || a.toLowerCase() === b.toLowerCase()) return null;
  if (/\s/.test(a) || /\s/.test(b)) return null;

  // ONLY TWO FORMS OF ONE WORD (2026-09-27). The ending rules read ANY string as a
  // noun — so across the 109 engine drills this panel was telling learners that
  // the connector "stoga" is a genitive singular, that the participle "pisao" is a
  // nominative, that the imperative "idi" is a dative. A case contrast is
  // meaningful exactly where a case drill uses it: the same noun or pronoun in
  // two different forms. Anything else — a verb, a connector, two different
  // words — gets nothing from the rules and keeps the tip and the AI button.
  if (!hasCase(a) || !hasCase(b)) return null;
  // Both could be verb forms (pomogla / pomogle): not a case question.
  if (hasVerb(a) && hasVerb(b)) return null;
  const pronounPair = closedClass(a) && closedClass(b);
  if (!pronounPair && nounStemKey(a) !== nounStemKey(b)) return null;

  const chosenReadings = readingLines(a);
  const answerReadings = readingLines(b);

  const out: AnswerContrast = {
    chosen: {
      word: a,
      readings: chosenReadings.lines,
      ...(chosenReadings.more ? { more: true } : {}),
    },
    answer: {
      word: b,
      readings: answerReadings.lines,
      ...(answerReadings.more ? { more: true } : {}),
    },
  };

  const ca = caseSet(a);
  const cb = caseSet(b);
  if (ca.size && cb.size) {
    const shared = [...ca].filter((c) => cb.has(c));
    if (shared.length === 0) {
      // The clean case: the two endings cannot be the same case at all, which
      // is exactly the mistake a case drill is testing for. It names EVERY case
      // each form permits: the old line picked the first reading of each and
      // stated it flatly ("the sentence needs genitive singular" for mene, which
      // is the accusative too), which is the one thing this module never does.
      out.headline = `Those two forms can never be the same case. ${a} ${caseList(ca)}; ${b} ${caseList(cb)}.`;
    } else if (shared.length === ca.size && shared.length === cb.size) {
      // Both forms permit the same cases — the difference is elsewhere (gender,
      // number, a stem alternation). Saying "wrong case" here would be false.
      out.headline = `Both endings can carry the same case, so the case is not what separates them here — look at the stem and at what the word has to agree with.`;
    }
  }

  return out;
}
