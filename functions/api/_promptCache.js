// functions/api/_promptCache.js
//
// PROMPT VERSIONS FOR CACHE-SERVED CONTENT (2026-08-23).
//
// Every live AI endpoint tags its 200 with the prompt that produced it
// (_promptRegistry.js). Three endpoints could not: /api/daily-culture and
// /api/news serve almost every request from KV, replaying text generated hours
// earlier. Tagging those with the CURRENT version would be worse than not
// tagging at all — it would state, in a machine-readable header the middleware
// records, that a body was produced by a prompt it never saw. Editing a
// template would then appear to change output that was written before the edit.
//
// The fix is to store the tag BESIDE the body it produced, and replay that.
//
// WHY KV METADATA RATHER THAN AN ENVELOPE. The obvious shape is to wrap the
// body: `{ tag, body }`. It works, but it makes every cache hit parse and
// re-serialise a payload that today is passed through as an opaque string, and
// it breaks every entry already in KV. Metadata rides along with the same read,
// leaves the stored value BYTE-IDENTICAL to what is there now, and gives
// pre-existing entries the correct behaviour for free: no metadata, no tag, no
// header — which is exactly the honest answer for a body generated before this
// existed.

/**
 * Metadata to attach to a cache write, naming the prompt that produced the
 * body. Spread into the `put` options. Returns {} for an absent prompt, so a
 * caller can write untagged content (a curated fallback, say) without
 * branching — and untagged is the correct state for content no prompt produced.
 */
export function promptCacheMetadata(prompt) {
  return prompt && prompt.tag ? { metadata: { promptTag: prompt.tag } } : {};
}

/**
 * Read a cached body together with the prompt tag that produced it.
 *
 * Returns `{ value, tag }`. `value` is the raw stored string, or null on a miss
 * OR any failure — callers already treat a miss as "generate", and an
 * observability read must never be the reason content stops being served.
 *
 * `getWithMetadata` is standard KV, but the fallback to plain `get` is not
 * defensive padding: the KV doubles used across this codebase's tests, and the
 * PUSH_SUBSCRIPTIONS binding this code falls back to, are not all guaranteed to
 * implement it. Losing the tag degrades to an untagged response; losing the
 * BODY would cost a Claude call on every request.
 */
export async function readCachedWithPromptTag(kv, key) {
  if (!kv) return { value: null, tag: null };
  try {
    if (typeof kv.getWithMetadata === 'function') {
      const hit = await kv.getWithMetadata(key);
      const value = hit?.value ?? null;
      const tag = hit?.metadata?.promptTag ?? null;
      return { value, tag: typeof tag === 'string' ? tag : null };
    }
    return { value: (await kv.get(key)) ?? null, tag: null };
  } catch {
    return { value: null, tag: null };
  }
}
