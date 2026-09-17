/**
 * unpooledScreens.test.ts — the list is data; what can still be derived, is.
 *
 * `UNPOOLED_SCREENS` exists so the Learning Center carries screens that are
 * ROUTED and reachable but sit in no pool, whose only door was
 * `BrowseContentModal`. A hand-maintained list of those is what that modal
 * already was, and it decayed to 26 of 180 lessons because nothing checked it.
 *
 * WHAT IS DERIVED HERE, AND WHAT IS NOT — stated plainly, because the honest
 * answer changed when the modal was deleted:
 *
 *   DERIVED, ongoing:
 *     * every entry names a screen the REAL router still routes — a renamed or
 *       removed screen fails rather than offering a row that opens nothing;
 *     * no entry has a pool row or another `setScr` door — a stale entry fails
 *       the way the `idioms` exemption should have (it went stale twice);
 *     * the Center's assembler actually reads the catalogue.
 *
 *   NOT derived, and this is a real limit: "have we MISSED a screen that now
 *   has no door". That direction was answered by measurement at migration
 *   time — the modal opened 33 screens, 24 were pooled, 2 had another door
 *   (`grammar` via useScreenLauncher, `heritage_mode` via the Me tab) and the
 *   7 below had none — but the modal was the thing being deleted, so it cannot
 *   go on being the source. Deriving it in general means modelling every
 *   launcher, not just `setScr`, which is a wider reachability guard than this
 *   file. Said out loud rather than implied, because a test that looks total
 *   and is not is the exact failure this repo keeps paying for.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { UNPOOLED_SCREENS } from '../lib/unpooledScreens';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { PRODUCTION_POOL } from '../hooks/useDailySession';

const ROUTER = 'src/components/AppRouter.tsx';
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/[^\n]*/g, ' ');

function pooledScreens(): Set<string> {
  const rows = [
    ...(CEFR_EXERCISE_POOL as unknown as { screen?: string }[]),
    ...(CROATIA_POOL as unknown as { screen?: string }[]),
    ...(PRODUCTION_POOL as unknown as { screen?: string }[]),
  ];
  return new Set(rows.map((r) => r.screen).filter(Boolean) as string[]);
}

/** Every screen the real router can render. */
function routedScreens(): Set<string> {
  const src = strip(readFileSync(ROUTER, 'utf8'));
  return new Set([...src.matchAll(/currentScreen === '([\w-]+)'/g)].map((m) => m[1]!));
}

/** Every `setScr('x')` in src/, by the file it sits in. */
function navSites(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const walk = (dir: string) => {
    for (const f of readdirSync(dir, { withFileTypes: true })) {
      const full = `${dir}/${f.name}`;
      if (f.isDirectory()) {
        if (f.name !== 'tests') walk(full);
        continue;
      }
      if (!/\.(ts|tsx)$/.test(f.name)) continue;
      for (const m of strip(readFileSync(full, 'utf8')).matchAll(/setScr\('([\w-]+)'\)/g)) {
        const list = out.get(m[1]!) ?? [];
        list.push(full);
        out.set(m[1]!, list);
      }
    }
  };
  walk('src');
  return out;
}

describe('the unpooled-screen catalogue stays true', () => {
  const pooled = pooledScreens();
  const routed = routedScreens();
  const nav = navSites();

  it('derives a real router, so the checks below are not vacuous', () => {
    // `expect([]).toEqual([])` passes cheerfully.
    expect(routed.size).toBeGreaterThan(100);
    expect(pooled.size).toBeGreaterThan(100);
    expect(UNPOOLED_SCREENS.length).toBeGreaterThan(0);
  });

  it('every entry is a screen the router still routes', () => {
    const unrouted = UNPOOLED_SCREENS.map((u) => u.screen).filter((s) => !routed.has(s));
    expect(unrouted).toEqual([]);
  });

  it('carries nothing that has a pool row or another door', () => {
    const stale = UNPOOLED_SCREENS.filter((u) => {
      if (pooled.has(u.screen)) return true;
      const elsewhere = (nav.get(u.screen) ?? []).filter((f) => !f.includes('unpooledScreens'));
      return elsewhere.length > 0;
    }).map((u) => u.screen);
    expect(stale).toEqual([]);
  });

  it('cannot silently shrink — a dropped entry is a screen losing its door', () => {
    // MUTATION-FOUND. Rewriting this file to derive from the ROUTER instead of
    // the deleted modal lost the direction that matters most: removing an
    // entry passed cleanly, and that entry is a screen whose only door is this
    // catalogue. A floor is a weaker ratchet than the modal-based derivation
    // was, and it is the honest one available — "which screens have no door"
    // cannot be computed in general without modelling every launcher, not just
    // `setScr` (measured: 31 routed screens have no literal `setScr` site, and
    // 24 of them are reached by launchers or tab navigation, so that set is
    // not the answer either).
    //
    // The floor is the migration measurement: seven screens had no other door
    // when BrowseContentModal was retired. It may GROW; it must not shrink
    // without someone deciding that a screen should become unreachable.
    expect(UNPOOLED_SCREENS.length).toBeGreaterThanOrEqual(7);
  });

  it('gives every entry a label a learner can act on', () => {
    for (const u of UNPOOLED_SCREENS) {
      expect(u.label.trim().length).toBeGreaterThan(3);
      expect(u.screen.trim().length).toBeGreaterThan(0);
    }
  });

  it('is reachable from the Learning Center, not just declared', () => {
    // A catalogue the index does not read is the dead-branch shape this repo
    // keeps paying for. Checked at the assembler, by source.
    const asm = readFileSync('src/hooks/useLearningIndex.ts', 'utf8');
    expect(strip(asm)).toMatch(/\.\.\.UNPOOLED_SCREENS\.map\(/);
  });

  it('the Learn tab keeps its own door to the full path', () => {
    // CI-FOUND, and the sharpest illustration of the limit stated in the file
    // header. Retiring LearnPathWidget deleted the app's ONLY
    // `setScr('learnpath')` inside the Learn TAB — the screen's other doors are
    // a Home quest tile, a flashcard result screen, HeritageMode and
    // Me → Profile, so no reachability check fired. `screenTabs.ts` says
    // `learnpath: 'learn'`: the tab that OWNS the screen had stopped offering
    // it, and six E2E specs found that out before any unit test did.
    //
    // Pinned to LearnTab by name rather than to `src/components/learn/`,
    // because HeritageModeScreen lives in that directory and already carries a
    // `setScr('learnpath')` — a directory-wide check would have passed
    // throughout the regression it is written to catch.
    const tabs = strip(readFileSync('src/lib/screenTabs.ts', 'utf8'));
    expect(tabs).toMatch(/learnpath:\s*'learn'/);
    const doors = (nav.get('learnpath') ?? []).filter((f) => f.endsWith('LearnTab.tsx'));
    expect(doors, 'LearnTab offers no way to open the full path').not.toEqual([]);
  });

  it('the retired modal is really gone, so nothing re-adds a second door', () => {
    // If it came back, this catalogue's entries would have two doors and the
    // staleness check above would start failing for the wrong reason.
    let exists = true;
    try {
      readFileSync('src/components/learn/BrowseContentModal.tsx', 'utf8');
    } catch {
      exists = false;
    }
    expect(exists).toBe(false);
  });
});
