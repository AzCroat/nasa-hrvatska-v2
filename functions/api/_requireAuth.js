// functions/api/_requireAuth.js
import { getFirebaseUid } from './_verifyToken.js';
import { checkRateLimit } from './_rateLimit.js';
import { checkAIQuota } from './_aiQuota.js';
import { checkAndChargeBudget } from './_aiBudget.js';
import { isAllowedOrigin, corsHeaders } from './_helpers.js';

/**
 * Single auth+cost gate for ALL paid AI endpoints. Order matters (cheap rejects
 * first, money last):
 *   1. origin allow-list           → 403
 *   2. rate limit                  → 429
 *   3. FAIL-CLOSED config check    → 500  (missing FIREBASE_PROJECT_ID must NOT disable auth)
 *   4. unconditional auth          → 401  (no anonymous lane; every real user is signed in)
 *   5. daily quota                 → 429  (per-user ceiling)
 *   6. monthly budget              → 429  (GLOBAL spend governor — see _aiBudget.js)
 *
 * Returns { ok:true, uid, origin, isDev } on success, or { ok:false, response }.
 * AI is FREE for all signed-in users — the quota bounds each user, the budget
 * bounds the SUM. Clients treat `monthly_budget_exhausted` as "serve cached".
 */
export async function requireAuthedAI(context, { cost = 1, rateLimit = 20 } = {}) {
  const { request, env } = context;
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  const isDev = env.ENVIRONMENT === 'development';
  const headers = { 'Content-Type': 'application/json', ...corsHeaders(origin) };
  const fail = (status, error, extra) => ({
    ok: false,
    response: new Response(JSON.stringify({ error, ...extra }), { status, headers }),
  });

  if (!isAllowedOrigin(origin, isDev)) return fail(403, 'forbidden');

  const underLimit = await checkRateLimit(request, rateLimit, env);
  if (!underLimit) return fail(429, 'rate_limited');

  const projectId = env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || '';
  if (!projectId) return fail(500, 'server_misconfigured'); // fail-closed: never silently open

  const uid = await getFirebaseUid(request, projectId);
  if (!uid) return fail(401, 'unauthenticated');

  const quota = await checkAIQuota(request, env, uid, cost);
  if (!quota.allowed) {
    return fail(429, 'daily_quota_exceeded', {
      message: 'Daily AI limit reached. Resets at midnight UTC.',
      resetAt: quota.resetAt,
    });
  }

  // Last, after every per-request check has passed: charge this call's
  // worst-case cost against the global monthly ledger. Budget is the one
  // gate that speaks for ALL users at once.
  const budget = await checkAndChargeBudget(env, new URL(request.url).pathname);
  if (!budget.allowed) {
    return fail(429, 'monthly_budget_exhausted', {
      message: 'Monthly AI budget reached. Live generation resumes next month.',
      resetAt: budget.resetAt,
    });
  }

  return { ok: true, uid, origin, isDev };
}
