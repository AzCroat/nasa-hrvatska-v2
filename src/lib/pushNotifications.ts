// pushNotifications.ts — Web Push Notifications

import { localDateStr } from './dateUtils';
import { apiFetch } from './apiFetch';

// ── Notification timer tracking ───────────────────────────────────────────────
const _notifTimers = new Set<ReturnType<typeof setTimeout>>();

export function cancelAllNotificationTimers(): void {
  for (const id of _notifTimers) clearTimeout(id);
  _notifTimers.clear();
}

function _scheduleTimeout(fn: () => void, delayMs: number): ReturnType<typeof setTimeout> {
  const id = setTimeout(() => {
    _notifTimers.delete(id);
    fn();
  }, delayMs);
  _notifTimers.add(id);
  return id;
}

const NOTIF_KEY = 'nh_notifications_enabled';
const SUB_KEY = 'nh_push_subscription';

// Rotated 2026-08-14 by the vapid-provision.yml run: the original pair's
// private key never reached the Pages environment, so no push made under the
// old public key was ever deliverable. This is the public half of the pair
// whose private half lives ONLY as a Cloudflare Pages secret.
export const VAPID_PUBLIC_KEY =
  'BL_i_4eSRo6v-lyDOGINh6RwCu7eRH5smLbSYBQ-61CFR_tNmdL5Wd3Yok2KYQOwKOgOFZdbGUwkqDEV6IAgHsk';

function urlBase64ToUint8Array(b64: string): Uint8Array {
  const padding = '='.repeat((4 - (b64.length % 4)) % 4);
  const base64 = (b64 + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

export function isNotificationsEnabled(): boolean {
  try {
    return localStorage.getItem(NOTIF_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setNotificationsEnabled(val: boolean): void {
  try {
    localStorage.setItem(NOTIF_KEY, String(val));
  } catch {}
}

export async function requestNotificationPermission(): Promise<
  NotificationPermission | 'unsupported'
> {
  if (!('Notification' in window)) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  return Notification.requestPermission();
}

export async function initPushNotifications(): Promise<{ subscription: PushSubscription | null }> {
  try {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      return { subscription: null };
    }

    const registration = await navigator.serviceWorker.ready;

    let subscription = await registration.pushManager.getSubscription();

    // Key rotation (2026-08): the VAPID pair was re-provisioned server-side
    // (vapid-provision.yml) because the original private key never reached
    // production — no push made under the old public key was ever deliverable.
    // A subscription created with a different applicationServerKey can never
    // be signed by the current private key, so drop it and re-subscribe.
    // Browsers that don't expose options.applicationServerKey keep their
    // subscription untouched (we can't verify, and churning would re-subscribe
    // on every launch); the daily subscribeToPush refresh re-POSTs whatever
    // subscription this returns, so the server copy follows automatically.
    if (subscription) {
      const current = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
      const existingKey = subscription.options?.applicationServerKey;
      if (existingKey) {
        const existing = new Uint8Array(existingKey);
        const same =
          existing.length === current.length && existing.every((b, i) => b === current[i]);
        if (!same) {
          try {
            await subscription.unsubscribe();
          } catch {}
          subscription = null;
        }
      }
    }

    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY).buffer as ArrayBuffer,
      });
    }

    try {
      localStorage.setItem(SUB_KEY, JSON.stringify(subscription.toJSON()));
    } catch {}

    if ('periodicSync' in registration) {
      try {
        // @ts-expect-error — Periodic Background Sync API not yet in TS DOM lib
        await registration.periodicSync.register('nh-daily-reminder', {
          minInterval: 24 * 60 * 60 * 1000,
        });
      } catch (_) {}
    }

    scheduleReEngagementReminder();

    return { subscription };
  } catch (e: unknown) {
    console.warn('Push notifications not available:', (e as Error).message);
    return { subscription: null };
  }
}

export function getPushSubscription(): unknown {
  try {
    const raw = localStorage.getItem(SUB_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

interface GoalMessage {
  title: string;
  body: string;
}

const GOAL_MESSAGES: Record<string, GoalMessage[]> = {
  heritage: [
    { title: '🇭🇷 Your heritage is calling!', body: 'Take 5 minutes to honor your roots today.' },
    {
      title: 'Tvoji preci bi bili ponosni',
      body: 'Practice today — your ancestors would be proud!',
    },
    { title: 'Connect with your roots', body: '5 minutes of Croatian keeps your heritage alive.' },
  ],
  family: [
    { title: '👨‍👩‍👧 Your family is waiting!', body: 'Practice so they can hear you speak Croatian!' },
    {
      title: 'Practice for the people you love 💙',
      body: '5 minutes today brings you closer to them.',
    },
    { title: 'Impress them next time', body: "Keep going — they'll love hearing your Croatian!" },
  ],
  travel: [
    {
      title: '✈️ Croatia is closer than you think!',
      body: 'Practice today for an unforgettable trip!',
    },
    {
      title: 'Your trip will be unforgettable 🌊',
      body: 'Better Croatian = a better Croatia experience.',
    },
    { title: 'Order coffee like a local', body: 'Just 5 minutes! Jedna kava, molim. ☕' },
  ],
  culture: [
    {
      title: '🎵 Croatian culture awaits!',
      body: 'Practice today and dive deeper into the culture.',
    },
    {
      title: 'Music, food, language — dive in 🎭',
      body: '5 minutes keeps you connected to it all.',
    },
    {
      title: 'Immerse yourself in Croatian today!',
      body: 'Language is the key to culture. Keep going!',
    },
  ],
  fluent: [
    {
      title: '🗣️ Fluency is built one day at a time',
      body: "You're on the path — don't stop now!",
    },
    { title: "You're on the path", body: "Don't stop now — every day counts!" },
    {
      title: '5 minutes today = fluency tomorrow',
      body: 'One small session keeps the momentum alive.',
    },
  ],
};

const DEFAULT_MESSAGES: GoalMessage[] = [
  { title: "🔥 Don't break your streak!", body: 'Come practice and protect your streak.' },
  { title: '🇭🇷 Croatian practice time!', body: 'Just 5 minutes keeps your skills sharp.' },
  { title: '⚡ Keep it going!', body: 'Your Croatian skills are waiting for you.' },
];

function getGoalMessages(streakDays: number): GoalMessage {
  try {
    const goal = localStorage.getItem('nh_goal') || '';
    const pool = GOAL_MESSAGES[goal] || DEFAULT_MESSAGES;
    return pool[streakDays % pool.length]!;
  } catch {
    return DEFAULT_MESSAGES[0]!;
  }
}

export function scheduleLocalReminder(streakDays = 0): void {
  if (!isNotificationsEnabled()) return;
  if (Notification.permission !== 'granted') return;

  let lastPractice: string | null = null;
  try {
    lastPractice = localStorage.getItem('nh_last_practice_date');
  } catch {}
  const today = localDateStr();
  if (lastPractice === today) return;

  const now = new Date();
  const target = new Date();

  let lastHourRaw: string | null = null;
  try {
    lastHourRaw = localStorage.getItem('nh_last_practice_time');
  } catch {}
  const lastHour = lastHourRaw !== null ? parseInt(lastHourRaw, 10) : NaN;

  if (!isNaN(lastHour) && lastHour >= 6 && lastHour <= 22) {
    const beforeHour = lastHour > 0 ? lastHour - 1 : 0;
    const beforeMin = lastHour > 0 ? 30 : 0;
    target.setHours(beforeHour, beforeMin, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);
  } else {
    target.setHours(19, 0, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);
  }

  const msg = getGoalMessages(streakDays);

  _scheduleTimeout(() => {
    if (isNotificationsEnabled() && Notification.permission === 'granted') {
      new Notification(msg.title, {
        body: msg.body,
        icon: '/icon-192.png',
        tag: 'nh-daily-reminder',
        // @ts-expect-error — renotify is valid but missing from TS DOM lib
        renotify: true,
      });
    }
  }, target.getTime() - now.getTime());
}

function getGoalCTA(): string {
  let goal = '';
  try {
    goal = localStorage.getItem('nh_goal') || '';
  } catch {}
  const ctas: Record<string, string> = {
    heritage: ' Honor your roots — 5 minutes today! 🇭🇷',
    family: ' Do it for the people you love 💙',
    travel: " Your trip's success starts now ✈️",
    culture: ' Dive back into Croatian culture 🎭',
    fluent: " Fluency doesn't build itself — let's go! 🗣️",
  };
  return ctas[goal] || ' Open the app and get back on track!';
}

export function scheduleReEngagementReminder(): void {
  if (!isNotificationsEnabled()) return;
  if (Notification.permission !== 'granted') return;

  let sentRaw: string | null = null;
  try {
    sentRaw = localStorage.getItem('nh_reengagement_sent');
  } catch {}
  if (sentRaw) {
    const sentAt = parseInt(sentRaw, 10);
    if (Date.now() - sentAt < 48 * 60 * 60 * 1000) return;
  }

  let lastSeenRaw: string | null = null;
  try {
    // App.tsx writes the last-seen timestamp under 'lastSeen' (legacy key);
    // reading the never-written 'nh_last_seen' made this always bail out.
    lastSeenRaw = localStorage.getItem('lastSeen');
  } catch {}
  if (!lastSeenRaw) return;

  const lastSeen = parseInt(lastSeenRaw, 10);
  const diffMs = Date.now() - lastSeen;
  const threeDays = 3 * 24 * 60 * 60 * 1000;
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  const fourteenDays = 14 * 24 * 60 * 60 * 1000;

  if (diffMs < threeDays) return;

  let title = 'We miss you! 💙';
  let body = 'Your Croatian is waiting — just 5 minutes to get back on track.';
  body += getGoalCTA();

  if (diffMs >= fourteenDays) {
    title = 'Your progress is safe 🇭🇷';
    body =
      "It's been 2 weeks, but your Croatian is preserved and ready. " +
      'Come back today — a few minutes brings it all back.';
    body += getGoalCTA();
  } else if (diffMs >= sevenDays) {
    body += ' Pick up right where you left off today!';
  }

  try {
    localStorage.setItem('nh_reengagement_sent', String(Date.now()));
  } catch {}

  _scheduleTimeout(() => {
    if (isNotificationsEnabled() && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/icon-192.png',
        tag: 'nh-reengagement',
        // @ts-expect-error — renotify is valid but missing from TS DOM lib
        renotify: true,
      });
    }
  }, 5000);
}

const _REG_TS_KEY = 'nh_push_reg_ts';

/**
 * How often registerPushWithServer is allowed to talk to the server.
 *
 * This was 85 days, chosen to re-register just before the 90-day KV entry
 * expired — correct for keep-alive, and the reason the record survived at all.
 * But the same call is the ONLY thing that refreshes the streak and
 * last-practised date the scheduled worker sends reminders from, so those
 * values were allowed to sit frozen for nearly three months. The worker read
 * them as current: it stopped skipping learners who had practised, quoted a
 * streak from weeks earlier, and told daily users they had been away for
 * months.
 *
 * A day still serves the keep-alive purpose with enormous margin (one write per
 * active subscriber per day, against a 90-day expiry) and keeps the snapshot at
 * most a day stale, which is as fresh as a once-daily reminder can use.
 */
const _REG_REFRESH_MS = 24 * 60 * 60 * 1000;

/**
 * The user's real last-practice date as `YYYY-MM-DD` in THEIR calendar, or ''
 * if they have never practised on this device.
 *
 * Local, not UTC. Matching the worker's UTC `today` looks like the safe choice
 * and is the wrong one, because that comparison is the broken half. This app's
 * audience is largely the Americas, where a UTC day boundary falls in the
 * evening: someone in Los Angeles who practises at 10:00 Monday is stamped
 * Monday either way, but their 20:00 reminder fires at 04:00 UTC *Tuesday*, so
 * a UTC-vs-UTC comparison finds Monday ≠ Tuesday and tells them their streak is
 * at risk hours after they practised. The whole point of this field is to
 * prevent exactly that.
 *
 * So the date is the learner's own, and the worker resolves its side through
 * the IANA timezone it already stores for them. localDateStr is the project's
 * one helper for this (CLAUDE.md; localDayBoundary.test.ts enforces it).
 */
function lastPracticedLocalDate(): string {
  try {
    const ts = parseInt(localStorage.getItem('nh_last_practice') || '0', 10);
    if (!ts || Number.isNaN(ts)) return '';
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return '';
    return localDateStr(d);
  } catch {
    return '';
  }
}

export async function subscribeToPush(userId = ''): Promise<{ ok: boolean; reason?: string }> {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return { ok: false, reason: 'unsupported' };
  }

  const permission = await requestNotificationPermission();
  if (permission !== 'granted') return { ok: false, reason: permission };

  const { subscription } = await initPushNotifications();
  if (!subscription) return { ok: false, reason: 'subscription_failed' };

  // Include the reminder preference + IANA timezone. Without them, push-subscribe
  // defaulted reminderTime to null and (because it does a full KV overwrite)
  // clobbered any preference the user had set via registerPushWithServer — so the
  // scheduled worker fell back to sending every web user's daily reminder at 13:00
  // UTC regardless of the time chosen in Settings. This is the Settings "Enable"
  // path AND the ~daily useNotifications refresh, so the override reverted within a day.
  let reminderTime = '20:00';
  try {
    reminderTime = localStorage.getItem('nh_reminder_time') || '20:00';
  } catch {}
  let timeZone = '';
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {}

  try {
    const res = await apiFetch('/api/push-subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription: subscription.toJSON ? subscription.toJSON() : subscription,
        userId: String(userId || '').slice(0, 64),
        reminderTime,
        timeZone,
      }),
    });
    if (res.ok) {
      try {
        localStorage.setItem(_REG_TS_KEY, String(Date.now()));
      } catch {}
      return { ok: true };
    }
    return { ok: false, reason: `server_${res.status}` };
  } catch (e: unknown) {
    console.warn('[Push] subscribeToPush failed:', (e as Error).message);
    return { ok: false, reason: (e as Error).message };
  }
}

export async function sendTestPush(userId = ''): Promise<unknown> {
  if (!userId) {
    console.warn('[Push] sendTestPush: userId required');
    return { ok: false };
  }
  try {
    const res = await apiFetch('/api/push-send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        title: '🇭🇷 Test push — Naša Hrvatska',
        body: 'If you see this, Web Push is working! Bravo! 🎉',
        url: '/',
      }),
    });
    const data = await res.json().catch(() => ({}));
    console.warn('[Push] sendTestPush result:', data);
    return data;
  } catch (e: unknown) {
    console.warn('[Push] sendTestPush error:', (e as Error).message);
    return { ok: false, error: (e as Error).message };
  }
}

export async function registerPushWithServer({
  streak,
  name,
  force = false,
}: { streak?: number; name?: string; force?: boolean } = {}): Promise<{
  ok: boolean;
  cached?: boolean;
}> {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return { ok: false };
  if (Notification.permission !== 'granted') return { ok: false };

  // force=true bypasses the re-registration cache — used when the user changes
  // their reminder time so the server learns the new hour immediately.
  if (!force) {
    try {
      const ts = parseInt(localStorage.getItem(_REG_TS_KEY) || '0', 10);
      if (ts && Date.now() - ts < _REG_REFRESH_MS) return { ok: true, cached: true };
    } catch {}
  }

  const { subscription } = await initPushNotifications();
  if (!subscription) return { ok: false };

  // The scheduled worker sends each user's daily push at their chosen local
  // hour — it needs the preference and the IANA timezone to compute it.
  let reminderTime = '20:00';
  try {
    reminderTime = localStorage.getItem('nh_reminder_time') || '20:00';
  } catch {}
  let timeZone = '';
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {}

  try {
    const res = await apiFetch('/api/push-subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription: subscription.toJSON(),
        // Sent only when the caller actually supplied them. The defaults used to
        // be 0 and '', which meant every argument-less call — useNotifications'
        // fallback, and now the practice refresh below — overwrote a real stored
        // streak with zero and the user's name with blank. push-subscribe.js was
        // already written to preserve an omitted field; the client just never
        // omitted one.
        ...(typeof streak === 'number' ? { streak: Math.max(0, Math.floor(streak) || 0) } : {}),
        ...(typeof name === 'string' ? { name: name.slice(0, 50) } : {}),
        reminderTime,
        timeZone,
        // The date the worker actually decides on. Omitted rather than sent
        // empty when this device has no practice history, so the server keeps
        // whatever another device already recorded instead of overwriting it
        // with a blank.
        ...(lastPracticedLocalDate() ? { lastPracticed: lastPracticedLocalDate() } : {}),
      }),
    });
    if (res.ok) {
      try {
        localStorage.setItem(_REG_TS_KEY, String(Date.now()));
        localStorage.setItem(_PRACTICE_SYNCED_KEY, lastPracticedLocalDate());
      } catch {}
      return { ok: true };
    }
    return { ok: false };
  } catch (e: unknown) {
    console.warn('[Push] Server registration failed:', (e as Error).message);
    return { ok: false };
  }
}

const _PRACTICE_SYNCED_KEY = 'nh_push_practice_synced';

/**
 * Tell the server the user practised, on the day they practised.
 *
 * Registration runs when the app opens, so on its own it can only ever carry
 * YESTERDAY's practice date: the user opens the app, registers, and only then
 * completes a lesson. The evening reminder would still fire, because the date
 * the worker holds is one day behind the one it compares against — the skip
 * would be permanently a day late, which is the same as never working.
 *
 * So markPracticed() calls this, and it pushes at most one write per local day —
 * markPracticed fires on every lesson, drill and review completion, and this
 * must not become a request per exercise. force=true because that daily write
 * is the entire point and the ordinary refresh guard would swallow it.
 *
 * Fire-and-forget and silent by design: it is called from inside lesson
 * completion, where a throw would abandon the completion itself. A missed
 * reminder suppression is much the lesser loss.
 */
export function syncPracticeToPushServer(): void {
  try {
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    const practicedOn = lastPracticedLocalDate();
    if (!practicedOn) return;
    if (localStorage.getItem(_PRACTICE_SYNCED_KEY) === practicedOn) return;
    // Stamp before the request, not after: a failure must not turn into a retry
    // on every subsequent completion in the session. The next day's practice
    // reopens it, and the app-open refresh remains the backstop.
    localStorage.setItem(_PRACTICE_SYNCED_KEY, practicedOn);
    void registerPushWithServer({ force: true }).catch(() => {});
  } catch {
    /* never let reminder bookkeeping break a lesson completion */
  }
}
