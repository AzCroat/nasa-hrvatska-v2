/**
 * dictationLevel.test.tsx — Dictation serves the learner's level (2026-09-07).
 *
 * Every DICTATION_DATA item has carried a `level` since the bank was written
 * and nothing read it: the round was `shLocal(DICTATION_DATA).slice(0, 10)`
 * over all 80 items. This is `_levelledListen`'s defect (2026-09-04) in the
 * second audio-first screen — that work fixed the two LISTEN launch sites
 * specifically, and dictation builds its round inside the component, so it was
 * outside the change.
 *
 * The wiring half drives the REAL screen, because a helper that filters
 * correctly and a screen that calls it are different facts (the component-test
 * / wiring-test split). `rnd` is pinned to 0.99, which makes `shLocal` the
 * identity, so the round is the first ten of whatever list is passed in — the
 * A1 and A2 cases then fail deterministically if the filter is removed.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import type { Stats, StatsContextValue } from '../types';
import DictationScreen, {
  DICTATION_DATA,
  _levelledDictation,
} from '../components/practice/DictationScreen';

vi.mock('../data', () => ({ H: () => null, Bar: () => null }));
vi.mock('../lib/audio', () => ({
  speak: vi.fn(async () => 'azure'),
  speakSlow: vi.fn(async () => 'azure'),
  getLastTtsFailure: () => null,
  describeTtsFailure: () => 'desc',
}));
// 0.99 → Math.floor(0.99 * (i + 1)) === i, so shLocal is the identity.
vi.mock('../lib/random.js', () => ({ rnd: () => 0.99 }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: vi.fn() }));
vi.mock('../lib/adaptive.js', () => ({ recordTopicResult: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));

const ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
const rank = (l: string) => ORDER.indexOf(l as (typeof ORDER)[number]);

function makeCtx(xp = 0) {
  const stats = {
    xp,
    lc: 0,
    gc: 0,
    sp: 0,
    de: 0,
    rc: 0,
    pf: 0,
    mv: 0,
    hi: 0,
    str: 0,
    authLoading: 0,
    diff: 'beginner',
    ct: [],
    vs: [],
    rs: [],
    badges: [],
  } as unknown as Stats;
  return {
    stats,
    setStats: vi.fn(),
    writeDelta: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
  } as unknown as StatsContextValue;
}

/**
 * The levels of every sentence the screen actually served, read off the badge
 * as the learner walks the round. Reading only the FIRST badge would be
 * decorative: the raw bank opens with four A1 items, so an A1 round's first
 * sentence is A1 whether or not anything filters.
 */
async function servedLevels(placement?: string, xp = 0): Promise<string[]> {
  if (placement) localStorage.setItem('nh_level', placement);
  render(
    <StatsProvider value={makeCtx(xp)}>
      <DictationScreen goBack={vi.fn()} award={vi.fn()} />
    </StatsProvider>,
  );
  const levels: string[] = [];
  for (let i = 0; i < 20; i++) {
    if (screen.queryByText(/Done/)) break;
    levels.push(screen.getByText(/^(A1|A2|B1|B2|C1|C2)$/).textContent!);
    fireEvent.click(screen.getByTestId('dictation-play'));
    await waitFor(() =>
      expect(screen.getByTestId('dictation-play').getAttribute('data-audio-status')).toBe('played'),
    );
    fireEvent.change(screen.getByPlaceholderText(/Type what you heard/), {
      target: { value: 'x' },
    });
    fireEvent.click(screen.getByText(/Check/));
    const next = screen.queryByText(/Next/);
    if (!next) break;
    fireEvent.click(next);
  }
  return levels;
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the bank is levelled — the precondition, and the size of the defect', () => {
  it('every item carries a valid level', () => {
    expect(DICTATION_DATA).toHaveLength(80);
    for (const q of DICTATION_DATA) expect(ORDER).toContain(q.level as never);
  });

  it('69 of the 80 sentences sit above A1 — what an unfiltered round drew from', () => {
    // 8.6 of a 10-item round, on average, before this change.
    expect(DICTATION_DATA.filter((q) => rank(q.level) > 0)).toHaveLength(69);
  });
});

describe('_levelledDictation', () => {
  it('A1 keeps only A1; C2 keeps the whole bank', () => {
    expect(_levelledDictation(DICTATION_DATA, 'A1').every((q) => q.level === 'A1')).toBe(true);
    expect(_levelledDictation(DICTATION_DATA, 'C2')).toHaveLength(DICTATION_DATA.length);
  });

  it('every level gets a full ten-sentence round, so the fallback is not load-bearing', () => {
    for (const L of ORDER)
      expect(_levelledDictation(DICTATION_DATA, L).length).toBeGreaterThanOrEqual(10);
  });

  it('B1 keeps A1–B1 and drops B2+', () => {
    const lv = _levelledDictation(DICTATION_DATA, 'B1').map((q) => q.level);
    expect(lv).toContain('B1');
    expect(lv).toContain('A1');
    for (const bad of ['B2', 'C1', 'C2']) expect(lv).not.toContain(bad);
  });

  it('falls back to the whole bank when the levelled slice is too thin for a round', () => {
    const thin = [
      { text: '', en: '', level: 'A1' },
      { text: '', en: '', level: 'A1' },
      { text: '', en: '', level: 'C2' },
      { text: '', en: '', level: 'C2' },
      { text: '', en: '', level: 'C2' },
    ];
    expect(_levelledDictation(thin, 'A1')).toHaveLength(5);
  });

  it('an unlevelled item is never dropped (absence degrades, never excludes)', () => {
    const bank = [
      { text: '', en: '', level: '' },
      { text: '', en: '', level: '' },
      { text: '', en: '', level: '' },
      { text: '', en: '', level: '' },
      { text: '', en: '', level: 'C2' },
    ];
    expect(_levelledDictation(bank, 'A1')).toHaveLength(4);
  });
});

describe('the screen applies it (wiring, not just the helper)', () => {
  it('an A1 learner is dictated only A1 sentences', async () => {
    // Unfiltered, the identity shuffle would have served A1x4, A2x4, B1x2.
    await expect(servedLevels()).resolves.toEqual(Array(10).fill('A1'));
  });

  it('at A2 the round reaches A2 and never B1+', async () => {
    const lv = await servedLevels('A2');
    expect(lv).toHaveLength(10);
    expect(lv).toContain('A2');
    for (const bad of ['B1', 'B2', 'C1', 'C2']) expect(lv).not.toContain(bad);
  });

  it('it reads the LIVE stats, not just the persisted profile', async () => {
    // 5,000 XP is B2 earned, with nothing in localStorage — so a call site that
    // dropped the `stats` argument would fall back to the stored profile (A1)
    // and hold this learner at A1 sentences for the whole session.
    const lv = await servedLevels(undefined, 5000);
    expect(lv.some((l) => rank(l) > 0)).toBe(true);
  });

  it('at C2 nothing is withheld', async () => {
    await expect(servedLevels('C2')).resolves.toHaveLength(10);
    expect(_levelledDictation(DICTATION_DATA, 'C2').map((q) => q.level)).toContain('C2');
  });
});

describe('the badge can name every level the bank holds', () => {
  it('C1 and C2 have a colour, not an undefined one', async () => {
    const src = await import('node:fs').then((fs) =>
      fs.readFileSync('src/components/practice/DictationScreen.tsx', 'utf8'),
    );
    const block = src.slice(src.indexOf('const levelColor'), src.indexOf('function normalise'));
    for (const L of ORDER) expect(block).toContain(`${L}:`);
  });
});
