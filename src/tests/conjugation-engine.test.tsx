// src/tests/conjugation-engine.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// Importing the component transitively pulls in '../../data' (which loads Firebase).
// Mock Firebase the same way the other component tests do.
vi.mock('firebase/app', () => ({ initializeApp: vi.fn(() => ({})), getApps: vi.fn(() => []) }));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  setPersistence: vi.fn(() => Promise.resolve()),
  browserLocalPersistence: {},
  onAuthStateChanged: vi.fn(() => () => {}),
  initializeAuth: vi.fn(() => ({})),
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
  GoogleAuthProvider: vi.fn(() => ({})),
}));
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  limit: vi.fn(),
  orderBy: vi.fn(),
}));

const markQuestMock = vi.hoisted(() => vi.fn());
vi.mock('../lib/quests', () => ({ markQuest: (...a: unknown[]) => markQuestMock(...a) }));

import ConjugationDrillEngine from '../components/practice/ConjugationDrillEngine';
import type { ConjVerb, ConjCell } from '../lib/conjugation/types';

const pisati: ConjVerb = {
  inf: 'pisati',
  en: 'to write',
  aspect: 'impf',
  pair: null,
  klass: 'a-em',
  cefr: 'A1',
  irregular: false,
  present: ['pišem', 'pišeš', 'piše', 'pišemo', 'pišete', 'pišu'],
};
const cells: ConjCell[] = [{ inf: 'pisati', formType: 'present', personIdx: 0 }];

describe('ConjugationDrillEngine', () => {
  it('shows the prompt and 4 options, scores a correct answer', () => {
    const onComplete = vi.fn();
    render(
      <ConjugationDrillEngine
        verbs={[pisati]}
        cells={cells}
        onComplete={onComplete}
        award={vi.fn()}
        goBack={vi.fn()}
      />,
    );
    // prompt shows infinitive + person
    expect(screen.getByText(/pisati/)).toBeTruthy();
    // 4 options rendered
    const opts = screen.getAllByTestId('conj-option');
    expect(opts).toHaveLength(4);
    // click the correct one
    const correct = opts.find((o) => o.textContent?.trim() === 'pišem')!;
    fireEvent.click(correct);
    expect(screen.getByTestId('conj-feedback').textContent).toMatch(/✓|Correct|Točno/);
  });

  /**
   * A ZERO-CELL ROUND MUST NOT PAY, AND MUST NOT STRAND A SESSION (2026-09-26).
   *
   * `cells.length === 0` reaches the results branch on MOUNT, where the credit is
   * `score * 2 + 10` — 10 XP and the grammar quest for an unplayed round (NEVER-DO 14).
   * The state is unreachable through both production callers (`ConjugationSessionDrill`
   * returns early on `cells.length === 0`; `ConjugationLab` only sets `activeCells`
   * behind `if (set.length)` / `if (cells.length)`), which is why the guard needs THIS
   * test: without it the clause survives its own mutation and is decoration by this
   * repo's own standard.
   *
   * `onComplete` is asserted to fire ANYWAY, because the flow signal is not credit —
   * gating it too would let an empty round strand Today's Session at N-1/N (sweep 119).
   */
  it('an empty cell list credits nothing, and still reports completion', () => {
    const onComplete = vi.fn();
    const award = vi.fn();
    render(
      <ConjugationDrillEngine
        verbs={[pisati]}
        cells={[]}
        onComplete={onComplete}
        award={award}
        goBack={vi.fn()}
      />,
    );
    expect(award, 'an unplayed round paid XP').not.toHaveBeenCalled();
    expect(markQuestMock, 'an unplayed round marked the grammar quest').not.toHaveBeenCalled();
    // The floor that stops the two assertions above passing vacuously: the results
    // branch really was reached, so there WAS a moment where credit could have fired.
    expect(onComplete).toHaveBeenCalledWith(0, 0);
  });
});
