/**
 * xpActivityCalendar.test.tsx — the 12-week heat map had no heat.
 *
 * THE DEFECT. `XPActivityCalendar` (Me tab) buckets each day into one of three
 * shades by the XP earned that day: < 50, < 150, >= 150. Its first and, in its
 * own comment, "most precise" source was `nh_activity_log` — a key NOTHING in
 * this app has ever written. The remaining three sources are PRESENCE scans:
 * each writes the literal 1 when a day has any evidence of activity. So every
 * active day carried the value 1, which means:
 *
 *   - all cells rendered at the lightest shade, whatever the learner did;
 *   - the two darker bands were unreachable by any amount of practice;
 *   - the tooltip's `N XP` branch needs `> 1`, so every day said "Studied ✓"
 *     and the calendar never showed an XP number anywhere.
 *
 * MEASURED BEFORE THE FIX, driving the real component over a history of 42
 * active days whose recorded daily XP ran 12–300: 42 active cells, ONE distinct
 * shade, zero tooltips naming XP.
 *
 * THE NUMBER WAS ALREADY ON THE DEVICE. `useAward` writes
 * `nh_daily_xp_<localDate>` on every award; `pruneStaleLocalStorage` does not
 * touch those keys, so the whole 84-day window survives; `LearningInsights`
 * already reads them one day at a time. Source 4 — the presence scan — even
 * matched these keys with its own regex and discarded the value.
 *
 * NOTHING IS INVENTED (NEVER DO 13). A day with no recorded XP is still marked
 * active by the presence sources at 1, exactly as before. This changes the
 * SHADE of a day, never whether it counts as active — asserted below in both
 * directions, because a fix that quietly dropped days from the calendar would
 * be a worse bug than the one it replaced.
 *
 * THE KEY AGREEMENT IS DERIVED, not restated. A calendar reading
 * `nh_daily_xp_` while the award path writes something else is the exact defect
 * this file exists about, and a test that hardcodes both halves cannot see it.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import XPActivityCalendar from '../components/profile/XPActivityCalendar';

const ds = (back: number) => {
  const d = new Date();
  d.setDate(d.getDate() - back);
  return (
    d.getFullYear() +
    '-' +
    String(d.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(d.getDate()).padStart(2, '0')
  );
};

/** Every rendered day cell the component marked active, with its shade. */
function activeCells(container: HTMLElement) {
  return [...container.querySelectorAll('div[title]')]
    .map((c) => ({ title: c.getAttribute('title') || '', bg: (c as HTMLElement).style.background }))
    .filter((c) => c.title.includes('✓'));
}

beforeEach(() => {
  localStorage.clear();
});

describe('the calendar shades a day by the XP actually recorded for it', () => {
  it('reaches all three bands from a real history', () => {
    // One day in each band, at the boundaries cellColor defines.
    localStorage.setItem('nh_daily_xp_' + ds(1), '20'); // < 50   → lightest
    localStorage.setItem('nh_daily_xp_' + ds(2), '50'); // < 150  → mid
    localStorage.setItem('nh_daily_xp_' + ds(3), '150'); // >= 150 → full

    const cells = activeCells(render(<XPActivityCalendar st={{ xp: 5000 }} />).container);
    const shades = new Set(cells.map((c) => c.bg));

    expect(cells).toHaveLength(3);
    expect(
      shades.size,
      'every active day rendered at the same shade — the intensity axis is dead again',
    ).toBe(3);
  });

  it('names the XP in the tooltip instead of a bare "Studied"', () => {
    localStorage.setItem('nh_daily_xp_' + ds(1), '180');
    const cells = activeCells(render(<XPActivityCalendar st={{ xp: 5000 }} />).container);
    expect(cells[0]!.title).toContain('180 XP');
  });

  it('holds each boundary exactly — no off-by-one in the bands', () => {
    const shadeOf = (xp: string) => {
      localStorage.clear();
      localStorage.setItem('nh_daily_xp_' + ds(1), xp);
      return activeCells(render(<XPActivityCalendar st={{ xp: 1 }} />).container)[0]!.bg;
    };
    expect(shadeOf('49')).toBe(shadeOf('1'));
    expect(shadeOf('50')).not.toBe(shadeOf('49'));
    expect(shadeOf('149')).toBe(shadeOf('50'));
    expect(shadeOf('150')).not.toBe(shadeOf('149'));
  });
});

describe('the active-day set is unchanged by the shading', () => {
  it('still counts a day known only to the presence sources', () => {
    // xpCooldown (source 2) is the only evidence for this day. It must stay on
    // the calendar, at the presence shade, with the honest "Studied" label —
    // there is no XP figure for it and inventing one would be the lie.
    localStorage.setItem('xpCooldown', JSON.stringify({ flash: ds(4) }));
    const cells = activeCells(render(<XPActivityCalendar st={{ xp: 1 }} />).container);
    expect(cells).toHaveLength(1);
    expect(cells[0]!.title).toContain('Studied');
    expect(cells[0]!.title).not.toContain('XP');
  });

  it('still counts a day known only to a quest key', () => {
    localStorage.setItem('nh_quest_lesson_' + ds(5), '1');
    expect(activeCells(render(<XPActivityCalendar st={{ xp: 1 }} />).container)).toHaveLength(1);
  });

  it('prefers the recorded XP when a day has both kinds of evidence', () => {
    // Before the fix the presence sources ran first and won, which is why
    // source 4 matching nh_daily_xp_* still produced a 1.
    localStorage.setItem('xpCooldown', JSON.stringify({ flash: ds(6) }));
    localStorage.setItem('nh_daily_xp_' + ds(6), '220');
    const cells = activeCells(render(<XPActivityCalendar st={{ xp: 1 }} />).container);
    expect(cells).toHaveLength(1);
    expect(cells[0]!.title).toContain('220 XP');
  });

  it('renders nothing active on a device with no history, and does not throw', () => {
    expect(activeCells(render(<XPActivityCalendar st={{}} />).container)).toHaveLength(0);
  });

  it('falls back to the presence marker on a junk value', () => {
    // The presence scan (source 4) matches these keys too, so the day stays on
    // the calendar exactly as it did before — it simply carries no XP claim.
    localStorage.setItem('nh_daily_xp_' + ds(2), 'not-a-number');
    localStorage.setItem('nh_daily_xp_' + ds(3), '-40');
    const cells = activeCells(render(<XPActivityCalendar st={{}} />).container);
    expect(cells).toHaveLength(2);
    for (const c of cells) expect(c.title).toContain('Studied');
  });
});

describe('the calendar reads the key the award path writes', () => {
  const calendar = readFileSync('src/components/profile/XPActivityCalendar.tsx', 'utf8');
  const award = readFileSync('src/hooks/useAward.ts', 'utf8');

  it('useAward still writes a per-local-date XP key', () => {
    // Non-vacuity: derive the writer's prefix rather than restating it, so a
    // rename on either side fails here instead of silently re-orphaning the
    // calendar the way nh_activity_log did.
    const m = award.match(/'(nh_daily_xp_)'\s*\+\s*_localDateStr\(\)/);
    expect(
      m,
      'useAward no longer writes nh_daily_xp_<date> — the calendar is blind again',
    ).toBeTruthy();
    expect(calendar).toContain(m![1]!);
  });

  it('reads no key that nothing writes', () => {
    // A storage READ, not a mention: the comment above the fix names the dead
    // key deliberately, to explain why it is gone. A guard that tripped on
    // prose would push the next person to delete the explanation — the same
    // rule deadKeyReaders.test.ts states for its own matcher.
    const readsKey = (src: string, key: string) =>
      new RegExp(String.raw`(getItem|lsGet|ssGet)\(\s*['"]${key}['"]`).test(src);
    expect(readsKey(`localStorage.getItem('nh_activity_log')`, 'nh_activity_log')).toBe(true);
    expect(readsKey(calendar, 'nh_activity_log')).toBe(false);
  });
});
