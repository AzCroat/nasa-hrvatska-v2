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

### 22. The day-one drill: a visit marker read as a completion marker — 2026-09-23 — **1 BLOCKING + 2 MILD DEFECTS, FIXED**

The last open leg of the day-one item: the first DRILL on a zero-state account.
Driving the REAL session builder at A1 with an empty everything, the day-one
plan is four activities — `curriculum_alphabet` (the lesson), **`curriculum_practice_alphabet`
→ screen `alphabet` (the drill)**, `speaking_guided`, `cityofday`. So the first
drill in the product is the Alphabet quiz.

**THE FINDING.** `launchPathItem` writes a screen id into `stats.vs` the INSTANT
a LEARN_PATH item whose `go` is in `BLACK_HOLE_SCREENS` is tapped — synchronously,
before a single question is answered, so a learner who leaves in under 20s still
ticks the path node. That is a VISIT marker. `AlphabetScreen` computes
`firstCompletion = !stats.vs?.includes('alphabet')` and reads it as a COMPLETION
marker, gating both its 20 XP award and its lc write on it.

`award()` is also what writes `nh_session_completed` (useAward, ahead of its own
cooldown gate). So for any learner carrying the key — every learner who ever
tapped lp10, and every learner on the tree at all, since the pre-write has always
been there — **finishing the day-one alphabet drill signalled nothing, and
Today's Session stayed at N-1/N on that attempt and on every later one.** Not a
crash, not a blank screen: the learner does the work and the counter does not
move.

Confirmed empirically before anything was changed: the real screen, `vs:
['alphabet']`, an active session, played to Done — `nh_session_completed` null.

**THE CLASS, DERIVED RATHER THAN WAITED FOR.** `blackHoleScreens.ts` already
says in its own header what disqualifies a screen — a built-in quiz that
self-credits — and lists six removed for exactly that. Walking the REAL router
to each of the sixteen remaining keys and asking whether its component writes
that key into `vs` itself, and whether the same write bumps a counter:

| key | self-writes vs | own counter | what the pre-write costs |
| --- | --- | --- | --- |
| `alphabet` | yes | lc | **20 XP + the session signal, permanently** |
| `falsefr` | yes | lc | 1 lc, when the learner finishes inside 20s |
| `techvoc` | yes | lc | 1 lc, same condition |
| `writing` | yes | **none** | nothing — dwell strictly ADDS an lc the screen never writes |
| other 12 | no | — | nothing; dwell is genuinely their only credit |

`writing` is the exemption and is pinned in BOTH staleness directions. The other
twelve are informational, which is what the map is for.

**TWO FIXES, NEITHER SUFFICIENT ALONE — and that is the whole subtlety.**
Removing the three keys makes `vs` an honest first-completion marker for a
learner starting today, and does NOTHING for the installed base, whose `vs`
already carries it: their sessions would still strand. An unconditional
`signalSessionCompleteIfActive('alphabet')` at Done covers them, and on its own
leaves the 20 XP unreachable. Shipping either alone reads as a fix and is not
one.

**WHAT IT COSTS, stated:** a learner who opens Alphabet / False Friends / Tech &
Digital and leaves without finishing now earns nothing there, where twenty
seconds of presence used to pay 1 lc and 5 XP. All three have a completion
control and their path nodes still tick — on the screen's own `vs` write or on
the `lcAtLeast` fallback the ckRule already carries — which is exactly how
pitchaccent and shadowing have worked since they were removed for this reason.

**THE TEST THAT ENCODED THE MISTAKEN PREMISE.** `AlphabetScreenAward.test.tsx`
asserts "a repeat pays nothing" with `vs: ['alphabet']` and the comment "`vs`
already carries the key, **which is the persisted first-completion marker**".
That sentence was false when it was written, and it is precisely why nothing
caught this: the test asserted the defect's own behaviour, correctly, under a
premise about what the marker means that the launcher disproves. It is now true,
and the comment records that it was not.

**TWO STALE PROSE CLAIMS CAME WITH IT.** `pathGateThreshold.test.tsx`'s header
called `alphabet`, `techvoc` and `falsefr` dwell-credited "ON PURPOSE — they are
informational". That sweep subtracted the dwell-credited screens from its
candidate list without asking whether each one actually was informational; all
three have a quiz. Corrected in the same commit as the code.

**I LOOKED AT THIS SCREEN YESTERDAY AND MISSED IT.** Sweep 21's closing section
examined `AlphabetScreen` and declined to route its quiz through
`completeExercise`, noting the screen "grades itself and calls `award(20, false,
'vocabulary')` … and it does hold a real `score`". That reasoning still holds on
its own axis (the mastery ledger), and it silently assumed the award FIRES. The
axis you are sweeping decides which question you ask; it does not make the other
questions safe.

**Mutation-verified, nine**, each confirmed LANDED before its result was read:
the session signal removed → 2 fail; the signal made conditional on
`firstCompletion` → 1; the signal unscoped (no screen argument) → 1;
`alphabet` restored to the dwell map → 3; `falsefr` restored → 3;
`WritingScreen` given a counter, so its exemption must go stale → 1; an
exemption over a key no longer in the map → 1; the census resolving no
components → 1; `playToDone` never pressing Done → 2.

**E2E audit**: the only two spec references to these screens are fixture SEEDS
(`seed-auth.js`, `microquiz-levelquiz-settings.spec.js`) that pre-write `vs`
themselves — unaffected. No spec depends on dwell credit; greps run for the
copy, the ids and the 20s mechanism.

Full suite on the final tree: **579 files, 9336 passed, 25 skipped, 0
failures**; `tsc --noEmit` clean; lint clean (Croatian lint 0 findings across
521 files).


### 23. Three generalisations of sweep 22, all NEGATIVE — 2026-09-23

Sweep 22 found one screen reading a VISIT marker as a COMPLETION marker. The
rule in this file is to enumerate the class rather than fix the instance, so
three derivations were run against it. All three come back clean, and they are
recorded so nobody re-runs them.

**(a) Credit gated on a `vs` visit marker — 1 of 368, and it is the one fixed.**
For every session-launchable screen, resolved through the REAL router: does it
gate an `award` / `signalSessionCompleteIfActive` / `completeExercise` call on
`stats.vs.includes(<key>)`? Exactly one hit — `AlphabetScreen`. **Being gated
is not itself the defect**: the defect was that the key had a SECOND writer
(the launcher's pre-write) that meant something else. With `alphabet` out of
`BLACK_HOLE_SCREENS` the screen is now the only writer of its own key, so the
gate is honest. The ratchet against a new instance lives in
`dwellPreWriteSuppression.test.tsx`, which asks the question from the other
side — of every key the dwell map holds.

**(b) A session-launchable screen that can signal nothing — 0 of 368.** Walked
the REAL router to each screen's components and their import graphs (depth 6)
for any reachable writer of `nh_session_completed`. Clean.
**This census could not have found sweep 22's defect and it is worth saying
so**: `AlphabetScreen` REACHED `award` the whole time — the call was reachable
and conditional. Reachability and firing are separate paths, exactly as
reachability and clearing were for the coupling. A clean reachability census is
not evidence that finishing a screen advances the session.

**(c) One false positive, killed by reading.** The first run of (b) reported
`alka`. `AlkaScreen` calls `award?.(xp, true, 'vocabulary')` — OPTIONAL-CALL
syntax, and `\baward\s*\(` does not match across the `?.`. The screen has
always awarded correctly; the matcher was wrong. Same shape as the depth-3 cap
that manufactured four findings in sweep 20: **a derivation that under-matches
manufactures findings exactly as one that over-matches hides them**, and one
read of the source settles it either way. The corrected matcher tolerates
`?.(` and reports zero.

### 24. Production telemetry: what is readable, and what that does NOT establish — 2026-09-23

`sentry-top-issues.yml` runs on every master push. Read for this sweep rather
than assumed:

- **The issue stream is still refused.** `event:read` is ABSENT from the
  credential's effective org access (`org:read project:read project:releases`),
  measured from `/organizations/<org>/`, not inferred from the 403. The
  workflow's own "known blocked, staying quiet" branch fires, correctly. This
  is the standing #644 blocker across four credential changes; it is NOT
  re-chaseable from here and was not re-chased.
- **Session health IS readable**: 1,426 sessions over 14 days, `healthy=1426`,
  `errored=0`, `crashed=0`, `crash_free=100%`, `error_free=100%`; ingestion
  live since 2026-03-18.

**What that does and does not say.** It establishes that the client SDK is
alive and reporting. It does NOT establish that production is clean: zero
errored sessions with an unreadable issue stream cannot be distinguished from
errors not reaching that stream, and the stream is precisely what cannot be
read. That is this file's own rule — a missing mechanism and a passing
mechanism look identical from the outside. Recorded as "sessions report, error
counters are zero, the distinguishing read is unavailable", not as "production
is clean".


### 25. Work recorded that nothing consumes — 2026-09-23 — **2 DEAD WRITES, FIXED**

The mirror of the `v.tip` sweep, run over storage keys instead of payload
fields: not "a screen reads a field the data never had" but "the app writes a
value nothing ever reads". Both are silent by construction.

**This class already had a fix and a guard, and the guard could not grow.**
`onboardingAsksOnlyWhatItUses.test.tsx` removed three dead writes
(`nh_connection`, `nh_goal_set_date`, `nh_last_active`) and pins three hardcoded
NAMES. A fourth lands silently — the hand-maintained-list decay this file keeps
rediscovering — and two had:

- **`nh_daily_min`** (`WelcomeScreen`). Read by nothing in `src/`, `functions/`,
  `e2e/` or `scripts/`. **Not a broken promise**: the line directly below it
  converts the same answer into `nh_daily_goal_xp`, which IS read
  (`DailyGoalCard`, `appUtils.getDailyGoal`) and synced both ways — so the
  learner's choice was always honoured and only the raw minutes were dead. The
  earlier sweep **edited this very file** (its comment records removing
  `nh_goal_set_date`) and left this one three lines below, because that sweep was
  scoped to `GoalSetterModal` and `WelcomeScreen` is a SECOND surface asking the
  same commitment question.
- **`nh_legendary_mode`** (`useScreenLauncher.launchLegendary`). Set beside
  `nh_checkpoint_level`, which `mcGameComplete` DOES branch on; there is no
  legendary branch anywhere. The ⚔️ Legendary run is genuinely harder — the
  4-distractor slice gives it five options — so the FEATURE works and only the
  flag was orphaned. Its only readers were two assertions in
  `path-launch-vocab.test.tsx`, each a proxy sitting beside a stronger direct one
  (`setScr` called with a non-empty question set / neither called), so removing
  them cost no coverage. **A test pinning a write nothing consumes** is the
  `AlphabetScreenAward` shape from sweep 22: the test defends the defect.

**THE MATCHER WAS WRONG THREE TIMES, EACH TIME CONFIDENTLY**, and this is the
part worth keeping:

| version | what it did | result |
| --- | --- | --- |
| under-match | resolved constants and import graphs | 3 hits, missing keys |
| over-match | excluded the writing file from the reader search | **34 false positives**, including keys CLAUDE.md documents as read (`nh_case_primer_seen`, `nh_recent_exercises`) |
| over-ALIVE | a "prefix consumer" clause picked up a bare `nh_` literal in App.tsx's pruning loop | **0 hits** — it hid both real findings |

What settled it was the dumbest version that works: count occurrences of the
exact key string across production source; if every one of them IS a write
statement, nothing else mentions the key. No constant resolution, no import
graph, no prefix logic. **It can only MISS, never MANUFACTURE** — a key written
through a constant or a template literal is outside it — and that is the safe
direction for a guard that fails the build. The limitation is stated in the
file's own header rather than discovered later.

**THE FIRST DRAFT'S ONE EXEMPTION WAS WRONG, AND ITS OWN STALENESS TEST CAUGHT
IT.** I exempted `nh_pruned_` on the plausible reason that a date-suffixed key
is invisible to an exact-string count. The staleness half failed immediately:
App.tsx:213 reads it back through `/^nh_pruned_\d{4}-\d{2}-\d{2}$/`, whose
literal CONTAINS the string, so the count already saw it and the exemption was
guarding nothing. That is this file's rule about checking an exclusion's reason
even when it is obviously true — met again, and caught by a mechanism rather
than by care. **`deadStorageWrites.test.ts` ships with no exemptions at all.**

**Mutation-verified, six**, each confirmed LANDED before its result was read —
and one did NOT land on the first attempt (`setMcInitQ(qs);` appears three times
in the launcher, so the anchored edit silently did nothing and the run came back
green; re-done against the line number). `nh_daily_min` restored → 2 fail;
`nh_legendary_mode` restored → 2; a BRAND-NEW dead key the named list cannot
know about → 1, named in the failure message (the whole point of the ratchet);
the derivation neutered ALONE → 0, correctly, because nothing is dead to catch —
which is why the next one exists; the derivation neutered WITH a dead write → 1
instead of 2, proving it is a second independent layer; comment stripping removed
with a dead write restored → 1 instead of 2, because the explanatory comment
naming the key reads as a consumer unstripped.

E2E audit: no spec references either key, the ⚔️ Legendary control, or any
onboarding storage key. Full suite **580 files, 9341 passed, 25 skipped, 0
failures**; `tsc --noEmit` clean; lint clean (0 findings across 521 files).

### 26. Two more areas checked, both closed without a change — 2026-09-23

- **`SESSION_AUTOCOMPLETE_SCREENS`** is built from every `CROATIA_POOL` screen
  plus the reference-tagged pool entries, under a comment asserting "graded pool
  entries are never in this set" — a claim the derivation does not enforce.
  Measured: zero overlap between graded `CEFR_EXERCISE_POOL` entries and Croatia
  screens. Three of the 62 Croatia screens DO self-grade (`bureaucratic`,
  `postcard`, `practical_croatian`), so the comment's premise ("no self-grading
  completion") is inaccurate for them — but each is a content page whose quiz is
  a bonus block, filling the IMMERSION slot, so auto-completing on return is the
  right behaviour and only the prose overstates. Declined on the measurement.
- **Badges are CLOSED.** `badgesEarnable.test.ts` already iterates all 65 against
  a maximal learner, checks non-vacuity against an empty one, DERIVES the
  counters from the predicates themselves and asserts every counter a badge
  reads has a writer in `src`. Do not re-sweep this.


### 27. The queue's last two items, and the class behind one of them — 2026-09-23

Both remaining "lower priority" items, verified and removed. **Neither was a
learner-facing defect** — and the first nearly got reported as a severe one.

- **`fbLoadSRS`** — an exported reader of `srs/{uid}` with no caller. Removed as
  redundant: `fbLoadProgress` does that read INLINE and sets `p.sr`, which
  `applyRemoteProgress` then merges, so SRS round-trips correctly.
  **I NEARLY REPORTED THIS AS CROSS-DEVICE SRS DATA LOSS.** I read
  `fbLoadProgress` lines 556–585, stopped at an arbitrary boundary, saw that
  `fbSaveProgress` strips `sr` out of the blob and that nothing calls
  `fbLoadSRS`, and concluded the learner's whole spaced-repetition deck was
  write-only in the cloud. The inline read sits ~60 lines further down, INSIDE
  THE SAME FUNCTION, past where I stopped. This is sweep 20's depth cap in a new
  place: **a partial read of a function is a derivation with a cap on it**, and
  it manufactures findings the same way. One more minute of reading was the
  difference between a false alarm about learner data and a non-finding. The
  warning is now written where the function used to be.
- **`LevelQuiz.onPass`** — an optional prop AppRouter never passes, so
  `if (passed && onPass) onPass()` was unreachable. Harmless: the pass is
  recorded in `stats.levelQuizPasses`, which LearnPath consumes to gate the level
  node and render "Level N Quiz Passed (x/10)", and useSyncManager merges. Dead
  in BOTH directions — no consumer and no producer.

**THE CLASS IS NOW RATCHETED** (`routerOptionalProps.test.ts`). It has bitten
twice: `AlphabetScreen.award` (dead for the life of the screen — the quiz's 20 XP
never paid) and this. `routerAwardProp.test.ts` guards the first BY NAME, so it
could never have found the second: **the survey that declared AlphabetScreen
"the only one" was a survey of one PROP, not of the class.** The new file asks
the general question of every routed component.

**The attribute scanner is the load-bearing part, and the naive one fails in the
dangerous direction.** `<Name([^>]*)>` stops at the first `>` — and AppRouter
passes arrow functions (`setTab={(id: string) => { … }}`), so the capture
truncates and every prop after it reads as "never passed". Measured: that
version reported `HomeTab.authUser` as dead when AppRouter passes it plainly.
Truncation shrinks the passed-set, so it can only ADD false positives — loud
rather than silent, but wrong. The shipped scanner balances braces and skips
strings.

Mutation-verified, three, each confirmed LANDED (one did not land first try —
an indentation mismatch on the anchor — and its green meant nothing):
`LevelQuiz.onPass` restored → 1 fail, named; **`award` stripped from AppRouter's
`AlphabetScreen`, reproducing the historical defect → 1 fail, named**; the naive
`split('>')` scanner → 2 fail, the non-vacuity test catching it.

Suite **581 files, 9345 passed, 25 skipped, 0 failures**; tsc clean; lint clean.
E2E audit: `microquiz-levelquiz-settings.spec.js` covers LevelQuiz and asserts
only the CTA, the mount, the heading and the counter — nothing touches `onPass`.

### 28. Two more derivations, both NEGATIVE — 2026-09-23

- **CustomEvent dispatchers vs listeners.** No defect. `nh:auth-token-error` has
  never had a listener and `apiFetch.ts` documents that deliberately (pinned by
  `syncTelemetry.test.ts`); `nh:debuglog` IS dispatched, by `debugLog.ts` via
  `new Event(...)`, which my CustomEvent-only matcher could not see;
  `nh:request-next-step` has no production dispatcher but its listener works, so
  CLAUDE.md's claim that it "lets any surface summon the prompt" is TRUE — an
  unused extension point, not a dead path. **A receiver with no sender is not a
  dead write**: the capability is real the moment anything dispatches.
- **`curEx` vs `nh_session_started`.** Closed by construction. The launcher sets
  `curEx` equal to the screen id everywhere except `conjpractice:<category>`, and
  `ConjugationSessionDrill` still calls `signalSessionCompleteIfActive('conjpractice')`
  explicitly. No component sets `curEx` independently.

**FOUR OF SIX DERIVATIONS RUN TODAY TOLD ME SOMETHING CONFIDENTLY WRONG**, and
every correction came from reading source, never from the sweep: the dead-key
matcher (wrong in three separate directions), `award?.(…)` (the optional-call
the matcher would not cross), the truncated `fbLoadProgress` read above, and the
`[^>]` attribute scanner. Record the ratio, not just the findings — it is the
argument for shipping the least clever matcher that works and stating its limits
in its own header.


### 29. A consumer with no producer, and the predicate that could never be true — 2026-09-23

Sweep 28's dead-WRITE derivation (a value stored and never read) has a mirror
nobody had run: a value READ that nothing writes. Both are silent, and the
second is worse, because a boolean that is always `false` is indistinguishable
from an honest "no".

**TWO REAL DEFECTS, both on the diaspora path — the audience the product's own
first line names.**

- **`isHeritage` has never been true for anybody.** `/api/conversation`'s system
  prompt carries a substantial authored block behind `{{#if isHeritage}}` —
  frozen emigration-era vocabulary, a simplified case system, dialect mixing,
  "do NOT treat them as a complete beginner". Its only producer was
  `isHeritage: !!stats?.heritage`, and **`stats.heritage` has never had a
  writer**: not `progressSnapshot`, not `applyRemoteProgress`, not
  `mergeStatsFromRemote`, not `statsReducer`, not `mergeSignInStats`, not
  `useSyncManager`, not `App.tsx`, and nothing in the whole of `git log -S`
  (the one `heritage: true` in history is `mergeSignInStats.test.ts` using it as
  an arbitrary remote-only field). The prompt block landed 2026-03-28 and its
  reader a week later, so **for about six months the most audience-specific
  teaching content in the app could not reach a single learner.** The type
  carried `heritage?: boolean` with the comment "wires to AI conversation
  context" — a comment describing an intention, which is the same non-mechanism
  as `wrangler.toml`'s "Shared with scheduled worker above".
- **`nh_heritage_saved` could never sync.** `buildProgressSnapshot` published
  `lsGet('nh_heritage_saved') === '1'`. `WelcomeScreen` — the only local writer —
  stores `'true'`. The only writer of `'1'` is `applyRemoteProgress`, whose input
  is this snapshot's own output. **A closed loop**: the flag could only ever be
  `false` leaving a device, so a learner who recorded their family region kept
  that fact on the one device forever. Exactly the `nh_grammar_track_done` shape
  found earlier, in the block 240 lines above it in the same file.

**THE FIX INVENTS NO CLASSIFICATION, and that mattered more than it looks.**
The tempting move is a new synced `stats.heritage`. But the app ALREADY makes
this inference and already acts on it: `OnboardingTour` served DIASPORA_STEPS on
`userGoal === 'heritage' || userGoal === 'family'`. `src/lib/heritageLearner.ts`
is that same predicate lifted into one place, widened by the stronger signal the
tour ignored (a learner who NAMED their family's Croatian region has stated the
connection outright), and both surfaces now resolve through it. Both inputs are
already in the snapshot, so nothing new syncs and there is no fourth place to
keep in step — the failure mode of the three copies of the CEFR band formula,
which agreed with each other and with nothing that mattered.

`nh_heritage_saved` accepts BOTH values rather than changing the writer:
installs already hold `'true'` and synced devices already hold `'1'`, and the
line immediately above it (`nh_placement_done`) sets that precedent.

**THE DERIVATION IS THE DELIVERABLE** (`snapshotPredicatesReachable.test.ts`).
It asks of every `field: lsGet(k) === 'v'` in the snapshot whether any LOCAL
writer can ever produce that literal, with `applyRemoteProgress` excluded —
count it and every field proves its own reachability from the snapshot's own
output, and the guard passes on precisely the defect it exists to find. Grouping
is by FIELD, not by comparison: `nh_placement_done` reads a legacy key that can
never satisfy its comparison and is fine anyway, because its other alternative
works. A per-comparison guard would fail there and teach everyone to write
exemptions.

**Three things the first run got wrong, all found by controls rather than by
reading:**

- **The positive control is the whole point.** An earlier attempt at this
  derivation (sweep 26) was vacuous — a zero-width `\s*` before a negative
  lookahead let the space after every comma satisfy it, so every literal write
  also registered as an expression and nothing could ever be reported. **It
  passed on a tree where the defect was already confirmed.** The shipped file
  re-derives the real `nh_heritage_saved` defect from a reverted copy, in-test,
  on every run; it cannot go vacuous again without that test saying so.
- **A consuming window swallows the next call.** `[\s\S]{0,80}` after the key
  advances `lastIndex` past 80 characters, and WelcomeScreen's preceding
  `lsSet` sits ~58 characters before the one that mattered — so the writer was
  reported ABSENT. Narrowing the window to 60 hides it on today's tree rather
  than fixing it; the value is captured by lookahead, and a fixture test
  demonstrates the difference at the historical window size instead of
  depending on how close real call sites happen to be.
- **Keys are written through constants.** `EasterScreen` and `streak.ts` write
  via `const KVIZ_DONE_KEY = '…'`, so four Easter fields and
  `nh_used_free_repair` all read as unwritten until single-file `const`
  resolution was added. All five are fine.

**`NO-WRITER` fails the guard, and its message names the matcher first.** Such a
verdict has two causes — a write form the scan does not know (bracket
assignment, template-literal key, imported constant) or a genuinely dead field —
and the first is the likelier, so the failure text says to widen the matcher
before concluding anything. What the scan deliberately cannot prove is a
non-literal second argument (`v.toString()`, `v ? 'true' : 'false'`,
`JSON.stringify(next)`): it is recorded as `<expr>` and CLEARS the field. Three
keys rely on that today and all three are genuinely correct. **The guard may
MISS; it must never MANUFACTURE.**

**The scan for `stats.heritage` was narrowed after measuring it.** A bare
`heritage:` scan reports ten files — a media category, an XP bucket, a screen
tab, a Croatian gloss — and means nothing. The shipped one looks for the
property on a stats-shaped object only, and carries a positive control asserting
it matches the removed expression verbatim AND none of the five innocent uses.

**The AIConversation guard asserts the EFFECT.** A source pin survives the value
being computed correctly and dropped at a callback boundary, which is how the
reading-ledger defect shipped (sweep 23). `ai-conversation.test.tsx` drives a
real conversation start and reads `isHeritage` off the body handed to `_aiPost`.

Mutation-verified, five, each confirmed LANDED before its result was read:
`isHeritage` back to `!!stats?.heritage` → **4 fail** (2 behavioural, 2 source);
`OnboardingTour` back to its inline goal-only predicate → 1 fail;
`nh_heritage_saved` back to `=== '1'` → 2 fail (including the in-test positive
control); the region clause removed from `isHeritageLearner` → 3 fail across two
suites; the consuming-window regex on the fixture → the probe fails.
Two negative controls also ship: one dead alternative must not condemn a
reachable field, and including `applyRemoteProgress` in the writer set must make
the known defect vanish — proving the exclusion is load-bearing.

Suite **583 files, 9370 passed, 25 skipped, 0 failures**; tsc clean; lint clean
(0 Croatian findings across 521 files).

E2E audit: no user-visible string changed. No spec sets `nh_goal` or
`nh_heritage_region`, so the onboarding tour still renders GENERIC_STEPS under
E2E; the specs that match the welcome modal match `Dobrodošli`, which both
variants carry. `isHeritage` appears in no spec.

### 30. Fixing a predicate is not fixing the number beside it — 2026-09-23

Sweep 29 ran the dead-READ derivation over the progress snapshot. Run over the
BADGE COUNTERS it finds a second instance, and this one was left behind by a
sweep that had already named the class **two lines away in the same array**.

**THE DEFECT.** `BadgeStats` declares fifteen numeric counters; **five have no
producer anywhere in the app** — not one increment, ever, in the whole history.
That is deliberate inside `appUtils`, where #678 put each of them in a `||` or
a `Math.max` beside a signal that IS live, so a value already synced onto a
device still counts as a floor. What #678 did not do is look at the surfaces
that DISPLAY those numbers:

- **`AnalyticsScreen`'s "Reading" bar was `s.readingDone || 0` — 0 for every
  learner, always**, while its five neighbours filled. The `s.vc` fix sits TWO
  LINES ABOVE IT IN THE SAME ARRAY, under a comment reading "nothing has ever
  written — so this bar sat empty while its five neighbours filled". The sweep
  that wrote that sentence did not check the next entry.
- **`BadgesScreen`'s `read3` row was frozen at `🔒 0 / 3`** for a learner who
  had genuinely finished one or two passages, then jumped straight to earned.
  The bar and the badge disagreed because they read different fields.

The real signal is the `reading_<title>` marker `ReadingScreen` pushes into
`stats.vs`, which syncs. `readingPassagesDone(s)` is now the ONE expression the
bar, the progress row and the `read3` predicate all use, with `readingDone` kept
as a floor and never as the measurement. It counts DISTINCT markers, so three
opens of one passage is one passage.

**Deliberately NOT `getReadingReps()`** (`lib/readingMetric`): that counts REPS —
repeats and `GradedInputScreen` stories included — is device-local, and
`InsightsTab` already shows it under its own name. Two surfaces disagreeing
about "reading" is the three-copies-of-the-CEFR-formula failure.

**`mediaVisits`, `footballDone`, `dialectDone` and `textingDone` are the same
dead field and are NOT defects** — each has a live primary signal and, crucially,
NO display surface: `amb`, `football`, `dialect` and `texting` are absent from
`BadgesScreen`'s progress map, so `getBadgeProgress` returns null and no row
renders. Checked, not assumed; recorded so the next person does not re-chase
them.

**THE MUTATION THAT SURVIVED IS THE MOST USEFUL THING HERE.** M3 reverted the
`read3` predicate to `(s.readingDone || 0) >= 3` — recreating, verbatim, the
unearnable badge #678 existed to fix — and **all 37 tests passed**. The new
guard's "a legacy counter never stands alone" check asked whether the line
contained `||` or `Math.max`, and `|| 0` is a `||`. **A nullish default is not a
second signal**, and a check that cannot tell them apart passes on exactly the
shape it was written to forbid. `livePartnerOf()` strips `|| 0` / `?? 0` first;
the surviving mutation is now its own positive control, asserted both ways (the
naive test passes the unearnable form, the shipped one does not; the honest
fallback and the `Math.max` still read as live). `badgesEarnable.test.ts` could
not catch it either — its maximal learner sets `readingDone: 1e9`, so the badge
is earnable there whichever field the predicate reads.

**THE PASSTHROUGH EXCLUSION IS THE SAME MECHANISM AS SWEEP 29's.**
`useSyncManager`, `mergeStatsFromRemote`, `mergeSignInStats`, `sanitizeStats`
and `statsReducer` all carry these fields forward — a `Math.max`, a clamp, an
allowlist entry. **A first cut of this derivation reported all 24 `Stats` fields
as produced**, because the count included reads and merges; what found the
defect was checking the five thinnest by hand. `applyRemoteProgress` did this to
the snapshot, and it will do it to the next derivation too: **anything that
copies a field forward lets a dead field prove its own liveness.**

**Guards, and what each is for.** `badgeCountersLive.test.ts` derives LIVE (10)
vs LEGACY (5) from the interface itself and pins the legacy set with each one's
live replacement, in both staleness directions; asserts no surface outside
`appUtils` reads a legacy counter at all; and asserts no legacy counter stands
alone inside it. `badgesScreenProgress.test.tsx` and four new cases in
`analyticsScreen-real-data.test.tsx` assert the RENDERED number — a source pin
survives the right value being computed and dropped on the way to the screen.
The new Analytics cases went into the very file whose header promises "every
number on the Analytics screen must come from a field something actually
writes"; it is now true of the line below the one it was written for.

What the matcher sees: `f: <expr> + 1`, `.f =`, `.f +=`, `.f++`. A producer
written some other way arrives as LEGACY and the failure message says to check
that first. It may MISS a producer; it must never MANUFACTURE one.

Mutation-verified, five, each confirmed LANDED before its result was read:
Analytics reverted → 3 fail; BadgesScreen reverted → 2 (one behavioural, one
scan); the `read3` predicate reverted → 1, **after the guard was hardened; it
survived the first draft**; the legacy floor dropped from the helper → 2; the
passthrough exclusion dropped → 1 (the direct-read scan floods with merge
false positives, which is what the exclusion exists to prevent).

Suite **585 files, 9390 passed, 25 skipped, 0 failures**; tsc clean; lint clean
(0 Croatian findings across 521 files).

E2E audit: no user-visible string changed — only the VALUE of two numbers, and
both can only rise from a permanent 0. No spec asserts a progress string, a bar
value, or the "Reading Pro" badge; the badge specs are loose
`match(/badge|achievement/i)` informational checks.

**One correction to sweep 29's own record.** The #706 check-in predicted the
snapshot-reachability guard would need TWO exemptions (`placement_done`,
`nh_autotts`). It needs NEITHER: grouping by FIELD rather than by comparison
handles the first, and recording a non-literal write as `<expr>` handles the
second. A predicted exemption that measurement dissolves is worth writing down —
an exemption is a place a guard stops looking.

### 31. The re-check that graded a ladder on the questions they get right — 2026-09-23

Sweeps 26–30 exhausted the dead-write and dead-read derivations. This is the
first result from the remaining queue item, INTERACTIONS BETWEEN FEATURES: each
part correct alone, wrong together.

**THE DEFECT, and the code said so itself.** `buildRetentionQueue`'s ordering
comment promises:

> "3. Due re-checks, and ONLY WHOLE ONES: a re-check's verdict advances or
> resets a ladder, so it must be a full MIN_CHECK_ITEMS sample. A truncated one
> would grade a lesson on whatever happened to fit."

It was not true. `push()` silently drops an item already in the queue, and the
CARD step (2) claims items before the re-check (3) — including items of the very
lesson about to be re-checked. So the re-check came out at 5 or 4 of 6 and
`recordRetentionResult` moved the ladder on that.

**THE BIAS RAN ONE WAY, which is what makes it worth fixing rather than
tolerating.** The re-check's sample leads with `missed`, and an item is in
`missed` exactly when it HAS a card. So the items a card stole were the
learner's KNOWN-WEAK ones: the lesson's ladder advanced on the questions they
already get right, at the moment they were weakest. Measured over 20 lessons ×
400 days of a learner who answers everything served: **120 re-checks, 7
truncated, every one 5/6, every one losing the weak item.**

**THE FIX IS A RESERVATION, NOT A SKIP, and the difference is a livelock.**
"Serve the re-check only if nothing took its items" defers the ladder for as
long as a card stays due — and a card the learner keeps failing comes due again
every single day, so that lesson's ladder would freeze permanently for the
learner who most needs it to move. Reserving the lesson's items from the card
step costs nothing: they still answer those items today, first thing, inside the
re-check. **Measured cost: zero.** Re-checks served 120 → 120, cumulative items
580 → 580, card items 500 → 500. Only the truncation changed, 7 → 0.

**THE CUMULATIVE LOOKS LIKE THE SAME HAZARD AND IS NOT — and I shipped the
wrong thing first.** The first version reserved against the cumulative too, on
the reasoning that it also claims before the re-check. Measured over 4,000
generated stores: **a queue holding cumulative items served ZERO re-checks**,
because `CUMULATIVE_ITEMS` (10) of `MAX_QUEUE` (12) leaves fewer than
`MIN_CHECK_ITEMS` and step 3 breaks out before serving anything. So reserving
there could not prevent a truncation; all it did was SHRINK the cumulative on
days a re-check was due — which is precisely the crowding-out the documented
order exists to prevent. Removing it also made the suite **stronger**: with the
cumulative reservation in place, deleting the card reservation failed 2 tests;
without it, **4**. Dead code had been masking the guard — the `SpeakingScreen`
lesson again, in a scheduler.

**TWO OF MY OWN TEST PREMISES WERE WRONG AND THE CODE WAS RIGHT.** A
hand-written scenario asserted the two MOST overdue re-checks are served —
`status.rechecks` sorts ASCENDING by due date, so the EARLIEST are. Another
asserted a re-check is crowded out entirely on a cumulative day, and the
measurement above is what settled it in the opposite direction from where I had
just argued. Both were written as confident assertions about a scheduler I had
read carefully. The hand-built scenarios were replaced by a PROPERTY test over
400 generated stores — "a served re-check has exactly MIN_CHECK_ITEMS items,
whatever else is competing" — which encodes the invariant instead of my model of
it, plus a non-vacuity floor (it must serve >100 re-checks) so it cannot pass by
serving none.

Mutation-verified: the card reservation removed fails **4** tests across two
suites, including the property test and the 400-day trajectory. The two pieces
that could NOT be made to fail were deleted rather than shipped — the cumulative
reservation and a defensive backstop that the reservation makes unreachable.

Suite **586 files, 9395 passed, 25 skipped, 0 failures**; tsc clean; lint clean.
E2E audit: no user-visible string changed and no spec exercises the retention
queue (`lessonreview` appears in no spec; the one `retention` hit in
`checkpoints.spec.js` is a comment about the checkpoint exam's own items).

### Negatives recorded the same day — do not re-run

- **Snapshot fields that sync UP but never come back DOWN: ZERO.** All 83
  top-level fields `buildProgressSnapshot` publishes are consumed by
  `applyRemoteProgress`/`useSyncManager`. The one strict-matcher hit, `savedAt`,
  is a false positive — read at `useSyncManager:447` as `localSnap?.savedAt`, an
  identifier the alternation did not list. POSITIVE CONTROL PASSED: an injected
  `nh_probe_never_restored` made the derivation report exactly 1, so the clean
  result is real and not a vacuous matcher.
- **`Stats` fields outside `BadgeStats` with no producer but displayed: ZERO.**
  Sweep 30's producer regex over all 24. `readingDone`/`mediaVisits` have no
  producer and, after sweep 30, no display read. `levelQuizPasses` flagged and is
  a MATCHER BLIND SPOT, not a finding: `LevelQuiz.tsx:88/93` write it via an
  object spread the increment-shaped regex cannot match. `badgeCountersLive`'s
  own failure message says to check that first, and doing so was the difference
  between a report and a false alarm.
- **Duplicate screens in a daily plan: NOT REACHABLE, and a guard would be
  DECORATIVE.** The invariant IS load-bearing — `markDone` resolves with
  `activities.find(...)`, the FIRST match, so a plan holding one screen twice
  would strand the session at N-1/N forever — and a duplicate is conceivable,
  since `dictation` is the one screen served by two pools
  (`CEFR_EXERCISE_POOL` and `PRODUCTION_POOL`). Measured 1,800 real plans: 0
  duplicates, and not vacuously (dictation is served 31–44 of 300 at B1–C2).
  Then the mechanism was removed — all 11 `usedScreens.has(...)` checks
  neutralised — and it is STILL 0. The property is over-determined by the
  variety passes. A guard that cannot be made to fail by deleting what it
  guards is decorative, so the reasoning was recorded instead.
  **MUTATION LESSON:** the first attempt replaced `!usedScreens.has(x)` with
  `false`, which means "reject every candidate", not "allow duplicates" — the
  opposite of the intent. It LANDED textually and returned 0/300, which reads as
  confirmation. The tell was the test time collapsing from 2.21s to 289ms.
  Confirm a mutation does what you INTENDED, not merely that the text changed.
- **Mid-day CEFR change vs the persisted daily plan: sound.** The 2026-05-21 fix
  (`useDailySession:871-908`) preserves completions by mapping old completed
  SCREENS onto the rebuilt plan. One residual, unchecked: the rebuild effect's
  deps are `[userCefr]` only, so a date rollover while the app is left OPEN does
  not rebuild until a remount. `loadPersistedSession` rejects a stale date on the
  next mount, so this is a tab-left-open-overnight case; nobody has confirmed
  what the learner sees in the meantime.
- **OBSERVATION, not a finding.** Distinct screens served across 300 harness
  plans: A1 8, A2 42, B1 50, B2 21, C1 21, C2 21. Higher levels showing LESS
  variety than B1 is backwards, but the harness runs with EMPTY localStorage
  (so the least-recently-served ordering is deterministic and only random
  tiebreaks vary) and a 3-word `poolWords` set. Re-measure with seeded
  recency/adaptive state before treating it as anything.

### 32. "Your practice says" about a skill the practice never measured — 2026-09-23

NEVER-DO 13, in the module whose own header is the honesty rule. Found by
reading `activityReason.ts`'s claims against what the ledger can actually
support — the same question sweeps 29–31 asked of storage keys, asked of
sentences.

**THE DEFECT.** Two slot reasons told the learner:

> "Listening is the skill your practice says needs the most work."
> "Speaking is the skill your practice says needs the most work."

`weakestReceptiveKind` / `weakestProductionKind` return null only when **BOTH**
skills in the pair are unmeasured. Their `need()` scores an ABSENT or
not-yet-`tested` cell as MAXIMUM — correct for CHOOSING what to serve, since an
unmeasured skill deserves priority, and CLAUDE.md defends that explicitly. It is
not evidence of anything. So with one skill measured and the other never
attempted, they return the one nothing is known about, and the reason claimed a
measurement for it.

**Measured, not argued**: a learner with six reading events at B1 and NO
listening cell in the ledger (`listening=undefined`) is told "Listening is the
skill your practice says needs the most work." Same shape for production:
writing measured strong, speaking never attempted → "Speaking is the skill your
practice says needs the most work." **This is the commonest state a learner
passes through, not a corner** — it fires as soon as exactly one skill of a pair
has been practised.

**THE HONEST PATTERN ALREADY EXISTED IN TWO PLACES IN THIS CODEBASE, and the
two newer functions did not follow it.** `adaptiveReason`, ten lines below the
defect in the same file, distinguishes `!status.seen` ("You haven't practised
the genitive yet.") from a measured accuracy. `buildPlanReason`, in the same
file as the `weakest*Kind` functions, says "your practice says" only for a
TESTED cell and "the least-practiced skill" for an untested one — which claims
nothing. Both were written earlier. The slot reasons were added later and
reached for the claim directly.

**THE FIX** is `skillEvidence(level, skill)` → `'none' | 'untested' | 'tested'`,
and three sentences per reason, mirroring `adaptiveReason` exactly:
no cell → "You haven't practised listening yet." (true, and exactly why the slot
picked it); a cell too thin to be `tested` → the guarantee line, claiming
nothing; a tested cell → the original sentence, now earned.
The `level` parameter is REQUIRED rather than optional on both reason functions:
an optional one silently restores the old lie at any call site that forgets it,
and tsc named both call sites the moment it was added.

**THE EXISTING TEST ENCODED THE DEFECT AND THEN DEFENDED IT.** Inside a describe
block titled `productionReason — no evidence, no claim`, the first case called
`productionReason('speak')` against an EMPTY ledger and asserted the sentence
contained "Speaking". It passed for years because it never looked at the ledger
it was named after. It now seeds real evidence before expecting a claim, and the
no-evidence and too-thin-evidence states are separate assertions.

**A SECOND-ORDER TRAP IN MY OWN FIX**: the file's
`beforeEach(() => localStorage.clear())` lives inside the FIRST describe block
only, so the new blocks inherited the previous test's ledger and the
no-evidence cases silently became evidence cases. Three tests failed for that
reason before each block got its own reset. Coverage borrowed from a
neighbouring block's state is the mock-leakage trap in another form.

What was checked and is CORRECT: `buildPlanReason` (above), and the SLOTS
themselves — `inputSlot` and the production slot should keep following an
unmeasured skill, and do. The defect was only ever in what the learner was
told about why.

Mutation-verified, three, each confirmed LANDED: `productionReason` claiming
unconditionally → 2 fail; `inputSlotReason` claiming unconditionally → 1;
`skillEvidence` treating an untested cell as tested → 1.

Suite **586 files, 9401 passed, 25 skipped, 0 failures**; tsc clean; lint clean.
E2E audit: no spec asserts any reason string (`grep` over `e2e/` for "practice
says", "haven't practised" and "needs the most work" returns nothing).

### One more negative recorded the same day — do not re-run

- **Every pool entry's screen exists in the router: 376 of 376.**
  `CEFR_EXERCISE_POOL` (305) + `PRODUCTION_POOL` (9) + `CROATIA_POOL` (62),
  each entry's `screen` (first token, for parameterised routes like
  `region_* tier essayKey`) matched as a quoted key in `AppRouter.tsx`.
  POSITIVE CONTROL PASSED: an injected `definitely_not_a_real_screen_key` was
  reported, and only it. STATED LIMIT: this proves the KEY EXISTS, not that the
  router renders that screen for it — a key appearing only in a comment would
  pass. It can MISS, never MANUFACTURE. `couplingClearingPath.test.ts` already
  does the deeper router + import-graph walk for the categories it covers.

### 33. The retention reason described a sitting it could not deliver — 2026-09-23

Same seam as sweep 32 — CLAIMS vs EVIDENCE, every sentence the app shows a
learner checked against what it measured — and the next file along in the same
module. **Smaller than sweep 32, and worth saying so plainly: the numbers here
were real.** What was wrong was what the sentence implied about them.

**THE DEFECT.** `retentionSlot` passes `retentionStatus`'s DUE counts, which are
unbounded. `buildRetentionQueue` serves at most `MAX_RECHECKS_PER_QUEUE` (2)
re-checks and `MAX_CARDS_PER_QUEUE` (4) cards inside `MAX_QUEUE` (12). The
combined branch read:

> "Time to re-check 7 lessons, plus 30 questions you missed before."

for a sitting containing two re-checks and four cards. Measured with the real
scheduler over a 30-lesson learner across 400 days: the line **overstated the
cards on 135 of 273 sittings (worst by 28) and the re-checks on 77 (worst by
5)** — about half of all retention sittings.

**WHY IT IS A DEFECT AND ALSO WHY IT IS A SMALL ONE.** The counts are genuinely
due; nothing is fabricated, unlike the "your practice says" claim sweep 32
removed. But "Time to re-check 7 lessons" reads as a description of what the
learner is about to be given, and the honesty rule's own test is whether the
learner can catch it — they can, by counting what they get. The other three
branches were already phrased as a backlog ("N lessons you passed are due for a
retention check", "N questions you missed before are due again") and were
correct; only the combined branch implied the sitting.

**THE FIX IS THE WORDING, NOT THE ARITHMETIC.** Every counted branch now says
what is DUE, which is exactly what `retentionStatus` measures. Deliberately NOT
"what the sitting will serve": the slot holds only the status, not the lesson
bodies `buildRetentionQueue` needs, and even a cap-aware bound would still
overstate whenever re-checks crowd cards out. A true statement about the backlog
beats an estimate of the sitting.

**THE BRANCH WAS ENTIRELY UNGUARDED.** The only existing assertion anywhere was
`retentionWiring`'s loose `/retention check/i`, which matches a different
branch. The new guard asserts, for every counted shape, that the line says
"due", that it does not open with "Time to", that it states the numbers it was
given rather than inventing any, that the weekly mix claims no count at all, and
the exact singular and plural forms.

Mutation-verified: restoring the sitting-implying wording fails 3 tests.

**A PROCESS SLIP WORTH RECORDING.** I undid that mutation with
`git checkout src/lib/activityReason.ts`, which restored the COMMITTED file —
sweep 32's — and silently destroyed the uncommitted sweep-33 edit in the same
file. Caught immediately by grepping for the new wording, and re-applied. Undo a
mutation from a scratchpad copy; `git checkout` on a file holding uncommitted
work is not an undo, it is a revert to the last commit.

Suite **586 files, 9406 passed, 25 skipped, 0 failures**; tsc clean; lint clean.
E2E audit: no spec asserts any retention reason string.

### 34. "Just finished" was a claim about time that nothing checked — 2026-09-23

Third from the CLAIMS vs EVIDENCE seam, and the smallest of the three. Sweep 32
removed a fabricated measurement; sweep 33 removed an implication about a
sitting; this removes a claim about WHEN.

**THE DEFECT.** The teach → practice slot's line read:

> "You just finished a lesson on the genitive — here's where you use it."

A taught-queue entry lives `TAUGHT_TTL_DAYS` (14) and exists **precisely
because the learner has not practised what it taught**. So any gap in usage
makes it stale: the entry is still pending on day 9, the slot still claims its
place — correctly, that is the coupling working — and the line still said "just
finished". **A learner returning after a week was told they had just finished a
lesson they finished last Tuesday**, which is the worst audience for that
sentence: someone who has been away.

**THE APP HELD THE AGE THE WHOLE TIME.** The entry carries `at`;
`pendingTaughtCategories` maps it away (`.map((e) => e.c)`), so by the time the
reason was built the timestamp was gone. Same shape as sweeps 32 and 33: the
evidence existed and the sentence was written without consulting it.

**THE FIX** is `taughtAgeDays(category, now)` — additive, changing no existing
signature — plus a wording branch. `JUST_FINISHED_MAX_AGE_DAYS` is 1, and it is
NOT a tuning knob: "just" in English means today or yesterday, and a lesson
finished five days ago was not just finished whatever number is chosen. Past
the window the line drops the claim and says the part that is true and is
actually why the slot is here: "You finished a lesson on the genitive and
haven't practised it yet — here's where you use it."

**A null age gets the sober line, never the stronger one.** `taughtAgeDays`
returns null for a category nothing queued, for an EXPIRED entry (it filters
through the same `fresh()` as `pendingTaughtCategories`, so the two can never
disagree about what is pending), and after practising clears the coupling.
Treating null as fresh would restore the defect for exactly the cases the app
knows least about — pinned by its own mutation.

Mutation-verified, three, each confirmed LANDED: `taughtReason` claiming "just"
unconditionally → 2 fail; a null age treated as fresh → 1; `taughtAgeDays`
skipping the expiry filter → 1.

Suite **586 files, 9415 passed, 25 skipped, 0 failures**; tsc clean; lint clean.
E2E audit: no spec asserts the taught-slot reason string.

**THE SEAM HAS NOW PRODUCED THREE IN A ROW AND IS NOT EXHAUSTED.** What is left
in it, unchecked: `reviewReason(dueCount)` — is the count the caller passes the
SERVABLE queue length or the raw due count? (the same shape sweep 33 fixed); the
Me-tab surfaces (InsightsTab, FluencySnapshot, LessonAcquisitionCard, the concept
map), each of which renders a number or a verdict; and the NextStepPrompt /
NextUpCard text. The method that keeps working: read the sentence, find what it
asserts, then ask the code whether it can support that — not whether the number
is real, but whether the CLAIM is.

### 35. The fluency snapshot named a lightest skill it could not measure — 2026-09-23 — **3 UNCOUNTED ACTIVITIES + 2 QUEST MISLABELS, FIXED**

Fourth from the CLAIMS vs EVIDENCE seam, taken into the Me tab as sweep 34 said
to. The first three removed a claim each; this one is about a claim that is
right in form and wrong in the input, which is the harder kind to see.

**THE SENTENCE.** `FluencySnapshot` (Me → Insights) draws three bars and then
says:

> "This week your lightest skill is Reading — give it some reps."

Nothing about that is fabricated: the three counters are real, and the sentence
reports the smallest of them. **A COMPARISON IS ONLY AS HONEST AS THE LEAST
INSTRUMENTED OF THE THINGS COMPARED**, and that had never been checked.

**WHAT THE COUNTERS ACTUALLY COUNT.** `useAward` records a listening or reading
rep off `award`'s third argument — an activityType string each screen chooses
for itself. Three screens chose one that is not their modality, and the app
contradicted itself in writing to do it:

| screen | pool entry | awarded | the contradiction |
| --- | --- | --- | --- |
| `VideoLessonScreen` | `category: 'listening'` | `'lesson'` | also `markQuest('speak')` — on a screen with no microphone |
| `StoryModeScreen` | `category: 'reading'` | `'story'` | `markQuest('reading')` **on the next line** |
| `AIStoryScreen` | `category: 'reading'` | `'story'` | — |

Measured with a census over the real pool and the real router: listening
recorded from **3 of its 4** session-servable entries, reading from **1 of its
3**. So a learner whose reading is AI stories saw Reading sit at zero and was
told, week after week, to go and read — while doing exactly that. NEVER-DO 13
reached not by inventing a number but by comparing two that were not
comparable.

**THE FIX IS A DIRECT RECORDER, NOT A RETYPED AWARD.** `recordReadingRep()` /
`recordListeningRep()` at each screen's genuine completion point — the
`writing_guided` / `relpron` shape. Retyping the activityType would have been
one character per screen and would ALSO have changed `/api/award`'s server-side
XP cap (`story` 100 → `reading` 80, `lesson` 210 → `listening` 80) and the XP
audit records. The award semantics are not what is wrong here.

**A COUNTER THAT CAN BE INFLATED IS THE SAME LIE AS ONE THAT STANDS STILL**, so
`AIStoryScreen`'s Done button had to become a one-shot first. It held
`const [, setDone] = useState(false)` — **a state setter whose value is
discarded at the destructure**, read by no branch anywhere. It looked exactly
like a completion latch. `goBack` is behind a 400 ms timeout and the button was
never disabled, so the award was already double-tappable and survived only
because the XP cooldown absorbs the second one; the rep is recorded ABOVE that
gate by design and would not have been.

**THE SPEAK QUEST WAS BEING CLEARED BY SCREENS WITH NO MICROPHONE**, which is
the same finding pointed at the quest ledger rather than the fluency bars. The
Speak Quest reads "Complete 1 speaking exercise", pays 25 XP, and a second tick
the same day auto-promotes `speak2` for 50 more. `VideoLessonScreen` marked it
(the 2026-08-14 mislabel: the listening screens were moved off the speak quest
that day, correctly, and this one was not). Sweeping the class found a second:
`SlangScreen`, a multiple-choice slang quiz that awards `'vocabulary'`, marked
`'speak'` **outside its own one-shot guard**, so re-finishing ticked it again
and paid the tier-2 quest for one quiz. Both now mark what they award.

**THE GUARD FOR IT WAS MEASURED BEFORE IT WAS WRITTEN, and the obvious rule was
the wrong rule twice.** "A quest must match the award's activityType" was
dry-run first: **6 hits across 648 component files**, four of them honest
dual-purpose screens (news is culture AND reading; a tutor conversation does
correct grammar). "No microphone → no speak quest" was dry-run next: **2 hits,
one a false positive** — `DialogueSim` has no recogniser and legitimately marks
it, because its production path is typed and the app's typed-production
fallback counts identically. The shipped rule is *speech input path OR its own
award calls the work `'speaking'`*: exactly the two defects, nothing else. The
123-false-positive lesson, applied by dry run rather than by memory.

**THE FIRST DRAFT OF THE MAIN GUARD WAS DECORATIVE, AND MUTATION SAID SO
IMMEDIATELY.** `inputRepsRecorded` walks a screen's local imports — it has to,
because `ListeningComprehensionScreen` keeps its whole completion in
`listening/useListeningQuiz` — and `lib/listeningMetric` DECLARES
`recordListeningRep`. So every screen that merely IMPORTED the recorder matched
the call test: deleting the call from `VideoLessonScreen` left all 25 tests
green. **This is `couplingClearingPath`'s `recordScreenPractised` blind spot,
written up in CLAUDE.md, reproduced exactly** — and it was not caught by
remembering the write-up, it was caught by running the mutation. Declarations
are stripped now, and both strippers are driven by their own probes rather than
trusted to the corpus.

**Two guards, kept deliberately side by side**: `inputRepsRecorded.test.ts`
derives its subject from `CEFR_EXERCISE_POOL` and asks whether a declared
modality records its own rep (with `reference: true` exempt — a browse surface
has no graded finish — checked in BOTH staleness directions);
`speakQuestEarned.test.ts` sweeps all of `src` and asks whether a claimant of
the speak quest can hear. Neither restates the other's subject and they fail
with different sentences. The PLUMBING both depend on — that the counter really
keys off activityType, and is read ABOVE the XP-cooldown gate — is asserted as
an EFFECT against the real `useAward` and the real metric modules in
`useAward-coverage.test.ts`, because a source walk proves a path exists, not
that it runs.

Mutation-verified, **ten, each confirmed LANDED**: `recordListeningRep` removed
from VideoLesson → 1 fail (and SURVIVED before the declaration strip — the
finding above); both `recordReadingRep` removed from StoryMode → 1; from
AIStory → 1; the import walk removed → 1 (ListeningComprehension); the
exemption row deleted → 1; `grammarreader` made non-reference → 2; comment
stripping made identity → 2 in one file and 3 in the other, **both in the
DANGEROUS direction** (the prose in which these very screens discuss the
mislabel reads as a violation, and `lib/quests.ts` gets dragged in); the reading
rep keyed on `'story'` → 2; the rep moved BELOW the cooldown gate → 1; the
`doneRef` one-shot removed → 1; SlangScreen back to `'speak'` → 1; VideoLesson
back to `'speak'` → 2.

**ONE MUTATION SURVIVED AND IS REPORTED AS SUCH**: walking only the screen's own
file, in `speakQuestEarned`, leaves all 7 green — every current claimant has its
recogniser inline or takes the `award('speaking')` branch. The walk is kept
because the semantics are right (this repo decomposes screens into hooks), not
because it is catching something, and the file says so.

Suite: see below. tsc clean; lint clean. E2E audit: greps run for every
user-visible string on the changed controls ("Done — +15 XP ✓", "New Story",
the slang/video/story screen names) and for every quest name and quest
localStorage key — **no spec asserts a quest, a rep counter, or any label this
touched**; no user-visible string changed.

**WHAT THIS LEAVES IN THE SEAM.** `reviewReason(dueCount)`'s caller (servable vs
raw due — sweep 33's shape, still unchecked); `LessonAcquisitionCard` and
`ConceptMapCard`'s sentences; `NextStepPrompt` / `NextUpCard` text. And a new
question this sweep raises rather than answers: the three rep counters are
DEVICE-LOCAL (only production syncs, via `stats.pr`), so the snapshot's
comparison is per-device by construction — a learner who reads on their phone
and listens on their laptop is told something true of neither. That is a
design decision to take, not a defect to fix quietly.

### 36. "Nothing measured" rendered as "nothing wrong" — 2026-09-23 — **2 REAL DEFECTS, FIXED**

Fifth from the CLAIMS vs EVIDENCE seam, and a **direction NEVER-DO 13's usual
statement does not cover**. The rule is normally read as "do not display a
number the app did not measure". Neither defect here displays a number. They
turn an EMPTY MEASUREMENT into a POSITIVE VERDICT — which is the same lie with
the arithmetic removed, and it is harder to see precisely because there is no
figure to check.

**DEFECT 1 — `CroatianErrorInsights`: "🏆 No weak topics — great work!"**
rendered whenever `getWeakTopics()` returned `[]`. That function returns `[]`
for **four** states and the caller could not tell them apart: no data at all;
data below the 3-attempt bar; data gone stale past `STALE_MS` (30 days); and a
learner who is genuinely strong. Only the last earns the sentence.

The card **contradicted itself in the same box**: the line directly under the
trophy read "Complete more exercises across different topics to see where you
need improvement." Congratulation on top in bold, an admission that nothing had
been measured underneath, neither aware of the other.

**Who actually saw it, stated precisely rather than dramatically**: the Weak
Topics tab is only offered when there are tracked error patterns or weak topics,
so a completely fresh learner cannot reach it. The reachable cases are a learner
who has produced writing or speech (which fills `nh_learner_errors`) but never
done a drill (which is what fills `topic_accuracy`) — and, worse, **a returning
learner whose drill data has all gone stale**, who is handed a trophy on the
evidence of a month's absence. The staleness reset exists so old struggles do
not haunt the panel; it silently produced a commendation instead.

`weakTopicEvidence()` reports `{ measured, thin, stale }` and applies the SAME
bar as the weak list — `MIN_TOPIC_ATTEMPTS` is now a named constant used by
both, because a denominator computed with a different threshold from the
numerator is the exact defect the function exists to prevent (mutation N2 pins
it: counting raw rows fails 5).

**DEFECT 2 — `LessonAcquisitionCard`: "Every lesson you have taken passed first
time."** `report.measured` counts lessons with a taught attempt in a store that
began recording on 2026-09-07, so **every learner who already had a history
started at zero**. Take one lesson, pass it, and the card announced a perfect
record over everything it cannot see. The summary line ONE ROW ABOVE states its
own denominator ("N of M lessons passed their check on the first reading") and
was honest from the day it shipped; this line named no denominator and
inherited none. It now defers to that same M — "None of them needed a second
go." **The scope was already on the card; the sentence just refused to use
it.**

**THE TEST THAT DEFENDED THE OTHER HALF OF SWEEP 35.** The full-suite run for
sweep 35 came back **1 failed**, and it was `slang-screen.test.tsx`'s
`quiz "Done" button calls markQuest("speak")` — a test that read the code and
wrote it down. Third time this session (the `vs`-as-completion-marker comment in
sweep 22, the "no evidence, no claim" block in sweep 32, this). It now asserts
the quest matches what the screen awards, that `speak` is NOT marked, and that a
second Done does not tick it twice.

Mutation-verified, three, each confirmed LANDED: the empty state congratulating
unconditionally → 4 fail (including the positive control — the unconditional
string carries no count, so "measured and strong DOES earn it" fails too);
`weakTopicEvidence` counting raw rows → 5; the all-clear line back to "Every
lesson you have taken" → 1.

tsc clean; lint clean. E2E audit: greps run for every user-visible string
changed ("No weak topics", "great work", "Complete more exercises", "Every
lesson you have taken", "passed first time") and for the tab label and both
test ids — **no spec references any of them**.

**WHAT THE CLASS LEAVES OPEN.** `FlashcardEmptyState` and `ReviewScreen` both
say "All caught up! 🎉" for an empty SRS queue, which is the same shape — but
"No more cards due right now" is literally true of a learner with no deck, so
it is a weaker case and was left alone deliberately rather than swept in. Say
which ones were looked at and not changed, or the next person re-derives the
same list.

### 37. The daily session never noticed midnight — 2026-09-23 — **1 REAL DEFECT, FIXED**

From the INTERACTIONS list rather than the claims seam — the queue's own
"retention ladder vs a date rollover with the app left open" item — and it
turned out to be the daily session, not the ladder.

**THE DEFECT.** `useDailySession`'s rebuild effect has always computed
`isNewDay` and has always known what to do with it. Its dependency array was
`[userCefr]`, so **nothing ever re-ran it for a date change**: the check fired
on mount and never again. Reproduced before fixing — advance the clock past
midnight, fire `visibilitychange`, `session.date` is still yesterday's.

**THIS IS NOT AN EDGE CASE ON A PWA, IT IS THE NORMAL USAGE PATTERN.** The app
sits backgrounded on a phone, midnight passes, the learner brings it back — and
Today's Session shows YESTERDAY'S plan with yesterday's completions. A learner
who finished last night is told they have finished today. It is the CLAIMS vs
EVIDENCE seam reached from the interactions side: nothing is invented, the card
simply answers "what have you done today?" with data about a different day.

**THE MECHANISM WAS ALREADY ON THE SAME SCREEN.** `HomeTab` has `checkDay` on
`visibilitychange`, which is exactly this problem solved — for the word and
phrase of the day. The session sat beside it, unwired, for as long as both
existed. Same shape as the badge that followed the certified level while two
other badges did not: the right answer present in the file, used for one
consumer.

**THE FIX** is a `dayStamp` the hook holds and the rebuild effect depends on,
moved by `visibilitychange` / `focus` / `pageshow` — the wake-from-sleep trio
`useSyncManager` already listens on — and only when the date actually changed.

**DELIBERATELY NOT A TIMER, and the residual gap is recorded rather than
hidden**: a learner LOOKING at the app as midnight passes keeps yesterday's
plan until they switch away and back. A timer would close that and would also
reset the plan under their hands mid-session — a worse failure than a short
delay, and one they cannot explain. The app coming back is the honest moment to
roll over.

**A MUTATION SURVIVED AND THE TEST'S OWN REASONING WAS WRONG.** O2 replaced the
listener's `prev === localDateStr()` check with an unconditional stamp and all
six tests stayed green — because the EFFECT returns early by itself when
neither the day nor the level moved. The test asserting "a resume on the same
day rebuilds nothing" carried a comment crediting the listener's guard, and was
passing for the effect's reason. So the guard buys a RE-RENDER, not a rebuild;
a seventh test now counts renders across a same-day resume, and O2 fails it.
**Assert what the guard actually does, or the guard is decorative** — this is
the fourth time this session a test has been passing for a reason other than
the one written above it.

Mutation-verified, three, each confirmed LANDED: `dayStamp` removed from the
deps (the original bug) → 5 fail; the listener stamping unconditionally → 1
(after the fix above; **0 before it**, reported); only `visibilitychange`
listened for → 2.

tsc clean; lint clean. E2E audit: no user-visible string changed, and the three
listeners cannot fire a rebuild on an unchanged date, so no spec's tab-switch
or reload behaviour moves.

**WHAT THIS DOES NOT CLOSE.** The other half of that queue item — a
`verification_fail` demotion against content already unlocked and against a
plan built at the higher level — is still unchecked. The plan half is now
partly answered (the rebuild effect keys on `userCefr`, so a level change does
invalidate it), but WHICH level string that is, and whether a demotion moves
it, was not established here.

### 38. One synced counter beside two device-local ones — 2026-09-23 — **1 REAL DEFECT, FIXED**

The follow-on sweep 35 raised and deliberately did not take: `FluencySnapshot`
prints three LIFETIME totals in one column and invites the learner to compare
them, and **only one of them was synced.**

`stats.pr` has ridden the progress blob since production reps shipped.
`listeningMetric` and `readingMetric` were written device-local, each carrying
a comment calling cross-device sync "a scoped follow-up identical to the
production-rep one" and deferring it. So a learner who reads on a laptop and
listens on a phone saw two of the three totals start again from zero on each
device, beside one that did not — in a row of numbers whose entire purpose is
the comparison. The WEEK column was always consistent (all three device-local);
it was the TOTALS that disagreed about what they counted.

This was sanctioned debt, not an open design question — both module headers
state the intended follow-up and the exact four-point shape of it — so
implementing it is finishing a documented job rather than inventing a policy.

**WHERE THE RECONCILIATION LIVES IS THE LOAD-BEARING CHOICE.**
`recordProductionRep`'s caller also does `setStats({ pr: pr + 1 })` AT THE
COUNTING SITE, which works because there is exactly one such site. Listening and
reading have several — `useAward`'s activityType path, plus the three direct
recorders sweep 35 added to the screens whose award type is not their modality.
Reconciling at each site would mean remembering all of them, and the next one
added. `buildProgressSnapshot` sees every site BY CONSTRUCTION, because it reads
the buckets those sites write, and it is already the documented single source of
truth for what gets persisted. It does the same `Math.max` reconciliation it has
always done for `str`, three lines up.

**THE FINDING INSIDE THE FINDING: A MONOTONIC COUNTER HAS FOUR MERGE POINTS,
NOT ONE.** The first draft added `lr`/`rr` to `mergeStatsFromRemote` and
stopped — which is the "instrument one path and describe the endpoint as
covered" rule, one counter later, on the day it was written down for `ttsFetch`.
`pr` is Math.max-merged in **four** places: `mergeStatsFromRemote` (React
state), `useSyncManager` (the local-cache write-back), and TWICE in
`firebase.ts` (the load-side backstop and the delta-apply path). Three are
spread-plus-override, so **a field that is not LISTED is carried by the spread
and silently not protected** — a lower remote wins. `pr` itself learned this the
hard way; its own comment in `firebase.ts` records it as "the one
`_DELTA_NUMERIC` field that was missing its load-side backstop, causing the real
fluency signal to regress on a cache-cold read."

The guard is DERIVED rather than a list of four: for each file that guards `pr`,
it counts `pr: Math.max(` and requires the same count for `lr` and `rr`. So a
fifth merge point added next month is covered the moment someone protects `pr`
in it, and a sixth counter cannot be added to one file and forgotten in three.
It also asserts the subject is non-empty (≥ 4 guarded sites) — an `it.each` over
an empty list registers no tests.

**`_DELTA_NUMERIC` was deliberately NOT extended**, and the reason is the
decorative-guard rule: nothing delta-writes these two (that is the whole point
of reconciling at snapshot time), so adding them would be an entry that guards
nothing while implying a write path exists.

**An absent field reads as 0 and can never zero the other side.** Both are
optional because they arrived after the type; the snapshot only re-spreads when
a value actually moves, so a learner who has never listened writes no key rather
than a zero — the same shape `str` has always had. The merge test pins that an
older blob carrying neither cannot reset what this device holds.

Mutation-verified, seven, each confirmed LANDED: the snapshot no longer
reconciling → 1 fail; the snapshot taking the local bucket outright (able to
LOWER a synced value) → 1; the merge preferring remote → 2; the card ignoring
the synced totals → 1; sanitize dropping the fields → 2; `lr`/`rr` removed from
ONE of the two `firebase.ts` merge points (the original omission) → 1; removed
from `useSyncManager` → 1.

E2E audit: no user-visible string changed — the card's numbers can only go UP on
a device behind its synced total, and every E2E fixture is single-device, so no
spec's rendered totals move.

**WHY PRODUCTION WAS THE ONE THAT DID NOT DRIFT, which is the reusable part.**
Checked while here: `PRODUCTION_SCREEN_IDS` is `new Set(PRODUCTION_POOL.map(p =>
p.screen))` — DERIVED from the pool, so a production screen added tomorrow is
counted the day it is added, and no per-screen decision is involved. The
listening and reading counters key on a STRING EACH SCREEN CHOOSES
(`award`'s activityType), and both drifted — three screens between them, found
by sweep 35's census. Same product, same week, same three bars: the derived one
was right and the two hand-keyed ones were not. **When a counter's membership
test is a per-site decision, it decays at the rate new sites are added**; when
it is derived from the list that already defines membership, it cannot.


### 39. Buttons that went nowhere — 2026-09-23 — **4 DEAD TARGETS + 1 HALF-DEAD, FIXED**

The owner's standing line is *"if I ever click on anything and it doesn't work
it's over."* This is the sweep that asked it as a question with a derivation
behind it, and the answer was not zero.

**THERE IS NO CATCH-ALL IN `AppRouter`.** It is one long chain of
`currentScreen === '<id>' && (…)`, so an id no branch matches renders
**nothing** — a blank content area under the tab bar, with no error, no
`ScreenErrorBoundary` and nothing in Sentry. A dead navigation target is
therefore the QUIETEST possible defect: it looks exactly like a screen still
loading, which is why none of these was ever reported.

**Four dead values across the whole of `src`**, each reachable by tapping a
visible control:

- **`HeritageModeScreen`** — `aspect_drill`, `tivi`, `formal_register`, against
  the real `aspectdrill`, `tivicompare`, `formalregister`. Three cards in the
  Heritage Mode menu, three blank pages. Not a routing decision gone wrong: a
  spelling, in a table nothing checked.
- **`CroatianErrorInsights`** — `'quiz'`, which is not a route at all (the
  multiple-choice game is `mcgame`, and it is payload-gated besides). It was
  two `ERROR_META` entries, **the DEFAULT meta for every unrecognised error
  pattern**, two rows of the weak-topic map, AND that map's `|| 'quiz'`
  fallback.

**THE WEAK-TOPIC NUMBER IS THE ONE WORTH REMEMBERING.** Measured against the
topic ids `recordTopicResult` is actually called with in production — aspect,
cases, future_tense, grammar, listening, past_tense, phonology, production,
speaking, vocab, vocabulary, food — **nine of twelve resolved to `'quiz'`.** So
the Drill button on a weak-topic card, on the Me tab, did nothing for three
quarters of the topics it could appear on. Now: **7 resolve to a real screen, 5
render no button, 0 dead.**

**THE FIX ROUTES THROUGH THE COUPLING'S OWN MAPS**, which is the rule
`ConceptMapCard` already follows: `CATEGORY_SCREEN_MAP` then
`CATEGORY_EASIER_SCREEN`, on the id normalised from the topic store's
underscores to the category files' hyphens (`past_tense` → `past-tense`). The
card's hand-written substring table survives only for ids that are not
categories. **`null` means NO BUTTON** — the coupling's own rule that a wrong
drill is worse than no drill, which a default can never honour. `production` is
deliberately left unresolved and the reason is recorded: it covers speaking AND
writing, and picking one would be exactly the guess `|| 'quiz'` was.

**THE HALF-DEAD ONE IS THE SUBTLER FINDING: A ROUTED TARGET IS NOT A WORKING
ONE.** `FluencySnapshot`'s Speaking & Writing nudge pointed at `'speaking'`,
which HAS a branch — and that branch renders `ScreenGuard` ("we couldn't restore
your speaking practice") unless a launcher set `sw` first. The card navigates
with a plain `setScr` and has no launcher. So the nudge landed on a recovery
screen; and because production is priority 0 in the tiebreak, **that is the
nudge shown whenever the week is empty**, which is the card's commonest state.
It now points at `speaking_guided`: self-initialising, no microphone needed,
A1+, rubric-graded, and in `PRODUCTION_POOL` — so finishing it increments the
very bar that sent the learner there.

**WHAT THE GUARD DOES AND DOES NOT COVER, stated rather than implied.**
`navTargetsRoute.test.ts` derives `ROUTED` from AppRouter and requires every
`screen|scr|go|practiceScreen: '…'` field and every literal `setScr('…')` in
`src` to name one. It does NOT police payload-gated targets: **31 navigations in
`src` name one, and almost all are legitimate** — the launcher sets the payload
and then navigates — so a blanket rule would be 31 false positives, the lint's
123-false-positive lesson in a new place. The one real instance is pinned where
the launcher question has a definite answer, in `fluencySnapshot.test.tsx`,
against a GATED set derived from the same router source.

Mutation-verified, four, each confirmed LANDED: one Heritage id back to its dead
spelling → 1 fail; the `|| 'quiz'` fallback restored → 3; the coupling lookup
removed so only the legacy table answers → 2; the speaking nudge back to the
gated route → 2.

tsc clean; lint clean. E2E audit: no label changed — only the ids behind them.
`"Aspect Drill"` does appear in four specs, and all four reach it through the
Practice tab (`Kovačeva soba → Glagoli`), not the Heritage Mode menu; the
`speaking` route's own specs seed `currentScreen` themselves and are untouched;
no spec references `"Weak Topics"`, `"Drill →"` or `"lightest skill"`.

**WHAT THIS LEAVES OPEN.** A catch-all branch in `AppRouter` — so an unknown id
can never again be a silent blank page — was considered and NOT done: it needs a
complete set of valid ids at RUNTIME, and the only honest source for that is the
router's own source, which a runtime constant would restate and then decay from.
The test is the mechanism instead. If a runtime net is wanted later, derive the
set at build time; do not hand-list it.

### Negatives recorded the same day — do not re-run

- **Every literal `setScr('…')` in `src` routes** — 50 distinct targets, 0 dead
  (before the fixes above, which were all in DATA TABLES rather than literal
  calls). Positive control run: a made-up id is reported.
- **The component→component dead-optional-prop class is essentially clean.**
  `routerOptionalProps.test.ts` covers ROUTER → screen; the generalisation
  (any parent → any child, over all of `src`) was censused and produced **three
  flags, two of which are my scanner's false positives** — `PhonemeGuideCard`'s
  `contrast` is a field on the `PHONEME_GUIDES` DATA type, not a prop, and all
  8 guides carry it; `MicPermissionDeniedExplainer`'s `onUseWriting` is
  documented as hidden-when-absent and none of its ten mount sites is a screen
  with a writing analog. **Scoping is what made the census usable**: an
  unscoped version that read every `foo?:` line in a file reported 50, almost
  all of them API response shapes. Scope to a `*Props*` interface or the
  default export's own parameter type, as `routerOptionalProps` does.
- **`MediaCard.goalTag` is genuinely dead** — declared, branched on
  (`{goalTag && <GoalTag …>}`), and its single mount site in `ImmersionHub`
  does not pass it, so that badge has never rendered. Left alone deliberately:
  it is decorative, not a broken click, and the two ways to resolve it are
  "delete an extension point" and "add a feature", neither of which this sweep
  is. Recorded so the next person does not re-derive it.
- **THE STRAND CLASS IS CLEAN: 258 session-servable screens, 0 that cannot
  signal completion.** Every screen reachable from `SESSION_SCREEN_IDS`
  (`CATEGORY_SCREEN_MAP` ∪ `CEFR_EXERCISE_POOL` ∪ `CROATIA_POOL` ∪
  `PRODUCTION_POOL` ∪ review/lessonreview) resolves through the real router to a
  component whose import graph reaches `completeExercise`,
  `signalSessionCompleteIfActive` or `award`; the 74 skipped are Croatia and
  `reference: true` entries, which complete on return by design.
  **THREE BUGS IN MY OWN CENSUS HAD TO BE FIXED FIRST, and each produced a
  confident wrong answer**: (1) `FILES` held paths relative to `src` while
  `path.resolve` returned absolute ones, so NO import ever resolved and **258 of
  258 screens were flagged**; (2) the call matcher was `\baward\s*\(`, which
  does not match `award?.(…)` — the optional-call form `AlkaScreen` and
  `RoleplayScreen` use — two more false positives; (3) the `reference: true`
  detector was a 400-character sliding window, so a PRECEDING entry's `screen:`
  matched the NEXT entry's `reference: true` and the right entry was skipped
  past, which is how `opposites` (a reference entry) came to be the last
  survivor. Parse entry BLOCKS, never a window. A census that reports 258
  problems and a census that reports none look equally authoritative from the
  outside; only driving a known-good case tells them apart.
- **A demotion against a daily plan built at the higher level rebuilds
  correctly.** `HomeTab` computes `userCefr = getContentUnlockLevel(getUserCefr(…))`
  as a plain expression in the render body — not memoised — and
  `getContentUnlockLevel` reads the certification store on every call, so a
  `verification_fail` rollback changes it on the next render and the
  `[userCefr, dayStamp]` effect rebuilds the plan, preserving completions by
  screen match. The content-unlock drop that comes with it is the honest-rollback
  directive working as written, not a defect.

### 40. The two quests whose text claimed a number — 2026-09-23 — **1 REAL DEFECT, FIXED**

The claims seam pointed at the quest ledger, which is a surface a learner reads
EVERY day on Home and which, since 2026-09-14, pays real XP.

**Every tier-1 daily quest reads "Complete 1 …" — which a single `markQuest`
call is an honest record of. Two do not:**

| quest | text | XP |
| --- | --- | --- |
| `master` | "Review 5+ SRS words" | 30 |
| `master2` | "Review 15+ SRS words" | 55 |

**Nothing counted words.** All three review surfaces — `ReviewScreen`,
`MistakesScreen`, `AdaptiveReviewScreen` — fired a bare `markQuest('master')` on
finish, whatever the deck size, so **one card cleared "Review 5+"**. And
`master` sat in `TIER2_MAP`, which promotes on the second MARK, so **two
one-card sessions cleared "Review 15+"**. The other five tier-2 quests say "2 of
X today" and are therefore honestly served by that same mechanism; these two say
a WORD count, and the mechanism counts sessions.

**THE FIX COUNTS, AND ACCUMULATES ACROSS THE DAY.** `recordSrsReview(words)` in
`lib/quests` keeps `nh_srs_reviewed_<date>` and marks whichever quest the day's
running total has actually earned — `master` at 5, `master2` at 15. Across the
day rather than per session because the text is a DAILY goal: five words now and
ten later is fifteen words reviewed, and per-session counting would make
"Review 15+" unreachable on any surface whose deck is smaller than that.

**`master` had to leave `TIER2_MAP`, and that is not a tidy-up.** With the gate
in place, second-mark promotion would clear "15+" at ten — the same defect in a
new disguise. The guard drives the real `markQuest` twice rather than reading
the map, so a re-added row fails rather than merely differing from a restated
constant.

**THE COUNTER IS SWEPT.** `cleanupStaleQuestKeys` now covers the
`nh_srs_reviewed_` prefix as well. Without it this would be the one daily key in
the module that grows forever — invisible until a learner's storage is full.

**FOUR TEST FILES ENCODED THE DEFECT, which is the fifth instance this session**
(after the `vs`-as-completion-marker comment in sweep 22, the "no evidence, no
claim" block in 32, the slang speak-quest in 35 and the same-day-resume comment
in 37). `review-screen`, `mistakes-screen` and `adaptive-review` each asserted
`markQuest('master')`; `quests.test.js` asserted that a second mark promotes
`master2`. All four read the code and wrote it down. They now assert the count
reaching the store and the shortcut being gone — and `quests.test.js` asserts
the promotion does NOT happen, with the reason beside it.

Mutation-verified, five, each confirmed LANDED: marking `master` unconditionally
→ 2 fail; `master` back in `TIER2_MAP` → 2; a review screen back to a bare
`markQuest` → 1; a CONSTANT passed instead of the deck length (which satisfies a
naive "calls recordSrsReview" matcher while restoring the defect exactly) → 1;
the new prefix dropped from the cleanup → 1.

tsc clean; lint clean. E2E audit: the quest TEXT is unchanged — it was already
what the app should have been doing — and no spec references a quest name, a
quest key or the new counter.

**The rest of the quest ledger was walked and is honest.** `perfect` ("Score
100% on any exercise") is gated on an exact score at all four of its marks;
every `culture`/`reading`/`grammar`/`vocab` mark is on a screen that does that
thing; the five OTHER tier-2 quests say "2 of X today", which second-mark
promotion serves exactly. Two judgement calls recorded rather than changed:
`LessonScreen` marks BOTH `grammar` and `vocab` for one lesson (generous, but a
lesson does teach both, so neither claim is false), and `AlphabetScreen` marks
`grammar` while awarding `'vocabulary'` (the alphabet is neither, and "Complete
1 grammar lesson" is loose rather than wrong).

### A candidate examined and deliberately NOT changed — the analysis, so it is not re-derived

`CroatianErrorInsights`'s eight phoneme cards say **"Your spoken Č scored
low."** `logPronunciationWeakness` records the phoneme Azure names as worst —
and when it names none, or names one of the many Croatian sounds outside the
tracked eight, it falls back to logging EVERY tracked phoneme present in the
target text. So on the fallback path the card asserts a per-sound score for up
to three sounds on the evidence of one low utterance score.

**The fallback is deliberate and documented**: `phonemesInText` excludes the
trilled `r` with a comment saying presence alone is "too common to be a
meaningful weakness signal", so the authors knew it is presence-derived and
pruned the worst offender. It is also a reasonable SCHEDULING signal — practise
the hard sounds in the sentence you scored badly on. Only the display sentence
is stronger than the evidence, and only on that path; the frequency of the path
is not measurable from here (it depends on Azure's per-phoneme output). Fixing
it means either hedging all eight descriptions — which weakens the honest,
Azure-named case for no measured gain — or threading an `exact` flag from the
ledger context into the card. Recorded as a candidate with the mechanism
established, not as a defect fixed on a guess about frequency.

### 41. Production done, quest credited to something else — 2026-09-23 — **4 REAL DEFECTS, FIXED**

The converse of sweep 35's rule, asked one sweep later. That one asked whether a
CLAIMANT of the Speak Quest had earned it, and found two screens with no
microphone clearing it. This asks whether a screen that DID earn it claims it —
and the answer was no, twice.

- **`MajaScreen`** awards `'speaking'`, carries a recogniser (17 references),
  and marked **`culture`**: *"Explore a Croatian region or media item"*, for a
  spoken conversation that is neither. One quest wrongly credited and one
  rightly owed and withheld, in a single line. It now marks what it awards.
- **`GuidedSpeakingScreen`** — the app's own rubric-graded speaking practice,
  and (as of sweep 39, hours earlier) the screen `FluencySnapshot`'s nudge sends
  learners to — **marked nothing at all.** Work done, credit withheld. It marks
  on BOTH its paths: the graded finish, and `continueAnyway` after a coach
  failure, because the coach failing is the app's problem and not the learner's.
  That is the same fail-soft posture that already fires the session signal there.
  The COUPLING is still not cleared on the failure path and no score is
  recorded — those are claims about PERFORMANCE, which a dead evaluator
  genuinely did not measure. A quest that says "Complete 1 speaking exercise" is
  a claim about what the learner DID.

**MEASURED BEFORE THE RULE WAS WRITTEN, like its twin.** Seven screens award
`'speaking'` with a speech-input path; **five marked `speak` and those two did
not** — zero false positives, which is what makes this rule shippable where the
payload-gated one (31 hits, almost all legitimate) was not. The guard lives
beside the original in `speakQuestEarned.test.ts`, so the two directions of one
rule cannot drift apart.

**THE SAME RULE, POINTED AT WRITING, FOUND THE SAME SHAPE TWICE MORE.** Asked
immediately after — because a rule that holds for one modality is a question
about the others, and asking it costs one dry run:

- **`GuidedWritingScreen`** — the rubric-graded guided writing that the B2
  formal email and the C1 academic units route to — awards `'writing'` and
  marked nothing.
- **`LessonProduceStep`** — the produce-after-you-pass step — awards `'writing'`
  and marked nothing.

Three screens award `'writing'`; one marked `write`. The Writing Quest reads
"Submit a written exercise" and pays 25 XP; all three submit one. No microphone
clause is needed on this side: writing has no analogue of the `DialogueSim`
case, because the input device is the keyboard either way. `LessonProduceStep`
is the safest of the four by construction — its own contract is that it "can
only ADD", the lesson's pass being already recorded when it renders.

Mutation-verified, four, each confirmed LANDED: Maja back to
`markQuest('culture')` → 1 fail; GuidedSpeaking marking nothing again → 1;
GuidedWriting marking nothing again → 1; LessonProduceStep marking nothing
again → 1.

tsc clean; lint clean; the four neighbouring suites (51 tests) unchanged. E2E
audit: no quest name, quest key or changed label appears in any spec.

**THE PAIR OF SWEEPS IS THE POINT.** 35 asked "did the claimant earn it" and
found two screens clearing a quest they had not; 41 asked "does the earner
claim it" and found four screens doing the work and getting nothing. Both
directions of one rule, in one guard file so they cannot drift apart — and
neither would have been found by the other. When a rule is worth writing in one
direction, ask it in the other before moving on.

### 42. The Home tab's claims — 2026-09-23 — **ALL NEGATIVE, do not re-run**

The largest unread block of learner-facing claims after sweeps 32–41, swept the
same way: read every sentence, then ask the code whether it can support it.
Nothing found. Recorded in full, because an unrecorded negative is re-run.

- **`QuestTracker`** — "N quests remaining" / "All quests complete!" / the
  percentage all derive from `questsDoneToday`, which reads the real keys. **And
  every one of the 17 quests is EARNABLE**, censused mechanically: 9 by a direct
  `markQuest`, 5 by `TIER2_MAP` promotion, 2 derived from the streak by name in
  `questState`, 1 (`master2`) marked explicitly since sweep 40. That is the
  converse of the historical `listening` defect — a quest marked by seven
  completion paths that *did not exist in the list*, so the key was written and
  nothing read it. This checks the other direction: a quest in the list that
  nothing can mark would make "All quests complete!" permanently unreachable and
  the remaining-count permanently wrong. Zero.
- **`SessionCard`** — "📚 Review N with prof. Kovač" and "N phrases to review"
  take `wordsdue`, which `HomeTab` computes as
  `getServableReviewCount(poolWords)` — the SERVABLE count, not the raw FSRS due
  count. So Home cannot promise reviews the Review screen then refuses; that is
  the 2026-09-04 vocabPool rule ("Home and Review must agree by construction")
  still holding, verified rather than assumed.
- **`HeroSection` / `getKnightGreeting`** — every interpolated number sits under
  a guard that matches it (`xp >= 5000` → "5,000 XP!", `lc >= 10` → "N lessons
  in"), and the rest is motivational copy conditioned on real state (`lc === 0`,
  `streakBroken`, the hour, `practicedToday`). No measurement is claimed. The
  hero's one real proficiency claim — the CEFR bar — was already fixed and
  pinned by the 2026-09-06 and 2026-09-08 badge sweeps.
  One cosmetic imprecision noted and deliberately not changed: the `gc >= 5`
  branch says "Five grammar sessions in" for any count ≥ 5. It sits AFTER the
  `xp >= 100` branch, so reaching it with a much higher `gc` is practically
  impossible (grammar completions carry XP), and it is encouragement copy rather
  than a measurement surface.

**Already checked and clean, from the same seam, recorded here so the list is in
one place**: `NextStepPrompt` (`buildPlanReason` scopes every claim — including
"All TRACKED skills look strong"); `StatsTab` (`getWordsLearned` reads a live
`nh_sr` with the right card shape; the eligible-vs-verified split is stated
honestly); `LearningInsights`' inputs (both `nh_daily_xp_` and `nh_daily_time_`
are genuinely written by `useAward`).

**WHAT IS LEFT IN THE SEAM**: `ProgressCharts`, `SkillRadar`, `JourneyTimeline`,
`XPActivityCalendar` — four Me-tab visualisations, none yet read.

### 43. Three of the five axes measured nothing — 2026-09-23 — **1 REAL DEFECT, FIXED**

Next in the seam sweep 42 left open (`ProgressCharts`, **`SkillRadar`**,
`JourneyTimeline`, `XPActivityCalendar`). `SkillRadar` is the Me tab's "Skill
Profile" card: a pentagon, five labelled axes, a percentage printed on each, and
a red **"Focus here →"** on the weakest.

**THREE OF THE FIVE AXES READ FIELDS THAT DO NOT EXIST.** The component declared
`st: { wl?, gc?, listen?, speak?, rc? }` and plotted:

    Vocab      (st.wl || 0) / 2
    Grammar    (st.gc || 0) * 10
    Listening  (st.listen || 0) * 20
    Speaking   (st.speak || 0) * 10
    Reading    (st.rc || 0) * 5

`wl`, `listen` and `speak` are **not on `Stats`** — checked in the interface, in
`statsReducer`, in `mergeStatsFromRemote`, in `sanitizeStats`, and by grepping
every write in `src`. Nothing has ever written any of them. So three axes were
`undefined || 0` for every learner since the card shipped, plotting a collapsed
polygon and printing a literal **"0%"** beside each.

**THE DISPLAY WAS THE SMALL HALF.** `weakIdx` is the lowest score and the row it
lands on renders "Focus here →". Three axes tied at zero, and `reduce` keeps the
FIRST on a tie — index 0, **Vocab**. So every learner who has ever opened the Me
tab has been told their weakest skill is vocabulary and to focus there, on the
evidence of a field name that matches nothing. That is NEVER-DO 13 on a
recommendation, and it is the _lightest skill_ defect (sweep 39) and the _weak
topics_ defect (sweep 36) in a third place: a recommendation derived from a
measurement that was never taken.

The two surviving axes were not honest either: `gc * 10` asserts that ten
grammar completions is 100% of something and `rc * 5` that twenty readings is —
conversion factors nobody defined, rendered as a percentage.

**THE FIX POINTS IT AT THE LEDGER.** `lib/masteryLedger` is the app's canonical
per-skill measurement, already carries exactly these five skills (plus writing),
and is what `buildPlanReason` and `weakestProductionKind` already consult — so
the radar and the recommender now answer from one source instead of disagreeing.
It is read at `getCurrentContentLevel()`, the same expression
`recordExerciseOutcome` keys its cells on, so the card cannot read a level
nothing was written to. The component takes **no props**; `StatsTab` mounts it
bare.

**AN UNMEASURED SKILL IS NOT A ZERO.** No cell, or fewer than `MIN_SAMPLES`
samples, renders **"not measured"** and an em dash on the axis — never 0%,
and never eligible to be the focus. With nothing measured the card recommends
NOTHING (`weakIdx === -1`), which is the same rule the concept map, the weak
topics card and `productionReason` already follow.

**GUARDED BY RENDERING, NOT BY A SOURCE PIN.** `skillRadar.test.tsx` (8, new —
the component had no test at all) seeds the REAL `nh_mastery_ledger` at the REAL
level and renders. A pin asserting "does not read `st.wl`" would pass just as
happily the day the data is renamed underneath it — that is the `RegionScreen`
`v.tip` lesson, where the failure mode is a field name agreeing with nothing.
One source assertion is kept, and only for the WIRING (`StatsTab` mounts it with
no `st`), which rendering cannot see.

Mutation-verified, five, each confirmed landed: unmeasured scored as 0 (the old
behaviour) fails 5; `weakIdx` over all five axes with null as 0 fails 3; null
rendered as "0%" fails 3; the `tested` check dropped fails 1; `StatsTab` passing
`st={st}` again fails 1.

tsc clean; lint clean; E2E audit: no spec references "Skill Profile", "Focus
here", any radar test id, or an axis label — the card is unasserted in E2E.

**WHAT IS LEFT IN THE SEAM**: `ProgressCharts`, `JourneyTimeline`,
`XPActivityCalendar`.

### 44. Three streak milestones the app recorded and refused to name — 2026-09-23 — **1 REAL DEFECT, FIXED**

Next in the Me-tab seam. `JourneyTimeline` renders the learner's milestone
history: an icon, a label, a date and a line of copy per entry.

**`updateStreak` raises a milestone at each of
`STREAK_MILESTONES = [7, 14, 21, 30, 50, 60, 100, 365]`**, and `useAward` records
it as `streak_<n>` — with the count in the entry's own meta. The card looked the
type up in a hand-written `MILESTONE_ICONS` map that carried **five of the
eight**: `streak_14`, `streak_21` and `streak_60` had no row, so each fell
through to `MILESTONE_ICONS.default` and rendered

    🌟  Milestone
        A new achievement!

A learner who reaches a fourteen-day streak — the first milestone after the
opening week, and the one most learners actually reach — is shown an anonymous
"Milestone" for an achievement the app measured precisely and wrote the number
down for. Three of the eight; the one a year of daily practice earns is fine and
the two at two and three weeks are not.

**IT IS THE DECAY CLASS, IN A THIRD PLACE.** A hand-maintained list restating a
production constant, in a different file, going stale at whatever rate the list
still covers — the nav-tab table, the A1 grammar-screen list, `PRODUCTION_SCREENS`
and `GRAMMAR_STRUCTURE_CATEGORIES` are the same shape. Nothing could notice,
because a generic label renders perfectly: there is no crash, no blank, no
console line. It is only wrong if you know what the store holds.

**THE FIX IS A DERIVATION, not three more rows.** `milestoneDef` parses
`streak_(\d+)` and builds the label from the number, so every value the constant
holds today — and any value added to it tomorrow — names itself. The icon steps
by threshold (365 👑, 100 🏆, 50 💎, 30 🌟, else 🔥) for the same reason: a
milestone added at 200 gets a sensible icon rather than a blank. Bespoke copy is
kept where it existed and written for the three that had none; a length with no
bespoke line gets an honest generic that still states the number.
`STREAK_MILESTONES` is exported so the guard can drive the real constant instead
of keeping a fourth copy of it.

**`name_day` is the harmless converse and is kept with its reason**: a label in
the map that nothing records (`recordJourneyMilestone` is called with
`first_lesson`, `first_speaking` and `streak_<n>`, and nothing else). A label
with no event costs nothing; an event with no label is the defect above. The
guard checks it in BOTH staleness directions — it must still be in the map AND
still be unrecorded — because an exemption asserting a condition nobody re-checks
is how the `idioms` dead end survived its own staleness test.

`journeyTimeline.test.tsx` (25, new — the component had no test) drives
`STREAK_MILESTONES` itself, renders the REAL store through the REAL component,
and censuses every `recordJourneyMilestone` call in `src` to require that each
recorded type resolves to something other than the default. **The census matcher
was wrong on its first run**, in the direction that manufactures a demand: the
literal pattern captured the `'streak_'` of `'streak_' + sr.milestone`, i.e. a
bare prefix no map could ever name. The closing quote must now be followed by
`,` or `)`.

Mutation-verified, four defect mutations each confirmed landed: the hand-written
map with 14/21/60 missing fails 8; the streak label dropping the number fails 10;
the generic message reused for a length with no bespoke copy fails 1; something
starting to record `name_day` fails 1. Plus one positive control — adding 200 to
`STREAK_MILESTONES` **passes, at 27 tests instead of 25**, which is the
derivation doing its job and the outcome a listed guard could not produce.

tsc clean; lint clean. E2E audit: the only specs mentioning a milestone are the
heavy-user reporters, which are observational `ok()/info()` loops that break on
`'journey'` (always present in the card's closing line) and cannot fail; `me-tab`'s
`Day Streak` assertions are the stats widget and the `aria-label="5 Day Streak"`
badge, neither of which this touches.

**WHAT IS LEFT IN THE SEAM**: `ProgressCharts` — read, and it carries two
findings already identified for sweep 45 (a gap day makes the next day's bar the
learner's entire lifetime XP, and "vs Last Week" renders "▲ 0%" when there is no
last week at all). `XPActivityCalendar` was read and is CLEAN — its dead-key
defect was already found and fixed in a prior pass, documented in the component.

### 45. The XP chart was mostly gaps and spikes — 2026-09-23 — **3 REAL DEFECTS, FIXED**

The last card in the Me-tab seam. `ProgressCharts` (the Insights tab) shows
Total XP, This Week, "vs Last Week", and a 30-day XP bar chart. **All three
defects are in the arithmetic, and none of them is visible without knowing what
the store holds** — no crash, no blank, a perfectly plausible chart.

**1. THE GAP-DAY SPIKE.** The bars were DELTAS of `progress_history` — a
CUMULATIVE xp snapshot App.tsx writes only on days the learner opens the app
(`if (!authUser || … || stats.xp === 0) return`). A day with no entry read
`xp: 0`, so the day AFTER any gap differenced against zero and rendered a bar
equal to the learner's whole cumulative total at that point.

Measured by driving the real arithmetic over thirty days at a steady 40 XP with
two days missed:

    chart deltas : 0 40 40 40 40 40 40 40 40 40 0 440 40 40 … 0 800 40 40 …

Bars of **440 and 800 for days the learner earned 40**, and because
`SVGBarChart` scales to its largest bar, **25 of the 28 real practice days
rendered under 10% of the height** — effectively invisible. The later the gap,
the bigger the lie, because the spike is the running total.

**2. THE TREND INHERITED IT.** `lastWeek` summed those same deltas and came out
at **1000 against a truth of 240–280 — a 3.6x overstatement** — feeding the "vs
Last Week" percentage. A learner practising identically every week saw a large
red drop precisely because the earlier window had contained a gap: the number
punished the consistency it existed to report.

**3. TWO KINDS OF WEEK UNDER ONE LABEL.** `thisWeek` is the CALENDAR week
(`nh_week_xp_<weekKey()>`); `lastWeek` was a ROLLING seven-day block
(`slice(-14, -7)`). On a Monday morning the numerator held one day and the
denominator seven, so the card was structurally guaranteed to open every week
with a large red drop, independent of defects 1 and 2.

**Plus the no-baseline case**: with `lastWeek === 0` the trend computed to 0 and
rendered a green **"▲ 0%"** — "no change" — both to a learner who went from
nothing to a full week of practice and to one who did nothing in either week.
Two different facts, one number, neither of them measured (NEVER-DO 13), and the
only one of the four that is a claim rather than an error.

**THE REAL PER-DAY NUMBER WAS ON THE DEVICE THE WHOLE TIME.** `useAward` writes
`nh_daily_xp_<localDate>` on every award, `pruneStaleLocalStorage` never touches
it (so far more than thirty days survive), and `LearningInsights` and
`XPActivityCalendar` both already read it. **This is XPActivityCalendar's own
dead-`nh_activity_log` defect in a second place**: that card was repaired and its
neighbour — differencing cumulative snapshots, five files away — was not. The two
Me-tab charts now agree by construction instead of by coincidence. `lastWeek`
reads `nh_week_xp_<prevWeekKey()>`, which the prune explicitly keeps (the weekly
freeze recharge already depends on it), so both sides of the comparison are the
same kind of week from the same counter. No baseline renders an em dash.

**`progress_history` now has no reader.** The writer in App.tsx is deliberately
LEFT: it is a 90-day cumulative history that costs nothing to keep and that
deleting is not reversible for existing learners. Stated here rather than
silently — it is a dead write by the definition sweeps 26/29 used, and the next
person should decide it on purpose rather than rediscover it.

`progressCharts.test.tsx` (9, new — the component had no test) drives the REAL
component with the REAL keys, including the exact measured scenario, and asserts
the legacy snapshot ALONE draws nothing (so a future reintroduction of the
differencing fails rather than passing on plausible-looking output).

Mutation-verified, four, **and the fourth is the one worth recording**: bars back
to differencing fails 3; `lastWeek` back to the rolling slice fails 2; the green
flat zero restored fails 1; and reading the daily key at the **UTC** date instead
of the local one **SURVIVED at first** — because the runner's zone is UTC and, at
the wall-clock hour the suite happened to run, the two strings agree even in
other zones. A mutation that did not land is not a verified guard, so the suite
gained a block that sets `process.env.TZ` and the clock to a moment where they
genuinely differ (America/Los_Angeles at 03:00 UTC = the previous local day) and
asks the question there; the same mutation then fails 1. That is the same
local-vs-UTC date defect `pruneStaleLocalStorage` carries a paragraph about, in
this codebase, for this reason.

tsc clean; lint clean. E2E audit: no spec asserts any ProgressCharts string — the
`▲` matches are a collapse toggle in an unrelated component, and `me-tab`'s
"Total XP" is StatsTab's label, which this does not touch.

**THE SEAM IS NOW EXHAUSTED.** Sweeps 32–45 read every learner-facing claim
surface: the Me-tab visualisations are done (`SkillRadar` 43, `JourneyTimeline`
44, `ProgressCharts` 45, `XPActivityCalendar` clean and previously repaired), as
are Home (42), the quest ledger (40, 41), navigation targets (39), the rep
metrics (35, 38), the empty states (36) and the day rollover (37). The next
sweep needs a NEW question, not another surface.

### 46. A demotion vs the plan already built — 2026-09-23 — **NEGATIVE, now pinned**

The first item from the INTERACTIONS seam, which the list has named for weeks:
"a demotion (verification_fail rollback) vs content already unlocked and vs a
daily plan built at the higher level." Two mechanisms that are each correct
alone, meeting.

**THE RISK WAS REAL ON PAPER.** `rollbackProvisionalOnFail` writes only to the
certification store. The daily plan is built from
`getContentUnlockLevel(getUserCefr(xp, lc, gc))` — and **a demotion changes
none of xp, lc or gc** (asserted mechanically, so the premise is not an
assumption). If the rollback did not reach the unlock level, a learner the app
had just honestly rolled back to B1 would keep being served the B2 plan built
that morning: the badge and the plan disagreeing about the same learner, which
is the 2026-09-06 field report's shape in a new place.

**IT HOLDS, IN BOTH HALVES**, driven end to end: the REAL
`recordEquivalencyAttempt` on a grandfathered B2, then the REAL
`useDailySession`.

**WHICH MECHANISM CARRIES IT WAS MEASURED, AND MY FIRST ANSWER WAS WRONG.** I
wrote that the link is `getContentUnlockLevel`'s closing
`return getCertifiedLevel()` — provisional passes counted, the rollback removing
one — and said so in the test's own failure message. Mutating that line to
`getVerifiedLevel()` left the file **fully green**, which said the claim was
false. Dumping the real state said why:

    BEFORE  certified=B2 verified=A1 gate.required=true gate.target=B2 unlock=B1
    AFTER   certified=B1 verified=A1 gate.required=true gate.target=B1 unlock=A2

The **verification gate** carries it. A demotion only ever happens to a
PROVISIONAL level (`rollbackProvisionalOnFail` returns null otherwise), and a
provisional level above the verified one is precisely what makes the gate
required — so the gate branch returns `levelBelow(gate.target)` and
`getCertifiedLevel()` is never reached. The gate's target is now asserted to
follow the rollback, so the finding is pinned rather than left in prose.
**A comment explaining a mechanism is worth what the mutation that checked it is
worth**, and this one was worth nothing until it was run.

**THE PROPERTY TURNS OUT TO BE OVER-DETERMINED, and that is the result rather
than a weak guard.** Two further mutations — the gate returning its target
instead of the level below, and unlock ignoring the gate entirely — also leave
the file green, because the gate target and the certified level BOTH drop on a
demotion. There is no single line whose removal strands the plan at the old
level. Said plainly rather than hunted until something failed: the guard's value
is the three points that ARE single: the rollback itself, the rebuild effect's
dependency on the level, and the level written onto the rebuilt session.

Mutation-verified, three landed and caught: `rollbackProvisionalOnFail` neutered
fails 3; `userCefr` dropped from the rebuild effect's deps fails 2; the rebuild
keeping the OLD level on the fresh session fails 2. Three more survive, each for
a stated reason (above), and the `getVerifiedLevel` swap is deliberately NOT
claimed — it is a real defect in its own right (it takes content away from
grandfathered learners) and CLAUDE.md records it as guarded by two other tests.
Claiming it here would be claiming a guard this file does not have.

**A MUTATION THAT DID NOT LAND CAME FIRST.** The initial attempt at the rollback
mutation inserted `return null;` with a regex whose `[^{]*\{` matched the `{` of
the RETURN TYPE ANNOTATION (`): { from: CefrLevel; to: CefrLevel } | null {`),
so the statement landed inside the type, esbuild stripped it, and the suite
stayed green — reading exactly like a decorative guard. Check WHERE a mutation
landed before reading its result; a multi-line signature with braces in its
return type defeats the obvious pattern.

**Work done that day is preserved.** The CEFR branch maps completions by screen,
so a learner just told they are a level lower is not also told they have done
nothing — the 2026-05-21 incident, met from the other direction.

**WHAT THIS DOES NOT COVER, stated**: a demotion landing while Home is MOUNTED
and never re-rendered. `getContentUnlockLevel` reads localStorage during render,
so the drop is seen at the next render; the exam screen replaces Home in the
router, so returning to Home is a mount. That is an argument, not a measurement,
and it is the next thing to drive if this interaction is revisited.

### 47. The retention ladder vs a date rollover — 2026-09-23 — **NEGATIVE, now pinned**

The second and last item from the INTERACTIONS list, and it closes that list.

**THE RISK.** `lessonRetention`'s whole scheduler is date arithmetic — a
lesson's `due` is a `YYYY-MM-DD` string compared against `today` — and the
daily plan claims its slot (`selectRetentionSlot`, P1.2) at SESSION-BUILD time.
Sweep 37 had just established that the plan was built once and never noticed
midnight. If anything in this chain captured `today` earlier than the rebuild, a
re-check due "tomorrow" would be invisible on the very day it fell due: a lesson
slipping while the scheduler believed it had scheduled it, which is the failure
the ladder exists to prevent, reached through the calendar instead of through
the learner.

**IT HOLDS**, and the reason is worth writing down because it is a JOINT
property. Every exported function in `lessonRetention` defaults `today` to
`localDateStr()` **at call time**, and `buildSessionActivities` recomputes the
slot — so the fix that made the plan notice midnight (sweep 37) is what carries
the ladder across it too. **Neither file's own tests can see this**: the store's
tests pass `today` explicitly, so they never exercise the default, and the
session's tests do not seed a retention store, so they never reach the slot.
That is exactly the shape of gap the interactions seam exists to find, and here
it happens to contain no defect.

The consumers were censused rather than assumed: `retentionSlot` (session
build — rebuilt on rollover), `nextStep` (recomputed at event time by contract),
`conceptMap` (pure, called at render), and `RetentionCheckScreen` (a `useMemo`
at open). The last is the one genuinely cached place and is correct as it
stands: re-shuffling a check under the learner's hands at midnight is the worse
failure, the same judgement sweep 37 made about not using a timer.

Mutation-verified, three, each confirmed landed: sweep 37's `dayStamp` dep
removed from the rebuild effect fails 2; the slot capturing the date once at
module load fails 3; the due comparison replaced by `true` — the OTHER
direction, a slot appearing merely because the day changed — fails 4. The third
had to be redone: the first attempt targeted `rec.due <= today`, a string that
does not appear in the file, and printed `pattern found: False` rather than
silently doing nothing. **Make a mutation script say whether it matched**; a
`re.sub` that matches nothing is indistinguishable from a guard that works.

**THE INTERACTIONS LIST IS NOW EMPTY** — both named items (46, 47) are driven
and negative. The next sweep needs a new question again, and the two negatives
say something about where to look: both of these were joins between correct
files, and both turned out to be held by a mechanism written for a different
reason. The defects found this session were all inside a single surface.

### 48. The tier-2 quest map had a second copy, already diverged — 2026-09-23 — **1 DRIFT HAZARD, CLOSED**

The interactions list emptied at sweep 47, so this is the new question the
record asked for: **where does the app keep the same fact twice?** The CEFR
badge field report (2026-09-06) is this file's canonical instance — three copies
of an XP-band formula, "in sync with each other and with nothing that mattered".
Starting from the quest ledger, because sweeps 40/41/42 had just been through it
and a fresh divergence there would be the sharpest possible test of whether the
class is live.

**IT WAS, AND THE DIVERGENCE WAS THREE HOURS OLD.** `QuestTracker` carried a
hand-written copy of `lib/quests`' `TIER2_MAP` under the near-identical name
`TIER2_MAP_LOCAL`. **Sweep 40 removed `master` from the award map** — promoting
on the second MARK cleared "Review 15+ SRS words" after ten — and nothing told
the component. Five rows agreed, one did not, and no mechanism anywhere could
say whether that was a decision or a miss.

**THE DIVERGENCE IS CORRECT, AND THAT IS PRECISELY WHY IT HAD TO BE WRITTEN
DOWN.** The two maps answer different questions:

- `TIER2_MAP` asks **has the learner EARNED the tier-2 quest** — for the SRS
  pair that is a word count (`MASTER2_QUEST_WORDS`), not a session count.
- the component's map asks **which card to SHOW** — and once "Review 5+" is
  done, "Review 15+" is plainly the next goal to put in front of them.

Checked rather than assumed that the display map cannot make a false claim:
`done` is read independently from `questsDone[q.id]`, and `_unlocked` only
changes the card's border and adds a "⬆ BONUS" badge, so the tier-2 card sits
un-ticked until the learner genuinely reaches fifteen. **No learner-facing
defect** — the rendering is byte-identical before and after, because
`buildVisibleQuests` iterates `DAILY_QUESTS` rather than the map and the one
order-sensitive use is an `Object.values(...).includes`.

**THE FIX IS THE CEFR-BADGE FIX, ONE STAGE EARLIER.** There the answer was a
single resolver; here `QUEST_DISPLAY_PAIRS` SPREADS the exported award map and
adds the one exception with its reason, so the five shared rows cannot drift
again and the sixth has to be declared to exist. A hazard caught before it
became a field report is worth the same write-up as one caught after — the CEFR
version cost a learner seeing "C1 · Advanced" for a level nothing had measured.

Mutation-verified, four, each confirmed landed: reverting to a hand-written copy
fails 2; ONE literal row creeping back beside the spread fails 1 (that is how a
copy returns — a row at a time, not all six); `master` back in the AWARD map,
i.e. sweep 40 reverted, fails 2; the display exception deleted, which would take
the "Review 15+" card away from the learner entirely, fails 1.

tsc clean; lint clean; `firstPaintGraph` unaffected by the new import. E2E audit:
no user-visible string changes, and no spec references a quest name, the pair or
the BONUS badge.

**WHAT THE QUESTION IS WORTH, going forward.** One search of one subsystem found
one live divergence, three hours old, in code that three sweeps had just read.
The duplicated-fact question is the seam to work next, and the productive form is
not "find duplicated constants" but **"find a fact stored twice where only one
copy has a reason to change"** — which is what makes the drift silent.

### 49. The CEFR thresholds were written down four times — 2026-09-23 — **1 DRIFT HAZARD, CLOSED**

Continuing sweep 48's question, and the second place it pays. The five band
boundaries — **300 / 1200 / 3500 / 8000 / 18000** — lived in FOUR places:

| # | where | as |
| - | ----- | -- |
| 1 | `lib/cefr` `getUserCefr` | an inline `if` ladder |
| 2 | `StatsTab` `CEFR_META[...].needed` | the "next level at N" target |
| 3 | `StatsTab` `CEFR_FLOOR` | a SECOND inline map, ~400 lines below #2 in the same file |
| 4 | `heroHelpers` `CEFR_BANDS` | floor + threshold pairs |

**MEASURED, NOT ASSUMED: all four agreed**, so this is a hazard closed rather
than a bug fixed, and it is worth saying which. The boundaries were derived from
`getUserCefr` BY BISECTION (rather than read off the source) and compared with
every literal in the three files.

**WHY IT IS STILL THE FINDING.** Only the ladder has a reason to change. Move a
band there and the LEVEL moves everywhere — the badge, the gate, the content
unlock — while every progress bar in the app keeps measuring against the old
target. Both numbers stay plausible and they sit on screen together. That
asymmetry is the whole point of sweep 48's question: a fact stored twice where
one copy is live and the others are inert drifts silently, and nothing in a test
suite or a coverage report can see it.

**AND THIS EXACT FAMILY HAS ALREADY PRODUCED A FIELD REPORT.** 2026-09-06, "it
shows C1, I'm not C1" — three copies of the LEVEL formula that were "in sync
with each other and with nothing that mattered". That fix consolidated the level
and **left these thresholds alone**. `lib/cefr`'s own docstring still said "This
mirrors the getCEFR formula in src/components/profile/StatsTab.tsx exactly" —
prose asserting agreement, the same non-mechanism as `wrangler.toml`'s "Shared
with scheduled worker above" — and it was stale besides: `StatsTab`'s `getCEFR`
had long since delegated back to `getUserCefr` and contained no formula at all.
**A comment that names a second copy is evidence the copy exists, not evidence
it agrees.**

**THE FIX** is `CEFR_BANDS` + `cefrBand()` + `cefrScore()` exported from
`lib/cefr`. `getUserCefr` walks the table; `CEFR_META` keeps this file's labels
and colours and takes `needed` from it; `CEFR_FLOOR` is gone; `heroHelpers`
builds its progress bands by filtering and mapping the same table, so its `next`
column is the table's own ordering and a new level cannot be added to one and
forgotten in the other. The score formula `xp + lc*15 + gc*25` was restated in
both components and is now one function.

**THE GUARD IS BEHAVIOURAL WHERE IT CAN BE.** A source pin saying "StatsTab does
not contain 3500" is weak — it passes the moment someone writes `3_500` or
computes it. So `cefrBandsSingleSource.test.ts` derives the boundaries from
`getUserCefr` ITSELF by bisection and requires the table to match what the
function actually DOES, plus floors abutting ceilings with no gap or overlap,
every level covered once in order, and C2 the only terminal band. The source
half is the ratchet for a FIFTH copy appearing somewhere that happens to agree
today, which behaviour cannot see.

Mutation-verified, five, each confirmed landed (the script prints `landed`, per
sweep 47's lesson): a band moved in the LADDER only — the exact silent-drift
scenario — fails 2; `StatsTab`'s inline floor map restored fails 1;
`heroHelpers` back to literal thresholds fails 1; a consumer recomputing the
score formula fails 1; a gap opened between two bands fails 2.

tsc clean; lint clean; `firstPaintGraph` unaffected; the six CEFR/hero suites
(77 tests) unchanged. E2E audit: no user-visible string moves — the labels and
colours are byte-identical and only the numbers' SOURCE changed.

### 50. A type kept twice, and prose that contradicted the line below it — 2026-09-23 — **1 DRIFT HAZARD CLOSED, 3 STALE COMMENTS**

Third run at sweep 48's question, and it needed a new SEARCH rather than a new
subsystem. The giveaway both previous finds shared is a COMMENT asserting that
two places agree, so this one grepped for that phrasing across `src/`,
`functions/` and `scripts/` — "must stay in sync", "mirrors X exactly", "same
formula as", "structural copy of", "shared with". Twenty-odd hits, mostly
honest; one was not.

**`CroatiaPoolEntry.category` restated `SessionCategory`'s union inline**, with
the reason written down: *"Structural copy of SessionCategory (defined in
useDailySession) — kept inline here to avoid a hook→data→hook import cycle."*
That reason was TRUE when written and FALSE by the time it was read again:
`SessionCategory` moved out of the hook into `lib/dailySessionStore` in the
800-line split. Both modules are in `lib/` now, `dailySessionStore` imports
nothing from `croatiaPool`, and madge confirms no cycle — checked, not assumed.

**WHAT A STRUCTURAL COPY OF A UNION COSTS, DEMONSTRATED RATHER THAN ASSERTED.**
Widening `SessionCategory` and using the new member is accepted with the shared
type (tsc clean) and REJECTED with the copy:

    src/lib/croatiaPool.ts(96,63): error TS2322:
      Type '"ritual"' is not assignable to type
      '"culture" | "practical" | "general" | SkillCategory'.

So the failure is not silent at the moment of use — it is silent for as long as
nobody tries. A category the session builder would happily carry simply cannot
be written down in the pool, and the error, when it finally comes, names the
wrong file.

**THREE STALE COMMENTS IN THE SAME FILE, ONE CONTRADICTING THE CODE.** All about
`ownAtLevels` and the City of the Day band corpus:

1. the field's docstring still described "City of the Day, which carries graded
   Croatian in three bands (A1 / B1 / C1)" — it carries SIX since 2026-09-08;
2. the 2026-09-06 owner-decision block still named `ownAtLevels` as the live
   mechanism;
3. **a comment saying "NOT `adaptive`" sat four lines above `adaptive: true`.**

The third is the nav-table incident in miniature, and its cause is the same: the
2026-09-08 change added its own explanation INSIDE the entry and left the one
above it in place. Both were accurate on their own dates. **When you explain why
something changed, delete the explanation of why it used to be the other way** —
or the next reader meets both and has to guess which is current.

**`ownAtLevels` ITSELF IS NOT DEAD CODE, and that was checked rather than
assumed** — a field nothing sets and nothing reads looks identical from outside
to a field nothing sets because the data outgrew it. `cityOfDayGraded.test.tsx`
already owns the decision in both directions: `ownAtLevels` must equal the
fully-banded levels, or be EMPTY with `adaptive` set once every level is banded.
It is a capability kept for the next partially-banded screen, and the docstring
now says so instead of describing a holder it no longer has.

Mutation-verified, four, each confirmed landed: the structural copy restored
fails 2; the superseded "NOT `adaptive`" comment restored fails 1; the
three-band prose restored fails 1; and a POSITIVE control — widening
`SessionCategory` alone — passes, because the pool now follows automatically,
which is the whole point and an outcome the copy could not produce.

tsc clean; lint clean; madge clean. E2E audit: nothing user-visible changed —
this is a type, three comments and a new test.

### 51. The payload key list CLAUDE.md said must agree, and did not — 2026-09-23 — **1 REAL COVERAGE HOLE, FIXED**

Fourth run at sweep 48's question, and this candidate was already NAMED in
CLAUDE.md: *"Three copies of the payload key list must agree: `core.js` KEYS,
`core.test.js` ALL_KEYS, and `generate-content-etags.mjs` CORE_KEYS (the etag
must move when the payload does)."* So the first thing was to measure whether
they did.

    endpoint  KEYS        32
    etags     CORE_KEYS   32
    test      ALL_KEYS    31   ← missing CULTURE_DEEP_DIVES

**The test's "every export is present" assertion covered 31 of the 32 keys the
endpoint actually serves**, and the missing one is the payload for the 24
culture deep-dive essays.

**THE SIZE OF THAT HOLE HAS TO BE STATED PRECISELY, AND MY FIRST VERSION
OVERSTATED IT.** I wrote that `CULTURE_DEEP_DIVES` "was actually unguarded".
It was not: `cultureDeepDives.test.ts` carries a test named *"CULTURE_DEEP_DIVES
is in ALL THREE content-pipeline key lists"* which greps `_data/core.js`,
`core.js` and the etag generator for the literal — and those three are precisely
the ones that had it. What was unguarded is narrower and still real: the
ENDPOINT RESPONSE assertion in `core.test.js` did not cover that key, so the
response could lose it and that test would not say. Say what was observed, not
the strongest claim consistent with it.

**WHICH COPY WENT STALE IS THE PATTERN, not an accident.** The endpoint and the
etag generator are edited whenever a key is added, because nothing works
otherwise. The test is the copy with **no reason to change** — so it is the one
that silently stops covering what it names. That is sweep 48's rule landing
exactly where it predicted, and it is also this file's own "a test that restates
production data cannot check production data", met from the other direction: not
a wrong assertion, a MISSING one.

Its title said *"all 27 named exports"* while the list held 31 — the nav-table
shape inside a test: a number right when written and never moved with the code.

**THE FIX** is `CORE_PAYLOAD_KEYS` in `_data/core.js`, read by all three. The
etag generator was re-run afterwards and the core etag is **UNCHANGED**
(`core(1a4e3e6f…)` before and after), which is the check that this is a
de-duplication and not a payload change — worth doing, because a generator that
reads a different list would have silently re-hashed the payload.

**MY OWN FIRST COUNT WAS WRONG AND THE MEASUREMENT CORRECTED IT.** Reading the
files I said 33 / 32; counting mechanically gives 32 / 31 / 32, because the
regex skips comment-only lines that the eye counts as entries. The divergence is
one key either way, but the numbers in a report have to come from the count, not
the reading.

**WHAT DERIVATION DOES NOT BUY, stated because a mutation showed it.** Removing
a key from the shared array now removes it from the endpoint test's assertion
too: dropping `CULTURE_DEEP_DIVES` fails ONE test in the new guard and **NONE**
in the endpoint suite. That is the honest trade — a hand-written copy catches
REMOVALS and misses ADDITIONS, a derived one is the other way round, and drift
was the live failure. The removal side is covered here by NAMING
`CULTURE_DEEP_DIVES` (a key with a known consumer, and the one actually
unguarded) and by requiring every listed key to have an export behind it.
Neither half is a general removal guard; that needs the consumer side, which
`contentShapeSweep` owns.

**WHAT WAS ALREADY MECHANISED, AND WHY IT STILL MISSED THIS — a correction to my
own first write-up.** I wrote that knowing three copies must agree "is not a
mechanism". That was too strong, and the full suite said so by going red in two
places I had not touched deliberately:

- **`contentShapeSweep.test.tsx`** sliced `const KEYS = [` out of `core.js`'s
  SOURCE.
- **`content-core-contract.test.ts`** did the same in `advertisedKeys()`, and
  threw `could not locate the KEYS array in core.js` — a whole SUITE that failed
  to load rather than a test that failed, which is why the first summary line
  said "2 files, 1 test".
- **`vocabPool.test.ts`** asserted the three files "all ship V_LEVELS" — three
  source greps for one key's NAME, proving each FILE mentions it and nothing
  about the other 31.
- **`cultureDeepDives.test.ts`** greps the same three files for
  `'CULTURE_DEEP_DIVES'`.

So the endpoint↔sweep pair WAS mechanised and the endpoint↔`core.test.js` pair
was not, which is exactly where the drift landed.

**A GUARD THAT DERIVES BY PARSING A LITERAL IS COUPLED TO THAT LITERAL'S
SYNTAX**, and that is the reusable finding here. Consolidating the data into one
exported array — the fix — broke FOUR guards, none of which could follow the
list once it stopped being an array literal in that particular file. All four
now IMPORT `CORE_PAYLOAD_KEYS` or ask it directly, which is strictly stronger
and survives any refactor that keeps the value. **Derive by importing the VALUE,
not by parsing the text that spells it.** (The `V_LEVELS` assertion keeps its two
genuinely separate carriers — the E2E fixture and the client's payload type — as
file checks, because those really are other places.)

**AND THE BREAKAGE IS EVIDENCE THE FIX WAS WORTH MAKING.** Four guards were
reading the same fact out of one file's syntax; none of them could see that a
FIFTH copy, in `core.test.js`, had gone stale. Four parsers over one literal is
the same duplication the sweep is about, one level up.

Mutation-verified, five, each confirmed landed: the test back to its own stale
list fails 2; the endpoint restating the list fails 2; the etag generator
restating it fails 2; a key with no export behind it fails 1; and
`CULTURE_DEEP_DIVES` dropped fails 1 here — and, as measured above, 0 in the
endpoint suite, which is the limitation rather than a pass.

### 52. The rest of the duplicated-fact candidates — 2026-09-23 — **ALL NEGATIVE, do not re-run**

Sweeps 48–51 found four. These are the candidates that were named alongside them
and did NOT pay, recorded in full because an unrecorded negative is re-run — and
because "I looked and found nothing" is only useful if the next person can see
WHAT was looked at and HOW.

**The five remaining hits from sweep 50's comment grep**, each checked the way
50 was: is the STATED REASON still true, and do the two copies still agree?

- **`audio.ts:37`** — "*`_nativePost` … was built to mirror it exactly*". A
  HISTORICAL note about a consolidation that already happened: the ~90-line body
  is gone and the call delegates. No live copy. The comment describes a past
  state and says so.
- **`text/similarity.ts:9`** — "*Only the raw `levenshtein` is shared with
  TypingScreen; the local `normalize()` stays local there*", because it carries
  two extra mappings (`š/ś`, `ž/ź`). **Verified in the file**: `TypingScreen`'s
  `normalize` really does carry both, and omits the punctuation stripping
  `normalizeCroatian` does. Two different functions with different jobs, not a
  copy. (The reason as written is incomplete — it names the two mappings and not
  the punctuation difference — but it is not wrong.)
- **`OnboardingTour.tsx:50`** — "*One definition, shared with AIConversation's
  `isHeritage`*". Both call `isHeritageLearner()` from `lib/heritageLearner`.
  Genuinely one definition.
- **`AspectDrillScreen.tsx:633`** — documents why the screen writes the
  `aspectdrill` path key itself when its exercise key is `aspect`. A recorded
  workaround for a real mismatch, not a duplicated fact.
- **`applyRemoteProgress.ts:39`** — "*A frozen copy of the old order, NOT
  `src/data/bakaPhrases`*". A deliberately FROZEN copy, which is the one case
  where duplication is correct: it must not track the live list, or legacy
  bookmarks re-point the moment that list is edited. Two reasons given, both
  still true.

**Three structural candidates, also clean:**

- **`DAILY_QUESTS` xp vs whatever pays it.** `App.tsx`'s `payQuestXp` calls
  `award(q.xp, …)` reading straight off the same array the card renders. One
  definition, one payer.
- **`GRAMMAR_STRUCTURE_CATEGORIES`.** Genuinely derived from `SKILL_GROUP` at
  module load (`Object.keys(SKILL_GROUP).filter(...)`), exactly as this file
  describes, with `grammarStructureCategories.test.ts` behind it.
- **The GRAMMAR endpoint.** `content-core-contract.test.ts` already handles it
  better than the core one was handled: it parses BOTH SIDES of each
  `KEY: GRAMMAR.REF` pair — because in `PITCH_ACCENT: GRAMMAR.PITCHACCENT` the
  key is fine and the REFERENCE is the typo, so a key-only check passes while
  the field ships undefined — and its comment records that a key-only version
  was mutation-tested and did not fail on exactly that edit. It also carries a
  "the parsers actually found the lists" assertion against a silent regex miss.

**Not searched, and deliberately**: storage key names outside
`lib/constants/storage.js`. Raw strings there are a SANCTIONED convention for
legacy code ("use key constants for new keys; legacy code uses raw strings"), so
a census would return a long list of known-legacy usage and no finding. Restated
screen routes are covered by sweep 39's `navTargetsRoute.test.ts`.

**WHERE THE QUESTION HAS GOT TO.** Four finds and eight negatives. The shapes
that paid all had one property: a copy that is **inert** — read by nothing that
breaks when it is wrong (a display map, a test's list, a progress-bar threshold,
a type annotation). The ones that did not pay were either a live second CALLER
of one definition, a deliberately frozen snapshot, or a genuine derivation. That
is the sharper form of the question for whoever picks it up: **not "is this
written twice" but "is one of the two copies never exercised".**

### 53. Can a credit fire twice for one piece of work? — 2026-09-23 — **NEGATIVE, and the process is the finding**

A genuinely new question, because the duplicated-fact one was worked out (52).
**Idempotency: can a screen pay XP, tick a quest or record a completion TWICE
for one piece of work?** The class is live in this repo's history — sweep 35
found `SlangScreen` marking the Speak Quest OUTSIDE its one-shot guard, so
re-finishing ticked it again and auto-promoted the tier-2 quest for one quiz,
and `AIStoryScreen` had a dead `setDone` that guarded nothing. Both were found
incidentally. Nobody had swept the class deliberately.

**RESULT: 13 candidates, ZERO real findings.** Every one is guarded, and the
interesting part is that almost none of them is guarded the way a matcher
expects.

**ATTEMPT 1 COULD NOT BE CALIBRATED, AND THAT IS WHY ITS OUTPUT WAS THROWN
AWAY.** It censused credits inside `useEffect` bodies and reported 8 unguarded.
The calibration cases — `SlangScreen`, `AIStoryScreen`, `LessonProduceStep`, all
three known-fixed — reported **zero crediting effects**, because they credit from
event HANDLERS. **A census whose calibration cases are not in its population
cannot be calibrated**, so its eight results said nothing. This is the single
most useful thing in this entry: today three scratch censuses each produced a
confident wrong answer, and the difference here is that the calibration was
written BEFORE the output was read.

**ATTEMPT 2 calibrated** (population widened to every credit call site; the
`CREDIT` list had to gain the rep recorders before `AIStoryScreen` appeared in it
at all) and reported 13. **Four of the first four checked by hand were FALSE
POSITIVES**, all for the same reason: the guard is a handled-SET consulted with
an early return (`if (handledRef.current.has(k)) return;`), after which the
credit fires only once the set reaches the total. Widening the detector for that
shape took 13 → 5.

**All five of those are guarded too**, verified by reading:

- `MistakesScreen` — credits on `reviewIdx + 1 >= reviewDeck.length`, and the
  index only increases. A new deck is new work and SHOULD credit again.
- `BureaucraticScreen`, `TechVocScreen` — `if (answers[qi] !== undefined) return`
  per question, then an exact-equality completion check against a monotonically
  growing answer set.
- `PhonemePracticeScreen` — a real one-shot flag, `!celebrated` +
  `setCelebrated(true)`; the detector missed it only because it is not spelled
  `done` or `already`.
- `FlashcardRecallQuiz` — the thinnest of the five and still sound: `finishQuiz`
  sets `phase: 'done'`, and the Next button renders only while
  `phase === 'quiz'`. A double-click would need both clicks inside one React
  batch, and discrete click events render between them. **Noted as the weakest
  guard of the set — a state-driven unmount rather than an explicit latch — but
  not reported as a defect, because it is not one.**

**THE REUSABLE LESSON.** Idempotency in this codebase is guarded STRUCTURALLY
and in at least five different shapes: a monotonic index, a handled-set with an
early return, an exact-equality completion check, a named boolean flag, and a
phase change that unmounts the control. That variety is exactly why a static
census over-reports it — and why the answer to "is this class worth a ratchet"
is **no**: a guard that recognises five shapes will miss the sixth and flag the
seventh. The class is better served by the existing per-screen tests.

**DO NOT RE-RUN THIS AS A CENSUS.** If a double-credit is ever reported from the
field, the fast path is the five shapes above — check which one the screen uses,
not whether it has a `useRef`.

### 54. Two guards that git could not show you — 2026-09-23 — **1 REVIEW HAZARD, CLOSED + RATCHETED**

**The question.** The queue's own guidance says to name two things the app must
keep in agreement. This one: **what the tooling treats as reviewable text** vs
**what is actually source code**.

**How it was found, which is worth keeping.** Not by asking the question — by
`grep -rn "grammar_track" src/` printing

```
grep: src/tests/snapshotShapeAgreement.test.ts: binary file matches
```

instead of the matching lines. A `.ts` file reported as binary is not a thing to
scroll past.

**The finding.** Two committed TypeScript test files carried a **raw NUL byte**,
each a deliberate sentinel:

| file | the sentinel | offsets |
| --- | --- | --- |
| `snapshotShapeAgreement.test.ts` | `consts.get(t) ?? '<NUL>'`, then `key.includes('<NUL>')` — marks a key part the scan could not resolve | 4601, 4660 |
| `case-drill-banks.test.ts` | `` `${i.q}<NUL>${i.answer}` `` — a composite-key separator | 1983 |

Both offsets are inside git's 8000-byte binary sniff window, so **git classified
both files as binary**. Measured, not reasoned — `git diff --numstat` returns
`-` `-` for each, and the diff body is one line:

```
Binary files a/src/tests/case-drill-banks.test.ts and b/src/tests/... differ
```

That is what `git diff`, `git log -p`, `git grep`, GitHub's pull-request view and
a plain `grep -rn` over `src/` have shown for the whole life of both files.

**WHY IT MATTERS HERE SPECIFICALLY.** Both files are GUARDS, and this repo's
stated method for a guard is: mutate it, read the diff, record the mutation in
the commit message. A guard whose diff cannot be rendered is one **nobody can
review a change to** — a reviewer sees a single line saying the bytes differ.
The mechanism that keeps every other guard honest was unavailable for these two.

**STATED HONESTLY: this is a REVIEW HAZARD, not a learner-facing bug.** Both
tests ran correctly and still do; ESLint read both files without complaint
(verified: exit 0, no output). Nothing a learner can see was ever wrong. The
cost was entirely to visibility — which is why nothing caught it.

**The fix is an ENCODING change, not a behaviour change, and that was proved
rather than asserted.** Both sentinels are now written `'\u0000'`: same value,
spelled with an escape instead of the raw byte. The proof is set-equality, not a
pass count — `snapshotShapeAgreement`'s two derivations (`appWrites()` and
`snapshotExpectations()`) were dumped to JSON from the OLD file and the NEW one
via an identical appended probe, and the two dumps are **byte-identical across
223 lines**. Both suites: 23 passed before, 23 passed after.

**The ratchet: `src/tests/sourceIsText.test.ts` (4 tests, 1.7s).** The file list
comes from `git ls-files` — the real tracked set, not a hand-written one, which
is the shape that decays — filtered by extension; any file the repo stores as
text must carry no control byte but tab, newline and carriage return. Binary
assets are not extension-matched and are never read. Swept the whole repo:
**2,079 tracked text files, exactly the 2 findings above and nothing else.**

**One assertion was loosened before it shipped.** The first draft required the
literal spelling `\u0000`. `\x00` and `\0` are equally correct, so that would
have failed a tidy refactor that fixed nothing — the false-positive trap this
repo has already paid for once. It now requires *no raw byte* plus *some*
escape spelling.

**Mutation-verified, five, each confirmed landed before its result was read:**

| mutation | fails |
| --- | --- |
| raw NUL back into `snapshotShapeAgreement` (the original defect) | 2 |
| raw NUL back into `case-drill-banks` | 2 |
| raw NUL in a NON-test production file (`src/lib/cefr.ts`) | 1, message names `src/lib/cefr.ts:2` |
| `trackedTextFiles()` forced empty | 1 — **and the sweep itself still passed**, which is why the floor exists |
| `0x00` added to `ALLOWED` with a real NUL planted | **0 — absorbed**, confirming `ALLOWED` is the single predicate doing the work |

The fourth is the one worth remembering: it is the decorative-guard shape in
miniature. Without the `> 1500` floor, an empty listing makes the sweep pass
vacuously and the guard reports success on a repo it never opened.

**WHAT THIS DOES NOT COVER**, so nobody assumes otherwise: a control byte in a
file whose extension is not in the text list, and a NUL past byte 8000 of a
large file (git would still call that file text — outside the hazard, but
reported anyway, because a raw control byte in source is never intentional and
the escape always works).

**Verification.** Full suite **604 files, 9687 passed, 25 skipped, 0 failures**
(603/9683 before — the +1 file and +4 tests are exactly this change).
`typecheck`, `lint` and the Croatian lint (0 findings across 521 files) clean.
E2E audit: test files only — no component, screen, navigation element or
user-visible string changed, so no spec can reference any of it.

---

### 55. Twenty-five skipped tests, and the reason beside one of them was wrong — 2026-09-23 — **1 FALSE EXEMPTION REASON, CORRECTED + RATCHETED**

**The question**, continuing sweep 54's axis: *what else does a tool silently
decline to show?* The sharpest form for a test suite: **does every committed test
file actually execute, and does every test inside it actually run?** A test the
runner never collects, or a suite silenced from within, is a decorative guard at
the CONFIG level — green run, zero coverage.

**Half one: orphan test files. NEGATIVE, and cleanly so.** Diffed every
test-shaped tracked file against `vitest.config.js`'s include patterns:
**654 test-shaped files, 604 collected** — which is exactly the 604 the full
suite reports — **48 are `e2e/*.spec.js`** (Playwright, run separately, correct)
and **2 are the deliberate emulator-only exclusions** (`firestore-rules`,
`firestore-merge-semantics`, each with its own config and a comment naming the
command). Nothing is orphaned. Do not re-run this.

**Half two: `.only`. NEGATIVE.** Zero occurrences of `it.only` / `test.only` /
`describe.only` across `src/`, `functions/`, `scripts/` AND `e2e/`. Worth having
measured: a single stray `.only` silences the rest of its file while the run
stays green.

**Half three: the 25 skipped tests — where the find is.** All 25 come from one
data-driven skip, `FULL_CONTRACT_DRILLS` in `exerciseContract.test.tsx`
(`const testFn = drill.skip ? it.skip : it`). Every entry carries a
`skipReason`, and every reason is a CLAIM about the component — mostly "option
buttons use inline styles (no `.ob` class); the helper cannot drive it".

**A claim nothing re-runs decays silently**, which is this file's own
`idioms`-exemption lesson. So all 25 were un-skipped and run:

- **24 fail at `expect(award).toHaveBeenCalledTimes(1)` with 0 calls.** The
  helper genuinely never drives them to completion. Reasons honest, skips
  legitimate.
- **ZnamGame is different, and its recorded reason is FALSE.** It fails at the
  NEXT assertion: `award` fired once with positive XP and `activityType`
  `'vocabulary'`. So the helper drives the screen fine — the `.tc` priority
  handles its section-select — and "no `.ob` MC buttons" was never the problem.

**What actually blocks ZnamGame was in the component, not the harness.** It
awards per CORRECT answer and gates credit on a **>=75% comprehension pass**
through `completeExercise`. The helper clicks the first option; ZnamGame shuffles
with its own `sh()`, so it scores ~1/N, never reaches the gate, and `markQuest`
is never called. Confirmed by supplying the registry-correct
`activityType: 'vocabulary'` / `questArg: 'vocab'`: every award assertion then
passes and it fails on `markQuest` with 0 calls.

**So the skip is legitimate and the reason was wrong** — and wrong in the
expensive direction: someone reading it would have gone to add `.ob` classes to
ZnamGame's buttons and achieved exactly nothing. Reason corrected in place, with
the measurement that produced it.

**Checked on the way, and clean:** ZnamGame calling no `markQuest` directly is
NOT the sweep-41 defect. `completeExercise` marks it from
`args.questKind ?? entry?.questKind`, and the registry has
`znam: g('gc', 'vocab', 'vocabulary')` — already pinned by
`lib/completion/__tests__/exerciseRegistry.test.ts:40`.

**The ratchet: `describe('the skips are still real')`, 26 new tests.** Each
skipped entry is RE-RUN and required to still fail; when one stops failing the
drill has become driveable and the message says to delete its `skip`. The body
was extracted to one `assertContract(drill)` so the staleness check re-runs
EXACTLY the real test rather than a restatement of it.

**The predicate is "the claim still holds", not "award is never called", and
that distinction is the whole point.** The obvious predicate would have looked
right, passed 24 times, and been wrong about the one entry that mattered —
ZnamGame DOES call `award`. Asserting the claim itself is cause-agnostic, so it
cannot be fooled by a drill that fails for a new reason.

**Mutation-verified, three, each confirmed landed:**

| mutation | fails |
| --- | --- |
| a DRIVEABLE drill (`NumTime`) marked `skip: true` — the exact decay | 1: "NumTime still cannot be driven" |
| the skipped list forced empty | 1 — **and the 25 staleness tests vanish** (42 passed -> 17), which is why the floor exists |
| a `skipReason` deleted | 1, message names `TypingScreen` |

One test was written and then DELETED before shipping: `expect(typeof
assertContract).toBe('function')` proves nothing and is the decorative shape this
file exists to catch.

**WHAT THIS DOES NOT COVER.** The 24 honest skips are still 24 drills whose
completion contract this suite does not exercise; the ratchet guards the
exemption, not the coverage. Closing that needs a helper that can drive
text-input, tile-ordering, timer and multi-phase drills — a real piece of work,
recorded here rather than implied to be done.

---

### 56. The production slot serves speaking the learner cannot be measured on — 2026-09-23 — **1 REAL DEFECT, MEASURED; FIXED IN #720 — see sweep 59**

**Where it came from.** Sweep 55 left one item open: the 24 skipped drills have
no contract test. Rather than build a universal UI driver, the tractable question
was source-level — **does each of those screens route completion through
`completeExercise` (registry-driven, already covered) or hand-roll it?**

**23 of 25 route through `completeExercise`.** Their credit is registry-driven
and covered. Only **`DictationScreen` and `ShadowingScreen`** hand-roll
`award` + `markQuest` + `setStats` + `writeDelta`.

**TWO CONCERNS ABOUT THOSE TWO WERE CHECKED AND ARE WRONG — recorded so nobody
re-chases them:**

1. **They do NOT strand the daily session.** `useAward` writes
   `nh_session_completed` unconditionally BEFORE its `amt === 0` early return,
   guarded on `started === _effectiveEx`, and its comment names dictation
   explicitly (2026-07-16 completion-matrix audit). The session is credited.
2. **The missing `EXERCISE_COMPLETE_EVENT` is harmless HERE.** Only
   `completeExercise` dispatches it, so the next-step pill does not fire for
   these two — but both call `goBack()` in the same handler, and the pill hides
   on ANY navigation, so it could never have shown. The landing surface's own
   persistent prompting takes over. No dead end.

**THE REAL FINDING IS THE MASTERY LEDGER, and it is sweep 21's defect in the
half nobody checked.** Sweep 21 fixed the RECEPTIVE side: reading screens graded
and awarded themselves, passing `'reading'` to `award`, which reaches XP and
quests and never the ledger — so reading could never become measured and that
LATCHED the input slot. The PRODUCTION side was never audited. Measured across
all 8 `PRODUCTION_POOL` screens:

| screen | kind | writes the mastery ledger |
| --- | --- | --- |
| `writing_guided` | write | yes (`recordMasteryEvent`) |
| `speaking_guided` | speak | yes (via `requestSpeakingCoach` -> `recordMasteryEvent` weight 2) |
| `writing` | write | yes |
| `production_drill` | speak | yes (`completeExercise` -> `recordExerciseOutcome`) |
| **`shadowing`** | **speak** | **nothing** |
| **`speaking`** | **speak** | **nothing** |
| **`speaking_sprint`** | **speak** | **nothing** |
| **`dictation`** | **write** | **nothing** |

**Three of the five `speak` entries teach the ledger nothing.** Established by
ABSENCE OF IMPORT, not by sampling: none of the three imports any
`masteryLedger` function, so none can write one.

**The mechanism is identical to sweep 21's.** `weakestProductionKind` scores an
absent or not-yet-`tested` cell as MAXIMUM need (`!m || !m.tested ? 1 : ...`) —
correct for CHOOSING what to serve — and its tiebreak (`speak >= write`) favours
speak. So unmeasured speaking pulls the P2.5 slot toward speak.

**MEASURED WITH THE REAL PICKER, not argued.** `selectProductionExercise` with
`kindBias: 'speak'` filters to `kind === 'speak'` and then picks UNIFORMLY at
random, so the share of speak picks that can never discharge the need is:

| level | ledger-silent picks |
| --- | --- |
| **A2** | **297/400 = 74%** (`production_drill` is B1+, so 3 of 4 candidates are silent) |
| B1 | 236/400 = 59% |
| B2 | 235/400 = 59% |
| C1 | 226/400 = 56% |

So the app tells the learner speaking is their weakest skill, serves speaking,
and **56-74% of the time the work they then do cannot change that answer.**

**WHY IT IS A BIAS, NOT SWEEP 21'S HARD LATCH — the distinction matters.**
Reading had NO writer at all, so it latched permanently. Speaking has two
(`speaking_guided`, `production_drill`), so a learner CAN discharge it — they
just have to be dealt one of the two, against odds of roughly 1 in 4 at A2.

**WHY THE EXISTING GUARD DOES NOT CATCH IT.**
`masterySkillsReachable.test.ts` asks whether every ledger skill has SOME
producer, and covers the RECEPTIVE picker's latch. Speaking has a producer, so
it passes — while three of five speaking screens record nothing. **Reachable is
not complete**, which is this file's own recurring lesson wearing new clothes.

**WHAT IS HONESTLY FIXABLE, AND WHAT IS NOT.** Only record a measurement that
was actually taken (NEVER-DO 13):

- `DictationScreen` — has `score` and `total`/`answeredTotal`. Fixable.
- `ShadowingScreen` — has `scoredOk.current` / `scoredItems.current`, REAL
  acoustic scores from `PronunciationScorer`. Fixable, guarded on
  `scoredItems > 0` (Web Speech may score nothing).
- `SpeakingScreen` — `wordScores[].score` is a real Azure percentage or null,
  and the screen already uses a 60 bar for "acoustic pass". Fixable over the
  scored-only subset.
- **`SpeakingSprintScreen` — NOT fixable.** It tracks `rounds` only: attempts,
  no correctness. There is no measurement to record and inventing one would be
  the fabrication this file forbids. It is honestly silent.

**A SECOND, SMALLER FINDING FOUND ON THE WAY.** `ShadowingScreen` awards
`activityType: 'listening'` and `markQuest('listening')` while being the
`kind: 'speak'`, `micRequired: true` production entry that scores the learner
ACOUSTICALLY. The app classifies one screen three ways; `dictation` is worse —
`kind: 'write'` in `PRODUCTION_POOL`, `category: 'speaking'` in `sessionPools`,
and `activityType: 'listening'` at its award call. Not touched here: changing an
award's `activityType` moves XP and quest semantics and needs its own decision.

**AND A COMMENT THAT WILL MISLEAD THE NEXT READER.** `ShadowingScreen:613` says
its 70 bar is "the one the line above already uses for the speaking ledger".
There is no mastery-ledger call in the file; it means
`logPronunciationWeakness` (the pronunciation-weakness curriculum, line 729), a
different store. That wording is what made this worth double-checking rather
than trusting.

**FIX DEFERRED, DELIBERATELY AND WITH THE REASON.** It touches four
learner-facing production screens, and adding a LISTENING writer (dictation)
shifts the P2.8 receptive alternation, which is a composition change needing its
own measurement — the same discipline that kept `dictation` from being retagged
`adaptive`. It does not belong mixed into a test-only PR. Recorded here in full
so nothing is lost, per the owner directive.

---

### 57. Four screens the registry describes wrongly — 2026-09-23 — **1 LIVE MISLABEL + 2 LATENT LANDMINES — STILL OPEN, narrowed; see the queue**

**The question**, which sweep 56 handed over: *where does one screen carry more
than one classification, and do they agree?* Sweep 56 found `dictation` labelled
three ways (`kind: 'write'` in `PRODUCTION_POOL`, `category: 'speaking'` in
`sessionPools`, `activityType: 'listening'` at its award call). That is a shape,
not an instance, so it was swept.

**The derivation.** `exerciseRegistry.ts` is the declared "single source of truth
for screen completion policy" and carries `questKind` + `activityType` per key.
A screen that HAND-ROLLS `award(..., type)` / `markQuest(id)` states the same two
facts itself. Where a screen does both — hand-rolls AND has a registry row — the
two must agree. Compared all 267 registry rows against every component that
hand-rolls (i.e. does NOT call `completeExercise`), matching on the `vs` key the
screen writes.

**Four disagreements, and they are not all the same severity:**

| key | registry says | the screen does | verdict |
| --- | --- | --- | --- |
| `shadowing` | `e('lc', 'speak', 'speaking')` | `award(…, 'listening')`, `markQuest('listening')` | **the SCREEN is wrong — LIVE** |
| `story-comprehension` | `e('lc', 'listening', 'listening')` | `'reading'` / `'reading'` | the ROW is wrong — latent |
| `writing` | `e('lc', 'grammar', 'grammar')` | `'writing'` / `'write'` | the ROW is wrong — latent |
| `srsreview` | `e('rc', 'grammar', 'default')` | `'review'` / `'master'`,`'review'` | the ROW is stale — benign in effect |

**LIVE vs LATENT, established rather than assumed.** Only two things import the
registry: `completeExercise` (reads `questKind`/`activityType`) and `appUtils`,
which uses `EXERCISE_COMPLETION[key]` for MEMBERSHIP only. None of these four
screens calls `completeExercise`, so their rows' `questKind`/`activityType` are
read by nothing today. Three are therefore **inert copies** — the sweep 48–51
shape exactly, a fact kept twice where only one copy is exercised.

**THE TWO LATENT ONES ARE LANDMINES, not tidy-ups, because each would REVERSE a
defect this file already records fixing:**

- `story-comprehension` is the GRADED READER. Its row says `listening`. Wire that
  screen to `completeExercise` — which is the migration the registry's own header
  describes as in progress — and the reader starts recording LISTENING evidence,
  re-creating sweep 21 ("the ledger could never measure reading, and that latched
  the input slot") from the opposite direction.
- `writing` is a first-class skill whose measurement drives
  `weakestProductionKind`. Its row says `grammar`, so migrating that screen would
  book writing practice as grammar and starve the production picker.

`srsreview` is the mild one: `'default'` and `'review'` are both absent from
`ACTIVITY_TO_SKILL`, so neither records a skill and the effect is identical. Only
the `questKind` genuinely differs (`grammar` vs `master`/`review`).

**THE LIVE ONE CONFIRMS SWEEP 56 FROM THE OTHER SIDE.** Sweep 56 noted that
`ShadowingScreen` awards `'listening'` while being the `kind: 'speak'`,
`micRequired`, acoustically-scored production entry, and left it as an
observation. The registry independently says `speak`/`speaking` for that same
key. So **the app already knows shadowing is speaking**, in the file that calls
itself the single source of truth, and the screen credits the LISTENING quest
for it. A learner doing acoustically-scored speaking practice is credited
listening, today, on every finish.

**THE META-FINDING, and it is the reusable part.** The registry's own header
says these fields for "not-yet-migrated rows are best-known from the audit and
are re-verified against each component when that screen is wired up". That is
honest — and nothing performs the re-verification, and nothing notices a
disagreement in the meantime. **A documented TODO with no mechanism is the
`wrangler.toml` "Shared with scheduled worker above" pattern**: a sentence
asserting two things agree, doing none of the work of making them.

**FIX JOINS SWEEP 56's PR, deliberately.** Both findings centre on the same
screen and the same class, so splitting them would put two changes to
`ShadowingScreen`'s classification in two PRs. That PR will: correct the three
stale rows, change `ShadowingScreen` to award `'speaking'` / `markQuest('speak')`
to match the registry (a learner-VISIBLE change — which quest is credited — so
it needs its own E2E audit), add the ledger writers sweep 56 identified, and add
a guard that fails on any registry/screen disagreement so the header's promised
re-verification finally has a mechanism.

---

### 58. One screen in two pools, disagreeing — and a CLAUDE.md NEVER rule applied to only one copy — 2026-09-23 — **1 RULE VIOLATION, FIXED IN #721 — see sweep 60**

**Completing sweep 57's question.** That sweep compared the registry against
hand-rolling screens. Sweep 56's original instance also involved a second pair:
`sessionPools.category` vs `PRODUCTION_POOL.kind`/`category`. Swept it.

**Exactly ONE id is listed in both pools, and it disagrees:**

```
dictation   PRODUCTION_POOL  category='writing'  kind='write'   cefr=B1
            sessionPools     category='speaking'                cefr=B1
```

**This is a documented NEVER rule, violated in one of the two copies.** CLAUDE.md,
Production Teaching: *"Pool entries `writing_guided`/`writing`/`dictation` carry
`category: 'writing'`. **Never retag them back to 'speaking'** and never remove the
route — that re-opens the 'weak writing has no practice path' hole (the 0%-writing
C1 case)."*

**It is NOT a regression — the rule was never applied to this copy.** `git log -S`
puts the `sessionPools` entry in #216 ("7a — A1 rotation expansion"), which
PREDATES the 2026-08-18 production-teaching work that made `writing` first-class
and wrote the rule. `PRODUCTION_POOL`'s entry was set correctly then; the second
copy had no reason to change and nobody changed it. Same class as sweeps 48–51 —
one fact, two homes, one of them inert to the edit that mattered.

**THE CONSEQUENCE IS NARROWER THAN IT LOOKS, and every candidate was checked
rather than assumed:**

| consumer of `category` | affected? |
| --- | --- |
| `skillGroupOf` (P3 variety) | **no** — `SKILL_GROUP` maps BOTH `speaking` and `writing` to the `'speaking'` family |
| `isGrammarStructure` (P2.7) | no — neither is a grammar category |
| `inputKindOf` (P2.8) | no — neither is an input modality |
| `setSessionCategory` | no — it is called with the activity **id**, not the category |
| **`skillBoost`** | **YES** — `makeSessionSkillBoost` resolves `category -> skillForCategory -> profile[skill]` |

So the one live effect: **a learner measured weak at WRITING gets no boost for
Dictation in the P3 fill, and a learner weak at SPEAKING gets it boosted** — for
a hear-it-and-type-it screen with no microphone. Modest, real, and a one-word
fix.

**IT COMPOUNDS WITH SWEEP 56.** Dictation is boosted as speaking here, records
NOTHING to the mastery ledger (56), and its `PRODUCTION_POOL` twin calls it
writing. Three statements about one screen, no two agreeing.

**Fix joins the 56+57 PR** — same screen, same class, and the guard that PR adds
for registry/screen disagreement should cover pool/pool disagreement too: any id
in two pools must carry one category.

---

### Sweep 59 — the recommender reads a store that daily practice does not write (2026-09-23)

**Started as "fix sweeps 56+57+58" and the fix turned out to be the small half.**
Re-verifying 56 from source rather than from the plan asked one more question —
_which screens can write the ledger at all?_ — and that is a different, larger
defect than the three screens the sweeps had named.

**THE STATEMENT, precisely.** There are TWO evidence stores and the practice
screens were writing the first but not the second:

| store                                 | written by                                                               | read by                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `lib/adaptive.ts` `recordTopicResult` | ShadowingScreen:815, SpeakingScreen:199, ListeningScreen:183 — all three | the adaptive topic panel / category picker                                                                         |
| `lib/masteryLedger.ts`                | none of them                                                             | `weakestProductionKind`, `weakestReceptiveKind`, `getNextStep`'s weakest-skill rung, the concept map, `SkillRadar` |

"Daily speaking writes nothing" is the OVERSTATEMENT I first wrote and it is
wrong: they all record. **The store the recommender reads is the one nobody
writes.** Say it that way — reading any one screen shows a `recordTopicResult`
call and looks fine, which is exactly why this survived.

**MEASURED WITH THE REAL SELECTOR, not reasoned about.** Harness at
`src/tests/_tmp_measure.test.ts` (vitest's include is `src/**/*.test.*`, so it
has to live inside src/), deleted immediately after:

| scenario                                                                       | speaking cell       | writing cell | `weakestProductionKind` |
| ------------------------------------------------------------------------------ | ------------------- | ------------ | ----------------------- |
| today: Shadowing + Speaking + Sprint daily for a month, Guided Writing 2x/week | **undefined**       | 0.70 tested  | **speak**               |
| wired: the same learner, a strong speaker (0.90) and weaker writer (0.70)      | 0.90 tested, strong | 0.70 tested  | **write**               |

So the harm is not "less evidence". **The recommender pointed at the WRONG
SKILL** — sending a strong speaker to more speaking and never to the writing
they were weaker at, which is the inverse of what the slot exists to do. A month
of daily spoken practice was invisible to it.

**MY FIRST MEASUREMENT WAS AN ARTIFACT AND I ALMOST SHIPPED IT.** The first
harness let NOTHING write the cell and reported "speak 40/40 days, latched".
`speaking_guided` IS served 8 of 40 production days (even 5-way rotation, real
`selectProductionExercise`) and DOES write, so the cell reaches `tested` inside a
month. Re-run with that simulated: still 40/40 'speak', but now for a LEGITIMATE
reason — 0.75 speaking really is weaker than 0.80 writing. **The bias was correct
and my "latch" reading was wrong.** Only changing the scenario to a learner who
practises from the PRACTICE TAB found the real thing.

**FIXED — five screens, each one line at its genuine completion point** (the
`writing_guided`/`relpron`/ReadingScreen shape, no award semantics changed):
ListeningScreen and DictationScreen (`listening`, `score`/`answeredTotal` — the
skipped-unheard denominator is already honest), ShadowingScreen and SpeakingScreen
(`speaking`), and **VideoLessonScreen**, which the guard found and no sweep had.

**VideoLessonScreen is the one worth remembering**: it had ALREADY been audited
for this exact class (the 2026-08-14 `markQuest('speak')` mislabel, and a missing
listening rep) and that fix stopped one store short — it added
`recordListeningRep()` for the Fluency Snapshot and not the ledger. Its award
kind is `'lesson'`, which `ACTIVITY_TO_SKILL` deliberately leaves unmapped, so
even a `completeExercise` wiring would have recorded nothing. **Two stores, one
written — the same shape, one store further along.**

**THE GUARD IS DERIVED** (`src/tests/sessionScreensFeedLedger.test.ts`, 9 tests):
every `PRODUCTION_POOL` screen and every P2.8 input-modality entry must reach a
ledger writer through the REAL router and the REAL import graph. It names no
screens — the hand-maintained-list decay this file has recorded four times.
Mutation-verified: each of the five writes removed fails 1 test.

**IT CAUGHT THREE THINGS I HAD WRONG, WHICH IS THE ARGUMENT FOR WRITING IT:**

1. **A false positive that would have made it decorative.** The first walk
   followed every import and reported `dialogue` as wired. Trace:
   `DialogueSim -> lib/aiPost -> lib/userContext -> lib/srs`, and srs.ts CALLS
   `recordSrsOutcome` internally — so **any screen importing `aiPost`, i.e.
   nearly every AI screen, passed while calling nothing.** That is the
   decorative-guard failure one level deeper than the declaration-stripping
   `speakingCoachReachable` already does. A stop-list would only have moved it
   again; the walk now follows `components/` and `hooks/` only, plus a two-entry
   allowlist of GRADING libs, because a screen's ledger write is in its own file,
   in something it composes, or in a library it delegates grading to.
2. **My own exemption reason, twice.** I exempted `production_drill` as "awards
   per answer, not on a completion" — carried over from the
   `practice/exercises/*` cluster. It calls `completeExercise` at line 1621, and
   the staleness test failed on it immediately. Then I exempted `dialogue` as "a
   CONVERSATION, not a graded task", reasoning from its pool metadata
   (`kind: 'converse'`). **DialogueSim's GUIDED mode grades**: `score` increments
   on `correctIdx` and the award is `score * 6` over `scenario.turns.length`;
   only the AI conversation half has no correctness signal. It is now WIRED, not
   exempted. Both mistakes were reasoning from the POOL ROW instead of reading
   the screen — and the guard caught only the first, because the second was an
   exemption for a screen that genuinely does not reach the ledger. **A staleness
   test cannot tell a correct exemption from a lazy one**; only reading the
   screen can. Every remaining reason was therefore read: `SpeakingSprintScreen`
   holds a `rounds` counter and no correctness variable at all,
   `GrammarReader` has no score, award or correctness, and `storymode`/`ai_story`
   award a flat 15 XP as activityType 'story'.
3. **And then the SECOND answer for `dialogue` was wrong too, in the other
   direction.** Having found that it grades, I wired it as 'speaking' — and that
   is worse than leaving it. Guided dialogue grades RECOGNITION: pick one of four
   options, no microphone, no acoustic score. Filing that as spoken-production
   evidence would let a learner who has never spoken read as a TESTED SPEAKER, at
   which point `weakestProductionKind` stops offering them speaking practice —
   the exact inverse of the defect this sweep fixes. `micRequired: false` on that
   pool row is a SCHEDULING decision (dialogue is the mic-blocked learner's A1
   production option); the ledger is a MEASUREMENT. **The two questions have
   different answers, and "the pool already calls it speaking" is not an argument
   about what was measured.** It is exempted, with that reason — and the
   exemption list is named `NOT_LEDGER_EVIDENCE`, not `NO_SCORE_TO_RECORD`,
   because two different reasons live in it and conflating them is what produced
   both wrong answers.

**WHAT WAS DELIBERATELY NOT DONE, and both are judgement calls, not oversights:**

- **ShadowingScreen's award/quest kind was left alone.** Three authorities say
  speaking (PRODUCTION_POOL `kind: 'speak'`, `micRequired: true`; the registry row
  `e('lc','speak','speaking')`) and only the award says listening, so changing it
  looked obviously right — **until `useAward` was read**: `recordListeningRep()`
  is keyed off activityType `'listening'`, and useAward's own comment NAMES this
  screen as a listening activity. Retyping the award would have silently dropped
  a synced, displayed Fluency Snapshot metric. Shadowing is genuinely both halves
  and the app already counts it both ways (production rep by SCREEN id, listening
  rep by activityType). The LEDGER question is separate and unambiguous — the
  score is an acoustic score of the learner's own speech — so only that moved.
  The quest question (listening has no `TIER2_MAP` row, so shadowing can never
  reach `speak2`) is left open rather than decided unilaterally.
- **The sweep-58 pool disagreement is NOT fixed here.** Retagging
  `CEFR_EXERCISE_POOL`'s `dictation` to `listening` would add it to the P2.8 input
  set — a session-composition change needing its own measurement. Mixing that into
  a ledger-wiring PR is two risks in one. Its own PR, with the measurement.

**A number that would have been fabricated.** An early probe reported "134 of 267
registry rows unreached". 119 of those are ModeDrill-backed and reach
`completeExercise` through `ModeDrill.tsx:131 key: id` — a PROP, which a literal
`key: '...'` grep cannot see. Checking the mechanism before reporting the number
is what stopped it. Report the census, not the grep.

---
---

### Sweep 60 — one screen, two pools, two categories (2026-09-23, CLOSED)

Sweep 58's finding, fixed. `dictation` is the ONLY id in more than one session
pool, and its two copies disagreed for five weeks: `PRODUCTION_POOL`
`category: 'writing'` (retagged 2026-08-18, with the comment saying so) against
`CEFR_EXERCISE_POOL` `category: 'speaking'`. PR #492 wrote the CLAUDE.md rule
asserting 'writing' of all three subjects and never touched `sessionPools.ts`.

**Live effect**, checked consumer by consumer rather than assumed:
`makeSessionSkillBoost` → `skillForCategory('speaking')`, so a learner the ledger
had measured weak at SPEAKING was boosted a hear-it-and-type-it screen with no
microphone.

**I CHOSE THE WRONG VALUE FIRST, AND THE REPO'S OWN GUARDS OVERTURNED IT.** My
recorded recommendation (F10/F10b in the scratchpad, measured over 40 sessions per
level with the real `selectGuaranteedInput`) was `listening` + `adaptive`, on the
reasoning that the screen SCORES hearing — which is true, and is why its ledger
write is `listening`. Two things killed it:

1. `inputKindOf` admits `listening`, so the tag ENROLS dictation in the P2.8
   guaranteed-input slot **while it remains a PRODUCTION_POOL member**. One session
   then counts it as a comprehension slot AND an output slot. Running the five
   session-composition suites with that version: **4 tests fail, 3 of them the
   documented "A1/A2 get exactly one output slot; B1+ get two" contract.** The
   fourth is the `generated` derivation, which flags dictation because
   `DictationScreen` calls `/api/explain-error` — a wrong-answer helper, not content
   generation, so it would have needed the `grammarreader`-style exemption too.
2. Without `adaptive` the tag is incoherent on its own terms: the two incumbent
   listening entries ARE adaptive, so their sort distance is 0 at every level while
   dictation's grows — putting it in the rotation at B1 and, purely through the
   distance sort, **nowhere above it**. Measured: B1 7/40, B2–C2 0/40.

**The fix is `'writing'` in both pools**, which is what CLAUDE.md has claimed all
along. It changes NO composition, and that is a property rather than a measurement:
`SKILL_GROUP` maps both `'speaking'` and `'writing'` to the one `'speaking'` family,
so the P3 variety pass cannot tell the two tags apart. All 158 tests across the five
composition suites pass unchanged.

**THE GENERAL RULE THIS SETTLES:** the pool category is a SCHEDULING fact (which
slot may serve this screen, what it varies against); the ledger skill is a
MEASUREMENT (what the score evidences). Dictation is scheduled as typed,
keyboard-safe, B1 written production and measured as listening. **They are allowed
to differ**, and #720 settled the identical distinction for `dialogue` one PR
earlier. My error both times was reading one off the other.

`poolCategoryAgreement.test.ts` asserts AGREEMENT rather than a particular value —
the value is a judgement for the pool comment; what no judgement justifies is one
screen carrying two categories, because then the answer depends on which slot
served it. It also pins the three non-obvious consequences (not in the input set,
same variety family, boost follows writing) and has a non-empty-set guard so it
cannot silently cover nothing. Mutation-verified: the original bug fails 3, the
`listening` version fails 4.

`skillGroups.ts`'s comment was corrected with it — it said `'writing'` has no
CEFR_EXERCISE_POOL entries and that its row existed "for type completeness". The
contingency it went on to describe ("if a writing entry ever joins the fill pool it
will vary against speaking") is now live, and is exactly why the retag moved nothing.

### Sweep 61 — the level filter that stood down at the level it protects (2026-09-23, CLOSED)

**The pair**, chosen by this file's own rule: `levelledBank` and the banks it
serves. `levelledBankReads.test.ts` asks whether every selecting use REACHES the
filter. Nothing asked what the filter then HANDS BACK — and below
`LEVELLED_BANK_MIN` (4) survivors it returns the WHOLE bank by design, so a
launch cannot bail or shrink to two questions on a classification gap. The
module's own docstring says that is "a floor, not a feature: when it fires for a
level the bank has no content there, and the honest fix is content." **Nobody
had measured where it fires**, and from the call site a bank that filters and a
bank the filter serves whole are the same line of code.

**Measured, all seven levelled banks at every level their screen can be reached
at.** One live instance: `WritingScreen`'s `PROMPTS` held A2 5 · B1 6 · B2 5 ·
C1 4 and **nothing at A1**, so an A1 learner drew from all twenty — C1 entries
included — on the keyboard-only production screen a mic-blocked learner gets at
every level. `TRANSLATE_PROD`, `BUILD_SENTENCES` and `ERROR_CORRECT` also fall
back at A1, and are NOT defects: `production_drill` is B1 in the pool and absent
from the search index, so A1 cannot reach it. LISTEN, DICTATION_DATA,
TRANSFORMS and TRANSLATE_DRILLS+C1_DRILLS are healthy everywhere.

**REACHABILITY IS THE HALF THAT MADE IT LIVE.** The pool gates `writing` at A2,
which is why A1 looked impossible; `src/data/content.tsx` carries
`go: 'writing'` in the search index and `SearchModal.navigate` calls
`setScr?.(r.go)` with **no CEFR check**, so search is an ungated door into every
screen it indexes. That is a general fact worth carrying forward: a screen's
pool `cefr` is a lower bound on scheduling, not on reach. `dictation` is B1 in
the pool and A1 through search too — it survives only because its bank has A1
content.

**Fixed as the docstring prescribes**: four A1 prompts authored (name/origin,
three things in a room, likes and dislikes, counting the family — subject forms,
present tense, negation, numbers), never by widening the floor.

**MY FIRST GUARD WAS DECORATIVE AND ONLY MUTATION SAID SO.** Written as
`levelledBank(bank, lv).length < LEVELLED_BANK_MIN`, it cannot fire on any bank
worth guarding: when the floor fires the returned array is the WHOLE bank, which
is longer than the minimum, not shorter. Deleting the A1 tier the file was
written about left it fully green. It measures the survivor count instead,
through the real function at `min: 0` (which disables the fallback), so the
predicate under test is production's own `isUnlocked`. **Assert on the side of
the function the defect is on** — a fallback that returns MORE is invisible to a
test for LESS. The file also carries a `lowestReachable` + `door` per bank,
because the door claim is what makes the assertion bind: relax `writing` to A2
and the missing tier passes.

**A SECOND DEFECT, CREATED BY THE FIX AND FOUND IN THE SAME HOUR.** The badge's
colour ternary ends on C1's violet, so a level with no arm of its own does not
render colourless — it renders AS C1. Adding A1 would have put the advanced
badge on a beginner prompt, with nothing looking wrong. Worse than
`dictationLevel`'s `undefined` shape for exactly that reason. A1 got an arm
(blue-800 on blue-100, 7.15:1 measured) and `writing-screen.test.tsx` now derives the
authored levels from the bank and requires an arm for each.

**Two housekeeping consequences, both non-optional.** The A1 tier took
`WritingScreen.tsx` past the 800-line ESLint cap, so the bank moved to
`src/data/writingPrompts.ts` beside `writingCurriculum.ts` — **the cap was not
raised and no override added**, and the new file joined the lint TARGETS with a
positive control (`hleb` in a new `hr` fails; restored, 0 findings across 522).
Moving it broke two guards in ways worth recording: my extractor balanced
brackets from the first `[` after the declaration and so parsed the TYPE
ANNOTATION's `[]` as the bank (caught by its own empty-bank assertion — the
reason that assertion exists); and `levelledBankReads` keeps two lists that mean
different things, DECLARATIONS and USES, so repointing both at the data file
fails — the use stayed in the screen.

**One documentation defect found on the way**, and it is this file's own most
repeated shape: CLAUDE.md said `BUILD_SENTENCES` and `ERROR_CORRECT` "carry no
`level` at all — a content gap, recorded rather than papered over." PR #630
levelled both (17/17 and 20/20) on 2026-09-07 and left the sentence standing for
sixteen days. Closing the gap changed the DATA; nothing read the prose.

Mutation-verified, four: the A1 tier deleted fails 1 (and survived the first
draft of the guard); every `level` stripped fails the vacuous-pass guard while
the per-level test passes, which IS the vacuity; the door relaxed to A2 passes;
the A1 badge arm removed fails 1.

**Not a discovery, and said plainly**: the WritingScreen call-site comment
already recorded "The bank has nothing at A1, and levelledBank's floor serves
the whole bank there, exactly as before." The sweep's outputs are the
MEASUREMENT across all seven banks, the reachability finding that turns a known
gap into a live one, the ratchet, the badge defect and the CLAUDE.md correction
— not the gap itself.

---

## NOT YET CHECKED — where the next field report will come from

Every defect the owner has actually hit is in this list, not the one above.
None of them crash, so no sweep above can see any of them.

- [x] ~~13 AI surfaces still do not name a refusal's cause~~ — CLOSED, sweep 13. 33 of 35 callers classify; the 2 remaining entries in
      KNOWN_UNCLASSIFIED are verified-correct degrades, not debt. The ratchet
      stops new ones and its floors sit at the measured values.
- [ ] **The ledger wiring stops at the two SESSION POOLS (sweep 59 scope).**
      `sessionScreensFeedLedger.test.ts` covers every `PRODUCTION_POOL` screen and
      every P2.8 input entry, because those are the screens the recommender
      SELECTS ON and therefore the ones whose evidence changes what is served
      next. It does NOT cover screens reachable only from the Practice tab. A
      grep (not a census — say which) found ~30 components that award a
      skill-bearing activityType and keep a score while reaching no ledger
      writer; the ones outside the pools are `PitchAccentScreen`,
      `PronunciationContrast` and the nine un-migrated `practice/exercises/*`
      screens (ColorAgreement, EmotionGender, Ordinals, ProfessionGender,
      QuestionWords, Riddles, Sibilarization, LogicQuiz, TenseFlip). **All of
      them feed `grammar`, which is the best-fed cell in the ledger** — 119 of
      the registry's `gated` rows reach `completeExercise`, most through
      `ModeDrill.tsx:131 key: id` and the rest as dedicated lesson screens (the
      split was not counted, only the total) — so the measurable harm is small — that is why
      they were left. They also award a fixed 2–5 XP PER CORRECT ANSWER rather
      than on a completion, so wiring them is a reshaping job, not a one-line
      addition. Before touching them: run the census properly rather than
      trusting the ~30, and check each awards on a completion the ledger can
      take a score/total from.
- [ ] **Behavioural correctness on live paths.** Renders fine, behaves wrong.
      (Credit-on-grade is closed — sweep 10. The DEAD-READ half is partly
      checked: sweep 29 ran the mirror of sweep 26's dead-write derivation over
      the snapshot's boolean predicates and over `stats.heritage`, and found two
      real defects. What that sweep did NOT cover, and the next person should:
      dead reads of NON-boolean snapshot fields, and consumers of `stats` fields
      other than `heritage` that nothing writes — the `badgesEarnable` suite
      does this for badge counters only — DONE for those, sweep 30, which found
      one real display defect and hardened the guard after a mutation survived
      it. The dead-read/dead-write family is now EXHAUSTED: snapshot booleans
      (29), badge counters (30), one-way snapshot fields and `Stats` fields
      outside `BadgeStats` (31, both negative). The live seam is INTERACTIONS
      BETWEEN FEATURES — sweep 31's first result came from there. Still untried:
      the retention ladder vs a date rollover with the app left open; a demotion
      (verification_fail rollback) vs content already unlocked and vs a daily
      plan built at the higher level — BOTH DONE, sweeps 46 and 47, both
      negative and both now pinned, with each carrying mechanism measured
      rather than assumed.

      **THE NAMED SUB-ITEMS ARE ALL DONE. The heading stays open because the
      class is open-ended, not because anything specific is outstanding** — and
      that distinction is the point of leaving it unticked. TWO NEW QUESTIONS
      have since been asked against it, and what each returned is recorded so
      nobody re-derives them:

      - **"Where does the app keep the same fact twice, with only one copy
        having a reason to change?"** — sweeps 48–51, **FOUR FINDS**, then
        sweep 52's eight negatives. Worked out. The sharpened form, which is
        what actually selected the finds: *is one of the two copies never
        exercised?* An inert copy (a display map, a test's list, a progress-bar
        threshold, a type annotation) drifts silently; a live second CALLER, a
        deliberately frozen snapshot and a genuine derivation all do not.
      - **"Can a credit fire twice for one piece of work?"** — sweep 53,
        **ZERO finds** from 13 candidates, and a recommendation NOT to ratchet
        it: the guards are structural in at least five different shapes, so a
        matcher that knows five will miss the sixth and flag the seventh.

      - **"What does the tooling treat as reviewable text, and is that what the
        source actually is?"** — sweep 54, **ONE FIND**: two guard files carried a
        raw NUL and were binary to `git diff`, `git grep` and GitHub's PR view,
        so every change to them was unreviewable. Ratcheted repo-wide by
        `sourceIsText.test.ts` over `git ls-files` (2,079 files). A review
        hazard, not a learner bug — and it is the first find in this file that
        came from the TOOLING half of an agreement rather than the code half.
        That axis is now swept for control bytes and otherwise untried: what
        else does a tool silently decline to show?

      - **"Does every committed test actually RUN?"** — sweep 55, the same
        tooling axis, **ONE FIND**. Orphan test files: negative (654 test-shaped,
        604 collected = the 604 the suite reports, 48 Playwright, 2 deliberate).
        `.only`: zero anywhere. The 25 skipped tests all carry reasons, and
        un-skipping every one showed **24 honest and ZnamGame's reason false** —
        it blamed the harness's buttons when the real blocker is the drill's own
        >=75% credit gate. Ratcheted by re-running each skip and requiring it to
        still fail. Still open on this axis: the 24 honest skips are 24 drills
        whose completion contract nothing exercises — the ratchet guards the
        exemption, not the coverage.

      - [x] ~~**one PR carrying sweeps 56 + 57 + 58**~~ — SHIPPED AS TWO, and
        the split was right. #720 (sweep 56) added the five ledger writers;
        #721 (sweep 58) fixed the pool-category disagreement. They did not
        belong in one PR: the first is about what a score EVIDENCES, the second
        about which slot may SERVE a screen, and conflating those two questions
        is precisely the error that made me pick the wrong value for
        `dictation`'s category first. See sweeps 59 and 60.
      - [x] ~~**three speaking screens the ledger cannot see**~~ — CLOSED by
        #720. Five screens now record at their genuine completion point
        (`ListeningScreen`, `DictationScreen`, `ShadowingScreen`,
        `SpeakingScreen`, `VideoLessonScreen`), and
        `sessionScreensFeedLedger.test.ts` derives the demand from
        `PRODUCTION_POOL` + the P2.8 input set rather than listing screens.
        `SpeakingSprintScreen` stays silent with its reason recorded in
        `NOT_LEDGER_EVIDENCE`, as does `dialogue` — guided dialogue grades
        RECOGNITION, and filing it as spoken evidence would have made a learner
        who never spoke read as a tested speaker.
      - **STILL OPEN, NARROWED: the three stale `exerciseRegistry` rows** (sweep
        57). `'story-comprehension'` is typed listening and is reading;
        `writing` is typed grammar and is writing. Re-checked while shipping
        #720: still wrong, and still INERT — no screen reaches those rows today,
        which is why they are landmines rather than defects. They would reverse
        sweep 21 and starve the production picker the moment a migration reads
        them. `ShadowingScreen`'s award kind was examined in #720 and
        DELIBERATELY left `'listening'`: `useAward` keys `recordListeningRep()`
        off that activityType and its comment names this screen, so retyping it
        silently drops a displayed Fluency Snapshot metric. Shadowing is both
        halves and the app already counts it both ways; only the LEDGER question
        was unambiguous, and that half is done.

      **WHAT THIS SUGGESTS FOR THE NEXT QUESTION.** Both of today's questions
      were about STATE OF THE CODE. The one that paid was about a fact with two
      homes; the one that did not was about a control-flow property that the
      codebase happens to enforce five different ways. The pattern across every
      productive sweep in this file is the same: **they compare two things the
      app itself already has to keep in agreement** — a claim against its
      evidence, a queue against its clearer, a payload against its consumer, a
      badge against its measurement. Questions that instead ask "is this code
      correct in isolation" have consistently returned nothing a test suite was
      not already catching. Pick the next question on that basis: name two
      things that must agree, and ask what would happen if they stopped.)
- [x] ~~LOW: `AIConversation` appended the raw `Error.message`~~ — FIXED. Both
      sites (:476/:593) drop the parenthetical and keep `cause` for diagnostics.
      The AbortError branch is untouched: its wording was already correct and
      context-appropriate, and reclassifying it through `failureFromError` would
      have swapped a right sentence for one that says "evaluator" in a
      conversation screen. Mutation-verified (M9: the parenthetical restored
      fails 1).
      The B2 listening section returned 400; the badge claimed C1 for a level
      nothing measured; feedback surfaces rendered nothing on failure.
- [x] ~~**Day-one path**~~ — CLOSED. The LESSON half is checked (sweep 7),
  PLACEMENT is checked (sweep 14 — one real defect, the inescapable Exit loop),
  the AUDIO leg is checked (sweep 19 — three real defects, all on the
  `ttsFetch` path), the FEEDBACK leg is covered by sweeps 8/13 plus
  `useExplainError`'s own classification, and the first DRILL is checked
  (sweep 22 — the day-one drill is the Alphabet quiz, and finishing it never
  signalled the session; one blocking and two mild defects, fixed).
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
- [x] ~~Lower priority: `fbLoadSRS` removal; `LevelQuiz.onPass` removal.~~ — DONE,
      sweep 27. Both removed; neither was a defect. The `onPass` class is now
      ratcheted by `routerOptionalProps.test.ts`, which also catches the
      historical `AlphabetScreen.award` instance.
