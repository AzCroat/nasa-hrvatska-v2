/**
 * offlineAwardQueue — manages XP awards made while the user is offline.
 *
 * Online path: awards are validated by /api/award before Firestore write.
 * Offline path: awards go directly to Firestore (existing fbApplyDelta).
 *   Each offline award is also queued here for a post-reconnect audit.
 *
 * On reconnect, flush() compares each queued claimedXp against the
 * ACTIVITY_XP_MAP cap. Suspicious entries (>10% over cap) are written
 * to Firestore /users/{uid}/xpAudit/{timestamp} for admin review.
 */

import { ACTIVITY_XP_MAP } from './activityXp.js';
import { getDb } from './firebase.js';
import { toDocId } from './userKey.js';
import { doc, setDoc } from 'firebase/firestore';

export interface OfflineAwardEntry {
  activityType: string;
  claimedXp: number;
  timestamp: number;
}

const QUEUE_KEY = 'nh_offline_award_queue';
const TOLERANCE = 1.1; // entries > cap × 1.10 are flagged as suspicious
// Hard cap on retained entries. This queue is drained ONLY by flush(), which is
// only reachable from the window 'online' handler — but useAward enqueues on ANY
// /api/award failure, including failures that happen while the user is online
// (5xx, rate limit, an adblocker eating /api/*). For such a user no 'online'
// event ever fires, so the queue grew without bound (~2KB/day) until it consumed
// the whole localStorage budget — which is what then breaks unrelated writes
// across the app. The queue is a best-effort audit trail, so dropping the oldest
// entries is strictly better than exhausting storage.
const MAX_ENTRIES = 200;

export function enqueue(entry: OfflineAwardEntry): void {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
    const queue: OfflineAwardEntry[] = Array.isArray(parsed) ? (parsed as OfflineAwardEntry[]) : [];
    queue.push(entry);
    // Keep the most recent MAX_ENTRIES.
    const trimmed = queue.length > MAX_ENTRIES ? queue.slice(-MAX_ENTRIES) : queue;
    localStorage.setItem(QUEUE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage unavailable (e.g. private browsing) or full — silently skip
  }
}

export function clearQueue(): void {
  try {
    localStorage.removeItem(QUEUE_KEY);
  } catch {
    // ignore
  }
}

export async function flush(uid: string): Promise<void> {
  let queue: OfflineAwardEntry[];
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    if (!raw) return;
    const parsed: unknown = JSON.parse(raw);
    // Validate the SHAPE inside the try. Previously `queue` was assigned here but
    // consumed below, so a stored non-array (e.g. `5` or `{}`) sailed past the
    // `queue.length === 0` check — `undefined === 0` is false — and then threw a
    // TypeError on `.filter`, from inside an 'online' event handler.
    if (!Array.isArray(parsed)) {
      clearQueue();
      return;
    }
    queue = parsed as OfflineAwardEntry[];
  } catch {
    return;
  }
  if (queue.length === 0) return;

  // Clear the queue immediately after reading it into memory — this always happens
  // regardless of whether suspicious entries are found or whether the Firestore write
  // succeeds. The audit write below is best-effort; we do not block queue clearance on it.
  clearQueue();

  const suspicious = queue.filter((entry) => {
    const cap =
      (ACTIVITY_XP_MAP as Record<string, number>)[entry.activityType] ?? ACTIVITY_XP_MAP.default;
    return entry.claimedXp > cap * TOLERANCE;
  });

  if (suspicious.length === 0) return;

  const db = getDb();
  if (!db) return;

  try {
    const docId = toDocId(uid);
    const auditRef = doc(db, 'users', docId, 'xpAudit', String(Date.now()));
    await setDoc(auditRef, {
      uid,
      suspicious,
      totalSuspiciousXp: suspicious.reduce((sum, e) => sum + e.claimedXp, 0),
      flaggedAt: Date.now(),
    });
  } catch (e) {
    // Audit write failed — log but don't crash. Queue was already cleared;
    // suspicious entries are lost for this flush cycle (audit is best-effort).
    console.warn('[offlineAwardQueue] Firestore audit write failed:', (e as Error)?.message);
  }
}
