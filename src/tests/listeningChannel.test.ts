// listeningChannel.test.ts — pins the listening-channel fix (2026-08-14).
//
// The audit finding: listening was the weakest skill channel and invisible to
// the adaptive scheduler ('listening' was a pool-only tag), the long-form
// listening screens bypassed the completion authority (so a Today's Session
// slot serving them could never complete), and every phrase in the app spoke
// with a single synthesized voice.
//
// What must stay true:
//   1. 'listening' is a scheduled adaptive category — appended LAST so a
//      brand-new user's first adaptive pick is still genitive.
//   2. The adaptive pick routes listening to the authored graded-story bank
//      ('listening_comprehension'), NOT the AI-quota-spending ai_listening.
//   3. Both long-form listening screens are registered with the completion
//      authority: effort policy (replayable, score-scaled XP has no 75% gate),
//      lc credit, honest 'listening' quest.
//   4. completeExercise on a listening finish feeds the session-category
//      bridge so cat_listening reschedules from real accuracy.
//   5. The TTS endpoint accepts the 'srecko' narrator (hr-HR-SreckoNeural)
//      and the client speak() path honors a per-call voice override — the
//      mechanism behind per-set narrator alternation.
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { ALL_CATEGORIES } from '../lib/adaptive';
import { resolveAdaptiveActivity } from '../hooks/useDailySession';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';
import { completeExercise } from '../hooks/useExerciseCompletion';
import { setSessionCategory } from '../lib/sessionCategory';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('listening as a scheduled adaptive category', () => {
  it('is in ALL_CATEGORIES after the original set (genitive stays the new-user first pick)', () => {
    expect(ALL_CATEGORIES).toContain('listening');
    expect(ALL_CATEGORIES[0]).toBe('genitive');
    // The real invariant is genitive-first plus listening after every
    // original category — "last" only held until the next promotion
    // ('writing', production-teaching 2026-08-18, now sits behind it; its own
    // last-position pin lives in productionTeaching.test.ts).
    expect(ALL_CATEGORIES.indexOf('listening')).toBeGreaterThan(ALL_CATEGORIES.indexOf('vocab-b2'));
  });

  it('adaptive pick routes listening to the authored graded-story bank', () => {
    // Mark every other category as freshly practised and not due, leaving
    // listening never-seen → starved → front of the queue.
    const now = Date.now();
    const cats: Record<string, unknown> = {};
    for (const c of ALL_CATEGORIES) {
      if (c === 'listening') continue;
      cats[c] = { stability: 5, recentAccuracy: 0.9, due: now + 5 * 86400000, lastSeen: now };
    }
    localStorage.setItem('nh_cat_sr', JSON.stringify(cats));

    const pick = resolveAdaptiveActivity('A1', new Set());
    expect(pick).not.toBeNull();
    expect(pick!.category).toBe('listening');
    // The zero-AI-cost authored bank — never the quota-spending ai_listening.
    expect(pick!.screen).toBe('listening_comprehension');
    expect(pick!.id).toBe('cat_listening');
  });
});

describe('completion authority registration', () => {
  it.each(['listening_comprehension', 'ai-listening'] as const)(
    '%s: effort policy, lc credit, honest listening quest',
    (key) => {
      const entry = EXERCISE_COMPLETION[key];
      expect(entry).toBeDefined();
      expect(entry!.policy.kind).toBe('effort');
      expect(entry!.policy.statKind).toBe('lc');
      expect(entry!.questKind).toBe('listening');
      expect(entry!.activityType).toBe('listening');
    },
  );

  it('a listening finish credits lc once and pays XP per run (awardOnReplay)', () => {
    let stats: { vs: string[]; lc: number } = { vs: [], lc: 0 };
    const setStats = (fn: (prev: typeof stats) => typeof stats) => {
      stats = fn(stats);
    };
    const awards: number[] = [];
    const finish = () =>
      completeExercise({
        key: 'listening_comprehension',
        score: 3,
        total: 5, // 60% — below the gated threshold; effort policy must not gate
        xp: 14,
        stats,
        setStats,
        award: (xp) => awards.push(xp),
        awardOnReplay: true,
      });

    expect(finish().passed).toBe(true);
    expect(stats.lc).toBe(1);
    expect(stats.vs).toContain('listening_comprehension');
    // Replay: XP pays again, lc/vs credit does not double.
    expect(finish().passed).toBe(true);
    expect(stats.lc).toBe(1);
    expect(awards).toEqual([14, 14]);
  });

  it('feeds the session-category bridge: cat_listening reschedules from real accuracy', () => {
    setSessionCategory('cat_listening');
    completeExercise({
      key: 'listening_comprehension',
      score: 4,
      total: 5,
      xp: 17,
      stats: { vs: [], lc: 0 },
      setStats: () => {},
    });
    const cats = JSON.parse(localStorage.getItem('nh_cat_sr') ?? '{}');
    expect(cats.listening).toBeDefined();
    expect(cats.listening.due).toBeGreaterThan(Date.now());
    expect(cats.listening.lastSeen).toBeGreaterThan(0);
  });
});

describe('narrator variety (source pins)', () => {
  it('the TTS endpoint accepts the srecko narrator and maps it to hr-HR-SreckoNeural', () => {
    const src = readFileSync('functions/api/tts.js', 'utf8');
    expect(src).toContain("body.voice === 'srecko'");
    expect(src).toContain('hr-HR-SreckoNeural');
    // The voice is part of both cache identities, so narrators never collide.
    expect(src).toMatch(/tts-cache\.internal\/v3\/\$\{voice\}/);
    expect(src).toMatch(/\$\{voice\}\|\$\{slow\}/);
  });

  it('the client speak path honors a per-call voice override', () => {
    const src = readFileSync('src/lib/audio.ts', 'utf8');
    // speakAzure prefers the per-call narrator and falls back to the stored preference.
    expect(src).toContain('opts?.voice ?? getVoicePreference()');
  });

  it('listening sets alternate the narrator per set, not per question', () => {
    const src = readFileSync('src/components/practice/listening/QuestionView.tsx', 'utf8');
    expect(src).toMatch(/selectedSetIdx ?\?\? 0\) % 2 === 1 \? 'srecko'/);
  });
});
