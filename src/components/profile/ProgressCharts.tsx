import React, { useMemo } from 'react';
import { weekKey, prevWeekKey, localDateStr } from '../../lib/dateUtils';

interface BarDatum {
  value: number;
  today?: boolean;
}

interface HistoryEntry {
  date: string;
  today: boolean;
  /** XP the app RECORDED that day — see the block comment on `history`. */
  delta: number;
}

function SVGBarChart({
  data,
  color = '#0e7490',
  height = 80,
}: {
  data: BarDatum[];
  color?: string;
  height?: number;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const w = 100 / data.length;
  return (
    <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" style={{ width: '100%', height }}>
      {data.map((d, i) => {
        const barH = (d.value / max) * (height - 4);
        return (
          <g key={i}>
            <rect
              x={i * w + w * 0.1}
              y={height - barH - 2}
              width={w * 0.8}
              height={Math.max(barH, 1)}
              fill={d.today ? '#f59e0b' : color}
              rx={2}
              opacity={d.value === 0 ? 0.2 : 0.85}
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * @param {{ stats: { xp: number, lc: number, gc: number } }} props
 */
const ProgressCharts = React.memo(function ProgressCharts({
  stats,
}: {
  stats: { xp?: number; lc?: number; gc?: number } | null;
}) {
  /**
   * A DAY'S XP IS READ, NOT DIFFERENCED (2026-09-23).
   *
   * These bars used to be deltas of `progress_history` — a CUMULATIVE xp
   * snapshot written only on days the learner opens the app. A day with no
   * entry read as `xp: 0`, so the day AFTER any gap differenced against zero and
   * rendered a bar equal to the learner's whole cumulative total to that point.
   *
   * Measured, 30 days at a steady 40 XP with two days missed: bars of 440 and
   * 800 where the learner earned 40, the chart scaled to the larger spike, and
   * **25 of the 28 real practice days rendered under 10% of the bar height** —
   * invisible. `lastWeek` summed the same deltas and came out at 1000 against a
   * truth of 240–280, a 3.6x overstatement, which then fed the "vs Last Week"
   * percentage. So a learner practising identically every week saw a large
   * negative trend precisely because the earlier window contained a gap: the
   * number punished the consistency it was supposed to report.
   *
   * The real per-day number was on the device the whole time. `useAward` writes
   * `nh_daily_xp_<localDate>` on every award, `pruneStaleLocalStorage` does not
   * touch it (so far more than 30 days survive), and `LearningInsights` and
   * `XPActivityCalendar` both already read it — the same key, the same fix, and
   * the two Me-tab charts now agree by construction instead of by coincidence.
   * This is XPActivityCalendar's dead-`nh_activity_log` defect in a second
   * place: one card was repaired and its neighbour, differencing snapshots five
   * files away, was not.
   *
   * A day with no key reads 0, which is what it means — no XP recorded — and can
   * no longer make its NEIGHBOUR wrong.
   */
  const history = useMemo<HistoryEntry[]>(() => {
    // Local date, NOT UTC — the key is written with localDateStr() (useAward).
    // UTC buckets mis-align for users whose local date ≠ UTC, blanking today.
    const today = localDateStr();
    const days: HistoryEntry[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const date = localDateStr(d);
      let xp = 0;
      try {
        xp = parseInt(localStorage.getItem('nh_daily_xp_' + date) || '0', 10) || 0;
      } catch {
        /* storage unavailable — an empty chart, never a fabricated one */
      }
      days.push({ date, today: date === today, delta: Math.max(0, xp) });
    }
    return days;
  }, []);

  // Read from the same authoritative counter used by StatsWidget / SessionCard / HomeTab.
  // The delta-based calculation over progress_history silently ignores prestige resets
  // (negative deltas are clamped to 0), causing thisWeek > stats.xp after a prestige.
  const weekXp = (key: string) => {
    try {
      return parseInt(localStorage.getItem('nh_week_xp_' + key) || '0', 10) || 0;
    } catch {
      return 0;
    }
  };
  const thisWeek = weekXp(weekKey());
  /**
   * LAST WEEK IS THE CALENDAR WEEK, from the same counter.
   *
   * It used to be `history.slice(-14, -7)` — a ROLLING seven-day block ending a
   * week ago — compared against `thisWeek`, which is the CALENDAR week. Two
   * different window kinds under one "vs Last Week" label: on a Monday morning
   * the numerator held one day and the denominator seven, so the card was
   * structurally guaranteed to open every week with a large red drop. Reading
   * `nh_week_xp_<prevWeekKey()>` makes both sides the same kind of week from the
   * same counter, and `pruneStaleLocalStorage` explicitly keeps that key (the
   * weekly freeze recharge already depends on it).
   */
  const lastWeek = weekXp(prevWeekKey());
  const hasBaseline = lastWeek > 0;
  const trend = hasBaseline ? Math.round(((thisWeek - lastWeek) / lastWeek) * 100) : 0;

  const isNewUser = (stats?.xp ?? 0) === 0 && (stats?.lc ?? 0) === 0;

  if (isNewUser)
    return (
      <div
        style={{
          background: 'var(--card)',
          border: '1.5px solid var(--card-b)',
          borderRadius: 16,
          padding: '24px 20px',
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 10 }}>📊</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--heading)', marginBottom: 6 }}>
          No data yet
        </div>
        <div style={{ fontSize: 12, color: 'var(--subtext)', lineHeight: 1.6 }}>
          Complete your first lesson to start tracking your progress here.
        </div>
      </div>
    );

  return (
    <div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}
      >
        {[
          { label: 'Total XP', value: stats?.xp?.toLocaleString() || '0' },
          { label: 'This Week', value: `+${thisWeek.toLocaleString()} XP` },
          {
            // NO BASELINE IS NOT A FLAT WEEK. With `lastWeek === 0` the trend
            // computed to 0 and rendered a green "▲ 0%" — "no change" — to a
            // learner who went from nothing to a full week of practice, and the
            // identical cell to one who did nothing in either week. Two
            // different facts, one number, neither of them measured
            // (NEVER-DO 13).
            label: 'vs Last Week',
            value: !hasBaseline ? '—' : trend >= 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`,
            color: !hasBaseline ? undefined : trend >= 0 ? '#16a34a' : '#dc2626',
          },
        ].map(({ label, value, color }) => (
          <div key={label} className="c" style={{ textAlign: 'center', padding: '12px 8px' }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: color || 'var(--heading)' }}>
              {value}
            </div>
            <div style={{ fontSize: 10, color: 'var(--subtext)', fontWeight: 600, marginTop: 3 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="c" style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--subtext)',
            marginBottom: 10,
            textTransform: 'uppercase',
            letterSpacing: '.06em',
          }}
        >
          XP — Last 30 Days
        </div>
        <SVGBarChart data={history.map((d) => ({ value: d.delta || 0, today: d.today }))} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 4,
            fontSize: 10,
            color: 'var(--subtext)',
          }}
        >
          <span>30 days ago</span>
          <span style={{ color: '#f59e0b', fontWeight: 700 }}>● Today</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
});

export default ProgressCharts;
