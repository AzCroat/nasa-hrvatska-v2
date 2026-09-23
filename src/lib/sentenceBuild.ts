// src/lib/sentenceBuild.ts
//
// SENTENCE BUILDING — the rung between imitation and free speech
// (owner directive, 2026-09-23: "In guided speaking we need to begin with
// sentences, not paragraphs. We need to be building up speaking").
//
// THE GAP THIS CLOSES, MEASURED. Guided Speaking ran LISTEN → REHEARSE → SPEAK.
// REHEARSE is `{hr, en, why}` — repeat a fixed phrase back, pure imitation; it
// never asks the learner to CONSTRUCT anything. SPEAK is free production with a
// word floor. Measured across all 48 units, the floor is 15 words at A1 against
// a 31-word model, and the very first unit (`a1-introduce`) asks for four
// separate things at once — name, origin, residence, motivation. So the ladder
// went "say this phrase back" straight to "give me a paragraph", with no rung in
// between where a learner builds one sentence of their own.
//
// AND THE GRAMMAR SIGNAL WAS WORSE THAN THE LENGTH. The SPEAK checklist is
// satisfied when "the transcript contains ANY of these (case-insensitive)" —
// substring presence, which cannot tell a correct case ending from a wrong one.
// The only real grammatical feedback was one `/api/speaking-coach` rubric score
// on the whole paragraph: the longest, latest, least actionable place to receive
// a correction about a case ending.
//
// WHY THIS IS RULE-BASED AND NOT AN AI CALL. Firing a Claude call per spoken
// sentence is the cache-served-endpoint mistake in a new place — a per-learner
// charge on what would become the commonest event in the app. Everything needed
// is already here and free: `croatianMorphology.decline()` gives the full
// paradigm, `CASE_NAME`/`CASE_QUESTION` give the app's own plain-English
// vocabulary for each case, and the correction lands instantly and offline. The
// AI coach still grades the paragraph at SPEAK, once, exactly as before.
//
// IT GRADES THE GRAMMAR POINT, NOT THE SENTENCE. If the learner produces the
// required FORM, the item passes even when the rest of their wording differs
// from the model — this is speech, not dictation, and the same rule that stops
// `phraseMatches` punishing a dropped diacritic applies here.
//
// THE HONESTY RULE IS INHERITED FROM THE MORPHOLOGY MODULE. Croatian endings are
// massively syncretic: `knjige` is genitive singular AND nominative plural AND
// accusative plural. When the learner's form is ambiguous this reports EVERY
// reading the ending permits and never picks one, because naming a single case
// would be wrong most of the time — NEVER-DO 13 applied to grammar.

import { decline } from './croatianMorphology';
import { CASE_NAME, CASE_QUESTION, CASES } from './croatianMorphologyTypes';
import type { Case, Gender, Number_ } from './croatianMorphologyTypes';
import { normaliseSpoken, phraseMatches } from './spokenMatch';

/** The one grammatical point a build sentence exists to drill. */
export interface BuildFocus {
  /** Dictionary form of the word that must be inflected. */
  lemma: string;
  /** Supplied when the spelling cannot tell the gender (`stvar` vs `grad`). */
  gender?: Gender;
  /** The case this sentence requires. */
  requiredCase: Case;
  /** Singular unless stated. */
  number?: Number_;
  /** Why this sentence needs that case, in the app's voice. One clause. */
  why: string;
}

export interface BuildSentence {
  /** What to say, in English — the learner produces the Croatian. */
  cue: string;
  /** A correct Croatian rendering, shown only after a miss. */
  answer: string;
  /** Other renderings that are equally correct (word order, synonyms). */
  accept?: string[];
  focus?: BuildFocus;
}

export type BuildVerdict =
  | { ok: true }
  | { ok: false; kind: 'empty' }
  | { ok: false; kind: 'not-yet' }
  | { ok: false; kind: 'wrong-form'; said: string; required: string; message: string };

/** Every case/number cell whose form equals `surface`.
 *
 *  THE TABLE IS FLAT — `{ Nsg, Gsg, …, Ipl }`, keyed `<Case><Number>`, NOT
 *  `table[case][number]`. The first draft of this file assumed the nested shape;
 *  the lookup then returned `undefined` for every word, the focus branch never
 *  ran, and grading fell through to `phraseMatches` — a grammar check that was
 *  silently never performed. Caught by probing `decline()` against real words
 *  before authoring any data, which is the only reason it did not ship. */
function readingsFor(forms: Record<string, string>, surface: string): { c: Case; num: Number_ }[] {
  const out: { c: Case; num: Number_ }[] = [];
  for (const c of CASES) {
    for (const num of ['sg', 'pl'] as Number_[]) {
      const cell = forms[`${c}${num}`];
      if (cell && normaliseSpoken(cell) === surface) out.push({ c, num });
    }
  }
  return out;
}

function listCases(rs: { c: Case; num: Number_ }[]): string {
  // ALWAYS say the number. "genitive" next to "nominative plural" reads as if
  // the first had no number at all, and a learner meeting syncretism for the
  // first time is exactly who cannot infer it.
  const names = rs.map((r) => `${CASE_NAME[r.c]} ${r.num === 'pl' ? 'plural' : 'singular'}`);
  const uniq = [...new Set(names)];
  if (uniq.length === 1) return `the ${uniq[0]}`;
  return `the ${uniq.slice(0, -1).join(', ')} or the ${uniq[uniq.length - 1]}`;
}

/**
 * Grade one spoken sentence against its build item. Pure, synchronous, free.
 *
 * Order matters and is the whole design: the REQUIRED FORM is checked before the
 * model sentence, so a learner who nails the grammar in their own words passes.
 */
export function gradeBuild(heard: string, item: BuildSentence): BuildVerdict {
  const said = normaliseSpoken(heard);
  if (!said) return { ok: false, kind: 'empty' };

  const words = new Set(said.split(' '));
  const focus = item.focus;

  if (focus) {
    const num: Number_ = focus.number ?? 'sg';
    const forms = decline(focus.lemma, focus.gender)?.forms as Record<string, string> | undefined;
    const required = forms?.[`${focus.requiredCase}${num}`];
    if (forms && required) {
      const req = normaliseSpoken(required);
      // Got the grammar point — pass, whatever else they said around it.
      if (words.has(req)) return { ok: true };
      // Said a DIFFERENT form of the same word: name what they produced and
      // what the sentence needs. Every reading the ending permits, never one.
      for (const w of words) {
        const rs = readingsFor(forms, w);
        if (rs.length === 0) continue;
        if (rs.some((r) => r.c === focus.requiredCase && r.num === num)) return { ok: true };
        return {
          ok: false,
          kind: 'wrong-form',
          said: w,
          required,
          message:
            `You said “${w}” — that is ${listCases(rs)}. ` +
            // Em-dash, not parentheses: CASE_QUESTION for the locative already
            // contains a parenthetical, and nesting them reads badly.
            `This sentence needs the ${CASE_NAME[focus.requiredCase]} — ` +
            `${CASE_QUESTION[focus.requiredCase]} — so: “${required}”. ${focus.why}`,
        };
      }
    }
  }

  if (phraseMatches(heard, item.answer)) return { ok: true };
  for (const alt of item.accept ?? []) if (phraseMatches(heard, alt)) return { ok: true };
  return { ok: false, kind: 'not-yet' };
}
