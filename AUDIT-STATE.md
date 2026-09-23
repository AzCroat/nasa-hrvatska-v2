# AUDIT-STATE.md — the running defect hunt

**READ THIS AT THE START OF EVERY SESSION, AND EVERY 20 MINUTES DURING ONE.**
It exists because findings that live in a conversation die with it. This file
is the only durable record of what has been checked, what it found, and — the
part that actually matters — **what has not been checked yet.**

Owner directive, 2026-09-22: _"There are no new sessions. All work must be
linked to any prior work. You can never lose anything."_ The mechanism for that
is this file plus CLAUDE.md, both committed. Nothing is "remembered"; it is
written down or it does not exist. Never cite a session boundary as a reason
anything was lost — append here instead, before the work is done, not after.

## Rules for editing this file

- **Append, never rewrite.** A sweep that found nothing is a result worth
  keeping; deleting it invites someone to re-run it.
- **Record FALSE POSITIVES by name.** Half the cost of this hunt so far has
  been re-deriving that a thing is fine. A false positive recorded once is
  never chased twice.
- **State what a sweep CANNOT see.** Every guard here covers a class, and the
  uncovered classes are where the next field report comes from.
- **No claim without evidence.** Command run, count, and outcome — so a reader
  can re-run it rather than trust it.

---

## Sweeps completed

### 1. Router prop wiring — 2026-09-22 — NO DEFECTS

`/tmp` script walked `AppRouter.tsx`, resolved each lazy/static import to its
file, extracted the **default export's** destructured props, and diffed against
what the router actually passes.

- **382 components** rendered by the router.
- Findings: **1**, and it is dead code, not a defect — `LevelQuiz.onPass`
  (`src/components/learn/LevelQuiz.tsx:97`, `if (passed && onPass) onPass()`).
  LevelQuiz is rendered in exactly one place and `onPass` is never passed, so
  the branch has been dead for the life of the screen. **It costs nothing**:
  the pass is recorded by the surrounding block (`levelQuizPasses[levelNumber]`,
  XP, `markQuest`, `writeDelta`), and the "Level N+1 unlocked!" message is
  honest — `LearnPath.tsx:392` gates on `score >= 7` and the quiz passes at
  70% = 7/10.
- Ruled out as intended, do not re-chase: `ReviewScreen.allCats` (documented
  test-fixture override), `RetentionCheckScreen.lessons` (absent = fetch it
  yourself), `EquivalencyTestScreen.overrideLevel` (optional override),
  `PracticalCroatianScreen.stats` (`void stats;`, explicitly discarded).

**TOOL BUGS FOUND WHILE DOING THIS — both produced confident false findings:**

1. Matching a JSX element with `<Name(\s[^>]*?)?>` **truncates at the first
   `>`**, and `setTab={(id: string) => {…}}` contains one. That reported all 12
   of `HomeTab`'s props as unpassed when every one is passed. Scan with real
   brace/quote depth tracking instead.
2. Taking "the first function signature in the file" grabs an inner helper
   (`function Bar({ label, value, max, color, icon })`), not the default export.
   That produced 54 findings of which 42 were inner components.

### 2. Crash-on-open — 2026-09-22 — ALREADY COVERED, GREEN

`routeRenderSweep.test.tsx` + `contentShapeSweep.test.tsx`: **2 files, 8 tests,
passing.** Renders every route through the REAL router, cold and with the live
`/api/content/core` payload, asserting `ScreenErrorBoundary` never engages.
This is the `ScenesScreen` class (threw on every open for three weeks behind a
boundary, Sentry 0d68c47c) and it is closed.
**What it cannot see, in its own words:** _"a screen that renders fine and is
WRONG. The audio bug never threw — it returned a 400."_

### 3. Unreachable library code — 2026-09-22 — NO DEFECTS

Every `export` from `src/lib/**` and `src/hooks/**` checked for a non-test
consumer. This is the speaking-coach class (correct, tested, reachable by
nobody, dead for months).

- Real: `fbLoadSRS` (`src/lib/firebase.ts:656`) is dead — SRS **loading** is
  inlined at `firebase.ts:618`. Harmless duplicate.
- **FALSE POSITIVE — DO NOT RE-CHASE #1:** `src/lib/pushNotifications.ts` looks
  entirely unreferenced. It is reached by **dynamic** `import()` from `App.tsx:1267`,
  `useNotifications.ts:76,130`, `NotificationsSection.tsx:64,262` and
  `firebase.ts:727`. Static import scans cannot see it.
- **FALSE POSITIVE — DO NOT RE-CHASE #2:** `fbSaveSRS` looks uncalled, which
  would mean SRS progress never syncs. **It is called**, at `firebase.ts:341`,
  inside `fbSaveProgress` in the same file. A `grep -v firebase.ts` used to
  drop the definition also dropped the call site. SRS sync works.

---

### 4. AI endpoints, end to end — 2026-09-22 — **3 REAL DEFECTS, FIXED**

Enumerated from `ENDPOINT_CEILING_MICROUSD` (the canonical list) by IMPORTING
the module, not re-parsing it. **30 endpoints**, every one with a handler file.

**THE DEFECT: a learner was shown the server's machine code.** The gate refuses
with `fail(status, code)` whose body is `{ error: '<code>' }`.
`MicroLessonScreen` threw that string and rendered it verbatim:

    throw new Error(body.error || `Server error ${res.status}`)
    setErrorMsg((e as Error).message || 'Could not generate lesson…')

The fallback never fired, because `body.error` is always present. A learner who
hit the daily quota — or was simply signed out — read `monthly_budget_exhausted`
or `unauthenticated` under "Something went wrong", above an unconditional
**"Try Again"** that could not work until the cap reset. Two siblings, same
class, milder: `DailyListeningCard` (Home) told every cause "Try again", and
`DialogueSim` blamed the tutor ("Could not reach Maja") for a billing cap. None
of the three reported to Sentry, so none would ever have named itself.

All three now classify through `lib/aiFailure` (`failureFromResponse` /
`failureFromError` -> one honest sentence + `retryable`), report to Sentry, and
MicroLessonScreen only offers a retry that can actually succeed.

**Why the 2026-09-07 feedback census missed it**: that census scoped itself to
surfaces promising feedback on WRITING or SPEECH and traced those end to end. A
micro-lesson is neither. The rule it broke is in CLAUDE.md twice — "NEVER show a
learner a raw status" and layer 10's "EVERY AI surface renders the budget pause
as a calm message, never a retryable error."

Pinned by `aiRefusalMessages.test.tsx` (10), driving the REAL screen against the
gate's real refusal shape. Mutation-verified, four, each confirmed landed:
the original bug restored -> 5 fail; the retry made unconditional -> 1;
DailyListeningCard reverted -> 1; DialogueSim reverted -> 1.

**Orphaned, recorded, not urgent:** `/api/daily-culture`, `/api/daily-plan` and
`/api/adaptive-insights` have handlers, budget ceilings and prompt
instrumentation but NO caller anywhere. #682 deleted the client modules for the
latter two as unreachable and left the endpoints behind. Nothing calls them, so
nothing can fail for a learner. (`golden-calibration` and `stt-calibration` also
have no client caller — correct, they are dispatch-only from workflows.)

**FALSE POSITIVE — DO NOT RE-CHASE #3:** `croatiaPool.ts` and `sessionPools.ts`
appear to call `/api/news` and `/api/micro-lesson`. They are COMMENTS naming the
route beside a pool entry. **#4:** the four `explain-error` drills
(ClozeEngine, McGame, ReviewScreen, DictationScreen) have no classifier by
DESIGN — fail-soft, the authored tip stays on screen.

**TOOL BUG #3:** a string regex `["']([^"']{10,90})["']` silently drops every
message containing an apostrophe — including "Could not load today's listening
exercise", the finding it was written to catch. **#4:** `getByText(/Try Again/i)`
matched both the button AND the sentence "…Try again in a moment", a strict-mode
violation that failed a CORRECT fix. Query by ROLE.

### 5. Numbers displayed vs numbers measured (NEVER-DO 13) — 2026-09-22 — CLEAN

Traced every figure a learner reads back to the thing that produced it. **No
defects.** Recorded so nobody re-runs it:

- `getCategoryStatus` (adaptive.ts:736) correctly returns `accuracy: null` while
  `lastSeen === 0`. The 0.5 EWMA seed is never surfaced as a result — and **no
  component reads the store directly**, so the guard cannot be bypassed.
- `readinessForVerification` buckets strong / developing / **untested** and
  requires `n >= MIN_SAMPLES` before claiming either of the first two.
- `WeakWordsPanel` computes `errorRate = w / (r + w)` over cards with >= 2 real
  reviews.
- **The CEFR badge holds.** All six display surfaces — DesktopPanel,
  heroHelpers, StatsTab, CertificateScreen, InsightsTab, LearnTab — resolve
  through `getDisplayLevel`. None reaches for `getCertifiedLevel` or
  `getEffectiveLevelForUnlock` (which count provisional passes). This number has
  broken twice; it is currently correct.

### 6. CLAUDE.md's own file paths — 2026-09-22 — **3 STALE, FIXED**

Found while checking #5: the orientation document, read at the start of every
session, named **three files that do not exist** (of 79 paths).

    src/data/content.jsx                 -> content.tsx
    src/components/profile/StatsTab.jsx  -> StatsTab.tsx
    migrations/ai_month_spend.sql        -> never existed

The third had propagated INTO PRODUCTION SOURCE: `_aiBudget.js` claimed in two
comments that the file "remains as documentation of the schema". The
`ai_month_spend` schema is `CREATE_LEDGER_SQL` inside that same file and
self-migrates; `migrations/` holds `ai_quota` and `ai_burst` only. Nothing
breaks — it just sends a reader somewhere empty, which is how the nav-tab table
stayed wrong for five months.

Now a MECHANISM: `claudeMdPaths.test.ts` checks every path CLAUDE.md names, with
an anti-vacuity floor. Mutation-verified, two: the stale `StatsTab.jsx` restored
fails 1; the path regex neutered fails 1 (the floor).
**It cannot see a filename mentioned WITHOUT a directory** — `InsightsTab` is
named bare, so a rename of that file would still slip through. Matching bare
component names would drag every prose noun in, so paths is the honest scope.
(I first reported `InsightsTab.jsx` as stale too; it is only ever written bare.
Corrected before it reached the file.)

### 7. Day one — the first-ever session — 2026-09-22 — COVERED, with one stated residual

Probed by building a real session for a zero-state learner (no stats, no SRS
queue, no cached curriculum spine). Raw result:

    1. cat_genitive            2. dialogue
    3. listeningComprehension  4. cityofday      (no lesson)

**That is NOT a live defect, and the probe is why it looked like one.** Calling
`buildSessionActivities` directly bypasses `useTeachingSlotRetry`, which is
exactly the fix for this, shipped the same day (#698). An absent spine correctly
yields `[]` from `buildCurriculumSlots` (the documented null contract); the
retry rebuilds the plan once the spine's own write fires
`CURRICULUM_SPINE_EVENT`.

Verified WIRED, not just present — this repo's recurring failure:
`useDailySession.ts:918` mounts it, `curriculumProgress.ts:98` dispatches the
event inside `writeCurriculumSpine`, and `teachingSlotRetry.test.tsx:200` pins
the mount by source.

**RESIDUAL, deliberate and documented in the hook**: the retry refuses a session
the learner has already STARTED. So a learner who taps an activity before the
spine lands (~6 s on the measured trace) keeps the lesson-less plan for that
whole day. The hook states the trade — re-rolling a started session is the
2026-05-21 "I did my activities but the card forgot" incident, judged strictly
worse than a missing lesson. Recorded as a known cost, not a bug.

**Worth knowing for the next probe:** `pickSessionLesson` is NOT a builder
fallback. It lives in `useScreenLauncher` and only chooses WHICH lesson once an
`animlesson` screen launches. With no spine, a lesson reaches a learner only by
winning a P3 fill slot against ~100 pool entries — the pre-2026-08-28 behaviour.

### 8. Every AI surface's refusal copy — 2026-09-22 — **1 MORE DEFECT, FIXED**

Finishing sweep 4, which fixed 3 of the 25 surfaces it flagged. Two targeted
hunts over ALL of `src/`, not just the files already open.

**(a) A server error code rendered to a learner** — one hit outside the three
already fixed: `ContactScreen.tsx:143` (`setError(data.error || …)`).
**FALSE POSITIVE — DO NOT RE-CHASE #5:** identical code shape, different
CONTRACT. `/api/contact` returns human sentences by design ("Too many requests.
Please wait a minute.", "Invalid email address."), not machine codes, so
rendering them is correct.

**(b) Copy that blames the learner's connection** — one real defect:
`GrammarDiagnosisScreen` told EVERY failure _"Try again when you have internet
access."_ A quota 429 or a budget 503 is a server condition, so a learner who
had hit the daily AI limit was sent to check their router. CLAUDE.md forbids
this by name — "imply learner fault for a server condition" — and records the
same shape elsewhere ("the graded reader said 'check your connection' to a
signed-out learner"). It also offered an unconditional retry. Now classified
through `lib/aiFailure`, reported to Sentry, and the retry follows `retryable`.

Mutation-verified, two: the "internet access" copy restored fails 1; the
classifier dropped fails 1.

**Verified CORRECT and deliberately left alone** (all four looked like hits):

- `AIConversation.tsx:476` — "check your connection" fires only from the
  transport's own `catch`; `!res.ok` is classified separately through
  `classifyAiLimit`, with 401 / budget / burst distinguished.
- `PronunciationScorer.tsx:212` — switches on the Web Speech recogniser's OWN
  `code === 'network'`. Accurate, and a model of how to do this.
- `PostcardScreen.tsx:283` — already fixed by the 2026-09-07 census, with a
  comment citing the same directive.
- The offline notices in `AIConversation`, `LiveTutorScreen`,
  `CroatianNewsScreen` etc. are gated on real offline state.

**So the 2026-09-07 census fixed some surfaces and missed others** — it scoped
to writing/speech feedback. Four surfaces outside that scope have now been
brought up to the same standard.

### 9. A real browser walk — 2026-09-22 — CLEAN, plus a near-miss worth more than the walk

Built the app and drove Chromium through a cold open and all five tabs as a
guest. **0 error boundaries, 0 uncaught exceptions, 0 unexpected HTTP failures.**
Login renders, every tab renders, nothing throws.

**THE NEAR-MISS. I almost shipped a fix for a bug that does not exist in
production, and the commit message would have been confident.**

Observed: a guest's first session was `Genitive | Guided Speaking | Listening |
City of the Day` — **no lesson** — and the app made NO request for
`/api/content/curriculum` at any point. Traced to `App.tsx:1152`,
`if (!authUser || authScreen !== 'app') return;`, with a perfect precedent
sitting in the same file: the auto-save effect's comment records being fixed for
exactly this, because a legacy guest has `authUser === null`.

**IT WAS AN ARTIFACT OF MY OWN ENVIRONMENT.** This sandbox has no
`VITE_FIREBASE_API_KEY`, so "Continue as Guest" fell back to
`enterLegacyGuest()` — the path taken ONLY when anonymous auth is unavailable. A
normal guest goes through `signInAnonymously`, which useAuth says "drives
setAuthUser / _syncReady / setAuthScreen('app') through the same path as any
signed-in user". A real guest HAS `authUser`; the spine IS fetched.

**AND THE FIX WOULD NOT HAVE WORKED EITHER.** `/api/content/curriculum` goes
through `authedRead`, which 401s without a Firebase token (`_authedRead.js:57`).
A legacy guest has no token, so dropping the guard adds a request that fails and
changes nothing a learner sees. Reverted.

**TOOL BUG #5:** I grepped `curriculum.js` for `requireAuth|verifyToken|Bearer|401`,
found nothing, and concluded the endpoint was unauthenticated. The auth lives in
the `authedRead` HELPER. Grepping a handler for auth keywords does not tell you
whether it is gated — follow the helper.

**A TRAP FOR THE NEXT WALK, and the reusable part:** a local walk without
Firebase config exercises the LEGACY-GUEST fallback, not the path real users
take. Anything concluded from it about "guests" is about a degraded fallback.
Also: `vite preview` has no Pages Functions and answers unknown paths with the
SPA fallback (index.html, 200), so `/api/content/*` "succeeds" with HTML that
fails to parse — the walk runs with NO CONTENT AT ALL, which is itself a
degraded path.

**CLOSED BY THE OWNER, 2026-09-22, ON THE REAL DEPLOYMENT.** They opened the
Cloudflare branch preview as a guest: the first activity was **the genitive
TEACHING LESSON**, followed by the genitive drill. P0 works, the spine arrives,
the coupling serves the lesson and then its practice. There is no defect, and
the revert above was correct.

**THE LABEL IS WHY IT LOOKED OTHERWISE, and it is a real trap.** A curriculum
lesson slot is labelled with the LESSON'S OWN TITLE
(`curriculumSlot.ts:137`, `label: step.entry.title`, screen `animlesson`), so a
genitive lesson renders as "Genitive" — visually IDENTICAL to `cat_genitive`,
the drill. Reading a session card's labels cannot tell a lesson from a drill;
only the `screen`/`id` can. My local probe produced the drill (no content at
all), and I then read the owner's two-word confirmation as agreeing with the
drill reading rather than asking which it was — fitting their evidence to my
hypothesis. **Never diagnose session composition from labels; dump `id` and
`screen`.**

NEVER re-open this without evidence naming the `id`/`screen`, not the label.

**AND THE FULL ANSWER, VERIFIED IN-REPO RATHER THAN BY ASKING ANYONE.** Driving
the REAL builder against the REAL spine (`CURRICULUM` written through
`writeCurriculumSpine`, no mocks beyond SRS/CEFR) a fresh A1 learner gets:

    1. curriculum_alphabet           screen=animlesson
    2. curriculum_practice_alphabet  screen=alphabet
    3. dialogue
    4. cityofday

Spine order 1 is `alphabet`, and that is what is served — lesson first, then its
coupled practice. P0 and the teach->practice coupling are correct end to end. A
learner seeing GENITIVE first simply has prior progress and the spine has
advanced them past the early lessons, which is the system working.

**The earlier local probe showed a drill for one reason only: no spine and no
content.** That is the degraded path, not a defect, and it took writing the real
spine into the probe to see it. When a probe's answer surprises you, check what
you failed to give it before concluding anything about the code.

### 10. Work that grades but never credits — 2026-09-22 — CLEAN

The inverse of the `AlphabetScreen` award bug: a screen that scores a learner
and then pays them nothing. Swept every component that tracks a score AND
reaches a finish state, checking for any credit call.

Six flagged, **all six false positives, zero defects**: `ConditionalScreen`,
`DeclensionScreen`, `FormalRegisterScreen`, `FutureTenseLessonScreen`,
`ImpersonalScreen`, `LessonQuiz` all credit through `completeLesson()` from
`hooks/useLessonCompletion`, and four also forward `award` down to a child
rather than calling it.

**TOOL BUG #6:** the detector's credit-name list
(`completeExercise|award|awardFn|recordScreenPractised|markQuest`) did not
include `completeLesson` — the helper the entire hand-written lesson family uses
— nor did it count `award={award}` prop FORWARDING as crediting. An incomplete
list of names to look for reads exactly like a finding.

**AND A CORRECTION MADE MID-SWEEP:** I flagged `LessonQuiz` as not awarding
while "remembering" having read `award(xpAward, false, 'grammar')` in it earlier
today. That line is in **`LevelQuiz.tsx`** — a different file with a similar
name. Two components one letter apart, and only re-reading the file settled it.
`LessonQuiz` (shared quiz block, credits via `completeLesson`) and `LevelQuiz`
(the level test, credits via `award` + `levelQuizPasses`) are not the same thing.

### 11. What actually watches production — 2026-09-22 — **THE STRUCTURAL GAP**

Not a bug. The reason bugs reach the owner.

`production-smoke.yml` runs twice daily (08:00/20:00 UTC) across four browsers
against nasahrvatska.com. **All 16 of its tests are INFRASTRUCTURE**: HTTP 200,
the title, not-a-Cloudflare-block, root-not-blank, content within 25 s, no JS
crash on load, entry module served as JavaScript, service worker, three icons,
assetlinks.json. It never signs in, never opens a lesson, never plays audio,
never requests feedback.

**So the only thing watching production checks that the site SERVES, not that it
TEACHES.** Every defect the owner reported in the field passes all sixteen,
twice a day, indefinitely — the B2 listening section that played nothing,
`monthly_budget_exhausted` rendered raw, the badge claiming an unmeasured level,
"check your internet" for a quota cap. With no automated check that a learner
can learn, THE OWNER IS THE INTEGRATION TEST. That is the mechanism behind
"you said it was done and then spent days fixing bugs".

`full-user-audit` (16 tests) and `user-experience-audit` (9) DO cover the real
flow — and are `test.skip`ped in CI, correctly: they drive the live site with a
real account and no workflow holds credentials (the e2e job runs hermetically
with `VITE_FIREBASE_API_KEY: 'placeholder'`). **FALSE POSITIVE — DO NOT
RE-CHASE #6:** those skips are right; the gap is that nothing unattended covers
the flow, not that those specs are wrongly disabled.

**THE FIX SHIPPED:** `e2e/learner-flow.smoke.spec.js`, wired into
`playwright.smoke.config.js` by an EXPLICIT list (a `*smoke.spec.js` glob would
drag in `alka-smoke` and `map-smoke`, neither a production check). Four tests on
the GUEST path, which needs no credentials and so can run unattended forever: a
guest can enter; today's plan holds a real activity count with no error
boundary; the first activity opens and renders; and the run itself never calls a
generating endpoint.

Two costs, designed for rather than discovered: it is pinned to ONE browser
(2 anonymous Firebase users/day, not 8), and the fourth test fails if any of 13
Claude endpoints is called, so a future edit cannot quietly bill the $10/month
cap 60 times a month.

**TOOL BUG #7 — IN THE SPEC I JUST WROTE.** The first draft did
`test.skip(!(await begin.isVisible()), 'no Begin Session control')`. On a re-run
where the session was already started that control reads differently, so the
test SILENTLY SKIPPED (`1 skipped, 3 passed`) — a guard that disappears exactly
when state differs. Home must always offer a way in, so absence is now an
ASSERTION, not a skip. Caught only by running it twice and reading the skip
count.

Mutation-verified, two: an endpoint the app really calls added to the spend list
fails the budget test (proving the watcher fires, not just that it is silent);
an impossible activity count fails the plan test.

### 12. "Fixed once, never again" — the AI-refusal class, ratcheted — 2026-09-22

Owner: _"let's make sure when we fix something it's fixed once and never needed
to be fixed again."_ Applied to today's own work, which did NOT meet that bar.

**THE THREE FIXES WERE PINNED BY A HAND-WRITTEN LIST OF FOUR FILES.** So was the
2026-09-07 census before them (`feedbackSurfaces.test.ts`, one inline path per
assertion). Neither guard could have caught the other's defects, and neither
could catch the next one: a surface added next month lands unclassified and
every test stays green. That is the decay shape this repo records repeatedly —
the nav table wrong for five months, the hardcoded 56-category vocab list,
`GRAMMAR_STRUCTURE_CATEGORIES` going stale the moment the pool grew. I shipped
one this afternoon.

**THE DERIVATION, and what it revealed.** Endpoints come from
`ENDPOINT_CEILING_MICROUSD` (imported, not restated); callers are every `src/`
file that CALLS one through a fetching helper, comments stripped so a route
named beside a pool entry does not count. Result: **35 files make a real AI
call, 18 classify, 17 do not.** I had fixed four. The class was nowhere near
closed, and only deriving it showed that.

**`aiSurfaceClassifies.test.ts` is a RATCHET, not a fix for the other 13.** A
new unclassified surface fails the build; the existing 17 are listed WITH
REASONS and can only shrink. Four are legitimately fail-soft (the
`explain-error` drills keep the authored tip on screen); thirteen are real debt,
recorded rather than hidden. They are deliberately NOT batch-fixed: a reflexive
fix can be worse than none — `AIConversation`'s AbortError branch already reads
"Request timed out — please try again", and routing it through
`failureFromError` would have swapped a correct sentence for one saying "The
evaluator took too long" on a conversation screen.

Mutation-verified, four, each confirmed landed:
M12 a NEW unclassified surface appears -> 1 (the scenario it exists for)
M13 classification stripped from a fixed file -> 2
M14 an exempted file fixed but left listed -> 1 (both staleness directions)
M15 ANTI-VACUITY: call pattern stops matching -> 3

**TOOL BUG #8:** I copied `// eslint-disable-next-line
security/detect-non-literal-fs-filename` from a sibling test; that rule is not
configured for this path, so the comment referenced a non-existent rule and
failed lint. A disable comment copied without checking the rule applies is dead
weight at best and a lint failure at worst.

### 13. The class closed: 33 of 35 AI callers name the cause — 2026-09-22

Sweep 12 built the ratchet and left 13 surfaces as recorded debt. This sweep
closed them. Derived count now: **35 callers, 33 classify, 2 exempt** — and
both survivors are VERIFIED CORRECT rather than debt, so `KNOWN_UNCLASSIFIED`
no longer contains a single entry whose reason is "not done yet".

**THE FIXES SPLIT INTO THREE KINDS, and conflating them would have been the
reflexive-fix error sweep 12 warned about.**

1. **A refusal rendered as an ANSWER** — the worst of the three, and it was in
   `StoryViewPanel`'s word tap. `res.ok` was never checked, and the gate answers
   `{ error: 'monthly_budget_exhausted' }` with no `text` field, so the parse
   fell through to its default and the learner read `kruh → …` — an ellipsis
   presented as the word's meaning. NEVER-DO 13 on a word sheet. Now classified,
   reported, and the tooltip drops `nowrap` for the failure case because a
   sentence on one unbreakable line runs off both edges of a phone.
2. **A retry instruction that could not work** — `PhraseOfDayScreen`'s two Maja
   practice paths answered every cause with "Oprosti, nešto je pošlo po krivu.
   Pokušaj opet!", and the session-start path fabricated a canned teaching line
   in MAJA'S OWN VOICE, indistinguishable from a real turn: a learner whose
   budget had paused typed replies into a conversation that had never started.
   Both now route through `majaErrorMessage` — the app's EXISTING Croatian
   classifier for exactly `/api/maja`, reused rather than forked, so the copy is
   already in the right language for a Croatian conversation.
   `ClozeEngine` was the same shape in English and worse: "Could not load
   explanation. Check your connection." sent a learner at their daily ceiling to
   check their router, which CLAUDE.md forbids by name.
3. **Honest copy, no record** — `Flashcards` ("Example unavailable"), the two
   `flux-generate` illustration paths, `VocabJournal`'s examples, `McGame` and
   `ReviewScreen`. **The learner-facing copy is unchanged in all six**, because
   it was already correct and the content does not depend on the call. What was
   missing is the REPORT: an endpoint refusing every call for a month looked
   exactly like a feature nobody used. `reportAiFailure` only.
   **Aborts are excluded** — flashcard context aborts on every card advance and
   `failureFromError` maps AbortError to `timeout`, so reporting it would have
   filed normal teardown as an incident (the `isAbortFailure` lesson).

**Two files came OFF the debt list by being read rather than changed**, which is
the half of this work that produces no diff: `GrammarReader` (the local
morphology reading stays on screen and the copy says so — the AI is an explicit
second step) and `SpeakingScreen` (`{ score: null }`, explicitly unscored, never
fabricated). Sweep 12 had listed both as debt. Reading the file corrected the
label; a batch fix would have replaced two correct degrades with worse ones.

**The ratchet floors now sit AT the measured values** (2 exempt, 33 classifying)
rather than above them. A ratchet with headroom is not a ratchet — it is
permission for the next two surfaces to land unclassified.

**I FIXED A SURFACE THIS MORNING AND WROTE A COMMENT SAYING IT NOW
DISTINGUISHED A QUOTA 429 FROM A BUDGET 503. IT DID NOT.** `VideoLessonScreen`
threw `new Error('API error ' + res.status)` on `!res.ok` and classified only in
the CATCH, through `failureFromError` — which never sees a status, is not a
TypeError, and falls through to `server`. So a learner at their daily ceiling
read "The evaluation service is temporarily unavailable. Try again in a
moment.": the exact retry-that-cannot-work this whole class is about, now
wearing the shared vocabulary. The comment I left asserted the fix; only reading
the two functions together showed the assertion was about the catch block and
not about the screen.

**The tell was a LINT WARNING, not a test.** `failureFromResponse` was imported
and unused — I had reached for it, then classified in the wrong place. Every
test passed, the ratchet counted the file as classifying (it matches on the
import and the call, which is the honest thing for it to match on, and cannot
know WHERE in the flow the call sits), and `--max-warnings=0` is what caught it.
**A status has to be classified where the status still exists.** Re-audited all
fourteen touched surfaces afterwards: every other one classifies on the
response. The four `throw new Error('TTS failed')` sites are correct as they
stand — `ttsFetch` records the named failure internally (2026-09-10), so the
record exists before the throw.

Mutation-verified, four, each confirmed landed:
M16 a fixed surface reverts to an unnamed failure -> 2
M17 an exemption left listed after its subject is fixed -> 1
M18 ANTI-VACUITY: the call pattern stops matching -> 3

M19 connection-blaming restored to LIVE code in a pinned file -> 1 (the
assertion now strips comments, because ClozeEngine's fix QUOTES the sentence it
deleted and an unstripped match reported the repaired file as still broken — the
CodeQL-trigger trap, in a second place)

**TOOL BUG #10:** my insertion anchor was `function sanitizePhraseData`, which
matched INSIDE `export function sanitizePhraseData` — so the helper landed
between `export` and the declaration, silently moving the export onto the new
function. `tsc` passed and one unit file failed with "sanitizePhraseData is not
a function". An anchor that is a substring of a longer declaration splits it.

### 14. Day one, second half: placement — 2026-09-22 — **1 REAL DEFECT, FIXED**

Sweep 7 covered day one's LESSON half and left "placement -> first drill ->
audio -> feedback" open. Starting at placement found a trap for exactly the
learner it exists for.

**"EXIT PLACEMENT TEST" WAS AN INESCAPABLE LOOP.** App.tsx offers the test
1200 ms after a brand-new learner lands, gated on `lc === 0 && xp === 0` and
the absence of `placement_done`, `nh_placement_done` and `onboarded`. The
effect's dependency list includes `currentScreen`, so it RE-RUNS on every
navigation — and the screen's own cancel handler navigates
(`setScr('dashboard')`). Cancel deliberately writes none of those flags,
because the learner did not take the test. So every condition was satisfied
again the instant Exit navigated, a fresh timer armed, and the learner was
thrown straight back into placement. The only ways out were to finish it, to
press "Skip - I'll start at A1", or to earn XP somewhere the app kept
interrupting.

**Reachable, and by the obvious route.** WelcomeScreen's "Already signed in?
Continue ->" goes to the dashboard writing NO flag (the "Let's begin" path sets
`onboarded` first, which is why that half is safe). A signed-in learner with
zero progress who takes that button meets the offer, declines it, and is
re-offered every 1.2 seconds.

**Why it stayed invisible: the two halves are in different files and NEITHER IS
WRONG ALONE.** The guard correctly refuses to re-offer once a flag is set; the
cancel handler correctly refuses to write a flag it has not earned. The defect
exists only on the SECOND pass, and nothing in this repo renders App.tsx to
find out — there is no test anywhere that imports it.

**The fix records the DECLINE as its own fact** (`nh_placement_declined`,
registered in `constants/storage.js`). Deliberately NOT `nh_placement_done` or
`onboarded`: writing either would claim a placement that never happened, which
is NEVER-DO 13 on the app's first interaction, and `onboarded` syncs. The Me
tab's "retake placement" sets the screen directly and never consults this
guard, so the way back in survives. Both router cancel handlers write it — the
WelcomeScreen path is protected today only because a different screen happens
to set an unrelated flag first, and a guard that holds by coincidence is the
incidental coupling this file keeps recording.

**The duplication that hid it is still there, and is now measured**: the
placement `onComplete` handler exists TWICE in AppRouter (screens `placement`
and `new-placement`), 26 identical code lines apart from the cancel
destination and a 300 ms setTimeout. Both are live. Not merged here — that is a
refactor of a first-run path, and this change is two lines plus a flag.

Mutation-verified, six, each confirmed landed with its line number:
M1 guard stops reading the decline flag (the original bug) -> 1 fails
M2 the new-placement cancel stops recording (loop returns) -> 1
M3 cancel promotes itself to a completion (the dishonest fix) -> 1
M4 guard drops `xp === 0` -> 1
M5 guard drops `lc === 0` -> 1
M6 guard drops the `onboarded` check -> 1

**M4 SURVIVED ON THE FIRST RUN and that is the finding about the test.** The
anti-vacuity assertion matched `stats.xp === 0` anywhere in App.tsx, and that
string occurs TWICE — so deleting the clause from THIS guard left the test
green. It now slices the effect's own predicate out of the file and asserts
inside it. Assert the derivation, not the mention: the same error as the
`vendor-sentry` text match that survived `const hasSdkChunk = true`.

Comment stripping is load-bearing in `placementDeclined.test.tsx`: the comments
written alongside this fix NAME both keys, so an unstripped source pin would
pass on prose alone. Second time in one day (ClozeEngine was the first).

E2E audit: no spec clicks Exit or depends on the re-prompt. `seed-auth.js`
writes neither flag but seeds XP, which the guard excludes; the one onboarding
reference in `heavy-user-180day.spec.js` is the Skip CTA, untouched.

### 15. Every launch surface but the first was silent — 2026-09-22 — **2 REAL DEFECTS, FIXED**

`lib/launchFailure.ts` exists because a tap must never be a silent no-op: "a
launch either navigates, or it visibly fails HERE" (P0, 2026-07-18). It
BROADCASTS; something has to RENDER. Exactly one thing ever did.

**DEFECT 1: the next-step mechanism was the silent half.** SessionCard's fresh /
in-progress CTA rendered the strip. Every surface built AFTER it did not:

- SessionCard STATE C (`next-up-primary`) — the complete-state hero the owner's
  2026-08-17 directive made the PRIMARY guided path
- `NextUpCard` — pinned atop the Practice tab
- `NextStepPrompt` — the pill that appears after every completion

All three route through `useNextStepEngine`, so the app's entire "what next"
guarantee was the part with no failure surface. **The pill was worst**: `go()`
called `setStep(null)` BEFORE `launch()`, so a failed launch made the pill
vanish and nothing happen — restoring the exact "← Back dead end" the component
was written to abolish, and removing the fork on the way out.

**DEFECT 2, inside the one surface that did render:** it showed "check your
connection and tap again" for BOTH reasons. `empty-pool` is a content or
classification gap with nothing to do with the network, so that learner was
sent to check their router. Same error as ClozeEngine's explain-error copy
earlier the same day; CLAUDE.md forbids it by name.

**The fix is shared, not copied**: `useLaunchFailure` (one subscription, keeps
the REASON) + `LaunchFailureNotice` (one strip, two sentences). SessionCard's
inline copy was replaced by it rather than left as a third definition.

**FOUND ON THE WAY, and only because the first derivation was too broad:** five
OTHER launcher bails — checkpoint, legendary, path lesson, path speaking, path
mcgame — called `reportError` and returned. Their comments say "never
silent-fail", which meant reported to SENTRY; for the learner the tap did
nothing. They now broadcast through the same channel. **NO RENDERER EXISTS FOR
THOSE SURFACES YET** — the Learn Path tiles and the checkpoint entry still show
nothing on an empty pool. Stated rather than papered over; the cheap answer is
one app-level listener as a floor, and it is NOT done.

Mutation-verified, five, each confirmed landed with its line:
M1 the pill clears itself before launching (original bug) -> 2 fail
M2 NextUpCard stops RENDERING the notice -> 1
M3 empty-pool copy blames the connection again -> 2
M4 the complete-state hero loses its notice -> 2
M5 the five bails go back to reportError -> 1

**M2 AND M4 SURVIVED THE FIRST RUN, and that is the reusable part.** The derived
guard asked whether a file MENTIONS the failure hook. Deleting the actual
`<LaunchFailureNotice>` element left `useLaunchFailure` imported and
`clearLaunchError` still called, so the regex matched and the suite stayed
green — the couplingClearingPath trap exactly, an import satisfying a guard
written about a call. Both surfaces are now RENDERED in the test and the
mutations bite. A source pin is a statement about a file, never about a screen.

**The guard's subject had to be narrowed, and the first version's noise was
real.** Matching any `launch(` pulled in GradMap, PlaceScreen,
GrammarTrackScreen and the Learn Path tiles — different launchers. That is what
exposed the five bails above, so the over-broad first draft paid for itself
before being replaced by `useNextStepEngine|onNextStart`.

**THE FIRST VERSION OF THE PILL FIX WAS WRONG, AND THE FULL SUITE CAUGHT IT —
not my new tests, which all passed.** I kept the step on tap and let the
existing navKey effect dismiss the pill, which broke the component's documented
contract ("hides on ANY navigation"): with the step retained, HIDING now
depended on the launch CHANGING navKey, so a recommendation for the screen the
learner is already on would strand the pill there permanently. A pre-existing
test (`NextStepPrompt.test.tsx`, "tapping the bar launches ... and hides") is
what said so. The pill now hides on tap exactly as before and COMES BACK
carrying the cause — which needs no assumption about what the launch did. **My
own new tests were written against my own wrong model and were green
throughout**; this is the argument for running the whole suite and not only the
files you touched.

**A STALE ASSERTION CAME WITH THE SCOPE FIELD.** `session-launch-failure.test.ts`
asserts the event detail EXACTLY (`toEqual([{ reason: 'load-error' }])`), so
adding `scope` broke three of its cases. Updated in the same commit, and the
exactness is kept deliberately: it is what caught the field being added, and a
launcher that silently started emitting `'path'` for a session launch would send
those failures to the toast and leave the card blank.

**THE FLOOR IS IN** (same commit): `notifyLaunchFailure` now takes a
`scope` — `'session'` for the inline-strip surfaces, `'path'` for the Learn Path
tiles and checkpoint entry, which have none. App.tsx listens for `'path'` and
AppToasts renders `launch-failed-toast`. Scope is what keeps a learner from
being told twice, and the launcher is the only thing that knows which family it
is. So the open item from this sweep is CLOSED rather than carried.
Mutations: scope filter removed -> 4 fail; App.tsx stops listening -> 4;
the five bails lose `'path'` -> 3; the pill never returns -> 2.

E2E audit: specs reference only `session-begin-cta`, whose behaviour is
unchanged. No spec touches the strip or any next-up test id.

### 16. The push trigger worked — and #699's headline was wrong — 2026-09-22

Two results, and the second is a correction to something already merged.

**THE FIX IS PROVEN.** #699 said plainly that its own green PR did NOT
demonstrate anything, because the `pull_request` triggers already existed and
the new `push` ones could not fire until master moved: "the first real evidence
is a CodeQL run appearing with `event: push` on master afterwards." There are
now three — `23852142` (#699's own merge), `48b5b159` (#700) and `fbbb4c8f`
(#701). Confirmed by querying the API for `event: push`, not by reading a green
tick.

**AND THE MEASUREMENT BEHIND ITS TITLE WAS OVERSTATED.** The commit is titled
"Code scanning never ran on a master push — 2,245 runs, zero of them". The same
API query now returns **185 runs with `event: push`**, on the same
`workflow_id`, the oldest dating to 2026-03-28. So "never" is false. What
happened:

2026-03-18 f917ee34 adds codeql.yml AND security.yml WITH
`push: branches: [main, master]`
2026-03-28 2393a1b8 REMOVES the push trigger from both, deliberately,
with a stated reason: "CodeQL is a slow scan (5-15 min),
schedule-only (weekly) + PR is sufficient; push was generating
emails on every master commit"
→ master went unscanned-on-push for SIX MONTHS, until #699

The defect was real and the fix is right. The headline was not: the scan had
run on master pushes for nine days, and 0-of-1,122 was true of the runs
SAMPLED, not of all history. **This is the file's own most-repeated rule landing
on the file's own author again** — report what was observed, not the strongest
claim consistent with it — and this time it is in a commit message on master,
where it cannot be edited.

**THE PART THAT CHANGES WHAT THE NEXT PERSON SHOULD DO.** #699 read as adding a
trigger nobody had thought of. It is a RE-INTRODUCTION that reverses a
considered decision, and the reason for that decision still exists: a push
trigger notifies on every failing master run. Anyone who meets that annoyance
will reach for exactly the edit `2393a1b8` made. Two things make that different
now: `codeqlPushTrigger.test.js` fails the build if either push trigger is
removed (verified — 5 tests, and its mutation set already covers both
workflows), and the trade is the right way round, because a security finding on
the branch we DEPLOY is precisely the thing worth an email.

No code change. The correction is the deliverable.

### 17. Sync field coverage — 2026-09-22 — CLEAN, and the audit tool was stale

Ran the repo's own `/audit-sync` command. Two results.

**THE SYNC CONTRACT IS CLEAN.** Every field `buildProgressSnapshot` writes is
read back by `applyRemoteProgress`, except two metadata fields that correctly
are not: `savedAt`, and `_fbUpdated` — the freshness timestamp the newer-wins
comparison reads (`firebase.ts:1033/1051`, `useSyncManager.ts:476`). Restoring
either into local state would be wrong. Nothing is saved-but-lost, and nothing
is restored-but-never-saved.

**THE ANSWER CAME OUT WRONG TWICE FIRST, from my own extraction.** Recorded
because the next person will write the same two regexes:

- Keying on `name:` MISSES shorthand properties, and the snapshot returns
  `dc,` `cooldown,` `weekXP,` `name,` that way — reported as "restored but never
  saved", which is a data-loss finding, on four fields that are fine.
- Brace-depth tracking UNDER-counts, because several values are IIFEs carrying
  their own braces: 62 fields against the first pass's 83.
  Neither number was right. What settled it was running BOTH and taking the
  union (87 candidate names): under either extraction the unrestored set is the
  same two metadata fields, so the conclusion survives the tool being wrong.
  `fp.st` is not a gap either — it is the legacy alias in `fp.stats || fp.st`.

**THE COMMAND ITSELF POINTED AT A FILE THAT HAS NOT EXISTED FOR MONTHS**, which
is worse in `.claude/commands/` than in prose: these are instructions a session
FOLLOWS. Five stale paths across three commands:

    audit-sync.md        useSyncManager.js     -> lib/applyRemoteProgress.ts
    audit-learn-path.md  useScreenLauncher.js  -> lib/blackHoleScreens.ts
    audit-learn-path.md  content.jsx  x2       -> content.tsx
    new-lesson.md        useScreenLauncher.js  -> lib/blackHoleScreens.ts

`new-lesson.md` is the one that would have done damage: it tells the author to
register a new screen in `BLACK_HOLE_SCREENS`, in a file that no longer holds
it, so the dwell timer would never fire and the lesson would never credit.

**THE DERIVED GUARD FOUND TWO THAT MY HAND SEARCH MISSED.** I grepped the
commands for `\.js\b` and fixed three; `claudeMdPaths.test.ts`, extended to
`.claude/commands/*.md`, then named `content.jsx` twice — `\.js\b` cannot match
`.jsx`, because `x` is a word character and there is no boundary. A derived
check beats a hand search written by the same person who chose the search.

**AND ITS ANTI-VACUITY FLOOR FIRED ON A CLEAN TREE**, which is the floor working
in its least useful direction: I guessed >10 backticked paths and there are 7.
Set floors from a measurement, not an expectation.

**WHAT IT DOES NOT COVER, stated:** a filename written WITHOUT backticks.
`new-lesson.md` said "Add to LEARN_PATH in content.jsx" in bare prose — still
stale, invisible to the guard, found only by reading. Widening to bare prose
would match ordinary English ("the .ts migration"), so the trade is deliberate:
it guards the paths a reader would copy, not every mention of a file.

Mutation-verified: reverting the audit-sync path to the dead `.js` file fails 1
and names it exactly.

### 18. Two derived sweeps, both NEGATIVE — 2026-09-23

Recorded because a negative result nobody wrote down gets re-run. Both were
chosen because they are the shape that hides a live defect behind a passing
type-check: a dependency the code treats as optional, and a resource nothing
releases.

**`typeof X === 'function'` guarded props.** The `award` hole (AlphabetScreen,
dead for the life of the screen behind exactly this check) is already ratcheted
by `routerAwardProp.test.ts`, so the question was whether any OTHER prop is
guarded that way. Derived from source: 84 `award` occurrences (covered), and 5
others — `setScr`, `setJWords`, `onComplete`, `onClick`, `goToPractice`. All
five verified PASSED at every call site by reading the router and the parents.
The one worth naming is `MyWordsScreen`'s `onComplete` at :637, which is inside
the INNER component `DrillMode` (declared :584) and is passed by `MyWordsScreen`
(:702) at :744 — a `typeof` check whose caller is twenty lines away in the same
file reads like a dead branch and is not.

**`setInterval` without `clearInterval`.** Every file that sets one clears one.
`useSyncManager.ts` reports 3 sets to 2 clears; the third "set" is a COMMENT at
:659. A count derived by grepping a call NAME counts prose as code — strip
comments before believing a ratio, the same rule the CodeQL-trigger guard
needed.

Neither produced a defect. Both are cheap to re-run and are written down so the
next sweep spends its time elsewhere.

### 19. The library named the cause; nine of ten screens threw it away — 2026-09-23 — **3 REAL DEFECTS, FIXED**

Found by mutating a guard that was already green, and the guard turned out to
be the reason nobody had looked.

**THE GUARD MATCHED NOTHING.** `aiSurfaceClassifies.test.ts` (sweep 13's
ratchet) listed `ttsFetch` in its call-detection alternation:

    (?:_aiPost|apiFetch|fetch|ttsFetch)\s*\(\s*['"`]/api/tts

Every one of `ttsFetch`'s ten call sites passes an OBJECT —
`ttsFetch({ text, slow, voice })` — never a URL, because the helper already
knows the route. So that branch could not fire **anywhere**, and two files
whose only AI call is `ttsFetch` were invisible to the whole suite:
`GradedInputScreen` and `SpeakingSprintScreen`. Measured, not reasoned:
`callsEndpoint` returned false for both. Demonstrated by mutation — with the
sprint screen stripped of every classifier reference, the OLD matcher passes
the ratchet clean (M3).

**WHAT THE HOLE WAS HIDING — the census, all ten sites, read end to end:**

| screen                     | what a refusal looked like                        |
| -------------------------- | ------------------------------------------------- |
| `AIListeningScreen`        | names the cause inline — **correct**              |
| `SpeakingSprintScreen`     | "Could not load audio. Check your connection..."  |
| `LiveTutorScreen`          | "Check your volume, speaker, or headphone..."     |
| News, PhraseOfDay, HeritageStory, StoryMode, GradedInput, Writing, Maja | silent |

**THE 2026-09-10 FIX WAS THE FIRST HALF OF ITS OWN RULE.** That work found
`ttsFetch` recorded nothing and gave it `_classifyHttpFailure`,
`getLastTtsFailure` and a Sentry report — then stopped. Its NEVER says
"instrument one path to an endpoint and describe the endpoint as covered —
**enumerate the callers**". The callers were enumerated for RECORDING and never
for TELLING, and **recording is not telling**.

**THE SEVEN SILENCES LOOKED DELIBERATE AND WERE NOT.** The audio directive does
say a failed play on a TEXT-FIRST surface "costs the sound and nothing else" —
but that rule was written about `speak()` callers, where `_completeSpeak`
dispatches `nh:tts-failed` and `AppToasts` renders the cause site-wide.
`ttsFetch` never dispatched it. Same quiet, nothing behind it. So the fix is
ONE dispatch in the library (`_dispatchTtsFailed`, now the only raiser, shared
by both paths so a reworded cause cannot reach half the app — the
three-copies-of-a-formula failure), plus the two screens that said something
FALSE, because a wrong sentence beside a correct toast is worse than either.

**DEFECT 2 — the live tutor warning was unreachable on the platform that needs
it.** `playTTSStreaming` has two branches; the streaming one counted its
failures and the NATIVE one returned early past the counter. On Capacitor that
is the only branch (MediaSource is absent), so however many of Marija's replies
went unheard, the warning could not appear. Both branches now count through one
`noteTtsFailure()`, and the copy names the recorded cause, falling back to the
device advice only when nothing was refused — which is exactly when the device
advice is the true answer. The cause is captured when the warning goes UP, not
read at render: a later successful play clears the module-level recorder, and a
warning still on screen would have silently reverted to blaming the headphones.

**DEFECT 3, found by the test rather than by looking — `speakSynth` swallowed
its own failure twice.** `u.onerror` raised a `nh:tts-failed` with NO detail —
the last nameless dispatch in the module, so the toast read the bare "Audio
unavailable" the 2026-09-06 directive exists to abolish — and then resolved, so
`_completeSpeak` returned `'synth'`, a SUCCESS verdict, for audio that never
played. `useHeardGate` treats any non-failure verdict as heard, so on the two
AUDIO-FIRST screens that unlocks an answer to a recording the learner did not
hear: **"never score an assessment item whose audio the learner has not
heard", reached through the fallback instead of the primary path.** It now
resolves `false` on error and the verdict belongs to `_completeSpeak`, which
records `cause: 'playback'` with the ROOT cause in `underlying` — so a learner
whose allowance ran out is told that, not told their browser is at fault for
the refusal that caused the fallback.

This one was NOT in the census I wrote. The "both raisers go through ONE
function" assertion found it, by counting two inline dispatches where I
expected one. **A source pin written to stop a future fork found a present
one.**

Its blast radius is wider than the toast. `GuidedSpeakingScreen` is the ONLY
caller that compares the verdict (`res === 'azure' || 'synth' || 'superseded'`
→ say nothing), so a synth error used to return a success verdict there and the
screen stayed silent about audio that never played. It now names the cause and
still does not gate, which is what a text-first LISTEN stage must do. Checked,
not assumed: that comparison is the only one in `src/` or `e2e/`.

**THE FEEDBACK CLASSIFIER WAS SWEPT THE SAME WAY AND IS CLEAN** — the obvious
next question, since `reportAiFailure` is the twin mechanism. Every file that
calls it either renders the failure's own message or hands the failure to a
caller that does (`useExplainError` → `DrillExplainCard`, `speakingCoach.ts`
and `whisperClaudeScorer.ts` → their screens); the five that match no
`.message` in source are the PR #701 surfaces whose existing copy was already
correct and were given reporting only. No second instance of this defect.

Pinned by `ttsCallersNameCause.test.tsx` (11), which drives the REAL
`SpeakingSprintScreen` through the REAL sub-components to the model phase and
the REAL `audio.ts` against a stubbed 429 — no audio mock, so the cause is
classified by the code that classifies it in production. The connection
sentence is asserted ABSENT for a quota refusal and asserted PRESENT for a
genuine transport failure: replacing a wrong sentence with a different wrong
sentence is not an improvement.

A twelfth assertion came out of the harness rather than the census: the
sprint's `try` also covers the FileReader and `audio.play()`, which run AFTER a
successful fetch, where `_lastTtsFailure` is null and `describeTtsFailure(null)`
is the nameless default. A throw past the fetch IS a playback failure and now
says so.

Mutation-verified, eight, each confirmed LANDED before its result was read:
`ttsFetch` stops dispatching fails 2; the sprint copy reverted fails 2; the
sprint screen stripped of every classifier fails the RATCHET 1, and with the
helper matching also removed it passes — which is the hole, demonstrated; the
native branch not counting fails 1; the warning copy reverted fails 1; the
nameless synth dispatch restored fails 1; the cause read at render instead of
captured fails 1; the post-fetch failure left nameless fails 1.

**THE RATCHET FIX IS NOW SELF-GUARDING.** M3 showed that reverting
`ENDPOINT_HELPERS` left the suite green, which would have let the hole reopen
silently. Measured: 38 callers with helper matching, 35 without; the
anti-vacuity floor sits at 36, and a third named anchor is
`GradedInputScreen` — a `ttsFetch`-ONLY file, deliberately not the screen fixed
in this change, so the anchor cannot be satisfied by the fix and holds only
while the helper matching does. Re-mutated: reverting the matcher now fails.

**TWO THINGS THE TEST HARNESSES TAUGHT, both worth keeping.** `live-tutor-
screen.test.tsx` mocks `../lib/audio.js` and omitted the new exports, so
`getLastTtsFailure` was `undefined`, threw inside the `finally` that clears
`playing`/`phase`, and presented as a permanently disabled tutor rather than as
a missing mock. That is not only a harness gap: a `finally` that can throw is a
`finally` that can strand a screen, so the counter now reads the recorder
fail-soft — the `writePushRun` rule, observability may never take the feature
down. And `audioWarningCause` has exactly ONE writer, `noteTtsFailure`: the
three places that HIDE the warning do not also have to remember to clear it,
and a stale cause is unreachable because nothing renders it before the next
raise overwrites it. Four places to remember is how a field goes stale.

**WHAT THIS DOES NOT DO, stated.** The seven silent screens are still silent
LOCALLY — they now inherit the site-wide toast, which is the same channel every
`speak()` caller has always had, and no screen gained a gate. Gating a
text-first surface on playback is the thing the audio directive forbids.
Verified rather than assumed that showing both a local card and the toast is
already the norm: on the two audio-first screens `useHeardGate` renders
`AudioFailureNotice` while `speak()` raises the toast, and has since 2026-09-06.

### 20. A screen rendered a field the data has never had — 2026-09-23 — **1 REAL DEFECT, FIXED**

`ScenesScreen`'s `scene.qs` (Sentry 0d68c47c) is recorded in CLAUDE.md as a
one-off. It is a CLASS, and this is the second member — found by deriving it
instead of waiting for the next Sentry event, since Sentry is not reachable
from here.

**THE DERIVATION.** Dump every field name reachable under each
`/api/content/core` payload key from the REAL `core.js`; for each of the 53
`useContent`/`peekContent` consumers, collect the payload keys it names and
every `x.field` it accesses; report accesses that no key it reads can supply.

**`RegionScreen` renders `v.tip`. No region vocabulary row has ever carried
`tip`.** Measured against the real payload: **81 rows across 10 regions, 81
with `note`, 0 with `tip`.** So every authored explanatory line — *"šoht: the
iconic steel tower above a mine shaft, Labin's industrial symbol"* — was
dropped on the floor, on every region page, for the life of the screen.

**IT IS A WORSE HIDING PLACE THAN THE ONE THIS CLASS IS NAMED AFTER.**
`scene.qs.map` at least THREW, so a boundary caught it and Sentry eventually
said so. `v.tip` is `undefined`, the `&&` short-circuits, and the card renders
one line shorter than it should: no boundary, no Sentry event, no failing
test, nothing to notice. A missing field and a field that is legitimately
absent look identical from inside an optional render.

**THE FIRST RUN OF THE DERIVATION MANUFACTURED FOUR FINDINGS, AND READING
KILLED ALL FOUR.** The field walk capped at depth 3 and sampled 40 array
elements, so `PROFESSIONS → categories → jobs → job.m` (depth 4) was outside
it — and `ProfessionsScreen` (`j.m`, `j.f`, `j.note`), `ClothesScreen`
(`.gen`), `BodyDescScreen` and `CountriesScreen` were all reported broken
while being perfectly correct. **Under-counting a derivation manufactures
findings exactly the way over-counting hides them**, and this is the
brace-depth extraction error of sweep 17 in a new place. Re-run without the
cap (cycle-guarded), the noise collapsed from 4 false positives to 1 real
finding plus locals; three further candidates (`WordSprint`'s `word.hr`,
`LearnPath`'s `word.en`, `AppRouter`'s `w.word`) were read and are
locally-shaped objects, not payload rows.

**The guard is a RENDER against the REAL payload, not a source pin**
(`regionVocabNote.test.tsx`, 11): a pin on `v.note` would pass just as happily
if the data were renamed underneath it, because the failure IS a name agreeing
with nothing. It drives the real screen for all ten regions and asserts each
row's headword AND its note reach the DOM, plus the data-side floor (81 rows,
all with `note`, none with `tip`).

Mutation-verified, three, each confirmed LANDED: the screen reverted to `v.tip`
fails 10; one row's `note` renamed to `tip` IN THE DATA fails 2 (the other
direction — the guard must not only watch the screen); the vocabulary tab never
opened fails 10, so the render assertions are not vacuous.

One testing note worth keeping: the tab button renders `{icon} {label}`, so its
text is split across nodes and `getByText('Language')` finds nothing. Query by
ROLE and accessible name — which is also what a learner actually clicks.

E2E audit: `croatia.spec.js` asserts only that the `Overview` tab appears; the
change is inside the Language tab and touches no user-visible string a spec
names.

**THE OTHER DIRECTION OF THE SAME DERIVATION IS UNUSABLE, AND THAT IS WORTH
RECORDING SO NOBODY RE-RUNS IT.** "Which authored payload fields does no source
file read" sounds like the same sweep pointed the other way; run, it reports
**339 names and every one is noise**, because the payload's own DATA KEYS are
its field names (`V['greetings']`, `REGIONS['labin']`) and are reached through
`Object.keys`, never as literals. The one row that looked like a real finding —
HISTORY's ten graded bands (`textHrA1` … `introHrC2`, ~4,100 authored Croatian
words) — is read by `gradedField(base, level)` building `${base}${level}` at
call time, so the literals correctly appear nowhere. Checked rather than
assumed: that was the one candidate whose absence would have been expensive.

**THE SAME CHECK OVER THE 109 DRILL BANKS IS CLEAN, and it is a real check
rather than a vacuous one**: `ModeDrill` renders exactly `q`, `opts`, `answer`,
`tip`, `en`, `mode`, and across **109 banks / 2,616 rows** there is not one
field the engine never renders and not one row missing a field it requires.
That is the whole practice programme, so the class does not generalise to the
drills — worth knowing before someone spends a sweep there.

### 21. The ledger could never measure reading, and that latched the input slot — 2026-09-23 — **1 REAL DEFECT, FIXED**

The open queue item "behavioural correctness on live paths — renders fine,
behaves wrong". This is one: nothing crashes, nothing looks wrong, and the
comprehension guarantee quietly stops guaranteeing comprehension.

**READING WAS THE ONE SKILL THE MASTERY LEDGER COULD NOT MEASURE.**
`recordExerciseOutcome` fires only from `completeExercise`, and **no
`EXERCISE_COMPLETION` row carried `activityType: 'reading'`** (measured: 267
rows — grammar 236, vocabulary 9, listening 5, lesson 9, speaking 2, none 5,
default 1; reading 0, writing 0). Writing has its own direct
`recordMasteryEvent` calls from Guided Writing, WritingScreen and
`LessonProduceStep`. Reading had nothing: both reading screens grade and award
themselves (the `writing_guided` / `relpron` shape) and pass `'reading'` to
`award`, whose activityType reaches the XP and quest path and **never the
ledger** — `useAward` does not import it.

**WHY AN UNMEASURABLE SKILL IS NOT A DORMANT GAP.** `weakestReceptiveKind`
OVERRIDES the comprehension slot outright — `const preferred = weakest ??
(alternation)` — and an untested cell scores MAXIMUM need, which is correct on
its own terms: an unmeasured skill deserves priority. With reading permanently
unmeasurable, the moment listening reached `tested` (`MIN_SAMPLES` 5, "a week
of honest work") the answer became `'reading'` and could never change.

**MEASURED with the REAL slot, 40 sessions per level:**

| ledger state        | weakest   | listening | reading |
| ------------------- | --------- | --------- | ------- |
| empty               | null      | 30        | 10      |
| listening TESTED    | reading   | **0**     | **40**  |
| both TESTED (fixed) | null      | —         | —       |

A2, B1, B2 and C1 identical. **The comprehension slot exists BECAUSE listening
was running at 4–5% of sessions (2026-09-04); this had quietly taken it to
zero** — worse than the thing it was built to fix.

**TWO WRONG ANSWERS ON THE WAY, BOTH CAUGHT BY MEASURING.** I first reasoned
that one listening event would flip it; it does not — one sample is `tested:
false`, which scores need 1 for BOTH, and the tie goes to listening. And the
first harness reported listening 40/40 on an EMPTY ledger, which looked like
the defect and was mine: it never wrote `nh_session_served`, so the alternation
had no dates to alternate on. Reason about a scheduler and you will describe a
scheduler that does not exist.

**THE FIX IS THE SANCTIONED ONE**, not a conversion: a single
`recordExerciseOutcome({ activityType: 'reading', score, total })` at each
screen's genuine completion point — the same shape as the
`recordScreenPractised` calls added to `writing_guided` and `relpron`, and it
changes no award semantics. The ADAPTER rather than a hand-rolled
`recordMasteryEvent`, because it already owns the level, the weight and the
fail-soft, so a drill finish becomes evidence ONE way. `GradedInputScreen` also
had to widen `onComplete(xp)` to carry `score`/`total`: the score existed
inside `StoryQuiz` and died at that boundary.

**THE FIRST GUARD WAS SOURCE-DERIVED AND A MUTATION WALKED STRAIGHT THROUGH
IT.** Dropping `score`/`total` at the `onComplete` boundary — exactly the shape
the bug had — leaves the `recordExerciseOutcome` call in the file, makes the
adapter return early on a missing score, and records nothing. The suite stayed
green. **That is `couplingClearingPath`'s trap one level deeper: there an
IMPORT satisfied a guard written about a CALL; here a CALL satisfied a guard
written about an EFFECT.** The guard now finishes the REAL quiz in the REAL
screen and asks the REAL ledger what it learned.

`masterySkillsReachable.test.ts` (11) asks the general question — every skill
the ledger reports must have a production path that can record it — rather than
naming `reading`, which would go stale the moment a seventh skill arrives with
the same hole.

Mutation-verified, five, each confirmed LANDED: both recorders removed fails 2;
the score dropped at the `onComplete` boundary fails 1 (**this is the one that
survived the first draft**); the both-strong `null` return removed — the latch
restored — fails 1; the picker made unconditionally null, which would destroy
the feature while satisfying the anti-latch test, fails 1. Removing ONE of the
two recorders SURVIVES, and that is correct rather than a hole: one practice
path is enough for the skill to be measurable, which is all the guard claims.

E2E audit: `onComplete`'s signature is internal; no label or test id changed,
and the specs that click "Continue →" / "See Results" are unaffected.

**RECORDABLE IS NOT REACHABLE, so the guard asks both.** The speaking coach was
a correct, tested library wired to a state no launcher produces, and its own
tests passed throughout; a skill recorded only from a screen nothing can reach
is that defect with a new name. Measured: grammar, vocab, listening and
speaking reach a session pool through their registry keys; reading through
`graded_input`; writing through `writing` and `writing_guided`. (`ReadingScreen`'s
own route is NOT pooled — it is reached from the Learn Path — so reading's
session reachability rests entirely on the graded reader.) No second defect
here; the clause is a ratchet.

**AND THE CLAUSE I ADDED FOR IT WAS DECORATIVE ON ITS FIRST RUN**, which is the
fourth time in this audit that a guard needed mutating after it was written.
`routesOf` scanned a FIXED 400-character window after each `currentScreen ===`
match, which bleeds into the NEXT router block: `GradedInputScreen` resolved to
`['cloze', 'graded_input']`, and `cloze` is itself a pool screen — so unpooling
`graded_input` left the assertion green on a route the component is not
rendered at. Bounding each block by the next `currentScreen ===` fixes it, and
the same mutation then fails. **When you fix a guard, mutate again** — and when
you ADD a clause to one, mutate the clause, not the file.

**THE FIVE REGISTRY ROWS WITH NO `activityType` WERE CHECKED AND DELIBERATELY
LEFT ALONE** — recorded because the next person will find them the same way I
did and they look exactly like the nine the registry comment describes fixing.
They are `p()` rows: **passive read/dwell credit**, not graded finishes, and
the helper does not even accept an activityType. Two (`dialects`, `grammarmap`)
are not in any pool, so the registry's own derivation method (pool category ->
`SKILL_GROUP`) cannot classify them at all.

`alphabet` is the interesting one and still a NO. Its registry row covers the
DWELL path; the QUIZ never reaches `completeExercise` at all — the screen
grades itself and calls `award(20, false, 'vocabulary')`, which is the same
XP-and-quests-only path that hid the reading defect, and it does hold a real
`score`. So evidence IS being dropped. The difference that makes it not worth
changing: **vocab is already measurable from eight pooled screens, so there is
no latch** — the consequence is a little less evidence for one skill, not a
scheduler stuck on one answer forever. The screen's own comment states the
trade ("deliberately NOT a conversion... would change a live screen's XP
semantics for no gain here"), and that reasoning holds. Declined on the
measurement, not on the comment's authority.

## NOT YET CHECKED — where the next field report will come from

Every defect the owner has actually hit is in this list, not the one above.
None of them crash, so no sweep above can see any of them.

- [x] ~~13 AI surfaces still do not name a refusal's cause~~ — CLOSED, sweep 13. 33 of 35 callers classify; the 2 remaining entries in
      KNOWN_UNCLASSIFIED are verified-correct degrades, not debt. The ratchet
      stops new ones and its floors sit at the measured values.
- [ ] **Behavioural correctness on live paths.** Renders fine, behaves wrong.
      (Credit-on-grade is closed — sweep 10.)
- [x] ~~LOW: `AIConversation` appended the raw `Error.message`~~ — FIXED. Both
      sites (:476/:593) drop the parenthetical and keep `cause` for diagnostics.
      The AbortError branch is untouched: its wording was already correct and
      context-appropriate, and reclassifying it through `failureFromError` would
      have swapped a right sentence for one that says "evaluator" in a
      conversation screen. Mutation-verified (M9: the parenthetical restored
      fails 1).
      The B2 listening section returned 400; the badge claimed C1 for a level
      nothing measured; feedback surfaces rendered nothing on failure.
- [~] **Day-one path**: the LESSON half is checked (sweep 7), PLACEMENT is
  checked (sweep 14 — one real defect, the inescapable Exit loop), and the
  AUDIO leg is now checked (sweep 19 — three real defects, all on the
  `ttsFetch` path). The FEEDBACK leg is covered by sweeps 8/13 plus
  `useExplainError`'s own classification, re-read this pass. What remains of
  this item is the first DRILL itself on a zero-state account.
- [x] ~~**Numbers displayed vs numbers measured** (NEVER-DO 13)~~ — DONE, see
      sweep 5. Clean. (This line sat unticked for one checkpoint after the sweep
      that closed it: the list and the findings are two places to remember, and
      a queue that disagrees with its own results is how the nav-tab table
      happened. Tick it in the SAME commit as the sweep.)
- [x] ~~**API endpoints' real failure modes** as a learner meets them~~ — DONE,
      sweeps 4 and 8. Four surfaces fixed; the rest verified correct by name.
- [x] ~~**Offline / stale-payload behaviour**~~ — PARTLY. The cold sweep already
      primes content as absent, so a MISSING key is covered both ways
      (`content?.K` and `(content ?? {}).K`). The uncovered case is a key
      PRESENT with an OLDER shape, which needs an old payload snapshot the repo
      does not keep. Stated rather than faked.
- [x] ~~**Anonymous-auth / guest lesson question**~~ — CLOSED by the owner on
      the real deployment: a guest's first activity is the genitive TEACHING
      LESSON, then its drill. No defect. See sweep 9.
- [x] ~~No renderer for the five non-next-step launch bails~~ — CLOSED in the
      same sweep: `scope: 'path'` + App.tsx listener + `launch-failed-toast`.
- [ ] Lower priority: `fbLoadSRS` removal; `LevelQuiz.onPass` removal.
