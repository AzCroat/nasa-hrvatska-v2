// drillRun — per-run question sampling for the large mode-tagged drill banks
// (owner directive 2026-08-14: no exercise may exceed 12–15 questions; the
// C2/B2 drill pools carry 24-item banks that previously ran end-to-end).
//
// A run serves DRILL_RUN_PER_MODE questions from EACH mode (3 modes × 4 = 12),
// shuffled across modes, so every run stays balanced and under the engagement
// cap while the full bank provides between-run variety. Banks stay at 24+
// items — the data-guard tests keep enforcing that floor.
import { rnd } from './random.js';

export const DRILL_RUN_PER_MODE = 4;

function sh<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

/** Sample a balanced, shuffled run from a mode-tagged bank. Non-mutating. */
export function drawDrillRun<T extends { mode: string }>(
  data: readonly T[],
  perMode: number = DRILL_RUN_PER_MODE,
): T[] {
  const modes = [...new Set(data.map((d) => d.mode))];
  return sh(modes.flatMap((m) => sh(data.filter((d) => d.mode === m)).slice(0, perMode)));
}
