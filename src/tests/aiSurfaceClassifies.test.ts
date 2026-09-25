// src/tests/aiSurfaceClassifies.test.ts
//
// A RATCHET, BECAUSE THE PER-FILE GUARDS KEEP LETTING NEW SURFACES THROUGH.
//
// The 2026-09-07 feedback census fixed every surface that promises feedback on
// WRITING or SPEECH and pinned each one BY NAME in `feedbackSurfaces.test.ts`.
// On 2026-09-22 four more surfaces were found with the same defect —
// MicroLessonScreen rendering `monthly_budget_exhausted` raw, DailyListeningCard (deleted in sweep 136)
// and DialogueSim answering every cause with "try again",
// GrammarDiagnosisScreen blaming the learner's internet for a quota cap — and
// they were pinned by name too, in `aiRefusalMessages.test.ts`.
//
// Both guards are hand-written lists of files. Neither could have caught the
// other's defects, and neither can catch the NEXT one: a surface added next
// month lands unclassified and every test stays green. That is the decay shape
// this repo records over and over — the nav table wrong for five months, the
// hardcoded 56-category vocabulary list, GRAMMAR_STRUCTURE_CATEGORIES going
// stale the moment the pool grew.
//
// So this file derives its subject instead of listing it:
//
//   endpoints  <- ENDPOINT_CEILING_MICROUSD, IMPORTED from _aiBudget.js. That
//                 table is the canonical AI-endpoint list (the output observatory
//                 samples on membership in it), so a new endpoint is in scope the
//                 moment it has a ceiling — which it must, or the build fails.
//   callers    <- every src/ file whose source CALLS one through a fetching
//                 helper. Comment mentions do not count: `croatiaPool.ts` and
//                 `sessionPools.ts` name routes in comments beside pool entries
//                 and make no request.
//
// WHAT "CLASSIFY" MEANS: the surface turns a refusal into a named cause before a
// learner sees it — `lib/aiFailure`, `classifyAiLimit`, the TTS failure helpers,
// or `useExplainError` (whose panel is fail-soft by contract). Without one, a
// quota 429 and a budget 503 and a dropped connection are one message, and the
// message is usually wrong: "try again" cannot work until the cap resets.
//
// KNOWN_UNCLASSIFIED IS A RATCHET AND CAN ONLY SHRINK. It is not permission.
// Each entry carries why it has not been done, and the staleness test below
// fails if an entry is fixed and left in the list, or names a file that no
// longer calls an AI endpoint. Fixing them is deliberate work, one at a time,
// because a reflexive fix can be worse than none: `AIConversation`'s AbortError
// branch already says "Request timed out — please try again", and routing it
// through `failureFromError` would have replaced a correct sentence with one
// that says "The evaluator took too long" on a conversation screen.

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ENDPOINT_CEILING_MICROUSD } from '../../functions/api/_aiBudget.js';

const ROOT = join(__dirname, '..', '..');

/**
 * Files that call an AI endpoint but do not route it through a named cause.
 * ONLY SHRINKS — it went 10 -> 2 on 2026-09-22 and both survivors are VERIFIED
 * CORRECT rather than debt. There is no remaining entry whose reason is "not
 * done yet"; a new one may only be added with a reason that survives reading
 * the file, and the staleness test below fails if it is fixed and left here.
 */
const KNOWN_UNCLASSIFIED: Record<string, string> = {
  // GrammarReader was listed as debt on 2026-09-22 and that was WRONG. It says
  // "Couldn't read the sentence just now. The endings above still hold." — the
  // local morphology reading is already on screen and the AI is an explicit
  // second step (owner rec #6), so this is the designed degrade, honestly
  // worded. Re-reading the file corrected the label.
  'src/components/learn/GrammarReader.tsx':
    'AI is an optional second step; the local reading stays on screen and the copy says so',
  // VERIFIED CORRECT, not debt: the fallback is `{ score: null }` — explicitly
  // UNSCORED — so the progress bar resolves instead of spinning forever and the
  // app claims no measurement it did not make (NEVER-DO 13). The coach is
  // fail-soft by contract and may never block speaking practice.
  'src/components/practice/SpeakingScreen.tsx':
    'coach is fail-soft by contract; the fallback score is null, never fabricated',
};

const ENDPOINTS = Object.keys(ENDPOINT_CEILING_MICROUSD).filter((e) => !e.includes(':generate'));

function srcFiles(): string[] {
  const out: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir)) {
      if (e === 'node_modules' || e.startsWith('.')) continue;
      const p = join(dir, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (/\.(ts|tsx|js|jsx)$/.test(p)) out.push(p);
    }
  })(join(ROOT, 'src'));
  return out.filter((f) => !f.includes('/tests/') && !/__tests__|\.test\./.test(f));
}

/** Comments stripped: a route named in prose beside a pool entry is not a call. */
const strip = (s: string) =>
  s
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * Escape EVERY regex metacharacter, not just the one that looked dangerous.
 * The first version escaped `/` and nothing else — which CodeQL flagged (alert
 * 79, "incomplete string escaping") and which was backwards twice over: inside
 * a `RegExp` CONSTRUCTOR a forward slash is an ordinary character needing no
 * escape, while `.`, `+`, `?` and a literal backslash all change what the
 * pattern means. Endpoints come from a fixed table so nothing hostile reaches
 * here, but a route named `/api/v2.1` would silently match `/api/v2X1`, and a
 * guard that quietly matches the wrong thing is the failure this file exists
 * to prevent.
 */
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * `ttsFetch` NAMED THE ENDPOINT IN THE ALTERNATION AND MATCHED NOTHING
 * (2026-09-23). Every one of its ten call sites passes an OBJECT —
 * `ttsFetch({ text, slow, voice })` — never a URL, because the helper already
 * knows the route. So the branch that appeared to cover the TTS path could not
 * fire anywhere, and two files whose ONLY AI call is `ttsFetch`
 * (`GradedInputScreen`, `SpeakingSprintScreen`) were invisible to this whole
 * suite. One of them was telling every learner to check their connection for a
 * used-up daily allowance.
 *
 * A caller is matched by the URL it names OR by a helper that names it for
 * them. Keep the two apart: a helper is only listed here once its route is
 * fixed in its own source, or this stops being a statement about endpoints.
 */
const ENDPOINT_HELPERS: Record<string, RegExp> = { '/api/tts': /\bttsFetch\s*\(/ };

const callsEndpoint = (body: string, ep: string) =>
  new RegExp(`(?:_aiPost|apiFetch|fetch)\\s*\\(\\s*['"\`]${escapeRegExp(ep)}`).test(body) ||
  (ENDPOINT_HELPERS[ep]?.test(body) ?? false);

/**
 * What counts as naming the cause. `majaErrorMessage` is on this list because
 * MajaScreen classifies through a LOCAL helper (`croatia/majaErrors.ts`) that
 * wraps the shared `classifyAiLimit` and answers in Croatian — right for a
 * Croatian-language conversation, where an English sentence would break
 * immersion mid-turn. The first version of this pattern matched only
 * classifiers used in the SAME file, so Maja read as unclassified when it is
 * one of the better-handled surfaces in the app. A guard that cannot see a
 * classifier one module away reports working code as debt.
 */
const CLASSIFIES =
  /failureFrom(?:Response|Status|Error)|classifyAiLimit|describeTtsFailure|getLastTtsFailure|useExplainError|majaErrorMessage/;

interface Caller {
  file: string;
  endpoints: string[];
  classifies: boolean;
}

const callers: Caller[] = srcFiles()
  .map((f) => {
    const body = strip(readFileSync(f, 'utf8'));
    const endpoints = ENDPOINTS.filter((ep) => callsEndpoint(body, ep));
    return { file: relative(ROOT, f), endpoints, classifies: CLASSIFIES.test(body) };
  })
  .filter((c) => c.endpoints.length > 0);

describe('every AI surface names the cause of a refusal', () => {
  it('the derivation finds the callers at all', () => {
    // Anti-vacuity. If the call pattern stops matching — a new transport helper,
    // a renamed endpoint table — every assertion below passes trivially, which
    // is the decorative guard this file exists to replace.
    expect(ENDPOINTS.length).toBeGreaterThan(20);
    // MEASURED 2026-09-23: 38 with helper matching, 35 without. The floor sits
    // between the two, so reverting `ENDPOINT_HELPERS` fails here rather than
    // silently going back to a suite that cannot see the /api/tts surfaces.
    expect(callers.length).toBeGreaterThanOrEqual(36);
    // Three known-good anchors: one fixed on 2026-09-22, one long-standing,
    // and one whose ONLY AI call is `ttsFetch` — deliberately NOT the screen
    // fixed alongside this change, so the anchor cannot be satisfied by that
    // fix and can only hold while the helper matching does.
    expect(callers.map((c) => c.file)).toContain('src/components/learn/MicroLessonScreen.tsx');
    expect(callers.map((c) => c.file)).toContain('src/lib/speakingCoach.ts');
    expect(callers.map((c) => c.file)).toContain('src/components/learn/GradedInputScreen.tsx');
  });

  it('no NEW surface calls an AI endpoint without naming the cause', () => {
    const offenders = callers
      .filter((c) => !c.classifies && !(c.file in KNOWN_UNCLASSIFIED))
      .map((c) => `${c.file} [${c.endpoints.join(', ')}]`);
    expect(
      offenders,
      'These call an AI endpoint but never classify the refusal, so a quota 429, a ' +
        'budget 503 and a dropped connection reach the learner as one message — ' +
        'usually a "try again" that cannot work. Use lib/aiFailure, or add to ' +
        'KNOWN_UNCLASSIFIED with a reason if it is genuinely fail-soft:\n  ' +
        offenders.join('\n  '),
    ).toEqual([]);
  });

  it('KNOWN_UNCLASSIFIED holds no entry that has been fixed or has gone away', () => {
    // Both staleness directions — the couplingClearingPath lesson. An exemption
    // that outlives its subject guards nothing while implying it does.
    const byFile = new Map(callers.map((c) => [c.file, c]));
    const stale: string[] = [];
    for (const [file, reason] of Object.entries(KNOWN_UNCLASSIFIED)) {
      const c = byFile.get(file);
      if (!c) stale.push(`${file} — no longer calls an AI endpoint (${reason})`);
      else if (c.classifies) stale.push(`${file} — now classifies; remove it (${reason})`);
    }
    expect(stale, `stale entries:\n  ${stale.join('\n  ')}`).toEqual([]);
  });

  it('the ratchet only tightens', () => {
    // A count, because `it.each` over an empty set registers no tests and a
    // silently emptied list would look like success.
    // Both floors are AT the measured values, not slack above them: 35 callers,
    // 33 classifying, 2 exempt. A ratchet with headroom is not a ratchet — it
    // is permission for the next two surfaces to land unclassified.
    expect(Object.keys(KNOWN_UNCLASSIFIED).length).toBeLessThanOrEqual(2);
    expect(callers.filter((c) => c.classifies).length).toBeGreaterThanOrEqual(33);
  });
});
