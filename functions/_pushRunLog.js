// functions/_pushRunLog.js
//
// PUSH DELIVERY OBSERVABILITY (2026-08-22).
//
// The streak reminder is the one thing this app does while nobody is looking at
// it. Everything else fails in front of a learner, who tells us. A push that
// stops going out fails in silence.
//
// What already existed, and why it was not enough:
//   - streak-push.js writes push:lastAttemptAt / lastDeliveredAt / lastStatus,
//     surfaced in /api/health. Real, but they only move when a send is actually
//     ATTEMPTED. If the hourly cron dies, or every subscriber is notDue/skipped,
//     those markers go stale — and a stale marker looks identical to a dead
//     cron. Liveness cannot be inferred from a marker written on success.
//   - scheduled.js counted sent/skipped/notDue/failed/expired and console.warn'd
//     one line per run, into the ephemeral Cloudflare tail. Nobody reads a tail.
//
// So this module adds the missing half: a HEARTBEAT written on EVERY run,
// including runs where nothing was due and runs that halted on missing config.
// "No run record in the last N minutes" is then a positive statement that the
// cron is not firing, which no success marker can give you.
//
// Written by functions/scheduled.js, read by functions/api/push-health.js.
//
// 2026-08-23: the heartbeat caught its first real outage — every attempt
// failing, none accepted — and could not say why. Run records now carry a
// bounded failure-reason map (functions/_pushFailure.js) and the findings below
// name the dominant reason, so the alert points at the fix instead of at the
// symptom.

import { summarizePushFailures } from './_pushFailure.js';

/**
 * Schema version, so a future reader can tell old records from new.
 *
 * v2 (2026-08-23) adds the optional `failures` map — see _pushFailure.js. The
 * history is retained for 14 days, so v1 records coexist with v2 ones for two
 * weeks after any deploy; every reader below treats a missing `failures` as
 * "no reasons recorded", never as "no failures".
 */
export const PUSH_RUN_SCHEMA = 2;

/** Newest run, overwritten every run. The liveness check reads only this. */
export const PUSH_RUN_LAST_KEY = 'push:run:last';

/** Prefix for the retained per-run history the sweep aggregates over. */
export const PUSH_RUN_PREFIX = 'push:run:at:';

/** History retention. 14 days is enough to see a weekend-long outage in
 *  context without turning the KV list into a paging exercise. */
export const PUSH_RUN_TTL_SECONDS = 14 * 24 * 60 * 60;

/**
 * How stale the newest run may be before the cron counts as dead.
 *
 * The cron is hourly, so 60 minutes is "on time". 150 gives two missed ticks of
 * slack: Cloudflare schedules are best-effort and a single skipped tick is not
 * an incident worth waking anyone for. Three in a row is.
 */
export const PUSH_RUN_STALE_MINUTES = 150;

/**
 * Failure ratio (failed / attempted) that counts as a finding.
 *
 * Individual pushes fail for ordinary reasons — a browser that revoked the
 * subscription without returning 410, a flaky push service. A THIRD of them
 * failing is not ordinary.
 */
export const PUSH_FAIL_RATIO_LIMIT = 0.34;

/**
 * Attempts required before a ratio is allowed to mean anything.
 *
 * With two attempts, one failure is a 50% failure rate and says nothing at all.
 * Reporting that as an incident would train the reader to ignore the report,
 * which is worse than not having one.
 */
export const PUSH_FAIL_MIN_ATTEMPTS = 8;

/**
 * Build the run record. Pure — takes the counters the worker already computes
 * and returns the object both the writer and the tests agree on.
 *
 * `haltedReason` is set when the run returned early on missing config. That is
 * deliberately a RECORDED state rather than an absent record: "misconfigured"
 * and "not running at all" need different fixes, and a silent early return
 * makes them look the same.
 *
 * `failures` is a bounded code -> count map from _pushFailure.js. Omitted when
 * empty, so a healthy run's record stays byte-identical to a v1 one.
 */
export function buildPushRunRecord({
  at,
  cron = null,
  sent = 0,
  skipped = 0,
  notDue = 0,
  failed = 0,
  expired = 0,
  scanned = 0,
  haltedReason = null,
  failures = null,
}) {
  const hasFailures = failures && Object.keys(failures).length > 0;
  return {
    v: PUSH_RUN_SCHEMA,
    at,
    cron,
    sent,
    skipped,
    notDue,
    failed,
    expired,
    scanned,
    ...(haltedReason ? { haltedReason } : {}),
    ...(hasFailures ? { failures } : {}),
  };
}

/**
 * Persist one run record: the `last` pointer plus a TTL'd history entry.
 *
 * Fail-soft by contract. This is observability; it must never be the reason a
 * learner's reminder does not go out. Every caller is inside the worker's
 * scheduled handler, where a throw would abort the run.
 */
export async function writePushRun(kv, record) {
  if (!kv) return false;
  const body = JSON.stringify(record);
  try {
    await kv.put(PUSH_RUN_LAST_KEY, body);
  } catch {
    /* the history write below is still worth attempting */
  }
  try {
    await kv.put(`${PUSH_RUN_PREFIX}${record.at}`, body, {
      expirationTtl: PUSH_RUN_TTL_SECONDS,
    });
    return true;
  } catch {
    return false;
  }
}

/** Minutes between an ISO timestamp and `now`, or null if unparseable. */
export function ageMinutes(iso, now = Date.now()) {
  const t = Date.parse(String(iso ?? ''));
  if (!Number.isFinite(t)) return null;
  return Math.max(0, Math.round((now - t) / 60000));
}

/**
 * Judge a set of run records. Pure, so the thresholds above are testable
 * without KV, a worker, or a clock.
 *
 * Returns `{ clean, findings, window }`. Every finding names what is wrong in
 * terms an operator can act on — never a bare boolean.
 */
export function assessPushRuns(runs, { now = Date.now() } = {}) {
  const findings = [];
  const valid = (Array.isArray(runs) ? runs : []).filter((r) => r && typeof r.at === 'string');
  const sorted = [...valid].sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const newest = sorted[0] || null;

  const sum = (field) => sorted.reduce((n, r) => n + (Number(r[field]) || 0), 0);
  const sent = sum('sent');
  const failed = sum('failed');
  const expired = sum('expired');
  const attempted = sent + failed;
  const failureRatio = attempted > 0 ? failed / attempted : 0;
  const age = newest ? ageMinutes(newest.at, now) : null;

  // Reasons across the window. Absent on v1 records and on runs that predate a
  // deploy, so this can legitimately be empty while `failed` is not — which is
  // why the findings below append the reasons only when there are some, rather
  // than claiming "unknown" for history that simply never carried them.
  const failures = {};
  for (const r of sorted) {
    for (const [code, n] of Object.entries(r.failures || {})) {
      const count = Number(n);
      if (Number.isFinite(count) && count > 0) failures[code] = (failures[code] || 0) + count;
    }
  }
  const reasons = summarizePushFailures(failures);
  const because = reasons ? ` — ${reasons}` : '';

  const window = {
    runs: sorted.length,
    sent,
    failed,
    expired,
    attempted,
    // Rounded for the report; the comparison below uses the exact value.
    failureRatio: Number(failureRatio.toFixed(3)),
    failures,
  };

  if (!newest) {
    findings.push({
      kind: 'no_runs',
      detail: 'no push run has been recorded at all — the scheduled worker has never reported in',
    });
    return { clean: false, findings, window, lastRun: null, ageMinutes: null };
  }

  if (age === null || age > PUSH_RUN_STALE_MINUTES) {
    findings.push({
      kind: 'stale',
      detail: `newest push run is ${age === null ? 'undated' : `${age} minutes`} old (limit ${PUSH_RUN_STALE_MINUTES}) — the hourly cron is not firing`,
    });
  }

  if (newest.haltedReason) {
    findings.push({
      kind: 'halted',
      detail: `the last run halted before sending: ${newest.haltedReason}`,
    });
  }

  // The sharpest signal there is: attempts are happening and none succeed.
  // Caught regardless of attempt count, because "every single one failed" does
  // not need a large sample to be alarming.
  if (attempted > 0 && sent === 0) {
    findings.push({
      kind: 'all_failing',
      detail: `all ${attempted} push attempt(s) in the retained window failed — not one was accepted${because}`,
    });
  } else if (attempted >= PUSH_FAIL_MIN_ATTEMPTS && failureRatio > PUSH_FAIL_RATIO_LIMIT) {
    findings.push({
      kind: 'failure_rate',
      detail: `${failed}/${attempted} push attempts failed (${Math.round(failureRatio * 100)}%, limit ${Math.round(PUSH_FAIL_RATIO_LIMIT * 100)}%)${because}`,
    });
  }

  return { clean: findings.length === 0, findings, window, lastRun: newest, ageMinutes: age };
}
