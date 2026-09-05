/**
 * cultureDeepDiveScreen.test.tsx — the deep-dive screen's ONE-ESSAY mode
 * (content expansion item 3, 2026-09-05).
 *
 * The culture slot now serves one essay per entry (kultura_<tier>_<key>). A
 * screen that ignored `essayKey` and rendered the whole tier would pass every
 * pool/route pin and still hand the learner eight essays on a "3–5 minute"
 * culture day — so the mode is asserted by rendering, with the REAL data.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CULTURE_DEEP_DIVES } from '../data/cultural/deepdives.js';

vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: { CULTURE_DEEP_DIVES }, loading: false, error: null }),
}));
const setScr = vi.fn();
vi.mock('../context/AppContext', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, useApp: () => ({ setScr }) };
});

import CultureDeepDiveScreen from '../components/croatia/CultureDeepDiveScreen';

const B2 = CULTURE_DEEP_DIVES.B2;

describe('CultureDeepDiveScreen', () => {
  it('with essayKey renders exactly that essay, and a way to the rest of the tier', () => {
    render(<CultureDeepDiveScreen tier="B2" essayKey="fjaka" goBack={vi.fn()} />);
    // Headings render `${emoji} ${title}` — unique, unlike a bare title, which
    // can recur inside its own body text ("Glagoljica, koju su…").
    const heading = (e: { emoji: string; title: string }) => `${e.emoji} ${e.title}`;
    expect(screen.getByText(heading(B2.find((e) => e.key === 'fjaka')!))).toBeInTheDocument();
    for (const e of B2) {
      if (e.key === 'fjaka') continue;
      expect(screen.queryByText(heading(e)), e.key).toBeNull();
    }
    const all = screen.getByRole('button', { name: /All B2 essays/ });
    all.click();
    expect(setScr).toHaveBeenCalledWith('kultura_b2');
  });

  it('without essayKey renders the whole tier catalog (browse mode)', () => {
    render(<CultureDeepDiveScreen tier="C1" goBack={vi.fn()} />);
    for (const e of CULTURE_DEEP_DIVES.C1)
      expect(screen.getByText(`${e.emoji} ${e.title}`)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /All C1 essays/ })).toBeNull();
  });

  it('an unknown key (a payload older than the essay) falls back to the tier, never a blank screen', () => {
    render(<CultureDeepDiveScreen tier="C2" essayKey="does-not-exist" goBack={vi.fn()} />);
    for (const e of CULTURE_DEEP_DIVES.C2)
      expect(screen.getByText(`${e.emoji} ${e.title}`)).toBeInTheDocument();
  });
});
