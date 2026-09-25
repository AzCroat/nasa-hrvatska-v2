/**
 * SWEEP 114 — A PROMPT'S DECLARED JSON IS A CONTRACT, AND NOTHING COMPARED IT
 * TO ITS CONSUMERS.
 *
 * Sweep 113 ended on this gap: the writing evaluator's scale and shape live in
 * PROMPT TEXT, so rewording the prompt moves its version hash and nothing else —
 * no test relates what a prompt PROMISES to what the six client surfaces READ.
 * `contentShapeSweep` does this for `/api/content/*`; the AI endpoints had
 * nothing, and `/api/correct` mode `writeeval` is the most-used AI contract in
 * the product (the exam's writing section, Guided Writing, WritingScreen,
 * LessonProduceStep, AI Conversation, GrammarExplainer — CLAUDE.md calls it "the
 * shared rubric").
 *
 * The failure this prevents is the `scene.qs` / `v.tip` shape: drop or rename a
 * key in the prompt and every consumer's optional render simply goes blank —
 * `undefined` short-circuits, no throw, no Sentry, no failing test, one line
 * fewer on screen.
 *
 * SCOPE, stated: this pins ONE prompt against its consumers, by hand-verified
 * derivation. A broad census over all 46 endpoints was attempted first and
 * measured the wrong side — these endpoints forward the MODEL's parsed JSON, so
 * extracting object literals from the endpoint source yields the keys of the
 * ANTHROPIC REQUEST (`model`, `max_tokens`, `messages`, `system`), not the
 * response. Recorded so the next person starts from the prompt, not the handler.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const PROMPTS = readFileSync('functions/api/_evalPrompts.js', 'utf8');

/** The `{ … }` example block inside a named prompt, brace-matched. */
function declaredKeys(promptConst: string): Set<string> {
  const at = PROMPTS.indexOf(`export const ${promptConst}`);
  expect(at, `${promptConst} not found`).toBeGreaterThan(-1);
  const open = PROMPTS.indexOf('{\n', at);
  expect(open, `${promptConst} declares no JSON example`).toBeGreaterThan(-1);
  let depth = 0;
  let end = -1;
  for (let i = open; i < PROMPTS.length; i++) {
    const c = PROMPTS[i]!;
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  expect(end).toBeGreaterThan(open);
  const block = PROMPTS.slice(open, end + 1);
  const keys = new Set<string>();
  let d = 0;
  for (let i = 0; i < block.length; i++) {
    const c = block[i]!;
    if (c === '{' || c === '[') d++;
    else if (c === '}' || c === ']') d--;
    else if (d === 1) {
      const m = /^"([A-Za-z_$][\w$]*)"\s*:/.exec(block.slice(i));
      if (m) keys.add(m[1]!);
    }
  }
  return keys;
}

/** Every surface posting mode `writeeval`, derived rather than listed. */
function writeevalSurfaces(): string[] {
  const out: string[] = [];
  for (const f of globSync('src/**/*.{ts,tsx}')) {
    if (/(^|\/)(tests|__tests__)\//.test(f) || /\.test\./.test(f)) continue;
    const s = readFileSync(f, 'utf8').replace(/^\s*\/\/.*$/gm, '');
    if (/mode:\s*'writeeval'|'writeeval',/.test(s)) out.push(f);
  }
  return out.sort();
}

/** The `/api/...` paths a file mentions — how a multi-endpoint file is detected. */
function endpointsIn(file: string): Set<string> {
  const s = readFileSync(file, 'utf8')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  return new Set([...s.matchAll(/['"`](\/api\/[a-z0-9-]+)['"`]/g)].map((m) => m[1]!));
}

/**
 * ATTRIBUTABLE surfaces only: files where the evaluator is the ONLY AI endpoint,
 * so a `data.x` read can be attributed to its response.
 *
 * `AIConversation` (4 endpoints) and `GrammarExplainer` (2) post `writeeval` AND
 * call others, so their `data.croatian` / `data.quiz` belong to
 * `/api/conversation` and `/api/ai-chat`. Attributing those here would
 * MANUFACTURE findings. Excluded by a DERIVED property, never by name, and the
 * exclusions are re-checked below. The honest way to cover them is to brace-match
 * the enclosing function of each call; a fixed character window would be the
 * defect `registryMatchesScreen` and `dwellContentGate` both record.
 */
function writeevalConsumers(): string[] {
  return writeevalSurfaces().filter((f) => endpointsIn(f).size === 1);
}

/** Fields read off the parsed evaluator body in one consumer. */
function fieldsRead(file: string): Set<string> {
  const s = readFileSync(file, 'utf8')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const out = new Set<string>();
  for (const m of s.matchAll(/\b(?:data|ev|result|evaluation)\.([A-Za-z_$][\w$]*)\b/g))
    out.add(m[1]!);
  // Response/Promise members and local helpers are not evaluator fields.
  for (const k of ['ok', 'status', 'json', 'text', 'blob', 'headers', 'then', 'catch'])
    out.delete(k);
  return out;
}

/**
 * Keys a consumer may read that the prompt does not promise. `mistakes` is a
 * DEAD legacy fallback — `data.changes || data.mistakes || []` in WritingScreen,
 * where `changes` is declared and always present. Kept as an exemption rather
 * than deleted from production: it costs nothing and removing a tolerance branch
 * is a refactor, not a fix. Checked in both staleness directions below.
 */
const LEGACY_TOLERATED: Record<string, string> = {
  mistakes:
    'the pre-`changes` key name, read only as the second arm of `data.changes || data.mistakes || []`',
};

describe('the writing evaluator promises what its consumers read', () => {
  const declared = declaredKeys('WRITING_EVAL_PROMPT');
  const consumers = writeevalConsumers();

  it('the derivation is real, and its scope is pinned', () => {
    // The prompt's seven documented keys.
    expect(declared.size).toBeGreaterThanOrEqual(7);
    expect(declared.has('score')).toBe(true);
    expect(declared.has('corrected_text')).toBe(true);
    // Six surfaces post writeeval; four are attributable, two are multi-endpoint.
    const all = writeevalSurfaces();
    expect(all.length).toBeGreaterThanOrEqual(6);
    expect(consumers.length).toBeGreaterThanOrEqual(4);
    const excluded = all.filter((f) => !consumers.includes(f));
    // Every exclusion must really be multi-endpoint — the scope cannot widen by
    // a file merely dropping out of the matcher.
    for (const f of excluded) expect(endpointsIn(f).size).toBeGreaterThan(1);
    expect(excluded.length).toBeLessThanOrEqual(2);
  });

  it('every field a consumer reads is a key the prompt declares', () => {
    const bad: string[] = [];
    for (const f of consumers)
      for (const k of fieldsRead(f))
        if (!declared.has(k) && !(k in LEGACY_TOLERATED)) bad.push(`${f}: reads .${k}`);
    expect(
      bad,
      'The prompt is the contract. A key it does not promise reads `undefined` for ' +
        'ever — the optional render short-circuits and the card is simply one line ' +
        'shorter, with no throw, no Sentry event and no failing test.\n' +
        bad.map((b) => `  - ${b}`).join('\n'),
    ).toEqual([]);
  });

  it('the scale the prompt states is the scale the consumers divide by', () => {
    // Sweep 113: `/api/correct` is 0–100 while the speaking rubrics are 0.0–1.0,
    // and every writing consumer that feeds a 0..1 sink divides by 100. If the
    // prompt is reworded to another range, that arithmetic is silently wrong —
    // so the stated range is pinned HERE, next to the consumers that assume it.
    expect(PROMPTS).toMatch(/Score 0-100 based on/);
    const normalising = consumers.filter((f) => /\/\s*100\b/.test(readFileSync(f, 'utf8')));
    expect(normalising.length).toBeGreaterThanOrEqual(4);
  });

  it('every LEGACY_TOLERATED key is still read and still undeclared', () => {
    for (const [k, reason] of Object.entries(LEGACY_TOLERATED)) {
      expect(reason.length).toBeGreaterThan(30);
      expect(declared.has(k), `${k} is now declared by the prompt — drop the exemption`).toBe(
        false,
      );
      const read = consumers.some((f) => fieldsRead(f).has(k));
      expect(read, `${k} is no longer read anywhere — drop the exemption`).toBe(true);
    }
    expect(Object.keys(LEGACY_TOLERATED)).toHaveLength(1);
  });
});
