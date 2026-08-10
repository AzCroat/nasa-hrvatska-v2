/**
 * @vitest-environment node
 *
 * learnPathStages.test.ts — the profile's Learn Path widget mirrors the REAL
 * seven-stage path.
 *
 * Until 2026-08 the profile still showed the old five-stage path plus a locked
 * "Stage 6" teaser: C1 and C2 users were displayed as mid-path forever, and
 * the top two real stages (Virtuoz, Majstor) never appeared anywhere in the
 * profile. These pins are source-derived because StatsTab deliberately does
 * NOT import LEARN_PATH (it lives in the lazily-loaded content chunk and must
 * not be pulled into the profile bundle) — so nothing but this test keeps the
 * two lists from drifting apart again.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const statsTab = readFileSync('src/components/profile/StatsTab.tsx', 'utf8');
const learnPath = readFileSync('functions/api/content/_data/learnPath.js', 'utf8');

const realTitles = [...learnPath.matchAll(/^\s*title: '([^']+)',$/gm)].map((m) => m[1]);

function extractArray(src: string, name: string): string[] {
  const m = src.match(new RegExp(`const ${name}(?::[^=]+)? = \\[([^\\]]+)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
}

describe('profile Learn Path widget vs the real path', () => {
  it('the real path has the seven expected stages (survey anchor)', () => {
    expect(realTitles).toEqual([
      'Survivor',
      'Settler',
      'Communicator',
      'Explorer',
      'Hrvat',
      'Virtuoz',
      'Majstor',
    ]);
  });

  it('STAGE_NAMES_PROFILE mirrors the real stage titles 1:1', () => {
    expect(extractArray(statsTab, 'STAGE_NAMES_PROFILE')).toEqual(realTitles);
  });

  it('STAGE_CEFR covers every stage', () => {
    expect(extractArray(statsTab, 'STAGE_CEFR')).toHaveLength(realTitles.length);
  });

  it('CEFR_TO_STAGE_IDX reaches the top of the path (C2 → last stage, distinct from C1)', () => {
    const m = statsTab.match(/CEFR_TO_STAGE_IDX[^{]*\{([^}]+)\}/);
    expect(m, 'CEFR_TO_STAGE_IDX must exist in StatsTab').toBeTruthy();
    const entries = Object.fromEntries(
      [...m![1].matchAll(/(\w+): (\d+)/g)].map((x) => [x[1], parseInt(x[2], 10)]),
    );
    expect(entries.C2, 'C2 must map to the LAST stage').toBe(realTitles.length - 1);
    expect(entries.C1, 'C1 and C2 must not collapse onto one stage').toBeLessThan(entries.C2);
    // Monotone: a higher level is never shown at an earlier stage.
    const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    for (let i = 1; i < order.length; i++) {
      expect(entries[order[i]]).toBeGreaterThanOrEqual(entries[order[i - 1]]);
    }
  });

  it('the obsolete "Stage 6" locked teaser is gone (all real stages are listed)', () => {
    expect(statsTab).not.toContain('Naš Čovjek');
  });
});
