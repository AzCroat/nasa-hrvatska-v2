/**
 * errorCodeDistinct.test.js — two different failures must not answer with the
 * same code.
 *
 * THE COST, IN THIS REPO'S OWN WORDS. `aiFailure.ts` records why the
 * `non_json_body` name had to exist: an
 * `ai_feedback_failed:speaking-coach:server status=502` with no `code=` "was
 * consistent with SIX different `err(502, …)` returns in the endpoint AND with
 * the endpoint never running at all, and nothing recorded said which."
 *
 * That fix named the ABSENT code. It did not make the PRESENT codes distinct,
 * and they are not: thirty-two groups of two-or-more failure paths inside a
 * single endpoint returned an identical `(status, code)` pair. When one of them
 * fires in production the report says which endpoint and which status, and then
 * stops — which is exactly the position the still-open speaking-coach 502 left
 * us in.
 *
 * FIXED HERE, the two endpoints behind that issue:
 *   correct.js          a network failure reaching Anthropic and an unreadable
 *                       response body both returned 'Service temporarily
 *                       unavailable'. Now `upstream_network` /
 *                       `upstream_body_unreadable` — the vocabulary
 *                       `speaking-coach.js` already uses. Neither code is
 *                       recognised by the client, so both still classify as kind
 *                       `server` and NO learner-facing sentence moves.
 *   assess-speaking.js  a non-2xx from Anthropic and an unparseable rubric both
 *                       returned `rubric_failed`. The non-2xx path is now
 *                       `upstream_error`. THIS ONE DOES CHANGE A SENTENCE, and
 *                       it changes it to the true one: `rubric_failed` is in the
 *                       client's UNUSABLE_CODES, which says "The evaluator
 *                       returned an unusable answer" — and on a non-2xx there is
 *                       no answer at all. `rubric_failed` stays on the catch,
 *                       which is the case it describes, so UNUSABLE_CODES is
 *                       untouched.
 *
 * THE TRAP THIS AVOIDS, recorded because the obvious fix walks into it: had the
 * six `listening.js` `parse_failed` sites been renamed `parse_failed_narrator`
 * and so on WITHOUT extending UNUSABLE_CODES, their kind would silently fall
 * from `unusable_reply` to `server` and the learner's message would change with
 * nothing saying so. Narrowing a code to the path it actually describes is safe;
 * renaming one is not.
 *
 * THE REST IS RECORDED DEBT, not silence — thirty groups below, pinned with
 * their counts and checked in BOTH staleness directions.
 *
 * TWO ERROR SHAPES, AND A SWEEP THAT READS ONLY ONE IS WRONG BY A THIRD. The
 * helper `err(status, code)` accounts for 216 returns; `correct.js` and others
 * build `new Response(JSON.stringify({ error }), { status })` by hand, which is
 * 72 more. My first pass matched only `err(` and therefore could not see
 * `correct.js` at all — one of the two endpoints this change exists to fix.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s) => s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

/** Every error return in an endpoint, in either shape. */
function errorReturns() {
  const perFile = new Map();
  let viaHelper = 0;
  let viaRaw = 0;
  for (const file of globSync('functions/api/**/*.js')) {
    if (/\/_/.test(file)) continue; // shared helpers are not endpoints
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test scans repo sources
    const s = strip(readFileSync(file, 'utf8'));
    const push = (status, code, idx) => {
      const name = file.replace('functions/api/', '');
      if (!perFile.has(name)) perFile.set(name, []);
      perFile.get(name).push({ status, code, line: s.slice(0, idx).split('\n').length });
    };
    for (const m of s.matchAll(/\berr\(\s*(\d{3})\s*,\s*('[^']*'|"[^"]*"|[^,)\n]{0,40})/g)) {
      viaHelper++;
      push(m[1], m[2].trim().replace(/^['"]|['"]$/g, ''), m.index);
    }
    for (const m of s.matchAll(
      /new Response\(\s*JSON\.stringify\(\{\s*error:\s*('[^']*'|"[^"]*")\s*\}\)([\s\S]{0,160})/g,
    )) {
      const st = (m[2].match(/status:\s*(\d{3})/) || [])[1];
      if (!st) continue;
      viaRaw++;
      push(st, m[1].replace(/^['"]|['"]$/g, ''), m.index);
    }
  }
  return { perFile, viaHelper, viaRaw };
}

/** `file status code` → how many paths share it. */
function duplicateGroups() {
  const { perFile } = errorReturns();
  const out = new Map();
  for (const [file, list] of perFile) {
    const seen = new Map();
    for (const e of list) {
      const k = `${e.status} ${e.code}`;
      seen.set(k, (seen.get(k) ?? 0) + 1);
    }
    for (const [k, n] of seen) if (n > 1) out.set(`${file} ${k}`, n);
  }
  return out;
}

/**
 * The groups that still share a code, each with the number of paths on it.
 * COUNTS ARE PINNED so a group that GROWS — a seventh `parse_failed` in
 * listening.js — fails here rather than joining the debt silently.
 */
const KNOWN_DUPLICATES = {
  'ai-chat.js 400 Invalid request': 3,
  'ai-chat.js 502 Service temporarily unavailable': 6,
  'ai-chat.js 500 Generation failed': 2,
  'ai-chat.js 400 Unknown mode: ': 2,
  'ai-chat.js 502 Invalid response from AI': 2,
  'conversational-tutor.js 502 server_error': 2,
  'daily-culture.js 502 AI temporarily unavailable': 2,
  'daily-culture.js 502 AI unavailable': 2,
  'daily-plan.js 502 Service temporarily unavailable': 2,
  'dialogue.js 502 Service temporarily unavailable': 2,
  'explain-error.js 502 Service temporarily unavailable': 2,
  'flash-context.js 502 Service temporarily unavailable': 2,
  'flash-context.js 502 parse_failed': 3,
  'flux-generate.js 502 Image generation failed': 2,
  'grammar-diagnosis.js 502 Service temporarily unavailable': 2,
  'grammar-diagnosis.js 502 parse_failed': 2,
  'listening.js 502 Service temporarily unavailable': 2,
  'listening.js 502 parse_failed': 6,
  'maja-debrief.js 502 Service temporarily unavailable': 2,
  'maja.js 502 Service temporarily unavailable': 3,
  'micro-lesson.js 502 Service temporarily unavailable': 2,
  'micro-lesson.js 502 parse_failed': 2,
  'pronunciation-assess.js 502 azure_unavailable': 2,
  'pronunciation-assess.js 502 parse_failed': 2,
  'pronunciation-coach.js 502 Service temporarily unavailable': 2,
  'push-send.js 403 forbidden': 2,
  'srs-sync.js 502 Service temporarily unavailable': 2,
  'translate.js 500 server_error': 2,
  'translate.js 502 unavailable': 2,
  'vocab-expand.js 400 word is required': 2,
};

describe('the derivation is real', () => {
  it('reads both error shapes', () => {
    const { viaHelper, viaRaw } = errorReturns();
    // A sweep that sees only `err(` misses a third of the surface — including
    // correct.js entirely, which is the endpoint this change fixes.
    expect(viaHelper).toBeGreaterThan(200);
    expect(viaRaw).toBeGreaterThan(50);
  });
});

describe('the two endpoints behind the open speaking-coach issue are distinct', () => {
  it.each(['correct.js', 'assess-speaking.js', 'speaking-coach.js'])(
    '%s has no two failures answering the same way',
    (file) => {
      const offenders = [...duplicateGroups().keys()].filter((k) => k.startsWith(file + ' '));
      expect(offenders).toEqual([]);
    },
  );

  it('correct.js names its two upstream failures separately', () => {
    const s = readFileSync('functions/api/correct.js', 'utf8');
    expect(s).toMatch(/error: 'upstream_network'/);
    expect(s).toMatch(/error: 'upstream_body_unreadable'/);
  });

  it('assess-speaking keeps rubric_failed for the case it describes', () => {
    // The narrowing, not a rename: the catch (an unparseable reply) keeps the
    // code that is in UNUSABLE_CODES, so its learner sentence is unchanged.
    const s = readFileSync('functions/api/assess-speaking.js', 'utf8');
    expect(s).toMatch(/if \(!r\.ok\) return err\(502, 'upstream_error'/);
    expect(s).toMatch(/catch[\s\S]{0,200}return err\(502, 'rubric_failed'/);
  });
});

describe('no endpoint gains a new indistinguishable failure', () => {
  it('has no duplicate group outside the recorded debt', () => {
    const found = duplicateGroups();
    const novel = [...found]
      .filter(([k, n]) => KNOWN_DUPLICATES[k] !== n)
      .map(([k, n]) => `${k} — ${n} paths (recorded: ${KNOWN_DUPLICATES[k] ?? 'none'})`);
    expect(
      novel,
      'These failure paths answer with a code another path in the same endpoint ' +
        'already uses, so a production report cannot say which one fired:\n' +
        novel.map((x) => `  - ${x}`).join('\n'),
    ).toEqual([]);
  });

  it('every recorded entry is still a real duplicate', () => {
    // The other staleness direction: an entry that has since been fixed must
    // come off the list, or the list quietly stops meaning what it says.
    const found = duplicateGroups();
    const stale = Object.keys(KNOWN_DUPLICATES).filter((k) => !found.has(k));
    expect(stale).toEqual([]);
  });

  it('the debt list is not empty and not silently emptied', () => {
    // `it.each` over an empty set registers nothing; a count keeps this honest.
    expect(Object.keys(KNOWN_DUPLICATES).length).toBe(30);
  });
});
