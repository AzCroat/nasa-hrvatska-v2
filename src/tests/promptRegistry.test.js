// src/tests/promptRegistry.test.js
//
// PROMPT INSTRUMENTATION pins (2026-08-21).
//
// Prompts ARE the teaching quality of this app, and they were the one part of
// the AI surface with no identity: the output observatory could say an incident
// happened on /api/dialogue, but not which prompt produced it. These tests pin
// the machinery that makes a quality regression attributable to the exact
// prompt text that caused it:
//
//   - the version is derived from the text, so an edit MUST change it (a manual
//     counter drifts the first time someone is in a hurry);
//   - a duplicate id fails loudly at module load rather than silently merging
//     two prompts in every report;
//   - the tag never reaches a client;
//   - a malformed tag is recorded as absent, never as a made-up id;
//   - and the ratchet below keeps the un-instrumented endpoints VISIBLE as
//     tracked debt instead of quietly permanent.

import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  PROMPT_HEADER,
  promptHash,
  definePrompt,
  renderPrompt,
  allPrompts,
  getPrompt,
  promptHeaders,
  parsePromptTag,
} from '../../functions/api/_promptRegistry.js';
import {
  WRITING_EVAL_PROMPT,
  SPEAKING_RUBRIC_PROMPT,
  SPEAKING_COACH_PROMPT,
  writingEvalSystemPrompt,
  speakingRubricPrompt,
  speakingCoachSystemPrompt,
} from '../../functions/api/_evalPrompts.js';
import { ENDPOINT_CEILING_MICROUSD } from '../../functions/api/_aiBudget.js';
import { stripPromptHeader } from '../../functions/_middleware.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const fnSrc = (rel) =>
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
  readFileSync(join(__dir, '../../functions', rel), 'utf8');

// ── The version is the text ───────────────────────────────────────────────────

describe('promptHash', () => {
  it('is stable for identical text', () => {
    expect(promptHash('Objasni pravilo.')).toBe(promptHash('Objasni pravilo.'));
  });

  it('changes when the text changes — including whitespace-only edits', () => {
    const base = promptHash('You are a Croatian teacher.');
    expect(promptHash('You are a Croatian teacher!')).not.toBe(base);
    expect(promptHash('You are a Croatian  teacher.')).not.toBe(base);
    expect(promptHash('You are a Croatian teacher. ')).not.toBe(base);
  });

  it('is 8 lowercase hex characters, so a tag is always a fixed shape', () => {
    for (const text of ['a', '', 'č ć đ š ž', 'x'.repeat(5000)]) {
      expect(promptHash(text)).toMatch(/^[0-9a-f]{8}$/);
    }
  });

  it('distinguishes text that differs only in diacritics', () => {
    // Croatian content: a stripped diacritic is a real regression, not a no-op.
    expect(promptHash('tisuća')).not.toBe(promptHash('tisuca'));
  });
});

describe('definePrompt', () => {
  it('returns id, a text-derived version, and the id@version tag', () => {
    const p = definePrompt('unit-test-basic', 'Hello');
    expect(p.id).toBe('unit-test-basic');
    expect(p.version).toBe(promptHash('Hello'));
    expect(p.tag).toBe(`unit-test-basic@${promptHash('Hello')}`);
    expect(p.text).toBe('Hello');
  });

  it('registers the prompt for lookup and inventory', () => {
    definePrompt('unit-test-inventory', 'Body');
    expect(getPrompt('unit-test-inventory')?.version).toBe(promptHash('Body'));
    expect(allPrompts().some((p) => p.id === 'unit-test-inventory')).toBe(true);
  });

  it('throws on a duplicate id — two prompts under one id would merge in every report', () => {
    definePrompt('unit-test-dupe', 'First');
    expect(() => definePrompt('unit-test-dupe', 'Second')).toThrow(/duplicate/i);
  });

  it('rejects a missing id or empty text', () => {
    expect(() => definePrompt('', 'text')).toThrow();
    expect(() => definePrompt('unit-test-empty', '')).toThrow();
    expect(() => definePrompt('unit-test-nontext', null)).toThrow();
  });
});

// ── Template rendering ────────────────────────────────────────────────────────

describe('renderPrompt', () => {
  it('substitutes named placeholders', () => {
    const p = definePrompt('unit-test-render', 'Level {{level}} about {{topic}}.');
    expect(renderPrompt(p, { level: 'B1', topic: 'kava' })).toBe('Level B1 about kava.');
  });

  it('fills every occurrence of the same placeholder', () => {
    const p = definePrompt('unit-test-repeat', '{{x}} and {{x}}');
    expect(renderPrompt(p, { x: 'da' })).toBe('da and da');
  });

  it('treats $ sequences in a value as literal text, not replacement patterns', () => {
    // The value can be learner-supplied. `$&` in a string replacement would
    // splice the matched placeholder back in and corrupt the prompt.
    const p = definePrompt('unit-test-dollar', 'Wrote: "{{text}}".');
    expect(renderPrompt(p, { text: "$& $' $` $$" })).toBe('Wrote: "$& $\' $` $$".');
  });

  it('degrades a missing variable to empty with a warning, never throwing', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const p = definePrompt('unit-test-missing', 'A {{gone}} B');
    expect(renderPrompt(p, {})).toBe('A  B');
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});

// ── Tag round-trip ────────────────────────────────────────────────────────────

describe('promptHeaders / parsePromptTag', () => {
  it('round-trips a real prompt through the header', () => {
    const headers = promptHeaders(WRITING_EVAL_PROMPT);
    expect(headers[PROMPT_HEADER]).toBe(WRITING_EVAL_PROMPT.tag);
    expect(parsePromptTag(headers[PROMPT_HEADER])).toEqual({
      id: WRITING_EVAL_PROMPT.id,
      version: WRITING_EVAL_PROMPT.version,
    });
  });

  it('emits no header at all when there is no prompt, so spreading is safe', () => {
    expect(promptHeaders(undefined)).toEqual({});
    expect(promptHeaders(null)).toEqual({});
    expect(promptHeaders({})).toEqual({});
  });

  it('rejects malformed tags rather than inventing an id', () => {
    for (const bad of [
      null,
      undefined,
      42,
      '',
      'noversion',
      '@deadbeef',
      'id@',
      'id@nothex!!',
      'id@deadbee', // 7 chars
      'id@deadbeef0', // 9 chars
      'bad id@deadbeef', // space in id
    ]) {
      expect(parsePromptTag(bad), String(bad)).toBeNull();
    }
  });

  it('rejects an id containing @ — an ambiguous tag is not a tag', () => {
    expect(parsePromptTag('a@b@deadbeef')).toBeNull();
  });
});

// ── The shared evaluator prompts ──────────────────────────────────────────────

describe('_evalPrompts — behaviour is unchanged by instrumentation', () => {
  it('the writing evaluator still interpolates the topic and keeps its rubric', () => {
    const out = writingEvalSystemPrompt('Moj grad');
    expect(out).toContain('asked to write about: "Moj grad"');
    expect(out).toContain('"errorType"');
    expect(out).toContain('level_demonstrated');
    expect(out).not.toMatch(/\{\{\w+\}\}/);
  });

  it('the speaking rubric still names the level in both places', () => {
    const out = speakingRubricPrompt('B2', 'Opišite svoj dan', 'Danas sam radio.');
    expect(out).toContain('(level B2)');
    expect(out).toContain('where B2 competence ≈ 0.8');
    expect(out).toContain('"Danas sam radio."');
    expect(out).not.toMatch(/\{\{\w+\}\}/);
  });

  it('the speaking coach prompt is the registered text verbatim', () => {
    expect(speakingCoachSystemPrompt()).toBe(SPEAKING_COACH_PROMPT.text);
    expect(speakingCoachSystemPrompt()).toContain('never invent pronunciation errors');
  });

  it('every registered prompt renders with no placeholder left behind', () => {
    // A leftover {{name}} means a builder forgot a variable — the model would
    // be handed a literal "{{level}}" and teach from it.
    expect(writingEvalSystemPrompt('t')).not.toMatch(/\{\{/);
    expect(speakingRubricPrompt('A2', 'p', 't')).not.toMatch(/\{\{/);
    expect(speakingCoachSystemPrompt()).not.toMatch(/\{\{/);
  });

  it('the three evaluator prompts have distinct ids and versions', () => {
    const ids = [WRITING_EVAL_PROMPT, SPEAKING_RUBRIC_PROMPT, SPEAKING_COACH_PROMPT].map(
      (p) => p.id,
    );
    expect(new Set(ids).size).toBe(3);
    const versions = [WRITING_EVAL_PROMPT, SPEAKING_RUBRIC_PROMPT, SPEAKING_COACH_PROMPT].map(
      (p) => p.version,
    );
    expect(new Set(versions).size).toBe(3);
  });
});

// ── The middleware contract ───────────────────────────────────────────────────

describe('the middleware records and then strips the tag', () => {
  const mw = fnSrc('_middleware.js');

  it('reads the header off the endpoint response', () => {
    expect(mw).toContain('response.headers.get(PROMPT_HEADER)');
  });

  it('passes the tag into the observer', () => {
    expect(mw).toMatch(/buildObserver\(context, pathname, status, promptTag\)/);
  });

  it('parses the tag rather than trusting it, and omits it when unparseable', () => {
    expect(mw).toContain('parsePromptTag(promptTag)');
    expect(mw).toMatch(/if \(parsed\) \{[\s\S]*record\.promptId/);
  });

  it('strips the header before the response leaves, keeping status and body', async () => {
    const tagged = new Response(JSON.stringify({ explanation: 'The of-form' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        [PROMPT_HEADER]: 'explain-error@deadbeef',
      },
    });
    const out = stripPromptHeader(tagged);
    expect(out.headers.get(PROMPT_HEADER)).toBeNull();
    expect(out.headers.get('Cache-Control')).toBe('no-store');
    expect(out.status).toBe(200);
    expect(await out.json()).toEqual({ explanation: 'The of-form' });
  });

  it('passes an untagged response straight through, same object', () => {
    const plain = new Response('{}', { headers: { 'Content-Type': 'application/json' } });
    expect(stripPromptHeader(plain)).toBe(plain);
  });

  it('never takes a response down — a bodiless 204 survives', () => {
    const preflight = new Response(null, {
      status: 204,
      headers: { [PROMPT_HEADER]: 'x@deadbeef' },
    });
    expect(stripPromptHeader(preflight).status).toBe(204);
  });
});

describe('the observatory attributes findings to prompts', () => {
  const sweep = fnSrc('api/output-observatory.js');

  it('reports a per-prompt roll-up', () => {
    expect(sweep).toContain('prompts,');
    expect(sweep).toContain('promptKeyOf');
  });

  it('labels untagged records honestly rather than guessing from the path', () => {
    expect(sweep).toContain("UNINSTRUMENTED = '(uninstrumented)'");
  });
});

// ── The adoption ratchet ──────────────────────────────────────────────────────

describe('prompt instrumentation coverage', () => {
  // Endpoints whose authored prompt now carries a version. Each of these tags
  // its 200 response; the middleware records it.
  const INSTRUMENTED = [
    '/api/assess-speaking',
    '/api/correct',
    '/api/dialogue',
    '/api/explain-error',
    '/api/speaking-coach',
  ];

  // Everything metered that is NOT instrumented yet — tracked debt, listed so
  // it stays visible. Fill one in and the ratchet below FAILS until its entry
  // is removed, which is the point: this list can only ever shrink.
  //
  // The cache-served ones (daily-culture, news, tts) are deliberately last in
  // line: their 200 usually replays content generated hours earlier, so tagging
  // the response with the CURRENT prompt version would attribute old text to a
  // new prompt. Instrumenting them means storing the version alongside the
  // cached body, not adding a header.
  const KNOWN_UNINSTRUMENTED = [
    '/api/adaptive-insights',
    '/api/ai-chat',
    '/api/conversation',
    '/api/conversational-tutor',
    '/api/daily-culture',
    '/api/daily-culture:generate',
    '/api/daily-plan',
    '/api/flash-context',
    '/api/flux-generate',
    '/api/golden-calibration',
    '/api/grammar-diagnosis',
    '/api/listening',
    '/api/live-tutor-summary',
    '/api/maja',
    '/api/maja-debrief',
    '/api/micro-lesson',
    '/api/news',
    '/api/news:generate',
    '/api/photo-vocab',
    '/api/pronunciation-assess',
    '/api/pronunciation-coach',
    '/api/srs-sync',
    '/api/stt',
    '/api/stt-calibration',
    '/api/translate',
    '/api/tts',
    '/api/tts:generate',
    '/api/vocab-expand',
  ];

  it('accounts for every metered endpoint — no third state', () => {
    const metered = Object.keys(ENDPOINT_CEILING_MICROUSD).sort();
    const accounted = [...INSTRUMENTED, ...KNOWN_UNINSTRUMENTED].sort();
    expect(accounted).toEqual(metered);
  });

  it('every endpoint claimed as instrumented actually sends the header', () => {
    for (const path of INSTRUMENTED) {
      const src = fnSrc(`api/${path.replace('/api/', '')}.js`);
      expect(src, `${path} must import promptHeaders`).toContain('promptHeaders');
      expect(src, `${path} must spread promptHeaders into a response`).toMatch(
        /\.\.\.promptHeaders\(/,
      );
    }
  });

  it('no endpoint on the debt list has quietly been instrumented', () => {
    // The ratchet: fixing one and forgetting to move it here would leave the
    // list overstating the debt, and the next reader would re-do the work.
    for (const path of KNOWN_UNINSTRUMENTED) {
      const file = path.replace('/api/', '').replace(/:generate$/, '');
      let src;
      try {
        src = fnSrc(`api/${file}.js`);
      } catch {
        continue; // ':generate' twins share a file; the base entry covers it
      }
      expect(src, `${path} now sends a prompt tag — move it to INSTRUMENTED`).not.toMatch(
        /\.\.\.promptHeaders\(/,
      );
    }
  });
});
