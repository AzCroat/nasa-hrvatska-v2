// src/lib/taughtTerms.ts
//
// WHICH GRAMMAR WORDS MAY THE APP SAY TO THIS LEARNER? (owner, 2026-11-12)
//
// The owner's report: asking for a fuller explanation under a wrong answer talked about
// "singular or plural" and "padeži" to a learner in Unit 1, lessons 1–3, who had been
// taught neither — "we shouldn't be confusing the learner with subjects they have not yet
// studied or mastered." The explanation was CORRECT and still confusing, because the
// vocabulary it was written in had not been introduced.
//
// A term is allowed exactly when the lesson that teaches it is OPEN — done, in an
// advanced unit, or the one the course serves today (`lessonLock.readOpenLessons`, the same
// set the daily session and the lesson lock use). One table maps a lesson to the words it
// introduces. A word in no row is never allowed: if a new grammar word is added to an
// explanation, the table is where someone decides WHEN a learner has earned it.
//
// ABSENCE DEGRADES TO "UNKNOWN", and unknown allows everything (`null`): the spine is a
// cached fetch, and an explanation that went blank because it had not landed would be a
// worse failure than the jargon this removes. The caller treats null as "no restriction".

import { readOpenLessons } from './lessonLock';

/** Lesson id → the grammar words that lesson introduces to the learner. */
export const TERMS_INTRODUCED_BY: Readonly<Record<string, readonly string[]>> = {
  gender: ['gender', 'masculine', 'feminine', 'neuter'],
  'plural-nouns': ['singular', 'plural'],
  'adjectives-basic': ['adjective'],
  'present-tense-verbs': ['present tense', 'conjugation'],
  cases: ['case', 'nominative'],
  'accusative-intro': ['accusative'],
  'accusative-deep': ['accusative'],
  'locative-intro': ['locative'],
  'genitive-intro': ['genitive'],
  'genitive-deep': ['genitive'],
  'vocative-intro': ['vocative'],
  'dative-intro': ['dative'],
  'dative-locative': ['dative', 'locative'],
  'instrumental-intro': ['instrumental'],
  instrumental: ['instrumental'],
  'past-tense': ['past tense'],
  'future-tense': ['future tense'],
  // A2 (book alignment, 2026-11-13): the conditional is first taught by the A2 lesson
  // `conditional-forms` (Razgovarajte s nama!, lesson 4), not the B2 `conditional` lesson.
  'conditional-forms': ['conditional'],
  conditional: ['conditional'],
  'possessive-dative': ['possessive dative'],
  'comparatives-a2': ['comparative'],
  'superlatives-irregular': ['superlative'],
  aspect: ['aspect', 'perfective', 'imperfective'],
  'aspect-imperfective': ['aspect', 'imperfective'],
  'aspect-perfective': ['aspect', 'perfective'],
  // B2, re-derived from the corrected lessons (B2 book comparison, 2026-11-13). Each word is
  // one the lesson itself names and explains; multi-word terms keep general words such as
  // "participle" free for the A1–B1 past-tense explanations that already use them.
  'aspect-suffixes': ['secondary imperfective'],
  'false-friends': ['false friend'],
  'language-history': ['synonym', 'jat'],
  'relative-pronouns-cases': ['relative pronoun'],
  'predicate-instrumental': ['predicate instrumental'],
  'indefinite-pronouns-cases': ['indefinite pronoun'],
  'family-changes': ['antonym'],
  'i-declension': ['i-declension'],
  'reflexive-sebe': ['reflexive pronoun'],
  'participial-adjectives': ['passive participle'],
  'passive-voice': ['passive'],
  'verbal-nouns-intro': ['verbal noun'],
  'iterative-conditional': ['iterative conditional'],
  'perfective-present': ['perfective present'],
  'business-economy': ['paronym'],
  'coordinate-clauses': ['coordinate clause'],
  'dependent-clauses-b2': ['dependent clause'],
  'unreal-conditions': ['unreal condition', 'past conditional'],
  'genitive-of-negation': ['genitive of negation'],
  'verbal-adverbs': ['verbal adverb'],
  'reported-speech': ['reported speech'],
  'reported-speech-b2': ['reported speech'],
  interjections: ['interjection', 'onomatopoeia'],
};

/** Every grammar word the table can introduce (the words an explanation must not use early). */
export const ALL_GRAMMAR_TERMS: readonly string[] = [
  ...new Set(Object.values(TERMS_INTRODUCED_BY).flat()),
];

/** Pure: the words a learner may hear, given the lessons that are open to them. */
export function termsForOpenLessons(open: ReadonlySet<string>): Set<string> {
  const out = new Set<string>();
  for (const id of open) for (const t of TERMS_INTRODUCED_BY[id] ?? []) out.add(t);
  return out;
}

/**
 * The grammar words this learner may hear, or null when that cannot be known (no spine
 * yet) — in which case nothing is withheld. Never throws.
 */
/** The taught list as an array for a feedback request, or null when the course is unknown. */
export function taughtTermsList(): string[] | null {
  const set = readTaughtTerms();
  return set ? [...set] : null;
}

export function readTaughtTerms(): Set<string> | null {
  try {
    const open = readOpenLessons();
    return open ? termsForOpenLessons(open) : null;
  } catch {
    return null;
  }
}

/** The case letters (N G D A V L I) a taught-term set allows the app to NAME. */
const CASE_TERM: Readonly<Record<string, string>> = {
  N: 'nominative',
  G: 'genitive',
  D: 'dative',
  A: 'accusative',
  V: 'vocative',
  L: 'locative',
  I: 'instrumental',
};

/** Pure: may this case be named? `taught === null` means unknown, so yes. */
export function mayNameCase(caseLetter: string, taught: ReadonlySet<string> | null): boolean {
  if (taught === null) return true;
  const term = CASE_TERM[caseLetter];
  return !!term && taught.has(term) && taught.has('case');
}

/** Pure: may "singular"/"plural" be said? */
export function mayNameNumber(taught: ReadonlySet<string> | null): boolean {
  return taught === null || taught.has('plural');
}
