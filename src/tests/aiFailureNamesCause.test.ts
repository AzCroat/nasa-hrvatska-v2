/**
 * aiFailureNamesCause.test.ts — a 5xx with no code told us nothing.
 *
 * Sentry, 2026-09-10: `ai_feedback_failed:speaking-coach:server`, context
 * `surface=speaking-coach kind=server status=502`, from /speaking_guided.
 * Owner: "in Guided Speaking the feedback for the speaker on how they
 * completed the task is not working and this has happened previously."
 *
 * THE REPORT COULD NOT BE ACTED ON, and the reason is the point of this file.
 * `/api/speaking-coach` has SIX distinct `err(502, …)` returns — a network
 * failure reaching Anthropic, an unreadable body, an upstream 5xx, a non-JSON
 * envelope, an empty completion, and an unparseable reply. Every one of them
 * would have arrived as `kind=server status=502`, and the event carried no
 * `code=` to separate them.
 *
 * Worse, the ABSENCE of a code was itself evidence nobody was recording.
 * Every error this app's handlers return is `{ error: '<code>' }`, so a body
 * that will not parse means the response did not come from a handler at all —
 * it is Cloudflare's error page for a Function that threw or never returned.
 * `failureFromResponse` swallowed that in a bare `catch {}`, so "our endpoint
 * refused" and "our endpoint never ran" were the same event.
 *
 * Both halves are closed here: the endpoint's 502s carry distinct codes, and
 * an unparseable body is named `non_json_body` instead of nothing.
 *
 * WHAT IS NOT CLAIMED: that this fixes the owner's failure. The cause is not
 * established — it cannot be read from a report that omits the one field that
 * would identify it, and production is unreachable from the dev sandbox. What
 * IS established is that the NEXT occurrence names itself, and that one whole
 * class (the gate's dependencies throwing) can no longer present as an
 * anonymous 502 at all.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { failureFromResponse, failureFromStatus } from '../lib/aiFailure';

const strip = (src: string) =>
  src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
const COACH = strip(readFileSync('functions/api/speaking-coach.js', 'utf8'));
const GATE = strip(readFileSync('functions/api/_requireAuth.js', 'utf8'));

describe('an unparseable error body is a fact, not a gap', () => {
  it('names non_json_body — the signature of a Function that never returned', async () => {
    // Cloudflare's own error page: HTML, not our `{ error: … }` envelope.
    const res = new Response('<!DOCTYPE html><html>error 502</html>', { status: 502 });
    const f = await failureFromResponse(res);
    expect(f.kind, 'a 5xx is still a server failure — the KIND must not move').toBe('server');
    expect(f.status).toBe(502);
    // THE REPORTED EVENT, in one assertion: this used to be undefined.
    expect(f.code, 'an anonymous 502 is back — indistinguishable from six real ones').toBe(
      'non_json_body',
    );
  });

  it('a real handler refusal still reports ITS code, never the placeholder', async () => {
    const res = new Response(JSON.stringify({ error: 'upstream_network' }), { status: 502 });
    const f = await failureFromResponse(res);
    expect(f.code).toBe('upstream_network');
    expect(f.kind).toBe('server');
  });

  it('does not change the learner-facing sentence', async () => {
    // The kind drives the message; only the diagnostic field moved.
    const anon = await failureFromResponse(new Response('nope', { status: 502 }));
    expect(anon.message).toBe(failureFromStatus(502, '').message);
  });
});

describe('the six 502s are told apart', () => {
  it('each failure path carries a distinct machine code', () => {
    const codes = [...COACH.matchAll(/err\(502, '([a-z_]+)'/g)].map((m) => m[1]);
    expect(codes.length, 'a 502 path lost its code').toBeGreaterThanOrEqual(5);
    expect(new Set(codes).size, `two paths share a code: ${codes.join(', ')}`).toBe(codes.length);
    // No prose left where a code belongs — a sentence is not a diagnosis.
    expect(COACH, 'a 502 is returning an English sentence as its code').not.toMatch(
      /err\(502, '[A-Z]/,
    );
  });

  it('an unusable reply is classified as retryable, not as the service being down', () => {
    // An empty completion and a non-JSON envelope are the MODEL misbehaving;
    // the retry clears them, and the learner should be told so.
    for (const code of ['empty_reply', 'upstream_not_json', 'parse_failed']) {
      expect(failureFromStatus(502, code).kind, code).toBe('unusable_reply');
      expect(failureFromStatus(502, code).retryable).toBe(true);
    }
    // A genuine transport failure stays `server`.
    for (const code of ['upstream_network', 'upstream_body_unreadable']) {
      expect(failureFromStatus(502, code).kind, code).toBe('server');
    }
  });
});

describe('a gate dependency that throws is a named refusal, not an opaque 5xx', () => {
  it('requireAuthedAI catches and fails closed with a code', () => {
    // checkRateLimit (Cache API), getFirebaseUid (JWKS fetch), checkAIQuota
    // and checkAndChargeBudget (D1/KV) all do I/O and can reject. No endpoint
    // wraps this call, so a throw became an unhandled rejection and the
    // learner got Cloudflare's HTML error page.
    expect(GATE).toMatch(/try \{\s*return await runGate\(\);/);
    expect(GATE).toMatch(/return fail\(503, 'gate_unavailable'\);/);
  });

  it('fails CLOSED — never returns ok on a dependency error', () => {
    // The dangerous direction: a gate that swallowed an error and continued
    // would let an unauthenticated, unmetered call through to Claude.
    const seg = GATE.slice(GATE.indexOf('catch (e)'), GATE.indexOf('async function runGate'));
    expect(seg, 'the gate catch returns ok — auth and budget are bypassed').not.toMatch(
      /ok:\s*true/,
    );
  });

  it('503 with that code is a server failure the client can name', () => {
    const f = failureFromStatus(503, 'gate_unavailable');
    expect(f.kind).toBe('server');
    expect(f.code).toBe('gate_unavailable');
    expect(f.retryable).toBe(true);
  });
});
