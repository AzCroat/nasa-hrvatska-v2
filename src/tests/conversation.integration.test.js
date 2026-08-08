// src/tests/conversation.integration.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: vi.fn(async (context) => ({
    ok: true,
    uid: 'test-uid',
    origin: context?.request?.headers?.get?.('origin') || 'https://nasahrvatska.com',
    isDev: false,
  })),
}));

import { onRequestPost } from '../../functions/api/conversation.js';

/**
 * The system prompt travels as the prompt-cached array shape
 * ([{type:'text', text, cache_control:{type:'ephemeral'}}]) so repeat turns
 * pay 0.1x input on the static prefix. Read the text out, and assert the
 * cache marker is present — losing it would silently multiply input cost 10x.
 */
function systemText(body) {
  expect(Array.isArray(body.system), 'system must be the cached-array shape').toBe(true);
  expect(body.system[0].cache_control).toEqual({ type: 'ephemeral' });
  return body.system[0].text;
}

let capturedClaudeBody = null;

beforeEach(() => {
  capturedClaudeBody = null;
  // Mock the Anthropic streaming SSE response — must be a ReadableStream so the
  // conversation handler can call .getReader() on res.body.
  vi.spyOn(globalThis, 'fetch').mockImplementation(async (_url, init) => {
    capturedClaudeBody = JSON.parse(init.body);
    // Emit a minimal Anthropic SSE stream: a single text_delta then message_stop.
    const encoder = new TextEncoder();
    const sse =
      'data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"{\\"croatian\\":\\"Bog!\\",\\"english_gloss\\":null,\\"correction\\":null,\\"scaffolding_level\\":0,\\"emotion\\":\\"warm\\",\\"topic_detected\\":\\"daily_life\\",\\"level_demonstrated\\":\\"B1\\",\\"is_session_end\\":false,\\"recast_word\\":null,\\"errorPatterns\\":[]}"}}\n\n' +
      'data: {"type":"message_stop"}\n\n';
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(sse));
        controller.close();
      },
    });
    return new Response(body, { status: 200 });
  });
});

function makeReq(body) {
  const request = new Request('https://nasahrvatska.com/api/conversation', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://nasahrvatska.com' },
    body: JSON.stringify(body),
  });
  const env = {
    ANTHROPIC_API_KEY: 'fake-key',
    ENVIRONMENT: 'test',
    VITE_FIREBASE_PROJECT_ID: '',
    PUSH_SUBSCRIPTIONS: { get: async () => null, put: async () => {} },
  };
  return { request, env };
}

const baseBody = {
  level: 'B1',
  topic: 'free',
  turnCount: 1,
  messages: [
    { role: 'assistant', content: 'Bog! Kako si?' },
    { role: 'user', content: 'Dobro sam, hvala.' },
  ],
};

const validContext = {
  version: 1,
  generatedAt: Date.now(),
  level: { cefr: 'B1', xp: 1500, streak: 6 },
  weakTopics: [{ topic: 'accusative', accuracy: 0.42, attempts: 19 }],
  recentErrors: [],
  vocab: { learned: 540, dueToday: 28, hardest: ['studeni'] },
};

// Drain the SSE response stream so the async writer in onRequestPost can finish
// (otherwise the test may end before the Anthropic-fetch spy is called).
async function drain(res) {
  if (!res.body) return;
  const reader = res.body.getReader();
  while (true) {
    const { done } = await reader.read();
    if (done) break;
  }
}

describe('conversation.js — Maja integration', () => {
  it('personalized path: system prompt contains LEARNER NOTES alongside any conversationMemory', async () => {
    const res = await onRequestPost(makeReq({ ...baseBody, userContext: validContext }));
    await drain(res);
    expect(capturedClaudeBody).not.toBeNull();
    expect(systemText(capturedClaudeBody)).toContain('LEARNER NOTES');
    expect(systemText(capturedClaudeBody)).toContain('B1');
    expect(systemText(capturedClaudeBody)).toContain('accusative');
  });

  it('fallback path: stateless when userContext absent', async () => {
    const res = await onRequestPost(makeReq(baseBody));
    await drain(res);
    expect(capturedClaudeBody).not.toBeNull();
    expect(capturedClaudeBody.system).not.toContain('LEARNER NOTES');
  });
});
