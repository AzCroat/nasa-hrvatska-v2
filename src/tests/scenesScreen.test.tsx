/**
 * scenesScreen.test.tsx — the "Describe the Scene" screen renders (Sentry
 * 0d68c47c, 2026-09-05: `undefined is not an object (evaluating 'i.qs.map')`
 * on every open of /scenes).
 *
 * THE DEFECT: two datasets share the name SCENES. The payload key
 * `content.SCENES` (/api/content/core ← vocabScenes.js) is the illustrated
 * tap-a-word set — `items`, no `qs`. The screen's own data is the client-local
 * scene-description set (`qs` per scene), which a comment claimed had "moved
 * server-side". It never had. The screen read the payload on that comment's
 * authority and threw from the day it was created; a boundary swallowed it and
 * Sentry — wired only this week — is what surfaced it.
 *
 * Pinned in three directions: the screen renders every scene and question from
 * the real data; the local data has the shape the screen needs; and the server
 * dataset STILL lacks that shape, so the name collision the fix guards against
 * is asserted rather than remembered.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';

vi.mock('../data', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, speak: vi.fn() };
});

import ScenesScreen from '../components/practice/exercises/ScenesScreen';
import { DESCRIBE_SCENES } from '../data';
import { SCENES as SERVER_SCENES } from '../../functions/api/content/_data/vocabScenes.js';

type Scene = { title: string; desc: string; qs: { q: string; en: string }[] };
const SCENES = DESCRIBE_SCENES as Scene[];

describe('the data the screen renders', () => {
  it('is the scene-description set: every scene carries title, desc and qs', () => {
    expect(SCENES.length).toBeGreaterThanOrEqual(4);
    for (const s of SCENES) {
      expect(typeof s.title).toBe('string');
      expect(typeof s.desc).toBe('string');
      expect(Array.isArray(s.qs)).toBe(true);
      expect(s.qs.length).toBeGreaterThan(0);
      for (const q of s.qs) {
        expect(typeof q.q).toBe('string');
        expect(typeof q.en).toBe('string');
      }
    }
  });

  it('the payload SCENES is a DIFFERENT dataset with no qs — the collision this guards', () => {
    // If the server set ever gains `qs`, this collision stops being a trap and the
    // note in data/content.tsx should be revisited; until then the screen must not
    // read it.
    expect((SERVER_SCENES as { qs?: unknown }[]).every((s) => s.qs === undefined)).toBe(true);
    expect((SERVER_SCENES as { items?: unknown[] }[]).every((s) => Array.isArray(s.items))).toBe(
      true,
    );
  });
});

describe('ScenesScreen', () => {
  it('renders every scene and every question without throwing', () => {
    render(<ScenesScreen goBack={vi.fn()} />);
    for (const s of SCENES) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      for (const q of s.qs)
        // A question can recur across scenes ("Što djeca rade?"), so count, don't get.
        expect(screen.getAllByLabelText(`Play audio for ${q.q}`).length).toBeGreaterThanOrEqual(1);
    }
    const total = SCENES.reduce((n, s) => n + s.qs.length, 0);
    expect(screen.getAllByRole('button', { name: /Play audio for/ })).toHaveLength(total);
  });

  it('does not read the payload SCENES (source pin — the exact line that crashed)', () => {
    const src = readFileSync('src/components/practice/exercises/ScenesScreen.tsx', 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    expect(src).not.toMatch(/content\.SCENES/);
    expect(src).not.toMatch(/useContent/);
    expect(src).toMatch(/DESCRIBE_SCENES/);
  });
});
