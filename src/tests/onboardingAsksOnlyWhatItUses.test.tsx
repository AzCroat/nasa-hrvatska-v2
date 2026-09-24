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

describe('GoalSetterModal asks two questions and keeps both answers', () => {
  function openAndPick(label: string) {
    const onComplete = vi.fn();
    render(<GoalSetterModal onComplete={onComplete} />);
    fireEvent.click(screen.getByText(label));
    return onComplete;
  }

  it('step 1 is the goal and step 2 is the commitment — and there is no step 3', () => {
    const onComplete = openAndPick('Connect with my heritage');
    fireEvent.click(screen.getByText('Continue →'));
    // The commitment step is now the LAST one, so its button is the finish.
    expect(screen.getByText('How much time can you commit daily?')).toBeInTheDocument();
    fireEvent.click(screen.getByText('15 minutes/day'));
    expect(screen.getByText("Let's Start Learning! 🇭🇷")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(onComplete).toHaveBeenCalledWith({ goal: 'heritage', xp: 30 });
  });

  it('the connection question is not asked at all', () => {
    openAndPick('Connect with my heritage');
    fireEvent.click(screen.getByText('Continue →'));
    fireEvent.click(screen.getByText('15 minutes/day'));
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(screen.queryByText("What's your connection to Croatia?")).toBeNull();
    expect(screen.queryByText('Helps us tailor your cultural content')).toBeNull();
    expect(localStorage.getItem('nh_connection')).toBeNull();
  });

  it('both answers reach localStorage, which is what the modal is FOR', () => {
    // The goal is written at step 1 so a re-visit never re-shows the modal;
    // the commitment is written when the last step finishes.
    openAndPick('Travel to Croatia');
    fireEvent.click(screen.getByText('Continue →'));
    expect(localStorage.getItem('nh_goal')).toBe('travel');
    expect(localStorage.getItem('nh_goal_set')).toBe('1');
    fireEvent.click(screen.getByText('30 minutes/day'));
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(localStorage.getItem('nh_daily_goal_xp')).toBe('60');
  });

  it('the commitment survived the step being made last', () => {
    // It used to be written on the way OUT of step 2 into step 3. Moving it
    // into the final branch is the one place this change could have silently
    // dropped a value the app genuinely reads.
    openAndPick('Become fluent');
    fireEvent.click(screen.getByText('Continue →'));
    fireEvent.click(screen.getByText('5 minutes/day'));
    fireEvent.click(screen.getByText("Let's Start Learning! 🇭🇷"));
    expect(localStorage.getItem('nh_daily_goal_xp')).toBe('10');
  });

  it('a step cannot be advanced before something is chosen', () => {
    const onComplete = vi.fn();
    render(<GoalSetterModal onComplete={onComplete} />);
    fireEvent.click(screen.getByText('Continue →'));
    expect(screen.getByText("What's your main goal?")).toBeInTheDocument();
    expect(onComplete).not.toHaveBeenCalled();
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
