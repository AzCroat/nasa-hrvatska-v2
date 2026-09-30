// src/tests/sessionLaunchDay.test.ts
//
// A pending session completion is credited only on the day it was earned (course
// walk, 2026-09-30). Found by walking the course in a browser: a learner who opened
// the day's lesson from Home and left by the course map carried the completion into
// the next day, and Home ticked the NEXT day's lesson before it was opened.

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  markSessionLaunch,
  takePendingSessionActivity,
  SESSION_LAUNCH_DAY_KEY,
} from '../lib/sessionLaunchDay';

beforeEach(() => {
  sessionStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 8, 30, 10, 0, 0));
});
afterEach(() => vi.useRealTimers());

describe('takePendingSessionActivity', () => {
  it('credits a same-day completion', () => {
    markSessionLaunch('animlesson');
    sessionStorage.setItem('nh_session_completed', 'animlesson');
    expect(takePendingSessionActivity()).toEqual({
      activity: 'animlesson',
      completed: 'animlesson',
    });
  });

  it('drops a completion stamped on another day, and clears every marker', () => {
    markSessionLaunch('animlesson');
    sessionStorage.setItem('nh_session_completed', 'animlesson');
    vi.setSystemTime(new Date(2026, 9, 1, 9, 0, 0)); // the next morning
    expect(takePendingSessionActivity()).toEqual({ activity: null, completed: null });
    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(sessionStorage.getItem('nh_session_completed')).toBeNull();
    expect(sessionStorage.getItem(SESSION_LAUNCH_DAY_KEY)).toBeNull();
  });

  it('falls back to the completed marker after a tab-away cleared the launch', () => {
    markSessionLaunch('animlesson');
    sessionStorage.setItem('nh_session_completed', 'animlesson');
    sessionStorage.removeItem('nh_session_started'); // App.tsx setTab
    expect(takePendingSessionActivity().activity).toBe('animlesson');
  });

  it('applies an unstamped marker as before (written by an earlier build)', () => {
    sessionStorage.setItem('nh_session_started', 'review');
    expect(takePendingSessionActivity().activity).toBe('review');
  });
});

describe('every launch site stamps the day', () => {
  // A launch that writes the marker without the stamp re-opens the defect for that
  // door. Comments stripped so prose naming the key cannot satisfy the pin.
  const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  for (const file of ['src/components/home/HomeTab.tsx', 'src/hooks/useNextStepEngine.ts']) {
    it(`${file} writes nh_session_started only through markSessionLaunch`, () => {
      const src = strip(readFileSync(resolve(process.cwd(), file), 'utf8'));
      expect(src).not.toMatch(/setItem\(\s*['"]nh_session_started['"]/);
      expect(src).toMatch(/markSessionLaunch\(/);
    });
  }
  it('HomeTab reads the markers only through takePendingSessionActivity', () => {
    const src = strip(
      readFileSync(resolve(process.cwd(), 'src/components/home/HomeTab.tsx'), 'utf8'),
    );
    expect(src).not.toMatch(/getItem\(\s*['"]nh_session_completed['"]/);
    expect(src.match(/takePendingSessionActivity\(\)/g)?.length).toBe(2);
  });
});
