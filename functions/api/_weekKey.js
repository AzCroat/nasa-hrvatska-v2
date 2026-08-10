/**
 * ISO 8601 week key of the current UTC date, e.g. "2026-W32".
 *
 * Server-side sibling of weekKey() in src/lib/dateUtils.ts (same arithmetic,
 * but fed the UTC date — servers have no meaningful local timezone). Used as
 * the weekly-backup generation key (backup-progress.js); the exact week
 * boundary matters less than the key being stable for ~7 days at a time.
 */
export function weekKeyUTC(now = new Date()) {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}
