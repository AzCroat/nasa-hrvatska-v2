// functions/api/push-subscribe.js
// Registers a browser push subscription in Cloudflare KV.
// Called from the client when the user grants push notification permission.
// The subscription is read later by the scheduled worker (functions/scheduled.js).

import { checkRateLimit } from './_rateLimit.js';
import { getFirebaseUid } from './_verifyToken.js';
import { PUSH_KV_TTL_SECONDS } from '../_pushKvTtl.js';

function isAllowedOrigin(origin, isDev) {
  // Empty origin: PWA standalone mode (iOS/Android) and Capacitor. Auth is enforced via Firebase token.
  if (!origin) return true;
  try {
    const h = new URL(origin).hostname;
    if (isDev && h === 'localhost') return true;
    return (
      h === 'nasahrvatska.com' ||
      h.endsWith('.nasahrvatska.com') ||
      h === 'nasa-hrvatska-v2.pages.dev' ||
      h.endsWith('.nasa-hrvatska-v2.pages.dev')
    );
  } catch {
    return false;
  }
}

function corsHeaders(origin) {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin || 'https://nasahrvatska.com',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-cache',
  };
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('origin') || '';
  const isDev = env.ENVIRONMENT !== 'production';

  if (!isAllowedOrigin(origin, isDev)) {
    return new Response(JSON.stringify({ error: 'forbidden' }), {
      status: 403,
      headers: corsHeaders(origin),
    });
  }

  const allowed = await checkRateLimit(request, 10, env); // 10/min — subscribe is rare
  if (!allowed) {
    return new Response(JSON.stringify({ error: 'rate_limit' }), {
      status: 429,
      headers: corsHeaders(origin),
    });
  }

  // Require Firebase auth — reject if misconfigured (never allow anonymous subscriptions)
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

  if (!env.PUSH_SUBSCRIPTIONS) {
    // KV not configured — push is optional, return success with warning
    return new Response(JSON.stringify({ ok: true, warning: 'push_not_configured' }), {
      status: 200,
      headers: corsHeaders(origin),
    });
  }

  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'invalid_content_type' }), {
      status: 400,
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

  const { subscription, reminderTime = '', timeZone = '' } = body;
  // streak/name are OPTIONAL in the request. subscribeToPush() (the Settings
  // "Enable" path) omits them, while registerPushWithServer() (the daily refresh)
  // sends the real values. Because this handler does a full KV overwrite, treating
  // an omitted field as 0/'' clobbered a previously-stored streak/name — and since
  // both callers stamp the shared _REG_TS_KEY throttle, the correct value wasn't
  // rewritten for up to 85 days, so streak-reminder pushes read "0-day streak".
  // Only overwrite streak/name when the request actually carries them.
  const hasStreak = Object.prototype.hasOwnProperty.call(body, 'streak');
  const hasName = Object.prototype.hasOwnProperty.call(body, 'name');
  const hasLastPracticed = Object.prototype.hasOwnProperty.call(body, 'lastPracticed');
  if (!subscription?.endpoint) {
    return new Response(JSON.stringify({ error: 'Missing subscription' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }

  // Sanitize subscription endpoint — must parse AND come from a known push service
  let endpointUrl;
  try {
    endpointUrl = new URL(subscription.endpoint);
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid endpoint URL' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }
  const ALLOWED_PUSH_DOMAINS = [
    'fcm.googleapis.com',
    'notify.windows.com',
    'push.services.mozilla.com',
    'updates.push.services.mozilla.com',
    'web.push.apple.com',
  ];
  const domainAllowed = ALLOWED_PUSH_DOMAINS.some(
    (d) => endpointUrl.hostname === d || endpointUrl.hostname.endsWith('.' + d),
  );
  if (!domainAllowed) {
    return new Response(JSON.stringify({ error: 'Invalid push service' }), {
      status: 400,
      headers: corsHeaders(origin),
    });
  }

  // Per-user reminder scheduling: the scheduled worker (functions/scheduled.js,
  // hourly cron) sends each user's daily push at their chosen local hour.
  // Invalid or absent values are stored as null → worker falls back to the
  // legacy fixed 13:00 UTC send.
  let safeReminderTime = null;
  if (typeof reminderTime === 'string' && /^([01]?\d|2[0-3]):[0-5]\d$/.test(reminderTime)) {
    safeReminderTime = reminderTime;
  }
  let safeTimeZone = null;
  if (typeof timeZone === 'string' && timeZone.length > 0 && timeZone.length <= 64) {
    try {
      // Throws on unknown IANA zone names — rejects garbage input.
      new Intl.DateTimeFormat('en', { timeZone });
      safeTimeZone = timeZone;
    } catch {
      safeTimeZone = null;
    }
  }

  const kvKey = (uid || 'anon').replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 64);
  // The subscriber's own calendar day, resolved through the timezone this very
  // request carries. `lastPracticed` arrives as a LOCAL date (the worker
  // compares it in the user's zone too — see functions/scheduled.js), so
  // defaulting or bounds-checking it against a UTC day would be off by one for
  // everyone whose offset has already crossed midnight.
  const today = (() => {
    if (!safeTimeZone) return new Date().toISOString().slice(0, 10);
    try {
      // en-CA formats as YYYY-MM-DD, matching the stored shape.
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: safeTimeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date());
    } catch {
      return new Date().toISOString().slice(0, 10);
    }
  })();

  // Read the current entry so a request that omits streak/name preserves the
  // stored value instead of zeroing it (see the hasStreak/hasName note above).
  let existing = null;
  try {
    const rawExisting = await env.PUSH_SUBSCRIPTIONS.get(kvKey);
    if (rawExisting) existing = JSON.parse(rawExisting);
  } catch {
    existing = null; // unreadable/corrupt entry — treat as a fresh subscription
  }
  const storedStreak = hasStreak
    ? Math.max(0, Math.floor(Number(body.streak) || 0))
    : Math.max(0, Math.floor(Number(existing?.streak) || 0));
  const storedName = hasName
    ? String(body.name || '').slice(0, 50)
    : String(existing?.name || '').slice(0, 50);

  // `lastPracticed` is the field the scheduled worker uses to decide whether to
  // send at all ("skip if practiced today") and how many days of absence to
  // claim in the win-back copy. It used to be stamped `today` here on every
  // write, by the server, from nothing but the fact that a registration
  // arrived — a snapshot the worker then read as if it were live.
  //
  // It was not live. registerPushWithServer is throttled client-side, so after
  // the subscribe day the stored date simply froze. `lastPracticed === today`
  // was false from then on, so the skip never fired again and learners who
  // practised every single day still got "your streak is at risk" that night;
  // `daysSince` meanwhile counted up from the frozen date and told them they
  // had been gone for weeks.
  //
  // The client knows the real answer — markPracticed() stamps nh_last_practice
  // at every lesson and practice completion — so it now sends it, in UTC to
  // match the worker's own `today`. An absent field preserves what is stored
  // rather than re-stamping today, and only a genuinely new subscription falls
  // back to today (which is the original intent: don't notify on signup day).
  let storedLastPracticed = existing?.lastPracticed ?? today;
  if (hasLastPracticed) {
    const lp = body.lastPracticed;
    if (typeof lp === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(lp) && !Number.isNaN(Date.parse(lp))) {
      // Never accept a future date: it would suppress reminders indefinitely.
      storedLastPracticed = lp > today ? today : lp;
    }
  }

  // Preserve the worker's own "already pushed today" guard. This was reset to
  // null on every registration, which was survivable only because registration
  // was rare; now that the client refreshes daily, wiping it would let a user
  // who opens the app after their reminder receive a second push the same day.
  const storedLastNotified =
    typeof existing?.lastNotified === 'string' ? existing.lastNotified : null;

  try {
    await env.PUSH_SUBSCRIPTIONS.put(
      kvKey,
      JSON.stringify({
        subscription,
        streak: storedStreak,
        name: storedName,
        reminderTime: safeReminderTime,
        timeZone: safeTimeZone,
        lastPracticed: storedLastPracticed,
        lastNotified: storedLastNotified,
        updatedAt: Date.now(),
      }),
      { expirationTtl: PUSH_KV_TTL_SECONDS },
    );
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: corsHeaders(origin),
    });
  } catch (e) {
    console.error('[push-subscribe] KV write error:', e.message);
    return new Response(JSON.stringify({ error: 'Storage error' }), {
      status: 500,
      headers: corsHeaders(origin),
    });
  }
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}
