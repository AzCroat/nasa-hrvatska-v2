/**
 * mergeSignInStats — merge the local progress blob against the Firestore blob at
 * sign-in.
 *
 * This ran inline inside useAuth's auth-state effect, which is why nothing
 * pinned it: it was unreachable from a test without mounting the whole auth
 * hook and stubbing Firebase. The rules below are the same ones
 * mergeStatsFromRemote applies; that function cannot simply be called here
 * because it merges a full sanitized Stats over the DS defaults, while this path
 * merges two raw partial blobs and feeds the result to lP() and fbSaveProgress
 * without a defaults layer.
 *
 * The base is the REMOTE object (`...remote`), so every field listed explicitly
 * below is the local side being defended, and any field NOT listed silently
 * takes the remote value. That is the trap this module exists to make visible —
 * rs and levelQuizPasses were both missing, and their correctness rested on the
 * result being re-merged downstream by onSignedIn(isHydrate) against a React
 * state that already held the local blob. Two writes bypass that repair (the
 * local blob write, and the fbSaveProgress when local XP is ahead), so the rule
 * belongs here rather than being inherited by luck.
 *
 * Rules, mirroring mergeStatsFromRemote:
 *   - monotonic counters: Math.max, never decrease
 *   - ct / vs / badges: union, never lose a completed topic or screen
 *   - rs: keep the LONGER array (see below — not a union)
 *   - levelQuizPasses: additive key union, newer passedAt wins per level
 *   - diff: the higher ordinal, never regress
 */

type Blob = Record<string, unknown>;

interface LevelQuizPass {
  score: number;
  passedAt: number;
}

const DIFF_ORDER: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2 };

/** Monotonic counters — a device that is behind must never pull the total down. */
const MAX_FIELDS = [
  'xp',
  'spent',
  'lc',
  'gc',
  'sp',
  'de',
  'rc',
  'str',
  'pf',
  'mv',
  'hi',
  // pr + badge-backing counters. Without these the remote base spread clobbers
  // unsynced local progress.
  'pr',
  'srsTotal',
  'mistakesMastered',
  'readingDone',
  'mediaVisits',
] as const;

/** Growing sets — an item earned on either device must survive. */
const UNION_FIELDS = ['ct', 'vs', 'badges'] as const;

function num(blob: Blob, key: string): number {
  return (blob[key] as number) || 0;
}

function arr(blob: Blob, key: string): string[] {
  const v = blob[key];
  return Array.isArray(v) ? (v as string[]) : [];
}

export function mergeSignInStats(local: Blob | null | undefined, remote: Blob): Blob {
  const lpSt: Blob = local || {};
  const merged: Blob = { ...remote };

  for (const f of MAX_FIELDS) merged[f] = Math.max(num(lpSt, f), num(remote, f));
  for (const f of UNION_FIELDS) merged[f] = [...new Set([...arr(lpSt, f), ...arr(remote, f)])];

  // rs is ordered lesson score strings (["100","75","80"]) — not keyed, so a
  // Set-union would collapse duplicate scores and distort the history. It only
  // grows with each lesson completion, so the longer array is the more complete
  // one.
  const localRs = arr(lpSt, 'rs');
  const remoteRs = arr(remote, 'rs');
  merged.rs = localRs.length >= remoteRs.length ? localRs : remoteRs;

  // levelQuizPasses — keys from both sides always survive; for a level present
  // on both, the more recent pass wins.
  const localPasses = (lpSt.levelQuizPasses as Record<number, LevelQuizPass>) || {};
  const remotePasses = (remote.levelQuizPasses as Record<number, LevelQuizPass>) || {};
  const passes: Record<number, LevelQuizPass> = { ...localPasses };
  for (const key of Object.keys(remotePasses)) {
    const k = Number(key);
    const rv = remotePasses[k];
    const lv = passes[k];
    if (rv && (!lv || rv.passedAt > lv.passedAt)) passes[k] = rv;
  }
  merged.levelQuizPasses = passes;

  // diff — never regress the difficulty tier.
  const lo = DIFF_ORDER[lpSt.diff as string] ?? -1;
  const fo = DIFF_ORDER[remote.diff as string] ?? -1;
  merged.diff = lo >= fo ? lpSt.diff || remote.diff : remote.diff || lpSt.diff;

  return merged;
}
