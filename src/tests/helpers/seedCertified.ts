/**
 * Seed `nh_cefr_certifications` with REAL-shape passes (production skills
 * present, so `isProvisionalPass` is false) for every level from A2 up to and
 * including `level`, plus the migration flags — the same VERIFIED-learner shape
 * the E2E fixtures write (e2e/fixtures/seed-auth.js, forceCefr.js). Certified
 * level == `level`; the verification gate stays off.
 */
import { CEFR_ORDER, type CefrLevel } from '../../lib/cefr';

export const CERT_KEY = 'nh_cefr_certifications';

export function realPass(passedAt = Date.now()) {
  return {
    passedAt,
    scores: { vocab: 0.9, grammar: 0.9, reading: 0.9, listening: 0.9, speaking: 0.9, writing: 0.9 },
    overall: 90,
  };
}

/** The exact shape the grandfather migration writes (provisional standing). */
export function provisionalPass(passedAt = Date.now()) {
  return {
    passedAt,
    scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
    overall: 80,
    provisional: true,
  };
}

export function writeCertState(passes: Record<string, unknown>): void {
  localStorage.setItem(
    CERT_KEY,
    JSON.stringify({
      passes,
      attempts: [],
      lastFailedAt: {},
      checkpoints: {
        lastCheckpointAt: null,
        activeDaysAtLastCheckpoint: 0,
        consecutiveFails: {},
        focusSkills: {},
        demotions: [],
        snoozedUntil: null,
      },
      v: 2,
    }),
  );
  localStorage.setItem('nh_cefr_migration_v1_done', '1');
  localStorage.setItem('nh_cefr_provisional_v1_done', '1');
  localStorage.setItem('nh_cefr_status_shift_v1_done', '1');
}

export function seedCertifiedTo(level: CefrLevel): void {
  const passes: Record<string, unknown> = {};
  for (const lvl of CEFR_ORDER.slice(1, CEFR_ORDER.indexOf(level) + 1)) {
    passes[lvl] = realPass();
  }
  writeCertState(passes);
}
