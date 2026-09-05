# CLAUDE.md — Naša Hrvatska

This file gives Claude Code full context to work effectively on this codebase without re-deriving architecture or conventions from scratch.

---

## Project Overview

**Naša Hrvatska** is a Croatian language-learning PWA (Progressive Web App) for the diaspora and heritage learners. It combines gamification (XP, streaks, hearts, leagues, host-family characters), spaced-repetition flashcards (FSRS), grammar tracks, cultural content, and AI tutoring.

- **Live URL**: https://nasahrvatska.com
- **Repo**: AzCroat/nasa-hrvatska-v2
- **Deployment**: Cloudflare Pages — every `git push origin master` auto-deploys. No manual deploy step.
- **Stack**: React 18 + Vite, Firebase (Auth + Firestore), Cloudflare Pages Functions (serverless API), Capacitor (iOS/Android), TypeScript (partial migration in progress)

---

## Development Commands

```bash
npm run dev              # Vite dev server
npm run build            # Production build (runs prebuild: convert images + generate icons)
npm run preview          # Preview production build locally
npm run test             # Vitest unit tests (run once)
npm run test:watch       # Vitest in watch mode
npm run test:coverage    # Coverage report
npm run test:e2e         # Playwright end-to-end (builds first)
npm run lint             # ESLint (src + functions)
npm run lint:fix         # Auto-fix ESLint issues
npm run typecheck        # tsc --noEmit (TypeScript check without emit)
npm run verify:firestore # Data-integrity probe against PRODUCTION (needs .env); NOT a rules check
npm run cap:sync         # Build + sync Capacitor native projects
```

---

## Directory Structure

```
src/
├── App.jsx                    # Root component — mounts context providers, routing, sync
├── data.jsx                   # Re-export barrel + legacy helpers (LEARN_PATH, flashcard data)
├── context/
│   ├── AppContext.jsx          # Global state: screen nav (scr), favs, jWords, dchl*
│   └── StatsContext.tsx        # Stats state via useReducer (statsReducer.ts)
├── hooks/
│   ├── useScreenLauncher.ts    # Screen navigation + dwell-timer XP awards (map in lib/blackHoleScreens.ts)
│   ├── useSyncManager.js       # Bidirectional Firebase sync (save + load)
│   ├── useAuth.js              # Firebase auth state
│   ├── useAward.ts             # XP + badge award logic
│   └── ...                    # 20+ other hooks
├── lib/
│   ├── firebase.js             # Firebase init, all Firestore read/write functions
│   ├── progressSnapshot.ts     # Single source of truth for what gets persisted to Firebase
│   ├── mergeStatsFromRemote.ts # Remote→local merge logic (additive, never destroys progress)
│   ├── sanitizeStats.ts        # Validates/clamps stats before they're applied
│   ├── statsReducer.ts         # useReducer for stats (XP, lc, gc, badges, vs, etc.)
│   ├── srs.js                  # Spaced repetition (FSRS algorithm)
│   ├── streak.js               # Streak calculation
│   ├── appUtils.js             # getStreak, getStreakFreezes, shared utilities
│   ├── dateUtils.js            # localDateStr, weekKey — canonical date helpers
│   ├── constants/
│   │   ├── storage.js          # All localStorage key names in one place
│   │   └── timings.js          # All timeout/delay constants (MS, TIMEOUTS)
│   └── ...                    # 25+ other lib modules
├── components/
│   ├── home/                  # HomeTab, DailyCroatianSection, PathProgressCard, etc.
│   ├── learn/                 # All lesson screens (50+), LearnTab, GrammarTrack
│   ├── practice/              # Flashcards, McGame, Dialogue, Speaking, Writing, etc.
│   ├── profile/               # StatsTab, Leaderboard, FriendsScreen, WeeklyLeague, etc.
│   ├── croatia/               # CultureTab, CityOfDay, EasterScreen, etc.
│   └── shared/                # KnightCompanion (renders prof. Kovač coach), CelebrationModal, AppToasts, AppModals, etc.
├── data/                      # Lesson content, word lists, grammar data (split from data.jsx)
└── types/
    └── index.ts               # Shared TypeScript types (Stats, etc.)

functions/
└── api/                       # Cloudflare Pages Functions (serverless)
    ├── ai-chat.js             # AI Tutor (Anthropic Claude API)
    ├── league.js              # Weekly League — requires PUSH_SUBSCRIPTIONS KV binding
    ├── contact.js             # Contact form → Resend
    ├── daily-culture.js       # Daily cultural fact generation
    └── ...                    # 15+ other API endpoints

public/                        # Static assets, SW, icons
scripts/                       # Build scripts (image conversion, icon generation)
wrangler.toml                  # Cloudflare Workers config for scheduled push notifications
```

---

## Critical Architecture: Stats & Progress

### Stats object shape (`Stats` type in `src/types/index.ts`)

```typescript
{ xp: number, lc: number, gc: number, badges: string[], vs: string[], ... }
```

- `xp` — experience points
- `lc` — lesson completions (informational/cultural screens)
- `gc` — grammar completions
- `vs` — array of visited screen keys (used by LEARN_PATH `ck` functions)
- `badges` — earned badge IDs

### statsReducer (src/lib/statsReducer.ts)

All stat mutations go through `dispatch({ type, payload })`. Never mutate stats directly. Key action types: `AWARD_XP`, `COMPLETE_LESSON`, `COMPLETE_GRAMMAR`, `VISIT_SCREEN`, `LOAD_REMOTE`.

### progressSnapshot (src/lib/progressSnapshot.ts)

**Single source of truth** for what gets persisted to Firebase. `buildProgressSnapshot()` is called by the sync manager before every save. If you add a new field to sync, add it here AND in `applyRemoteProgress` (useSyncManager.js).

### mergeStatsFromRemote (src/lib/mergeStatsFromRemote.ts)

Remote data is always merged **additively** — `Math.max()` for numbers, union for arrays. Remote data never reduces local progress. This is the safety guarantee against data loss.

---

## Critical Architecture: Learn Path

### LEARN_PATH (src/data/content.jsx)

Array of lesson descriptors. Each entry has a `ck(stats)` function that returns `true` when the lesson is "completed." Pattern for screens that award credit via dwell timer:

```javascript
ck: function(s) { return (s.vs && s.vs.includes('screenKey')) || s.lc >= N; }
```

Always use `vs.includes(screenKey)` as the primary check. The `lc >= N` fallback is for users who completed the lesson before the `vs` system existed.

### BLACK_HOLE_SCREENS (src/lib/blackHoleScreens.ts; dwell mechanism in src/hooks/useScreenLauncher.ts)

Object mapping screen key → stat type (`'lc'` or `'gc'`). When a user spends 20 seconds on a screen in this map, it automatically:

1. Adds the screen key to `stats.vs`
2. Increments `stats.lc` or `stats.gc`
3. Awards 5 XP (`DWELL_XP` — trimmed from 15 in the 2026-08-14 XP rebalance: presence pays a token, production pays a premium via `PRODUCTION_XP_MULTIPLIER`)

Every screen that appears in LEARN_PATH and doesn't have a quiz must be in `BLACK_HOLE_SCREENS`.

### CEFR Level (src/components/profile/StatsTab.jsx)

```javascript
getCEFR(xp, lc, gc) → { level: 'A1'|'A2'|'B1'|'B2'|'C1'|'C2', ... }
// score = xp + (lc * 15) + (gc * 25)
```

This is the **single source of truth** for both the CEFR badge and the Learn Path stage indicator. Both use `CEFR_TO_STAGE_IDX` mapping. Never derive stage from `lc` thresholds alone.

---

## Critical Architecture: CEFR Mastery Gate (owner directive, 2026-08-16)

Progression is gated on DEMONSTRATED competency, not activity. Source of truth: `src/lib/cefrCertification.ts`.

- **passes[L] means "the user holds level-L status."** A Level Check set keyed L (levelFrom L → levelTo L+1) tests L-competency and, when passed, records at **levelTo** — the status it grants. (Before 2026-08-16 the screen recorded at levelFrom while the retake gate blocked on the same key, so passing never advanced anyone; `migrateRealPassesToStatusKeys` additively repaired historical passes. Never revert to levelFrom recording.)
- **Provisional passes**: grandfathered (migration-granted) passes carry `provisional: true` and are also detectable by the 0.8-signature (`isGrandfatherPassSignature`). They keep content access but do not count toward `getVerifiedLevel()`. While any provisional level sits above the verified level, `getVerificationGate().required` is true: `getContentUnlockLevel` caps NEW content one level below the gate target, Home shows `VerificationGateCard`, and the only way forward is a real pass. Practice below the gate stays open by design.
- **Quiet period (owner directive, 2026-08-18)**: the GATE has no snooze — content stays locked — but the PROMPT honors attempts. Any verification attempt (pass or fail — `getLastAttemptAt`) quiets the hero for `VERIFICATION_QUIET_DAYS` (7): `VerificationGateCard` collapses to a one-line ready-date chip (`verification-gate-chip`) and `getNextStep`'s verification rung stands down (`isVerificationQuiet`) so the ladder falls to the mastery ledger's weakest skill — the practice that lets them pass. The full hero shows for never-attempted users and returns when quiet lapses. This exists because the rollback made the hero effectively PERMANENT for anyone who couldn't pass (a fail creates a new provisional target) — never restore the always-on hero, and never let the quiet period unlock gated CONTENT (pinned by `verificationQuietPeriod.test.tsx` + `verification-gate.spec.js`).
- **B1+ checks require speaking AND writing** (`SPEAKING_ENFORCEMENT_DATE` / `WRITING_ENFORCEMENT_DATE`). A B1+ attempt without those scores cannot pass (`computePassed` requireSpeaking/requireWriting). Writing is scored via `/api/correct` mode `writeeval` (0–100 → normalise /100); tasks live in `src/data/writingTasks.ts`.
- **Sections are resumable, never falsely failed**: an unfinished required section (no mic, evaluator unavailable) parks the attempt in `nh_cefr_verification_partial` (48h TTL) instead of recording a failure. Only complete attempts reach `recordEquivalencyAttempt`.
- **Merge rules**: pass merge is additive with `writing` in the per-skill max block; a merged pass stays provisional only if BOTH sides are provisional (an old device's unmarked blob can never wash the flag off; a real pass anywhere clears it everywhere).
- **E2E fixtures seed VERIFIED users** (real-shape passes + migration flags in `seed-auth.js` / `forceCefr.js`); the gate itself is covered by `e2e/verification-gate.spec.js`.
- **Honest rollback (owner directive, 2026-08-17)**: a FAILED verification of a provisional level steps standing DOWN one level (`rollbackProvisionalOnFail` inside `recordEquivalencyAttempt`): the failed provisional and every provisional above it are removed, provisional standing is granted one level below (grandfather 0.8-signature shape) unless A1/occupied, and a `verification_fail` demotion is recorded. A failed ADVANCEMENT attempt (no provisional held) rolls nothing back. The badge follows automatically — it reads `getCertifiedLevel()` when gating is on.
- **Demotions are merge tombstones**: `mergeRemoteCertifications` ends with a sweep deleting any pass at a demotion's `from` level whose `passedAt` precedes the demotion `at` — in both directions, for BOTH `verification_fail` and `checkpoint_fail`. This is the sanctioned, deliberate exception to "merges never reduce": the demotion EVENT is additive and user-visible; without the sweep any stale device blob resurrects a rolled-back level. A pass re-earned AFTER the demotion has a later `passedAt` and always survives — new evidence outranks tombstones.
- NEVER: reintroduce a snooze/skip on the verification gate; record a check at levelFrom; add a SkillScores field without extending the merge block AND `computePassed`; write grandfather passes without `provisional: true`; remove the tombstone sweep or record a demotion without pushing to `checkpoints.demotions`.

## Critical Architecture: Constant Next-Step Prompting (owner directive, 2026-08-16)

The user must never hit a dead end — something is ALWAYS recommended next.

- **Engine**: `src/lib/nextStep.ts` — `getNextStep({userCefr, poolWords})` returns exactly ONE recommendation, never null. Priority ladder: verification gate > unfinished daily session > servable SRS due > weakest production skill (mastery ledger) > least-recently-served discovery > library fallback. Pure read-only compute; every rung degrades to the next on error.
- **Trigger**: `completeExercise` (the single completion authority) dispatches `EXERCISE_COMPLETE_EVENT` (`src/lib/sessionSignal.ts`) on EVERY graded finish, pass or fail — that is what makes the prompt universal across ~117 practice done-screens without per-screen edits. `REQUEST_NEXT_STEP_EVENT` lets any surface summon the prompt.
- **UI**: `src/components/shared/NextStepPrompt.tsx`, mounted once in App.tsx. Appears ~700ms after a completion as a pill above the tab bar (`data-testid="next-up-bar"`); hides on ANY navigation (the landing surface's own prompting takes over); wrapper is `pointer-events:none` so only the pill is clickable — it can never intercept taps meant for content or the tab bar. Launches via `launchSessionActivity`; kind `session` also sets `nh_session_started` + `setSessionCategory` so the daily plan is credited on return; kind `browse` uses the `nh_open_browse` one-shot handoff.
- **Persistent surfaces (owner correction, 2026-08-17)**: the pill alone was NOT what the owner intended — Home and Practice must prompt AT ALL TIMES, embedded in the page, not as a transient pop-up. All surfaces share `src/hooks/useNextStepEngine.ts` (compute + launch + navKey). Practice: `NextUpCard` pinned atop GradTab (`next-up-card`). Home: `SessionCard`'s complete state is a HERO-ONLY guided path (`next-up-primary` at Begin-Session weight) — when the engine supplies a step, the bonus-activities list and start-fresh option are NOT rendered (owner: "hero only - want a guided learning path"); they exist only in the legacy no-engine fallback.
- NEVER: make the prompt block/overlay interactive content (keep the pointer-events contract); cache a recommendation across completions (recompute at event time); return null from `getNextStep` (the browse fallback is the floor); reintroduce competing options next to the complete-state hero.

## Critical Architecture: The Teaching Curriculum (owner directive, 2026-08-28)

The 2026-08-28 finding this exists to keep closed: **the app tested competence it
had never taught.** Every slot `buildSessionActivities` guaranteed was practice or
assessment; a lesson could only reach a learner by winning a fill slot, as one
A1-tagged pool entry (`animlesson`) among ~100, pushed down by difficulty ordering
for anyone above A1. Selection was "least-recently-served" — rotation, not
pedagogy. Design: `docs/curriculum-design.md`.

- **The spine** (`functions/api/content/_data/curriculum.js`) carries ONLY `order`,
  `prerequisites` and `objectives`. It deliberately does not carry a taught
  category or a practice screen: `LESSON_TAUGHT_CATEGORY` and
  `CATEGORY_SCREEN_MAP` already own those and are conservative on purpose. A
  second copy would drift, and **a wrong drill after a lesson is worse than no
  drill** — a lesson with no honest mapping gets no follow-on practice.
- **P0 — Today's Lesson is FIRST** in every session, ahead of SRS. That ordering
  IS the requirement (a lesson each day, before anything tests you). It is **not a
  hard gate** — a blocker would break the never-strand contract. The fill loop
  caps on `activities.length`, so P0's FIRST slot is absorbed rather than added;
  never give it its own cap.
  **The length contract is HELD when the lesson's coupled drill is itself
  grammar/structure, and this is measured (2026-08-30).** THE ADAPTIVE PICK
  YIELDS (owner decision): P2 is the only pre-fill slot that is both optional
  and substitutable, so it stands down when the guarantees would otherwise
  overrun the target. The priority is not new — P1.5's own rationale already
  says the drill for a concept just met beats a statistical estimate of where
  the learner is weakest.
  **THE GRAMMAR GUARANTEE YIELDS TOO, and the contract is CLOSED: 180 of 180
  lesson days at +0, every level (owner decision, 2026-08-31).** P2.7 stands
  down on a LESSON DAY once `activities.length` has already reached
  `fillTarget`.
  **BOTH must yield or neither is worth doing — this is the whole subtlety and
  it has now been got wrong in both directions.** P2.7 forces in grammar when
  the session has none and the adaptive pick is usually grammar, so the two are
  ALTERNATIVES, not additions. Drop only the pick (the first attempt) and P2.7
  silently replaces it: same length, less targeted drill. Drop only P2.7 (the
  obvious reading of "the guarantee is the extra slot") and NOTHING happens —
  because on a vocab-coupled day P2.7 never fired in the first place. The
  composition dump is what settled it:
  `curriculum_alphabet | curriculum_practice_alphabet | cat_genitive* |
  dialogue | shadowing | cityofday` — the starred extra is the ADAPTIVE pick.
  **Measure which slot is actually over before making one yield**;
  `curriculumSessionSlot.test.ts` pins both single-sided versions as failures.
  **The rule is scoped to lesson days (`isLessonDay`), and the unscoped version
  was WRONG.** Written first as a plain budget rule it also stood P2.7 down on a
  NON-lesson session — SRS + a vocab adaptive pick + conversation + production
  also reaches the target — leaving that session with no grammar at all. The
  pre-ship measurement MISSED it because it used the real adaptive queue, which
  returns a grammar category, so P2.7's branch was never exercised; it was
  caught by a pre-existing test, and only because that test happened to see a
  leaked `srsreview` mock. There is now an explicit guard
  (`guarantees grammar on a FULL non-lesson session`) that sets both mocks
  itself, because coverage borrowed from a neighbour's mock leakage vanishes the
  moment someone tidies the leak.
  **WHAT THIS COSTS:** 44 of 180 lesson days contain no grammar drill at all —
  A1 3, A2 0, B1 2, B2 7, C1 16, C2 16. On the other 136 the lesson's own
  coupled drill is structural and supplies it, which is a better source than the
  backstop anyway. Non-lesson sessions are unchanged at every level, with and
  without a servable SRS queue (measured against the pre-change build, then
  pinned).
  **A1 WAS 9 OF THOSE, AND SIX WERE A CLASSIFICATION BUG, NOT A CONTENT GAP
  (2026-08-31).** `family`, `countries`, `food`, `directions`, `weather` and
  `gender` were grouped `vocab` in `SKILL_GROUP` by their TOPIC LABEL, while
  each drill's own bank header names the structure it tests — accusative for
  what you order vs genitive for a quantity of it, the subjectless `Hladno je`,
  irregular plurals with plural agreement, `iz` + genitive vs `u` + locative.
  The A2 block had been grouped by structure from the start and says so; the A1
  block was not. Regrouping took A1 from 9 to **3**, at zero length cost and no
  measurable change to the variety pass (A1 never exceeds one activity per skill
  family in 200 runs, before or after).
  **The remaining three are genuinely lexical and are pinned with reasons**
  (`alphabet` — sounds; `greetings-farewells` — register; `time-calendar` — the
  clock, whose counting rule sits one lesson BELOW the cases primer).
  `a1Curriculum.test.ts` drives the real session builder per lesson and checks
  the exemption list in both directions plus its count.
  **B1 WAS AUDITED THE SAME WAY, 4 → 2 (2026-08-31), AND IT NEEDED A DIFFERENT
  METHOD.** At A1 each drill's own bank HEADER named the structure and the rows
  contradicted it, so reading headers settled it. At B1 the headers are
  unreliable in BOTH directions, so the ITEMS decided it, against a stated
  criterion: a drill is structural when its FORM-PRODUCTION items (a `____` the
  learner fills with an inflected form or a governed preposition) are a
  substantial share of the 24-item bank. Measured — food 14/24 and home 12/24
  are the calibration, both already `case`; `bureaucracy` 11/24 → **verb** (its
  `sluzbeni` mode drills the impersonal: *Potrebno je priložiti*, *Zahtjev se
  predaje*, and an item asking who the subject is — nobody); `renting` 9/24 →
  **case** (its header undersells it — the bank drills quantity genitive *55
  kvadrata*, participle agreement *jesu li režije uključene*, accusative plural
  *kućne ljubimce*, locative with an ordinal *na četvrtom katu*); `nature` 7/24
  and `technology` 4/24 stay **vocab** and are pinned with reasons. Variety
  unchanged at B1 and B2.
  **B2 WAS THE THIRD LEG, 10 → 7 (2026-08-31), and most of its bare days are
  HONEST.** Same criterion; four banks cleared the bar and reading them rejected
  one. `intensity` 12/24 → **case** (*sve* + comparative, the *što… to*
  correlative — it was `vocab` as "adverbial grading", but the items produce
  comparative FORMS and `comparison`/`advanced-comparison` are both `case`);
  `politics` 11/24 → **case** (participle agreement with subject gender — *Sabor
  je izglasao* / *Vlada je podnijela* — plus *u Saboru*, the *su održani*
  passive, *na izbore*); `meetings` 15/24 → **syntax** (its header states it:
  *Predlažem da* takes a da-CLAUSE in the present, not the infinitive, because
  the subject changes). `presenting` 11/24 was REJECTED despite clearing the
  count — its header calls the structure "signposting" but the blanks share no
  structure. **Counting finds candidates; only reading decides.**
  **Moving `meetings` out of `speaking` is safe because SKILL_GROUP has exactly
  two consumers** — the P3 variety pass and the grammar derivation. Nothing
  about production, the mastery ledger or PRODUCTION_POOL reads it, and the bank
  is a multiple-choice drill with no microphone. Check that list before moving a
  row between families.
  The seven B2 days that remain are production (`formal-email` couples to
  `writing_guided`), spoken performance, reading or lexis — which is what a level
  whose descriptor is about register and fluency should look like.
  **C1 AND C2 MOVED NOTHING, AND THAT IS THE RESULT (2026-08-31).** Same
  criterion; three banks across the two levels cleared the bar and all three were
  rejected on the items. `word-formation` 11/24 and `diminutives` 10/24 are
  DERIVATIONAL morphology — they build lexemes (*pisati → prepisati*, *ruka →
  ručica*), not grammatical forms, so they stay lexical; `debate` 9/24 is a
  rhetorical tactic whose blanks share no structure, rejected exactly as
  `presenting` was. The other 29 are between 0/24 and 8/24. So all 32 bare days
  at C1/C2 are honest: word-formation, collocations, prosody, the functional
  styles, media analysis, dialectology and orthography are not grammar drills,
  and a level about register and nuance should look like that.
  **A NEGATIVE RESULT STILL NEEDS PINNING**, or the next person re-runs the
  survey. `c1Curriculum.test.ts` and `c2Curriculum.test.ts` record all 16 + 16
  with reasons and drive the real builder, so a drill rewritten with structural
  content — or a row moved — fails the staleness half rather than passing
  silently.
  **Nine routes at C1/C2 go to hand-written screens, not ModeDrill banks, so the
  census cannot see them** — they were read by hand. `punctuation` is the trap
  worth remembering: the LESSON is `zarez-interpunkcija`, but
  `InterpunkcijaDrill` is hyphen-vs-dash, quotation marks and colons —
  typography, not the clause boundaries a comma drill would test. **Never infer
  the drill from the lesson title.**
  **A BANK HEADER IS EVIDENCE, NOT AUTHORITY.** `nature`'s header names u/na and
  the bank has three such items among ten pure glosses; `renting`'s names the
  room-counting fact and the bank is half case morphology. Read the items before
  moving a row.
  **THE GENERAL LESSON: a mis-grouping is invisible until the map gains a second
  consumer.** These rows were wrong for as long as they existed and nothing was
  wrong, because the variety pass cannot tell a mis-labelled family from a
  correct one. Deriving `GRAMMAR_STRUCTURE_CATEGORIES` from the same map made
  them load-bearing overnight. When you give a classification a new consumer,
  re-audit the classifications — the new consumer does not just read the map, it
  raises the standard the map has to meet.
  **`GRAMMAR_STRUCTURE_CATEGORIES` IS DERIVED FROM `SKILL_GROUP`, not
  hand-listed (2026-08-31).** It was a literal set of 21 predating the ~130
  pool-only categories the practice programme added, so drills that plainly ARE
  structural (`adjective-agreement`, `relative-koji`, `two-case-prepositions`,
  `case-subtleties`) were invisible to BOTH its consumers — `sessionHasGrammar`
  and P2.7's backstop — and 127 of 180 lesson days fell outside it. It is now the
  `case | verb | syntax` families of `SKILL_GROUP`, which already classifies
  every category exhaustively (`content-coverage.test.ts` fails the build on a
  gap). The derivation LOSES NOTHING (all 21 were already grouped that way — the
  historical list is frozen in `grammarStructureCategories.test.ts` so that claim
  is re-runnable rather than a sentence in a commit message) and gains 63.
  **The point is not the 63; it is that a new drill is classified ONCE.** The
  hand-list went stale precisely because it was a second place to remember, and
  a list in one file cannot know about drills authored in another.
  **The one exclusion is `grammar-lesson`, and it is about the SLOT, not the
  subject.** That tag covers `animlesson` and `grammarexplainer` — lessons, not
  drills. P2.7 exists to guarantee a structure DRILL and P0 already opens every
  session with a lesson, so letting the backstop serve a second lesson defeats
  both (`grammarexplainer` is AI-dependent besides, and a guarantee that can fail
  to generate is not one). Excluding it keeps that slot behaving exactly as
  before.
  **Measured effects, both of them.** Lesson days holding the length contract at
  +0 went 53 → **115 of 180**; the remaining 65 are genuinely lexis, spoken
  performance or reading, and legitimately owe a grammar slot. Separately, P2.7's
  candidate pool widened at every level — **A1 10 → 21**, which is the change
  that matters most: A1's structural pool had been case and tense drills reached
  by the nearest-CEFR tiebreak, while the A1 drills authored for A1 lessons
  (plural, negation, imperative, questions, possessives) carried pool-only tags
  the list never knew about. No `reference: true` entry became eligible (asserted
  — a browse list has no graded finish, so P2.7 would credit the slot for reading
  a table).
  **A derivation needs different guards than a list**, because both directions
  fail silently: too broad and P2.7 serves a vocabulary game as "grammar", too
  narrow and the set is back where it started. `grammarStructureCategories.test.ts`
  pins both, plus that the exclusion's subject still exists (the stale-exemption
  shape from `couplingClearingPath`). NEVER re-add a category to this set by
  hand — fix its `SKILL_GROUP` row, and both consumers follow.
- **The certification inference, NOT backfilled completions** (`src/lib/curriculum.ts`).
  Every existing learner had zero completed lessons on ship day, so naive spine
  order greets a certified C1 learner with A1 lesson 1. A prerequisite is satisfied
  when completed OR when its level sits strictly below the learner's certified
  level. Nothing is written. NEVER "fix" this by writing completion records for
  lessons the learner never opened: that is a lie that syncs to every device and
  can never afterwards be told apart from a real completion.
- **There is no "go back and fill a gap" rung.** The design proposed one; it
  cannot coexist with the inference (everything below the certified level is
  already treated as known) and a test caught it sending a C2 learner to A1 lesson
  1. Do not reintroduce it.
- **The null contract**: `getNextLesson` returns null ONLY when the spine is
  empty. That means "no curriculum data", and the caller omits the teaching slot
  so the session composes exactly as it did before. `pickSessionLesson` keeps
  least-recently-served rotation as its fallback for the same reason — the spine
  is a cached fetch and can legitimately be absent. **Absence must degrade to the
  old behaviour, never to no teaching** (pinned by `curriculumPick.test.ts`).
- **Payload**: `/api/content/lessons` ships the whole array (220 KB at 45 lessons,
  ~0.9 MB at 180). `/api/content/curriculum` serves shape only and
  `/api/content/lessons/{id}` one body with its own etag — the pattern
  `/api/content/catalog` already uses. Measured 90% first-load reduction. **Never
  spread a lesson into the spine projection**; a test asserts no slides leak.
- **Progress** (`nh_curriculum_progress`) is a MAP of lesson id → first completion
  date, written at the summary slide (the only point the lesson was demonstrably
  read, not merely opened). It syncs additively: union of ids, EARLIER date wins,
  and a remote merge can never un-complete a lesson. Absent from the snapshot when
  empty so a fresh device cannot clobber server history.
- **E2E must route `/api/content/curriculum`** (`mockContent`). Without the
  fixture the teaching slot never fires under E2E and the one change that alters
  session composition is uncovered.
- **A1 is the first complete level (2026-08-28): 9 lessons → 30.** The nine
  taught the alphabet, gender, verbs and the IDEA of a case, then stopped one
  step short of every structure a beginner needs — no plural, no negation, no
  accusative, no locative, no possessives, no adjectives (though `gender`
  promised agreement was coming). The level now has a HINGE at `cases` (order
  16): everything before it is sayable with subject forms alone, and
  `accusative-intro` / `locative-intro` / `genitive-intro` / `vocative-intro`
  all sit after it. **That ordering is pinned by `a1Curriculum.test.ts`** —
  a reorder could recreate the 2026-08-18 finding (a case drill above the only
  explanation of what a case is) without touching a word of content.
  Bodies live in `functions/api/content/_data/lessonsA1.js`, spread into
  `LESSONS`; lessons.js was already ~6k lines for 45 lessons and the programme
  targets ~180. **A new per-level lesson file must be added to
  `lintCroatianText.mjs` TARGETS** — a lesson file outside TARGETS is one
  everybody believes is linted and is not.
- **The unmapped lessons are pinned too.** Seven new `LESSON_TAUGHT_CATEGORY`
  entries, each resolving to an A1-reachable drill; twelve left deliberately
  unmapped, and the test asserts they STAY unmapped. Pairing `family-people`
  with a topic-blind vocab game claims a connection the app cannot deliver.
  Moving one into the mapped set has to be a decision, not a tidy-up. (Related:
  `gender → vocab-a2` routes to `znam`, which is A2, so for the A1 learners that
  lesson is written for the coupling silently resolves to nothing — same class
  as the A1 verb hole, not fixed here.)
- **A MAPPED LESSON MUST RESOLVE TO A REACHABLE DRILL (2026-08-28).** The
  coupling map can be perfectly honest and still be inert: `LESSON_TAUGHT_CATEGORY`
  names a CATEGORY, and if `CATEGORY_SCREEN_MAP` has no row for it — or the row
  it has is CEFR-gated above the lesson's own level with no
  `CATEGORY_EASIER_SCREEN` fallback — the learner is queued a category that never
  becomes an activity. No error anywhere. `curriculumCouplingResolves.test.ts`
  walks every mapping through the REAL session builder and found **ten** dead
  mappings on its first run, across every level. Nine were repaired by routing
  five orphan categories (`numerals`, `word-order`, `idioms`, `passive`,
  `nominalization`) — none of which is in `ALL_CATEGORIES`, so like `nominative`
  and `subordination` the change touches the coupling and nothing else.
  **`gender → vocab-a2` was the last exception and is fixed (owner decision,
  2026-08-28); `KNOWN_UNRESOLVED` is now EMPTY.** It was NOT fixed by giving
  `vocab-a2` an easier route — that would change what the adaptive picker serves
  every A1 learner. `genderdrill` is an A1 drill that already matched the lesson
  (the pool has said so in a comment for years) and was tagged `vocab-a2` only
  for want of a better tag; it now carries its own pool-only `gender` category,
  routed to itself, so the coupling resolves and nothing else moves. Same shape
  as the rekcija retag. `SKILL_GROUP` keeps it in `vocab`, where it already sat,
  so the variety pass is unchanged.
  **One trap worth knowing**: `GenderDrillScreen` completes with key `'gender'`,
  not `'genderdrill'`. Clearing works through `categoryForScreen`'s "the key IS a
  category" fallback, which only fires because `gender` is now a pool category —
  and the round-trip blocks clear using the SCREEN the builder returned, so they
  stay green even if that path breaks. There is a dedicated assertion for the
  real key; keep it. The set itself is kept (not deleted) with a test asserting
  every listed entry genuinely fails to resolve, so a stale exemption cannot sit
  there quietly covering a mapping that works.
  The test that was supposed to catch this earlier did not, because it checked a
  `SCREEN_FOR` map written inside the test file rather than the app's. **A test
  that restates production data cannot check production data** — go through the
  real builder.
- **C1 is complete (2026-08-28): 8 lessons → 30.** The level descriptor is "can
  use the language flexibly and effectively for social, ACADEMIC and
  PROFESSIONAL purposes" and the level contained nothing academic and nothing
  professional at all. It also had no lesson anywhere on **verb government** —
  which case a verb demands (`bojati se` + genitive, `radovati se` + dative) —
  though every level had taught cases from the noun side. The hinge is at
  `condensation` (order 7): before it, getting a sentence right; after it,
  choosing between sentences that are all right. Pinned by
  `c1Curriculum.test.ts`; bodies in `lessonsC1.js` (in lint TARGETS).
- **`rekcija` is tagged `verb-government` (owner decision, 2026-08-28).** It was
  `dative-locative`, which described one of its three modes (dativ / genitiv /
  prijedlozna) and routed the drill to `locdrill`, so the C1 `verb-government`
  lesson could not be coupled without sending the learner to the LOCATIVE drill.
  `verb-government` is a pool-only `SkillCategory` — deliberately NOT in
  `ALL_CATEGORIES`, like `nominative` and `subordination` — so the adaptive
  picker is unaffected; `SKILL_GROUP` puts it under **`case`, not `verb`**,
  which keeps the P3 variety pass byte-identical (a learner doing `rekcija` is
  picking a case, and grouping it as a verb would let it sit beside three case
  drills — the failure that pass exists to prevent).
- **A COUPLING CLEARS ON THE ROUTE, NOT ONLY THE POOL TAG** (2026-08-28).
  `recordScreenPractised(screenKey)` is the single clearing entry point: it
  discharges every queued category whose route (`CATEGORY_SCREEN_MAP` or
  `CATEGORY_EASIER_SCREEN`) IS that screen, plus the screen's pool tag.
  Clearing used to be tag-only, and that silently broke **18 of 62 mappings** —
  a pool entry carries ONE category while several route to the same screen
  (`cloze` serves past-tense and conditional under a `vocab-a2` tag;
  `aspectdrill` serves all three aspect categories; `writing_guided` has no pool
  entry at all, so no retag could ever have fixed it). Those couplings resolved,
  sent the learner to the right drill, then sat for their full 14-day TTL
  re-claiming a session slot every day.
  **Why route-clearing is honest**: the queue holds INTENTIONS, and the
  coupling's own definition of practising X is "do the drill the router names
  for X". It reads the routing table, never the learner's performance, so it
  states nothing unmeasured. **One deliberate over-clear**: two queued
  categories routing to the same screen both clear — correct, because the app
  has no other drill for either and keeping one queued would serve that same
  screen again tomorrow. Only the coupling queue is touched; the adaptive store
  and mastery ledger still record the pool tag, which stays the honest statement
  about content practised.
  **This was found by mutation testing, not by the suite that existed.**
  Reverting the rekcija tag left `curriculumCouplingResolves.test.ts` fully
  green, because reachability and clearing are separate paths. That suite now
  round-trips EVERY mapping (record → resolve → finish → cleared), including the
  dedicated lesson SCREENS that never appear in the spine and were outside every
  assertion in the file — one of which, `tenses`, was among the 18.
  `c1Curriculum.test.ts` additionally pins the rekcija POOL TAG, which
  route-clearing would otherwise mask.
- **The practice programme (2026-08-29)**: the mirror of the curriculum gap.
  With 180 lessons shipped, **117 of them teach something the app never drills**
  — not a broken mapping, no drill at all. A drill is now a DATA BANK in
  `src/data/drills/` plus a ~12-line lazy wrapper over `ModeDrill`
  (`src/components/practice/ModeDrill.tsx`), because the 75 hand-written drills
  are the same ~400-line component and paying that per drill would make the
  content the small part of the work. The wrapper must stay lazy — a static bank
  import into `AppRouter` puts `src/data` on the first-paint path and
  `firstPaintGraph.test.ts` fails. The 75 existing drills are deliberately NOT
  converted. Each new drill needs: bank + wrapper + `AppRouter` route +
  `PRACTICE_PROGRAMME_ENTRIES` + `CATEGORY_SCREEN_MAP` + `LESSON_TAUGHT_CATEGORY`
  + `exerciseRegistry` + `exerciseDifficulty` + `SKILL_GROUP` + lint TARGETS,
  and a row in `practiceProgrammeDrills.test.ts` (which guards the POOL TAG —
  the thing route-based clearing masks).
  **Coupled: 30 at every level — 180 of 180, complete as of 2026-08-30.** The
  last was A1 `alphabet`, which was never a content gap: `AlphabetScreen`'s
  quiz is exactly what the lesson teaches, and it was blocked on the CLEARING
  PATH. It took one `recordScreenPractised('alphabet')` call at the Done button
  plus a pool retag off `vocab-a2` (which routes to `znam` at A2 — the
  `gender → vocab-a2` trap, so a route alone would not have worked). The note
  that stood here said mapping it "requires routing its completion through
  completeExercise first"; that was wrong, and the sanctioned fix already used
  for `writing_guided` and `relpron` changes no award semantics at all.
  Do not read that figure off a comment — `practiceProgrammeDrills.test.ts`
  derives the count per level and NAMES any uncoupled ids in its failure
  message. A hand-maintained census went stale repeatedly and once made a
  merged tranche report the wrong figure (the A2 block claimed 26 of 30; the
  real number was 23), because subtracting a list of judgement calls from
  thirty counts the judgements, not the lessons.
- **A2's hole was the A1 verb hole one level up (2026-08-29).** Four of the five
  A2 lessons drilled in that tranche already had a drill teaching exactly the
  right thing — `svojmoj` (B1), `clitic` (B2), `kolicina` (B2), `stupnjevanje`
  (B2) — gated one or two levels ABOVE the lesson that needed it, so the
  coupling could never resolve and the lesson led nowhere. A1 is the only level
  that cannot inherit downward, which is why its hole was found first; it was
  never the only level with one. **When a lesson looks uncoupled, check whether
  the drill already exists at a higher level before authoring a new one** — the
  answer changes what you build, and four of these five are new A2 banks
  precisely because the existing drill could not be reached.
  `objekt` is the exception: it is wired as `CATEGORY_EASIER_SCREEN.clitics`
  rather than given its own pool-only category, because `clitics` is a real
  `ALL_CATEGORIES` member. That row therefore ALSO changes the adaptive picker
  — a learner below B2 measured weak on clitics had the category dropped for
  their whole level and is now served the A2 drill. Same shape and same
  justification as `present-tense → presentdrill`; `practiceProgrammeDrills`
  holds it in its own block, asserting the easier route exists AND that the B2
  primary route survives.
- **B1 was the same finding with a collision on top (2026-08-29).** All five
  lessons in the B1 tranche already had a drill — `infinitivda` (C1),
  `neizravni` (B2), `bezlicne` (B2), `vremenske` (B2), `uzrocne` (B2) — but the
  CEFR gate was only half of it: four of those five carry a category that is
  ALREADY ROUTED SOMEWHERE ELSE, and three of them share `subordination`, whose
  easier route is `relpron`. Reusing the tags would have sent three different B1
  lessons to one screen, and `reported-speech` — which this file had recorded by
  name as "wrong drill, so no drill" — to relative pronouns. Each new drill got
  its own pool-only category instead, so nothing is shared or displaced and the
  B2/C1 drills are untouched. **A drill existing at a higher level is not enough:
  check what CATEGORY it carries and whether that category is already spoken
  for.** `b1Curriculum.test.ts` now pins the collision explicitly — the three
  lessons must not resolve to `subordination`, and `subordination`'s easier route
  must stay `relpron`.
- **A ROUTED SCREEN MUST BE ABLE TO CLEAR THE COUPLING** (2026-08-29). Third
  break in the same mechanism, in a third place, with the two suites guarding
  the previous two fully green: (1) no route → `curriculumCouplingResolves`;
  (2) route resolves but clearing was tag-only → route-clearing; (3) **the
  SCREEN itself never calls the clearing path.** The round-trip suite calls
  `recordScreenPractised` directly — the right way to test the queue, and it
  says nothing about whether the screen the learner lands on ever calls it.
  `couplingClearingPath.test.ts` walks the REAL router and the REAL import
  graph and found **three live dead ends on its first run**: `writing_guided`
  (grades against the /api/correct rubric and awards from the score, so it never
  touched `completeExercise` — the route for B2 `formal-email` and C1 academic
  writing), `relpron` (awards per answer and credits `gc` itself — the B1
  relative-clause route via `CATEGORY_EASIER_SCREEN`), and `idioms`. The first
  two are fixed with one `recordScreenPractised` call at their genuine
  completion point — NOT by converting them to `completeExercise`, which would
  change a live screen's XP semantics for no gain here. The third, `idioms`, was
  exempted and **the exemption's stated reason was wrong** — see below.
  **KNOWN_NO_CLEARING_PATH is now EMPTY (2026-08-30).** `idioms` came off it by
  repointing the category from `idioms` (IdiomsScreen — a browse list, tap to
  hear, no quiz and no completion) to **`idiomdrill`**, a real graded C1 drill on
  twelve figurative idioms that finishes through `completeExercise` and had been
  in the pool at C1 the whole time. The exemption said the fix was "an idiom
  DRILL at C1 (`frazeologija` exists but is C2)"; it named the wrong candidate,
  and nothing ever had to be authored. The 2026-08-28 repair had routed five
  orphan categories BY NAME, and `idioms` was the one category with two
  plausible screens — it picked the id that matched.
  **An exemption can go stale two ways, and only one was covered.** The set's
  staleness test asked whether an exempted screen had GAINED a clearing path
  (which caught `relpron` within a single session). It never asked whether
  anything still ROUTED there — so the moment the category was repointed, the
  exemption guarded nothing while still asserting a live dead end, and the suite
  stayed green. Both are now checked, plus a count assertion, because `it.each`
  over an empty set registers no tests at all.
  NEVER: route a category to a screen without checking the screen can complete;
  add an exemption without the reason; assume reachability implies clearing;
  trust an exemption's recorded reason without re-checking the pool for a
  candidate it may have missed.
- **The C1 `discourse` mapping is still unavailable, and that one is real.** The
  drill covers CONNECTORS (stoga, međutim, unatoč tome) while
  `discourse-particles` teaches ATTITUDE particles (pa, ma, baš, valjda, zar) —
  adjacent, not the same. Both drills stay reachable through the P3 CEFR fill,
  which walks the pool directly, so an unrouted category is not an unreachable
  drill.
- **The C2 block closed the last level of the practice programme (2026-08-30):
  17 drills, C2 5 coupled → 30.** C2's uncoupled set was not a contiguous
  topical block — it ran across seventeen of the thirty orders — so this
  tranche is "the rest of the level". Every one is a NEW bank with its own
  pool-only category: nothing was retagged, nothing displaced, and the
  adaptive picker is byte-identical.
  **`padezne-suptilnosti` is the entry worth remembering**, because it is the
  clearest instance of the distinction the whole programme turned on. It sat on
  `c2Curriculum.test.ts`'s DELIBERATELY_UNMAPPED list with a reason recorded
  beside it — it teaches case meaning where nothing governs anything, so no
  case drill practises it. That reason was TRUE, and it was still the wrong
  conclusion: it described every case drill the app HAPPENED TO HAVE, not every
  case drill that could exist. "No honest pairing exists" and "no drill exists
  yet" look identical from inside a list of ids, and only the first is a
  judgement. `padezisupt` was authored for exactly that lesson. That file's
  unmapped list is now EMPTY and the assertion is inverted — every C2 lesson is
  coupled, and a new one must arrive with its drill.
  **The dialect drill inherits no carve-out.** `dijalekti-dubinski` is the
  second `CONTRASTIVE_LESSONS` entry (kajkavian yat, homographic with Serbian
  ekavica), and that carve-out is scoped to a LESSON id for a reason that does
  not transfer: a drill's options are clickable, so the bare ekavian form in an
  option list is a Serbism in front of a learner, unlabelled. `dialectsDeepDrill`
  teaches that reflex BY NAME and never by example word — verified by mutation,
  injecting it fails the lint — while showing the standard and čakavian members
  in full. Third time this constraint has bitten (`regionalDrill`,
  `languageHistoryDrill`); it is written into all three bank headers.
- **The DEBT block finished the programme (2026-08-30): 13 drills, A2/B1/B2 all
  → 30.** These were the thirteen the per-level blocks left behind because no
  drill existed for them anywhere — 7 A2, 3 B1, 3 B2. Every one is a new bank
  with a new pool-only category, and the reason none could be a retag is the
  finding this file already records twice, met three more times: the nearest
  existing drill was in EVERY case both CEFR-gated above the lesson and
  carrying a category already routed elsewhere.
  **Two shapes worth keeping**, because each is a check the reachability
  survey has to make and neither is obvious from a screen list:
  - `vi-vs-ti` looked served by `tivicompare`, which is at the SAME level and
    named for the lesson. It is `reference: true` — a browse list with no
    graded finish — so a coupling routed at it resolves and never clears. That
    was the `idioms` defect (since fixed), and it is gated by SHAPE rather than
    by CEFR, which no level check would have caught.
  - `modal-nuance` was blocked by `naciniobveze`, the C2 modality drill
    authored in the block immediately before this one. Closing a level can
    create the collision that blocks a lower one, so the survey has to be
    re-run against the CURRENT pool rather than the one the plan was written
    against.
  `a2Curriculum` and `b1Curriculum` now assert every lesson in their level file
  is coupled — both DELIBERATELY_UNMAPPED lists are empty, and both had already
  written down that authoring the drill was the intended way off them.
- **C2 is complete, and with it the whole curriculum (2026-08-28): 4 lessons →
  30, 45 → 180 total, 30 at every level.** C2 had one tense, one punctuation
  mark, one style topic and one genre. The gap was not "more grammar": the CEFR
  descriptor names SYNTHESISING several sources, RECONSTRUCTING arguments and
  DIFFERENTIATING FINER SHADES OF MEANING, and none of the three had a lesson
  anywhere. Nor did quantity-subject agreement (the commonest advanced error),
  the negated imperative (which OVERRIDES the aspect rule learners are taught),
  the second conditional, four of the five functional styles Croatian
  linguistics names, or any way to read a text written before Gaj. Five blocks,
  hinged at `norma-i-uzus` (1) — the level opens by establishing that
  correctness alone has stopped being the question, which every later block
  assumes. Pinned by `c2Curriculum.test.ts`, which also carries the
  whole-curriculum assertions: 30 per level, spine and bodies agreeing exactly,
  no lesson spined at another level, orders unique and contiguous from 1.
  **Measured at full scale**: 860 KB of lesson bodies against a 49.6 KB spine
  (276 bytes/entry) — the payload split's 90% first-load claim holds at 180.
- **`CONTRASTIVE_LESSONS` gained its second and last easy entry.** Kajkavian
  realises yat as *e* — `lep`, `mleko` — which is a Croatian dialect form spoken
  across the north-west including Zagreb, and is HOMOGRAPHIC with Serbian
  ekavica. There is no pattern to distinguish them because the strings are
  identical, so the blocklist flagged the C2 `dijalekti-dubinski` lesson for
  teaching the three-way reflex (lijep / lep / lip) that is a learner's single
  best diagnostic for placing a speaker. Flagging it would be the lint asserting
  something false about Croatian. The carve-out now covers a lesson's Croatian
  strings rather than only its table rows (the same labelled contrast appears in
  a highlight and a summary point) — **a real cost: a genuine Serbism inside
  those two lessons would now pass.** Encoding is still checked there, verified
  by mutation. The list can only shrink.
- **`CATEGORY_SCREEN_MAP`/`CATEGORY_EASIER_SCREEN`/`SCREEN_CEFR` moved to
  `src/lib/categoryRoutes.ts`.** Pure data, no behaviour change; the hook had
  hit its 800-line lint cap and the coupling keeps needing rows — the same
  reason `sessionPools` and `croatiaPool` were extracted from that file before.
  The cap was not raised and no override was added.
- NEVER: give P0 its own length cap; make it a hard gate; copy the taught-category
  map into the spine; backfill completions; let an absent spine mean no lesson;
  add a `LESSON_TAUGHT_CATEGORY` row without checking it resolves at that level.

## Critical Architecture: The Daily Session Recommender (audit, 2026-08-20)

`buildSessionActivities` (src/hooks/useDailySession.ts) composes the day's plan in priority order. The slots and what each guarantees:

| Slot     | What it is                                             |
| -------- | ------------------------------------------------------ |
| P1       | SRS review — only when the queue is genuinely servable |
| **P1.5** | **Teach → practice coupling** (below)                  |
| P2       | Adaptive grammar pick, CEFR-gated                      |
| P2.4     | Conversation anchor (B1+)                              |
| P2.5     | Production — guaranteed spoken/written output          |
| P2.7     | Guaranteed grammar/structure, if none yet              |
| P3       | CEFR fill, four variety passes (below)                 |
| P4       | Croatia immersion — always exactly one                 |

### Teach → practice coupling (src/lib/teachPractice.ts)

A finished lesson queues the category it taught; the next session claims a slot for that category's drill; practising it clears the queue. **This is what makes a lesson lead somewhere** — before it, finishing a lesson changed nothing about what came next, which is precisely how the A1 verb hole below stayed invisible.

- **Two lesson paths, both wired.** Dedicated lesson screens finish through `completeExercise`; the 45 server content lessons finish inside `AnimatedLesson` and never touch it. Wiring only the first misses every content lesson.
- The practice-clearing call sits **before** `completeExercise`'s already-credited early return, so repeating a long-credited drill still satisfies the coupling.
- `LESSON_TAUGHT_CATEGORY` is deliberately conservative — a lesson with no unambiguous drill (`adjective-agreement`, `basic-questions`) is left unmapped, because a wrong pairing right after a lesson is worse than nothing. Entries expire (14 days) and the queue is capped.
- `CATEGORY_SCREEN_MAP.nominative` exists **only** for this (nominative isn't in `ALL_CATEGORIES`, so the adaptive queue never picks it). Without it the A1 `cases` lesson queues a category that can never resolve.

### Per-activity reasons (src/lib/activityReason.ts)

Every slot attaches one line saying why it's there, built at **session-build time** (not render, so it can't rewrite itself as the learner practises) and stored on the activity.

**THE HONESTY RULE — inherited from `buildPlanReason`: never fabricate.** A reason the learner can catch being wrong is worse than no reason. Two live traps:

- the adaptive store seeds `recentAccuracy` at **0.5** for never-practised categories — reporting that as "50% accurate" claims a result the learner never produced. `getCategoryStatus` returns `accuracy: null` until `lastSeen` is set.
- the mastery ledger returns null when it has measured neither production skill — never name one as "weakest" on no evidence.

Slots with no honest signal attach nothing; `withReason()` omits the key rather than writing `undefined`.

### Vary by SKILL, not by screen (src/lib/skillGroups.ts)

Screen-level recency reads as variety but isn't: A1's pool is case-heavy (9 of 33), so several different screens could serve a session of case drills and all pass recency. Measured: for an **active** learner (recency having thinned the pool) that was **4 case activities out of 5 graded slots, 40/40 runs**.

The P3 fill runs four passes over the same difficulty-ordered list: (1) new family, not recent; (2) **new family even if recent**; (3)–(4) the original unconstrained passes. **Pass 2 is the fix** — when the only un-recent content left is a fourth case drill, repeating yesterday's vocab game is the better session; recency is the cheaper thing to give up. Session length, the difficulty contract and the one-reference cap are unchanged by construction.

`SKILL_GROUP` lives in production and `content-coverage.test.ts` **imports** it, so that suite's exhaustiveness assertion guards the real map.

### Degrade visibly (src/lib/authoredFallback.ts)

When an AI activity can't generate it must not credit the session for work never done — but it must also never strand it at N-1/N (a real incident class). Both hold because the substitute is authored content that cannot itself fail:

- failure → **no credit**; the authored equivalent is offered
- tapping it → navigate, still no credit
- finishing it → `completeExercise` fires the session signal, which matches on the **originally launched** screen and credits that slot

`creditIfNoAuthoredFallback` lives beside the map, so a screen can't half-adopt the policy by gaining a fallback and forgetting to stop crediting. A fallback must teach the **same skill** and must not itself be AI-dependent (both asserted).

### The A1 hole this audit found

A1 **taught** verbs (`present-tense-verbs`, `pronouns-biti` are A1 lessons) while the lowest verb drill in the pool was A2 — and A1 is the only level that cannot inherit downward. Same for syntax. Fixed by `presentdrill` + `wordorderdrill` (A1) and `CATEGORY_EASIER_SCREEN`, which rescues a category whose mapped drill is CEFR-locked instead of dropping it for the whole level. `a1VerbSyntaxDrills.test.ts` fails if A1 ever again lacks a reachable verb or syntax drill.

**Word-order content rule**: Croatian constituent order is genuinely free, so every item must target a rule that is actually FIXED (second-position clitics, `li` after its verb, `ne` before its verb, adjective before noun) and every distractor must be ungrammatical rather than merely marked. An exercise that marks real Croatian wrong teaches learners to distrust their ear.

---

## Critical Architecture: The Vocabulary Deck (content expansion, 2026-09-04)

The finding this exists to keep closed: **the app's vocabulary acquisition path
ended at A2, whatever the learner's level.** Every review, flashcard, quiz,
match and speaking pool was `ALL_CATS.flatMap((t) => V[t])` over a 56-name list
hardcoded in App.tsx ("update if vocabulary.js keys change" — nobody did). The
server payload had grown to 89 levelled categories plus 17 composed aliases;
the list knew 56, and none of the B1 band, so **1,030 of the 2,357 core words
were unreachable by any drill**, and the B2/C1/C2 tiers (963 + 900 + 300, shipped
to the client for a browse screen) were never pooled at all. Home counted
servable reviews over ALL of V while Review served the hardcoded subset, so the
pill could promise reviews the screen then reported as "All caught up!". Found
by a measured census, not by a test — a hardcoded list decays silently at
exactly the rate the content it restates grows.

- **The deck is DERIVED** (`src/lib/vocabPool.ts`) from the payload's `V_LEVELS`
  — composed server-side in `_data/core.js` so the aliases are tagged too, and
  shipped in `/api/content/core` — gated on `vocabLevel(stats)` (=
  `getGenerationCefr`, placement-aware like McGame/Flashcards already were).
  `vocabCategories` = categories tagged ≤ level; `vocabPool` = those words plus
  the tiers ≤ level, deduped by lemma; `vocabPoolWords` is what Home counts
  against; `acquisitionPool` = the learner's OWN band plus lower-band words
  already tracked in SRS. **`allCats` survives only as a test-fixture override**
  (`['basics']` seeds); production never passes it, and no consumer flattens a
  category list by hand (pinned).
- **Ordering IS the acquisition path.** `vocabPool` places the learner's own band
  first, then lower bands descending. `getPrioritizedReviewQueue` tops a thin
  review up with the first unseen words in pool order, so new words enter the
  deck from the band being worked at — before, every learner at every level got
  `greetings`. Random-sample surfaces (session flashcards/quiz/match/speaking,
  the Practice-tab launchers) draw from `acquisitionPool`, so a C1 learner is not
  handed a uniform sample of 4,300 words that is 55% A1–B1. Same inference the
  curriculum uses: a band strictly below the learner is treated as known unless
  SRS says they are still working on it. Nothing is written.
- **A tracked card never becomes unservable.** `vocabPool` includes any word the
  learner tracks in SRS whatever its band — the demotion case (a rolled-back
  learner keeps reviewing what they were reviewing). Never drop a tracked word
  for being above the learner.
- **Absence degrades to the old width, never to nothing.** No `V_LEVELS` in the
  payload (an old cached blob) → every V category, no tiers — at least as wide as
  the list was. An empty own band → the whole pool, so a launch never bails
  `empty-pool` on a classification gap. Pinned by `vocabPool.test.ts`.
- **`Alphabet` is the ONE unlevelled key** (`V_POOL_EXCLUDED`): its "gloss" is a
  letter name plus example, a lesson slide not a flashcard back. An unlevelled
  key is excluded from the deck BY CONSTRUCTION, so `core.test.js` asserts every
  V key is levelled or in that list, and that the list's entry is still unlevelled
  and still exists — an exemption guarding nothing fails.
- **The tiers overlap the core** (measured: V∩B2 184 lemmas, B2∩C1 72, C1∩C2 35)
  and a lemma is served at the LOWEST band that carries it. A test asserting "no
  B2 word at B1" was wrong on its first run for exactly this reason; assert
  absence only for lemmas whose every source sits above the learner.
- **`activeVocabulary.fresh` is level-aware.** It was FREQUENCY_500 only (1,250
  words), so the contextual generators (AI story/listening/writing) could never
  be asked to weave in a tier word. It now reads loaded content synchronously via
  `peekContent()` (`hooks/useContent`, never fetches): below B2 the frequency
  core leads and the band follows; at B2+ the band leads. Content absent →
  frequency only, exactly as before.
- **Three copies of the payload key list** must agree: `core.js` KEYS,
  `core.test.js` ALL_KEYS, and `generate-content-etags.mjs` CORE_KEYS (the etag
  must move when the payload does). `vocabPool.test.ts` pins all three carry
  `V_LEVELS`, plus the E2E fixture (`content-fixture.js`) — without it the E2E
  suite would exercise only the degrade path.
- `vocabPoolWiring.test.tsx` drives the REAL launcher without `allCats` and reads
  what `setFcInitPool` / `setMcInitQ` receive at A1, B1 and B2 — the wiring test
  the derivation tests cannot replace. Mutation-verified: six mutations (launcher
  back to flatMap, tiers dropped, ascending order, tracked-above dropped,
  `V_LEVELS` off the payload, acquisition = whole pool) fail 1–6 tests each.
- NEVER: reintroduce a hardcoded category list anywhere a deck is built; rank a
  category by anything but `V_LEVELS`; gate `vocabPool` differently from
  `vocabPoolWords` (Home and Review must agree by construction); let an absent
  `V_LEVELS` mean an empty deck.

## Critical Architecture: The Comprehension Slot (content expansion, 2026-09-04)

The finding this exists to keep closed: **the session guaranteed every skill it
tests except comprehension.** Grammar (P2.7), production (P2.5) and conversation
at B1+ (P2.4) each had a slot; listening and reading competed in the P3 fill
among 50–300 eligible entries, and `adaptive` only put them level with every
other difficulty-matched drill. Measured over 300 non-lesson sessions per level:
the share containing ANY listening or reading was **A1 10 · A2 19 · B1 13 · B2 11
· C1 27 · C2 10 per cent**, and listening alone 4–5% at B1/B2/C2 — a listening
activity roughly once every three weeks. After the slot: **100% at every level,
listening and reading alternating 50/50, session length unchanged** (pinned).

- **P2.8 — one listening OR reading activity per session** (`src/lib/inputSlot.ts`,
  `selectGuaranteedInput`; the file split follows sessionPools/croatiaPool —
  useDailySession is at its 800-line cap and the cap was not raised). It obeys
  the same budget rule as P2 and P2.7: fires only while `activities.length <
  fillTarget`, so it DISPLACES a fill slot and can never add one. Stands down
  when the session already holds input. Sits AFTER the grammar guarantee, so on
  the one day-shape with a single slot left and a non-grammar adaptive pick,
  grammar wins (the owner's G2 directive); measured, that costs input on no
  non-lesson day at any level.
- **KIND alternates by what was served less recently** (`nh_session_served`, now
  read from `src/lib/sessionServed.ts` by both the discovery slot and this one),
  unless the mastery ledger has measured a weaker receptive skill
  (`weakestReceptiveKind`, the twin of `weakestProductionKind`, same null rule).
  Same-day dates tie (a same-day fresh session gets the other kind — intended).
- **Input means the MODALITY categories `listening`/`reading`, NOT the SKILL_GROUP
  families of those names.** The families answer "what does this vary against"
  and rightly hold `legal` ("Što je rješenje?"), `literature`, `media-analysis`
  as reading for the variety pass. As comprehension INPUT a terminology bank is a
  drill; the first draft used the families and at B2 chose the literature drill
  over the graded reader every reading day. `inputKindOf` is the one definition;
  the modality set is pinned by id.
- **Authored before generated** (`generated?: boolean` on the pool entry — the
  P2.4 zero-AI-by-default posture; AI variants stay reachable via P3 fill). The
  flag is DERIVED, not trusted: `sessionInputSlot.test.ts` walks the real router
  to each input screen's component and requires `generated` ⇔ it calls a Claude
  endpoint (endpoints read from `_aiBudget.js`'s ceiling table minus the
  non-Claude speech/translation/image entries) for its CONTENT. **That walk caught
  `storymode` on its first run**: its pool comment said "scene banks are
  per-level"; the screen calls `_aiPost('/api/ai-chat', { mode: 'story' })`. Only
  the city list is authored. One auxiliary exemption, `grammarreader` (tap-a-word
  analysis over authored passages), pinned to the endpoint it must still call.
- **Two input screens now level themselves and carry `adaptive` honestly.** The
  LISTEN bank has a `level` on all 45 items; both launch sites shuffled the whole
  bank, so an A1 learner's Listening Quiz was mostly B1–C2 sentences —
  `_levelledListen` filters to ≤ level (whole-bank fallback under 4 items).
  `GradedInputScreen` opens on the learner's level instead of All (177 stories,
  A1 first), falling back to All when a level has no stories; its filter row is
  unchanged. Never tag an entry `adaptive` on the strength of a screen that does
  not actually level its content — the flag means dist 0 in the fill sort.
- **WHAT THIS COSTS, stated:** the A2 discovery slot. Discovery fires only when
  TWO fill slots remain after the guarantees; A2 had that headroom and B1+ never
  did. In default mode the widened pool's window is now the LRS bonus round at
  every level; fluency mode (+2) still has the headroom and the mechanism is
  asserted there (`session-coverage.test.ts`). Reference entries are excluded
  from the slot outright (a guarantee of input is a graded finish, not a browse
  list — the P2.7 exclusion in the other direction).
- Mutation-verified, nine mutations: slot never fires (16 fail), slot ignores the
  budget (2), generated no longer sorts last (4), reference allowed (1), storymode
  flag dropped (2), alternation removed (3), LISTEN filter dropped from the
  session branch (2), inputKindOf back to skill families (3), graded reader opens
  on All (2).
- NEVER: let the slot add length (keep the `< fillTarget` check); define input by
  SKILL_GROUP; serve a reference entry from it; tag `generated` by feel — fix the
  screen or the derivation test, never the flag alone; make P2.8 outrank P2.7.

## Critical Architecture: Production Teaching (owner directive, 2026-08-18)

The 2026-08-18 audit finding this section exists to keep closed: the app TESTED
production skills but barely taught them, writing was structurally
unschedulable, and daily speaking fed nothing back to the mastery ledger (so
`weakestProductionKind` biased 'speak' forever without converging).

- **Guided Writing** (`src/components/practice/GuidedWritingScreen.tsx` +
  `src/data/writingCurriculum.ts`): study a native model → complete guided
  frames (local check, zero AI) → free production against a checklist, graded
  by the SAME `/api/correct` rubric the exam uses. Curriculum is CEFR-complete
  A1–C2 (≥3 units/level, pinned by `writingCurriculum.test.ts`) — A1 had NO
  writing content before. The curriculum file is in `lintCroatianText.mjs`
  TARGETS; model texts must stay native-standard.
- **Speaking coach** (`/api/speaking-coach` + `src/lib/speakingCoach.ts`):
  transcript-in (no STT cost), returns the exam's four rubric criteria PLUS an
  error list in the writing evaluator's errorType taxonomy and one concrete
  piece of advice. Prompt lives in `_evalPrompts.js` (never fork it inline).
  FAIL-SOFT BY CONTRACT: every failure returns null and the practice continues
  uncoached — the coach may never block speaking practice.
- **Closed loops** (pinned by `speakingCoach.test.js` + `productionTeaching.test.ts`):
  rubric-graded daily speech and guided writing BOTH `recordMasteryEvent`
  (weight 2) and push errorTypes through `applyWritingErrorsToAdaptive` — the
  taxonomy is shared, so a spoken case error reschedules case practice exactly
  like a written one.
- **'writing' is a first-class SkillCategory**: appended LAST to
  ALL_CATEGORIES (genitive stays the new-user first pick — same rule as the
  'listening' promotion), routed via `CATEGORY_SCREEN_MAP.writing →
'writing_guided'`, mapped in `skillForCategory` and `SKILL_TO_CATEGORIES`.
  Pool entries `writing_guided`/`writing`/`dictation` carry `category:
'writing'`. Never retag them back to 'speaking' and never remove the route —
  that re-opens the "weak writing has no practice path" hole (the 0%-writing
  C1 case).

## Critical Architecture: Firebase Sync

### Firestore document paths

The client touches exactly three collections, and `firestore.rules` covers all three (everything else falls to the deny-all match):

| Path                                  | Access                                                                                                                              |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `users/{uid_sanitized}`               | read/write — user progress (uid with `.#$/[]` replaced by `_`)                                                                      |
| `users/{uid}/xpAudit/{ts}`            | write-only — `offlineAwardQueue.flush()` audit entries                                                                              |
| `users/{uid}/conversationMemory/{ts}` | read/write — Maja's per-session summaries                                                                                           |
| `srs/{uid_sanitized}`                 | read/write — SRS cards, kept out of the 200 KB progress blob                                                                        |
| `profiles/{uid_sanitized}`            | **read-only** — a legacy doc the client no longer writes; the read exists so `fbExportUserData` can still return it for GDPR export |

There is **no `leaderboard` collection and no `families` collection.** The leaderboard feature was removed (see the comment on the `profiles` block in `firestore.rules`), which is why that block has no create/update rule. `fbJoinFamily` and `memberXP` no longer exist anywhere in `src/`. Both were documented here long after they were gone — if you are adding a Family feature, you are building it from scratch, and it needs a new rules match or every write hits deny-all.

### fbSaveProgress (src/lib/firebase.js)

Writes a single document, `users/{id}`, via `set({ merge: true })` — the array reconciliation (`stats.vs` / `ct` / `badges`) is folded into that same write rather than a follow-up `updateDoc`. Always called via `buildProgressSnapshot()`. Writes `weekXP` from localStorage `nh_week_xp_{weekKey}`.

### CEFR on the wire — two fields, two types

This has been documented wrongly in both directions, so be precise. **Both** representations are real:

| Field      | Where                           | Type                                                                                                                |
| ---------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `nh_level` | inside the progress JSON blob   | **string** — `"B1"`. Merged by CEFR rank in `applyRemoteProgress` (`CEFR_NUM` is used locally for comparison only). |
| `level`    | top-level field on `users/{id}` | **integer 1–6** — converted by `_CEFR_NUM` in `fbSaveProgress`, merged with `Math.max`.                             |

The integer is what makes that `Math.max` meaningful, and is also why a CEFR _demotion_ cannot currently propagate.

`firestore.rules` has **no clause on either field**, so neither type is enforced. A wrong type is accepted silently and breaks its consumers rather than failing at the write — do not rely on the rules to catch it.

The CEFR the user _sees_ is usually neither: `getCEFR(xp, lc, gc)` derives it, so syncing `xp`/`lc`/`gc` is what actually carries a learner's level between devices.

### Multi-tab safety

Firestore is initialized with `persistentMultipleTabManager()` to allow multiple browser tabs without the "exclusive access" assertion error (b815).

---

## Critical Architecture: AI Cost & Availability (owner directive 2026-08-08; ceiling raised 2026-08-14)

Two outcomes, both enforced in code: **every AI feature always answers** (cached/degraded, never dead), and **total AI spend cannot exceed $10/month** (raised from $5 on 2026-08-14 explicitly to buy more spontaneous-conversation turns — the fluency lever — NOT to loosen per-endpoint ceilings or promote models).

### The layers (src of truth in parentheses)

1. **Model policy**: ALL Claude endpoints run `claude-haiku-4-5-20251001`. The owner's cost ceiling overrides the "largest model" default — do not promote an endpoint to Sonnet/Opus without redoing the budget math in `_aiBudget.js`.
2. **Prompt caching**: the 7 conversational call sites (ai-chat ×3, maja ×2, conversation, conversational-tutor) send `system` as the cached-array shape. Integration tests assert the `cache_control` marker — removing it silently 10×'s input cost.
3. **Per-user quota** (`_aiQuota.js`): 300 turns/day (doubled with the 2026-08-14 budget raise), sized against the budget, not just abuse.
4. **Global monthly governor** (`_aiBudget.js`; schema doc in `migrations/ai_month_spend.sql` — the table SELF-MIGRATES on first use, nobody runs SQL by hand): every metered call pre-charges its worst-case ceiling against one D1 ledger; at $9.00 the gate answers `429 monthly_budget_exhausted` ($1 head-room under the $10 mandate for providers billed outside the ledger). Conversational endpoints RECONCILE after the response (`reconcileBudget` refunds ceiling minus actual usage — never charges more, failure leaves the ceiling charged), so the ledger records real spend and the budget funds ~5-10x more conversation turns than ceilings alone would. Ceilings are derived from each endpoint's `max_tokens`; `aiBudget.test.js` re-reads them from source and **fails the build on drift**. Unknown endpoints get a default ceiling — never free.
5. **Self-metered endpoints** (ceiling 0 + `:generate` entry): `/api/tts`, `/api/daily-culture`, `/api/news` serve from KV caches and charge the ledger only on the cache miss that actually generates. Ceiling-0 requests pass even at the cap so **cached content keeps serving when live generation is paused**.
6. **Shared generation**: daily-culture is one Claude call per day globally (KV date key); news is one 4-article simplification per (level, 6h window); TTS audio is generated once per unique phrase (KV, 90 days) — repeats are ~0ms and free.
7. **Prompt version on cached content** (`_promptCache.js`): a cache-served 200 replays text generated hours ago, so it is tagged with the version stored **beside** the body in KV metadata — never the current one, which would attribute old text to a new prompt. The stored VALUE stays byte-identical (that is why metadata, not an envelope), and an entry written before tagging carries no tag and is served **untagged** rather than guessed. Applies to `/api/daily-culture` and `/api/news`; any future cached AI content must do the same.
8. **Croatian script rule** (`CROATIAN_SCRIPT_RULE` in `_croatianGuard.js`): any endpoint whose Claude output can contain Croatian must state the alphabet — appended to the system prompt at request time, and carried in `alsoVersion` so rewording the rule moves the prompt's version. `latinizeResponseBody` is the net, NOT the fix: it transliterates Cyrillic before a learner sees it, which means a prompt with no script rule fails silently and forever. `/api/explain-error` proved this on 2026-08-21 (caught by the weekly observatory, `explain-error@72630bad`). Coverage is ratcheted by `croatianScriptRule.test.js`; `KNOWN_GAP` there is empty as of 2026-08-25 and can only shrink. One trap: `/api/correct` gets the rule inside `writingEvalSystemPrompt` rather than at its own call site, because `/api/golden-calibration` runs that same builder — appending at the call site would make the drift detector measure a prompt production no longer uses.
9. **Multi-prompt responses** (`promptListHeaders` / `parsePromptTagList`): a response produced by MORE than one prompt sends every tag, comma-separated. The middleware records one tag as `promptId`/`promptVersion` exactly as before, and two or more as `prompts: [...]` — never one of them as _the_ prompt, which would attribute the whole response to a prompt that produced part of it. `/api/golden-calibration` is the case (both evaluators, one dispatch); it derives the list from the rows it actually produced, so a trimmed golden set cannot make it claim a prompt that never ran. The observatory groups such records under the joined tags, not under `(uninstrumented)`.
10. **Client behavior**: `classifyAiLimit` (src/lib/aiLimit.ts) distinguishes `burst`/`daily`/`budget`; every AI surface renders the budget pause as a calm message (`BUDGET_PAUSE_EN`/`_HR`), never a retryable error. TTS budget-refusal is a 503 → the client falls back to on-device speech synthesis.

### NEVER DO (AI cost)

- Never raise a `max_tokens` without its `ENDPOINT_CEILING_MICROUSD` entry (the build fails, correctly).
- Never mark an endpoint ceiling-0 unless it self-charges `checkAndChargeBudget(env, '<path>:generate')` on its spend path (tested).
- Never charge the gate per-request for a cache-served endpoint — that burns the ledger on free hits.
- Never bypass `requireAuthedAI` for a new USER-FACING AI endpoint; it is the budget's only choke point for user traffic. The one sanctioned exception is `/api/golden-calibration` (dispatch-only, gated on CRON_SECRET or the self-provisioned CALIBRATION_SECRET): no user can reach it, and it pre-charges its ENTIRE run's ceiling via `checkAndChargeBudget` before the first Claude call, so the budget guarantee holds without the user gate.

### Evaluator trust & audit trail (2026-08-16)

- **STT-stage calibration** (gap #7, 2026-08-19): the rubric golden set feeds known TRANSCRIPTS — `/api/stt-calibration` + `stt-calibration.yml` (monthly + dispatch) calibrate the stage in FRONT of it: `_sttGoldenSet.js` phrases → the production TTS voice (`tts.js` `tryAzure`, KV-cached 90d) → the REAL provider chain (`_transcribe.js`) → word-error rate ≤ 0.34 per sample (diacritics count; band widening is an owner decision), 2+ out = drift, workflow fails red. Same CRON_SECRET/CALIBRATION_SECRET gate; whole-run pre-charge (`6 × (4k + 15k)` µ$ ≈ $0.11 worst case, ~$0.09 repeats); zero Claude calls. Pinned by `sttCalibration.test.js`.
- **Golden-set calibration**: `functions/api/_goldenSet.js` holds pre-scored Croatian samples; `/api/golden-calibration` (dispatched via the `calibration.yml` workflow) runs them through the SAME rubric prompts production uses (`functions/api/_evalPrompts.js`, imported by `correct.js` + `assess-speaking.js` — never fork those prompts back inline) and reports band misses; 2+ misses = drift, the workflow fails. A sample whose evaluation ERRORS (e.g. a transient JSON-parse hiccup) is a warning, not a miss — only genuine out-of-band scores count toward the drift gate. `goldenCalibration.test.js` pins set structure, auth, budget pre-charge, and prompt sharing.
- **Self-provisioning calibration auth (zero owner action)**: `calibration.yml` derives its token as HMAC-SHA256 of the public label `nh-calibration-v1` keyed by the CI-held `CLOUDFLARE_API_TOKEN`, and on 401/503 provisions `CALIBRATION_SECRET` into the Pages project itself (wrangler `pages secret put` + API redeploy + poll). `golden-calibration.js` accepts CRON_SECRET **or** CALIBRATION_SECRET (timing-safe both; 503 `calibration_secret_missing` when neither). Nobody ever pastes a secret. `.gitleaks.toml` allowlists the `nh-calibration-v1` label. A run costs ~$0.19 and takes ~30s.
- **Calibration record**: 2026-08-17 — four runs, all stable. The error-dense B1 essay (`w-b1-broken`) scored EXACTLY 62 on three independent runs; band ceiling widened 60 → 65 by owner decision (a stable grader read, not drift). Final post-band run: **10/10 within band**. Re-run on owner request any time via the workflow dispatch.
- **Attempt evidence**: `src/lib/attemptEvidence.ts` (`nh_cefr_attempt_evidence`) stores what each Level Check production score was based on (heard transcript / essay + evaluator feedback), joined to attempts by `takenAt`. **Deliberately local-only** — never add it to `buildProgressSnapshot` (tested); the synced blob carries results, not evidence.
- **Transcript review**: exam `SpeakingTaskScreen` shows "here's what I heard" and holds the score until the learner confirms; ONE re-record per task (fix a mishearing, don't farm the grader). E2E flows must click `speak-confirm` after recording.

## Critical Architecture: Croatian Script Guard (owner directive, 2026-08-17)

No Cyrillic and no Serbian variants may reach a user, ever. Three layers (pinned by `croatianGuard.test.js`):

1. **Middleware chokepoint**: `functions/_middleware.js` pipes every TEXTUAL `/api` response body through `latinizeResponseBody` (`functions/api/_croatianGuard.js`) — azbuka→gajica transliteration, streaming-safe, binary untouched. No endpoint, present or future, can leak Cyrillic. Never remove this call.
2. **Prompt rule**: the 7 Croatian-generating endpoints (ai-chat, maja, conversation, conversational-tutor, dialogue, listening, micro-lesson) append `CROATIAN_SCRIPT_RULE` to their system prompts — the only layer that prevents Serbian LEXICON/ekavica, which transliteration cannot fix. New Croatian-generating endpoints must adopt it (tested by source pin).
3. **Static lint**: `scripts/lintCroatianText.mjs` adds a high-precision Serbism blocklist over the content files. **It runs in CI** (the quality job) as of 2026-08-26 — before that it was an npm script executed when someone remembered, which is the same "guard that never fires" class as an unconditional-write regression. JS `\b` is ASCII-only and mis-fires around č/ć/đ/š/ž — the rules use Unicode lookarounds. Morphology matters: oblique forms of `vrijeme` are `vremena/vremenu` IN STANDARD CROATIAN; only bare ekavica forms are flagged. Extend the list conservatively — false alarms train people to ignore the lint.

**The two checks are not the same check** (2026-08-26). ENCODING BLEED is a defect in every string — a Cyrillic homoglyph in a deliberately wrong multiple-choice option still has to render, still breaks TTS and copy-paste. A SERBISM is a defect in every string a learner can READ as Croatian, and **that includes distractors**: a wrong answer is on screen as a clickable option, so a learner meets it whether or not they pick it. Teaching the Croatian/Serbian contrast by putting the Serbian form in front of them is the one method this app does not use — distractors must be wrong some OTHER way (case, aspect, register, word order). Only the ENGLISH fields (`en`, `note`, `subtitle`, `tip`) are exempt.

`dialogueScenarios.js` is walked **structurally** rather than by regex, because only the data knows which option is correct: `opts[answer]` is Croatian, `opts[1..3]` are distractors. Before that the whole conversation bank was unlinted. `opts`/`options`/`choices` arrays in the regex targets are scanned too. When adding a TARGET, confirm the file actually exposes fields `CRO_FIELD_RE` matches — a target whose fields never match is a file you believe is covered and is not.

**Lesson TABLES were invisible until 2026-08-28.** `lessons.js` had been in
TARGETS for a long time, which made it look covered — but `CRO_FIELD_RE` never
matched a `rows` array, and a table is where a lesson keeps most of its
vocabulary. Every table cell in every lesson went unscanned. Found by
mutation-testing the guard against the A1 expansion, which put ~150 new Croatian
cells into tables; the file passed clean, then passed clean again with `hleb`
injected. Lessons are now walked **structurally** (`lessonStrings`) like the
dialogue bank: `rows` cells get both checks, `headers` encoding only, `points`
and `highlight` both. The lesson: a target passing is not evidence of coverage —
mutate it and watch it fail before believing it.

`CONTRASTIVE_LESSONS` is the ONE Serbism carve-out, scoped to a lesson **id**
(`language-identity`, C1) rather than a field or a pattern. That lesson's table
has a column headed Serbian, where naming the form IS the teaching — the same
shape as the dialogue bank's English `tip` exemption. Encoding is still checked
there. The distractor directive it sits against was written about a learner
meeting a Serbian form as a clickable answer with nothing marking it foreign;
a labelled comparison column is the opposite case. If the owner decides the
contrast table should go, delete the entry — nothing else depends on it.

Coverage is **466 files** plus 2 walked structurally, up from 157 on 2026-08-31 in three waves.

**THE THIRD WAVE FOUND THAT THE TARGET LIST HAD STOPPED BEING THE BINDING CONSTRAINT, AND NOBODY HAD MEASURED IT (2026-09-01).** Two waves of adding files had trained everyone — me included — to think of coverage as a list length. A census of every candidate outside TARGETS found **1,159 Croatian strings of which `CRO_FIELD_RE` saw 137: twelve per cent.** Adding the remaining files to the list would have bought almost nothing. The gap was the MATCHER, and it was invisible from a list precisely because a list cannot show you what it fails to match.

**Two structural misses, both large, both a single character of regex:**

- **The JSX separator.** `\s*:\s*` matches an object field and never an attribute, so `title="🔢 Množina"` was unreachable. That is how all **109 ModeDrill wrappers** present every string they own — and a wrapper owns the title, the subtitle and the three praise lines. They could have sat in TARGETS for months and stayed invisible: the exercises.js finding arrived at from the opposite direction. `(?::|=)` covers both, and it is **mutation-verified as load-bearing** — with JSX support removed, a Cyrillic homoglyph in a wrapper's `subtitle=` passes clean.
- **The praise triple.** `perfect` / `good` / `more` are the lines shown when a drill ENDS, so a learner meets one on every single completion — 109 of each, and not one in a field name the regex listed. They are plausibly the most-read Croatian in the practice programme and were the least linted.

The rest of the widening came from ranking the census by volume: `label` (54), `subtitle` (77 in JSX), `title` (46 in JSX), `desc` (30), `example` (15), plus `blurb`, `line`, `word`, `phrase`, `audio`, `pair`, `chant`, `content`, `full`, `mixed`, `role`. Separately, `objectives` joined the ARRAY pass: the curriculum spine holds 55 Croatian strings in bare string arrays and the lint saw **none** of them.

**Widening is the dangerous direction — the 123-false-positive lesson — so it was dry-run before it was written.** Over the 303 existing targets it sees **1,408 more strings and reports zero new findings**; over all 270 remaining candidates, zero. Re-measure that way before adding a key.

**Files are now chosen by COVERAGE RATIO, not string count.** The second wave's ≥30-strings rule was a proxy for "does the lint genuinely see this file"; the ratio measures it directly, which is what the exercises.js/lessons.js finding was actually about. Every file added is one the widened matcher sees at least half of, most of them all of. A file with one Croatian string at 100% is honestly, fully linted — there is no false confidence in it — whereas a file with 200 of which the matcher sees three is the trap. That reframing is what took the third wave from "32 thin files" to 164.

**The exclusions carry only reasons that were checked.** I drafted a never-lint set for `_serbisms.js`, `_croatianGuard.js` and `_goldenSet.js` on the reasoning that they hold Serbian forms and deliberately error-dense samples by design — then measured: **all three produce zero findings if swept in.** The Serbian forms in the rules file live in regex literals and in `use:` fields (which hold the CROATIAN replacement), and the golden set's errors are case and agreement, not lexis. The reasoning was plausible and wrong, which is the `idioms` exemption again, so no such set was written: those three fall below the ratio bar like everything else, on a measurement rather than a story. (`_goldenSet.js` is still worth watching — a future sample authored WITH a Serbism to test the evaluator would be a legitimate finding to suppress, and that day the exemption gets written with a subject.)

**The mutation run caught a real half-finished change**, which is the whole argument for doing it: `objectives` was added to the array pass while `curriculum.js` was never added to TARGETS, so a Cyrillic `а` injected into an objective passed clean — the pass had nothing to run on. Shipping a matcher extension without its file is the same defect as shipping a file without a matcher, and only mutation shows either.

**The second wave was CENSUSED before it was added, and the census overturned the stated reason for the exclusion.** All 90 remaining candidate files in `src/` were dry-run through the lint first: they produced **one finding across 11,691 strings**, and it was a false positive. The recorded rationale — that the component tree mixes Croatian examples with English UI copy — did not describe what was actually left: **83 of the 90 carry no English UI prose at all**. The blocker was real when it was written about the tree as a whole and had stopped being true of the remainder.

**45 files were added, not 90, and the difference is the `lessons.js` lesson.** Only files the lint SCANS meaningfully (≥30 strings) went in. Twelve candidates scan fewer than five strings — adding those would create exactly the false confidence this section exists to warn about. `dialogueScenarios.js` was excluded because it is already walked structurally, and test files because they are not learner-facing.

**The one false positive earned a carve-out narrower than itself.** `slangData` glosses `Dušmani` as *"Enemies — from Turkish 'düşman'"*; Turkish letters sit in `BAD_CHARS_RE` because inside CROATIAN they are mojibake for š/g/i, but inside an English gloss quoting an etymon they are correct spelling. `FOREIGN_ETYMON_FIELDS` drops **only the Turkish class**, and **only in `en`/`note`**. Cyrillic and the invisible soft hyphen stay flagged everywhere including `en` — mutation-verified in both directions: Cyrillic in an `en` field still fails, and a Turkish letter in an `hr` field still fails.

**The hand-written drills came in first, and the reason they were separable is the point.** The 101 `src/components/practice/*Drill.tsx` files predate the ModeDrill engine and are DATA wearing a `.tsx` extension — `q` / `answer` / `opts` / `tip`, the same shape as `src/data/drills/*`, which has been linted since 2026-08-29. Measured before adding: essentially no English UI prose in them. That is what distinguishes this cohort from the rest of `src/components`, which mixes Croatian examples with English copy and is still deliberately out — sweeping THOSE in wholesale is how a lint earns the false-positive reputation that gets it ignored. Real bugs live there (`šerati` in `DiasporaNote.tsx`, fixed 2026-08-26), so the component tree is still unfinished, not settled.

**The expansion found one real bug in its first run**: `NegationGenDrill` offered `Nemam vreme.` as a distractor. The intended error was accusative-instead-of-genitive, which in Croatian is `vrijeme` — the ekavica form made it wrong twice over and put a Serbian form in front of the learner. (The lint correctly did NOT flag `vremena`/`vremenu`/`vremenom` beside it: those are the standard Croatian oblique forms.)

**`CONTRASTIVE_FILES` is the drill-level twin of `CONTRASTIVE_LESSONS`**, and it holds exactly one entry: `PosudjeniceDrill` (C2), a standard-vs-non-standard discrimination drill whose subject IS the pairs a heritage speaker mixes — tisuća/hiljada, kruh/hljeb, vlak/voz — with every item's `tip` naming the non-standard member AS non-standard. Same justification as `language-identity`: naming the form is the teaching. **This does not loosen the distractor directive** — that directive is about a learner meeting a Serbian form with nothing marking it foreign, and here the stem, the answer key and the tip all mark it. A drill that merely used `hiljada` as a throwaway distractor is still a bug and does not belong on the list. Scoped to the FILE and to Serbisms only: encoding bleed still fails the build inside it (mutation-verified — an injected Cyrillic `а` in the exempted file fails).

**`croatianLintTargets.test.ts` guards the list itself**, which nothing did before. It DERIVES the drill cohort from the glob rather than restating it, so a drill authored next month cannot land outside TARGETS silently; it checks every target still exists; and it holds the carve-out honest in both directions — the entry must still exist AND still contain a form the lint would otherwise flag, or it is guarding nothing while suspending a check over the whole file.

## Critical Architecture: Concept Teaching (owner directive, 2026-08-18)

English speakers have no concept of grammatical case — the app must TEACH
concepts, not just drill them (pinned by `caseConceptTeaching.test.tsx`):

- **Teach before test**: every case drill (Genitive/Accusative/Dative/
  Locative/Instrumental/Nominative/Clitic + VocativeScreen's rules phase)
  opens with `CaseConceptIntro` — the concept card from
  `src/data/caseConcepts.ts` (plain-English name, the question the case
  answers, the ENGLISH BRIDGE, example + counterexample) plus the one-time
  "Why Croatian words change" primer (he/him/his — localStorage
  `nh_case_primer_seen`). Returning learners tap through in one second —
  never add friction to the intro. Never remove the teaching phase to
  "streamline" a drill: that recreates the audit finding this fixes.
- **The English bridge is the method**: every concept anchors to something
  the learner already says in English (he/him/his, who/whom, "the dog's
  bone", "give HIM the book"). New grammar content must gloss every
  technical term in plain words — never an unglossed "genitive".
- **Wrong answers teach**: the case drills call `/api/explain-error`
  (type `case_drill`) via the shared `useExplainError` hook +
  `DrillExplainCard`; the endpoint's prompt now assumes NO formal grammar
  background. Fail-soft — the static tip always remains.
- **The primer lesson is A1**: the `cases` lesson in
  `functions/api/content/_data/lessons.js` is `level: 'A1'` — the app's only
  "what is a case" explanation must never again sit above the level of the
  drills that need it (it was B1 while the drills were A1).

## Critical Architecture: AI Output Observation (owner directive, 2026-08-18)

The bakery Cyrillic incident was found by the owner in the field. The system
now observes what AI endpoints ACTUALLY serve (pinned by `outputObservatory.test.js`):

- **Chokepoint sampling** (`functions/_middleware.js` `buildObserver` + the
  guard's `observe` hook): every Cyrillic contamination becomes a durable KV
  incident (`obs:i:*`, 30d TTL) and ~2% of clean AI output is sampled
  (`obs:s:*`, truncated to 1536 chars, 14d TTL). The sampling predicate is
  membership in `ENDPOINT_CEILING_MICROUSD` — the ceiling table IS the
  canonical AI-endpoint list; nothing non-AI is ever sampled. Only 200s.
  Flush-time KV writes ride a bounded `waitUntil` race. Fail-soft everywhere.
- **Weekly sweep** (`/api/output-observatory` + `output-observatory.yml`,
  Mondays 06:00 UTC + dispatch): lists incidents and re-screens samples with
  `containsCyrillic` + the shared Serbism rules; the workflow FAILS RED on any
  incident or finding. Zero AI spend (pure KV + regex — no budget ceiling
  needed). Auth: same CRON_SECRET/CALIBRATION_SECRET gate as golden-calibration
  (the self-provisioned credential covers both endpoints).
- **Serbism rules single source**: `functions/api/_serbisms.js` — imported by
  BOTH `scripts/lintCroatianText.mjs` (static content) and the sweep (live
  output). Add rules there, never fork; extend conservatively (the
  123-false-positive lesson).

## Critical Architecture: Prompt Instrumentation (2026-08-21)

The observatory could say an incident happened on `/api/dialogue` but not which
prompt produced it, so "did last week's prompt edit cause this?" was
unanswerable — and a prompt could be reworded in a drive-by commit with nothing
recording that it changed. Prompts ARE the teaching quality of this app; they
now have identity. Pinned by `promptRegistry.test.js`.

- **The registry** (`functions/api/_promptRegistry.js`): `definePrompt(id, text)`
  returns `{ id, version, text, tag }` where `version` is an FNV-1a hash of the
  text — so **the version changes automatically on any edit**. Never replace this
  with a manual counter; a counter drifts the first time someone is in a hurry.
  Duplicate ids **throw at module load** (two prompts under one id would merge
  silently in every report). FNV-1a rather than SubtleCrypto because the digest
  API is async and these are defined at module scope.
- **The template is the unit, not the runtime string.** Endpoints assemble
  `template + per-request context`; hashing the assembled prompt would give a
  new "version" every request and measure nothing. Per-request values are
  `{{placeholders}}` filled by `renderPrompt`, which substitutes via a replacer
  function so a `$&` in learner text cannot splice the prompt. A missing
  variable warns and renders empty — it never throws, because a throw would 500
  a live teaching endpoint over what is always a coding error; CI catches it via
  the "no placeholder left behind" test.
- **The wire**: an instrumented endpoint spreads `promptHeaders(PROMPT)` into its
  **200 response only**. `functions/_middleware.js` reads `x-nh-prompt`, passes
  it to `buildObserver` (which records `promptId`/`promptVersion` on the KV
  observation), and `stripPromptHeader` removes it before the response leaves.
  The tag is parsed with `parsePromptTag`, never trusted — an unparseable tag is
  recorded as absent, never as a made-up id.
- **The sweep** groups incidents and sample findings by `id@version` in a
  `prompts` roll-up. Untagged records are labelled `(uninstrumented)` — never
  inferred from the path.
- **Coverage is tracked in THREE categories** in `promptRegistry.test.js`, and a
  test asserts they partition `ENDPOINT_CEILING_MICROUSD` exactly — no endpoint
  can hide in a gap, and none can appear twice:
  1. `INSTRUMENTED` (15) — tags its 200. A test fails if one doesn't.
  2. `NO_CLAUDE_PROMPT` (7) — makes no Claude call, so there is nothing to
     version (`tts`, `stt`, `translate`, `flux-generate`, `pronunciation-assess`,
     …). **Not debt.** A test fails if one of these starts calling Claude,
     because it would then have an authored prompt and belong in the debt list.
  3. `KNOWN_UNINSTRUMENTED` (11) — real remaining debt, each entry carrying its
     reason. A test fails if one is quietly instrumented without being moved.
- **Why the remaining 11 are not done**, so nobody re-derives it:
  - **Branching assembly** (`ai-chat`, `conversation`, `conversational-tutor`,
    `maja`, `maja-debrief`): the blocker is no longer the template language —
    `renderPrompt` supports `{{#if}}` as of 2026-08-22 — it is SIZE. `ai-chat`
    alone routes 14 mode builders, each its own authored prompt. Mechanical but
    large; convert one endpoint at a time. `flash-context` came off this list
    first as the smallest proof the conditional support works.
  - **Multi-prompt** (`golden-calibration`): runs BOTH registered evaluators in
    one dispatch. One `id@version` header cannot say which produced the
    response, and guessing would be worse than saying nothing.
  - **Cache-served** (`daily-culture`, `news`): see below.
- **Cache-served (`daily-culture`, `news`) are deliberately last.** Their 200
  usually replays content generated hours earlier, so tagging it with the
  CURRENT prompt version would attribute old text to a new prompt — a lie inside
  the exact report this exists to make trustworthy. Instrumenting them means
  storing the version alongside the cached body, not adding a header.
- **`alsoVersion`** (`definePrompt(id, text, { alsoVersion })`): authored text the
  template SELECTS but does not contain — per-level rule tables, persona blurbs,
  anything looked up by key and passed in as a value. Without it a prompt looks
  fully instrumented while an edit to "use only the 300 most common Croatian
  words" moves nothing, because those words live in a lookup table rather than
  the template. It changes the VERSION only; the rendered prompt is byte-for-byte
  unaffected, and omitting it hashes exactly as before. **If you add a lookup
  table a prompt draws from, pass it here** — a test pins the endpoints that
  currently need it.
- **Conditional sections** (`{{#if name}}…{{else}}…{{/if}}`, nesting allowed):
  what let branching prompts be versioned at all. Rules that keep it honest:
  - **Conditionals resolve BEFORE substitution**, and only ever remove or keep
    authored text — they never insert a value. So a learner's text can never
    reach the parser, open a block, or close one it sits inside. Do not reorder
    these two passes; tests pin it.
  - **An empty array is ABSENT.** Prompts branch on lists constantly ("if they
    have recent errors, mention them"), and a truthy `[]` would emit a sentence
    promising context that is not there. `0` and `''` are absent too, per JS.
  - **A missing key is absent and does NOT warn** — for a conditional, "not
    provided" legitimately means "absent". That differs from a missing
    `{{name}}`, which leaves a visible hole and warns.
  - **Malformed templates throw in `definePrompt`**, at module load, like a
    duplicate id — never at request time, which would ship a broken prompt to a
    learner before anyone noticed.

## Critical Architecture: Speech Endpointing (owner directive, 2026-08-08)

Users were being cut off mid-speech. The rules that prevent regression (pinned by `speechEndpointing.test.js`):

- **Maja (Web Speech)**: silence windows ≥1500/2600 ms (`MajaScreenUtils.js`); the silence-timer path must call `rec.stop()` (flushes un-finalized words) — **never `abort()`**, which discards them. A 1.2s backstop covers WebViews that never fire `onend`.
- **VAD hook (`useWhisperSTT.js`)**: endpoint ≥2500 ms; exit threshold must sit well below the entry threshold (hysteresis — soft trailing speech is not silence); **no 'processing' state** — utterance-end returns to `waiting` immediately and transcription runs concurrently (per-recorder chunks, ordered delivery); capture starts at the FIRST threshold crossing (no front-clip); 60s max-utterance backstop.
- Recording caps are backstops, not endpoints: Shadowing 15s, exam tasks show "up to Xs". Never reintroduce a "no speech detected" timer that stays armed while speech is active.

## Critical Architecture: Push Delivery Observability

The streak reminder is the only thing this app does while nobody is watching, so it is the only failure a learner cannot report. Three layers, each answering a question the one before it could not:

| Layer           | File                                                                            | Answers                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Heartbeat       | `functions/_pushRunLog.js` — written on EVERY run, including quiet ones         | Is the cron firing? An absent record is a positive statement that it is not; no success marker can say that.                                                                                      |
| Failure reasons | `functions/_pushFailure.js` — bounded code per failed attempt                   | WHY the sends are failing. Added 2026-08-23, when the heartbeat's first real outage reported `all_failing` and nothing recorded could distinguish a secret mismatch from unconfigured VAPID keys. |
| Sweep           | `functions/api/push-health.js` + `push-health.yml` (daily 07:30 UTC, fails red) | Anyone looking at it at all.                                                                                                                                                                      |

Rules:

- **Failure reasons are CODES, never messages.** A fetch rejection embeds the URL it failed against, and a push endpoint is a per-subscriber identifier. `classifyPushFailure` maps to a closed vocabulary and `countPushFailure` coerces anything else to `unknown`, so nothing outside it can reach the 14-day KV history that an ops endpoint hands out. Never "just store `e.message`".
- **`push:lastAttemptAt` is written BEFORE the send, not after.** Written after, a throw left all three markers absent — identical to never having tried, which is a different incident with a different fix.
- **`ok` from `/api/streak-push` means "not expired", NOT "delivered".** The worker must also check the push service's own `status`; treating `ok` as delivery counted every push-service rejection as a send. A missing `status` still counts as accepted (older relay), so the check can never invent failures.
- **Retention and judgement are different windows** (2026-08-25). History is kept 14 days; the DELIVERY findings judge only `PUSH_JUDGEMENT_WINDOW_HOURS` (48). They were the same number, so the sweep described history as if it were now: with the credential outage fixed and no attempt made in two days, it still reported "all 6 push attempt(s) ... failed — unauthorized x4" on two-day-old attempts. It would also have gone red a second time as sends resumed, when `attempted` crossed the 8-attempt minimum at a ratio still dominated by the old failures (6/8 = 75%). Older runs stay in the report as `history` and the workflow prints them as a **warning** — never a gate, or the window is undone. **LIVENESS (`stale`, `halted`) always reads the NEWEST run regardless of age** — a cron dead for three days has no recent runs at all, which is exactly when the alarm matters most. The finding text names the window it measured; a 48-hour verdict printed beside a 14-day count is the mismatch that makes a reader distrust every number in the report.
- **The heartbeat write is UNCONDITIONAL.** `scheduled.js` writes a run record on every hourly run — including runs where nobody was due, and runs that halt on missing config (recorded as `haltedReason`, because "misconfigured" and "not running" need different fixes). `push:run:last` is the unexpiring liveness pointer; `push:run:at:<iso>` is 14-day history. Guarding it on `sent > 0` leaves it in the right place and still destroys the mechanism. It is written BEFORE the weekly-backup block so a slow backup cannot cost us the heartbeat, and `writePushRun` is fail-soft so observability can never take a learner's reminder down.
- **Thresholds are set to stay believable rather than sensitive.** `PUSH_RUN_STALE_MINUTES` is 150 — two missed ticks of slack, because Cloudflare schedules are best-effort and one skipped tick is not an incident. A failure RATIO is only reported above `PUSH_FAIL_MIN_ATTEMPTS` (8): 1-of-2 is not a 50% outage, and crying wolf at that sample size trains the reader to ignore the report. "Every attempt failed" is caught at any sample size. Expired subscriptions are normal browser attrition, **not** failures.
- **A 403 is a DEAD subscription, pruned only with corroboration** (2026-08-27). 404/410 are reported as `expired` and deleted inline; a 403 means the push service refused the VAPID signature for that endpoint — the signature of a subscription created under an older VAPID key — and can never succeed again. Left alone it fails daily, and a failure that never resolves never ages out of the 48h window either, so it eventually trips a red alert describing a dead subscription. **The guard is the design**: a globally broken VAPID config produces the identical 403 on every subscription at once, so the worker collects candidates during the loop and prunes only when `sent > 0` in the same run — one working send is positive proof the keys are good. When nothing sent, the candidates are HELD (logged as held, never silently), the failure codes still record it, and the next run reconsiders. Doing nothing is recoverable; deleting a subscriber base is not. Run records carry an optional `pruned` count (v3, omitted when zero). Pinned by `pushPrune.test.ts` — dropping the `sent > 0` guard fails three tests.
- **The sweep reads the `last` pointer separately from the history list**, because KV list is eventually consistent — otherwise a just-recovered cron still reports as dead.
- **`/api/health` carries `pushDelivery.lastRunAt` but NO counts.** The counts are a proxy for how many people use the app, on an endpoint that is origin-gated rather than authenticated. Keep counts behind the cron secret.
- Run records are v2; `failures` is optional and absent on healthy runs. Readers must treat a missing map as "no reasons recorded", never as "no failures" — v1 records coexist for 14 days after any deploy.

### The weekly Firestore backup has its own sweep (2026-08-25)

`push-health.yml` swept the reminders; nothing swept the backup, which is why the 2026-08-23 credential drift took the weekly snapshot down in silence beside them. `functions/_backupRunLog.js` + `/api/backup-health` + `backup-health.yml` (daily 08:30 UTC, fails red) close it. **Two signals, and the ordering is the design:**

1. **Snapshot age is primary** and measures the OUTCOME — "is there a recent restorable snapshot" — read from `backup:latest` → `backup:<wk>:index.completedAt`. It is the finding that **cannot be silenced by the attempt path never running**: if a bug meant `backupDue` never became true, no attempt record would exist and an attempt-based check would stay quiet forever. Stale after `BACKUP_STALE_DAYS` (9 = one weekly cycle + slack). A `latest` pointer whose index is unreadable counts as NO snapshot — it claims something unrestorable.
2. **Attempt records are the diagnosis** and buy ~9 days: a Monday whose attempts all failed is known that same day instead of when staleness notices. Bounded reason codes (`classifyBackupFailure`), never messages.

- **`skipped` is a SUCCESS** — the once-per-week latch answering "already done" proves the pipeline responded; the 03/04/05 window exists so a transient failure is retried, so one failure followed by a success is the system working.
- **The record is written OUTSIDE the try**, so a throw (a 45s timeout) cannot skip it — otherwise "timed out" and "never attempted" look identical.
- **Swept DAILY though the job is weekly** — swept weekly, a failed Monday isn't known until the next Monday, which is the delay this exists to remove.
- No hourly heartbeat here: the push heartbeat already proves the cron fires from the same handler. That is precisely why signal 1 must not depend on attempt records.
- **Config failures name WHICH variable is missing** (2026-08-26): `missing_project_id` / `missing_service_account` / `missing_kv`, plus the absent variable NAMES in the body. The old single `server_misconfigured` said an attempt failed on config but not what to set — the sweep's first real run reported it 15 times and the answer had to be read out of the source. `server_misconfigured` stays in the vocabulary because 60 days of history contains it; dropping it would coerce those records to `unknown`. Names never values, and `setup-cf-resources.mjs` checks `VITE_FIREBASE_PROJECT_ID || FIREBASE_PROJECT_ID` plus `FIREBASE_SERVICE_ACCOUNT_JSON` — it warned for years about a bare `FIREBASE_PROJECT_ID` the codebase deliberately does not need, while never mentioning the one that was actually absent.
- NEVER: remove the staleness check and rely on attempts; count `skipped` as a failure; move the record write inside the try; make the sweep weekly.

### The cron credential is DERIVED and installed by CI — never set by hand (2026-08-25)

The Worker authenticates to `/api/streak-push` and `/api/backup-progress` with a shared secret. That secret used to be typed into two independent places — a Worker secret and a Pages env var — with nothing keeping them equal; `wrangler.toml` said "Shared with scheduled worker above", which is a comment, not a mechanism. On 2026-08-23 they drifted: **79 consecutive hourly runs, 0 reminders delivered, `unauthorized` on every attempt**, and the weekly Firestore backup down beside it — silently, because nothing sweeps backups the way `push-health.yml` sweeps reminders.

`functions/_cronAuth.js` is now the only definition of what a valid cron caller is, used by both halves. CI derives `MANAGED_CRON_SECRET = HMAC-SHA256(CLOUDFLARE_API_TOKEN, "nh-cron-v1")` and installs it on **both** the Pages project and the Worker on every push to master, so one process writes both and they cannot disagree. Rotating the Cloudflare token re-syncs both halves on the next deploy.

- **The Worker PREFERS the managed secret** (`cronSecretFor`). In a drifted configuration the hand-set value is by definition the one that stopped matching, so reaching for it first would faithfully preserve the outage.
- **`CRON_SECRET` stays accepted** (`isAuthorizedCron` takes either) so a CI-less environment still works and deploying this could never itself be an outage. It is no longer the mechanism.
- **Ordering in `ci.yml` is load-bearing**: the Pages half installs BEFORE `pages deploy` (a Pages secret reaches Functions through a new deployment, not the running one) and the Worker half AFTER `wrangler deploy` (`secret put` needs the script to exist). Both pinned by `cronAuth.test.js`.
- NEVER: install only one half; derive the two halves from different labels; make either install `continue-on-error` — a silent skip re-arms the exact trap. Any NEW Pages endpoint the Worker calls must use `isAuthorizedCron`, never its own comparison.

### The Firebase service account rides the same install path (2026-08-26)

`FIREBASE_SERVICE_ACCOUNT_JSON` had **never** been set on the Pages project. `/api/backup-health`'s first run reported 15 consecutive config failures: the weekly Firestore backup has never produced a restorable snapshot. The same value gates `/api/delete-account`, which fails CLOSED — a learner asking to delete their account got a 500 and kept it — plus `/api/backfill` and the Google TTS fallback. It stayed unfixed for years because it was filed as a dashboard chore, while CI had already proven it can write Pages secrets.

`ci.yml`'s "Install Firebase service account (Pages)" step applies it from the GitHub secret of the same name, before `pages deploy`, on every deploy. Set it once in GitHub; rotation is a secret update, not a dashboard visit. Pinned by `serviceAccountInstall.test.js` (four mutations verified).

- **Absent ≠ broken, and they are handled differently on purpose.** CI cannot DERIVE this one — it is a real Google credential — so an ABSENT secret emits a `::warning` naming it and what breaks, then exits 0: taking the whole deploy red for a condition that predates the change and no code can fix would be worse. A PRESENT secret that cannot be installed FAILS, deliberately not `continue-on-error`, because holding a credential we cannot write is the drift the cron work exists to end.
- **A shape check runs before the install** (valid JSON, `client_email`/`private_key`/`project_id` present, `type` is `service_account`). A malformed paste installed silently converts a clear "missing" into an obscure runtime failure next Monday.
- **Secret hygiene, because this repo is public**: the value is piped on stdin, never argv; the checker reads `process.env`, never argv; every diagnostic prints field NAMES only; `set -x` is never enabled in that step. Same names-never-values rule as the backup failure codes.

### Sentry had TWO halves and neither was wired (2026-09-04)

Found from outside the code: the owner reported the Sentry project was receiving **nothing at all**. Two independent defects, both invisible from inside the repo.

**CORRECTION (2026-09-04, same day).** The original text here said the project had received nothing "ever", and the commit message for #601 said the same. That was a HARDENING of what the owner actually reported — "no events since the deploy", then "nothing in the project" — into a claim about all history that was never established. It matters because it made defect 1 sound like the sole and total cause, and it was not: the RELAY had genuinely never forwarded an event (that half is proved from source and stands), but the CLIENT SDK turned out to be shipping correctly the whole time. The browser showing `window.__nhSentry === undefined` was serving a **stale service-worker bundle**; a hard reload produced a live SDK against a build whose contents CI had not changed. Neither #601 nor #603 fixed the client half — there was nothing there to fix. **Say what was reported, not the strongest thing consistent with it**; the difference is invisible while you are writing it and load-bearing when someone later reasons from it.

1. **The server relay read a name nothing installed.** `/api/report-error` guards on `env.SENTRY_DSN`; `sync-cf-pages-env.yml` pushed `VITE_SENTRY_DSN`. Different key, so the guard was permanently false and the relay had never forwarded one event. It still `console.error`s to the Cloudflare tail, **which is exactly what made the endpoint look healthy**. Same shape as the cron secret that drifted across a Worker secret and a Pages env var for 79 consecutive failed runs: a two-places-must-agree fact where the two places were a JS property access and a shell argument in YAML, with no type, import or test connecting them.
2. **The `VITE_`-prefixed Pages push was inert.** The browser bundle is built in `ci.yml` and shipped to Pages as **prebuilt static assets** — Cloudflare never rebuilds it — so nothing `VITE_`-prefixed on Pages can reach the client. The client half comes from the GitHub secret at BUILD time and only from there.

`ci.yml` now installs `SENTRY_DSN` (unprefixed) onto Pages on every deploy, **before `pages deploy`** — a Pages secret reaches Functions through a new deployment, not the running one. Same install contract as the cron secret and the service account: absent → `::warning` + exit 0; present-but-uninstallable → **fail**, deliberately not `continue-on-error`.

- **The client half is guarded SILENTLY and that needed saying out loud.** `main.tsx` skips `Sentry.init` and never imports the SDK when the DSN is empty — correct (no DSN, no 40KB bundle) and invisible, so an unset secret ships zero telemetry with nothing in the log. It now emits the same `::warning` the service account does.
- **A secret cannot be tested in a step-level `if`.** The `secrets` context is not among those available to `steps.<id>.if`. Such a condition does not fail loudly — it silently does not mean what it looks like. Bind through `env` and test in the shell, as both install steps already do; asserted so nobody adds one.
- **Shape-check before installing.** `forwardToSentry` does `new URL(dsn)` and derives the public key from the username and the project id from the path, inside `waitUntil` — so a malformed DSN fails *after* the response returned, where nobody sees it.
- **THE INPUT BEING SET IS NOT THE OUTPUT BEING SHIPPED (2026-09-04).** With the secret set, valid, and installed for the relay, a live browser still had `window.__nhSentry === undefined` and made **no request for the SDK chunk at all** — so the guard was falsy at runtime in whatever bundle was being served. Every layer either side was checkable from the repo (the secret from CI's log, the CSP from `_headers`, the init config from source); the one link in the middle — *did the DSN reach the artifact we uploaded* — could only be answered by opening DevTools on production. `ci.yml` now reads `dist/` after the build and fails if the DSN it was handed is not in there. Reproduced in both directions first: built WITH the DSN it is inlined and a `vendor-sentry` chunk is emitted; built with an EMPTY one, Rollup tree-shakes the block so **the chunk is not emitted at all** and no ingest host appears anywhere in `dist` — which is exactly the shape the live site showed. Absent → warning; **present-but-not-shipped → fail**, because that is a broken pipeline and shipping it restores the silent blackout.
  **The step is right; the diagnosis that prompted it was wrong, and both halves of that are worth keeping.** The browser was serving a STALE service-worker bundle — a hard reload produced a live SDK against a build CI had not changed, so the artifact had been carrying the DSN all along and this step has never yet fired in anger. It is still the check that was missing: before it, "did the DSN reach the artifact" was answerable only from DevTools on production, which is why a stale bundle and a broken build looked identical for hours. **A guard built on a wrong diagnosis can still be the right guard** — but do not let the fix's existence stand as evidence for the defect it was reasoned from. When production and CI disagree, establish WHICH ARTIFACT the browser is running (`/version.json` carries the build id) before concluding anything about the pipeline.
- Pinned by `sentryDsnInstall.test.js`, which DERIVES the expected name from `report-error.js` rather than restating it. Seventeen mutations verified, including reverting to the literal original bug — **and one of the new assertions was itself decorative on its first run**: written as a bare `/vendor-sentry/` text match it survived replacing the whole computation with `const hasSdkChunk = true`, because both words still appeared. Assert the DERIVATION, not the mention.
- NEVER: install the `VITE_`-prefixed name onto Pages (inert, and it invites the belief the client half is covered by the Pages env); install after `pages deploy`; let the sync workflow and `ci.yml` write this under different names.

## Cloudflare Pages Functions

### Environment variables (set in Cloudflare dashboard)

| Variable                                 | Purpose                                                                                                                                                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ANTHROPIC_API_KEY`                      | AI Tutor, story generation                                                                                                                                                                                                                                                |
| `AZURE_TTS_KEY` / `AZURE_TTS_REGION`     | Azure Speech resource — ONE key covers TTS, STT **and** pronunciation assessment. The dashboard is provisioned under these `TTS_*` names; `pronunciation-assess.js` also accepts `AZURE_SPEECH_KEY`/`AZURE_SPEECH_REGION` (which win if ever set) so either naming works. |
| `SENTRY_DSN`                             | Server-side error relay — `/api/report-error` forwards to Sentry only when this is set. **Installed by CI from the `VITE_SENTRY_DSN` GitHub secret** (see below); it is NOT `VITE_`-prefixed, and that distinction is the whole bug it was added to fix. |
| `FIREBASE_SERVICE_ACCOUNT_JSON`          | Server-side Firebase Admin SDK — weekly Firestore backup, `/api/delete-account` (fails CLOSED without it), `/api/backfill`, Google TTS fallback. **Installed by CI from the GitHub secret of the same name** (see below); do not hand-set it in the dashboard.             |
| `CRON_SECRET`                            | Auth token for scheduled worker → API calls                                                                                                                                                                                                                               |
| `VAPID_PUBLIC_KEY` / `VAPID_PRIVATE_KEY` | Web Push notifications                                                                                                                                                                                                                                                    |
| `RESEND_API_KEY`                         | Contact form emails                                                                                                                                                                                                                                                       |
| `DEEPGRAM_API_KEY`                       | Speech-to-text (speaking practice)                                                                                                                                                                                                                                        |
| `ADMIN_EMAIL`                            | Admin-only API access                                                                                                                                                                                                                                                     |

### KV namespace bindings (Cloudflare Pages → Settings → Functions)

| Variable             | Namespace ID                       | Purpose                                                                                                                                                                                                                             |
| -------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUSH_SUBSCRIPTIONS` | `4652e2388967424db09395a2be0aad81` | Push notification subscriber storage — ALSO the KV fallback for rate limits, quotas, the budget ledger, and content caches (TTS audio, daily-culture, news) when a dedicated binding is absent. `tts.js` prefers `env.KV` if bound. |

### D1 binding (Cloudflare Pages → Settings → Functions)

| Variable      | Purpose                                                                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AI_QUOTA_DB` | Primary store for the per-user daily AI quota (`_aiQuota.js`) **and** the global monthly budget ledger (`_aiBudget.js`, table `ai_month_spend` — self-migrates on first use). Falls back to `PUSH_SUBSCRIPTIONS` KV when unbound; fail-closed when neither answers. |

### Scheduled worker (wrangler.toml)

Separate Cloudflare Worker (`nasa-hrvatska-scheduler`) runs an **hourly** cron. It ALSO fires the **weekly Firestore backup** (Mondays 03–05 UTC window → `/api/backup-progress`, cron-secret auth): all `users`/`srs`/`profiles` docs snapshot to KV as restorable chunks, 90-day TTL ≈ 12 generations, once-per-week latch, no owner action ever (restore procedure documented in `backup-progress.js`). Its main job: sends each user's daily streak-reminder push at their chosen local hour (`reminderTime` + `timeZone` stored with the subscription via `/api/push-subscribe`; legacy subscriptions without a preference send at 13:00 UTC). Max one push per user per day via the `lastNotified` guard. **Deployed by CI on every push to master** (the "Deploy scheduled Worker" step in `ci.yml`, alongside the Pages deploy) — it used to require a manual `wrangler deploy`, which is how Worker-side fixes repeatedly shipped late. The API token must carry `Workers Scripts: Edit` for that step to succeed. Every run also writes a durable heartbeat to KV (`push:run:last` + `push:run:at:*`) — see "Push Delivery Observability" below; that write must stay unconditional.

---

## Code Conventions

- **File naming**: `PascalCase.jsx` for React components, `camelCase.js/ts` for utilities
- **No default exports from lib files** — use named exports
- **localStorage access**: use key constants from `src/lib/constants/storage.js` for new keys; legacy code uses raw strings
- **Date helpers**: always use `localDateStr()` and `weekKey()` from `src/lib/dateUtils.js` — never `new Date().toISOString()` for date comparisons
- **XP awards**: always through `dispatch({ type: 'AWARD_XP', ... })` or the `useAward` hook — never by mutating stats directly
- **Firebase calls**: all in `src/lib/firebase.js` — no Firestore imports in components
- **Error handling**: use `errorReporter.ts` for non-fatal errors; `ErrorBoundary` component catches render crashes
- **TypeScript**: new files in `src/lib/` and `src/hooks/` should be `.ts`/`.tsx`. Existing `.js` files are being migrated gradually — don't convert them unless that's the task.
- **Code style**: ESLint + lint-staged enforced on commit. Run `npm run lint:fix` before committing.

---

## Croatian Content Authoring (owner directive, 2026-07-16)

Claude has extensive Croatian-language training and authors Croatian content
(dialogue scenarios, exercises, prompts, grammar tips) as a domain expert.
Own the correctness — every authored line must meet native-standard Croatian:

- Standard štokavski; correct case government (incl. partitive genitive after
  quantities, `hvala na` + locative, `radovati se` + dative, `unatoč` + dative)
- Clitic ordering (second-position clusters: `htio bih se naručiti`)
- `sa` before s/š/z/ž, `s` otherwise; full diacritics (č ć đ š ž) everywhere
- Register-appropriate forms (V-form politeness in service/formal contexts;
  conditional softening `htio/htjela bih` for requests)
- Distractor options in exercises must be _plausibly wrong_ (register errors,
  case errors, word-order errors learners actually make) — never gibberish
- The greeting is `bog` (not `bok`) per the 2026-07 owner decision; the idiom
  `bok uz bok` (side by side) is the one deliberate exception

Do not gate content delivery on external review by default — write it right,
self-verify against the rules above, and ship it through the normal test
gates (structural validation lives in `src/tests/dialogueScenarios.test.ts`).
Flag a construction to the owner only when genuinely uncertain, not as a
blanket disclaimer.

---

## Testing

- **Unit tests**: `src/tests/` using Vitest + Testing Library. Run with `npm test`.
- **E2E tests**: `e2e/` using Playwright. Run with `npm run test:e2e` (requires build).
- **Key test files**:
  - `stats-hydration.test.js` — merge/sanitize logic
  - `gameLogic.test.js` — McGame, hearts, XP
  - `content-validation.test.js` — LEARN_PATH integrity checks
  - `clearUserScopedStorage.test.ts` — what a sign-out must wipe (cross-user leak guard)
- Firebase is **never mocked in integration tests** — the real Firestore rules are exercised by `npm run test:emulator` (the CI "Emulator Tests" job) and `firestore-rules.yml`. `verify:firestore` is NOT that: it reads a local `.env`, authenticates as a test user and inspects PRODUCTION documents, so it cannot run in CI and is a manual data-integrity probe. Documented here because it was described as the rules check in two places, which sends anyone looking for rule coverage to the wrong file.
- **Stochastic assertions (lesson from #490)**: never place a pass/fail floor at or near the distribution MEAN of a randomized behavior — it becomes a coin flip, and coverage instrumentation can shift the RNG stream enough to land the same suite on opposite sides in different CI jobs on the same commit. Measure the distribution, set the floor where only the regression you're guarding against can reach it (e.g. `useDailySession`'s C1 adaptive-serve floor is 2/30 against a ~27%-per-session probability: fails <1/1000 honestly, still catches the ranked-away-entirely ~0/30 regression), and document the math at the assertion. Prefer a deterministic pin when one actually pins the behavior under test — but verify it does before switching.

---

## MANDATORY: E2E Spec Audit Before Every Commit

**This rule exists because hours were wasted on CI failures caused by UI changes that were not reflected in E2E specs.**

Before committing ANY change that touches a component, tab, screen, or navigation element, you MUST:

1. **Identify every spec file in `e2e/` that references the modified area** — search by component name, tab name, button label, or screen text.
2. **Read each identified spec file in full.**
3. **Verify every `getByText`, `getByRole`, `getByPlaceholder`, and `expect` assertion still matches the current UI.**
4. **Update any stale assertions in the same commit as the UI change** — never in a separate follow-up commit.

### Spec-to-component mapping (always check these pairs):

| If you change...                         | Check these spec files                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| HomeTab / HeroSection / QuestTracker     | `home.spec.js`, `daily-challenge-sync.spec.js`, `profile-persist.spec.js`                  |
| LearnTab / LearnPathWidget / vocab pills | `learn.spec.js`, `lesson-complete.spec.js`, `navigation.spec.js`                           |
| PracticeTab / intent tiles / game panels | `practice.spec.js`, `offline.spec.js`                                                      |
| CultureTab / CroatiaTab                  | `croatia.spec.js`, `navigation.spec.js`                                                    |
| StatsTab / ProfileTab / Me               | `me-tab.spec.js`, `profile-persist.spec.js`                                                |
| TabBar / navigation labels               | `navigation.spec.js`, `daily-challenge-sync.spec.js`, `croatia.spec.js`, `offline.spec.js` |
| LoginScreen / auth flow                  | `auth.spec.js`, `accessibility.spec.js`                                                    |
| Any screen accessible from Practice tab  | `practice.spec.js`, `offline.spec.js`                                                      |

### Nav tab names (never get these wrong):

`Today` | `Learn` | `Practice` | `Culture` | `Me`

### The rule in plain English:

**You changed the UI. You own the tests. They ship together or not at all.**

---

## Git Workflow — Non-Negotiable

1. **Push immediately after every commit.** `git push origin master` is part of the commit action, not optional. Cloudflare Pages only deploys on push — a commit without a push is invisible to the user and does nothing.
2. **Never amend published commits.** Create a new commit instead.
3. **Never force-push to master.** Cloudflare deployment history can be corrupted.
4. **Never skip hooks** (`--no-verify`). Fix the underlying issue instead.

---

## CI/CD Pipeline Structure

```
quality (lint + typecheck)
    ↓
test (Vitest unit)   +   e2e (Playwright, 75-min job timeout, Chrome full + FF/WebKit smoke)
    ↓                         ↓
build-deploy (waits for quality + test + e2e)
```

- **Build-deploy WAITS for E2E** (owner decision, 2026-08-18 — deliberately reversed from the earlier race). A red Playwright run blocks the production deploy; the accepted cost is the E2E wall time (~15–35 min) added to every deploy. Never quietly remove `e2e` from build-deploy's `needs` to "speed up" a deploy.
- The e2e JOB timeout is 75 minutes (grown suite; the long-term fix is sharding). Per-test timeout 30s + 1 retry.
- **`ci.yml` has a `workflow_dispatch` trigger, and a dispatch on master DEPLOYS** (2026-08-26). Twice a master run has been created and never dispatched a job, and with only push/pull_request the sole way to free the `CI-refs/heads/master` concurrency group was to push another commit — faking a change to production to retry a deploy. The deploy steps were at first left gated on `event_name == 'push'`, so the lever's first real use produced a fully green run that shipped NOTHING and, via `cancel-in-progress`, cancelled the push run it replaced. The gate is now defined **once**, as build-deploy's `env.DEPLOY`, and every Cloudflare step reads it. **The ref check in it is load-bearing**: `push` only fires on master, but a dispatch can target ANY ref, so `event_name != 'pull_request'` would build a feature branch and publish it to production under `--branch=master`. Pinned by `ciDeployGate.test.js` (both mutations verified). NEVER: re-gate a deploy step on the event name alone; drop the ref check; add a Cloudflare step without `env.DEPLOY`.
- **Tests are a production gate. Never relax CI timeouts, skip tests, or weaken assertions to make CI green.**
- Deterministic E2E pins on the daily-session production slot live in `e2e/sp4b-production-slot.spec.js` — any PRODUCTION_POOL composition change breaks them BY DESIGN; update the pins with intent preserved (this bit the production-teaching wave, 2026-08-18).
- **Playwright install stalls are infrastructure, not the app** (2026-08-19): `playwright install --with-deps` runs `apt-get`, and a degraded Ubuntu mirror stalled it for SIX HOURS in production-smoke and 75 minutes in ci.yml — the latter skipped Build & Deploy and cost a deploy cycle. All three install steps now bound each attempt with bash `timeout 600` and retry once; between attempts they kill orphaned apt processes and clear `/var/lib/apt/lists/lock` + the dpkg locks, because `timeout` kills the npx wrapper and NOT the apt-get child, whose surviving lock made the first retry die instantly. Mirror slowness is PER-RUNNER (the same commit installed in 40s on a fresh runner while another burned two full attempts), so the response to a double failure is re-running the job, never loosening the bound. A job that hits a timeout reports **cancelled, not failed** — the smoke failure-alert issue deliberately stays quiet for that.

---

## Static Analysis: Standing CodeQL Dismissals (owner triage, 2026-08-19)

Alerts fixed in code that session: #70 (stack-trace exposure — `/api/backup-progress` no longer returns error `detail` in its 502 body; the detail still reaches the Cloudflare tail via `console.error`) and #69 (incomplete multi-character sanitization — `bootShell.test.ts` strips HTML comments to a fixed point).

**Seven "Clear text storage of sensitive information" alerts are scanner false positives and are dismissed as such** — #55 (`GradTab.tsx`), #56 (`HomeTab.tsx`), #58 + #66 (`useDailySession.ts`), #59 (`sessionSignal.ts`), #60 (`sessionCategory.ts`), #62 (`GrammarDiagnosisScreen.tsx`). Two heuristics misfire:

- Anything named `session` (`nh_session_started`, `nh_session_served`, `nh_recent_exercises`, `sessionCategory`, `sessionSignal`) is read as an **auth session token**. It is the daily LEARNING session — lesson plans, screen keys, recent-exercise ids. No credential, token, or secret is ever stored there.
- `nh_grammar_diagnosis` (#62) trips the **medical-data** heuristic on the word "diagnosis". It caches AI-generated grammar-weakness feedback.

Storing learner progress in localStorage is this app's documented architecture (localStorage is authoritative, Firestore syncs it) — there is nothing to encrypt, and the only "fix" would be renaming identifiers to dodge a scanner. Do NOT add inline `// codeql[...]` suppressions to production files for these: that pollutes seven source files to silence a heuristic the UI dismissal already records. Re-triage only if an alert's FILE or DATA changes — not because the alert reappears.

---

## This Is a Production App With Real Users

- Real users have real progress stored in localStorage and Firestore. Changes affect them immediately on deploy.
- Be conservative. Read the relevant components before modifying anything.
- Do not add features, refactor, or "improve" things beyond what was asked.
- **Never add fake/hardcoded data** — no fake learner counts ("14,800+ learners"), no fake leaderboard entries (fake names with fabricated XP), no hardcoded "active users today" numbers. All displayed data must be real.
- **Never add referral cards, links, or buttons to competing apps** — Duolingo, Babbel, iTalki, Preply, Lingopie, or any similar service. Implement features natively instead.

---

## Verification Standard

Before committing any change:

- Read the actual source files affected — never assume structure from memory.
- Verify the change is correct end-to-end. If it touches CI, check the pipeline.
- If uncertain about correctness, ask before committing — not after breaking CI.
- Do not use an apology as a substitute for the verification that should have happened upfront.

### MUTATION-TEST THE GUARD, OR YOU DO NOT KNOW IT GUARDS ANYTHING

**A passing test suite is not evidence that a guard works. Break the thing the
guard protects and watch it fail. If it stays green, the guard is decorative.**

This is not a general principle someone thought sounded good — it is the single
technique that found every systemic defect in the 2026-08-26→29 curriculum work,
and in every case the suite was fully green beforehand:

| The guard | What it looked like | What it actually covered |
| --------- | ------------------- | ------------------------ |
| `lintCroatianText.mjs` on `lessons.js` | A lesson file listed in TARGETS for months | `CRO_FIELD_RE` never matched a `rows` array. **Every table cell in every lesson was unscanned** — and a table is where a lesson keeps most of its vocabulary. Found by injecting `hleb` into a cell and watching the lint pass. |
| `curriculumCouplingResolves.test.ts` | Walks the REAL session builder; caught 10 dead mappings on its first run | It proved a mapping REACHES a drill, never that finishing the drill CLEARS it. **18 of 62 mappings never cleared.** Found by reverting the rekcija pool tag and seeing the suite stay green. |
| That same suite, after the clearing fix | Round-trips every mapping end to end | `MAPPED` filters on the spine, so the dedicated lesson SCREENS were outside every assertion in the file. One of them, `tenses`, was the 18th broken coupling. |
| The round-trip block itself | Records the lesson, finishes the drill, asserts cleared | It clears using the SCREEN the builder returned. `GenderDrillScreen` fires key `'gender'`, not `'genderdrill'` — so the real completion path was untested and worked only by a fallback nobody had asserted. |
| `a2Curriculum.test.ts` (the original) | Asserted every A2 coupling resolved | It checked a `SCREEN_FOR` map written **inside the test file**. It confirmed a `numerals` route that did not exist. |
| The whole coupling suite, after BOTH fixes | Resolution and clearing both round-tripped through the real builder | Every assertion calls `recordScreenPractised` itself. Nothing checked whether the SCREEN does. Three live routes — `writing_guided`, `relpron`, `idioms` — never called it, so the learner did the work and the queue never cleared. Found by walking the router and the import graph (`couplingClearingPath.test.ts`). |
| `couplingClearingPath.test.ts` itself | Walks the REAL router and the REAL import graph; caught three live dead ends on its first run | It matched `recordScreenPractised(` anywhere in the import graph — and `lib/teachPractice` DECLARES that function. **Any screen importing teachPractice for any reason passed without calling anything.** Found while wiring `alphabet`: deleting its call left the suite green; deleting the import as well turned it red, which isolated the cause. Declarations are now stripped before the call test. |
| `couplingClearingPath`'s exemption set | Carries a staleness test, so "an exemption cannot sit here quietly covering a screen that has since been fixed" | It checked whether the exempted screen GAINED a clearing path, never whether anything still ROUTED to it. Repointing `idioms` at the real drill left a moot exemption asserting a live dead end, suite fully green. Both staleness paths are checked now — plus a count, because `it.each` over an empty set registers no tests. |
| `AlphabetScreen`'s own component tests | Render the screen, play the quiz, assert on its behaviour | They pass `award` THEMSELVES, which is correct for a component test and says nothing about the wiring. AppRouter rendered `<AlphabetScreen goBack={goBack} />` with no `award`, so `if (typeof award === 'function')` was false and the 20 XP call was **dead for the life of the screen**. A dead branch behind a typeof check is indistinguishable from a deliberate optional dependency. Found by mutation: deleting the prop from AppRouter left the component test green. `routerAwardProp.test.ts` now walks the real router. |
| `lintCroatianText.mjs`, after TWO waves of expansion | 303 files in TARGETS, up from 157, every wave censused and mutation-checked | **The list had stopped being the constraint.** `CRO_FIELD_RE` matched `key: 'value'` and never `key="value"`, so the 109 ModeDrill wrappers were unreachable by construction — and `perfect`/`good`/`more`, the lines a learner reads on every completion, were in no field name it listed. Across all candidates the matcher saw **137 of 1,159** Croatian strings. A list cannot show you what it fails to match; only counting what it misses can. |
| That same lint, mid-fix | `objectives` added to the array pass for the curriculum spine's 55 unscanned strings | The FILE was never added to TARGETS, so the new pass had nothing to run on and a Cyrillic `а` in an objective passed clean. A matcher extension and its file are one change; either alone is silent. |
| The A1 guaranteed-grammar assertion (`useDailySession.test.ts`) | "an A1 user gets an A1 case/grammar drill, not a buried higher tier" — checked against a list of A1 grammar SCREENS | The list was hand-maintained and had been amended three separate times as the pool grew ("7a rotation expansion", "Wave 1 catchment", "Recommender audit") — the same staleness shape as the constant it was testing. Deriving `GRAMMAR_STRUCTURE_CATEGORIES` took A1's structural pool from 10 to 21, so the 12-name list covered barely half the candidates and the unseeded `rnd` tiebreak turned a passing assertion into a **coin flip**. It did not fail because the behaviour broke; it failed because it had been measuring a shrinking fraction of the right answer all along. Now derived from the pool's own `cefr`, and re-verified by disabling P2.7. |

The pattern is always the same, and it is worth naming because it is invisible
from the outside: **a guard that covers most of a thing reads exactly like a
guard that covers the thing.** Coverage percentages do not show it. A green run
does not show it. Only mutation does.

Practical rules that fall out of this:

- **Adding a file to a lint's TARGETS is not adding coverage.** Confirm the
  matcher actually matches that file's shape. A target whose fields never match
  is a file everybody believes is linted and is not.
- **Measure a guard's coverage as a RATIO, not as a list length.** "303 files"
  and "12% of the strings" were true of the same lint on the same day, and only
  the second number said anything about what was guarded. Count what the guard
  MISSES — a list can only ever show you what it already knows about.
- **Report what was OBSERVED, not the strongest claim consistent with it.** "No
  events since the deploy" became "the project had received nothing, ever" in a
  commit message and in this file, and that hardening made one real defect look
  like the whole cause — while the other half of the symptom turned out to be a
  stale service-worker bundle with nothing wrong behind it. The inflation is
  invisible as you write it and load-bearing when someone reasons from it later.
- **When production and CI disagree, identify WHICH ARTIFACT is running first.**
  `/version.json` carries the build id. Hours went into pipeline theories for a
  browser that was simply serving an older bundle, and every one of those
  theories was consistent with the evidence.
- **Check an exclusion's reason before you write it down, even when it is
  obviously true.** The rules file and the golden set were about to be exempted
  as "full of Serbian forms by design"; measured, both produce zero findings,
  because the forms live in regex literals and in `use:` fields holding the
  Croatian replacement. A plausible reason recorded beside an exemption is how
  the `idioms` dead end survived a staleness test.
- **Reachability and clearing are separate paths.** So are launching and
  completing, writing and reading, queueing and draining. A guard on one says
  nothing about the other.
- **A test that restates production data cannot check production data.** Go
  through the real function, the real builder, the real map.
- **A hand-maintained list in a test decays exactly like one in production**, and
  it decays quietly, because a stale allowlist keeps passing at whatever rate the
  list still covers. When the thing being listed can grow, derive the list.
- **Measure WHICH part is wrong before changing the part that looks wrong.** The
  session's remaining +1 looked like the grammar guarantee's doing; dumping the
  real composition showed that slot never fired on the affected days, and the
  extra activity was the adaptive pick. A fix aimed at the obvious culprit would
  have changed nothing and been reported as a fix.
- **A measurement can miss a branch the same way a test can.** The pre-ship run
  for that change used the REAL adaptive queue, which always returns grammar, so
  P2.7's branch never executed and "non-lesson sessions are unchanged" was
  measured without ever exercising the code that could change them. Drive the
  branch you are claiming is safe.
- **Coverage borrowed from a neighbouring test's mock leakage is not coverage.**
  `vi.clearAllMocks()` does not reset `mockReturnValue`, so a test can pass for
  reasons set three tests earlier — and the guard evaporates when someone tidies
  the leak. If a case matters, set its mocks in its own test.
- **Check what the code actually passes**, not what the variable is named. A
  completion key is not always a screen id.
- **A component test and a wiring test are different tests.** A test that
  renders a screen and supplies its props proves the screen works when wired;
  only walking the router proves it IS wired. `award` was the case — see the
  table above — and the same split explains why `couplingClearingPath` had to
  exist beside the round-trip suite.
- **When you fix a guard, mutate again.** Three of these were found in guards
  written to catch the previous one — including the import-graph walk, which was
  itself written to catch the round-trip suite's blind spot.
- **Mutate the guard when you ADD to what it covers, not only when you write
  it.** The `alphabet` hole had been there since the guard shipped; it surfaced
  only because wiring one more screen prompted a mutation of a suite that was
  already green and already trusted.

Record the mutation you ran in the commit message. "Mutation-verified: reverting
X fails N tests" is a claim a reader can re-run; "added a test" is not.

---

## NEVER DO (hard rules from production incidents)

1. **Never recommend clearing localStorage or unregistering the service worker** as a fix. This destroys user progress. The only safe SW fix is DevTools → Application → Service Workers → Unregister (manual user action).
2. **Never commit secrets** to the repo. All keys live in Cloudflare dashboard env vars.
3. **Never change how CEFR is typed on the wire without checking BOTH fields.** They differ, and asserting a single rule here has been wrong twice: `nh_level` (inside the progress blob) is the string `"B1"`; the top-level `level` on `users/{id}` is the integer 1–6 produced by `_CEFR_NUM` and merged with `Math.max`. Putting a string in `level` breaks that merge; putting an integer in `nh_level` breaks `cefrRank` / `isUnlocked` / `CEFR_TO_STAGE_IDX`. `firestore.rules` polices neither, so both failures are silent. See "CEFR on the wire" above.
4. **Never reduce a stat** during a remote merge. Merges are always additive (`Math.max`, union).
5. **Never bypass the `_syncReady` gate** in useSyncManager — it prevents saves before auth + remote load completes, which would overwrite remote progress with stale local data.
6. **Never add a screen to LEARN_PATH without also adding it to BLACK_HOLE_SCREENS** (if it's an informational screen without a built-in quiz).
7. **Never call `fbSaveProgress` directly from a component** — always use the sync manager's `doSyncNow()` or the auto-save effect.
8. **Never force-push to master** — Cloudflare deploys are triggered by push; force-pushing can corrupt the deployment history.
9. **Never recommend clearing localStorage, clearing site data, or any DevTools action that touches localStorage.** This destroys user progress. The ONLY safe SW troubleshooting step is: DevTools → Application → Service Workers → Unregister → Reload.
10. **Never write data to Firestore on behalf of a user without their explicit instruction and a verified data source.** Fabricating or estimating user data and writing it to production is unauthorized.
11. **Never regress these sync architecture guarantees** (established in the 2026-03-18 sync audit; this list is the canonical record of its conclusions):
    - The `!syncReady` hero gate — never add `lc===0 || xp===0` conditions back
    - The persistence fallback chain in `initFirebase()` — never revert to `.catch(()=>{})` on `browserLocalPersistence`
    - The immediate `fetchIfNewer()` call on polling mount — never remove it
    - The `_unloadRef.current` fields (favs, jWords) — never strip from unload ref
12. **The sw-migration.js cache prefix must remain a prefix match** (`nasa-hrvatska-v.`), never a hardcoded version number. Hardcoding caused ALL caches to wipe on every deploy.
13. **Never let a recommendation state something the app did not measure** (2026-08-20 audit). The adaptive store seeds `recentAccuracy` at 0.5 and the mastery ledger returns null on no evidence — surfacing either as a claimed result invents a number the learner never produced, and one caught lie makes every other number in the app suspect. A slot with no honest signal says nothing.
14. **Never credit a daily-session activity the learner could not do.** When an AI activity fails, offer the authored equivalent and let finishing THAT credit the slot. Crediting on failure was the old anti-strand fix; it bought safety with a lie. The strand guarantee is preserved by the substitute being authored content that cannot fail — so never point a fallback at another AI-dependent screen, and never add a fallback to a screen without removing its credit-on-failure.
15. **Firestore sync runs on a periodic interval** for signed-in users (not just on tab close). Never revert this to beforeunload-only. The interval is **5 minutes** (`useSyncManager.ts`) — it was widened from 2 minutes deliberately, because periodic pushes plus `fbApplyDelta` bursts outpaced the Firestore WriteStream drain and produced "queued writes" / "maximum backoff delay" warnings. localStorage is authoritative, so a cross-device freshness gap of up to 5 minutes is acceptable; do not narrow it back without re-checking that backpressure.
16. **Never make the scheduled worker's heartbeat write conditional** (`writePushRun` in `functions/scheduled.js`, 2026-08-22). It runs on every hourly tick _including_ runs where nobody was due, because an absent record is the ONLY positive evidence that the cron is not firing — guard it on `sent > 0` and a quiet night becomes indistinguishable from a dead cron, which is precisely the failure it exists to catch. Same rule for the `haltedReason` record on missing config: a silent early return makes "misconfigured" look like "dead". Keep the write ahead of the weekly-backup block, and keep run COUNTS out of `/api/health` — they are a usage proxy on an origin-gated endpoint.
17. **Never put a Serbian form in front of a learner, including as a distractor** (owner directive, 2026-08-26). A wrong answer is rendered on screen as a clickable option; the learner meets it whether or not they pick it, so "no Serbian variants reach a user" covers distractors too. `scripts/lintCroatianText.mjs` enforces this on every string a learner can read as Croatian — only the English fields are exempt — and it caught exactly this in freshly authored content the day the rule landed. Make distractors wrong some other way: case government, aspect, register, word order. And a distractor must be genuinely WRONG, not merely marked — an option that flags real Croatian as incorrect teaches learners to distrust their own ear.

---

## Deployment Checklist

```bash
# 1. Run tests before pushing
npm test && npm run typecheck && npm run lint

# 2. Commit with a descriptive message
git add <specific files>
git commit -m "Description of change"

# 3. Push — this triggers Cloudflare Pages auto-deploy
git push origin master

# 4. Verify deploy in ~2 minutes at https://nasahrvatska.com
```

---

## Key Third-Party Integrations

| Service                  | Purpose                         | Auth method                     |
| ------------------------ | ------------------------------- | ------------------------------- |
| Firebase Auth            | User accounts                   | Email/password + Google OAuth   |
| Firestore                | User progress sync              | Security rules (UID-based)      |
| Cloudflare Pages         | Hosting + serverless functions  | Git integration                 |
| Cloudflare KV            | Push subscription storage       | KV namespace binding            |
| Anthropic API            | AI Tutor, stories, explanations | API key (server-side only)      |
| Azure Cognitive Services | Croatian TTS                    | Key + region (server-side only) |
| Sentry                   | Error tracking                  | `VITE_SENTRY_DSN`               |
| PostHog                  | Product analytics               | `VITE_POSTHOG_KEY`              |
| Resend                   | Transactional email             | `RESEND_API_KEY`                |
| Deepgram                 | Speech-to-text                  | `DEEPGRAM_API_KEY`              |

---

## Anthropic Skills Reference

Skills are specialized instruction sets that define how to handle specific task types. When a task matches a skill's domain, apply its rules exactly — they override generic defaults.

---

### skill-creator

**Trigger:** User asks you to create or design a new skill / SKILL.md file.

**Rules:**

- Every skill has YAML frontmatter (`name`, `description`) followed by a markdown body
- Body must define: trigger conditions, workflow steps, output format, critical constraints
- Test the skill by mentally executing it against 3 realistic user prompts before finalizing
- Skills are platform-aware — note if behavior differs between Claude.ai, API, and Claude Code

---

### frontend-design

**Trigger:** User asks to build web components, pages, artifacts, posters, or applications — websites, landing pages, dashboards, React components, HTML/CSS layouts, or any styling/beautifying of web UI.

**Before coding — commit to a BOLD aesthetic direction:**

- **Purpose:** What problem does this interface solve? Who uses it?
- **Tone:** Pick an extreme — brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Differentiation:** What makes this UNFORGETTABLE? What's the one thing someone will remember?

**Typography:**

- Choose fonts that are beautiful, unique, and interesting — avoid Arial, Inter, Roboto, system fonts
- Pair a distinctive display font with a refined body font
- Unexpected, characterful font choices only

**Color & Theme:**

- Commit to a cohesive aesthetic via CSS variables
- Dominant colors with sharp accents outperform timid, evenly-distributed palettes

**Motion:**

- CSS-only animations for HTML; Motion library for React when available
- One well-orchestrated page load with staggered reveals (`animation-delay`) > scattered micro-interactions
- Scroll-triggering and hover states that surprise

**Spatial Composition:**

- Unexpected layouts — asymmetry, overlap, diagonal flow, grid-breaking elements
- Generous negative space OR controlled density — not generic centered stacks

**Backgrounds & Atmosphere:**

- Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays — choose what fits the aesthetic

**NEVER:**

- Inter, Roboto, Arial, or system fonts as the primary typeface
- Purple gradients on white backgrounds
- Predictable centered layouts, uniform rounded corners
- Cookie-cutter card grids that lack context-specific character
- Never converge on common choices (Space Grotesk, etc.) — no design should look like another

**Match code complexity to the vision:** Maximalist needs elaborate animations; minimalist needs restraint and precision in spacing/typography. Execute the vision well.

**Applied to this project:** The app uses its own design system (CSS classes like `exercise-card`, `vocab-pill`, `fc-card`, `ob`, `b bp`). Match existing conventions; don't introduce Tailwind or shadcn unless explicitly asked.

---

### webapp-testing

**Trigger:** Writing or debugging Playwright E2E tests, or any automated browser testing task.

**Rules:**

- Decision tree: static HTML → inspect directly; dynamic app → start dev server first
- Always use `page.waitForLoadState('networkidle')` or explicit role/text waits before assertions — never fixed `waitForTimeout` except as last resort
- Selector priority: `getByRole` (accessibility) → `getByText` → CSS class → ID
- `getByRole('button', { name: 'X', exact: true })` requires the accessible name to be EXACTLY "X" — if the button has emoji or extra text in its label, use `exact: false` (default) or regex
- Close/restore browser context between tests; never share state across test boundaries
- Screenshot on failure for debugging; use `--headed` mode when selector hunting

**Applied to this project:** See the MANDATORY E2E Spec Audit section above. This project's E2E suite is at `e2e/` using Playwright with `@playwright/test`. Fixtures are in `e2e/fixtures/seed-auth.js`.

---

### claude-api

**Trigger:** Building or modifying any feature that calls the Anthropic API (AI Tutor, story generation, explanations in `functions/api/`).

**Rules:**

- **Default model:** `claude-opus-4-6` (most capable; use this unless cost is a hard constraint)
- **Thinking:** Use `{type: "adaptive"}` for complex reasoning tasks
- **Streaming:** Default for any response >500 tokens or latency-sensitive UX
- **Never** set `budget_tokens` on Opus 4.6 or Sonnet 4.6 — it's not supported
- Detect language from project files (this project uses JavaScript/TypeScript)
- Surface decision: single call → workflow → agent (escalate only when simpler won't work)

**Applied to this project:** API calls live in `functions/api/ai-chat.js` (AI Tutor) and related endpoints. API key is `ANTHROPIC_API_KEY` in Cloudflare env vars — never in source code.

---

### android-webview

**Trigger:** Any audio, animation, or blob URL feature in the Capacitor iOS/Android build.

**Critical gotchas (silent failures if missed):**

1. **HTMLAudio vs AudioContext** — Android WebView has SEPARATE sticky activation for each. Unlocking one does NOT unlock the other. Always use `AudioContext` for TTS and sound effects; `HTMLAudioElement` for background music. Unlock each independently on first user gesture.

2. **Volume gating** — volume below ~0.5 may be treated as "muted" by some Android WebViews and block autoplay activation. Set initial volume to 0.7+ before calling `play()`.

3. **User activation + async chains** — `play()` called after `fetch()` + `FileReader` async chain loses user activation on strict Android WebViews. Solution: unlock AudioContext on the gesture itself (synchronously), then do async work.

4. **Capacitor detection** — `window.Capacitor` bridge injection is async and unreliable at module level. Use `androidScheme: 'https'` in capacitor.config → app runs at `https://localhost` (no port). That URL is the only synchronous reliable detection method.

5. **Framer Motion** — `initial={{ opacity: 0 }}` stalls permanently on some Android WebViews if the animation engine fails. CSS `opacity: 1` in `style` prop is overridden by Framer's initial state. Fix: add `layout` prop or use `animate` with `initial={false}`.

6. **Blob URLs** — `URL.createObjectURL()` fails silently on certain Android OEM WebView builds. Always use base64 `data:` URLs instead for TTS audio buffers.

7. **Keyboard overlap** — `windowSoftInputMode` is not set by Capacitor by default. Add to `AndroidManifest.xml`: `android:windowSoftInputMode="adjustResize"` to prevent keyboard overlapping WebView content.
