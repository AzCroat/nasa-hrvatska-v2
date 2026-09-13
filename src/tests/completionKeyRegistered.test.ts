/**
 * completionKeyRegistered.test.ts — a graded finish must be ATTRIBUTED, not just
 * counted.
 *
 * THE GAP. `completeExercise({ key, … })` looks its key up in
 * `EXERCISE_COMPLETION`. An unregistered key does not throw and does not warn —
 * it takes the defaults, and two of the three are silently wrong for a drill:
 *
 *   policy.kind  'gated'   — correct for a graded drill.
 *   statKind     'gc'      — correct; the house convention for a graded drill.
 *   questKind    undefined — `markQuest` is never called, so the daily quest
 *                            does NOT tick for this drill while it ticks for
 *                            its ~250 siblings.
 *   activityType 'lesson'  — NOT a key of `ACTIVITY_TO_SKILL`, so
 *                            `recordExerciseOutcome` returns early and the
 *                            MASTERY LEDGER LEARNS NOTHING. The ledger feeds
 *                            the weakest-skill rung of `getNextStep`, the
 *                            concept map and the adaptive pick, so a learner
 *                            could grind these drills forever and the app would
 *                            still believe it had no evidence about them.
 *
 * NINE DRILLS WERE IN THAT STATE: conditionaldrill, discourse, idiomdrill,
 * nominalization, participles, present-tense, register, subordination,
 * word-order. All nine award XP and `gc` correctly, which is exactly why
 * nothing noticed — the visible half worked.
 *
 * TWO OF THE NINE ARE THE NEAR-MISS NAME AGAIN. The registry already held
 * `conditional` and `formalregister` — both LESSONS, carrying activityType
 * `'lesson'` — while the drills pass `conditionaldrill` and `register`. Same
 * shape as `GenderDrillScreen` firing `'gender'` rather than `'genderdrill'`.
 * A row that looks present is not a row that matches.
 *
 * DERIVED FROM THE CALL SITES, not from a list — a list is what the tenth drill
 * gets added without.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const strip = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');

const SRC = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
  (f) => !f.includes('/tests/') && !f.includes('.test.'),
);

type Site = { file: string; line: number; key: string | null; raw: string };

/** Every `completeExercise({ key: … })` call in the app. */
function callSites(): Site[] {
  const out: Site[] = [];
  for (const file of SRC) {
    const s = strip(readFileSync(file, 'utf8'));
    if (!s.includes('completeExercise(')) continue;
    const consts = new Map<string, string>();
    for (const m of s.matchAll(
      /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*'([^']*)'/g,
    ))
      consts.set(m[1]!, m[2]!);
    for (const m of s.matchAll(/completeExercise\(/g)) {
      // The argument is an OBJECT, not a positional key — a positional match
      // resolves 0 of 135 sites and reports a clean sweep over nothing.
      let i = m.index! + m[0].length;
      let depth = 1;
      const start = i;
      while (i < s.length && depth > 0) {
        const c = s[i];
        if (c === '(') depth++;
        else if (c === ')') depth--;
        i++;
      }
      const args = s.slice(start, i - 1);
      const km = args.match(/\bkey:\s*('([^']*)'|[A-Za-z_$][\w$.]*)/);
      const key = km ? (km[2] !== undefined ? km[2] : (consts.get(km[1]!) ?? null)) : null;
      out.push({
        file: file.replace('src/', ''),
        line: s.slice(0, m.index!).split('\n').length,
        key,
        raw: km ? km[1]! : '(no key field)',
      });
    }
  }
  return out;
}

/** The ids the 109 ModeDrill wrappers hand the shared engine. */
function modeDrillIds(): Map<string, string> {
  const out = new Map<string, string>();
  for (const file of globSync('src/components/**/*.tsx')) {
    const s = strip(readFileSync(file, 'utf8'));
    if (!s.includes('ModeDrill')) continue;
    for (const m of s.matchAll(/\bid=(?:"([^"]+)"|\{'([^']+)'\}|'([^']+)')/g)) {
      const v = (m[1] ?? m[2] ?? m[3])!;
      if (!out.has(v)) out.set(v, file.replace('src/', ''));
    }
  }
  return out;
}

describe('the derivation is real', () => {
  it('finds the call sites and resolves their keys', () => {
    const sites = callSites();
    expect(sites.length).toBeGreaterThan(120);
    // Nearly all are literal. If this collapses, the sweep below is vacuous.
    expect(sites.filter((s) => s.key).length).toBeGreaterThan(120);
  });

  it('finds the ModeDrill wrapper ids', () => {
    // One engine serves 109 drills, so an unregistered id here would be 109
    // screens with the defect, not one.
    expect(modeDrillIds().size).toBeGreaterThan(100);
  });

  it('the registry is loaded', () => {
    expect(Object.keys(EXERCISE_COMPLETION).length).toBeGreaterThan(250);
  });
});

describe('every graded finish is attributed', () => {
  it('has no completeExercise key missing from the registry', () => {
    const missing = callSites()
      .filter((s) => s.key && !EXERCISE_COMPLETION[s.key])
      .map((s) => `${s.key} (${s.file}:${s.line})`);
    expect(
      missing,
      'These keys are not in EXERCISE_COMPLETION, so the finish takes the ' +
        'defaults: no quest credit (questKind undefined) and NO mastery-ledger ' +
        'evidence (activityType falls to "lesson", which ACTIVITY_TO_SKILL does ' +
        'not map). XP and gc still work, which is why it goes unnoticed:\n' +
        missing.map((m) => `  - ${m}`).join('\n'),
    ).toEqual([]);
  });

  it('has no ModeDrill wrapper id missing from the registry', () => {
    const ids = modeDrillIds();
    const missing = [...ids]
      .filter(([k]) => !EXERCISE_COMPLETION[k])
      .map(([k, f]) => `${k} (${f})`);
    expect(missing).toEqual([]);
  });
});

describe('the nine that were missing are attributed honestly', () => {
  /**
   * activityType is DERIVED from the app's own classification — the drill's pool
   * category through `SKILL_GROUP`: case/verb/syntax is grammar, vocab is
   * vocabulary. Pinned by name because the derivation is the whole argument:
   * `idioms` and `register` are `vocab`, so tagging all nine `'grammar'` would
   * have fed the ledger mis-attributed evidence, which is worse than the none
   * it had (NEVER-DO 13).
   */
  const EXPECTED: Record<string, string> = {
    conditionaldrill: 'grammar',
    discourse: 'grammar',
    idiomdrill: 'vocabulary',
    nominalization: 'grammar',
    participles: 'grammar',
    'present-tense': 'grammar',
    register: 'vocabulary',
    subordination: 'grammar',
    'word-order': 'grammar',
  };

  it.each(Object.entries(EXPECTED))('%s records as %s', (key, activityType) => {
    expect(EXERCISE_COMPLETION[key]?.activityType).toBe(activityType);
  });

  it.each(Object.keys(EXPECTED))('%s awards quest credit', (key) => {
    // The other silently-lost half.
    expect(EXERCISE_COMPLETION[key]?.questKind).toBeTruthy();
  });

  it('none of them moved between the lc and gc counters', () => {
    // The CEFR score is `xp + lc*15 + gc*25`, so moving a drill between
    // counters changes every existing learner's derived level. These rows pin
    // `gc` deliberately: this change fixes attribution, not scoring.
    for (const key of Object.keys(EXPECTED))
      expect(EXERCISE_COMPLETION[key]?.policy.statKind).toBe('gc');
  });
});
