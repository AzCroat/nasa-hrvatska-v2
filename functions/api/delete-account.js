/**
 * POST /api/delete-account — irreversible, user-initiated erasure of ALL data
 * for the authenticated account. Runs server-side with Firebase Admin
 * credentials because the client cannot reach the pieces that matter for
 * GDPR / Google Play "delete my data":
 *   - users/{id} + its xpAudit and conversationMemory subcollections
 *     (rules deny the client both delete AND list on those subcollections)
 *   - profiles/{id}, srs/{id}
 *   - push-subscription record in KV
 *   - the Firebase Auth account itself
 *
 * Identity comes only from the verified ID token — never the request body — so
 * a caller can erase their OWN account and nothing else.
 *
 * Required env (Cloudflare dashboard): FIREBASE_SERVICE_ACCOUNT_JSON,
 * VITE_FIREBASE_PROJECT_ID (or FIREBASE_PROJECT_ID). PUSH_SUBSCRIPTIONS (KV)
 * for the ancillary purges.
 */

import { corsHeaders, isAllowedOrigin } from './_helpers.js';
import { checkRateLimit } from './_rateLimit.js';
import { getFirebaseClaims } from './_verifyToken.js';
import { getAdminAccessToken, emailToDocId } from './_firestoreAdmin.js';

const FS_BASE = (pid) =>
  `https://firestore.googleapis.com/v1/projects/${pid}/databases/(default)/documents`;

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

/** Delete every document in a subcollection (paginated). Returns count deleted. */
async function deleteSubcollection(pid, token, docId, sub, errors) {
  let deleted = 0;
  let pageToken = '';
  try {
    do {
      const listUrl =
        `${FS_BASE(pid)}/users/${encodeURIComponent(docId)}/${sub}?pageSize=300` +
        (pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '');
      const res = await fetch(listUrl, {
        headers: { Authorization: `Bearer ${token}` },
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) {
        // A 404 simply means the subcollection has never existed — not an error.
        if (res.status !== 404) errors.push(`${sub} list ${res.status}`);
        return deleted;
      }
      const data = await res.json();
      const docs = data.documents || [];
      for (const d of docs) {
        const delRes = await fetch(`https://firestore.googleapis.com/v1/${d.name}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
          signal: AbortSignal.timeout(10000),
        });
        if (delRes.ok) deleted++;
        else errors.push(`${sub} delete ${delRes.status}`);
      }
      pageToken = data.nextPageToken || '';
    } while (pageToken);
  } catch (e) {
    errors.push(`${sub}: ${e.message}`);
  }
  return deleted;
}

/** Delete a top-level document. Firestore treats deleting a missing doc as success. */
async function deleteDocument(pid, token, path, errors) {
  try {
    const res = await fetch(`${FS_BASE(pid)}/${path}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      errors.push(`${path} ${res.status}`);
      return false;
    }
    return true;
  } catch (e) {
    errors.push(`${path}: ${e.message}`);
    return false;
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  const isDev = env.ENVIRONMENT === 'development';

  if (!isAllowedOrigin(origin, isDev)) return json({ error: 'forbidden' }, 403, origin);

  // Modest rate limit — account deletion is rare; this only stops abuse.
  const underLimit = await checkRateLimit(request, 5, env);
  if (!underLimit) return json({ error: 'rate_limited' }, 429, origin);

  const PROJECT_ID = env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || '';
  const SA_JSON = env.FIREBASE_SERVICE_ACCOUNT_JSON || '';
  // Fail CLOSED: without admin credentials we cannot honestly delete the data,
  // so we must not report success. The client keeps the account and shows the error.
  if (!PROJECT_ID || !SA_JSON) return json({ error: 'server_misconfigured' }, 500, origin);

  const claims = await getFirebaseClaims(request, PROJECT_ID);
  if (!claims || !claims.uid) return json({ error: 'unauthenticated' }, 401, origin);

  const { uid, email } = claims;
  // Firestore docs are email-derived app-wide; fall back to uid if the token
  // carries no email claim (should not happen for email/Google sign-ins).
  const docId = email ? emailToDocId(email) : emailToDocId(uid);

  let token;
  try {
    token = await getAdminAccessToken(
      SA_JSON,
      'https://www.googleapis.com/auth/datastore https://www.googleapis.com/auth/identitytoolkit',
    );
  } catch (e) {
    return json({ error: 'admin_token_failed', detail: e.message.slice(0, 120) }, 500, origin);
  }

  const errors = [];

  // 1. Subcollections first (deleting the parent does not cascade).
  await deleteSubcollection(PROJECT_ID, token, docId, 'xpAudit', errors);
  await deleteSubcollection(PROJECT_ID, token, docId, 'conversationMemory', errors);

  // 2. The three PII documents. These determine compliance success.
  const usersOk = await deleteDocument(PROJECT_ID, token, `users/${docId}`, errors);
  const profilesOk = await deleteDocument(PROJECT_ID, token, `profiles/${docId}`, errors);
  await deleteDocument(PROJECT_ID, token, `srs/${docId}`, errors);

  // 3. Ancillary KV — best effort, never blocks the erasure result.
  const kv = env.PUSH_SUBSCRIPTIONS || null;
  if (kv) {
    // Push subscription key is uid-derived (push-subscribe.js); try both forms.
    const sanitize = (s) =>
      String(s)
        .replace(/[^a-zA-Z0-9_-]/g, '_')
        .slice(0, 64);
    const pushKeys = new Set([sanitize(uid)]);
    if (email) pushKeys.add(sanitize(email));
    for (const k of pushKeys) {
      try {
        await kv.delete(k);
      } catch (e) {
        errors.push(`kv push ${e.message}`);
      }
    }
  }

  // (Study Clan removed — no NH_CLANS roster cleanup needed.)

  // 4. The Firebase Auth account itself (Identity Toolkit admin batchDelete).
  let authDeleted = false;
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/projects/${PROJECT_ID}/accounts:batchDelete`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ localIds: [uid], force: true }),
        signal: AbortSignal.timeout(12000),
      },
    );
    if (res.ok) {
      const out = await res.json().catch(() => ({}));
      // batchDelete returns { errors: [...] } listing per-id failures (empty = success).
      authDeleted = !out.errors || out.errors.length === 0;
      if (!authDeleted) errors.push('auth batchDelete reported errors');
    } else {
      errors.push(`auth ${res.status}`);
    }
  } catch (e) {
    errors.push(`auth ${e.message}`);
  }

  // Compliance is satisfied when the PII documents are gone. Auth deletion is
  // reported so the client can fall back to client-side deleteUser if needed.
  const ok = usersOk && profilesOk;
  return json({ ok, authDeleted, errors: errors.slice(0, 20) }, ok ? 200 : 500, origin);
}
