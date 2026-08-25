// functions/api/push-health.js
//
// PUSH DELIVERY SWEEP (2026-08-22): the read side of the heartbeat that
// functions/scheduled.js writes on every hourly run (see _pushRunLog.js).
//
// The streak reminder is the one feature that fails where nobody is looking.
// Everything else breaks in front of a learner, who tells us. This endpoint
// answers the three questions nothing else could:
//
//   1. Is the cron firing at all?      → newest heartbeat age
//   2. Did it halt on bad config?      → haltedReason on the newest record
//   3. Are the sends actually landing?  → failure ratio over the retained window
//
// DISPATCH-ONLY, server-to-server, gated exactly like output-observatory:
// CRON_SECRET or the self-provisioned CALIBRATION_SECRET, compared timing-safe.
// It reports operational counts, which are a proxy for how many people use the
// app — not something an origin-gated public endpoint should hand out. That is
// also why /api/health carries only timestamps from this data and no counts.
//
// Zero AI spend: pure KV reads. Called daily by push-health.yml, which fails
// red on any finding.

import {
  PUSH_RUN_LAST_KEY,
  PUSH_RUN_PREFIX,
  PUSH_RUN_STALE_MINUTES,
  assessPushRuns,
} from '../_pushRunLog.js';

/** Enough history to see a multi-day outage in context; the cron is hourly, so
 *  this is a bit over a week of runs. */
const MAX_RUNS = 200;

function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const aBytes = enc.encode(String(a));
  const bBytes = enc.encode(String(b));
  const len = Math.max(aBytes.length, bBytes.length);
  let diff = aBytes.length === bBytes.length ? 0 : 1;
  for (let i = 0; i < len; i++) {
    diff |= (aBytes[i] || 0) ^ (bBytes[i] || 0);
  }
  return diff === 0;
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

async function listAll(kv, prefix, cap) {
  const out = [];
  let cursor;
  while (out.length < cap) {
    const page = await kv.list({ prefix, cursor, limit: Math.min(1000, cap - out.length) });
    out.push(...page.keys.map((k) => k.name));
    if (page.list_complete || !page.cursor) break;
    cursor = page.cursor;
  }
  return out.slice(0, cap);
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.CRON_SECRET && !env.CALIBRATION_SECRET) {
    return json(503, { error: 'calibration_secret_missing' });
  }
  const secret = request.headers.get('x-cron-secret') || '';
  const authorized =
    (env.CRON_SECRET && timingSafeEqual(secret, env.CRON_SECRET)) ||
    (env.CALIBRATION_SECRET && timingSafeEqual(secret, env.CALIBRATION_SECRET));
  if (!authorized) return json(401, { error: 'unauthorized' });

  // Same namespace the worker writes to. PUSH_SUBSCRIPTIONS is the canonical
  // one; env.KV is accepted first only to match the other sweeps' convention.
  const kv = env.KV || env.PUSH_SUBSCRIPTIONS;
  if (!kv) return json(503, { error: 'kv_missing' });

  const runs = [];
  const keys = await listAll(kv, PUSH_RUN_PREFIX, MAX_RUNS);
  for (const key of keys) {
    try {
      const raw = await kv.get(key);
      const rec = raw ? JSON.parse(raw) : null;
      if (rec) runs.push(rec);
    } catch {
      /* one unreadable history record must not blind the whole sweep */
    }
  }

  // The `last` pointer is authoritative for LIVENESS even if the history list
  // is lagging — KV list is eventually consistent, and a freshly written run
  // can be absent from a list that already reflects the put. Reading it
  // separately keeps a just-recovered cron from being reported as dead.
  try {
    const rawLast = await kv.get(PUSH_RUN_LAST_KEY);
    const last = rawLast ? JSON.parse(rawLast) : null;
    if (last?.at && !runs.some((r) => r.at === last.at)) runs.push(last);
  } catch {
    /* fall back to whatever the history yielded */
  }

  const assessment = assessPushRuns(runs, { now: Date.now() });

  return json(200, {
    at: new Date().toISOString(),
    staleAfterMinutes: PUSH_RUN_STALE_MINUTES,
    lastRun: assessment.lastRun,
    ageMinutes: assessment.ageMinutes,
    // `window` is the judged window — the numbers the findings came from.
    // `history` is the rest of the retention: kept visible, never judged, so a
    // fixed outage stays legible without failing the sweep every day until its
    // records expire.
    window: assessment.window,
    history: assessment.history,
    findings: assessment.findings,
    clean: assessment.clean,
  });
}
