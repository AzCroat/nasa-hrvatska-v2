// functions/_pushFailure.js
//
// WHY A PUSH FAILED (2026-08-23).
//
// The heartbeat in _pushRunLog.js proved its worth on its first real outage:
// on 2026-08-23 the daily sweep went red with `all_failing` — every push
// attempt in the retained window rejected, none accepted. It could say THAT
// nothing was delivered. It could not say WHY, and neither could anything else:
//
//   - The worker's only account of a failure was one console.warn per attempt,
//     into the Cloudflare tail, which is ephemeral and which nobody reads.
//   - streak-push.js writes push:lastStatus only AFTER sendWebPush returns an
//     HTTP status. When the send THROWS — unconfigured VAPID keys, a signing
//     failure, an unparseable endpoint — that line never runs, so the markers
//     stay absent and look exactly like "never attempted".
//
// So a 100%-failing push service and a misconfigured secret produced the same
// recorded evidence. This module closes that: every failure is mapped to ONE
// bounded code, and the code is what gets stored and reported.
//
// WHY CODES AND NEVER MESSAGES. The obvious fix — store `e.message` — is the
// wrong one here. Those messages are not ours: a fetch rejection routinely
// embeds the URL it failed against, and a push endpoint IS a per-subscriber
// identifier. Writing raw messages into a 14-day KV history that an ops
// endpoint hands out would turn an operational counter into a subscriber
// leak. A closed vocabulary cannot leak: whatever the message says, only a
// code from PUSH_FAIL_REASONS is ever recorded.

/**
 * The closed vocabulary. Each code names something an operator can act on, and
 * the actions are genuinely different — which is the test for whether a code
 * deserves to exist rather than collapsing into its neighbour.
 */
export const PUSH_FAIL_REASONS = Object.freeze({
  /** Relay answered 401: the worker's CRON_SECRET does not match Pages'. */
  UNAUTHORIZED: 'unauthorized',
  /** Relay answered 403. NOT the same fix as 401: streak-push never returns
   *  403, so this is something in front of it — a WAF or bot rule catching
   *  /api, which this repo has had to unpick before (cf-skip-bot-on-api.yml). */
  RELAY_FORBIDDEN: 'relay_forbidden',
  /** Relay answered 400: malformed call — content-type, JSON, or no endpoint. */
  BAD_REQUEST: 'bad_request',
  /** Any other 4xx from the relay: a moved route, a rate limit, a proxy. */
  RELAY_REJECTED: 'relay_rejected',
  /** Relay threw: VAPID keys absent from the Pages env. A config fix. */
  VAPID_UNCONFIGURED: 'vapid_unconfigured',
  /** Relay threw: the stored subscription endpoint is not a URL. Bad record. */
  BAD_ENDPOINT: 'bad_endpoint',
  /** Relay threw inside VAPID signing — key import or ECDSA. A key-format fix. */
  SIGNING_FAILED: 'signing_failed',
  /** Relay threw for some other reason. Deliberately last-resort, not a bucket. */
  RELAY_ERROR: 'relay_error',
  /** Relay itself was unavailable (5xx that is not its own error envelope). */
  RELAY_UNAVAILABLE: 'relay_unavailable',
  /** The push service rejected the message: bad key, bad payload, quota. */
  PUSH_SERVICE_4XX: 'push_service_4xx',
  /** The push service is broken or throttling. Retry is the right response. */
  PUSH_SERVICE_5XX: 'push_service_5xx',
  /** The worker's own fetch never got an answer: timeout, DNS, socket. */
  TRANSPORT_ERROR: 'transport_error',
  /** Classification found nothing to go on. Should be rare; if it is not, the
   *  table above is missing a case and this code is how you find that out. */
  UNKNOWN: 'unknown',
});

const R = PUSH_FAIL_REASONS;

/** Every legal code, for validation and for tests that assert the set is closed. */
export const PUSH_FAIL_CODES = Object.freeze(Object.values(R));

/**
 * Thrown-message patterns, matched in order. These correspond one-to-one to the
 * `throw new Error(...)` sites in streak-push.js's sendWebPush; if a throw there
 * is reworded, the code here degrades to relay_error rather than misreporting,
 * and pushFailure.test.js pins the current wording so the drift is visible.
 */
const THROWN = [
  [/vapid keys? not configured/i, R.VAPID_UNCONFIGURED],
  [/invalid push subscription endpoint/i, R.BAD_ENDPOINT],
  [/importkey|pkcs8|ecdsa|namedcurve|unable to import|invalid key/i, R.SIGNING_FAILED],
];

/**
 * Map one failed attempt to a single code.
 *
 * @param {object} attempt
 * @param {number|null} attempt.httpStatus  status of the worker→relay response,
 *        or null/0 when the worker's own fetch never completed.
 * @param {string} [attempt.errorMessage]  the relay's `error` field. Used ONLY
 *        for pattern matching — never stored, never returned.
 * @param {number} [attempt.pushStatus]  the push SERVICE's status, when the
 *        relay got that far and reported it in its body.
 * @returns {string} one of PUSH_FAIL_CODES
 */
export function classifyPushFailure({ httpStatus, errorMessage, pushStatus } = {}) {
  // Checked FIRST and on its own: when the relay reached the push service, what
  // the push service said is the most specific fact available, and the relay's
  // own 200 says nothing about delivery.
  const push = Number(pushStatus);
  if (Number.isFinite(push) && push >= 400) {
    return push >= 500 ? R.PUSH_SERVICE_5XX : R.PUSH_SERVICE_4XX;
  }

  const status = Number(httpStatus);
  if (!Number.isFinite(status) || status === 0) return R.TRANSPORT_ERROR;

  if (status === 401) return R.UNAUTHORIZED;
  if (status === 403) return R.RELAY_FORBIDDEN;
  if (status === 400) return R.BAD_REQUEST;
  if (status > 400 && status < 500) return R.RELAY_REJECTED;

  if (status === 500) {
    const msg = String(errorMessage ?? '');
    for (const [pattern, code] of THROWN) {
      if (pattern.test(msg)) return code;
    }
    return R.RELAY_ERROR;
  }
  if (status > 500 && status < 600) return R.RELAY_UNAVAILABLE;

  return R.UNKNOWN;
}

/**
 * Fold one code into a counts map, in place. Unknown codes are coerced to
 * `unknown` rather than trusted, so nothing outside the vocabulary can reach
 * the stored record by a caller passing a string through.
 */
export function countPushFailure(counts, code) {
  const key = PUSH_FAIL_CODES.includes(code) ? code : R.UNKNOWN;
  counts[key] = (counts[key] || 0) + 1;
  return counts;
}

/**
 * Human-readable summary of a counts map, most frequent first: "unauthorized
 * x2, push_service_5xx x1". Ties break alphabetically so the string is stable
 * across runs — an alert whose text churns for no reason teaches the reader to
 * ignore it. Returns '' for an empty or absent map, which callers use to decide
 * whether there is anything to say at all.
 */
export function summarizePushFailures(counts) {
  const entries = Object.entries(counts || {}).filter(([, n]) => Number(n) > 0);
  if (entries.length === 0) return '';
  entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return entries.map(([code, n]) => `${code} x${n}`).join(', ');
}
