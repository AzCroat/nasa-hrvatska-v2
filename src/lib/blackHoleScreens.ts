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
  dialects: 'lc',
  proverbs: 'lc',
  bureaucratic: 'lc',
  writing: 'lc',
  pronunciation_course: 'lc',
  // alphabet (AlphabetScreen), falsefr (FalseFriendsScreen) and techvoc
  // (TechVocScreen) were removed on 2026-09-23 for the SAME reason as the six
  // below, found by deriving it rather than waiting for it: each has a built-in
  // quiz that writes its own vs key AND its own lc, so the pre-write suppressed
  // that credit for anyone who finished inside 20s. `alphabet` was the costly
  // one — it gates its 20 XP award on the same marker, and award() is what
  // signals Today's Session, so the day-one curriculum drill could not be
  // completed at all by a learner who had ever tapped lp10. See
  // dwellPreWriteSuppression.test.tsx, which asks the question of every key
  // here. `writing` (WritingScreen) STAYS: it self-writes vs and NO counter, so
  // dwell strictly ADDS the lc it would never have written — nothing is
  // suppressed, and that exemption is pinned in both staleness directions.
  //
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
  //
  // THE COST OF A REMOVAL, stated: a learner who opens one of these and leaves
  // without finishing now earns nothing there, where twenty seconds of presence
  // used to pay 1 lc and DWELL_XP. Every one of them has a completion control,
  // and its path node still ticks — on the screen's own vs write, or on the
  // lcAtLeast fallback the ckRule already carries.
};

/**
 * The black-hole screens that RENDER FROM THE CONTENT PAYLOAD, and therefore
 * show a learner nothing at all until it arrives (or if it never does).
 *
 * THE DWELL TIMER PAID FOR A PAGE THAT SHOWED NOTHING. `launchPathItem` arms a
 * 20-second timer on tap and credits `lc`/`gc` + DWELL_XP when it fires,
 * knowing only the screen id — not whether that screen had anything to display.
 * Content lands ~9 s after first paint in the E2E harness and NEVER on a failed
 * fetch, so a learner who tapped a path item and sat on "Loading this page" or
 * "couldn't be loaded" for twenty seconds was credited a completed
 * informational lesson and 5 XP for reading nothing. That is NEVER-DO 14 — do
 * not credit work the learner could not do — reached through an interaction
 * between two features that are each correct alone.
 *
 * SEVEN OF THIRTEEN, and the split is why this is a set rather than a blanket
 * rule: `texting`, `roleplay`, `readlist`, `listeningpath`, `writing` and
 * `pronunciation_course` render from static imports and are unaffected by the
 * payload, so withholding their credit when content happens to be absent would
 * take away a completion the learner genuinely earned.
 *
 * The VISIT half is deliberately untouched. `launchPathItem` writes the screen's
 * `vs` key the instant the item is tapped, as a VISIT marker so the path node
 * cannot stick incomplete — CLAUDE.md records what conflating that marker with
 * a completion marker cost on AlphabetScreen. This gates only the COUNTER and
 * the XP, which is what "credit" means in NEVER-DO 14.
 *
 * DERIVED, NOT HAND-LISTED: `dwellContentGate.test.tsx` walks the REAL router and
 * the REAL import graph from each key above and requires this set to equal the
 * keys whose screen reaches `useContent`/`getContent`/`peekContent`, in both
 * directions — so a screen that starts or stops reading the payload fails there
 * instead of quietly mis-crediting.
 */
export const CONTENT_DEPENDENT_BLACK_HOLE_SCREENS: ReadonlySet<string> = new Set([
  'idioms',
  'brzalice',
  'history',
  'recipes',
  'dialects',
  'proverbs',
  'bureaucratic',
]);

/**
 * How many extra full dwells the timer will wait for the content payload before
 * giving up. Three, so a learner who tapped in during the ~9 s content window is
 * credited on the FIRST fire, and one whose payload arrives late is still
 * credited on a later one; past this the page has been unreadable for over a
 * minute and no credit is owed. See the re-arm block in lib/dwellCredit.ts: a
 * bare return would have withheld the counter for ever, because `vs` is written
 * on tap and `wasFirstVisit` is false on every later visit.
 */
export const DWELL_CONTENT_WAITS = 3;
