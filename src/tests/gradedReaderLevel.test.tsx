/**
 * gradedReaderLevel.test.tsx — the Graded Reader opens on the learner's level
 * (2026-09-04), which is what lets its pool entry carry `adaptive: true`.
 *
 * The list used to open on All (177 stories, A1 first), so the daily session's
 * reading slot ranked the app's richest reading input as an A1 activity — three
 * difficulty tiers away from a B2 learner. The filter row is unchanged.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import React from 'react';

vi.mock('../lib/contentClient', () => ({
  getStoryCatalog: vi.fn(async () => [
    {
      id: 'gs_a1_x',
      level: 'A1',
      title: 'Prvi dan',
      titleEn: 'First day',
      focus: '',
      icon: '📖',
      duration: 3,
      etag: 'a',
    },
    {
      id: 'gs_b2_x',
      level: 'B2',
      title: 'Rasprava',
      titleEn: 'Debate',
      focus: '',
      icon: '📖',
      duration: 6,
      etag: 'b',
    },
  ]),
  getStory: vi.fn(async () => null),
}));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: {}, setStats: vi.fn(), writeDelta: vi.fn() }),
}));
vi.mock('../data', () => ({ speak: vi.fn() }));

import GradedInputScreen from '../components/learn/GradedInputScreen';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';

async function renderList() {
  await act(async () => {
    render(<GradedInputScreen goBack={vi.fn()} award={vi.fn()} />);
  });
}

beforeEach(() => localStorage.clear());

describe('default level filter', () => {
  it('a B2 learner opens on B2 — the A1 story is filtered out until they tap All', async () => {
    localStorage.setItem('nh_level', 'B2');
    await renderList();
    expect(screen.getByTestId('graded-story-card-gs_b2_x')).toBeInTheDocument();
    expect(screen.queryByTestId('graded-story-card-gs_a1_x')).toBeNull();
  });

  it('a new learner (no level anywhere) opens on A1', async () => {
    await renderList();
    expect(screen.getByTestId('graded-story-card-gs_a1_x')).toBeInTheDocument();
    expect(screen.queryByTestId('graded-story-card-gs_b2_x')).toBeNull();
  });

  it('a level with no stories falls back to All rather than an empty list', async () => {
    localStorage.setItem('nh_level', 'C2');
    await renderList();
    expect(screen.getByTestId('graded-story-card-gs_a1_x')).toBeInTheDocument();
    expect(screen.getByTestId('graded-story-card-gs_b2_x')).toBeInTheDocument();
  });

  it('the pool entry is adaptive on the strength of this default', () => {
    expect(CEFR_EXERCISE_POOL.find((e) => e.id === 'gradedreader')!.adaptive).toBe(true);
  });
});
