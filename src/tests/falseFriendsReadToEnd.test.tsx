/**
 * False Friends credits when the list has been READ, not when a button that leaves is
 * pressed (2026-09-27). Its only credit used to be "Complete Lesson +30 XP", which also
 * navigated away: reading every entry and tapping Back paid nothing and, from Today's
 * Session, stranded the slot. That button also paid 30 XP on every visit, because its
 * once-only guard was a per-mount ref. Driven against the real completion authority.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';

type Stats = { vs?: string[]; lc?: number };
const store = vi.hoisted(() => ({ stats: {} as Stats }));
const setStats = vi.hoisted(() =>
  vi.fn((u: (p: Stats) => Stats) => {
    store.stats = u(store.stats);
  }),
);
vi.mock('../context/StatsContext.tsx', () => ({
  useStats: () => ({ stats: store.stats, setStats, writeDelta: vi.fn() }),
}));
vi.mock('../data', () => ({
  H: (t: string) => <h1>{t}</h1>,
  speak: vi.fn(),
  FALSEFR: [
    { hr: 'prezervativ', looks: 'preservative', means: 'condom' },
    { hr: 'fabrika', looks: 'fabric', means: 'factory' },
  ],
}));

import FalseFriendsScreen from '../components/learn/FalseFriendsScreen';
import { DWELL_MS } from '../lib/dwellCredit';

let ioCallback: ((e: { isIntersecting: boolean }[]) => void) | null = null;
class FakeIO {
  constructor(cb: (e: { isIntersecting: boolean }[]) => void) {
    ioCallback = cb;
  }
  observe() {}
  disconnect() {}
}

function reachEnd() {
  act(() => ioCallback?.([{ isIntersecting: true }]));
}

beforeEach(() => {
  vi.useFakeTimers();
  store.stats = { vs: [], lc: 0 };
  ioCallback = null;
  setStats.mockClear();
  sessionStorage.clear();
  vi.stubGlobal('IntersectionObserver', FakeIO);
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('False Friends — the credit follows the reading', () => {
  it('reaching the end after the dwell pays once, frees the session slot, and does not navigate', () => {
    sessionStorage.setItem('nh_session_started', 'falsefr');
    const award = vi.fn();
    const goBack = vi.fn();
    render(<FalseFriendsScreen goBack={goBack} award={award} />);
    expect(ioCallback).not.toBeNull();
    act(() => vi.advanceTimersByTime(DWELL_MS));
    expect(award).not.toHaveBeenCalled(); // dwelled, not yet at the end
    reachEnd();
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(30, false, 'vocabulary');
    expect(store.stats.vs).toContain('falsefr');
    expect(store.stats.lc).toBe(1);
    expect(sessionStorage.getItem('nh_session_completed')).toBe('falsefr');
    expect(goBack).not.toHaveBeenCalled();
    expect(screen.getByTestId('falsefr-done').textContent).toContain('Read');
  });

  it('the end visible on opening is not a read: nothing pays before the dwell', () => {
    const award = vi.fn();
    render(<FalseFriendsScreen goBack={vi.fn()} award={award} />);
    reachEnd();
    act(() => vi.advanceTimersByTime(DWELL_MS - 1));
    expect(award).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(award).toHaveBeenCalledTimes(1);
  });

  it('a second visit pays no XP again, but still frees a session slot', () => {
    store.stats = { vs: ['falsefr'], lc: 1 };
    sessionStorage.setItem('nh_session_started', 'falsefr');
    const award = vi.fn();
    render(<FalseFriendsScreen goBack={vi.fn()} award={award} />);
    expect(screen.getByTestId('falsefr-done').textContent).toBe('Mark as read');
    reachEnd();
    act(() => vi.advanceTimersByTime(DWELL_MS));
    expect(award).not.toHaveBeenCalled();
    expect(store.stats.lc).toBe(1);
    expect(sessionStorage.getItem('nh_session_completed')).toBe('falsefr');
  });

  it('the button declares the finish without leaving; only the next tap goes back', () => {
    const award = vi.fn();
    const goBack = vi.fn();
    render(<FalseFriendsScreen goBack={goBack} award={award} />);
    fireEvent.click(screen.getByTestId('falsefr-done'));
    expect(award).toHaveBeenCalledTimes(1);
    expect(goBack).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('falsefr-done'));
    expect(goBack).toHaveBeenCalledTimes(1);
    reachEnd();
    act(() => vi.advanceTimersByTime(DWELL_MS));
    expect(award).toHaveBeenCalledTimes(1); // the reading path cannot pay a second time
  });
});
