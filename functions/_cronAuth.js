// functions/_cronAuth.js
//
// The credential the scheduled Worker presents to the Pages API, and the rule
// the Pages API uses to accept it. ONE module so the two halves cannot disagree
// about what a valid cron caller looks like.
//
// WHY THIS EXISTS (2026-08-25). CRON_SECRET was set by hand in two independent
// places — as a secret on the nasa-hrvatska-scheduler Worker, and as an env var
// on the nasa-hrvatska-v2 Pages project — with nothing keeping them equal.
// wrangler.toml described it as "Shared with scheduled worker above", which is a
// comment, not a mechanism. On 2026-08-23 they drifted, and for two days every
// single hourly run failed: 79 runs, 0 reminders sent, `unauthorized` on every
// attempt. The weekly Firestore backup goes through the same header and was
// failing silently alongside it.
//
// The fix is not "set it correctly again" — that leaves the same trap armed. CI
// now DERIVES a value from a credential it already holds and installs it on both
// sides of every deploy, so one process writes both and they cannot drift. The
// derivation mirrors calibration.yml's self-provisioned CALIBRATION_SECRET,
// which has worked unattended since 2026-08-16:
//
//   MANAGED_CRON_SECRET = HMAC-SHA256(CLOUDFLARE_API_TOKEN, MANAGED_CRON_LABEL)
//
// The label is public — it is the message, not the key — so it lives here in the
// open and .gitleaks.toml allowlists it. Rotating the Cloudflare token changes
// the derived value on BOTH sides at the next deploy, which is the point.
//
// The owner's hand-set CRON_SECRET is never touched and stays accepted, so this
// can never lock out a working configuration: it only ADDS a credential that
// maintains itself.

/**
 * The public label the derived secret is computed over. Exported so a test can
 * pin that CI derives from the same string this module documents — a mismatch
 * there would recreate the exact drift this file exists to end, and would look
 * identical to it from the outside.
 */
export const MANAGED_CRON_LABEL = 'nh-cron-v1';

/**
 * Constant-time comparison. Always walks the full length so a mismatch position
 * cannot be read off the timing.
 */
export function timingSafeEqual(a, b) {
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

/** The credentials an endpoint will accept, in no particular order. */
function acceptedSecrets(env) {
  return [env?.MANAGED_CRON_SECRET, env?.CRON_SECRET].filter(
    (s) => typeof s === 'string' && s.length > 0,
  );
}

/**
 * ENDPOINT SIDE — is this presented secret a valid cron credential?
 *
 * False when nothing is configured: an endpoint with no secret must reject
 * everyone, never accept everyone. An empty presented secret can never match,
 * because empty candidates are filtered out before comparison.
 *
 * Every candidate is compared even after a match is found — returning early on
 * the first hit would leak, through timing, which credential was used.
 */
export function isAuthorizedCron(presented, env) {
  const candidates = acceptedSecrets(env);
  let ok = false;
  for (const candidate of candidates) {
    if (timingSafeEqual(presented, candidate)) ok = true;
  }
  return ok;
}

/**
 * WORKER SIDE — which secret to present.
 *
 * The managed value wins when present. That ordering is what actually repairs a
 * drifted configuration: the Worker's hand-set CRON_SECRET is, by definition,
 * the value that stopped matching, so preferring it would preserve the outage.
 * Falling back to it keeps a deploy-free environment (a local `wrangler dev`, a
 * fork with no CI) working exactly as before.
 *
 * Returns '' when nothing is configured, which callers must treat as "do not
 * send" rather than as a secret.
 */
export function cronSecretFor(env) {
  for (const candidate of [env?.MANAGED_CRON_SECRET, env?.CRON_SECRET]) {
    if (typeof candidate === 'string' && candidate.length > 0) return candidate;
  }
  return '';
}
