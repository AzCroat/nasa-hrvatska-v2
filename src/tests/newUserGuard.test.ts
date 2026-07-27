// src/tests/newUserGuard.test.ts
//
// Guards the "returning login re-shown the new-user popup / data wiped" bug.
//
// Two pure decisions back the fix:
//   1. isEstablishedAccountSignal — a SERVER snapshot whose document EXISTS means
//      this login already has an account (even before its progress blob hydrates),
//      so the one-time placement/onboarding popup must be suppressed.
//   2. isEmptyProgressSnapshot — a snapshot with no real progress must never be
//      written, so a briefly-misclassified device can't overwrite the cloud blob.
import { describe, it, expect } from 'vitest';
import { isEstablishedAccountSignal } from '../hooks/useSyncManager';
import { isEmptyProgressSnapshot } from '../lib/firebase';

describe('isEstablishedAccountSignal — suppress onboarding for an existing account', () => {
  it('is TRUE for a server emission whose document exists (with or without a blob)', () => {
    // This is the case the old code got wrong: an existing account whose progress
    // blob had not yet loaded (delta-only doc / transient blob-less read).
    expect(isEstablishedAccountSignal({ fromCache: false, exists: true })).toBe(true);
  });

  it('is FALSE for a genuinely new account (server confirms no document)', () => {
    // First-run onboarding must still fire exactly once.
    expect(isEstablishedAccountSignal({ fromCache: false, exists: false })).toBe(false);
  });

  it('is FALSE for any cache emission (stale/empty on a fresh or Safari/iPad device)', () => {
    expect(isEstablishedAccountSignal({ fromCache: true, exists: true })).toBe(false);
    expect(isEstablishedAccountSignal({ fromCache: true, exists: false })).toBe(false);
  });
});

describe('isEmptyProgressSnapshot — the wipe guard', () => {
  it('treats a defaults-only / brand-new snapshot as empty (must NOT be persisted)', () => {
    expect(isEmptyProgressSnapshot({ stats: { xp: 0, lc: 0, gc: 0, sp: 0, vs: [] } })).toBe(true);
    expect(isEmptyProgressSnapshot({})).toBe(true);
    expect(isEmptyProgressSnapshot({ stats: {}, favs: [], journal: [] })).toBe(true);
  });

  it('IGNORES the onboarded flag — an un-hydrated snapshot is still empty even if flagged established', () => {
    // Critical: marking the account established (cross-device fix) must not let an
    // empty, un-hydrated snapshot slip through the guard and clobber the blob.
    expect(isEmptyProgressSnapshot({ onboarded: true, stats: { xp: 0, lc: 0, vs: [] } })).toBe(
      true,
    );
  });

  it('treats any real progress as non-empty (safe to persist)', () => {
    expect(isEmptyProgressSnapshot({ stats: { xp: 50 } })).toBe(false);
    expect(isEmptyProgressSnapshot({ stats: { lc: 1 } })).toBe(false);
    expect(isEmptyProgressSnapshot({ stats: { gc: 1 } })).toBe(false);
    expect(isEmptyProgressSnapshot({ stats: { sp: 1 } })).toBe(false);
    expect(isEmptyProgressSnapshot({ stats: { vs: ['screenKey'] } })).toBe(false);
    expect(isEmptyProgressSnapshot({ stats: {}, favs: [{ hr: 'kruh' }] })).toBe(false);
    expect(isEmptyProgressSnapshot({ stats: {}, journal: [{ word: 'kruh' }] })).toBe(false);
  });

  it('reads the legacy `st` alias as well as `stats`', () => {
    expect(isEmptyProgressSnapshot({ st: { xp: 100 } })).toBe(false);
    expect(isEmptyProgressSnapshot({ st: { xp: 0, vs: [] } })).toBe(true);
  });
});
