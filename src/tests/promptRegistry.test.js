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

// ── Conditional sections ─────────────────────────────────────────────────────
//
// Added 2026-08-22 so prompts assembled by BRANCHING code could be versioned at
// all. Before this, a conditional clause either lived outside the template
// (unversioned — an edit to those words moved nothing) or the whole endpoint
// stayed uninstrumented. These pin the semantics that make the versioning
// honest, and the failure modes that would make it dishonest.

describe('renderPrompt — {{#if}} blocks', () => {
  const P = (id, text) => definePrompt(id, text);

  it('keeps the block when the value is present', () => {
    const p = P('cond-basic', 'A{{#if x}} B{{/if}} C');
    expect(renderPrompt(p, { x: true })).toBe('A B C');
  });

  it('drops the block when it is absent', () => {
    const p = P('cond-drop', 'A{{#if x}} B{{/if}} C');
    expect(renderPrompt(p, { x: false })).toBe('A C');
  });

  it('treats a MISSING key as absent, and does not warn about it', () => {
    // For a conditional, "not provided" is a legitimate way to say "absent" —
    // unlike a missing {{name}}, which leaves a visible hole and is a bug.
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const p = P('cond-missing', 'A{{#if x}} B{{/if}} C');
    expect(renderPrompt(p, {})).toBe('A C');
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it('supports {{else}}', () => {
    const p = P('cond-else', '{{#if x}}yes{{else}}no{{/if}}');
    expect(renderPrompt(p, { x: 1 })).toBe('yes');
    expect(renderPrompt(p, { x: 0 })).toBe('no');
  });

  it('nests', () => {
    const p = P('cond-nest', '{{#if a}}A{{#if b}}B{{else}}b{{/if}}{{/if}}');
    expect(renderPrompt(p, { a: true, b: true })).toBe('AB');
    expect(renderPrompt(p, { a: true, b: false })).toBe('Ab');
    expect(renderPrompt(p, { a: false, b: true })).toBe('');
  });

  it('substitutes {{name}} INSIDE a live block, and never inside a dead one', () => {
    const p = P('cond-subst', '{{#if show}}Hello {{who}}{{/if}}');
    expect(renderPrompt(p, { show: true, who: 'Ana' })).toBe('Hello Ana');
    expect(renderPrompt(p, { show: false, who: 'Ana' })).toBe('');
  });

  it('counts an EMPTY ARRAY as absent', () => {
    // Prompts branch on lists constantly ("if they have recent errors, mention
    // them"). A truthy [] would emit a sentence promising context that is not
    // there — the exact kind of small lie this registry exists to prevent.
    const p = P('cond-array', '{{#if errs}}Struggles: {{errs}}{{/if}}');
    expect(renderPrompt(p, { errs: [] })).toBe('');
    expect(renderPrompt(p, { errs: ['case'] })).toBe('Struggles: case');
  });

  it('counts 0 and empty string as absent', () => {
    const p = P('cond-falsy', 'x{{#if v}}Y{{/if}}');
    for (const v of [0, '', null, undefined, false, NaN]) {
      expect(renderPrompt(p, { v }), String(v)).toBe('x');
    }
  });

  it('a learner value containing {{...}} is never re-scanned as template', () => {
    // Conditionals resolve BEFORE substitution and only ever remove authored
    // text, so a value cannot reach the parser or open a block.
    const p = P('cond-injection', 'said: {{text}}');
    const hostile = '{{#if x}}INJECTED{{/if}} and {{other}}';
    expect(renderPrompt(p, { text: hostile })).toBe(`said: ${hostile}`);
  });

  it('a learner value cannot close a block it is inside', () => {
    const p = P('cond-injection2', '{{#if on}}[{{text}}]{{/if}}TAIL');
    expect(renderPrompt(p, { on: true, text: '{{/if}}ESCAPED' })).toBe('[{{/if}}ESCAPED]TAIL');
  });
});

describe('definePrompt — alsoVersion (authored text the template SELECTS)', () => {
  // Several prompts pick their wording out of a lookup table by key — per-level
  // rule sets, persona blurbs — and pass the chosen string in as a value. That
  // text is authored, but it is not IN the template, so without this the prompt
  // looked fully instrumented while an edit to "use only the 300 most common
  // Croatian words" moved no version at all. Exactly the hole photo-vocab was
  // in, one level up.

  it('an edit to the selected text moves the version', () => {
    const a = definePrompt('salt-a', 'BODY {{rules}}', { alsoVersion: { A1: 'one' } });
    const b = definePrompt('salt-b', 'BODY {{rules}}', { alsoVersion: { A1: 'two' } });
    expect(a.version).not.toBe(b.version);
  });

  it('leaves the RENDERED prompt untouched — versioning only', () => {
    const p = definePrompt('salt-render', 'BODY {{rules}}', { alsoVersion: { A1: 'x' } });
    expect(p.text).toBe('BODY {{rules}}');
    expect(renderPrompt(p, { rules: 'chosen' })).toBe('BODY chosen');
  });

  it('omitting it hashes exactly as before, so existing versions are undisturbed', () => {
    const p = definePrompt('salt-none', 'BODY');
    expect(p.version).toBe(promptHash('BODY'));
  });

  it('is order-insensitive — a reordered literal is not an edit', () => {
    const a = definePrompt('salt-ord-a', 'B', { alsoVersion: { A1: 'x', A2: 'y' } });
    const b = definePrompt('salt-ord-b', 'B', { alsoVersion: { A2: 'y', A1: 'x' } });
    expect(a.version).toBe(b.version);
  });

  it('accepts a string or an array too', () => {
    expect(definePrompt('salt-str', 'B', { alsoVersion: 'x' }).version).not.toBe(
      definePrompt('salt-str2', 'B', { alsoVersion: 'y' }).version,
    );
    expect(definePrompt('salt-arr', 'B', { alsoVersion: ['x'] }).version).not.toBe(
      definePrompt('salt-arr2', 'B', { alsoVersion: ['y'] }).version,
    );
  });

  it('the endpoints with lookup tables actually use it', () => {
    // Guard against the next such table being added without being versioned.
    for (const f of [
      'api/flash-context.js',
      'api/conversational-tutor.js',
      'api/conversation.js',
      'api/maja.js',
      'api/ai-chat.js',
    ]) {
      expect(fnSrc(f), `${f} selects authored text by key — it must pass alsoVersion`).toContain(
        'alsoVersion',
      );
    }
  });
});

describe('definePrompt — template validation', () => {
  it('rejects an unclosed {{#if}} at DEFINE time, not request time', () => {
    // A typo in authored text should fail at module load, like a duplicate id.
    // Failing per-request would ship a broken prompt to a learner first.
    expect(() => definePrompt('bad-unclosed', 'A{{#if x}}B')).toThrow(/unclosed/i);
  });

  it('rejects a stray {{/if}}', () => {
    expect(() => definePrompt('bad-stray', 'A{{/if}}B')).toThrow(/stray/i);
  });

  it('rejects a stray {{else}}', () => {
    expect(() => definePrompt('bad-else', 'A{{else}}B')).toThrow(/stray/i);
  });

  it('does not register a prompt whose template failed to parse', () => {
    expect(() => definePrompt('bad-notregistered', '{{#if a}}')).toThrow();
    expect(getPrompt('bad-notregistered')).toBeUndefined();
  });

  it('a conditional template still hashes by its full text', () => {
    const a = definePrompt('cond-hash-a', '{{#if x}}one{{/if}}');
    // Editing text inside a branch must move the version — that is the point.
    expect(promptHash('{{#if x}}one{{/if}}')).toBe(a.version);
    expect(promptHash('{{#if x}}two{{/if}}')).not.toBe(a.version);
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
  // Endpoints whose authored prompt now carries a version and tags its 200.
  const INSTRUMENTED = [
    '/api/adaptive-insights',
    '/api/ai-chat',
    '/api/assess-speaking',
    '/api/conversation',
    '/api/conversational-tutor',
    '/api/correct',
    '/api/daily-plan',
    '/api/dialogue',
    '/api/explain-error',
    '/api/flash-context',
    '/api/grammar-diagnosis',
    '/api/listening',
    '/api/live-tutor-summary',
    '/api/maja',
    '/api/maja-debrief',
    '/api/micro-lesson',
    '/api/photo-vocab',
    '/api/pronunciation-coach',
    '/api/speaking-coach',
    '/api/srs-sync',
    '/api/vocab-expand',
  ];

  // NOT debt: these make no Claude call, so there is no authored prompt to
  // version. Listing them explicitly is the point — an unexplained absence
  // reads as an oversight, and the next reader re-investigates all of them.
  const NO_CLAUDE_PROMPT = [
    '/api/flux-generate', // Replicate image generation
    '/api/pronunciation-assess', // Azure pronunciation scoring
    '/api/stt', // Deepgram/Whisper transcription
    '/api/stt-calibration', // Azure TTS + STT golden run
    '/api/translate', // MyMemory
    '/api/tts', // Azure neural TTS
    '/api/tts:generate',
  ];

  // Real remaining debt, each with the reason it is not yet done. This list can
  // only shrink; the tests below fail if an entry is quietly instrumented or a
  // claimed one is not.
  const KNOWN_UNINSTRUMENTED = [
    // Runs BOTH registered evaluator prompts in one dispatch. A single
    // `id@version` header cannot say which produced the response, and guessing
    // would be worse than saying nothing.
    '/api/golden-calibration',
    // CACHE-SERVED: the 200 usually replays content generated hours earlier, so
    // tagging with the CURRENT version would attribute old text to a new
    // prompt. Needs the version stored beside the cached body, not a header.
    '/api/daily-culture',
    '/api/daily-culture:generate',
    '/api/news',
    '/api/news:generate',
  ];

  it('accounts for every metered endpoint — no endpoint hides in a gap', () => {
    const metered = Object.keys(ENDPOINT_CEILING_MICROUSD).sort();
    const accounted = [...INSTRUMENTED, ...NO_CLAUDE_PROMPT, ...KNOWN_UNINSTRUMENTED].sort();
    expect(accounted).toEqual(metered);
  });

  it('the three categories do not overlap', () => {
    const all = [...INSTRUMENTED, ...NO_CLAUDE_PROMPT, ...KNOWN_UNINSTRUMENTED];
    expect(new Set(all).size).toBe(all.length);
  });

  it('every endpoint claimed as instrumented actually sends the header', () => {
    for (const path of INSTRUMENTED) {
      const src = fnSrc(`api/${path.replace('/api/', '')}.js`);
      expect(src, `${path} must import promptHeaders`).toContain('promptHeaders');
      // Three call shapes are legitimate: spread into a locally-built headers
      // object, passed as the shared ok() helper's third argument, or — where
      // the endpoint picks its prompt at RUNTIME, as maja does per persona — a
      // resolver call. All must pass something; promptHeaders() with no
      // argument silently emits no header at all.
      // Either a REGISTERED prompt const, or — where the endpoint picks its
      // prompt at runtime, as maja does per persona — a resolver CALL. A bare
      // lowercase identifier is excluded on purpose: that is the shape of the
      // local `ok(body, origin, prompt)` helper's own parameter, and matching
      // it would let an endpoint that never passes a prompt pass this test.
      expect(src, `${path} must apply promptHeaders to a response`).toMatch(
        /promptHeaders\(\s*(?:[A-Z][A-Z0-9_]*|[a-z][A-Za-z0-9_]*\()/,
      );
      // ...and the something must be a prompt this file actually registered or
      // imported, so the shape above cannot be satisfied by an unrelated local.
      expect(src, `${path} must register or import a prompt`).toMatch(
        /definePrompt\(|_PROMPT[,}\s]|PROMPT \}/,
      );
    }
  });

  it('every endpoint claimed to make no Claude call really makes none', () => {
    // If one of these ever starts calling Claude it acquires an authored
    // prompt, and silently keeping it on this list would hide real debt.
    for (const path of NO_CLAUDE_PROMPT) {
      const file = path.replace('/api/', '').replace(/:generate$/, '');
      let src;
      try {
        src = fnSrc(`api/${file}.js`);
      } catch {
        continue;
      }
      expect(src, `${path} now calls Claude — it needs a prompt, not this list`).not.toContain(
        'api.anthropic.com',
      );
    }
  });

  it('no endpoint on the debt list has quietly been instrumented', () => {
    for (const path of KNOWN_UNINSTRUMENTED) {
      const file = path.replace('/api/', '').replace(/:generate$/, '');
      let src;
      try {
        src = fnSrc(`api/${file}.js`);
      } catch {
        continue;
      }
      expect(src, `${path} now sends a prompt tag — move it to INSTRUMENTED`).not.toMatch(
        /\.\.\.promptHeaders\(/,
      );
    }
  });

  it('every registered prompt id is unique and non-empty', () => {
    const ids = allPrompts().map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id.length).toBeGreaterThan(0);
  });
});
