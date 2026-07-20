/**
 * session-coverage.test.ts — Wave 1 coverage gate (2026-07 session catchment).
 *
 * Invariant: every screen routable from AppRouter is EITHER reachable by the
 * Daily Session (SESSION_SCREEN_IDS — the pools + adaptive map) OR consciously
 * listed in OUTSIDE_SESSION below. Adding a screen to AppRouter without
 * classifying it fails this test — "the daily session can use all parts of the
 * app" is an invariant, not an aspiration.
 *
 * To classify a new screen:
 *  - If it meets the session contract (goBack+award props, bounded drill/quiz,
 *    completion signal via completeExercise or the useAward path), register it
 *    in CEFR_EXERCISE_POOL (src/lib/sessionPools.ts) with a difficulty tier.
 *  - Otherwise add it to OUTSIDE_SESSION with the others of its kind, and say
 *    why in the PR. Shrinking this list (Waves 2-3: wiring references and
 *    scenario screens for completion) is progress; growing it is a decision.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { SESSION_SCREEN_IDS, CEFR_EXERCISE_POOL } from '../hooks/useDailySession';
import { EXERCISE_DIFFICULTY } from '../lib/sessionPools';

// Screens deliberately not servable as daily-session slots. Coarse groups from
// the Wave-1 eligibility audit; per-screen wiring reviews continue in Waves 2-3.
const OUTSIDE_SESSION: string[] = [
  // ── Navigation hubs, catalogs, pickers, dashboards ──
  'adaptive_review',
  'analytics',
  'arcade',
  'badges',
  'dashboard',
  'favorites',
  'frequency_track',
  'friends',
  'grammar',
  'grammar_track',
  'grammar_unit_detail',
  'grammarmap',
  'grammarvideos',
  'heritage_mode',
  'heritage_path',
  'learnpath',
  'lesson',
  'listeningpath',
  'map',
  'mcresult',
  'mistakes',
  'my_words',
  'personas',
  'practical',
  'profile',
  'pronunciation_course',
  'readlist',
  'storyselect',
  'welcome',
  // ── Assessment / placement flows (own lifecycle, not a daily drill) ──
  'cefrtest',
  'certificate',
  'equivalency', // CEFR certification exam (own store, setScr-only exit) — regrouped from reference in Wave 4
  'grammar_diagnosis',
  'levelquiz',
  'placement',
  // ── Reference / browse screens ──
  // Wave 4 (2026-07) registered 26 of the original 35: 13 with real quiz+award
  // completion joined the graded pool, 11 bounded bilingual browse screens
  // carry the reference auto-complete contract (max one per session), and
  // dialect_awareness/phraseofday rotate through the Croatia slot. Each
  // remaining exclusion has a hard blocker:
  'dialects', // redundant reading-only twin of dialect_awareness (which is served, with quiz)
  'grammarexplainer', // AI lesson generator — per-use generation cost + history-API internal nav
  'grammarreader', // per-word-tap AI cost, pure exploration, no completion concept
  'pitch_accent', // 4-lesson guided course — exceeds the 2–6 min session-slot envelope
  'reading', // renders null without parent-held passage state (rp/rph/…); served via readlist
  'scenes', // sprawling catalog (renders every scene); vocabscenes serves this ground interactively
  'slang', // age-gated adult register + 150-entry sprawling catalog — not auto-servable
  // ── Culture / immersion content outside CROATIA_POOL ──
  // Wave 2 (2026-07) rotated 19 of these into the Croatia slot and moved
  // alka/sibil (real graded drills) into CEFR_EXERCISE_POOL. The six that
  // remain each have a hard blocker for a generic session slot:
  'crmap', // Google Maps embed + external directions — not language content
  'croatiaathletes', // English-language sports roster with outbound links only
  'easter', // seasonal theming + quiz permanently locks after one completion
  'heritage', // form-driven personal AI story generator — needs user setup, not servable cold
  'immersion', // navigation hub (needs setScr), not an activity
  'maja', // premium-gated (paywall for non-subscribers)
  // ── Animated lessons / long-form learn content (LEARN_PATH surface) ──
  'animlesson',
  'fleetinga',
  'future_tense_lesson',
  'micro_lesson',
  'past_tense_lesson',
  'video_lesson',
  // ── AI-driven / unbounded / utility screens ──
  // Wave 3 (2026-07) registered graded_input, ai_story, listening, conjpractice,
  // phoneme_practice, roleplay (CEFR pool) and speaking_sprint (production pool).
  // Each remaining exclusion has a hard blocker for a generic session slot:
  'aiconvo', // per-turn AI cost; the session's conversation anchor is 'dialogue' with AI one tap away
  'advanced_vocab', // open-ended reference catalog — no bounded round or finish line
  'journal', // personal vocab utility — no completion concept, receives no award prop
  'live_tutor', // premium-gated at the router (paywall for non-subscribers)
  'storymode', // completion contingent on scroll-to-end + 5 word-taps — can silently never fire; ai_story covers this need
  'conjlab', // hub — completes only after entering an inner drill; conjpractice serves conjugation in-session
  'photo_vocab', // no completion signal; AI-vision cost 2/use; camera-centric utility
  'pronunciation_assess', // hard mic requirement (no keyboard path) + strands when all phrases skipped
  // ── Region detail pages (informational, launched from Krajevi) ──
  'region_bibinje',
  'region_hercegovina',
  'region_knin',
  'region_labin',
  'region_mostar',
  'region_split',
  'region_tomislavgrad',
  'region_vinkovci',
  'region_vukovar',
  'region_zagreb',
  // ── App chrome / account / legal ──
  'admin',
  'contact',
  'privacy',
  'terms', // Terms of Service — legal copy, regrouped from reference in Wave 4
];

function routableScreens(): string[] {
  const src = readFileSync('src/components/AppRouter.tsx', 'utf8');
  return [...new Set([...src.matchAll(/currentScreen === '([a-z_0-9]+)'/g)].map((m) => m[1]!))];
}

describe('Wave 1 — session coverage gate', () => {
  const routable = routableScreens();
  const outside = new Set(OUTSIDE_SESSION);

  it('every routable screen is session-reachable or consciously excluded', () => {
    const unclassified = routable.filter((s) => !SESSION_SCREEN_IDS.has(s) && !outside.has(s));
    expect(
      unclassified,
      `Unclassified screens — register in CEFR_EXERCISE_POOL or add to OUTSIDE_SESSION with a reason: ${unclassified.join(', ')}`,
    ).toEqual([]);
  });

  it('no screen is both excluded and session-reachable', () => {
    const both = OUTSIDE_SESSION.filter((s) => SESSION_SCREEN_IDS.has(s));
    expect(both, both.join(', ')).toEqual([]);
  });

  it('no stale exclusions (every excluded screen still routable)', () => {
    const routableSet = new Set(routable);
    const stale = OUTSIDE_SESSION.filter((s) => !routableSet.has(s));
    expect(stale, stale.join(', ')).toEqual([]);
  });

  it('exclusion list has no duplicates', () => {
    expect(new Set(OUTSIDE_SESSION).size).toBe(OUTSIDE_SESSION.length);
  });
});

describe('Wave 1 — pool registration integrity', () => {
  it('pool ids are unique and every pool id has a difficulty tier', () => {
    const ids = CEFR_EXERCISE_POOL.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    const untiered = CEFR_EXERCISE_POOL.filter((e) => !(e.id in EXERCISE_DIFFICULTY));
    expect(
      untiered.map((e) => e.id),
      'pool entries missing EXERCISE_DIFFICULTY',
    ).toEqual([]);
  });

  it('the 25 Wave-1 screens are registered', () => {
    const screens = new Set(CEFR_EXERCISE_POOL.map((e) => e.screen));
    for (const s of [
      'declension',
      'padezi',
      'vocative',
      'ordinals',
      'pronouns',
      'modal',
      'conjdrill',
      'verbdrill',
      'fillstory',
      'emogender',
      'profgender',
      'proncontrast',
      'vocabscenes',
      'reflexive',
      'tenseflip',
      'casetransformer',
      'relpron',
      'svojmoj',
      'diminutives',
      'wordfamilies',
      'collocations',
      'riddles',
      'logicquiz',
      'translate_drills',
      'wordform',
    ]) {
      expect(screens.has(s), `${s} not registered`).toBe(true);
    }
  });

  it('the 21 Wave-2 screens are session-reachable', () => {
    // 19 rotate through the Croatia slot; alka/sibil joined the graded pool.
    for (const s of [
      'emergency',
      'foodorder',
      'kafic',
      'restaurant',
      'school',
      'survival_dinner',
      'practical_croatian',
      'diaspora',
      'events',
      'football',
      'basketball',
      'gym',
      'kings',
      'postcard',
      'civic',
      'croatia_today',
      'croatianews',
      'baka_summer',
      'bureaucratic',
      'alka',
      'sibil',
    ]) {
      expect(SESSION_SCREEN_IDS.has(s), `${s} not session-reachable`).toBe(true);
    }
  });

  it('the 7 Wave-3 screens are session-reachable', () => {
    // Six in the CEFR pool (graded reader, AI story, listening quiz, smart
    // conjugation, phonemes, roleplay) + speaking_sprint in the production pool.
    for (const s of [
      'graded_input',
      'ai_story',
      'listening',
      'conjpractice',
      'phoneme_practice',
      'roleplay',
      'speaking_sprint',
    ]) {
      expect(SESSION_SCREEN_IDS.has(s), `${s} not session-reachable`).toBe(true);
    }
  });

  it('the 26 Wave-4 screens are session-reachable', () => {
    // 13 graded (quiz+award), 11 reference-tagged browse, 2 Croatia rotation.
    for (const s of [
      'alphabet',
      'convmatch',
      'falsefr',
      'phonology',
      'padezifull',
      'aspect',
      'conditional',
      'tenses',
      'texting',
      'formalregister',
      'impersonal',
      'techvoc',
      'pitchaccent',
      'opposites',
      'clothes',
      'weather',
      'bodydesc',
      'countries',
      'professions',
      'lifeevents',
      'brzalice',
      'tivicompare',
      'colorquirk',
      'idioms',
      'dialect_awareness',
      'phraseofday',
    ]) {
      expect(SESSION_SCREEN_IDS.has(s), `${s} not session-reachable`).toBe(true);
    }
  });

  it('reference-tagged entries are exactly the Wave-4b browse set', () => {
    // The reference flag drives auto-complete-on-return — a graded drill
    // acquiring it by accident would skip its quiz gate. Lock the set.
    const tagged = CEFR_EXERCISE_POOL.filter((e) => e.reference)
      .map((e) => e.screen)
      .sort();
    expect(tagged).toEqual(
      [
        'opposites',
        'clothes',
        'weather',
        'bodydesc',
        'countries',
        'professions',
        'lifeevents',
        'brzalice',
        'tivicompare',
        'colorquirk',
        'idioms',
      ].sort(),
    );
  });
});

// ── Discovery slot behaviour ─────────────────────────────────────────────────
import { buildSessionActivities } from '../hooks/useDailySession';

describe('Wave 1 — discovery slot', () => {
  it('serves the least-recently-served unlocked exercise (A2 has fill headroom)', () => {
    // B1+ default sessions have no Priority-3 headroom (the four guaranteed
    // slots consume the fill target) — their window onto the widened pool is
    // the LRS bonus round. A1/A2 sessions DO have a fill slot, and discovery
    // must hand it to the least-recently-served exercise.
    localStorage.clear();
    const served: Record<string, string> = {};
    for (const e of CEFR_EXERCISE_POOL) {
      if (e.screen !== 'vocabscenes') served[e.screen] = '2026-01-01';
    }
    localStorage.setItem('nh_session_served', JSON.stringify(served));
    const screens = buildSessionActivities('A2').map((a) => a.screen);
    expect(screens, screens.join(', ')).toContain('vocabscenes');
  });

  it('does not change session length (discovery displaces, never adds)', () => {
    localStorage.clear();
    const control = buildSessionActivities('B1').length;
    localStorage.clear();
    const served: Record<string, string> = {};
    for (const e of CEFR_EXERCISE_POOL) served[e.screen] = '2026-01-01';
    localStorage.setItem('nh_session_served', JSON.stringify(served));
    expect(buildSessionActivities('B1').length).toBe(control);
  });
});
