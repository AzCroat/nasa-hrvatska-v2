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

| screen                                                                  | what a refusal looked like                       |
| ----------------------------------------------------------------------- | ------------------------------------------------ |
| `AIListeningScreen`                                                     | names the cause inline — **correct**             |
| `SpeakingSprintScreen`                                                  | "Could not load audio. Check your connection..." |
| `LiveTutorScreen`                                                       | "Check your volume, speaker, or headphone..."    |
| News, PhraseOfDay, HeritageStory, StoryMode, GradedInput, Writing, Maja | silent                                           |

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
with `note`, 0 with `tip`.** So every authored explanatory line — _"šoht: the
iconic steel tower above a mine shaft, Labin's industrial symbol"_ — was
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

| ledger state        | weakest | listening | reading |
| ------------------- | ------- | --------- | ------- |
| empty               | null    | 30        | 10      |
| listening TESTED    | reading | **0**     | **40**  |
| both TESTED (fixed) | null    | —         | —       |

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

| key        | self-writes vs | own counter | what the pre-write costs                                    |
| ---------- | -------------- | ----------- | ----------------------------------------------------------- |
| `alphabet` | yes            | lc          | **20 XP + the session signal, permanently**                 |
| `falsefr`  | yes            | lc          | 1 lc, when the learner finishes inside 20s                  |
| `techvoc`  | yes            | lc          | 1 lc, same condition                                        |
| `writing`  | yes            | **none**    | nothing — dwell strictly ADDS an lc the screen never writes |
| other 12   | no             | —           | nothing; dwell is genuinely their only credit               |

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

| version     | what it did                                                                         | result                                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| under-match | resolved constants and import graphs                                                | 3 hits, missing keys                                                                                              |
| over-match  | excluded the writing file from the reader search                                    | **34 false positives**, including keys CLAUDE.md documents as read (`nh_case_primer_seen`, `nh_recent_exercises`) |
| over-ALIVE  | a "prefix consumer" clause picked up a bare `nh_` literal in App.tsx's pruning loop | **0 hits** — it hid both real findings                                                                            |

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
cards on 135 of 273 sittings (worst by 28) and the re-checks on 77 (worst by 5)** — about half of all retention sittings.

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

| screen              | pool entry              | awarded    | the contradiction                                          |
| ------------------- | ----------------------- | ---------- | ---------------------------------------------------------- |
| `VideoLessonScreen` | `category: 'listening'` | `'lesson'` | also `markQuest('speak')` — on a screen with no microphone |
| `StoryModeScreen`   | `category: 'reading'`   | `'story'`  | `markQuest('reading')` **on the next line**                |
| `AIStoryScreen`     | `category: 'reading'`   | `'story'`  | —                                                          |

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
fallback counts identically. The shipped rule is _speech input path OR its own
award calls the work `'speaking'`_: exactly the two defects, nothing else. The
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

The owner's standing line is _"if I ever click on anything and it doesn't work
it's over."_ This is the sweep that asked it as a question with a derivation
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

| quest     | text                   | XP  |
| --------- | ---------------------- | --- |
| `master`  | "Review 5+ SRS words"  | 30  |
| `master2` | "Review 15+ SRS words" | 55  |

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
  and marked **`culture`**: _"Explore a Croatian region or media item"_, for a
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
  completion paths that _did not exist in the list_, so the key was written and
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

| #   | where                              | as                                                        |
| --- | ---------------------------------- | --------------------------------------------------------- |
| 1   | `lib/cefr` `getUserCefr`           | an inline `if` ladder                                     |
| 2   | `StatsTab` `CEFR_META[...].needed` | the "next level at N" target                              |
| 3   | `StatsTab` `CEFR_FLOOR`            | a SECOND inline map, ~400 lines below #2 in the same file |
| 4   | `heroHelpers` `CEFR_BANDS`         | floor + threshold pairs                                   |

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
the reason written down: _"Structural copy of SessionCategory (defined in
useDailySession) — kept inline here to avoid a hook→data→hook import cycle."_
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
CLAUDE.md: _"Three copies of the payload key list must agree: `core.js` KEYS,
`core.test.js` ALL_KEYS, and `generate-content-etags.mjs` CORE_KEYS (the etag
must move when the payload does)."_ So the first thing was to measure whether
they did.

    endpoint  KEYS        32
    etags     CORE_KEYS   32
    test      ALL_KEYS    31   ← missing CULTURE_DEEP_DIVES

**The test's "every export is present" assertion covered 31 of the 32 keys the
endpoint actually serves**, and the missing one is the payload for the 24
culture deep-dive essays.

**THE SIZE OF THAT HOLE HAS TO BE STATED PRECISELY, AND MY FIRST VERSION
OVERSTATED IT.** I wrote that `CULTURE_DEEP_DIVES` "was actually unguarded".
It was not: `cultureDeepDives.test.ts` carries a test named _"CULTURE_DEEP_DIVES
is in ALL THREE content-pipeline key lists"_ which greps `_data/core.js`,
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

Its title said _"all 27 named exports"_ while the list held 31 — the nav-table
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

- **`audio.ts:37`** — "_`_nativePost` … was built to mirror it exactly_". A
  HISTORICAL note about a consolidation that already happened: the ~90-line body
  is gone and the call delegates. No live copy. The comment describes a past
  state and says so.
- **`text/similarity.ts:9`** — "_Only the raw `levenshtein` is shared with
  TypingScreen; the local `normalize()` stays local there_", because it carries
  two extra mappings (`š/ś`, `ž/ź`). **Verified in the file**: `TypingScreen`'s
  `normalize` really does carry both, and omits the punctuation stripping
  `normalizeCroatian` does. Two different functions with different jobs, not a
  copy. (The reason as written is incomplete — it names the two mappings and not
  the punctuation difference — but it is not wrong.)
- **`OnboardingTour.tsx:50`** — "_One definition, shared with AIConversation's
  `isHeritage`_". Both call `isHeritageLearner()` from `lib/heritageLearner`.
  Genuinely one definition.
- **`AspectDrillScreen.tsx:633`** — documents why the screen writes the
  `aspectdrill` path key itself when its exercise key is `aspect`. A recorded
  workaround for a real mismatch, not a duplicated fact.
- **`applyRemoteProgress.ts:39`** — "_A frozen copy of the old order, NOT
  `src/data/bakaPhrases`_". A deliberately FROZEN copy, which is the one case
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
a census would return a long list of known-legacy usage and no finding.
**THAT REASON WAS TRUE AND IT ANSWERED A DIFFERENT QUESTION — searched in sweep 82.** "A raw string is allowed" says nothing about whether a key's WRITE site
and its READ site spell it identically, which is the pair that has to agree; the
two guards over that class were both scoped to the `nh_` namespace, so the whole
legacy set was uncovered. Widened and mutation-proven there; no live defect
today. Restated
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

| file                             | the sentinel                                                                                           | offsets    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| `snapshotShapeAgreement.test.ts` | `consts.get(t) ?? '<NUL>'`, then `key.includes('<NUL>')` — marks a key part the scan could not resolve | 4601, 4660 |
| `case-drill-banks.test.ts`       | `` `${i.q}<NUL>${i.answer}` `` — a composite-key separator                                             | 1983       |

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
repo has already paid for once. It now requires _no raw byte_ plus _some_
escape spelling.

**Mutation-verified, five, each confirmed landed before its result was read:**

| mutation                                                         | fails                                                                         |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| raw NUL back into `snapshotShapeAgreement` (the original defect) | 2                                                                             |
| raw NUL back into `case-drill-banks`                             | 2                                                                             |
| raw NUL in a NON-test production file (`src/lib/cefr.ts`)        | 1, message names `src/lib/cefr.ts:2`                                          |
| `trackedTextFiles()` forced empty                                | 1 — **and the sweep itself still passed**, which is why the floor exists      |
| `0x00` added to `ALLOWED` with a real NUL planted                | **0 — absorbed**, confirming `ALLOWED` is the single predicate doing the work |

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

**The question**, continuing sweep 54's axis: _what else does a tool silently
decline to show?_ The sharpest form for a test suite: **does every committed test
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

| mutation                                                            | fails                                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| a DRIVEABLE drill (`NumTime`) marked `skip: true` — the exact decay | 1: "NumTime still cannot be driven"                                                        |
| the skipped list forced empty                                       | 1 — **and the 25 staleness tests vanish** (42 passed -> 17), which is why the floor exists |
| a `skipReason` deleted                                              | 1, message names `TypingScreen`                                                            |

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

| screen                | kind      | writes the mastery ledger                                         |
| --------------------- | --------- | ----------------------------------------------------------------- |
| `writing_guided`      | write     | yes (`recordMasteryEvent`)                                        |
| `speaking_guided`     | speak     | yes (via `requestSpeakingCoach` -> `recordMasteryEvent` weight 2) |
| `writing`             | write     | yes                                                               |
| `production_drill`    | speak     | yes (`completeExercise` -> `recordExerciseOutcome`)               |
| **`shadowing`**       | **speak** | **nothing**                                                       |
| **`speaking`**        | **speak** | **nothing**                                                       |
| **`speaking_sprint`** | **speak** | **nothing**                                                       |
| **`dictation`**       | **write** | **nothing**                                                       |

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

| level  | ledger-silent picks                                                            |
| ------ | ------------------------------------------------------------------------------ |
| **A2** | **297/400 = 74%** (`production_drill` is B1+, so 3 of 4 candidates are silent) |
| B1     | 236/400 = 59%                                                                  |
| B2     | 235/400 = 59%                                                                  |
| C1     | 226/400 = 56%                                                                  |

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

**The question**, which sweep 56 handed over: _where does one screen carry more
than one classification, and do they agree?_ Sweep 56 found `dictation` labelled
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

| key                   | registry says                       | the screen does                                   | verdict                             |
| --------------------- | ----------------------------------- | ------------------------------------------------- | ----------------------------------- |
| `shadowing`           | `e('lc', 'speak', 'speaking')`      | `award(…, 'listening')`, `markQuest('listening')` | **the SCREEN is wrong — LIVE**      |
| `story-comprehension` | `e('lc', 'listening', 'listening')` | `'reading'` / `'reading'`                         | the ROW is wrong — latent           |
| `writing`             | `e('lc', 'grammar', 'grammar')`     | `'writing'` / `'write'`                           | the ROW is wrong — latent           |
| `srsreview`           | `e('rc', 'grammar', 'default')`     | `'review'` / `'master'`,`'review'`                | the ROW is stale — benign in effect |

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
Production Teaching: _"Pool entries `writing_guided`/`writing`/`dictation` carry
`category: 'writing'`. **Never retag them back to 'speaking'** and never remove the
route — that re-opens the 'weak writing has no practice path' hole (the 0%-writing
C1 case)."_

**It is NOT a regression — the rule was never applied to this copy.** `git log -S`
puts the `sessionPools` entry in #216 ("7a — A1 rotation expansion"), which
PREDATES the 2026-08-18 production-teaching work that made `writing` first-class
and wrote the rule. `PRODUCTION_POOL`'s entry was set correctly then; the second
copy had no reason to change and nobody changed it. Same class as sweeps 48–51 —
one fact, two homes, one of them inert to the edit that mattered.

**THE CONSEQUENCE IS NARROWER THAN IT LOOKS, and every candidate was checked
rather than assumed:**

| consumer of `category`      | affected?                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| `skillGroupOf` (P3 variety) | **no** — `SKILL_GROUP` maps BOTH `speaking` and `writing` to the `'speaking'` family        |
| `isGrammarStructure` (P2.7) | no — neither is a grammar category                                                          |
| `inputKindOf` (P2.8)        | no — neither is an input modality                                                           |
| `setSessionCategory`        | no — it is called with the activity **id**, not the category                                |
| **`skillBoost`**            | **YES** — `makeSessionSkillBoost` resolves `category -> skillForCategory -> profile[skill]` |

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

### Sweep 62 — the census the queue asked for, and two lies inside yesterday's guard (2026-09-23, CLOSED)

The queue item said, in its own words, _"run the census properly rather than
trusting the ~30."_ Done, with the shipped guard's OWN reachability definitions
(`sessionScreensFeedLedger.test.ts`'s `WRITER_CALL`, `GRADING_LIBS`, `BLOCKED`,
`mayDescend`) so the census and the guard cannot disagree about what "reaches
the ledger" means.

**THE NUMBER IS 34, AND THE RECORDED REASON WAS WRONG.** The entry said _"All of
them feed `grammar`, which is the best-fed cell in the ledger — so the measurable
harm is small."_ Measured over all 381 routed components: **17 grammar, 12
vocabulary, 5 speaking.** The conclusion survives; the argument for it does not,
and it survives for reasons the entry never stated:

- The 12 `vocabulary` screens are **not** unfed. Flashcards, McGame, MatchGame,
  ZnamGame, ReviewScreen, TypingScreen, WordSprint, ClozeEngine, MyWordsScreen,
  VocabJournal and LessonScreen all call `srMark` → `getSRScore` →
  `recordSrsOutcome`, which is the app's highest-volume vocab evidence. They read
  as unfed to any walk that refuses to enter `lib/` — including the census's, and
  including the shipped guard's.
- The 5 `speaking` screens are each already reasoned about: `DialogueSim` and
  `speaking_sprint` carry written exemptions (sweep 59), and `AIConversation`,
  `LiveTutorScreen` and `MajaScreen` are free conversation with no score at all.
- **Zero of the 34 sit in a session pool** — checked against the real pool data
  through the real router — so sweep 59's guard has no gap on its own subject and
  its scope statement is accurate.

So: a NEGATIVE on the defect, with the recorded justification corrected. A wrong
reason beside a deferred item is how the `idioms` exemption survived a staleness
test, which is why this is written down rather than quietly ticked.

**THEN THE CENSUS TURNED ON THE GUARD, AND FOUND TWO NAMES THAT LIE.** Both were
shipped by me the previous day in #720.

1. **`whisperClaudeScorer` matched NOTHING, anywhere.** It is an object —
   `export const whisperClaudeScorer: SpeakingScorer = { … }` — handed to the exam
   runner as `scorer: whisperClaudeScorer` and never called by that name. The
   guard required call syntax for all six writers, so that entry read as coverage
   of the exam speaking path and supplied none. **CLAUDE.md already carries a NEVER
   rule for this exact shape one step removed** — "never name a transport helper in
   a guard's URL-matching alternation without checking it passes a URL" — and it
   recurred in a brand-new file written by someone who had just read that rule.
   Writers are now split: `FUNCTION_WRITERS` matched as calls, `VALUE_WRITERS`
   matched bare (handing a scorer to a runner IS the wiring), with the value
   writer's own `const` declaration stripped so its defining module cannot satisfy
   itself.
2. **The SRS answer path was missing entirely.** `srMark` / `getSRScore` is the
   third grading path and the one that feeds `vocab`. Including it is NARROW, not a
   re-opening of the `lib/` hole sweep 59 closed: `mayDescend` still refuses to
   enter `src/lib` and `src/data`, so only a DIRECT call in a screen or a component
   it composes counts — which is exactly the act of grading an answer. Verified not
   to weaken anything: none of the five screens wired in #720 calls either name, so
   every mutation that PR recorded still fails.

**THE NEW GUARD IS THE ONE THAT WOULD HAVE CAUGHT BOTH**, and it asks the question
nothing asked: _does each name in the writer set actually write, and does it match
anything?_ Either can go false silently — a writer that stops calling
`recordMasteryEvent` leaves every screen delegating to it passing while recording
nothing.

**ITS FIRST VERSION WAS DECORATIVE AND MUTATION SAID SO.** Gutting
`requestSpeakingCoach`'s real `recordMasteryEvent` call left the suite green,
because `speakingCoach.ts` opens with a header comment reading "mastery ledger:
recordMasteryEvent(skill 'speaking', weight 2)" — **the module's prose about
itself satisfied the check.** Comments are stripped now. That is the same finding
`codeqlPushTrigger` recorded from the other direction, met again at the cost of
one mutation.

**A HARNESS BUG WORTH RECORDING, because it produced a confident wrong reading.**
`sed … && grep -c … && npx vitest` — `grep -c` returning **0** exits NON-ZERO, so
the `&&` chain short-circuited and the test never ran; the "18 passed" I read was
the next command's post-restore run, and I reported a surviving mutation that had
never been attempted. Confirming a mutation LANDED is not enough: confirm the
measurement RAN.

Mutation-verified, four: the shipped `whisperClaudeScorer` bug restored fails 3
(including the new matches-nothing test); `requestSpeakingCoach` stopped writing
fails 1 (and SURVIVED until comments were stripped); #720's own ShadowingScreen
mutation still fails 1, unchanged, so nothing was weakened; the SRS answer path
stopped writing fails 2.

### Sweep 63 — the registry describes screens that never read it (2026-09-23, CLOSED)

Sweep 57's leftovers, finished — and its own classification corrected on the one
entry that mattered most.

**I REPORTED THESE AS "three stale rows, all inert" AND ONE WAS LIVE.** Sweep 57's
table says so plainly; I summarised it from memory rather than re-reading it, which
is the failure this file exists to prevent. `shadowing`'s row says `speak`/`speaking`
— the file that calls itself the single source of truth for completion policy —
while the SCREEN credited only the LISTENING quest. A learner who shadowed with a
working microphone finished an acoustically-scored speaking exercise and read
"Speak Quest: not done", every time.

**THE FIX IS CONDITIONAL, AND THE UNCONDITIONAL VERSION WOULD HAVE BEEN WORSE THAN
THE DEFECT.** The 2026-08-14 change that moved the listening screens off
`markQuest('speak')` was RIGHT — listening is not speaking — and it swept up the one
screen of four that is ALSO speaking. Reinstating the mark outright would credit a
speaking exercise to a learner who never spoke: `acousticScore === null` is a
SUPPORTED path on that screen (no mic, scorer down) and it deliberately never
penalises a keyboard-only learner. That is the `dialogue` mistake #720 corrected, in
a new place. The mark now fires on `scoredItems.current > 0` — this block's OWN
measured-speech predicate, which the pass gate above and the ledger write below both
already rely on, so the quest and the ledger cannot disagree about whether speech
happened. Marking two quests from one screen is not novel: `VideoLessonScreen`
already marks both. The AWARD kind stays `'listening'` (the `recordListeningRep`
reason from #720 is unchanged), so this adds credit and removes none.

**The three inert rows were corrected rather than left**, because the registry's own
header describes migrating screens onto `completeExercise` as in progress and each
wrong row lands the moment its screen migrates:

- `writing` said grammar/grammar → `write`/`writing`. Writing drives
  `weakestProductionKind`; migrating WritingScreen would have booked writing
  practice as grammar and starved the production picker.
- `story-comprehension` said listening/listening → reading/reading. **Verified
  against the screen, not taken from sweep 57's table**: `GradedInputScreen` awards
  `'reading'` and marks the `reading` quest. Recording reading as listening
  re-creates sweep 21 from the other direction.
- `srsreview` said grammar/default → **questKind UNSET**, activityType `'review'`.
  The activityType is cosmetic (both values are outside `ACTIVITY_TO_SKILL`). The
  questKind is the interesting half: filling it in with the quest that "counts"
  would make `completeExercise` fire a bare `markQuest('master')`, and that is
  exactly the defect the screen's own comment records fixing — one card clearing
  "Review 5+", and two clearing "Review 15+" through TIER2_MAP's promotion. **A
  field left empty on purpose needs the reason written beside it**, or the next
  person fills it in.

**ROWS ARE NOT DELETED EVEN THOUGH NOTHING CALLS THEM.** Enumerated: 267 registry
rows, 20 of which no static key, no ModeDrill id and no lesson screenId reaches. But
`completeExercise` is not the only consumer — `appUtils`'s `distinctExercisesDone`
counts `stats.vs` entries that are registry KEYS for the badge thresholds, and
`writing` and `dialects` reach `vs` through `BLACK_HOLE_SCREENS`. So an unreached
row can still be load-bearing by a path that never touches the fields this sweep
corrected. I nearly reported "20 dead rows"; checking the second consumer is what
stopped it.

**`registryMatchesScreen.test.ts` is the mechanism sweep 57 lacked** — it found all
four by hand and nothing stopped a fifth. It resolves each row to its screen through
the REAL router, compares the row against what the screen hand-rolls, and carries
ONE exemption (`shadowing`'s award kind) checked in both staleness directions plus a
third check that the exemption's stated REASON is still true.

**TWO HARNESS DEFECTS, BOTH CAUGHT BY CHECKING A REPORTED FINDING BY HAND.**
(1) A fixed 700-character route window ran past the end of a route block — the first
`<Component>` is usually `ScreenErrorBoundary`, which is not lazy — and attributed a
NEIGHBOUR's award kind to the key, reporting `listening_comprehension` as
disagreeing with a screen that contains no `award(` call at all. (2) Resolving rows
through the router ALONE covered `story-comprehension` with nothing, because it is
not a route at all but a `vs` key the graded reader writes; measured, restoring its
original wrong value left the router-only guard fully green. **A guard that resolves
its subjects one way covers only the subjects reachable that way**, and the
reachable set is not obvious from the list of ids.

Also corrected: `appUtils` explained `distinctExercisesDone` by citing "the
registry's 72 rows" — it is 267. The COUNT was stale by a factor of three and the
ARGUMENT was untouched, because it rests on the number of distinct activity TYPES
and that is still exactly 6. The test pins the load-bearing inequality (types < 10,
the badge threshold) rather than either number in prose.

Mutation-verified, five, each confirmed landed: each of the three corrected rows
reverted fails 1; the speak-quest mark removed fails 1 (the exemption's reason goes
stale); and the unbounded route window fails 1, which is the harness bug above
re-armed.

E2E: no spec asserts quest state, quest counts or XP totals, and under E2E there is
no microphone — `scoredItems` is 0, so the new mark never fires there at all.

### Sweep 64 — the level four screens showed was the day-one placement (2026-09-24, CLOSED)

**The question**, chosen after the duplicated-fact vein was worked out: _where is
an ABSENT or STALE value read as a permissive default?_ `cefrRank` maps any
unrecognised string to 0, so an absent CONTENT level is visible to everyone
(documented and intended, `cefr.ts:78`) while an absent USER level silently locks
a learner to A1. Tracing what actually reaches the gate as the user level found
something better than the absent case.

**`nh_level` IS THE PLACEMENT RESULT AND NOTHING ELSE.** Written in exactly two
places, both inside `PlacementTest`; never advanced as a learner earns their way
up. `getGenerationCefr` exists for precisely this and says so in its own
docstring — "generators that read it serve placement-level content to learners
who have since reached C1/C2" — and `AIListeningScreen` carries a comment
explaining that it moved off the raw key for that reason. **Four screens still
read it raw**, each with its own invented default.

**THE FOUR ARE NOT EQUIVALENT, AND MY FIRST WRITE-UP SAID THEY WERE.** I posted a
four-row table as though one defect appeared four times; reading what each screen
DOES with the value is what separated them, and one of the four is not a defect
in the same sense at all:

| screen                    | what the value decides                                      | verdict                                  |
| ------------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| `SpeakingSprintScreen` ×2 | the PROMPT POOL, and the level RENDERED on the setup screen | real — no way to change it               |
| `AspectScreen`            | how much scaffolding the lesson shows                       | real, milder — errs toward more teaching |
| `VocabJournal`            | metadata attached to a saved word via an API call           | milder still, different in kind          |
| `VideoLessonScreen`       | the INITIAL level — the screen has its own picker           | a wrong DEFAULT the learner can override |

So a learner placed at A2 who has since reached C1 drew A2 sprint prompts for
ever, and one who skipped placement drew **B1 whoever they were** — while the
setup screen told them "Level: B1". That is a number the app SHOWED a learner
while holding a better one.

**The fix is one line per site and safe in all four at once**, because
`getGenerationCefr()` takes no argument (it reads the persisted profile itself,
by design, for callers without StatsContext — which is why two MODULE-LEVEL
functions could call it with no plumbing) and returns the **higher** of placement
and earned. It can only ever raise a learner's level. **That property is the
whole reason a four-site change is safe, so it is asserted rather than trusted**
— a test drives the real function at every placement with a zero-XP learner and
requires the result never to rank below the placement. Mutation-verified in the
DANGEROUS direction: making the helper prefer `earned` fails 2.

**Three call sites, not two.** `pickPrompt()` is called twice and `getUserLevel()`
once; both are module-level and neither is exported. Counting them before editing
is the LISTEN lesson ("this entry said both launch sites and there were three")
applied on purpose rather than after the fact.

`placementLevelReaders.test.ts` derives every raw reader from source and requires
each to be the sync/wire layer with its reason — `cefrCertification` (the one
reconciling read), `progressSnapshot`, `firebase`, `applyRemoteProgress`, and
`PlacementTest` (which writes it) — checked in both staleness directions.
Mutation-verified, three: the original sprint bug restored fails 1; an exemption
for a file that does not read the key fails 1; the helper's no-regression
property broken fails 2.

E2E: no spec asserts a CEFR label on any of the four. `ai-video-lesson` asserts
the six level BUTTONS are present, not which is selected; the `Level:` matches in
the 180-day audit are `info()` logging; the Speaking Sprint block matches loose
regexes and types answers.

### Sweep 65 — the spec's own setup wrote the state it then contradicted (2026-09-24, CLOSED)

**Found by CI, not by a sweep**: `E2E Tests (Cross-Browser)` went red on #724
(`b93e0d71`) at `verification-gate.spec.js:146`, three attempts, identical
string — expected `400 XP`, got `You've earned 350 XP of practice since your
last check`. Master was green on the PR's own base (`0b4ec48a`, run
35945156618), so by the usual reading it was "mine". **It was not, and
establishing that took reading the mechanism rather than the diff.** #724
touched `SpeakingSprintScreen`, `AspectScreen`, `VocabJournal`,
`VideoLessonScreen` and one new test file — nothing on Home, nothing near the
gate.

**The mechanism.** `seedProvisional` writes the certification blob with
`attempts: []`, then `beforeEach` visits Home. That is the never-attempted
case, so `verificationQuietStatus` takes its "seeded DUE" branch and WRITES
`nh_cefr_prompt_baseline = currentXp - VERIFICATION_RETURN_XP` = 1500 - 350 =
**1150**. The test then re-seeds an attempt stashed at `xp: 1100` and reloads;
localStorage survives a reload, the later-stretch-wins rule prefers the stored
1150 over the attempt's 1100, and `earnedSince` is 350 rather than 400 — which
is also why the failure string reads exactly `VERIFICATION_RETURN_XP`.

**Why it was a flake and not a permanent failure.** The baseline is only
written once `currentXp` is hydrated (the card renders NOTHING at 0, by
design), and `beforeEach` awaits only the nav landmark before the test reloads.
So the write is in a race with the reload: fast runner → no write → 400 →
green; slow runner → write → 350 → red. It had been latent for as long as the
cadence existed.

**Reproduced deterministically before touching anything** — added a temporary
`waitForFunction(() => localStorage.getItem('nh_cefr_prompt_baseline') !==
null)` before the reload and got CI's exact string locally, against a fresh
`npm run build` and the container's own chromium
(`/opt/pw-browsers/chromium-1194`, since the installed Playwright wants a
browser build this image does not carry — `executablePath` via a throwaway
config, never `playwright install`).

**Fix, two parts and both load-bearing:**

1. `seedProvisional` now ends `localStorage.removeItem('nh_cefr_prompt_baseline')`.
   Init scripts re-run on every navigation including the reload, so the cadence
   half starts clean each load and only the attempt-driven half — what this file
   tests — decides.
2. `beforeEach` now anchors on the gate card being VISIBLE. The card renders
   nothing while `currentXp` is 0, so its visibility is the proof that the
   engine ran against hydrated XP and therefore that the baseline write has
   happened. Without it the fix is unfalsifiable locally, because the defect
   only appears when the race lands.

**Verified:** 5/5 pass with the fix. **Mutation-verified:** dropping the
`removeItem` (anchor kept) fails 1 test — the returning-hero one — on every
run, not intermittently, which is the difference part 2 buys.

**What this sweep cannot see:** other specs whose `beforeEach` navigation
writes state the test later contradicts. The shape is general —
`page.addInitScript` re-runs on every navigation but localStorage PERSISTS
across a reload, so a seed that only WRITES what the test needs inherits
whatever the setup visit wrote. Not surveyed; a candidate for a later sweep is
every spec that reloads after re-seeding a key the app also writes.

### Sweep 66 — three Learn Path tiles that ticked for work done elsewhere (2026-09-24, CLOSED)

**The question, picked by this file's own rule** (_name two things that must
agree_): "this tile reads complete" and "the learner did this tile". `stats.vs`
is append-only and GLOBAL, so a key written once is set for ever — and a second
path item testing the same key is complete before the learner reaches it.

Two guards already sit either side of this and neither asks it:
`learnPathTapCompletion` forbids an item gated on its OWN id (ticked by the
opening tap); `learnPathReachableCk` forbids a `vsIncludes` key nothing writes
(never tickable at all). **Between them is "ticked by a DIFFERENT item", which
nothing covered.**

**Derived, not read.** Nine destinations are visited twice by the served path.
Seven repeats drop the `vsIncludes` leaf and re-gate on a higher counter (lp53,
lp55, lp56, lp57, lp62, lp63, lp66) — so the convention is the AUTHOR'S, not
mine. Three did not:

| key           | pre-ticks                         | measured with the real `evalCk`                                                   |
| ------------- | --------------------------------- | --------------------------------------------------------------------------------- |
| `listening`   | lp_listen_basics@L1 → **lp17@L3** | a day-two beginner (xp 40, lc 2, one tile opened) already has a LEVEL-3 tile done |
| `history`     | lp31@L5 → **lp61@L6**             | lc 31 learner: level 6 reads 2/18 done, one of them never opened                  |
| `pitchaccent` | lp50@L6 → **lp70@L7**             | doing the PITCH ACCENT drill ticks "Tongue Twisters: Expert"                      |

**lp70 is the worse one and is a second, distinct shape.** Its leaf read
`vsIncludes: 'pitchaccent'` — lp50's leaf verbatim, copied when the item was
written and the counter updated while the key was not. It names a screen the
tile does not open, so doing the tongue twisters themselves **never** ticked it
(they write `brzalice`) while a different topic's drill did. It is the only one
of 97 items whose `vsIncludes` is not its own destination key.

**The harm is not cosmetic.** `evalCk` feeds three consumers: `LearnPath`
renders the tile done, the **80% threshold that unlocks the next level** counts
it, and `HomeTab`/`LearnTab` pick the next path item by SKIPPING completed ones
— so the app never recommends a tile it wrongly believes is finished.

**Fix**: each repeat drops the inherited leaf and keeps its own counter gate —
lp17 `lcAtLeast 12`, lp61 `lcAtLeast 40`, lp70 `xpAtLeast 2500` — which is
exactly what the other seven repeats already do. Nothing is loosened and every
item still declares a criterion (`learnPathTapCompletion` asserts that).

**`learnPathInheritedCk.test.ts`** is the guard, two clauses because they fail
differently: (A) no `vsIncludes` key is tested by more than one item; (B) an
item's `vsIncludes` key IS its own destination key (`go`, or `al_<lessonId>` for
animlesson). Plus an EFFECT assertion driving the REAL `evalCk` over every
repeat pair with only the first tile's key set and all counters at zero —
because a structural pin on the DSL's spelling survives the DSL changing.

**Mutation-verified, four**, each confirmed landed: lp17's leaf restored fails
2 (A + the effect test); lp61's restored fails 2 (the same two); lp70's restored
fails 2 (A + B, and **not** the effect test — its key belongs to another tile's
destination, which is precisely why clause B has to exist); and an UNSHARED
wrong key (`vsIncludes: 'srsreview'` on lp70) fails **B alone** while
`learnPathReachableCk` and `learnPathTapCompletion` both stay green — the
direct check that neither sibling suite already covered this.

**A negative result worth not re-deriving**: all 57 distinct `vsIncludes` keys
are producible, which `learnPathReachableCk` already asserts — I re-derived it
from the registry + the black-hole map + hand-rolled `vs: [...]` writes in
components before finding that suite, and it agrees. Four of the five keys my
first universe flagged are written by SCREENS calling `setStats` directly
(`past_tense_lesson`, `pitchaccent`, `aspectdrill`, `pitch_accent`), invisible
to any registry-derived set.

**What this sweep cannot see**: the `ctIncludes` half. All 20 of those leaves
match their item's own `topic` field (checked), but nothing here asks whether
two items share a TOPIC the same way three shared a vs key — `ct` is append-only
too. Not surveyed.

**Payload note**: `learnPath.js` is server content and `_data/_etags.js` is
gitignored and regenerated by `prebuild`, so a client's cached path is
invalidated on the next build with nothing to commit.

### Sweep 67 — three negatives and one ratchet (2026-09-24, CLOSED)

Sweep 66 named its own uncovered half, so this sweep started there and then
kept asking the same question of neighbouring pairs. **Three negatives and no
defects** — recorded in full so none of them is re-derived.

**1. The `ctIncludes` half of the Learn Path — CLEAN.** `stats.ct` is
append-only exactly like `stats.vs`, so the inheritance shape sweep 66 found
could exist here too. Measured over all 97 items: **0 of 20 distinct topics
tested by more than one item, and 0 leaves naming a topic other than the item's
own `topic` field.** The `animlesson` group looks like 19 items sharing a
destination and is not — they differ by `lessonId`, which is why sweep 66's
guard keys on `go|lessonId` rather than `go`.

**2. Search targets — CLEAN, and the one place with NO guard at all.**
`SearchModal.navigate` sends a row's `go` straight to `setScr` with no CEFR
check and no existence check, over a HAND-LISTED array of ~48 screens. An
unrouted key is a tap that lands on a screen key nothing matches: no error, no
boundary, a blank route. Measured against the real router: **2,467 rows, 67
distinct targets, all 67 routed, 430 router screens.** The vocab branch is
correct too — `navigate` sends `{ go: 'lesson', topic: r.cat }` through
`launchPathItem`, and every vocab row carries its `cat`.

**3. `EXERCISE_DIFFICULTY` — CLEAN, and it is a MECHANISM rather than luck.**
The map defaults an unlisted id to tier 3 _silently_, which is the decay shape
this file keeps meeting; 306 rows against a 305-entry pool. It has not decayed
because `session-coverage.test.ts:165` already asserts every
`CEFR_EXERCISE_POOL` entry has a row — and `C_LEVEL_DRILL_ENTRIES` is spread
into that same pool (`sessionPools.ts:313`), so the 51 C-level drills are
covered by the same assertion. **Check for the existing guard before writing
one.**
**My outlier heuristic was wrong and reading the four hits is what showed it.**
Flagging "high CEFR with a low tier, or low CEFR with a high tier" reported
`sentbuild`, `maja`, `live_tutor` (A2, tiers 4–5) and `pronunciation_assess`
(A1, tier 4). None is a defect: the scale is **1 = recognition … 5 = open
production**, not a CEFR proxy, so an A2-gated open conversation genuinely IS
tier 5. Two scales that both run 1–6-ish are not the same scale.
One orphan: `lessonreview` has a difficulty row and no pool entry, because the
retention slot (P1.2) serves it directly and never sorts by difficulty. Inert,
not wrong.

**The ratchet: `searchIndexTargets.test.ts`.** Written despite the clean
measurement, because **this exact index has already decayed once** —
`learningIndex.test.ts` records `buildSearchIndex` reaching **0 of 180 lessons**
while its own placeholder read "Search lessons…". It calls the REAL
`buildSearchIndex()` and reads the REAL router rather than restating the list,
so a typo in a hand-added screen row fails CI instead of a learner's tap.
Non-vacuity floors sit well under the measured values, so content churn cannot
trip them while an index that returns nothing does.
**Mutation-verified, two:** one screen row typoed (`brzalice` → `brzalica`)
fails 1; the vocab rows stripped of `cat` fails 1 — and that second one is the
half a route-existence check alone would miss, since `go: 'lesson'` stays
perfectly valid while the navigation loses the topic it opens on.

**A FOURTH NEGATIVE ARRIVED MID-SWEEP, from CodeQL rather than from me.** Alert
#80 (`js/file-system-race`) posted against `registryMatchesScreen.test.ts` on
the MERGED #723, quoting `readdirSync(dir)` + `statSync(p).isDirectory()` +
`readFileSync(p)`. **That code was already fixed inside that same PR**, commit
`9514e876`, before it merged: the walk uses `readdirSync(dir, { withFileTypes:
true })` — which answers "directory or file" from the SAME syscall that listed
the entry, so there is no separate stat to race — with the read guarded in a
try rather than preconditioned on an earlier check, and `resolveModule` went
through `statOrNull()` for the `existsSync`-then-`statSync` half. **An alert is
anchored to a LINE IN A COMMIT, so a fix inside the same PR leaves the alert
pointing at code that no longer exists** — the mirror of the "a dismissal is
keyed to a location" note in CLAUDE.md, and worth knowing before re-chasing one.

**The grep that followed said 16 files and the census said none**, which is the
`~80 practice surfaces` lesson again. 16 other files under `src/tests/` match
`statSync(p).isDirectory()`; **not one is this finding.** Every one stats only
to decide whether to RECURSE and collects file paths for reading later in
another scope, and the two `readFileSync(p` hits among them are a helper's own
parameter (`inputRepsRecorded.test.ts:49`) and an unrelated scope 36 lines away
(`dwellPreWriteSuppression.test.tsx:207`). Checking what those two matches
actually were is what separated "16 instances" from zero.
**Those 16 were deliberately NOT rewritten.** A scanner shape that has not been
flagged is not a reason to touch sixteen working harnesses, and doing so would
be the refactor-beyond-the-ask this file forbids. Replied on the thread
(`#723 discussion_r4089701318`) rather than pushing, because there was nothing
to push.

**What this sweep cannot see:** whether a routed target is the RIGHT screen for
the row, and whether a search result the learner is CEFR-gated out of should be
reachable at all. `levelledBankFloor` already records that search is an ungated
door and treats that as a fact to design against rather than a defect; nothing
here revisits that decision.

### Sweep 68 — the router's three names per branch (2026-09-24, NEGATIVE)

Each of the router's 435 `currentScreen === 'x'` branches names its screen up to
three times: the comparison, the boundary's `key`, and the boundary's `name`.
The `name` is what a crash is REPORTED under, so a drifted one sends the next
person reading Sentry to the wrong screen — the diagnostics-that-lie class the
audio work is about, one level up.

**Result: 0 disagreements, 0 unwrapped tab surfaces.** All six tab components
(`HomeTab`, `LearnTab`, `GradTab`, `RazgovorTab`, `HrvatskaTab`, `ProfileTab`)
sit inside a boundary. The five branches without one are four documented
`ScreenGuard` reload/deep-link fallbacks (`animlesson`, `grammar_unit_detail`,
`lesson`, `grammar` — each carrying its own comment about the blank screen it
exists to prevent) and one `currentScreen === 'dashboard'` that is a ternary for
a transition key, not a render branch at all. The single name "mismatch" is the
tab shell's `dashboard` branch naming `HomeTab`, which is right: it names the
component that can throw, not the screen key.

**TWO HARNESS DEFECTS, BOTH CAUGHT BEFORE THEY BECAME A REPORT, and both are
repeats of findings already in this file.**

1. A fixed 400-character window ran past the end of a branch and paired each
   screen with the NEXT branch's boundary — reporting 4 disagreements that do
   not exist (`animlesson`→`grammarreader`, `lesson`→`grammar`, …). That is
   sweep 63's 700-character window verbatim. Bounding each block by the next
   `currentScreen ===` took it to 0.
2. The matcher required `key="…"` BEFORE `name="…"`, and the tab boundaries
   carry no `key` — so the entire tab shell, the most important surface in the
   file, was invisible to the check that was supposed to cover it. The first
   run's "only HomeTab is wrapped" reading would have been a fabricated defect.
   **An attribute a guard requires is a filter, not a formality.**

**No ratchet written.** Nothing here is a hand-maintained list that can decay:
each branch's three names sit on adjacent lines, and a wrong one is visible in
the diff that writes it. A guard would restate the router to the router.

**THE HONEST READING OF FIVE NEGATIVES IN A ROW** (sweep 67's ct / search /
difficulty / CodeQL, and this): the STRUCTURAL-AGREEMENT seam this file's method
section recommends is close to worked out. Every remaining pair I can derive
from source is either already guarded or already consistent. That is not a
reason to stop, but it IS a reason to stop picking questions the same way — the
next find will not come from another source-derived pair. It has to come from
the class the queue already names as open: **interactions between features on a
live path**, which needs the real app driven through a sequence, not a regex
over a file.

### Sweep 69 — a dead prop, and the guard written for it the day before (2026-09-24, 1 REAL DEFECT, FIXED)

Sweep 68 ended by saying the next find would not come from another
source-derived pair. It came from a REACHABILITY question asked at a live prop
instead, which is the same method that found the speaking coach nobody could
call.

**The defect.** `McGame.challengeMode` is optional and passed by **nothing** —
not `AppRouter` (which passes `questions`, `onComplete`, `goBack`, `award`), not
one test. So `isHeartsMode = challengeMode || heartsAlwaysOn` always reduced to
the preference, and both `McGameOver` arms keyed on it were unreachable: a
"← Back to Practice" button, and the `onBack` prop that existed only to serve
it, and a line telling learners **"Hearts refill over time — 1 per hour"** while
`lives.ts` regenerates one per **FOUR** hours. Harmless while dead — and a trap
for whoever wires challenge mode up, who would ship a wrong number to a learner
without touching it.

**Hearts themselves are NOT dead, and checking that is what made the finding
narrow.** `nh_hearts_always_on` has a real writer (the Learning Preferences
toggle) and syncs through `applyRemoteProgress`, so hearts mode is reachable —
only the second, unused source for it was not. Reporting "the hearts system is
dead" would have been the stronger claim and the wrong one.

**THE PART THAT MATTERS MORE THAN THE DEAD CODE.**
`routerOptionalProps.test.ts` was written the DAY BEFORE for exactly this class
("a dead branch behind an optional-prop check is indistinguishable from a
deliberate optional dependency") and reported clean. Its predicate matched
`&& p`, `p &&`, `typeof p === 'function'` and `p?.(` — four spellings of
branching, missing the two commonest for a BOOLEAN: `p || q` and `p ? x : y`.
**The class is defined by its matcher, and the matcher knew four of six.** Same
shape as the `ENDPOINT_HELPERS` alternation that matched nothing and the
`whisperClaudeScorer` name that matched nothing: a guard covering most of a
class reads exactly like one covering the class.

**Widening is the false-positive direction, so it was censused before it was
written.** Across 400 routed components the two added shapes yield exactly
**two** props: this one, and `RetentionCheckScreen.lessons` — which is a
legitimate TEST-INJECTION SEAM (`retentionWiring.test.tsx` passes the bodies;
production omits it and the screen fetches them, `if (lessons) return undefined`
skipping the fetch when injected). That is the `vocabPool.allCats` shape, so it
is exempted WITH ITS REASON and checked in both staleness directions — the
component must still declare the prop optional and branched, and the router must
still not pass it.

**Mutation-verified, three**, each confirmed landed:

- the dead prop restored → the headline assertion fails;
- **the same defect with the predicate reverted to its original four shapes →
  the headline assertion PASSES**, which is the direct proof the widening is
  load-bearing rather than decorative;
- an exemption naming a prop the router DOES pass (`HomeTab.authUser`) → the
  staleness test fails.

**One correction on the way, recorded because the first reading was mine:** my
probe asserted `flag?.call()` should match the original `p?.(` shape. It should
not — that is optional chaining, not a call of an optional callback. The matcher
was right and the test was wrong; the probe now uses `flag?.()`.

**A second harness lesson, the same one as sweep 68.** A `python` replace with
mismatched escaping threw its assertion, so mutation 2 never landed — and the
vitest run that followed showed the UNMUTATED guard failing on mutation 1's
defect, which reads exactly like a landed mutation. Confirming a mutation LANDED
is not enough; confirm the file actually changed before reading the result.

**Not added to CLAUDE.md**: the class already has its section there
("MUTATION-TEST THE GUARD"), and the specifics live in the guard's own header
where the next person editing that predicate will read them.

### Sweep 70 — the exemption production undid two lines later (2026-09-24, 1 REAL DEFECT, FIXED)

**The question**, picked on sweep 68's own recorded advice that the next find
would have to come from _interactions between features on a live path_ rather
than another source-derived pair: **what does a sign-out fail to wipe?** — auth
crossed with every feature's local store, on a real sequence (user A out, user B
in). The obvious target was `clearUserScopedStorage`'s key lists, which are the
classic hand-maintained shape.

**They are not the defect, and checking that first is what found the real one.**
That module is thoroughly worked out: localStorage is a `nh_` prefix sweep plus a
list DERIVED by reading all of `src/`, sessionStorage is the same prefix rule
minus three exemptions, and the journal's Dexie table is cleared too. The Dexie
DB has exactly one store (`journal`, v1→v2 adds a column, not a table), so that
half is complete. `nh-content-cache` is shared content, not user data.

**THE DEFECT IS THAT THE sessionStorage EXEMPTIONS WERE DECORATIVE.**
`DEVICE_SESSION_KEYS` preserves three reload-loop breakers — `nh_ver_reload`
(main.tsx, at most 2 reloads per session onto a freshly-deployed build) and
`nh_reload_attempt` / `nh_binding_reload` (`chunkErrors.ts`, 2 cache-purge
reloads per 30-minute window). The module's own docstring argues for them:
_"Clearing it on sign-out would re-arm the loop it exists to break."_ Both
account-exit handlers in App.tsx — `onSignedOut` and `onUserChanged`, the only
two paths a user leaves by, reached from `useAuth` at 656 and 292 — then ran a
blanket `sessionStorage.clear()` **on the line after the sweep returned**. So
every exemption was undone on every sign-out and every account switch, for as
long as the exemptions existed.

**Why nothing saw it.** `clearUserScopedStorage.test.ts` asserts the
preservation by calling the function ON ITS OWN, key by key, under a comment
calling it _"the overshoot this fix nearly shipped"_. That is the
component-test / wiring-test split — _a unit test of a sweep cannot see what its
caller does two lines later_ — landing on the file that had most reason to look.
The same file's wiring test matches `onSignedOut\(\)[\s\S]{0,600}clearUserScopedStorage\(`,
so it reads the handler and stops at the call it wants.

**The harm, bounded and stated at what it is rather than at its strongest.**
Neither budget is unbounded and one self-expires after 30 minutes, so a sign-out
did not re-arm an infinite loop — it bought the tab up to two more reloads, one
kind of which purges caches. It lands on exactly one learner: the one who signed
out _because_ the app was misbehaving, which is the only learner holding a spent
budget. Not data loss, and said so rather than dressed up.

**The fix keeps the blast radius at three keys.** Deleting the blanket clear
outright would also have changed which THIRD-PARTY session keys survive a
sign-out — `firebase`, `@sentry` and `posthog-js` all write sessionStorage
(measured, not assumed) — which is a scope change wearing a leak fix's clothes.
So the sweep widened to every session key that is NOT a device key, absorbing
everything the clear did, and the clear is gone from both handlers. **The delta
against old behaviour is exactly those three keys.**

**The guard is the wiring test the isolation test could not be**: no file under
`src/` (tests excluded) may contain a bare `sessionStorage.clear()`, so a third
exit path added tomorrow is the same failure. It is scoped to all of `src/`
rather than App.tsx because the shape defeats the sweep wherever it appears.
Plus a behaviour half — a non-`nh_` key must still be cleared — which is what
makes the removal provably behaviour-preserving rather than a silent narrowing.

**COMMENTS ARE STRIPPED, AND THE GUARD FAILED ON ITS OWN FIRST RUN WITHOUT IT.**
The fix necessarily leaves prose behind NAMING the call it forbids, in both files
it was removed from, so an unstripped match reported the explanation as the
offence. Here the strip is in the SAFE direction (a false positive, not a false
negative) — but it is the reason the rule can be written down at all, and it
carries a positive control, because a strip is exactly the step that can swallow
the subject along with the prose.

**Mutation-verified, four**, each confirmed landed:

- the blanket clear restored in `onUserChanged` → the wiring test **fails**
- **the whole defect restored and the PRE-EXISTING suite run against it → 27/27
  PASS** — the direct proof the gap was real rather than a rule I invented
- the sweep narrowed back to the `nh_` prefix → the width test **fails**
- the comment strip gutted → the fix's own prose is reported as the offence

**Gates:** 612 files / 9809 passing, typecheck clean, eslint clean, Croatian
lint 0 findings across 522 files. **E2E audit:** no spec asserts sessionStorage
across a sign-out — the only sessionStorage spec (`speaking-reload-guard`) tests
survival across a RELOAD and never signs out; `mobile-signout` asserts
navigation to the login screen only.

**Not added to CLAUDE.md**, same reasoning as sweep 69: the class already has
its section there (a component test and a wiring test are different tests), the
rule is now enforced mechanically over all of `src/`, and the specifics live in
the module header where the next person editing that sweep will read them. A
paragraph restating a guard is the decoration this file keeps finding.

### Sweep 71 — the asset caches the app threw away six times a day (2026-09-24, 3 REAL DEFECTS, FIXED)

**The question came straight out of sweep 70's shape**: _where else does a blunt
operation run after a careful one on the same path and undo it?_ Three instances
were checked and cleared before the real one turned up — no blanket
`localStorage.clear()` exists anywhere in shipped code (NEVER-DO 1/9, clean);
`chunkErrors`' cache purge is narrowly scoped to `-js`/`-html`; and
`sw-migration.js`'s `KEEP_CACHE_PREFIXES` covers every cache name the app
creates. Then the same question asked of `src/sw.js` found three.

**A — EVERY DEPLOY THREW AWAY THE LEARNER'S ASSET CACHES AND STARTED EMPTY ONES.**
`CACHE_VER` is `'nasa-hrvatska-v' + __BUILD_ID__`, a fresh timestamp per deploy,
and the `-images`, `-audio` and `-fonts` routes all opened `${CACHE_VER}-<suffix>`.
After a deploy nothing references the old names, so those entries are
UNREACHABLE — and the activate handler's reclamation deliberately excluded all
three, with its reason recorded as _"keyed by STABLE urls, so the previous
build's entries are still perfectly valid. Dropping them would force a
re-download of hundreds of MP3s for no benefit."_
**True in its first half, false in its operative half.** The entries were valid
and unreadable, so the re-download happened on every deploy anyway, and the
exclusion bought nothing while the orphans accumulated — which is precisely the
storage-quota growth the reclamation block was written to stop, left open for
three of six families. Measured: **183 deploys in 30 days, 43 in 7** — about six
a day. And **all 77 images in a build come from `public/` with stable urls, with
ZERO hashed images in `dist/assets`**, so 100% of that cache was re-fetched every
deploy for nothing; `maxEntries: 100` holds a full build with headroom, so no
sizing change was needed.

**B — THE AUDIO ROUTE MATCHED NOTHING THE APP SHIPS.** It read
`/\/audio\/.*\.(mp3|ogg|wav)$/i`; the one audio asset is
`public/audio/bojna-cavoglave-v3.m4a`, the song on the history screen. So the
`-audio` cache was never populated at all and the `RangeRequestsPlugin`
configured for seeking never applied. A route that matches nothing reads exactly
like a route that works — the `whisperClaudeScorer` / `ENDPOINT_HELPERS` shape,
here in PRODUCTION code rather than in a guard.

**C — AND THE GUARD'S COMMENT STRIPPER WAS EATING 70% OF THE FILE.**
`sw-cache-lifecycle.test.ts` built `SW_CODE` by stripping BLOCK comments first,
then line comments. `src/sw.js:180` contains `/api/*` inside a `//` comment, so
the block-comment regex opened there and closed on the star-then-slash ending the
Google Fonts route regex: **`SW_CODE` was 6,430 characters of a 21,532-character
file, and every `registerRoute` call in the file was invisible to it.** The
assertion that the SW never touches `localStorage` or `indexedDB` — the one that
matters most, a SW update must never destroy progress — was reading 30% of the
file and reporting on all of it. Found because the new asset assertion matched
nothing and had no business failing.

**A GUARD WAS ACTIVELY DEFENDING A.** The same file's header NAMES
`-images`/`-audio`/`-fonts` as part of the accumulation problem, and then
`expect(SUFFIXES).not.toContain('-images')` (and audio, and fonts) restated the
exclusion's premise instead of checking it. That is _a test can encode the false
premise instead of checking it, and then it defends the defect_ — the
`AlphabetScreen` `vs`-marker shape — with the file's own prose contradicting its
own assertion eighty lines apart.

**The fixes.** Asset caches get a STABLE name (`ASSET_CACHE =
'nasa-hrvatska-v-assets'`), plus a one-time reclamation of the versioned ones so
the orphans already on devices are collected — nothing else would ever name them
again. **The `nasa-hrvatska-v` prefix is load-bearing and deliberately kept**: a
tidier `nasa-hrvatska-assets` would be deleted by `sw-migration.js` on every page
load, which is the same blunt-undoes-careful trap one layer down. The audio route
gains `m4a`. The stripper strips LINE comments first.

**The new guards.** The asset-route extensions are DERIVED from what is actually
in `public/` (mirroring the existing data-chunk precedent), so a new format that
the route does not claim fails instead of silently never being cached; the stable
name is pinned along with its required prefix; the migration branch is pinned;
and — the guard on the guard — **every `registerRoute` and `cacheName` in the
file must survive the strip**. That last one is deliberately a construct count,
not a length ratio: `sw.js` is 57% prose, so any ratio loose enough to pass today
is loose enough to miss a strip that ate half the routes.

**Mutation-verified, six**, each confirmed landed (and M1's first attempt did NOT
run, because its landing grep used a bad pattern and short-circuited the suite —
confirm the mutation landed AND that the measurement ran):

- audio regex back to `(mp3|ogg|wav)` → **1 fails**
- images `cacheName` back to `${CACHE_VER}` → **1 fails**
- `ASSET_SUFFIXES` dropped from the reclaim → **1 fails**
- the image route drops `svg` → **1 fails**
- **stripper order reverted to block-comments-first → 5 fail**
- **the ORIGINAL `sw.js`, all three defects present, against the new guard → 3
  fail** (the old guard was green on it throughout, which is the gap)

**Gates:** 612 files / 9815 passing, typecheck clean, eslint clean, Croatian lint
0 findings across 522 files, and a full `npm run build` — precache 21 entries /
681.49 KiB. **The BUILT artifact was checked, not just the input** (the Sentry-DSN
lesson): `dist/sw.js` carries `="nasa-hrvatska-v-assets"` and
`cacheName:`${ue}-images``. **E2E audit:** no spec asserts on any cache NAME; the
five specs touching SW/offline assert registration and offline-shell behaviour,
both unaffected since the precache and `-html`/`-js` caches are unchanged.

### Sweep 72 — the same stripper in 72 more guards (2026-09-24, LATENT CLASS CLOSED)

Sweep 71's finding C asked whether any OTHER guard's comment stripper eats its
own corpus. Measured rather than assumed, and the measurement changed the fix
twice.

**1. THE DECISIVE EXPERIMENT: flip the order everywhere and see what breaks.**
77 test files strip block comments. Reordering the pair in all 72 that have it
and running the whole suite gave **612 files / 9815 passing — byte-identical**.
So no guard is currently MISSING a violation: the class is LATENT everywhere,
and `sw.js` was live only because its own new assertion matched nothing and that
was noticed. Say that plainly rather than dressing a clean result up as a save.

**2. The exposure is narrow and now known.** A block-first strip over-eats 23 of
1,771 source files (only 8 meaningfully — worst `scripts/lintCroatianText.mjs`
at 21,216 chars / 36%, `src/lib/contentClient.ts` 19%,
`functions/api/content/_authedRead.js` 21%) and 1 of 57 e2e specs
(`sp11-content-protection`, 38%). Those are the places a FUTURE violation could
hide.

**3. THE CAUSE CENSUS KILLED THE OBVIOUS FIX.** 28 line comments contain `/*`,
and every one is ordinary prose: `/api/content/*`, `src/data/drills/*`,
`audio/*`, `*.webp`, `*ije*/*je*`. Forbidding that would impose a bad rule on
authors to paper over a tooling defect — **the comments are right and the
stripper is wrong**. So the corpus was not touched.

**4. AND THE REGEX CENSUS KILLED THE SECOND OBVIOUS FIX.** The plan was one
shared helper. Measured: **nine** line-strip variants and three block-strip
variants, and two groups differ ON PURPOSE — 20 uses strip WHOLE-LINE comments
only (`/^\s*\/\/.*$/gm`, leaving a trailing `// note` after code intact) and 4
target JSX comment expressions. Folding those into one helper would widen their
semantics silently, under cover of a fix about ordering. **Order is the defect;
order is what was fixed** — 90 swaps across 70 files, each a swap of two adjacent
`.replace()` calls and nothing else.

**TWO HARNESS DEFECTS IN MY OWN TOOLING, both caught by checking a reported
result by hand rather than believing it:**

- The reorder script used `String.replace` with `/g`, so a NON-matching
  `[line, block]` pair **consumed** the text and the `[block, line]` pair
  starting one call later was never examined. Chains of three hid inside chains
  of two. Fixed with an index-controlled scan that advances by one character on
  a non-match instead of past the whole pair.
- The ratchet's first draft decided "is this call chained to the previous one?"
  with _"the preceding text ends with `)`"_ — and `readFileSync(path, 'utf8')`
  also ends with `)`, so it stitched the last call of one chain onto the first
  call of the NEXT one and reported **five offences that do not exist**, all
  already in the right order. That is the fabricated-finding shape of sweeps 63
  and 68 (fixed character windows) met a THIRD time, in a third disguise. The fix
  is the same one every time: stop approximating the boundary and parse it — the
  guard now closes each call by balancing parentheses and skipping quoted
  strings, then requires the next non-whitespace text to be `.replace(`.

**The guard** (`commentStripOrder.test.ts`) fails if any test file strips block
comments before line comments, and carries a non-vacuity floor (>300 files
scanned, >30 of them stripping) plus a positive control on the detector itself.

**Mutation-verified, three**: the ratchet against the PRE-FIX tree reports **166
offending chains** across 72 files; a single chain reverted to block-first fails
it and names the file; and the full suite before and after the reorder is
**612/9815 → 613/9818**, the delta being exactly the three new tests — which is
the equivalence proof that 90 swaps across 70 guards changed no outcome.

**Gates:** 613 files / 9818 passing, typecheck clean, eslint clean, Croatian lint
0 findings across 522 files. **E2E audit:** none — this change touches test files
only and no production behaviour.

### Sweep 73 — four negatives and one honest "I don't know" (2026-09-24, NO DEFECT)

Same axis as sweeps 70–71 (interactions between features on a live path). Five
questions, no defect. Recorded so nobody re-derives them — and one of them is
recorded because I nearly got it WRONG.

**A. The offline award queue across an account change.** `offlineAwardQueue`
holds unsent XP and flushes to `users/{uid}/xpAudit`; could user B receive user
A's XP? No — the key is `nh_offline_award_queue`, so the `nh_` prefix sweep in
`clearUserScopedStorage` wipes it on both account-exit paths. Covered BY
CONSTRUCTION, which is the good kind: a new queue key under that prefix inherits
it without anyone remembering.

**B. Two tabs of the same account cannot regress a stat.** There is NO `storage`
event listener anywhere in `src/`, and the local→remote write really is
unconditional (`useSyncManager.ts:326` — no `Math.max` on that direction). The
protection is elsewhere: the periodic PULL was removed in 2026-05-28 and replaced
by the realtime `fbWatchProgress` onSnapshot listener, which EVERY tab holds
because Firestore is initialised with `persistentMultipleTabManager()`. Each tab
merges through `mergeStatsFromRemote` (Math.max / union), so no tab holds stale
stats to write back. **Note for whoever revisits: the protection is the WATCHER,
not the save path.** Remove or single-tab that listener and the hazard is live
immediately, with nothing in the save path to catch it.

**C. A completion that lands after midnight.** `markDone(screenOrId)` matches by
id OR screen against the CURRENT plan and no-ops when there is no match
(`useDailySession.ts:976`). So an exercise launched before the rollover and
finished after it can only credit a slot for the screen the learner actually just
did — never a different activity, and nothing at all when today's plan lacks that
screen. No false credit is reachable.

**D. The synced blob has no size ceiling — and cannot reach one.** Firestore
hard-rejects a document over 1 MiB and there is NO size guard anywhere in the
sync path (searched `fbSaveProgress`, `buildProgressSnapshot`, the failure
classifier; `invalid-argument` appears only in a comment). A blob that crossed it
would fail EVERY save permanently and silently, because it only grows. The
structural gap is real; it is not reachable. `journal` is the only field that
scales with use, and `normalizeJournalEntry` (`journalEntry.ts:58`) returns ONLY
`{hr, en, date?}` — a whitelist applied to BOTH sides by `mergeJournals`. At ~50
bytes an entry, 1 MiB needs ~20,000 distinct saved words against an app
vocabulary of ~4,300 lemmas.
**AND MY OWN PROBE NEARLY SOLD THE OPPOSITE.** I measured a maximal snapshot at
**0.99 MiB** and was one step from calling it live — but I had invented journal
entries carrying two AI `examples` each (~343 bytes), a shape production CANNOT
produce: examples live in VocabJournal's Dexie store, never in `uJournal`, and
the normalizer drops them regardless. The same probe also silently omitted
`nh_lesson_attempts` / `nh_lesson_retention` / `nh_curriculum_progress`, whose
validators rejected my synthetic shapes — so it was wrong in BOTH directions at
once. **A probe that invents its own data shape measures the probe, not the app**
— the same family as "a test that restates production data cannot check
production data".
**What is worth keeping:** the blob's size safety rests on a WHITELIST IN A
NORMALIZER, not on any size guard, and nothing says so. A well-meaning change to
preserve `examples` across devices would drop the ceiling from ~20,000 entries to
~3,000 — inside the content scale — behind a permanent, silent failure.

**E. INCONCLUSIVE — "a screen renders a field the payload never had", by name.**
CLAUDE.md records this as a CLASS with two instances (`scene.qs`, which threw;
`RegionScreen`'s `v.tip`, which silently dropped every authored note on every
region page). Both are fixed and individually pinned, and `contentShapeSweep`
renders every route against the real payload — but it catches CRASHES and EMPTY
renders only, and the `v.tip` shape is neither: the `&&` short-circuits and the
card is one line shorter. **So the class has never been swept generally.**
I tried: dump every field name the real payload carries under each key at ANY
depth (uncapped — CLAUDE.md records a 3-level cap falsely reporting four screens,
`PROFESSIONS → categories → jobs → job.m` being depth 4), then flag consumer
accesses matching the defect's exact signature — a name that IS a payload field
somewhere but not under any key that file reads. 32 keys, 400 field names, 38
consumers, 16 flagged. **It does not work**, and the three strongest candidates
show why: `CultureDeepDiveScreen`'s `meta.icon`/`meta.sub` resolve to a local
`TIER_META` const; `LearnTab`'s `pendingLesson.tip` is local React state (and
`tip` genuinely appears nowhere under LEARN_PATH); and every `V`-reading file
accesses local objects, because V's rows are POSITIONAL ARRAYS.
A name census cannot tell `v.tip` (payload-derived) from `meta.sub` (local) — it
needs DATAFLOW. **So the result is INCONCLUSIVE: neither that a third instance
exists nor that none does.** Recorded as such rather than as a clean sweep, which
would be the fabricated-confidence failure this file keeps meeting. Both known
instances were found by RENDERING against the real payload and by READING; a real
guard needs the same.

### Sweep 74 — the dataflow sweep sweep 73E asked for, and the sweep that broke itself (2026-09-24, NEGATIVE, both halves mutation-proven)

Sweep 73E said the "a screen renders a field the payload never had" class needs
DATAFLOW, not name matching. Both attempts are negatives, and both are recorded
because each would have reported CLEAN.

**74a — the Proxy recorder. It works, and it does not catch the defect.**
Wrap the REAL `/api/content/core` payload in a lazy recursive Proxy before it
reaches `useContent`, sweep every route with the existing `routeSweepHarness`,
record every read of a key ABSENT from its target, and report only those absent
from EVERY sibling in the collection — the exact `v.tip` signature
(`regionVocabNote`: 81 rows carry `note`, 0 carry `tip`).
Live and reaching production code: **9,701 proxy reads**, 896 of them object-key
reads, 27 of 32 payload keys touched, **213 distinct paths under REGIONS alone**.
Result: 3 miss events, 1 distinct, **0 dead-on-all-siblings**.
**MUTATION: the known defect re-introduced** (`v.note` → `v.tip`,
RegionScreen:376/385) → **byte-identical numbers**. Decorative, so not committed.
**The diagnosis is not the obvious one.** Not the recorder, and NOT "the screen
is never reached": REGIONS is read 296 times and the screen renders deeply —
`sections`, `facts`, `factsHr[0..6]`, `quiz`, `intro`, `color`, `icon`. `vocab`
is never read, because of RegionScreen:342: `{tab === 'language' && r.vocab && (`.
**The collection the defect lives in is behind a TAB.** A render-only sweep sees
the default view; a defect in a collection behind a tab, a toggle or a detail
expansion is invisible to it however deeply the rest of the screen renders.
**This is also true of `contentShapeSweep` itself** — "sweeps every route key
through the real router" proves each route's DEFAULT VIEW renders, not that the
screen's data paths were exercised. Worth knowing before anyone leans on it.

**74b — clicking the tabs, and the sweep that destroyed itself.**
Natural next step: press each route's tab-like `<button>`s and watch for the
boundary. **Two versions never ran at all** — a standalone file threw
`useApp must be used inside AppContext.Provider` on all 423 routes, then
`boundary engaged` on 383 once the mocks were added but the payload was not —
and **each would have reported "0 crashes"**. Run inside `contentShapeSweep`,
where the priming already lives, it reported 22 of 423 routes with controls, 42
clicks, 0 crashes, plus six `region_*` routes "boundary engaged" while
`region_zagreb` rendered fine.
**That asymmetry is what stopped me reporting it** — six siblings crashing and
the seventh not is not a shape real defects take. Control run, clicking disabled:

|            | routes with controls | region routes skipped  |
| ---------- | -------------------- | ---------------------- |
| clicks ON  | 23 / 423             | 6 ("boundary engaged") |
| clicks OFF | **374 / 423**        | 0                      |

**The clicking was destroying the sweep.** After the first few clicks later
routes engaged the boundary and most stopped exposing controls at all, so
"0 crashes" was a verdict over ~400 routes it had already stopped exercising,
and the six region crashes were pollution rather than findings. A click leaves
state behind that `cleanup()` does not undo.
**The number worth keeping is from the control: 374 of 423 routes expose
interactive controls the existing render-only sweep never presses.** That is the
size of the untouched surface, measured rather than asserted.
Not committed: a sweep that silently stops exercising its corpus and still
reports clean is the exact decorative guard this file exists to find.

**If this is picked up**, the recorder is sound and reusable (archived); the
REACH is the work, and it needs per-click isolation — a fresh module registry per
route, or one render per click — which is tractable but expensive. The honest
alternative is that this class is found by rendering-with-intent per screen, as
BOTH known instances were.

### Sweeps 75–79 — how much does anything CLICK, the biggest untested screen, and every door in and out (2026-09-24)

**75 — the census, and every intermediate number overstates the gap.**
Sweep 74 measured that 374 of 423 routes expose controls the render-only sweep
never presses. So: how many SCREENS does any test fire a real interaction on?

    401  router components resolved to a file
    107  have a unit test that renders them AND fires fireEvent/userEvent (27%)
    294  never interacted with in any unit test

-108 thin ModeDrill wrappers (~12 lines, delegating to a tested engine)
186 substantive
-76 hand-written drill siblings (practice/*Drill.tsx, ~400 lines each, one
shape differing only in its bank — "DATA wearing a .tsx extension")
110 GENUINELY DISTINCT screens with no unit interaction test

Reporting 294, or even 186, would have been the "~80 practice surfaces" error.
**Spot-checked** rather than trusted: `EquivalencyTestScreen`'s only naming test,
`verificationQuietPeriod`, reads it as a SOURCE PIN and fires nothing.
**AND HALF THE CENSUS WAS WRONG.** It also reported "9 of 110 reached by E2E, 101
with no interaction anywhere". That half is discarded: E2E specs navigate by
VISIBLE TEXT, not by component name or screen key, so a grep cannot see them —
proved by the same spot check, since `e2e/verification-gate.spec.js` reaches the
Level Check by text and my matcher scored it untouched. **The 110 stands; the
E2E overlap is not measured here**, and getting it honestly means instrumenting
the running app during an E2E run.
A screen with no interaction test is an UNTESTED SURFACE, not a broken one.

**76 — the biggest one read with intent: NEGATIVE.** `EquivalencyTestScreen`
(925L), picked because it is the largest untested screen AND hosts the check that
changes a learner's STANDING. Every rule this file records for it holds: records
at `levelTo` (line 305), stashes `currentXp` as the quiet-period baseline, routes
a missing production section to `writePartial` + `pending` rather than a recorded
failure, restores earned scores on resume (`useState(partial?.scores ?? null)`),
and takes `defaultTarget` from `gate.nextCheck` rather than `gate.target`.
One inconsistency, benign, DELIBERATELY NOT CHANGED: three `writePartial` sites
disagree on `startedAt` — `onMcqProgress` uses `startedAtRef.current`, the other
two `partial?.startedAt ?? Date.now()`, and `partial` is memoised at mount. On a
resume both are identical; they differ only on a FRESH attempt, by the MCQ's
duration against a 48h TTL, and can only EXTEND the parked window. Recorded
rather than edited: this is the highest-stakes screen in the app and the repo's
rule is to be conservative.

**77 — the door nothing guarded, and it is CLEAN.** Sweep 67 guarded the SEARCH
index's targets and called search "the one door with no guard at all". It is not
the only door: screens navigate each other directly, and `exerciseCatalog.ts` is
a hand-maintained list of Practice-tab cards whose whole job is to name a screen.
An unrouted target is not a crash — it is a tap onto a key the router has no
branch for, i.e. a blank surface.
Measured: **102 distinct literal targets, 430 routed keys, 0 unrouted**, across
the two REAL navigation APIs — `setScr` (48) and `exerciseCatalog`'s `go` factory
(58). `setScreen`, `launchScreen` and `navigate` were measured and match NOTHING,
so naming them would be a matcher alternative guarding nothing (the
`whisperClaudeScorer` mistake), and they are excluded.
Extended to navigation held as DATA: **360 screen-valued entries** across the
pools, both CATEGORY route maps and the authored fallbacks — **0 unrouted**. The
CATEGORY maps already go through `curriculumCouplingResolves`; the pools' own
`screen:` fields are the part with no routing check, and are why that half exists.
`navTargetsRouted.test.ts` is the ratchet, written despite the clean measurement
— and said plainly as a ratchet, not a save. Mutation-verified twice on REAL
source, each naming its file: `go('cloze')` → `go('clozee')` in the catalog, and
`screen: 'flashcards'` → `'flashcardz'` in the pool. Plus a positive control on
the matcher itself and non-vacuity floors, because a clean result from a matcher
nobody has seen fail is indistinguishable from one that matches nothing.
**What it cannot see, stated:** only LITERAL targets. A key held in a variable or
built at run time (`region_${id}`) is invisible here.

**78 — the half sweep 77 said it could not see, and one more table.** Sweep 77
covers LITERAL targets only, so: 30 call sites navigate with a run-time value,
and almost all read a screen name out of a COMPONENT-LOCAL table that sweep 77's
data half never looked at — `doors.ts`, `partners.ts`, ProfileScreen's tabs,
GrammarTrackScreen's units, FavoritesScreen, FluencySnapshot, GoalFocusSection,
HeritageModeScreen, AIConversationResult. Measured across all ten: **132
screen-valued entries, 0 unrouted.**
**The four apparent hits were my matcher, and the type declaration settled it.**
`doors.ts` declares TWO `id` fields: `Door.id` is a DoorId
(`'price' | 'krajevi' | 'zivot' | 'povijest' | 'mediji'`), while `DoorItem.id` is
— in that file's own comment — "the screen id handed to setScr", which
`launchDoorItem` then does. Taking every `id:` in the file reports the five door
ids as dead screens. Scoped properly: **40 DOOR_ITEMS, 0 unrouted.**
Those 40 are the Croatia tab's card grid, and `hrvatska.test.ts` covers them
thoroughly — orphans, duplicates, and that `launchDoorItem` "navigates to the
screen id" — **without ever asking whether the router can RENDER that id**, which
is the difference between a card that navigates and a card that works. That
assertion is now in `navTargetsRouted.test.ts`, mutation-verified (one door id
typoed fails it by name).
The component-local tables are deliberately NOT ratcheted: a guard over them
needs per-file knowledge of which `id` means what, which is exactly the
false-positive shape this sweep just walked into.

**79 — the complement: is any routed screen UNREACHABLE?** 430 routed keys
against every literal and data reference in the app. First pass: 7 with no
reference. **Five were my matcher, in two distinct ways**, and both are worth
keeping because both are the shape that manufactures a finding:

- `grammar-ref` and `new-placement` contain a HYPHEN, and the reference scan's
  character class was `[a-z0-9_]`. The router's own keys were captured with a
  different pattern than the references to them, so the two sides could never
  agree on those two.
- `kultura_b2` / `_c1` / `_c2` are reached by a TEMPLATE LITERAL
  (`kultura_${tier}`), which a literal-only scan cannot see.

That left two, and **neither is a defect**:

- **`personas` is deliberately unreachable**, and `partners.ts:200` says so:
  the picker "is intentionally replaced by the partner rows". Reading the
  comment is what stopped this being reported.
- **`listeningpath` is reached TWICE — from server content.** My corpus was
  `src/` only, and the Learn Path spine lives in
  `functions/api/content/_data/learnPath.js`. **A reachability census is only
  as wide as its corpus, and navigation data is not all in `src/`.**

Two things came out of it. All **48 learn-path `go` targets are routed** — a
third navigation surface neither 77 nor 78 covered, now asserted in
`navTargetsRouted.test.ts` (mutation-verified; `learnPathReachableCk` and
`learnPathTapCompletion` guard that file's `ck` rules and neither asks whether
its `go` can be rendered). And the double `go: 'listeningpath'` turned out to be
#725's convention working in live data: the first item carries
`vsIncludes: 'listeningpath'` + `lcAtLeast: 25`, the second drops the leaf and
re-gates on `lcAtLeast: 40`, exactly as that fix requires — with its guard green.

**Gates:** 614 files / 9828 passing, typecheck clean, eslint clean, Croatian lint
0 findings across 522 files.

### Sweeps 80–81 — can a click sweep run in jsdom at all? (2026-09-24, THREE HYPOTHESES, ALL DISPROVED)

Sweep 75 measured **110 genuinely distinct screens with no unit interaction
test**. The obvious follow-up is to press something on each of them and see what
crashes. Three cheap ways to do that were tried and each was measured to fail,
so the expensive one is now the honest answer rather than a preference.

- **H1 — clear storage between screens.** Rejected by measurement: the harness
  bailed on its first screen regardless.
- **H2 — exclude navigation so one screen cannot poison the next.** Same.
- **H3 — scope the corpus to the 15 routes reachable from a tab.** The decisive
  run: `PROTO TABBED: routes=15 ok=1 clicks=8 crashes=0
firstBail=region_bibinje => boundary engaged after 1 ok/8 clicks`. It failed
  on the FIRST screen, not the fiftieth, so the cause is not accumulated state
  at all.

**The conclusion is about the VEHICLE, not the screens.** A jsdom render of a
real screen engages `ScreenErrorBoundary` for reasons that have nothing to do
with the screen being broken — absent providers, absent content payload, absent
media APIs — so "boundary engaged" carries no information about production.
**A harness whose failure mode is indistinguishable from the defect it hunts
cannot report either.** An E2E spec driving the tabbed screens in a real browser
is the honest vehicle, and it is a bounded 36, not 423.

**BOTH HALVES OF THAT LAST SENTENCE WERE WRONG — see sweep 87.** The vehicle was
right; the bound was an artifact of thinking in taps. `setScr` calls
`navigate('/' + screen)`, so EVERY screen has a real URL and a browser can reach
all 430 directly, no click path required. Swept: 430 routes, 0 crashes.

Two harness defects worth keeping, both found by checking a reported number by
hand: a key-to-component pairing that took the nearest uppercase tag captured
`<ScreenErrorBoundary>` every time and reported `routes=0`; and
`screen.queryByTestId` silently resolved to jsdom's global `window.screen`
because the Testing Library import was missing, which throws rather than
reporting. **Neither showed up as a wrong answer — both showed up as an
implausible one**, which is the only reason they were checked.

---

### Sweep 82 — does a key's WRITE site spell it the same as its READ site? (2026-09-24, NEGATIVE TODAY, GAP CLOSED)

**Why it was asked though this file says not to.** Sweep 52 recorded storage
keys as "not searched, and deliberately": raw strings outside
`lib/constants/storage.js` are a SANCTIONED convention, so a census returns
known-legacy usage and no finding. That reason is TRUE and it answers a
DIFFERENT question. "A raw string is allowed" says nothing about whether the
write site and the read site spell it identically — and a key whose two ends
disagree fails silently and permanently in both directions at once. This is
**"check an exclusion's reason before you write it down, even when it is
obviously true"** applied to an exclusion already written down.

**The class had two guards and BOTH carried the same restriction.**
`deadKeyReaders.test.ts` (reads) and `deadStorageWrites.test.ts` (writes) each
matched only `'nh_…'` spelled as an INLINE LITERAL. So two populations sat
outside both: the entire LEGACY namespace — `uS`, `uSR`, `dcDay3`, `lastSeen`,
`onboarded`, `xpCooldown`, `slangVisited`, `cookieConsent`, `fbBackupConfirmed`
— and every access through a CONSTANT identifier, which the read matcher could
not see at all because it demanded a quoted literal. **A namespace restriction
decays exactly like the list of files it replaced**, and it is harder to notice,
because a list looks short while a regex looks like a rule.

**MEASURED BEFORE WIDENING, because widening is the direction that
MANUFACTURES failures.** Resolving constants FILE-LOCALLY and then following
named imports, and counting the app's wrapper spellings (`lsGet`/`lsSet`/
`LS_GET`/`LS_SET`/`_safeSet`/…) as accessors: reads seen **80 → 185**, writes
**100 → 185**, and the orphan list is **FOUR** — the two exemptions already
present plus two the legacy namespace was hiding, both benign:

- `uSR` — the pre-`nh_sr` SRS deck, read once by the `getSR` migration and never
  written again. The same shape as the already-exempt `nh_streak_freezes`.
- `fbBackupConfirmed` — read at `useSyncManager.ts:374`, written NOWHERE, so
  `!lsGet('fbBackupConfirmed')` is permanently true. **Not a defect**: the
  cloud-backup banner was deleted deliberately in `2b838fdb` ("Remove all
  unprompted user interruptions", 2026-04-08). What survives is dead WIRING —
  the state, the effect, and two props threaded App.tsx → AppToasts, which
  destructures both and renders nothing with them. **Recorded, not repaired**:
  the removal was intentional and deleting the residue is a refactor.

The write side widened to **124 keys and ZERO newly dead**, because that guard's
`occurrences` counts any mention anywhere and can only miss. Free ratchet,
stated as a ratchet.

**MY OWN PROBE HAD THE DEFECT IT WAS HUNTING, and this is the reusable part.**
The first three runs used `git ls-files 'src/**/*.tsx'` — and git's pathspec
`**` did NOT match `src/App.tsx`, so every top-level file in `src/` was silently
outside the corpus. That one omission manufactured `lastSeen` as an orphan read
(App.tsx writes it) and inflated the list to 22. Earlier runs had reported 22
and 24 purely because the census did not yet know the `safeStorage` wrappers or
`_safeSet`. **Name a key you KNOW is written and check the census agrees before
believing any orphan list** — `lastSeen` was that control, and it failed. (The
existing guards use node's `globSync`, where `**` matches zero directories, and
were never affected.)

**Mutation-verified six ways, and two of them are CONTROLS against the OLD
guard — the direct proof the widening is load-bearing rather than cosmetic:**

| mutation                                     | new guard | old guard                   |
| -------------------------------------------- | --------- | --------------------------- |
| dead read of a LEGACY key                    | 1 fails   | **30 passed — fully green** |
| dead write of a LEGACY key                   | 1 fails   | **5 passed — fully green**  |
| dead read of an `nh_` key (regression check) | 1 fails   | —                           |
| scope snapped back to `nh_`                  | 2 fail    | —                           |
| constant resolution removed                  | 3 fail    | —                           |
| prefix-vacuity rule removed                  | 4 fail    | —                           |

The vacuity rule is now DERIVED rather than hard-coded: the old version deleted
the literal `'nh_'`, which stopped describing the namespace the moment the scope
moved. A prefix is rejected when it covers more than `MAX_PREFIX_COVERAGE` (5)
exact keys — measured, the interpolation artifacts cover **94 and 116** while
every genuine key family covers at most **three**.

**A first mutation did not land and reading it would have been wrong.** Probing
with `lsGet(...)` inside `debugLog.ts` — which imports no such function — broke
the module, and BOTH guards failed for an unrelated reason, which read as "the
old guard already catches this". Re-run with `localStorage.getItem`, needing no
import, the old guard is green. **Check WHERE a mutation landed before reading
its result.**

---

### Sweep 83 — the E2E content fixture is a FOURTH copy, and one key of thirty-two was checked (2026-09-24, 1 REAL DEFECT, FIXED)

**The pair.** Under `vite preview` the Cloudflare Functions are not served, so
`e2e/fixtures/content-fixture.js` re-builds every `/api/content/*` payload and
Playwright replies with it. The fixture imports the REAL `_data` modules, so the
inner shapes cannot drift — that half is well built. But the PROJECTIONS are
hand-mirrored field lists, FOUR of them (core, grammar, catalog, curriculum),
exercised **only by E2E** while the server side is exercised by production. That
is exactly the shape sweeps 48–52 identified as the one that pays: **a copy that
is never exercised against the thing it copies.**

**What was checked before: one line.** `vocabPool.test.ts` asserts the fixture's
TEXT matches `/\bV_LEVELS,/`. One key of thirty-two, by string.

**THE FINDING: `CULTURE_DEEP_DIVES` is served by `/api/content/core` and was
ABSENT from the fixture.** `CultureDeepDiveScreen` optional-chains it and falls
through to its `if (!essays.length)` branch, so under E2E all 24 deep-dive
routes rendered _"New culture essays are on their way — reopen this screen in a
moment to load them"_ instead of the essays. Silent: no crash, no failing spec.

**IT IS THE SAME KEY THE 2026-09-23 CONSOLIDATION WAS ABOUT.** That change found
three hand-written copies of the core key list — the endpoint, the etag
generator and the test — of which the TEST was missing exactly
`CULTURE_DEEP_DIVES`, and replaced all three with `CORE_PAYLOAD_KEYS`. Its
write-up names the fixture as "a genuinely separate carrier, still checked as a
file", and states the harm in advance: _"without the fixture the E2E suite would
exercise only the degrade path."_ The fourth copy kept the very omission the
first three were repaired for, under a sentence describing what that omission
would cost. **Consolidating the copies you found is not the same as finding them
all** — and a carrier called out BY NAME in the fix is the easiest one to
believe is already handled.

**The other three projections were measured and are CLEAN** — grammar (14 keys),
catalog (stories 11, grammarUnits 6) and curriculum (12) match their handlers
field for field. Recorded as a negative rather than quietly omitted, because the
new guard covers all four and a reader needs to know only one had drifted.

**WHAT THE FIX BUYS AND DOES NOT, stated.** It removes a fiction: those screens
now render real essays under E2E instead of a degrade banner. It does NOT add
coverage — **no spec reaches the deep-dive screens at all** (the four heavy-user
specs match a grep for "deep dive" only in English comment prose), so the 24
routes remain untested. They are merely no longer tested-as-broken.

`e2eContentFixtureMatchesServer.test.ts` checks core BY VALUE — which is what
caught it — and the three projections by parsing the handlers' own source, each
behind a non-vacuity floor. **The floor earned itself immediately**: the first
catalog marker was `'stories:'` while the handler declares `const stories =`, so
the parse returned ZERO fields and every comparison beneath it would have
passed. It failed on the floor instead. A parse that silently matches nothing is
the decorative guard this file keeps rediscovering, and it is the one failure
mode a field-comparison assertion cannot show you.

**Mutation-verified six ways, each failing exactly 1 test:** the defect restored
(key dropped from the fixture); the fixture inventing a key the server does not
serve; the parse marker broken; and a new field added to each of the three
handlers' projections (`catalog.js`, `grammar.js`, `curriculum.js`) without the
fixture following.

**THE THIRD CARRIER WAS THEN MEASURED AND IS CLEAN.** CLAUDE.md names the
fixture and `src/types/content.ts` in ONE sentence as the two separate carriers,
so having found the first wrong the second had to be asked rather than assumed:
the `Content` interface carries **exactly 32 fields, no drift in either
direction**. Ratcheted anyway, because that type is what every `useContent`
consumer typechecks against — a key served but not typed makes a real field a
type error, and a key typed but not served lets a consumer read `undefined` with
the compiler's blessing, which is the `scene.qs` class that shipped and threw on
every open for three weeks. Mutation-verified three more ways (a served key
dropped from the type, a typed key the server does not serve, and the parse
marker broken — 1, 1 and 2 tests).

**My first run of that measurement reported all 32 keys missing from the type**,
because the interface is `Content`, not `ContentPayload`, and my parse found
nothing. `fields: 0` is the tell. **A probe that matches nothing reports the
whole population as broken**, which is loud enough to check — the dangerous
version is the one that matches nothing and reports everything CLEAN, which is
why every parse in this guard carries a floor.

**Gates:** 615 files / 9837 passing, typecheck clean, eslint clean, Croatian lint
0 findings across 522 files.

---

### Sweeps 84–85 — what else does `e2e/fixtures/` restate, and what in there is dead? (2026-09-24, NEGATIVE ON DRIFT, ONE CORRECTION OF MY OWN)

Sweep 83 found the content fixture. The same question asked of the rest of
`e2e/fixtures/`.

**THE COPIES (84).** Two E2E fixtures restate the XP→level formula by hand:

- `seed-auth.js` — a ternary chain over `xp + lc*15 + gc*25` deciding how many
  CEFR passes to seed. It runs for **every spec** (33 files import it), and its
  own comment says the point is that "the verification gate stays off and specs
  keep their pre-gate meaning" — so the whole suite's starting assumption rests
  on this copy agreeing with `CEFR_BANDS`. Nothing compared them.
- `forceCefr.js` — the same ternary again (4 importers).

**This is the one formula the repo has already watched drift.** On 2026-09-06
`DesktopPanel` and the hero card each carried their own copy under a comment
reading "same formula as StatsTab — all three must stay in sync"; they were in
sync with each other and with nothing that mattered. That fix routed all three
through one function. **The E2E fixtures are the copies it did not reach.**

**Result: clean in every direction.** All five thresholds, all six levels, and
the completion weights match. A ratchet, said plainly.
`e2eFixtureCefrBands.test.ts` imports `CEFR_BANDS`/`cefrScore` rather than
restating them and derives the weights BY VALUE (`cefrScore(0,1,0)` IS the lc
weight, so the assertion tracks them if they move).

**A CORRECTION OF MY OWN, and it is the reason this entry reads as it does.**
I wrote, and nearly shipped, that "nothing asserts each `CEFR_XP_TABLE` value
lands in the band it is named for". **That is false.** `e2eFixtures.test.js` has
checked exactly that, by value through `getUserCefr`, since SP10 — I wrote the
assertion a second time without finding the first. The duplicate is removed and
only the genuinely-new parts kept. In sweep 82 I checked for an existing guard
before writing one and found `deadKeyReaders`; here I did not, and the claim that
made it into the draft was a claim about ABSENCE — **the one kind of claim that
cannot be made by looking at the thing you are writing about.** Search for the
guard before asserting there isn't one.

**THE DEAD FIXTURES (85).** A usage census of `e2e/fixtures/` by importer:

| fixture                    | importers |
| -------------------------- | --------- |
| `seed-auth.js`             | 33        |
| `forceCefr.js`             | 4         |
| `testids.js`               | 3         |
| `stealth-page.js`          | 2         |
| `content-fixture.js`       | 1         |
| `mockRnd.js`               | 1         |
| **`mockAiPost.js`**        | **0**     |
| **`mockMediaRecorder.js`** | **0**     |

Both are imported by nothing, anywhere in the repo. Two things make that worth
recording rather than shrugging at:

- **`mockAiPost` has a guard that reads as a production-contract check and is
  not one.** `e2eFixtures.test.js` asserts _"CANNED.correct has the shape
  /api/correct returns"_ with three `toHaveProperty` calls against a
  hand-written object — nothing compares it to the endpoint, and no spec uses
  the fixture. A reader scanning `e2e/fixtures/` sees an AI mock plus a
  shape test and concludes AI surfaces are mocked and checked in E2E. **Neither
  is true.**
- **`mockMediaRecorder` has DIVERGED from the copies that actually run.**
  `checkpoints.spec.js` and `pronunciation.spec.js` both need it and both inline
  their own verbatim-looking copy — but the spec's `start()` fires `stop()` on
  the next microtask ("so captureAudio resolves fast") and the fixture's does
  not. So it is **not** a drop-in replacement, and consolidating the three copies
  would be a behaviour change to two live specs, not a tidy-up.

**DELIBERATELY NOT CHANGED.** No deletion, no consolidation, and no
"every fixture must be imported" ratchet — a guard shipping with exemptions for
both of its only two subjects guards nothing. This is a measured negative whose
value is that the next person does not read `e2e/fixtures/` as a picture of what
E2E actually mocks. The divergence above is the reason consolidation is a
decision rather than a chore.

**Mutation-verified four ways** (the table check having been dropped as a
duplicate): a production threshold moved with the fixtures not following (fails
2); `seed-auth` drifting alone (1); a completion weight moved in production (1);
and the ternary parse matching nothing (1, the non-vacuity floor).

### Sweep 86 — two declared policies nobody compared to the client (2026-09-24, BOTH CLEAN, BOTH RATCHETED)

Two axes this file had never touched. Neither appears anywhere in it before
today: `firestore.rules` is mentioned once in passing, CSP not at all.

**A — every collection the client touches must have a rule.** `firestore.rules`
ends in `match /{document=**}` denying everything, so a collection with no match
block is not a visible permission error: it is a Firestore write that rejects
asynchronously, usually with nobody awaiting it. Unit tests mock the SDK and
never consult the rules; the emulator suite exercises the rules it knows about.
Nothing asked whether the two SETS agree. **CLAUDE.md anticipates this exact
failure in prose** — "if you are adding a Family feature… it needs a new rules
match or every write hits deny-all" — and `fbJoinFamily`/`memberXP` were
documented as live long after they were deleted. Prose is not a mechanism.
Measured: the client touches `users`, `srs`, `profiles`, `xpAudit`,
`conversationMemory`; all five are matched. CLEAN.

**B — a host the client fetches that the CSP omits fails IN PRODUCTION ONLY.**
The policy lives in `public/_headers`, which only Cloudflare Pages serves. jsdom
does not enforce CSP at all and the E2E suite runs against `vite preview`, which
does not serve `_headers` — so a blocked request is green in **every gate this
repo has** and dead on nasahrvatska.com. Measured: the client makes NO
absolute-URL request of its own. Every call is same-origin, the radio streams
are proxied server-side, `index.html` loads no external script or stylesheet,
and the only cross-origin traffic is from bundled SDKs (Firebase, Sentry,
PostHog) whose hosts are all in `connect-src`. **So `connect-src 'self'` is
sufficient BECAUSE of the same-origin property, not independently of it** — and
that property is what the guard pins. CLEAN.

Two hosts were checked and are not findings: `us.i.posthog.com` IS matched by
`*.posthog.com` (a CSP host wildcard suffix-matches nested subdomains), and
posthog-js never fetches its session recorder because `disable_session_recording`
is true — otherwise that script would need a `script-src` entry it does not have.

**MY OWN MATCHER WAS WRONG THREE TIMES, AND EVERY ONE WAS CAUGHT BY A FLOOR.**
This is the reusable part, because each failure reported a CLEAN-LOOKING number:

1. The client matcher named `doc|collection` applied to `db|_db|firestore`.
   `firebase.ts` imports `doc as fsDoc` and holds the handle in `_fbDb`, so
   `srs` and `profiles` were invisible — 2 collections found, and the guard read
   as covering the whole client. **A name that matches nothing guards nothing**,
   met while writing a guard about exactly that. Aliases are now DERIVED from
   each file's own import.
2. The rules matcher captured only the segment after `match /`, so the nested
   `xpAudit` and `conversationMemory` blocks were missed — and it reported a
   LIVE collection as unruled, i.e. a false positive on the first run.
3. The argument body was `[^)]*`, which stops at the close of `toDocId(` inside
   `collection(db, 'users', toDocId(uid), 'conversationMemory')` — 4 collections
   instead of 5. Balanced-paren now.

Each was found because the non-vacuity floor was set from a COUNT I had measured
by hand first. Without those floors all three versions pass, and the third —
4 of 5 collections — is the one that would have shipped looking right.

Comment stripping is load-bearing on the rules file specifically: a comment there
contains the words "match ANY", which the parse would otherwise read as a path.

**Mutation-verified seven ways.** Firestore: a client call to an unruled
collection (fails 1); a match block renamed (2); the alias derivation replaced by
hardcoded names (2); the balanced-paren reverted (2). CSP: a production file
fetching an absolute URL (1); an SDK host dropped from `connect-src` (1); the
matcher broken (1).

**Both are ratchets, not fixes** — said plainly, because a guard written after a
clean measurement is easy to mistake for a repair.

---

### Sweep 87 — every screen, opened by URL, in a real browser (2026-09-24, 430 ROUTES, 0 CRASHES)

Sweeps 80–81 ended with a recommendation and no result: three ways to run a
click sweep in jsdom were measured and all three failed, and the conclusion was
"an E2E spec driving the screens is the honest vehicle, and it is a bounded 36,
not 423." **Both halves of that were wrong in the useful direction.**

**THE DOOR WAS ALREADY THERE AND NOBODY HAD OPENED IT.** `setScr` ends in
`navigate(s === 'dashboard' ? '/' : '/' + s)`, and App.tsx's path effect turns
an unrecognised path straight back into `_setCurrentScreen(p.slice(1))`. So
**every screen in this app has a real URL**, reachable directly — no click path
required. The 36-screen bound existed only because I had been thinking in taps.
Every existing spec navigates by clicking visible text, and the only
`page.goto` targets anywhere in `e2e/` are the five TAB paths.

**This is a real user path, not a synthetic one.** A learner reaches these by
refreshing, by the back button, or from a bookmark — and on that entry the
screen renders WITHOUT the launch-time state its normal caller would have set.
App.tsx says as much in a comment ("exercise screens need launch-time state")
and restricts `RESTORE_SAFE_SCREENS` for that reason, but the URL path has no
such restriction.

**RESULT: 430 routes swept, 0 crashes.** Every route the router branches on
renders without engaging `ScreenErrorBoundary`, in Chromium, as a seeded
verified learner, with `/api/content/*` fixtured. 4.8 minutes.

**TWO CONTROLS, AND THE FIRST ONE IS THE REASON THE RESULT MEANS ANYTHING.**

1. **Do distinct routes render distinct screens?** If direct-URL entry silently
   bounced to the dashboard, the sweep would have visited ONE screen 430 times
   and reported a perfect score. Measured: 8 of 8 sampled routes produce
   distinct body text. **My first attempt at this control reported 1 of 8** —
   the fingerprint was the first 90 characters, which is the shared app header.
   A control can be vacuous exactly like the thing it controls.
2. **Does the detector fire on a real crash?** A `throw` injected into
   `VocabJournal`'s render, rebuilt, swept: `journal` reported, the other two
   routes in the subset clean. The first injection went in at the wrong brace
   and broke the BUILD rather than the render — **check where a mutation landed
   before reading its result**, again.

**WHAT IT PROVES AND WHAT IT DOES NOT, stated.** It proves each screen RENDERS.
It does not prove any screen WORKS: nothing is clicked (sweep 75's 110 screens
with no interaction test stands untouched), every `/api/*` but content 404s so
the AI surfaces are covered in their degrade state only, and direct entry means
many screens render an empty state rather than a populated one. The claim is
"does not crash on refresh", and that is all.

**IT DOES NOT RUN ON THE DEPLOY GATE, deliberately.** 430 routes take ~4.8 min
and `playwright.config.js` pins `workers: 1` (recorded reason: flakiness at 4)
with `retries: 2` — one flaky route would cost ~15 minutes on the job that
gates every deploy. The spec is `test.skip`ped unless `ROUTE_SWEEP` is set, and
`.github/workflows/route-render-sweep.yml` runs it weekly and on dispatch,
failing red. That is the shape this repo already uses for output-observatory,
calibration, stt-calibration and push-health: sweeps worth running regularly and
not worth paying for on every push.

**The control ships WITH the sweep**, in the same file, because a sweep whose
navigation silently stopped working would go green forever and nothing else
would say so.

---

### Sweep 88 — the errors a boundary cannot catch (2026-09-24, 430 ROUTES, 0 UNCAUGHT EXCEPTIONS)

Sweep 87 asks one question: did `ScreenErrorBoundary` engage? That only sees a
throw during RENDER. This repo has already been bitten by the other half —
`RegionScreen` rendered `v.tip` while every row carries `note`, so every
authored line was dropped silently, and `ScenesScreen`'s `scene.qs.map` threw
into a boundary that swallowed it for three weeks. An unhandled rejection inside
an effect produces no boundary at all.

So the same harness was re-run collecting **every `pageerror` and every
`console.error`** per route, rather than only the boundary.

**Raw result: 430 of 430 routes reported something — and that number is
worthless**, which is the finding worth recording. Classified:

| messages                                     | count       | what it is                                  |
| -------------------------------------------- | ----------- | ------------------------------------------- |
| `net::ERR_TUNNEL_CONNECTION_FAILED`          | every route | the sandbox proxy refusing outbound traffic |
| `Firebase: VITE_FIREBASE_API_KEY is missing` | 429         | no Firebase key in a local build            |
| `[apiFetch] Failed to get auth token`        | 3           | the consequence of the line above           |
| `ERR_CERT_AUTHORITY_INVALID`                 | 1           | the same proxy                              |
| **uncaught exceptions (`pageerror`)**        | **0**       | —                                           |

**Zero routes raise an uncaught exception on direct-URL load.** The three
`apiFetch` lines are the degrade path working out loud: it logs the missing
token and carries on.

**THE LESSON IS ABOUT THE MEASUREMENT, NOT THE APP.** "430 of 430 have errors"
and "0 of 430 have a defect" are the same run. A console-error sweep run in a
sandbox with blocked egress reports the environment, not the product, and an
unclassified count would have been a fabricated crisis. Classify before
counting — and state which bucket is environmental, because the next person
re-running this will see 430 again.

**Both sweeps share one limitation, stated once:** nothing is clicked, and
`/api/*` other than content 404s, so an AI surface is covered in its degrade
state only.

---

### Sweep 89 — clicking one control on every screen (2026-09-24, 430 ROUTES, 0 PROBLEMS, AND THE COVERAGE IS 3 IN 4)

Sweep 87 proved every screen RENDERS. The owner's standing directive is about
what happens when you press something, so the same harness was pointed at the
first substantive control on each screen: skip anything whose label is
navigation (Back, the six tab names, Sign Out, the skip-link), take the first
visible ENABLED button with a label, click it, then check the boundary and
`pageerror`.

**Result: 430 routes, 0 problems.**

**AND THAT NUMBER IS UNFALSIFIABLE WITHOUT THE NEXT ONE, which the first run did
not produce.** The probe `continue`s when no button passes the filter — so
"0 problems" is equally consistent with "nothing was ever clicked". A control on
a 12-route sample reports the click rate and what was pressed:

```
genitivedrill  buttons=10  clicked "Start questions →"
alphabet       buttons=40  clicked "A a a (ah) auto (car)"
flashcards     buttons= 9  clicked null
journal        buttons=10  clicked "➕ Add Word"
dictation      buttons=21  clicked "▶"
writing        buttons=13  clicked "📚 Guided Prompt"
cityofday      buttons=14  clicked "📖 Overview"
badges         buttons= 9  clicked null
aspectdrill    buttons=13  clicked "📖 6 Rules"
mcgame         buttons= 9  clicked null
brzalice       buttons=19  clicked "Tri trice trista trideset i tri."
certificate    buttons=11  clicked "🔗 Share"
CLICK_RATE 9 of 12
```

So the honest claim is: **one primary control was pressed on roughly three
screens in four, and none of them crashed or raised an uncaught exception.** The
presses are substantive — a drill's start button, Add Word, Share, a tongue
twister, an alphabet letter — not decoration.

**The blind spot is named rather than rounded off.** Three of twelve screens had
buttons and none passed the filter: their controls are all navigation-shaped,
unlabelled (icon-only with no text and no aria-label) or disabled at rest. An
icon-only control with no accessible name is invisible to this sweep — and to a
screen reader, which is the more interesting half of that observation.

**NOT SHIPPED as a spec, deliberately.** One click per screen is a weak
guarantee next to its cost (the run takes far longer than the render sweep,
because a click that fires a request waits on it), and a 75% click rate would
have to be stated inside the test for its green to mean anything. Sweep 87's
spec covers the render half and now the uncaught-exception half; this stays a
measurement. **The next person who wants real interaction coverage should write
flows for named screens, not another generic presser** — sweep 75's 110
uninteracted screens are still 110.

---

### Sweep 90 — axe has only ever seen six screens (2026-09-24, 3 REAL DEFECTS, FIXED)

Sweep 89 ended with a hypothesis: some controls are icon-only with no
accessible name, invisible to a click sweep and to a screen reader. Sweep 87's
harness can reach every screen, and the repo already has `@axe-core/playwright`,
so the hypothesis was testable rather than arguable.

**FIRST, THE HYPOTHESIS WAS WRONG.** Across all 430 routes axe reports **zero**
`button-name` violations. The three screens whose buttons my click filter
rejected had navigation-shaped or disabled controls, not unlabelled ones.
Recorded because a plausible lead that dies on measurement is worth exactly as
much as one that lives — and this one would otherwise be repeated.

**THE REAL GAP: `accessibility.spec.js` scans SIX surfaces** — the five tabs and
login — so **424 screens had never been scanned by axe at all**. Swept, WCAG 2.1
AA, serious + critical:

| rule                         | routes |                                 |
| ---------------------------- | ------ | ------------------------------- |
| `color-contrast`             | 252    | 985 nodes — excluded, see below |
| `select-name` (**critical**) | 1      | `live_tutor`                    |
| `frame-title`                | 1      | `crmap`                         |
| `aria-prohibited-attr`       | 1      | `alka`                          |

**All three singletons were real and are fixed**, each a one-line change with no
visual effect:

- `LiveTutorSetup` — the Conversation Topic `<select>` is named by a plain `div`
  above it, so it names the control for sighted users **and for nobody else**.
  Given `aria-label`.
- `CrMap` — the Google Maps `<iframe>` had no `title`, so a screen reader
  announces an unnamed frame and cannot decide whether to enter it.
- `AlkaRing` — `aria-label` on a role-less `div` is PROHIBITED, which means it
  was simply ignored: the author wrote a name and no one ever received it.
  `role="img"` makes it valid and keeps the name.

Verified by re-running axe on exactly those three routes: all three rules gone,
only contrast left. The before/after is on the real thing, which is stronger
than a mutation.

**COLOR-CONTRAST IS EXCLUDED, DELIBERATELY AND WITH A NUMBER.** 985 nodes span
at least eight palette colours (slate-400 211, green-600 181, gray-400 107,
stone-400 60, cyan-600 43 …) and 246 come from CSS classes rather than inline
styles. The root of the biggest group is a **two-copies problem**: `--subtext`
was deliberately darkened to `#555e6e`, and index.css says why in its own
comment — _"WCAG AA: ~5.3:1 on white (was #64748b = 4.0:1, failed for small
text)"_ — while **~130 hardcoded `#94a3b8` literals never followed it**
(`CertificateScreen` renders 10px and 12px text in it). A blanket replacement is
NOT safe: some of those literals sit on dark backgrounds, where `#94a3b8` is
correct and `#555e6e` would be worse. Repairing this properly changes how the
product LOOKS on most of its screens, which is an owner's decision and not a
test's. It is counted and printed by the sweep rather than asserted, so the
number cannot grow unobserved, and the alternative — a threshold nobody can
justify — is refused explicitly.

**A control that ruled out the obvious explanation.** `accessibility.spec.js`
seeds `xp: 8000` precisely because locked cards render at `opacity:0.55` and
fail contrast, so the first suspicion was that my lower-XP seed had manufactured
all 985 nodes. Re-run at C1 on the identical sample: **35 routes, 151 nodes,
byte-identical**. The locked-card explanation is disproved, and the finding is
level-independent.

**The count moves between runs — 985 then 991 on identical code** — which is
the concrete reason the node total is printed and not asserted. A threshold set
at either number would have been a coin flip, and this file's own rule about
stochastic assertions says not to put a floor at the distribution's mean.

**Shipped as a ratchet** in the weekly route sweep: serious/critical violations
other than contrast must be empty. It is clean as written — a ratchet, not a
repair — and it is what stops the fourth singleton.

---

### Sweep 91 — a colour token referenced 104 times and defined nowhere (2026-09-24, 1 REAL DEFECT, FIXED — 1,248 failing nodes)

Sweep 90 found ~130 hardcoded colour literals and parked the palette question.
The obvious follow-up is the one nobody had run: **the accessibility suite has
never once run in dark mode** (`grep -c darkMode e2e/accessibility.spec.js` → 0).
A hardcoded light-mode colour is harmless on white and invisible on a dark card,
so dark mode is where those literals would actually hurt.

**Measured, same 60-route sample, same seed, only the theme changed:**

|       | routes with violations | failing nodes |
| ----- | ---------------------- | ------------- |
| light | 35 of 60               | 151           |
| dark  | 50 of 60               | **1,850**     |

Twelve times the nodes. And the worst ratios are not "a bit thin" — they are
**unreadable**: `#000000` on `#1e293b` = **1.43**, `#44403c` on `#1e293b` = 1.42,
`#164e63` = 1.60, `#991b1b` = 1.76. WCAG AA wants 4.5.

**THE ROOT CAUSE, AND IT IS ONE LINE.** The worst offender rendered
`color: var(--text)`. **`--text` is referenced by 104 `color:` call sites in
`src` and DEFINED NOWHERE.** The only `--text-*` tokens in `index.css` are FONT
SIZES (`--text-xs` … `--text-4xl`); the colour token was never written. An
undefined custom property makes the declaration invalid at computed-value time,
so `color` falls back to inherit — pure black. Probed in the real browser:

```
BEFORE  LIGHT: color rgb(0,0,0)      on bg rgb(255,255,255)   → 21:1, fine
BEFORE  DARK : color rgb(0,0,0)      on bg rgb(30,41,59)      → 1.43, invisible
AFTER   LIGHT: color rgb(15,23,42)   on bg rgb(255,255,255)   → 18.1:1
AFTER   DARK : color rgb(226,232,240) on bg rgb(30,41,59)     → ~12:1
```

**This is why it survived**: in light mode the accident produces exactly the
right answer. Black on white is the best contrast there is, so 104 sites looked
perfect and the bug was invisible to every test, every reviewer and every
light-mode user. Only the theme it was never tested in exposes it.

**The fix is to define the token** in both themes, mirroring `--heading`
(`#0f172a` light, `#e2e8f0` dark). It cannot be fixed in dark alone: the sites
currently have no colour of their own, so defining it necessarily sets both.
Light moves from `#000` to `#0f172a` — 21:1 to 18.1:1, imperceptible, and it is
the colour the design system already uses for text.

**MEASURED BEFORE AND AFTER, INCLUDING THE CONTROL THAT MATTERED.** A token used
104 times could easily regress the theme that was working:

|              | routes   | nodes               |
| ------------ | -------- | ------------------- |
| light BEFORE | 35 of 60 | 151                 |
| light AFTER  | 35 of 60 | **151 — identical** |
| dark BEFORE  | 50 of 60 | 1,850               |
| dark AFTER   | 49 of 60 | **602**             |

**1,248 failing nodes fixed by defining one variable, with light mode
byte-identical.**

**The remaining 602 are the sweep-90 class** — hardcoded literals like `#164e63`
on `kings` and `idioms`, `#991b1b` on `history`, `#7c3aed` on 27 nodes — and they
stay parked for the same stated reason: repairing them changes how the product
looks, which is an owner's decision. The difference is that THIS one was not a
palette judgement at all; it was a variable that does not exist.

**THE DIFF IS NINE LINES AND THE FIRST ATTEMPT WAS 5,069.** I ran
`prettier --write` on `index.css` out of habit. **lint-staged covers only
`src/**/*.{ts,tsx,js,jsx}` and `functions/**/*.js`**, so that stylesheet has
never been prettier-formatted — the whole file reflowed, 3,657 insertions riding
on a two-line fix, with nothing about the actual change visible in it. Rebuilt
from master with the token lines applied by hand, and re-verified in the browser
AFTER the re-apply rather than assuming the text was identical. **Do not format a
file the repo does not format** — check the lint-staged globs before reaching for
a formatter.

**A process note.** The full dark sweep was running when I rebuilt `dist/` for
the fix, so half its routes were measured before the change and half after. That
run is discarded, not reported — a before/after is worthless if the build moved
underneath it. The 60-route sample was re-run cleanly on each side instead.
Separately, `pkill -f zz-dark-axe` matched its own command line and killed the
replacement run I had just started; the lesson is small but real, which is that a
pattern kill can match the process issuing it.

---

### Sweep 92 — the phone this app is built for (2026-09-24, NEGATIVE, CONTROL VERIFIED)

Sweep 91 paid because dark mode was a configuration nobody had ever tested. The
same shape, one axis over: **this is a phone-first PWA** — CLAUDE.md describes
`TabBar` as "what a phone shows" — and sweeps 87 through 91 all ran Desktop
Chrome at 1280px. Nothing had checked that a screen fits the device most
learners hold.

Horizontal overflow is the objective version of that question: content wider
than the viewport is either cut off or forces the whole page to pan sideways,
and it is completely invisible at desktop width.

**Result: 430 routes at 393px, 0 overflowing.**

**THE CONTROL IS WHY THAT NUMBER MEANS ANYTHING.** A `scrollWidth > clientWidth`
probe is STRUCTURALLY BLIND if anything sets `overflow-x: hidden` — the content
still spills and is still unreachable, but the scroll it would have caused is
suppressed, so the measurement reports a clean page for ever. Two checks before
believing the zero:

- `overflow-x` computes to `visible` on BOTH `html` and `body` — nothing
  suppresses it. (The three `overflow-x: auto` rules in `index.css` are on inner
  scrollers, not the document.)
- A 900px element injected into a live page moved `scrollWidth` from 393 to 900:
  `DETECTOR_FIRES true`.

Without those, "0 overflowing" and "the probe cannot see overflow" are the same
green.

`position: fixed` elements are excluded when naming an offender — the tab bar
and toasts are viewport-anchored by design and do not widen the document.

**Shipped as a fourth test in the weekly route sweep** (verified passing, 4.7m).
A ratchet, not a repair: the regression it exists for is a new drill with a wide
table or a long unbroken string, which is exactly the kind of thing that looks
fine to whoever adds it on a laptop.

### Sweep 93 — where is the keyboard (2026-09-24, 8 REAL DEFECTS, FIXED)

Sweeps 87–92 asked whether a screen renders, throws, passes axe, and fits a
phone. None of them asked whether it can be USED without a mouse. axe cannot
answer it — focus visibility is not a static-DOM property — and no spec in the
repo presses Tab.

**Result: 8 controls, across 6 components, that look exactly the same focused as
unfocused**, out of 8,363 tabbable controls on 430 routes.

The mechanism is one sentence: **`outline` IS this app's focus ring, so using it
for decoration deletes the ring, and an inline style always wins.** Six controls
used it for a SELECTED state — `HeritageModeScreen`'s four section tabs,
`VideoLessonScreen`'s topic cards and level pills, `LearningPreferencesSection`'s
voice and speech-rate pills, `PostcardScreen`'s city thumbnails. Two text fields
lost the other indicator: the dashboard search box set `boxShadow` inline for
resting elevation, overriding `input:focus`'s ring, and AI Conversation's
free-writing textarea set `outline`, `border` AND `boxShadow` inline and had **no
focus indicator of any kind**. All eight now carry their decoration on
`box-shadow` (`inset`, which reads the same) or in a class that loses to
`input:focus` on specificity.

**THE PROBE WAS WRONG TWICE, AND BOTH ERRORS ARE THE REUSABLE PART.**

1. **It measured one element per route and reported a clean zero.** The Tab loop
   broke on a repeated element, keyed by a text fingerprint — and the app renders
   TWO "Skip to main content" links, so Tab 0 and Tab 1 produced the same key and
   the loop ended at i=1 on all 430 routes. `TABBED_ELEMENTS 50` across 50 routes
   is exactly one each; the counter I had added for this reason is the only thing
   that said so. Walk a tab order by element IDENTITY (stamp an attribute), never
   by what the element looks like.
2. **It reported 30 bad routes, and 217 of its 219 hits were an ANIMATION.** A
   focus ring that transitions in is genuinely `0px` at t=0 and `3px` 200ms
   later; sampling immediately after the keypress measures the transition, not
   the product. Re-reading suspects after 450ms took 30 routes to 2. I spent
   three rounds theorising about which CSS rule was setting `outline-style:
solid; outline-width: 0` — an impossible cascade — when the answer was that
   nothing was: I was reading a value in flight. **Forcing an inline
   `outline: 3px solid red` and getting `solid 1px` BACK is what proved it**, and
   that is the diagnostic to reach for first, ahead of any theory about which
   rule wins.

**AND THE PREDICATE ITSELF WAS THE THIRD ERROR.** "Does this element have an
outline?" is not the question. `PostcardScreen`'s unselected city is
`3px solid transparent` and `VideoLessonScreen`'s unselected topic is
`1px solid rgba(0,0,0,.07)` — both present, neither a focus indicator, and both
INVISIBLE to a presence check. The predicate is **does anything about this
element change when it takes focus**: snapshot every focusable element's computed
appearance first, then tab and compare each against its own earlier value. That
version found the transparent-outline and unconditional-outline cases the
presence version had passed clean.

**What the rules were measured against, before being written.** 41 inputs carry
an inline `border` (the app's convention; costs only the colour half, the ring
still fires) and 23 carry an inline `outline: 'none'` (redundant with the base
input rule; a field's ring is the box-shadow). So the guard forbids a
NON-'none' outline on a focusable element, and forbids a field overriding BOTH
its indicators — exactly one site did. A rule against the 41 would have been a
rule against the codebase, not against the defect.

**Two guards, because they answer different questions.**
`src/tests/inlineFocusIndicator.test.ts` is the cheap source ratchet on every
commit; the EFFECT is a fifth test in the weekly route sweep. Mutation-verified
both ways: reverting the four fixes makes the E2E test list **28 controls**
across the three reachable routes, and the source guard fails 1–2 tests per
mutation. Its own `:focus-visible` assertion was DECORATIVE on first writing —
`.sub-tab-pill:focus-visible` carries the same declaration, so deleting every
global ring left it green; it now requires the selector to be bare.

### Sweep 94 — a click is not an affordance (2026-09-24, 52 REAL DEFECTS, FIXED)

Sweep 93 fixed controls whose focus ring was invisible. The harder half of the
same question had not been asked: can the action be performed at all without a
mouse? A `<div onClick>` has no tab stop, no role, and does nothing on Enter or
Space — and **axe cannot see it**, because a div with a click handler has no
ARIA violation. The weekly sweep's axe pass was green across 430 routes with all
60 present.

**Census: 1,901 `onClick` handlers; 60 on an element a keyboard cannot reach.**
Among them the ONLY path to: choosing an AI conversation scenario (three of
them), opening a news article, picking a writing prompt, choosing a region,
starting a story, picking a verb, starting a conjugation quiz, flipping a
mistakes card, the Learn Path chip on Home, the "Moje riječi" card on Me, and an
XP award on Phrase of the Day that a keyboard user could never earn.

**52 fixed, 8 left with a reason.** `src/lib/clickable.ts` is the repo's own
existing pattern (`IdiomsScreen` has had `role` + `tabIndex` + Enter/Space for
months) as one function, so the next one is a spread rather than eight lines to
get right again. The anthem scrubber got `role="slider"` instead — arrows step
5s, Home/End jump to the ends — because reaching for `role="button"` on a range
is the easy wrong answer.

**THE TWO CARVE-OUTS ARE CATEGORIES, NOT A SHRUG.** A modal BACKDROP already has
a keyboard path: all four sit over a real Close control (checked by hand; one
also handles Escape), and making a full-screen backdrop focusable adds a tab
stop that announces itself as a button. A per-WORD tap inside running text would
put hundreds of stops in one paragraph. **A per-ITEM tap is not in that
carve-out and was fixed** — a vocabulary row, a paradigm cell, a chat bubble —
and for the AI chat bubble the tap is the only way to hear an AI line at all.

**Two things the scanner got wrong first, both worth keeping.** `onClick\s*=`
matches `typeof props.onClick === 'function'`, so the first run reported
`SessionCard`'s decorative avatar div — `(?!=)` fixes it, and without that the
exemption list would have carried a phantom. And the import inserter picked "the
last line starting with `import `", which in `StoriesTab` is the opening line of
a multi-line `import {` — it inserted the new import INSIDE the braces and broke
the file. Anchor on a complete statement, not on a prefix.

**The risk this change carried was `nested-interactive`**, a SERIOUS axe rule: 45
new `role="button"` elements, any of which containing a real button would fail.
Measured after, over all 430 routes: axe still reports zero serious or critical
violations. That is the check, not an argument.

Guard: `src/tests/clickableKeyboard.test.ts`, exemptions with reasons and both
staleness directions, plus a non-vacuity clause requiring it to see the GOOD
pattern (>30 sites) as well as the bad. Mutation-verified four ways: one fix
reverted fails 2, `tabIndex` dropped from the helper fails 1, Space no longer
activating fails 1, a stale exemption fails 1.

### Sweep 95 — the blank page at the end of a stale link (2026-09-24, 1 REAL DEFECT, FIXED)

`App.tsx`'s path effect was `_setCurrentScreen(p.slice(1))` with no validation,
and the SPA fallback serves index.html for every path — so ANY address became a
screen key, matched no branch in `AppRouter` (which has no fallback), and
rendered nothing. Measured in a real browser, seeded and authenticated:

| path           | main content |
| -------------- | ------------ |
| /genitivedrill | 1,388 chars  |
| /nonsense      | 33           |
| /culture       | 33           |
| /Dashboard     | 33           |

**`/culture` is the one that matters**: the Croatia tab was CALLED Culture until
2026-04-26 — this repo's own nav table carried the stale name for five months
after — so every link and bookmark from before that date lands on a page with no
message, no active tab and nothing to do. That is the dead end the next-step
directive exists to forbid, on the one route no spec visits. `/Dashboard` is the
same thing one capital letter away from a real screen.

`ScreenNotFound` names what happened, shows the path asked for, and offers the
two ways out. **The risk is the 430-entry key list**, which is exactly the
hand-maintained list this repo keeps finding decayed — so it is generated from
`AppRouter.tsx` and `routeKeys.test.ts` compares BOTH directions: a screen added
without its key would send its own URL to the not-found card, a key left behind
after a deletion would send a dead path back to a blank page. Mutation-verified
five ways (guard reverted fails 1 unit + the new E2E test while its control
still passes; a key deleted, a phantom key added, the branch removed each fail 1).

### Owner-reported, 2026-09-24 — the news sources, and Baka Mara's ear

Two field reports, neither found by a sweep.

**"News is coming from Index.hr... why are we not using Dnevnik?"** Answer:
nobody ever chose. Three feeds were hardcoded when `/api/news` was written and
nothing revisited them. Beyond the swap, two defects made the source list
unenforceable: a dead feed was COMPLETELY SILENT (`catch { return [] }`, the
survivors covering for it, no record anywhere), and `flat().slice(0, 6)` took
five items from the first source and one from the second, so sources three and
four never reached a learner at all — adding a source to the list did nothing.
Both fixed; the payload now reports which sources answered.
**The feed URLs cannot be verified from a development sandbox** — every Croatian
host answers 403 at the egress proxy, including the two that have worked in
production for months, which is the "classify before counting" rule in its
purest form. `scripts/checkNewsFeeds.mjs` runs on a GitHub runner, which can
reach them, on any PR touching the feed list and weekly. **First run: 4/4
answering** — and the candidate-URL design paid immediately, because Zadarski's
first guessed path 404s and its second answers 200 with zero items, which is
exactly the failure the checker refuses to score as success. Also fixed on the way:
the offline fallback articles, written by this app, carried three real
newsrooms' names as their source.

**"Baka Mara wasn't always reading properly or picking up my full sentences."**
`MajaScreen`'s `onend` could not tell OUR `stop()` from the speech service
ending the session on its own, and `if (listening && transcript.length > 1)
{ send }` produces both symptoms exactly: ended mid-sentence, half the sentence
is sent while the learner is still talking; ended before they said anything, the
length guard skips the send and **nothing else runs** — the mic is dead with no
message until they leave the screen. Now a pure `decideOnRecognizerEnd` returns
send / restart / fallback / idle, restarts carry the transcript forward
(`event.results` is empty in a new session, so restarting without accumulating
would have been a second truncation bug), and restarting is capped so a dead
speech service falls through to Whisper or the typed input instead of spinning.
Mutation-verified four ways, and pinned at the SCREEN as well as at the
decision: `e2e/maja-turn-end.spec.js` drives a fake recognizer that ends its
session mid-sentence, and against the old handler it reproduces the report
exactly — `{"message":"Jučer sam bio"}` posted and answered, then
`{"message":"u dućanu s bakom"}` as a separate turn.
The same defect was then found on `GuidedSpeakingScreen` — where a deliberate
stop nulls the handler, so EVERY `onend` there is the service ending the
session — and it is worse, because the SPEAK stage is rubric-graded and measured
against a word floor. Measured in a browser: 15 words spoken, **8 delivered to
the grader** before the fix. Both screens are pinned by
`e2e/speech-turn-end.spec.js`. A third — `SpeakingSprintScreen`, also
`continuous` and also graded — had the same handler AND a `stopMic()` that did
not null it, so a deliberate stop and a service-ended session were literally the
same event. Fixed the same way. `SpeakingScreen` is excluded on evidence
(`continuous: false`, where the session end IS the endpoint) and pinned so a
later change cannot enrol it silently.

**The other half of that report was a promise that never settles**, and it is
the worse half: ten screens carried a byte-identical `new Promise` around a
`FileReader` with no `onerror`, so a failed read leaves the `await` hanging for
ever — no exception, no timeout, no boundary, no console line. The screen stops
and nothing says why. Exactly one of the ten had the error path. `blobToDataUrl`
is now the one implementation and nine call sites use it; a failed decode or a
refused `play()` is named through the same raiser as every other TTS failure,
where all three used to record and raise nothing. Guarded by
`fileReaderSettles.test.ts`, scoped to the promise shape on purpose so it does
not flag readers that merely set state.

---

### Sweep 96 — the tests that assert nothing (2026-09-24, 22 REAL DEFECTS + 1 PRODUCT DEAD END, FIXED)

**The question**, in the form this file says has paid every time: _name two
things that must agree, and ask what happens when they stop._ Here: a test's
TITLE (what it claims to check) against what it actually executes.

**THE SHAPE.** A test whose every `expect(...)` sits inside an `if` with no
assertion-bearing `else`. When the condition is false the body runs zero
assertions and the test passes — indistinguishable, from a green run, from a
test that checked the thing.

**THE CENSUS.** A TypeScript-AST pass over all 590 committed test files
(6,119 tests). A general "assertion-free path" definition reports **410**,
almost all `for (const x of SOME_STATIC_DATASET)` — a real but far weaker
concern that would drown the signal. Narrowed to the `if`-with-no-else shape:
**25**. Every one was then MEASURED by instrumenting its condition and running
its file, because no static rule can tell a guard that fires from one that
cannot.

| where                                     | measured                      | verdict                             |
| ----------------------------------------- | ----------------------------- | ----------------------------------- |
| `gradedInputScreen.transport.test.tsx` ×2 | **0 firings**                 | LIVE VACUOUS                        |
| `e2e/pronunciation.spec.js`               | **21 guards, 19 never fired** | LIVE VACUOUS                        |
| `word-sprint.test.tsx` ×3                 | 1 firing each                 | latent                              |
| `profile-persist.spec.js` ×2              | fires                         | latent                              |
| the other 9                               | 4–212 firings                 | legitimate, exempted with the count |

**A. THE TRANSPORT CONTRACT NOBODY WAS CHECKING.**
`gradedInputScreen.transport.test.tsx` exists to verify that pronunciation
assessment posts `{ audioBase64, referenceText, locale, audioMimeType }` and
_not_ the old `{ audio, text }`. `assessPronunciation` runs from an effect
that returns early unless `recordingIdx !== null`, which **only a click on the
record button sets** — and no test clicked it. So `_nativePost` was never
called, and all three assertions (two behind `if (calls.length > 0)`, one
looping over the same empty array) ran zero times. THREE green tests, the
file's entire stated subject unverified, for as long as it existed. Fixed with
a `recordParagraph()` helper that performs the click, and unconditional
assertions.

**B. A WHOLE SPEC POINTED AT A UI THAT NO LONGER EXISTS.**
`e2e/pronunciation.spec.js` — 40 tests, header "the features most at risk
before Google Play launch" — navigated through `button.cat-tile` inside "Drill"
and "Challenge" panels. **`cat-tile` exists only in `index.css`: no component
in `src/` has rendered it since the Practice tab became the Grad surface.**
Same for `.path-item` / `.lp-item` / `[data-path-item]`. Because every locator
was consulted inside `if (await X.isVisible().catch(() => false))`, the tests
did not FAIL when the screen was unreachable — they skipped their own bodies.
Instrumented and run: **19 of 21 guards never fired.** The spec's second
navigation strategy (seeding `nh_scr`) was dead too — that key is never
written, so the restore could not have worked either.
Rewritten against the real path (Grad → Anina kavana → Govori), with an
assertion after it so a future move of that entry point fails loudly. **33
tests, all genuinely driving the screen.** Six tests were REMOVED rather than
re-pointed (AI Listening, Dictation, Flashcards ×2, MC quiz ×2, settings, path
item): each navigates to another spec's subject, each is covered there by name,
and each asserted nothing here — so nothing is lost, and the coverage the file
claims now matches the coverage it has.

**C. AND THE DEAD SPEC WAS HIDING A REAL PRODUCT DEAD END.**
Once the tests reached the screen, the very first scoring run showed
**"⚠️ Audio recording not supported in this browser." and nothing else** —
pressing "Test My Pronunciation" did nothing, repeatedly.
`PronunciationScorer.mediaRecorderSupported` only asks whether `MediaRecorder`
EXISTS, so the Azure path is taken on any browser that has the constructor;
`useRecorder` then reports `'unsupported'` when none of `MIME_PRIORITY` is
actually recordable — **a check that runs AFTER `getUserMedia` has already
succeeded**. So the learner grants the microphone, presses the button, and
meets a dead end, while Web Speech sits available and unused in a component
whose own comment says `'auto'` falls back to it. Fixed the way the sibling
Azure-failure path already does it: name the cause (`serviceNotice`), switch
mode, run Web Speech. Verified end to end in a browser — the same press now
scores and offers Try Again / Next.
**This is the argument for the whole sweep in one line: the test written to
catch exactly this was green, and had been for as long as the defect existed.**

**THE RATCHET.** `src/tests/guardedAssertions.test.ts` +
`helpers/guardedAssertions.ts` derive the shape from every committed test file
and fail on any instance not in `EXEMPT`. Exemptions are keyed on
**(file, test name)** — line numbers move on every edit above them — and each
carries its MEASURED firing count, because "I read it and it looks fine" is the
evidence that produced the `idioms` exemption. Staleness is checked in BOTH
directions, and there is a positive control: a synthetic guarded test must be
flagged, an unguarded one must not, and an if/else asserting on both branches
must not.

**Mutation-verified, six, each confirmed landed:**

| mutation                                                              | fails |
| --------------------------------------------------------------------- | ----- |
| the transport test's original `if (calls.length > 0)` shape restored  | 1     |
| an exemption for a test that no longer has the shape                  | 1     |
| the analyser returns `[]` (a decorative detector)                     | 3     |
| word-sprint's guard restored                                          | 1     |
| the else-branch exclusion removed (if/else both-assert over-reported) | 2     |
| pronunciation.spec.js's `cat-tile` guard restored on one test         | 1     |

**ONE MUTATION EXPOSED A DECORATIVE LINE OF MY OWN.** The analyser originally
excluded the THEN branch when the ELSE also asserts. Removing that clause
changed nothing — the else-branch rule already covers if/else — so by this
file's own standard it was decoration, and it is gone. A mutation that SURVIVES
is a result too: it says the line it removed was not load-bearing.

**AND IT CORRECTS SWEEP 55.** That sweep closed with "the 24 honest skips are
still 24 drills whose completion contract this suite does not exercise", and
recommended building a harness that can drive text-input, tile-ordering, timer
and multi-phase drills — "a real piece of work". Measured: **23 of the 25
skipped entries have their own `*.contract.test.tsx`**, driving the real screen
with a real answer key, and the `exerciseContract` file says so in a comment
above its Tier 3 block. The number is not 24; it is **one**. `WordSprint` had
completion coverage in `word-sprint.test.tsx` — behind the guards this sweep
removed — and only `BojeGame` is genuinely unexercised: `boje-game.test.tsx`
asserts its per-answer and completion AWARDS, but mocks `setStats`,
`writeDelta` and `markQuest` as bare inline `vi.fn()`s it never captures, so
`gc`, the `boje` `vs` tag and the quest are checked nowhere. Left open and named
rather than folded into this PR. **Sweep 55's figure came from counting the
skips instead of looking for the coverage elsewhere** — the same shape as the A2
tranche that claimed 26 of 30 by subtracting a list of judgement calls from
thirty.

**WHAT THIS SWEEP CANNOT SEE**, stated rather than implied: the 410 loop-shaped
tests (vacuous only if their dataset is empty — most are large and static);
assertions reached through a helper whose own body is guarded; and, the one
that matters most, **a guard that fires today and stops firing tomorrow.** That
is precisely what happened to `pronunciation.spec.js`, and no static rule can
catch it — which is why the exemptions carry measurements rather than opinions,
and why the next person should re-measure rather than re-read them.

---

### Sweep 97 — the tap that does nothing while the words are in the post (2026-09-24, 5 REAL DEFECTS, FIXED)

**Found by CI on sweep 96's own PR, and the discrepancy IS the finding.** The
rewritten `e2e/pronunciation.spec.js` passed 33/33 locally and failed 12 of 12
on the runner, every attempt, every retry. The 12 were exactly the tests that
go through the new `openSpeaking` helper — Grad → Anina kavana → Govori.

**The difference was the BUILD, not the runner.** `ci.yml`'s E2E step builds
with placeholder Firebase config; this sandbox has no `.env`, so my local build
had none and never initialised Firebase at all. Rebuilding locally with the
same six `VITE_FIREBASE_*` placeholders reproduced it on the first run. **A
green local E2E against a build the app never ships is not evidence** — this is
the "establish WHICH ARTIFACT is running" rule, met from the other side.

**What the reproduction then showed is a product defect, not a test artifact.**
`fetchAuthed` awaits `getFirebaseBearer()` before it will even request
`/api/content/core`, and with a Firebase config present but no user ever
arriving that is its 6 s failsafe. Instrumented in a real browser:

```
GRAD VISIBLE at 3285 ms
CLICKED    at 4985 ms   scr = null          <- nothing happened
REQS: [[9253, "/content/core"], [9285, "/content/curriculum"]]
second click after the wait -> the screen opens
```

**Measured, all five pooled exercises in Grad, during that window:**

| tap                  | what the learner gets                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Govori (speaking)    | **nothing at all** — `launchSpeaking` opens `if (!items \|\| items.length === 0) return;`                                               |
| Kviz (mcgame)        | **nothing at all** — `launchMcGame` does the same                                                                                       |
| Kartice (flashcards) | the ScreenGuard: _"This flashcard session needs to be started from the Practice tab — your previous session data couldn't be restored"_ |
| Spoji parove (match) | the same false message                                                                                                                  |
| Slušanje (listening) | **works** — its bank is a static import, not content                                                                                    |

The two ScreenGuard messages are false in both halves: the learner **is** on the
Practice tab, and there was no previous session to restore. That is the "start
this properly" dead end, said to someone who did start it properly.

**THE SAME DEFECT HAD ALREADY BEEN FOUND AND FIXED — AT ONE OF THE TWO
CALLERS.** `LearningCenter.openScreen` carries a comment that states the rule
better than I could: _"NOT LOADED YET" and "EMPTY" are different facts, and
saying the wrong one is NEVER-DO 13 … CI caught this: the same tap passed
locally on a warm machine and failed on a loaded runner, which is the race a
real learner meets on a slow connection._ Same five screens, same payload
builders in `lib/practiceLaunch`, same race — and the **Grad tab, which is the
app's primary route to all five**, was never touched. The Center is reached
through Learn; Grad is the Practice tab itself.

**A third surface had it too**, found by walking the callers rather than
stopping at the two: `GoalFocusSection`'s Me-tab speaking shortcut reads the
same `content?.V` and its line is `if (pool.length > 0 && launchSpeaking)
launchSpeaking(pool);` with **nothing on the else** — a comment above it records
that the speaking_sprint fallback was removed, which is what left it silent.

**The fix is one decision, three callers.** `poolLaunchBlock()` +
`POOL_LAUNCH_COPY` in `lib/practiceLaunch.ts`, beside the payload builders the
callers already share, holding the Center's own three sentences and its own
ordering — **content is decided before emptiness**, because "try a lesson first"
is false advice about a deck the app has not yet seen. GradTab routes its four
pooled starts through `launchPooled` and renders the reason where the tap
happened (`grad-launch-error`, in `PlaceScreen` at the exercise list, and on the
list view for the Today card, which launches through the same functions).

**Deliberately NOT changed, and stated rather than quietly left:**

- `launchSpeaking` / `launchMcGame` keep their `return` on an empty list. No
  caller can now reach them empty, and adding a notify there would double the
  message on the surfaces that already show one. The source pin is what stops a
  fourth caller arriving bare.
- `GoalFocusSection` takes `contentLoading` as a PROP. Inferring it from an
  empty `V` was my first version and it was wrong in exactly the way this sweep
  is about: an empty `V` is both "not here yet" and "the fetch failed", so
  guessing between them re-creates the lie one layer down. `SettingsTab` holds
  `useContent()` and knows.
- `GoalFocusSection`'s FLASHCARDS shortcut still falls back to `setScr('review')`
  on an empty pool. That substitutes a different exercise for the one tapped,
  which is its own small dishonesty — but it NAVIGATES, so it is not this
  sweep's subject, and changing it changes a live behaviour with its own tests.
- The 6 s bearer failsafe itself. On a real device auth restores from IndexedDB
  in well under a second, so the window is short; it is only unbounded when the
  content fetch genuinely fails, and that case now says so.

**Pinned by `src/tests/pooledLaunchNeverSilent.test.tsx` (8)**, which drives the
REAL `GradTab` through the taps a learner performs (open the place, tap the row)
at all three content states, plus a source pin requiring every file that builds
a pooled payload to also ask `poolLaunchBlock` — comments stripped, because a
file naming the helper in prose is the `couplingClearingPath` hole.
Mutation-verified, six, each confirmed landed: the speaking fix reverted fails
3; the decision order inverted fails 3; `PlaceScreen` no longer rendering the
message fails 4; the Center re-deriving its own copy fails 1; **the helper named
only in a comment fails 5** (the dangerous direction — it proves the strip); the
Me-tab shortcut restored to silence fails 1. **A seventh, at the E2E level:**
with GradTab's speaking fix reverted and the CI-equivalent build rebuilt, the
new early-tap spec fails — it reproduces the owner-visible symptom, not only the
unit-level wiring.

**AND MY OWN GUARD BROKE THE RULE SWEEP 71 WROTE DOWN.** The source pin
stripped BLOCK comments before LINE comments, which `commentStripOrder.test.ts`
forbids and caught on the full run — a `//` mentioning a path like `src/data/*`
carries the two characters that open a block comment, so a block-first strip
runs from there to the next `*/` anywhere later and silently deletes the code
the pin is about (in `src/sw.js` that swallowed 15,102 of 21,532 characters,
green throughout). Order swapped, and **the comment-only mutation was re-run
rather than assumed** — it still fails 5, so the strip still does its job.
Worth stating plainly: the targeted suites I ran while building this were all
green, and only the FULL suite had the guard that knew. Two of my own claims
needed correcting on the way — this one, and my first reading of the earlier
full run, which I attributed to a mid-run edit race when it was this same real
failure both times.

**The E2E half.** `openSpeaking` now registers `waitForResponse` for
`/api/content/core` BEFORE navigating and awaits it — the wait is not a
convenience, it is the dependency the screen has. A new test taps Govori
immediately and asserts the screen opened **or** the reason is on screen, never
neither, which is the contract as one assertion rather than two.

**CHECKED AND NOT A DEFECT — recorded so it is not re-chased.**
`useScreenLauncher.resumeLesson` has the same shape (`if (Object.keys(V).length
=== 0) return;`, deliberately, so an unverifiable topic is not deleted), but it
has **no live tap**: `AppRouter` passes it to `HomeTab`, and HomeTab's body is
`void resumeLesson;`. Nothing else calls it. A silent bail behind a prop nobody
invokes is dead code, not a learner-facing silence — a separate (minor) finding
about an unused launcher, not this one.

`McResult.playAgain` is the second: it rebuilds from `V` and hands the result to
`launchMcGame`, so an empty `V` would be the same silence. It cannot be reached
with one — the learner is on that screen only because they just finished a quiz
whose questions were built from the same `V`, and content does not unload. Safe
by construction rather than by a guard, which is why it is written down here
rather than left to be re-derived.

**WHAT THIS SWEEP CANNOT SEE.** It asks the question of surfaces that import a
payload builder from `lib/practiceLaunch`. A surface that builds its own list
from `content` by hand — as `GoalFocusSection` does — is invisible to the source
pin and was found by reading the callers of the four launchers. There is no
mechanism covering that shape; the next one will be found the same way.

---

### Sweep 98 — BojeGame's completion contract, the last remainder of sweep 55 (2026-09-24, 1 REAL GAP, CLOSED)

**The item sweep 96 named and left open.** `BojeGame` completes through
`completeExercise({ key: 'boje', score: bjSc, total, xp: bjSc * 2 })` — a GATED
row (`g('gc', 'vocab', 'vocabulary')`), so a pass writes `gc + 1`, the `boje`
`vs` tag, `writeDelta({gc:1, vs:['boje']})`, the XP and `markQuest('vocab')`.
**None of those five was asserted anywhere**, while the per-answer `award(5)`
was asserted in eight separate tests.

**The reason is mechanical, not an oversight of judgement**: the `useStats`
mock was `vi.fn(() => ({ stats, setStats: vi.fn(), writeDelta: vi.fn() }))` — a
FRESH object with new inline mocks on every call, so nothing outside the
component could ever see what it wrote. `markQuest` was mocked the same way and
never read. The mock's shape decided what the file could test, and nobody
noticed because the tests it COULD write all passed.

**Checked and NOT a defect** (recorded so it is not re-chased): the test mocks
`'../lib/quests.js'` while `useExerciseCompletion` imports `'../lib/quests'`.
Probed directly — the mock DOES intercept (Vite resolves both to one module id),
so `markQuest` is the mock. Had it not intercepted, the new assertion would have
been vacuous in the one direction a green run cannot show.

**Four assertions added, and the gate is tested in the direction that matters.**
Every pre-existing completion test plays a PERFECT 15/15 round, so the 75%
threshold had never been exercised from below: 10 of 15 (66.7%) must record
nothing at all, and does. 12 of 15 (80%) must credit, and does — the gate is a
threshold, not perfection. The already-credited path (`vs` already holding
`boje`) must not write a second `gc`. The passing case drives the REAL updater
the screen hands `setStats` rather than restating what it ought to do.

**AND THE FILE WAS THE LOOP-SHAPED BLIND SPOT SWEEP 96 STATED IT COULD NOT SEE.**
Eight copies of `for (…) { const b = container.querySelector('button.ob'); if
(!b) break; … if (nextText) fireEvent.click(nextText); }`, plus two
`if (doneBtn) fireEvent.click(doneBtn)`. Every one is a silent early-out: a run
that renders no options on question 2 stops, and the test then asserts about a
quiz that was never played. **Latent rather than live** — each old test's
post-loop assertion (`getByText('Colors Quiz Complete!')`, `goBack` called)
happens to catch it — but the NEW tests are NOT-called assertions, which pass
perfectly on an unplayed quiz, so the shape had to go before they could mean
anything. One `playQuiz(container, correct)` helper now ASSERTS what those
conditionals swallowed, and all ten early-outs are gone.

**Mutation-verified, six, each confirmed landed:** the 75% gate removed fails 1;
`markQuest` removed fails 2; `writeDelta` removed fails 1; the already-credited
early return removed fails 1; `completeExercise` removed from the screen fails 3
(one of them a pre-existing test). **The sixth is the one that matters** — the
quiz made unplayable after question 1, the exact shape `if (!optBtn) break`
swallowed: **13 of 29 fail with a named message** ("question 2 rendered no
options"), where before the de-silencing the four new NOT-called assertions
would have passed on a quiz that never ran.

**WHAT THIS SAYS GENERALLY:** a NOT-called assertion is only as good as the
proof that the scenario actually happened. `expect(x).not.toHaveBeenCalled()` is
the easiest assertion in any suite to satisfy by accident, and a loop that can
exit early is exactly how it gets satisfied. Pair every such assertion with a
floor that fails if the run did not reach the point of interest.

**Sweep 55's "24 drills" claim is now fully closed**: sweep 96 corrected the
number to one, and this is that one.

---

### Sweep 99 — an empty Learn Path congratulated the learner (2026-09-24, 1 REAL DEFECT, FIXED)

**The question, in the form this file says pays:** name two things that must
agree — here, _what a screen asserts about a learner's progress_ and _whether
the data it measures progress from has arrived_. It is sweep 97's question
(silent taps before content lands) asked of RENDERS rather than launches, and
it was chosen because sweep 97's own "what this cannot see" named the gap.

**THE DERIVATION'S FIRST VERSION WAS DECORATIVE, AND SAYING SO IS THE POINT.**
It walks every `useContent`/`peekContent` consumer, collects the identifiers
assigned from `content`, and reports those reaching a handler that ACTS on them
(launches, navigates, or bails on `.length`). First run: **2 surfaces, both
already fixed** — a clean-looking nothing. But it missed `LearningCenter`, a
KNOWN member of the class, because the handler regex required `)` immediately
before `{` and every TypeScript function with a return-type annotation —
`async function openScreen(…): Promise<void> {` — was therefore invisible.
Repaired, it finds all three. **A derivation that misses a known member is not
a negative result, it is an unfinished tool**; testing it against an instance
you already have is the only thing that separates the two.

**THE FIND — `LearnPath.tsx`.** `LEARN_PATH` is `content?.LEARN_PATH ?? []`, so
before `/api/content/core` lands the screen has no milestones to count.
Rendered with content absent, measured rather than reasoned:

```
0% done · 0 / 0 milestones · Amazing progress!
```

A praise line over zero measured milestones, on the ONE screen whose entire job
is reporting measured progress — NEVER-DO 13 in its purest form.

**AND "Amazing progress!" IS REACHABLE ONLY IN THAT STATE**, which is what
makes it a defect rather than clumsy copy. Its branch needs `pct !== 100` AND
`activeLevel < 0`; with a real path, "no incomplete item" implies everything is
done, which makes `pct === 100` and takes the TROPHY branch instead (asserted
both ways). `pct` is `totalAll > 0 ? … : 0`, so the empty case is the only way
to reach it. **The single thing that string ever meant was "the path has not
loaded", and it said the opposite.**

**Transient in the ordinary case, PERMANENT when the content fetch fails** —
the same shape sweep 97 found behind the Grad tab, which is why the loading and
failed sentences are kept apart here too: telling a learner their path failed
while the request is still in flight is itself a claim the app has not measured.
The ring now shows `—` rather than a measured `0%`.

**Checked and NOT defects on the same surface:** the two non-null assertions
`LEARN_PATH[activeLevel]!.title` are both behind `activeLevel >= 0`, which stays
`-1` on an empty array, so the empty path never threw; and `pct` was already
guarded against a 0/0 NaN. The screen was wrong, not broken — which is why
nothing had ever noticed.

**Mutation-verified, four, each confirmed landed:** the whole fix reverted (the
praise line back over 0/0) fails 2; loading told it had failed fails 1; the
measured `0%` ring restored fails 1; and the DANGEROUS direction — `pathMissing`
true for a real path, which would hide a learner's actual progress behind a
"could not be loaded" notice — fails 2.

**WHAT THIS SWEEP CANNOT SEE, stated:** a surface that receives content-derived
data as a PROP rather than calling `useContent` itself. `GoalFocusSection` is
exactly that shape and was found in sweep 97 by reading the callers of the four
launchers, not by any mechanism; this derivation would still miss it. The
prop-drilled half of this class remains unswept.

### Sweep 100 — the prop-drilled half, and the credit paid for a blank page (2026-09-24, 7 REAL DEFECTS, FIXED)

**THE QUESTION SWEEP 99 LEFT OPEN**, verbatim from its own "what this cannot
see": _a surface that receives content-derived data as a PROP rather than
calling `useContent` itself._

**The prop derivation was built and it came back almost empty — and that is a
result, not a dead end.** `/tmp` script: for every file calling `useContent()`,
take the names bound from the hook, close over every `const`/`let` whose
initializer mentions one (8 passes), then read every JSX attribute whose value
expression mentions a derived name. **48 content-derived prop passes to 11
components.** The first run reported **0**, which is the sweep-99 lesson landing
again: `GoalFocusSection` is a KNOWN member (fixed in sweep 97) and a derivation
that misses a known member is an unfinished tool. The cause was the JSX tag
matcher — `<([A-Z][\w.]*)((?:\s+[^<>])*?)\/?>` cannot span a tag containing an
arrow function, because the `>` in `(v) => …` ends the match. Replaced with a
brace- and string-aware tag scanner, and `GoalFocusSection` then appeared.

**None of the 11 recipients is a defect, and the reason is structural**: every
parent that passes content-derived data down ALSO guards, so the child never sees
the pre-content value (`HERO title={d.title}`, `QUIZ_SECTION quiz={d.quiz}`,
`BiText hr={r.introHr}`, `SessionCard session={session}`, `Bar mx={items.length}`
and the rest sit below an `if (loading || !content) return …`). **The defect was
in the guard itself.**

**FINDING A — five screens rendered an EMPTY PAGE and said nothing about why.**
Census of all 48 `useContent` consumers, reading what each early return actually
renders: 20 say both states, **5 say neither.** `BodyDescScreen`,
`ClothesScreen`, `CountriesScreen`, `ProfessionsScreen` and `WeatherScreen` each
returned `<WRAP><BACK_BTN goBack={goBack} /></WRAP>` — a back arrow on a blank
page — from BOTH their `if (error)` and their `if (loading || !content)` branch.
The two returns were **byte-identical**, so "still loading" and "the fetch
failed" were indistinguishable, and neither told the learner anything.
`WeatherScreen` did not even destructure `error`: a failed fetch leaves `content`
null, so that page was blank **for ever**, with nothing to retry and nothing to
read. All five are routed in `AppRouter` (`weather`, `clothes`, `countries`,
`professions`, `bodydesc`), reachable from the Learn Path and from search, and
the payload lands ~9.2 s after first paint in the CI-equivalent E2E harness — so
an early tap meets this window every time. This is the owner's own standing
sentence ("if I ever click on anything and it doesn't work it's over") in its
purest form: the tap works, the screen opens, and there is nothing on it.

Fixed with `src/components/shared/ContentStateNotice.tsx` — two states, two
sentences, the `LaunchFailureNotice`/`poolLaunchBlock` rule applied one layer up
— plus `WeatherScreen`'s missing `error` branch. A shared component rather than
five more inline copies, because a SIXTH silent screen is what this census keeps
finding.

**FINDING B — the dwell timer paid for a page that showed nothing.** This is the
INTERACTIONS-BETWEEN-FEATURES seam the queue says is the live one, and neither
feature is wrong alone. `launchPathItem` arms a 20-second timer when a LEARN_PATH
item's `go` is in `BLACK_HOLE_SCREENS` and on fire credits `lc`/`gc` plus
DWELL_XP. It knows the screen id and **nothing about whether that screen had
anything to display.** Derived the split — for each of the 13 black-hole keys,
resolve the component through the REAL router and walk the import graph
(`components/` + `hooks/` only, the `sessionScreensFeedLedger` rule) for
`useContent`/`getContent`/`peekContent`: **7 of 13 are content-dependent**
(`idioms`, `brzalice`, `history`, `recipes`, `dialects`, `proverbs`,
`bureaucratic`), 6 render from static imports. So a learner who tapped a path
item during the content window — or after a failed fetch, where content never
arrives at all — sat on a placeholder for twenty seconds and was credited a
completed informational lesson and 5 XP for reading nothing. **NEVER-DO 14.**

**THE RE-ARM IS THE LOAD-BEARING HALF, and the obvious fix would have been a
worse defect than the one it fixes.** `vs` is written on TAP, so `wasFirstVisit`
is false on every later visit — a bare `return` in the gate would have withheld
the counter **PERMANENTLY** from the ordinary learner who tapped in during the
content window, which is far commoner than a failed fetch. The timer re-arms a
full dwell instead, capped at `DWELL_CONTENT_WAITS` (3), so the credit is paid
for twenty seconds on a page that could actually be read, whenever the payload
turns up. Past the cap the page has been unreadable for over a minute and nothing
is owed. **The `vs` VISIT marker is deliberately untouched** — CLAUDE.md records
what conflating that marker with a completion marker cost on AlphabetScreen, and
the path node must not stick incomplete.

**The 800-line cap was NOT raised.** The gate took `useScreenLauncher.ts` to 806
countable lines, so the dwell block became `src/lib/dwellCredit.ts` — the same
move that produced `blackHoleScreens.ts` out of this very hook. No override was
added and the mechanism is byte-for-byte the same; the four mutations were re-run
against the extracted module and each still fails.

**Mutation-verified, ten in total, every one confirmed landed.**
Dwell gate (`dwellContentGate.test.tsx`, 10 tests): the gate removed — the
original bug — fails 4; a bare `return` instead of the re-arm fails 1; the cap
removed fails 1; the re-armed timer not handed to `onArm`, so navigating away
cannot cancel it, fails 1; the set widened to a STATIC screen fails 3; and the
DANGEROUS direction — `dialects` dropped from the set, i.e. back to crediting a
blank page — fails 6.
Content state (`contentStateSpeaks.test.tsx`, 24 tests): Weather reverted to the
original blank fails 4; Weather's `error` branch removed fails 3; both sentences
made identical fails 6.
Derived XP pin (`xpRebalance.test.ts`): a hardcoded 5 in place of `DWELL_XP`
fails 1; the award duplicated so two files hold it fails 1; the award deleted
entirely fails 1.

**THE EXTRACTION BROKE A SOURCE PIN IN ANOTHER FILE, which is the reusable
lesson.** `xpRebalance.test.ts` asserted `readFileSync('src/hooks/
useScreenLauncher.ts')` contains the `award(DWELL_XP, …)` call — correct for
thirteen months and stale the moment the block moved, with nothing in the
extraction to hint at it. **A file path inside an assertion decays exactly like a
hand-maintained list**, and the whole-suite run is what found it (629 files, this
one failure). It is now derived over the set of files that could legitimately
hold the call, asserting exactly ONE does, so the next extraction changes a list
of two rather than going red.

**And a self-inflicted one worth recording:** I ran `git checkout
src/hooks/useScreenLauncher.ts` to undo a mutation in that file and reverted the
whole sweep's change to it — the mutation-restore had been a `cp` from a backup
everywhere else. The next `restored:` line read "1 failed" and for a moment
looked like a real regression. **Never use `git checkout` to undo a mutation in a
file the working tree has uncommitted work in**; the backup-and-copy pattern the
rest of this hunt uses exists for exactly that reason.

**TWO HARNESS DEFECTS IN MY OWN GUARDS, both found by mutation and both worth
keeping.** (1) The rendering tests' `setStats` was a bare `vi.fn()` that recorded
updaters without APPLYING them — and `wasFirstVisit` is assigned inside the
launcher's `vs` updater and read twenty seconds later, so it stayed false and
every credit path bailed before reaching the gate under test. The suite failed on
the STATIC screen, where no gate should apply at all, which is what exposed it. A
recording-only `setStats` mock silently disables any launcher behaviour that
depends on a state update having happened. (2) The census's "does this branch say
anything" predicate reported six screens rendering `<LoadingState />`, a local
component whose entire body is the word "Loading…", so it followed one
delegation hop — **and the first version of that hop was decorative**: it read a
fixed 800 characters from the declaration, ran past the end of the function into
a sibling's `textAlign: 'center'`, and a gutted `LoadingState` passed clean. That
is verbatim the fixed-window harness defect `registryMatchesScreen` records.
Fixed by bounding the body to its own braces AND stripping styling before testing
for words — and `deStyle` is proved load-bearing rather than assumed: with it,
the gutted `LoadingState` fails 1 test; **without it, the identical mutation
passes clean.**

**E2E audit:** grepped `e2e/` for all five screen names, for every black-hole
key, and for any 20-second wait. The only match is `heavy-user-180day.spec.js`,
which is in `testIgnore` and whose hits are vocabulary category names, not screen
strings. No spec dwells on a black-hole screen, so nothing E2E depends on the
dwell credit; `route-render-sweep` renders all five and the notice is a
`role="status"` div (axe-clean by construction, and its focus pass is untouched).
`dwell-award-callsite.test.tsx` DID go red and that is the guard working: its
subject is award ATTRIBUTION on `dialects`, which presumes a readable page, so it
now mocks the payload as present and asserts that premise explicitly, the way its
existing `BLACK_HOLE_SCREENS[DWELT]` premise check already does.

**WHAT THIS SWEEP CANNOT SEE, stated.** (1) A screen that renders content-derived
data with NO early return and no inline notice — the `NO GUARD` rows of the
census (`GradTab`, `HomeTab`, `LearnTab`, `LearningCenter`, `HeroSection`,
`SpeedChallenge`, `McResult`, `ReviewScreen`, `TypingScreen`, `WordSprint`,
`LearnPath`, `SettingsTab`, `GoalFocusSection`, `AdvancedVocabScreen`,
`VocabSceneComponents`). Sweeps 97 and 99 fixed six of those by hand; the rest
were read and render nothing false, but nothing MECHANICAL covers them, because
"renders a claim" has no source signature. (2) The dwell gate asks whether the
PAYLOAD is present, not whether the screen's own KEY within it is — a payload
that arrives missing `DIALECTS` would still credit. That is the `scene.qs` class
and `contentShapeSweep` is what covers it. (3) A content-dependent screen reached
by something other than `launchPathItem` earns no dwell credit at all, so the
gate has nothing to say about it.

### Sweep 101 — "empty" and "not arrived yet" are the same expression (2026-09-24, 4 REAL DEFECTS + 2 RESIDUES, FIXED)

**THE SHAPE SWEEP 100 LEFT OPEN**, verbatim from its own "what this cannot see":
_a screen that renders content-derived data with NO early return on the content
state._ Sweep 97's note named the same gap from the other side: _a surface that
builds its own list from `content` by hand rather than importing a builder._

**THE DERIVATION TOOK FOUR SHAPES TO FINISH, and each was added only because it
was caught hiding a member the previous shape could not see.** That sequence is
the finding, not an anecdote: at every stage the tool reported a small clean
number and looked done.

| shape                                                            | found | what it had been hiding                                                                                                                                                       |
| ---------------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. `X.length === 0 && <…>`                                       | 1     | —                                                                                                                                                                             |
| 2. `if (X.length === 0) return (<…>)`                            | 6     | **ReviewScreen's "All caught up!"**, the worst instance in the class, which I had already found BY HAND                                                                       |
| 3. `const flag = X.length === 0` → `flag ?`                      | 6     | `LearnPath`'s `pathMissing` — sweep 99's own fix, i.e. a KNOWN member                                                                                                         |
| 4. `if (X.length < 4) setFlag(true)` **plus assignment closure** | 7     | **SpeedChallenge's**, whose pool lives in a REF (`pool.current = buildQuestionPool(V)`) — an assignment, not a declaration, so the entire screen was invisible to the closure |

A separate derivation for SILENT BAILS (`if (<derived>.length < n) return;` with
no state set) found **WordSprint's Start button**.

**FOUR REAL DEFECTS. Every one is a sentence about the learner's own deck, said
before the app had seen it — and said for ever after a failed fetch, because
`content` then stays null.**

1. **`ReviewScreen` — a green tick and "All caught up! No reviews due right
   now."** on the app's highest-volume daily action. `dueWords` comes from
   `vocabPool(content, level)`, and **Home's due-count pill counts against the
   SAME derivation** — which is exactly the pill-vs-screen disagreement the
   2026-09-04 vocabulary-deck work exists to make impossible "by construction".
   The pre-content window was the one place it could still happen, and there the
   learner was congratulated for finishing work the app had not yet loaded.
2. **`SpeedChallenge` — "Complete a few vocabulary lessons first to unlock Speed
   Challenge!"**, on HOME, the first screen. That is verbatim the lie
   `LearningCenter.openScreen`'s own comment records: false advice about a deck
   the app has not yet seen, told to a learner who may have hundreds of words.
3. **`AdvancedVocabScreen` — "No words match your search."** A search that ran
   against nothing found nothing. `V_B2`/`V_C1`/`V_C2` arrive with the payload.
4. **`WordSprint` — "Start Sprint ⚡" did NOTHING** (`if (pool.length < 4)
return;`). This is sweep 97's class in the shape sweep 97 said it could not
   see, because WordSprint builds its own pool instead of importing a builder.

**TWO RESIDUES ON SCREENS THAT WERE ALREADY RIGHT.** `TypingScreen` and
`ShadowingScreen` already split the two facts — `content ? 'No words available
right now…' : 'Loading…'` — and are the convention this fix follows (TypingScreen's
comment even records the incident that produced it). Their one remaining lie is
that `'Loading…'` is shown FOR EVER after a failed fetch, since content stays
null. One line each, same classifier.

**NO NEW PRIMITIVE WAS BUILT.** `poolLaunchBlock` (sweep 97) already answers
exactly this question — loading / unavailable / empty, content decided BEFORE
emptiness — so all six screens now route through it and each supplies its own
honest three sentences. One classifier, six copies that fit their own surface.

**Three CHECKED NON-DEFECTS, each exempted with a reason and checked in both
staleness directions:** `CultureDeepDiveScreen` guards `loading || !content`
ABOVE its `!essays.length` branch, so that branch can only mean a stale cached
payload missing the key — which is what its message says; `HeroSection`'s
fallback is the neutral LABEL "Learning" rather than a claim, so before the
payload lands the hero is merely less specific; `LearnPath` was fixed in sweep 99
with its own split, and its claim is about the PATH, so the pool copy would be
wrong there. One recorded FALSE POSITIVE by name: `ReviewScreen`'s
`if (!done || questions.length === 0) return;` is the Knight-reaction effect, a
correct guard, not a tap.

**Mutation-verified, eight, each confirmed landed** (`emptyIsNotAnAnswer.test.tsx`,
7 tests). The four defects reverted: ReviewScreen fails 4, SpeedChallenge 2,
WordSprint 2, AdvancedVocab 2. The derivation itself: the ASSIGNMENT closure
dropped (SpeedChallenge invisible again) fails 1; the early-RETURN shape dropped
(ReviewScreen invisible again) fails 2; an exemption made stale fails 1; the
derivation returning `[]` fails 2 — the vacuity guard, because a ratchet over an
empty list asserts nothing.

**E2E audit:** grepped `e2e/` for every user-visible string touched ("All caught
up", "No reviews due", "Complete a few vocabulary", "No words match", "Start
Sprint", "No words available", "No shadowing lines") — **zero matches**. The only
specs naming these screens are `daily-challenge-sync.spec.js`, which asserts the
"Speed Challenge" HEADING (untouched), and `full-user-audit` / `heavy-user-*`,
which are in `testIgnore`. All seven existing unit suites for the six screens pass
unchanged (113 tests).

**WHAT THIS SWEEP CANNOT SEE, stated.** (1) A claim derived from content that is
NOT an emptiness test — a count, a percentage, a level, a date rendered from a
payload that has not arrived. The derivation is keyed on `.length`/`Object.keys`
and nothing else; sweep 99's `0 / 0 milestones` was that shape and was found by
hand. (2) A surface whose content-derived collection is non-empty but WRONG (a
stale cached payload), which is the `scene.qs` class and belongs to
`contentShapeSweep`. (3) The exemption REASONS are checked for existence and for
both staleness directions, but not for truth — the `idioms` lesson: a plausible
reason recorded beside an exemption is how a dead end survives a staleness test.

### Sweep 102 — a COUNT is a claim too (2026-09-25, 2 REAL DEFECTS, FIXED)

**THE SHAPE SWEEP 101 LEFT OPEN**, verbatim: _a claim derived from content that
is not an emptiness test — a count, a percentage, a level or a date rendered from
a payload that has not arrived._ Sweep 99's `0 / 0 milestones` was that shape and
was found by hand; this is the mechanism for it.

**TWO REAL DEFECTS**, both invisible to sweep 101's derivation because **nothing
compares anything to zero — the count simply IS zero**:

1. **`AdvancedVocabScreen` rendered "0/0 learned" over a 0% progress bar.**
   `V_B2`/`V_C1`/`V_C2` arrive with the payload, so `totalInCat` and
   `learnedInCat` are both 0 in the window and for ever after a failed fetch.
   **It sat DIRECTLY ABOVE the word list sweep 101 had just taught to name its own
   state** — one screen, two claims, and the previous sweep fixed one of them.
2. **`ScenePicker` (VocabSceneComponents) rendered "0 / 0 words discovered"** in
   its Total Progress hero — sweep 99's line in a second place.

Both now ask `poolLaunchBlock` and render `—` / a named state instead.

**ONE CHECKED NON-DEFECT, and it is the interesting one.** `LearnTab` computes
`overallPct` 0 and `stagePct` **100** on an empty path — two numbers that
contradict each other in one sentence ("0% complete overall · Stage 100% done").
It never renders: the whole card sits inside `{nextItem && (…)}`, and `nextItem`
is only ever assigned while walking the path, so an absent payload renders
nothing. That is guarded BY CONSTRUCTION, and the derivation was taught to see it
(`insideContentGate`) rather than given an exemption — a notice demanded for a
line no learner can reach is how a guard earns the false-positive reputation that
gets it ignored. **Mutation-verified in the dangerous direction**: removing that
`nextItem` gate fails the guard.

**ONE FALSE POSITIVE, recorded by name.** `LearnPath`'s `li` is a LOOP INDEX
(`for (let li = 0; …)`, `.map((lv, li) =>`) used as a React key and a subscript.
The lazy `;\n` in the declaration matcher let a `for`-HEADER swallow the rest of
the statement and pick up the array it iterates, so an index read as a
content-derived number.

**MY OWN GUARD WAS DECORATIVE TWICE, AND MUTATION IS THE ONLY REASON NEITHER
SHIPPED. Both are the same error at different scales, and I had written the
lesson into the fix's own comment before making it.**

- **Version 1 asked whether the FILE consults the classifier.** AdvancedVocab
  consults it for the word list (sweep 101), so reverting the counter to "0/0
  learned" over a 0% bar left the suite **fully green**. "Fixing one claim on a
  screen does not fix the others" applies to the guard as much as to the screen:
  a file-level predicate cannot see a second claim in the same file.
- **Version 2 was per-render and STILL green**, and the cause is the
  fixed-window defect `registryMatchesScreen` records, in a new form: walking
  four brace levels outward from a JSX expression **reaches the COMPONENT's own
  body braces**, which mention every flag declared anywhere in it — so the
  outward walk silently degenerated back into the per-file check it was written
  to replace. It now stops at any span containing a `return (`, which is a
  function body rather than a JSX expression container.
  **I reasoned about the predicate twice before measuring it, and was wrong both
  times.** What settled it was dumping the derivation's real output under the
  mutation — the file reported `guarded: true` with no matching `if`, which is
  what pointed at the walk. Probe the predicate; do not re-read it.

**Mutation-verified, six, each confirmed landed:** AdvancedVocab fully reverted
fails 2; ScenePicker reverted fails 2; the content-value gate detector removed
(LearnTab re-reported) fails 1; the `for`-header exclusion removed (loop index
re-reported) fails 1; **`LearnTab`'s `nextItem` gate removed — the dangerous
direction** — fails 1; the per-render predicate reverted to per-file fails 1 with
the counter reverted.

**ONE MUTATION SURVIVED AND IS REPORTED AS A RESULT, NOT PATCHED AROUND.**
Reverting ONLY the progress bar (`width: countsKnown ? … : '0%'` → `${pct}%`)
leaves the suite green. `pct` occurs in exactly two places — its own declaration
and that CSS width — so the TEXTUAL claim is fully guarded and the bar is
decoration following a label that now reads `—`. An empty bar beside `—` states
no number. Widening the walk to reach a style object's grandparent would buy that
one case at the cost of re-opening the component-body over-reach above, which is
the trade this sweep just measured.

**WHAT THIS SWEEP CANNOT SEE, stated.** (1) A non-numeric claim that is not an
emptiness test either — a LEVEL, a DATE, a name rendered from an absent payload.
The matcher keys on `.length` / `reduce` / `Math.round` / `.size`, so a string
claim derived from content is outside it. (2) A number whose gate is correct but
whose VALUE is wrong because the payload is stale — the `scene.qs` class. (3) The
surviving-mutation case above: a claim expressed only as a style.

### Sweep 103 — the non-numeric claim (2026-09-25, NO DEFECTS; one real hole found IN THE PREVIOUS TWO SWEEPS' OWN HELPER)

**THE SHAPE SWEEP 102 LEFT OPEN**, verbatim: _a non-numeric claim that is not an
emptiness test either — a LEVEL, a DATE, a name rendered from an absent payload._
Sweep 101 keyed on `.length === 0`, 102 on `.length`/`reduce`/`Math.round`; a
string claim is outside both.

**Derivation**: on every `useContent` consumer with NO whole-screen guard, find
`<content-derived expression> ?? 'literal'` / `|| 'literal'` — a DEFAULTED string,
which is how a screen renders a claim for a value it does not have.

**RESULT: NO DEFECTS.** Two hits, both non-defects: `HeroSection`'s
`rungs[…] || 'Learning'` (already established in sweep 101 — a neutral LABEL, less
specific before the payload but stating nothing false) and
`AdvancedVocabScreen`'s `poolLaunchBlock(…) ?? 'empty'`, which is a
`data-pool-block` test attribute and not learner-facing.

**THE 0 IS ONLY TRUSTWORTHY BECAUSE THE TOOL WAS MADE TO SEE A KNOWN MEMBER, AND
THE FIRST TWO RUNS DID NOT.** Run 1 reported **0 hits**. Run 2, after widening the
left-hand side, reported **1** — and still missed `HeroSection`, the member I
already knew about from sweep 101's exemption list. Two separate causes:

1. **A character-class left side cannot span a subscript.**
   `rungs[Math.min(Math.max(level, 1), rungs.length) - 1] || 'Learning'` — the
   matcher required `[A-Za-z_$][\w$.?[\]]*` immediately before the operator, which
   cannot contain spaces, commas or parens. Fixed by looking BACKWARD from the
   operator for a derived name instead of trying to match the expression.
2. **A MULTI-LINE INITIALIZER SWALLOWS THE NEXT DECLARATION — and this one is in
   the COMMITTED helper, not just the scratch script.** `contentDerived`'s `DECL`
   runs lazily to the first `;\n`, so `const levelNarrative = (() => {` consumes
   the `const rungs = LEVEL_NARRATIVE[…];` inside its own body; `matchAll` then
   resumes PAST it and `rungs` never enters the closure. Any declaration
   following a multi-line one was invisible to the closure that sweeps **101 and
   102** both depend on. A single-line `DECL_LINE` pass now restarts from the top
   and catches whatever the lazy one ate.

**WHAT THAT HOLE COST, MEASURED RATHER THAN ASSUMED: nothing, for sweeps 101 and 102.** With `DECL_LINE` added, `emptyIsNotAnAnswer.test.tsx` reports 13/13
unchanged, and removing it again also reports 13/13 — so the hole was real and
LATENT for those two derivations' subjects. Say that plainly rather than
presenting a widened closure as a save. It is load-bearing for THIS sweep:
without `DECL_LINE` the string derivation reports 1 hit instead of 2 and cannot
see `HeroSection` at all.

**This is the third sweep running whose derivation reported a small clean number
and was wrong**, and the cause is the same family each time: an over-reaching or
under-reaching regex around a JS construct the matcher was not written for
(a for-header, an arrow-function tag, a ref assignment, a component body, a
multi-line initializer). **The check that catches it every time is the same one:
name a member you already know about and confirm the tool reports it.**

**WHAT THIS SWEEP CANNOT SEE, stated.** A content-derived string rendered with NO
default — `{content?.FOO?.title}` renders empty, which is a gap rather than a
false claim, and the surrounding copy is what would make it read wrong. That
needs a rendering census, not a source match, and is not attempted here.

### Sweep 103 addendum — THE RED CODEQL CHECK WAS MY OWN GUARDS, NOT THE STORAGE HEURISTIC (2026-09-25, 15 REAL DEFECTS IN THIS BRANCH'S OWN TEST CODE, FIXED)

**A CORRECTION TO MY OWN DIAGNOSIS, AND THE EVIDENCE THAT OVERTURNED IT.** PR #746
showed a red `CodeQL` check: 2 high alerts "in code changed by this pull request".
I could not read their identity (no code-scanning-alerts tool in this session,
`get_check_run` returns an empty `output.text`, the analysis log names only the
queries it ran), so I reasoned from the repo's history — **eight** standing
dismissals of `js/clear-text-storage-of-sensitive-data`, plus CLAUDE.md's
"A DISMISSAL IS KEYED TO A LOCATION, SO MOVING THE LINE LOSES IT" — and named
`nh_level_quiz` / `nh_checkpoint_level` as the likely subjects, labelling that a
hypothesis. **It was wrong.**

**What settled it was a number, not more reading.** Pushing sweep 102 took the
count **2 → 7**. Sweep 102 touched two screens and, heavily, `emptyClaimSurfaces.ts`
— where it added five more `new RegExp` built from interpolated values. Five new
alerts, five new interpolated constructions, one commit. That is `js/regex-injection`
(high), and it is **my own code**, which makes it mine to fix outright rather than
stand down on.

**IT IS A CORRECTNESS BUG BEFORE IT IS A SCANNER FINDING, and that is why the fix
is a behaviour change and not a suppression.** All fifteen sites across
`emptyClaimSurfaces.ts`, `dwellContentGate.test.tsx` and `contentStateSpeaks.test.tsx`
escaped **only `$`**. The derivations feed themselves names read out of SOURCE, and
`[A-Za-z_$][\w$.]*` admits a dot — so `r.timeline` built `\br.timeline\b`, which
matches `rXtimeline`. **A silent mis-match, inside the tools written to find silent
mis-matches.** A name containing `(` or `[` would have THROWN at match time instead.
`escapeRegExp` (exported from the helper) now escapes the full metacharacter class
at every one of the fifteen.

**Asserted directly, not left to the scanner going green** — which would only ever
be evidence about the scanner. Three new tests: a dotted name must not match an
arbitrary character in its place; a name carrying regex syntax must build a valid
pattern and match itself; and **the old `$`-only escaping is asserted to fail both**,
so the fix cannot be quietly undone. Mutation-verified: reverting `escapeRegExp` to
`$`-only fails 2. All 47 tests across the three guard files pass with the escaping
in place, so no derivation's result changed — the patterns were right for the names
this corpus happens to hold, and wrong for the names it is allowed to hold.

**THE PROCESS LESSON, which is the one CLAUDE.md already records and I repeated.**
"Build the diagnostic first and let the cause name itself." I had _considered_
regex construction in my own new code early, set it aside for the historically
likelier storage heuristic, and spent the effort defending that instead. The
alert-count delta across one commit was available the whole time and is a
diagnostic; the repo's dismissal history is a prior, and I treated it as evidence.
**A plausible prior is not a measurement.** The PR comment recording the wrong
hypothesis stands, with the correction posted after it, because deleting it would
hide exactly this.

**THE ALERTS THEN ARRIVED AS REVIEW COMMENTS AND CORRECTED THE RULE NAME.**
`github-advanced-security[bot]` posted all seven inline, so the subjects are read
rather than inferred, and two things above need fixing:

- **The rule is `Incomplete string escaping or encoding`
  (`js/incomplete-sanitization`), NOT `js/regex-injection`** — its finding is
  literally _"This does not escape backslash characters in the input."_ The
  substance was right (my own helper, escaping too little); the rule name was a
  guess dressed as a fact. The distinction is real: regex-injection is about a
  pattern built from untrusted input, incomplete-sanitization is about an escape
  function that misses cases — and a `$`-only `.replace` is the second.
- **The open question is ANSWERED, and the answer is me.** All seven sit in
  `src/tests/helpers/emptyClaimSurfaces.ts` — lines **50 and 72** (the original 2
  on `5fbd3823`) plus 149, 182, 201 x2 and 226 (the five sweep 102 added). **None
  is the clear-text-storage class**, so nothing from this branch belongs in
  CLAUDE.md's standing-dismissal list, and `nh_level_quiz` /
  `nh_checkpoint_level` were never involved.

`escapeRegExp`'s character class includes the backslash, so the case the rule
names is covered — verified by running it (`escapeRegExp('a\\b')` matches `a\b`
and not `aXb`), not inferred from the class looking right.

**7 → 1 → 0, AND THE LAST ONE WAS MY OWN PROOF-OF-BUG.** The escaping fix cleared
six. The survivor (alert 89, `emptyIsNotAnAnswer.test.tsx`) was the deliberately
weak `$`-only function the new tests used to show the fix is load-bearing — and
**CodeQL was right about it**: the rule is "an escape that misses cases", and "it
is wrong on purpose, it is a test" is not a property the rule can see. Rather than
dismiss it, the assertion was restated as the LITERAL patterns the old escaping
produced (`new RegExp('\\br.timeline\\b')` matching `rXtimeline`; an
unterminated group throwing), plus `escapeRegExp(x) !== x` on both — which names
the regex fact directly instead of via a copy of the bug. **Strictly stronger:** the
`$`-only mutation now fails **3** tests where it failed 2, and a NO-OP
`escapeRegExp` fails 3 as well, which the old pairing would not have caught.
`no-invalid-regexp` then failed the lint on the deliberately broken literal, so it
is bound to a const — the rule only evaluates direct literals. **A guard that has
to write the bug in order to prove the fix can usually assert the consequence
instead.**

**CONFIRMED GREEN on `3908df47`: `CodeQL` success, "No new alerts in code changed
by this pull request." 7 → 1 → 0.** Read rather than inferred — there was no
failure event for `f48184c5`, and **absence of a failure event is not a pass**
(its run was superseded when the docs commit landed on top of it, so the number
came from the next head). That is this file's own rule about a missing mechanism
and a passing mechanism looking identical from outside, met while waiting on the
very check it applies to.

**THE REUSABLE PART: the alert identity was available all along, on the PR, as
inline review comments.** I read the check-run summary, found no `output.text`,
concluded the identity was unreadable from this session, and reasoned from priors
for two rounds — while the bot had already posted each finding with its file and
line. **"I cannot read it with the tools I reached for" is not "it is
unreadable."** Check a PR's review comments before deciding a CI failure is
opaque.

### Sweep 104 — the undefaulted string render: ATTEMPTED AND PARKED, with the reason (2026-09-25, NO DEFECTS FOUND; census too noisy to be evidence)

**The shape sweep 103 left**: a content-derived STRING rendered with NO default —
`{content?.FOO?.title}` renders empty, a gap rather than a false claim, and the
SURROUNDING COPY is what would make it read wrong.

**Run 1 reported 0**, looking for `{content?.X.y}` with no `??`. Not believable,
and the reason is a real property of this codebase rather than a matcher bug:
**the repo defaults AT THE BINDING** (`const X = content?.X ?? {}` at the top of
the component, the convention in every one of the 48 consumers), so a direct
optional-chained render off the payload essentially does not occur. The
undefaulted render is one level DOWN — the object exists and is empty, and the
PROPERTY is undefined.

**Run 2, widened to that shape, produced 32 candidates and they are dominated by
false positives.** Checked by hand, and recorded here so nobody re-chases them:

- `SettingsTab`'s `V={V}` and `contentLoading={contentLoading}` are JSX **prop
  passes**. A brace matcher cannot tell `prop={V}` from `{V}` in a text position.
- `ReviewScreen`'s `q.word[0]` is inside a `logError(…)` CALL, not a render.
- `McResult`'s reported `{content}` does not even grep — a phantom from the
  matcher spanning a longer expression.
- Everything else real (`ReviewScreen`'s `q.correct`, `TypingScreen`'s `tyW[1]`,
  `WordSprint`'s `q.prompt`) sits inside a PHASE or LENGTH gate and cannot render
  before content: the quiz body, the playing phase, the post-pool branch.

**PARKED RATHER THAN PUSHED FURTHER, and the reason is stated so the next person
does not redo the cheap half.** To be evidence this census needs (a) the
gate-awareness sweep 102 built (`insideContentGate`) extended to phase flags and
length guards, and (b) a reading of the copy AROUND each survivor — because an
empty string in a label is not a false claim, and only the sentence it sits in
decides whether the gap reads wrong. **(b) is a reading job, not a matching job**,
which is what sweep 103 already predicted about this class. A noisy derivation
whose output has to be hand-filtered is not a ratchet, and shipping one as though
it were is the decorative-guard failure with extra steps.

**No guard was added**, deliberately: a ratchet over a list that is mostly false
positives trains everyone to ignore it — the 123-false-positive lesson. The class
stays OPEN in the queue below with this measurement attached.

### Sweep 105 — the once-per-day latch vs the content window (2026-09-25, NO DEFECTS)

**The interaction**: `buildSessionActivities` runs from a synchronous read at
HomeTab mount, the plan is persisted to `nh_daily_session`, and it is invalidated
ONLY by a date or CEFR change. So a plan committed during the pre-content window
is the plan for the WHOLE DAY. `useTeachingSlotRetry` exists because exactly that
happened to P0 (the lesson slot) — measured in a browser, plan committed at 550 ms,
curriculum request not issued until 6474 ms. **The question this sweep asks: does
the same thing happen to any OTHER slot, for the VOCABULARY payload, which that
retry deliberately does not watch?** (Its header records that its first version
listened to `poolWords` and never fired, because `/api/content/core` and
`/api/content/curriculum` are two separate fetches.)

**MEASURED with the real builder, 40 trials per level, with and without
`poolWords`:** identical activity count at every level (A1 4, A2–C2 5), **zero
variance**, and `srsreview` present **40/40 both ways**. **No slot vanishes when
the vocabulary payload is absent.** Three reasons, each verified in source rather
than assumed:

1. **P1 (SRS) degrades to the UNFILTERED count.** `poolWords && poolWords.size > 0
? getServableReviewCount(poolWords) : getDueReviews().length` — documented as a
   deliberate fallback, so the slot still fires.
2. **P0 (the lesson) depends on the SPINE, not the vocabulary**, and has its own
   second chance in `useTeachingSlotRetry`.
3. **Every other slot draws from STATIC pools** (`sessionPools`, `croatiaPool`) —
   module imports, not payload reads.

**THE FIRST PROBE COULD NOT HAVE ANSWERED THE QUESTION, and that is the part worth
keeping.** Run 1 compared the two plans' activity IDS at each level and they
differed everywhere — which looks exactly like content-dependence and is nothing
of the kind: the builder shuffles and tiebreaks, so two calls draw differently.
**A single-trial comparison of a randomized builder cannot distinguish a real
difference from a draw.** Only the 40-trial structural comparison (length, slot
presence) is evidence. This is the stochastic-assertion lesson arriving in a
measurement rather than in a test.

**And the probe had a defect of its own**: it aggregated `x.kind`, a field
`SessionActivity` does not have (the field is `category`), so it printed `?:4.00`
for every level — a placeholder that reads like a result. The length and
`srsreview` figures above do not depend on it and stand; the per-category line
from run 2 should be disregarded. **A probe that reads a non-existent field
reports a plausible number instead of an error**, which is the `scene.qs` class
inside a throwaway script.

**WHAT REMAINS TRUE AND IS COVERED ELSEWHERE:** P1's unfiltered fallback means the
plan can PROMISE a review that is not servable. That is the pill-vs-screen class,
and sweep 101 closed the screen end of it — `ReviewScreen` now names the loading
and unavailable states instead of claiming "All caught up!". The plan over-offering
and the screen lying are different defects, and only the second was one.

**WHAT THIS SWEEP CANNOT SEE:** a slot whose CONTENT (not presence) is degraded by
an absent payload — an activity that appears in the plan and then opens on less
than it would have. The structural comparison is blind to that by construction,
and the screen-side sweeps (100–102) are what cover it.

### Sweep 106 — an absent payload must not CREDIT anything (2026-09-25, NO DEFECTS; one unpinned ORDERING now pinned)

Sweeps 100–102 covered false CLAIMS. **A write is worse than a claim.** The shape:
a screen whose "am I past the last item" test compares an index against a
CONTENT-DERIVED length — `tyI >= tyPool.length` — satisfies it at **index 0** when
the pool is empty. So the terminal branch IS the completion branch, and
`tyS >= tyPool.length * 0.8 ? '🏆' : '📚'` sitting beside it reads as a **perfect
score**, with `completeExercise` a few lines below.

**Derived**: every `useContent` consumer that also calls a crediting write
(`award`, `completeExercise`, `markQuest`, `recordExerciseOutcome`,
`recordMasteryEvent`, `markLessonComplete`) and compares an index to a
content-derived `.length`/`.size`. **Six comparisons across four screens.**

**NO DEFECTS: every one is unreachable, because the emptiness guard comes FIRST.**
`TypingScreen`'s `if (!tyPool.length) return` is at line 153 and the terminal test
at 171; `ReviewScreen` and `ShadowingScreen` guard above theirs;
`AdvancedVocabScreen`'s is the empty-state render, not a terminal test.

**BUT THE ORDERING WAS THE WHOLE SAFETY PROPERTY AND NOTHING PINNED IT.** Move
`TypingScreen`'s guard below its terminal test and an empty pool renders the
completion branch on the first frame and credits it. `TypingScreen`'s own comment
records the incident that produced the guard — so the guard is deliberate and its
POSITION was incidental. **This codebase has been bitten by exactly that shape
elsewhere**: `stopMic` nulling `onend` before `stop()` (the other order still
fires), the Pages secret installed before `pages deploy` (after, it reaches
nothing), the LINE comment strip before the BLOCK strip (sweep 71 lost 15,102
characters of corpus to the wrong order). An ordering that only comments defend is
one edit from being wrong.

`terminalWriteSurfaces` reports `guardLine` vs `terminalLine` and the test asserts
the guard is strictly above. **Mutation-verified, three, each fails 2:** the guard
moved BELOW the terminal test (the dangerous direction, done by actually relocating
the block in `TypingScreen`, not by editing the assertion); the derivation
returning nothing (vacuity); and the guard scan removed so `guardLine` is always
Infinity.

**WHAT THIS SWEEP CANNOT SEE:** a credit reached through a CALLBACK rather than a
render branch — an effect that fires `award` on a count that happens to be 0
without any index comparison. The derivation keys on the index-vs-length
comparison, which is the shape that makes "index 0 is the end" possible; a
`useEffect` gated on `total === 0` would be outside it and is not attempted here.

### 107. The credit reached through an effect, and one feature with two datasets — 2026-09-25 — TWO DEFECTS

Sweep 106 ended by stating what it could not see, in as many words: _"a credit
reached through a CALLBACK rather than a render branch — an effect that fires
`award` on a count that happens to be 0."_ That is where the first defect was,
and looking exactly where the previous sweep said to look is the whole method.

**THE CENSUS.** 23 `useEffect` bodies across `src/components/**` and
`src/hooks/**` call a credit writer. Twelve of those write only
`signalSessionCompleteIfActive`, which is the ANTI-STRAND signal and is
deliberately correct on an empty or failed path (the audio and lesson-gate
directives both say so) — so they are not subjects. Of the eleven writing real
credit, **two** gate on a comparison against a length- or size-derived total:

| effect                         | gate                           | before                                 |
| ------------------------------ | ------------------------------ | -------------------------------------- |
| `SceneExplorer.tsx:70`         | `discCount >= total`           | **unguarded**                          |
| `AdaptiveReviewScreen.tsx:315` | `sessionIdx >= session.length` | `session.length > 0` — already correct |

**DEFECT 1 — `SceneExplorer` credited a completion nobody earned.**
`total = scene.items.length`, `discCount = discovered.size`, and `0 >= 0` is
true, so a scene carrying no items fired the effect **on mount**: `setShowComplete(true)`,
a confetti burst, "Scene complete!", and `award(15, false, 'vocabulary')` — 15 XP
and a celebration for a learner who had discovered nothing. NEVER-DO 14 reached
through an effect. Fixed with `total > 0 &&`. Latent on today's data (every
authored scene has 12–13 items) and the guard is still the right fix: it costs one
comparison, and nothing anywhere else would have said a word.

**DEFECT 2 — one feature, two datasets, and the picker was the only reader of
one of them.** Found while establishing whether defect 1 was reachable, which
meant asking where `scene` comes from:

- `ScenePicker` (`VocabSceneComponents.tsx`) read **`content.SCENES`** — the
  `/api/content/core` payload.
- `VocabScenes` — its own PARENT, which receives the selected scene back through
  `onSelect`, walks the list again in `handleNextScene`, and builds
  `allDiscovered` — read the **static** `SCENES` from `./VocabSceneData.js`.
- `SceneExplorer` imports that same static module for its localStorage helpers.

The two files are **byte-identical today** (`diff` reports no difference) and
**nothing enforces it.** `src/components/learn/VocabSceneData.js` and
`functions/api/content/_data/vocabScenes.js` are the `wrangler.toml` "Shared with
scheduled worker above" shape again — the fact kept in two places with a comment
instead of a mechanism, which this file records drifting for `CORE_PAYLOAD_KEYS`
(three copies, one stale) and for `dictation`'s pool category (two copies, one
stale for five weeks).

**What drift would have cost, stated precisely:** `handleNextScene` does
`SCENES.findIndex((s) => s.id === currentScene.id)` on the LOCAL array with a
SERVER scene's id, so an id present only on the server returns `-1` and
`SCENES[(-1 + 1) % len]` silently serves **local scene 0** instead of the next
one; and `allDiscovered` is keyed from LOCAL ids while the picker indexes it by
SERVER ids, so a server-only scene reads 0 discovered for ever.

**And one cost was already live, not hypothetical.** `content.SCENES` had
**exactly one reader in the entire app** — this picker. So the feature waited on
a network fetch (~9 s in the CI-equivalent harness) for data that is in the
bundle regardless, because `SceneExplorer` imports the same module's localStorage
helpers and therefore the data can never be tree-shaken out; and on a FAILED core
fetch the picker said "Scenes could not be loaded." **permanently**, about bytes
sitting in the bundle two files away. `git log` names the cause: `a482581f`
("batch 4 — learn screens use useContent") moved the picker onto the payload and
left its parent and the explorer on the static import. A half-finished migration
that shrank nothing and gained a failure mode.

**THE FIX IS THE STATIC EXPORT, AND THE OTHER DIRECTION WAS CONSIDERED AND
REJECTED.** Moving `VocabScenes` and `SceneExplorer` ONTO the payload would also
collapse the two sources — and it would make an offline-capable illustrated
vocabulary game network-dependent, for a 252-line (~8 KB) data file, in a PWA.
It also cannot shrink the bundle without first splitting the localStorage helpers
out of the data module, which is a second change. Reading the static export makes
the drift **unrepresentable** rather than merely checked, and is the smaller
change. **The server side is deliberately untouched**: the payload key stays
(`CORE_PAYLOAD_KEYS`, the etag generator, the E2E fixture, `core.test.js` and
`scenesScreen.test.tsx`'s collision guard all read it, and old cached clients
still fetch it).

**IT ALSO SUPERSEDES SWEEP 102 ON THIS SCREEN, WITH THE STRONGER ANSWER.** Sweep
102 taught the picker to say "Loading the scenes…" / "Scenes could not be loaded."
instead of "0 / 0 words discovered". Sweep 107 removes the question: a count that
does not depend on a payload cannot be a claim about an unarrived one. The notice
branch is therefore **deleted, not left in place** — a branch that can no longer
render is the decorative guard this file keeps rediscovering. `VocabSceneComponents`
consequently leaves `numericClaimSurfaces` ENTIRELY, and there is an explicit test
asserting its ABSENCE with the reason, so its departure cannot read as regression.

**THE GUARD: `zeroSatisfiableCredits`** (`src/tests/helpers/emptyClaimSurfaces.ts`)
— the callback twin of sweep 106's `terminalWriteSurfaces`. Deliberately NOT
scoped to `useContent` consumers: a total reaches zero for reasons that have
nothing to do with a payload (an authored collection left empty, a filter that
removed everything, a level with no content at its band), and the question
"does this `>=` also require the total to be positive" must not depend on who
supplies the data. Two subjects, **zero false positives** — which is why a
ratchet is worth having here and was not worth having in sweep 104.

**THREE THINGS FOUND BY MUTATING THE NEW GUARD, and each was a defect in it:**

1. **`src/hooks` was a root the walk cannot read.** I defaulted
   `roots` to `['src/components', 'src/hooks']`; `walk()` yields **`.tsx` only**,
   so the hooks root contributed nothing while reading as coverage. Measured
   rather than assumed — a throwaway probe over `src/hooks/**` in both extensions
   found zero credit-writing effects, so nothing is lost — and the default now
   names only what is actually walked, with the `.ts` gap stated.
2. **The `.size` clause SURVIVED its mutation.** Both real subjects reach the
   derivation through `.length` (`total = scene.items.length`), so restricting the
   totals scan to `.length` changed nothing. By this repo's own standard that made
   it decoration. A Set size is a legitimate total — `discovered.size` IS one — so
   the clause stays and a **positive control** now exercises it: two synthetic
   `.tsx` files in a temp dir, one `.size` total without positivity (must be
   reported) and its guarded twin (must be clean). With the control in place the
   same mutation fails 1.
3. **A LOOSE POSITIVITY MATCHER HID THE ORIGINAL BUG FROM EVERY OTHER
   ASSERTION.** Forcing `positivity` to always return a value AND restoring
   defect 1 left **both** of the tests written to catch it green — only the
   positive control failed. The subject assertion now pins the matcher's OUTPUT
   (`positivity` must contain the literal `total > 0`), not its truthiness, and the
   same mutation fails 2. _Assert what the derivation said, not that it said
   something._

**AND MY OWN COMMENT BROKE THE SOURCE PIN, in the false-FAILURE direction.** The
"no file under `learn/` reads `content.SCENES`" pin failed on the explanatory
comment I had just written saying the picker _used to_ read it. Comments are
stripped now. Every prior instance of this trap in this file ran the other way —
prose SATISFYING a matcher (`speakingCoach.ts`'s header, `LoadingState`'s
docstring). Both directions are the same defect: **a guard that reads prose is
not reading code.**

**Mutation-verified, five, each confirmed landed:**

| mutation                                                          | fails |
| ----------------------------------------------------------------- | ----- |
| `SceneExplorer` credits at `0 >= 0` again (the original defect 1) | 2     |
| the picker reads `content.SCENES` again (the original defect 2)   | 6     |
| `zeroSatisfiableCredits` returns `[]` (vacuity)                   | 2     |
| the totals scan blind to `.size`                                  | 1     |
| positivity always non-empty + defect 1 restored                   | 2     |

**E2E audit:** no spec references this screen at all — greps run for
`Loading the scenes`, `Scenes could not be loaded`, `words discovered`,
`Vocabulary Scenes`, `Scene complete`, `scene-total-progress`, `vocabscenes`,
`Next Scene`, `Total Progress`, and `scene` generally (only `scenario` and
`/api/scene-video` hits). `route-render-sweep.spec.js` walks the route
generically and now renders MORE with no payload, which is strictly safer.
`award` is genuinely passed at `AppRouter.tsx:1557`, so the credit path is live —
the `routerAwardProp` guard covers that and this is not another `alphabet` hole.

**WHAT THIS SWEEP CANNOT SEE:**

- A credit effect in a `.ts` file (`walk` yields `.tsx`). Measured empty today.
- A credit gated on equality with a total that is not syntactically a
  length/size — `if (answered === QUESTIONS_PER_ROUND)` against a constant, where
  zero is not reachable, versus `if (answered === target)` where `target` was
  computed elsewhere. The derivation reads the declaration in the same file only.
- A credit fired from an event handler rather than an effect. The eleven real
  writers were enumerated for effects; handlers are the larger population and are
  not attempted here.
- The remaining two-copies-must-agree pairs. This sweep closed ONE by collapsing
  it; a census of `src/data/**` against `functions/api/content/_data/**` (which
  pairs are pinned byte-identical, which are merely believed to be) is not done.

---

### 108. The twinned data modules — 2026-09-25 — NO LIVE DEFECT, one drift already happened

Sweep 107 closed ONE two-copies-must-agree pair by collapsing it, and listed the
rest as uncensused. This is that census.

**THE SUBJECTS.** `functions/api/content/_data/core.js` composes
`/api/content/core` out of **thirteen** data modules. Eleven have a twin under
`src/` that the app imports statically (`learnPath` and `seasonalCampaigns` do
not, and are pinned as the only two). 34 served export names across the eleven.

| state                                                        | pairs                                                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| byte-identical AND pinned by an existing test                | 4 — `deepdives`, `history`, `language`, `regions`                                                                               |
| byte-identical with **NOTHING** enforcing it                 | 4 — `cultural/events`, `cultural/proverbs`, `scenarios`, `cultural/geography` (a test reads both paths and never compares them) |
| byte-identical, unpinned, and NOT FOUND by a basename census | 1 — `vocabScenes` ↔ `VocabSceneData` (sweep 107's pair; the two halves are not named alike)                                     |
| genuinely divergent                                          | 2 — `vocabulary.js`, `exercises.js`                                                                                             |

**THE DRIFT THAT ALREADY HAPPENED, and why it costs nothing.** `exercises.js` has
the SAME 46 export names on both sides and the client copy is 25 KB larger. Ten
exports differ, the client larger in every case:

| export                  | client                     | server |
| ----------------------- | -------------------------- | ------ |
| `LISTEN`                | 45                         | 21     |
| `UNJUMBLE`, `PREPDRILL` | 40                         | 15     |
| `COMPQUIZ`, `ORDQUIZ`   | 30                         | 15     |
| `PREPS`                 | 25                         | 15     |
| `COMPARE`               | 24                         | 15     |
| `ORDINALS`              | 20                         | 15     |
| `RELPRON`, `VOCATIVE`   | (objects, contents differ) |        |

The divergence starts at a comment reading _"2026-07 depth expansion (+25):
clitic clusters, questions, conditionals"_ — an authoring pass that edited the
client copy and not the server one. **`core.js` imports exactly 2 of those 46
exports** (`IDIOMS`, `BRZALICE`), and neither is among the ten, so the server
copy is a 44-export dead fork and the client copy is the live one for every
divergent bank. **No learner was ever served the stale data.** The cross-check
that settles it: the levelled-bank work measured `LISTEN` at **45 items**, which
is the client figure.

`vocabulary.js`'s divergence is by DESIGN and documented — the server carries
`V_B2`/`V_C1`/`V_C2`, which the client deliberately lacks because the tiers reach
it through the payload and the bundle must not pay for them. The 11 shared
categories agree exactly.

**THE GUARD: `payloadTwinParity.test.ts`, and BYTE-IDENTITY IS THE WRONG
CONTRACT.** Three of the eleven twins legitimately differ, so a byte-identity
rule over the set would forbid the vocabulary design and demand the dead
`exercises.js` fork be maintained. The contract is **the SERVED names only**,
derived from `core.js`'s own import statements rather than listed in the test —
so a module added to the payload is covered without anyone remembering. That
admits every legitimate divergence and catches the one that reaches a learner:
**extending `IDIOMS` or `BRZALICE` in the client copy alone would serve the old
data from the payload in silence**, which is exactly what already happened to the
other ten exports of that same file.

Three things the guard does that a byte-diff would not:

- **The ALIAS is explicit and pinned.** `vocabScenes` ↔ `VocabSceneData` is why
  my first census — keyed on basename — missed sweep 107's own pair while
  reporting ten others. A guard that can only find twins sharing a name cannot
  find the class.
- **`SERVER_ONLY` is checked in BOTH staleness directions**: an exempted name
  must still be served AND must still be absent from the client. A tier appearing
  in the bundle must be compared, not exempted.
- **The two untwinned modules are pinned BY NAME**, because `continue` skips
  them — and that same `continue` is how a RENAMED twin would vanish from the
  guard without a word. `expect(untwinned).toEqual(['learnPath', 'seasonalCampaigns'])`.

**THE VACUITY RISK WAS REAL AND WAS MEASURED, NOT REASONED ABOUT.** The
comparison uses a dynamic template import, vite prints
`vite:dynamic-import-vars` for it, and if those imports had resolved to empty
modules every name would be `undefined === undefined` and all 34 comparisons
would pass while checking nothing. Proven otherwise by mutating a single English
field in a served export and watching the failure NAME it
(`cultural/events.EVENTS`).

**Mutation-verified, five, each confirmed landed:**

| mutation                                                                    | fails |
| --------------------------------------------------------------------------- | ----- |
| one served export differs by one string (proves the comparison runs at all) | 1     |
| `IDIOMS` extended in the client copy only — the LIVE danger                 | 1     |
| the twin derivation returns `[]` (vacuity)                                  | 3     |
| a stale `SERVER_ONLY` entry over an export that IS compared                 | 1     |
| the `vocabScenes` alias removed                                             | 2     |

**A CONSEQUENCE OF SWEEP 107 WORTH STATING PLAINLY:** `content.SCENES` now has
**no production reader**. Its remaining consumers are all infrastructure —
`CORE_PAYLOAD_KEYS`, the etag generator, the E2E fixture, `core.test.js` and
`scenesScreen.test.tsx`'s collision guard. The pair stays in this derivation
anyway: the key is still served, so a future reader inherits the guarantee rather
than having to notice it is absent.

**NOT DONE, DELIBERATELY:** the 44 dead exports in the server `exercises.js`
(~248 KB, of which ~2 are live) are not deleted. It would shrink a served module
by most of its bytes and is exactly the "improve things beyond what was asked"
this repo forbids; and deleting from a module the payload imports risks an import
this census did not find. The new guard removes the danger the dead fork posed
without touching it.

**WHAT THIS SWEEP CANNOT SEE:**

- A twin pair where NEITHER copy is imported by `core.js` — the derivation starts
  from the payload's own imports, so a client/server pair wired through some
  other endpoint is outside it.
- A third copy. `CORE_PAYLOAD_KEYS` drifted as three copies; this compares two.
- Divergence in a SHARED export's key ORDER only, which `JSON.stringify` reports
  as a difference — that is deliberate (these files are hand-edited, so a
  reordered key means one copy was rewritten) but it will read as a defect when
  it is only a diff.
- The dead-export question generally: which of the 11 twins carry exports that
  nothing anywhere reads. Measured for `exercises.js` (44) and `scenarios.js`
  (11) as a side effect; not swept.

---

### 109. The same credit shape in EVENT HANDLERS — 2026-09-25 — NO DEFECTS, and the reason is structural

Sweep 107's largest stated gap: it enumerated `useEffect` bodies and said handlers
were "the larger population and are not attempted here." This is that population.

**THE CENSUS.** Handler-shaped function bodies (an arrow assigned to a name, a
`useCallback`, a `function` declaration) across `src/components/**/*.tsx` that call
a credit writer: **338**. Of those, **152** gate on a comparison against a
length- or size-derived total. That is twelve times the effect population, and it
is dominated by one thing: **roughly a hundred are the hand-written drills**, each
a copy of the same ~400-line component ending in `score === total` /
`score >= total`.

**Narrowing to a total that can actually reach zero at runtime brought 152 → 10.**
The hundred drills read STATIC banks (`src/data/drills/*`, `exercises.js`), so
`total` cannot be zero — and where it is, the screen throws on `questions[idx]!`
long before it credits. The ten are the ones whose total is prop- or
content-derived:

| subject                                              | why it cannot credit at zero                                                                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `McResult` `next >= mistakes.length`                 | the whole review flow is behind `showReviewPrompt = mistakes.length >= 2`                                                                  |
| `BureaucraticScreen` `QuizBlock` (×2)                | `loading \|\| !content` and `error` return ABOVE it; and its handler is a per-QUESTION tap, so with no questions there is nothing to click |
| `SentenceTileScreen` `nextIdx >= questions.length`   | `shuffle(SENTBUILD).slice(0, 10)` — static, 42 items                                                                                       |
| `DialogueSim` `nextIdx >= scenario.turns.length`     | `if (!scenario) return` at line 254                                                                                                        |
| `Flashcards` `finalKnown === activePool.length` (×2) | reached only through a child's `onComplete`, i.e. a quiz that ran                                                                          |
| `GenderDrillScreen` `GENDERDRILL.adjectives.length`  | static, 10 items                                                                                                                           |
| `ReflexiveScreen` `REFLEXIVE.quiz.length`            | static, 10 items                                                                                                                           |
| `LessonProduceStep` `words >= MIN_PRODUCE_WORDS`     | the right-hand side is a positive CONSTANT, so `0 >= MIN` is false                                                                         |

**WHY THERE IS NOTHING HERE, STATED AS A PROPERTY RATHER THAN A COUNT.** _An
effect fires on mount whatever is on screen; a handler needs a control to be
clicked._ The controls that reach these handlers are either per-ITEM (a question
tile, an answer button — unclickable when there are no items) or behind a flow
ENTRY condition that already establishes the count. That asymmetry is the whole
reason sweep 107's defect was in an effect and this sweep found none, and it is
worth knowing before anyone spends a day on the 152.

**NO RATCHET WAS ADDED, DELIBERATELY** — the sweep 104 precedent. My positivity
matcher is scoped to the handler BODY, and in every one of the ten the guard lives
OUTSIDE it (an entry condition, an early return above, the shape of the control).
So a ratchet on this derivation would ship with ten false positives, and a guard
that is mostly false positives trains everyone to ignore it. Recording the
measurement is the deliverable.

**A METHOD NOTE THAT ALMOST COST THE SWEEP.** My first narrowing pass excluded
totals it could not resolve to a declaration in the same file — the bucket labelled
`UNRESOLVED`. That took the census to exactly ONE subject and looked finished.
**`UNRESOLVED` is precisely where prop-passed content lives**: nine of the ten
above, including every content-derived one, were in it. Excluding what a derivation
cannot explain is how it reports a small clean number and misses the class — the
same shape as sweep 102's four-stage derivation and sweep 107's unreadable root.
**Investigate the bucket you cannot resolve; do not filter it out.**

**WHAT THIS SWEEP CANNOT SEE:**

- A credit gated on equality with a total that is not syntactically a
  `.length`/`.size` — `if (answered === target)` where `target` was computed
  elsewhere. Still open, and sweep 107 named it too.
- A handler reached by a control whose own render condition is itself wrong. This
  sweep read each of the ten entry conditions and judged them; it did not derive
  them, so a fifth kind of entry guard would be read by hand again.
- A credit inside a `.then()`, a timer callback or an event listener registered
  outside a named function — the matcher keys on named/assigned function bodies.

---

### 110. The 25 drills whose completion contract nothing exercises — 2026-09-25 — NO DEFECTS in the contracts; the exemptions have ONE root cause

This picks up the only NAMED open item left in the section below: sweep 55 ended
_"the 24 honest skips are 24 drills whose completion contract nothing exercises —
the ratchet guards the exemption, not the coverage."_ (It is 25 now.)

**ALL 25 EXEMPTIONS HAVE A SINGLE ROOT CAUSE, and it is in the harness, not the
screens.** `completeDrill` in `exerciseContract.test.tsx` drives a drill by
clicking, in priority order: a `.tc` menu tile, `case-intro-start`, a button whose
text matches `next|see results|done|finish`, and then — Priority 2 — **a button
whose `className` includes `'ob'`.** Nothing else. Every one of the 25 skip
reasons is a restatement of that one sentence: _"Option buttons use inline styles
(no .ob class)"_, _"no .ob MC buttons"_, _"helper cannot click options"_. The
reasons are honest and they are not 25 separate problems.

**THE CONTRACTS THEMSELVES WERE AUDITED BY READING, AND THEY ARE UNIFORM AND
CORRECT.** Since nothing exercises them, the question is whether the completion
predicate is right. Two idioms exist across the exercise screens for "the last
answer just landed", and both were checked mechanically:

- **Sixteen screens** use `handledRef.current.size >= X.length`
  (CityLocative, ColorAgreement, Comparatives, ConvMatch, EmotionGender,
  FillStory, FutureTense, LogicQuiz, Ordinals, Possessives, Pronouns,
  RelativePronouns, Riddles, SentenceBuilder, Sibilarization, TenseFlip). In
  **all sixteen** the `.add()` precedes the size check and each carries a
  `handledRef.current.has()` re-answer guard — so the Set counts distinct
  questions and the predicate fires exactly once, on the last one.
- **`NegationScreen` alone** uses `answeredCount + 1 >= shuffledQuiz.length`,
  where `answeredCount` is `Object.keys(answers).length` from the PREVIOUS
  render. That form would over-count on a re-answer — answer four of five, then
  re-answer the first, and `4 + 1 >= 5` would credit with a question
  untouched — but `if (answers[qi] !== undefined) return;` at the top of the
  handler makes a re-answer impossible. Correct, and its own comments show the
  score arithmetic (`correctCount + (isCorrect ? 1 : 0)`) was already audited.

So: **no defect in any of the 25 completion contracts.** The gap is coverage, and
the coverage gap is one helper.

**THE FIX IS AVAILABLE WITHOUT TOUCHING A PRODUCTION FILE — and my attempt to
measure it FAILED, which is recorded here rather than dressed up.** Reading
`PronounsScreen`'s markup shows the option buttons carry **no `className` at
all**, while every advance/retry button carries `b bp`. So "a `<button>` with an
empty className that is not disabled" identifies an option button structurally,
and Priority 2.5 could be one line. I built a throwaway experiment to measure how
many of the 25 that unlocks — 15 screens, the extended driver, logging
award/quest/setStats counts — and **it produced no output in eight minutes and had
to be killed.** So the honest state is:

- the root cause is measured and certain;
- the proposed mechanism is plausible and NOT measured;
- and the hang is itself weak evidence that at least one of those 15 screens does
  not terminate under a naive click-the-first-classless-button driver — which is
  what the next attempt should find out FIRST, one screen at a time with a small
  iteration cap, instead of fifteen at once with a 400-iteration loop.

**Do not read the hang as "the approach does not work."** It says the experiment
was badly built: fifteen components, each spinning up to 400 full
`queryAllByRole` sweeps, with vitest buffering console output until the file
finishes — so a single non-terminating screen produces exactly the same silence as
a slow one. That is this file's own lesson about a missing mechanism and a passing
mechanism looking identical from outside, landing on my own harness.

**WHAT THE NEXT PERSON SHOULD DO, concretely:** take ONE screen
(`PronounsScreen` — `handledRef` idiom, no menu phase, no audio, no timer), add
the bare-className priority to a LOCAL copy of the driver with a cap of ~60
iterations and a per-iteration log, and see whether `award` fires. If it does,
walk the other 24 one at a time and un-skip the ones that pass, leaving a reason
on each that genuinely cannot be driven (the microphone one, the timer one, the
tile-assembly one). Each un-skip is one exemption converted into coverage of a
live credit path.

**WHAT THIS SWEEP CANNOT SEE:** whether each contract fires at the right MOMENT
and with the right SCORE under real interaction — that is exactly what the 25
skipped tests would have checked, and reading a predicate is not running it. The
`.add()`-before-check ordering and the `has()` guard are necessary, not
sufficient.

---

### 111. A conduit is not a producer — 2026-09-25 — ONE GUARD DEFECT, FIVE NO-PRODUCER KEYS

Picked by the rule this file's own queue lays down for choosing a question:
_"name two things that must agree, and ask what would happen if they stopped."_
The pair: **every localStorage key a READER depends on must be WRITTEN somewhere,
under the same spelling.** This app is localStorage-authoritative, so a read with
no writer is a feature that silently never activates.

**THE CLASS WAS ALREADY SWEPT, AND I ALMOST RE-CHASED IT.**
`deadKeyReaders.test.tsx` already derives reads and writes across `src/`,
resolves constants through named imports, bounds prefix vacuity, and carries
exactly four `NO_WRITER_BY_DESIGN` exemptions with reasons and both staleness
directions — `nh_debug`, `nh_streak_freezes`, `uSR`, `fbBackupConfirmed`. My
ad-hoc census "found" fourteen orphans; **every one was my own resolver being
weaker than the guard's**, because the app writes through `lsSet`/`_safeSet`
wrappers and I matched only `localStorage.setItem`. `nh_level` — a KNOWN member,
this file records `PlacementTest` writing it — was in my list, which is the
signal that a derivation is unfinished rather than reporting a result.

**THE QUESTION THAT SURVIVED, AND IT IS NOT THE ONE THAT GUARD ASKS.**
`hasWriter` is satisfied by `applyRemoteProgress`. But the sync layer is a
**CONDUIT**: it writes what Firestore held, which is what `progressSnapshot`
read, which is what something else PRODUCED. So a key whose only writer is the
sync layer sits in a closed loop with no source — absent for every learner, for
ever — and `hasWriter` calls it covered.

Measured with the guard's OWN resolution (a temporary probe inside the real test
file, not a parallel census): of the **66 keys `progressSnapshot` uploads, six**
have no writer outside the sync layer.

**FINDING 1 — THE GUARD'S RESOLVER DROPPED A TWO-HOP ALIAS, and asking the
producer question is what exposed it.** `MyWordsScreen` saves the learner's own
vocabulary as `localStorage.setItem(STORAGE_KEY, …)` where
`const STORAGE_KEY = CUSTOM_WORDS_KEY;` — an IDENTIFIER initializer. `LOCAL`
records only string-LITERAL initializers and `IMPORTS` only imported names, so
that name was in neither map: `lookup` returned null, `classify` returned null,
and **the write was dropped entirely.** The orphan test passed anyway, because
`applyRemoteProgress` also writes that key — so the gap was invisible for exactly
as long as some OTHER writer happened to cover it. Fixed with an `ALIAS` map that
`lookup` consults after LOCAL and IMPORTS, resolving `const A = B;` (where B may
itself be imported). Mutation-verified: removing it fails 2.

**FINDING 2 — FIVE SNAPSHOT KEYS HAVE NO PRODUCER.** Each recorded with its
reason and what it costs, because none is repairable without adding a feature or
changing live behaviour on a guess:

| key                                            | what was established                                                                                                                                                                                                                                                                                |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nh_prestige`                                  | a grep of the whole tree finds the sync read/write and **two `ProgressCharts` comments discussing "prestige resets"** — nothing increments it. The feature cannot be earned and the synced field is always 0. Making it earnable is a FEATURE, not a fix                                            |
| `dcDay3`                                       | the daily-challenge answers. `useDaily` reads it as the PRIMARY source in a first-render initializer, under a comment saying it is _"written on every answer click"_ — nothing writes it, so every read falls through to the documented fallback `uP_<uid>.dc`, which the sync auto-save does write |
| `nh_placement_vocab` · `_grammar` · `_culture` | `PlacementTest` writes `nh_placement_done` and `nh_level` ONLY. The three per-skill sub-scores are never produced, and nothing consumes them for a decision either — so the cost is three always-absent snapshot fields and three `_maxNum` calls that can never fire                               |

**`dcDay3` LEAVES A SHARP OPEN QUESTION RATHER THAN A GUESS.** Its fallback,
`loadFromMainDoc`, requires `uS.u` — a session. So the primary path being dead is
free for a signed-in learner and **may cost a signed-out one their
daily-challenge state on reload**. What I established: nothing writes `dcDay3`
outside the sync layer; the fallback needs `uS.u`; `App.tsx` does have a
`GUEST_UID` path writing `uP_guest`. What I did NOT establish: whether a guest's
`uS` carries a `u`, which is what decides it. Recorded unresolved on purpose —
the alternative was a behaviour change to a live screen on an inference.

**A comment asserting a mechanism that does not exist** is the third instance of
that exact shape in this repo: `wrangler.toml`'s "Shared with scheduled worker
above", the three CEFR badges' "all three must stay in sync", and now
`useDaily`'s "written on every answer click".

**Mutation-verified, five, each confirmed landed:**

| mutation                                                               | fails |
| ---------------------------------------------------------------------- | ----- |
| the `ALIAS` resolution removed (the resolver gap restored)             | 2     |
| `producedOutsideSync` always true (vacuity)                            | 2     |
| a stale `NO_PRODUCER` entry over a key that HAS a producer             | 1     |
| `MyWordsScreen` stops saving the learner's words (the real regression) | 2     |
| `SYNC_LAYER` drops `applyRemoteProgress`, so everything looks produced | 2     |

**WHAT THIS SWEEP CANNOT SEE:**

- A producer that writes through a wrapper the `SET` alternation does not name.
  That list is hand-maintained (`lsSet`, `ssSet`, `_safeSet`, `_unionStrArr`,
  `_maxNum`, …) and has the decay shape this file keeps recording; nothing
  derives it.
- A key produced only in a `.jsx`/`.js` file the glob misses, or by a native
  bridge.
- The DIRECTION this sweep did not take: a key with a producer whose VALUE is
  never what a consumer expects. "Something writes it" and "what it writes is
  usable" are different questions, and only the first is now mechanised.
- Whether `NO_PRODUCER`'s reasons are TRUE. The staleness tests check that each
  entry is still uploaded and still unproduced; no test can check that the
  sentence beside it describes reality.

---

---

## NOT YET CHECKED — where the next field report will come from

- [x] ~~**DOES ANY OTHER GUARD'S COMMENT STRIPPER EAT ITS OWN CORPUS?**~~ —
      CLOSED, sweep 72: measured LATENT everywhere (flipping the order in all 72
      files left the suite byte-identical), fixed by ordering + a ratchet. The
      original item read: opened by
      sweep 71's finding C, NOT yet measured. 77 files under `src/`/`scripts/`
      strip block comments with the same `/\/\*[\s\S]*?\*\//g` shape, and
      sweep 71 showed that a `//` line containing `/*` — `/api/*`, a glob like
      `src/**/*.ts`, a path — opens a runaway block comment that runs to the next
      star-slash anywhere in the file, which a regex literal can easily supply.
      The failure is SILENT and in the dangerous direction: the guard's subject
      vanishes and every assertion over it passes. Sweep 71 fixed the one file it
      was working in; the class was deliberately left out of that PR rather than
      widening it. **Measure it the way sweep 71 did — count the constructs that
      survive the strip, per guard, against the same count in the raw file** — do
      not read a length ratio, and do not assume a guard is fine because it is
      green.

Every defect the owner has actually hit is in this list, not the one above.
None of them crash, so no sweep above can see any of them.

- [x] ~~13 AI surfaces still do not name a refusal's cause~~ — CLOSED, sweep 13. 33 of 35 callers classify; the 2 remaining entries in
      KNOWN_UNCLASSIFIED are verified-correct degrades, not debt. The ratchet
      stops new ones and its floors sit at the measured values.
- [x] ~~**The ledger wiring stops at the two SESSION POOLS (sweep 59 scope).**~~
      — CENSUS RUN, sweep 62. The ~30 was 34; the "all of them feed grammar"
      reason was WRONG (17 grammar / 12 vocabulary / 5 speaking); ZERO of them
      sit in a session pool, so sweep 59's guard has no gap on its own subject.
      The 12 vocabulary screens are not unfed at all — they grade through
      `srMark` → `getSRScore` → `recordSrsOutcome`, invisible to any walk that
      refuses to enter `lib/`. No defect; the census instead found two lies
      inside the guard itself (a writer name matching nothing, and the SRS path
      missing), both fixed there. The remaining screens award 2–5 XP per correct
      answer rather than on a completion, so wiring them would still be a
      reshaping job — and there is now no ledger reason to.

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
                          - [x] ~~**the stale `exerciseRegistry` rows** (sweep 57)~~ — CLOSED,
                            sweep 63. All four fixed, and my "three stale rows, all inert" summary
                            was wrong: `shadowing` was LIVE, crediting the listening quest for
                            acoustically-scored speaking. `registryMatchesScreen.test.ts` is the
                            mechanism sweep 57 lacked.

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
