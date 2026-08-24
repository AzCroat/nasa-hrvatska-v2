/**
 * goldenCalibrationPrompts.test.js — the two-value prompt header (2026-08-24).
 *
 * /api/golden-calibration was the last entry on the prompt-instrumentation debt
 * list, and for a real reason rather than neglect: it runs BOTH registered
 * evaluator prompts — the writing evaluator behind /api/correct and the speaking
 * rubric behind /api/assess-speaking — in a single dispatch, and its report
 * contains rows from both. A single `id@version` could not describe that.
 * Naming one prompt would attribute the whole report to it; naming neither
 * would call an instrumented endpoint uninstrumented.
 *
 * The fix was to let the header carry a list, not to let the endpoint guess.
 * These run the REAL handler against a stubbed Claude — a source grep cannot
 * tell a header that is built from one that is actually attached.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  PROMPT_HEADER,
  promptListHeaders,
  parsePromptTagList,
} from '../../functions/api/_promptRegistry.js';
import { WRITING_EVAL_PROMPT, SPEAKING_RUBRIC_PROMPT } from '../../functions/api/_evalPrompts.js';

vi.mock('../../functions/api/_aiBudget.js', () => ({
  checkAndChargeBudget: async () => ({ allowed: true }),
  ENDPOINT_CEILING_MICROUSD: {},
}));

const { onRequestPost: calibrate, promptsUsedBy } =
  await import('../../functions/api/golden-calibration.js');

const SECRET = 'test-cron-secret';

function req(secret = SECRET) {
  return new Request('https://nasahrvatska.com/api/golden-calibration', {
    method: 'POST',
    headers: { 'x-cron-secret': secret },
  });
}

/** Claude double: answers whatever shape the caller's rubric expects. */
function stubClaude() {
  return vi.fn(async (_url, init) => {
    const sent = JSON.parse(init.body);
    // The speaking rubric has no system prompt and a small max_tokens.
    const isSpeaking = !sent.system;
    const payload = isSpeaking
      ? { range: 0.7, accuracy: 0.7, fluency: 0.7, task: 0.7 }
      : { score: 70 };
    return new Response(JSON.stringify({ content: [{ text: JSON.stringify(payload) }] }), {
      status: 200,
    });
  });
}

let realFetch;
beforeEach(() => {
  realFetch = globalThis.fetch;
  vi.spyOn(console, 'error').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(() => {
  globalThis.fetch = realFetch;
  vi.restoreAllMocks();
});

describe('promptListHeaders', () => {
  it('joins the tags of every prompt that ran', () => {
    const h = promptListHeaders([WRITING_EVAL_PROMPT, SPEAKING_RUBRIC_PROMPT]);
    expect(h[PROMPT_HEADER]).toBe(`${WRITING_EVAL_PROMPT.tag}, ${SPEAKING_RUBRIC_PROMPT.tag}`);
  });

  it('collapses duplicates — twenty rows from one prompt is still one prompt', () => {
    const h = promptListHeaders([WRITING_EVAL_PROMPT, WRITING_EVAL_PROMPT]);
    expect(h[PROMPT_HEADER]).toBe(WRITING_EVAL_PROMPT.tag);
  });

  it('emits nothing rather than a guess when there is nothing valid', () => {
    expect(promptListHeaders([])).toEqual({});
    expect(promptListHeaders(null)).toEqual({});
    expect(promptListHeaders([{ tag: 'not-a-tag' }, {}, undefined])).toEqual({});
  });

  it('keeps the valid tags when one entry is junk', () => {
    const h = promptListHeaders([WRITING_EVAL_PROMPT, { tag: 'junk' }]);
    expect(h[PROMPT_HEADER]).toBe(WRITING_EVAL_PROMPT.tag);
  });
});

describe('parsePromptTagList', () => {
  it('round-trips what promptListHeaders produced', () => {
    const value = promptListHeaders([WRITING_EVAL_PROMPT, SPEAKING_RUBRIC_PROMPT])[PROMPT_HEADER];
    expect(parsePromptTagList(value)).toEqual([
      { id: WRITING_EVAL_PROMPT.id, version: WRITING_EVAL_PROMPT.version },
      { id: SPEAKING_RUBRIC_PROMPT.id, version: SPEAKING_RUBRIC_PROMPT.version },
    ]);
  });

  it('parses a single tag to a one-element array, so callers need no branch', () => {
    expect(parsePromptTagList(WRITING_EVAL_PROMPT.tag)).toEqual([
      { id: WRITING_EVAL_PROMPT.id, version: WRITING_EVAL_PROMPT.version },
    ]);
  });

  it('drops malformed entries but keeps the real ones', () => {
    // A header reading `good, junk` still truthfully says `good` ran; throwing
    // that away to punish the noise would lose real information.
    expect(parsePromptTagList(`${WRITING_EVAL_PROMPT.tag}, junk, @nope, x@zz`)).toEqual([
      { id: WRITING_EVAL_PROMPT.id, version: WRITING_EVAL_PROMPT.version },
    ]);
  });

  it('returns [] for nothing usable', () => {
    for (const bad of ['', 'junk', ',,,', null, undefined, 42]) {
      expect(parsePromptTagList(bad), String(bad)).toEqual([]);
    }
  });
});

describe('promptsUsedBy — what a run actually used, not what it could use', () => {
  it('reports both when the golden set has both kinds', () => {
    const used = promptsUsedBy([{ kind: 'writing' }, { kind: 'speaking' }]);
    expect(used).toEqual([WRITING_EVAL_PROMPT, SPEAKING_RUBRIC_PROMPT]);
  });

  it('reports only the writing evaluator for a writing-only set', () => {
    // Hardcoding both would become a lie the moment someone trims the samples.
    expect(promptsUsedBy([{ kind: 'writing' }])).toEqual([WRITING_EVAL_PROMPT]);
  });

  it('reports only the rubric for a speaking-only set', () => {
    expect(promptsUsedBy([{ kind: 'speaking' }])).toEqual([SPEAKING_RUBRIC_PROMPT]);
  });

  it('counts an errored row — the prompt was sent, the response failed', () => {
    expect(promptsUsedBy([{ kind: 'writing', evaluated: false }])).toEqual([WRITING_EVAL_PROMPT]);
  });
});

describe('/api/golden-calibration tags the report with BOTH evaluators', () => {
  it('sends both tags on the 200', async () => {
    globalThis.fetch = stubClaude();
    const res = await calibrate({
      request: req(),
      env: { CRON_SECRET: SECRET, ANTHROPIC_API_KEY: 'k' },
    });

    expect(res.status).toBe(200);
    const parsed = parsePromptTagList(res.headers.get(PROMPT_HEADER));
    const ids = parsed.map((p) => p.id);
    expect(ids).toContain(WRITING_EVAL_PROMPT.id);
    expect(ids).toContain(SPEAKING_RUBRIC_PROMPT.id);
    expect(parsed).toHaveLength(2);
  });

  it('carries the CURRENT version of each prompt', async () => {
    // Not a frozen string: editing either evaluator must move its half of the
    // header, which is the entire point of versioning them.
    globalThis.fetch = stubClaude();
    const res = await calibrate({
      request: req(),
      env: { CRON_SECRET: SECRET, ANTHROPIC_API_KEY: 'k' },
    });
    const byId = Object.fromEntries(
      parsePromptTagList(res.headers.get(PROMPT_HEADER)).map((p) => [p.id, p.version]),
    );
    expect(byId[WRITING_EVAL_PROMPT.id]).toBe(WRITING_EVAL_PROMPT.version);
    expect(byId[SPEAKING_RUBRIC_PROMPT.id]).toBe(SPEAKING_RUBRIC_PROMPT.version);
  });

  it('does NOT tag a refusal — 401 named no prompt because none ran', async () => {
    const res = await calibrate({
      request: req('wrong-secret'),
      env: { CRON_SECRET: SECRET, ANTHROPIC_API_KEY: 'k' },
    });
    expect(res.status).toBe(401);
    expect(res.headers.has(PROMPT_HEADER)).toBe(false);
  });

  it('still reports the calibration verdict unchanged', async () => {
    // The header is diagnostics; it must not disturb the report the workflow
    // reads. Every stubbed score sits inside its band by construction.
    globalThis.fetch = stubClaude();
    const res = await calibrate({
      request: req(),
      env: { CRON_SECRET: SECRET, ANTHROPIC_API_KEY: 'k' },
    });
    const report = await res.json();
    expect(report.total).toBeGreaterThan(0);
    expect(report.samples.length).toBe(report.total);
    expect(typeof report.drift).toBe('boolean');
  });
});
