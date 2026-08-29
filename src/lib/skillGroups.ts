// src/lib/skillGroups.ts
//
// The coarse skill family each fine-grained SkillCategory belongs to.
//
// Promoted from src/tests/content-coverage.test.ts (2026-08-20) when the daily
// session needed it at runtime, not just at CI time. Keeping one map serves both
// purposes: the coverage gate tabulates (level × group) from it, and the session
// builder uses it to vary the fill by SKILL rather than by screen. The gate's
// exhaustiveness assertion — every pool category must appear here — now guards
// the production map, so a new category cannot silently join the pool ungrouped.
//
// WHY THE SESSION NEEDS THIS
// The Priority-3 fill excluded recently-seen SCREENS, which reads as variety but
// is not: A1's pool is case-heavy (9 of 33 entries), so three different screens
// could hand a learner three case drills in a row and every one of them passed
// the recency filter. Grouping is what lets the builder notice that.

import type { SkillCategory } from './adaptive';

export const SKILL_GROUPS = [
  'vocab',
  'case',
  'verb',
  'syntax',
  'speaking',
  'listening',
  'reading',
] as const;

export type SkillGroup = (typeof SKILL_GROUPS)[number];

/**
 * Every pool category maps to exactly one skill group. A category with no entry
 * here is a bug — the coverage matrix would silently miscount it, and the
 * session's variety pass would treat it as ungrouped. Asserted exhaustive by
 * src/tests/content-coverage.test.ts.
 */
export const SKILL_GROUP: Record<SkillCategory, SkillGroup> = {
  'vocab-a2': 'vocab',
  'vocab-b1': 'vocab',
  'vocab-b2': 'vocab',
  // Kept in 'vocab', which is where genderdrill already grouped via its old
  // 'vocab-a2' tag — so the P3 variety pass behaves exactly as before.
  gender: 'vocab',
  // Plural formation is noun morphology, so it varies against the cases rather
  // than against vocabulary — a session serving a plural drill beside three
  // case drills is the monotony the variety pass exists to prevent.
  plural: 'case',
  // A1 tranche 2 (2026-08-29). Noun-phrase morphology groups with the cases;
  // negation and the imperative are verb operations; possessives agree like
  // adjectives, so both sit in the noun-phrase family.
  adjectives: 'case',
  demonstratives: 'case',
  possessives: 'case',
  negation: 'verb',
  imperative: 'verb',
  having: 'verb',
  // A1 tranche 3 (2026-08-29). `questions` is sentence construction — li
  // placement and question-word order — so it groups with word-order and the
  // clitics, not with vocabulary. `place-prepositions` is a case choice
  // (locative vs accusative vs genitive) and groups with the cases for exactly
  // the reason `verb-government` does. `greetings` is the one genuinely lexical
  // member of this tranche. `time` covers the clock, the days and the months —
  // a closed vocabulary set with one counting rule attached, and grouping it as
  // 'case' would let it sit beside three case drills in a session, which is the
  // monotony the variety pass exists to stop.
  questions: 'syntax',
  'place-prepositions': 'case',
  time: 'vocab',
  greetings: 'vocab',
  // A2 tranche 1 (2026-08-29). Three are noun-phrase morphology and group with
  // the cases; `comparison` is adjective morphology and groups there too, for
  // the same reason `adjectives` does. Nothing here joins 'vocab' — every one of
  // them is a form the learner has to build.
  'reflexive-possessive': 'case',
  'plural-cases': 'case',
  quantity: 'case',
  comparison: 'case',
  // B1 tranche 1 (2026-08-29). Four are clause construction and group with
  // 'syntax', beside the other subordination content they sit next to in a
  // session. `impersonal` is grouped with the VERBS, not with syntax: what the
  // learner is choosing there is a verb form (treba, se-constructions, the
  // subjectless third person), and grouping it as syntax would let it appear
  // alongside three other clause drills — the monotony the variety pass exists
  // to prevent.
  'infinitive-da': 'syntax',
  'reported-speech': 'syntax',
  'time-clauses': 'syntax',
  'cause-purpose': 'syntax',
  impersonal: 'verb',
  // C2 tranche 1 (2026-08-29). Every row here PRESERVES the group the entry
  // already had through its old catch-all tag, so the P3 variety pass behaves
  // byte-identically to before the retag — the same rule the `rekcija` retag
  // followed. `academic-style` therefore stays in 'verb' (it inherited that from
  // `nominalization`) and the two style drills stay in 'syntax' (from
  // `discourse`), which reads oddly in isolation and is deliberate: changing a
  // grouping and a tag in one commit would make a variety regression impossible
  // to attribute. Regrouping them is a separate decision.
  // B2 tranche 1 (2026-08-29). `i-declension` is a noun paradigm and groups
  // with the cases — which is also the group it already had via its old
  // (wrong) `instrumental` tag, so the variety pass is unchanged by the retag.
  // The three verb-side categories group as verbs; `intensity` is adverbial
  // grading and sits with vocab.
  'i-declension': 'case',
  'verbal-adverbs': 'verb',
  'negation-advanced': 'verb',
  'aspect-verbs': 'verb',
  intensity: 'vocab',
  orthography: 'vocab',
  punctuation: 'vocab',
  'admin-style': 'vocab',
  'academic-style': 'verb',
  'journalistic-style': 'syntax',
  'figures-of-speech': 'syntax',
  editing: 'vocab',
  precision: 'vocab',
  nominative: 'case',
  genitive: 'case',
  accusative: 'case',
  'dative-locative': 'case',
  // Grouped with the CASES, not with the verbs, and deliberately: the variety
  // pass exists to stop a session serving four case drills in a row, and a
  // learner doing `rekcija` is picking a case. Grouping it as 'verb' would let
  // it appear alongside three other case drills — the exact failure the pass
  // was built to prevent. This also keeps the pass's behaviour byte-identical
  // to before the retag, when the entry grouped as 'case' via dative-locative.
  'verb-government': 'case',
  instrumental: 'case',
  vocative: 'case',
  'present-tense': 'verb',
  'past-tense': 'verb',
  'future-tense': 'verb',
  'aspect-imperfective': 'verb',
  'aspect-perfective': 'verb',
  'aspect-negation': 'verb',
  conditional: 'verb',
  'word-order': 'syntax',
  clitics: 'syntax',
  subordination: 'syntax',
  discourse: 'syntax',
  passive: 'verb',
  participle: 'verb',
  nominalization: 'verb',
  numerals: 'case',
  idioms: 'vocab',
  register: 'vocab',
  speaking: 'speaking',
  listening: 'listening',
  reading: 'reading',
  // 'writing' has no CEFR_EXERCISE_POOL entries — written production is served
  // by PRODUCTION_POOL, which the variety pass does not touch. This row exists
  // for type completeness; it is grouped with speaking because both are output,
  // so if a writing entry ever joins the fill pool it will vary against speaking
  // rather than counting as a family of its own.
  writing: 'speaking',
  // Rotating animated-lesson slot: catalog is predominantly verbal morphology.
  'grammar-lesson': 'verb',
};

/**
 * Skill group for a session activity's category, or undefined.
 *
 * Sessions carry Croatia activities tagged 'culture'/'practical'/'general',
 * which are deliberately outside the skill taxonomy — they return undefined and
 * the variety pass leaves them alone rather than forcing them into a family they
 * do not belong to.
 */
export function skillGroupOf(category: string): SkillGroup | undefined {
  return SKILL_GROUP[category as SkillCategory];
}
