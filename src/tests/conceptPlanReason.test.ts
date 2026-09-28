// src/tests/conceptPlanReason.test.ts — the plan line names the day's concept
// (Daily Session redesign, increment 5; G4: the one-subject shape is visible).
//
// Through the REAL builder and the REAL plan constructor: a lesson day's plan line
// says which concept, a corrective day says "again", and every other day shape keeps
// the ledger sentence (or none) — the honesty rule of `planReasonHonest.test.ts`.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', async (orig) => ({ ...(await orig<object>()), getDueReviews: () => [] }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

import { buildSessionActivities } from '../hooks/useDailySession';
import { newSession } from '../lib/dailySessionStore';
import { conceptPlanReason, practiceReason, correctiveDrillReason } from '../lib/activityReason';
import { recordCheckAttempt } from '../lib/lessonAttempts';
import { readCourseState } from '../lib/courseStep';
import { seedCourseAt, readWholeUnit, REAL_SPINE } from './helpers/courseSeed';
import { writeCurriculumSpine } from '../lib/curriculumProgress';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the plan line on each day shape', () => {
  it('a lesson day: "Today: <lesson> — learn it, drill it, then use it."', () => {
    // The raw spine data carries no titles (the endpoint adds them); a titled spine
    // names the lesson, an untitled one names the shape without a nonsense name.
    seedCourseAt(1);
    const untitled = newSession('A1', buildSessionActivities('A1'), []);
    expect(untitled.planReason).toBe('Today’s lesson — learn it, drill it, then use it.');
    localStorage.clear();
    sessionStorage.clear();
    seedCourseAt(1);
    writeCurriculumSpine(REAL_SPINE.map((e) => ({ ...e, title: `Lesson ${e.id}` })));
    const acts = buildSessionActivities('A1');
    const lessonId = readCourseState().units[0]!.lessons[0]!.id;
    const s = newSession('A1', acts, []);
    expect(s.planReason).toBe(`Today: Lesson ${lessonId} — learn it, drill it, then use it.`);
    // The coupled drill names what it drills.
    const drill = acts.find((a) => a.id.startsWith('curriculum_practice_'));
    if (drill) expect(drill.reason).toMatch(/^Practising .+ — what today’s lesson taught\.$/);
  });

  it('a corrective day: "…, again — a shorter re-teach, then the check."', () => {
    seedCourseAt(1);
    const lessonId = readCourseState().units[0]!.lessons[0]!.id;
    recordCheckAttempt(lessonId, { score: 2, total: 6, passed: false, kind: 'lesson', missed: [] });
    const acts = buildSessionActivities('A1');
    const s = newSession('A1', acts, []);
    // The raw spine has no titles, so the generic form; a titled spine names the lesson.
    expect(s.planReason).toBe('Today’s lesson, again — a shorter re-teach, then the check.');
    const drill = acts.find((a) => a.id.startsWith('curriculum_practice_'));
    if (drill) expect(drill.reason).toMatch(/^An easier drill on .+ first\.$/);
  });

  it('a unit-test day keeps the ledger sentence (or none) — never a concept line', () => {
    seedCourseAt(1);
    readWholeUnit(1);
    const acts = buildSessionActivities('A1');
    expect(acts[0]!.screen).toBe('unittest');
    const s = newSession('A1', acts, []);
    expect(s.planReason ?? '').not.toMatch(/^Today: /);
  });

  it('the pure rule: only a leading day-lesson slot produces the line', () => {
    expect(conceptPlanReason([])).toBeNull();
    expect(
      conceptPlanReason([
        { id: 'course_unit_test_A1-1', screen: 'unittest', label: 'Unit 1 test' },
      ]),
    ).toBeNull();
    expect(
      conceptPlanReason([
        { id: 'curriculum_practice_genitive', screen: 'genitivedrill', label: 'Genitive' },
      ]),
    ).toBeNull();
    expect(
      conceptPlanReason([{ id: 'curriculum_cases', screen: 'animlesson', label: 'Cases' }]),
    ).toBe('Today: Cases — learn it, drill it, then use it.');
    expect(
      conceptPlanReason([{ id: 'curriculum_cases', screen: 'animlesson', label: 'Again: Cases' }]),
    ).toBe('Today: Cases, again — a shorter re-teach, then the check.');
  });

  it('the drill reasons name the category in the app’s own words', () => {
    expect(practiceReason('genitive')).toMatch(
      /^Practising .*genitive.* — what today’s lesson taught\.$/i,
    );
    expect(correctiveDrillReason('genitive')).toMatch(/^An easier drill on .*genitive.* first\.$/i);
    expect(correctiveDrillReason()).toBe('An easier drill on the same point first.');
  });
});
