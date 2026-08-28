# Teaching Curriculum — Design Document

**Status:** awaiting owner approval · **Author:** Claude (lead) · **Date:** 2026-08-28
**Decision owner:** AzCroat · **Supersedes:** nothing (new subsystem)

---

## 1. The problem, measured

The owner's report: _"Users don't receive a lesson each day before being tested in their
competence of the subject matter."_

I traced this rather than accepting or dismissing it. The finding is sharper than
"there is no teaching":

| What exists | Measured |
| --- | --- |
| Animated lessons (server catalog) | **45** — A1:9, A2:8, B1:10, B2:6, C1:8, C2:4 |
| Total slides | 473 (avg 10.5/lesson) |
| Slide types in use | `rule` 161, `quiz` 85, `example` 71, `table` 66, `intro` 45, `summary` 45 |
| Learn-tab components | 74 |
| Concept intros, guided writing, teach→practice coupling | present and working |

**Teaching content is not absent, and its FORMAT is sound.** The `intro → rule/example/
table/quiz → summary` shape is a real lesson. This design therefore extends that format
rather than replacing it.

### What is actually broken

**1. The daily session never guarantees a lesson.**
`buildSessionActivities` (src/hooks/useDailySession.ts) guarantees: P1 SRS review,
P1.5 taught-category drill, P2 adaptive grammar, P2.4 conversation, P2.5 production,
P2.7 grammar/structure, P3 CEFR fill, P4 Croatia. **Every one is practice or
assessment.** A lesson reaches a learner only by winning a P3 fill slot: `animlesson`
is a single entry in `CEFR_EXERCISE_POOL` tagged `cefr: 'A1'`, competing against ~100
others and pushed down by difficulty ordering for anyone above A1. It is a lottery
ticket, not a step.

**2. P1.5 cannot cause teaching.** It is named "teach → practice coupling" but serves
only the practice half — it fires after a lesson was completed somewhere else. Nothing
in the app schedules the lesson itself.

**3. There is no curricular sequence.** Lesson selection is "least-recently-served,
unlocked at this CEFR" (`useScreenLauncher`). That is rotation, not pedagogy: no
prerequisites, no ordering, no notion that one concept must precede another.

**4. The volume cannot support daily use.** 45 ÷ 6 levels ≈ 7.5 lessons per level. A
learner doing one lesson a day exhausts a level in a week.

### Root cause

The app grew a strong assessment-and-practice engine. The teaching layer never grew to
match it. That asymmetry is the defect.

---

## 2. Goals / non-goals

**Goals**

- Every daily session opens with a lesson, before any testing.
- The lesson leads directly into practice of what it just taught, in the same session.
- Lessons form an ordered curriculum with prerequisites, per CEFR level.
- ~30 lessons per level (~180 total), authored to native-standard Croatian.
- Curriculum progress is visible and syncs across devices.

**Non-goals (deliberate)**

- **Lesson completion does not confer level.** The CEFR mastery gate remains the sole
  arbiter of competence (owner directive, 2026-08-16). Curriculum progress becomes an
  *input to readiness*, never an auto-promotion.
- **No hard gate on practice.** Per owner decision: the lesson is a guaranteed,
  first-position slot, not a blocker. This preserves the never-strand contract.
- No AI-generated lesson content. Authored, static, versioned, lint-checked.

---

## 3. Two findings that constrain the architecture

### 3.1 Payload — the scale-up blocker

`/api/content/lessons` serves **the entire `LESSONS` array in one response**:

```
current 45 lessons:  289 KB  =  6.4 KB/lesson
at 180 lessons:      1.13 MB in a single response
```

Shipping 1.13 MB to open one lesson is not viable on mobile.

**The repo already solves this elsewhere.** `/api/content/catalog` exposes stories and
grammar units as metadata only, with per-item ETags, and the body lives behind
`/api/content/stories/{id}`. Lessons are the outlier that never adopted the pattern.

**Decision:** adopt the existing catalog pattern. No new invention.

| Endpoint | Payload |
| --- | --- |
| `/api/content/curriculum` (new) | Spine metadata only: id, level, order, title, subtitle, icon, duration, objectives, `teaches`, `prerequisites`, `practiceScreen`, per-lesson etag. Small and cacheable. |
| `/api/content/lessons/{id}` (new) | One lesson's slides. Per-item ETag. |
| `/api/content/lessons` (existing) | Retained during migration for backwards compatibility, then retired. |

### 3.2 The existing 45 lessons are an asset, not debt

They use the proven slide format and represent real authored work. They are **migrated,
not replaced**: each is assigned a level order, prerequisites, learner-facing
objectives, a `teaches` category and a `practiceScreen`. Slides are left alone except
where an audit finds a defect. Any that duplicate new material are reconciled, keeping
the better version.

---

## 4. Data model

```ts
/** One authored lesson in the curriculum spine. */
interface CurriculumLesson {
  id: string;                    // stable, kebab-case; never renamed once shipped
  level: CEFRLevel;              // 'A1' … 'C2'
  order: number;                 // position within its level's spine (1-based, dense)
  title: string;
  subtitle: string;
  icon: string;
  duration: string;              // '~5 min'

  /** Learner-facing, plain English. "You will be able to …" — 2-4 entries. */
  objectives: string[];

  /** Skill categories this lesson teaches. Drives the follow-on practice slot. */
  teaches: SkillCategory[];

  /** Lesson ids that must be completed first. Same level or lower. May be empty. */
  prerequisites: string[];

  /** The drill served immediately after, in the same session. */
  practiceScreen: string;        // must resolve in CEFR_EXERCISE_POOL

  slides: LessonSlide[];         // existing proven format, unchanged
}
```

`LessonSlide` keeps the six shipped types — `intro`, `rule`, `example`, `table`, `quiz`,
`summary` — because they already render and are already tested.

**Field rules that tests will enforce:**

- `order` is dense and unique within a level (no gaps, no duplicates).
- `prerequisites` never reference a higher level, and never form a cycle.
- Every `teaches` entry exists in `ALL_CATEGORIES`.
- Every `practiceScreen` resolves to a real pool entry at or below the lesson's level.
- `objectives` is non-empty — a lesson that cannot say what it teaches is not a lesson.

---

## 5. Sequencing model

**A linear spine per level, plus explicit prerequisites.**

Not a pure ordered list: that cannot express "the case primer must precede all five case
lessons regardless of their order". Not a full DAG either: that is over-engineering for
a 30-lesson level and hard to reason about. The middle is a canonical order that a
learner walks, with `prerequisites` expressing the few genuine hard dependencies.

### `getNextLesson(state)` — the selection engine

Returns exactly one lesson, **never null** (the same contract as `getNextStep`):

1. First lesson in the learner's level spine that is not completed **and** whose
   prerequisites are all completed.
2. If the level spine is exhausted → the first incomplete lesson of the next level, if
   content is unlocked at that level.
3. If nothing is unlocked → **review mode**: re-serve a completed lesson, chosen by the
   mastery ledger's weakest measured skill. Flagged as review in the UI so it is never
   presented as new.
4. Content unavailable → the authored fallback path (`authoredFallback.ts`), which
   cannot itself fail.

Every rung degrades to the next on error. Pure read-only compute, like `nextStep.ts`.

---

## 6. Session integration

A new slot, **P0 — Today's Lesson**, placed *first*, ahead of SRS review.

First position is the literal implementation of the requirement: a lesson each day,
before being tested.

**Rules**

- **Exactly one lesson per session.** Never two.
- **Its practice follows immediately.** The lesson's `practiceScreen` claims the next
  slot, so teaching leads straight into doing. This makes the existing teach→practice
  coupling *same-session* instead of next-session; `pendingTaughtCategories` remains as
  the fallback for lessons finished outside a session.
- **Not a hard block.** The learner may skip ahead. Ordering carries the intent.
- **Idempotent per day.** If today's lesson is already complete, P0 is skipped and the
  session composes as it does today — no re-teaching, no penalty for finishing early.
- **Session length is unchanged.** The lesson consumes one slot from the P3 fill budget
  rather than extending the session. This protects the existing, tested length contract
  (A1 → 3 mandatory + fill, etc.).

**Contracts that must not regress** (all currently pinned by tests):

| Contract | How it is protected |
| --- | --- |
| Session length per level | Lesson takes a fill slot, not an extra one |
| Difficulty contract | Lesson is level-matched by construction |
| One-reference cap | Lessons are not reference entries |
| Never-strand | P0 degrades through review mode to authored fallback |
| Honest reasons | P0's reason is authored ("Day 4 of A1: the genitive case") — never a fabricated metric |

---

## 7. Progression, mastery and storage

**Curriculum progress never promotes a learner.** `getCertifiedLevel()` and the
verification gate remain the arbiters. Curriculum progress feeds *readiness*: "you have
completed 28 of 30 A1 lessons — ready to attempt the A1 check". This preserves the
2026-08-16 directive that progression is gated on demonstrated competency, not activity.

**Storage:** `nh_curriculum_progress` — completed lesson ids with timestamps.

Sync requires the full four-point change (per the sync architecture rules):

1. Added to `buildProgressSnapshot()`
2. Added to `applyRemoteProgress()` in `useSyncManager`
3. Merged **additively** — union of completed ids, `Math.max` on counts. A remote merge
   never un-completes a lesson.
4. TypeScript types updated

No Firestore rules change: it rides inside the existing progress blob.

---

## 8. Testing strategy

Structural validation (the class of test that has repeatedly caught real defects here):

- Every lesson carries all required fields; every slide is a known type.
- `order` dense and unique per level; no prerequisite cycles; no forward or
  higher-level references.
- Every `teaches` category exists; every `practiceScreen` resolves to a real, reachable
  pool entry at or below the lesson's level.
- **Coverage floor: ≥30 lessons per level**, asserted per level so a wave cannot land
  half-finished unnoticed.
- Spine reachability: from lesson 1, every lesson in a level is eventually reachable.
- `getNextLesson` never returns null, across an exhaustive matrix of progress states.
- Session pins: P0 present, exactly one lesson, correct ordering, session length
  unchanged, practice follows the lesson.
- **Croatian content lint**: the curriculum file is added to `scripts/lintCroatianText.mjs`
  TARGETS — encoding bleed and Serbisms, distractors included.
- Mutation checks on the sequencing engine (the standard applied throughout this repo).
- **E2E spec audit**: the session UI changes, so `home.spec.js`, `learn.spec.js`,
  `lesson-complete.spec.js` and `navigation.spec.js` are reviewed and updated in the
  same PR as the UI change.

---

## 9. Delivery plan

Each wave is its own PR, individually green, individually deployable.

| Wave | Contents |
| --- | --- |
| **0** | This design document — owner approval |
| **1** | **Walking skeleton + A1 complete.** Schema, `getNextLesson`, curriculum/lesson endpoints, P0 session slot, sync wiring, migration of the existing 45, A1 authored to 30 lessons, full test suite |
| 2 | A2 → 30 lessons |
| 3 | B1 → 30 lessons |
| 4 | B2 → 30 lessons |
| 5 | C1 → 30 lessons |
| 6 | C2 → 30 lessons |

Wave 1 proves the mechanism end to end on one level before committing to authoring 150
more lessons on the same pattern. If the shape is wrong, it is wrong once.

---

## 10. Risks

| Risk | Mitigation |
| --- | --- |
| **Payload growth** (1.13 MB at 180 lessons) | Catalog/detail split, §3.1. Non-negotiable in Wave 1 |
| **Authoring quality at volume** | Croatian lint in CI, structural tests, native-standard authoring owned per the 2026-07-16 directive |
| **Session regression** | Lesson consumes a fill slot; existing length/difficulty pins stay green |
| **Existing 45 vary in quality** | Audited during Wave 1 migration, not assumed good |
| **Scope fatigue across 6 waves** | Each wave independently shippable; the app improves at every step, never half-migrated |
| **Curriculum drifting from the drills it points at** | `practiceScreen` validated against the live pool by test, so a renamed screen fails the build |

---

## 11. Open questions for the owner

None blocking. Four decisions are already taken:

1. Content source — **hand-authored, static**
2. Depth — **~30 lessons/level, ~180 total**
3. Gating — **guaranteed first slot, not a hard block**
4. First delivery — **this document, then A1 complete**

Two I will decide during Wave 1 unless directed otherwise:

- Whether review mode (§5, rung 3) ships in Wave 1 or Wave 2. It only triggers once a
  learner exhausts a level, so it is not reachable on day one.
- Whether the Learn tab gets a curriculum spine view in Wave 1 or later. The session
  slot is the requirement; the browsable syllabus is an enhancement.
