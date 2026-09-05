// src/lib/masteryLedger.ts
//
// Phase 2 of the mastery directive (2026-08-16): the continuous mastery
// ledger. Every scored practice event — drills, SRS reviews, writing
// evaluations, exam sections — feeds a per-(level, skill) rolling score, so
// the app can SEE which CEFR skills are demonstrated, developing, or untested
// long before (and after) a Level Check confirms them. The checkpoint exam
// CONFIRMS mastery; this ledger TRACKS and DRIVES it day to day.
//
// Design constraints:
// - The ledger is a MEASUREMENT, not a reward. Unlike progress stats (XP,
//   lc, vs — merged additively, never reduced), a mastery score legitimately
//   goes down when accuracy drops. The cross-device merge is monotone in
//   EVIDENCE (the cell with more samples wins), not in score.
// - Dwell time contributes NOTHING here. Only events with a real correctness
//   or quality signal are recorded.
// - Cheap: one localStorage read-modify-write per scored event, bounded state
//   (6 levels × 6 skills max).
//
// @see src/lib/cefrCertification.ts — the gate this ledger informs
// @see src/hooks/useExerciseCompletion.ts — drill/exercise ingestion
// @see src/lib/srs.ts — SRS review ingestion

import type { CefrLevel } from './cefr.js';
import { CEFR_ORDER, levelBelow } from './cefr.js';
import { getCurrentContentLevel, type SkillKey } from './cefrCertification.js';

export interface MasteryCell {
  /** Rolling (EWMA) accuracy/quality, 0..1. */
  s: number;
  /** Sample count — the evidence weight behind `s`. */
  n: number;
  /** Epoch ms of the last update. */
  at: number;
}

export interface MasteryLedgerState {
  v: 1;
  /** Keyed `${level}:${skill}`. */
  cells: Record<string, MasteryCell>;
}

const STORAGE_KEY = 'nh_mastery_ledger';

/** Below this many samples a cell is "untested" — one lucky drill is not
 *  evidence. Chosen so a typical day of practice (a 12-question drill run is
 *  one event) reaches tested status within a week of honest work. */
export const MIN_SAMPLES = 5;

/** The readiness bar mirrors the exam pass bar. */
export const MASTERY_THRESHOLD = 0.8;

/** Skills the ledger tracks (mirrors certification SkillKey). */
export const LEDGER_SKILLS: SkillKey[] = [
  'vocab',
  'grammar',
  'reading',
  'listening',
  'speaking',
  'writing',
];

function emptyState(): MasteryLedgerState {
  return { v: 1, cells: {} };
}

export function getMasteryLedger(): MasteryLedgerState {
  if (typeof localStorage === 'undefined') return emptyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as MasteryLedgerState;
    if (!parsed || parsed.v !== 1 || typeof parsed.cells !== 'object' || !parsed.cells) {
      return emptyState();
    }
    return parsed;
  } catch {
    return emptyState();
  }
}

function writeLedger(state: MasteryLedgerState): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota/locked — next event retries */
  }
}

export interface MasteryEvent {
  level: CefrLevel;
  skill: SkillKey;
  /** 0..1 accuracy/quality of this event. */
  score: number;
  /** Evidence weight: 1 = a normal drill run. SRS single answers use less,
   *  exam sections more. Scales the EWMA step AND the sample increment. */
  weight?: number;
}

/**
 * Fold one scored event into the ledger. EWMA step size shrinks as evidence
 * accumulates (fast to move early, stable later), floored so a genuine change
 * in ability is never frozen out.
 */
export function recordMasteryEvent(ev: MasteryEvent): void {
  const score = Math.max(0, Math.min(1, ev.score));
  const weight = Math.max(0.05, Math.min(4, ev.weight ?? 1));
  if (!(CEFR_ORDER as readonly string[]).includes(ev.level)) return;
  if (!LEDGER_SKILLS.includes(ev.skill)) return;
  const state = getMasteryLedger();
  const key = `${ev.level}:${ev.skill}`;
  const cell = state.cells[key];
  if (!cell) {
    state.cells[key] = { s: score, n: weight, at: Date.now() };
  } else {
    const alpha = Math.min(0.5, Math.max(0.1, weight / (cell.n + 1)));
    cell.s = cell.s + alpha * (score - cell.s);
    cell.n = Math.min(10000, cell.n + weight);
    cell.at = Date.now();
  }
  writeLedger(state);
}

export interface SkillMastery {
  score: number;
  samples: number;
  tested: boolean;
  strong: boolean;
}

/** Per-skill mastery at one level (cells absent → undefined). */
export function getMasteryProfile(level: CefrLevel): Partial<Record<SkillKey, SkillMastery>> {
  const state = getMasteryLedger();
  const out: Partial<Record<SkillKey, SkillMastery>> = {};
  for (const skill of LEDGER_SKILLS) {
    const cell = state.cells[`${level}:${skill}`];
    if (!cell) continue;
    const tested = cell.n >= MIN_SAMPLES;
    out[skill] = {
      score: cell.s,
      samples: cell.n,
      tested,
      strong: tested && cell.s >= MASTERY_THRESHOLD,
    };
  }
  return out;
}

export interface VerificationReadiness {
  strong: SkillKey[];
  developing: SkillKey[];
  untested: SkillKey[];
}

/**
 * Readiness signal for verifying status level `target`. While the gate is on,
 * practice happens one level BELOW the target (the content cap), so evidence
 * for the same competency lives in both bands — read each skill from the
 * stronger-evidenced of the two cells.
 */
export function readinessForVerification(target: CefrLevel): VerificationReadiness {
  const below = levelBelow(target);
  const state = getMasteryLedger();
  const res: VerificationReadiness = { strong: [], developing: [], untested: [] };
  for (const skill of LEDGER_SKILLS) {
    const a = state.cells[`${target}:${skill}`];
    const b = below ? state.cells[`${below}:${skill}`] : undefined;
    const cell = !a ? b : !b ? a : a.n >= b.n ? a : b;
    if (!cell || cell.n < MIN_SAMPLES) {
      res.untested.push(skill);
    } else if (cell.s >= MASTERY_THRESHOLD) {
      res.strong.push(skill);
    } else {
      res.developing.push(skill);
    }
  }
  return res;
}

// ── Ingestion adapters ───────────────────────────────────────────────────────

/** award() activityType → ledger skill. Types with no honest skill signal
 *  ('lesson', 'culture', undefined) are deliberately unmapped. */
const ACTIVITY_TO_SKILL: Record<string, SkillKey> = {
  grammar: 'grammar',
  vocabulary: 'vocab',
  vocab: 'vocab',
  reading: 'reading',
  listening: 'listening',
  speaking: 'speaking',
  writing: 'writing',
};

/**
 * Drill/exercise completion (called from the single completion authority).
 * Records only when a real score exists; attributed to the level the user is
 * currently practicing (the content-unlock level).
 */
export function recordExerciseOutcome(args: {
  activityType?: string;
  score?: number;
  total?: number;
}): void {
  const { activityType, score, total } = args;
  if (typeof score !== 'number' || typeof total !== 'number' || total <= 0) return;
  const skill = activityType ? ACTIVITY_TO_SKILL[activityType] : undefined;
  if (!skill) return;
  try {
    recordMasteryEvent({
      level: getCurrentContentLevel(),
      skill,
      score: score / total,
      weight: 1,
    });
  } catch {
    /* ledger is best-effort — never break the completion path */
  }
}

/** One SRS review answer — small weight, they arrive in volume. */
export function recordSrsOutcome(correct: boolean): void {
  try {
    recordMasteryEvent({
      level: getCurrentContentLevel(),
      skill: 'vocab',
      score: correct ? 1 : 0,
      weight: 0.25,
    });
  } catch {
    /* best-effort */
  }
}

/**
 * A completed Level Check attempt — the strongest evidence there is.
 * Attributed to the STATUS level the attempt targets.
 */
export function recordExamSkillScores(
  level: CefrLevel,
  scores: Partial<Record<SkillKey, number | undefined>>,
): void {
  for (const skill of LEDGER_SKILLS) {
    const v = scores[skill];
    if (typeof v === 'number') {
      try {
        recordMasteryEvent({ level, skill, score: v, weight: 3 });
      } catch {
        /* best-effort */
      }
    }
  }
}

// ── Phase 3: journey weighting ───────────────────────────────────────────────

/**
 * Session-pool `category` (the adaptive SkillCategory taxonomy) → ledger
 * SkillKey. Pool entries are tagged with categories; the ledger tracks CEFR
 * skills — this is the one piece of glue between them. Croatia-pool tags
 * ('culture' | 'practical' | 'general') carry no skill signal → null.
 */
export function skillForCategory(category: string): SkillKey | null {
  if (category === 'speaking') return 'speaking';
  if (category === 'writing') return 'writing';
  if (category === 'listening') return 'listening';
  if (category === 'reading') return 'reading';
  if (category.startsWith('vocab')) return 'vocab';
  if (category === 'culture' || category === 'practical' || category === 'general') return null;
  // Everything else in the taxonomy is the grammar curriculum (cases, tenses,
  // aspect, clitics, word order, register, 'grammar-lesson', …).
  return 'grammar';
}

/**
 * One ledger read → a per-category boost function for the session fill sort.
 * Untested skills pull hardest (1); developing skills pull by their gap
 * (1 - score); strong skills add nothing. Used as a TIE-BREAK behind the
 * difficulty distance, so it can never drag a too-easy/too-hard activity into
 * a session — it only decides which same-difficulty activity serves first.
 * With an empty ledger every boost is 1 → ties fall through to the random
 * key, i.e. exactly the pre-Phase-3 behaviour.
 */
export function makeSessionSkillBoost(level: CefrLevel): (category: string) => number {
  const profile = getMasteryProfile(level);
  return (category: string): number => {
    const skill = skillForCategory(category);
    if (!skill) return 0;
    const m = profile[skill];
    if (!m || !m.tested) return 1;
    if (m.score >= MASTERY_THRESHOLD) return 0;
    return 1 - m.score;
  };
}

/**
 * Which production kind the P2.5 session slot should bias toward: the less-
 * demonstrated of speaking vs writing at `level`, or null when both are
 * strong (no bias — variety wins).
 */
export function weakestProductionKind(level: CefrLevel): 'speak' | 'write' | null {
  const p = getMasteryProfile(level);
  // No evidence for EITHER production skill → no bias. This matters beyond
  // philosophy: an unconditioned default bias changed which production screen
  // fresh sessions consumed and broke the pinned mic-denied fallback (sp4b)
  // and the adaptive-serve distribution. The ledger only steers when it has
  // actually measured something.
  if (p.speaking === undefined && p.writing === undefined) return null;
  const need = (m: SkillMastery | undefined): number =>
    !m || !m.tested ? 1 : m.strong ? 0 : 1 - m.score;
  const speak = need(p.speaking);
  const write = need(p.writing);
  if (speak === 0 && write === 0) return null;
  return speak >= write ? 'speak' : 'write';
}

/**
 * Which comprehension kind the guaranteed input slot (P2.8) should bias toward:
 * the less-demonstrated of listening vs reading at `level`, or null when the
 * ledger has measured neither (no bias — the slot alternates) or both are
 * strong. Same null rule as weakestProductionKind, for the same reason: the
 * ledger only steers when it has actually measured something.
 */
export function weakestReceptiveKind(level: CefrLevel): 'listening' | 'reading' | null {
  const p = getMasteryProfile(level);
  if (p.listening === undefined && p.reading === undefined) return null;
  const need = (m: SkillMastery | undefined): number =>
    !m || !m.tested ? 1 : m.strong ? 0 : 1 - m.score;
  const listen = need(p.listening);
  const read = need(p.reading);
  if (listen === 0 && read === 0) return null;
  return listen >= read ? 'listening' : 'reading';
}

const SKILL_LABELS: Record<SkillKey, string> = {
  vocab: 'vocabulary',
  grammar: 'grammar',
  reading: 'reading',
  listening: 'listening',
  speaking: 'speaking',
  writing: 'writing',
};

/**
 * One human line explaining today's plan, or null when the ledger has no
 * signal yet (never fabricate a reason). Names the most-needed skill:
 * lowest-scoring developing skill first, else the first untested one — the
 * same priorities the boost gives the composer.
 */
export function buildPlanReason(level: CefrLevel): string | null {
  const profile = getMasteryProfile(level);
  const cells = Object.keys(profile);
  if (cells.length === 0) return null;
  let weakest: { skill: SkillKey; score: number } | null = null;
  let untested: SkillKey | null = null;
  for (const skill of LEDGER_SKILLS) {
    const m = profile[skill];
    if (!m || !m.tested) {
      if (!untested) untested = skill;
      continue;
    }
    if (!m.strong && (weakest === null || m.score < weakest.score)) {
      weakest = { skill, score: m.score };
    }
  }
  if (weakest) {
    return `Today leans into ${SKILL_LABELS[weakest.skill]} — your practice says it needs the most work at ${level}.`;
  }
  if (untested) {
    return `Today leans into ${SKILL_LABELS[untested]} — the least-practiced skill at ${level}.`;
  }
  return `All tracked skills look strong at ${level} — today keeps them sharp.`;
}

// ── Cross-device sync ────────────────────────────────────────────────────────

export function snapshotMasteryLedger(): MasteryLedgerState | undefined {
  const s = getMasteryLedger();
  if (Object.keys(s.cells).length === 0) return undefined;
  return s;
}

/**
 * Merge policy: per cell, the side with MORE EVIDENCE (higher n) wins whole;
 * ties break to the later-updated side. Monotone in evidence, not in score —
 * the ledger measures ability, it does not award it. Safe with null/undefined.
 */
export function mergeRemoteMasteryLedger(remote: MasteryLedgerState | null | undefined): void {
  if (!remote || typeof remote !== 'object' || remote.v !== 1) return;
  if (!remote.cells || typeof remote.cells !== 'object') return;
  const local = getMasteryLedger();
  let changed = false;
  for (const key of Object.keys(remote.cells)) {
    const r = remote.cells[key];
    if (!r || typeof r.s !== 'number' || typeof r.n !== 'number' || typeof r.at !== 'number') {
      continue;
    }
    const l = local.cells[key];
    if (!l || r.n > l.n || (r.n === l.n && r.at > l.at)) {
      local.cells[key] = { s: Math.max(0, Math.min(1, r.s)), n: r.n, at: r.at };
      changed = true;
    }
  }
  if (changed) writeLedger(local);
}
