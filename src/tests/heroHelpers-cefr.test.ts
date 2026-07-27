import { describe, it, expect } from 'vitest';
import { getCEFR } from '../components/home/heroHelpers';

// Regression: the hero card's getCEFR used to cap at C1 — its total>=18000 fallback
// returned current:'C1', so the most advanced learners saw "C1" on Home while
// StatsTab/DesktopPanel (which reach C2) showed "C2". The fallback now returns a
// terminal C2 with current===next and a full bar.
describe('heroHelpers getCEFR — band boundaries', () => {
  it('classifies low XP as A1 progressing to A2', () => {
    const r = getCEFR(0, 0, 0);
    expect(r.current).toBe('A1');
    expect(r.next).toBe('A2');
  });

  it('classifies the C1 band (8000..17999) as C1 → C2', () => {
    const r = getCEFR(8000, 0, 0);
    expect(r.current).toBe('C1');
    expect(r.next).toBe('C2');
  });

  it('reaches terminal C2 at exactly 18000 (was wrongly C1)', () => {
    const r = getCEFR(18000, 0, 0);
    expect(r.current).toBe('C2');
    expect(r.next).toBe('C2'); // terminal — HeroStats renders "C2 · Max"
    expect(r.pctInLevel).toBe(100);
  });

  it('stays C2 well past the threshold', () => {
    expect(getCEFR(50000, 100, 100).current).toBe('C2');
  });
});
