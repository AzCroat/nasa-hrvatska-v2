/**
 * exerciseData — lazy loader for the bundled exercise/vocab data barrel.
 *
 * Extracted from useScreenLauncher (max-lines). The single retry matters:
 * the data barrel is a lazy Vite chunk, and a chunk request can fail
 * transiently (flaky connection) or permanently for this tab (it predates a
 * deploy, so the hashed chunk URL is gone). The retry heals the former; the
 * launcher's catch routes the latter into chunkErrors.reloadWithCachePurge.
 *
 * NOTE: the barrel does NOT contain the vocabulary map V — see _getVocab below.
 */
import { reportError } from './errorReporter';
import { getContent } from './contentClient';
import type { VocabSource } from './vocabPool';

let _dataCache: Record<string, unknown> | null = null;

export async function _getData(): Promise<Record<string, unknown>> {
  if (!_dataCache) {
    try {
      _dataCache = (await import('../data')) as Record<string, unknown>;
    } catch {
      _dataCache = (await import('../data')) as Record<string, unknown>;
    }
  }
  return _dataCache;
}

export type VocabWord = [string, string, string?, ...string[]];

/**
 * _getVocab — the topic→words vocabulary map V.
 *
 * V is NOT in the client data barrel. Vocabulary moved server-side to
 * /api/content/core (it is KEYS[0] there); data/content.tsx destructures V for
 * internal use but deliberately does not re-export it. `(await _getData()).V`
 * is therefore `undefined`, not a map — every caller that read it got `{}` and
 * silently produced an empty pool. Components read `content.V` via
 * useContent(); this is the non-component equivalent.
 *
 * Never throws. getContent() rejects when offline / unauthenticated / rate
 * limited, and the launcher's vocab callers are click handlers invoked as
 * `void launchX(...)` — a rejection there becomes an unhandled promise
 * rejection, not a handled failure. So report (a content outage must be
 * visible in telemetry) and hand back an empty map; callers already treat an
 * empty pool as a launch failure.
 */
export async function _getVocab(): Promise<Record<string, VocabWord[]>> {
  return ((await _getVocabSource()).V ?? {}) as Record<string, VocabWord[]>;
}

/**
 * _getVocabSource — V plus the level tags and advanced tiers the level-gated
 * deck (lib/vocabPool) derives from. Same never-throws contract as _getVocab;
 * on failure the source is `{}` and every derived pool is empty, which callers
 * already treat as a launch failure.
 */
export async function _getVocabSource(): Promise<VocabSource> {
  try {
    const c = await getContent();
    return { V: c.V, V_LEVELS: c.V_LEVELS, V_B2: c.V_B2, V_C1: c.V_C1, V_C2: c.V_C2 };
  } catch (err) {
    reportError(err instanceof Error ? err : new Error('vocab load failed'), 'vocab-load');
    return {};
  }
}

/**
 * _buildAdaptivePool — weights vocabulary by FSRS stability so weaker words
 * appear more often in quiz pools.
 */
export function _buildAdaptivePool<T extends readonly unknown[]>(pool: T[]): T[] {
  let srData: Record<string, { due?: number; nextDue?: number }> = {};
  try {
    srData = JSON.parse(localStorage.getItem('nh_sr') || '{}');
  } catch (_) {}
  const now = Date.now();
  const weighted: T[] = [];
  for (const w of pool) {
    const key = String(w[0] ?? '');
    const card = srData[key];
    if (!card) {
      weighted.push(w, w);
      continue;
    }
    const msRemaining = (card.due || card.nextDue || 0) - now;
    if (msRemaining < 0) {
      weighted.push(w, w, w, w);
    } else if (msRemaining < 7 * 86400000) {
      weighted.push(w, w);
    } else {
      weighted.push(w);
    }
  }
  return weighted;
}
