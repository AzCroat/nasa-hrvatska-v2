/**
 * useDaily-boot-guard.test.ts — regression for the 2026-07-15 dead-end audit's
 * confirmed boot-crash finding.
 *
 * useDaily() is called unconditionally in App's render body, and both of its
 * useState initializers (loadDailyAnswered / loadDailySelected) read the
 * 'dcDay3' localStorage key. That read previously used raw
 * localStorage.getItem OUTSIDE any try/catch — in browser profiles where
 * storage access THROWS a SecurityError (cookies/site-data blocked for the
 * origin, supervised/child profiles, sandboxed webviews) it crashed App's
 * first render. The top-level ErrorBoundary's only recovery is "Reload App",
 * which deterministically re-crashed: a permanent boot loop with no way out.
 * Same failure class as the main.tsx/usePreferences guards added in #196 —
 * useDaily was the remaining unguarded sibling.
 *
 * The fix routes the reads through safeStorage.lsGet. This test locks in that
 * the hook initialises to safe defaults instead of throwing when storage is
 * unavailable.
 */
import { describe, it, expect, afterEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDaily } from '../hooks/useDaily';

describe('useDaily — storage-restricted profiles must not crash boot', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('initialises to defaults when localStorage.getItem throws SecurityError', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    });
    // Pre-fix this threw synchronously out of the useState initializer,
    // crashing the root render.
    const { result } = renderHook(() => useDaily());
    expect(result.current.dchlA).toEqual([false, false, false]);
    expect(result.current.dchlSl).toEqual(['', '', '']);
  });

  it('still restores persisted state when storage works', () => {
    const today =
      new Date().getFullYear() +
      '-' +
      String(new Date().getMonth() + 1).padStart(2, '0') +
      '-' +
      String(new Date().getDate()).padStart(2, '0');
    localStorage.setItem(
      'dcDay3',
      JSON.stringify({ day: today, answered: [true, false, true], selected: ['a', 'b', 'c'] }),
    );
    const { result } = renderHook(() => useDaily());
    expect(result.current.dchlA).toEqual([true, false, true]);
    expect(result.current.dchlSl).toEqual(['a', 'b', 'c']);
  });
});
