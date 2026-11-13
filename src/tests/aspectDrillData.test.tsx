/**
 * THE ASPECT DRILL'S KEYS ARE PER SENTENCE (B2 book comparison, 2026-11-13).
 *
 * The old ASPECT_PAIRS gave each pair ONE "why" reason while the drill alternated between the
 * pair's imperfective and perfective sentence, so about half the "why this aspect" keys were
 * wrong; the fill-in phase matched on a verb stem, blanked the wrong word and offered two
 * INFINITIVES for a finite slot ("Svaki dan ___ pisma." → "pisati"). Each example now names its
 * own blank, the other-aspect form for the same slot, and its own reason. These tests pin the
 * data contract and drive the real screen with the real data.
 */
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { render, screen, fireEvent } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import type { StatsContextValue } from '../types';
import { ASPECT_PAIRS } from '../../functions/api/content/_data/grammar.js';

const IMPF_WHY = ['habitual', 'ongoing', 'negation', 'simultaneous'];
const PF_WHY = ['completed', 'sequence'];

type Ex = { hr: string; en: string; gap: string; alt: string; why: string };
type Pair = { impf: string; pf: string; cefr: string; ctx: string; impfEx: Ex; pfEx: Ex };
const PAIRS = ASPECT_PAIRS as unknown as Pair[];

const words = (s: string) => s.split(/[^\p{L}]+/u).filter(Boolean);

describe('ASPECT_PAIRS data contract', () => {
  it('every pair carries one example per aspect', () => {
    expect(PAIRS.length).toBeGreaterThanOrEqual(25);
    for (const p of PAIRS) {
      expect(p.impfEx, p.impf).toBeTruthy();
      expect(p.pfEx, p.pf).toBeTruthy();
    }
  });

  it('each blank is a whole word of its own sentence, and the wrong form differs', () => {
    for (const p of PAIRS) {
      for (const e of [p.impfEx, p.pfEx]) {
        expect(words(e.hr), `${e.gap} in ${e.hr}`).toContain(e.gap);
        expect(e.alt).not.toBe(e.gap);
        expect(words(e.hr), `${e.alt} must not already be in ${e.hr}`).not.toContain(e.alt);
      }
    }
  });

  it('the blank is a FINITE form, never the infinitive of the pair', () => {
    for (const p of PAIRS) {
      for (const e of [p.impfEx, p.pfEx]) {
        for (const f of [e.gap, e.alt]) {
          expect([p.impf, p.pf], `${f} is an infinitive`).not.toContain(f.toLowerCase());
        }
      }
    }
  });

  it('an imperfective sentence has an imperfective reason, a perfective one a perfective reason', () => {
    for (const p of PAIRS) {
      expect(IMPF_WHY, `${p.impfEx.hr}`).toContain(p.impfEx.why);
      expect(PF_WHY, `${p.pfEx.hr}`).toContain(p.pfEx.why);
    }
  });

  it('every reason id exists in the screen, in the right group', () => {
    const src = readFileSync('src/components/practice/AspectDrillScreen.tsx', 'utf8');
    for (const id of [...IMPF_WHY, ...PF_WHY]) expect(src).toContain(`id: '${id}'`);
    expect(src).toMatch(/IMPF_RULE_IDS = \['habitual', 'ongoing', 'negation', 'simultaneous'\]/);
    expect(src).toMatch(/PF_RULE_IDS = \['completed', 'sequence'\]/);
  });

  it('the old data errors are gone', () => {
    const all = PAIRS.flatMap((p) => [p.impfEx.hr, p.pfEx.hr, p.ctx]).join(' | ');
    expect(all).not.toMatch(/Svaki večer/);
    expect(all).not.toMatch(/Počeo je kišiti/);
    expect(PAIRS.some((p) => p.impf === 'tražiti')).toBe(false);
  });

  it('the B2 pairs are secondary imperfectives in the past tense (the -ujem present is B2 #7)', () => {
    const b2 = PAIRS.filter((p) => p.cefr === 'B2');
    expect(b2.length).toBeGreaterThanOrEqual(3);
    for (const p of b2) {
      expect(p.impf).toMatch(/(iv|v)ati$/);
      for (const e of [p.impfEx, p.pfEx]) expect(e.hr).not.toMatch(/\p{L}+ujem?\b/u);
    }
  });
});

// ─── The real screen with the real data ─────────────────────────────────────
vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));
vi.mock('../hooks/useGrammar', async () => {
  const g = await import('../../functions/api/content/_data/grammar.js');
  return {
    useGrammar: () => ({
      grammar: { ASPECT_PAIRS: [g.ASPECT_PAIRS[0]] },
      loading: false,
      error: null,
      reload: () => {},
    }),
  };
});

describe('AspectDrillScreen with the real data', () => {
  it('fill-in blanks the named finite form and offers only finite forms', async () => {
    const { default: AspectDrillScreen } = await import('../components/practice/AspectDrillScreen');
    const value = {
      stats: { xp: 0, lc: 0, gc: 0, vs: [], badges: [] },
      setStats: vi.fn(),
      writeDelta: vi.fn(),
      dispatch: vi.fn(),
      award: vi.fn(),
      level: 1,
    } as unknown as StatsContextValue;
    render(
      <StatsProvider value={value}>
        <AspectDrillScreen goBack={() => {}} award={vi.fn()} />
      </StatsProvider>,
    );
    // Phase 0 → answer anything, go on to the fill-in.
    fireEvent.click(screen.getAllByRole('button', { name: /^napisati$/ })[0]!);
    fireEvent.click(screen.getByText(/Next phase/));
    const pair = PAIRS[0]!;
    // idx 0 → (idx + 1) % 2 === 1 → the perfective sentence.
    const ex = pair.pfEx;
    expect(screen.getByText(ex.hr.replace(ex.gap, '___'))).toBeTruthy();
    expect(screen.getByRole('button', { name: ex.gap })).toBeTruthy();
    expect(screen.getByRole('button', { name: ex.alt })).toBeTruthy();
    expect(screen.queryByRole('button', { name: pair.pf })).toBeNull();
  });
});
