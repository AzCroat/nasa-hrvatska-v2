import { describe, it, expect } from 'vitest';
import { normalizePersonaKey } from '../lib/personaKey';

// Regression cover for "I picked Ivo and got Maja".
//
// `maja_persona` had two encodings in circulation and the sync round-trip was
// broken in both directions:
//   - upload  JSON.parse('cabbie') throws  -> persona synced as null, always
//   - download JSON.stringify(v) -> '"cabbie"' -> PERSONA_CONFIG lookup misses
//                                             -> silently falls back to 'teacher'
// Both encodings exist in real users' storage, so the reader must accept either
// while the writer emits the raw form.

describe('normalizePersonaKey', () => {
  it('passes the raw form through — what PersonaScreen and partners.ts write', () => {
    expect(normalizePersonaKey('cabbie')).toBe('cabbie');
    expect(normalizePersonaKey('teacher')).toBe('teacher');
  });

  it('decodes the legacy JSON-encoded form written by applyRemoteProgress', () => {
    // This is the exact value that made a learner who chose Ivo get Maja.
    expect(normalizePersonaKey('"cabbie"')).toBe('cabbie');
    expect(normalizePersonaKey('"teacher"')).toBe('teacher');
  });

  it('is idempotent, so a value can be re-normalised safely', () => {
    expect(normalizePersonaKey(normalizePersonaKey('"cabbie"'))).toBe('cabbie');
  });

  it('rejects empty, absent and null-ish values rather than returning a bad key', () => {
    for (const v of [null, undefined, '', '   ', 'null', 'undefined']) {
      expect(normalizePersonaKey(v as string | null | undefined)).toBeNull();
    }
  });

  it('rejects malformed JSON and non-string payloads instead of throwing', () => {
    // A bare unterminated quote must not escape as an exception — this runs
    // inside progressSnapshot, on the sync path.
    expect(normalizePersonaKey('"cabbie')).toBeNull();
    expect(normalizePersonaKey('"')).toBeNull();
    expect(normalizePersonaKey('123')).toBe('123'); // raw, not JSON — caller validates against PERSONA_CONFIG
    expect(normalizePersonaKey('{"k":1}')).toBe('{"k":1}');
  });

  it('every real persona key survives both encodings', () => {
    for (const key of ['teacher', 'fisherman', 'secretary', 'baka', 'cabbie']) {
      expect(normalizePersonaKey(key)).toBe(key);
      expect(normalizePersonaKey(JSON.stringify(key))).toBe(key);
    }
  });
});
