// src/lib/personaKey.ts
//
// One reader/writer contract for the `maja_persona` localStorage key.
//
// The key had two incompatible formats in circulation, and the round-trip was
// broken in BOTH directions:
//
//   PersonaScreen / partners.ts  ->  localStorage.setItem('maja_persona', 'cabbie')
//                                    i.e. a RAW string
//   applyRemoteProgress          ->  _safeSet('maja_persona', JSON.stringify(v))
//                                    i.e. '"cabbie"', WITH quotes
//
// Upload was broken: progressSnapshot did JSON.parse(lsGet('maja_persona')).
// JSON.parse('cabbie') THROWS — 'cabbie' is not valid JSON — so the catch
// returned null and the user's chosen persona was never synced at all. Only the
// quoted form parses, and nothing on the client ever wrote the quoted form, so
// in practice the field always synced as null.
//
// Download was broken the other way: a value that did arrive was written back
// quoted, and getPersona() looks the raw string up in PERSONA_CONFIG. With
// '"cabbie"' that lookup misses and it falls back to 'teacher' — so a learner
// who chose Ivo silently got Maja instead, and PersonaScreen's
// `PERSONAS.find(p => p.key === saved)` restore matched nothing, showing no
// selection at all.
//
// Both encodings exist in real users' storage right now, so the reader has to
// accept either. The writer emits the raw form, which is what every in-app
// writer already produces and what PERSONA_CONFIG is keyed by.

/**
 * Normalise a stored `maja_persona` value to its raw key.
 *
 * Accepts the raw form ('cabbie') and the legacy JSON-encoded form ('"cabbie"'),
 * returning null for anything empty, malformed, or non-string.
 */
export function normalizePersonaKey(raw: string | null | undefined): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed || trimmed === 'null' || trimmed === 'undefined') return null;
  // Legacy JSON-encoded form. JSON.parse is used rather than stripping quotes so
  // an escaped value decodes correctly; a bare word throws and falls through to
  // being treated as already-raw.
  if (trimmed.startsWith('"')) {
    try {
      const parsed: unknown = JSON.parse(trimmed);
      return typeof parsed === 'string' && parsed ? parsed : null;
    } catch {
      return null;
    }
  }
  return trimmed;
}
