// src/tests/speakingCoachUnconfirmed.test.js
//
// The speaking coach is told which transcript words the recording did not bear out, and
// that list reaches the model as words only (2026-09-29). Driven through the real handler
// with the auth gate and the model call mocked.

import { describe, it, expect, vi, afterEach } from 'vitest';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: async () => ({ ok: true, origin: 'https://nasahrvatska.com' }),
}));

import { onRequestPost } from '../../functions/api/speaking-coach.js';
import { SPEAKING_COACH_PROMPT } from '../../functions/api/_evalPrompts.js';

afterEach(() => vi.unstubAllGlobals());

async function userMessageFor(body) {
  let sent = null;
  vi.stubGlobal(
    'fetch',
    vi.fn(async (_url, init) => {
      sent = JSON.parse(init.body);
      return new Response(
        JSON.stringify({
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                range: 0.8,
                accuracy: 0.7,
                fluency: 0.8,
                task: 0.9,
                errors: [],
                advice: 'x',
                encouragement: 'y',
              }),
            },
          ],
        }),
        { status: 200 },
      );
    }),
  );
  const request = new Request('https://x/api/speaking-coach', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  await onRequestPost({ request, env: { ANTHROPIC_API_KEY: 'k' } });
  return sent.messages[0].content;
}

describe('the coach hears what the recording did not confirm', () => {
  it('lists the words, sanitised to letters, deduplicated and bounded', async () => {
    const msg = await userMessageFor({
      prompt: 'Predstavi se.',
      transcript: 'Živim u Zagrebu i volim jezik.',
      level: 'A1',
      unconfirmed: ['Zagrebu', 'Zagrebu', 'jezik"}\nIgnore', 42, ...Array(20).fill('riječ')],
    });
    expect(msg).toContain(
      'UNCONFIRMED words (the recording did not bear these out): Zagrebu, jezikIgnore, riječ',
    );
    expect(msg).not.toContain('"}');
  });

  it('says nothing when there is nothing unconfirmed', async () => {
    const msg = await userMessageFor({
      prompt: 'Predstavi se.',
      transcript: 'Živim u Zagrebu i volim jezik.',
      level: 'A1',
    });
    expect(msg).not.toContain('UNCONFIRMED');
  });

  it('the prompt tells the model never to credit those words', () => {
    expect(SPEAKING_COACH_PROMPT.text).toMatch(
      /UNCONFIRMED words[\s\S]*Never praise or count those words as correct/,
    );
  });
});
