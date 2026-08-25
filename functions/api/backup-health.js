// functions/api/backup-health.js
//
// The sweep that makes a silently-stopped Firestore backup findable
// (2026-08-25). Read daily by .github/workflows/backup-health.yml, which fails
// red on any finding.
//
// Daily for a WEEKLY job on purpose: a Monday whose attempts all failed is then
// known that same day, not the following Monday. The whole cost of the
// 2026-08-23 outage was the delay between breaking and being noticed.
//
// DISPATCH-ONLY, server-to-server, gated by the shared cron rule
// (functions/_cronAuth.js — CRON_SECRET or the CI-installed MANAGED_CRON_SECRET,
// timing-safe). Makes ZERO Claude calls and spends nothing — pure KV reads — so
// it needs no budget ceiling.
//
// COUNTS AND WEEK KEYS STAY BEHIND THE SECRET, like push-health's. /api/health
// carries only presence booleans, because it is origin-gated rather than
// authenticated and snapshot sizes are a usage proxy.

import {
  BACKUP_RUN_LAST_KEY,
  BACKUP_RUN_PREFIX,
  BACKUP_STALE_DAYS,
  assessBackupRuns,
  isAuthorizedCron,
} from '../_backupRunLog.js';

const MAX_RUNS = 200;

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

  if (!env.CRON_SECRET && !env.MANAGED_CRON_SECRET) {
    return json(503, { error: 'cron_secret_missing' });
  }
  if (!isAuthorizedCron(request.headers.get('x-cron-secret') || '', env)) {
    return json(401, { error: 'unauthorized' });
  }

  // Same namespace resolution order as backup-progress.js writes with, or the
  // sweep would read an empty store and report a healthy backup as missing.
  const kv = env.BACKUP_KV || env.KV || env.PUSH_SUBSCRIPTIONS;
  if (!kv) return json(503, { error: 'kv_missing' });

  // ── The snapshot itself: the finding that depends on nothing else ─────────
  let lastSnapshotWeek = null;
  let lastSnapshotAt = null;
  try {
    lastSnapshotWeek = (await kv.get('backup:latest')) || null;
    if (lastSnapshotWeek) {
      const idx = JSON.parse((await kv.get(`backup:${lastSnapshotWeek}:index`)) || 'null');
      // `completedAt` is written only after every collection has been chunked,
      // so its presence is what makes a snapshot restorable rather than partial.
      lastSnapshotAt = idx?.completedAt || null;
      // A `latest` pointer with no readable index is worse than no pointer: it
      // claims a snapshot that cannot be restored. Report it as absent.
      if (!lastSnapshotAt) lastSnapshotWeek = lastSnapshotWeek || null;
    }
  } catch {
    /* unreadable → treated as no snapshot, which is the safe direction */
  }

  // ── Attempt history: the diagnosis ────────────────────────────────────────
  const runs = [];
  try {
    const keys = await listAll(kv, BACKUP_RUN_PREFIX, MAX_RUNS);
    for (const key of keys) {
      try {
        const raw = await kv.get(key);
        const rec = raw ? JSON.parse(raw) : null;
        if (rec) runs.push(rec);
      } catch {
        /* skip one unreadable record rather than lose the whole sweep */
      }
    }
    // KV list is eventually consistent, so the newest attempt can be missing
    // from the listing while the pointer already has it — read it separately,
    // exactly as push-health does, or a just-recovered backup still reports bad.
    const rawLast = await kv.get(BACKUP_RUN_LAST_KEY);
    const last = rawLast ? JSON.parse(rawLast) : null;
    if (last?.at && !runs.some((r) => r.at === last.at)) runs.push(last);
  } catch {
    /* fall back to whatever was gathered */
  }

  const assessment = assessBackupRuns({ runs, lastSnapshotAt, lastSnapshotWeek, now: Date.now() });

  return json(200, {
    at: new Date().toISOString(),
    staleAfterDays: BACKUP_STALE_DAYS,
    snapshot: assessment.snapshot,
    attempts: assessment.attempts,
    history: assessment.history,
    lastAttempt: assessment.lastAttempt,
    findings: assessment.findings,
    clean: assessment.clean,
  });
}
