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

import { analyzeForm, describeReading, type FormAnalysis } from './croatianMorphology';

export interface AnswerContrast {
  /** The learner's word, and what it can be. */
  chosen: { word: string; readings: string[] };
  /** The right word, and what it can be. */
  answer: { word: string; readings: string[] };
  /**
   * The one line worth reading, when the two forms differ in a way the rules
   * can name. Absent when they do not — never filled with a guess.
   */
  headline?: string;
}

const MAX_READINGS = 3;

function readingLines(word: string): string[] {
  const r = analyzeForm(word);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const c of r.candidates) {
    const line = describeReading(c);
    if (seen.has(line)) continue;
    seen.add(line);
    out.push(line);
    if (out.length >= MAX_READINGS) break;
  }
  return out;
}

/** The cases a reading set can be, as a set of case letters. */
function caseSet(word: string): Set<string> {
  const s = new Set<string>();
  for (const c of analyzeForm(word).candidates) if (c.case) s.add(c.case);
  return s;
}

function firstCase(word: string): FormAnalysis | undefined {
  return analyzeForm(word).candidates.find((c) => c.case);
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

  const chosenReadings = readingLines(a);
  const answerReadings = readingLines(b);
  if (chosenReadings.length === 0 && answerReadings.length === 0) return null;

  const out: AnswerContrast = {
    chosen: { word: a, readings: chosenReadings },
    answer: { word: b, readings: answerReadings },
  };

  const ca = caseSet(a);
  const cb = caseSet(b);
  if (ca.size && cb.size) {
    const shared = [...ca].filter((c) => cb.has(c));
    if (shared.length === 0) {
      // The clean case: the two endings cannot be the same case at all, which
      // is exactly the mistake a case drill is testing for.
      const pa = firstCase(a);
      const pb = firstCase(b);
      if (pa && pb) {
        out.headline = `Those two endings can never be the same case. ${a} is ${describeReading(pa).split(' — ')[0]}; the sentence needs ${describeReading(pb).split(' — ')[0]}.`;
      }
    } else if (shared.length === ca.size && shared.length === cb.size) {
      // Both forms permit the same cases — the difference is elsewhere (gender,
      // number, a stem alternation). Saying "wrong case" here would be false.
      out.headline = `Both endings can carry the same case, so the case is not what separates them here — look at the stem and at what the word has to agree with.`;
    }
  }

  return out;
}
