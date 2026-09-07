// functions/api/_modelJson.js
//
// ONE tolerant parser for the JSON a Claude endpoint asks the model to return.
//
// The finding this closes (owner report, 2026-09-07: "feedback on writing or
// speech MUST work every time — it hasn't worked yet"). Every structured
// endpoint asks for "ONLY valid JSON (no markdown, no code blocks)", and the
// model complies MOST of the time. When it does not — a ```json fence, a
// leading "Here is the evaluation:", a trailing remark — the endpoint's
// strict JSON.parse threw and the learner got a 502. Three endpoints had
// grown their own fence-stripping regex; /api/correct, the WRITING EVALUATOR,
// had none at all, so a fenced-but-valid evaluation was a "couldn't connect"
// every time it happened. The golden calibration passed throughout, because
// golden-calibration.js stripped fences itself under a comment claiming
// "same tolerance as the production parsers" — which was false for the one
// parser that mattered most. A drift detector that is more tolerant than the
// thing it detects drift in cannot see this class of failure.
//
// parseModelJson never throws. It returns the parsed value, or null when no
// JSON object/array can be recovered — the caller decides what a null means
// (a 502 with a named code, never a fabricated result).

/** Strip a leading/trailing markdown code fence, with or without a language tag. */
export function stripFence(text) {
  return String(text ?? '')
    .replace(/^\s*```[a-zA-Z0-9_-]*\s*/i, '')
    .replace(/\s*```\s*$/i, '')
    .trim();
}

/**
 * Recover the JSON value from a model reply: exact parse first, then the
 * fence-stripped text, then the outermost `{…}` or `[…]` span (whichever
 * opens first). Returns null when nothing parses.
 */
export function parseModelJson(text) {
  const raw = String(text ?? '');
  if (!raw.trim()) return null;
  const candidates = [raw, stripFence(raw)];
  const firstObj = raw.indexOf('{');
  const firstArr = raw.indexOf('[');
  const starts = [firstObj, firstArr].filter((i) => i >= 0);
  if (starts.length > 0) {
    const start = Math.min(...starts);
    const closer = raw[start] === '{' ? '}' : ']';
    const end = raw.lastIndexOf(closer);
    if (end > start) candidates.push(raw.slice(start, end + 1));
  }
  for (const c of candidates) {
    try {
      const v = JSON.parse(c);
      if (v && typeof v === 'object') return v;
    } catch {
      /* try the next candidate */
    }
  }
  return null;
}
