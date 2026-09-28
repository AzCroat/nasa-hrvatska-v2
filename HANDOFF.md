# HANDOFF — 2026-09-28

Written at the close of a Claude Code desktop session, for the next session in
Claude Code in Terminal. Read this, then `AUDIT-STATE.md` (per CLAUDE.md), before
doing anything. Everything below was checked against the repo and GitHub at the
time of writing; nothing is from memory.

Branch this note lives on: `claude/handoff-2026-09-28` (based on #769's head,
`0fbc2083`). Once #769 merges, this branch is just this file.

---

## 1. Done this session

- **#769 (advanced vocabulary, C1 → 1,679 / C2 → 1,158) — CI red diagnosed and fixed.**
  - Cause: ONE false positive in `src/tests/fusedFutureSpelling.test.ts`. The new C2
    sentence _"Vlastelin je od svojih kmetova tražio tlaku i daće"_ uses `daće`, the
    accusative plural of the historical noun _daća_ (a levy/tribute owed to a lord), not
    the Serbian fused future of _dati_. The guard flags a fused form only when the corpus
    spells the same stem as a two-word future, and `dat će` elsewhere makes `da` a stem.
    Same class as the existing `braće` / `radiću` entries.
  - Fix: `daće` added to that file's `HOMONYMS` map, with its meaning. Commit `0fbc2083`,
    pushed to `claude/youthful-cerf-lc035t`. The content is correct Croatian and was not
    changed.
  - Verified: the guard's own derivation run over the real corpus (826 files) reproduces
    the CI failure exactly without the entry and reports zero hits with it; the positive
    control still catches `pisaću`. Then the FULL unit suite locally — green (see §4 for
    the two local-environment artifacts).
- **Node 22 installed on this machine** (`brew install node@22`, keg-only) and put on PATH
  via a line appended to `~/.zprofile`:
  `export PATH="/opt/homebrew/opt/node@22/bin:$PATH"`. Before this the machine had no
  Node at all, so no test, lint, typecheck or git hook could run here.
- **Searched the whole system of record** for the production-units patch and the Daily
  Session redesign (results in §3).

## 2. In the middle of

- **Merging #769.** Owner instruction: _"merge it when CI is green."_ At hand-off,
  TypeScript + Tests, Lint & Type Check, Emulator, CodeQL, Semgrep, Gitleaks, osv and
  Cloudflare Pages were green on `0fbc2083`; **Unit Tests and E2E (Cross-Browser) were
  still running.** Not merged. Next session: `gh pr checks 769`; merge only if every
  check is green; if anything is red, read the log first and do not merge.

## 3. Left to do

### 3a. Production units — writing + speaking curricula 8 → 12 units per level

- **What the record says.** AUDIT-STATE.md sweep 177: the owner chose four content
  expansions — (1) dialogues 12 → 24, (2) LISTEN → 20/level, (3) C1 +600 / C2 +700
  words, (4) writing + speaking 8 → 12. Items 1–3 shipped (#768, #769). Item 4 is
  recorded nowhere as done or saved. Sweep 178 shows its authoring agents RAN ("the
  step-4 production agents, verifying build sentences against `decline()`…"), and their
  reports produced the declension-engine fix in #768.
- **DONE 2026-09-28 (sweep 188): rewritten from scratch, 48 units, read and spliced; both
  guards raised to 12.** The paragraph below records the loss as it stood.
- **The patch is lost.** An earlier session said it was "rebased and staged in the
  `wt-prod-next` worktree, uncommitted". No such worktree, directory, branch, stash or
  record exists on this machine or on GitHub (checked: every remote branch, the stash,
  a disk search under `~`, `/tmp`, `/private/tmp`). Unless that environment still exists
  somewhere, **it must be rewritten**: 4 new units per level × 6 levels × 2 curricula =
  48 units, each with a native-standard model text, a checklist the model passes, and
  (speaking) build sentences checked against `decline()`.
  - Files: `src/data/writingCurriculum.ts`, `src/data/speakingCurriculum.ts`. Guards:
    `writingCurriculum.test.ts`, `sentenceBuild.test.ts`, the speaking-curriculum tests,
    the Croatian lint. Read CLAUDE.md "Production Teaching" and "Guided Speaking" first
    — in particular the floor written three times per unit, the minWords ladder, and
    "the model must pass its own checklist".
  - **Lesson:** push work in progress to a draft branch; never leave it only in a
    worktree.

### 3b. Daily Session redesign — design not yet written

- Owner asked this session to start it. **Nothing is committed about it**: no doc,
  no AUDIT-STATE entry. The rationale exists only in conversation, summarised here:
  - Already in the app, with the research behind each: FSRS spaced repetition
    (spacing effect); mixed cumulative tests (interleaving / retrieval practice —
    Bjork; Roediger & Karpicke); worked examples then guided practice (cognitive
    load, Sweller); production in advancement (output hypothesis, Swain); mastery gates
    and retention re-checks (mastery learning, Bloom); explicit grammar with English
    bridges (Norris & Ortega 2000).
  - Missing: the model that SEQUENCES them — Skill Acquisition Theory (DeKeyser):
    rule → deliberate practice to automaticity → free use. Classroom form
    Presentation → Practice → Production, one concept at a time, mastery before
    advancing. Applied to the Daily Session: teach one concept, practise it in stages,
    use it, test it, hold before advancing.
  - To avoid: exposure alone for cases/aspect (Krashen's input hypothesis); testing
    untaught material.
  - Owner commitment: name the principle behind every design decision.
- **Two notes on that summary, checked in code:**
  - The claim that FSI/DLI teach Croatian specifically as PPP is **unverified**. Do not
    cite it; the design stands on DeKeyser and Norris & Ortega without it.
  - "Retention check-ups at 7 and 30 days" is **correct for UNITS**
    (`src/lib/unitRetention.ts`). Lessons have a separate ladder, 3 → 10 → 30 → 90 days
    (`RETENTION_INTERVALS`, `src/lib/lessonRetention.ts`), plus a weekly cumulative.
    (Earlier in the session this was wrongly flagged as a discrepancy.)
- **Much of it already exists — start from there, not from scratch.** CLAUDE.md
  "The Course, In Units" (step 3, sweeps 151–155): 36 units of 5 lessons, one path for
  everyone from Unit 1, the course map, the unit test + accuracy/production gate,
  retention confirmation, level reviews, and — increment 3 — the Daily Session's
  teaching slot already follows the course order ("the daily session demoted to
  delivery"). The redesign is therefore mostly about what the REST of the session does
  around that lesson (P1–P4 in "The Daily Session Recommender" are still
  weakness/rotation driven, not concept-staged).
- **UPDATE, same day: the design is written — `docs/daily-session-redesign.md`
  (SIGNED OFF later the same day — all five §8 decisions answered by the owner:
  course-unit level for everyone; adaptive pick kept, taught categories only;
  conversation gated on the course reaching B1; production on lesson days only;
  corrective day approved.)**
- **UPDATE 2: increments 0 and 1 are DONE** (AUDIT-STATE sweeps 180–181; CLAUDE.md
  "The Session Is Built At The Course's Level"). Increment 0 measured the gap and
  overturned the design's first G1 (it is the production/conversation slots' level,
  not concept drills). Increment 1 builds and SIZES the session at the course unit's
  level (`src/lib/sessionLevel.ts`) and points the guided speaking/writing screens and
  `DialogueSim` at it when session-launched. #770 merged and deployed.
- **UPDATE 3: increment 2a is DONE** (sweep 182; CLAUDE.md "Increment 2a"): on a
  lesson day the production slot is the lesson's own WRITTEN produce step, credited
  from the record wherever it was written; standalone route `lessonproduce`.
  #771 (2a) opened; owner's standing instruction is merge-on-green.
- **UPDATE 4: increment 2b is DONE** (sweep 183; CLAUDE.md "Increment 2b"): the
  produce step spoken (`kind: 'speak'`, transcript → `/api/speaking-coach`),
  alternating with writing by the ledger's weaker production skill, else by the last
  graded kind. Increment 3 DONE in its small form (sweep 185): the taught rule tightened to
  completed + advanced + today's lesson; the Lesson Review is the mix. Increment 4 DONE (sweep 186): the corrective day — a failed check makes the next
  sitting open at the worked examples with the easier drill first. Increment 5 DONE (sweep 187): the plan line names the day's concept. **The
  redesign's five increments are complete.** Remaining candidates, in the owner's
  order of choosing: the production-units rewrite (§3a), the eight Dependabot PRs
  (two major), the design's unbuilt items (mixed-bank drill runner; second-fail
  escalation), the timezone-dependent test. Also installed on
  this machine since §4 was written: Playwright's Chromium (`npx playwright install
chromium`); E2E runs with `--project="Desktop Chrome"` (there is no `chromium`
  project) against a build made with CI's placeholder `VITE_FIREBASE_*` values
  (see `.github/workflows/ci.yml` ~line 254). Central finding, read from code: only
  the lesson slot (P0) follows course position; every other slot is chosen by
  `getContentUnlockLevel(getUserCefr(xp, lc, gc))`, so learners ahead by XP (everyone
  with pre-2026-09-26 progress, all now at Unit 1) get activities on material the
  course has not taught them. §8 lists five owner decisions; increment 0 (measure that
  gap through the real builder) is the first build step once they are made.

### 3c. Other open items

- **Dependabot PRs #760–#767** open, unreviewed. Two are MAJOR bumps needing real
  attention: vitest 4 → 5 (#763) and @sentry/react 10 → 11 (#767). Also size-limit 14
  (#764, major, dev-only).
- **Production hotfix 2026-09-28 (sweep 184)**: `/review` crashed on its loading →
  loaded render (a hook after an early return); fixed, regression-tested, and
  `react-hooks/rules-of-hooks` turned on for TypeScript (it was JS-only). Watch Sentry
  21022c33 for recurrence after deploy.
- **`src/lib/__tests__/seasonalCampaign.test.ts` is timezone-dependent** (found this
  session, not fixed): under CEST it computes Palm Sunday 2026 as Mar 28, not Mar 29,
  so it fails on any machine east of UTC; passes with `TZ=UTC` (CI runs UTC). Minor
  test defect; record in AUDIT-STATE when fixed.
- Not yet appended to `AUDIT-STATE.md`: the `daće` homonym finding, the lost patch, the
  timezone test. Append them (the file's rule: findings are written as they happen).

## 4. Running tests locally on this machine

- `export PATH="/opt/homebrew/opt/node@22/bin:$PATH"` (already in `~/.zprofile`).
- `npm ci`, then **`node scripts/generate-content-etags.mjs`** — `_etags.js` is
  gitignored and CI generates it; without it nine suites fail to import.
- Run with **`TZ=UTC npx vitest run`** to match CI (see the timezone test above).
- With both, the full suite on `0fbc2083` was green: 667 files.
- The main checkout at `~/Documents/GitHub/nasa-hrvatska-v2` has NO `node_modules` and
  its local `master` is behind `origin/master` (`git pull` first). This session worked
  in a throwaway worktree at `/tmp/wt769`.

## 5. Owner decisions (this session and the record it rests on)

- **Merge #769 only when CI is green.**
- **Install Node 22 via Homebrew** on this machine — approved and done.
- **Start the Daily Session redesign** — approved; design first (see 3b).
- **Content expansion choices (sweep 177):** dialogues 12 → 24, LISTEN 20/level, C1 +600 /
  C2 +700 words, writing + speaking 8 → 12.
- Standing: one learning path for everyone from Unit 1, no heritage shortcut
  ("The Course, In Units"); step order was "finish step 1, then step 3 and then step 2".
- **Move the work to Claude Code in Terminal** — this note.
