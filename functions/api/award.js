/**
 * POST /api/award — Server-side XP validation endpoint.
 *
 * Validates the activityType against ACTIVITY_XP_MAP and enforces a
 * 600 XP / 10-minute per-user velocity cap via Cloudflare KV.
 *
 * Returns { awarded, activityType } — the client writes awarded XP to
 * Firestore via the existing fbApplyDelta path. This Worker never writes
 * to Firestore directly (no service account needed).
 *
 * Error responses:
 *   401 { error: 'unauthorized' }     — missing/invalid Firebase token
 *   400 { error: 'invalid_activity_type' } — missing or non-string
 *   400 { error: 'invalid_xp' }       — non-integer, ≤ 0, or > 10000
 *   429 { error: 'rate_limited' }     — 60 req/min per IP exceeded
 */

import { ACTIVITY_XP_MAP } from './_activityXp.js';
import { claimXp } from './_xpVelocityStore.js';
import { checkRateLimit } from './_rateLimit.js';
import { getFirebaseUid } from './_verifyToken.js';
import { corsHeaders, isAllowedOrigin } from './_helpers.js';

const VALID_ACTIVITY_TYPES = new Set(Object.keys(ACTIVITY_XP_MAP).filter((k) => k !== 'default'));

// The velocity budget, the daily cap and the clamp itself live in
// `_xpVelocityStore.js`. They were declared here AND re-declared in
// `award-worker.test.js`; one definition, imported by both.

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get('origin') || '';
  const isDev = env.ENVIRONMENT !== 'production';

  if (origin && !isAllowedOrigin(origin, isDev)) {
    return new Response(JSON.stringify({ error: 'forbidden' }), {
      status: 403,
      headers: corsHeaders(origin),
    });
  }

  const allowed = await checkRateLimit(request, 60, env);
  if (!allowed) {
    return new Response(JSON.stringify({ error: 'rate_limited' }), {
      status: 429,
      headers: corsHeaders(origin),
    });
  }

  const FIREBASE_PROJECT_ID = env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || '';
  if (!FIREBASE_PROJECT_ID) {
    return new Response(JSON.stringify({ error: 'server_misconfigured' }), {
      status: 500,
      headers: corsHeaders(origin),
    });
  }

  const uid = await getFirebaseUid(request, FIREBASE_PROJECT_ID);
  if (!uid) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: corsHeaders(origin),
    });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }

  const { activityType, claimedXp } = body || {};

  if (typeof activityType !== 'string' || !activityType.trim()) {
    return new Response(JSON.stringify({ error: 'invalid_activity_type' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }
  if (!VALID_ACTIVITY_TYPES.has(activityType)) {
    return new Response(JSON.stringify({ error: 'invalid_activity_type' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }
  if (!Number.isInteger(claimedXp) || claimedXp <= 0 || claimedXp > 10000) {
    return new Response(JSON.stringify({ error: 'invalid_xp' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }

  const maxXp = ACTIVITY_XP_MAP[activityType] ?? ACTIVITY_XP_MAP.default;

  // ── Per-user velocity + daily cap ────────────────────────────────────────
  // D1 primary, KV fallback — see `_xpVelocityStore.js` for why this moved off
  // KV (it was the app's only unconditional per-request KV writer, at two
  // writes per award against a 1,000/day free-tier ceiling).
  const claim = await claimXp(env, uid, {
    capped: Math.min(claimedXp, maxXp),
    now: Date.now(),
    todayUTC: new Date().toISOString().slice(0, 10),
  });

  if (claim) {
    return new Response(JSON.stringify({ awarded: claim.awarded, activityType }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  }

  // NEITHER STORE ANSWERED, AND THIS USED TO BE SILENT. Falling through means
  // the velocity budget and the daily cap are not applied at all — only the
  // per-activity allowlist is. That is the right call (a learner must not lose
  // earned XP because a store is down) and it is NOT a quiet one: the previous
  // version logged nothing distinguishable, so a day with the caps disabled
  // looked exactly like a day with them working. `xp_caps_unavailable` is a
  // stable string to grep for in the Cloudflare tail.
  console.warn(`[award] xp_caps_unavailable — allowlist-only cap for ${activityType}`);
  const awarded = Math.min(claimedXp, maxXp);
  return new Response(JSON.stringify({ awarded, activityType }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}
