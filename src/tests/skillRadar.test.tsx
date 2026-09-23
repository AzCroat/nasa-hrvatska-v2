/**
 * skillRadar — the Skill Profile card plots MEASURED skills, and its
 * "Focus here →" points at one the ledger has actually measured (sweep 43,
 * 2026-09-23).
 *
 * THE DEFECT. `SkillRadar` took a `st` prop typed
 * `{ wl?, gc?, listen?, speak?, rc? }` and plotted five axes from it. Three of
 * those field names — `wl`, `listen`, `speak` — DO NOT EXIST on `Stats`: not in
 * the interface, not in `statsReducer`, not in the remote merge, not in
 * `sanitizeStats`, and written by nothing anywhere in `src`. So Vocab,
 * Listening and Speaking were `undefined || 0` for every learner forever, and
 * the card printed a literal "0%" beside each of them.
 *
 * The recommendation is the part that matters. `weakIdx` is the lowest score,
 * and the row it lands on renders **"Focus here →"**. With three axes tied at
 * zero the reduce keeps the FIRST — index 0, **Vocab** — so every learner who
 * has ever opened the Me tab has been told their weakest skill is vocabulary,
 * on the evidence of a field that does not exist. NEVER-DO 13, on a card whose
 * whole job is to say where the learner stands.
 *
 * THE TEST RENDERS AGAINST THE REAL LEDGER, never a source pin on the field
 * names. The failure mode here is a name agreeing with nothing, and a pin
 * asserting "does not read st.wl" passes just as happily the day the data is
 * renamed underneath it (the `RegionScreen` `v.tip` lesson).
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen, act } from '@testing-library/react';
import React from 'react';
import SkillRadar from '../components/profile/SkillRadar';
import { MIN_SAMPLES } from '../lib/masteryLedger';
import { getCurrentContentLevel } from '../lib/cefrCertification';

/** Seed the REAL ledger store at the REAL level the radar reads. */
function seed(cells: Record<string, { s: number; n: number }>) {
  const level = getCurrentContentLevel();
  const out: Record<string, { s: number; n: number; at: number }> = {};
  for (const [skill, c] of Object.entries(cells)) {
    out[`${level}:${skill}`] = { ...c, at: Date.now() };
  }
  localStorage.setItem('nh_mastery_ledger', JSON.stringify({ v: 1, cells: out }));
}

/** The card animates in after 300ms; the bars are 0% until it does. */
function renderSettled() {
  vi.useFakeTimers();
  const r = render(<SkillRadar />);
  act(() => {
    vi.advanceTimersByTime(400);
  });
  vi.useRealTimers();
  return r;
}

const SKILLS = ['vocab', 'grammar', 'listening', 'speaking', 'reading'] as const;
const text = (key: string) => screen.getByTestId(`radar-score-${key}`).textContent;

describe('SkillRadar reads the mastery ledger', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useRealTimers();
  });

  it('an empty ledger says "not measured" — never 0% — on every axis', () => {
    renderSettled();
    for (const s of SKILLS) expect(text(s)).toBe('not measured');
    // A percentage here would be a claim; there is nothing to claim.
    expect(screen.queryByText(/%/)).toBeNull();
  });

  it('recommends NOTHING when nothing has been measured', () => {
    renderSettled();
    expect(screen.queryByTestId('radar-focus')).toBeNull();
  });

  it('prints the ledger score as the percentage', () => {
    seed({ grammar: { s: 0.72, n: MIN_SAMPLES } });
    renderSettled();
    expect(text('grammar')).toBe('72%');
  });

  it('a cell below MIN_SAMPLES is untested, so it is not measured', () => {
    seed({ reading: { s: 0.9, n: MIN_SAMPLES - 1 } });
    renderSettled();
    expect(text('reading')).toBe('not measured');
  });

  it('"Focus here" names the weakest MEASURED skill, not axis 0', () => {
    // The shape of the bug: vocab is the strongest thing the learner has, and
    // the old card told them to focus on it anyway.
    seed({
      vocab: { s: 0.95, n: MIN_SAMPLES },
      listening: { s: 0.4, n: MIN_SAMPLES },
    });
    renderSettled();
    const focus = screen.getByTestId('radar-focus');
    const row = focus.parentElement!;
    expect(row.textContent).toContain('Listening');
    expect(row.textContent).not.toContain('Vocab');
  });

  it('an unmeasured skill can never be the focus, however low the measured ones are', () => {
    // Speaking has no cell at all. A "0" reading of it would make it the
    // weakest every time — which is exactly how the old card behaved.
    seed({ grammar: { s: 0.05, n: MIN_SAMPLES } });
    renderSettled();
    const row = screen.getByTestId('radar-focus').parentElement!;
    expect(row.textContent).toContain('Grammar');
    expect(text('speaking')).toBe('not measured');
  });

  it('exactly one focus row is ever rendered', () => {
    seed({
      vocab: { s: 0.5, n: MIN_SAMPLES },
      grammar: { s: 0.5, n: MIN_SAMPLES },
      reading: { s: 0.5, n: MIN_SAMPLES },
    });
    renderSettled();
    expect(screen.getAllByTestId('radar-focus')).toHaveLength(1);
  });
});

describe('the card is wired with no stats prop', () => {
  it('StatsTab mounts it without passing one', () => {
    const src = readFileSync(resolve(__dirname, '../components/profile/StatsTab.tsx'), 'utf8');
    // A `st={st}` here would be handing the card fields it no longer reads,
    // which is how the phantom-field version looked correct for a year.
    expect(src).toMatch(/<SkillRadar\s*\/>/);
    expect(src).not.toMatch(/<SkillRadar\s+st=/);
  });
});
