# Daily Session redesign — one concept a day, taught, practised, used, held

Status: **DRAFT for owner sign-off. No code has been written.** Written 2026-09-28.
Every "today" statement below was read from the code on `claude/handoff-2026-09-28`
(based on `0fbc2083`), with the file named. Statements that are inference rather
than measurement say so.

---

## 1. The ask

Owner: make the app a course that moves a learner along as they grasp subjects
(the directive behind "The Course, In Units", 2026-09-26), and, this week, redesign
the Daily Session on the best-evidenced model for adults learning a
grammar-heavy language. Owner's standing request: **name the principle behind every
design decision**, so each one can be checked.

## 2. Principles, and what each one is used for here

| Principle                                                               | Source                                              | Used for                                                  |
| ----------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------- |
| **P-SAT** Skill acquisition: rule → deliberate practice → automatic use | DeKeyser, Skill Acquisition Theory                  | The shape of the whole session (§5)                       |
| **P-EXP** Explicit instruction beats implicit for adults                | Norris & Ortega (2000) meta-analysis                | Keeping the lesson first, explained, with English bridges |
| **P-CLT** Worked examples, then faded guidance                          | Sweller, cognitive load theory                      | Already inside every lesson (increment 6); unchanged      |
| **P-OUT** Producing language forces noticing                            | Swain, output hypothesis                            | Production tied to the day's concept (§5, stage 3)        |
| **P-INT** Interleaved, retrieval-based practice                         | Bjork (desirable difficulties); Roediger & Karpicke | Mixed practice of recently taught concepts (§5, stage 4)  |
| **P-SPC** Spaced retrieval                                              | Ebbinghaus onward; FSRS                             | Warm-up reviews (§5, stage 0); unchanged schedulers       |
| **P-MST** Mastery before advancing, with correctives                    | Bloom, mastery learning                             | Holding on a concept after a failed check (§5, "hold")    |
| **P-TAUGHT** Never test what has not been taught                        | Follows from P-MST and P-EXP; also measures nothing | The taught-set rule (§6) — the single biggest change      |

**Not used, stated so nobody cites it:** that the US Foreign Service Institute and
Defense Language Institute teach Croatian specifically as Presentation → Practice →
Production. An earlier summary said so; it has not been verified. What is documented
is intensive, small-group, explicit instruction. The design stands on DeKeyser and
Norris & Ortega without it.

**Rejected as the teaching method:** exposure alone (Krashen's input hypothesis) for
cases and aspect. Input stays in the session (§5, stage 5) because comprehension is a
skill the Level Check tests, but it is not how a case ending gets taught.

## 3. What the session is today (read from code)

`buildSessionActivities(userCefr, poolWords)` in `src/hooks/useDailySession.ts`,
called from `HomeTab` with
`userCefr = getContentUnlockLevel(getUserCefr(st.xp, st.lc, st.gc))`.

| Slot   | What it serves                                                                                                                                                                                           | What decides it                                                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **P0** | The course step: today's lesson + its coupled drill, or the unit test, unit production, a check-up (+ lesson), or the level review (`curriculumSlot.buildCurriculumSlots` → `courseStep.nextCourseStep`) | **Course position** (positional, same for everyone from Unit 1) |
| P1     | FSRS word review, if servable                                                                                                                                                                            | Due cards                                                       |
| P1.2   | Lesson retention: re-checks (3/10/30/90 d), missed-item cards, weekly mix                                                                                                                                | Retention store                                                 |
| P1.5   | Drill for a recently finished lesson (teach → practice queue, 14-day TTL, cleared on first practice)                                                                                                     | Queue, gated by `userCefr`                                      |
| P2     | Adaptive pick: weakest category                                                                                                                                                                          | Adaptive store, gated by `userCefr`                             |
| P2.4   | Conversation anchor at B1+                                                                                                                                                                               | `userCefr`                                                      |
| P2.5   | Production (guided speaking / writing unit, rotated by level)                                                                                                                                            | `userCefr`, ledger's weakest output                             |
| P2.7   | Grammar backstop if the session has none                                                                                                                                                                 | `userCefr`                                                      |
| P2.8   | One listening or reading activity                                                                                                                                                                        | `userCefr`, ledger's weakest input                              |
| P3     | CEFR fill, varied by skill family                                                                                                                                                                        | `userCefr`, recency                                             |
| P4     | Croatia/culture                                                                                                                                                                                          | `userCefr`, rotation                                            |

Length: `getSessionFillTarget` = 3 activities at A1, 4 from A2, +2 in fluency mode.

Already built and NOT to be rebuilt:

- **Inside each lesson, the PPP sequence exists** (CLAUDE.md "The Course, In Units",
  increment 6): explanation → two worked examples revealed step by step → formative
  quiz → four hinted practice items → six-item mastery check at 75%
  (`LESSON_PASS_THRESHOLD`) → an optional graded writing step (`LessonProduceStep`).
- **Around the lessons, the course holds the learner**: units of five lessons; a unit
  test at 85% (`UNIT_PASS_THRESHOLD`); a production requirement in the unit bar; unit
  check-ups at 7 and 30 days (`UNIT_RECHECK_INTERVALS`); a level review at each
  crossing; a test-out offer for learners who already know a unit.

## 4. The gaps

**G1 — Only one slot knows where the learner is in the course.** P0 is positional;
every other slot is chosen by `userCefr`, an XP- and certification-derived level. The
course deliberately ignores that level ("one path, everyone starts at Unit 1"), so the
two can be far apart. **Every learner with progress from before 2026-09-26 is in this
state**: at Unit 1 of the course, with sessions whose other activities are chosen for
their old level. Result (inference from the code, to be measured in increment 0): a
learner on Unit 2 of A1 can be served a B1 dialogue, a B1 production task and a
genitive drill in the same session as the A1 alphabet lesson. That breaks P-TAUGHT
and it breaks P-SAT, because the session does not practise the thing it just taught.

**G2 — A concept is practised once, then dropped.** The teach → practice queue
clears on the first practice (`teachPractice.ts`), so a lesson gets one follow-on
drill. Lesson retention brings the lesson's check back at 3, 10, 30 and 90 days —
that is a _test_, not practice. Nothing between those points gives the repeated,
increasingly varied practice that turns a known rule into an automatic one (P-SAT's
second stage).

**G3 — The day's production task is about something else.** P2.5 rotates through the
guided writing and speaking curricula by level. It is not tied to the day's concept,
and `LessonProduceStep` — which is — is optional and sits on the lesson summary where
it is easy to skip. (P-OUT: production helps most when it pushes on the form just
taught.)

**G4 — The session has no single subject.** Four to six activities chosen by six
different rules (weakness, rotation, recency, skill variety, level) read as a list of
unrelated tasks. P-SAT and P-MST both assume one concept is the day's focus.

**G5 — A failed lesson check has no corrective.** The spine serves the same lesson
again tomorrow (`AnimatedLesson`, "Not yet"), but the session around it does not
change: no easier practice of that concept, no targeted re-teaching. Bloom's mastery
learning is specifically _corrective instruction, then a retest_ — not a plain retry.

## 5. Proposed design — the session is one concept's day

The day's **concept** is whatever the course step teaches: today's lesson (and its
taught category, from `LESSON_TAUGHT_CATEGORY`). On a unit-test, production, check-up
or level-review day the concept is the unit.

| Stage | Activity                                                                                       | Principle                             | Built from                                      |
| ----- | ---------------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------- |
| 0     | **Warm-up retrieval** — due word reviews and due lesson/unit re-checks, _taught material only_ | P-SPC, P-INT                          | P1, P1.2, unit check-ups (unchanged schedulers) |
| 1     | **Teach** — today's lesson (PPP inside it, unchanged)                                          | P-EXP, P-CLT                          | P0                                              |
| 2     | **Practise** — the drill for today's concept                                                   | P-SAT (proceduralise)                 | P0's coupled drill                              |
| 3     | **Use** — a short production task on today's concept                                           | P-OUT                                 | `LessonProduceStep`, promoted to a session slot |
| 4     | **Mix** — interleaved practice of the last few concepts taught                                 | P-INT, P-SAT (automatise)             | replaces P1.5 / P2 / P2.7 / P3 graded picks     |
| 5     | **Read / listen** — one input item at the course level                                         | comprehension (not a teaching method) | P2.8, P4, gated on course level                 |

**Hold (P-MST).** When today's lesson check fails, tomorrow is a **corrective day**
for the same concept: stage 1 becomes a shortened re-teach (the lesson's worked
examples and practice slides, not the whole lesson), stage 2 an easier drill for the
same category (`CATEGORY_EASIER_SCREEN` already names one), then the check again. The
course does not advance until it passes — which is already true of the spine; what is
new is that the session around it helps.

**Length stays inside the existing contract.** Stages 0 and 5 are the flexible ones
and give way first; the session never exceeds `getSessionFillTarget`. A1 (3 slots)
gets stages 1–2 plus one of 3/4; the full shape needs A2's 4 or fluency mode.

## 6. The taught-set rule (the biggest single change)

Every **graded** activity in the session draws only from what has been taught:

- **Taught categories** = the `LESSON_TAUGHT_CATEGORY` values of lessons the learner
  has completed (`nh_curriculum_progress`), plus every lesson in a unit the course has
  ADVANCED them past (`openUnits().advanced`). A test-out does not mark lessons read —
  it passes the unit test at the same 85% bar — so it is the unit, not the lesson
  record, that says the material is known.
- **Session level** for graded picks = the level of the learner's current course
  unit, not `userCefr`.
- **Doors are not touched.** `getContentUnlockLevel` still decides what the learner
  can open from the tabs; this rule only changes what the SESSION chooses. Taking
  away access the learner already has is a NEVER in CLAUDE.md, and this avoids it.

Consequence to accept: a learner with a high XP level who is early in the course gets
sessions at their course position. That is the owner's one-path directive applied to
the session, and the test-out is the fast route through material they know.

## 7. What does not change

Session length contract; the never-strand guarantee and authored fallbacks; the
honesty rule for reason lines (NEVER-DO 13); no credit for work the learner could not
do (NEVER-DO 14); the FSRS, lesson-retention and unit-retention schedulers; the
verification gate; the next-step engine's contract (always one recommendation).

## 8. Decisions needed from the owner

Owner answers recorded 2026-09-28 (Claude Code in Terminal, one at a time):

1. **Session level.** Course-unit level for everyone (recommended — follows the
   one-path directive), or keep `userCefr` for learners well ahead?
   **DECIDED: yes — course-unit level for everyone.**
2. **The adaptive weakness pick.** Keep it, restricted to taught categories, as one
   stage-4 item (recommended), or remove it from the session entirely?
   **DECIDED: yes — keep it, restricted to taught categories, one stage-4 item.**
3. **Conversation at B1+ (P2.4).** Keep as a stage-5 option once the course reaches B1,
   or keep it by XP level as today?
   **DECIDED: yes — gated on the COURSE reaching B1, not XP.** (The owner answered
   "yes" to an either/or; read as the first option, consistent with decision 1. If
   that reading is wrong, this line is the place to correct it.)
4. **Production every day, or every unit?** Stage 3 daily costs one AI evaluation per
   session against the $10/month ceiling; the alternative is daily on lesson days
   only, with the unit's production requirement unchanged.
   **DECIDED: lesson days only.** Stage 3 runs on days whose course step is a
   lesson; test, production, check-up and level-review days do not add a second
   production task. The unit's own production requirement is unchanged.
5. **Corrective day.** Approve the shape in §5 ("Hold"), or retry the lesson as today?

## 9. Increments — each shippable alone, each measured before and after

- **Increment 0 — measure G1 before changing anything.** A composition harness over
  the real builder: course positions (Unit 1, 3, 7, 13) × XP levels (A1, B1, C1),
  40 sessions each; count graded activities whose category the learner has not been
  taught. This turns G1 from inference into a number, and it is the baseline every
  later increment is measured against.
- **Increment 1 — the taught-set rule and course-level gating** (§6) on P1.5, P2,
  P2.7 and P3. Target: zero untaught graded activities in the harness.
- **Increment 2 — stage 3, production on today's concept.**
- **Increment 3 — stage 4, interleaved mix of recent concepts**, replacing the
  weakness/rotation picks; plus the staged practice count for G2 (a concept stays in
  the mix across several days instead of clearing on first practice).
- **Increment 4 — the corrective day** (G5).
- **Increment 5 — the session's reason lines and Home copy** name the day's concept,
  so the one-subject shape is visible (G4).

Each increment: unit tests through the real builder, mutation-verified, E2E audit of
the specs that pin session composition (`sp4b-production-slot.spec.js`,
`course-walk.spec.js`, `course-map.spec.js`, `home.spec.js`), and an AUDIT-STATE entry.

## 10. Risks and unknowns

- **Unmapped lessons.** Lessons with no `LESSON_TAUGHT_CATEGORY` entry have no drill;
  early A1 units are partly lexical (alphabet, greetings). Stage 2 for those days needs
  a rule — probably the lesson's own practice slides count as the practice.
- **Many existing tests assume CEFR-driven composition** (`useDailySession*.test.ts`,
  `curriculumSessionSlot.test.ts`, `sessionInputSlot.test.ts`, the per-level
  curriculum tests). They encode today's contract; each changed assertion needs a
  stated reason, not a bulk update.
- **The vocabulary deck is level-based** (`vocabPool`, `vocabLevel`). Aligning word
  review with course position is a separate question, deliberately left out.
- **G1's size is not yet measured.** If increment 0 finds it small, the order of the
  increments should change.
