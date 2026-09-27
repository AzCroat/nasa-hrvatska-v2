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

/**
 * The length of one run, whatever the bank's shape (owner decision, 2026-09-27:
 * 12 questions for every drill). A three-mode bank serves 4 per mode, exactly as
 * before; a single-mode bank — the older hand-written drills, now on the engine —
 * serves 12 from its one pool instead of 4. The per-mode share is derived from
 * this, so the length is one number rather than a product nobody states.
 */
export const DRILL_RUN_LENGTH = DRILL_RUN_PER_MODE * 3;

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
  perMode?: number,
): T[] {
  const modes = [...new Set(data.map((d) => d.mode))];
  const share = perMode ?? Math.ceil(DRILL_RUN_LENGTH / Math.max(1, modes.length));
  return sh(modes.flatMap((m) => sh(data.filter((d) => d.mode === m)).slice(0, share)));
}
