/**
 * exerciseData — lazy loader for the bundled exercise/vocab data barrel.
 *
 * Extracted from useScreenLauncher (max-lines). The single retry matters:
 * the data barrel is a lazy Vite chunk, and a chunk request can fail
 * transiently (flaky connection) or permanently for this tab (it predates a
 * deploy, so the hashed chunk URL is gone). The retry heals the former; the
 * launcher's catch routes the latter into chunkErrors.reloadWithCachePurge.
 */
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
