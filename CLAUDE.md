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
npm run verify:firestore # Verify Firestore security rules
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
- **Provisional passes**: grandfathered (migration-granted) passes carry `provisional: true` and are also detectable by the 0.8-signature (`isGrandfatherPassSignature`). They keep content access but do not count toward `getVerifiedLevel()`. While any provisional level sits above the verified level, `getVerificationGate().required` is true: `getContentUnlockLevel` caps NEW content one level below the gate target, Home shows `VerificationGateCard` (no snooze, no dismiss), and the only way forward is a real pass. Practice below the gate stays open by design.
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
7. **Client behavior**: `classifyAiLimit` (src/lib/aiLimit.ts) distinguishes `burst`/`daily`/`budget`; every AI surface renders the budget pause as a calm message (`BUDGET_PAUSE_EN`/`_HR`), never a retryable error. TTS budget-refusal is a 503 → the client falls back to on-device speech synthesis.

### NEVER DO (AI cost)

- Never raise a `max_tokens` without its `ENDPOINT_CEILING_MICROUSD` entry (the build fails, correctly).
- Never mark an endpoint ceiling-0 unless it self-charges `checkAndChargeBudget(env, '<path>:generate')` on its spend path (tested).
- Never charge the gate per-request for a cache-served endpoint — that burns the ledger on free hits.
- Never bypass `requireAuthedAI` for a new USER-FACING AI endpoint; it is the budget's only choke point for user traffic. The one sanctioned exception is `/api/golden-calibration` (dispatch-only, gated on CRON_SECRET or the self-provisioned CALIBRATION_SECRET): no user can reach it, and it pre-charges its ENTIRE run's ceiling via `checkAndChargeBudget` before the first Claude call, so the budget guarantee holds without the user gate.

### Evaluator trust & audit trail (2026-08-16)

- **Golden-set calibration**: `functions/api/_goldenSet.js` holds pre-scored Croatian samples; `/api/golden-calibration` (dispatched via the `calibration.yml` workflow) runs them through the SAME rubric prompts production uses (`functions/api/_evalPrompts.js`, imported by `correct.js` + `assess-speaking.js` — never fork those prompts back inline) and reports band misses; 2+ misses = drift, the workflow fails. A sample whose evaluation ERRORS (e.g. a transient JSON-parse hiccup) is a warning, not a miss — only genuine out-of-band scores count toward the drift gate. `goldenCalibration.test.js` pins set structure, auth, budget pre-charge, and prompt sharing.
- **Self-provisioning calibration auth (zero owner action)**: `calibration.yml` derives its token as HMAC-SHA256 of the public label `nh-calibration-v1` keyed by the CI-held `CLOUDFLARE_API_TOKEN`, and on 401/503 provisions `CALIBRATION_SECRET` into the Pages project itself (wrangler `pages secret put` + API redeploy + poll). `golden-calibration.js` accepts CRON_SECRET **or** CALIBRATION_SECRET (timing-safe both; 503 `calibration_secret_missing` when neither). Nobody ever pastes a secret. `.gitleaks.toml` allowlists the `nh-calibration-v1` label. A run costs ~$0.19 and takes ~30s.
- **Calibration record**: 2026-08-17 — four runs, all stable. The error-dense B1 essay (`w-b1-broken`) scored EXACTLY 62 on three independent runs; band ceiling widened 60 → 65 by owner decision (a stable grader read, not drift). Final post-band run: **10/10 within band**. Re-run on owner request any time via the workflow dispatch.
- **Attempt evidence**: `src/lib/attemptEvidence.ts` (`nh_cefr_attempt_evidence`) stores what each Level Check production score was based on (heard transcript / essay + evaluator feedback), joined to attempts by `takenAt`. **Deliberately local-only** — never add it to `buildProgressSnapshot` (tested); the synced blob carries results, not evidence.
- **Transcript review**: exam `SpeakingTaskScreen` shows "here's what I heard" and holds the score until the learner confirms; ONE re-record per task (fix a mishearing, don't farm the grader). E2E flows must click `speak-confirm` after recording.

## Critical Architecture: Croatian Script Guard (owner directive, 2026-08-17)

No Cyrillic and no Serbian variants may reach a user, ever. Three layers (pinned by `croatianGuard.test.js`):

1. **Middleware chokepoint**: `functions/_middleware.js` pipes every TEXTUAL `/api` response body through `latinizeResponseBody` (`functions/api/_croatianGuard.js`) — azbuka→gajica transliteration, streaming-safe, binary untouched. No endpoint, present or future, can leak Cyrillic. Never remove this call.
2. **Prompt rule**: the 7 Croatian-generating endpoints (ai-chat, maja, conversation, conversational-tutor, dialogue, listening, micro-lesson) append `CROATIAN_SCRIPT_RULE` to their system prompts — the only layer that prevents Serbian LEXICON/ekavica, which transliteration cannot fix. New Croatian-generating endpoints must adopt it (tested by source pin).
3. **Static lint**: `scripts/lintCroatianText.mjs` adds a high-precision Serbism blocklist over the content files. JS `\b` is ASCII-only and mis-fires around č/ć/đ/š/ž — the rules use Unicode lookarounds. Morphology matters: oblique forms of `vrijeme` are `vremena/vremenu` IN STANDARD CROATIAN; only bare ekavica forms are flagged. Extend the list conservatively — false alarms train people to ignore the lint.

## Critical Architecture: Speech Endpointing (owner directive, 2026-08-08)

Users were being cut off mid-speech. The rules that prevent regression (pinned by `speechEndpointing.test.js`):

- **Maja (Web Speech)**: silence windows ≥1500/2600 ms (`MajaScreenUtils.js`); the silence-timer path must call `rec.stop()` (flushes un-finalized words) — **never `abort()`**, which discards them. A 1.2s backstop covers WebViews that never fire `onend`.
- **VAD hook (`useWhisperSTT.js`)**: endpoint ≥2500 ms; exit threshold must sit well below the entry threshold (hysteresis — soft trailing speech is not silence); **no 'processing' state** — utterance-end returns to `waiting` immediately and transcription runs concurrently (per-recorder chunks, ordered delivery); capture starts at the FIRST threshold crossing (no front-clip); 60s max-utterance backstop.
- Recording caps are backstops, not endpoints: Shadowing 15s, exam tasks show "up to Xs". Never reintroduce a "no speech detected" timer that stays armed while speech is active.

## Cloudflare Pages Functions

### Environment variables (set in Cloudflare dashboard)

| Variable                                 | Purpose                                     |
| ---------------------------------------- | ------------------------------------------- |
| `ANTHROPIC_API_KEY`                      | AI Tutor, story generation                  |
| `AZURE_TTS_KEY` / `AZURE_TTS_REGION`     | Azure Speech resource — ONE key covers TTS, STT **and** pronunciation assessment. The dashboard is provisioned under these `TTS_*` names; `pronunciation-assess.js` also accepts `AZURE_SPEECH_KEY`/`AZURE_SPEECH_REGION` (which win if ever set) so either naming works. |
| `FIREBASE_SERVICE_ACCOUNT_JSON`          | Server-side Firebase Admin SDK              |
| `CRON_SECRET`                            | Auth token for scheduled worker → API calls |
| `VAPID_PUBLIC_KEY` / `VAPID_PRIVATE_KEY` | Web Push notifications                      |
| `RESEND_API_KEY`                         | Contact form emails                         |
| `DEEPGRAM_API_KEY`                       | Speech-to-text (speaking practice)          |
| `ADMIN_EMAIL`                            | Admin-only API access                       |

### KV namespace bindings (Cloudflare Pages → Settings → Functions)

| Variable             | Namespace ID                       | Purpose                              |
| -------------------- | ---------------------------------- | ------------------------------------ |
| `PUSH_SUBSCRIPTIONS` | `4652e2388967424db09395a2be0aad81` | Push notification subscriber storage — ALSO the KV fallback for rate limits, quotas, the budget ledger, and content caches (TTS audio, daily-culture, news) when a dedicated binding is absent. `tts.js` prefers `env.KV` if bound. |

### D1 binding (Cloudflare Pages → Settings → Functions)

| Variable      | Purpose                                                                                                                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AI_QUOTA_DB` | Primary store for the per-user daily AI quota (`_aiQuota.js`) **and** the global monthly budget ledger (`_aiBudget.js`, table `ai_month_spend` — self-migrates on first use). Falls back to `PUSH_SUBSCRIPTIONS` KV when unbound; fail-closed when neither answers. |

### Scheduled worker (wrangler.toml)

Separate Cloudflare Worker (`nasa-hrvatska-scheduler`) runs an **hourly** cron. It ALSO fires the **weekly Firestore backup** (Mondays 03–05 UTC window → `/api/backup-progress`, cron-secret auth): all `users`/`srs`/`profiles` docs snapshot to KV as restorable chunks, 90-day TTL ≈ 12 generations, once-per-week latch, no owner action ever (restore procedure documented in `backup-progress.js`). Its main job: sends each user's daily streak-reminder push at their chosen local hour (`reminderTime` + `timeZone` stored with the subscription via `/api/push-subscribe`; legacy subscriptions without a preference send at 13:00 UTC). Max one push per user per day via the `lastNotified` guard. **Deployed by CI on every push to master** (the "Deploy scheduled Worker" step in `ci.yml`, alongside the Pages deploy) — it used to require a manual `wrangler deploy`, which is how Worker-side fixes repeatedly shipped late. The API token must carry `Workers Scripts: Edit` for that step to succeed.

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
- Firebase is **never mocked in integration tests** — real Firestore rules are tested via `verify:firestore`.
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
test (Vitest unit)   ←→   e2e (Playwright, 15-min timeout, 2 workers, 1 retry)
    ↓                         ↓
build-deploy (waits for quality + test, NOT e2e)
```

- Build-deploy does NOT wait for E2E. A green deploy does not mean E2E passed.
- E2E timeout is 15 minutes total. Each test has a 30s timeout + 1 retry = 60s max per test. 15 stale/hanging tests fills the budget exactly.
- **Tests are a production gate. Never relax CI timeouts, skip tests, or weaken assertions to make CI green.**

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
13. **Firestore sync runs on a periodic interval** for signed-in users (not just on tab close). Never revert this to beforeunload-only. The interval is **5 minutes** (`useSyncManager.ts`) — it was widened from 2 minutes deliberately, because periodic pushes plus `fbApplyDelta` bursts outpaced the Firestore WriteStream drain and produced "queued writes" / "maximum backoff delay" warnings. localStorage is authoritative, so a cross-device freshness gap of up to 5 minutes is acceptable; do not narrow it back without re-checking that backpressure.

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
