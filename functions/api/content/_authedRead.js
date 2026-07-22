import { getFirebaseUid } from '../_verifyToken.js';

const GET_CORS = (origin) => ({
  'Access-Control-Allow-Origin': origin || 'https://nasahrvatska.com',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, If-None-Match',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
});

function today() {
  return new Date().toISOString().slice(0, 10);
}

function jsonResponse(status, body, headers = {}) {
  return new Response(body == null ? null : JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

/**
 * Shared handler for GET /api/content/* endpoints.
 * @param {object} args
 * @param {Request} args.request
 * @param {{ FIREBASE_PROJECT_ID: string, CONTENT_DAILY_CAP?: string, AI_QUOTA_DB: KVNamespace }} args.env
 * @param {string} args.etag - resource ETag (without surrounding quotes)
 * @param {() => any} args.buildBody - lazy body builder; called only on 200 path
 */
export async function authedRead({ request, env, etag, buildBody }) {
  const origin = request.headers.get('origin');
  const cors = GET_CORS(origin);

  // Preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }

  // Auth. CF Pages env-sync (sync-cf-pages-env.yml) populates
  // VITE_FIREBASE_PROJECT_ID; the bare FIREBASE_PROJECT_ID was never set on
  // the Pages project. Previously this read env.FIREBASE_PROJECT_ID → undefined
  // → token iss claim "https://securetoken.google.com/<real-id>" was compared
  // against "https://securetoken.google.com/undefined" → never matched → every
  // authenticated request 401'd. save-progress.js already handled this with
  // the same fallback; bringing /api/content/* in line.
  const projectId = env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || '';
  const uid = await getFirebaseUid(request, projectId);
  if (!uid) {
    return jsonResponse(401, { error: 'unauthorized' }, cors);
  }

  // ETag short-circuit (304) - does NOT count against quota
  const inm = request.headers.get('if-none-match');
  if (inm && inm.replace(/^W\//, '').replace(/"/g, '') === etag) {
    return new Response(null, { status: 304, headers: { ETag: `"${etag}"`, ...cors } });
  }

  // Daily read cap. AI_QUOTA_DB is a D1 database (NOT KV) — the previous code
  // called .get()/.put() on it, which throw and were swallowed, so `count`
  // stayed 0 and the cap never enforced. Use the D1 API against the shared
  // ai_quota table with a `content:` subject namespace (distinct from the
  // AI-turn `quota:` subjects), mirroring _aiQuota's upsert.
  const cap = parseInt(env.CONTENT_DAILY_CAP || '500', 10);
  const db = env.AI_QUOTA_DB || null;
  const subject = `content:${uid}`;
  const wday = today();
  let count = 0;
  if (db) {
    try {
      const row = await db
        .prepare('SELECT turns, window_date FROM ai_quota WHERE subject = ?1')
        .bind(subject)
        .first();
      count = row && row.window_date === wday ? row.turns || 0 : 0;
    } catch {
      /* D1 read failed — fail open (static, auth-gated content) */
    }
  }
  if (count >= cap) {
    const retryAt = new Date();
    retryAt.setUTCHours(24, 0, 0, 0);
    return jsonResponse(429, { error: 'rate_limited', retryAt: retryAt.toISOString() }, cors);
  }

  // 200 path
  let body;
  try {
    body = buildBody();
  } catch {
    return jsonResponse(500, { error: 'server_error' }, cors);
  }

  if (db) {
    try {
      // Upsert: +1 within the same UTC day, reset to 1 on a new day.
      await db
        .prepare(
          `INSERT INTO ai_quota (subject, turns, window_date) VALUES (?1, 1, ?2)
           ON CONFLICT(subject) DO UPDATE SET
             turns = CASE WHEN window_date = ?2 THEN turns + 1 ELSE 1 END,
             window_date = ?2`,
        )
        .bind(subject, wday)
        .run();
    } catch {
      /* counter best-effort */
    }
  }

  return jsonResponse(200, { ...body, etag }, { ETag: `"${etag}"`, ...cors });
}
