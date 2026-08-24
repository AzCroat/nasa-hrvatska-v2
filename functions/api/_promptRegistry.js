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
 * Stable serialisation of the extra authored fragments a prompt can draw from.
 * Object keys are sorted so a reordered literal does not masquerade as an edit;
 * anything unset contributes nothing, so existing versions are undisturbed.
 */
function versionSalt(extra) {
  if (extra === undefined || extra === null) return '';
  if (typeof extra === 'string') return `\u0000${extra}`;
  if (Array.isArray(extra)) return extra.map((v) => `\u0000${String(v)}`).join('');
  return Object.keys(extra)
    .sort()
    .map((k) => `\u0000${k}=${String(extra[k])}`)
    .join('');
}

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
export function definePrompt(id, text, options = {}) {
  if (!id || typeof id !== 'string') throw new Error('definePrompt: id required');
  if (typeof text !== 'string' || text.length === 0) {
    throw new Error(`definePrompt(${id}): text required`);
  }
  if (REGISTRY.has(id)) throw new Error(`definePrompt: duplicate id "${id}"`);
  // Parse now, not at request time. An unbalanced {{#if}} is a typo in authored
  // text, and the only good moment to find out is module load — the same
  // treatment duplicate ids get. Failing at request time would mean a broken
  // prompt reaches a learner before anyone notices.
  parseTemplate(text, id);
  // `alsoVersion` covers authored text the template SELECTS but does not
  // contain — per-level rule tables, persona blurbs, anything looked up by key
  // and passed in as a value. Without it those words are invisible to the
  // version: a prompt would look fully instrumented while an edit to "use only
  // the 300 most common Croatian words" moved nothing. It changes the version
  // only; the rendered prompt is byte-for-byte unaffected.
  const version = promptHash(text + versionSalt(options.alsoVersion));
  const entry = { id, version, text, tag: `${id}@${version}` };
  REGISTRY.set(id, entry);
  return entry;
}

// ── Conditional sections ─────────────────────────────────────────────────────
//
// Most prompts are one authored text with holes, which `{{name}}` covers. But
// several are assembled by branching code — "add this line only when the
// learner has missed the word before", "describe a dialogue OR a monologue".
// Before this existed, those endpoints could not be versioned honestly: a flat
// template cannot say "sometimes", so either the conditional text lived outside
// the template (unversioned — the photo-vocab gap) or the whole prompt stayed
// uninstrumented (ai-chat, maja, flash-context, conversation).
//
//   {{#if name}}...{{/if}}
//   {{#if name}}...{{else}}...{{/if}}
//
// Blocks nest. Everything a human authored now lives inside the versioned text,
// which is the entire point: edit any branch and the version moves.

const TOKEN_RE = /\{\{(#if\s+\w+|else|\/if)\}\}/g;

/**
 * Parse a template into a node tree: strings and
 * `{ name, then: nodes[], otherwise: nodes[] }`.
 *
 * Written as a real (if tiny) parser rather than a regex because blocks nest,
 * and a regex that "works" on nested input by accident is worse than none.
 * Throws on anything unbalanced, naming the prompt so the failure is findable.
 */
function parseTemplate(text, id = '?') {
  const tokens = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN_RE)) {
    if (m.index > last) tokens.push({ t: 'text', v: text.slice(last, m.index) });
    const raw = m[1];
    if (raw === 'else') tokens.push({ t: 'else' });
    else if (raw === '/if') tokens.push({ t: 'end' });
    else tokens.push({ t: 'if', name: raw.slice(3).trim() });
    last = m.index + m[0].length;
  }
  if (last < text.length) tokens.push({ t: 'text', v: text.slice(last) });

  let i = 0;
  function parseNodes(depth) {
    const nodes = [];
    while (i < tokens.length) {
      const tok = tokens[i];
      if (tok.t === 'text') {
        nodes.push(tok.v);
        i++;
      } else if (tok.t === 'if') {
        i++;
        const then = parseNodes(depth + 1);
        let otherwise = [];
        if (tokens[i]?.t === 'else') {
          i++;
          otherwise = parseNodes(depth + 1);
        }
        if (tokens[i]?.t !== 'end') {
          throw new Error(`definePrompt(${id}): unclosed {{#if ${tok.name}}}`);
        }
        i++;
        nodes.push({ name: tok.name, then, otherwise });
      } else {
        // else / end belong to the caller's block
        if (depth === 0) {
          throw new Error(
            `definePrompt(${id}): stray {{${tok.t === 'else' ? 'else' : '/if'}}} with no {{#if}}`,
          );
        }
        return nodes;
      }
    }
    if (depth > 0) throw new Error(`definePrompt(${id}): unclosed {{#if}}`);
    return nodes;
  }
  return parseNodes(0);
}

/**
 * Whether a conditional's variable counts as present.
 *
 * Standard JS truthiness, with ONE addition: an empty array is false. Prompts
 * branch on lists constantly ("if they have recent errors, mention them"), and
 * `[]` being truthy would emit the clause with nothing in it — a sentence
 * promising context that isn't there, which is exactly the kind of small lie
 * this whole registry exists to prevent.
 *
 * Note `0` is false, per JS. That is right for the counts these prompts branch
 * on ("if they missed it before" — zero misses means don't say it).
 */
function isPresent(value) {
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value);
}

/** Flatten a parsed tree against `vars`, keeping only the live branches. */
function renderNodes(nodes, vars) {
  let out = '';
  for (const node of nodes) {
    if (typeof node === 'string') {
      out += node;
    } else {
      // A missing key is FALSE and does not warn — for a conditional, "not
      // provided" is a legitimate way to say "absent". That differs from
      // `{{name}}` substitution below, where a missing key is a bug worth
      // shouting about because it leaves a hole in the text.
      const live = isPresent(vars[node.name]);
      out += renderNodes(live ? node.then : node.otherwise, vars);
    }
  }
  return out;
}

/**
 * Fill a registered template: resolve `{{#if}}` blocks, then `{{name}}` holes.
 *
 * Three deliberate choices:
 *  - Conditionals resolve FIRST, and only ever remove or keep authored text —
 *    they never insert a value. Substitution is then a single pass whose
 *    replacement is a FUNCTION, so a `$&` / `$'` inside a learner's text cannot
 *    be read as a replacement pattern, and a `{{...}}` inside a learner's text
 *    is never re-scanned. Values cannot reach the parser.
 *  - A missing substitution variable degrades to an empty string with a warning
 *    rather than throwing. A throw would 500 a live teaching endpoint over what
 *    is always a coding error; the test suite renders every builder and fails
 *    on a residual placeholder, so CI catches it and users never do.
 *  - A malformed template cannot get this far — definePrompt already parsed it.
 */
export function renderPrompt(prompt, vars = {}) {
  if (!prompt || typeof prompt.text !== 'string') return '';
  let text = prompt.text;
  if (text.includes('{{#if')) {
    try {
      text = renderNodes(parseTemplate(text, prompt.id), vars);
    } catch (e) {
      // Unreachable for registered prompts (definePrompt parsed them), but a
      // caller can hand us an ad-hoc object. Degrade, never take down a lesson.
      console.warn(`[promptRegistry] ${prompt.id}: ${e.message}`);
    }
  }
  return text.replace(/\{\{(\w+)\}\}/g, (whole, name) => {
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
 * Headers for a response produced by MORE THAN ONE prompt (2026-08-24).
 *
 * /api/golden-calibration runs both registered evaluator prompts — the writing
 * evaluator and the speaking rubric — in a single dispatch, and its report
 * contains rows from both. It was the last entry on the instrumentation debt
 * list precisely because a single `id@version` cannot describe that response:
 * naming one prompt would attribute the whole report to it, and naming neither
 * would call an instrumented endpoint uninstrumented.
 *
 * So the header carries a comma-separated LIST, in the order given. Duplicates
 * are collapsed (a run that used one prompt for twenty rows still used one
 * prompt) and order is otherwise preserved, so the value is stable run to run.
 * An empty or all-invalid list emits no header at all — same rule as the
 * single-prompt form: silence rather than a guess.
 */
export function promptListHeaders(prompts) {
  const tags = [];
  for (const p of Array.isArray(prompts) ? prompts : []) {
    const tag = p && p.tag;
    if (typeof tag === 'string' && parsePromptTag(tag) && !tags.includes(tag)) tags.push(tag);
  }
  return tags.length > 0 ? { [PROMPT_HEADER]: tags.join(', ') } : {};
}

/**
 * Headers carrying a tag READ BACK from somewhere, rather than a registered
 * prompt object (2026-08-23, for cache-served endpoints).
 *
 * A cached 200 replays text generated hours ago. Tagging it with the CURRENT
 * version would attribute old text to a new prompt — the precise reason
 * daily-culture and news stayed uninstrumented while every live endpoint was
 * tagged. The cache stores the tag that produced its body and this emits THAT.
 *
 * The tag comes back from KV, so it is validated the same way the middleware
 * validates an inbound one: a stored value that is missing, malformed, or from
 * an entry written before tagging existed emits NO header at all. An untagged
 * response is honest — it says we do not know which prompt produced this body.
 * A guessed one is not.
 */
export function promptTagHeaders(tag) {
  return parsePromptTag(tag) ? { [PROMPT_HEADER]: tag } : {};
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

/**
 * Parse a header value that may carry ONE tag or a comma-separated list of
 * them, into an array of `{ id, version }`.
 *
 * Malformed entries are DROPPED rather than failing the whole value: a header
 * reading `good@aabbccdd, junk` still tells us truthfully that `good` ran, and
 * discarding that would lose real information to protect against noise we
 * already know how to ignore. Returns [] for anything with nothing valid in it.
 *
 * A single well-formed tag parses to a one-element array, so callers can treat
 * every response uniformly instead of branching on how many prompts ran.
 */
export function parsePromptTagList(value) {
  if (typeof value !== 'string') return [];
  const out = [];
  for (const part of value.split(',')) {
    const parsed = parsePromptTag(part.trim());
    if (parsed && !out.some((p) => p.id === parsed.id && p.version === parsed.version)) {
      out.push(parsed);
    }
  }
  return out;
}
