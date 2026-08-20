// src/lib/activityReason.ts
//
// PER-ACTIVITY "WHY AM I SEEING THIS" (recommender audit, 2026-08-20).
//
// The session already explains itself as a whole (buildPlanReason), but each
// individual activity arrived unexplained — the learner saw a list of drills
// with no indication that anything about it was chosen FOR them. A slot machine
// and a coach look identical until the coach says why.
//
// THE HONESTY RULE, inherited from buildPlanReason: never fabricate a reason.
// Every string here is derived from something the app actually measured, and a
// slot with no real signal returns null and renders nothing. That constraint is
// what makes the line worth reading — a reason the learner can catch being wrong
// is worse than no reason at all. Two specific traps this avoids:
//
//   * the adaptive store seeds recentAccuracy at 0.5 for unseen categories, so
//     "you got 50% right" would be a result the learner never produced.
//     getCategoryStatus reports accuracy null until lastSeen is set.
//   * the mastery ledger returns null when it has measured neither production
//     skill, so we never claim speaking is "weakest" on no evidence.
//
// Reasons are built at session-BUILD time and stored on the activity, not
// recomputed at render: the learner should see why it was picked this morning,
// not a line that silently rewrites itself as they practise.

import type { SkillCategory } from './adaptive';
import { getCategoryStatus } from './adaptive';

/** Human-facing name for a category, for use inside a sentence. */
const CATEGORY_LABEL: Partial<Record<SkillCategory, string>> = {
  genitive: 'the genitive',
  accusative: 'the accusative',
  'dative-locative': 'dative and locative',
  instrumental: 'the instrumental',
  vocative: 'the vocative',
  nominative: 'the nominative',
  'present-tense': 'the present tense',
  'past-tense': 'the past tense',
  'future-tense': 'the future tense',
  conditional: 'the conditional',
  'aspect-imperfective': 'verb aspect',
  'aspect-perfective': 'verb aspect',
  'aspect-negation': 'aspect in negation',
  clitics: 'clitics',
  'word-order': 'word order',
  'vocab-a2': 'vocabulary',
  'vocab-b1': 'vocabulary',
  'vocab-b2': 'vocabulary',
  listening: 'listening',
  writing: 'writing',
  speaking: 'speaking',
};

export function categoryLabel(category: SkillCategory): string {
  return CATEGORY_LABEL[category] ?? category.replace(/-/g, ' ');
}

/**
 * Why the SRS slot is here. Always truthful — the count is the queue length the
 * slot was built from.
 */
export function reviewReason(dueCount: number): string | null {
  if (dueCount <= 0) return null;
  return dueCount === 1
    ? '1 word is due for review today.'
    : `${dueCount} words are due for review today.`;
}

/**
 * Why the teach → practice slot is here. The queue stores the category, not
 * which lesson queued it, so the line names the concept rather than inventing a
 * lesson title.
 */
export function taughtReason(category: SkillCategory): string {
  return `You just finished a lesson on ${categoryLabel(category)} — here's where you use it.`;
}

/**
 * Why the adaptive slot picked this category. Three honest cases:
 *   never practised  → say exactly that
 *   practised, weak  → cite the measured accuracy
 *   practised, solid → say it's due, not that it's weak
 */
export function adaptiveReason(category: SkillCategory): string | null {
  const status = getCategoryStatus(category);
  const label = categoryLabel(category);
  if (!status.seen) return `You haven't practised ${label} yet.`;
  if (status.accuracy === null) return null;
  const pct = Math.round(status.accuracy * 100);
  if (status.accuracy < 0.75) return `You were ${pct}% accurate on ${label} last time.`;
  return `${label.charAt(0).toUpperCase()}${label.slice(1)} is due for a refresh.`;
}

/**
 * Why the production slot is here. `weakest` comes from the mastery ledger and
 * is already null when the ledger has measured neither skill — in that case we
 * fall back to naming the guarantee, which is true regardless of evidence.
 */
export function productionReason(weakest: 'speak' | 'write' | null): string {
  if (weakest === 'speak') return 'Speaking is the skill your practice says needs the most work.';
  if (weakest === 'write') return 'Writing is the skill your practice says needs the most work.';
  return 'Every session includes one activity where you produce Croatian yourself.';
}

/** Why the conversation anchor is here (B1+ guarantee — true by construction). */
export function conversationReason(): string {
  return 'B1 and up gets a conversation every session — the part recognition cannot replace.';
}

/** Why the guaranteed grammar slot is here (true by construction). */
export function grammarSlotReason(): string {
  return 'Every session includes one grammar drill.';
}

/** Why the Croatia slot is here (true by construction — it is a daily rotation). */
export function croatiaReason(): string {
  return "Today's culture pick.";
}

/**
 * Spread helper: `{ ...withReason(maybe) }` adds `reason` only when there is one.
 *
 * Without this every no-signal slot would carry `reason: undefined`, which then
 * serialises into the persisted session as an explicit key and makes "has no
 * reason" and "has an empty reason" indistinguishable downstream. Omitting the
 * property keeps the honesty rule visible in the data itself.
 */
export function withReason(reason: string | null | undefined): { reason?: string } {
  return reason ? { reason } : {};
}
