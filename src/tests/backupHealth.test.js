// src/tests/backupHealth.test.js
//
// BACKUP OBSERVABILITY pins (2026-08-25).
//
// The streak reminder — a nudge — had a heartbeat, bounded failure reasons, a
// judged window and a daily red gate. The only snapshot of every learner's
// Firestore progress had none of it, which is how the 2026-08-23 credential
// drift took the weekly backup down for two days in complete silence while the
// same fault in the reminders was caught within a day.
//
// These tests pin the two signals and the ordering between them: snapshot age
// is the finding that depends on nothing, attempt records are the diagnosis
// that arrives ~9 days earlier.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  BACKUP_RUN_SCHEMA,
  BACKUP_RUN_LAST_KEY,
  BACKUP_RUN_PREFIX,
  BACKUP_RUN_TTL_SECONDS,
  BACKUP_STALE_DAYS,
  BACKUP_JUDGEMENT_DAYS,
  BACKUP_FAIL_REASONS,
  buildBackupRunRecord,
  writeBackupRun,
  classifyBackupFailure,
  assessBackupRuns,
  ageDays,
} from '../../functions/_backupRunLog.js';
import { onRequestPost as backupHealth } from '../../functions/api/backup-health.js';

const __dir = dirname(fileURLToPath(import.meta.url));
// eslint-disable-next-line security/detect-non-literal-fs-filename
const read = (p) => readFileSync(join(__dir, '../..', p), 'utf8');

const workerSrc = read('functions/scheduled.js');
const wf = read('.github/workflows/backup-health.yml');

const NOW = Date.parse('2026-08-25T12:00:00.000Z');
const daysAgo = (d) => new Date(NOW - d * 86400000).toISOString();

function fakeKv(seed = {}) {
  const store = new Map(Object.entries(seed));
  return {
    store,
    puts: [],
    async get(key) {
      return store.has(key) ? store.get(key) : null;
    },
    async put(key, value, opts) {
      this.puts.push({ key, value, opts });
      store.set(key, value);
    },
    async list({ prefix = '' } = {}) {
      return {
        keys: [...store.keys()]
          .filter((k) => k.startsWith(prefix))
          .sort()
          .map((name) => ({ name })),
        list_complete: true,
      };
    },
  };
}

// ── The record ───────────────────────────────────────────────────────────────

describe('buildBackupRunRecord', () => {
  it('records a completed backup with its week', () => {
    const rec = buildBackupRunRecord({ at: daysAgo(0), outcome: 'ok', week: '2026-W35' });
    expect(rec).toMatchObject({ v: BACKUP_RUN_SCHEMA, outcome: 'ok', week: '2026-W35' });
    expect('reason' in rec).toBe(false);
  });

  it("treats 'skipped' as the SUCCESS it is", () => {
    // The once-per-week latch answering "already done" proves the whole
    // pipeline responded. Counting it as a failure would make a healthy
    // Monday-at-04:00 retry look broken.
    const rec = buildBackupRunRecord({ at: daysAgo(0), outcome: 'skipped', week: '2026-W35' });
    expect(rec.outcome).toBe('skipped');
    expect('reason' in rec).toBe(false);
  });

  it('carries a reason on failure, and only ever a known code', () => {
    expect(
      buildBackupRunRecord({ at: daysAgo(0), outcome: 'failed', reason: 'unauthorized' }).reason,
    ).toBe('unauthorized');
    // Anything outside the vocabulary is coerced, never echoed — this history
    // is served by an ops endpoint.
    expect(
      buildBackupRunRecord({
        at: daysAgo(0),
        outcome: 'failed',
        reason: 'fetch failed: https://push.example/subscriber-id',
      }).reason,
    ).toBe(BACKUP_FAIL_REASONS.UNKNOWN);
  });

  it('treats an unrecognised outcome as a failure rather than a success', () => {
    expect(buildBackupRunRecord({ at: daysAgo(0), outcome: 'weird' }).outcome).toBe('failed');
  });
});

describe('classifyBackupFailure', () => {
  it('maps the outage that motivated this', () => {
    expect(classifyBackupFailure({ httpStatus: 401 })).toBe('unauthorized');
  });

  it("prefers the endpoint's own code, which says WHICH stage failed", () => {
    expect(classifyBackupFailure({ httpStatus: 500, errorCode: 'token_error' })).toBe(
      'token_error',
    );
    expect(classifyBackupFailure({ httpStatus: 502, errorCode: 'backup_failed' })).toBe(
      'backup_failed',
    );
    expect(classifyBackupFailure({ httpStatus: 500, errorCode: 'server_misconfigured' })).toBe(
      'server_misconfigured',
    );
  });

  it('falls back to status-shaped codes, never to the raw input', () => {
    expect(classifyBackupFailure({ httpStatus: 503 })).toBe('http_5xx');
    expect(classifyBackupFailure({ httpStatus: 404 })).toBe('http_4xx');
    expect(classifyBackupFailure({ errorMessage: 'The operation was aborted' })).toBe('timeout');
    expect(classifyBackupFailure({ errorMessage: 'network down' })).toBe('transport_error');
    expect(classifyBackupFailure({})).toBe('unknown');
  });

  it('never returns a code outside the vocabulary', () => {
    const known = new Set(Object.values(BACKUP_FAIL_REASONS));
    for (const input of [
      { errorCode: 'something_invented' },
      { httpStatus: 'nonsense' },
      { errorMessage: 'https://firestore.googleapis.com/v1/projects/secret' },
      {},
    ]) {
      expect(known.has(classifyBackupFailure(input)), JSON.stringify(input)).toBe(true);
    }
  });
});

describe('writeBackupRun', () => {
  it('writes the pointer and a TTLd history entry', async () => {
    const kv = fakeKv();
    const rec = buildBackupRunRecord({ at: daysAgo(0), outcome: 'ok', week: '2026-W35' });
    await expect(writeBackupRun(kv, rec)).resolves.toBe(true);
    expect(JSON.parse(kv.puts.find((p) => p.key === BACKUP_RUN_LAST_KEY).value)).toEqual(rec);
    const hist = kv.puts.find((p) => p.key.startsWith(BACKUP_RUN_PREFIX));
    expect(hist.opts.expirationTtl).toBe(BACKUP_RUN_TTL_SECONDS);
  });

  it('never throws — observability must not take out the thing it observes', async () => {
    await expect(writeBackupRun(null, { at: 'x' })).resolves.toBe(false);
    const broken = {
      async put() {
        throw new Error('KV down');
      },
    };
    await expect(writeBackupRun(broken, { at: 'x' })).resolves.toBe(false);
  });
});

// ── The judgement ────────────────────────────────────────────────────────────

describe('assessBackupRuns — snapshot age is the primary signal', () => {
  it('is clean with a fresh snapshot and a successful attempt', () => {
    const out = assessBackupRuns({
      runs: [{ at: daysAgo(1), outcome: 'ok', week: '2026-W35' }],
      lastSnapshotAt: daysAgo(1),
      lastSnapshotWeek: '2026-W35',
      now: NOW,
    });
    expect(out.clean).toBe(true);
    expect(out.snapshot.ageDays).toBe(1);
  });

  it('fires when the newest snapshot has gone stale', () => {
    const out = assessBackupRuns({
      runs: [],
      lastSnapshotAt: daysAgo(12),
      lastSnapshotWeek: '2026-W33',
      now: NOW,
    });
    expect(out.clean).toBe(false);
    expect(out.findings.map((f) => f.kind)).toContain('stale_snapshot');
    expect(out.findings[0].detail).toContain('2026-W33');
  });

  it('fires with NO attempt records at all — the check that depends on nothing', () => {
    // If a bug meant backupDue never became true, no attempt would ever be
    // recorded and an attempt-based check would stay silent forever. Staleness
    // is the backstop; this is the single most important test in the file.
    const out = assessBackupRuns({ runs: [], lastSnapshotAt: daysAgo(30), now: NOW });
    expect(out.clean).toBe(false);
    expect(out.findings.map((f) => f.kind)).toContain('stale_snapshot');
  });

  it('reports no_snapshot when nothing has ever completed', () => {
    const out = assessBackupRuns({ runs: [], lastSnapshotAt: null, now: NOW });
    expect(out.findings.map((f) => f.kind)).toContain('no_snapshot');
    expect(out.findings[0].detail).toContain('nothing to restore');
  });

  it('treats an undated snapshot as stale, never as fresh', () => {
    const out = assessBackupRuns({ runs: [], lastSnapshotAt: 'not a date', now: NOW });
    expect(out.clean).toBe(false);
  });

  it('allows a full weekly cycle plus slack before complaining', () => {
    // 7 days is on time; the whole Monday window has to be missed to fire.
    expect(assessBackupRuns({ runs: [], lastSnapshotAt: daysAgo(7), now: NOW }).clean).toBe(true);
    expect(BACKUP_STALE_DAYS).toBeGreaterThanOrEqual(8);
  });
});

describe('assessBackupRuns — attempts are the diagnosis', () => {
  const fresh = { lastSnapshotAt: daysAgo(1), lastSnapshotWeek: '2026-W35', now: NOW };

  it('fires the same day a Monday fails, long before staleness would notice', () => {
    // ~9 days of warning: the difference between fixing it this week and
    // discovering it next month.
    const out = assessBackupRuns({
      ...fresh,
      runs: [
        { at: daysAgo(0), outcome: 'failed', reason: 'unauthorized' },
        { at: daysAgo(0), outcome: 'failed', reason: 'unauthorized' },
      ],
    });
    expect(out.clean).toBe(false);
    const f = out.findings.find((x) => x.kind === 'attempts_failing');
    expect(f.detail).toContain('unauthorized x2');
  });

  it('does NOT fire when a retry in the same window succeeded', () => {
    // The window fires at 03, 04 and 05 precisely so a transient 03:00 failure
    // is retried. One failure followed by a success is the system working.
    const out = assessBackupRuns({
      ...fresh,
      runs: [
        { at: daysAgo(0), outcome: 'failed', reason: 'http_5xx' },
        { at: daysAgo(0), outcome: 'ok', week: '2026-W35' },
      ],
    });
    expect(out.clean).toBe(true);
  });

  it("counts 'skipped' as a success, so a latched retry is not an outage", () => {
    const out = assessBackupRuns({
      ...fresh,
      runs: [
        { at: daysAgo(0), outcome: 'failed', reason: 'http_5xx' },
        { at: daysAgo(0), outcome: 'skipped', week: '2026-W35' },
      ],
    });
    expect(out.clean).toBe(true);
    expect(out.attempts.succeeded).toBe(1);
  });

  it('judges only the recent cycle — an old fixed failure does not gate', () => {
    // Same lesson push-health learned the hard way: retention and judgement are
    // different jobs, or the sweep describes history as if it were now.
    const out = assessBackupRuns({
      ...fresh,
      runs: [{ at: daysAgo(20), outcome: 'failed', reason: 'unauthorized' }],
    });
    expect(out.clean).toBe(true);
    expect(out.history.attempts).toBe(1);
    expect(out.attempts.failed).toBe(0);
  });

  it('counts an undated attempt as recent', () => {
    const out = assessBackupRuns({
      ...fresh,
      runs: [{ at: 'not a date', outcome: 'failed', reason: 'unauthorized' }],
    });
    expect(out.attempts.recent).toBe(1);
  });

  it('names the window it measured', () => {
    const out = assessBackupRuns({
      ...fresh,
      runs: [{ at: daysAgo(0), outcome: 'failed', reason: 'unauthorized' }],
    });
    expect(out.findings[0].detail).toContain(`last ${BACKUP_JUDGEMENT_DAYS} days`);
  });

  it('survives malformed input without throwing', () => {
    for (const runs of [undefined, null, [null], [{}], 'nonsense']) {
      expect(() => assessBackupRuns({ runs, lastSnapshotAt: daysAgo(1), now: NOW })).not.toThrow();
    }
  });
});

describe('ageDays', () => {
  it('measures whole days back, and returns null for anything unparseable', () => {
    expect(ageDays(daysAgo(3), NOW)).toBe(3);
    for (const bad of [null, undefined, '', 'yesterday', {}]) expect(ageDays(bad, NOW)).toBeNull();
  });
});

// ── The endpoint ─────────────────────────────────────────────────────────────

function ctx({ secret, env }) {
  return {
    request: new Request('https://nasahrvatska.com/api/backup-health', {
      method: 'POST',
      headers: secret ? { 'x-cron-secret': secret } : {},
    }),
    env,
  };
}

describe('/api/backup-health', () => {
  it('503 with no secret configured; 401 on a wrong one', async () => {
    expect((await backupHealth(ctx({ secret: 'x', env: {} }))).status).toBe(503);
    const r = await backupHealth(
      ctx({ secret: 'wrong', env: { CRON_SECRET: 'right', PUSH_SUBSCRIPTIONS: fakeKv() } }),
    );
    expect(r.status).toBe(401);
  });

  it('accepts the CI-installed managed secret, like every other cron endpoint', async () => {
    const r = await backupHealth(
      ctx({ secret: 'm', env: { MANAGED_CRON_SECRET: 'm', PUSH_SUBSCRIPTIONS: fakeKv() } }),
    );
    expect(r.status).toBe(200);
  });

  it('reads the snapshot through the week index and reports it clean', async () => {
    const at = new Date(Date.now() - 86400000).toISOString();
    const kv = fakeKv({
      'backup:latest': '2026-W35',
      'backup:2026-W35:index': JSON.stringify({ week: '2026-W35', completedAt: at }),
      [BACKUP_RUN_LAST_KEY]: JSON.stringify({ at, outcome: 'ok', week: '2026-W35' }),
    });
    const res = await backupHealth(
      ctx({ secret: 's', env: { CRON_SECRET: 's', PUSH_SUBSCRIPTIONS: kv } }),
    );
    const body = await res.json();
    expect(body.clean).toBe(true);
    expect(body.snapshot.week).toBe('2026-W35');
  });

  it('treats a latest pointer whose index is unreadable as NO snapshot', async () => {
    // A pointer claiming a snapshot that cannot be restored is worse than none.
    const kv = fakeKv({ 'backup:latest': '2026-W35' });
    const res = await backupHealth(
      ctx({ secret: 's', env: { CRON_SECRET: 's', PUSH_SUBSCRIPTIONS: kv } }),
    );
    const body = await res.json();
    expect(body.clean).toBe(false);
    expect(body.findings.map((f) => f.kind)).toContain('no_snapshot');
  });

  it('reads the last-attempt pointer separately from the listing', async () => {
    // KV list is eventually consistent: the newest attempt can be absent from
    // the listing while the pointer already has it. Reading only the listing
    // makes a just-recovered backup still report as failing.
    const at = new Date(Date.now() - 3600000).toISOString();
    const kv = fakeKv({
      'backup:latest': '2026-W35',
      'backup:2026-W35:index': JSON.stringify({ completedAt: at }),
      [BACKUP_RUN_LAST_KEY]: JSON.stringify({ at, outcome: 'ok' }),
    });
    const res = await backupHealth(
      ctx({ secret: 's', env: { CRON_SECRET: 's', PUSH_SUBSCRIPTIONS: kv } }),
    );
    expect((await res.json()).lastAttempt.outcome).toBe('ok');
  });

  it('spends nothing — no Claude call anywhere', () => {
    const src = read('functions/api/backup-health.js');
    expect(src).not.toContain('anthropic');
    expect(src).not.toContain('claude-');
  });
});

// ── Wiring ───────────────────────────────────────────────────────────────────

describe('the worker records every backup attempt', () => {
  it('writes a record rather than only logging to the ephemeral tail', () => {
    expect(workerSrc).toContain('writeBackupRun');
    expect(workerSrc).toContain('buildBackupRunRecord');
    expect(workerSrc).toContain('classifyBackupFailure');
  });

  it('records the outcome on BOTH failure paths — HTTP error and throw', () => {
    // A throw used to leave nothing behind at all, which is how a 45s timeout
    // and a never-attempted backup looked identical.
    const block = workerSrc.slice(workerSrc.indexOf('if (backupDue)'));
    expect(block).toMatch(/reason = classifyBackupFailure\(\{ httpStatus/);
    expect(block).toMatch(/reason = classifyBackupFailure\(\{ errorMessage/);
  });

  it('writes the record OUTSIDE the try, so a throw cannot skip it', () => {
    const block = workerSrc.slice(workerSrc.indexOf('if (backupDue)'));
    const catchIdx = block.indexOf('} catch (e) {');
    const writeIdx = block.indexOf('await writeBackupRun(');
    expect(writeIdx).toBeGreaterThan(catchIdx);
  });
});

describe('the daily workflow fails red', () => {
  it('calls the sweep and exits non-zero on a finding', () => {
    expect(wf).toContain('/api/backup-health');
    expect(wf).toMatch(/if findings:[\s\S]*sys\.exit\(1\)/);
  });

  it('is scheduled DAILY, not weekly — a weekly job needs faster detection', () => {
    // Swept weekly, a failed Monday would not be known until the next Monday,
    // which is the delay the whole thing exists to remove.
    expect(wf).toMatch(/- cron: '\d+ \d+ \* \* \*'/);
  });

  it('derives the same cron credential, never a secret of its own', () => {
    expect(wf).toContain('nh-cron-v1');
    expect(wf).toContain('::add-mask::${TOKEN}');
  });
});
