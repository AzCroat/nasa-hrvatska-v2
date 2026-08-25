// Weekly Firestore backup — Cloudflare Pages Function
// POST /api/backup-progress   (internal-only: x-cron-secret header)
//
// WHY THIS EXISTS (owner decision, 2026-08-10)
// Firestore holds every learner's progress and nothing else did: each device's
// localStorage is an accidental per-user copy, but there was no snapshot to
// restore from after a bad write, a bad merge, or an account-level mishap.
// This endpoint pages through the client-written collections (`users`, `srs`)
// plus the legacy read-only `profiles` and writes size-bounded JSON chunks to
// KV. Zero owner operations: the scheduled worker (functions/scheduled.js)
// calls it once a week, and 90-day KV TTLs self-prune old generations
// (~12 weekly snapshots retained at any time).
//
// KV LAYOUT (namespace: BACKUP_KV > KV > PUSH_SUBSCRIPTIONS, first bound wins)
//   backup:<weekKey>:<collection>:chunk<N> — JSON array of Firestore documents
//       (REST `fields` representation, exactly what a PATCH needs to restore)
//   backup:<weekKey>:index                 — run metadata + chunk counts; its
//       existence is also the once-per-week latch (re-runs in the same ISO
//       week are skipped unless {force:true} is POSTed)
//   backup:latest                          — weekKey of the newest snapshot
//
// RESTORE (manual, deliberate — there is intentionally NO write-back endpoint):
//   read backup:<weekKey>:index for chunk counts, read each chunk, and PATCH
//   each document back to
//   https://firestore.googleapis.com/v1/<doc.name>?currentDocument.exists=...
//   with an admin token from _firestoreAdmin.getAdminAccessToken. Documents
//   carry their full resource `name`, so no id reconstruction is needed.
//
// SIZE BOUNDS: Firestore caps a document at ~1 MiB; chunks flush at
// CHUNK_FLUSH_BYTES (8 MB serialized) or CHUNK_MAX_DOCS, staying far under
// KV's 25 MB value limit even in pathological cases.

import { getAdminAccessToken } from './_firestoreAdmin.js';
import { weekKeyUTC } from './_weekKey.js';
import { isAuthorizedCron } from '../_cronAuth.js';

const COLLECTIONS = ['users', 'srs', 'profiles'];
const PAGE_SIZE = 50;
const MAX_PAGES_PER_COLLECTION = 40; // 2000 docs — far above current user count
const CHUNK_FLUSH_BYTES = 8 * 1024 * 1024;
const CHUNK_MAX_DOCS = 50;
const TTL_SECONDS = 60 * 60 * 24 * 90; // ~12 weekly generations, self-pruning

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

async function backupCollection(collection, { projectId, token, kv, wk }) {
  const base = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}`;
  let pageToken = '';
  let pages = 0;
  let docCount = 0;
  let chunkIndex = 0;
  let chunk = [];
  let chunkBytes = 0;

  async function flush() {
    if (chunk.length === 0) return;
    await kv.put(`backup:${wk}:${collection}:chunk${chunkIndex}`, JSON.stringify(chunk), {
      expirationTtl: TTL_SECONDS,
    });
    chunkIndex++;
    chunk = [];
    chunkBytes = 0;
  }

  do {
    const url =
      `${base}?pageSize=${PAGE_SIZE}` +
      (pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '');
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`list ${collection} failed ${res.status}: ${errText.slice(0, 200)}`);
    }
    const data = await res.json();
    for (const doc of data.documents || []) {
      const serialized = JSON.stringify(doc);
      if (chunk.length >= CHUNK_MAX_DOCS || chunkBytes + serialized.length > CHUNK_FLUSH_BYTES) {
        await flush();
      }
      chunk.push(doc);
      chunkBytes += serialized.length;
      docCount++;
    }
    pageToken = data.nextPageToken || '';
    pages++;
  } while (pageToken && pages < MAX_PAGES_PER_COLLECTION);

  await flush();
  return { docCount, chunks: chunkIndex, pages, truncated: Boolean(pageToken) };
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Internal-only: the scheduled worker authenticates with a cron credential.
  // Same accept rule as /api/streak-push (functions/_cronAuth.js) — and for the
  // same reason: this endpoint shares the Worker's header, so when CRON_SECRET
  // drifted on 2026-08-23 the weekly Firestore backup went down with the
  // reminders, unnoticed, because nothing sweeps it.
  const secret = request.headers.get('x-cron-secret') || '';
  if (!isAuthorizedCron(secret, env)) {
    return json({ ok: false, error: 'unauthorized' }, 401);
  }

  const projectId = env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || '';
  const saJson = env.FIREBASE_SERVICE_ACCOUNT_JSON || '';
  const kv = env.BACKUP_KV || env.KV || env.PUSH_SUBSCRIPTIONS || null;
  if (!projectId || !saJson || !kv) {
    return json({ ok: false, error: 'server_misconfigured' }, 500);
  }

  let force = false;
  try {
    force = Boolean((await request.json())?.force);
  } catch {
    /* empty body is the normal cron call */
  }

  const wk = weekKeyUTC();

  // Once-per-week latch: the index existing means this week's snapshot is done.
  // (KV is eventually consistent, but the caller fires weekly — a rare double
  // run would only rewrite identical data, never lose any.)
  try {
    if (!force && (await kv.get(`backup:${wk}:index`))) {
      return json({ ok: true, skipped: true, week: wk, reason: 'already_backed_up' });
    }
  } catch {
    /* an unreadable latch must not block the backup itself */
  }

  let token;
  try {
    token = await getAdminAccessToken(saJson);
  } catch (e) {
    console.error('backup-progress: token error:', e?.message);
    return json({ ok: false, error: 'token_error' }, 500);
  }

  const startedAt = new Date().toISOString();
  const results = {};
  try {
    // Sequential on purpose: keeps the subrequest budget bounded and the logs ordered.
    for (const collection of COLLECTIONS) {
      results[collection] = await backupCollection(collection, { projectId, token, kv, wk });
    }
  } catch (e) {
    console.error('backup-progress: backup failed:', e?.message);
    // No index is written on failure, so the latch stays open and the next
    // hourly cron tick inside the backup window retries automatically. The
    // failure detail goes to the tail log only — error text can embed the
    // upstream Firestore response, which doesn't belong in an HTTP body.
    return json({ ok: false, error: 'backup_failed' }, 502);
  }

  const index = { week: wk, startedAt, completedAt: new Date().toISOString(), results };
  await kv.put(`backup:${wk}:index`, JSON.stringify(index), { expirationTtl: TTL_SECONDS });
  await kv.put('backup:latest', wk, { expirationTtl: TTL_SECONDS });

  console.warn(
    `[Backup] ${wk}: ` +
      COLLECTIONS.map((c) => `${c}=${results[c].docCount} docs/${results[c].chunks} chunks`).join(
        ', ',
      ),
  );
  return json({ ok: true, ...index });
}
