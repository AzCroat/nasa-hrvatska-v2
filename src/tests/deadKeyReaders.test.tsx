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
import { readFileSync, globSync } from 'node:fs';
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
// CityOfDayScreen reads the learner's level (graded Croatian intro) through
// useStats, which throws outside StatsProvider; this file renders it bare.
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0 } }),
}));
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
// The derived guard
//
// THE HAND-SCOPED VERSION MISSED SEVEN MORE OF ITS OWN CLASS (2026-09-14).
// Below this block sat a guard over THREE named files and THREE named keys. It
// could not see, and never would have seen:
//
//   nh_activity_log        the 12-week heat map's "most precise" source. Every
//                          other source is a presence marker of 1, so all three
//                          intensity bands collapsed to the lightest and the
//                          tooltip's `N XP` branch was unreachable — measured at
//                          42 active days, one shade, zero XP figures.
//   nh_session_flashcards_ the four `recentActivity` counters in the
//   nh_session_listening_  /api/daily-plan payload. Every learner told the
//   nh_session_speaking_   planning model "0 flashcards, 0 listening, 0
//   nh_session_writing_    speaking, 0 writing" on every request, forever.
//   nh_last_practice_date  scheduleLocalReminder's "already practised today"
//                          guard, which was therefore never once true.
//   nh_practiced_          a dead first disjunct in the 14-day activity strip.
//
// A list of files decays exactly like the constants it polices, and it decays
// quietly, because it keeps passing at whatever rate the list still covers.
// A list of files decays exactly like the constants it polices, and it decays
// quietly, because it keeps passing at whatever rate the list still covers.
// This sweep is DERIVED from the whole of src/ instead: every key read through
// a storage accessor must have a writer, or a named exemption.
//
// AND THE DERIVATION ITSELF CARRIED A NAMESPACE (widened 2026-09-24). Both this
// guard and `deadStorageWrites.test.ts` matched only `'nh_…'` spelled as an
// INLINE LITERAL, so two populations sat outside both: the entire LEGACY key
// namespace (`uS`, `uSR`, `dcDay3`, `lastSeen`, `onboarded`, `xpCooldown`,
// `slangVisited`, `cookieConsent`, `fbBackupConfirmed`, …) and every access
// made through a CONSTANT identifier, which the old read matcher could not see
// at all because it demanded a quoted literal. A namespace restriction decays
// exactly like the list of files it replaced — every key added outside `nh_` is
// uncovered, and nothing says so.
//
// WIDENING IS THE DANGEROUS DIRECTION: it can MANUFACTURE a build failure for a
// key whose writer it merely cannot see. So the resolution was built and
// measured BEFORE the scope moved — constants resolve file-locally and are then
// followed across named imports, and the app's wrapper spellings (`lsGet`,
// `lsSet`, `LS_GET`, `LS_SET`, `_safeSet`, …) count as accessors. Reads seen go
// 80 -> 185 and writes 100 -> 185, and the orphan list is FOUR: the two
// exemptions that were already here, plus the two the legacy namespace had been
// hiding — both benign, both named below.
// ─────────────────────────────────────────────────────────────────────────────
describe('no key is read that nothing writes', () => {
  const stripComments = (s: string) =>
    s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

  const sourceFiles = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
  );
  const SRC = new Map(sourceFiles.map((f) => [f, stripComments(readFileSync(f, 'utf8'))]));

  // ── constants, resolved per FILE and then across named imports ─────────────
  // A global name -> value map would be wrong now that the scope is the whole
  // namespace: `STORAGE_KEY` is declared in six different modules with six
  // different values, so one global entry would hand five keys the wrong writer
  // and orphan the sixth. That is the manufacturing direction.
  const LOCAL = new Map<string, Map<string, string>>();
  const EXPORTED = new Map<string, Map<string, string>>();
  for (const [f, s] of SRC) {
    const local = new Map<string, string>();
    const exported = new Map<string, string>();
    for (const m of s.matchAll(
      /\b(export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=\n]+)?=\s*['"]([^'"]*)['"]/g,
    )) {
      local.set(m[2]!, m[3]!);
      if (m[1]) exported.set(m[2]!, m[3]!);
    }
    LOCAL.set(f, local);
    EXPORTED.set(f, exported);
  }

  /**
   * SWEEP 111 — a local const ALIASING another name, `const STORAGE_KEY =
   * CUSTOM_WORDS_KEY;`. `LOCAL` above records only string-LITERAL initializers,
   * so such a name was in neither map: `lookup` returned null, `classify`
   * returned null, and the write was DROPPED. `MyWordsScreen` saves the
   * learner's own vocabulary exactly that way, so `nh_custom_words` looked
   * unwritten by its real producer — and the orphan test passed anyway only
   * because `applyRemoteProgress` also writes it. A resolution gap that is
   * invisible while some OTHER writer happens to cover the key.
   */
  const ALIAS = new Map<string, Map<string, string>>();
  for (const [f, s] of SRC) {
    const m = new Map<string, string>();
    for (const a of s.matchAll(
      /\b(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=\n]+)?=\s*([A-Za-z_$][\w$]*)\s*;/g,
    ))
      m.set(a[1]!, a[2]!);
    ALIAS.set(f, m);
  }

  const resolveSpec = (from: string, spec: string): string | null => {
    if (!spec.startsWith('.')) return null;
    const dir = from.slice(0, from.lastIndexOf('/'));
    const parts: string[] = [];
    for (const seg of `${dir}/${spec}`.split('/')) {
      if (seg === '.' || seg === '') continue;
      if (seg === '..') parts.pop();
      else parts.push(seg);
    }
    const base = parts.join('/');
    const noExt = base.replace(/\.(js|jsx|ts|tsx)$/, '');
    for (const c of [
      base,
      ...['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js'].map(
        (e) => noExt + e,
      ),
    ])
      if (SRC.has(c)) return c;
    return null;
  };

  const IMPORTS = new Map<string, Map<string, { file: string; name: string }>>();
  for (const [f, s] of SRC) {
    const m = new Map<string, { file: string; name: string }>();
    for (const im of s.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g)) {
      const tgt = resolveSpec(f, im[2]!);
      if (!tgt) continue;
      for (const raw of im[1]!.split(',')) {
        const p = raw.trim().split(/\s+as\s+/);
        if (p[0]) m.set((p[1] ?? p[0]).trim(), { file: tgt, name: p[0].trim() });
      }
    }
    IMPORTS.set(f, m);
  }

  const lookup = (f: string, name: string, depth = 0): string | null => {
    if (depth > 4) return null;
    const local = LOCAL.get(f);
    if (local?.has(name)) return local.get(name)!;
    const im = IMPORTS.get(f)?.get(name);
    if (im) return EXPORTED.get(im.file)?.get(im.name) ?? lookup(im.file, im.name, depth + 1);
    // …then a same-file alias of another name (which may itself be imported).
    const al = ALIAS.get(f)?.get(name);
    return al ? lookup(f, al, depth + 1) : null;
  };

  // Every spelling the app reaches Web Storage through. `safeStorage`'s wrappers
  // are the majority of real traffic, so a matcher that knows only `getItem`
  // reports writes that exist as absent — the manufacturing direction again.
  const GET = String.raw`(?:localStorage|sessionStorage)\s*\.\s*getItem|lsGet|lsGetRaw|ssGet|LS_GET`;
  const SET = String.raw`(?:localStorage|sessionStorage)\s*\.\s*setItem|lsSet|ssSet|LS_SET|_safeSet|_unionStrArr|_maxNum`;
  const accessor = (alts: string) =>
    new RegExp(String.raw`\b(?:${alts})\s*\(\s*([^,)]{1,90})`, 'g');

  /** First argument -> an exact key, a key PREFIX, or null when unresolvable. */
  const classify = (file: string, raw: string): { key?: string; prefix?: string } | null => {
    const a = raw.trim();
    let m: RegExpMatchArray | null;
    if ((m = a.match(/^['"]([^'"]*)['"]\s*$/))) return { key: m[1]! };
    if ((m = a.match(/^['"]([^'"]*)['"]\s*\+/))) return { prefix: m[1]! };
    if ((m = a.match(/^`([^`${]*)\$\{/))) return { prefix: m[1]! };
    if ((m = a.match(/^`([^`${]*)`\s*$/))) return { key: m[1]! };
    if ((m = a.match(/^([A-Za-z_$][\w$]*)\s*\+/))) {
      const v = lookup(file, m[1]!);
      return v == null ? null : { prefix: v };
    }
    if ((m = a.match(/^`\$\{([A-Za-z_$][\w$]*)\}/))) {
      const v = lookup(file, m[1]!);
      return v == null ? null : { prefix: v };
    }
    if ((m = a.match(/^([A-Za-z_$][\w$]*)\s*$/))) {
      const v = lookup(file, m[1]!);
      return v == null ? null : { key: v };
    }
    return null;
  };

  const written = new Set<string>();
  /** key -> the files that write it. The PRODUCER question needs the file. */
  const writtenBy = new Map<string, Set<string>>();
  const writtenPrefixes = new Set<string>();
  /** key -> the files that read it. */
  const reads = new Map<string, string[]>();
  for (const [f, s] of SRC) {
    for (const m of s.matchAll(accessor(SET))) {
      const c = classify(f, m[1]!);
      if (!c) continue;
      if (c.key != null) {
        written.add(c.key);
        writtenBy.set(c.key, new Set([...(writtenBy.get(c.key) ?? []), f]));
      } else writtenPrefixes.add(c.prefix!);
    }
    for (const m of s.matchAll(accessor(GET))) {
      const c = classify(f, m[1]!);
      if (c?.key != null) reads.set(c.key, [...(reads.get(c.key) ?? []), f]);
    }
  }

  // `_safeSet(`nh_${key}_ceremony`)` interpolates at position 3, so its
  // "prefix" is the bare `nh_`; a first argument opening with `${` yields ''.
  // Left in, ONE such write makes every key in the app look covered and the
  // whole sweep vacuous — which is precisely how a guard ends up reporting clean
  // forever. The old version hard-coded `nh_`, which no longer describes the
  // namespace. The rule is now DERIVED from what each prefix actually covers:
  // measured, the interpolation artifacts cover 94 and 116 exact keys while
  // every genuine key family covers at most three.
  const MAX_PREFIX_COVERAGE = 5;
  const coverage = (p: string) => [...written].filter((k) => k.startsWith(p)).length;
  const vacuousPrefixes = [...writtenPrefixes].filter((p) => coverage(p) > MAX_PREFIX_COVERAGE);
  const usablePrefixes = [...writtenPrefixes].filter((p) => coverage(p) <= MAX_PREFIX_COVERAGE);

  const hasWriter = (key: string) =>
    written.has(key) ||
    usablePrefixes.some((p) => p !== '' && key.startsWith(p)) ||
    // A concat read (`lsGet('nh_daily_xp_' + date)`) yields a PREFIX, satisfied
    // by any key or prefix written beneath it.
    [...written].some((w) => w.startsWith(key));

  /**
   * Keys read on purpose with no in-app writer. Both staleness directions are
   * checked below: an entry must still be READ, and must still have NO writer.
   */
  const NO_WRITER_BY_DESIGN: Record<string, string> = {
    nh_debug:
      'set by hand in DevTools to turn on on-device console mirroring — an app writer would defeat the point of an off-by-default diagnostic',
    nh_streak_freezes:
      'a legacy store (Settings → Streak Protection, pre-2026-07) read once and deleted by the uFreeze migration in getStreakFreezes — writing it again would resurrect a store nothing consumes',
    uSR: 'the pre-nh_sr SRS deck, read once by the getSR migration when nh_sr is empty and never written again — the same shape as nh_streak_freezes, and invisible here until the sweep left the nh_ namespace',
    fbBackupConfirmed:
      'the dismissal flag of the cloud-backup banner, which 2b838fdb ("Remove all unprompted user interruptions", 2026-04-08) deleted from AppToasts — the read survives in useSyncManager and is permanently true, but it can only set a state whose props that component destructures and renders nothing with. Recorded, not repaired: the removal was deliberate, and deleting the residue is a refactor rather than a fix',
  };

  it('the derivation is real', () => {
    expect(SRC.size).toBeGreaterThan(400);
    expect(reads.size).toBeGreaterThan(150);
    expect(written.size).toBeGreaterThan(150);
    expect(writtenPrefixes.size).toBeGreaterThan(5);
  });

  it('the widening is real: both sides see keys outside the nh_ namespace', () => {
    // Without this the scope could silently snap back to `nh_` — every
    // assertion below would still pass, over the population the old matcher
    // already covered, and the four keys this widening exists for would be
    // invisible again.
    expect([...reads.keys()].filter((k) => !k.startsWith('nh_')).length).toBeGreaterThan(20);
    expect([...written].filter((k) => !k.startsWith('nh_')).length).toBeGreaterThan(20);
  });

  it('constants resolve, file-locally and across named imports', () => {
    // CookieConsent writes through `const COOKIE_KEY = 'cookie_consent_v1'` and
    // analytics.ts reads the literal; if constant resolution regressed, that
    // pair would split into an orphan read and an orphan write.
    expect(written.has('cookie_consent_v1')).toBe(true);
    // A name declared in six modules must not leak between them.
    expect(hasWriter('nh_no_such_key_anywhere')).toBe(false);
  });

  it('no accepted prefix covers a large share of the namespace', () => {
    // The mutation that would silence this whole file, pinned: an interpolation
    // artifact accepted as a key family covers everything beneath it.
    for (const p of usablePrefixes) expect(coverage(p)).toBeLessThanOrEqual(MAX_PREFIX_COVERAGE);
    // …and the artifacts really are being rejected, so the rule is not inert.
    expect(vacuousPrefixes.length).toBeGreaterThan(0);
  });

  it('non-vacuity: the matcher resolves a key that IS written and one that is not', () => {
    expect(hasWriter('nh_goal')).toBe(true);
    expect(hasWriter('nh_daily_xp_')).toBe(true);
    expect(hasWriter('nh_no_such_key_anywhere')).toBe(false);
  });

  it('every key read in src has a writer', () => {
    const orphans = [...reads]
      .filter(([k]) => !hasWriter(k) && !(k in NO_WRITER_BY_DESIGN))
      .map(([k, files]) => `${k} — read by ${[...new Set(files)].join(', ')}`);
    expect(
      orphans,
      'These reads return their default forever: no crash, no Sentry event, the ' +
        'feature above them simply does nothing.\n' +
        orphans.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });

  it('every exemption is still read somewhere', () => {
    const unread = Object.keys(NO_WRITER_BY_DESIGN).filter((k) => !reads.has(k));
    expect(unread, 'an exemption for a key nobody reads guards nothing').toEqual([]);
  });

  it('every exemption still lacks a writer', () => {
    const fixed = Object.keys(NO_WRITER_BY_DESIGN).filter((k) => hasWriter(k));
    expect(fixed, 'this key gained a writer — take it off the list').toEqual([]);
  });

  /**
   * SWEEP 111 — A CONDUIT IS NOT A PRODUCER.
   *
   * Every assertion above asks "does anything WRITE this key". `applyRemoteProgress`
   * satisfies that for anything the snapshot uploads — and it can only write what
   * Firestore held, which is only what `progressSnapshot` read, which is only what
   * something else PRODUCED. So a key whose sole writer is the sync layer is in a
   * closed loop with no source: it is absent for every learner, for ever, and
   * `hasWriter` reports it covered.
   *
   * Measured over the 66 keys the snapshot reads: **six** have no writer outside
   * the sync layer. One of them (`nh_custom_words`) turned out to have a real
   * producer the resolver was dropping — see the ALIAS fix above, which is how
   * this question found a defect in the guard before finding one in the app.
   */
  const SYNC_LAYER = new Set([
    'src/lib/applyRemoteProgress.ts',
    'src/lib/progressSnapshot.ts',
    'src/lib/firebase.ts',
    'src/lib/mergeStatsFromRemote.ts',
    'src/hooks/useSyncManager.ts',
  ]);

  /**
   * Snapshot keys with no producer, each recorded rather than repaired, with the
   * reason and what it costs. Both staleness directions are checked below.
   */
  const NO_PRODUCER: Record<string, string> = {
    nh_prestige:
      'nothing anywhere increments it — grep of the whole tree finds only the sync read/write and two ProgressCharts comments discussing "prestige resets". The feature cannot be earned, so the synced field is always 0. Recorded, not repaired: making it earnable is a FEATURE, not a fix',
    dcDay3:
      'the daily-challenge answer state. useDaily reads it as the PRIMARY source in a first-render initializer under a comment saying it is "written on every answer click" — nothing writes it, so every read falls through to the documented fallback (uP_<uid>.dc, written by the sync auto-save). NOT established here: the fallback needs uS.u, so whether a signed-out learner loses the state on reload is an open question, left sharp rather than guessed',
    nh_placement_vocab:
      'a PlacementTest per-skill sub-score. PlacementTest writes nh_placement_done and nh_level only, so the three sub-scores are never produced; nothing consumes them for a decision either, so the cost is three always-absent snapshot fields and three _maxNum calls that can never fire',
    nh_placement_grammar: 'as nh_placement_vocab — never produced by PlacementTest',
    nh_placement_culture: 'as nh_placement_vocab — never produced by PlacementTest',
  };

  const snapshotKeys = () => {
    const snap = SRC.get('src/lib/progressSnapshot.ts')!;
    return new Set([...snap.matchAll(/lsGet\(\s*'([^']{2,80})'/g)].map((m) => m[1]!));
  };

  const producedOutsideSync = (k: string) =>
    [...(writtenBy.get(k) ?? [])].some((f) => !SYNC_LAYER.has(f));

  it('the producer derivation is real', () => {
    const keys = snapshotKeys();
    expect(keys.size).toBeGreaterThan(50);
    // Non-vacuity in both directions: a key with a real producer, and one without.
    expect(producedOutsideSync('nh_goal')).toBe(true);
    expect(producedOutsideSync('nh_prestige')).toBe(false);
    // The ALIAS fix is load-bearing here: MyWordsScreen writes nh_custom_words
    // through `const STORAGE_KEY = CUSTOM_WORDS_KEY` and nothing else outside the
    // sync layer does, so without alias resolution this flips to false.
    expect(producedOutsideSync('nh_custom_words')).toBe(true);
  });

  it('every key the snapshot UPLOADS is produced by something that is not the sync layer', () => {
    const orphans = [...snapshotKeys()]
      .filter((k) => !producedOutsideSync(k) && !(k in NO_PRODUCER))
      .map((k) => `${k} — written only by ${[...(writtenBy.get(k) ?? ['(nothing)'])].join(', ')}`);
    expect(
      orphans,
      'The sync layer is a CONDUIT: it writes what Firestore held, which is what ' +
        'the snapshot read, which is what something produced. A key with no ' +
        'producer is absent for every learner for ever, and `hasWriter` calls it covered.\n' +
        orphans.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });

  it('every NO_PRODUCER entry is still uploaded and still has no producer', () => {
    const keys = snapshotKeys();
    for (const [k, reason] of Object.entries(NO_PRODUCER)) {
      expect(reason.length, `${k} needs a reason`).toBeGreaterThan(40);
      expect(keys.has(k), `${k} is no longer uploaded — delete the entry`).toBe(true);
      expect(producedOutsideSync(k), `${k} gained a producer — take it off NO_PRODUCER`).toBe(
        false,
      );
    }
    expect(Object.keys(NO_PRODUCER)).toHaveLength(5);
  });

  it('the exemption list is not silently emptied', () => {
    expect(Object.keys(NO_WRITER_BY_DESIGN)).toHaveLength(4);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// The original regression guard, for the three keys named at the top
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
