/**
 * reminder-time-push.test.ts — guards the per-user push reminder time chain.
 *
 * The audit found the Settings reminder-time picker was never sent to the
 * server: the scheduled worker fired once daily at a fixed 13:00 UTC for
 * every user, ignoring the chosen hour. The fix threads reminderTime +
 * timeZone from the client through /api/push-subscribe into KV, and the
 * worker (now hourly) sends each user at their local chosen hour.
 *
 * Source-derived (news-c2-mode.test.ts pattern) because the worker and the
 * Pages Function can't be executed in vitest — a regression in any link of
 * the chain fails here.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const clientSrc = readFileSync('src/lib/pushNotifications.ts', 'utf8');
const subscribeSrc = readFileSync('functions/api/push-subscribe.js', 'utf8');
const workerSrc = readFileSync('functions/scheduled.js', 'utf8');
const wranglerSrc = readFileSync('wrangler.toml', 'utf8');
const settingsSrc = readFileSync(
  'src/components/profile/sections/NotificationsSection.tsx',
  'utf8',
);

describe('client registration payload', () => {
  it('registerPushWithServer sends reminderTime and timeZone', () => {
    expect(clientSrc).toMatch(/reminderTime,\s*\n\s*timeZone,/);
    expect(clientSrc).toContain("localStorage.getItem('nh_reminder_time')");
    expect(clientSrc).toContain('Intl.DateTimeFormat().resolvedOptions().timeZone');
  });

  it('supports force re-registration (bypasses the refresh cache)', () => {
    // The cache was 85 days; it is now daily, because the same call is what
    // refreshes the streak and last-practised date the worker sends from.
    // See pushReminderChain.test.ts.
    expect(clientSrc).toMatch(/force = false/);
    expect(clientSrc).toMatch(/if \(!force\)/);
  });

  it('Settings picker re-registers with force + real streak on time change', () => {
    expect(settingsSrc).toContain('force: true');
    expect(settingsSrc).toContain('getStreak().count');
  });
});

describe('/api/push-subscribe storage', () => {
  it('validates reminderTime as HH:MM', () => {
    expect(subscribeSrc).toMatch(/\^\(\[01\]\?\\d\|2\[0-3\]\):\[0-5\]\\d\$/);
  });

  it('validates timeZone via Intl (rejects unknown IANA names)', () => {
    expect(subscribeSrc).toMatch(/new Intl\.DateTimeFormat\('en', \{ timeZone \}\)/);
  });

  it('stores both fields in the KV record', () => {
    expect(subscribeSrc).toContain('reminderTime: safeReminderTime');
    expect(subscribeSrc).toContain('timeZone: safeTimeZone');
  });

  it('preserves stored streak/name when the request omits them (no clobber)', () => {
    // subscribeToPush() omits streak/name; the full-overwrite handler must fall
    // back to the existing KV value instead of zeroing it — otherwise the
    // streak-reminder push reads "0-day streak" until the 85-day cache expires.
    expect(subscribeSrc).toContain("Object.prototype.hasOwnProperty.call(body, 'streak')");
    expect(subscribeSrc).toContain("Object.prototype.hasOwnProperty.call(body, 'name')");
    // reads the current entry before writing
    expect(subscribeSrc).toMatch(/PUSH_SUBSCRIPTIONS\.get\(kvKey\)/);
    // resolved values fall back to the stored entry
    expect(subscribeSrc).toMatch(/existing\?\.streak/);
    expect(subscribeSrc).toMatch(/existing\?\.name/);
    expect(subscribeSrc).toContain('streak: storedStreak');
    expect(subscribeSrc).toContain('name: storedName');
  });

  it('subscribeToPush (Settings Enable path) does not send streak — proving the preserve matters', () => {
    // The subscribeToPush body has subscription/userId/reminderTime/timeZone but
    // no streak/name. If this changes, the preserve logic can be revisited.
    const sub = clientSrc.slice(clientSrc.indexOf('export async function subscribeToPush'));
    const body = sub.slice(0, sub.indexOf('export async function sendTestPush'));
    expect(body).not.toMatch(/streak:/);
  });
});

describe('scheduled worker', () => {
  it('cron runs hourly', () => {
    expect(wranglerSrc).toMatch(/crons = \["0 \* \* \* \*"\]/);
  });

  it('matches each subscriber against their local chosen hour', () => {
    expect(workerSrc).toContain('function isDueThisHour');
    expect(workerSrc).toMatch(/timeZone: record\.timeZone/);
    expect(workerSrc).toMatch(/localHour === targetHour/);
  });

  it('legacy records without a preference keep the 13:00 UTC send', () => {
    expect(workerSrc).toMatch(/utcHour === 13/);
  });

  it('keeps the one-push-per-day guard alongside the hourly cron', () => {
    // Both guards still stand; they now compare against the subscriber's own
    // calendar day rather than the UTC one, because reminders are sent at the
    // user's LOCAL hour and a UTC date has already rolled over by then for the
    // Americas. See pushReminderChain.test.ts.
    expect(workerSrc).toContain('lastNotified === userToday');
    expect(workerSrc).toContain('lastPracticed === userToday');
  });
});

describe('local-hour computation (behavioral)', () => {
  // Mirrors the worker's Intl usage to prove the formatting approach yields
  // a parseable 0-23 hour for representative user zones, incl. half-hour
  // offsets — if the runtime Intl contract changed, this fails first.
  function localHour(now: Date, timeZone: string): number {
    return parseInt(
      new Intl.DateTimeFormat('en-GB', { timeZone, hour: 'numeric', hourCycle: 'h23' }).format(now),
      10,
    );
  }

  it('computes a valid hour for common diaspora timezones', () => {
    const now = new Date('2026-07-21T18:00:00Z');
    for (const tz of [
      'America/New_York',
      'America/Los_Angeles',
      'Europe/Zagreb',
      'Australia/Sydney',
      'Australia/Adelaide', // half-hour offset
      'UTC',
    ]) {
      const h = localHour(now, tz);
      expect(h).toBeGreaterThanOrEqual(0);
      expect(h).toBeLessThanOrEqual(23);
    }
  });

  it('18:00 UTC in July is 14:00 in New York (DST-aware)', () => {
    expect(localHour(new Date('2026-07-21T18:00:00Z'), 'America/New_York')).toBe(14);
  });
});
