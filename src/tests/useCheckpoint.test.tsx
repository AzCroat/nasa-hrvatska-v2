// src/tests/useCheckpoint.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCheckpoint } from '../hooks/useCheckpoint.js';

vi.mock('../lib/speaking/whisperClaudeScorer.js', () => ({
  whisperClaudeScorer: { assess: vi.fn() },
}));

describe('useCheckpoint', () => {
  beforeEach(() => localStorage.clear());

  it('starts idle, advances to running on start(), and to result after complete()', async () => {
    const { result } = renderHook(() =>
      useCheckpoint({ certifiedLevel: 'B1', weakSkills: [], activeDayCount: 10 }),
    );
    expect(result.current.phase).toBe('idle');
    // start() awaits the code-split item banks, so the transition lands a tick
    // later than it used to. Everything after the await is unchanged.
    await act(async () => {
      await result.current.start();
    });
    expect(result.current.phase).toBe('running');
    expect(result.current.exam?.questions.length).toBeGreaterThan(0);
    act(() => result.current.complete({ vocab: 0.95, grammar: 0.9, speaking: 0.92 }));
    expect(result.current.phase).toBe('result');
    expect(result.current.outcome?.kind).toBe('pass');
  });

  it('a snooze while the banks are loading does not later open the exam', async () => {
    // The regression the generation guard exists for. start() is async now, so
    // there is a real window between the tap and the exam being ready in which
    // the learner can defer — and an unguarded start would then drop a full
    // screen exam on top of whatever they went to instead.
    const { result } = renderHook(() =>
      useCheckpoint({ certifiedLevel: 'B1', weakSkills: [], activeDayCount: 10 }),
    );
    await act(async () => {
      const pending = result.current.start(); // not awaited yet — still in flight
      result.current.snooze(999999);
      await pending;
    });
    expect(result.current.phase).toBe('idle');
    expect(result.current.exam).toBeNull();
  });

  it('snooze() sets phase to idle and persists snoozedUntil', () => {
    const { result } = renderHook(() =>
      useCheckpoint({ certifiedLevel: 'B1', weakSkills: [], activeDayCount: 10 }),
    );
    act(() => result.current.snooze(999999));
    expect(result.current.phase).toBe('idle');
    const saved = JSON.parse(localStorage.getItem('nh_cefr_certifications')!);
    expect(saved.checkpoints.snoozedUntil).toBe(999999);
  });
});
