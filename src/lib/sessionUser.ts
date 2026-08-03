/**
 * sessionUser — the learner's own name, for addressing them directly.
 *
 * WHY THIS EXISTS
 * ---------------
 * Three notification builders personalised their copy by reading a `nh_profile`
 * object out of localStorage:
 *
 *   useNotifications.ts:167   scheduleStreakReminder — the 8pm streak nudge
 *   useNotifications.ts:238   buildPersonalizedMessage
 *   nativeNotifications.ts:61 reminderMessage — the Capacitor local notification
 *
 * Nothing has ever written `nh_profile`. Every read returned `{}`, so `firstName`
 * was always `''` and the whole personalisation branch was dead: the name tag
 * collapsed to empty and the variants that lead with a name ("⏰ {name} — study
 * time!") silently degraded to their fallback wording. No error, no crash, just
 * copy that quietly never did the thing it was written to do.
 *
 * The name the app actually holds is in the `uS` session blob, written by `sS()`
 * (firebase.ts) from the auth listener on every sign-in.
 *
 * WHY THIS IS NOT JUST `JSON.parse(uS).d`
 * ---------------------------------------
 * `d` is not always a name. useAuth builds it as:
 *
 *   const k  = fbUser.email || fbUser.uid;
 *   const dn = fbUser.displayName || (fbUser.isAnonymous ? 'Gost' : k);
 *
 * so for an email/password account whose owner never set a display name, `d` is
 * their **email address**, and for a guest it is the literal string 'Gost'.
 * Naively wiring the notifications to `d` would have shipped push copy reading
 * "🇭🇷 Croatian time, jschreiner75@gmail.com" — a worse bug than the dead read it
 * replaced, and one visible on the lock screen. So the fallback shapes are
 * detected and rejected here, once, rather than at each of the three call sites.
 *
 * Returns '' whenever there is no real name to use. Every caller already handles
 * the empty case, because until now it was the only case they ever saw.
 */
import { lsGet } from './safeStorage';

/** Longest plausible first name; anything beyond this is not a name we should use. */
const MAX_NAME_LEN = 24;

interface SessionBlob {
  /** Identity key — email, or uid when there is no email. */
  u?: string;
  /** Display name, but see above: falls back to `u` or 'Gost'. */
  d?: string;
}

/**
 * The learner's first name for use in notification copy, or '' if the app does
 * not actually know it.
 */
export function sessionFirstName(): string {
  let blob: SessionBlob;
  try {
    blob = JSON.parse(lsGet('uS') || '{}') as SessionBlob;
  } catch {
    return '';
  }
  if (!blob || typeof blob !== 'object') return '';

  const raw = typeof blob.d === 'string' ? blob.d.trim() : '';
  if (!raw) return '';

  // `d === u` is exactly the useAuth fallback for "no display name set" — the
  // value is an email or a uid, never something to call someone.
  if (typeof blob.u === 'string' && raw === blob.u.trim()) return '';
  // Guests are 'Gost' ("Guest"). Addressing someone as Guest is not personalisation.
  if (raw === 'Gost') return '';
  // Belt-and-braces: an address is not a name even if it reached `d` some other way.
  if (raw.includes('@')) return '';

  const first = raw.split(/\s+/)[0] ?? '';
  if (!first || first.length > MAX_NAME_LEN) return '';
  return first;
}
