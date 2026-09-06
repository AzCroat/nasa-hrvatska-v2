import { describe, it, expect, beforeEach } from 'vitest';
import { getCEFR } from '../components/home/heroHelpers';
import { seedCertifiedTo } from './helpers/seedCertified';

// The hero's CEFR bar shows the CERTIFIED level (see cefrBadgeCertified.test.tsx
// for the badge-vs-certification contract). These cases keep the WITHIN-BAND
// arithmetic honest for a learner whose certification matches their XP band —
// the E2E fixtures' shape and the common case.
//
// Regression kept from before: the total>=18000 fallback used to return
// current:'C1', so the most advanced learners saw "C1" on Home while
// StatsTab/DesktopPanel (which reach C2) showed "C2". C2 is terminal —
// current===next and a full bar.
describe('heroHelpers getCEFR — band boundaries (certified == eligible)', () => {
  beforeEach(() => localStorage.clear());

  it('classifies low XP as A1 progressing to A2', () => {
    const r = getCEFR(0, 0, 0);
    expect(r.current).toBe('A1');
    expect(r.next).toBe('A2');
    expect(r.awaitingAssessment).toBe(false);
  });

  it('measures progress from the band floor, not from zero', () => {
    seedCertifiedTo('B1');
    // B1 spans 1200..3499; 1200 + 1150 = 2350 → 50% of the way to B2.
    expect(getCEFR(2350, 0, 0).pctInLevel).toBe(50);
    expect(getCEFR(1200, 0, 0).pctInLevel).toBe(0);
  });

  it('classifies the C1 band (8000..17999) as C1 → C2', () => {
    seedCertifiedTo('C1');
    const r = getCEFR(8000, 0, 0);
    expect(r.current).toBe('C1');
    expect(r.next).toBe('C2');
    expect(r.pctInLevel).toBe(0);
  });

  it('reaches terminal C2 at exactly 18000 (was wrongly C1)', () => {
    seedCertifiedTo('C2');
    const r = getCEFR(18000, 0, 0);
    expect(r.current).toBe('C2');
    expect(r.next).toBe('C2'); // terminal — HeroStats renders "C2 · Max"
    expect(r.pctInLevel).toBe(100);
  });

  it('stays C2 well past the threshold', () => {
    seedCertifiedTo('C2');
    expect(getCEFR(50000, 100, 100).current).toBe('C2');
  });
});
