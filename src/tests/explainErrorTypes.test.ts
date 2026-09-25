/**
 * explainErrorTypes.test.ts — every `type` a client sends must be one the
 * endpoint accepts (2026-09-25).
 *
 * THE DEFECT THIS EXISTS FOR, WHICH HAPPENED TWICE. `/api/explain-error` keeps an
 * allow-list, `VALID_TYPES`, and 400s anything else. Its own comment says:
 * "Keep this list in step with the `type:` sent by every _aiPost caller" —
 * a sentence, with nothing enforcing it.
 *
 *   FIRST: `multiple_choice` — McGame, the app's most-used exercise — was absent,
 *   so every wrong answer there was rejected and the explanation card silently
 *   never appeared. Fixed by hand; the comment was written then.
 *   SECOND: `drill`. `WrongAnswerHelp` is mounted once inside `ModeDrill` and
 *   passes `type="drill"`; rec #7 shipped it across all 109 engine-backed drills
 *   on 2026-09-07 and the allow-list was not touched. Reported from production by
 *   the owner on 2026-09-25 — Sentry `ai_feedback_failed:drill-explain-error:server`
 *   on `/objekt` — nineteen days later.
 *
 * WHY IT LOOKED LIKE A SERVER FAULT, which is the reason nobody noticed sooner:
 * `failureFromStatus` has no 4xx branch, so a 400 falls through to
 * `build('server')`. The learner is told the evaluator is having trouble, and
 * Sentry says `:server` about a request the server rejected as malformed.
 *
 * AND IT WAS NOT FREE. `requireAuthedAI` charges a quota turn and pre-charges the
 * monthly budget ceiling at the GATE, before the handler validates — so each dead
 * press spent one of the learner's 300 daily turns and booked ~$0.014 against the
 * $9 month for a call that never happened (`refundPrecharge` now gives that back).
 *
 * The check is a DERIVATION, because a second hand-written list would decay the
 * same way the first one did: read the types out of the call sites and require
 * each to be in the endpoint's list.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const ENDPOINT = 'functions/api/explain-error.js';

/** The endpoint's accepted types, read from its source. */
function validTypes(): string[] {
  const src = strip(readFileSync(ENDPOINT, 'utf8'));
  const m = /const VALID_TYPES\s*=\s*\[([^\]]*)\]/.exec(src);
  if (!m) throw new Error('VALID_TYPES not found — has the endpoint been restructured?');
  return [...m[1]!.matchAll(/'([^']+)'/g)].map((x) => x[1]!);
}

/** Every type the endpoint has a prompt description for. */
function describedTypes(): string[] {
  const src = strip(readFileSync(ENDPOINT, 'utf8'));
  const m = /const TYPE_DESCS\s*=\s*\{([\s\S]*?)\n {2}\};/.exec(src);
  if (!m) throw new Error('TYPE_DESCS not found');
  return [...m[1]!.matchAll(/^\s*([A-Za-z_]\w*)\s*:/gm)].map((x) => x[1]!);
}

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(e) && !p.includes('/tests/')) out.push(p);
  }
  return out;
}
const SRC = walk('src').map((f) => [f, strip(readFileSync(f, 'utf8'))] as const);

/**
 * Types the client can send. Three shapes, and MISSING ANY ONE OF THEM WOULD HAVE
 * MISSED THE LIVE BUG — the defect was in the third:
 *   1. `useExplainError('case_drill', …)`   — a literal at the hook call
 *   2. `type = 'drill'` in WrongAnswerHelp  — the DEFAULT parameter
 *   3. `<WrongAnswerHelp type="drill" …>`   — the JSX attribute ModeDrill passes
 */
function clientTypes(): { type: string; where: string }[] {
  const out: { type: string; where: string }[] = [];
  for (const [file, src] of SRC) {
    for (const m of src.matchAll(/useExplainError\(\s*'([^']+)'/g))
      out.push({ type: m[1]!, where: `${file} (hook call)` });
    if (file.endsWith('WrongAnswerHelp.tsx'))
      for (const m of src.matchAll(/^\s*type = '([^']+)',/gm))
        out.push({ type: m[1]!, where: `${file} (default prop)` });
    for (const tag of src.matchAll(/<WrongAnswerHelp\b[\s\S]{0,400}?\/>/g))
      for (const m of tag[0].matchAll(/\btype="([^"]+)"/g))
        out.push({ type: m[1]!, where: `${file} (JSX attribute)` });
  }
  return out;
}

describe('/api/explain-error accepts every type its clients send', () => {
  it('the derivation is real: it finds the known call sites', () => {
    const found = clientTypes();
    // Eight case drills + word order pass 'case_drill'; ModeDrill passes 'drill'.
    expect(found.length).toBeGreaterThan(8);
    expect(found.map((f) => f.type)).toContain('case_drill');
    expect(
      found.map((f) => f.type),
      'ModeDrill\'s `type="drill"` must be visible to this derivation — it is the ' +
        'one the hand-written list missed',
    ).toContain('drill');
    expect(found.some((f) => f.where.includes('ModeDrill'))).toBe(true);
  });

  it('the endpoint list is read from source, not restated here', () => {
    const v = validTypes();
    expect(v.length).toBeGreaterThan(4);
    expect(v).toContain('cloze');
  });

  it('every type a client sends is accepted by the endpoint', () => {
    const valid = new Set(validTypes());
    const bad = clientTypes().filter((c) => !valid.has(c.type));
    expect(
      bad.map((b) => `${b.type} — ${b.where}`),
      'these types are sent by the app and rejected by /api/explain-error with 400 ' +
        '"Invalid type". The learner sees a failed evaluator, Sentry records it as ' +
        '`:server` (there is no 4xx branch in failureFromStatus), and the gate has ' +
        'already spent a quota turn. Add the type to VALID_TYPES and TYPE_DESCS.',
    ).toEqual([]);
  });

  it('every accepted type has a prompt description', () => {
    // A type in VALID_TYPES with no TYPE_DESCS row passes validation and then asks
    // the model about a "Croatian undefined at CEFR B1" — a quieter version of the
    // same defect, and the one the 'drill' fix could easily have left behind.
    const missing = validTypes().filter((t) => !describedTypes().includes(t));
    expect(missing, 'types with no TYPE_DESCS row render `undefined` into the prompt').toEqual([]);
  });

  it('a rejected request gives the budget pre-charge back', () => {
    // The gate charges before the handler validates, and reconcileSafely only runs
    // after a successful model call — so without this every 400 booked spend for a
    // call that never happened.
    const src = strip(readFileSync(ENDPOINT, 'utf8'));
    expect(src).toMatch(/refundPrecharge\(env, '\/api\/explain-error'\)/);
    // And the validation rejects must go through it, not bare err().
    expect(src).toMatch(/if \(!VALID_TYPES\.includes\(type\)\) return reject\(/);
  });
});
