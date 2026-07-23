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
  pitchaccent: 'lc',
  shadowing: 'lc',
  proverbs: 'lc',
  bureaucratic: 'lc',
  writing: 'lc',
  pitch_accent: 'gc',
  pronunciation_course: 'lc',
  // grammarmap (GrammarConstellation), reflexive (ReflexiveScreen) and
  // production_drill (ProductionDrillScreen) were REMOVED from the dwell-credit map:
  // they are interactive drills that already self-credit gc (+ their own vs key) on
  // completion, so the 20s dwell double-counted production_drill's gc and — because
  // the launcher pre-wrote the dwell vs key on tap — SUPPRESSED reflexive/grammarmap's
  // own gc credit (lost entirely if the learner finished in <20s and left). Their
  // path nodes still complete: reflexive/grammarmap via their self-credited vs key,
  // production_drill via its gcAtLeast/lcAtLeast fallback (its node never used a vs
  // key). Per rule 6, black-hole dwell is for informational screens WITHOUT a
  // built-in quiz — these have one.
};
