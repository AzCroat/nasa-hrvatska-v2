/**
 * noUnreachableModules.test.ts — every module in src/ must be reachable.
 *
 * WHAT THIS CLOSED (2026-09-16). 31 modules were reachable from nothing at
 * all — not the app, not even a test. Among them: `RegionScreens.tsx` (776
 * lines, three screens all superseded by live standalone files of the same
 * names), a second root `ErrorBoundary` (main.tsx defines and mounts its own
 * inline), `components/family/index.ts` left over from the removed Family
 * feature, and components CLAUDE.md's directory map lists as live parts of the
 * home screen — `DailyCroatianSection`, `PathProgressCard`, `CampaignBanner`,
 * `WeeklyRecapModal`. Dead files are not merely clutter here: a duplicate
 * `RegionScreen` invites editing the one nobody renders.
 *
 * THE GRAPH IS BUILT FROM THE AST, AND THAT IS LOAD-BEARING. `madge --orphans`
 * answered 41, and it was wrong twice over:
 *   - it does not follow `export { X } from './X'`, so every module reached
 *     only through a barrel looked dead. It listed all seven illustrations;
 *     `LessonScreen` imports them via `components/illustrations/index.js`. The
 *     BUILD caught that, not the test suite — deleting them broke rollup.
 *   - it reports files with NO importer, which misses dead CLUSTERS (A imports
 *     B, both unreachable). Only a reachability walk finds those.
 * So: imports, re-exports, dynamic `import()` and `require()` are all edges,
 * and a `.js` specifier resolves to the literal file first (what the bundler
 * does) and then to the `.ts` source (what tsc does).
 *
 * The walk seeds from the app entries AND from every test, so a module kept
 * alive only by its own tests still counts as reachable — that is a softer
 * problem than dead code and is not what this guard is for.
 */
import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  ROOT,
  ENTRIES,
  isTest,
  isSubject,
  edgesOf,
  srcFiles,
  dependencyGraph,
  reachableFrom,
} from './helpers/moduleGraph';

// The graph itself lives in `helpers/moduleGraph` as of sweep 130, because
// `meteredEndpointsHaveCallers` needs the same walk — a caller that is itself
// unreachable is not a caller. `edgesOf` is re-exported so importers of this
// file by name keep working.
export { edgesOf } from './helpers/moduleGraph';

/**
 * Unreachable on purpose. Each entry states WHY, and both staleness directions
 * are checked below: the file must still exist, and it must still be
 * unreachable — an exemption guarding nothing is how the `idioms` dead end
 * survived a staleness test elsewhere in this suite.
 */
const KNOWN_UNREACHABLE: Record<string, string> = {
  'src/components/croatia/MediaCard.tsx':
    'Dead in the app, but mediaDoneTombstones.test.ts pins its source by path ' +
    '(readFileSync, not import), so deleting it means deciding the fate of the ' +
    'media-done tombstone chain — a separate call from a dead-file sweep.',
  'src/lib/constants/storage.ts':
    'A `.ts`/`.js` pair one specifier apart: attemptEvidence.ts imports ' +
    "'./constants/storage.js', which the BUNDLER resolves to storage.js and " +
    'tsc resolves to storage.ts. They differ only by `as const` today, so ' +
    'nothing diverges — but which file to keep is a deliberate decision.',
};

function unreachableModules(): { files: string[]; dead: string[]; reachable: number } {
  const files = srcFiles();
  const deps = dependencyGraph(files);
  const seen = reachableFrom(deps, [...ENTRIES, ...files.filter(isTest)]);
  const dead = files.filter((f) => isSubject(f) && !seen.has(f)).sort();
  return { files, dead, reachable: seen.size };
}

/**
 * Modules the APP cannot reach, which only the tests keep alive.
 *
 * THE GUARD ABOVE EXCLUDES THESE BY DESIGN, AND THAT HID 4,206 LINES (sweep 129,
 * 2026-09-25). Its walk seeds from every test as well as the app entries, on the
 * stated reasoning that "a module kept alive only by its own tests still counts as
 * reachable — that is a softer problem and is not what this guard is for". True of
 * a helper with a unit test. NOT true of what was actually in there: **21 modules,
 * 4,206 lines, including the entire `home/` hero cluster** — `HeroSection` and its
 * twelve satellites, unrendered since `c1aea80d` (2026-04-25, "rewrite HomeTab —
 * remove 12 sections") replaced it with the Daily Session Hub.
 *
 * The cost was not clutter. It was WORK DONE ON THE WRONG FILE, twice, by the
 * audit itself:
 *   - `#655` (2026-09-12) fixed "the hero stopped naming your goal at level 7"
 *     in `HeroSection.tsx` and added a 263-line test for it.
 *   - the 2026-09-06/09-08 CEFR-badge work named `heroHelpers.getCEFR` →
 *     `HeroStats` as one of THREE (later six) learner-visible badge surfaces,
 *     pinned it by source in `cefrBadgeCertified.test.tsx`, and renders
 *     `<HeroStats>` there. The field report it answered ("it shows C1, I'm not
 *     C1") was about `DesktopPanel`; the hero bar could not have shown anyone
 *     anything. The fix was right for the two live surfaces and moot for the third.
 * `#682`'s sweep deleted 31 modules of exactly this kind — including home
 * components — and could not see these, because these have tests. So this list is
 * the residue of that sweep, hidden by its own seeding rule.
 *
 * A module here is NOT automatically a defect: a pure library with a unit test and
 * no caller yet is a different thing from a 389-line screen. What is required is
 * that each one is NAMED, so a module cannot join the set in silence — which is
 * exactly what happened to all 21.
 */
const TEST_ONLY_REACHABLE: Record<string, string> = {
  // ── the hero cluster: one cause, one commit (c1aea80d, 2026-04-25) ──────────
  'src/components/home/HeroSection.tsx':
    'DEAD SCREEN, 389 lines. The old Home hero, replaced by SessionCard + the Daily ' +
    'Session Hub in c1aea80d. Still edited by #655 in September. Deletion queued.',
  'src/components/home/HeroStats.tsx':
    'DEAD, 381 lines. Rendered only by HeroSection — and by cefrBadgeCertified.test.tsx, ' +
    'which pins it as one of the six CEFR DISPLAY surfaces. It displays to nobody.',
  'src/components/home/heroHelpers.ts':
    'DEAD, 353 lines. Imported by HeroSection and useKnightSpeech, both dead. Named in ' +
    "CLAUDE.md as a display surface reading getDisplayLevel; that claim's subject is unrendered.",
  'src/components/home/heroData.ts':
    'DEAD, 352 lines of scene and mascot data read by HeroSection alone. The live Home ' +
    'greeting comes from hostFamily + SessionCard.',
  'src/components/home/useHeroRewards.ts':
    'DEAD, 142 lines. HeroSection reward state; the live reward path is useAward + quests.',
  'src/components/home/useKnightSpeech.ts':
    'DEAD, 77 lines. HeroSection knight speech. The live coach is shared/KnightCompanion.',
  'src/components/home/KnightBubble.tsx':
    'DEAD, 337 lines, rendered by HeroSection alone — not to be confused with the LIVE ' +
    'shared/KnightCompanion, which is what renders prof. Kovač today.',
  'src/components/home/TypewriterText.tsx':
    'DEAD, 35 lines. Imported by KnightBubble only, itself dead — a two-deep cluster.',
  'src/components/home/CompactStrip.tsx':
    'DEAD, 88 lines. The COLLAPSED hero bar (streak/level/XP chips plus an expand ' +
    'affordance), presentational, extracted from HeroSection in the 1c decomposition ' +
    'and dead with it. Nothing on Home collapses any more.',
  'src/components/home/QuickReplyBanner.tsx':
    'DEAD, 36 lines. A HeroSection banner; live Home banners are WelcomeBackBanners.',
  'src/components/home/RewardsPanel.tsx':
    'DEAD, 229 lines, rendered by HeroSection alone. Rewards reach the learner through ' +
    'the quest board and the badge surfaces instead.',
  'src/components/home/StoryOfTheDayCard.tsx':
    'DEAD, 155 lines, and a DELIBERATE removal whose file was left behind: ' +
    'TodaysDiscoveries\' own comment says Story of the Day was dropped "to leave a ' +
    'single reading lesson on the Home tab". There is no story-of-the-day path in the ' +
    "app at all now — CLAUDE.md's serial-authoring rule cited its day-indexed picker " +
    'until 2026-09-25. Graded stories are reached through GradedInputScreen.',
  'src/components/home/DailyListeningCard.tsx':
    'DEAD, 589 lines, and SUPERSEDED rather than stranded — the routed AIListeningScreen ' +
    'calls the same /api/listening for the same job. Its own site went in PR #55 ' +
    '(2026-06-19) although that PR\'s plan said "Keep … DailyListeningCard (reused by ' +
    'Grad/Today)". Also held by routerOptionalProps\' NOT_RENDERED. See sweep 128.',

  // ── independent of the hero, each its own finding ───────────────────────────
  'src/data/exerciseMeta.ts':
    'DEAD, 166 lines — a second copy of the exercise difficulty/category scale. The LIVE ' +
    "one is lib/exerciseDifficulty.ts, whose own comment says it mirrors this file's " +
    "scale; CLAUDE.md's new-drill checklist names exerciseDifficulty, correctly.",
  'src/lib/conjugation/morphology.ts':
    'TEST-ONLY VALIDATOR, 126 lines, and legitimately so — the one entry here that is ' +
    'the "softer problem" this guard\'s docstring means. `expectedForms` DERIVES each ' +
    "form from the verb's class and root, and verbsData.test.ts asserts the STORED forms " +
    'equal the derivation; the app renders those stored forms through forms.ts `formFor`, ' +
    'which is a LOOKUP and not a competing rule. So the data a learner meets is exactly ' +
    'what was validated. Listed because membership must never be silent, not as a defect.',
  'src/hooks/useErrorTracking.ts':
    'DEAD, 171 lines, with NO importer at all outside its own test. The live error ' +
    'taxonomy is lib/adaptive + the mastery ledger; crash reporting is errorReporter.',
  'src/hooks/useLocalStorage.ts':
    'Dead CLUSTER member, 84 lines: its only non-test importer is useHeroRewards, itself ' +
    'dead. The live storage path is lib/safeStorage.',
  'src/hooks/useTranslator.ts':
    'Dead CLUSTER member, 70 lines: its only non-test importer is useKnightSpeech, dead.',
  'src/lib/appData.ts':
    'DEAD, 96 lines. A re-export barrel over data.jsx for data-only consumers; every ' +
    'consumer imports src/data directly, so nothing has ever used it.',
  'src/lib/culturalFacts.ts':
    'DEAD, 94 lines of authored cultural facts with a test and no reader. The live daily ' +
    'fact comes from /api/daily-culture and the CULTURE_DEEP_DIVES payload.',
  'src/lib/storyRecommendation.ts':
    'Dead CLUSTER member, 136 lines: its only non-test importer is StoryOfTheDayCard, dead.',
};

describe('no unreachable modules in src/', () => {
  const { files, dead, reachable } = unreachableModules();

  it('the walk actually traverses the tree', () => {
    // Without this a broken resolver reaches nothing, calls everything dead,
    // and the exemption list below would be asked to cover the whole repo.
    expect(files.length).toBeGreaterThan(1000);
    expect(reachable).toBeGreaterThan(files.length / 2);
    for (const e of ENTRIES) expect(fs.existsSync(path.join(ROOT, e))).toBe(true);
  });

  it('follows re-export and dynamic-import edges (the detector)', () => {
    // Driven directly. `export … from` is the edge whose absence made madge
    // report seven live illustration components as dead.
    const tmp = path.join(__dirname, '__reach_probe.ts');
    fs.writeFileSync(tmp, 'export const x = 1;\n');
    try {
      expect(edgesOf('src/a.ts', `export { x } from './${path.basename(tmp, '.ts')}';`)).toEqual(
        [],
      );
      const here = `src/tests/${path.basename(tmp)}`;
      expect(edgesOf('src/tests/b.ts', `export { x } from './__reach_probe';`)).toContain(here);
      expect(edgesOf('src/tests/b.ts', `import './__reach_probe';`)).toContain(here);
      expect(edgesOf('src/tests/b.ts', `const p = import('./__reach_probe');`)).toContain(here);
    } finally {
      fs.unlinkSync(tmp);
    }
  });

  it('nothing is unreachable except the recorded exemptions', () => {
    expect(dead).toEqual(Object.keys(KNOWN_UNREACHABLE).sort());
  });

  it('every exemption still exists and is still unreachable', () => {
    for (const f of Object.keys(KNOWN_UNREACHABLE)) {
      expect(fs.existsSync(path.join(ROOT, f)), `${f} was deleted — drop its exemption`).toBe(true);
      expect(dead, `${f} is reachable now — drop its exemption`).toContain(f);
    }
    expect(Object.keys(KNOWN_UNREACHABLE)).toHaveLength(2);
  });
});

describe('every module the APP cannot reach is named, with its reason', () => {
  const files = srcFiles();
  const deps = dependencyGraph(files);
  const app = reachableFrom(deps, ENTRIES);
  const all = reachableFrom(deps, [...ENTRIES, ...files.filter(isTest)]);
  const testOnly = files.filter((f) => isSubject(f) && !app.has(f) && all.has(f)).sort();

  it('the app-only walk is real', () => {
    // Without this, a resolver that reaches nothing calls the whole tree test-only
    // and the list below would be asked to cover 1,600 files.
    expect(app.size).toBeGreaterThan(files.length / 3);
    expect(app.size).toBeLessThan(all.size);
    // And it must reach what is unarguably live, or the walk is measuring nothing.
    for (const live of [
      'src/components/home/HomeTab.tsx',
      'src/components/AppRouter.tsx',
      'src/lib/masteryLedger.ts',
    ])
      expect(app.has(live), `${live} must be app-reachable`).toBe(true);
  });

  it('nothing is test-only-reachable except the recorded modules', () => {
    expect(
      testOnly,
      'these modules are reachable ONLY from the tests — the app cannot render or call them. ' +
        'The guard above excludes them by design, which is how the 13-module hero cluster sat ' +
        'unrendered for five months while two audit sweeps edited it. Name it with a reason, ' +
        'or delete it.',
    ).toEqual(Object.keys(TEST_ONLY_REACHABLE).sort());
  });

  it('every recorded module still exists and is still test-only', () => {
    for (const [f, reason] of Object.entries(TEST_ONLY_REACHABLE)) {
      expect(fs.existsSync(path.join(ROOT, f)), `${f} was deleted — drop its entry`).toBe(true);
      expect(reason.length, `${f} needs a stated reason`).toBeGreaterThan(40);
      expect(testOnly, `${f} is app-reachable now — drop its entry`).toContain(f);
    }
  });
});
