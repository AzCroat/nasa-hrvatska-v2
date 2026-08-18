/**
 * src/lib/cefrCertification.ts
 *
 * CEFR hard-gating foundation. Separates two notions of "level":
 *
 *   - ELIGIBLE level: derived from activity (xp + lessons + grammar drills) via
 *     `getUserCefr()` in cefr.ts. Represents how much the learner has practiced.
 *
 *   - CERTIFIED level: the highest CEFR level the learner has passed an
 *     equivalency test for. Represents demonstrated competency, not activity.
 *
 * In the legacy app, eligible == certified == `getUserCefr()` output, which
 * meant grinding XP automatically raised the perceived level without
 * demonstrating any real competency. The app's stated goal is fluency
 * (not engagement badges), so a B1-labeled user must be able to DO B1
 * things, not just have ground enough activity to cross a numeric threshold.
 *
 * This module introduces:
 *   - Storage shape for equivalency test results (pass / fail history).
 *   - getCertifiedLevel() — the source of truth for "what can this user do?"
 *   - Retake-cooldown logic so a failed test cannot be brute-forced.
 *   - A feature flag (CERTIFICATION_REQUIRED) controlling whether content
 *     unlocks use certified or eligible level. Currently TRUE (active since
 *     2026-06-19) — strict gating is live for every user, softened only by
 *     the one-time grandfather migration. Setting it FALSE would TURN THE
 *     FEATURE OFF: both certified-aware helpers fall back to the eligible
 *     (activity-derived) level, restoring the legacy XP-inflates-level UX.
 *
 * Per-test storage shape (localStorage key `nh_cefr_certifications`):
 *   {
 *     passes: { [level: CefrLevel]: { passedAt: number, scores: SkillScores } },
 *     attempts: Array<{ level, passed, takenAt, scores }>,
 *     lastFailedAt: { [level: CefrLevel]: number },
 *   }
 *
 * Retake policy: a failed attempt enforces a 7-day cooldown OR until the
 * user completes 5 additional lessons (whichever comes first). This is
 * intentionally not punitive — its purpose is to prevent a user from
 * spamming retakes until they pass by chance, which would defeat the
 * competency-signal value.
 *
 * @see src/lib/cefr.ts — `isUnlocked()` consults this module via the flag.
 * @see src/lib/progressSnapshot.ts — certification state is synced cross-device.
 */

import type { CefrLevel } from './cefr.js';
import { CEFR_ORDER, cefrRank, getEffectiveLevel, getUserCefr, levelBelow } from './cefr.js';

// ── Feature flag ──────────────────────────────────────────────────────────────
//
// HARD gating is ACTIVE as of 2026-05-20. Content unlocks use certified
// level, not eligible. This is the product decision behind "people must
// actually know the material before progressing" — activity-based level
// progression is unreliable signal for competency.
//
// Migration on first launch:
//   - Existing users keep access to content they already had: their
//     activity-derived eligible level is grandfathered into certification
//     via migrateGrandfatheredCertification(). They are NOT downgraded.
//   - Future advancement requires passing the equivalency test for the
//     next tier. No second grandfather; honest gating forward.
//   - The grandfather records 80% (the minimum passing score) so it's
//     visible in attempt history as a migration marker, not a real pass.
//
// New users from this point start at certified A1 and must take tests
// to advance.
//
// This flag is exported so tests can override it.
export const CERTIFICATION_REQUIRED = true;

// ── Storage shapes ────────────────────────────────────────────────────────────

export type SkillScore = number; // 0..1 per skill

export interface SkillScores {
  vocab: SkillScore;
  grammar: SkillScore;
  /** Optional — only present if the test had a reading section. */
  reading?: SkillScore;
  /** Optional — only present if the test had a listening section. */
  listening?: SkillScore;
  /** Optional in the type (legacy equivalency tests have none); REQUIRED by
   *  checkpoint composition (a speaking task is always included — see Plan 1
   *  examComposer). */
  speaking?: SkillScore;
  /** Optional — written production. Required on B1+ verification attempts once
   *  WRITING_ENFORCEMENT_DATE has passed (Phase 1 mastery gate, 2026-08-16). */
  writing?: SkillScore;
}

/** Every skill a test can score. */
export type SkillKey = 'vocab' | 'grammar' | 'reading' | 'listening' | 'speaking' | 'writing';

export interface CertificationPass {
  passedAt: number; // epoch ms
  scores: SkillScores;
  /** Overall percentage (0..100), kept for fast UI rendering. */
  overall: number;
  /** True for grandfathered (migration-granted) passes: the level was inherited
   *  from activity, never demonstrated. A provisional pass keeps content access
   *  but requires a real verification pass before further progression (Phase 1
   *  mastery gate). Absent on every genuinely-passed test. Optional so v2 blobs
   *  from older clients parse and merge unchanged. */
  provisional?: true;
}

export interface CertificationAttempt {
  level: CefrLevel;
  passed: boolean;
  takenAt: number;
  scores: SkillScores;
  overall: number;
}

export interface CheckpointState {
  /** Epoch ms of the last COMPLETED checkpoint that reset the cadence. */
  lastCheckpointAt: number | null;
  /** Active-day count snapshot at that checkpoint (see activeDayTracker). */
  activeDaysAtLastCheckpoint: number;
  /** Grace counter per level: 0 = none, 1 = one fail pending (next fail demotes). */
  consecutiveFails: Partial<Record<CefrLevel, number>>;
  /** Carry-forward focus skills, keyed by the level they apply to. */
  focusSkills: Partial<Record<CefrLevel, SkillKey[]>>;
  /** Demotion history. Also the merge TOMBSTONES: a pass at `from` with
   *  passedAt earlier than `at` is dead everywhere — see the sweep in
   *  mergeRemoteCertifications (a stale device blob must not resurrect a
   *  rolled-back level). */
  demotions: Array<{
    from: CefrLevel;
    to: CefrLevel;
    at: number;
    reason: 'checkpoint_fail' | 'verification_fail';
  }>;
  /** "Remind me tonight" — checkpoint suppressed until this epoch ms. */
  snoozedUntil: number | null;
}

export interface CertificationState {
  passes: Partial<Record<CefrLevel, CertificationPass>>;
  attempts: CertificationAttempt[];
  lastFailedAt: Partial<Record<CefrLevel, number>>;
  checkpoints: CheckpointState; // NEW
  v: 2; // bumped
}

const STORAGE_KEY = 'nh_cefr_certifications';
const COOLDOWN_DAYS = 7;
const COOLDOWN_LESSONS = 5;
const PASS_THRESHOLD = 0.8; // 80% per skill AND overall

// ── Read / write state ────────────────────────────────────────────────────────

export function emptyCheckpointState(): CheckpointState {
  return {
    lastCheckpointAt: null,
    activeDaysAtLastCheckpoint: 0,
    consecutiveFails: {},
    focusSkills: {},
    demotions: [],
    snoozedUntil: null,
  };
}

function emptyState(): CertificationState {
  return { passes: {}, attempts: [], lastFailedAt: {}, checkpoints: emptyCheckpointState(), v: 2 };
}

/**
 * Reads the certification state from localStorage. Always returns a valid
 * object; corrupted/missing storage returns an empty state. This is safe
 * to call before SSR / outside the browser — it returns empty state when
 * `localStorage` is unavailable.
 */
export function getCertificationState(): CertificationState {
  if (typeof localStorage === 'undefined') return emptyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return emptyState();
    const state = parsed as {
      v?: number;
      passes?: unknown;
      attempts?: unknown;
      lastFailedAt?: unknown;
      checkpoints?: unknown;
    };
    // Accept v1 (migrate up) and v2. Anything else → empty.
    if (state.v !== 1 && state.v !== 2) return emptyState();
    if (!state.passes || typeof state.passes !== 'object') state.passes = {};
    if (!Array.isArray(state.attempts)) state.attempts = [];
    if (!state.lastFailedAt || typeof state.lastFailedAt !== 'object') {
      state.lastFailedAt = {};
    }
    // Migrate / normalise the checkpoints block.
    const def = emptyCheckpointState();
    const cp = (
      state.checkpoints && typeof state.checkpoints === 'object' ? state.checkpoints : {}
    ) as Partial<CheckpointState>;
    state.checkpoints = {
      lastCheckpointAt:
        typeof cp.lastCheckpointAt === 'number' ? cp.lastCheckpointAt : def.lastCheckpointAt,
      activeDaysAtLastCheckpoint:
        typeof cp.activeDaysAtLastCheckpoint === 'number'
          ? cp.activeDaysAtLastCheckpoint
          : def.activeDaysAtLastCheckpoint,
      consecutiveFails:
        cp.consecutiveFails && typeof cp.consecutiveFails === 'object' ? cp.consecutiveFails : {},
      focusSkills: cp.focusSkills && typeof cp.focusSkills === 'object' ? cp.focusSkills : {},
      demotions: Array.isArray(cp.demotions) ? cp.demotions : [],
      snoozedUntil: typeof cp.snoozedUntil === 'number' ? cp.snoozedUntil : def.snoozedUntil,
    };
    state.v = 2;
    return state as unknown as CertificationState;
  } catch {
    return emptyState();
  }
}

export function writeCertificationState(state: CertificationState): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Quota / locked / disabled — silently ignore. The next save will retry.
  }
}

// ── Level computation ─────────────────────────────────────────────────────────

/**
 * The highest CEFR level the user has passed an equivalency test for.
 * Returns 'A1' if they have never passed any test (everyone is implicitly
 * eligible at A1 — that's the entry point of the framework).
 *
 * "Highest" is determined by CEFR_ORDER rank, so a user who passed B1 and
 * A2 is at certified-B1.
 */
export function getCertifiedLevel(): CefrLevel {
  const state = getCertificationState();
  let best: CefrLevel = 'A1';
  let bestRank = -1;
  for (const lvl of CEFR_ORDER) {
    if (state.passes[lvl]) {
      const r = cefrRank(lvl);
      if (r > bestRank) {
        bestRank = r;
        best = lvl;
      }
    }
  }
  return best;
}

// ── Provisional (grandfathered) passes & verification ────────────────────────

/**
 * True when a pass has the exact shape the grandfather migration wrote:
 * the minimum passing score on precisely the three legacy skills and nothing
 * else. Real passes essentially never look like this (a genuine attempt has
 * per-item fractional scores, and every post-2026-07 B1+ pass carries a
 * speaking score), and the failure modes are asymmetric by design: a false
 * positive politely asks a legitimately-passed user to re-verify; a false
 * negative would leave an undemonstrated level unverified forever. Used to
 * recognise grandfather passes written by OLDER clients (before the explicit
 * `provisional` flag existed), including ones arriving through cross-device
 * merge.
 */
export function isGrandfatherPassSignature(pass: CertificationPass | undefined | null): boolean {
  if (!pass || !pass.scores) return false;
  const s = pass.scores;
  return (
    pass.overall === 80 &&
    s.vocab === 0.8 &&
    s.grammar === 0.8 &&
    s.reading === 0.8 &&
    s.listening === undefined &&
    s.speaking === undefined &&
    s.writing === undefined
  );
}

/** A pass counts as provisional if explicitly flagged OR grandfather-shaped. */
export function isProvisionalPass(pass: CertificationPass | undefined | null): boolean {
  if (!pass) return false;
  return pass.provisional === true || isGrandfatherPassSignature(pass);
}

/**
 * The highest level backed by a GENUINE test pass (provisional passes do not
 * count). 'A1' floor — the framework's entry point needs no certificate.
 */
export function getVerifiedLevel(): CefrLevel {
  const state = getCertificationState();
  let best: CefrLevel = 'A1';
  let bestRank = -1;
  for (const lvl of CEFR_ORDER) {
    const p = state.passes[lvl];
    if (p && !isProvisionalPass(p)) {
      const r = cefrRank(lvl);
      if (r > bestRank) {
        bestRank = r;
        best = lvl;
      }
    }
  }
  return best;
}

export interface VerificationGate {
  /** True when the user holds provisional levels above their verified level. */
  required: boolean;
  /** Highest provisional level — the default verification target. */
  target: CefrLevel | null;
  /** Highest genuinely-passed level ('A1' floor). */
  verified: CefrLevel;
  /** Every provisional level the user may verify, highest first — the exam
   *  screen offers the target by default and these as the honest step-down. */
  options: CefrLevel[];
}

/**
 * The Phase 1 mastery gate (2026-08-16). Grandfathered certificates keep the
 * content access they granted, but they are PROVISIONAL: while any provisional
 * level sits above the verified level, the journey locks onto verification —
 * no starting new lessons at/above the target level and no advancement until a
 * real pass. There is no snooze and no skip; practice below the gate stays
 * open because that practice is what builds the mastery the test measures.
 */
export function getVerificationGate(): VerificationGate {
  const verified = getVerifiedLevel();
  const empty: VerificationGate = { required: false, target: null, verified, options: [] };
  if (!CERTIFICATION_REQUIRED) return empty;
  const state = getCertificationState();
  const options: CefrLevel[] = [];
  for (const lvl of CEFR_ORDER) {
    const p = state.passes[lvl];
    if (p && isProvisionalPass(p) && cefrRank(lvl) > cefrRank(verified)) {
      options.push(lvl);
    }
  }
  if (options.length === 0) return empty;
  options.sort((a, b) => cefrRank(b) - cefrRank(a));
  return { required: true, target: options[0] ?? null, verified, options };
}

/**
 * True when starting a NEW lesson/exercise at `level` is blocked by the
 * verification gate: everything at/above the gate's target waits for a real
 * pass, everything below stays open.
 */
export function isBlockedByVerificationGate(level: CefrLevel): boolean {
  const gate = getVerificationGate();
  if (!gate.required || !gate.target) return false;
  return cefrRank(level) >= cefrRank(gate.target);
}

/**
 * Lowers the certified level by exactly one rank by removing the top pass,
 * so `getCertifiedLevel()` returns the level below. Records the demotion and
 * clears the grace counter for the demoted level. No-op (returns null) at A1
 * — A1 is the floor. Does NOT touch XP, streak, or eligible level.
 */
export function demoteOneLevel(
  reason: 'checkpoint_fail' | 'verification_fail',
): { from: CefrLevel; to: CefrLevel } | null {
  const current = getCertifiedLevel();
  const to = levelBelow(current);
  if (to === null) return null; // A1 floor
  const state = getCertificationState();
  delete state.passes[current];
  state.checkpoints.demotions.push({ from: current, to, at: Date.now(), reason });
  state.checkpoints.consecutiveFails[current] = 0;
  writeCertificationState(state);
  return { from: current, to };
}

/**
 * Returns the most recent attempt for a given level, or null if none.
 */
export function getLastAttempt(level: CefrLevel): CertificationAttempt | null {
  const state = getCertificationState();
  for (let i = state.attempts.length - 1; i >= 0; i--) {
    if (state.attempts[i]?.level === level) return state.attempts[i]!;
  }
  return null;
}

// ── Retake gating ─────────────────────────────────────────────────────────────

export interface RetakeStatus {
  /** True = user can take the test right now. */
  canTake: boolean;
  /** When set, the user is in cooldown until this epoch ms. */
  cooldownUntil?: number;
  /** Lessons remaining before cooldown is cleared by activity. */
  lessonsRemaining?: number;
  reason?: 'cooldown_active' | 'already_passed' | 'okay';
}

/**
 * Whether the user is allowed to attempt the equivalency test for `level`.
 *
 * Allowed when:
 *   - They have never passed it AND no recent failure in cooldown window, OR
 *   - The cooldown days have elapsed since their last failure, OR
 *   - They have completed `COOLDOWN_LESSONS` more lessons since the failure.
 *
 * Not allowed when:
 *   - They already passed it (no need to retake; a re-test would be a
 *     separate "renew certification" flow not implemented here).
 *   - They failed within the last 7 days AND have completed <5 lessons.
 *
 * @param level The CEFR level whose equivalency test is being attempted.
 * @param currentLessonCount The user's lc stat at the time of the call.
 */
export function canTakeEquivalencyTest(level: CefrLevel, currentLessonCount: number): RetakeStatus {
  const state = getCertificationState();
  // A PROVISIONAL pass never blocks the attempt — verifying it is the whole
  // point of the Phase 1 mastery gate. Only a genuinely demonstrated pass
  // makes a retake pointless.
  const existing = state.passes[level];
  if (existing && !isProvisionalPass(existing)) {
    return { canTake: false, reason: 'already_passed' };
  }
  const lastFail = state.lastFailedAt[level];
  if (!lastFail) return { canTake: true, reason: 'okay' };
  const elapsedMs = Date.now() - lastFail;
  const cooldownMs = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  if (elapsedMs >= cooldownMs) return { canTake: true, reason: 'okay' };
  // Within cooldown — but check lessons-completed override.
  // Find the lessonCount at the time of the failure attempt to compare.
  const lastFailAttempt = [...state.attempts].reverse().find((a) => a.level === level && !a.passed);
  const lessonsAtFailure =
    (lastFailAttempt && (lastFailAttempt as unknown as { lc?: number }).lc) || 0;
  const lessonsDone = Math.max(0, currentLessonCount - lessonsAtFailure);
  if (lessonsDone >= COOLDOWN_LESSONS) return { canTake: true, reason: 'okay' };
  return {
    canTake: false,
    reason: 'cooldown_active',
    cooldownUntil: lastFail + cooldownMs,
    lessonsRemaining: COOLDOWN_LESSONS - lessonsDone,
  };
}

// ── Test result recording ─────────────────────────────────────────────────────

/**
 * Computes whether a test attempt passes. A pass requires ≥80% on every
 * tested skill AND ≥80% overall. The reading skill is optional (not every
 * test set has reading items); if absent, only present skills are checked.
 */
/**
 * SHADOW MODE for the speaking dimension.
 *
 * Real fluency requires production, but `getUserCefr` and the equivalency test
 * historically measured only vocab/grammar/reading — so a learner could certify
 * B1/B2/C1 without ever speaking. We now MEASURE speaking in the B1+ equivalency
 * test, but during shadow mode (`false`) it is recorded and displayed only — it
 * does NOT affect pass/fail — so we can validate the speaking scorer in the wild
 * and gather pass-rate telemetry before it gates anyone. Flip to `true` to
 * enforce speaking as a required skill at B1+. Exported so callers and tests can
 * read/override it.
 */
// Speaking becomes a REQUIRED certification skill (B1+) automatically on this
// date. Until then the B1+ equivalency test measures speaking in SHADOW mode
// (recorded + displayed, not gating). We use a DATE GATE rather than a scheduled
// job because sessions/jobs in this environment are ephemeral — this flips with
// no further action and no live process. To change the rollout, edit this one
// constant. (Existing certified levels are never re-evaluated, so no one is
// downgraded when it flips; speaking is only required on a NEW B1+ attempt.)
export const SPEAKING_ENFORCEMENT_DATE = '2026-07-13T00:00:00Z';

/** True once speaking gates certification (on/after SPEAKING_ENFORCEMENT_DATE). */
export function isSpeakingGateEnforced(now: number = Date.now()): boolean {
  return now >= Date.parse(SPEAKING_ENFORCEMENT_DATE);
}

// Writing became a required certification skill (B1+) with the Phase 1 mastery
// gate — the equivalency/verification exam ships a writing section in the same
// release, so there is no shadow period: an attempt recorded on/after this date
// at B1+ must include a writing score to pass. Existing passes are never
// re-evaluated (same rule as speaking: only NEW attempts are gated).
export const WRITING_ENFORCEMENT_DATE = '2026-08-16T00:00:00Z';

/** True once writing gates certification (on/after WRITING_ENFORCEMENT_DATE). */
export function isWritingGateEnforced(now: number = Date.now()): boolean {
  return now >= Date.parse(WRITING_ENFORCEMENT_DATE);
}

export function computePassed(
  scores: SkillScores,
  opts: { includeSpeaking?: boolean; requireSpeaking?: boolean; requireWriting?: boolean } = {},
): {
  passed: boolean;
  overall: number;
} {
  // includeSpeaking defaults TRUE to preserve existing callers (checkpoints).
  // The equivalency path passes the date-gated values: shadow mode records/
  // displays speaking but excludes it from pass/fail; once enforced it counts AND
  // (requireSpeaking) a B1+ attempt with NO speaking score cannot pass — otherwise
  // skipping speaking would be a loophole around the gate. Writing follows the
  // same pattern: counted whenever present, and requireWriting makes a B1+
  // attempt without a writing score unpassable (Phase 1 mastery gate).
  const { includeSpeaking = true, requireSpeaking = false, requireWriting = false } = opts;
  const skillValues: number[] = [];
  skillValues.push(scores.vocab);
  skillValues.push(scores.grammar);
  if (scores.reading !== undefined) skillValues.push(scores.reading);
  if (scores.listening !== undefined) skillValues.push(scores.listening);
  const hasSpeaking = scores.speaking !== undefined;
  if (hasSpeaking && includeSpeaking) skillValues.push(scores.speaking as number);
  const hasWriting = scores.writing !== undefined;
  if (hasWriting) skillValues.push(scores.writing as number);
  if (skillValues.length === 0) return { passed: false, overall: 0 };
  const overall = skillValues.reduce((a, b) => a + b, 0) / skillValues.length;
  const minSkill = Math.min(...skillValues);
  const speakingMissing = requireSpeaking && !hasSpeaking;
  const writingMissing = requireWriting && !hasWriting;
  const passed =
    !speakingMissing && !writingMissing && overall >= PASS_THRESHOLD && minSkill >= PASS_THRESHOLD;
  return { passed, overall: overall * 100 };
}

/**
 * Records an equivalency test attempt. Updates `passes` when passed,
 * `lastFailedAt` when not. Always appends to `attempts` history.
 *
 * @returns the new certified level after this attempt.
 */
export function recordEquivalencyAttempt(opts: {
  level: CefrLevel;
  scores: SkillScores;
  currentLessonCount: number;
}): {
  passed: boolean;
  newCertified: CefrLevel;
  attempt: CertificationAttempt;
  /** Set when a failed verification stepped provisional standing down. */
  rollback: { from: CefrLevel; to: CefrLevel } | null;
} {
  const { level, scores, currentLessonCount } = opts;
  // Speaking gates certification only once enforced (date gate). Shadow mode
  // records the score for telemetry without affecting the result. When enforced,
  // a B1+ attempt also REQUIRES a speaking score (no skipping past the gate).
  const enforced = isSpeakingGateEnforced();
  const requireSpeaking = enforced && cefrRank(level) >= cefrRank('B1');
  const requireWriting = isWritingGateEnforced() && cefrRank(level) >= cefrRank('B1');
  const { passed, overall } = computePassed(scores, {
    includeSpeaking: enforced,
    requireSpeaking,
    requireWriting,
  });
  const state = getCertificationState();
  const attempt: CertificationAttempt = {
    level,
    passed,
    takenAt: Date.now(),
    scores,
    overall,
  };
  // Stash lessonCount-at-attempt on the record for cooldown calculation.
  (attempt as unknown as { lc: number }).lc = currentLessonCount;
  state.attempts.push(attempt);
  // Cap attempt history at the most recent 100 to keep storage bounded.
  if (state.attempts.length > 100) {
    state.attempts = state.attempts.slice(-100);
  }
  let rollback: { from: CefrLevel; to: CefrLevel } | null = null;
  if (passed) {
    state.passes[level] = { passedAt: Date.now(), scores, overall };
    delete state.lastFailedAt[level];
  } else {
    state.lastFailedAt[level] = Date.now();
    rollback = rollbackProvisionalOnFail(state, level);
  }
  writeCertificationState(state);
  return { passed, newCertified: getCertifiedLevel(), attempt, rollback };
}

/**
 * HONEST ROLLBACK (owner directive, 2026-08-17): a FAILED verification of a
 * provisional level steps the standing DOWN one level instead of leaving the
 * unproven level on display. The learner keeps a fair ladder — each retake
 * either verifies the current rung or steps down again — and the badge/gate
 * always show what the evidence supports.
 *
 * Mechanics (mutates `state`; caller persists):
 *  - Only fires when the attempted level was held PROVISIONALLY (a failed
 *    ADVANCEMENT attempt at a real level rolls nothing back — nothing
 *    unproven is on display in that case).
 *  - Removes the failed provisional and every provisional ABOVE it (those
 *    are even less demonstrated).
 *  - Grants provisional standing one level below (grantProvisionalPlacement's
 *    exact 0.8-signature shape, so old clients detect it) unless that level
 *    is A1 (the implicit floor) or already holds a pass.
 *  - Records a 'verification_fail' demotion — the merge TOMBSTONE that stops
 *    a stale device's sync blob from resurrecting the rolled-back level.
 */
function rollbackProvisionalOnFail(
  state: CertificationState,
  level: CefrLevel,
): { from: CefrLevel; to: CefrLevel } | null {
  const held = state.passes[level];
  if (!held || !isProvisionalPass(held)) return null;
  for (const lvl of CEFR_ORDER) {
    if (cefrRank(lvl) < cefrRank(level)) continue;
    const p = state.passes[lvl];
    if (p && isProvisionalPass(p)) delete state.passes[lvl];
  }
  const below = levelBelow(level) ?? 'A1';
  if (below !== 'A1' && !state.passes[below]) {
    state.passes[below] = {
      passedAt: Date.now(),
      scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
      overall: 80,
      provisional: true,
    };
  }
  state.checkpoints.demotions.push({
    from: level,
    to: below,
    at: Date.now(),
    reason: 'verification_fail',
  });
  return { from: level, to: below };
}

/** Most recent verification-fail rollback, or null — for honest UI copy
 *  ("your C1 check moved your level to B2"). */
export function getLastVerificationRollback(): {
  from: CefrLevel;
  to: CefrLevel;
  at: number;
} | null {
  const d = getCertificationState().checkpoints.demotions;
  for (let i = d.length - 1; i >= 0; i--) {
    if (d[i]!.reason === 'verification_fail') return d[i]!;
  }
  return null;
}

// ── Verification quiet period (owner directive, 2026-08-18) ───────────────────
// The gate card was a permanent red takeover: a FAILED check rolled the level
// down to a NEW provisional target, so the hero survived the very test the
// learner just sat ("it still shows after my children took the test"). The
// GATE itself keeps no-snooze semantics — content stays locked — but the
// PROMPT now honors attempts: any verification attempt (pass or fail) starts
// a quiet period in which the hero collapses to a one-line chip and the
// next-step engine recommends practice (the ledger's weakest skill — exactly
// what a failed check says to do) instead of an immediate retake.

/** Same scale as the retake cooldown — one week of quiet after an attempt. */
export const VERIFICATION_QUIET_DAYS = 7;

/** Most recent verification attempt timestamp across ALL levels, or null. */
export function getLastAttemptAt(): number | null {
  const attempts = getCertificationState().attempts;
  let last: number | null = null;
  for (const a of attempts) {
    if (a && typeof a.takenAt === 'number' && (last === null || a.takenAt > last)) {
      last = a.takenAt;
    }
  }
  return last;
}

/** When the current quiet period ends (ms epoch), or null when none is active
 *  — no attempt ever, or the last one is older than the quiet window. */
export function verificationQuietUntil(now: number = Date.now()): number | null {
  const last = getLastAttemptAt();
  if (last === null) return null;
  const until = last + VERIFICATION_QUIET_DAYS * 24 * 60 * 60 * 1000;
  return until > now ? until : null;
}

/** True while the verification PROMPT should stay quiet (recent attempt). */
export function isVerificationQuiet(now: number = Date.now()): boolean {
  return verificationQuietUntil(now) !== null;
}

// ── Sync helpers ──────────────────────────────────────────────────────────────

/**
 * Snapshot the certification state for cross-device sync. Returns undefined
 * when there is nothing to sync (no attempts, no passes) so applyRemoteProgress
 * does not write empty state.
 */
export function snapshotCertifications(): CertificationState | undefined {
  const s = getCertificationState();
  if (s.attempts.length === 0 && Object.keys(s.passes).length === 0) return undefined;
  return s;
}

/**
 * Merge a remote certification state into the local one. Merge policy:
 *   - `passes`: additive — once a level is passed anywhere, it's passed
 *     everywhere. Keep the earlier `passedAt` (don't backdate but
 *     don't lose the original pass moment).
 *   - `lastFailedAt`: take the MAX (later failure is the relevant one for
 *     cooldown timing; this prevents an old failure from artificially
 *     unlocking a still-cooldown-active test).
 *   - `attempts`: merge by `takenAt` + level, dedup. Cap at most-recent 100.
 *
 * Safe to call with `null` / `undefined` remote (no-op).
 */
export function mergeRemoteCertifications(remote: CertificationState | null | undefined): void {
  if (!remote || typeof remote !== 'object') return;
  const remoteV = (remote as { v?: number }).v;
  if (remoteV !== 1 && remoteV !== 2) return;
  const local = getCertificationState();

  // Passes — additive, prefer earlier passedAt.
  //
  // Provisional rule (Phase 1 mastery gate): a merged pass stays provisional
  // ONLY when both sides are provisional. Detection uses isProvisionalPass —
  // explicit flag OR grandfather signature — so an unmarked blob from an older
  // client can never wash the flag off, while a REAL pass recorded on any
  // device clears it everywhere (additive in the user's favour, like every
  // other merge rule here).
  if (remote.passes && typeof remote.passes === 'object') {
    for (const k of Object.keys(remote.passes) as CefrLevel[]) {
      const r = remote.passes[k];
      if (!r) continue;
      const l = local.passes[k];
      if (!l) {
        local.passes[k] = isProvisionalPass(r) ? { ...r, provisional: true } : r;
      } else {
        // Keep earlier pass timestamp; take the higher overall score
        // because the user demonstrably passed by that margin somewhere.
        const passedAt = Math.min(l.passedAt, r.passedAt);
        const overall = Math.max(l.overall, r.overall);
        const maxOpt = (a: number | undefined, b: number | undefined): number | undefined =>
          a === undefined ? b : b === undefined ? a : Math.max(a, b);
        const scores: SkillScores = {
          vocab: Math.max(l.scores.vocab, r.scores.vocab),
          grammar: Math.max(l.scores.grammar, r.scores.grammar),
          reading: maxOpt(l.scores.reading, r.scores.reading),
          listening: maxOpt(l.scores.listening, r.scores.listening),
          speaking: maxOpt(l.scores.speaking, r.scores.speaking),
          writing: maxOpt(l.scores.writing, r.scores.writing),
        };
        const merged: CertificationPass = { passedAt, overall, scores };
        if (isProvisionalPass(l) && isProvisionalPass(r)) merged.provisional = true;
        local.passes[k] = merged;
      }
    }
  }

  // lastFailedAt — take MAX so cooldown is honored
  if (remote.lastFailedAt && typeof remote.lastFailedAt === 'object') {
    for (const k of Object.keys(remote.lastFailedAt) as CefrLevel[]) {
      const r = remote.lastFailedAt[k];
      if (r == null) continue;
      const l = local.lastFailedAt[k];
      local.lastFailedAt[k] = l == null ? r : Math.max(l, r);
    }
  }

  // attempts — union by (level, takenAt)
  if (Array.isArray(remote.attempts)) {
    const seen = new Set<string>();
    const out: CertificationAttempt[] = [];
    for (const a of [...local.attempts, ...remote.attempts]) {
      if (!a || typeof a !== 'object') continue;
      const k = a.level + '@' + a.takenAt;
      if (seen.has(k)) continue;
      seen.add(k);
      out.push(a);
    }
    out.sort((a, b) => a.takenAt - b.takenAt);
    local.attempts = out.slice(-100);
  }

  // checkpoints — most-recent cadence wins; grace counters take MAX so a
  // stale device cannot erase a pending demotion. snoozedUntil takes MAX.
  if (remote.checkpoints && typeof remote.checkpoints === 'object') {
    const rc = remote.checkpoints;
    const lc = local.checkpoints;

    // Capture original timestamps BEFORE any MAX-overwrite so the focusSkills
    // freshness comparison below is based on the original values.
    const lcTime = lc.lastCheckpointAt ?? -1;
    const rcTime = typeof rc.lastCheckpointAt === 'number' ? rc.lastCheckpointAt : -1;

    if (typeof rc.lastCheckpointAt === 'number') {
      lc.lastCheckpointAt =
        lc.lastCheckpointAt == null
          ? rc.lastCheckpointAt
          : Math.max(lc.lastCheckpointAt, rc.lastCheckpointAt);
    }
    if (typeof rc.activeDaysAtLastCheckpoint === 'number') {
      lc.activeDaysAtLastCheckpoint = Math.max(
        lc.activeDaysAtLastCheckpoint,
        rc.activeDaysAtLastCheckpoint,
      );
    }
    if (rc.consecutiveFails && typeof rc.consecutiveFails === 'object') {
      for (const k of Object.keys(rc.consecutiveFails) as CefrLevel[]) {
        const r = rc.consecutiveFails[k] ?? 0;
        const l = lc.consecutiveFails[k] ?? 0;
        lc.consecutiveFails[k] = Math.max(l, r);
      }
    }
    // focusSkills: adopt the WHOLE map from whichever side has the fresher
    // checkpoint. A remote CLEAR (key absent in remote.focusSkills) must win
    // when the remote checkpoint is newer, so we cannot do a per-key union.
    if (rc.focusSkills && typeof rc.focusSkills === 'object') {
      if (rcTime > lcTime) {
        // Remote checkpoint is fresher → its focus map is authoritative.
        // This also propagates a remote CLEAR: a level absent in remote is dropped.
        lc.focusSkills = { ...rc.focusSkills };
      } else if (rcTime === lcTime) {
        // Same freshness (or both unset) → union, keep local where set.
        for (const k of Object.keys(rc.focusSkills) as CefrLevel[]) {
          if (!lc.focusSkills[k] && rc.focusSkills[k]) lc.focusSkills[k] = rc.focusSkills[k];
        }
      }
      // else local is fresher → keep local focusSkills unchanged.
    }
    if (Array.isArray(rc.demotions)) {
      const seen = new Set(lc.demotions.map((d) => d.at));
      for (const d of rc.demotions) if (d && !seen.has(d.at)) lc.demotions.push(d);
      lc.demotions.sort((a, b) => a.at - b.at);
    }
    if (typeof rc.snoozedUntil === 'number') {
      lc.snoozedUntil =
        lc.snoozedUntil == null ? rc.snoozedUntil : Math.max(lc.snoozedUntil, rc.snoozedUntil);
    }
  }

  // TOMBSTONE SWEEP (honest rollback, 2026-08-17): a demotion at level L kills
  // every pass at L whose passedAt PRECEDES the demotion — in both directions.
  // Without this, the pass-union above resurrects a rolled-back level from any
  // stale device blob (and a remote demotion could never clear a stale local
  // pass). A level re-earned AFTER the demotion has a later passedAt and
  // survives — demotion never outranks new evidence. This closes the same
  // resurrection hole for checkpoint demotions, which pre-dated the sweep.
  for (const d of local.checkpoints.demotions) {
    if (!d || typeof d.at !== 'number') continue;
    const p = local.passes[d.from];
    if (p && p.passedAt < d.at) delete local.passes[d.from];
  }

  writeCertificationState(local);
}

// ── Public convenience wrapper ────────────────────────────────────────────────

/**
 * Returns the level the rest of the app should treat as authoritative
 * for unlocking decisions. This is the canonical entry point: callers
 * should pass their eligible (activity-derived) level and use the
 * result for `isUnlocked()`.
 *
 * When the certification feature flag is off, returns `eligible`
 * unchanged so behaviour is identical to the pre-2026-05-20 app.
 *
 * When the flag is on, returns the certified level — locks all content
 * above that level until the user passes the relevant equivalency test.
 */
export function getEffectiveLevelForUnlock(eligible: CefrLevel): CefrLevel {
  return getEffectiveLevel(eligible, { CERTIFICATION_REQUIRED, getCertifiedLevel });
}

/**
 * Read xp/lc/gc from the persisted profile (uS → uP_<email> → st/stats), the
 * same source buildUserContext uses. Returns zeros if anything is missing —
 * which, floored against the placement nh_level in getGenerationCefr, means a
 * missing profile never serves below what the user already gets.
 */
function _readProfileStats(): { xp: number; lc: number; gc: number } {
  try {
    if (typeof localStorage === 'undefined') return { xp: 0, lc: 0, gc: 0 };
    const session = JSON.parse(localStorage.getItem('uS') || 'null');
    const email = session?.u;
    if (!email) return { xp: 0, lc: 0, gc: 0 };
    const profile = JSON.parse(localStorage.getItem('uP_' + email) || 'null');
    const st = profile?.stats || profile?.st || {};
    return {
      xp: typeof st.xp === 'number' ? st.xp : 0,
      lc: typeof st.lc === 'number' ? st.lc : 0,
      gc: typeof st.gc === 'number' ? st.gc : 0,
    };
  } catch {
    return { xp: 0, lc: 0, gc: 0 };
  }
}

/**
 * The CEFR level AI content generators should produce at (Content-Rec #5 —
 * deepen C1/C2).
 *
 * `nh_level` is set only at placement and by remote sync — it never advances as
 * a learner earns their way up — so generators that read it (AI Listening,
 * McGame, etc.) serve placement-level content to learners who have since reached
 * C1/C2. This returns the HIGHER of the stored placement level and the learner's
 * content-unlock level (earned + certification-aware, race-safe), so advanced
 * learners get level-appropriate generated content while never dropping below
 * their placement (no regression). The AI endpoints already accept C1/C2 at
 * runtime, so this deepens C1/C2 with no authored content.
 */
export function getGenerationCefr(stats?: { xp?: number; lc?: number; gc?: number }): CefrLevel {
  // When no live stats are passed, read xp/lc/gc from the persisted profile —
  // the same source buildUserContext uses — so callers without StatsContext
  // (McGame, Flashcards, GrammarDiagnosis, DailyPlanCard) can use this with no
  // hook and no provider-in-test coupling.
  const s = stats ?? _readProfileStats();
  const earned = getContentUnlockLevel(getUserCefr(s.xp || 0, s.lc || 0, s.gc || 0));
  let placement: CefrLevel | '' = '';
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem('nh_level') : '';
    const up = (raw || '').toUpperCase();
    if ((CEFR_ORDER as readonly string[]).includes(up)) placement = up as CefrLevel;
  } catch {
    /* localStorage unavailable — fall back to the earned level */
  }
  if (!placement) return earned;
  return cefrRank(placement) >= cefrRank(earned) ? placement : earned;
}

/**
 * The level the user is currently practicing at, computed from the persisted
 * profile with no hook/provider coupling — for callers outside React (the
 * mastery ledger's ingestion adapters). Same stats source as
 * getGenerationCefr, but WITHOUT the placement floor: the ledger attributes
 * evidence to the level actually being served, which is the unlock level.
 */
export function getCurrentContentLevel(): CefrLevel {
  const s = _readProfileStats();
  return getContentUnlockLevel(getUserCefr(s.xp || 0, s.lc || 0, s.gc || 0));
}

// ── One-time migration ───────────────────────────────────────────────────────

const MIGRATION_FLAG_KEY = 'nh_cefr_migration_v1_done';

/**
 * Content-unlock level (Rec #4 — full activation). Like getEffectiveLevelForUnlock,
 * but RACE-SAFE for the first load. The grandfather migration runs asynchronously
 * (a dynamic import inside a startup effect), so until it has set MIGRATION_FLAG_KEY
 * the certified level still defaults to A1 — gating content on that would briefly
 * lock a returning user's content on first paint (and would break E2E, where the
 * fixture seeds eligible XP, not certification). So until the grandfather has run
 * we fall back to the generous `eligible` level; afterwards (and on every
 * subsequent load) we return the certified level, so unlocking a new tier's
 * content requires passing that tier's assessment.
 *
 * Net effect: content is never locked below what the user could already reach;
 * only NEW tiers beyond the grandfathered/certified level require an assessment.
 */
export function getContentUnlockLevel(eligible: CefrLevel): CefrLevel {
  if (!CERTIFICATION_REQUIRED) return eligible;
  try {
    if (typeof localStorage === 'undefined' || !localStorage.getItem(MIGRATION_FLAG_KEY)) {
      return eligible; // pre-grandfather: be generous, never lock content on first load
    }
  } catch {
    return eligible;
  }
  // Phase 1 mastery gate: while a provisional (grandfathered, never
  // demonstrated) level awaits verification, NEW content at/above the gate's
  // target is paused — every pool consumer (daily session, arcade, shadowing,
  // AI context) inherits this cap from here. Practice below the gate stays
  // open: that practice is what builds the mastery the verification measures.
  // A real verification pass lifts the cap instantly (gate.required flips off).
  const gate = getVerificationGate();
  if (gate.required && gate.target) {
    const below = levelBelow(gate.target);
    return below ?? 'A1';
  }
  return getCertifiedLevel();
}

/**
 * On the user's first launch after hard CEFR gating ships, grandfather
 * their current activity-derived level into certification. This means:
 *
 *   - Existing users do NOT lose access to content they already had.
 *     If they were eligible at B1 (xp + lessons), they're now certified
 *     at B1 — same content stays unlocked.
 *
 *   - Future advancement requires passing the equivalency test for the
 *     next tier. A user grandfathered at B1 must pass the B1→B2 test
 *     to unlock B2 content. There is no second grandfather.
 *
 *   - The migration is one-shot. The `nh_cefr_migration_v1_done` flag
 *     in localStorage prevents re-running, even if the user's eligible
 *     level later changes (e.g., XP drop after stats reset).
 *
 *   - If the user has already passed an equivalency test before this
 *     migration runs (unlikely, since the flag wasn't on), the
 *     grandfather only fills in lower-rank levels — it never overwrites
 *     a real test pass.
 *
 * The grandfathered "pass" records 80% on every skill and overall —
 * the minimum passing score — so it's clearly distinguishable in the
 * attempt history from a real high-scoring pass.
 *
 * Safe to call at every app launch; bails fast if already migrated.
 */
export function migrateGrandfatheredCertification(eligible: CefrLevel): void {
  if (typeof localStorage === 'undefined') return;
  try {
    if (localStorage.getItem(MIGRATION_FLAG_KEY) === '1') return;
  } catch {
    return;
  }

  // A1-eligible users have nothing to grandfather. Bail without setting the
  // flag so a later call (after stats hydrate from Firebase / accumulate)
  // catches the real eligible level. Setting the flag prematurely would
  // freeze the user at certified=A1 even after they earn XP.
  if (eligible === 'A1') return;

  const state = getCertificationState();
  const eligibleRank = cefrRank(eligible);
  // Grandfather every level from A2 up to (and including) the user's
  // eligible level. A1 needs no pass — that's the entry point.
  let didGrandfather = false;
  for (const level of CEFR_ORDER) {
    if (level === 'A1') continue; // implicit
    if (cefrRank(level) > eligibleRank) break; // don't grandfather levels above eligible
    if (state.passes[level]) continue; // never overwrite a real pass
    state.passes[level] = {
      passedAt: Date.now(),
      scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
      overall: 80,
      // Phase 1 mastery gate: grandfathered access is granted but the level is
      // provisional until a real verification pass (see getVerificationGate).
      provisional: true,
    };
    state.attempts.push({
      level,
      passed: true,
      takenAt: Date.now(),
      scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
      overall: 80,
    });
    didGrandfather = true;
  }
  if (didGrandfather) writeCertificationState(state);

  try {
    localStorage.setItem(MIGRATION_FLAG_KEY, '1');
  } catch {
    // Quota or disabled — migration will retry next launch. That's fine;
    // it's idempotent.
  }
}

/**
 * One-shot Phase 1 follow-up to the grandfather migration: passes written by
 * OLDER clients predate the `provisional` flag, so mark every pass that has the
 * grandfather signature. Runs at every launch, bails fast once done. (Merge
 * also normalises incoming remote passes — see mergeRemoteCertifications — so
 * an old device's unmarked blob can never wash the flag back off.)
 */
const PROVISIONAL_FLAG_KEY = 'nh_cefr_provisional_v1_done';

/**
 * One-shot repair of the pre-Phase-1 advancement pipeline (2026-08-16).
 *
 * The convention throughout this module is that passes[L] means "the user
 * holds level-L status". The old EquivalencyTestScreen, however, recorded a
 * passed check at the set's levelFrom — the level whose competency the check
 * measures — not the levelTo status it grants. Combined with the retake gate
 * blocking on the same key, this froze EVERY user at their 2026-06 level:
 * passing a check never advanced getCertifiedLevel, and the next visit said
 * "already passed". The screen now records at levelTo; this migration honours
 * historical real passes by ADDITIVELY copying each one to the status key it
 * should have granted (a real pass at key L demonstrated L-competency ⇒ also
 * grants L+1 status). Nothing is deleted, provisional passes are untouched,
 * and an existing real pass at the target key is never overwritten.
 */
const STATUS_SHIFT_FLAG_KEY = 'nh_cefr_status_shift_v1_done';

export function migrateRealPassesToStatusKeys(): void {
  if (typeof localStorage === 'undefined') return;
  try {
    if (localStorage.getItem(STATUS_SHIFT_FLAG_KEY) === '1') return;
  } catch {
    return;
  }
  const state = getCertificationState();
  let changed = false;
  // Highest first so a chain of old passes doesn't cascade upward in one run.
  for (let i = CEFR_ORDER.length - 1; i >= 0; i--) {
    const from = CEFR_ORDER[i]!;
    const p = state.passes[from];
    if (!p || isProvisionalPass(p)) continue;
    const to = CEFR_ORDER[i + 1];
    if (!to) continue; // C2 has no level above
    const existing = state.passes[to];
    if (existing && !isProvisionalPass(existing)) continue; // never overwrite a real pass
    state.passes[to] = { passedAt: p.passedAt, scores: { ...p.scores }, overall: p.overall };
    changed = true;
  }
  if (changed) writeCertificationState(state);
  try {
    localStorage.setItem(STATUS_SHIFT_FLAG_KEY, '1');
  } catch {
    // Quota or disabled — retried next launch; idempotent.
  }
}

/**
 * Placement grants PROVISIONAL standing (Phase 5, 2026-08-16). The placement
 * test is a fast, receptive-only first-session estimate — the right onboarding
 * shape, but not proof. Granting its result as provisional passes gives a
 * genuine B1 newcomer level-appropriate content immediately while switching
 * the verification gate on at once: the full five-skill check is what makes
 * the level real, exactly as for grandfathered users. One honest loop for
 * everyone.
 *
 * Never overwrites a REAL pass (a returning user who re-takes placement keeps
 * every demonstrated level); re-granting provisional levels is idempotent.
 * A1 placement grants nothing — A1 is the framework's entry point.
 */
export function grantProvisionalPlacement(level: CefrLevel): void {
  if (!(CEFR_ORDER as readonly string[]).includes(level)) return;
  const state = getCertificationState();
  const targetRank = cefrRank(level);
  let changed = false;
  for (const lvl of CEFR_ORDER) {
    if (lvl === 'A1') continue; // implicit
    if (cefrRank(lvl) > targetRank) break;
    const existing = state.passes[lvl];
    if (existing && !isProvisionalPass(existing)) continue; // never overwrite a real pass
    if (existing && existing.provisional) continue; // already provisional — idempotent
    state.passes[lvl] = {
      passedAt: Date.now(),
      scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
      overall: 80,
      provisional: true,
    };
    changed = true;
  }
  if (changed) writeCertificationState(state);
}

export function markProvisionalGrandfathers(): void {
  if (typeof localStorage === 'undefined') return;
  try {
    if (localStorage.getItem(PROVISIONAL_FLAG_KEY) === '1') return;
  } catch {
    return;
  }
  const state = getCertificationState();
  let changed = false;
  for (const lvl of CEFR_ORDER) {
    const p = state.passes[lvl];
    if (p && !p.provisional && isGrandfatherPassSignature(p)) {
      p.provisional = true;
      changed = true;
    }
  }
  if (changed) writeCertificationState(state);
  try {
    localStorage.setItem(PROVISIONAL_FLAG_KEY, '1');
  } catch {
    // Quota or disabled — retried next launch; idempotent.
  }
}
