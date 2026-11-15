// Deterministic shuffling for exercise items: the same item always shows the same
// order (so a re-render never reshuffles under the learner's finger), and the
// shuffled order is never the answer order.

function mulberry32(a: number): () => number {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A permutation of 0..n-1 that is NOT the identity (for n >= 2). */
export function seededOrder(n: number, seed: number): number[] {
  const idx = Array.from({ length: n }, (_, i) => i);
  if (n < 2) return idx;
  const r = mulberry32(seed * 7919 + n * 104729 + 1);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [idx[i], idx[j]] = [idx[j]!, idx[i]!];
  }
  if (idx.every((v, i) => v === i)) idx.push(idx.shift()!);
  return idx;
}
