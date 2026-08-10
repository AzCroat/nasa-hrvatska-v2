/**
 * pushReminderChain.test.ts — the streak reminder must know when you practised.
 *
 * TWO DEFECTS, ONE CHAIN
 * ----------------------
 * 1. A SNAPSHOT READ AS LIVE STATE. /api/push-subscribe stamped
 *    `lastPracticed: today` on every write, from nothing but the arrival of a
 *    registration. The scheduled worker then read that field as the answer to
 *    "has this person practised today?" and to "how many days have they been
 *    gone?". It was never live: registerPushWithServer was throttled to 85 days
 *    client-side, so after the subscribe day the date simply froze. The skip
 *    stopped firing, and learners who practised every single day were told that
 *    night that their streak was at risk — with a streak count from weeks
 *    earlier and a `daysSince` counting up toward three months.
 *
 * 2. A DROPPED TTL. push-subscribe wrote with a 90-day expiry; the worker, when
 *    it stamped `lastNotified` after a successful send, re-put the record with
 *    none. KV does not carry an expiry across a put, so the first push a
 *    subscriber received made their record immortal — and only the subscribers
 *    active enough to be pushed. Dead endpoints returning 410 are still deleted,
 *    but a subscription that merely goes quiet stayed forever, listed and read
 *    by every hourly cron.
 *
 * The endpoint and the worker are exercised directly against stub KV rather than
 * grepped, because every one of these is a behaviour — what gets stored, what is
 * preserved, what expiry accompanies the write.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';

vi.mock('../../functions/api/_rateLimit.js', () => ({ checkRateLimit: async () => true }));
vi.mock('../../functions/api/_verifyToken.js', () => ({ getFirebaseUid: async () => 'uid-123' }));

const { onRequestPost } = await import('../../functions/api/push-subscribe.js');
const scheduledWorker = (await import('../../functions/scheduled.js')).default;
const { PUSH_KV_TTL_SECONDS } = await import('../../functions/_pushKvTtl.js');

const TODAY = new Date().toISOString().slice(0, 10);
const ENDPOINT = 'https://fcm.googleapis.com/fcm/send/abc123';

/** Stub KV that records the options every put was given. */
function makeKv(seed: Record<string, unknown> = {}) {
  const store = new Map<string, string>();
  const puts: Array<{ key: string; value: unknown; options?: { expirationTtl?: number } }> = [];
  // These tests are about the PUSH chain. Pre-close the weekly-backup
  // bootstrap latch so the worker's backup trigger (backupProgress.test.js
  // owns that contract) never adds a fetch call to the assertions here.
  store.set('backup:bootstrap_done', '1');
  for (const [k, v] of Object.entries(seed)) store.set(k, JSON.stringify(v));
  return {
    store,
    puts,
    async get(key: string, opts?: { type?: string }) {
      const raw = store.get(key);
      if (raw === undefined) return null;
      return opts?.type === 'json' ? JSON.parse(raw) : raw;
    },
    async put(key: string, value: string, options?: { expirationTtl?: number }) {
      store.set(key, value);
      puts.push({ key, value: JSON.parse(value), options });
    },
    async delete(key: string) {
      store.delete(key);
    },
    async list() {
      return { keys: [...store.keys()].map((name) => ({ name })), cursor: undefined };
    },
  };
}

const KV_KEY = 'uid-123';

function subscribeRequest(body: Record<string, unknown>) {
  return new Request('https://nasahrvatska.com/api/push-subscribe', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://nasahrvatska.com' },
    body: JSON.stringify({ subscription: { endpoint: ENDPOINT }, ...body }),
  });
}

async function subscribe(kv: ReturnType<typeof makeKv>, body: Record<string, unknown> = {}) {
  const res = await onRequestPost({
    request: subscribeRequest(body),
    env: {
      ENVIRONMENT: 'production',
      FIREBASE_PROJECT_ID: 'proj',
      PUSH_SUBSCRIPTIONS: kv,
    },
  });
  expect(res.status).toBe(200);
  return JSON.parse(kv.store.get(KV_KEY)!);
}

describe('/api/push-subscribe records the practice date it is told, not the one it assumes', () => {
  it('stores a real last-practice date supplied by the client', () => {
    const kv = makeKv();
    return subscribe(kv, { lastPracticed: '2026-07-30' }).then((rec) => {
      expect(rec.lastPracticed).toBe('2026-07-30');
    });
  });

  it('preserves the stored date when the request omits it', async () => {
    // subscribeToPush (the Settings "Enable" path) sends no practice date. The
    // handler does a full overwrite, so an omitted field must fall back to the
    // stored value — re-stamping today here is the original bug.
    const kv = makeKv({
      [KV_KEY]: { subscription: { endpoint: ENDPOINT }, lastPracticed: '2026-07-30' },
    });
    const rec = await subscribe(kv, {});
    expect(rec.lastPracticed).toBe('2026-07-30');
  });

  it('falls back to today only for a genuinely new subscription', async () => {
    // Preserves the original intent: don't notify someone on the day they signed up.
    const rec = await subscribe(makeKv(), {});
    expect(rec.lastPracticed).toBe(TODAY);
  });

  it('refuses a future date, which would suppress reminders indefinitely', async () => {
    const rec = await subscribe(makeKv(), { lastPracticed: '2099-01-01' });
    expect(rec.lastPracticed).toBe(TODAY);
  });

  it('ignores malformed dates rather than storing them', async () => {
    for (const bad of ['not-a-date', '2026-13-45', '', 12345, null, {}]) {
      const kv = makeKv({
        [KV_KEY]: { subscription: { endpoint: ENDPOINT }, lastPracticed: '2026-07-30' },
      });
      const rec = await subscribe(kv, { lastPracticed: bad });
      expect(`${JSON.stringify(bad)} -> ${rec.lastPracticed}`).toBe(
        `${JSON.stringify(bad)} -> 2026-07-30`,
      );
    }
  });

  it('preserves lastNotified instead of nulling it', async () => {
    // This was reset to null on every registration. Survivable while
    // registration happened once per 85 days; now that the client refreshes
    // daily, wiping it lets someone who opens the app after their reminder get
    // a second push the same day.
    const kv = makeKv({
      [KV_KEY]: { subscription: { endpoint: ENDPOINT }, lastNotified: TODAY },
    });
    const rec = await subscribe(kv, {});
    expect(rec.lastNotified).toBe(TODAY);
  });

  it('still writes with the shared 90-day expiry', async () => {
    const kv = makeKv();
    await subscribe(kv, {});
    expect(kv.puts.at(-1)!.options?.expirationTtl).toBe(PUSH_KV_TTL_SECONDS);
  });

  it('still preserves streak and name when omitted (existing guarantee)', async () => {
    const kv = makeKv({
      [KV_KEY]: { subscription: { endpoint: ENDPOINT }, streak: 12, name: 'Ana' },
    });
    const rec = await subscribe(kv, {});
    expect(rec.streak).toBe(12);
    expect(rec.name).toBe('Ana');
  });
});

describe('the scheduled worker keeps the record mortal', () => {
  const env = (kv: ReturnType<typeof makeKv>) => ({
    PUSH_SUBSCRIPTIONS: kv,
    CRON_SECRET: 'secret',
    PAGES_URL: 'https://nasahrvatska.com',
  });

  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 })),
    );
  });

  /** A record due right now: legacy 13:00-UTC schedule, matched by faking the hour. */
  const dueRecord = {
    subscription: { endpoint: ENDPOINT },
    streak: 5,
    name: 'Ana',
    lastPracticed: '2026-01-01',
    lastNotified: null,
  };

  async function runCron(kv: ReturnType<typeof makeKv>) {
    // The legacy branch sends at 13:00 UTC; pin the clock there so the record is due.
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-08-04T13:30:00Z'));
    try {
      await scheduledWorker.scheduled(
        { cron: '0 * * * *', scheduledTime: Date.now() },
        env(kv),
        {} as never,
      );
    } finally {
      vi.useRealTimers();
    }
  }

  it('re-applies the expiry when stamping lastNotified', async () => {
    // The defect: this put carried no expirationTtl, and KV does not inherit one
    // — so the first successful push made the subscription permanent.
    const kv = makeKv({ [KV_KEY]: dueRecord });
    await runCron(kv);

    const put = kv.puts.at(-1)!;
    expect(put.options?.expirationTtl).toBe(PUSH_KV_TTL_SECONDS);
    expect((put.value as { lastNotified: string }).lastNotified).toBe('2026-08-04');
  });

  it('does not send to someone who practised today', async () => {
    const kv = makeKv({ [KV_KEY]: { ...dueRecord, lastPracticed: '2026-08-04' } });
    await runCron(kv);
    expect(fetch).not.toHaveBeenCalled();
    expect(kv.puts).toHaveLength(0);
  });

  it('does not send twice on the same day', async () => {
    const kv = makeKv({ [KV_KEY]: { ...dueRecord, lastNotified: '2026-08-04' } });
    await runCron(kv);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('compares in the subscriber’s calendar, not UTC — the western-evening case', async () => {
    // 2026-08-04T04:30Z is still Monday 2026-08-03, 21:30 in Los Angeles. A
    // learner who practised that Monday evening is NOT due a "streak at risk"
    // push, but a UTC comparison sees lastPracticed=2026-08-03 against
    // today=2026-08-04 and sends anyway. This is the whole reason the dates are
    // local: it is the ordinary case for most of this app's audience.
    const kv = makeKv({
      [KV_KEY]: {
        ...dueRecord,
        timeZone: 'America/Los_Angeles',
        reminderTime: '21:00',
        lastPracticed: '2026-08-03',
      },
    });
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-08-04T04:30:00Z'));
    try {
      await scheduledWorker.scheduled(
        { cron: '0 * * * *', scheduledTime: Date.now() },
        env(kv),
        {} as never,
      );
    } finally {
      vi.useRealTimers();
    }
    expect(fetch).not.toHaveBeenCalled();
  });
});

describe('the client sends the date rather than letting the server invent it', () => {
  const clientSrc = readFileSync('src/lib/pushNotifications.ts', 'utf8');
  const notifSrc = readFileSync('src/hooks/useNotifications.ts', 'utf8');

  it('derives lastPracticed from the real nh_last_practice stamp, in LOCAL time', () => {
    // Local, not UTC. Matching the worker's UTC date is the tempting choice and
    // the wrong one: reminders fire at the user's LOCAL hour, so for the
    // Americas — most of this audience — the UTC date has already rolled over
    // by the time the reminder is due, and a UTC-vs-UTC comparison never
    // matches. See localDayBoundary.test.ts, which enforces this project-wide.
    expect(clientSrc).toContain("localStorage.getItem('nh_last_practice')");
    expect(clientSrc).toMatch(/return localDateStr\(d\)/);
    expect(clientSrc).toMatch(/lastPracticed: lastPracticedLocalDate\(\)/);
  });

  it('the worker resolves its side of the comparison in the same calendar', () => {
    const workerSrc = readFileSync('functions/scheduled.js', 'utf8');
    expect(workerSrc).toContain('function localDayFor');
    expect(workerSrc).toMatch(/timeZone: record\.timeZone/);
    // Compared against the user's day, not the UTC one.
    expect(workerSrc).toContain('lastPracticed === userToday');
    expect(workerSrc).toContain('lastNotified === userToday');
  });

  it('refreshes daily, not once per 85 days', () => {
    // The old throttle outlived the data it was gating by two orders of magnitude.
    expect(clientSrc).not.toMatch(/85 \* 24 \* 60 \* 60 \* 1000/);
    expect(clientSrc).toMatch(/_REG_REFRESH_MS = 24 \* 60 \* 60 \* 1000/);
  });

  it('omits streak and name unless the caller supplied them', () => {
    // The defaults were 0 and '', so every argument-less call overwrote a real
    // stored streak with zero — the server was already written to preserve an
    // omitted field, the client just never omitted one.
    expect(clientSrc).toMatch(/typeof streak === 'number' \?/);
    expect(clientSrc).toMatch(/typeof name === 'string' \?/);
  });

  it('marks practice through to the server on the day it happens', () => {
    // Registration runs at app open, so on its own it can only ever carry
    // yesterday's date — the skip would be permanently one day late.
    expect(clientSrc).toContain('export function syncPracticeToPushServer');
    // The CALL, not the name: the comment above it in useNotifications.ts names
    // the function too, and a `toContain('syncPracticeToPushServer')` was
    // satisfied by that prose alone — it passed with the call deleted.
    expect(notifSrc).toMatch(
      /\(\{ syncPracticeToPushServer \}\) =>\s*syncPracticeToPushServer\(\)/,
    );
    // One write per UTC day, not one per completed exercise.
    expect(clientSrc).toContain('_PRACTICE_SYNCED_KEY');
    expect(clientSrc).toMatch(/registerPushWithServer\(\{ force: true \}\)/);
  });
});
