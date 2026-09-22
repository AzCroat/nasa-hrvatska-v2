# AUDIT-STATE.md — the running defect hunt

**READ THIS AT THE START OF EVERY SESSION, AND EVERY 20 MINUTES DURING ONE.**
It exists because findings that live in a conversation die with it. This file
is the only durable record of what has been checked, what it found, and — the
part that actually matters — **what has not been checked yet.**

Owner directive, 2026-09-22: *"There are no new sessions. All work must be
linked to any prior work. You can never lose anything."* The mechanism for that
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
**What it cannot see, in its own words:** *"a screen that renders fine and is
WRONG. The audio bug never threw — it returned a 400."*

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

## NOT YET CHECKED — where the next field report will come from

Every defect the owner has actually hit is in this list, not the one above.
None of them crash, so no sweep above can see any of them.

- [ ] **Behavioural correctness on live paths.** Renders fine, behaves wrong.
      The B2 listening section returned 400; the badge claimed C1 for a level
      nothing measured; feedback surfaces rendered nothing on failure.
- [ ] **Day-one path end to end**: sign up -> placement -> first lesson ->
      first drill -> audio -> feedback -> what the numbers claim.
- [ ] **Numbers displayed vs numbers measured** (NEVER-DO 13) — every figure a
      learner reads, traced to the thing that produced it.
- [ ] **API endpoints' real failure modes** as a learner meets them (quota,
      budget pause, timeout, malformed reply) rather than as unit tests mock them.
- [ ] **Offline / stale-payload behaviour** on the paths that assume content.
- [ ] Lower priority: `fbLoadSRS` removal; `LevelQuiz.onPass` removal.
