/**
 * healthAnyAI.test.js — /api/health must not report healthy during an AI outage.
 *
 * THE BUG. `ai.anyAI` was `anthropicAI || openaiAI`, and it feeds this
 * endpoint's top-level `ok`. OPENAI_API_KEY is real but it is a WHISPER STT
 * credential — read by `_transcribe.js` and `/api/stt` and nowhere else; there
 * is no OpenAI chat/completions call anywhere in functions/. So with
 * ANTHROPIC_API_KEY unset and OPENAI_API_KEY set, /api/health answered
 * `ok: true` while every AI feature — the tutor, stories, writing feedback, the
 * Level Check's own scoring — was returning 503 AI_KEY_MISSING.
 *
 * Same shape as the push-health `ok` that meant "not expired" rather than
 * "delivered": a field answering a NARROWER question than the one it appears
 * to answer, in the one place someone looks to find out whether the system is
 * up.
 *
 * The key is still reported where it is genuinely used — `stt.openai`.
 *
 * DRIVES THE REAL HANDLER, not a restatement of its logic, and carries the
 * STALENESS half: if an OpenAI chat call is ever added, the premise ("that key
 * is STT-only") stops holding and this test says so rather than silently
 * guarding the wrong thing.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { onRequestGet } from '../../functions/api/health.js';

function ctx(env) {
  return { request: { headers: { get: () => '' } }, env };
}
async function health(env) {
  return (await onRequestGet(ctx(env))).json();
}

const LONG = 'x'.repeat(40);

describe('anyAI reflects only a real AI provider', () => {
  it('reports DOWN when Anthropic is absent, whatever the STT key says', async () => {
    // The exact configuration that used to answer ok:true.
    const body = await health({
      OPENAI_API_KEY: LONG,
      DEEPGRAM_API_KEY: LONG,
      AZURE_TTS_KEY: LONG,
      ENVIRONMENT: 'production',
    });
    expect(body.services.ai.anyAI, 'anyAI is true with no Anthropic key').toBe(false);
    expect(body.ok, '/api/health reports ok during a total AI outage').toBe(false);
  });

  it('reports UP when Anthropic is present', async () => {
    const body = await health({
      ANTHROPIC_API_KEY: LONG,
      OPENAI_API_KEY: LONG,
      DEEPGRAM_API_KEY: LONG,
      AZURE_TTS_KEY: LONG,
      ENVIRONMENT: 'production',
    });
    expect(body.services.ai.anyAI).toBe(true);
    expect(body.ok).toBe(true);
  });

  it('still reports the OpenAI key under STT, where it is actually used', async () => {
    const body = await health({ OPENAI_API_KEY: LONG, ENVIRONMENT: 'production' });
    expect(body.services.stt.openai, 'the Whisper credential stopped being reported').toBe(true);
    expect(
      body.services.ai.openai,
      'ai.openai claims a service that does not exist',
    ).toBeUndefined();
  });

  it('the premise still holds: nothing calls OpenAI for text generation', () => {
    // THE STALENESS HALF. If an OpenAI chat endpoint is ever added, `anyAI`
    // SHOULD count it — and this failing is the prompt to revisit, rather than
    // a guard quietly enforcing a rule whose reason has expired.
    const files = [];
    (function walk(d) {
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
      for (const e of readdirSync(d)) {
        const p = join(d, e);
        // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
        if (statSync(p).isDirectory()) walk(p);
        else if (p.endsWith('.js') && !p.includes('__tests__')) files.push(p);
      }
    })('functions');
    const chatCallers = files.filter((f) =>
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
      /api\.openai\.com\/v1\/(chat|responses|completions)/.test(readFileSync(f, 'utf8')),
    );
    expect(
      chatCallers,
      'something now calls OpenAI for generation — anyAI should count it again',
    ).toEqual([]);
  });
});
