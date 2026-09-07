/**
 * useHeardGate.test.tsx — the shared "heard" gate for audio-first practice
 * (2026-09-06). The Listening quiz and Dictation lock answering until the
 * recording has played to the end; this hook is what they lock on.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

const audio = vi.hoisted(() => ({
  speak: vi.fn(async () => 'azure' as string),
  speakSlow: vi.fn(async () => 'azure' as string),
  lastFailure: null as null | { cause: string },
}));
vi.mock('../lib/audio', () => ({
  speak: (...a: unknown[]) => audio.speak(...(a as [])),
  speakSlow: (...a: unknown[]) => audio.speakSlow(...(a as [])),
  getLastTtsFailure: () => audio.lastFailure,
  describeTtsFailure: () => 'desc',
}));

import { useHeardGate } from '../hooks/useHeardGate';

beforeEach(() => {
  audio.speak.mockReset().mockResolvedValue('azure');
  audio.speakSlow.mockReset().mockResolvedValue('azure');
  audio.lastFailure = null;
});

describe('useHeardGate', () => {
  it('starts idle and locked; a play that ends unlocks it', async () => {
    const { result } = renderHook(() => useHeardGate());
    expect(result.current.status).toBe('idle');
    expect(result.current.heard).toBe(false);
    await act(() => result.current.play('Dobar dan.'));
    expect(audio.speak).toHaveBeenCalledWith('Dobar dan.', undefined);
    expect(result.current.status).toBe('played');
    expect(result.current.heard).toBe(true);
  });

  it('the slow play counts as heard too', async () => {
    const { result } = renderHook(() => useHeardGate());
    await act(() => result.current.playSlow('Dobar dan.'));
    expect(audio.speakSlow).toHaveBeenCalled();
    expect(result.current.heard).toBe(true);
  });

  it('a failed play records the cause and stays locked; a later success unlocks', async () => {
    audio.speak.mockResolvedValueOnce('failed');
    audio.lastFailure = { cause: 'no_fallback_voice' };
    const { result } = renderHook(() => useHeardGate());
    await act(() => result.current.play('x'));
    expect(result.current.status).toBe('failed');
    expect(result.current.failure).toEqual({ cause: 'no_fallback_voice' });
    expect(result.current.heard).toBe(false);
    await act(() => result.current.play('x'));
    expect(result.current.heard).toBe(true);
    expect(result.current.failure).toBeNull();
  });

  it('a thrown speak() is a failure, not a crash', async () => {
    audio.speak.mockRejectedValueOnce(new Error('boom'));
    const { result } = renderHook(() => useHeardGate());
    await act(() => result.current.play('x'));
    expect(result.current.status).toBe('failed');
  });

  it('a superseded first play leaves the verdict to the newer one', async () => {
    let resolveFirst: (v: string) => void = () => {};
    audio.speak.mockImplementationOnce(() => new Promise<string>((r) => (resolveFirst = r)));
    const { result } = renderHook(() => useHeardGate());
    let p1!: Promise<string>;
    act(() => {
      p1 = result.current.play('x');
    });
    expect(result.current.status).toBe('playing');
    await act(() => result.current.play('x')); // second, resolves 'azure'
    await act(async () => {
      resolveFirst('superseded');
      await p1;
    });
    expect(result.current.status).toBe('played');
  });

  it('a reset re-locks, and a play resolving after the reset is ignored', async () => {
    let resolveLate: (v: string) => void = () => {};
    audio.speak.mockImplementationOnce(() => new Promise<string>((r) => (resolveLate = r)));
    const { result } = renderHook(() => useHeardGate());
    let p!: Promise<string>;
    act(() => {
      p = result.current.play('x');
    });
    act(() => result.current.reset());
    expect(result.current.status).toBe('idle');
    await act(async () => {
      resolveLate('azure');
      await p;
    });
    // The item advanced before the old recording finished — it must not unlock the new one.
    expect(result.current.status).toBe('idle');
    expect(result.current.heard).toBe(false);
  });

  it('a replay after a success stays played while it plays (no flicker back to locked)', async () => {
    const { result } = renderHook(() => useHeardGate());
    await act(() => result.current.play('x'));
    let resolveReplay: (v: string) => void = () => {};
    audio.speak.mockImplementationOnce(() => new Promise<string>((r) => (resolveReplay = r)));
    let p!: Promise<string>;
    act(() => {
      p = result.current.play('x');
    });
    expect(result.current.heard).toBe(true);
    await act(async () => {
      resolveReplay('azure');
      await p;
    });
    expect(result.current.heard).toBe(true);
  });
});
