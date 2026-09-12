/**
 * levelNarrative.test.tsx — the hero's goal badge must name the learner's goal,
 * at every level they can actually reach, for every goal they can actually pick.
 *
 * FOUND WHILE DELETING DEAD CODE. The task was to remove `_LEVEL_NARRATIVE`, a
 * non-exported, zero-reference copy left in `src/data/content.tsx` "for the
 * migration window". Comparing it against the shipped server copy before
 * deleting — rather than just deleting — turned up two live defects on the one
 * line that reads it (`HeroSection`):
 *
 *  1. THE LADDER RAN OUT. `lvl()` in appUtils goes to 10 (thresholds 0…3500);
 *     every narrative is 6 rungs, partner 5. So `rungs[level - 1]` was
 *     `undefined` from level 7 — 1200 XP, an ordinary amount of practice — and
 *     the badge fell back to the generic "Learning". The learners furthest
 *     along were the only ones whose goal the app stopped naming. The dead copy
 *     had a duplicated 7th rung, which is what that duplicate was clumsily
 *     reaching for; it would have moved the cliff to level 8, not removed it.
 *
 *  2. A WHOLE GOAL HAD NO LADDER. `elders` ("Za bake i djedove") is a
 *     first-class onboarding goal — `WelcomeScreen` branches on it in ten
 *     places, gives it its own sub-flow, and writes it to `nh_goal` — and it
 *     was absent from LEVEL_NARRATIVE entirely. That learner read "Learning"
 *     at level 1 and at every level after, forever. For an app whose audience
 *     is the diaspora, that is the goal it could least afford to leave
 *     anonymous.
 *
 * BOTH HALVES ARE DERIVED, because both went wrong for the same reason — a
 * hand-kept correspondence between two files that nothing checked:
 *   - the goal ids come from the REAL onboarding sources, so a goal added to a
 *     picker next month fails here instead of silently reading "Learning";
 *   - the level ceiling comes from the REAL `lvl()` thresholds, so raising the
 *     level cap cannot outrun the ladders unnoticed.
 * A restated list of six goal ids would have passed on the day `elders` was
 * added, which is exactly how it got here.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { LEVEL_NARRATIVE } from '../../functions/api/content/_data/core.js';
import { lvl } from '../lib/appUtils';

// framer-motion: render children through plain elements (no animation).
vi.mock('framer-motion', () => {
  const passthrough = (tag: string) =>
    function MotionStub(props: Record<string, unknown>) {
      const { children, className, style, onClick, ['aria-label']: ariaLabel } = props as never;
      return React.createElement(
        tag,
        { className, style, onClick, 'aria-label': ariaLabel },
        children,
      );
    };
  const motion = new Proxy({}, { get: (_t, tag: string) => passthrough(tag) });
  return { motion, AnimatePresence: ({ children }: { children: React.ReactNode }) => children };
});

vi.mock('../context/AppContext', () => ({ useApp: vi.fn(() => ({ name: 'Test' })) }));
vi.mock('../context/StatsContext', () => ({ useStats: vi.fn() }));
vi.mock('../hooks/useContent', () => ({ useContent: vi.fn() }));
vi.mock('../hooks/useTranslator', () => ({
  useTranslator: vi.fn(() => ({
    tDir: 'en-hr',
    setTDir: vi.fn(),
    tIn: '',
    setTIn: vi.fn(),
    tOut: '',
    setTOut: vi.fn(),
    tL: false,
    doTr: vi.fn(),
  })),
}));
vi.mock('../data', () => ({
  lXP: vi.fn(() => 0),
  nXP: vi.fn(() => 100),
  earnFreeze: vi.fn(),
  getStreakFreezes: vi.fn(() => 0),
  speak: vi.fn(),
}));
// PARTIAL mock. Only the localStorage-reading helpers the hero calls on mount
// are stubbed; `lvl` must stay REAL, because the level ceiling this test
// measures the ladders against is read out of its thresholds. A wholesale mock
// would let the ceiling be whatever the test said it was.
vi.mock('../lib/appUtils.js', async (importOriginal) => ({
  ...((await importOriginal()) as object),
  getDailyXP: vi.fn(() => 0),
  getDailyXPGoal: vi.fn(() => 50),
  getXPBoost: vi.fn(() => ({ active: false })),
  activateXPBoost: vi.fn(),
  canActivateXPBoost: vi.fn(() => false),
}));
vi.mock('../components/shared/CroatianGrb', () => ({ default: () => null }));

import HeroSection from '../components/home/HeroSection';
import { useStats } from '../context/StatsContext';
import { useContent } from '../hooks/useContent';

const PATH_DATA = {
  nextItem: null,
  activeLv: { level: 1, title: 'Level 1', items: [] },
  activeLvDone: 0,
};

/** Mounts the REAL hero and returns the goal-badge text it rendered. */
function badgeFor(goal: string | undefined, level: number): string {
  vi.mocked(useStats).mockReturnValue({
    level,
    stats: {
      xp: 0,
      lc: 0,
      gc: 0,
      sp: 0,
      de: 0,
      rc: 0,
      pf: 0,
      mv: 0,
      hi: 0,
      str: 0,
      ct: [],
      vs: [],
      rs: [],
      badges: [],
    },
    award: vi.fn(),
    setStats: vi.fn(),
  } as never);
  vi.mocked(useContent).mockReturnValue({ content: { LEVEL_NARRATIVE } } as never);
  const { unmount } = render(
    <HeroSection
      streak={{ count: 3, last: '2026-05-30' }}
      pathData={PATH_DATA}
      allQuestsDone={false}
      userGoal={goal}
    />,
  );
  // The badge sits beside "Level N" in the hero's level pill.
  const pill = screen.getByText(`Level ${level}`).parentElement!;
  const text = pill.lastElementChild!.textContent!.trim();
  unmount();
  return text;
}

/**
 * Every goal id a learner can actually choose, read from the REAL pickers.
 *
 * Each of the three declares `const GOALS = [ … ]`; the block is sliced by name
 * because all three files carry OTHER `id:` values further down (WelcomeScreen
 * alone has partner_native, elders_baka, first/second/third/fourth), and a
 * file-wide `id:` scrape would drag those in and make this test fail for
 * reasons that have nothing to do with goals.
 *
 * GoalSetterModal's CONNECTIONS list (diaspora / curious) is deliberately NOT
 * here: that answer is stored as `connection`, not `nh_goal`, and never reaches
 * this badge.
 */
const GOAL_PICKERS = [
  'src/components/home/WelcomeScreen.tsx',
  'src/components/shared/GoalSetterModal.tsx',
  'src/components/profile/sections/GoalSelectorSection.tsx',
];

function goalIdsIn(file: string): string[] {
  const src = readFileSync(file, 'utf8');
  const start = src.indexOf('const GOALS = [');
  if (start === -1) return [];
  const end = src.indexOf('\n];', start);
  const block = src.slice(start, end);
  return [...block.matchAll(/\bid:\s*'([a-z_]+)'/g)].map((m) => m[1]!);
}

const PICKABLE_GOALS = [...new Set(GOAL_PICKERS.flatMap(goalIdsIn))].sort();

/** The highest level `lvl()` can return, from the real thresholds. */
const MAX_LEVEL = lvl(Number.MAX_SAFE_INTEGER);

beforeEach(() => {
  vi.clearAllMocks();
});

describe('the derivations are real', () => {
  it('reads the goal ids out of the pickers', () => {
    // If this slice ever comes back empty the coverage test below passes
    // vacuously and guards nothing.
    expect(PICKABLE_GOALS.length).toBeGreaterThanOrEqual(7);
    expect(PICKABLE_GOALS).toContain('heritage');
    expect(PICKABLE_GOALS).toContain('partner');
    // The goal that had no ladder at all.
    expect(PICKABLE_GOALS).toContain('elders');
    // ...and the connection answers must NOT be swept in as goals.
    expect(PICKABLE_GOALS).not.toContain('diaspora');
    expect(PICKABLE_GOALS).not.toContain('curious');
    // Nor the per-goal follow-up ids further down WelcomeScreen.
    expect(PICKABLE_GOALS).not.toContain('elders_baka');
  });

  it('reads the level ceiling out of lvl()', () => {
    expect(MAX_LEVEL).toBeGreaterThanOrEqual(10);
    // The cliff was here: level 7 is 1200 XP, an ordinary amount of practice.
    expect(lvl(1200)).toBe(7);
  });
});

describe('every pickable goal has a narrative', () => {
  it.each(PICKABLE_GOALS)('%s', (goal) => {
    const rungs = (LEVEL_NARRATIVE as Record<string, string[]>)[goal];
    expect(
      rungs,
      `"${goal}" is selectable in onboarding but has no LEVEL_NARRATIVE entry, so ` +
        'that learner\'s hero badge reads the generic "Learning" at every level, forever.',
    ).toBeDefined();
    expect(rungs!.length).toBeGreaterThan(0);
  });
});

describe('the badge names the goal at every reachable level', () => {
  it.each(PICKABLE_GOALS)('%s holds its top rung past the end of the ladder', (goal) => {
    const rungs = (LEVEL_NARRATIVE as Record<string, string[]>)[goal]!;
    const top = rungs[rungs.length - 1]!;
    // One level past the ladder — where `rungs[level - 1]` was undefined.
    expect(badgeFor(goal, rungs.length + 1)).toBe(top);
    // ...and all the way to the ceiling.
    expect(badgeFor(goal, MAX_LEVEL)).toBe(top);
  });

  it('still walks the ladder rung by rung below the top', () => {
    // The clamp must not flatten the ladder into its last entry.
    const rungs = (LEVEL_NARRATIVE as Record<string, string[]>).heritage!;
    expect(badgeFor('heritage', 1)).toBe(rungs[0]);
    expect(badgeFor('heritage', 3)).toBe(rungs[2]);
    expect(badgeFor('heritage', rungs.length)).toBe(rungs[rungs.length - 1]);
  });

  it('partner, the SHORTEST ladder, keeps its terminal rung from level 6', () => {
    // 5 rungs, so this goal fell off a level earlier than every other one.
    expect(badgeFor('partner', 6)).toBe('Part of the Family');
  });

  it('elders is named from level 1, not "Learning"', () => {
    expect(badgeFor('elders', 1)).not.toBe('Learning');
    expect(badgeFor('elders', 1)).toBe('First Words');
  });
});

describe('"Learning" survives where it is the honest answer', () => {
  it('a goal that was never set', () => {
    expect(badgeFor(undefined, 3)).toBe('Learning');
  });

  it('a goal the payload does not know (a cached blob older than a new goal id)', () => {
    expect(badgeFor('some_future_goal', 3)).toBe('Learning');
  });
});

describe('the dead migration copy is gone', () => {
  it('src/data/content.tsx no longer declares _LEVEL_NARRATIVE', () => {
    const raw = readFileSync('src/data/content.tsx', 'utf8');
    // COMMENTS STRIPPED — the note recording the deletion names the symbol, and
    // prose reading exactly like the code it describes is how this repo's
    // guards keep turning out decorative.
    const code = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
    expect(code, 'the dead non-exported copy is back').not.toMatch(/_LEVEL_NARRATIVE/);
  });
});
