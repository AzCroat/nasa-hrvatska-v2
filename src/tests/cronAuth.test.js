// src/tests/cronAuth.test.js
//
// The cron credential pins (2026-08-25).
//
// THE INCIDENT: CRON_SECRET was typed by hand into two independent places — a
// secret on the nasa-hrvatska-scheduler Worker and an env var on the
// nasa-hrvatska-v2 Pages project — with nothing keeping them equal. On
// 2026-08-23 they drifted and every hourly run failed: 79 runs, 0 reminders
// delivered, `unauthorized x4` in the failure map that #530 had just added. The
// weekly Firestore backup goes through the same header and went down beside it,
// unnoticed, because nothing sweeps it.
//
// These tests pin the mechanism that makes drift impossible rather than merely
// fixed: one derived value, written to both sides by one process, every deploy.

import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  MANAGED_CRON_LABEL,
  cronSecretFor,
  isAuthorizedCron,
  timingSafeEqual,
} from '../../functions/_cronAuth.js';

const __dir = dirname(fileURLToPath(import.meta.url));
// Test-only reader over repo-relative paths that are literals at every call
// site below — no user input reaches it.
// eslint-disable-next-line security/detect-non-literal-fs-filename
const read = (p) => readFileSync(join(__dir, '../..', p), 'utf8');

const ciSrc = read('.github/workflows/ci.yml');
const workerSrc = read('functions/scheduled.js');
const pushSrc = read('functions/api/streak-push.js');
const backupSrc = read('functions/api/backup-progress.js');

describe('isAuthorizedCron — what an endpoint accepts', () => {
  it('accepts either credential', () => {
    expect(isAuthorizedCron('m', { MANAGED_CRON_SECRET: 'm', CRON_SECRET: 'c' })).toBe(true);
    expect(isAuthorizedCron('c', { MANAGED_CRON_SECRET: 'm', CRON_SECRET: 'c' })).toBe(true);
  });

  it('still accepts a hand-set CRON_SECRET with no managed value', () => {
    // The migration must not lock out the configuration that exists today, or
    // deploying the fix would itself be an outage.
    expect(isAuthorizedCron('c', { CRON_SECRET: 'c' })).toBe(true);
  });

  it('rejects a wrong secret, and rejects everyone when nothing is configured', () => {
    expect(isAuthorizedCron('nope', { CRON_SECRET: 'c' })).toBe(false);
    expect(isAuthorizedCron('anything', {})).toBe(false);
    expect(isAuthorizedCron('', {})).toBe(false);
  });

  it('an empty or absent presented secret never matches an empty candidate', () => {
    // The failure mode this forecloses: env.CRON_SECRET unset reads as '', and a
    // naive equality would then authorize a caller who sent no header at all.
    for (const env of [{ CRON_SECRET: '' }, { MANAGED_CRON_SECRET: '' }, { CRON_SECRET: null }]) {
      expect(isAuthorizedCron('', env), JSON.stringify(env)).toBe(false);
    }
  });

  it('survives a malformed env without throwing', () => {
    for (const env of [undefined, null, { CRON_SECRET: 42 }, { MANAGED_CRON_SECRET: {} }]) {
      expect(() => isAuthorizedCron('x', env)).not.toThrow();
      expect(isAuthorizedCron('x', env)).toBe(false);
    }
  });
});

describe('cronSecretFor — what the Worker presents', () => {
  it('PREFERS the managed secret over the hand-set one', () => {
    // This ordering is the actual repair. In a drifted configuration the
    // hand-set value is by definition the one that stopped matching, so
    // preferring it would faithfully preserve the outage.
    expect(cronSecretFor({ MANAGED_CRON_SECRET: 'm', CRON_SECRET: 'c' })).toBe('m');
  });

  it('falls back to the hand-set secret so a CI-less environment still works', () => {
    expect(cronSecretFor({ CRON_SECRET: 'c' })).toBe('c');
  });

  it('returns empty — never a partial secret — when nothing is configured', () => {
    for (const env of [{}, undefined, { MANAGED_CRON_SECRET: '' }, { CRON_SECRET: 0 }]) {
      expect(cronSecretFor(env), JSON.stringify(env)).toBe('');
    }
  });

  it('what the Worker sends is what the endpoint accepts', () => {
    // The round trip is the whole contract; asserting each half separately
    // would not catch the two halves disagreeing.
    for (const env of [
      { MANAGED_CRON_SECRET: 'm', CRON_SECRET: 'c' },
      { MANAGED_CRON_SECRET: 'm' },
      { CRON_SECRET: 'c' },
    ]) {
      expect(isAuthorizedCron(cronSecretFor(env), env), JSON.stringify(env)).toBe(true);
    }
  });
});

describe('timingSafeEqual', () => {
  it('matches equal strings and rejects unequal ones, including by length', () => {
    expect(timingSafeEqual('abc', 'abc')).toBe(true);
    expect(timingSafeEqual('abc', 'abd')).toBe(false);
    expect(timingSafeEqual('abc', 'abcd')).toBe(false);
    expect(timingSafeEqual('', '')).toBe(true);
  });
});

describe('both halves are wired to the shared module', () => {
  it('the Worker resolves its secret rather than reading CRON_SECRET directly', () => {
    expect(workerSrc).toContain("from './_cronAuth.js'");
    // A single remaining env.CRON_SECRET on a fetch header would reintroduce the
    // outage on exactly one of the two call sites, which is worse than not
    // fixing it: half the symptom, none of the signal.
    expect(workerSrc).not.toContain('env.CRON_SECRET');
  });

  it('BOTH endpoints the Worker calls use the shared accept rule', () => {
    // streak-push was the visible failure; backup-progress shares the header and
    // was failing invisibly for the same reason. Fixing only the loud one leaves
    // the learners' only progress snapshot broken.
    for (const [name, src] of [
      ['streak-push', pushSrc],
      ['backup-progress', backupSrc],
    ]) {
      expect(src, name).toContain('isAuthorizedCron');
      expect(src, `${name} must not keep a private auth rule`).not.toMatch(
        /function timingSafeEqual/,
      );
    }
  });
});

describe('what the Worker actually puts on the wire', () => {
  // The unit tests above pin cronSecretFor in isolation. This runs the REAL
  // scheduled handler and reads the header off the intercepted request, because
  // the outage was never in the resolver — it was in which value reached the
  // fetch call, and there are two of those call sites.
  const cronEvent = { cron: '0 * * * *', scheduledTime: Date.parse('2026-08-25T10:30:00.000Z') };

  // Unconditional, so a failing assertion cannot leak a pinned clock into the
  // rest of the file. A no-op when no test faked them.
  afterEach(() => vi.useRealTimers());

  function fakeKv(records = {}) {
    const store = new Map(Object.entries(records));
    return {
      async list() {
        return { keys: [...store.keys()].map((name) => ({ name })), list_complete: true };
      },
      // The worker reads subscriptions with { type: 'json' }; a fake that
      // ignores it hands back a string, `raw.subscription` is undefined, and
      // every subscriber is skipped — the reminder call would never fire and
      // this test would pass by testing nothing.
      async get(k, opts) {
        const v = store.get(k);
        if (v === undefined) return null;
        if (opts?.type === 'json') {
          try {
            return JSON.parse(v);
          } catch {
            return null;
          }
        }
        return v;
      },
      async put(k, v) {
        store.set(k, v);
      },
      async delete(k) {
        store.delete(k);
      },
    };
  }

  async function headersSentBy(env) {
    const { default: worker } = await import('../../functions/scheduled.js');
    const seen = [];
    const spy = vi.spyOn(globalThis, 'fetch').mockImplementation(async (url, init) => {
      seen.push({ url: String(url), secret: init?.headers?.['x-cron-secret'] });
      return new Response(JSON.stringify({ ok: true, status: 201, week: 'w' }), { status: 200 });
    });
    await worker.scheduled(cronEvent, env, {});
    spy.mockRestore();
    return seen;
  }

  it('sends the MANAGED secret, not the stale hand-set one, on every call', async () => {
    // PIN THE CLOCK. Deriving the due hour from the real clock is not enough:
    // the test reads it once and the worker reads it again inside
    // isDueThisHour, so a suite straddling an hour boundary computes '17' and
    // is then evaluated at 18:00 — the subscriber stops being due and the
    // reminder call never fires. That is exactly what happened at 18:00:00 UTC
    // on 2026-08-25, and it is the same class of flake this PR's predecessor
    // fixed elsewhere: a fixture whose coverage depends on what time CI runs.
    //
    // Only Date is faked; real timers still drive AbortSignal.timeout.
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-08-25T10:30:00.000Z'));
    const dueHour = '10';
    const kv = fakeKv({
      user_a: JSON.stringify({
        subscription: { endpoint: 'https://push.example/a' },
        reminderTime: `${dueHour}:00`,
        timeZone: 'UTC',
        streak: 3,
      }),
    });
    const seen = await headersSentBy({
      PUSH_SUBSCRIPTIONS: kv,
      MANAGED_CRON_SECRET: 'managed-value',
      CRON_SECRET: 'stale-hand-set-value',
      PAGES_URL: 'https://example.invalid',
    });
    // BOTH call sites, not just whichever happened to fire — one of them was
    // fixed and the other left reading env.CRON_SECRET is the regression here.
    expect(seen.map((c) => c.url).join(' ')).toContain('/api/streak-push');
    expect(seen.map((c) => c.url).join(' ')).toContain('/api/backup-progress');
    for (const call of seen) {
      expect(call.secret, call.url).toBe('managed-value');
      expect(call.secret, call.url).not.toBe('stale-hand-set-value');
    }
  });

  it('falls back to the hand-set secret when no managed value exists', async () => {
    const seen = await headersSentBy({
      PUSH_SUBSCRIPTIONS: fakeKv(),
      CRON_SECRET: 'hand-set',
      PAGES_URL: 'https://example.invalid',
    });
    expect(seen.length).toBeGreaterThan(0); // never let the loop pass vacuously
    for (const call of seen) expect(call.secret, call.url).toBe('hand-set');
  });
});

describe('CI installs the same value on both sides', () => {
  const installs = ciSrc.match(/wrangler@3 (?:pages )?secret put MANAGED_CRON_SECRET/g) || [];

  it('writes the secret to the Pages project AND the scheduled Worker', () => {
    // One install is not a fix — it is a new way for the two to disagree.
    expect(installs).toContain('wrangler@3 pages secret put MANAGED_CRON_SECRET');
    expect(installs).toContain('wrangler@3 secret put MANAGED_CRON_SECRET');
    expect(installs).toHaveLength(2);
  });

  it('derives BOTH from the label the module documents', () => {
    // The failure this forecloses is subtle and would look exactly like the
    // original incident: two installs, two labels, two different values.
    const derivations = ciSrc.match(/printf '%s' "([a-z0-9-]+)" *\\?\n *\| openssl dgst/g) || [];
    expect(derivations).toHaveLength(2);
    for (const d of derivations) expect(d).toContain(MANAGED_CRON_LABEL);
  });

  it('installs the Pages half BEFORE the Pages deploy', () => {
    // A Pages secret reaches Functions through a NEW deployment, not the running
    // one — installed afterwards it would sit unused until the next push, and
    // the deploy that "fixed" the outage would not have.
    const install = ciSrc.indexOf('pages secret put MANAGED_CRON_SECRET');
    const deploy = ciSrc.indexOf('wrangler@3 pages deploy');
    expect(install).toBeGreaterThan(-1);
    expect(deploy).toBeGreaterThan(install);
  });

  it('installs the Worker half AFTER the Worker deploy', () => {
    // `wrangler secret put` needs the script to exist; run first, a first-ever
    // deploy fails here and takes a working release down with it.
    const deploy = ciSrc.indexOf('Deploy scheduled Worker');
    const install = ciSrc.indexOf('secret put MANAGED_CRON_SECRET >/dev/null');
    expect(deploy).toBeGreaterThan(-1);
    expect(install).toBeGreaterThan(deploy);
  });

  it('masks the derived value in the log', () => {
    const masks = ciSrc.match(/::add-mask::\$\{TOKEN\}/g) || [];
    expect(masks.length).toBeGreaterThanOrEqual(2);
  });

  it('never hard-codes a secret — only the public label', () => {
    expect(ciSrc).not.toMatch(/MANAGED_CRON_SECRET\s*[:=]\s*['"][^'"$]{8,}/);
  });
});

describe('the label is public on purpose', () => {
  it('is allowlisted in .gitleaks.toml, like the calibration label', () => {
    // It is the MESSAGE of the HMAC, not the key. It has to be readable in both
    // places precisely so the two can be checked against each other — which is
    // what the derivation test above does.
    expect(read('.gitleaks.toml')).toContain(MANAGED_CRON_LABEL);
  });
});
