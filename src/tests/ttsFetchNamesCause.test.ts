/**
 * ttsFetchNamesCause.test.ts — the OTHER path to /api/tts recorded nothing.
 *
 * Owner, 2026-09-10, on Listening practice: "The audio couldn't be played.
 * Transcript only."
 *
 * That sentence is the DEFAULT branch of `describeTtsFailure` — the one
 * reached when the cause matches no case in the switch. It is what
 * `describeTtsFailure(null)` returns. So the screen asked for the cause and
 * got nothing, which is the exact condition the 2026-09-06 audio directive
 * was written to abolish.
 *
 * THE DIRECTIVE WIRED THE NAMING TO `speakAzure`. There are TWO client paths
 * to /api/tts and only one was covered:
 *
 *   speak()/speakSlow() → speakAzure()  — records every failure. Covered.
 *   ttsFetch()                          — returned `Response | null`, set
 *                                         nothing, reported nothing.
 *
 * `ttsFetch` is not a corner: AI Listening, Maja, the live tutor, the news
 * reader, Story Mode, the graded reader, Writing, Speaking Sprint and Phrase
 * of the Day all use it. Every one of them has been failing namelessly, and
 * because `_reportTtsFailure` was never called on that path, NOTHING reached
 * Sentry either — which is why four rounds of this produced no evidence.
 *
 * Same shape as the speaking coach wired to a `sw[2]` value no launcher ever
 * produces: a correct, tested library pointed at something that does not
 * happen. And the same lesson — #632's own commit message claimed this screen
 * "names its cause". It could not, and only the owner running it showed that.
 */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { ttsFetch, getLastTtsFailure, describeTtsFailure } from '../lib/audio';

const realFetch = globalThis.fetch;

/** A /api/tts response shaped like the real one, headers included. */
function ttsResponse(status: number, body: string, backends: string) {
  return new Response(body, {
    status,
    headers: { 'X-TTS-Backends': backends },
  });
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn());
});
afterEach(() => {
  vi.unstubAllGlobals();
  globalThis.fetch = realFetch;
});

describe('ttsFetch records a named cause', () => {
  it('a 503 with every backend dead is provider_unavailable, not silence', async () => {
    // The exact body and header the endpoint now sends when the chain is out.
    const backends = 'azure-not-configured,edge-failed,gtranslate-failed,google-not-configured';
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      ttsResponse(503, `TTS unavailable — ${backends}`, backends),
    );
    await ttsFetch({ text: 'Dobar dan' });
    const f = getLastTtsFailure();
    expect(f, 'ttsFetch recorded nothing — the screen has no cause to name').not.toBeNull();
    expect(f!.cause).toBe('provider_unavailable');
    expect(f!.status).toBe(503);
    // THE POINT OF THE WHOLE CHANGE: which backend died is now on the record,
    // so the next report starts from evidence instead of a guess.
    expect(f!.backends).toContain('edge-failed');
  });

  it('the learner-facing sentence stops being the default', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      ttsResponse(503, 'TTS unavailable — edge-failed', 'edge-failed'),
    );
    await ttsFetch({ text: 'Dobar dan' });
    const msg = describeTtsFailure(getLastTtsFailure());
    // THE REPORTED STRING, in one assertion.
    expect(msg, 'still the default sentence — the cause is not being recorded').not.toBe(
      "The audio couldn't be played.",
    );
    expect(msg).toMatch(/voice service is temporarily unavailable/i);
  });

  it('classifies the learner-limit cases distinctly', async () => {
    const cases: [number, string, string][] = [
      [429, JSON.stringify({ error: 'daily_quota_exceeded' }), 'daily_quota'],
      [429, JSON.stringify({ error: 'monthly_budget_exhausted' }), 'monthly_budget'],
      [401, 'unauthorized', 'unauthenticated'],
      [503, 'TTS unavailable — budget-paused', 'budget_paused'],
    ];
    for (const [status, body, expected] of cases) {
      (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
        ttsResponse(status, body, 'azure'),
      );
      await ttsFetch({ text: 'Dobar dan' });
      expect(getLastTtsFailure()!.cause, `status ${status}`).toBe(expected);
    }
  });

  it('a dead transport is network, not a fabricated server code', async () => {
    // _nativePost returns null when nothing answered at all.
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new TypeError('fetch failed'));
    await ttsFetch({ text: 'Dobar dan' });
    expect(getLastTtsFailure()!.cause).toBe('network');
  });

  it('leaves the caller a readable body — the clone is load-bearing', async () => {
    // Several callers inspect the Response after ttsFetch returns. Reading the
    // error body directly instead of from a clone would hand them a consumed
    // stream, turning a diagnostic improvement into a new bug.
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      ttsResponse(503, 'TTS unavailable — edge-failed', 'edge-failed'),
    );
    const r = await ttsFetch({ text: 'Dobar dan' });
    expect(r).not.toBeNull();
    expect(r!.bodyUsed, 'the caller was handed an already-consumed Response').toBe(false);
    await expect(r!.text()).resolves.toContain('edge-failed');
  });

  it('a success clears any stale failure from an earlier screen', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      ttsResponse(503, 'TTS unavailable — edge-failed', 'edge-failed'),
    );
    await ttsFetch({ text: 'prvi' });
    expect(getLastTtsFailure()).not.toBeNull();
    // A real audio body: over MIN_AUDIO_BYTES so nothing else objects.
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      new Response('x'.repeat(2000), { status: 200, headers: { 'X-TTS-Backends': 'edge' } }),
    );
    await ttsFetch({ text: 'drugi' });
    expect(
      getLastTtsFailure(),
      'a stale failure would be reported as the cause of this play',
    ).toBeNull();
  });
});
