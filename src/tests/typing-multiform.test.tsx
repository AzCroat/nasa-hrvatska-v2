/**
 * typing-multiform.test.tsx — TypingScreen must accept ANY of the several
 * Croatian forms a vocabulary entry lists in one string joined by " / "
 * (e.g. "dva / dvije", "on / ona"). Typing a single valid form previously
 * scored 'wrong' and recorded a false SRS lapse; these tests lock in the fix.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// ── Firebase mock ─────────────────────────────────────────────────────────────
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

vi.mock('../context/StatsContext', () => ({
  useStats: vi.fn(() => ({
    stats: { vs: [] as string[], gc: 0 },
    setStats: vi.fn(),
    writeDelta: vi.fn(),
  })),
}));

vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/adaptive.js', () => ({ recordTopicResult: vi.fn() }));

// A single multi-form word so it is always pool[0]. srMark is spied so we can
// assert the scheduling grade the component records.
const srMarkMock = vi.hoisted(() => vi.fn());
vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    srMark: srMarkMock,
    speak: vi.fn(),
    sh: (arr: unknown[]) => [...arr],
    getDueReviews: vi.fn(() => []),
    V: { basic: [['dva / dvije', 'two']] },
    Bar: () => React.createElement('div', { 'data-testid': 'progress-bar' }),
  };
});

vi.mock('../hooks/useContent', () => ({
  useContent: () => ({
    content: {
      V: { basic: [['dva / dvije', 'two']] },
      COUNTRIES: [],
      PROFESSIONS: [],
      WEATHER: {},
      CLOTHES: {},
      BODYDESC: [],
      TECH_VOC: {},
      BUREAUCRATIC: {},
      PROVERBS: [],
      IDIOMS: [],
      BRZALICE: [],
      HISTORY: {},
      EVENTS: [],
      KINGS: {},
      REGIONS: {},
      DIALECTS: {},
      CROATIAN_CITIES: [],
      FOODORDER: {},
      TRANSPORT: [],
      GROCERY: {},
      RECIPES: [],
      PRACTICAL: {},
      SCENES: [],
      LEVEL_NARRATIVE: {},
      SHADOWING: [],
    },
    loading: false,
    error: null,
    reload: () => {},
  }),
}));

import TypingScreen from '../components/practice/TypingScreen';

function renderScreen() {
  return render(<TypingScreen goBack={vi.fn()} award={vi.fn()} />);
}
function typeAnswer(value: string) {
  fireEvent.change(screen.getByPlaceholderText('Type Croatian…'), { target: { value } });
}

describe('TypingScreen — multi-form ("dva / dvije") answers', () => {
  it('accepts the first form (dva) as Perfect and marks SRS correct', () => {
    srMarkMock.mockClear();
    renderScreen();
    typeAnswer('dva');
    fireEvent.click(screen.getByText('Check Answer'));
    expect(screen.getByText('✅ Perfect!')).toBeTruthy();
    // srMark(word, isCorrect=true, timeMs)
    expect(srMarkMock).toHaveBeenCalledWith('dva / dvije', true, expect.any(Number));
  });

  it('accepts the second form (dvije) as Perfect', () => {
    srMarkMock.mockClear();
    renderScreen();
    typeAnswer('dvije');
    fireEvent.click(screen.getByText('Check Answer'));
    expect(screen.getByText('✅ Perfect!')).toBeTruthy();
    expect(srMarkMock).toHaveBeenCalledWith('dva / dvije', true, expect.any(Number));
  });

  it('still marks a genuinely wrong answer wrong (and records a lapse)', () => {
    srMarkMock.mockClear();
    renderScreen();
    typeAnswer('pet'); // "five" — not one of the accepted forms
    fireEvent.click(screen.getByText('Check Answer'));
    expect(screen.getByText('❌ Not quite')).toBeTruthy();
    expect(srMarkMock).toHaveBeenCalledWith('dva / dvije', false, expect.any(Number));
  });
});
