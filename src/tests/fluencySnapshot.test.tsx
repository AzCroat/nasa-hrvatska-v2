// src/tests/fluencySnapshot.test.tsx
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FluencySnapshot from '../components/profile/FluencySnapshot';
import { weekKey } from '../lib/dateUtils';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function seedReps(
  key: string,
  opts: { total: number; thisWeek: number; sameWeek?: boolean } = { total: 0, thisWeek: 0 },
) {
  localStorage.setItem(
    key,
    JSON.stringify({
      total: opts.total,
      week: opts.sameWeek === false ? 'old-week' : weekKey(),
      weekCount: opts.thisWeek,
    }),
  );
}

describe('FluencySnapshot', () => {
  beforeEach(() => localStorage.clear());

  it('renders the CEFR level and all three skill rows', () => {
    render(<FluencySnapshot cefr="B1" setScr={() => {}} />);
    expect(screen.getByText('B1')).toBeTruthy();
    expect(screen.getByText('Listening')).toBeTruthy();
    expect(screen.getByText('Reading')).toBeTruthy();
    expect(screen.getByText('Speaking & Writing')).toBeTruthy();
  });

  it('shows the empty-state nudge when nothing was practised this week', () => {
    render(<FluencySnapshot cefr="A2" setScr={() => {}} />);
    expect(screen.getByText(/Start a session to build your fluency profile/)).toBeTruthy();
  });

  it('names the lightest skill of the week in the focus nudge', () => {
    // Listening + reading have reps this week; production has none → focus = production.
    seedReps('nh_listening_reps', { total: 10, thisWeek: 4 });
    seedReps('nh_reading_reps', { total: 6, thisWeek: 3 });
    seedReps('nh_production_reps', { total: 2, thisWeek: 0 });
    render(<FluencySnapshot cefr="B1" setScr={() => {}} />);
    const focus = screen.getByText(/lightest skill/);
    expect(focus.textContent).toContain('Speaking & Writing');
  });

  it('the focus CTA navigates to the lightest skill screen', () => {
    seedReps('nh_listening_reps', { total: 1, thisWeek: 0 }); // listening lightest
    seedReps('nh_reading_reps', { total: 6, thisWeek: 3 });
    seedReps('nh_production_reps', { total: 6, thisWeek: 2 });
    const setScr = vi.fn();
    render(<FluencySnapshot cefr="B1" setScr={setScr} />);
    fireEvent.click(screen.getByText(/lightest skill/).closest('button')!);
    expect(setScr).toHaveBeenCalledWith('ai_listening');
  });

  it('uses the synced production total when it exceeds the device-local one', () => {
    seedReps('nh_production_reps', { total: 3, thisWeek: 1 });
    render(<FluencySnapshot cefr="B2" setScr={() => {}} syncedProductionTotal={42} />);
    // The production row should show the synced 42 total, not the device-local 3.
    expect(screen.getByText(/1 this week · 42 total/)).toBeTruthy();
  });
});

describe('the focus nudge goes somewhere that actually renders (sweep 39)', () => {
  // A ROUTED TARGET IS NOT A WORKING ONE. `currentScreen === 'speaking'` renders
  // `SpeakingScreen` only when a launcher has set `sw`, and otherwise renders
  // `ScreenGuard` — "we couldn't restore your speaking practice". This card
  // navigates with a plain `setScr` and has no launcher, so the Speaking &
  // Writing nudge landed on that recovery screen. It is the card's PRIMARY
  // call to action and the one shown by default whenever the week is empty,
  // because production is priority 0 in the tiebreak.
  //
  // `navTargetsRoute` deliberately does not police payload-gated targets —
  // thirty-one navigations in src name one and almost all are legitimate, the
  // launcher having set the payload first. Here the launcher question has a
  // definite answer (there is none), so the rule can be applied exactly.
  const ROUTER = readFileSync(resolve(__dirname, '../components/AppRouter.tsx'), 'utf8');
  const marks = [...ROUTER.matchAll(/currentScreen === '([^']+)'/g)].map(
    (m) => [m[1]!, m.index!] as const,
  );
  /** Branches whose own block falls back to ScreenGuard without launch state. */
  const GATED = new Set(
    marks
      .filter(([, start], i) =>
        ROUTER.slice(start, marks[i + 1]?.[1] ?? ROUTER.length).includes('ScreenGuard'),
      )
      .map(([id]) => id),
  );
  const ROUTED = new Set(marks.map(([id]) => id));

  it('the gated set is real — the control the assertions below depend on', () => {
    expect(GATED.has('speaking')).toBe(true);
    expect(GATED.has('mcgame')).toBe(true);
    expect(GATED.has('speaking_guided')).toBe(false);
  });

  it.each([
    ['Speaking & Writing', 'nh_production_reps'],
    ['Listening', 'nh_listening_reps'],
    ['Reading', 'nh_reading_reps'],
  ])('the %s nudge routes to an ungated screen', (label, lightKey) => {
    localStorage.clear();
    // Give the other two reps so THIS one is the lightest and gets the nudge.
    for (const k of ['nh_production_reps', 'nh_listening_reps', 'nh_reading_reps'])
      if (k !== lightKey) seedReps(k, { total: 5, thisWeek: 5 });
    const setScr = vi.fn();
    render(<FluencySnapshot cefr="B1" setScr={setScr} />);
    fireEvent.click(screen.getByText(/lightest skill/).closest('button')!);
    expect(setScr, `${label} nudge did not navigate`).toHaveBeenCalledTimes(1);
    const target = setScr.mock.calls[0]![0] as string;
    expect(ROUTED.has(target), `${label} → '${target}' has no router branch`).toBe(true);
    expect(
      GATED.has(target),
      `${label} → '${target}' is payload-gated and this card has no launcher, so the ` +
        `learner lands on ScreenGuard instead of practice`,
    ).toBe(false);
  });

  it('the empty-week nudge goes somewhere too — it is the commonest state', () => {
    localStorage.clear();
    const setScr = vi.fn();
    render(<FluencySnapshot cefr="A1" setScr={setScr} />);
    fireEvent.click(screen.getByText(/Start a session/).closest('button')!);
    const target = setScr.mock.calls[0]![0] as string;
    expect(ROUTED.has(target)).toBe(true);
    expect(GATED.has(target)).toBe(false);
  });
});
