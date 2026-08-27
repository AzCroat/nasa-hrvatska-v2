// src/tests/pushPrune.test.ts
//
// PRUNING PERMANENTLY-REFUSED PUSH SUBSCRIPTIONS (2026-08-27).
//
// THE FINDING: the 2026-08-27 sweep reported "2 sent / 2 failed" over 48 hours
// with `push_service_4xx` x2 and only two subscribers — one healthy, one
// returning 403 on every single attempt. A 403 means the push service refused
// the VAPID signature for that endpoint, which is what a subscription created
// under an OLDER VAPID key looks like forever after a key rotation (this app
// rotated on 2026-08-14). It can never succeed again.
//
// 404 and 410 were already handled: streak-push reports them as `expired` and
// the worker deletes on the spot. 403 had no handling at all, so it failed daily
// and — because a failure that never resolves also never ages out of the 48h
// judgement window — it would eventually push the failure ratio past the alert
// threshold and turn a dead subscription into a red alert nobody could act on.
//
// THE DANGER, and the reason this is not a one-line fix: a globally broken VAPID
// configuration produces the SAME 403 on every subscription at once. Deleting on
// that signal alone would wipe the entire subscriber base in response to a fault
// a redeploy would have fixed — trading a recoverable outage for an
// unrecoverable one. So a 403 is only actioned when at least one OTHER send
// succeeded in the same run, which is positive proof the keys are good.
//
// These run the REAL scheduled handler against a stub relay. A grep-style test
// would pass on a prune that was computed and never performed.

import { describe, it, expect, beforeEach, vi } from 'vitest';

const scheduledWorker = (await import('../../functions/scheduled.js')).default;
const { isVapidRejectedStatus } = await import('../../functions/_pushFailure.js');

const HEALTHY = 'https://fcm.googleapis.com/fcm/send/healthy';
const REFUSED = 'https://fcm.googleapis.com/fcm/send/refused';

/** Stub KV that records deletes as well as puts. */
function makeKv(seed: Record<string, unknown> = {}) {
  const store = new Map<string, string>();
  const deletes: string[] = [];
  const puts: Array<{ key: string; value: unknown }> = [];
  // Pre-close the weekly-backup latch: backupProgress.test.js owns that
  // contract and an extra fetch here would confuse the relay stub.
  store.set('backup:bootstrap_done', '1');
  for (const [k, v] of Object.entries(seed)) store.set(k, JSON.stringify(v));
  return {
    store,
    deletes,
    puts,
    async get(key: string, opts?: { type?: string }) {
      const raw = store.get(key);
      if (raw === undefined) return null;
      return opts?.type === 'json' ? JSON.parse(raw) : raw;
    },
    async put(key: string, value: string) {
      store.set(key, value);
      puts.push({ key, value: JSON.parse(value) });
    },
    async delete(key: string) {
      store.delete(key);
      deletes.push(key);
    },
    async list() {
      return { keys: [...store.keys()].map((name) => ({ name })), cursor: undefined };
    },
  };
}

const due = (endpoint: string) => ({
  subscription: { endpoint },
  streak: 5,
  name: 'Ana',
  lastPracticed: '2026-01-01',
  lastNotified: null,
});

/**
 * One cron tick. `statusFor` maps a subscription endpoint to the push SERVICE
 * status the relay reports — the same shape /api/streak-push returns.
 */
async function runTick(kv: ReturnType<typeof makeKv>, statusFor: (endpoint: string) => number) {
  vi.stubGlobal(
    'fetch',
    vi.fn(async (_url: string, init: { body: string }) => {
      const { subscription } = JSON.parse(init.body);
      const status = statusFor(subscription.endpoint);
      const expired = status === 410 || status === 404;
      return new Response(JSON.stringify({ ok: !expired, expired, status }), { status: 200 });
    }),
  );
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(new Date('2026-08-04T13:30:00Z'));
  try {
    await scheduledWorker.scheduled(
      { cron: '0 * * * *', scheduledTime: Date.now() },
      { PUSH_SUBSCRIPTIONS: kv, CRON_SECRET: 'secret', PAGES_URL: 'https://nasahrvatska.com' },
      {} as never,
    );
  } finally {
    vi.useRealTimers();
  }
}

/** The heartbeat this run wrote. */
function heartbeat(kv: ReturnType<typeof makeKv>) {
  return kv.puts.filter((p) => p.key === 'push:run:last').at(-1)!.value as {
    sent: number;
    failed: number;
    expired: number;
    pruned?: number;
    failures?: Record<string, number>;
  };
}

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

describe('which statuses mean a subscription is permanently dead', () => {
  it('403 does — the VAPID signature was refused for that endpoint', () => {
    expect(isVapidRejectedStatus(403)).toBe(true);
  });

  it('404 and 410 do NOT go through this path — they are already `expired`', () => {
    // Handled by streak-push's `expired` flag and deleted inline. Duplicating
    // them here would double-count in the run record.
    expect(isVapidRejectedStatus(404)).toBe(false);
    expect(isVapidRejectedStatus(410)).toBe(false);
  });

  it('transient and our-fault statuses never mark a subscription dead', () => {
    // 400 is a malformed payload — our bug, the subscriber is fine.
    // 429 is rate limiting, transient by definition. 5xx is the push service
    // having a bad day. Deleting on any of these loses a real subscriber.
    for (const status of [400, 429, 500, 502, 503]) {
      expect(isVapidRejectedStatus(status), `status ${status}`).toBe(false);
    }
  });

  it('a missing or unparseable status is never treated as dead', () => {
    for (const status of [undefined, null, '', 'oops', NaN]) {
      expect(isVapidRejectedStatus(status as never)).toBe(false);
    }
  });
});

describe('a 403 subscription is pruned when another send proves the keys are good', () => {
  it('deletes the refused subscription and keeps the healthy one', async () => {
    const kv = makeKv({ good: due(HEALTHY), dead: due(REFUSED) });
    await runTick(kv, (e) => (e === REFUSED ? 403 : 201));

    expect(kv.deletes).toEqual(['dead']);
    expect(kv.store.has('good')).toBe(true);
    expect(kv.store.has('dead')).toBe(false);
  });

  it('records the prune in the heartbeat, so the sweep can see it happen', async () => {
    const kv = makeKv({ good: due(HEALTHY), dead: due(REFUSED) });
    await runTick(kv, (e) => (e === REFUSED ? 403 : 201));

    const run = heartbeat(kv);
    expect(run.sent).toBe(1);
    expect(run.failed).toBe(1);
    expect(run.pruned).toBe(1);
    // Still counted as a failure, not laundered into a success by being pruned.
    expect(run.failures).toEqual({ push_service_4xx: 1 });
  });

  it('omits `pruned` entirely when nothing was pruned', async () => {
    // Same rule as `failures`: absent means "nothing recorded", so a healthy
    // run's record stays byte-identical to a v2 one.
    const kv = makeKv({ good: due(HEALTHY) });
    await runTick(kv, () => 201);
    expect(heartbeat(kv)).not.toHaveProperty('pruned');
  });
});

describe('THE GUARD: a total VAPID failure must not delete the subscriber base', () => {
  it('prunes NOTHING when every send failed, even though all are 403', async () => {
    // Indistinguishable, per-subscription, from the dead-subscription case
    // above — which is exactly why the decision needs the whole run. A broken
    // VAPID config is fixed by a redeploy; a deleted subscriber base is not
    // recoverable at all.
    const kv = makeKv({ a: due(HEALTHY), b: due(REFUSED) });
    await runTick(kv, () => 403);

    expect(kv.deletes).toEqual([]);
    expect(kv.store.has('a')).toBe(true);
    expect(kv.store.has('b')).toBe(true);
  });

  it('still records the failures, so the held subscriptions are not invisible', async () => {
    const kv = makeKv({ a: due(HEALTHY), b: due(REFUSED) });
    await runTick(kv, () => 403);

    const run = heartbeat(kv);
    expect(run.sent).toBe(0);
    expect(run.failed).toBe(2);
    expect(run.failures).toEqual({ push_service_4xx: 2 });
    expect(run).not.toHaveProperty('pruned');
  });

  it('prunes on a LATER run once a send succeeds again', async () => {
    // The held case must not be permanent: when the fault clears and a real
    // send lands, the dead subscription is reconsidered with fresh evidence.
    const kv = makeKv({ good: due(HEALTHY), dead: due(REFUSED) });
    await runTick(kv, () => 403);
    expect(kv.deletes).toEqual([]);

    // `lastNotified` is only stamped on success, so both are still due.
    await runTick(kv, (e) => (e === REFUSED ? 403 : 201));
    expect(kv.deletes).toEqual(['dead']);
  });
});

describe('the unambiguous cases are unchanged', () => {
  it('410 Gone is still deleted immediately, without needing corroboration', async () => {
    // A single subscriber, no successful send in the run: the 403 path would
    // hold. `expired` must not be gated the same way — the push service has
    // stated the subscription is gone, which is not ambiguous.
    const kv = makeKv({ onlyone: due(REFUSED) });
    await runTick(kv, () => 410);

    expect(kv.deletes).toEqual(['onlyone']);
    expect(heartbeat(kv).expired).toBe(1);
  });
});
