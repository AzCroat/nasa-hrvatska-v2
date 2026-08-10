// Per-user backup tee — Cloudflare Pages Function
// POST /api/backup-mine   (Firebase-authenticated; the user backs up THEIR OWN data)
//
// WHY THIS PATH EXISTS (2026-08-10)
// The weekly admin sweep (backup-progress.js) needs FIREBASE_SERVICE_ACCOUNT_JSON,
// whose production value is empty — a dashboard-only secret no automation can
// mint. A learner's own ID token, verified against Google's PUBLIC certs
// (_verifyToken.js — no admin credential involved), is a fully valid access
// path to the learner's own data. The client tees its complete progress
// snapshot here once a day after a successful Firestore save (src/lib/
// backupTee.ts), so every ACTIVE user is protected with zero owner operations.
// If the admin credential is ever restored, the weekly sweep also covers
// dormant users — complementary, not alternative.
//
// KV LAYOUT (same namespace as backup-progress.js)
//   backup:user:{uid}:latest       — newest snapshot, NO TTL (permanent)
//   backup:{weekKey}:user:{uid}    — weekly generation, 90-day TTL
//   backup:client:lastAt           — ISO timestamp of the newest tee (health)
//   backup:mine:rl:{uid}:{utcDate} — once-per-UTC-day per-user latch
//
// RESTORE: the stored value is { progress, srs, savedAt, uid } — `progress`
// is the exact buildProgressSnapshot() shape applyRemoteProgress consumes.

import { getFirebaseUid } from './_verifyToken.js';
import { corsHeaders } from './_helpers.js';
import { weekKeyUTC } from './_weekKey.js';

const MAX_BODY_BYTES = 1_500_000; // progress blob is designed <=200KB; SRS adds some
const WEEKLY_TTL = 60 * 60 * 24 * 90;

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...corsHeaders(origin),
    },
  });
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get('origin') || '';

  const kv = env.BACKUP_KV || env.KV || env.PUSH_SUBSCRIPTIONS || null;
  const projectId = env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || '';
  if (!kv || !projectId) return json({ ok: false, error: 'server_misconfigured' }, 500, origin);

  let uid;
  try {
    uid = await getFirebaseUid(request, projectId);
  } catch {
    uid = null;
  }
  if (!uid) return json({ ok: false, error: 'unauthorized' }, 401, origin);

  // Once per UTC day per user: cheap latch BEFORE reading the body.
  const day = new Date().toISOString().slice(0, 10);
  const rlKey = `backup:mine:rl:${uid}:${day}`;
  try {
    if (await kv.get(rlKey)) return json({ ok: true, skipped: true }, 200, origin);
  } catch {}

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: 'too_large' }, 413, origin);
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400, origin);
  }
  if (!body || typeof body !== 'object' || !body.progress || typeof body.progress !== 'object') {
    return json({ ok: false, error: 'missing_progress' }, 400, origin);
  }

  const record = JSON.stringify({
    uid,
    savedAt: new Date().toISOString(),
    progress: body.progress,
    srs: body.srs ?? null,
  });

  const wk = weekKeyUTC();
  try {
    await kv.put(`backup:user:${uid}:latest`, record); // permanent
    await kv.put(`backup:${wk}:user:${uid}`, record, { expirationTtl: WEEKLY_TTL });
    await kv.put(rlKey, '1', { expirationTtl: 60 * 60 * 26 });
    await kv.put('backup:client:lastAt', new Date().toISOString());
  } catch (e) {
    console.error('backup-mine: KV write failed:', e?.message);
    return json({ ok: false, error: 'storage_error' }, 502, origin);
  }

  return json({ ok: true, week: wk }, 200, origin);
}
