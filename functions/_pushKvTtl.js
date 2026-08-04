/**
 * How long a push subscription lives in KV without being touched.
 *
 * WHY THIS IS SHARED
 * ------------------
 * Two separately-deployed bundles write the same KV entry:
 *
 *   functions/api/push-subscribe.js  — a Pages Function, deployed on git push
 *   functions/scheduled.js           — a Worker, deployed only by `wrangler deploy`
 *
 * push-subscribe wrote with a 90-day expirationTtl. The scheduled worker, when
 * it stamped `lastNotified` after a successful send, re-put the record with NO
 * expirationTtl at all.
 *
 * Cloudflare KV does not carry an expiry across a put — a put without
 * expirationTtl replaces the value with one that never expires. So the first
 * push a subscriber ever received quietly converted their record from
 * self-reaping to immortal, and only the subscribers active enough to be pushed
 * were affected. Endpoints that return 410 are still deleted explicitly, but a
 * subscription that merely goes quiet — the browser profile that is never opened
 * again, the phone that is replaced — stayed in KV forever, and every hourly
 * cron listed and read it.
 *
 * Refreshing the TTL on each successful send is the intended semantic, not a
 * workaround: the expiry exists to reap subscriptions nobody is using, so it
 * should measure time since the record was last useful, not time since signup.
 */
export const PUSH_KV_TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days
