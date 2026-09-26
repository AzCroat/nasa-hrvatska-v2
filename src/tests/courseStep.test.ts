/**
 * courseStep — what the course serves next, and the gate.
 *
 * THE DEFECT THIS INCREMENT REMOVED. Increment 2 shipped a unit test and a
 * mastery state while the daily session still chose lessons through
 * `getNextLesson`'s CERTIFICATION INFERENCE, which serves a certified B1 learner
 * their own level's first lesson — a unit the course map shows as locked. Two
 * surfaces disagreeing about what comes next is worse than either rule alone, so
 * both read this module now, and the inference is gone from the session path.
 *
 * WHAT IS ASSERTED HERE THAT A SCREEN TEST CANNOT SEE: that the walk cannot run
 * past the gate, that two documented escape hatches keep the gate from stranding
 * anyone, and that a certified learner starts at Unit 1 like everybody else.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import {
  recordUnitTest,
  recordUnitProduction,
  markUnitTestInsufficient,
  markProductionUnavailable,
  readUnitTestRequest,
} from '../lib/courseUnitProgress';
import {
  nextCourseStep,
  pickCourseStep,
  readCourseState,
  unitTestActivityId,
} from '../lib/courseStep';
import { buildCourseUnits, openUnits, lockReason, unitTestOffer } from '../lib/courseUnits';
import type { CurriculumEntry } from '../lib/curriculum';
import type { UnitProgress } from '../lib/courseUnits';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);

function readUnit(index: number): void {
  for (const l of UNITS[index]!.lessons) markLessonComplete(l.id, '2026-09-01');
}

/** Both halves of a unit's production, graded. */
function produced(unitId: string): void {
  recordUnitProduction(unitId, 'write', 78);
  recordUnitProduction(unitId, 'speak', 0.8);
}

/** Test passed AND production done — the whole bar. */
function master(unitId: string): void {
  recordUnitTest(unitId, 15, 15, true);
  produced(unitId);
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('what the course serves', () => {
  it('is the first lesson of Unit 1 for a new learner', () => {
    writeCurriculumSpine(SPINE);
    const step = nextCourseStep();
    expect(step).toMatchObject({ kind: 'lesson' });
    expect(step && step.kind === 'lesson' && step.lesson.id).toBe('alphabet');
    expect(step?.unit.id).toBe('A1-1');
    // POSITIONAL: the authored names are not on this path (see courseUnits), and the
    // session card already shows the LESSON's title as its label.
    expect(step?.reason).toBe('Unit 1 of 36');
  });

  it('walks the unit in order as lessons are read', () => {
    writeCurriculumSpine(SPINE);
    markLessonComplete('alphabet', '2026-09-01');
    const step = nextCourseStep();
    expect(step && step.kind === 'lesson' && step.lesson.id).toBe('greetings-farewells');
  });

  // THE TEST IS THE NEXT STEP once the reading is done. Serving the next unit's
  // lesson would race past the gate; serving nothing would stall the course.
  it('serves the unit test once the open unit is read through', () => {
    writeCurriculumSpine(SPINE);
    readUnit(0);
    const step = nextCourseStep();
    expect(step?.kind).toBe('unit-test');
    expect(step?.unit.id).toBe('A1-1');
    expect(step?.reason).toMatch(/Unit 1 test/);
  });

  // THE BAR IS BOTH HALVES. With the test passed and production owed, the course
  // stays on this unit and asks for the production — serving the next unit's lesson
  // would advance the learner past a bar they have not met.
  it('asks for production once the test is passed', () => {
    writeCurriculumSpine(SPINE);
    readUnit(0);
    recordUnitTest('A1-1', 15, 15, true);
    const step = nextCourseStep();
    expect(step?.kind).toBe('production');
    expect(step?.unit.id).toBe('A1-1');
    expect(step && step.kind === 'production' && step.owed).toBe('write');
    expect(step?.reason).toMatch(/write what you have learned/);
  });

  it('asks for the spoken half once the written one is graded', () => {
    writeCurriculumSpine(SPINE);
    readUnit(0);
    recordUnitTest('A1-1', 15, 15, true);
    recordUnitProduction('A1-1', 'write', 74);
    const step = nextCourseStep();
    expect(step?.kind).toBe('production');
    expect(step && step.kind === 'production' && step.owed).toBe('speak');
  });

  it('moves to the next unit once the test AND both production halves are done', () => {
    writeCurriculumSpine(SPINE);
    readUnit(0);
    master('A1-1');
    const step = nextCourseStep();
    expect(step?.kind).toBe('lesson');
    expect(step?.unit.id).toBe('A1-2');
    expect(step && step.kind === 'lesson' && step.lesson.id).toBe('basic-questions');
  });

  // A REFUSED EVALUATOR MUST NOT WALL A LEARNER OUT of their own course.
  it('moves on when the learner produced and the evaluator refused', () => {
    writeCurriculumSpine(SPINE);
    readUnit(0);
    recordUnitTest('A1-1', 15, 15, true);
    markProductionUnavailable('A1-1');
    const step = nextCourseStep();
    expect(step?.kind).toBe('lesson');
    expect(step?.unit.id).toBe('A1-2');
  });

  // A PASSED TEST-OUT ADVANCES THE COURSE WITHOUT THE READING, which is what makes
  // one path for everyone bearable for a learner who already knows the level.
  it('advances on a passed test-out plus production, with the lessons unread', () => {
    writeCurriculumSpine(SPINE);
    master('A1-1');
    const step = nextCourseStep();
    expect(step?.unit.id).toBe('A1-2');
    expect(step && step.kind === 'lesson' && step.lesson.id).toBe('basic-questions');
  });

  it('is null with no spine, so the session composes as it did before', () => {
    expect(nextCourseStep()).toBeNull();
  });

  it('is null when every unit has met the whole bar', () => {
    writeCurriculumSpine(SPINE);
    for (const u of UNITS) master(u.id);
    expect(nextCourseStep()).toBeNull();
  });

  it('names a stable activity id for the unit-test slot', () => {
    expect(unitTestActivityId('A1-4')).toBe('course_unit_test_A1-4');
  });
});

describe('the gate', () => {
  it('opens only the first unit for a new learner, and advances none', () => {
    const gate = openUnits({ units: UNITS, completed: [], passedUnitIds: [] });
    expect([...gate.open]).toEqual(['A1-1']);
    expect([...gate.advanced]).toEqual([]);
  });

  // BOTH HALVES, OR NEITHER OPENS THE NEXT UNIT.
  it('does not open the next unit on the test alone', () => {
    expect([...openUnits({ units: UNITS, completed: [], passedUnitIds: ['A1-1'] }).open]).toEqual([
      'A1-1',
    ]);
  });

  it('does not open the next unit on production alone', () => {
    expect([
      ...openUnits({ units: UNITS, completed: [], passedUnitIds: [], producedUnitIds: ['A1-1'] })
        .open,
    ]).toEqual(['A1-1']);
  });

  it('opens the next unit on the test AND production', () => {
    expect([
      ...openUnits({
        units: UNITS,
        completed: [],
        passedUnitIds: ['A1-1'],
        producedUnitIds: ['A1-1'],
      }).open,
    ]).toEqual(['A1-1', 'A1-2']);
  });

  // ESCAPE HATCH 1: a unit whose test could not be assembled from a stale payload.
  // It stands in for the ACCURACY half only; production is still owed.
  it('accepts an unassemblable test in place of the accuracy half', () => {
    expect([
      ...openUnits({
        units: UNITS,
        completed: [],
        passedUnitIds: [],
        producedUnitIds: ['A1-1'],
        insufficientUnitIds: ['A1-1'],
      }).open,
    ]).toEqual(['A1-1', 'A1-2']);
  });

  // ESCAPE HATCH 2: the learner produced and the evaluator refused.
  it('accepts a refused evaluator in place of the production half', () => {
    expect([
      ...openUnits({
        units: UNITS,
        completed: [],
        passedUnitIds: ['A1-1'],
        productionBlockedUnitIds: ['A1-1'],
      }).open,
    ]).toEqual(['A1-1', 'A1-2']);
  });

  // THE READ-THROUGH HATCH IS GONE (increment 4), and this pins its absence. It let
  // anyone skip both halves by paging through five lessons, which is the gate quietly
  // not existing; the test is re-takeable and the library is open, so there was never
  // a dead end for it to prevent.
  it('does NOT open the next unit just because every lesson is read', () => {
    const read = UNITS[0]!.lessons.map((l) => l.id);
    expect([...openUnits({ units: UNITS, completed: read, passedUnitIds: [] }).open]).toEqual([
      'A1-1',
    ]);
    writeCurriculumSpine(SPINE);
    readUnit(0);
    expect(nextCourseStep()?.kind).toBe('unit-test');
  });

  it('never locks the first unit, whatever the store says', () => {
    expect(openUnits({ units: UNITS, completed: [], passedUnitIds: [] }).open.has('A1-1')).toBe(
      true,
    );
  });

  it('stops at the first unit that does not advance', () => {
    const gate = openUnits({
      units: UNITS,
      completed: [],
      // A pass three units ahead cannot open the ones before it.
      passedUnitIds: ['A1-3'],
      producedUnitIds: ['A1-3'],
    });
    expect([...gate.open]).toEqual(['A1-1']);
    expect([...gate.advanced]).toEqual([]);
  });

  it('opens nothing from an empty course', () => {
    const gate = openUnits({ units: [], completed: [], passedUnitIds: [] });
    expect([...gate.open]).toEqual([]);
    expect([...gate.advanced]).toEqual([]);
  });
});

// ── THE SYNTHETIC CONTROL FOR THE LOCKED CLAUSE ─────────────────────────────
//
// `if (row.state === 'locked') break;` is UNREACHABLE through storage, and it
// survived its own mutation for that reason: `openUnits` stops the chain at the
// first unit that does not advance, and a unit that does not advance has an unread
// lesson, on which the walk returns. The clause stays anyway — an invariant proved
// by reasoning across two modules is what breaks when one of them changes — so it
// gets a control that exercises it with fabricated rows.
describe('a locked row stops the walk (the clause storage cannot reach)', () => {
  function row(over: Partial<UnitProgress> & { index: number }): UnitProgress {
    const unit = UNITS[over.index - 1]!;
    return {
      unit,
      done: 0,
      total: unit.lessons.length,
      tested: false,
      short: false,
      state: 'upcoming',
      ...over,
    } as UnitProgress;
  }

  it('serves nothing when the first untested row is locked', () => {
    const step = pickCourseStep({
      rows: [row({ index: 1, state: 'locked' }), row({ index: 2, state: 'current' })],
      completed: new Set(),
      unitCount: 36,
    });
    expect(step, 'a locked unit must never be served').toBeNull();
  });

  it('walks past a mastered row to reach an open one', () => {
    const step = pickCourseStep({
      rows: [
        row({ index: 1, tested: true, state: 'mastered' }),
        row({ index: 2, state: 'current' }),
      ],
      completed: new Set(),
      unitCount: 36,
    });
    expect(step?.unit.id).toBe('A1-2');
  });

  it('stops at a locked row even when a later one is open', () => {
    const step = pickCourseStep({
      rows: [
        row({ index: 1, tested: true, state: 'mastered' }),
        row({ index: 2, state: 'locked' }),
        row({ index: 3, state: 'current' }),
      ],
      completed: new Set(),
      unitCount: 36,
    });
    expect(step).toBeNull();
  });
});

describe('the lock is never silent, and says what it does not cover', () => {
  it('names the unit the course is waiting on, and the library as still open', () => {
    writeCurriculumSpine(SPINE);
    const state = readCourseState();
    const locked = state.rows.find((r) => r.state === 'locked')!;
    const previous = state.rows[locked.unit.index - 2]!.unit;
    const reason = lockReason(locked, previous)!;
    expect(reason).toMatch(new RegExp(`after Unit ${previous.index}`));
    expect(reason).toMatch(/Learning Center/);
  });

  it('says nothing for a unit that is open', () => {
    writeCurriculumSpine(SPINE);
    const state = readCourseState();
    expect(lockReason(state.rows[0]!, null)).toBeNull();
  });

  it('offers no test on a locked unit', () => {
    writeCurriculumSpine(SPINE);
    const state = readCourseState();
    const locked = state.rows.find((r) => r.state === 'locked')!;
    expect(unitTestOffer(locked)).toBe('none');
  });
});

describe('one path for everyone', () => {
  // The owner directive, asserted through the real resolver: a learner the old
  // sequencer would have started at B1 lesson 1 starts at Unit 1 like anybody else.
  // Nothing in this module can read a CEFR level, so this holds by construction —
  // the assertion is here because that is the behaviour the directive names.
  it('starts a learner with a high CEFR at Unit 1', () => {
    writeCurriculumSpine(SPINE);
    localStorage.setItem('nh_level', 'C1');
    localStorage.setItem(
      'nh_cefr_certifications',
      JSON.stringify({ passes: { A1: {}, A2: {}, B1: {}, B2: {}, C1: {} } }),
    );
    const step = nextCourseStep();
    expect(step?.unit.id).toBe('A1-1');
    expect(step && step.kind === 'lesson' && step.lesson.id).toBe('alphabet');
  });
});

describe('the session handoff', () => {
  it('is not written by the resolver — the slot builder owns it', () => {
    writeCurriculumSpine(SPINE);
    readUnit(0);
    expect(nextCourseStep()?.kind).toBe('unit-test');
    expect(readUnitTestRequest()).toBeNull();
  });
});

describe('degradation', () => {
  it('survives an unreadable spine cache', () => {
    localStorage.setItem('nh_curriculum_spine', 'not json');
    expect(nextCourseStep()).toBeNull();
  });

  it('survives an unreadable unit store', () => {
    writeCurriculumSpine(SPINE);
    localStorage.setItem('nh_course_units', '{{{');
    expect(nextCourseStep()?.unit.id).toBe('A1-1');
  });

  it('keeps walking past a unit that can offer nothing', () => {
    writeCurriculumSpine(SPINE);
    // Read through unit 1, mark its test unassemblable AND its production graded:
    // the gate lets the course past it, and the walk must not stop on a unit with no
    // unread lesson, no servable test and nothing owed.
    readUnit(0);
    markUnitTestInsufficient('A1-1');
    produced('A1-1');
    const step = nextCourseStep();
    expect(step?.unit.id).toBe('A1-2');
  });
});
