/**
 * apiPreflightContract.test.js — an authed endpoint must let the token through.
 *
 * THE BUG THIS GENERALISES
 * ------------------------
 * `scene-video.js` and `digest.js` each verified a Firebase token and each
 * advertised `Access-Control-Allow-Headers: 'Content-Type'`. Both were dead in
 * the native build and fine on the web, which is why it went unnoticed for so
 * long:
 *
 *   web     — app and /api/* share an origin. No preflight. The Authorization
 *             header is sent freely and nobody ever consults the allow-list.
 *   native  — the Capacitor app runs at https://localhost and API_BASE points at
 *             https://nasahrvatska.com. Cross-origin, so the WebView MUST
 *             preflight before sending a non-simple header. The reply did not
 *             name Authorization, the preflight failed, and the real request was
 *             never issued at all.
 *
 * Nothing in the request path can detect this: the endpoint is never reached, so
 * there is no log, no error, no 4xx. It is only visible by reading the header.
 *
 * Nine endpoints verify a token today and each keeps its own copy of the CORS
 * block — some local, some from _helpers.js — so this is a standing invitation
 * for the same divergence. Hence a contract over all of them rather than two
 * fixed files: a new authed endpoint that forgets Authorization fails here
 * instead of shipping dead to phones, where only a device build would find it.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const API_DIR = 'functions/api';

/** Endpoint modules — files starting with `_` are shared helpers, never routes. */
const endpoints = readdirSync(API_DIR)
  .filter((f) => f.endsWith('.js') && !f.startsWith('_'))
  .map((f) => ({ file: f, src: readFileSync(join(API_DIR, f), 'utf8') }));

const SHARED_ALLOW_HEADERS = (() => {
  const helpers = readFileSync(join(API_DIR, '_helpers.js'), 'utf8');
  const m = helpers.match(/'Access-Control-Allow-Headers':\s*'([^']*)'/);
  return m ? m[1] : null;
})();

interface Endpoint {
  file: string;
  src: string;
}

/** Does this endpoint authenticate the caller? */
const verifiesToken = (src: string) => /getFirebase(Uid|Claims)|verifyToken\s*\(/.test(src);

/**
 * The `Access-Control-Allow-Headers` an endpoint actually replies with, whether
 * it defines its own CORS block or imports the shared one. Returns null when
 * neither can be resolved — treated as a failure, not a pass, so a refactor that
 * moves the header somewhere this cannot see does not silently defeat the test.
 */
function allowHeadersFor({ src }: Endpoint): string | null {
  const local = src.match(/'Access-Control-Allow-Headers':\s*'([^']*)'/);
  if (local) return local[1];
  if (/from '\.\/_helpers\.js'/.test(src) && /corsHeaders/.test(src)) return SHARED_ALLOW_HEADERS;
  return null;
}

describe('authed endpoints accept the Authorization header at preflight', () => {
  const authed = endpoints.filter((e) => verifiesToken(e.src));

  it('non-vacuity: the scan finds the endpoints it is meant to police', () => {
    expect(SHARED_ALLOW_HEADERS).toContain('Authorization');
    // Guards against a rename or move quietly emptying this suite.
    expect(authed.length).toBeGreaterThanOrEqual(8);
    const names = authed.map((e) => e.file);
    expect(names).toContain('scene-video.js');
    expect(names).toContain('digest.js');
    expect(names).toContain('award.js');
  });

  it('non-vacuity: the matcher reads a real value for every authed endpoint', () => {
    for (const e of authed) {
      expect(`${e.file}: ${allowHeadersFor(e) === null ? 'unresolved' : 'resolved'}`).toBe(
        `${e.file}: resolved`,
      );
    }
  });

  it('every endpoint that verifies a token allows Authorization', () => {
    for (const e of authed) {
      const allow = allowHeadersFor(e) ?? '';
      expect(`${e.file}: ${allow}`).toContain('Authorization');
    }
  });

  it('every endpoint that verifies a token answers the preflight at all', () => {
    // No onRequestOptions is the same failure by a different route: Pages does
    // not auto-handle OPTIONS, so the preflight gets whatever the catch-all
    // returns and the browser rejects it.
    for (const e of authed) {
      expect(`${e.file}: ${e.src.includes('onRequestOptions')}`).toBe(`${e.file}: true`);
    }
  });
});

describe('advertised methods match the handlers that exist', () => {
  // The sibling drift: an endpoint that handles POST but advertises only GET
  // fails preflight just as completely, and just as invisibly on the web.
  const withMethods = endpoints
    .map((e) => ({
      ...e,
      methods: e.src.match(/'Access-Control-Allow-Methods':\s*'([^']*)'/)?.[1],
    }))
    .filter((e): e is Endpoint & { methods: string } => Boolean(e.methods));

  it('non-vacuity: endpoints declaring a method list were found', () => {
    expect(withMethods.length).toBeGreaterThanOrEqual(5);
  });

  // Parsed list only. Interpolating the verb into the asserted string — as in
  // `expect(\`handles ${verb}\`).toContain(verb)` — makes the assertion true by
  // construction; it passed against a scene-video.js deliberately mislabelled
  // 'POST, OPTIONS' while exporting onRequestGet. File context belongs in the
  // failure message, never in the compared value.
  const advertised = (e: { methods: string }) =>
    e.methods.split(',').map((s) => s.trim().toUpperCase());

  it('declares OPTIONS wherever a method list is given', () => {
    for (const e of withMethods) {
      expect(advertised(e), `${e.file} advertises "${e.methods}"`).toContain('OPTIONS');
    }
  });

  it('declares each verb it actually exports a handler for', () => {
    for (const e of withMethods) {
      for (const verb of ['Get', 'Post', 'Put', 'Delete']) {
        if (!new RegExp(`export async function onRequest${verb}\\b`).test(e.src)) continue;
        expect(
          advertised(e),
          `${e.file} exports onRequest${verb} but advertises "${e.methods}"`,
        ).toContain(verb.toUpperCase());
      }
    }
  });
});
