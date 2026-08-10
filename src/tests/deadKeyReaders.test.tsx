/**
 * deadKeyReaders.test.tsx — three features read localStorage keys nothing wrote.
 *
 * THE CLASS OF BUG
 * ----------------
 * A key that is read but never written fails silently and permanently. There is
 * no crash, no error, no Sentry event — the read just returns the default
 * forever, and the feature built on top of it quietly does nothing. Each of
 * these shipped and stayed broken because the tests around them supplied the key
 * by hand, which proves the reader parses correctly and proves nothing about
 * whether the value ever arrives in production.
 *
 *   nh_ex_types_done  → Explorer / Polyglot Practice / All-Rounder: three badges
 *                       no learner could earn, at any amount of practice.
 *   nh_cityofday_date → the Croatia slot in Today's Session. `cityVisited` was
 *                       permanently false, so "Start a fresh session" re-served
 *                       City of the Day — same city, same day — instead of
 *                       rotating on through the culture pool.
 *   nh_profile        → the name in every reminder notification. Always ''.
 *   nh_streak         → the streak count in reminder copy. Always 0, so every
 *                       "your N-day streak" variant was dead.
 *
 * So these tests are written to fail if the fix is reverted, and the last block
 * asserts the dead reads are gone from production source rather than merely
 * superseded — a re-added reader is the regression to catch.
 */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { BADGES } from '../lib/appUtils';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';
import { sessionFirstName } from '../lib/sessionUser';
import { localDateStr } from '../lib/dateUtils';

// Copy variants are chosen at random. Pin the generator so a message assertion
// is about which BRANCH was taken, not which variant the dice picked — with
// rnd() === 0 and no stored last-index, pickVariant always yields index 0.
vi.mock('../lib/random.js', () => ({ rnd: () => 0 }));
// useNotifications dynamically imports this on the granted path.
vi.mock('../lib/pushNotifications.js', () => ({
  subscribeToPush: vi.fn(async () => undefined),
  registerPushWithServer: vi.fn(async () => undefined),
}));
vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  CONJ_CATEGORIES: new Set<string>(),
  CATEGORY_MIN_CEFR: {},
}));

beforeEach(() => {
  localStorage.clear();
});

// ─────────────────────────────────────────────────────────────────────────────
// nh_profile → the `uS` session blob
// ─────────────────────────────────────────────────────────────────────────────
describe('sessionFirstName', () => {
  const setSession = (blob: Record<string, unknown>) =>
    localStorage.setItem('uS', JSON.stringify(blob));

  it('returns the first name when the account actually has a display name', () => {
    setSession({ u: 'ana@example.com', d: 'Ana Horvat' });
    expect(sessionFirstName()).toBe('Ana');
  });

  it('keeps diacritics intact', () => {
    setSession({ u: 'x@example.com', d: 'Đurđica Šimić' });
    expect(sessionFirstName()).toBe('Đurđica');
  });

  it('refuses the email address useAuth falls back to when no name is set', () => {
    // useAuth: `d = fbUser.displayName || (isAnonymous ? 'Gost' : k)` where
    // k = email || uid. Reading `d` naively would have put the learner's email
    // address on their lock screen: "🇭🇷 Croatian time, ana@example.com".
    setSession({ u: 'ana@example.com', d: 'ana@example.com' });
    expect(sessionFirstName()).toBe('');
  });

  it('refuses a raw uid (the no-email fallback)', () => {
    setSession({ u: 'aBc123XyZ456', d: 'aBc123XyZ456' });
    expect(sessionFirstName()).toBe('');
  });

  it('refuses to address a guest as "Gost"', () => {
    setSession({ u: 'aBc123XyZ456', d: 'Gost' });
    expect(sessionFirstName()).toBe('');
  });

  it('refuses anything email-shaped even if it reached `d` another way', () => {
    setSession({ u: 'someuid', d: 'ana@example.com' });
    expect(sessionFirstName()).toBe('');
  });

  it('returns empty on absent, malformed, or nameless session blobs', () => {
    expect(sessionFirstName()).toBe('');
    localStorage.setItem('uS', 'not json{');
    expect(sessionFirstName()).toBe('');
    setSession({ u: 'ana@example.com' });
    expect(sessionFirstName()).toBe('');
    setSession({ u: 'ana@example.com', d: '   ' });
    expect(sessionFirstName()).toBe('');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// nh_ex_types_done → derived from the synced `vs` array
// ─────────────────────────────────────────────────────────────────────────────
describe('breadth badges (Explorer / Polyglot Practice / All-Rounder)', () => {
  const badge = (id: string) => {
    const b = BADGES.find((x) => x.id === id);
    if (!b) throw new Error(`badge ${id} missing`);
    return b;
  };
  const exerciseKeys = Object.keys(EXERCISE_COMPLETION);
  const vsOf = (n: number) => ({ vs: exerciseKeys.slice(0, n) });

  it('non-vacuity: the registry has enough rows for all three thresholds', () => {
    expect(exerciseKeys.length).toBeGreaterThanOrEqual(15);
  });

  it('are all unearned at zero completions', () => {
    for (const id of ['extype5', 'extype10', 'extype15']) {
      expect(badge(id).r({ vs: [] })).toBe(false);
      expect(badge(id).r({})).toBe(false);
    }
  });

  it('become earnable — the whole point — as distinct exercises are completed', () => {
    // The exact assertion that failed before the fix: a learner who has finished
    // 15 different exercises earned none of these three badges.
    expect(badge('extype5').r(vsOf(5))).toBe(true);
    expect(badge('extype10').r(vsOf(10))).toBe(true);
    expect(badge('extype15').r(vsOf(15))).toBe(true);
  });

  it('holds each threshold exactly — no off-by-one', () => {
    expect(badge('extype5').r(vsOf(4))).toBe(false);
    expect(badge('extype10').r(vsOf(9))).toBe(false);
    expect(badge('extype15').r(vsOf(14))).toBe(false);
  });

  it('ignores screens that are not exercises', () => {
    // `vs` also collects informational screens credited by the 20s dwell timer.
    // Reading twenty culture pages is not "20 different exercise types".
    const notExercises = ['bogomili', 'zagreb-tour', 'nekiscreen', 'anotherone', 'fifth'];
    for (const k of notExercises) expect(EXERCISE_COMPLETION[k]).toBeUndefined();
    expect(badge('extype5').r({ vs: notExercises })).toBe(false);
  });

  it('does not double-count a duplicated key', () => {
    const dupes = [...exerciseKeys.slice(0, 3), ...exerciseKeys.slice(0, 3)];
    expect(dupes).toHaveLength(6);
    expect(badge('extype5').r({ vs: dupes })).toBe(false);
  });

  it('survives a malformed vs without throwing', () => {
    const junk = { vs: [null, undefined, 42, {}] as unknown as string[] };
    expect(() => badge('extype5').r(junk)).not.toThrow();
    expect(badge('extype5').r(junk)).toBe(false);
    expect(badge('extype5').r({ vs: 'nope' as unknown as string[] })).toBe(false);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// nh_cityofday_date → written when the screen is actually visited
// ─────────────────────────────────────────────────────────────────────────────
describe('City of the Day marks itself visited', () => {
  it('writes the exact key and value buildSessionActivities reads', async () => {
    const { default: CityOfDayScreen } = await import('../components/croatia/CityOfDayScreen');
    expect(localStorage.getItem('nh_cityofday_date')).toBeNull();
    render(<CityOfDayScreen goBack={() => {}} />);
    expect(localStorage.getItem('nh_cityofday_date')).toBe(localDateStr());
  });

  it('closes the loop: a rebuild after visiting rotates off cityofday', async () => {
    // Both halves in one test, because the bug was precisely that the two halves
    // never met. Each half was individually fine.
    const { buildSessionActivities } = await import('../hooks/useDailySession');
    const { default: CityOfDayScreen } = await import('../components/croatia/CityOfDayScreen');

    const before = buildSessionActivities('A2');
    expect(before.find((a) => a.id === 'cityofday')).toBeTruthy();

    render(<CityOfDayScreen goBack={() => {}} />);

    const after = buildSessionActivities('A2');
    expect(after.find((a) => a.id === 'cityofday')).toBeFalsy();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// nh_profile / nh_streak → real name and real streak reach the notification copy
// ─────────────────────────────────────────────────────────────────────────────
describe('reminder notification personalisation', () => {
  const shown: Array<{ title: string; body: string }> = [];

  beforeEach(() => {
    shown.length = 0;
    vi.useFakeTimers();
    // Pin the clock. Two tests below set a 23:00 reminder, and
    // scheduleStreakReminder bails with `if (delay <= 0) return` once that hour
    // has passed today — so between 23:00 and midnight in the runner's timezone
    // nothing was ever scheduled and both tests failed. That is a CI gate that
    // goes red for one hour a day and green again on a re-run, which is the
    // worst failure mode a gate can have: it teaches people to re-run it.
    //
    // Built from LOCAL components on purpose. The code under test compares
    // against `target.setHours(reminderHour, 0, 0, 0)`, which is local, so a UTC
    // instant here would just relocate the flake to a different set of
    // timezones rather than remove it.
    vi.setSystemTime(new Date(2026, 0, 15, 9, 0, 0));
    class FakeNotification {
      static permission = 'granted';
      constructor(title: string, opts?: { body?: string }) {
        shown.push({ title, body: opts?.body ?? '' });
      }
    }
    vi.stubGlobal('Notification', FakeNotification);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('puts the learner’s real name in the 8pm streak reminder', async () => {
    const { scheduleStreakReminder } = await import('../hooks/useNotifications');
    localStorage.setItem('uS', JSON.stringify({ u: 'ana@example.com', d: 'Ana Horvat' }));
    localStorage.setItem('nh_reminder_time', '23:00');

    scheduleStreakReminder(7);
    vi.advanceTimersByTime(24 * 3600 * 1000);

    expect(shown).toHaveLength(1);
    expect(`${shown[0]!.title} ${shown[0]!.body}`).toContain('Ana');
  });

  it('degrades to unnamed copy rather than leaking an email address', async () => {
    const { scheduleStreakReminder } = await import('../hooks/useNotifications');
    localStorage.setItem('uS', JSON.stringify({ u: 'ana@example.com', d: 'ana@example.com' }));
    localStorage.setItem('nh_reminder_time', '23:00');

    scheduleStreakReminder(3);
    vi.advanceTimersByTime(24 * 3600 * 1000);

    expect(shown).toHaveLength(1);
    expect(`${shown[0]!.title} ${shown[0]!.body}`).not.toContain('@');
  });

  it('builds the daily reminder from the real streak, not a permanent zero', async () => {
    // buildPersonalizedMessage read `nh_streak`, which nothing writes, so
    // streakCount was always 0 — the `streakCount >= 3` branch below was
    // unreachable and every learner fell through to the generic fallback pool
    // no matter how long their streak. getStreak() reads the `uStreak` cache
    // the rest of the app maintains.
    const { useNotifications } = await import('../hooks/useNotifications');
    localStorage.setItem('uStreak', JSON.stringify({ count: 12, last: localDateStr() }));
    localStorage.setItem('uS', JSON.stringify({ u: 'ana@example.com', d: 'Ana Horvat' }));
    // Past the 6-hour gate, with nothing due and no recent SRS word, so the
    // streak branch is the one under test.
    localStorage.setItem('nh_last_practice', String(Date.now() - 7 * 3600 * 1000));

    renderHook(() => useNotifications({ userId: 'u1' }));

    expect(shown).toHaveLength(1);
    expect(shown[0]!.title).toBe('🔥 12-day streak, Ana!');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// The regression guard
// ─────────────────────────────────────────────────────────────────────────────
describe('no writer-less key is read again', () => {
  const sources = [
    'src/lib/appUtils.ts',
    'src/hooks/useNotifications.ts',
    'src/lib/nativeNotifications.ts',
  ].map((f) => ({ f, src: readFileSync(f, 'utf8') }));

  it('non-vacuity: the features that used to read them are still in these files', () => {
    const all = sources.map((s) => s.src).join('\n');
    expect(all).toContain('extype15');
    expect(all).toContain('scheduleStreakReminder');
    expect(all).toContain('reminderMessage');
  });

  // Matches an actual storage READ of `key`, not a mention of its name — the
  // comments above each fix name these keys deliberately, to explain why they
  // are gone, and a guard that trips on prose would push people to delete the
  // explanation. `nh_streak` is matched with a closing quote so the real,
  // written `nh_streak_days` key is not caught by the same pattern.
  const readsKey = (src: string, key: string) =>
    new RegExp(String.raw`(getItem|lsGet|ssGet)\(\s*['"]${key}['"]`).test(src);

  it('non-vacuity: the matcher detects a read of a key that IS still read', () => {
    const probe = `const x = lsGet('nh_last_practice');`;
    expect(readsKey(probe, 'nh_last_practice')).toBe(true);
    expect(readsKey(`// mentions nh_last_practice in prose`, 'nh_last_practice')).toBe(false);
  });

  it('reads none of nh_ex_types_done, nh_profile, nh_streak', () => {
    for (const { f, src } of sources) {
      for (const key of ['nh_ex_types_done', 'nh_profile', 'nh_streak']) {
        expect(`${f} reads ${key}: ${readsKey(src, key)}`).toBe(`${f} reads ${key}: false`);
      }
    }
  });

  it('the City of the Day writer uses the key the session reader reads', () => {
    const writer = readFileSync('src/components/croatia/CityOfDayScreen.tsx', 'utf8');
    const reader = readFileSync('src/hooks/useDailySession.ts', 'utf8');
    expect(writer).toContain("lsSet('nh_cityofday_date', localDateStr())");
    expect(reader).toContain("lsGet('nh_cityofday_date') === today");
  });
});
