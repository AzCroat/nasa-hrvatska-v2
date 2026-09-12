/**
 * crossBoundaryConstants.test.ts — three facts that live in two files each,
 * with a COMMENT as the only thing holding them together.
 *
 * This repo has a documented history with that exact shape, and it is the most
 * expensive one it has:
 *   - `wrangler.toml` said the cron secret was "Shared with scheduled worker
 *     above". It was a comment, not a mechanism. The two drifted: 79
 *     consecutive hourly runs, 0 reminders delivered, and the weekly Firestore
 *     backup down beside it, silently.
 *   - Three CEFR badge surfaces each carried a comment saying "same formula as
 *     StatsTab — all three must stay in sync". They were in sync with each
 *     other and with nothing that mattered, and the app showed a level the
 *     learner had not earned.
 *
 * A sweep for that comment shape turned up three more. NONE HAS DRIFTED — this
 * file is a ratchet, not a repair, and saying so plainly matters: the value is
 * that the next edit cannot quietly break them, not that something was broken
 * today.
 *
 * EACH IS CHECKED BY VALUE OR BEHAVIOUR, NEVER BY COMPARING SOURCE TEXT. Two
 * regexes spelled differently can behave identically and two spelled
 * identically can be reached differently; only running them answers the
 * question the comment claims.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

/* ── 1. The XP cap allowlist ────────────────────────────────────────────────
 * `functions/api/_activityXp.js` says: "IMPORTANT: Values must stay in sync
 * with src/lib/activityXp.ts. Update both files together if caps change."
 * Nothing imported both. The worker map is what actually CAPS an award, so a
 * client that believes a different number either over-awards locally and gets
 * clipped server-side, or under-awards for work the learner did.
 */
import { ACTIVITY_XP_MAP as WORKER_XP } from '../../functions/api/_activityXp.js';
import { ACTIVITY_XP_MAP as CLIENT_XP } from '../lib/activityXp';

/* ── 2. The Firestore document id ───────────────────────────────────────────
 * `_firestoreAdmin.js` says its transform "Must match exactly so the server
 * targets the same documents the client wrote". If it stops matching, the
 * server reads and writes a DIFFERENT document than the one holding the
 * learner's progress — and one of its callers is `/api/delete-account`, so a
 * GDPR deletion would report success having deleted nothing.
 */
import { emailToDocId } from '../../functions/api/_firestoreAdmin.js';
import { toDocId } from '../lib/userKey';

/* ── 3. The prompt tag per ai-chat mode ─────────────────────────────────────
 * `MODE_PROMPTS` says it "Mirrors the switch below deliberately: the response
 * tag must name the mode that ACTUALLY ran, so a regression in the story
 * generator is not attributed to the translator." A mode in the switch but not
 * the map ships untagged; a mode pointing at the wrong prompt makes the weekly
 * observatory blame the wrong prompt for a Croatian-script incident — which is
 * the one question prompt instrumentation exists to answer.
 */
const AI_CHAT = readFileSync('functions/api/ai-chat.js', 'utf8');

describe('the worker and client XP cap maps are the same map', () => {
  it('covers the same activities', () => {
    expect(Object.keys(WORKER_XP).length).toBeGreaterThan(5); // not vacuous
    expect(Object.keys(WORKER_XP).sort()).toEqual(Object.keys(CLIENT_XP).sort());
  });

  it('agrees on every cap', () => {
    const mismatches = Object.keys(WORKER_XP)
      .filter((k) => WORKER_XP[k] !== (CLIENT_XP as Record<string, number>)[k])
      .map(
        (k) => `${k}: worker ${WORKER_XP[k]} vs client ${(CLIENT_XP as Record<string, number>)[k]}`,
      );
    expect(
      mismatches,
      'the worker caps an award at a different number than the client awards',
    ).toEqual([]);
  });
});

describe('client and server derive the same Firestore document id', () => {
  /**
   * ADVERSARIAL INPUTS, not a spot check. Every character Firestore forbids in
   * a document id, plus the shapes both real callers actually pass (an email,
   * a bare Firebase uid). Comparing the two regexes as SOURCE would pass for
   * two spellings that behave differently and fail for two that do not.
   */
  const INPUTS = [
    'user@example.com',
    'UPPER.Case@Example.COM',
    'a.b.c@d.e',
    'uid#with$hash',
    'has/slash',
    'has[bracket]s',
    'all.of#them$here/now[ok]',
    'xK3nP9qLmZ2vB7wR', // a bare Firebase uid, nothing to replace
    'trailing.',
    '.leading',
    '',
  ];

  it.each(INPUTS)('agrees on %j', (input) => {
    expect(emailToDocId(input)).toBe(toDocId(input));
  });

  it('actually replaces the forbidden characters (the transform is not a no-op)', () => {
    // A positive control. Two functions that both returned their input
    // unchanged would satisfy every assertion above while breaking every
    // document path in the app.
    expect(toDocId('a.b#c$d/e[f]')).toBe('a_b_c_d_e_f_');
  });
});

describe('every ai-chat mode that runs also gets tagged', () => {
  /** The modes `buildSystemPrompt` actually handles, read from its switch. */
  const switchModes = (() => {
    const start = AI_CHAT.indexOf('function buildSystemPrompt(');
    expect(start, 'buildSystemPrompt was renamed — this guard is now blind').toBeGreaterThan(-1);
    const body = AI_CHAT.slice(start, AI_CHAT.indexOf('\n}', start));
    return [...new Set([...body.matchAll(/case '([a-z_]+)':/g)].map((m) => m[1]!))].sort();
  })();

  /** The modes the tag map claims to cover. */
  const mapModes = (() => {
    const start = AI_CHAT.indexOf('const MODE_PROMPTS = {');
    expect(start, 'MODE_PROMPTS was renamed — this guard is now blind').toBeGreaterThan(-1);
    const body = AI_CHAT.slice(start, AI_CHAT.indexOf('\n};', start));
    return [...new Set([...body.matchAll(/^\s*([a-z_]+):/gm)].map((m) => m[1]!))].sort();
  })();

  it('both sides were actually found', () => {
    // Either coming back empty makes the comparison below pass vacuously.
    expect(switchModes.length).toBeGreaterThan(10);
    expect(mapModes.length).toBeGreaterThan(10);
  });

  it('the tag map and the switch cover exactly the same modes', () => {
    expect(
      switchModes.filter((m) => !mapModes.includes(m)),
      'these modes generate content but ship no prompt tag — the observatory ' +
        'files their output under (uninstrumented)',
    ).toEqual([]);
    expect(
      mapModes.filter((m) => !switchModes.includes(m)),
      'these modes are tagged but no longer run — the tag names a prompt that ' +
        'produced nothing',
    ).toEqual([]);
  });
});
