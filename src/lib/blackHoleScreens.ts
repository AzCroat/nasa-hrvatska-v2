/**
 * blackHoleScreens — LEARN_PATH screens that don't self-report completion;
 * the launcher's dwell timer (useScreenLauncher.launchPathItem) grants lc/gc
 * credit after 20s on-screen. Extracted from useScreenLauncher for max-lines
 * (data only — the dwell mechanism stays in the hook).
 *
 * IMPORTANT — every key here MUST be the `go` value of a served LEARN_PATH item
 * (functions/api/content/_data/learnPath.js, which the client hydrates via
 * /api/content/core). Dwell credit fires ONLY from launchPathItem's black-hole
 * `else` branch, so a key is inert unless a served path item launches it:
 *   - keys with no served `go` are dead config (the screen is reachable only via
 *     search/setScr, which runs no dwell timer) — they must not be added here;
 *   - keys equal to an explicit launch branch (lesson/grammar/listening/
 *     speaking/mcgame/animlesson) are shadowed by that branch and never reach
 *     the black-hole `else`.
 * blackHoleScreens.test.ts enforces both rules against the served path. A prior
 * version accumulated 28 dead/shadowed entries that this test now prevents.
 */
/**
 * XP paid by the dwell timer. Trimmed 15 → 5 in the XP-economy rebalance
 * (fluency initiative #3, 2026-08-14): presence on an informational screen is
 * worth a token amount, not a third of a graded drill — the incentive gradient
 * must point at production. The lc/gc counter credit is unchanged (it drives
 * Learn-Path completion and stays as designed).
 */
export const DWELL_XP = 5;

// Screens in LEARN_PATH that don't self-report completion — dwell ≥20s grants credit.
export const BLACK_HOLE_SCREENS: Record<string, string> = {
  texting: 'lc',
  roleplay: 'lc',
  readlist: 'lc',
  idioms: 'lc',
  brzalice: 'lc',
  history: 'lc',
  recipes: 'lc',
  listeningpath: 'lc',
  falsefr: 'lc',
  dialects: 'lc',
  alphabet: 'lc',
  techvoc: 'lc',
  proverbs: 'lc',
  bureaucratic: 'lc',
  writing: 'lc',
  pronunciation_course: 'lc',
  // grammarmap (GrammarConstellation), reflexive (ReflexiveScreen), production_drill
  // (ProductionDrillScreen), pitchaccent (PitchAccentScreen), pitch_accent
  // (PitchAccentMastery) and shadowing (ShadowingScreen) were REMOVED from the
  // dwell-credit map: they are interactive quizzes/drills that already self-credit
  // lc/gc (+ their own vs key) on completion, so the 20s dwell DOUBLE-COUNTED the
  // stat and — because the launcher pre-writes the dwell vs key on tap — SUPPRESSED
  // the screen's own credit (lost entirely if the learner finished in <20s and left).
  // Their path nodes still complete via each screen's self-credited vs key
  // (pitchaccent→'pitchaccent', pitch_accent→'pitch_accent', shadowing→'shadowing')
  // or the ckRule's lc/gc fallback. Per rule 6, black-hole dwell is for informational
  // screens WITHOUT a built-in quiz — these have one. dialects/history/etc. stay:
  // they are pure reference screens with no self-credit path.
};
