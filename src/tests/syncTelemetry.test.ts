/**
 * syncTelemetry.test.ts — the progress layer must name what went wrong.
 *
 * THE DEFECT. `reportError` appeared ZERO times in `useSyncManager.ts` and in
 * `firebase.ts`. The subsystem that persists a learner's progress had no
 * telemetry of any kind: a failed save was a `console.error` at best and
 * `.catch(() => {})` at worst, and `doSyncNow` actively DISCARDED the Firestore
 * error code it was handed (`.catch(() => ({ ok: false }))`), collapsing a
 * rules rejection, a revoked token and a tunnel into one boolean. The comment
 * inside `fbSaveProgress` states the consequence in its own words: it logs the
 * blob size so a `permission-denied` "is diagnosable from a console
 * screenshot", and "the 100k-XP sync-halt stayed invisible for so long".
 *
 * A console screenshot is not a diagnostic. This is the same class as the TTS
 * refusal that returned a bare `false` and the feedback path that returned a
 * bare `null`, on the one subsystem whose failure the learner cannot see, cannot
 * report and cannot work around.
 *
 * WHAT THIS FILE PINS, and why each half is needed. The module's own behaviour
 * is driven directly (classification, the cap, the benign-cause rule). The CALL
 * SITES are pinned by source, because a component test that calls the module
 * itself proves the module works and says nothing about whether the app is
 * wired to it — the `award`-prop lesson, in the file where it costs the most.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  classifySyncFailure,
  reportSyncFailure,
  resetSyncTelemetry,
  SYNC_REPORT_CAP,
  PERSISTENT_UNAVAILABLE,
} from '../lib/syncTelemetry';
import { reportError } from '../lib/errorReporter';

vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn() }));

const reported = reportError as unknown as ReturnType<typeof vi.fn>;

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');
const SYNC = strip(readFileSync('src/hooks/useSyncManager.ts', 'utf8'));
const FETCH = strip(readFileSync('src/lib/apiFetch.ts', 'utf8'));

beforeEach(() => {
  resetSyncTelemetry();
  reported.mockClear();
});

describe('classifySyncFailure', () => {
  it('names the rules rejection — the failure that never resolves on its own', () => {
    expect(classifySyncFailure({ code: 'permission-denied' })).toBe('permission_denied');
    expect(classifySyncFailure({ code: 'firestore/permission-denied' })).toBe('permission_denied');
  });

  it('separates a revoked token from an offline blip', () => {
    expect(classifySyncFailure({ code: 'unauthenticated' })).toBe('unauthenticated');
    expect(classifySyncFailure({ code: 'auth/user-token-expired' })).toBe('unauthenticated');
    expect(classifySyncFailure({ code: 'unavailable' })).toBe('unavailable');
    expect(classifySyncFailure({ code: 'deadline-exceeded' })).toBe('unavailable');
  });

  it('reads the message under BOTH names a caller uses', () => {
    // A thrown Error carries it as `message`; an fbSaveProgress result carries
    // it as `err`. Reading only `message` classified every no-code result as
    // `unknown` — including the one case where nothing was ever going to be
    // written at all.
    expect(classifySyncFailure(new Error('Firebase not initialized'))).toBe('not_initialized');
    expect(classifySyncFailure({ ok: false, err: 'Firebase not initialized' })).toBe(
      'not_initialized',
    );
  });

  it('names a full localStorage from the DOMException the browser throws', () => {
    const e = new Error('quota');
    e.name = 'QuotaExceededError';
    expect(classifySyncFailure(e)).toBe('local_quota');
  });

  it('says unknown rather than guessing', () => {
    expect(classifySyncFailure({ code: 'something-new' })).toBe('unknown');
    expect(classifySyncFailure(null)).toBe('unknown');
    expect(classifySyncFailure(undefined)).toBe('unknown');
  });
});

describe('reportSyncFailure', () => {
  it('reports a rules rejection on the very first failure', () => {
    expect(reportSyncFailure('save', { code: 'permission-denied' })).toBe(true);
    expect(reported).toHaveBeenCalledTimes(1);
    expect(reported.mock.calls[0][0].message).toBe('sync_failed:save:permission_denied');
  });

  it('the grouping key is STABLE and the sizes ride in the context', () => {
    // Sentry groups by message. A blob size in the message would file a new
    // issue per byte and the halt would never show as one recurring problem.
    reportSyncFailure('save', { code: 'permission-denied' }, { detail: 'blob=204801' });
    const [err, context, tag] = reported.mock.calls[0];
    expect(err.message).toBe('sync_failed:save:permission_denied');
    expect(context).toContain('blob=204801');
    expect(tag).toBe('permission_denied');
  });

  it('a single offline blip is NOT reported', () => {
    // localStorage is authoritative and the periodic push carries it. A Sentry
    // issue per tunnel teaches the reader to ignore sync_failed entirely.
    expect(reportSyncFailure('save', { code: 'unavailable' })).toBe(false);
    expect(reported).not.toHaveBeenCalled();
  });

  it('a SUSTAINED unavailable is reported — that is no longer a tunnel', () => {
    for (let i = 1; i < PERSISTENT_UNAVAILABLE; i++) {
      expect(reportSyncFailure('periodic', { code: 'unavailable' }, { consecutive: i })).toBe(
        false,
      );
    }
    expect(
      reportSyncFailure(
        'periodic',
        { code: 'unavailable' },
        { consecutive: PERSISTENT_UNAVAILABLE },
      ),
    ).toBe(true);
    expect(reported).toHaveBeenCalledTimes(1);
  });

  it('a non-benign cause ignores the consecutive count entirely', () => {
    expect(reportSyncFailure('periodic', { code: 'permission-denied' }, { consecutive: 1 })).toBe(
      true,
    );
  });

  it('caps at SYNC_REPORT_CAP per (stage, cause) per session', () => {
    for (let i = 0; i < SYNC_REPORT_CAP + 4; i++)
      reportSyncFailure('save', { code: 'permission-denied' });
    expect(reported).toHaveBeenCalledTimes(SYNC_REPORT_CAP);
  });

  it('the cap is per stage AND per cause, so one noisy path cannot mask another', () => {
    for (let i = 0; i < SYNC_REPORT_CAP + 2; i++)
      reportSyncFailure('save', { code: 'permission-denied' });
    reported.mockClear();
    expect(reportSyncFailure('periodic', { code: 'permission-denied' })).toBe(true);
    expect(reportSyncFailure('save', { code: 'unauthenticated' })).toBe(true);
    expect(reported).toHaveBeenCalledTimes(2);
  });

  it('an explicit cause overrides the classifier, which must not guess', () => {
    reportSyncFailure('merge', new Error('boom'), { cause: 'merge_failed' });
    expect(reported.mock.calls[0][0].message).toBe('sync_failed:merge:merge_failed');
  });

  it('telemetry can never break a save', () => {
    reported.mockImplementationOnce(() => {
      throw new Error('reporting blew up');
    });
    expect(() => reportSyncFailure('save', { code: 'permission-denied' })).not.toThrow();
  });
});

describe('the sync layer is actually wired to it', () => {
  it('useSyncManager imports the reporter at all', () => {
    // It imported NOTHING of the kind before this change — `reportError`
    // appeared zero times in the whole file.
    expect(SYNC).toMatch(
      /import\s*\{\s*reportSyncFailure\s*\}\s*from\s*'\.\.\/lib\/syncTelemetry'/,
    );
  });

  it('doSyncNow keeps the Firestore code instead of discarding it', () => {
    // THE original bug, by shape: `.catch(() => ({ ok: false }))` threw the
    // code away before anything could classify it.
    expect(SYNC).not.toMatch(
      /fbSaveProgress\([^)]*\)\.catch\(\(\)\s*=>\s*\(\{\s*ok:\s*false\s*\}\)\)/,
    );
    expect(SYNC).toMatch(/reportSyncFailure\('save'/);
  });

  it('the periodic push passes its consecutive count', () => {
    // It is the ONLY path that knows how long the failure has lasted, so it is
    // the only one that can ever report a sustained `unavailable`.
    expect(SYNC).toMatch(/reportSyncFailure\('periodic'[\s\S]{0,200}consecutive:\s*_syncFailCount/);
  });

  it('a full localStorage is reported from both write sites', () => {
    expect(SYNC).toMatch(/reportSyncFailure\('local'/);
    expect(SYNC).toMatch(/reportSyncFailure\('local-unload'/);
  });

  it('a snapshot that cannot be merged is reported', () => {
    expect(SYNC).toMatch(/reportSyncFailure\('merge'[^)]*cause:\s*'merge_failed'/);
  });

  it('the unload PUSH stays silent, deliberately and in writing', () => {
    // Not an oversight: the page is closing and that race is expected to be
    // lost. An exemption with its reason beside it, per this repo's own rule.
    const raw = readFileSync('src/hooks/useSyncManager.ts', 'utf8');
    expect(raw).toMatch(/stays silent DELIBERATELY/);
    expect(SYNC).toMatch(
      /if \(pushToFirebase\) fbSaveProgress\(u\.u, snap\)\.catch\(\(\) => \{\}\)/,
    );
  });
});

describe('apiFetch names its token failure', () => {
  it('reports the failure it used to only console.error', () => {
    expect(FETCH).toMatch(/reportSyncFailure\('token'[\s\S]{0,120}cause:\s*'token_failed'/);
  });

  it('the event finally carries the URL it failed for', () => {
    // `detail.url` was hardcoded `''` — the one field naming WHICH call died
    // could only ever be the empty string. Nothing has ever listened for this
    // event either, which is why the emptiness went unnoticed for its whole life.
    expect(FETCH).not.toMatch(/'nh:auth-token-error'[\s\S]{0,80}url:\s*''/);
    expect(FETCH).toMatch(/'nh:auth-token-error',\s*\{\s*detail:\s*\{\s*url,/);
  });

  it('every _attachToken call site passes the url through', () => {
    const calls = [
      ...FETCH.matchAll(/_attachToken\((?!\s*\n?\s*options: RequestInit)[^)]*\)/g),
    ].map((m) => m[0]);
    expect(calls.length).toBeGreaterThanOrEqual(3);
    for (const c of calls) {
      expect(c, `${c} drops the url, so its report and its event name nothing`).toMatch(/url\)/);
    }
  });
});
