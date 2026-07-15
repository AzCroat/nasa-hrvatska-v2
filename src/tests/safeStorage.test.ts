// src/tests/safeStorage.test.ts
//
// Guards the app-boot path against a hard white-screen in storage-restricted
// browser profiles. localStorage access throws a SecurityError (it does NOT
// simply return null) when cookies/site-data are blocked for the origin, and in
// some supervised / managed (e.g. Family Link child) profiles. An unguarded
// localStorage call during boot crashes React before it mounts — a permanent
// blank page. These helpers must swallow that failure and degrade to defaults.
import { describe, it, expect, afterEach, vi } from 'vitest';
import { lsGet, lsSet, lsRemove } from '../lib/safeStorage';

describe('safeStorage — survives storage that throws', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('lsGet returns the stored value when storage works', () => {
    localStorage.setItem('k', 'v');
    expect(lsGet('k')).toBe('v');
  });

  it('lsGet returns null for a missing key', () => {
    expect(lsGet('does-not-exist')).toBeNull();
  });

  it('lsGet returns null (does not throw) when getItem throws SecurityError', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    });
    expect(() => lsGet('darkMode')).not.toThrow();
    expect(lsGet('darkMode')).toBeNull();
  });

  it('lsSet does not throw when setItem throws', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    });
    expect(() => lsSet('darkMode', 'true')).not.toThrow();
  });

  it('lsRemove does not throw when removeItem throws', () => {
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError');
    });
    expect(() => lsRemove('darkMode')).not.toThrow();
  });
});
