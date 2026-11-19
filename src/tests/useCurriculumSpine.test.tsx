// A course screen opened COLD (a refresh on /unittest, /unitproduction or /levelreview) has an empty
// spine cache. The screens used to read it once at mount and say "could not be loaded" for ever;
// this hook reads, fetches when empty, and re-renders when the spine lands (2026-11-19).
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

const fetchSpine = vi.fn();
vi.mock('../lib/contentClient', () => ({ getCurriculumSpine: () => fetchSpine() }));

import { useCurriculumSpine } from '../hooks/useCurriculumSpine';
import { writeCurriculumSpine } from '../lib/curriculumProgress';

const ENTRY = {
  id: 'alphabet',
  level: 'A1',
  order: 1,
  prerequisites: [],
  objectives: ['x'],
  title: 'A',
};

beforeEach(() => {
  localStorage.clear();
  fetchSpine.mockReset();
});

describe('useCurriculumSpine', () => {
  it('returns a cached spine at once and does not fetch', () => {
    writeCurriculumSpine([ENTRY]);
    const { result } = renderHook(() => useCurriculumSpine());
    expect(result.current.spine).toHaveLength(1);
    expect(result.current.failed).toBe(false);
    expect(fetchSpine).not.toHaveBeenCalled();
  });

  it('on a cold open, starts empty and NOT failed, then fills when the spine lands', async () => {
    fetchSpine.mockImplementation(async () => {
      await new Promise((r) => setTimeout(r, 20)); // the network takes a moment
      writeCurriculumSpine([ENTRY]);
      return [ENTRY];
    });
    const { result } = renderHook(() => useCurriculumSpine());
    expect(result.current.spine).toHaveLength(0);
    expect(result.current.failed).toBe(false);
    await waitFor(() => expect(result.current.spine).toHaveLength(1));
    expect(result.current.failed).toBe(false);
  });

  it('reports failed only when the fetch itself failed', async () => {
    fetchSpine.mockRejectedValue(new Error('offline'));
    const { result } = renderHook(() => useCurriculumSpine());
    await waitFor(() => expect(result.current.failed).toBe(true));
    expect(result.current.spine).toHaveLength(0);
  });
});
