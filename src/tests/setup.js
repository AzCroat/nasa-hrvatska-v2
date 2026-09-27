import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';

// ── EVERY TEST STARTS WITH EMPTY STORAGE ─────────────────────────────────────
// Added 2026-09-26. Until now the polyfill below was created once per test FILE and every
// `it` in that file inherited whatever the previous one had written. That was invisible for
// as long as nothing in production kept per-day state keyed on an exercise — and it stopped
// being invisible the moment `completeExercise` began marking a daily quest at most once
// per exercise per day: 38 tests across 21 files then failed asserting `markQuest` fired,
// because an EARLIER test in the same file had already completed that exercise "today".
//
// The tests were right and the isolation was missing. Clearing here rather than in 21
// files also means the next piece of per-day state cannot re-open the same hole.
beforeEach(() => {
  try {
    localStorage.clear();
    sessionStorage.clear();
  } catch {
    /* a storage-less environment is fine; the polyfill below covers jsdom */
  }
});

// ── localStorage polyfill for jsdom 28+ ──────────────────────────────────────
// jsdom 28 removed built-in localStorage/sessionStorage. Provide a simple
// in-memory implementation that supports all standard Web Storage methods.
function createStorageMock() {
  let store = {};
  return {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => {
      store[k] = String(v);
    },
    removeItem: (k) => {
      delete store[k];
    },
    clear: () => {
      store = {};
    },
    key: (i) => Object.keys(store)[i] ?? null,
    get length() {
      return Object.keys(store).length;
    },
  };
}

if (typeof localStorage === 'undefined' || typeof localStorage.getItem !== 'function') {
  Object.defineProperty(globalThis, 'localStorage', {
    value: createStorageMock(),
    writable: true,
    configurable: true,
  });
}

if (typeof sessionStorage === 'undefined' || typeof sessionStorage.getItem !== 'function') {
  Object.defineProperty(globalThis, 'sessionStorage', {
    value: createStorageMock(),
    writable: true,
    configurable: true,
  });
}
