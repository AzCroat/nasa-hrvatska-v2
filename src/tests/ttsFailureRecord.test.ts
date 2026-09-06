/**
 * ttsFailureRecord.test.ts — every TTS failure has a NAME, reaches Sentry, and
 * a superseded play is not a failure (2026-09-06).
 *
 * Before: speakAzure() returned a bare `false` for a 429 quota refusal, a 503
 * budget pause, a network drop and a decode error alike; speak() dispatched a
 * nameless `nh:tts-failed`; nothing left the device. A learner whose Level
 * Check played nothing saw "Audio unavailable" for 2.5 seconds and we saw
 * nothing at all. And a second tap on a speaker icon made the FIRST call fall
 * through to the Web Speech fallback (or toast a failure) while the second
 * played — a false alarm on every double-tap.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn() }));
import { reportError } from '../lib/errorReporter';
import { speak, getLastTtsFailure, describeTtsFailure } from '../lib/audio';

function jsonResponse(status: number, body: unknown, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

beforeEach(() => {
  vi.mocked(reportError).mockClear();
  // jsdom has no speechSynthesis → no fallback voice → a failed fetch is a
  // reported failure, exactly like a desktop browser without a Croatian voice.
  Object.defineProperty(window, 'speechSynthesis', { value: undefined, configurable: true });
});

describe('failure classification', () => {
  it('a 429 daily_quota_exceeded is recorded as daily_quota, reported once, and carried on the event', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () =>
        jsonResponse(
          429,
          { error: 'daily_quota_exceeded', resetAt: 'x' },
          { 'x-tts-backends': 'azure,gtranslate,edge' },
        ),
      ),
    );
    const events: CustomEvent[] = [];
    const onFail = (e: Event) => events.push(e as CustomEvent);
    window.addEventListener('nh:tts-failed', onFail);

    const result = await speak('Dobar dan, kako ste?');
    window.removeEventListener('nh:tts-failed', onFail);

    expect(result).toBe('failed');
    const f = getLastTtsFailure();
    expect(f).toMatchObject({
      cause: 'no_fallback_voice',
      underlying: 'daily_quota',
      status: 429,
      code: 'daily_quota_exceeded',
      backends: 'azure,gtranslate,edge',
    });
    expect(events).toHaveLength(1);
    expect(events[0]!.detail).toMatchObject({ underlying: 'daily_quota' });
    expect(reportError).toHaveBeenCalledTimes(1);
    const [err, ctx] = vi.mocked(reportError).mock.calls[0]!;
    expect((err as Error).message).toBe('tts_failed:no_fallback_voice<daily_quota');
    expect(String(ctx)).toContain('status=429');
    expect(String(ctx)).toContain('code=daily_quota_exceeded');
    // The learner-facing line names the condition, not a generic "unavailable".
    expect(describeTtsFailure(f)).toMatch(/midnight UTC/);
  });

  it('a 503 budget pause, a 401 and a transport failure each get their own cause', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('TTS unavailable — budget-paused', { status: 503 })),
    );
    await speak('Jedan.');
    expect(getLastTtsFailure()?.underlying).toBe('budget_paused');
    expect(describeTtsFailure(getLastTtsFailure())).toMatch(/1st/);

    vi.stubGlobal(
      'fetch',
      vi.fn(async () => jsonResponse(401, { error: 'unauthenticated' })),
    );
    await speak('Dva.');
    expect(getLastTtsFailure()?.underlying).toBe('unauthenticated');

    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new TypeError('Failed to fetch');
      }),
    );
    await speak('Tri.');
    expect(getLastTtsFailure()?.underlying).toBe('network');
    expect(describeTtsFailure(getLastTtsFailure())).toMatch(/connection/);
  });

  it('reports at most three times per cause per session', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('TTS unavailable — azure-failed', { status: 503 })),
    );
    for (let i = 0; i < 5; i++) await speak(`Riječ ${i}.`);
    // provider_unavailable is a fresh cause in this file → 3 reports, not 5.
    const calls = vi
      .mocked(reportError)
      .mock.calls.filter((c) => String((c[0] as Error).message).includes('provider_unavailable'));
    expect(calls).toHaveLength(3);
  });
});

describe('a superseded play is not a failure', () => {
  it('the first of two overlapping plays resolves "superseded" with no event and no report', async () => {
    // fetch honours the abort signal: the first request hangs until stopAudio()
    // aborts it when the second speak() starts; the second gets a 429 so the
    // whole sequence ends without a real audio element (jsdom has none).
    let calls = 0;
    vi.stubGlobal(
      'fetch',
      vi.fn((_url: string, init?: RequestInit) => {
        calls += 1;
        if (calls === 1) {
          return new Promise<Response>((_resolve, reject) => {
            init?.signal?.addEventListener('abort', () => {
              const e = new Error('aborted');
              e.name = 'AbortError';
              reject(e);
            });
          });
        }
        return Promise.resolve(jsonResponse(429, { error: 'rate_limited' }));
      }),
    );
    const events: CustomEvent[] = [];
    const onFail = (e: Event) => events.push(e as CustomEvent);
    window.addEventListener('nh:tts-failed', onFail);

    const first = speak('Prva rečenica.');
    // Let the first call reach its fetch before the second supersedes it.
    await new Promise((r) => setTimeout(r, 0));
    const second = speak('Druga rečenica.');
    const [r1, r2] = await Promise.all([first, second]);
    window.removeEventListener('nh:tts-failed', onFail);

    expect(r1).toBe('superseded');
    expect(r2).toBe('failed');
    // Exactly ONE event and one report — for the second, real failure.
    expect(events).toHaveLength(1);
    expect(events[0]!.detail).toMatchObject({ underlying: 'rate_limited' });
    const superseded = vi
      .mocked(reportError)
      .mock.calls.filter((c) => String((c[0] as Error).message).includes('superseded'));
    expect(superseded).toHaveLength(0);
  });
});

describe('speakSlow shares the contract', () => {
  it('a slow play that fails records the cause, carries the message on the event, and reports', async () => {
    const { speakSlow } = await import('../lib/audio');
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => jsonResponse(429, { error: 'daily_quota_exceeded' })),
    );
    const events: CustomEvent[] = [];
    const onFail = (e: Event) => events.push(e as CustomEvent);
    window.addEventListener('nh:tts-failed', onFail);
    const r = await speakSlow('Polako.');
    window.removeEventListener('nh:tts-failed', onFail);
    expect(r).toBe('failed');
    expect(getLastTtsFailure()?.underlying).toBe('daily_quota');
    expect(events).toHaveLength(1);
    // The app-level toast reads this and says WHY, without importing audio.ts.
    expect(events[0]!.detail.message).toMatch(/midnight UTC/);
  });
});
