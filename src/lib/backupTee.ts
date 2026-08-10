/**
 * backupTee — client-side tee of the user's own progress into the server-side
 * backup store (POST /api/backup-mine), once per day per device.
 *
 * WHY THE CLIENT DOES THIS (2026-08-10)
 * The server-side weekly sweep (backup-progress.js) needs the Firebase ADMIN
 * credential, and the production value of FIREBASE_SERVICE_ACCOUNT_JSON is
 * empty — a pre-existing dashboard problem no automation can self-heal,
 * because a secret cannot be minted without another Google credential and
 * none exists anywhere in the pipeline. The learner's own authenticated
 * session, however, is a fully valid access path to the learner's own data:
 * the app already assembles the complete progress snapshot on every sync, so
 * teeing it to the backup store protects every ACTIVE user with zero admin
 * credential and zero owner operations. If the admin credential is ever
 * restored, the weekly sweep ALSO covers dormant users — the two paths are
 * complementary, not alternatives.
 *
 * Contract: fire-and-forget AFTER a successful Firestore save. Never throws,
 * never blocks or delays the sync path, never runs more than once per local
 * day (localStorage marker, set only on a confirmed 2xx).
 */
import { apiFetch } from './apiFetch.js';
import { localDateStr } from './dateUtils';
import { lsGet, lsSet } from './safeStorage';

const TEE_MARKER = 'nh_backup_teed';

export function teeBackupIfDue(snapshot: unknown): void {
  try {
    const today = localDateStr();
    if (lsGet(TEE_MARKER) === today) return;
    let srs: unknown = null;
    try {
      srs = JSON.parse(lsGet('nh_sr') || 'null');
    } catch {
      srs = null;
    }
    void apiFetch('/api/backup-mine', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ progress: snapshot, srs }),
      signal: AbortSignal.timeout(15000),
    })
      .then((r: Response) => {
        // Marker only on confirmed success — a failed tee retries on the next
        // sync instead of silently skipping the whole day.
        if (r.ok) lsSet(TEE_MARKER, today);
      })
      .catch(() => {});
  } catch {
    /* backup tee must never interfere with the sync path */
  }
}
