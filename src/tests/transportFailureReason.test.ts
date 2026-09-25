/**
 * transportFailureReason.test.ts — `_nativePost`'s null says WHY, and a
 * response clears it.
 *
 * THE FIELD REPORT THIS CLOSES. The owner's Sentry issue
 * `ai_feedback_failed:pronunciation-assess:server` carried a kind and nothing
 * else — no status, no code — and that combination is produced by exactly one
 * thing: `failureFromError` on something that is not a TypeError, not an abort,
 * with the browser online. `PronunciationScorer` did
 * `if (!res) throw new Error('assess_transport_failed')` inside a try whose
 * catch calls `failureFromError`, so **the null transport was laundered into
 * "the evaluation service is temporarily unavailable"** and nothing anywhere
 * recorded that nothing had answered. Across 20+ `_nativePost` callers the
 * question "why did it return null" had no answer at all.
 *
 * ELIMINATED WHILE DOING THIS, recorded so nobody re-chases it: the other live
 * candidate was `getFirebaseBearer()` throwing, since it is awaited OUTSIDE
 * `send()` and would propagate straight to the caller's catch. It cannot —
 * `_getFirebaseBearer`'s entire body, including the `await _bearerPromise` that
 * could inherit a rejected cached promise, sits inside one try/catch returning
 * null. Reading the body settled what reasoning about the await could not.
 *
 * The reason is a CLOSED vocabulary and carries the error's NAME only, never its
 * message — the push-delivery rule ("a fetch rejection embeds the URL it failed
 * against"), because this value is meant to be safe to put in a report.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const read = (rel: string) => readFileSync(join(__dirname, '..', rel), 'utf8');

vi.mock('../lib/nativeTransport.js', () => ({
  getFirebaseBearer: vi.fn(async () => 'tok'),
  isNative: vi.fn(() => false),
  _dataUrlToArrayBuffer: vi.fn(() => new ArrayBuffer(4)),
}));
vi.mock('../lib/debugLog', () => ({ dbgInfo: vi.fn(), dbgWarn: vi.fn() }));

const { _nativePost, getLastTransportFailure, _resetTransportFailure } =
  await import('../lib/nativePost');

const realFetch = global.fetch;

beforeEach(() => {
  _resetTransportFailure();
});
afterEach(() => {
  global.fetch = realFetch;
});

describe('a null transport names its reason', () => {
  it('records fetch_threw with the error NAME and the attempt count', async () => {
    global.fetch = vi.fn(async () => {
      throw new TypeError('Failed to fetch https://example/api/x');
    }) as unknown as typeof fetch;

    const res = await _nativePost('/api/pronunciation-assess', { a: 1 });
    expect(res).toBeNull();

    const f = getLastTransportFailure();
    expect(f?.path).toBe('/api/pronunciation-assess');
    expect(f?.reason).toBe('fetch_threw');
    expect(f?.errorName).toBe('TypeError');
    expect(f?.attempts).toBe(1); // web: exactly one endpoint
    expect(typeof f?.at).toBe('number');
  });

  // THE WHOLE POINT OF NAMES-NOT-MESSAGES. A fetch rejection's message embeds
  // the URL it failed against, and this record is built to be reportable.
  it('never carries the error message', async () => {
    global.fetch = vi.fn(async () => {
      throw new TypeError('Failed to fetch https://secret.internal/api/x?token=abc');
    }) as unknown as typeof fetch;
    await _nativePost('/api/x', {});
    const f = getLastTransportFailure();
    expect(JSON.stringify(f)).not.toContain('secret.internal');
    expect(JSON.stringify(f)).not.toContain('token=abc');
  });

  it('a non-TypeError throw is still recorded, under its own name', async () => {
    global.fetch = vi.fn(async () => {
      const e = new Error('boom');
      e.name = 'NetworkError';
      throw e;
    }) as unknown as typeof fetch;
    await _nativePost('/api/x', {});
    expect(getLastTransportFailure()?.errorName).toBe('NetworkError');
  });

  // An abort is the learner navigating away, not a transport failure, and it
  // propagates rather than returning null — so it must leave no record.
  it('an abort propagates and records nothing', async () => {
    global.fetch = vi.fn(async () => {
      const e = new Error('aborted');
      e.name = 'AbortError';
      throw e;
    }) as unknown as typeof fetch;
    await expect(_nativePost('/api/x', {})).rejects.toThrow();
    expect(getLastTransportFailure()).toBeNull();
  });
});

describe('ANY response clears the record', () => {
  // The `ttsFetch` rule: a stale reason would let one surface report another's
  // dead connection as the cause of this handler's refusal.
  it.each([
    ['a 200', 200],
    ['a 400', 400],
    ['a 500', 500],
  ])('%s clears a reason left by an earlier call', async (_label, status) => {
    global.fetch = vi.fn(async () => {
      throw new TypeError('down');
    }) as unknown as typeof fetch;
    await _nativePost('/api/x', {});
    expect(getLastTransportFailure()).not.toBeNull();

    global.fetch = vi.fn(async () => new Response('{}', { status })) as unknown as typeof fetch;
    await _nativePost('/api/x', {});
    expect(getLastTransportFailure()).toBeNull();
  });

  // A 5xx returns a RESPONSE, not null, so it is not a transport failure at all
  // — that distinction is what the 2026-09-06 fix bought and must not regress.
  it('a 5xx returns the response rather than null', async () => {
    global.fetch = vi.fn(
      async () => new Response('{"error":"budget_paused"}', { status: 503 }),
    ) as unknown as typeof fetch;
    const res = await _nativePost('/api/tts', {});
    expect(res?.status).toBe(503);
    expect(getLastTransportFailure()).toBeNull();
  });
});

describe('the reason vocabulary is closed', () => {
  // A consumer builds a Sentry code out of this, so free text would make the
  // report unsearchable and a switch over it start lying.
  it('every reason the module can record is one of the three declared', async () => {
    const src = read('lib/nativePost.ts');
    // FORMAT-INDEPENDENT. The first draft matched `^\s*\|\s*'…'` per line and
    // prettier collapses this union onto ONE line, so `declared` came back EMPTY —
    // which would have made the loop below vacuous had the equality check not
    // caught it first. Take the whole declaration, then its literals.
    const decl = src.match(/export type TransportFailureReason\s*=([\s\S]*?);/);
    expect(decl, 'the reason union was not found — the derivation is broken').toBeTruthy();
    const declared = [...decl![1].matchAll(/'([a-z_]+)'/g)].map((m) => m[1]);
    expect(declared.sort()).toEqual(['capacitor_threw', 'capacitor_unusable_body', 'fetch_threw']);
    // Every value actually passed to the recorder must be one of them — a new
    // literal added at a call site and not to the type is the drift this catches.
    const passed = [...src.matchAll(/_noteTransportFailure\(\s*path,\s*(?:\n\s*)?([^,]+),/g)].map(
      (m) => m[1].trim(),
    );
    expect(passed.length).toBeGreaterThanOrEqual(2);
    for (const expr of passed) {
      for (const lit of expr.match(/'([a-z_]+)'/g) ?? []) {
        expect(declared, `${lit} is recorded but not declared`).toContain(lit.replace(/'/g, ''));
      }
    }
  });
});

// EVERY CALLER, NOT THE ONE I WAS LOOKING AT. Fixing the screen the Sentry
// issue named and stopping there is the mistake this file's own history records
// three times ("this entry said both launch sites and there were three"). The
// census: `_nativePost` has callers in four learner-facing paths plus
// `audio.ts` (fully instrumented in 2026-09-10) and `firebase.ts`'s
// delete-account (a plain sentence, no classifier, honest as it stands).
//
// TWO of the four laundered the null into an unexplained `server`:
// `PronunciationScorer` and `LiveTutorScreen`, both via
// `throw new Error(...)` into a catch calling `failureFromError`. The other two
// (`GradedInputScreen`, `whisperClaudeScorer`) classified it correctly as
// `network` and carried no reason.
describe('every _nativePost caller names the reason', () => {
  const CALLERS = [
    'components/shared/PronunciationScorer.tsx',
    'components/croatia/LiveTutorScreen.tsx',
    'components/learn/GradedInputScreen.tsx',
    'lib/speaking/whisperClaudeScorer.ts',
  ];

  const strip = (src: string) => src.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

  it.each(CALLERS)('%s reads the transport record and reports it', (rel) => {
    const code = strip(read(rel));
    expect(code, `${rel} does not read the transport reason`).toContain('getLastTransportFailure');
    expect(code, `${rel} does not build a failure from it`).toContain('transportFailure(');
  });

  // THE SHAPE THAT CAUSED THE FIELD REPORT. A bare `throw new Error` for a null
  // transport, inside a try whose catch classifies, yields `server` with no
  // status and no code — indistinguishable from a handler being down.
  it.each(CALLERS)('%s does not throw a bare Error for a null transport', (rel) => {
    const code = strip(read(rel));
    // PRECISE, because the loose form conflated two different things. `[^)]*`
    // after the identifier also matched `if (!res.ok) throw new Error`, which is
    // a non-OK RESPONSE — a case that has a status and belongs to a different
    // finding. This rule is about the NULL check only: the bare variable.
    const bad = [...code.matchAll(/if\s*\(\s*!\s*(?:res|r)\s*\)\s*\{?\s*throw new Error/g)];
    expect(
      bad.map((m) => m[0]),
      `${rel} launders a null transport into a bare Error`,
    ).toEqual([]);
  });

  it('the caller set is the real one, derived from the tree', () => {
    // A hand-written list decays exactly like one in production, so it is
    // derived from the tree and the exemptions carry their reasons.
    //
    // EXEMPT, each checked AND each measured to be load-bearing. The first draft
    // listed five and TWO of them guarded nothing — `nativeTransport.ts` and
    // `checkpointConfig.ts` name the helper only in a comment, which the strip
    // already removes, so they could never have been found. A redundant
    // exemption is the stale-exemption shape with the reason written in
    // advance; the assertion below fails if one stops being needed.
    //
    //  * `lib/audio.ts` — records its own named `TtsFailure` on every path
    //    (2026-09-10); it is the one caller that already did this.
    //  * `lib/firebase.ts` — delete-account returns a plain honest sentence and
    //    routes through no classifier at all.
    //  * `lib/nativePost.ts` — DEFINES the helper.
    const EXEMPT = new Set(['lib/audio.ts', 'lib/firebase.ts', 'lib/nativePost.ts']);
    const found: string[] = [];
    const walk = (dir: string) => {
      for (const e of readdirSync(join(__dirname, '..', dir), { withFileTypes: true })) {
        const rel = dir ? `${dir}/${e.name}` : e.name;
        if (e.isDirectory()) {
          if (e.name === 'tests' || e.name === '__tests__') continue;
          walk(rel);
        } else if (/\.tsx?$/.test(e.name) && !/\.test\.tsx?$/.test(e.name)) {
          // A CALL, not a mention: comments stripped first.
          if (strip(read(rel)).includes('_nativePost(') && !EXEMPT.has(rel)) found.push(rel);
        }
      }
    };
    walk('');
    expect(found.sort()).toEqual([...CALLERS].sort());

    // BOTH STALENESS DIRECTIONS. Every exemption must still be a file the walk
    // would otherwise find, or it is suspending a check over nothing.
    for (const ex of EXEMPT) {
      expect(
        strip(read(ex)).includes('_nativePost('),
        `${ex} is exempted and no longer calls _nativePost — drop the exemption`,
      ).toBe(true);
    }
    // And the walk must genuinely be walking.
    expect(found.length).toBeGreaterThanOrEqual(4);
  });
});

// A transport-reason CODE must reach the Sentry tag, so `transportFailure` has
// to keep the honest kind AND carry the code.
describe('transportFailure', () => {
  it('is network (nothing answered is not a server fault) and carries the code', async () => {
    const { transportFailure } = await import('../lib/aiFailure');
    const f = transportFailure('fetch_threw');
    expect(f.kind).toBe('network');
    expect(f.code).toBe('fetch_threw');
    expect(f.retryable).toBe(true);
    expect(f.message).toBe(transportFailure().message); // the code never changes the sentence
  });
});
