/**
 * screenTabs.test.ts — one definition of "which tab is this screen on", and one
 * of "which screens survive a back-navigation".
 *
 * WHAT THIS REPLACED. App.tsx carried FOUR declarations for two facts:
 * `_RESTORE_SAFE` and `SAFE_RESTORE` (byte-identical sets, 300 lines apart) and
 * `_TAB_FOR_SCR` and `stm`. Two places that must agree, with nothing enforcing
 * it — and they HAD disagreed: a comment beside the second map records that
 * `grammarmap` was 'practice' in one and 'learn' in the other, so the
 * highlighted tab flipped depending on whether the learner arrived by deep link
 * or by navigation.
 *
 * "DUPLICATE" WAS THE WRONG WORD, and measuring first is what showed it. The two
 * maps were NESTED, not equal — 46 entries against 203, the smaller a strict
 * subset, with ZERO disagreements at the time of the merge. So the merge could
 * not lose a fact, and the behaviour of every reachable lookup is unchanged.
 *
 * THE 36 DEAD ENTRIES, which is the finding worth keeping. `_TAB_FOR_SCR[s]` was
 * read ONLY inside `if (_RESTORE_SAFE.has(s))`, so only the 11 restore-safe
 * screens could ever reach it: thirty-six of its forty-six rows were
 * unreachable. Written, never read, and reading exactly like coverage — the
 * defect class this codebase keeps rediscovering.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { SCREEN_TAB, RESTORE_SAFE_SCREENS } from '../lib/screenTabs';

/** The app's real tabs, derived from the nav rather than restated here. */
const TAB_IDS: Set<string> = (() => {
  const src = readFileSync('src/components/shared/Sidebar.tsx', 'utf8');
  const block = src.slice(src.indexOf('const TABS'), src.indexOf('];', src.indexOf('const TABS')));
  return new Set([...block.matchAll(/id: '([a-z_]+)'/g)].map((m) => m[1]!));
})();

/**
 * Restore-safe screens that deliberately have no tab, with the reason.
 * Checked in BOTH staleness directions: an entry that gained a tab, or stopped
 * being restore-safe, is an exemption guarding nothing.
 */
const NO_TAB_BY_DESIGN: Record<string, string> = {
  dashboard:
    'The per-tab home of EVERY tab, so it cannot name one. The restore path already falls back to `dashboard`, so the absence costs nothing; adding it would mean picking a tab arbitrarily.',
};

describe('the two facts have one definition each', () => {
  it('derived the real tab list at all', () => {
    // Without this the tab assertion below passes vacuously if TABS is renamed.
    expect(TAB_IDS.size).toBeGreaterThanOrEqual(5);
    for (const t of ['home', 'learn', 'practice', 'croatia', 'profile']) {
      expect(TAB_IDS.has(t), `${t} should be a real tab`).toBe(true);
    }
  });

  it('every screen is filed under a tab the app actually has', () => {
    // A typo'd tab id would call `_setTab` with a tab nothing renders, leaving
    // the app in a state with no visible content and no highlighted nav item.
    const bad = Object.entries(SCREEN_TAB).filter(([, tab]) => !TAB_IDS.has(tab));
    expect(bad, `screens filed under a non-existent tab: ${JSON.stringify(bad)}`).toEqual([]);
    expect(Object.keys(SCREEN_TAB).length).toBeGreaterThanOrEqual(200);
  });

  it('every restore-safe screen has a tab, or a stated reason not to', () => {
    // This is the invariant the old shape could break silently: a restore-safe
    // screen with no tab entry is never persisted, so returning to its tab
    // quietly drops the learner somewhere else.
    const missing = [...RESTORE_SAFE_SCREENS].filter(
      (s) => !(s in SCREEN_TAB) && !(s in NO_TAB_BY_DESIGN),
    );
    expect(missing, `restore-safe screens with no tab: ${missing.join(', ')}`).toEqual([]);
    expect(RESTORE_SAFE_SCREENS.size).toBeGreaterThanOrEqual(10);
  });

  it('keeps the no-tab exemptions honest in both directions', () => {
    for (const [screen, reason] of Object.entries(NO_TAB_BY_DESIGN)) {
      expect(reason.length, `${screen} needs a stated reason`).toBeGreaterThan(30);
      // (a) still restore-safe — otherwise the exemption is about nothing
      expect(RESTORE_SAFE_SCREENS.has(screen), `${screen} is no longer restore-safe`).toBe(true);
      // (b) still has no tab — otherwise it is suppressing a check that now passes
      expect(screen in SCREEN_TAB, `${screen} HAS a tab now; drop the exemption`).toBe(false);
    }
    expect(Object.keys(NO_TAB_BY_DESIGN)).toHaveLength(1);
  });
});

describe('the duplication cannot come back', () => {
  const app = readFileSync('src/App.tsx', 'utf8');

  it('App.tsx declares neither fact inline any more', () => {
    // The four declarations are gone; App.tsx reads the single definitions. A
    // reintroduced local copy is exactly how the two maps drifted before.
    expect(app).not.toMatch(/const\s+_?(TAB_FOR_SCR|RESTORE_SAFE|SAFE_RESTORE)\b/);
    expect(app).not.toMatch(/const\s+stm\s*:/);
    expect(app).toContain("from './lib/screenTabs'");
  });

  it('both consumers read the same definitions', () => {
    // setScr persists a restore-safe screen; the deep-link path picks the tab.
    // Before, those were four different objects.
    expect(app).toContain('RESTORE_SAFE_SCREENS.has(s)');
    expect(app).toContain('SCREEN_TAB[s]');
    expect(app).toContain('RESTORE_SAFE_SCREENS.has(last)');
    expect(app).toContain('SCREEN_TAB[scr]');
  });
});

describe('behaviour the merge had to preserve', () => {
  it('files the screens the restore path depends on exactly as before', () => {
    // The ten reachable lookups of the deleted map, pinned at their old values.
    // `grammarmap` is the one the comment recorded as having drifted.
    //
    // Read out of the data, not written from expectation: the first draft of
    // this list guessed `favorites` and `journal` as 'practice' and the pin
    // caught it. A behaviour pin written from memory pins the memory.
    for (const [screen, tab] of [
      ['learnpath', 'learn'],
      ['grammar_track', 'learn'],
      ['grammar-ref', 'learn'],
      ['learning_center', 'learn'],
      ['grammarmap', 'learn'],
      ['favorites', 'profile'],
      ['journal', 'profile'],
      ['analytics', 'profile'],
      ['badges', 'profile'],
      ['certificate', 'profile'],
    ] as const) {
      expect(SCREEN_TAB[screen], screen).toBe(tab);
      expect(RESTORE_SAFE_SCREENS.has(screen), screen).toBe(true);
    }
  });
});
