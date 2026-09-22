// src/tests/aiSurfaceClassifies.test.ts
//
// A RATCHET, BECAUSE THE PER-FILE GUARDS KEEP LETTING NEW SURFACES THROUGH.
//
// The 2026-09-07 feedback census fixed every surface that promises feedback on
// WRITING or SPEECH and pinned each one BY NAME in `feedbackSurfaces.test.ts`.
// On 2026-09-22 four more surfaces were found with the same defect —
// MicroLessonScreen rendering `monthly_budget_exhausted` raw, DailyListeningCard
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

/** Files that call an AI endpoint but do not yet name the cause. ONLY SHRINKS. */
const KNOWN_UNCLASSIFIED: Record<string, string> = {
  // Fail-soft BY CONTRACT: the item's authored tip stays on screen, so a failed
  // explanation costs the extra help and nothing else. Deliberate, not debt.
  'src/components/practice/ClozeEngine.tsx': 'explain-error is fail-soft; the tip remains',
  'src/components/practice/DictationScreen.tsx': 'explain-error is fail-soft; the tip remains',
  'src/components/practice/McGame.tsx': 'explain-error is fail-soft; the tip remains',
  'src/components/practice/ReviewScreen.tsx': 'explain-error is fail-soft; the tip remains',
  // Real debt, found by the 2026-09-22 derivation. Each needs its failure path
  // read before it is changed — see the header on reflexive fixes.
  'src/components/croatia/CroatianNewsScreen.tsx': 'debt: news/ai-chat failures not named',
  'src/components/croatia/HeritageStoryScreen.tsx': 'debt: ai-chat failure not named',
  'src/components/croatia/MajaScreen.tsx': 'debt: maja/maja-debrief failures not named',
  'src/components/croatia/PhraseOfDayScreen.tsx': 'debt: ai-chat/maja failures not named',
  'src/components/croatia/StoryModeScreen.tsx': 'debt: ai-chat failure not named',
  'src/components/croatia/StoryViewPanel.tsx': 'debt: ai-chat failure not named',
  'src/components/learn/GrammarReader.tsx': 'debt: ai-chat failure not named',
  'src/components/practice/Flashcards.tsx': 'debt: flash-context/flux-generate not named',
  'src/components/practice/SpeakingScreen.tsx': 'debt: pronunciation-coach failure not named',
  'src/components/practice/StoryScreens.tsx': 'debt: flux-generate failure not named',
  'src/components/practice/VideoLessonScreen.tsx': 'debt: listening failure not named',
  'src/components/profile/VocabJournal.tsx': 'debt: vocab-expand failure not named',
  'src/components/shared/PhotoVocabScanner.tsx': 'debt: photo-vocab failure not named',
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
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\/.*$/gm, '');

const callsEndpoint = (body: string, ep: string) =>
  new RegExp(
    `(?:_aiPost|apiFetch|fetch|ttsFetch)\\s*\\(\\s*['"\`]${ep.replace(/\//g, '\\/')}`,
  ).test(body);

const CLASSIFIES =
  /failureFrom(?:Response|Status|Error)|classifyAiLimit|describeTtsFailure|getLastTtsFailure|useExplainError/;

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
    expect(callers.length).toBeGreaterThan(25);
    // Two known-good anchors: one fixed on 2026-09-22, one long-standing.
    expect(callers.map((c) => c.file)).toContain('src/components/learn/MicroLessonScreen.tsx');
    expect(callers.map((c) => c.file)).toContain('src/lib/speakingCoach.ts');
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
    expect(Object.keys(KNOWN_UNCLASSIFIED).length).toBeLessThanOrEqual(17);
    expect(callers.filter((c) => c.classifies).length).toBeGreaterThanOrEqual(18);
  });
});
