/**
 * edgeTtsVoice.test.js — the free Croatian neural voice that had never run.
 *
 * Owner, 2026-09-10, after being asked a fourth time to set a key:
 * "This is bullshit. You have asked for this four times. Go figure it out."
 *
 * They were right, and the thing to figure out was already in the file. The
 * voice chain's third backend is Microsoft Edge's read-aloud endpoint serving
 * `hr-HR-GabrijelaNeural` — the SAME Croatian neural voice Azure serves, free,
 * with no account and no key. It has never executed once, for two independent
 * reasons, neither of which needed anything from the owner:
 *
 *   1. It opened with `if (!edgeTtsToken) return null` against
 *      `env.EDGE_TTS_TOKEN`, which was never set. But `trustedclienttoken` is
 *      not a credential — it is the fixed public client id compiled into the
 *      Edge browser. A free voice was gated behind a flag that never needed to
 *      exist, so the chain fell to Google Translate (robotic, and it answers a
 *      datacenter IP with a consent body rather than audio) and to a Google
 *      Cloud path needing an API nobody had enabled.
 *   2. Even had the flag been set, it called `new WebSocket(url)` — the browser
 *      constructor. A Cloudflare Worker opens an outbound socket by asking
 *      fetch() for the 101 and reading `response.webSocket`. So the flag was
 *      hiding a transport that could not have worked either.
 *
 * WHAT IS NOT CLAIMED: that this makes audio play. The dev sandbox's egress
 * proxy blocks speech.platform.bing.com (verified: CONNECT tunnel 403), so the
 * socket cannot be exercised from here. What IS established is that the backend
 * now runs at all, that its one piece of real arithmetic is correct against an
 * independent implementation, and that if it still fails the 503 names WHICH
 * backend died instead of repeating the configured list.
 */
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import { edgeSecMsGec } from '../../functions/api/tts.js';

const strip = (src) => src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
// Comments stripped: this file's own prose quotes `new WebSocket(` and the old
// early return verbatim, and a source pin satisfied by its own explanation has
// already happened four times in this session.
const TTS = strip(readFileSync('functions/api/tts.js', 'utf8'));

describe('the backend is no longer gated behind a flag that never needed to exist', () => {
  it('runs on a built-in public client token, with env only as an override', () => {
    expect(TTS).toMatch(/const EDGE_TRUSTED_CLIENT_TOKEN = '[0-9A-F]{32}';/);
    expect(TTS).toMatch(/const token = edgeTtsToken \|\| EDGE_TRUSTED_CLIENT_TOKEN;/);
    // THE DEFECT, in one assertion.
    expect(TTS, 'the backend skips itself again when EDGE_TTS_TOKEN is unset').not.toMatch(
      /if \(!edgeTtsToken\) return null/,
    );
  });

  it('is reached from the chain, and ahead of Google Translate', () => {
    const edge = TTS.indexOf('buffer = await tryEdgeTTS(');
    const gtrans = TTS.indexOf('buffer = await tryGoogleTranslateTTS(');
    expect(edge, 'the chain never calls tryEdgeTTS').toBeGreaterThan(-1);
    expect(gtrans).toBeGreaterThan(-1);
    // A real neural voice must not sit behind the robotic one that also refuses
    // datacenter IPs. Ordering it second only mattered once it could run.
    expect(edge, 'Google Translate is being tried before the neural voice again').toBeLessThan(
      gtrans,
    );
  });

  it('asks for the Croatian neural voice by name', () => {
    expect(TTS).toMatch(/const voice = 'hr-HR-GabrijelaNeural';/);
  });
});

describe('Sec-MS-GEC', () => {
  const TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';

  /**
   * An INDEPENDENT implementation of the published algorithm, from node:crypto
   * and plain integer maths rather than from the function under test. A test
   * that recomputed the digest the same way would only prove the function
   * agrees with itself.
   */
  function referenceGec(token, nowMs) {
    let secs = Math.floor(nowMs / 1000) + 11644473600;
    secs -= secs % 300;
    const ticks = BigInt(secs) * 10000000n;
    return createHash('sha256').update(`${ticks}${token}`).digest('hex').toUpperCase();
  }

  it('matches the reference at several instants', async () => {
    for (const t of [1757500000000, 1600000000000, 1757500299999, 1893456000000]) {
      expect(await edgeSecMsGec(TOKEN, t)).toBe(referenceGec(TOKEN, t));
    }
  });

  it('computes ticks outside the safe-integer range, in BigInt', async () => {
    // Ticks are 100-ns intervals since 1601 — ~1.34e17 today, against
    // MAX_SAFE_INTEGER 9.0e15, so this is outside the range where Number
    // arithmetic is guaranteed exact.
    const secs = Math.floor(1757500000000 / 1000) + 11644473600 - 300;
    expect(secs * 1e7).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
    // AND YET the Number path agrees, at every instant tested: each tick is a
    // multiple of 3e9 (hence of 2^9) while the ulp here is 16–32, so the
    // product is exactly representable. This assertion exists to record that,
    // because the first draft of the source comment claimed the opposite and
    // this file disproved it. If it ever starts failing, the divisibility
    // argument has broken and BigInt has stopped being mere insurance.
    for (const t of [1757500000000, 1600000000000, 1893456000000]) {
      let s = Math.floor(t / 1000) + 11644473600;
      s -= s % 300;
      expect(String(s * 1e7)).toBe(String(BigInt(s) * 10000000n));
    }
    expect(TTS, 'the tick arithmetic left BigInt').toMatch(/ticks \*= 10000000n;/);
    expect(TTS).toMatch(/BigInt\(Math\.floor\(nowMs \/ 1000\)\)/);
    expect(TTS, 'the disproved "every token is wrong" claim is back').not.toMatch(
      /every token is wrong/,
    );
  });

  it('is stable within a 5-minute window and changes across one', async () => {
    // The service rounds to the same window, so two plays a minute apart must
    // present the same token; a stale one is refused.
    const base = 1757500000000;
    expect(await edgeSecMsGec(TOKEN, base)).toBe(await edgeSecMsGec(TOKEN, base + 60000));
    expect(await edgeSecMsGec(TOKEN, base)).not.toBe(await edgeSecMsGec(TOKEN, base + 300000));
  });

  it('is uppercase hex of the right length', async () => {
    expect(await edgeSecMsGec(TOKEN, 1757500000000)).toMatch(/^[0-9A-F]{64}$/);
  });
});

describe('the request is shaped the way the service requires', () => {
  it('carries the GEC token and its version on the URL', () => {
    expect(TTS).toMatch(/Sec-MS-GEC=\$\{gec\}/);
    expect(TTS).toMatch(/Sec-MS-GEC-Version=\$\{EDGE_GEC_VERSION\}/);
    expect(TTS).toMatch(/const EDGE_GEC_VERSION = '1-\d+\.\d+\.\d+\.\d+';/);
  });

  it('opens the socket the way a Worker actually can', () => {
    // `new WebSocket(url)` is a browser API. A Worker requests the upgrade
    // through fetch() and takes `response.webSocket` — which is also the only
    // form that can send the Origin/User-Agent headers this service checks.
    expect(TTS, 'the browser WebSocket constructor is back on the Worker path').not.toMatch(
      /new WebSocket\(/,
    );
    expect(TTS).toMatch(/Upgrade: 'websocket'/);
    expect(TTS).toMatch(/const ws = res\.webSocket;/);
    expect(TTS).toMatch(/ws\.accept\(\);/);
    expect(TTS).toMatch(/Origin: 'chrome-extension:/);
  });

  it('sends the JS-shaped timestamp, with the trailing Z the browser sends', () => {
    // NOT ISO-8601, which is what it sent untested for as long as it never ran.
    expect(TTS).toMatch(/GMT\+0000 \(Coordinated Universal Time\)/);
    expect(TTS).toMatch(/X-Timestamp:\$\{ts\}Z\\r\\nPath:ssml/);
  });

  it('never resolves twice, and a close before turn.end is a failure', () => {
    // The old shape could reject on close AFTER resolving on turn.end, and left
    // the socket open on the reject paths.
    expect(TTS).toMatch(/if \(settled\) return;/);
    expect(TTS).toMatch(/edge-tts closed early/);
  });
});

describe('a failed chain names which backend died', () => {
  it('the 503 diagnostic header carries the failure list, not the config list', () => {
    // The client reads X-TTS-Backends into the Sentry breadcrumb and drops the
    // body except for the budget check. On the configured list a silent
    // afternoon reported the same string a healthy deploy sends.
    expect(TTS).toMatch(/'X-TTS-Backends': `\$\{whyFailed\}\$\{emptyNote\}`/);
    expect(TTS).toMatch(/'edge-failed'/);
  });
});
