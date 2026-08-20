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
  nominative: 'case',
  genitive: 'case',
  accusative: 'case',
  'dative-locative': 'case',
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
