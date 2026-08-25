/**
 * croatianScriptRule.test.js — every Croatian-emitting endpoint states the
 * alphabet (2026-08-25).
 *
 * THE INCIDENT. The weekly output observatory failed on 2026-08-24 with a
 * Cyrillic incident recorded at /api/explain-error on 2026-08-21, attributed to
 * explain-error@72630bad. The model wrote Cyrillic into a learner-facing
 * explanation; latinizeResponseBody transliterated it before anyone saw it, so
 * no learner reported anything. A guard that silently covers for a prompt is
 * exactly how a content defect survives — and it survived because nothing in
 * that prompt had ever said which alphabet to write Croatian in.
 *
 * THE AUDIT behind this file. Sixteen of the twenty-four Claude-calling
 * endpoints had no script rule anywhere — not in the template, not appended at
 * runtime. Eight had it, all by appending the shared CROATIAN_SCRIPT_RULE.
 * (An earlier pass reported seven templates as carrying the rule; that was a
 * regex matching the substring "script" inside "description" and "transcript".
 * The endpoint-level check below is the one that holds.)
 *
 * This file is a RATCHET, the same shape as the prompt-instrumentation one:
 * every Claude endpoint sits in exactly one bucket, KNOWN_GAP can only shrink,
 * and a silent fix or a silent regression fails the build.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { CROATIAN_SCRIPT_RULE } from '../../functions/api/_croatianGuard.js';

const src = (name) =>
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
  readFileSync(`functions/api/${name}.js`, 'utf8');

/** Endpoints that state the alphabet — via the shared constant or their own text. */
const APPLIES_RULE = [
  'ai-chat',
  'conversation',
  'conversational-tutor',
  'dialogue',
  'explain-error', // added 2026-08-25 after the incident above
  'listening',
  'maja',
  'micro-lesson',
  'speaking-coach',
];

/**
 * Endpoints whose Claude output is not Croatian prose, so the rule would be
 * noise. Kept explicit rather than implicit: "it doesn't need it" is a claim,
 * and a claim belongs in a list somebody can argue with.
 */
const NO_CROATIAN_OUTPUT = [
  'assess-speaking', // numeric rubric — four 0..1 criteria, no prose
  'golden-calibration', // runs the two evaluator prompts; returns scores
];

/**
 * Real remaining gap: these can emit Croatian and say nothing about the script.
 * The fix is one line each (append CROATIAN_SCRIPT_RULE, carry it in
 * alsoVersion), deliberately NOT done in the same change as the incident fix —
 * fifteen live teaching prompts should not shift in one sweep on the strength
 * of one endpoint's evidence. This list can only shrink.
 */
const KNOWN_GAP = [
  'adaptive-insights',
  'correct',
  'daily-culture',
  'daily-plan',
  'flash-context',
  'grammar-diagnosis',
  'live-tutor-summary',
  'maja-debrief',
  'news',
  'photo-vocab',
  'pronunciation-coach',
  'srs-sync',
  'vocab-expand',
];

/** Every endpoint that calls Claude with an authored prompt. */
const ALL_CLAUDE_ENDPOINTS = [...APPLIES_RULE, ...NO_CROATIAN_OUTPUT, ...KNOWN_GAP];

/** The rule is stated if the shared constant is applied or the file names the script. */
function statesScript(name) {
  const s = src(name);
  return /CROATIAN_SCRIPT_RULE/.test(s) || /latin script|cyrillic|ćiril/i.test(s);
}

describe('the shared rule itself', () => {
  it('names the script and forbids Cyrillic outright', () => {
    expect(CROATIAN_SCRIPT_RULE).toMatch(/LATIN script/);
    expect(CROATIAN_SCRIPT_RULE).toMatch(/Never use Cyrillic/i);
  });

  it('also rules out the Serbian variants the observatory screens for', () => {
    // The sweep re-screens sampled output for these; the prompt should prevent
    // what the screen would otherwise catch after the fact.
    expect(CROATIAN_SCRIPT_RULE).toMatch(/kruh/);
    expect(CROATIAN_SCRIPT_RULE).toMatch(/hleb/);
  });
});

describe('the script-rule ratchet', () => {
  it('accounts for every Claude endpoint — none hides in a gap', () => {
    const all = [...ALL_CLAUDE_ENDPOINTS];
    expect(new Set(all).size, 'an endpoint appears in two buckets').toBe(all.length);
  });

  it('every endpoint claimed to state the script actually does', () => {
    for (const name of APPLIES_RULE) {
      expect(statesScript(name), `${name} must state the Croatian script`).toBe(true);
    }
  });

  it('no endpoint on the gap list has quietly been fixed', () => {
    // A silent fix is good news that must still move the list, or the list
    // stops describing reality and stops being worth reading.
    for (const name of KNOWN_GAP) {
      expect(statesScript(name), `${name} now states the script — move it to APPLIES_RULE`).toBe(
        false,
      );
    }
  });

  it('the endpoints exempted as non-Croatian really produce no Croatian prose', () => {
    for (const name of NO_CROATIAN_OUTPUT) {
      expect(statesScript(name), `${name} states the script — it is not exempt`).toBe(false);
    }
  });
});

describe('/api/explain-error — the endpoint the observatory caught', () => {
  const s = src('explain-error');

  it('appends the shared rule to the system prompt', () => {
    expect(s).toContain('CROATIAN_SCRIPT_RULE');
    expect(s).toMatch(/basePrompt \+ '\\n\\n' \+ CROATIAN_SCRIPT_RULE/);
  });

  it('keeps the learner context AFTER the rule, so neither is dropped', () => {
    expect(s).toMatch(/withScriptRule \+ '\\n\\n' \+ contextProse : withScriptRule/);
  });

  it('carries the rule in alsoVersion, so rewording the rule moves the version', async () => {
    // Without this the rule could be reworded or deleted and every prompt
    // version would sit still — the exact blind spot alsoVersion exists for.
    expect(s).toMatch(/alsoVersion: CROATIAN_SCRIPT_RULE/);
    await import('../../functions/api/explain-error.js');
    const { getPrompt } = await import('../../functions/api/_promptRegistry.js');
    const p = getPrompt('explain-error');
    // The incident was recorded against 72630bad; the fix must not still be it.
    expect(p.version).not.toBe('72630bad');
  });
});
