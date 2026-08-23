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
// 4. Deployment is automatic: CI runs `wrangler deploy` for this Worker on every
//    push to master (see the "Deploy scheduled Worker" step in ci.yml). Deploy
//    by hand only for a rollback — `wrangler deploy` from the repo root, which
//    reads `main` from wrangler.toml and bundles this file's imports with it.
// ─────────────────────────────────────────────────────────────────────────────

import { PUSH_KV_TTL_SECONDS } from './_pushKvTtl.js';
import { classifyPushFailure, countPushFailure, summarizePushFailures } from './_pushFailure.js';
import { buildPushRunRecord, writePushRun } from './_pushRunLog.js';

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
      // Nothing to record into — KV IS the record. This is the one halt that
      // stays invisible, and /api/push-health reports it as 'no_runs'.
      console.warn('[Scheduled] PUSH_SUBSCRIPTIONS KV not configured — skipping');
      return;
    }
    if (!env.CRON_SECRET) {
      console.warn('[Scheduled] CRON_SECRET not configured — skipping');
      // Record the halt rather than returning silently: "misconfigured" and
      // "not running at all" need different fixes, and an absent record makes
      // them look identical.
      await writePushRun(
        env.PUSH_SUBSCRIPTIONS,
        buildPushRunRecord({
          at: cronTime,
          cron: event.cron,
          haltedReason: 'CRON_SECRET not configured',
        }),
      );
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
      expired = 0,
      // Subscription records actually read this run. Distinguishes "the cron
      // ran and there is nobody subscribed" from "the cron ran and skipped
      // everyone" — the first is a product fact, the second is a bug.
      scanned = 0;
    // Bounded failure-reason -> count for this run (functions/_pushFailure.js).
    // `failed` says how many; this says why, which is the difference between an
    // alert that names the fix and one that only names the symptom.
    const failures = {};

    // Per-user send-hour matching. The cron fires hourly; each subscriber is
    // due only during the hour that matches their chosen reminder time in
    // their own timezone. Legacy records without a stored preference keep the
    // historical behavior: one send at 13:00 UTC (8-9 AM US Eastern).
    // The subscriber's OWN calendar day, resolved through the IANA zone already
    // stored for them. `lastPracticed` and `lastNotified` are compared against
    // this rather than against the UTC date.
    //
    // Using UTC for both sides looked symmetrical and was wrong for most of this
    // app's audience. A UTC day boundary lands in the evening across the
    // Americas, and reminders are sent at the user's LOCAL hour — so a learner
    // in Los Angeles who practises at 10:00 Monday is compared, at their 20:00
    // reminder, against a UTC `today` that has already rolled to Tuesday. Monday
    // never equals Tuesday, the skip never fired, and they were told their
    // streak was at risk hours after practising. Same arithmetic let the
    // once-per-day guard lapse at the boundary.
    //
    // Records with no stored zone keep the UTC date, which is what they have
    // always been compared against.
    function localDayFor(record) {
      if (!record.timeZone) return today;
      try {
        // en-CA formats as YYYY-MM-DD, matching the stored shape exactly.
        return new Intl.DateTimeFormat('en-CA', {
          timeZone: record.timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(now);
      } catch {
        return today; // unknown zone — same fallback as the send-hour match
      }
    }

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
          // This namespace doubles as the KV fallback for the TTS audio cache,
          // budget/quota ledgers, backups and delivery markers — all keyed with
          // a `prefix:` colon convention. Subscription keys are sanitized UIDs
          // and the sanitizer STRIPS colons, so a colon in the name proves the
          // key is infrastructure. Skipping by NAME saves a get() per key —
          // and each get() is a subrequest, the budget this whole notification
          // pass lives on. Without this, a growing TTS cache could exhaust the
          // worker's subrequests before it ever reached a subscription.
          if (key.name.includes(':')) continue;
          const raw = await env.PUSH_SUBSCRIPTIONS.get(key.name, { type: 'json' });
          if (!raw?.subscription?.endpoint) continue;
          scanned++;

          const { subscription, streak, name, lastPracticed, lastNotified } = raw;

          // Not this user's chosen hour — try again on a later cron run.
          if (!isDueThisHour(raw)) {
            notDue++;
            continue;
          }

          // The subscriber's own calendar day — see localDayFor.
          const userToday = localDayFor(raw);

          // Skip if practiced today
          if (lastPracticed === userToday) {
            skipped++;
            continue;
          }

          // Skip if already notified today (guarantees max one push per local
          // day even though the cron now fires hourly)
          if (lastNotified === userToday) {
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

          // The push SERVICE's own status, when the relay got far enough to
          // have one. streak-push returns `ok: !expired`, so a push service
          // that rejected the message with a 400 or a 502 still comes back
          // `ok: true` — and this worker used to count that as a send. A
          // rejected message is not a delivered one; it is now classified and
          // counted as the failure it always was. Absent (an older relay, or a
          // response that never carried it) still counts as accepted, so this
          // cannot invent failures out of a missing field.
          const pushStatus = Number(data?.status);
          const accepted = !Number.isFinite(pushStatus) || (pushStatus >= 200 && pushStatus < 300);

          if (data.expired) {
            await env.PUSH_SUBSCRIPTIONS.delete(key.name).catch(() => {});
            expired++;
          } else if (res.ok && data.ok && accepted) {
            await env.PUSH_SUBSCRIPTIONS.put(
              key.name,
              JSON.stringify({
                ...raw,
                lastNotified: userToday,
              }),
              // KV does not carry an expiry across a put: omitting this made the
              // record immortal the first time a subscriber was ever pushed.
              // See functions/_pushKvTtl.js.
              { expirationTtl: PUSH_KV_TTL_SECONDS },
            ).catch(() => {});
            sent++;
          } else {
            failed++;
            // Classified, not logged-and-lost. The console line below goes to
            // the Cloudflare tail, which is ephemeral; the CODE goes into the
            // run record, which the daily sweep reads and names.
            const reason = classifyPushFailure({
              httpStatus: res.status,
              errorMessage: data?.error,
              pushStatus: data?.status,
            });
            countPushFailure(failures, reason);
            console.warn(
              `[Scheduled] Push failed for ${key.name}: status=${res.status} reason=${reason}`,
            );
          }
        } catch (e) {
          failed++;
          // No response at all: a timeout, a socket error, a DNS failure. The
          // message is NOT recorded — a fetch rejection routinely embeds the
          // URL it failed against, and that URL identifies a subscriber.
          countPushFailure(failures, classifyPushFailure({ httpStatus: null }));
          console.error(`[Scheduled] Error for ${key.name}:`, e.message);
        }
      }

      cursor = listResult.cursor;
    } while (cursor);

    const reasonSummary = summarizePushFailures(failures);
    console.warn(
      `[Scheduled] Complete — scanned: ${scanned}, sent: ${sent}, skipped: ${skipped}, notDue: ${notDue}, failed: ${failed}, expired: ${expired}${
        reasonSummary ? `, reasons: ${reasonSummary}` : ''
      }`,
    );

    // The heartbeat. Written on EVERY run — including runs where nobody was due
    // — because that is the whole point: an absent record then means the cron
    // did not fire, which no success marker can tell you. Written BEFORE the
    // backup block below so a slow backup can never cost us the heartbeat, and
    // fail-soft inside writePushRun so observability can never take a
    // learner's reminder down. Read by /api/push-health.
    await writePushRun(
      env.PUSH_SUBSCRIPTIONS,
      buildPushRunRecord({
        at: cronTime,
        cron: event.cron,
        sent,
        skipped,
        notDue,
        failed,
        expired,
        scanned,
        failures,
      }),
    );

    // ── Weekly Firestore backup (owner decision, 2026-08-10) ─────────────────
    // Fire during the whole Monday 03:00–05:59 UTC window, not one exact hour:
    // /api/backup-progress carries its own once-per-week latch, so extra calls
    // are cheap no-ops while a transient failure at 03:00 gets retried at
    // 04:00 and 05:00 instead of waiting a week. Failures only log — the
    // streak-push work above must never be affected.
    //
    // BOOTSTRAP: until one backup has EVER succeeded (bootstrap marker absent),
    // fire on every hourly tick regardless of day — so the very first snapshot
    // exists within an hour of deploy instead of waiting for next Monday, and
    // its success is immediately visible in /api/health's `backup` block.
    let backupDue = now.getUTCDay() === 1 && utcHour >= 3 && utcHour <= 5;
    if (!backupDue) {
      try {
        backupDue = !(await env.PUSH_SUBSCRIPTIONS.get('backup:bootstrap_done'));
      } catch {
        /* unreadable marker → stay with the weekly window only */
      }
    }
    if (backupDue) {
      try {
        const res = await fetch(`${PAGES_URL}/api/backup-progress`, {
          method: 'POST',
          headers: { 'x-cron-secret': env.CRON_SECRET },
          signal: AbortSignal.timeout(45000),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          console.warn(
            `[Scheduled] Weekly backup ${data.skipped ? 'already done' : 'completed'} (${data.week || '?'})`,
          );
          // Any ok answer (fresh run OR skip) proves the pipeline works —
          // close the bootstrap so off-window ticks stop calling.
          try {
            await env.PUSH_SUBSCRIPTIONS.put('backup:bootstrap_done', '1');
          } catch {}
        } else {
          console.error(`[Scheduled] Weekly backup failed: status=${res.status}`, data?.error);
        }
      } catch (e) {
        console.error('[Scheduled] Weekly backup error:', e?.message);
      }
    }
  },
};
