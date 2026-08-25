// src/tests/pushHealth.test.js
//
// PUSH DELIVERY OBSERVABILITY pins (2026-08-22).
//
// The streak reminder is the one feature that fails where nobody is looking.
// The heartbeat in functions/_pushRunLog.js is what makes a dead cron a
// positive, machine-findable statement rather than an absence nobody notices.
// These tests pin the parts that would otherwise rot silently:
//
//   - the heartbeat is written on EVERY run, including runs where nobody was
//     due and runs that halted on config (an absent record must mean "the cron
//     did not fire", and nothing else);
//   - staleness is judged from the newest record, not from a success marker;
//   - a failure RATIO is only reported once there are enough attempts for it to
//     mean anything (a 1-of-2 failure is not a 50% outage);
//   - "every attempt failed" is caught regardless of sample size;
//   - the sweep is auth-gated and never leaks counts through /api/health.

import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  PUSH_RUN_SCHEMA,
  PUSH_RUN_LAST_KEY,
  PUSH_RUN_PREFIX,
  PUSH_RUN_TTL_SECONDS,
  PUSH_RUN_STALE_MINUTES,
  PUSH_FAIL_RATIO_LIMIT,
  PUSH_FAIL_MIN_ATTEMPTS,
  buildPushRunRecord,
  writePushRun,
  ageMinutes,
  assessPushRuns,
} from '../../functions/_pushRunLog.js';
import { onRequestPost as pushHealth } from '../../functions/api/push-health.js';
import scheduledWorker from '../../functions/scheduled.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const fnSrc = (rel) =>
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
  readFileSync(join(__dir, '../../functions', rel), 'utf8');

// A fixed clock for the PURE assessor, which takes `now` as an argument.
const NOW = Date.parse('2026-08-22T12:00:00.000Z');
const minutesAgo = (m) => new Date(NOW - m * 60000).toISOString();

// The ENDPOINT reads Date.now(), so its fixtures must be relative to the real
// clock. Mixing the two silently passes or fails depending on what time of day
// the suite runs — which is how this file's first draft got a false green.
const realMinutesAgo = (m) => new Date(Date.now() - m * 60000).toISOString();

/** Minimal in-memory KV double with the surface these modules use. */
function fakeKv(seed = {}) {
  const store = new Map(Object.entries(seed));
  return {
    store,
    puts: [],
    // Honours { type: 'json' } — the worker reads subscriptions that way, and a
    // double that ignores it silently returns a string, whose `.subscription`
    // is undefined, so every subscriber looks malformed and the run looks
    // empty. The fake has to be faithful or the test proves nothing.
    async get(key, opts) {
      if (!store.has(key)) return null;
      const raw = store.get(key);
      if (opts?.type === 'json') {
        try {
          return JSON.parse(raw);
        } catch {
          return null;
        }
      }
      return raw;
    },
    async put(key, value, opts) {
      this.puts.push({ key, value, opts });
      store.set(key, value);
    },
    async list({ prefix = '', cursor, limit = 1000 } = {}) {
      const all = [...store.keys()].filter((k) => k.startsWith(prefix)).sort();
      const start = cursor ? Number(cursor) : 0;
      const slice = all.slice(start, start + limit);
      const next = start + slice.length;
      return {
        keys: slice.map((name) => ({ name })),
        list_complete: next >= all.length,
        cursor: next >= all.length ? undefined : String(next),
      };
    },
  };
}

// ── The record ────────────────────────────────────────────────────────────────

describe('buildPushRunRecord', () => {
  it('carries the counters and a schema version', () => {
    const rec = buildPushRunRecord({
      at: minutesAgo(5),
      cron: '0 * * * *',
      sent: 3,
      skipped: 2,
      notDue: 40,
      failed: 1,
      expired: 1,
      scanned: 47,
    });
    expect(rec).toMatchObject({
      v: PUSH_RUN_SCHEMA,
      sent: 3,
      skipped: 2,
      notDue: 40,
      failed: 1,
      expired: 1,
      scanned: 47,
      cron: '0 * * * *',
    });
  });

  it('defaults every counter to zero so a quiet run is still a real record', () => {
    const rec = buildPushRunRecord({ at: minutesAgo(1) });
    expect(rec.sent).toBe(0);
    expect(rec.failed).toBe(0);
    expect(rec.scanned).toBe(0);
  });

  it('omits haltedReason entirely on a normal run', () => {
    expect('haltedReason' in buildPushRunRecord({ at: minutesAgo(1) })).toBe(false);
  });

  it('records a halt when one is given', () => {
    const rec = buildPushRunRecord({
      at: minutesAgo(1),
      haltedReason: 'CRON_SECRET not configured',
    });
    expect(rec.haltedReason).toBe('CRON_SECRET not configured');
  });

  it('carries failure reasons when there are any (2026-08-23)', () => {
    const rec = buildPushRunRecord({
      at: minutesAgo(1),
      failed: 3,
      failures: { unauthorized: 2, push_service_5xx: 1 },
    });
    expect(rec.failures).toEqual({ unauthorized: 2, push_service_5xx: 1 });
  });

  it('omits the failures key entirely on a run with none', () => {
    // A healthy run's record stays byte-identical to the v1 shape. An empty
    // object in every record would be 14 days of noise saying nothing.
    expect('failures' in buildPushRunRecord({ at: minutesAgo(1), sent: 4 })).toBe(false);
    expect('failures' in buildPushRunRecord({ at: minutesAgo(1), failures: {} })).toBe(false);
  });
});

describe('writePushRun', () => {
  it('writes both the last pointer and a TTLd history entry', async () => {
    const kv = fakeKv();
    const rec = buildPushRunRecord({ at: '2026-08-22T11:00:00.000Z', sent: 1 });
    await expect(writePushRun(kv, rec)).resolves.toBe(true);

    const last = kv.puts.find((p) => p.key === PUSH_RUN_LAST_KEY);
    const hist = kv.puts.find((p) => p.key.startsWith(PUSH_RUN_PREFIX));
    expect(JSON.parse(last.value)).toEqual(rec);
    expect(JSON.parse(hist.value)).toEqual(rec);
    expect(hist.opts.expirationTtl).toBe(PUSH_RUN_TTL_SECONDS);
  });

  it('keeps the last pointer UNexpiring — a stale-but-present pointer is the signal', async () => {
    const kv = fakeKv();
    await writePushRun(kv, buildPushRunRecord({ at: minutesAgo(1) }));
    const last = kv.puts.find((p) => p.key === PUSH_RUN_LAST_KEY);
    // If this expired, a long outage would erase the evidence of the outage.
    expect(last.opts).toBeUndefined();
  });

  it('never throws when KV is missing or failing — observability must not break sends', async () => {
    await expect(writePushRun(null, buildPushRunRecord({ at: minutesAgo(1) }))).resolves.toBe(
      false,
    );
    const brokenKv = {
      async put() {
        throw new Error('KV down');
      },
    };
    await expect(writePushRun(brokenKv, buildPushRunRecord({ at: minutesAgo(1) }))).resolves.toBe(
      false,
    );
  });
});

// ── The judgement ─────────────────────────────────────────────────────────────

describe('ageMinutes', () => {
  it('measures backwards from now', () => {
    expect(ageMinutes(minutesAgo(90), NOW)).toBe(90);
  });

  it('returns null for anything unparseable rather than a misleading number', () => {
    for (const bad of [null, undefined, '', 'yesterday', {}]) {
      expect(ageMinutes(bad, NOW)).toBeNull();
    }
  });

  it('never reports a negative age from clock skew', () => {
    expect(ageMinutes(new Date(NOW + 60000).toISOString(), NOW)).toBe(0);
  });
});

describe('assessPushRuns', () => {
  const healthy = (over = 6) =>
    Array.from({ length: over }, (_, i) =>
      buildPushRunRecord({ at: minutesAgo(i * 60), sent: 2, scanned: 30, notDue: 28 }),
    );

  it('is clean for a live cron with landing sends', () => {
    const out = assessPushRuns(healthy(), { now: NOW });
    expect(out.clean).toBe(true);
    expect(out.findings).toEqual([]);
    expect(out.window.sent).toBe(12);
    expect(out.ageMinutes).toBe(0);
  });

  it('is clean for a live cron on a night when NOBODY was due', () => {
    // The whole reason the heartbeat writes unconditionally: zero sends is a
    // normal night, not an outage, and must not cry wolf.
    const quiet = Array.from({ length: 5 }, (_, i) =>
      buildPushRunRecord({ at: minutesAgo(i * 60), scanned: 30, notDue: 30 }),
    );
    expect(assessPushRuns(quiet, { now: NOW }).clean).toBe(true);
  });

  it('flags a cron that has never reported at all', () => {
    const out = assessPushRuns([], { now: NOW });
    expect(out.clean).toBe(false);
    expect(out.findings[0].kind).toBe('no_runs');
    expect(out.lastRun).toBeNull();
  });

  it('flags a stale heartbeat as the cron not firing', () => {
    const old = [buildPushRunRecord({ at: minutesAgo(PUSH_RUN_STALE_MINUTES + 30), sent: 5 })];
    const out = assessPushRuns(old, { now: NOW });
    expect(out.clean).toBe(false);
    expect(out.findings.map((f) => f.kind)).toContain('stale');
    expect(out.findings.find((f) => f.kind === 'stale').detail).toMatch(/cron is not firing/);
  });

  it('tolerates two missed ticks before calling the cron dead', () => {
    // Cloudflare schedules are best-effort; one skipped tick is not an incident.
    const late = [buildPushRunRecord({ at: minutesAgo(PUSH_RUN_STALE_MINUTES - 10), sent: 1 })];
    expect(assessPushRuns(late, { now: NOW }).clean).toBe(true);
  });

  it('judges staleness from the NEWEST record, not the order it was given', () => {
    const jumbled = [
      buildPushRunRecord({ at: minutesAgo(900), sent: 1 }),
      buildPushRunRecord({ at: minutesAgo(10), sent: 1 }),
      buildPushRunRecord({ at: minutesAgo(400), sent: 1 }),
    ];
    const out = assessPushRuns(jumbled, { now: NOW });
    expect(out.ageMinutes).toBe(10);
    expect(out.clean).toBe(true);
  });

  it('surfaces a halted run', () => {
    const halted = [
      buildPushRunRecord({ at: minutesAgo(5), haltedReason: 'CRON_SECRET not configured' }),
    ];
    const out = assessPushRuns(halted, { now: NOW });
    expect(out.clean).toBe(false);
    expect(out.findings.map((f) => f.kind)).toContain('halted');
  });

  it('flags every-attempt-failed regardless of how few attempts there were', () => {
    const out = assessPushRuns([buildPushRunRecord({ at: minutesAgo(5), failed: 2 })], {
      now: NOW,
    });
    expect(out.clean).toBe(false);
    expect(out.findings.map((f) => f.kind)).toContain('all_failing');
  });

  it('names the reason in the all_failing finding, not just the count (2026-08-23)', () => {
    // The outage this was built for: the alert said every attempt failed and
    // stopped there, which is a symptom. The operator needs the cause in the
    // same line, because the alert is all they get.
    const out = assessPushRuns(
      [
        buildPushRunRecord({ at: minutesAgo(5), failed: 2, failures: { unauthorized: 2 } }),
        buildPushRunRecord({ at: minutesAgo(65), failed: 1, failures: { unauthorized: 1 } }),
      ],
      { now: NOW },
    );
    const finding = out.findings.find((f) => f.kind === 'all_failing');
    expect(finding.detail).toContain('unauthorized x3');
    expect(out.window.failures).toEqual({ unauthorized: 3 });
  });

  it('names reasons in the failure_rate finding too', () => {
    const out = assessPushRuns(
      [
        buildPushRunRecord({
          at: minutesAgo(5),
          sent: 4,
          failed: 6,
          failures: { push_service_5xx: 4, vapid_unconfigured: 2 },
        }),
      ],
      { now: NOW },
    );
    const finding = out.findings.find((f) => f.kind === 'failure_rate');
    expect(finding.detail).toContain('push_service_5xx x4, vapid_unconfigured x2');
  });

  it('says nothing about reasons when the history predates them', () => {
    // v1 records carry no `failures`. The finding must still fire on the counts
    // and must NOT append an empty or invented reason — during the fortnight
    // after a deploy, half the retained window looks exactly like this.
    const v1 = [{ v: 1, at: minutesAgo(5), sent: 0, failed: 2 }];
    const out = assessPushRuns(v1, { now: NOW });
    const finding = out.findings.find((f) => f.kind === 'all_failing');
    expect(finding).toBeTruthy();
    // The reason clause is appended after the base sentence; with no reasons
    // recorded the detail must end exactly where the base sentence ends.
    expect(finding.detail).toBe(
      'all 2 push attempt(s) in the retained window failed — not one was accepted',
    );
    expect(finding.detail).not.toMatch(/undefined|unknown|x\d/);
    expect(out.window.failures).toEqual({});
  });

  it('merges reasons across a window where only some runs carry them', () => {
    const mixed = [
      { v: 1, at: minutesAgo(5), sent: 0, failed: 1 },
      buildPushRunRecord({ at: minutesAgo(65), failed: 2, failures: { transport_error: 2 } }),
    ];
    const out = assessPushRuns(mixed, { now: NOW });
    expect(out.window.failed).toBe(3);
    expect(out.window.failures).toEqual({ transport_error: 2 });
    expect(out.findings.find((f) => f.kind === 'all_failing').detail).toContain(
      'transport_error x2',
    );
  });

  it('does NOT report a ratio on too few attempts — 1 of 2 is not a 50% outage', () => {
    const thin = [buildPushRunRecord({ at: minutesAgo(5), sent: 1, failed: 1 })];
    const out = assessPushRuns(thin, { now: NOW });
    expect(out.window.failureRatio).toBe(0.5);
    // Reported in the window for a human to read, but NOT raised as a finding:
    // crying wolf at this sample size trains the reader to ignore the report.
    expect(out.clean).toBe(true);
  });

  it('reports a ratio once there are enough attempts for it to mean something', () => {
    const noisy = [buildPushRunRecord({ at: minutesAgo(5), sent: 4, failed: 6 })];
    expect(noisy[0].sent + noisy[0].failed).toBeGreaterThanOrEqual(PUSH_FAIL_MIN_ATTEMPTS);
    const out = assessPushRuns(noisy, { now: NOW });
    expect(out.clean).toBe(false);
    const finding = out.findings.find((f) => f.kind === 'failure_rate');
    expect(finding.detail).toMatch(/6\/10/);
  });

  it('leaves an ordinary trickle of failures alone', () => {
    const ordinary = [buildPushRunRecord({ at: minutesAgo(5), sent: 40, failed: 2 })];
    const out = assessPushRuns(ordinary, { now: NOW });
    expect(out.window.failureRatio).toBeLessThan(PUSH_FAIL_RATIO_LIMIT);
    expect(out.clean).toBe(true);
  });

  it('does not count expired subscriptions as failures — that is normal attrition', () => {
    const churn = [buildPushRunRecord({ at: minutesAgo(5), sent: 10, expired: 9 })];
    const out = assessPushRuns(churn, { now: NOW });
    expect(out.window.expired).toBe(9);
    expect(out.clean).toBe(true);
  });

  it('ignores malformed records instead of throwing the whole sweep', () => {
    const messy = [null, {}, { at: 42 }, buildPushRunRecord({ at: minutesAgo(5), sent: 1 })];
    const out = assessPushRuns(messy, { now: NOW });
    expect(out.window.runs).toBe(1);
    expect(out.clean).toBe(true);
  });

  it('survives a non-array argument', () => {
    expect(assessPushRuns(undefined, { now: NOW }).findings[0].kind).toBe('no_runs');
  });
});

// ── The endpoint ──────────────────────────────────────────────────────────────

function req(secret) {
  return {
    request: { headers: { get: (h) => (h === 'x-cron-secret' ? secret : null) } },
  };
}

describe('/api/push-health', () => {
  it('503s when no secret is provisioned', async () => {
    const res = await pushHealth({ ...req('x'), env: {} });
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe('calibration_secret_missing');
  });

  it('401s on a wrong secret', async () => {
    const res = await pushHealth({ ...req('nope'), env: { CRON_SECRET: 'right', KV: fakeKv() } });
    expect(res.status).toBe(401);
  });

  it('accepts either CRON_SECRET or the self-provisioned CALIBRATION_SECRET', async () => {
    const kv = fakeKv();
    await writePushRun(kv, buildPushRunRecord({ at: new Date().toISOString(), sent: 1 }));
    for (const env of [
      { CRON_SECRET: 's', KV: kv },
      { CALIBRATION_SECRET: 's', KV: kv },
    ]) {
      expect((await pushHealth({ ...req('s'), env })).status).toBe(200);
    }
  });

  it('503s when the KV namespace is unbound rather than reporting a false all-clear', async () => {
    const res = await pushHealth({ ...req('s'), env: { CRON_SECRET: 's' } });
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe('kv_missing');
  });

  it('reports clean with the window and last run for a healthy cron', async () => {
    const kv = fakeKv();
    for (let i = 0; i < 3; i++) {
      await writePushRun(
        kv,
        buildPushRunRecord({ at: new Date(Date.now() - i * 3600_000).toISOString(), sent: 2 }),
      );
    }
    const res = await pushHealth({ ...req('s'), env: { CRON_SECRET: 's', KV: kv } });
    const body = await res.json();
    expect(body.clean).toBe(true);
    expect(body.window.runs).toBe(3);
    expect(body.window.sent).toBe(6);
    expect(body.staleAfterMinutes).toBe(PUSH_RUN_STALE_MINUTES);
    expect(body.lastRun.at).toBeTruthy();
  });

  it('reports the finding when the cron has gone quiet', async () => {
    const kv = fakeKv();
    await writePushRun(
      kv,
      buildPushRunRecord({ at: realMinutesAgo(PUSH_RUN_STALE_MINUTES + 120), sent: 1 }),
    );
    const res = await pushHealth({ ...req('s'), env: { CRON_SECRET: 's', KV: kv } });
    const body = await res.json();
    expect(body.clean).toBe(false);
    expect(body.findings.map((f) => f.kind)).toContain('stale');
  });

  it('trusts the last pointer for liveness when the history list lags behind it', async () => {
    // KV list is eventually consistent: a freshly written run can be missing
    // from a list that already reflects the put. Without the separate pointer
    // read, a just-recovered cron would still be reported as dead.
    const kv = fakeKv();
    await writePushRun(kv, buildPushRunRecord({ at: realMinutesAgo(600), sent: 1 }));
    kv.store.set(
      PUSH_RUN_LAST_KEY,
      JSON.stringify(buildPushRunRecord({ at: new Date().toISOString(), sent: 1 })),
    );
    const res = await pushHealth({ ...req('s'), env: { CRON_SECRET: 's', KV: kv } });
    const body = await res.json();
    expect(body.clean).toBe(true);
    expect(body.window.runs).toBe(2);
  });

  it('does not double-count the pointer when it matches a history entry', async () => {
    const kv = fakeKv();
    await writePushRun(kv, buildPushRunRecord({ at: new Date().toISOString(), sent: 5 }));
    const body = await (
      await pushHealth({ ...req('s'), env: { CRON_SECRET: 's', KV: kv } })
    ).json();
    expect(body.window.runs).toBe(1);
    expect(body.window.sent).toBe(5);
  });

  it('survives an unreadable history record', async () => {
    const kv = fakeKv();
    await writePushRun(kv, buildPushRunRecord({ at: new Date().toISOString(), sent: 1 }));
    kv.store.set(`${PUSH_RUN_PREFIX}2026-08-01T00:00:00.000Z`, '{not json');
    const body = await (
      await pushHealth({ ...req('s'), env: { CRON_SECRET: 's', KV: kv } })
    ).json();
    expect(body.clean).toBe(true);
  });
});

// ── Wiring pins (source-level) ────────────────────────────────────────────────

describe('the scheduled worker writes the heartbeat', () => {
  const worker = fnSrc('scheduled.js');

  it('imports the run log', () => {
    expect(worker).toContain("from './_pushRunLog.js'");
  });

  it('writes the run record after the scan loop', () => {
    const summaryIdx = worker.indexOf('[Scheduled] Complete');
    const writeIdx = worker.indexOf('writePushRun(', summaryIdx);
    expect(summaryIdx).toBeGreaterThan(-1);
    expect(writeIdx).toBeGreaterThan(summaryIdx);
  });

  it('writes the heartbeat BEFORE the weekly backup block', () => {
    // A slow or hanging backup must never cost us the heartbeat — that would
    // manufacture exactly the "cron is dead" alarm this is meant to detect.
    const writeIdx = worker.indexOf('writePushRun(', worker.indexOf('[Scheduled] Complete'));
    const backupIdx = worker.indexOf('Weekly Firestore backup');
    expect(writeIdx).toBeLessThan(backupIdx);
  });

  it('records a halt on a missing cron secret instead of returning silently', () => {
    expect(worker).toMatch(/haltedReason: 'no cron secret configured'/);
  });

  it('counts the subscriptions it actually read', () => {
    expect(worker).toContain('scanned++');
  });
});

// Behavioural, not source-text. A grep cannot express "unguarded": wrapping the
// write in `if (sent > 0)` keeps it in exactly the right place and still
// destroys the feature, because a night when nobody was due then looks
// identical to a dead cron — the one thing this exists to tell apart. So run
// the real handler and check what actually lands in KV.
describe('the worker heartbeat, run for real', () => {
  const cronEvent = { cron: '0 * * * *', scheduledTime: Date.now() };

  /** Env with a KV holding whatever subscription records are given. */
  function workerEnv(subs = {}) {
    const kv = fakeKv(subs);
    return {
      kv,
      env: {
        PUSH_SUBSCRIPTIONS: kv,
        CRON_SECRET: 'secret',
        PAGES_URL: 'https://example.invalid',
      },
    };
  }

  const lastRunIn = async (kv) => JSON.parse((await kv.get(PUSH_RUN_LAST_KEY)) || 'null');

  it('beats even when there are NO subscribers at all', async () => {
    const { kv, env } = workerEnv();
    // The backup bootstrap path fetches; keep it from touching the network.
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify({ ok: true, week: 'w' }), { status: 200 }));
    await scheduledWorker.scheduled(cronEvent, env, {});
    fetchSpy.mockRestore();

    const rec = await lastRunIn(kv);
    expect(rec, 'a run with no subscribers must still record a heartbeat').not.toBeNull();
    expect(rec.sent).toBe(0);
    expect(rec.scanned).toBe(0);
    expect(assessPushRuns([rec], { now: Date.now() }).clean).toBe(true);
  });

  it('beats on a quiet run where every subscriber was notDue', async () => {
    // A VALID hour that is deterministically not the current one.
    //
    // This used to say reminderTime '25:00' — "can never match a real local
    // hour, so nobody is ever due". It does not survive isDueThisHour: the
    // validity regex rejects 25, targetHour falls to null, and the record drops
    // into the LEGACY branch, which is due at 13:00 UTC. The test therefore
    // failed for one hour in every twenty-four, deploying or not, and was caught
    // only by happening to run at 13:00 (2026-08-25).
    //
    // An input chosen to be invalid tests the fallback, not the thing named in
    // the title. Pick a valid one twelve hours away instead.
    const notDueHour = String((new Date().getUTCHours() + 12) % 24).padStart(2, '0');
    const { kv, env } = workerEnv({
      user_a: JSON.stringify({
        subscription: { endpoint: 'https://push.example/a' },
        reminderTime: `${notDueHour}:00`,
        timeZone: 'UTC',
      }),
    });
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    await scheduledWorker.scheduled(cronEvent, env, {});
    fetchSpy.mockRestore();

    const rec = await lastRunIn(kv);
    expect(rec).not.toBeNull();
    expect(rec.sent).toBe(0);
    expect(rec.scanned).toBe(1); // it DID read the subscriber — it just wasn't due
    expect(assessPushRuns([rec], { now: Date.now() }).clean).toBe(true);
  });

  it('records a halt instead of vanishing when no cron secret is configured', async () => {
    const kv = fakeKv();
    await scheduledWorker.scheduled(cronEvent, { PUSH_SUBSCRIPTIONS: kv }, {});
    const rec = await lastRunIn(kv);
    // Matched on meaning rather than on one variable's name: either credential
    // being absent is the same halt, and the reader needs to be told which
    // condition fired, not which identifier spelled it.
    expect(rec.haltedReason).toMatch(/cron secret/i);
    const out = assessPushRuns([rec], { now: Date.now() });
    expect(out.clean).toBe(false);
    expect(out.findings.map((f) => f.kind)).toContain('halted');
  });

  it('does not let the heartbeat itself break the send path', async () => {
    // KV that accepts subscription reads but rejects every write.
    const { env } = workerEnv();
    env.PUSH_SUBSCRIPTIONS.put = async () => {
      throw new Error('KV write down');
    };
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    await expect(scheduledWorker.scheduled(cronEvent, env, {})).resolves.toBeUndefined();
    fetchSpy.mockRestore();
  });
});

describe('/api/health exposes liveness but never counts', () => {
  const health = fnSrc('api/health.js');

  it('surfaces the heartbeat timestamp', () => {
    expect(health).toContain('PUSH_RUN_LAST_KEY');
    expect(health).toContain('lastRunAt');
  });

  it('leaks no run counters through the origin-gated endpoint', () => {
    // These are a proxy for how many people use the app. /api/push-health
    // serves them behind the cron secret; this endpoint must not.
    for (const counter of ['lastRun.sent', 'lastRun.failed', 'lastRun.scanned', 'lastRun.notDue']) {
      expect(health, `health.js must not expose ${counter}`).not.toContain(counter);
    }
  });
});

describe('the daily workflow fails red on a finding', () => {
  const wf = readFileSync(join(__dir, '../../.github/workflows/push-health.yml'), 'utf8');

  it('calls the sweep endpoint', () => {
    expect(wf).toContain('/api/push-health');
  });

  it('exits non-zero when findings are present', () => {
    expect(wf).toMatch(/if findings:[\s\S]*sys\.exit\(1\)/);
  });

  it('is scheduled, not dispatch-only — an unrun check is not a check', () => {
    expect(wf).toMatch(/schedule:\s*\n\s*- cron:/);
  });
});

// ── Thresholds are deliberate, not accidental ────────────────────────────────

describe('the thresholds', () => {
  it('give the hourly cron at least two missed ticks of slack', () => {
    expect(PUSH_RUN_STALE_MINUTES).toBeGreaterThanOrEqual(120);
  });

  it('keep history long enough to see a weekend outage in context', () => {
    expect(PUSH_RUN_TTL_SECONDS).toBeGreaterThanOrEqual(7 * 24 * 3600);
  });

  it('require a sample big enough for a ratio to be honest', () => {
    expect(PUSH_FAIL_MIN_ATTEMPTS).toBeGreaterThanOrEqual(5);
    expect(PUSH_FAIL_RATIO_LIMIT).toBeGreaterThan(0);
    expect(PUSH_FAIL_RATIO_LIMIT).toBeLessThan(1);
  });
});

describe('the sweep spends nothing', () => {
  it('makes no Claude call and needs no budget ceiling', async () => {
    const src = fnSrc('api/push-health.js');
    expect(src).not.toContain('api.anthropic.com');
    const { ENDPOINT_CEILING_MICROUSD } = await import('../../functions/api/_aiBudget.js');
    expect(Object.keys(ENDPOINT_CEILING_MICROUSD)).not.toContain('/api/push-health');
  });

  it('does not call requireAuthedAI — it is server-to-server, not a user endpoint', () => {
    expect(fnSrc('api/push-health.js')).not.toContain('requireAuthedAI');
  });
});

describe('KV key convention', () => {
  it('uses the colon prefix the worker scan skips, so heartbeats are never mistaken for subscribers', () => {
    // scheduled.js skips any key containing ':' when listing subscriptions.
    expect(PUSH_RUN_PREFIX).toContain(':');
    expect(PUSH_RUN_LAST_KEY).toContain(':');
    expect(fnSrc('scheduled.js')).toContain("key.name.includes(':')");
  });
});

describe('the tail summary', () => {
  it('reports the scanned count, so a zero-subscriber run is legible in the log too', () => {
    expect(fnSrc('scheduled.js')).toMatch(/scanned: \$\{scanned\}/);
  });
});
