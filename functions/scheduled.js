// functions/scheduled.js
// Cloudflare Scheduled Worker — hourly cron that sends each user's daily
// streak-reminder push at their chosen local hour (nh_reminder_time +
// timezone, registered via /api/push-subscribe). Users without a stored
// preference get the legacy fixed send at 13:00 UTC.
//
// ── Setup (one-time) ──────────────────────────────────────────────────────────
// 1. Create KV namespace:
//      wrangler kv:namespace create PUSH_SUBSCRIPTIONS
// 2. Add binding to wrangler.toml:
//      [[kv_namespaces]]
//      binding = "PUSH_SUBSCRIPTIONS"
//      id = "<namespace-id>"
// 3. Add env vars in Cloudflare dashboard:
//      CRON_SECRET    — any random secret string
//      VAPID_PRIVATE_KEY — from memory/project_nasa_hrvatska_vapid.md
//      VAPID_PUBLIC_KEY  — from same file
//      PAGES_URL      — https://nasahrvatska.com
// 4. Deploy this worker:
//      wrangler deploy functions/scheduled.js
// ─────────────────────────────────────────────────────────────────────────────

export default {
  // fetch handler is required even for scheduled-only workers
  async fetch(request, _env) {
    // Health check endpoint
    if (new URL(request.url).pathname === '/health') {
      return new Response(JSON.stringify({ ok: true, worker: 'nasa-hrvatska-scheduler' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response('Naša Hrvatska Scheduler', { status: 200 });
  },

  async scheduled(event, env, _ctx) {
    const cronTime = new Date(event.scheduledTime).toISOString();
    console.warn(`[Scheduled] Cron triggered: ${event.cron} at ${cronTime}`);

    if (!env.PUSH_SUBSCRIPTIONS) {
      console.warn('[Scheduled] PUSH_SUBSCRIPTIONS KV not configured — skipping');
      return;
    }
    if (!env.CRON_SECRET) {
      console.warn('[Scheduled] CRON_SECRET not configured — skipping');
      return;
    }

    const PAGES_URL = (env.PAGES_URL || 'https://nasahrvatska.com').replace(/\/$/, '');
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const utcHour = now.getUTCHours();
    let sent = 0,
      skipped = 0,
      notDue = 0,
      failed = 0,
      expired = 0;

    // Per-user send-hour matching. The cron fires hourly; each subscriber is
    // due only during the hour that matches their chosen reminder time in
    // their own timezone. Legacy records without a stored preference keep the
    // historical behavior: one send at 13:00 UTC (8-9 AM US Eastern).
    function isDueThisHour(record) {
      const targetHour =
        typeof record.reminderTime === 'string' &&
        /^([01]?\d|2[0-3]):[0-5]\d$/.test(record.reminderTime)
          ? parseInt(record.reminderTime, 10)
          : null;
      if (targetHour === null || !record.timeZone) {
        return utcHour === 13; // legacy fixed send hour
      }
      try {
        const localHour = parseInt(
          new Intl.DateTimeFormat('en-GB', {
            timeZone: record.timeZone,
            hour: 'numeric',
            hourCycle: 'h23',
          }).format(now),
          10,
        );
        return localHour === targetHour;
      } catch {
        return utcHour === 13; // unknown zone — fall back to legacy hour
      }
    }

    let cursor;
    do {
      let listResult;
      try {
        listResult = await env.PUSH_SUBSCRIPTIONS.list({ limit: 100, cursor });
      } catch (e) {
        console.error('[Scheduled] KV list error:', e.message);
        break;
      }

      for (const key of listResult.keys) {
        try {
          const raw = await env.PUSH_SUBSCRIPTIONS.get(key.name, { type: 'json' });
          if (!raw?.subscription?.endpoint) continue;

          const { subscription, streak, name, lastPracticed, lastNotified } = raw;

          // Not this user's chosen hour — try again on a later cron run.
          if (!isDueThisHour(raw)) {
            notDue++;
            continue;
          }

          // Skip if practiced today
          if (lastPracticed === today) {
            skipped++;
            continue;
          }

          // Skip if already notified today (guarantees max one push per UTC day
          // even though the cron now fires hourly)
          if (lastNotified === today) {
            skipped++;
            continue;
          }

          // Calculate how many days since last practice session (for win-back messaging)
          const daysSince = lastPracticed
            ? Math.round((Date.now() - new Date(lastPracticed).getTime()) / 86400000)
            : 0;

          const res = await fetch(`${PAGES_URL}/api/streak-push`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-cron-secret': env.CRON_SECRET,
            },
            body: JSON.stringify({
              subscription,
              streak: streak || 0,
              name: name || '',
              daysSince: daysSince || 0,
            }),
            signal: AbortSignal.timeout(15000),
          });

          const data = await res.json().catch(() => ({}));

          if (data.expired) {
            await env.PUSH_SUBSCRIPTIONS.delete(key.name).catch(() => {});
            expired++;
          } else if (res.ok && data.ok) {
            await env.PUSH_SUBSCRIPTIONS.put(
              key.name,
              JSON.stringify({
                ...raw,
                lastNotified: today,
              }),
            ).catch(() => {});
            sent++;
          } else {
            failed++;
            console.warn(`[Scheduled] Push failed for ${key.name}: status=${res.status}`);
          }
        } catch (e) {
          failed++;
          console.error(`[Scheduled] Error for ${key.name}:`, e.message);
        }
      }

      cursor = listResult.cursor;
    } while (cursor);

    console.warn(
      `[Scheduled] Complete — sent: ${sent}, skipped: ${skipped}, notDue: ${notDue}, failed: ${failed}, expired: ${expired}`,
    );
  },
};
