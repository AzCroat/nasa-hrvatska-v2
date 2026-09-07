// src/tests/correct.integration.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: vi.fn(async (context) => ({
    ok: true,
    uid: 'test-uid',
    origin: context?.request?.headers?.get?.('origin') || 'https://nasahrvatska.com',
    isDev: false,
  })),
}));
const reconcileSafely = vi.fn(async () => {});
vi.mock('../../functions/api/_aiBudget.js', async (importOriginal) => ({
  ...(await importOriginal()),
  reconcileSafely: (...a) => reconcileSafely(...a),
}));

import { onRequestPost } from '../../functions/api/correct.js';

function makeReq(body, env = {}) {
  const kvStore = new Map();
  const stubKV = {
    get: async (key) => kvStore.get(key) ?? null,
    put: async (key, value) => {
      kvStore.set(key, value);
    },
  };
  const baseEnv = {
    ANTHROPIC_API_KEY: 'fake-key',
    ENVIRONMENT: 'test',
    VITE_FIREBASE_PROJECT_ID: '',
    PUSH_SUBSCRIPTIONS: stubKV,
    ...env,
  };
  const request = new Request('https://nasahrvatska.com/api/correct', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://nasahrvatska.com' },
    body: JSON.stringify(body),
  });
  return { request, env: baseEnv };
}

let capturedClaudeBody = null;
let claudeReplyText = '{"corrected_text":"x","score":80}';
const USAGE = { input_tokens: 1500, output_tokens: 600 };

beforeEach(() => {
  capturedClaudeBody = null;
  claudeReplyText = '{"corrected_text":"x","score":80}';
  reconcileSafely.mockClear();
  vi.spyOn(globalThis, 'fetch').mockImplementation(async (_url, init) => {
    capturedClaudeBody = JSON.parse(init.body);
    return new Response(
      JSON.stringify({ content: [{ type: 'text', text: claudeReplyText }], usage: USAGE }),
      { status: 200 },
    );
  });
});

const baseBody = {
  prompt: 'Write 3 sentences about your family.',
  text: 'Imam mama i tata.',
};

const validContext = {
  version: 1,
  generatedAt: Date.now(),
  level: { cefr: 'B1', xp: 1500, streak: 6 },
  weakTopics: [{ topic: 'accusative', accuracy: 0.42, attempts: 19 }],
  recentErrors: [
    {
      topic: 'accusative',
      prompt: 'Vidim ____ knjigu',
      userAnswer: 'knjiga',
      correctAnswer: 'knjigu',
      minutesAgo: 5,
    },
  ],
  vocab: { learned: 540, dueToday: 28, hardest: ['studeni'] },
};

describe('correct.js — integration', () => {
  it('personalized path: system prompt contains rendered context prose', async () => {
    const ctx = makeReq({ ...baseBody, userContext: validContext });
    await onRequestPost(ctx);
    expect(capturedClaudeBody.system).toContain('B1');
    expect(capturedClaudeBody.system).toContain('accusative');
    expect(capturedClaudeBody.system).toContain('knjigu');
  });

  it('fallback path: system prompt does NOT contain context prose when userContext missing', async () => {
    const ctx = makeReq(baseBody);
    await onRequestPost(ctx);
    expect(capturedClaudeBody.system).not.toContain('USER ERROR CONTEXT');
  });
});

// ── Feedback MUST work every time (owner directive, 2026-09-07) ──────────────
describe('correct.js — the evaluation reaches the learner', () => {
  const EVAL = {
    corrected_text: 'Imam mamu i tatu.',
    score: 72,
    level_demonstrated: 'A2 - Elementary',
    changes: [{ original: 'mama', corrected: 'mamu', note: 'accusative', errorType: 'case' }],
    strengths: ['Clear sentence'],
    improvements: ['Accusative after imam'],
    encouragement: 'Bravo!',
  };

  it('a ```json-fenced evaluation is a 200, not eval_unparseable', async () => {
    // Before 2026-09-07 this was a bare JSON.parse and every fenced reply
    // 502'd — the one structured endpoint without fence tolerance, and the
    // one the learner reads as "your writing feedback".
    claudeReplyText = '```json\n' + JSON.stringify(EVAL) + '\n```';
    const res = await onRequestPost(makeReq(baseBody));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.score).toBe(72);
    expect(body.corrected_text).toBe('Imam mamu i tatu.');
    expect(body.changes[0].errorType).toBe('case');
  });

  it('an evaluation wrapped in prose is a 200', async () => {
    claudeReplyText = 'Here is my evaluation:\n' + JSON.stringify(EVAL) + '\nSretno!';
    const res = await onRequestPost(makeReq(baseBody));
    expect(res.status).toBe(200);
    expect((await res.json()).score).toBe(72);
  });

  it('a reply with no recoverable evaluation is an HONEST 502 with a named code — never a fabricated score', async () => {
    claudeReplyText = 'The essay is quite good overall.';
    const res = await onRequestPost(makeReq(baseBody));
    expect(res.status).toBe(502);
    expect((await res.json()).error).toBe('eval_unparseable');
  });

  it('a parsed reply missing the score or the corrected text is ALSO eval_unparseable', async () => {
    claudeReplyText = '{"feedback":"nice"}';
    const res = await onRequestPost(makeReq(baseBody));
    expect(res.status).toBe(502);
    expect((await res.json()).error).toBe('eval_unparseable');
  });

  it('reconciles the pre-charged ceiling down to the usage Claude reported', async () => {
    const ctx = makeReq(baseBody);
    await onRequestPost(ctx);
    expect(reconcileSafely).toHaveBeenCalledWith(ctx.env, '/api/correct', USAGE);
  });
});
