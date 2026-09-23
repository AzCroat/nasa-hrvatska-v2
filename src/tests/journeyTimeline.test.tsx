/**
 * journeyTimeline — every milestone the app RECORDS, the timeline can NAME
 * (sweep 44, 2026-09-23).
 *
 * THE DEFECT. `updateStreak` raises a milestone at each of
 * `STREAK_MILESTONES = [7, 14, 21, 30, 50, 60, 100, 365]`, and `useAward`
 * records it as `streak_<n>` with the count in its own meta. `JourneyTimeline`
 * looked the type up in a hand-written map that carried **five of the eight** —
 * 14, 21 and 60 were missing — and everything else fell through to
 * `MILESTONE_ICONS.default`. So a learner who reached a 14-day streak got
 * "🌟 Milestone — A new achievement!" on their journey card: the app knew
 * exactly what they had done, wrote the number down, and then declined to say
 * it. Three of eight, including the two most learners reach after the first
 * week.
 *
 * It is the decay class this repo keeps rediscovering — a hand-maintained list
 * restating a production constant, going stale silently at whatever rate the
 * list still covers. Nothing could notice: a generic label renders perfectly.
 *
 * THE GUARD IS A DERIVATION, driven from the REAL `STREAK_MILESTONES` (exported
 * for this) through the REAL store and the REAL component. A test listing the
 * eight values itself would be a second copy of the same decaying list.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import JourneyTimeline, { milestoneDef } from '../components/profile/JourneyTimeline';
import { STREAK_MILESTONES, recordJourneyMilestone } from '../lib/appUtils';

const DEFAULT_LABEL = 'Milestone';
const DEFAULT_MSG = 'A new achievement!';

describe('every recorded streak milestone names itself', () => {
  beforeEach(() => localStorage.clear());

  it('the subject is not empty', () => {
    expect(STREAK_MILESTONES.length).toBeGreaterThanOrEqual(5);
  });

  it.each(STREAK_MILESTONES)('a %i-day streak is labelled with its own number', (n) => {
    const def = milestoneDef(`streak_${n}`);
    expect(
      def.label,
      `streak_${n} rendered as the generic "${DEFAULT_LABEL}". The store recorded the ` +
        `number; the card has to say it.`,
    ).toBe(`${n}-Day Streak`);
    expect(def.msg).not.toBe(DEFAULT_MSG);
    expect(def.icon).not.toBe('');
  });

  it('a milestone length nobody has added yet still names itself', () => {
    // The point of deriving rather than listing: the next value added to
    // STREAK_MILESTONES must not need a second edit here.
    expect(milestoneDef('streak_200').label).toBe('200-Day Streak');
    expect(milestoneDef('streak_200').msg).toContain('200');
    expect(milestoneDef('streak_200').icon).toBe('🏆');
  });

  it('renders the real store through the real component', () => {
    recordJourneyMilestone('streak_14', { count: 14, allowRepeat: false });
    render(<JourneyTimeline />);
    expect(screen.getByText('14-Day Streak')).toBeTruthy();
    expect(screen.queryByText(DEFAULT_MSG)).toBeNull();
  });

  it('the two non-streak types the app records are named too', () => {
    recordJourneyMilestone('first_lesson', {});
    recordJourneyMilestone('first_speaking', {});
    render(<JourneyTimeline />);
    expect(screen.getByText('First Lesson')).toBeTruthy();
    expect(screen.getByText('First Speaking')).toBeTruthy();
    expect(screen.queryByText(DEFAULT_LABEL)).toBeNull();
  });

  it('an unknown type still renders, rather than blanking the card', () => {
    // The default is not the defect — falling into it for a KNOWN type was.
    expect(milestoneDef('something_new').label).toBe(DEFAULT_LABEL);
  });
});

/**
 * THE OTHER DIRECTION, and it is the one that goes stale quietly. `name_day`
 * sits in the map with nothing recording it. That is harmless — a label with no
 * event, rather than an event with no label — but an unchecked exemption is how
 * the `idioms` dead end survived its own staleness test, so it is asserted in
 * BOTH directions: it must still exist in the map, and nothing must have started
 * recording it without the comment being revisited.
 */
const SRC = resolve(__dirname, '..');
const FILES: string[] = [];
(function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === 'tests') continue;
      walk(p);
    } else if (/\.tsx?$/.test(name)) FILES.push(p);
  }
})(SRC);

const RECORDED = new Set<string>();
for (const f of FILES) {
  const src = readFileSync(f, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
  // The literal form only: the closing quote must be followed by `,` or `)`, or
  // the `'streak_' + n` concatenation below contributes a bare `streak_` type
  // that no map could ever name. (It did, on this test's first run.)
  for (const m of src.matchAll(/recordJourneyMilestone\(\s*'([^']+)'\s*[,)]/g)) RECORDED.add(m[1]!);
  // `'streak_' + sr.milestone` — the dynamic one, expanded from the constant.
  if (/recordJourneyMilestone\(\s*'streak_'\s*\+/.test(src))
    for (const n of STREAK_MILESTONES) RECORDED.add(`streak_${n}`);
}

describe('the map and the recorders agree', () => {
  it('the census found the recorders — not an empty set passing silently', () => {
    expect(RECORDED.has('first_lesson')).toBe(true);
    expect(RECORDED.has('first_speaking')).toBe(true);
    expect(RECORDED.size).toBeGreaterThanOrEqual(2 + STREAK_MILESTONES.length);
  });

  it.each([...RECORDED])('%s is named, not generic', (type) => {
    expect(milestoneDef(type).label).not.toBe(DEFAULT_LABEL);
  });

  it('name_day is still the unreached entry its comment claims', () => {
    expect(milestoneDef('name_day').label).toBe('Name Day');
    expect(
      RECORDED.has('name_day'),
      'Something now records name_day. The comment in JourneyTimeline.tsx calls it ' +
        'deliberately unreachable — revisit it rather than deleting this assertion.',
    ).toBe(false);
  });
});
