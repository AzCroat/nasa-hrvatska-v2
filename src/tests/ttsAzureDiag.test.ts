// A 503 from /api/tts names WHY Azure failed, so a Sentry event is diagnosable
// (tts_failed:provider_unavailable carried only "azure-failed").
import { afterEach, describe, expect, it, vi } from 'vitest';
import { tryAzure } from '../../functions/api/tts.js';

afterEach(() => vi.unstubAllGlobals());

describe('tryAzure diagnostics', () => {
  it('records the failing stage, status and region', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('no', { status: 401 })),
    );
    const diag: { reason?: string } = {};
    const out = await tryAzure('Dobar dan', { slow: false }, 'key', 'westeurope', diag);
    expect(out).toBeNull();
    expect(diag.reason).toBe('token401@westeurope');
  });

  it('records a synthesis refusal', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string) =>
        String(url).includes('issueToken')
          ? new Response('tok', { status: 200 })
          : new Response('quota', { status: 429 }),
      ),
    );
    const diag: { reason?: string } = {};
    await tryAzure('Dobar dan', { slow: false }, 'key', 'westeurope', diag);
    expect(diag.reason).toBe('synth429@westeurope');
  });

  it('works without a diag argument (existing callers)', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('no', { status: 500 })),
    );
    expect(await tryAzure('Dobar dan', { slow: false }, 'key', 'westeurope')).toBeNull();
  });
});
