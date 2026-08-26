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

Coverage is 41 files; **component-embedded Croatian (~134 files) is deliberately still out**, because those mix Croatian examples with English UI copy and sweeping them in wholesale is how a lint earns the false-positive reputation that gets it ignored. Real bugs do live there (`šerati` in `DiasporaNote.tsx`, fixed 2026-08-26), so this is unfinished, not settled.

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

## Cloudflare Pages Functions

### Environment variables (set in Cloudflare dashboard)

| Variable                                 | Purpose                                                                                                                                                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ANTHROPIC_API_KEY`                      | AI Tutor, story generation                                                                                                                                                                                                                                                |
| `AZURE_TTS_KEY` / `AZURE_TTS_REGION`     | Azure Speech resource — ONE key covers TTS, STT **and** pronunciation assessment. The dashboard is provisioned under these `TTS_*` names; `pronunciation-assess.js` also accepts `AZURE_SPEECH_KEY`/`AZURE_SPEECH_REGION` (which win if ever set) so either naming works. |
| `FIREBASE_SERVICE_ACCOUNT_JSON`          | Server-side Firebase Admin SDK                                                                                                                                                                                                                                            |
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
