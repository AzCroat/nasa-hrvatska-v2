/**
 * regionVocabNote.test.tsx — the screen rendered a field the data has never had.
 *
 * `RegionScreen` drew each dialect word's explanatory line from `v.tip`.
 * Measured across the REAL payload: **81 vocabulary rows, 10 regions, 81 with
 * `note`, 0 with `tip`.** So every one of those lines — "šoht: the iconic steel
 * tower above a mine shaft, Labin's industrial symbol" — was dropped, on every
 * region page, for the life of the screen.
 *
 * IT DOES NOT CRASH, WHICH IS WHY IT SURVIVED. `v.tip` is `undefined`, the
 * `&&` short-circuits, and the card renders one line shorter than it should.
 * No error boundary fires, nothing reaches Sentry, no test fails. That is a
 * worse hiding place than `ScenesScreen`'s `scene.qs.map`, which at least
 * threw.
 *
 * The guard is a RENDER against the REAL payload rather than a source pin,
 * because the failure is a name agreeing with nothing: a pin on `v.note` would
 * pass just as happily if the data were renamed underneath it. Both directions
 * are covered — the screen reverting to `tip`, and the data losing `note`.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
// @ts-expect-error - JS module without types
import { REGIONS } from '../../functions/api/content/_data/core.js';

vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: { REGIONS }, loading: false, error: null }),
}));
vi.mock('../lib/audio.js', () => ({
  speak: vi.fn(() => Promise.resolve('azure')),
  stopAudio: vi.fn(),
  unlockAudio: vi.fn(),
}));

import RegionScreen from '../components/croatia/RegionScreen';

type Row = { hr: string; en: string; note?: string; tip?: string };
const R = REGIONS as Record<string, { vocab?: Row[] }>;
const regionKeys = Object.keys(R);

/**
 * The vocabulary list lives under the Language tab. The button renders
 * `{icon} {label}`, so its text is split across nodes and an exact `getByText`
 * finds nothing — query by ROLE and accessible name, which is what a learner
 * actually clicks.
 */
function openVocab() {
  fireEvent.click(screen.getByRole('button', { name: /Language/ }));
}

describe('the region vocabulary note reaches the learner', () => {
  it('the payload is real and carries notes, not tips — anti-vacuity', () => {
    // If this derivation stops finding rows, every assertion below passes
    // trivially. MEASURED 2026-09-23: 10 regions, 81 rows, 81 notes, 0 tips.
    const rows = regionKeys.flatMap((k) => R[k]!.vocab ?? []);
    expect(regionKeys.length).toBeGreaterThanOrEqual(10);
    expect(rows.length).toBeGreaterThanOrEqual(81);
    expect(rows.filter((r) => r.note).length).toBe(rows.length);
    expect(
      rows.filter((r) => r.tip).length,
      'a row grew a `tip` — the screen reads `note`, so it would be invisible',
    ).toBe(0);
  });

  it.each(regionKeys)('%s renders every row’s note', (key) => {
    const rows = R[key]!.vocab ?? [];
    expect(rows.length).toBeGreaterThan(0);
    render(<RegionScreen regionKey={key} goBack={vi.fn()} />);
    openVocab();
    for (const row of rows) {
      // The Croatian headword proves we are looking at the right card…
      expect(screen.getAllByText(row.hr).length).toBeGreaterThan(0);
      // …and the note is the line that was missing.
      expect(
        screen.getAllByText(row.note!).length,
        `${key}: "${row.hr}" renders without its note`,
      ).toBeGreaterThan(0);
    }
  });
});
