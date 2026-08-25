// src/lib/aiText.ts
//
// Coerce a model-returned value that is DECLARED as a string into one.
//
// THE CRASH THIS EXISTS FOR (Sentry, 2026-08-25): "Objects are not valid as a
// React child (found: object with keys {hr, en})". Several prompts ask for a
// scalar Croatian string — /api/explain-error's `example` is "one short example
// sentence in Croatian" — while other fields in the very same schema are
// {hr, en} pairs. A model that returns the bilingual shape for the scalar field
// is not malformed JSON and not a failed request: it parses, it type-checks
// (TypeScript's `string` is compile-time only), and it reaches JSX, where React
// throws and the screen dies.
//
// The lesson is narrower than "validate everything": a value that came from a
// model and is rendered DIRECTLY must be coerced at the boundary it enters,
// because every type annotation between there and the JSX is a comment.

/**
 * Return `value` as a string suitable for rendering.
 *
 *   'text'            -> 'text'
 *   { hr, en }        -> 'hr / en'   (both halves kept — the learner loses nothing)
 *   { hr } | { en }   -> that half
 *   number | boolean  -> String(value)
 *   anything else     -> ''          (render nothing rather than "[object Object]")
 *
 * The bilingual join mirrors normalizeArticle in CroatianNewsScreen, which
 * solved the same problem for /api/news. Same shape, same separator, so the two
 * do not drift into disagreeing about what a {hr,en} pair looks like on screen.
 */
export function coerceAiText(value: unknown): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const o = value as Record<string, unknown>;
    const parts = [o.hr, o.en].filter((p): p is string => typeof p === 'string' && p.length > 0);
    if (parts.length > 0) return parts.join(' / ');
    // An object with neither half is not something we can show. '' is honest;
    // "[object Object]" is what React would have rendered had it not thrown.
    return '';
  }
  return '';
}
