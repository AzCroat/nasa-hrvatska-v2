/**
 * onboardingAsksOnlyWhatItUses.test.tsx — don't ask for what you throw away.
 *
 * THE DEFECT. `GoalSetterModal`'s third step asked "What's your connection to
 * Croatia?" under the subtitle "Helps us tailor your cultural content". The
 * answer went to `nh_connection` — a key read by NOTHING, anywhere in the app,
 * and absent from the sync snapshot, so it could not even serve a future reader
 * on another device. `onComplete` then handed it to
 * `() => setGoalModalDismissed(true)`, which ignores its argument.
 *
 * That is worse than a dead key. It is a promise made to the learner in UI copy
 * that the app does not keep — NEVER DO 13 pointed the other way, where the app
 * claims it will USE something it then discards. And the step duplicated the
 * one before it: goal `heritage` ("Connect with my heritage / Rediscover my
 * Croatian roots") against connection `diaspora` ("I have Croatian heritage /
 * Family roots in Croatia"). `nh_goal` IS read — by StoryModeScreen and
 * MediaPlayerUtils among others, which is to say by the very cultural content
 * the third step claimed to tailor.
 *
 * HOW IT WAS FOUND: the MIRROR of the sweep that produced the culture-badge
 * fix. That one looked for keys READ that nothing writes; this one looks for
 * keys WRITTEN that nothing reads — work recorded that nothing consumes. Of
 * 144 `nh_` keys written in production, four came back and one was a false
 * positive (`nh_curriculum_spine`, read through a `readJson(SPINE_KEY, …)`
 * helper the matcher could not see).
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import GoalSetterModal from '../components/shared/GoalSetterModal';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const PROD = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
  (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
);

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('the three dead writes are gone', () => {
  // Each of these was written on a real user action and read by nothing.
  const DEAD = [
    ['nh_connection', 'the onboarding question whose answer nothing used'],
    ['nh_goal_set_date', 'a timestamp written beside nh_goal and never read'],
    ['nh_last_active', 'whose only reader, /api/daily-plan, removed the field'],
  ] as const;

  it.each(DEAD)('%s is written nowhere in production (%s)', (key) => {
    const writers = PROD.filter((f) =>
      new RegExp('(?:lsSet|setItem)\\s*\\(\\s*[\'"]' + key + '[\'"]').test(
        strip(readFileSync(f, 'utf8')),
      ),
    );
    expect(writers, `${key} is written again and still read by nothing`).toEqual([]);
  });

  it('the sweep is real: a key that IS alive still shows a writer', () => {
    // Without this the assertions above would pass against a broken matcher.
    const writers = PROD.filter((f) =>
      /(?:lsSet|setItem)\s*\(\s*['"]nh_goal['"]/.test(strip(readFileSync(f, 'utf8'))),
    );
    expect(writers.length).toBeGreaterThan(0);
  });
});

describe('GoalSetterModal asks ONE question — the goal — and keeps the answer', () => {
  // The commitment step ("How much time can you commit daily?", 5/15/30 minutes →
  // nh_daily_goal_xp) was removed on 2026-09-29 with DailyGoalCard: a
  // learner-chosen daily floor is what the Stretch bar replaces ("if they are
  // unmotivated they may select what is easy — assume you are using the
  // application to become fluent"). The goal question stays because the app
  // READS nh_goal.
  function openAndPick(label: string) {
    const onComplete = vi.fn();
    render(<GoalSetterModal onComplete={onComplete} />);
    fireEvent.click(screen.getByText(label));
    return onComplete;
  }

  it('the goal is the only step and its button is the finish', () => {
    const onComplete = openAndPick('Connect with my heritage');
    expect(screen.queryByText('Continue →')).toBeNull();
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(onComplete).toHaveBeenCalledWith({ goal: 'heritage' });
  });

  it('neither the commitment nor the connection question is asked', () => {
    openAndPick('Connect with my heritage');
    expect(screen.queryByText('How much time can you commit daily?')).toBeNull();
    expect(screen.queryByText(/minutes\/day/)).toBeNull();
    expect(screen.queryByText("What's your connection to Croatia?")).toBeNull();
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(localStorage.getItem('nh_daily_goal_xp')).toBeNull();
    expect(localStorage.getItem('nh_connection')).toBeNull();
  });

  it('the answer reaches localStorage, which is what the modal is FOR', () => {
    openAndPick('Travel to Croatia');
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(localStorage.getItem('nh_goal')).toBe('travel');
    expect(localStorage.getItem('nh_goal_set')).toBe('1');
  });

  it('the step cannot be finished before something is chosen', () => {
    const onComplete = vi.fn();
    render(<GoalSetterModal onComplete={onComplete} />);
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(screen.getByText("What's your main goal?")).toBeInTheDocument();
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('no time-commitment choice survives anywhere in onboarding (source pin)', () => {
    for (const f of [
      'src/components/shared/GoalSetterModal.tsx',
      'src/components/home/WelcomeScreen.tsx',
    ]) {
      const src = strip(readFileSync(f, 'utf8'));
      expect(src, f).not.toMatch(/nh_daily_goal_xp|COMMITMENTS|DAILY_GOALS|dailyMin|minutes\/day/);
    }
  });
});

describe('the progress dots are derived from the steps', () => {
  it('one dot per step, not a hardcoded three', () => {
    // They were the literal `[0, 1, 2]` — a third place that had to agree with
    // the step list with nothing making it, so removing a step would have left
    // a dot for a question that is no longer asked.
    const src = strip(readFileSync('src/components/shared/GoalSetterModal.tsx', 'utf8'));
    expect(src).not.toMatch(/\[0,\s*1,\s*2\]\.map/);
    expect(src).toMatch(/steps\.map\(\(_, i\)/);
    // And the CTA reads the last index rather than naming it.
    expect(src).not.toMatch(/step\s*<\s*2\s*\?/);
    expect(src).toMatch(/step\s*<\s*LAST\s*\?/);
  });
});
