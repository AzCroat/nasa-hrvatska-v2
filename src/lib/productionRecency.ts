// src/lib/productionRecency.ts
//
// Mic-state persistence and the 3-day production-recency window, moved out of
// useDailySession (2026-09-28) when the Stretch (redesign increment 6) took that
// file past its 800-line cap — the cap was not raised (the precedent: sessionPools,
// croatiaPool, categoryRoutes, inputSlot, retentionSlot, dailySessionStore,
// produceSlot). Data and storage only; no behaviour moved. The hook re-exports
// every name so its callers are unchanged.

import { localDateStr } from './dateUtils';

// ── Mic-state persistence (SP4b) ─────────────────────────────────────────────
// useRecorder writes 'available' | 'denied' | 'unsupported' on terminal state
// transitions. selectProductionExercise reads this to decide whether
// mic-required exercises are eligible. Unknown values fail-open to 'unknown'.
const MIC_STATE_KEY = 'nh_mic_state';
const VALID_MIC_STATES = new Set(['available', 'denied', 'unsupported']);
export type MicState = 'available' | 'denied' | 'unsupported' | 'unknown';

export function readMicState(): MicState {
  try {
    const v = localStorage.getItem(MIC_STATE_KEY);
    if (v && VALID_MIC_STATES.has(v)) return v as MicState;
  } catch (_) {
    // localStorage unavailable (iOS private browsing) — fall through
  }
  return 'unknown';
}

// ── Recent-production tracking (SP4b) ────────────────────────────────────────
// Tracks which production exercises the user has done in the last 3 days to
// avoid back-to-back repeats. Device-local by design — cross-device sync is
// out of scope per SP4b spec.
const PRODUCTION_RECENT_KEY = 'nh_recent_production';
const PRODUCTION_RECENT_WINDOW_DAYS = 3;

interface RecentProductionEntry {
  screen: string;
  date: string; // YYYY-MM-DD
}

function _todayStr(): string {
  // Delegates to the canonical local-date helper. This file already used
  // localDateStr() in nine places for the session's own day-keying; this helper
  // was the one UTC holdout, so the recent-production window boundary sat up to
  // a day away from the learner's own day.
  return localDateStr();
}

function _daysBetween(a: string, b: string): number {
  // Returns absolute day difference between two YYYY-MM-DD strings.
  // ISO-string parse is timezone-stable for date-only values.
  const aMs = new Date(a + 'T00:00:00Z').getTime();
  const bMs = new Date(b + 'T00:00:00Z').getTime();
  return Math.round(Math.abs(aMs - bMs) / 86400000);
}

export function getRecentProduction(): string[] {
  try {
    const raw = localStorage.getItem(PRODUCTION_RECENT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const today = _todayStr();
    return parsed
      .filter(
        (e): e is RecentProductionEntry =>
          e &&
          typeof e === 'object' &&
          typeof e.screen === 'string' &&
          typeof e.date === 'string' &&
          _daysBetween(today, e.date) < PRODUCTION_RECENT_WINDOW_DAYS,
      )
      .map((e) => e.screen);
  } catch (_) {
    return [];
  }
}

export function recordProductionExercise(screen: string): void {
  if (!screen || typeof screen !== 'string') return;
  try {
    const raw = localStorage.getItem(PRODUCTION_RECENT_KEY);
    const arr: RecentProductionEntry[] = (() => {
      try {
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    })();
    const today = _todayStr();
    // Same-day re-record doesn't duplicate
    const existsToday = arr.some((e) => e.screen === screen && e.date === today);
    if (!existsToday) arr.push({ screen, date: today });
    // Prune entries older than the window before saving
    const pruned = arr.filter(
      (e) =>
        e &&
        typeof e.date === 'string' &&
        _daysBetween(today, e.date) < PRODUCTION_RECENT_WINDOW_DAYS,
    );
    localStorage.setItem(PRODUCTION_RECENT_KEY, JSON.stringify(pruned));
  } catch (_) {
    // QuotaExceededError or localStorage unavailable — non-fatal
  }
}
