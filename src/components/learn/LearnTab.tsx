import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import CharacterPortrait from '../family/CharacterPortrait';
import {
  readCourseState,
  nextCourseStep,
  recommendedCourseSteps,
  type CourseStep,
} from '../../lib/courseStep';
import { mapTestOffer } from '../../lib/courseUnits';
import { requestUnitTest, requestLevelReview } from '../../lib/courseUnitProgress';
import { requestUnitProduction } from '../../lib/unitProductionRequest';
import { CURRICULUM_SPINE_EVENT } from '../../lib/curriculumProgress';

interface LearnTabProps {
  icons: Record<string, any>;
  sCurEx: (ex: string) => void;
  sh: (arr: any[]) => any[];
  sLt: (t: any) => void;
  sLi: (items: any[]) => void;
  sLx: (x: number) => void;
  sLs: (s: number) => void;
  sLp: (p: string) => void;
  sLa: (a: boolean) => void;
  sLsl: (sl: number) => void;
  sGl: (l: any) => void;
  sGp: (p: string) => void;
  sGx: (x: number) => void;
  sGs: (s: number) => void;
  sGa: (a: boolean) => void;
  sGsl: (sl: number) => void;
  launchAnimLesson: (lesson: any) => void;
}

// Q-4: Removed dead state setters — target screens manage their own init state.
/** One sentence and one button for a course step that is not a lesson. */
function describeStep(
  step: CourseStep,
  recommended: boolean,
): { step: CourseStep; text: string; button: string } {
  const tag = recommended ? 'Recommended: ' : 'Next: ';
  switch (step.kind) {
    case 'unit-test':
      return {
        step,
        text: `${tag}the Unit ${step.unit.index} test — a mixed check of all five lessons that makes them stick.`,
        button: `Take the Unit ${step.unit.index} test →`,
      };
    case 'production':
      return {
        step,
        text: `${tag}the Unit ${step.unit.index} ${step.owed === 'write' ? 'written' : 'spoken'} task — use what you learned. It never blocks the next unit.`,
        button: `Do the ${step.owed === 'write' ? 'written' : 'spoken'} task →`,
      };
    case 'recheck':
      return {
        step,
        text: `Next: the Unit ${step.unit.index} check-up — see whether it stayed.`,
        button: `Take the Unit ${step.unit.index} check-up →`,
      };
    case 'level-review':
      return {
        step,
        text: `Next: the ${step.level} review — all the level’s units mixed.`,
        button: `Start the ${step.level} review →`,
      };
    default:
      return { step, text: step.reason, button: 'Continue →' };
  }
}

export default function LearnTab({
  icons,
  sCurEx,
  sh,
  sLt,
  sLi,
  sLx,
  sLs,
  sLp,
  sLa,
  sLsl,
  sGl,
  sGp,
  sGx,
  sGs,
  sGa,
  sGsl,
  launchAnimLesson,
}: LearnTabProps) {
  const { setScr } = useApp();
  // The course data lands a moment after first paint on a fresh load; re-read when it does, or
  // the card below would stay absent until something else happened to re-render this tab.
  const [, setSpineTick] = useState(0);
  useEffect(() => {
    const bump = () => setSpineTick((n) => n + 1);
    window.addEventListener(CURRICULUM_SPINE_EVENT, bump);
    return () => window.removeEventListener(CURRICULUM_SPINE_EVENT, bump);
  }, []);
  // The unit the learner stands on, and whether the course offers its test. Read from the one
  // view the map and the session read; with no spine (or any failure) the card simply is absent.
  const courseOffer = (() => {
    try {
      const s = readCourseState();
      const cur = s.rows.find((r) => r.unit.index === s.currentIndex);
      if (!cur) return null;
      const offer = mapTestOffer(cur);
      return offer === 'none' ? null : { id: cur.unit.id, index: cur.unit.index, offer };
    } catch {
      return null;
    }
  })();
  // Position in the course for the hero line: the unit the learner stands on, out of all units.
  // Nothing is rendered when the course data is absent — never "Unit 0 of 0".
  const coursePos = (() => {
    try {
      const s = readCourseState();
      if (!s.rows.length || s.currentIndex == null) return null;
      return { n: s.currentIndex, of: s.rows.length };
    } catch {
      return null;
    }
  })();
  // The lesson the course serves next — shown under "Your course" with its own test-out.
  const courseLesson = (() => {
    try {
      const step = nextCourseStep({ skipRechecks: true });
      return step && step.kind === 'lesson'
        ? { id: step.lesson.id, title: step.lesson.title || step.lesson.id, unit: step.unit.index }
        : null;
    } catch {
      return null;
    }
  })();
  // WHAT THE COURSE ASKS WHEN THE NEXT STEP IS NOT A LESSON (owner, 2026-11-19: "I see NO
  // test-out anywhere"): a due check-up, a unit test, owed production, a level review. One
  // sentence and a button — never a tab that has nothing to press. The first RECOMMENDED
  // step (a unit test for a unit advanced by its lessons, owed production) is offered too
  // when a lesson is next; recommended steps never gate.
  const courseOther: { step: CourseStep; text: string; button: string } | null = (() => {
    try {
      const step = nextCourseStep({ skipRechecks: false });
      const pick = step && step.kind !== 'lesson' ? step : (recommendedCourseSteps()[0] ?? null);
      if (!pick) return null;
      return describeStep(pick, step?.kind === 'lesson');
    } catch {
      return null;
    }
  })();
  const launchStep = (step: CourseStep) => {
    if (step.kind === 'unit-test') requestUnitTest(step.unit.id);
    else if (step.kind === 'recheck') requestUnitTest(step.unit.id, 'recheck');
    else if (step.kind === 'production') requestUnitProduction(step.unit.id, step.owed);
    else if (step.kind === 'level-review') requestLevelReview(step.level);
    else return;
    setScr(
      step.kind === 'unit-test' || step.kind === 'recheck'
        ? 'unittest'
        : step.kind === 'production'
          ? 'unitproduction'
          : 'levelreview',
    );
  };
  return (
    <React.Fragment>
      {/* ── TEČAJ HERO — hosted by Profesor Kovač ──────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(150deg,#0e7490 0%,#155e75 55%,#164e63 100%)',
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 20,
          position: 'relative',
          boxShadow: '0 8px 32px rgba(14,116,144,.32)',
        }}
      >
        <div
          style={{
            height: 3,
            background: 'linear-gradient(90deg,#D40030 0 33%,#fff 33% 66%,#0e7490 66%)',
          }}
        />
        <div className="tab-hero-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <div
              style={{
                flexShrink: 0,
                borderRadius: '50%',
                padding: 3,
                background: 'linear-gradient(135deg,#C8980A,#e0b84a)',
                boxShadow: '0 2px 10px rgba(0,0,0,.25)',
                display: 'flex',
              }}
            >
              <CharacterPortrait name="kovac" size={56} title="Profesor Kovač" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  color: 'rgba(255,255,255,.7)',
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  marginBottom: 3,
                }}
              >
                Profesor Kovač · tvoj učitelj
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1.1,
                  fontFamily: "'Playfair Display',serif",
                }}
              >
                Tečaj
              </div>
              {coursePos && (
                <div
                  data-testid="learn-course-position"
                  style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', marginTop: 3 }}
                >
                  Unit {coursePos.n} of {coursePos.of}
                </div>
              )}
            </div>
            <button
              onClick={() => setScr('grammar-ref')}
              aria-label="Grammar reference"
              style={{
                background: 'rgba(255,255,255,.15)',
                border: '1px solid rgba(255,255,255,.25)',
                borderRadius: 10,
                padding: '6px 10px',
                fontSize: 12,
                fontWeight: 700,
                color: '#fff',
                cursor: 'pointer',
                fontFamily: "'Outfit',sans-serif",
                flexShrink: 0,
              }}
            >
              📖 Ref
            </button>
          </div>
          {/* CEFR progress bar */}
          <div
            style={{
              height: 4,
              borderRadius: 2,
              background: 'rgba(255,255,255,.15)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: 2,
                background: 'rgba(255,255,255,.6)',
                width: `${coursePos ? Math.round(((coursePos.n - 1) / coursePos.of) * 100) : 0}%`,
                transition: 'width .6s',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── YOUR COURSE ──────────────────────────────────────────────────
          The structural door, and it sits ABOVE the lookup on purpose: the
          owner's report was that the app "seems to bounce around" with no sense
          of progress through a syllabus. The course map is the answer to "where
          am I", so it is the first thing under the hero. */}
      <button
        onClick={() => setScr('coursemap')}
        data-testid="open-course-map"
        aria-label="Open your course map"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '13px 16px',
          marginBottom: 10,
          borderRadius: 14,
          border: '1.5px solid var(--card-b)',
          background: 'var(--card)',
          cursor: 'pointer',
          fontFamily: "'Outfit',sans-serif",
          boxShadow: '0 2px 10px rgba(0,0,0,.05)',
        }}
      >
        <span style={{ fontSize: 17, flexShrink: 0 }}>🗺️</span>
        <span style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
          <span
            style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}
          >
            Your course
          </span>
          <span style={{ display: 'block', fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
            Every unit from A1 to C1 — see exactly where you are
          </span>
        </span>
        <span style={{ fontSize: 15, color: 'var(--subtext)', flexShrink: 0 }}>→</span>
      </button>

      {/* THE TEST-OUT, ON THE CARD ITSELF (owner report, 2026-11-14: "why under the Učenje tab in
          courses is there no ability to test out?"). It existed — inside the current unit, on the
          course map, behind a tap and an expanded row — and nothing on this tab said so. The
          learner stands on exactly one unit, so that is the one offered; passing opens the next. */}
      {courseLesson && (
        <div
          data-testid="learn-course-lesson"
          style={{
            padding: '12px 16px',
            marginTop: -2,
            marginBottom: 10,
            borderRadius: 14,
            border: '1.5px solid var(--card-b)',
            background: 'var(--card)',
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          <span
            style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}
          >
            Next lesson: {courseLesson.title}
          </span>
          <span style={{ display: 'block', fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
            Unit {courseLesson.unit} — pass the lesson check to move to the next lesson
          </span>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            <button
              data-testid="learn-lesson-start"
              onClick={() => {
                void launchAnimLesson(courseLesson.id);
              }}
              style={{
                padding: '9px 14px',
                borderRadius: 10,
                border: '1px solid var(--card-b)',
                background: 'var(--bar-bg)',
                color: 'var(--heading)',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Start lesson →
            </button>
            <button
              data-testid="learn-lesson-testout"
              onClick={() => {
                try {
                  sessionStorage.setItem('nh_lesson_testout', courseLesson.id);
                } catch {
                  /* the lesson still opens; the button on its first screen remains */
                }
                void launchAnimLesson(courseLesson.id);
              }}
              style={{
                padding: '9px 14px',
                borderRadius: 10,
                border: '1px solid var(--card-b)',
                background: 'var(--bar-bg)',
                color: 'var(--heading)',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Test out of this lesson →
            </button>
          </div>
        </div>
      )}

      {courseOther && (
        <div
          data-testid="learn-course-next"
          data-kind={courseOther.step.kind}
          style={{
            padding: '12px 16px',
            marginTop: -2,
            marginBottom: 10,
            borderRadius: 14,
            border: '1.5px solid var(--card-b)',
            background: 'var(--card)',
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          <span
            style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--heading)' }}
          >
            {courseOther.text}
          </span>
          <button
            data-testid="learn-course-next-go"
            onClick={() => launchStep(courseOther.step)}
            style={{
              marginTop: 10,
              padding: '9px 14px',
              borderRadius: 10,
              border: '1px solid var(--card-b)',
              background: 'var(--bar-bg)',
              color: 'var(--heading)',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {courseOther.button}
          </button>
        </div>
      )}

      {/* TEST OUT OF ANY LESSON OR UNIT, ALWAYS REACHABLE (owner, 2026-11-19: "You should be
          able to test out of any lesson at any time"). Every state of the course carries this
          entry; the map holds a test-out on every lesson and every unit. */}
      <button
        data-testid="learn-testout-any"
        onClick={() => setScr('coursemap')}
        style={{
          width: '100%',
          display: 'block',
          textAlign: 'left',
          padding: '12px 16px',
          marginTop: -2,
          marginBottom: 10,
          borderRadius: 14,
          border: '1.5px solid var(--card-b)',
          background: 'var(--card)',
          cursor: 'pointer',
          fontFamily: "'Outfit',sans-serif",
        }}
      >
        <span style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}>
          Test out of any lesson or unit →
        </span>
        <span style={{ display: 'block', fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
          Already know it? Pass its check and move on — open the course map
        </span>
      </button>

      {courseOffer && (
        <button
          onClick={() => {
            requestUnitTest(courseOffer.id);
            setScr('unittest');
          }}
          data-testid="learn-unit-testout"
          data-offer={courseOffer.offer}
          style={{
            width: '100%',
            display: 'block',
            textAlign: 'left',
            padding: '12px 16px',
            marginTop: -2,
            marginBottom: 10,
            borderRadius: 14,
            border: '1.5px solid var(--card-b)',
            background: 'var(--card)',
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          <span
            style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}
          >
            {courseOffer.offer === 'primary'
              ? `Take the Unit ${courseOffer.index} test (recommended) →`
              : `Test out of Unit ${courseOffer.index} →`}
          </span>
          <span style={{ display: 'block', fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
            {courseOffer.offer === 'primary'
              ? 'A mixed test of all five lessons — the best proof it stuck'
              : 'Already know it? Pass the unit test and the next unit opens'}
          </span>
        </button>
      )}

      {/* ── LOOK SOMETHING UP ────────────────────────────────────────────
          The lookup door. Everything else on this tab answers "what next"; this
          is the only surface that answers "teach me X, now" — so it sits above
          the path rather than behind a chip. Rendered as a search field because
          that is what it does; it navigates rather than filtering in place. */}
      <button
        onClick={() => setScr('learning_center')}
        data-testid="open-learning-center"
        aria-label="Open the Learning Center to look anything up"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '13px 16px',
          marginBottom: 18,
          borderRadius: 14,
          border: '1.5px solid var(--card-b)',
          background: 'var(--card)',
          cursor: 'pointer',
          fontFamily: "'Outfit',sans-serif",
          boxShadow: '0 2px 10px rgba(0,0,0,.05)',
        }}
      >
        <span style={{ fontSize: 17, flexShrink: 0 }}>🔍</span>
        <span style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
          <span
            style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--heading)' }}
          >
            Look something up
          </span>
          <span style={{ display: 'block', fontSize: 12, color: 'var(--subtext)', marginTop: 1 }}>
            Padeži, verbs, any lesson — the whole syllabus, any time
          </span>
        </span>
        <span style={{ fontSize: 15, color: 'var(--subtext)', flexShrink: 0 }}>→</span>
      </button>
    </React.Fragment>
  );
}
