/**
 * historyGraded.test.tsx — graded Croatian on the Homeland War timeline
 * (content expansion item 6, 2026-09-05).
 *
 * The culture data's Croatian layer (`introHr` / `textHr`) was written at one
 * register and served identically to an A1 beginner and a C2 reader. HISTORY
 * now carries the same event at every level in sibling fields (textHrA1 …
 * textHrC2; the bare field stays the B1 baseline), the screen picks by the
 * learner's level through lib/gradedHr, and the pool entry is `adaptive` so the
 * culture slot counts it as own-tier for everyone.
 *
 * Three things are pinned here, and each failed on its own during the build:
 *  - the DATA: every level present for the intro and every timeline entry,
 *    genuinely different texts, lengths that rise with the level;
 *  - the PICKER: serves the learner's level, never one above it, and degrades to
 *    the bare field on a payload older than the grading — saying so honestly;
 *  - the SCREEN: renders the picked text (a component test with the REAL data,
 *    because a picker nobody calls would pass the two pins above).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';
import { HISTORY } from '../data/cultural/history.js';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { pickGradedHr, gradedField, GRADED_BASE_LEVEL } from '../lib/gradedHr';
import { CEFR_ORDER } from '../lib/cefr';

type Rec = Record<string, unknown>;
const H = HISTORY as unknown as Rec & { timeline: Rec[] };
const words = (s: unknown) =>
  String(s ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
const LEVELS = [...CEFR_ORDER];

describe('HISTORY — graded Croatian data', () => {
  const records: Array<[string, Rec, string]> = [
    ['intro', H, 'introHr'],
    ...H.timeline.map((e, i): [string, Rec, string] => [`timeline[${i}] ${e.year}`, e, 'textHr']),
  ];

  it.each(records)(
    '%s carries Croatian at all six levels, each a different text',
    (_n, rec, base) => {
      const texts = LEVELS.map((l) => rec[gradedField(base, l)]);
      for (const [i, t] of texts.entries()) {
        expect(typeof t === 'string' && t.trim().length > 0, `${LEVELS[i]} missing`).toBe(true);
      }
      expect(new Set(texts).size, 'levels must not share a text').toBe(LEVELS.length);
    },
  );

  it.each(records)(
    '%s — register rises with level (A1 short, B2+ substantial)',
    (_n, rec, base) => {
      const w = Object.fromEntries(LEVELS.map((l) => [l, words(rec[gradedField(base, l)])]));
      expect(w.A1, 'A1 stays short').toBeLessThanOrEqual(35);
      expect(w.A1).toBeLessThan(w.A2!);
      expect(w.A2).toBeLessThan(w.B2!);
      for (const l of ['B2', 'C1', 'C2'])
        expect(w[l], `${l} is a full paragraph`).toBeGreaterThanOrEqual(80);
    },
  );

  it('the graded corpus is real Croatian (diacritics present, no encoding bleed)', () => {
    const all = records
      .flatMap(([, rec, base]) => LEVELS.map((l) => String(rec[gradedField(base, l)] ?? '')))
      .join(' ');
    expect(/[čćđšž]/.test(all)).toBe(true);
    expect(/Ä|Å¡|Å¾|Ä‡|â€|[Ѐ-ӿ]/.test(all)).toBe(false);
  });

  it('the bare field is the B1 baseline (gradedField maps B1 to the base name)', () => {
    expect(GRADED_BASE_LEVEL).toBe('B1');
    expect(gradedField('textHr', 'B1')).toBe('textHr');
    expect(gradedField('textHr', 'C1')).toBe('textHrC1');
  });
});

describe('pickGradedHr', () => {
  const entry = H.timeline[0]!;

  it.each(LEVELS)('serves the %s text to a %s learner, and says it is at level', (l) => {
    const pick = pickGradedHr(entry, 'textHr', l)!;
    expect(pick.text).toBe(entry[gradedField('textHr', l)]);
    expect(pick.level).toBe(l);
    expect(pick.atLevel).toBe(true);
  });

  it('never serves a level ABOVE the learner: with the C1/C2 texts gone a C2 learner gets B2', () => {
    const stale = { ...entry };
    delete stale.textHrC1;
    delete stale.textHrC2;
    const pick = pickGradedHr(stale, 'textHr', 'C2')!;
    expect(pick.level).toBe('B2');
    expect(pick.atLevel).toBe(false);
  });

  it('…and a B2 learner whose B2 text is missing gets B1, not the C1 that exists above', () => {
    // The C2 case above cannot catch a picker that climbs, because nothing sits
    // above C2. Mutation-found: a ladder of [own, above…, below…] passed it.
    const gap = { ...entry };
    delete gap.textHrB2;
    const pick = pickGradedHr(gap, 'textHr', 'B2')!;
    expect(pick.level).toBe('B1');
    expect(pick.text).toBe(entry.textHr);
    expect(pick.atLevel).toBe(false);
  });

  it('degrades to the bare field on a payload older than the grading — for every level', () => {
    const old = { textHr: entry.textHr, text: entry.text };
    for (const l of LEVELS) {
      const pick = pickGradedHr(old, 'textHr', l)!;
      expect(pick.text).toBe(entry.textHr);
      expect(pick.level).toBe('B1');
      expect(pick.atLevel).toBe(l === 'B1');
    }
  });

  it('returns null for the EN-only pre-bilingual shape, and for an absent record', () => {
    expect(pickGradedHr({ text: 'English only' }, 'textHr', 'B1')).toBeNull();
    expect(pickGradedHr(null, 'textHr', 'B1')).toBeNull();
  });

  it('an unknown level reads the baseline rather than guessing upward', () => {
    const pick = pickGradedHr(entry, 'textHr', 'Z9')!;
    expect(pick.level).toBe('B1');
    expect(pick.atLevel).toBe(false);
  });
});

describe('the culture pool', () => {
  it('marks history adaptive — the screen levels itself, so it is own-tier at every level', () => {
    expect(CROATIA_POOL.find((c) => c.id === 'history')!.adaptive).toBe(true);
  });
});

// ── The screen ───────────────────────────────────────────────────────────────
let mockLevel = 'B1';
vi.mock('../lib/cefr', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, getUserCefr: () => mockLevel };
});
vi.mock('../lib/cefrCertification', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, getContentUnlockLevel: (l: string) => l };
});
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0 } }),
}));
let mockHistory: unknown = HISTORY;
vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: { HISTORY: mockHistory }, loading: false, error: null }),
}));
import CroatiaHistoryScreen from '../components/croatia/CroatiaHistoryScreen';

describe('CroatiaHistoryScreen', () => {
  beforeEach(() => {
    localStorage.clear();
    mockHistory = HISTORY;
  });

  it('reads the learner CEFR through the SAME expression HomeTab hands the session builder', () => {
    // The slot counts `history` as own-tier for `userCefr`; the screen must
    // level with that same value or "at your level" is a claim about a
    // different number. Pinned at source because the two live in different files.
    const home = readFileSync('src/components/home/HomeTab.tsx', 'utf8');
    const scr = readFileSync('src/components/croatia/CroatiaHistoryScreen.tsx', 'utf8');
    const expr = /getContentUnlockLevel\(\s*getUserCefr\(/;
    expect(home).toMatch(expr);
    expect(scr).toMatch(expr);
  });

  it.each(['A1', 'B2', 'C2'])('at %s renders that level of the intro and of every entry', (l) => {
    mockLevel = l;
    render(<CroatiaHistoryScreen goBack={vi.fn()} />);
    expect(screen.getByText(String(H[gradedField('introHr', l)]))).toBeInTheDocument();
    for (const e of H.timeline) {
      expect(screen.getByText(String(e[gradedField('textHr', l)]))).toBeInTheDocument();
      // and not the baseline the old screen showed everyone
      if (l !== 'B1') expect(screen.queryByText(String(e.textHr))).toBeNull();
    }
    expect(screen.getByTestId('history-reading-level').textContent).toBe(
      `Croatian at your level · ${l}`,
    );
  });

  it('on a payload without graded fields it serves the baseline and does NOT claim the level', () => {
    mockLevel = 'C1';
    const strip = (rec: Rec) =>
      Object.fromEntries(Object.entries(rec).filter(([k]) => !/Hr[ABC][12]$/.test(k)));
    mockHistory = { ...strip(H), timeline: H.timeline.map(strip) };
    render(<CroatiaHistoryScreen goBack={vi.fn()} />);
    expect(screen.getByText(String(H.introHr))).toBeInTheDocument();
    expect(screen.getByText(String(H.timeline[0]!.textHr))).toBeInTheDocument();
    expect(screen.getByTestId('history-reading-level').textContent).toBe('Croatian · B1');
  });
});
