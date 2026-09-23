/**
 * progressCharts — the XP chart reads each day's XP, and "vs Last Week"
 * compares two weeks of the same kind (sweep 45, 2026-09-23).
 *
 * THREE DEFECTS, all in the arithmetic rather than the rendering, and none of
 * them visible without knowing what the store holds.
 *
 * 1. THE GAP-DAY SPIKE. The bars were deltas of `progress_history` — a
 *    CUMULATIVE xp snapshot written only on days the learner opens the app. A
 *    day with no entry read `xp: 0`, so the day AFTER any gap differenced
 *    against zero and rendered a bar equal to the learner's whole cumulative
 *    total. Measured over 30 days at a steady 40 XP with two days missed: bars
 *    of 440 and 800 where the learner earned 40, and — because the chart scales
 *    to its largest bar — **25 of the 28 real practice days rendered under 10%
 *    of the height**. The chart was mostly gaps and spikes.
 *
 * 2. THE TREND INHERITED IT. `lastWeek` summed those same deltas: 1000 against
 *    a truth of 240–280, a 3.6x overstatement, feeding "vs Last Week" directly.
 *    A learner practising identically every week saw a large red drop precisely
 *    because the earlier window had contained a gap — the number punished the
 *    consistency it was there to report.
 *
 * 3. TWO KINDS OF WEEK UNDER ONE LABEL. `thisWeek` is the CALENDAR week
 *    (`nh_week_xp_<weekKey()>`); `lastWeek` was a ROLLING seven-day block
 *    (`slice(-14, -7)`). On a Monday the numerator held one day and the
 *    denominator seven, so the card opened every week with a structurally
 *    guaranteed drop.
 *
 * And the no-baseline case: `lastWeek === 0` computed `trend = 0` and rendered a
 * green "▲ 0%" — "no change" — both to a learner who went from nothing to a full
 * week and to one who did nothing in either week. Two different facts, one
 * number, neither measured (NEVER-DO 13).
 *
 * THE DATA WAS ALREADY THERE. `useAward` writes `nh_daily_xp_<localDate>` on
 * every award, the prune never touches it, and `XPActivityCalendar` and
 * `LearningInsights` both already read it. This is that card's own
 * dead-`nh_activity_log` defect in a second place.
 */
import { describe, it, expect, beforeEach, afterAll, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProgressCharts from '../components/profile/ProgressCharts';
import { weekKey, prevWeekKey, localDateStr } from '../lib/dateUtils';

const STATS = { xp: 5000, lc: 40, gc: 20 };

function dayAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return localDateStr(d);
}

/** The real key `useAward` writes, at the real local date. */
function setDailyXp(daysAgo: number, xp: number) {
  localStorage.setItem('nh_daily_xp_' + dayAgo(daysAgo), String(xp));
}

/** The cumulative snapshot the chart used to difference. */
function setLegacyHistory(entries: Array<{ daysAgo: number; xp: number }>) {
  localStorage.setItem(
    'progress_history',
    JSON.stringify(entries.map((e) => ({ date: dayAgo(e.daysAgo), xp: e.xp }))),
  );
}

function barHeights(): number[] {
  return [...document.querySelectorAll('svg rect')].map((r) =>
    Number(r.getAttribute('height') || 0),
  );
}

describe('the XP bars read each day, and a gap cannot inflate its neighbour', () => {
  beforeEach(() => localStorage.clear());

  it('a steady learner with two missed days renders steady bars', () => {
    // The exact scenario measured above: 40 XP a day, days 10 and 20 missed.
    let cum = 0;
    const legacy: Array<{ daysAgo: number; xp: number }> = [];
    for (let idx = 0; idx <= 29; idx++) {
      const daysAgo = 29 - idx;
      if (idx === 10 || idx === 20) continue;
      cum += 40;
      setDailyXp(daysAgo, 40);
      legacy.push({ daysAgo, xp: cum });
    }
    // Present and deliberately ignored: if the component ever differences this
    // again, the spikes come straight back.
    setLegacyHistory(legacy);

    render(<ProgressCharts stats={STATS} />);
    const bars = barHeights().filter((h) => h > 1);
    const max = Math.max(...bars);
    const min = Math.min(...bars);
    // Every practice day earned the same XP, so every drawn bar is the same
    // height. Under the old arithmetic max/min was 20.
    expect(max).toBeCloseTo(min, 5);
    expect(bars.length).toBe(28);
  });

  it('a day with no recorded XP is a zero, not a spike on the next day', () => {
    setDailyXp(3, 100);
    setDailyXp(1, 100); // day 2 missed entirely
    setLegacyHistory([
      { daysAgo: 3, xp: 900 },
      { daysAgo: 1, xp: 1000 },
    ]);
    render(<ProgressCharts stats={STATS} />);
    const drawn = barHeights().filter((h) => h > 1);
    expect(drawn.length).toBe(2);
    expect(drawn[0]).toBeCloseTo(drawn[1]!, 5);
  });

  it('the legacy cumulative snapshot alone draws nothing', () => {
    // Nothing reads progress_history now. A chart built from it would show 30
    // days of activity here; the honest output is an empty chart.
    setLegacyHistory([
      { daysAgo: 5, xp: 400 },
      { daysAgo: 4, xp: 800 },
    ]);
    render(<ProgressCharts stats={STATS} />);
    expect(barHeights().filter((h) => h > 1).length).toBe(0);
  });
});

describe('"vs Last Week" compares two calendar weeks', () => {
  beforeEach(() => localStorage.clear());

  it('says nothing when there is no last week to compare against', () => {
    localStorage.setItem('nh_week_xp_' + weekKey(), '500');
    render(<ProgressCharts stats={STATS} />);
    // "▲ 0%" here claimed a flat week for someone who went from nothing to 500.
    expect(screen.queryByText(/▲\s*0%/)).toBeNull();
    expect(screen.getByText('—')).toBeTruthy();
  });

  it('reads the previous CALENDAR week, not a rolling block of daily XP', () => {
    localStorage.setItem('nh_week_xp_' + weekKey(), '300');
    localStorage.setItem('nh_week_xp_' + prevWeekKey(), '600');
    // Daily keys spanning the rolling -14..-7 window, deliberately inconsistent
    // with the week counter: the old code would have summed these instead.
    for (let d = 7; d < 14; d++) setDailyXp(d, 1000);
    render(<ProgressCharts stats={STATS} />);
    expect(screen.getByText('▼ 50%')).toBeTruthy();
  });

  it('reports a real gain as a gain', () => {
    localStorage.setItem('nh_week_xp_' + weekKey(), '900');
    localStorage.setItem('nh_week_xp_' + prevWeekKey(), '600');
    render(<ProgressCharts stats={STATS} />);
    expect(screen.getByText('▲ 50%')).toBeTruthy();
  });

  it('"This Week" still reads the authoritative weekly counter', () => {
    localStorage.setItem('nh_week_xp_' + weekKey(), '1234');
    render(<ProgressCharts stats={STATS} />);
    expect(screen.getByText('+1,234 XP')).toBeTruthy();
  });
});

describe('the new-user card is unchanged', () => {
  beforeEach(() => localStorage.clear());

  it('renders "No data yet" and no chart at zero', () => {
    render(<ProgressCharts stats={{ xp: 0, lc: 0, gc: 0 }} />);
    expect(screen.getByText('No data yet')).toBeTruthy();
    expect(document.querySelectorAll('svg rect').length).toBe(0);
  });
});

/**
 * THE LOCAL-DATE RULE, DRIVEN WHERE IT ACTUALLY BITES.
 *
 * The keys are written by `useAward` with `localDateStr()`; reading them with a
 * UTC date blanks today and shifts every bar by one for anyone whose local date
 * differs from UTC — the exact defect `pruneStaleLocalStorage` carries a
 * paragraph about, in the same codebase, for the same reason.
 *
 * Swapping `localDateStr(d)` for `d.toISOString().slice(0, 10)` is a NO-OP in
 * this suite as written: the runner's zone is UTC and, at most wall-clock hours,
 * the two agree even in other zones. It passed the mutation, and a mutation that
 * did not land is not a verified guard — so this block sets the process zone and
 * the clock to a moment where they genuinely differ (America/Los_Angeles, 03:00
 * UTC = the previous calendar day locally) and re-asks the question there.
 */
describe('the daily key is read at the LOCAL date', () => {
  const TZ = process.env.TZ;
  afterAll(() => {
    process.env.TZ = TZ;
    vi.useRealTimers();
  });

  it('reads the local day, not the UTC one, when they disagree', () => {
    process.env.TZ = 'America/Los_Angeles';
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-23T03:00:00Z')); // 2026-09-22 20:00 local
    localStorage.clear();
    expect(localDateStr()).toBe('2026-09-22'); // the premise, asserted
    localStorage.setItem('nh_daily_xp_2026-09-22', '250'); // what useAward writes
    localStorage.setItem('nh_daily_xp_2026-09-23', '999'); // a UTC read would find this

    render(<ProgressCharts stats={STATS} />);
    const drawn = barHeights().filter((h) => h > 1);
    // One day of XP exists locally; a UTC read would draw the 999 instead and
    // place it outside the window's last slot.
    expect(drawn.length).toBe(1);
    const bars = barHeights();
    expect(bars[bars.length - 1]).toBeGreaterThan(1);
  });
});
