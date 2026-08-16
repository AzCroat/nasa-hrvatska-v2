/**
 * progressSnapshot — pure function that builds the canonical progress document.
 *
 * Previously copy-pasted 3 times across App.jsx (doSyncNow, saveSnapshot, auto-save
 * useEffect). This module is the single source of truth for what gets persisted.
 */
import { getSR } from './srs.js';
import { getStreak, getStreakFreezes } from './appUtils.js';
import { gP } from './firebase.js';
import { localDateStr as _todayStr, weekKey as _weekKey } from './dateUtils.js';
import { snapshotCertifications } from './cefrCertification.js';
import { snapshotMasteryLedger } from './masteryLedger.js';
import { lsGet } from './safeStorage.js';
import type { Stats } from '../types/index.js';
import { normalizePersonaKey } from './personaKey';

interface ProgressSnapshotParams {
  uid: string;
  name: string;
  stats: Stats;
  dchlA: boolean[];
  dchlSl: string[];
  favs: unknown[];
  jWords: unknown[];
}

/**
 * Read a string[] from localStorage, or undefined when absent/empty. Returning
 * undefined lets Firestore's setDoc(merge) drop the field, so an empty local set
 * never overwrites server history — the same guard the nh_journey field uses.
 */
function _strArrOrUndef(key: string): string[] | undefined {
  try {
    const p = JSON.parse(lsGet(key) || '[]');
    if (!Array.isArray(p)) return undefined;
    const arr = p.filter((x): x is string => typeof x === 'string');
    return arr.length > 0 ? arr : undefined;
  } catch {
    return undefined;
  }
}

/** Merge React dc state with localStorage dcDay3 — truth is the union of answered positions. */
function _bestDc(dchlA: boolean[], dchlSl: string[]) {
  const today = _todayStr();
  let localAns: boolean[] = [false, false, false];
  let localSel: string[] = ['', '', ''];
  try {
    const p = JSON.parse(lsGet('dcDay3') || '{}');
    if (p.day === today) {
      if (Array.isArray(p.answered)) localAns = p.answered;
      if (Array.isArray(p.selected) && typeof p.selected[0] === 'string') localSel = p.selected;
    }
  } catch (_) {}
  const bestAns = (dchlA && dchlA.length > 0 ? dchlA : [false, false, false]).map(
    (a, i) => a || localAns[i] || false,
  );
  const bestSel = dchlSl && dchlSl.some((s) => s) ? dchlSl : localSel;
  return { day: today, answered: bestAns, selected: bestSel };
}

export function buildProgressSnapshot({
  uid,
  name,
  stats,
  dchlA,
  dchlSl,
  favs,
  jWords,
}: ProgressSnapshotParams) {
  const dc = _bestDc(dchlA, dchlSl);
  const weekXP = parseInt(lsGet('nh_week_xp_' + _weekKey()) || '0', 10) || 0;
  const fbUpdated = (() => {
    try {
      const p = gP(uid) as Record<string, unknown> | null;
      return (p && (p._fbUpdated as number)) || 0;
    } catch {
      return 0;
    }
  })();
  const cooldown = (() => {
    try {
      return JSON.parse(lsGet('xpCooldown') || '{}');
    } catch {
      return {};
    }
  })();
  // Ensure stats.str is the maximum of React state and uStreak localStorage.
  // React state may lag by one render cycle after mergeStatsFromRemote runs.
  // Without this, a push immediately after a snapshot merge can write a stale
  // lower str value to the progress blob, causing streak divergence across devices.
  const _lsStreak = getStreak();
  const _bestStr = Math.max(stats.str || 0, _lsStreak.count || 0);
  const _stats = _bestStr !== (stats.str || 0) ? { ...stats, str: _bestStr } : stats;

  return {
    name,
    stats: _stats,
    cp: true,
    onboarded: lsGet('onboarded') === 'true',
    savedAt: Date.now(),
    _fbUpdated: fbUpdated,
    sr: getSR(),
    streak: getStreak(),
    freezes: getStreakFreezes(),
    favs: favs || [],
    journal: jWords || [],
    dc,
    cooldown,
    weekXP,
    weekXPKey: _weekKey(), // 'YYYY-WNN' — used by applyRemoteProgress to reject stale cross-week values
    // User settings — must sync so all devices share the same preferences
    nh_level: lsGet('nh_level') || '',
    nh_goal: lsGet('nh_goal') || '',
    nh_culture: lsGet('nh_culture') || '',
    nh_placement_done: lsGet('nh_placement_done') === 'true' || lsGet('placement_done') === 'true',
    nh_grammar_track_done: lsGet('nh_grammar_track_done') === 'true',
    // ── Structured-track progress — device-local done/mastery sets, union-merged
    // across devices (Content-Rec #1 listening, #8 phonemes, #9 conversation).
    // These curricula stored completion only on-device; syncing them means a
    // learner's path progress follows them to a new device. undefined when empty
    // so an empty local set never clobbers server history (nh_journey pattern).
    nh_listening_track_done: _strArrOrUndef('nh_listening_track_done'),
    nh_interaction_track_done: _strArrOrUndef('nh_interaction_track_done'),
    nh_phonemes_mastered: _strArrOrUndef('nh_phonemes_mastered'),
    nh_daily_goal_xp: parseInt(lsGet('nh_daily_goal_xp') || '0', 10) || 0,
    // UI / accessibility preferences — null means "never explicitly set; use system default"
    // Storing the raw string (null | 'true' | 'false') preserves the three-state semantic.
    darkMode: lsGet('darkMode'),
    nh_dm_explicit: lsGet('nh_dm_explicit') === '1',
    nh_sound_enabled: lsGet('nh_sound_enabled'),
    nh_haptic_enabled: lsGet('nh_haptic_enabled'),
    nh_voice_pref: lsGet('nh_voice_pref'),
    // SP8e: playback rate (0.5 | 0.75 | 1, default 1 → unset)
    nh_speech_rate: lsGet('nh_speech_rate'),
    nh_font_size: lsGet('nh_font_size'),
    nh_reduce_motion: lsGet('nh_reduce_motion') === 'true',
    nh_autotts: lsGet('nh_autotts') === 'true',
    // Journey milestones — additive union on merge; never truncated below 200 entries
    // Return undefined when local is empty — Firestore's setDoc(merge) drops undefined
    // fields, so a missing/empty local value won't overwrite server milestone history.
    nh_journey: (() => {
      try {
        const parsed = JSON.parse(lsGet('nh_journey') || 'null');
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : undefined;
      } catch {
        return undefined;
      }
    })(),
    // Weekend warrior tracking — object { sat?: 'YYYY-MM-DD', sun?: 'YYYY-MM-DD' }
    nh_weekend_days: (() => {
      try {
        return JSON.parse(lsGet('nh_weekend_days') || '{}');
      } catch {
        return {};
      }
    })(),
    // Seasonal / campaign quest completion flags — additive: true is never overwritten by false.
    nh_uskrs_kviz_done: lsGet('nh_uskrs_kviz_done') === '1',
    nh_cq_easter_uskrs_q1: lsGet('nh_cq_easter_uskrs_q1') === '1',
    nh_cq_easter_uskrs_q2: lsGet('nh_cq_easter_uskrs_q2') === '1',
    nh_cq_easter_uskrs_q3: lsGet('nh_cq_easter_uskrs_q3') === '1',
    // Game state — sync so all devices share the same live/prestige/checkpoint status
    nh_hearts: (() => {
      try {
        return JSON.parse(lsGet('nh_hearts') || 'null');
      } catch {
        return null;
      }
    })(),
    nh_prestige: parseInt(lsGet('nh_prestige') || '0', 10),
    // Alka tournament personal best (0-9). Math.max on merge — never regresses.
    nh_alka_best: parseInt(lsGet('nh_alka_best') || '0', 10),
    nh_checkpoints: (() => {
      try {
        return JSON.parse(lsGet('nh_checkpoints') || '{}');
      } catch {
        return {};
      }
    })(),
    nh_custom_words: (() => {
      try {
        return JSON.parse(lsGet('nh_custom_words') || '[]');
      } catch {
        return [];
      }
    })(),
    // Deleted notebook entries. Must travel with the words themselves: the merge
    // unions both lists, so without this record the other device's copy re-adds
    // anything the learner deleted. See lib/customWords.ts.
    nh_custom_words_deleted: (() => {
      try {
        return JSON.parse(lsGet('nh_custom_words_deleted') || '{}');
      } catch {
        return {};
      }
    })(),
    nh_hearts_always_on: lsGet('nh_hearts_always_on') === 'true',
    nh_saved_phrases: (() => {
      try {
        // Shape is `{ phrase: savedAt }` now; the `[]` fallback still reads any
        // pre-migration array, which applyRemoteProgress resolves on the way in.
        return JSON.parse(lsGet('nh_saved_phrases') || '{}');
      } catch {
        return {};
      }
    })(),
    // Un-saved phrases. Must travel with the bookmarks: the merge unions both
    // maps, so without this the other device restores what was un-saved.
    nh_saved_phrases_deleted: (() => {
      try {
        return JSON.parse(lsGet('nh_saved_phrases_deleted') || '{}');
      } catch {
        return {};
      }
    })(),
    // Un-ticked media. Must travel with the ticks themselves: the merge unions
    // both maps, so without this record the other device's copy restores
    // anything the learner un-marked. See lib/tombstones.ts.
    nh_media_done_deleted: (() => {
      try {
        return JSON.parse(lsGet('nh_media_done_deleted') || '{}');
      } catch {
        return {};
      }
    })(),
    nh_media_done: (() => {
      try {
        return JSON.parse(lsGet('nh_media_done') || '{}');
      } catch {
        return {};
      }
    })(),
    nh_session_history: (() => {
      try {
        return JSON.parse(lsGet('nh_session_history') || '{}');
      } catch {
        return {};
      }
    })(),
    // Active-day set — the canonical streak source; union-merged across devices.
    nh_streak_days: (() => {
      try {
        return JSON.parse(lsGet('nh_streak_days') || '{}');
      } catch {
        return {};
      }
    })(),
    nh_used_free_repair: lsGet('nh_used_free_repair') === '1',
    // ── Earn-back streak data ─────────────────────────────────────────────────
    nh_earn_back: (() => {
      try {
        return JSON.parse(lsGet('nh_earn_back') || 'null');
      } catch {
        return null;
      }
    })(),
    // ── XP boost state (hero-rewards 2x boost, bought with XP) ────────────────
    nh_xp_boost_expires: parseInt(lsGet('nh_xp_boost_expires') || '0', 10) || 0,
    nh_xp_boost_last_activated: parseInt(lsGet('nh_xp_boost_last_activated') || '0', 10) || 0,
    // ── Today's daily XP — for daily-goal UI on fresh devices ────────────────
    // Stored as a value+date pair so applyRemoteProgress can write the correct key.
    nh_daily_xp_today: parseInt(lsGet('nh_daily_xp_' + _todayStr()) || '0', 10),
    nh_daily_xp_date: _todayStr(),
    // ── Lesson resume state ───────────────────────────────────────────────────
    nh_lesson_resume: (() => {
      try {
        return JSON.parse(lsGet('nh_lesson_resume') || 'null');
      } catch {
        return null;
      }
    })(),
    // ── Last exercise tracking ────────────────────────────────────────────────
    nh_last_ex: lsGet('nh_last_ex') || '',
    nh_last_ex_label: lsGet('nh_last_ex_label') || '',
    // ── Journey milestone flags ───────────────────────────────────────────────
    nh_journey_first_speaking: lsGet('nh_journey_first_speaking') === '1',
    nh_journey_first_lesson: lsGet('nh_journey_first_lesson') === '1',
    // ── Ceremony flags — packed into one object to avoid 13 top-level keys ───
    // Additive: once true, always true across devices.
    nh_ceremonies: (() => {
      const obj: Record<string, boolean> = {};
      [7, 14, 21, 30, 50, 60, 100, 365].forEach((c) => {
        if (lsGet(`nh_ceremony_streak_${c}`) === '1') obj[`streak_${c}`] = true;
      });
      [5, 11, 22, 34, 45].forEach((s) => {
        if (lsGet(`nh_stage${s}_ceremony`) === '1') obj[`stage${s}`] = true;
      });
      return obj;
    })(),
    // ── Placement test sub-scores — per-skill placement results (2026-05-20) ──
    // Without these, retaking placement on a new device starts from 0 even though
    // the user already proved their level on another device. The `nh_placement_done`
    // flag was already synced; the underlying SCORES were not.
    nh_placement_vocab: (() => {
      const v = lsGet('nh_placement_vocab');
      return v == null ? undefined : Number(v) || 0;
    })(),
    nh_placement_grammar: (() => {
      const v = lsGet('nh_placement_grammar');
      return v == null ? undefined : Number(v) || 0;
    })(),
    nh_placement_culture: (() => {
      const v = lsGet('nh_placement_culture');
      return v == null ? undefined : Number(v) || 0;
    })(),
    // ── Heritage learner settings — region, generation, mode, dialect (2026-05-20)
    // Heritage learners answer onboarding questions about their family origin
    // and preferred dialect; these tune the curriculum. Previously device-local.
    nh_heritage_saved: lsGet('nh_heritage_saved') === '1',
    nh_heritage_region: lsGet('nh_heritage_region') || undefined,
    nh_heritage_gen: lsGet('nh_heritage_gen') || undefined,
    nh_heritage_mode: lsGet('nh_heritage_mode') || undefined,
    nh_dialect: lsGet('nh_dialect') || undefined,
    heritageStory: (() => {
      try {
        return JSON.parse(lsGet('heritageStory') || 'null');
      } catch {
        return null;
      }
    })(),
    // ── AI tutor (Maja) — persona + multi-turn memory (2026-05-20) ────────────
    // Without sync, switching devices wipes the AI tutor's "memory" of the
    // learner, which is the feature's central value proposition.
    // JSON.parse'ing this threw on the raw form every in-app writer produces
    // ('cabbie' is not valid JSON), so the catch returned null and the learner's
    // chosen conversation partner was never synced to another device at all.
    maja_persona: normalizePersonaKey(lsGet('maja_persona')),
    majaMemory: (() => {
      try {
        return JSON.parse(lsGet('majaMemory') || 'null');
      } catch {
        return null;
      }
    })(),
    // ── User-written content & avatar (2026-05-20) ────────────────────────────
    nh_letter_to_self: lsGet('nh_letter_to_self') || undefined,
    nh_avatar_emoji: lsGet('nh_avatar_emoji') || undefined,
    // ── Adaptive learning data (2026-05-20) ───────────────────────────────────
    nh_freq_learned: (() => {
      try {
        return JSON.parse(lsGet('nh_freq_learned') || 'null');
      } catch {
        return null;
      }
    })(),
    nh_grammar_diagnosis: (() => {
      try {
        return JSON.parse(lsGet('nh_grammar_diagnosis') || 'null');
      } catch {
        return null;
      }
    })(),
    nh_aspect_mistakes: (() => {
      try {
        return JSON.parse(lsGet('nh_aspect_mistakes') || 'null');
      } catch {
        return null;
      }
    })(),
    // Writing-error corrections feeding Grammar Diagnosis (WritingScreen). Synced
    // like nh_aspect_mistakes so adaptive remediation targeting follows the user
    // across devices instead of diverging per-device.
    nh_writing_mistakes: (() => {
      try {
        return JSON.parse(lsGet('nh_writing_mistakes') || 'null');
      } catch {
        return null;
      }
    })(),
    // ── Immersion-mode tracking (2026-05-20) ──────────────────────────────────
    // nh_immersion_days is a JSON ARRAY of local date strings (see
    // MediaPlayerUtils.markImmersionToday), not a number. parseInt() on that
    // array-JSON always yielded NaN → 0, so the immersion streak never synced —
    // every device wrote 0 and the days were lost cross-device. Serialize the
    // array so applyRemoteProgress can union-merge it (like the other day-set
    // arrays). Non-array/corrupt values collapse to null (dropped by Firestore).
    nh_immersion_days: (() => {
      try {
        const v = JSON.parse(lsGet('nh_immersion_days') || 'null');
        return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : null;
      } catch {
        return null;
      }
    })(),
    // ── CEFR equivalency-test certifications (2026-05-20) ─────────────────────
    // Per-level pass/fail history + cooldown timestamps. Required for hard
    // CEFR gating (`isUnlocked` consults certified level when the
    // CERTIFICATION_REQUIRED feature flag is on). Undefined when the user
    // has no attempts yet — Firestore drops undefined so we don't write
    // empty state.
    nh_cefr_certifications: snapshotCertifications(),
    // ── Mastery ledger (Phase 2, 2026-08-16) ──────────────────────────────────
    // Per-(level, skill) rolling evidence from scored practice. Merge policy in
    // masteryLedger.ts (higher-evidence cell wins — it's a measurement, not a
    // reward). Undefined when empty so Firestore never stores an empty blob.
    nh_mastery_ledger: snapshotMasteryLedger(),
  };
}
