// functions/_backupRunLog.js
//
// WEEKLY FIRESTORE BACKUP OBSERVABILITY (2026-08-25).
//
// The streak reminder — a nudge — has a heartbeat, bounded failure reasons, a
// judged window and a daily red gate. The only snapshot of every learner's
// Firestore progress had none of it.
//
// That asymmetry cost us on 2026-08-23. The scheduled Worker calls
// /api/backup-progress with the same `x-cron-secret` header as
// /api/streak-push, so when the hand-set secret drifted BOTH went down. The
// reminders were caught within a day by push-health.yml. The backup failed
// beside them in complete silence and was noticed only because someone happened
// to be reading the Worker's source for another reason.
//
// It is also the harder failure to notice by an order of magnitude. Reminders
// run hourly, so a problem surfaces within a day; the backup runs ONE Monday
// 03:00–05:59 UTC window a week. Three quiet weeks is a month with no
// restorable snapshot — and a backup that has silently stopped is discovered at
// the moment a restore is needed, which is the one moment it cannot be fixed.
//
// TWO SIGNALS, and the ordering between them is the design:
//
//   1. SNAPSHOT AGE is the primary finding, and it measures the OUTCOME — "do we
//      have a recent restorable snapshot" — rather than any proxy for it. This
//      matters because it cannot be defeated by the attempt path never running:
//      if a bug meant `backupDue` never became true, no attempt record would
//      ever be written and an attempt-based check would stay silent forever.
//      Staleness still fires. It is the backstop that depends on nothing.
//
//   2. ATTEMPT RECORDS are the DIAGNOSIS, and they buy time. A Monday whose
//      attempts all failed is knowable that same day, ~9 days before the
//      snapshot goes stale — the difference between fixing it this week and
//      discovering it next month. This is the lesson of #530 applied before the
//      incident rather than after it: "it is broken" is worth much less than
//      "it is broken because `unauthorized`".
//
// WHY NO HOURLY HEARTBEAT HERE. The push heartbeat already proves the cron
// fires, on every tick, and this runs inside the same handler. Writing an
// hourly "backup not due" record would be 168 KV writes a week to restate
// something already recorded. The cost is that an ABSENCE of backup records
// cannot by itself distinguish "never came due" from "cron dead" — which is
// exactly why signal 1 exists and does not rely on records at all.

import { isAuthorizedCron } from './_cronAuth.js';

export const BACKUP_RUN_SCHEMA = 1;

/** Newest attempt, overwritten every attempt. */
export const BACKUP_RUN_LAST_KEY = 'backup:run:last';

/** Prefix for the retained per-attempt history. */
export const BACKUP_RUN_PREFIX = 'backup:run:at:';

/**
 * History retention: 60 days ≈ 8 weekly cycles. Long enough to see a repeating
 * Monday failure as a pattern rather than an incident.
 */
export const BACKUP_RUN_TTL_SECONDS = 60 * 24 * 60 * 60;

/**
 * How old the newest SUCCESSFUL snapshot may be before it is a finding.
 *
 * The job is weekly, so 7 days is "on time". Nine gives one missed window plus
 * two days of slack — Cloudflare schedules are best-effort and the whole
 * Monday 03:00–05:59 window has to be missed for this to fire, which is a real
 * problem rather than a hiccup.
 */
export const BACKUP_STALE_DAYS = 9;

/**
 * How far back ATTEMPT findings look. Same nine days as the staleness bound, so
 * the two findings describe the same weekly cycle rather than disagreeing about
 * which week they are talking about.
 *
 * Retention and judgement are different jobs — the lesson push-health learned
 * the hard way when it reported two-day-old failures as current.
 */
export const BACKUP_JUDGEMENT_DAYS = 9;

/**
 * Bounded failure vocabulary. CODES, never messages — same rule as
 * _pushFailure.js and for the same reason: a fetch rejection embeds the URL it
 * failed against, and this history is served by an ops endpoint.
 */
export const BACKUP_FAIL_REASONS = Object.freeze({
  UNAUTHORIZED: 'unauthorized',
  MISCONFIGURED: 'server_misconfigured',
  TOKEN_ERROR: 'token_error',
  BACKUP_FAILED: 'backup_failed',
  HTTP_4XX: 'http_4xx',
  HTTP_5XX: 'http_5xx',
  TIMEOUT: 'timeout',
  TRANSPORT_ERROR: 'transport_error',
  UNKNOWN: 'unknown',
});

const KNOWN_REASONS = new Set(Object.values(BACKUP_FAIL_REASONS));

/** The error codes /api/backup-progress returns in its own body. */
const ENDPOINT_CODES = new Set(['server_misconfigured', 'token_error', 'backup_failed']);

/**
 * Map one failed attempt to a single bounded code.
 *
 * `errorCode` is the endpoint's own `error` field and is preferred when it is
 * one we recognise, because it says WHICH stage failed; the HTTP status only
 * says that one did. Anything unrecognised falls to a status-shaped code rather
 * than being passed through — never widen this by echoing the input.
 */
export function classifyBackupFailure({ httpStatus, errorCode, errorMessage } = {}) {
  const status = Number(httpStatus);
  if (status === 401 || status === 403) return BACKUP_FAIL_REASONS.UNAUTHORIZED;
  if (typeof errorCode === 'string' && ENDPOINT_CODES.has(errorCode)) return errorCode;

  const msg = String(errorMessage || '').toLowerCase();
  if (msg.includes('abort') || msg.includes('timeout') || msg.includes('timed out')) {
    return BACKUP_FAIL_REASONS.TIMEOUT;
  }
  if (Number.isFinite(status) && status >= 500) return BACKUP_FAIL_REASONS.HTTP_5XX;
  if (Number.isFinite(status) && status >= 400) return BACKUP_FAIL_REASONS.HTTP_4XX;
  if (msg) return BACKUP_FAIL_REASONS.TRANSPORT_ERROR;
  return BACKUP_FAIL_REASONS.UNKNOWN;
}

/**
 * One attempt record.
 *
 * `outcome` is 'ok' | 'skipped' | 'failed'. **'skipped' is a SUCCESS**: it means
 * the once-per-week latch found this week's snapshot already written, which
 * proves the whole pipeline answered. Counting it as anything else would make a
 * healthy Monday-at-04:00 retry look like a failure.
 */
export function buildBackupRunRecord({ at, cron = null, outcome, week = null, reason = null }) {
  const failed = outcome === 'failed';
  return {
    v: BACKUP_RUN_SCHEMA,
    at,
    cron,
    outcome: outcome === 'ok' || outcome === 'skipped' || failed ? outcome : 'failed',
    week,
    // Only failures carry a reason, and only ever a code from the vocabulary.
    ...(failed ? { reason: KNOWN_REASONS.has(reason) ? reason : BACKUP_FAIL_REASONS.UNKNOWN } : {}),
  };
}

/**
 * Persist one attempt: the `last` pointer plus a TTL'd history entry.
 *
 * Fail-soft by contract, like writePushRun. This runs inside the Worker's
 * scheduled handler; a throw here would abort the run, so observability could
 * take out the very thing it observes.
 */
export async function writeBackupRun(kv, record) {
  if (!kv) return false;
  const body = JSON.stringify(record);
  try {
    await kv.put(BACKUP_RUN_LAST_KEY, body);
  } catch {
    /* the history write below is still worth attempting */
  }
  try {
    await kv.put(`${BACKUP_RUN_PREFIX}${record.at}`, body, {
      expirationTtl: BACKUP_RUN_TTL_SECONDS,
    });
    return true;
  } catch {
    return false;
  }
}

/** Whole days between an ISO timestamp and `now`, or null if unparseable. */
export function ageDays(iso, now = Date.now()) {
  const t = Date.parse(String(iso ?? ''));
  if (!Number.isFinite(t)) return null;
  return Math.max(0, Math.floor((now - t) / 86400000));
}

function summarizeReasons(counts) {
  const parts = Object.entries(counts)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([code, n]) => `${code} x${n}`);
  return parts.join(', ');
}

/**
 * Judge the backup. Pure and clock-injectable.
 *
 * `lastSnapshotAt` is the newest snapshot's completion time, read from the
 * week index by the sweep endpoint. It is passed in rather than derived here so
 * the thresholds stay testable without KV.
 */
export function assessBackupRuns({
  runs,
  lastSnapshotAt = null,
  lastSnapshotWeek = null,
  now = Date.now(),
} = {}) {
  const findings = [];
  const valid = (Array.isArray(runs) ? runs : []).filter((r) => r && typeof r.at === 'string');
  const sorted = [...valid].sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const newest = sorted[0] || null;

  // Attempts are judged over the recent cycle only. An undated attempt counts
  // as recent — it cannot be aged out on a timestamp we cannot read.
  const cutoff = BACKUP_JUDGEMENT_DAYS * 86400000;
  const recent = [];
  const older = [];
  for (const r of sorted) {
    const t = Date.parse(String(r.at));
    if (!Number.isFinite(t) || now - t <= cutoff) recent.push(r);
    else older.push(r);
  }

  const succeeded = recent.filter((r) => r.outcome === 'ok' || r.outcome === 'skipped').length;
  const failed = recent.filter((r) => r.outcome === 'failed').length;
  const reasons = {};
  for (const r of recent) {
    if (r.outcome === 'failed' && r.reason) reasons[r.reason] = (reasons[r.reason] || 0) + 1;
  }

  const snapshotAgeDays = ageDays(lastSnapshotAt, now);

  // ── 1. The outcome that matters, and the one finding nothing can silence ──
  if (!lastSnapshotAt) {
    findings.push({
      kind: 'no_snapshot',
      detail: 'no completed Firestore snapshot exists — there is nothing to restore from',
    });
  } else if (snapshotAgeDays === null || snapshotAgeDays > BACKUP_STALE_DAYS) {
    findings.push({
      kind: 'stale_snapshot',
      detail: `newest Firestore snapshot${lastSnapshotWeek ? ` (${lastSnapshotWeek})` : ''} is ${
        snapshotAgeDays === null ? 'undated' : `${snapshotAgeDays} days`
      } old (limit ${BACKUP_STALE_DAYS}) — the weekly backup is not completing`,
    });
  }

  // ── 2. The diagnosis, ~9 days before staleness would notice ───────────────
  if (failed > 0 && succeeded === 0) {
    const because = summarizeReasons(reasons);
    findings.push({
      kind: 'attempts_failing',
      detail: `all ${failed} backup attempt(s) in the last ${BACKUP_JUDGEMENT_DAYS} days failed — not one completed${
        because ? ` — ${because}` : ''
      }`,
    });
  }

  return {
    clean: findings.length === 0,
    findings,
    snapshot: {
      week: lastSnapshotWeek,
      at: lastSnapshotAt,
      ageDays: snapshotAgeDays,
      staleAfterDays: BACKUP_STALE_DAYS,
    },
    attempts: {
      judgementDays: BACKUP_JUDGEMENT_DAYS,
      recent: recent.length,
      succeeded,
      failed,
      reasons,
    },
    history: { attempts: older.length, retentionDays: BACKUP_RUN_TTL_SECONDS / 86400 },
    lastAttempt: newest,
  };
}

// Re-exported so the sweep endpoint has one import for its auth rule and its
// judgement, and cannot accidentally grow a second definition of either.
export { isAuthorizedCron };
