# CLAUDE.md — Naša Hrvatska

## 1. What we are building
The best application in the world for learning Croatian, one of the hardest languages to
master. It is built from the texts Croatian language teachers use (the Croaticum books), in
the books' order, with the best UI for learning Croatian. A learner who uses it daily should
become fluent the way a student in a good Croatian class does. One clear path. Extras never
compete with it.

Live: https://nasahrvatska.com. Repo: AzCroat/nasa-hrvatska-v2. React 18 + Vite, Firebase,
Cloudflare Pages Functions, Capacitor. A push to master deploys.

## 2. How a learner learns (the rule everything is checked against)
1. **Forward progress follows demonstrated mastery.** Pass the check or test out and you move
   on. A learner who scores 100% is never held back, and never re-drilled to get ahead.
2. **Test-out is open for every lesson and every unit, at any time.** A failed test-out
   unlocks nothing. Reading ahead stays closed.
3. **A unit opens the next when all five lessons are passed OR its unit test is passed.**
   Written and spoken tasks are practice, never a gate.
4. **Passed material returns only on a spaced schedule, never as repeated drills.**
   Lessons: 3, 10, 30, then every 90 days. Units: 7 and 30 days. Words: FSRS. Missed items
   come back sooner. Spaced retrieval is the core of retention; it is kept.
5. **Learners produce the language.** Speaking and writing, graded; case endings are learned
   by using them. Practice mixes topics so cases are told apart.
6. **Every wrong answer explains itself.** A question never contains its own answer.
7. **Every lock states what opens it, with a button.** The Course tab always shows a
   "Test out of any lesson or unit" entry and never a state with no next action.
8. **Nastavi učiti serves the next new lesson or test with no daily cap** once nothing is
   failing or due.
9. **One level across the app:** the course level. Never show content above the learner's
   unit. Levels are A1–C1; there is no C2.
10. **The course never over-claims.** Never display a level, badge, or "confirmed" claim the
    learner has not earned with real passes.

## 3. Done means used
A change is finished only when it has been used as a learner who already knows the material
would use it, and the owner has seen the real result (a screenshot, then the Cloudflare
preview). A green test count is not evidence. Walk the whole path after any change to
locks, gates, progress or scheduling, in these states: brand new; passed lesson 1 at 100%;
knows everything and wants to test out; failed a check; finished a unit; finished the course.

## 4. Owner rules (unchanged, from .claude/OWNER-RULES.md)
Cost: the owner pays per token. One worker per job, one message at the end, no interim
polling, no scope widening, cheapest explanation first, cheaper model for routine edits,
no helper agents, full test suite once at the end. No tests, CI or other paid steps before
the owner has seen finished work and approved it.
Merging: merge only when every check on the current head is green, with
`gh pr merge <n> --merge`; never `--auto`; a PR with no checks may have a merge conflict.
After merging, confirm master CI passed and /version.json shows the commit.
English in the app is American English. Show screenshots before merging anything a learner
sees. No temp files. Deliverables go in the System of Record Dropbox folder. Report times in
CEST. Plain English. Never write to production Firestore. Never claim to operate the
owner's browser.

## 5. Hard limits (each one prevented a real incident)
- Never wipe a user's localStorage or tell them to; never reduce a stat in a remote merge
  (merges are additive); never bypass the sync-ready gate; save only through the sync manager.
- Never commit secrets. Keys live in Cloudflare.
- All Croatian must be standard Croatian in Latin script: no Cyrillic, no Serbian forms,
  not even as a wrong answer. `npm run lint` checks this.
- Never put a fake number, fake learner or competitor referral in the app.
- Never credit a learner for work they could not do. Never state something the app has not
  measured. Never skip hooks, force-push master, or amend published commits.
- AI features must always answer and total AI spend stays under the monthly cap; do not
  promote models or raise token limits without redoing the budget math.
- Audio must be heard before an audio-only question counts.
- UI change = update the matching Playwright spec in the same commit.
- Cloudflare is the only production publisher (CI deploys); do not turn Git production
  builds back on.

## 6. Where the details are
Everything learned in earlier sessions is kept, not deleted:
`docs/history/CLAUDE-full-history.md` (the old 660 KB file) and `docs/history/AUDIT-STATE.md`. Read the relevant
section only when a task touches that area. They are an archive, not a to-do list and
not requirements. Never read them on a timer.
Commands: `npm run dev | build | test | lint | typecheck | test:e2e`.
