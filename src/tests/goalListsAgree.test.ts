/**
 * goalListsAgree.test.ts — a learner must be able to get back to their own goal.
 *
 * THE GAP. Three screens let a learner set `nh_goal`, and each carried its own
 * `GOALS` list. They held SEVEN, FOUR and FIVE:
 *
 *   WelcomeScreen (onboarding)   7  heritage family elders partner travel culture fluent
 *   GoalSetterModal              4  heritage fluent travel culture
 *   GoalSelectorSection (Me)     5  heritage family travel culture fluent
 *
 * So onboarding offered `elders` and `partner` and neither picker afterwards
 * could select them. A learner who chose either — and this app is FOR the
 * diaspora, so the people-shaped goals are the common ones — opened the Me tab
 * picker, saw five options with their own missing, and any choice overwrote
 * `nh_goal` irreversibly: the list that could set it again was the one they had
 * already left. `GoalSetterModal` was worse, missing `family` as well.
 *
 * NOT COSMETIC. `GoalFocusSection` renders partner-specific shortcuts off
 * `nh_goal === 'partner'`, and `LEVEL_NARRATIVE` carries a six-rung narrative
 * for both `elders` and `partner` (the `elders` rungs were authored earlier this
 * same session, for a goal that had no entry at all — this is the second defect
 * found behind the same id).
 *
 * WHAT IS PINNED IS THE ID SET, NOT THE COPY, and that distinction is
 * deliberate. The modal says "Connect with my heritage" where onboarding says
 * "My heritage & roots", and the Me-tab list carries no `sub` at all. Those are
 * per-surface wording choices and forcing them together would be a redesign.
 * A goal that exists in one picker and not another is a different thing: it is a
 * learner who cannot return to their own answer.
 *
 * DERIVED FROM THE THREE FILES, so a fourth goal added to onboarding next month
 * fails here rather than quietly stranding whoever picks it.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');

const PICKERS = {
  'WelcomeScreen (onboarding)': 'src/components/home/WelcomeScreen.tsx',
  GoalSetterModal: 'src/components/shared/GoalSetterModal.tsx',
  'GoalSelectorSection (Me tab)': 'src/components/profile/sections/GoalSelectorSection.tsx',
} as const;

/** The ids in a file's `GOALS` array, read with balanced brackets. */
function goalIds(file: string): string[] {
  const s = strip(readFileSync(file, 'utf8'));
  const start = s.indexOf('const GOALS = [');
  expect(start, `${file} no longer declares GOALS — this guard is blind`).toBeGreaterThan(-1);
  let i = start + 'const GOALS = ['.length;
  let depth = 1;
  while (i < s.length && depth > 0) {
    const c = s[i];
    if (c === '[') depth++;
    else if (c === ']') depth--;
    i++;
  }
  return [...s.slice(start, i).matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]!);
}

describe('the derivation is real', () => {
  it.each(Object.entries(PICKERS))('%s declares a goal list', (_name, file) => {
    // A file whose list stopped parsing would otherwise report as agreeing with
    // everything, since an empty set is a subset of every set.
    expect(goalIds(file).length).toBeGreaterThan(3);
  });
});

describe('every goal a learner can be given, a learner can choose again', () => {
  const onboarding = goalIds(PICKERS['WelcomeScreen (onboarding)']);

  it('onboarding still offers all seven', () => {
    expect([...onboarding].sort()).toEqual(
      ['culture', 'elders', 'family', 'fluent', 'heritage', 'partner', 'travel'].sort(),
    );
  });

  it.each(Object.entries(PICKERS))('%s offers the same goals as onboarding', (name, file) => {
    const ids = goalIds(file);
    const missing = onboarding.filter((g) => !ids.includes(g));
    const extra = ids.filter((g) => !onboarding.includes(g));
    expect(
      { missing, extra },
      `${name} does not offer the same goals as onboarding. A goal onboarding can ` +
        `assign but this screen cannot re-select strands the learner: any choice ` +
        `here overwrites nh_goal and the option they had is gone.`,
    ).toEqual({ missing: [], extra: [] });
  });
});

describe('the two that were missing are specifically covered', () => {
  // Named because of what they are: `partner` drives GoalFocusSection's
  // shortcuts and both carry a LEVEL_NARRATIVE, so losing one is not cosmetic.
  it.each(['elders', 'partner'])('%s is selectable on every picker', (goal) => {
    for (const file of Object.values(PICKERS)) expect(goalIds(file)).toContain(goal);
  });
});
