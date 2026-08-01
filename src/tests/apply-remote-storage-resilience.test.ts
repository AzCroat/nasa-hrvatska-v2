/**
 * apply-remote-storage-resilience.test.ts — the remote→local restore must not
 * abandon itself half-way.
 *
 * This is a RE-OCCURRENCE of a bug this module already documents as fixed. Its
 * own comment above _safeSet says:
 *
 *   "on a quota-full profile the FIRST failing write threw straight out of
 *    applyRemoteProgress and silently abandoned everything after it: SRS merge,
 *    favourites, journal, hearts, checkpoints, custom words, saved phrases,
 *    session history, weekly XP, settings and CEFR certifications. ... Restoring
 *    as much as possible is always better than aborting mid-way, so each write
 *    now fails independently."
 *
 * That fix routed 19 writes through _safeSet — and left 44 raw
 * localStorage.setItem calls plus 37 raw getItem reads in place. So the throw did
 * not go away, it MOVED: measured before this change, the first failure landed at
 * the UI-preferences block (`_safeSet('darkMode', …)`, formerly line 325), under
 * BOTH failure shapes:
 *
 *     QuotaExceededError: quota      at applyRemoteProgress (line 325)
 *     SecurityError: insecure        at applyRemoteProgress (line 325)
 *
 * Everything after that point was still abandoned on every single snapshot:
 * hearts, prestige, checkpoints, custom words, saved phrases, media done,
 * session history, earn-back, XP boost, daily XP, lesson resume, level-quiz
 * passes, heritage story, maja persona and memory, letter to self, and CEFR
 * certifications. Same user-visible symptom as the original report — most of a
 * returning user's progress silently missing — just a different cut-off point.
 *
 * Both failure shapes are real: reads-work/writes-throw is quota exhaustion;
 * everything-throws is a cookie/site-data-blocked or supervised profile, where
 * getItem raises SecurityError rather than returning null.
 *
 * Every read now goes through safeStorage.lsGet and every write through
 * _safeSet, so a single unavailable key can no longer take the rest of the
 * restore with it.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { applyRemoteProgress } from '../lib/applyRemoteProgress';

afterEach(() => {
  vi.unstubAllGlobals();
});

function makeSetters() {
  return {
    setFavs: vi.fn(),
    setJWords: vi.fn(),
    sDchlA: vi.fn(),
    sDchlSl: vi.fn(),
    setOnboarded: vi.fn(),
    setName: vi.fn(),
  };
}

/**
 * A remote profile spanning the whole restore, including sections that live
 * AFTER the point where it used to throw.
 */
const REMOTE = {
  name: 'Ana',
  onboarded: true,
  // UI preferences — the block that threw first.
  darkMode: 'true',
  nh_dm_explicit: true,
  nh_sound_enabled: 'true',
  nh_haptic_enabled: 'false',
  nh_voice_pref: 'female',
  nh_speech_rate: 0.75,
  nh_font_size: 'large',
  nh_reduce_motion: true,
  nh_autotts: true,
  // Everything below was silently abandoned.
  nh_prestige: 3,
  nh_hearts_always_on: true,
  nh_used_free_repair: true,
  nh_uskrs_kviz_done: true,
  nh_alka_best: 7,
  nh_last_ex: 'flashcards',
  nh_last_ex_label: 'Flashcards',
  heritageStory: 'baka',
  maja_persona: 'teacher',
  nh_letter_to_self: 'Dragi ja,',
};

/** Reads succeed, writes are rejected: quota exhausted. */
function quotaFullStorage(): Storage {
  const store = new Map<string, string>();
  return {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: () => {
      throw new DOMException('quota', 'QuotaExceededError');
    },
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  } as unknown as Storage;
}

/** Every operation throws: cookies / site data blocked, supervised profile. */
function blockedStorage(): Storage {
  const boom = () => {
    throw new DOMException('The operation is insecure.', 'SecurityError');
  };
  return {
    getItem: boom,
    setItem: boom,
    removeItem: boom,
    clear: boom,
    key: boom,
    length: 0,
  } as unknown as Storage;
}

describe('applyRemoteProgress survives an unwritable / unreadable profile', () => {
  it('does not throw when every write is rejected (quota exhausted)', () => {
    vi.stubGlobal('localStorage', quotaFullStorage());
    expect(() => applyRemoteProgress(REMOTE, makeSetters())).not.toThrow();
  });

  it('does not throw when storage is fully blocked (getItem raises SecurityError)', () => {
    vi.stubGlobal('localStorage', blockedStorage());
    expect(() => applyRemoteProgress(REMOTE, makeSetters())).not.toThrow();
  });

  it('still applies the React-state half of the restore, which needs no storage', () => {
    // The setters are the part that CAN succeed on a broken profile, so they are
    // the measure of "restored as much as possible". Previously the throw landed
    // before some of them ran.
    vi.stubGlobal('localStorage', quotaFullStorage());
    const setters = makeSetters();
    applyRemoteProgress(REMOTE, setters);
    expect(setters.setName).toHaveBeenCalledWith('Ana');
    expect(setters.setOnboarded).toHaveBeenCalledWith(true);
  });

  it('reaches the END of the restore, not just the point that used to throw', () => {
    // The regression was positional: writes before the UI-preferences block were
    // already guarded, so a test that only checked early keys would have passed
    // while everything later was still dropped. Assert on the LAST sections.
    const written = new Map<string, string>();
    vi.stubGlobal('localStorage', {
      getItem: () => null,
      setItem: (k: string, v: string) => {
        // Reject exactly the key that used to abort the whole function, and let
        // everything else through — the essence of "each write fails
        // independently".
        if (k === 'darkMode') throw new DOMException('quota', 'QuotaExceededError');
        written.set(k, v);
      },
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    } as unknown as Storage);

    applyRemoteProgress(REMOTE, makeSetters());

    // Sections that sit after the old throw point.
    expect(written.get('nh_prestige'), 'prestige never restored').toBe('3');
    expect(written.get('nh_hearts_always_on'), 'hearts setting never restored').toBe('true');
    expect(written.get('nh_last_ex'), 'last exercise never restored').toBe('flashcards');
    // heritageStory is stored JSON-encoded (checked against the module, not
    // assumed); nh_letter_to_self is stored raw.
    expect(written.get('heritageStory'), 'heritage story never restored').toBe('"baka"');
    // maja_persona is stored RAW, and this assertion previously required the
    // quoted form — encoding the bug rather than catching it. getPersona() looks
    // the stored value up directly in PERSONA_CONFIG, and PersonaScreen looks it
    // up in PERSONAS, so '"teacher"' matched neither: a learner who picked Ivo
    // got Maja on any device that restored from sync. Asserting the raw form is
    // what makes this test describe correct behaviour.
    expect(written.get('maja_persona'), 'Maja persona never restored').toBe('teacher');
    expect(written.get('nh_letter_to_self'), 'letter to self never restored').toBe('Dragi ja,');
    // And the rejected key is simply absent rather than fatal.
    expect(written.has('darkMode')).toBe(false);
  });

  it('routes every storage access through the guards', () => {
    // Structural guard. The original fix regressed precisely because raw calls
    // were left behind, so pin that only _safeSet's own implementation may touch
    // localStorage directly. (Comments legitimately name it — strip them first.)
    const src = readFileSync(resolve(__dirname, '../lib/applyRemoteProgress.ts'), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '');
    expect(src.match(/localStorage\.getItem/g), 'raw getItem found').toBeNull();
    // Exactly one: the write inside _safeSet.
    expect(src.match(/localStorage\.setItem/g) ?? []).toHaveLength(1);
  });
});
