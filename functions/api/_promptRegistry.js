// functions/api/_promptRegistry.js
//
// PROMPT INSTRUMENTATION (gap #3 from the 2026-08-19 assessment).
//
// The problem: prompts ARE the teaching quality of this app, and they were
// invisible. The weekly output observatory could tell you an incident happened
// on /api/explain-error, but not which prompt produced it — so "did last week's
// prompt edit cause this?" was unanswerable, and a prompt could be reworded in
// a drive-by commit with nothing recording that it changed.
//
// This registry gives every authored prompt a stable id and a version derived
// from its own text. Two consequences:
//
//   1. The version changes AUTOMATICALLY when the prompt is edited. Nobody has
//      to remember to bump it, which is the only way a version stays honest —
//      a manual counter drifts the first time someone is in a hurry.
//   2. Tagged responses carry `id@version`, the middleware records it on every
//      observation, and the observatory groups findings by it. A quality
//      regression becomes attributable to the exact prompt text that caused it.
//
// WHAT IS HASHED: the authored TEMPLATE, not the runtime string. Most endpoints
// assemble `template + per-request context`, so hashing the assembled prompt
// would produce a different version on every request and measure nothing. The
// template is the thing a human edits, so the template is the thing versioned.

/** Response header carrying `id@version`. Stripped by the middleware — it is
 *  diagnostics for our own observation pipeline, not something clients see. */
export const PROMPT_HEADER = 'x-nh-prompt';

/**
 * FNV-1a, 32-bit, hex. Chosen over SubtleCrypto deliberately: this runs at
 * module load in a Worker, and the crypto digest API is async — an await at
 * module scope would make every prompt definition a promise and push the
 * complexity into all 20+ call sites. Collision risk is irrelevant here; we are
 * detecting "did this text change", not defending against an adversary.
 */
export function promptHash(text) {
  let h = 0x811c9dc5;
  const s = String(text);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

const REGISTRY = new Map();

/**
 * Register an authored prompt template.
 *
 * Returns `{ id, version, text, tag }` — endpoints use `.text` where they used
 * the raw string before, so adoption is a one-line change at the definition and
 * one header at the response.
 *
 * Throws on a duplicate id. That is deliberate: two prompts sharing an id would
 * silently merge in every report the observatory produces, which is worse than
 * a loud failure at module load.
 */
export function definePrompt(id, text) {
  if (!id || typeof id !== 'string') throw new Error('definePrompt: id required');
  if (typeof text !== 'string' || text.length === 0) {
    throw new Error(`definePrompt(${id}): text required`);
  }
  if (REGISTRY.has(id)) throw new Error(`definePrompt: duplicate id "${id}"`);
  const version = promptHash(text);
  const entry = { id, version, text, tag: `${id}@${version}` };
  REGISTRY.set(id, entry);
  return entry;
}

/**
 * Fill `{{name}}` placeholders in a registered template.
 *
 * Two deliberate choices:
 *  - The replacement is a FUNCTION, so a `$&` / `$'` inside a learner's text
 *    cannot be interpreted as a replacement pattern and splice the prompt.
 *  - A missing variable degrades to an empty string with a warning rather than
 *    throwing. A throw here would 500 a live teaching endpoint over what is
 *    always a coding error; the test suite renders every builder and fails on
 *    a residual placeholder, so CI catches it and users never do.
 */
export function renderPrompt(prompt, vars = {}) {
  if (!prompt || typeof prompt.text !== 'string') return '';
  return prompt.text.replace(/\{\{(\w+)\}\}/g, (whole, name) => {
    if (!(name in vars)) {
      console.warn(`[promptRegistry] ${prompt.id}: no value for ${whole}`);
      return '';
    }
    return String(vars[name] ?? '');
  });
}

/** Every registered prompt, for the inventory test and the observatory report. */
export function allPrompts() {
  return [...REGISTRY.values()].map(({ id, version }) => ({ id, version }));
}

/** Lookup by id (tests/diagnostics). */
export function getPrompt(id) {
  return REGISTRY.get(id);
}

/**
 * Headers carrying the prompt tag, spread into an endpoint's success response.
 * Accepts undefined so a caller can tag conditionally without branching.
 */
export function promptHeaders(prompt) {
  return prompt && prompt.tag ? { [PROMPT_HEADER]: prompt.tag } : {};
}

/**
 * Parse a tag back into parts. Returns null for anything malformed — the
 * middleware feeds this whatever a response carried, so it must not trust it.
 */
export function parsePromptTag(tag) {
  if (typeof tag !== 'string') return null;
  const at = tag.lastIndexOf('@');
  if (at <= 0 || at === tag.length - 1) return null;
  const id = tag.slice(0, at);
  const version = tag.slice(at + 1);
  if (!/^[a-z0-9_.:-]+$/i.test(id) || !/^[0-9a-f]{8}$/.test(version)) return null;
  return { id, version };
}
