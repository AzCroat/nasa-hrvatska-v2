/**
 * meteredEndpointsHaveCallers.test.ts — an AI endpoint nobody calls (sweep 130, 2026-09-25).
 *
 * THE CLASS, third rung of a ladder climbed in one day. Sweep 128 found a PROP
 * nobody passes; sweep 129 found MODULES nobody reaches; this is the layer out
 * from both — a metered, authenticated, prompt-registered, budget-charged AI
 * ENDPOINT with no caller anywhere in the product. Measured across the 30 entries
 * of `ENDPOINT_CEILING_MICROUSD` (which CLAUDE.md names as "the canonical
 * AI-endpoint list"), **three**:
 *
 *   /api/daily-culture      HomeTab's "Croatia Today postcard" was its only
 *                           caller, removed 2026-03-29 in `4afa7673`. Six months.
 *   /api/daily-plan         `home/DailyPlanCard.tsx` was its only caller.
 *   /api/adaptive-insights  `profile/AdaptiveInsightsCard.tsx` was its only caller.
 *
 * **THE LAST TWO WERE STRANDED BY #682, WHICH WAS RIGHT TO DO WHAT IT DID.** That
 * sweep deleted 31 modules nothing could reach — including those two cards — and
 * nothing anywhere asked whether a deleted client was the last caller of a live
 * server endpoint. So the failure mode is not carelessness; it is that removing
 * dead client code is a CORRECT action whose side effect had no observer. Each
 * survivor still authenticates, still charges the $10/month ledger on its
 * generate path, still carries a prompt id and a script rule, and is still
 * covered by four test suites — with no product behind it.
 *
 * All three are superseded rather than missing, which is why this guard RECORDS
 * them instead of demanding they be wired: the daily plan is what
 * `buildSessionActivities` composes deterministically, the insights are what the
 * mastery ledger, the concept map and InsightsTab present from measured data, and
 * the culture fact is what the P4 slot, CULTURE_DEEP_DIVES and City of the Day
 * serve. Deleting them is a decision about a working endpoint, queued in
 * AUDIT-STATE; this file makes a FOURTH one impossible to acquire silently.
 *
 * TWO THINGS THE MATCHER HAS TO GET RIGHT, both learned the hard way elsewhere:
 *
 * 1. **A MENTION IS NOT A CALL.** Every one of the three shows "server hits" for
 *    its own path — in `_aiBudget.js`'s ceiling table, in `_requireAuth.js`'s
 *    doc comment, in `_promptCache.js`'s header. Those are data and prose about
 *    the endpoint, not traffic to it. Comments are stripped and the endpoint's
 *    own handler is excluded; the ceiling table is excluded by construction
 *    because it is the SUBJECT list.
 * 2. **A CALLER THAT IS ITSELF UNREACHABLE IS NOT A CALLER.** `/api/translate`
 *    is called from `hooks/useTranslator.ts`, which sweep 129 established is
 *    reachable only from its own tests. It survives here only because
 *    `AIConversation` also calls it — so without the reachability filter this
 *    guard would credit a dead module and, the day that live caller changed,
 *    report a stranded endpoint as healthy. Same shape as "a conduit is not a
 *    producer" (sweep 111) and "a clear is not a producer" (sweep 117).
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, appReachable, isSubject } from './helpers/moduleGraph';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const BUDGET = 'functions/api/_aiBudget.js';

/** The ceiling table's endpoints — the canonical AI-endpoint list, read from source. */
export function meteredEndpoints(): string[] {
  const src = fs.readFileSync(path.join(ROOT, BUDGET), 'utf8');
  const tbl = src.slice(src.indexOf('ENDPOINT_CEILING_MICROUSD'));
  // `:generate` is the same endpoint's spend path, not a separate route.
  return [
    ...new Set([...tbl.matchAll(/'(\/api\/[a-z0-9-]+)(?::generate)?'\s*:/g)].map((m) => m[1]!)),
  ].sort();
}

/**
 * A call site names the path and then ends the string, or continues it with a
 * query or a fragment. The trailing-character class is what sweep 123 had to add
 * for `` `/api/news?level=${level}` `` — without it a templated URL is invisible
 * and a live endpoint reads as stranded.
 */
const callsIt = (txt: string, ep: string) =>
  new RegExp(`${ep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=['"\`?#])`).test(txt);

/** Files that legitimately NAME every endpoint: the subject list and its prose. */
const NOT_TRAFFIC = new Set([
  BUDGET,
  'functions/api/_requireAuth.js',
  'functions/api/_promptCache.js',
  'functions/api/_promptRegistry.js',
]);

function walkFiles(dir: string, exts: string[], out: string[] = []): string[] {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return out;
  for (const e of fs.readdirSync(abs)) {
    const rel = path.join(dir, e);
    if (fs.statSync(path.join(ROOT, rel)).isDirectory()) walkFiles(rel, exts, out);
    else if (exts.some((x) => e.endsWith(x))) out.push(rel);
  }
  return out;
}

/** Where each endpoint is called from, by kind of caller. */
function callersOf(ep: string): { client: string[]; server: string[]; ci: string[] } {
  const reachable = APP_REACHABLE;
  const handler = `functions/api/${ep.slice('/api/'.length)}.js`;
  const client = CLIENT_FILES.filter(([f, t]) => reachable.has(f) && callsIt(t, ep)).map(
    ([f]) => f,
  );
  const server = SERVER_FILES.filter(
    ([f, t]) => f !== handler && !NOT_TRAFFIC.has(f) && callsIt(t, ep),
  ).map(([f]) => f);
  const ci = CI_FILES.filter(([, t]) => callsIt(t, ep)).map(([f]) => f);
  return { client, server, ci };
}

const APP_REACHABLE = appReachable();
const CLIENT_FILES: [string, string][] = walkFiles('src', ['.ts', '.tsx', '.js', '.jsx'])
  .filter(isSubject)
  .map((f) => [f, strip(fs.readFileSync(path.join(ROOT, f), 'utf8'))]);
const SERVER_FILES: [string, string][] = walkFiles('functions', ['.js']).map((f) => [
  f,
  strip(fs.readFileSync(path.join(ROOT, f), 'utf8')),
]);
const CI_FILES: [string, string][] = walkFiles('.github/workflows', ['.yml', '.yaml']).map((f) => [
  f,
  fs.readFileSync(path.join(ROOT, f), 'utf8'),
]);

/**
 * Endpoints with no CLIENT caller, each with the reason. Two kinds only:
 * dispatched-by-CI (a real caller, just not a learner), and STRANDED.
 */
const NO_CLIENT_CALLER: Record<string, string> = {
  '/api/golden-calibration':
    'BY DESIGN: dispatch-only, gated on CRON_SECRET or the self-provisioned ' +
    'CALIBRATION_SECRET, run from calibration.yml. No user can reach it — that is the ' +
    'one sanctioned exception to requireAuthedAI, and it pre-charges its whole run.',
  '/api/stt-calibration':
    'BY DESIGN: dispatch-only + monthly, run from stt-calibration.yml behind the same ' +
    'CRON_SECRET/CALIBRATION_SECRET gate. Calibrates the transcription stage in front ' +
    'of the rubric golden set; zero Claude calls.',
  '/api/daily-culture':
    'STRANDED since 2026-03-29. `4afa7673` ("Remove Croatia Today postcard from Home ' +
    'page") removed its only caller from HomeTab; CroatiaPostcard.tsx itself was deleted ' +
    'later by #682. Superseded by the P4 culture slot, CULTURE_DEEP_DIVES and City of ' +
    'the Day, so it is recorded rather than re-wired — but it still authenticates and ' +
    'still charges the ledger on its generate path. Deletion queued in AUDIT-STATE.',
  '/api/daily-plan':
    'STRANDED by #682, which correctly deleted `home/DailyPlanCard.tsx` — its only ' +
    'caller — as part of 31 unreachable modules, with nothing to notice that a deleted ' +
    "client was an endpoint's last caller. Superseded by buildSessionActivities, which " +
    'composes the daily plan deterministically and cannot fail to generate.',
  '/api/adaptive-insights':
    'STRANDED by #682, same mechanism: `profile/AdaptiveInsightsCard.tsx` was its only ' +
    'caller. Superseded by the mastery ledger, the concept map and InsightsTab, which ' +
    'present MEASURED data instead of asking a model to characterise the learner.',
};

describe('every metered AI endpoint has a caller', () => {
  const endpoints = meteredEndpoints();

  it('the subject list is the real ceiling table', () => {
    // A floor, so a slice that silently stops matching cannot make this vacuous.
    expect(endpoints.length).toBeGreaterThan(25);
    for (const known of ['/api/tts', '/api/correct', '/api/ai-chat', '/api/news'])
      expect(endpoints, `${known} must be in the ceiling table`).toContain(known);
  });

  it('non-vacuity: an endpoint the app plainly calls is seen as called', () => {
    // /api/tts is called from lib/audio.ts and a dozen screens; /api/correct from
    // the exam writing task. If these read as uncalled the matcher is broken, and
    // it would fail in the SILENT direction for everything else.
    expect(callersOf('/api/tts').client.length).toBeGreaterThan(0);
    expect(callersOf('/api/correct').client.length).toBeGreaterThan(0);
  });

  it('a MENTION in the ceiling table or a doc comment is not a caller', () => {
    // All three stranded endpoints are named in _aiBudget.js and two in prose.
    // Driven through the real reader so a widened NOT_TRAFFIC cannot hide traffic.
    for (const ep of ['/api/daily-culture', '/api/daily-plan', '/api/adaptive-insights']) {
      const { client, server, ci } = callersOf(ep);
      expect([...client, ...server, ...ci], `${ep} should have no caller at all`).toEqual([]);
    }
  });

  it('a caller that is itself unreachable does not count', () => {
    // hooks/useTranslator.ts calls /api/translate and is reachable only from its
    // own tests (sweep 129). The endpoint stays healthy here because AIConversation
    // calls it too — so assert BOTH halves, or this clause proves nothing.
    const dead = 'src/hooks/useTranslator.ts';
    expect(
      fs.readFileSync(path.join(ROOT, dead), 'utf8').includes('/api/translate'),
      'fixture moved: useTranslator no longer calls /api/translate',
    ).toBe(true);
    expect(APP_REACHABLE.has(dead), 'fixture moved: useTranslator is live again').toBe(false);
    expect(callersOf('/api/translate').client).not.toContain(dead);
    expect(callersOf('/api/translate').client.length).toBeGreaterThan(0);
  });

  it('every endpoint is called from the app, or recorded with its reason', () => {
    const uncalled: string[] = [];
    for (const ep of endpoints) {
      if (callersOf(ep).client.length) continue;
      if (NO_CLIENT_CALLER[ep]) continue;
      uncalled.push(ep);
    }
    expect(
      uncalled,
      'these metered AI endpoints have no reachable caller in the app. Each one still ' +
        'authenticates and can still charge the monthly ledger, with no product behind it. ' +
        'Wire it, delete it, or record it in NO_CLIENT_CALLER with the reason — deleting a ' +
        'dead client module is how the last two acquired this state, and nothing noticed.',
    ).toEqual([]);
  });

  it('every recorded endpoint still exists and still has no client caller', () => {
    expect(Object.keys(NO_CLIENT_CALLER).length).toBeGreaterThan(0);
    for (const [ep, reason] of Object.entries(NO_CLIENT_CALLER)) {
      expect(reason.length, `${ep} needs a stated reason`).toBeGreaterThan(80);
      expect(endpoints, `${ep} is no longer in the ceiling table — drop its entry`).toContain(ep);
      expect(
        fs.existsSync(path.join(ROOT, `functions/api/${ep.slice('/api/'.length)}.js`)),
        `${ep}: handler deleted — drop its entry`,
      ).toBe(true);
      expect(
        callersOf(ep).client,
        `${ep}: the app calls it now — drop its entry and let the check judge it`,
      ).toEqual([]);
    }
  });

  it('a CI-dispatched endpoint really is dispatched by a workflow', () => {
    // The difference between "by design" and "stranded" is whether something
    // actually calls it. Asserted, not taken on the reason's word.
    for (const ep of ['/api/golden-calibration', '/api/stt-calibration'])
      expect(callersOf(ep).ci.length, `${ep} claims CI dispatch — prove it`).toBeGreaterThan(0);
    // And the stranded three must NOT be dispatched by anything.
    for (const ep of ['/api/daily-culture', '/api/daily-plan', '/api/adaptive-insights'])
      expect(callersOf(ep).ci.length, `${ep} is dispatched after all`).toBe(0);
  });
});
