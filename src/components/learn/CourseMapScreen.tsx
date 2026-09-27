// src/components/learn/CourseMapScreen.tsx
//
// THE COURSE MAP (Step 3, 2026-09-26).
//
// The owner's report, verbatim: the app "seems to bounce around, never really
// capturing if the user is grasping subjects… We need to make this much more
// like a course." This is the first thing that change needs and the app has
// never had: a surface where a learner can see the whole course, and where in it
// they are.
//
// WHAT IT CLAIMS, AND WHAT IT REFUSES TO CLAIM
// -------------------------------------------
// Everything on this screen comes from real lesson completions. There is no
// `locked` badge, because this increment does not gate — showing a padlock for a
// rule the app does not enforce is NEVER-DO 13 in the other direction. There is
// no `mastered` badge either: mastery needs the unit test and the spaced
// re-checks, which come next, and a tick that means "you read five lessons"
// must not be dressed up as "you have mastered this".
//
// EVERY UNIT IS OPEN, on purpose, for now. `launchAnimLesson` has always been
// ungated — the Learning Center's header records that as what makes "look
// anything up, at any time" true — so the map inherits it rather than inventing
// a restriction one increment early. When the unit gate lands, a tap ahead of
// the learner's position gets a reason, not silence.
//
// A COUNT IS A CLAIM TOO. With no spine there are no units, and rendering
// "0 of 0 units" would be a claim about a learner's course made out of a failed
// fetch. `courseMapBlock` gives the three honest answers instead.
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { H } from '../../data';
import {
  readCurriculumSpine,
  readCompletedLessons,
  CURRICULUM_SPINE_EVENT,
} from '../../lib/curriculumProgress';
import { getCurriculumSpine } from '../../lib/contentClient';
import type { CurriculumEntry } from '../../lib/curriculum';
import {
  courseMapBlock,
  unitTestOffer,
  lockReason,
  COURSE_MAP_COPY,
  type CourseMapBlock,
  type CourseUnit,
  type UnitProgress,
} from '../../lib/courseUnits';
import { readCourseState } from '../../lib/courseStep';
import { requestUnitTest, readCourseUnits, unitRecord } from '../../lib/courseUnitProgress';
import { requestUnitProduction } from '../../lib/unitProductionRequest';
import { productionOwed } from '../../lib/courseUnits';
import { COURSE_UNIT_TITLES } from '../../data/courseUnitTitles';
import { accentInk, accentFill } from '../../lib/accentInk';

const LEVEL_COLOR: Record<string, string> = {
  A1: '#0e7490',
  A2: '#0f766e',
  B1: '#4338ca',
  B2: '#7c3aed',
  C1: '#b45309',
  C2: '#be123c',
};

interface CourseMapScreenProps {
  goBack: () => void;
  /** Opens a lesson. Resolves false when it could not be opened — see below. */
  onOpenLesson: (lessonId: string) => Promise<boolean>;
  /** Navigates to a screen — used to open the unit test. */
  setScr: (screen: string) => void;
}

export default function CourseMapScreen({ goBack, onOpenLesson, setScr }: CourseMapScreenProps) {
  const [spine, setSpine] = useState<CurriculumEntry[]>(() => readCurriculumSpine());
  const [fetchState, setFetchState] = useState<'pending' | 'failed' | 'settled'>(() =>
    readCurriculumSpine().length > 0 ? 'settled' : 'pending',
  );
  const [completed, setCompleted] = useState<ReadonlySet<string>>(() => readCompletedLessons());
  // Bumped after a lesson opens, so the gate view recomputes from fresh storage.
  const [store, setStore] = useState(() => readCourseUnits());
  const [openUnit, setOpenUnit] = useState<string | null>(null);
  const [launchFailed, setLaunchFailed] = useState<string | null>(null);

  // THE SPINE IS FETCHED HERE RATHER THAN WAITED FOR. App.tsx warms it
  // fire-and-forget and swallows the failure by design, so a screen that only
  // listened would have no way to tell "still coming" from "never arriving" —
  // the two states whose conflation this screen exists not to repeat. Asking for
  // it directly gives all three answers, and a success writes the mirror (and
  // fires CURRICULUM_SPINE_EVENT), which the daily plan's retry also wants.
  useEffect(() => {
    if (spine.length > 0) return;
    let live = true;
    getCurriculumSpine()
      .then((s) => {
        if (!live) return;
        if (Array.isArray(s) && s.length > 0) {
          setSpine(s);
          setFetchState('settled');
        } else {
          setFetchState('settled');
        }
      })
      .catch(() => {
        if (live) setFetchState('failed');
      });
    return () => {
      live = false;
    };
  }, [spine.length]);

  // Another surface may write the spine while this one is open.
  useEffect(() => {
    const onSpine = () => {
      const s = readCurriculumSpine();
      if (s.length > 0) {
        setSpine(s);
        setFetchState('settled');
      }
    };
    window.addEventListener(CURRICULUM_SPINE_EVENT, onSpine);
    return () => window.removeEventListener(CURRICULUM_SPINE_EVENT, onSpine);
  }, []);

  // THE SAME VIEW THE SESSION READS. Computing the gate a second time here is how
  // the map and Home came to disagree in the first place, so the map asks
  // `readCourseState` — the one function — and only supplies the authored names,
  // which the session path deliberately does not carry (they live in src/data,
  // which `manualChunks` groups with the whole content library).
  const state = useMemo(
    () => readCourseState(COURSE_UNIT_TITLES),
    // `readCourseState` reads STORAGE, so its inputs are invisible to the linter —
    // it sees no argument and calls these dependencies unnecessary. They are the
    // recompute triggers: `store`, `completed` and `spine` are this screen's snapshots
    // of the same three keys, re-read after a lesson opens or when the spine lands.
    // Dropping `store`/`completed` would leave the map showing a stale gate after the
    // learner finished something; dropping `spine` left the map EMPTY when the spine
    // arrived mid-visit, which a test caught.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, completed, spine],
  );
  const units = state.units;
  // THE COUNTS COME FROM THE SHARED STATE, NOT FROM A SECOND DERIVATION HERE. This
  // screen used to build them itself and drifted twice in one day — once counting the
  // unit test as mastery while the row ladder counted the whole bar, once counting the
  // bar while the ladder counted retention. Each time it printed a figure that
  // contradicted a row beside it.
  const progress = state.progress;
  const block: CourseMapBlock | null = courseMapBlock(fetchState, units.length);

  // Open the current unit by default, and re-open it if the position moves.
  useEffect(() => {
    if (progress.currentIndex == null) return;
    const cur = progress.units.find((r) => r.unit.index === progress.currentIndex);
    if (cur) setOpenUnit((prev) => prev ?? cur.unit.id);
  }, [progress.currentIndex, progress.units]);

  const open = useCallback(
    async (lessonId: string) => {
      setLaunchFailed(null);
      const ok = await onOpenLesson(lessonId);
      if (!ok) setLaunchFailed(lessonId);
      else {
        setCompleted(readCompletedLessons());
        setStore(readCourseUnits());
      }
    },
    [onOpenLesson],
  );

  const owedFor = useCallback(
    (unitId: string) => {
      const rec = unitRecord(unitId, store);
      return productionOwed({
        unitId,
        producedUnitIds: state.produced,
        wrote: !!rec?.production?.wroteAt,
        spoke: !!rec?.production?.spokeAt,
        blocked: state.blocked.has(unitId),
      });
    },
    [store, state],
  );

  const pct =
    progress.lessonsTotal > 0
      ? Math.round((progress.lessonsDone / progress.lessonsTotal) * 100)
      : 0;

  if (block) {
    return (
      <div>
        {H('Your Course', 'The whole syllabus, in units', goBack)}
        <div
          data-testid="course-map-block"
          data-block={block}
          role="status"
          style={{
            padding: '14px 16px',
            borderRadius: 12,
            background: block === 'loading' ? 'rgba(0,0,0,.05)' : 'rgba(204,0,0,.08)',
            border:
              block === 'loading' ? '1px solid rgba(0,0,0,.08)' : '1px solid rgba(204,0,0,.35)',
            fontSize: 13.5,
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          {COURSE_MAP_COPY[block]}
        </div>
      </div>
    );
  }

  return (
    <div data-testid="course-map">
      {H(
        'Your Course',
        progress.currentIndex
          ? `Unit ${progress.currentIndex} of ${progress.unitsTotal}`
          : `All ${progress.unitsTotal} units complete`,
        goBack,
      )}

      {/* ── WHERE YOU ARE, over the whole course ───────────────────────── */}
      <div
        style={{
          padding: 16,
          borderRadius: 16,
          background: 'var(--card)',
          border: '1.5px solid var(--card-b)',
          marginBottom: 18,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 8,
            justifyContent: 'space-between',
          }}
        >
          <span
            data-testid="course-units-mastered"
            style={{ fontSize: 13, fontWeight: 800, color: 'var(--heading)' }}
          >
            {progress.unitsMastered} of {progress.unitsTotal} units mastered
          </span>
          <span
            data-testid="course-lessons-count"
            style={{ fontSize: 12, color: 'var(--subtext)' }}
          >
            {progress.lessonsDone} / {progress.lessonsTotal} lessons
          </span>
        </div>
        <div
          style={{
            height: 6,
            borderRadius: 3,
            background: 'rgba(0,0,0,.08)',
            overflow: 'hidden',
            marginTop: 10,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              borderRadius: 3,
              background: 'linear-gradient(90deg,#0e7490,#4338ca)',
              transition: 'width .5s',
            }}
          />
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--subtext)', marginTop: 8, lineHeight: 1.5 }}>
          Every learner takes the same path, from Unit 1. Read a unit’s five lessons, then pass its
          test — the test mixes questions from all five, which is harder than each check on its own
          and a far better sign that it has stuck.
        </div>
      </div>

      {launchFailed && (
        <div
          data-testid="course-open-failed"
          role="status"
          style={{
            padding: '12px 14px',
            borderRadius: 12,
            background: 'rgba(204,0,0,.08)',
            border: '1px solid rgba(204,0,0,.35)',
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 16,
            lineHeight: 1.5,
          }}
        >
          That lesson could not be opened. Check your connection and try again.
        </div>
      )}

      {/* ── THE UNITS ──────────────────────────────────────────────────── */}
      {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((level) => {
        const rows = progress.units.filter((r) => r.unit.level === level);
        if (rows.length === 0) return null;
        return (
          <div key={level} style={{ marginBottom: 20 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 10,
                paddingLeft: 2,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '.12em',
                  color: LEVEL_COLOR[level],
                  background: `${LEVEL_COLOR[level]}1a`,
                  borderRadius: 6,
                  padding: '3px 7px',
                }}
              >
                {level}
              </span>
              <span style={{ fontSize: 11.5, color: 'var(--subtext)', fontWeight: 700 }}>
                {rows.filter((r) => r.state === 'mastered').length} of {rows.length} mastered
              </span>
            </div>
            {rows.map((row) => (
              <UnitRow
                key={row.unit.id}
                previous={progress.units[row.unit.index - 2]?.unit ?? null}
                row={row}
                color={LEVEL_COLOR[level] || '#0e7490'}
                expanded={openUnit === row.unit.id}
                onToggle={() => setOpenUnit(openUnit === row.unit.id ? null : row.unit.id)}
                completed={completed}
                onOpenLesson={open}
                onTakeTest={() => {
                  requestUnitTest(row.unit.id);
                  setScr('unittest');
                }}
                onProduce={(kind) => {
                  requestUnitProduction(row.unit.id, kind);
                  setScr('unitproduction');
                }}
                onRecheck={() => {
                  requestUnitTest(row.unit.id, 'recheck');
                  setScr('unittest');
                }}
                recheckDue={state.dueRechecks.includes(row.unit.id)}
                owedFor={owedFor}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function UnitRow({
  row,
  previous,
  color,
  expanded,
  onToggle,
  completed,
  onOpenLesson,
  onTakeTest,
  onProduce,
  onRecheck,
  recheckDue,
  owedFor,
}: {
  row: UnitProgress;
  previous: CourseUnit | null;
  color: string;
  expanded: boolean;
  onToggle: () => void;
  completed: ReadonlySet<string>;
  onOpenLesson: (lessonId: string) => void;
  onTakeTest: () => void;
  onProduce: (kind: 'write' | 'speak') => void;
  onRecheck: () => void;
  recheckDue: boolean;
  owedFor: (unitId: string) => { write: boolean; speak: boolean } | null;
}) {
  const { unit, done, total, state } = row;
  const offer = unitTestOffer(row);
  const locked = lockReason(row, previous);
  const owed = owedFor(unit.id);
  return (
    <div
      data-testid={`course-unit-${unit.id}`}
      data-unit-state={state}
      style={{
        borderRadius: 14,
        border: state === 'current' ? `1.5px solid ${color}` : '1.5px solid var(--card-b)',
        background: 'var(--card)',
        marginBottom: 8,
        overflow: 'hidden',
        // Decoration goes on box-shadow, never `outline` — that is the keyboard
        // focus ring and is not available for a selected state.
        boxShadow: state === 'current' ? `0 2px 12px ${color}22` : 'none',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '13px 14px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: "'Outfit',sans-serif",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 30,
            height: 30,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            fontSize: 12,
            fontWeight: 900,
            color: state === 'mastered' ? '#fff' : accentInk(color),
            background: state === 'mastered' ? accentFill(color) : `${color}1a`,
          }}
        >
          {state === 'mastered' ? '✓' : unit.index}
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: 'block',
              fontSize: 13.5,
              fontWeight: 800,
              color: 'var(--heading)',
              lineHeight: 1.3,
            }}
          >
            {unit.title}
          </span>
          {unit.subtitle && (
            <span
              style={{
                display: 'block',
                fontSize: 11.5,
                color: 'var(--subtext)',
                marginTop: 2,
                lineHeight: 1.45,
              }}
            >
              {unit.subtitle}
            </span>
          )}
        </span>
        <span
          style={{
            flexShrink: 0,
            fontSize: 11,
            fontWeight: 800,
            color: state === 'current' ? accentInk(color) : 'var(--subtext)',
          }}
        >
          {done}/{total}
        </span>
      </button>

      {expanded && (
        <div style={{ padding: '0 14px 12px 14px' }}>
          {/* WHY THE COURSE HAS NOT OPENED THIS YET — never silence. The library
              is untouched, and the sentence says so. */}
          {locked && (
            <div
              data-testid={`course-unit-locked-${unit.id}`}
              role="status"
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: 'var(--subtext)',
                padding: '8px 2px 4px',
                lineHeight: 1.5,
              }}
            >
              {locked}
            </div>
          )}

          {/* THE UNIT'S TEST. `primary` once the reading is done; `testout`
              beforehand, which is the SAME test at the SAME bar — the owner's own
              condition on one path for everyone ("if they are already somewhat
              familiar they will be able to master easier subjects quickly"), and
              the answer AnimatedLesson's test-out settled for a single lesson:
              ONE BAR, NOT TWO. A failed attempt records nothing, so offering it
              early costs the learner nothing. */}
          {offer !== 'none' && (
            <button
              data-testid={`course-unit-test-${unit.id}`}
              data-offer={offer}
              onClick={onTakeTest}
              style={{
                width: '100%',
                padding: '11px 12px',
                marginTop: 4,
                marginBottom: 2,
                borderRadius: 10,
                border: offer === 'primary' ? 'none' : `1.5px solid ${color}`,
                background: offer === 'primary' ? accentFill(color) : 'transparent',
                color: offer === 'primary' ? '#fff' : accentInk(color),
                fontSize: 13,
                fontWeight: 800,
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              {offer === 'primary'
                ? 'Take the unit test →'
                : 'Already know this? Take the unit test →'}
            </button>
          )}
          {/* THE OTHER HALF OF THE BAR. A unit whose test is passed but whose
              production is owed is not finished, and the map must say which half
              is missing rather than showing a tick that is not true yet. */}
          {row.tested &&
            owed &&
            (['write', 'speak'] as const)
              .filter((k) => owed[k])
              .map((k) => (
                <button
                  key={k}
                  data-testid={`course-unit-${k}-${unit.id}`}
                  onClick={() => onProduce(k)}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    marginTop: 4,
                    marginBottom: 2,
                    borderRadius: 10,
                    border: 'none',
                    background: accentFill(color),
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 800,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: "'Outfit',sans-serif",
                  }}
                >
                  {k === 'write'
                    ? 'Now write what you have learned →'
                    : 'Now say what you have learned →'}
                </button>
              ))}
          {/* WHERE THE UNIT IS ON ITS RETENTION LADDER. `cleared` means the bar is met
              and the course has opened the next unit — mastery is a claim about
              RETENTION and waits on the 7- and 30-day check-ups. Saying "mastered"
              here would be the app claiming more than it has measured. */}
          {/* A DUE CHECK-UP MUST BE TAKEABLE FROM HERE. The map said "we will check it
              again in a few days" and, when the day came, offered no way to do it —
              only the daily session's teaching slot did. Found by the E2E, which is
              the one thing that walks the learner's actual route. */}
          {state === 'cleared' && row.tested && !owed && recheckDue && (
            <button
              data-testid={`course-unit-recheck-${unit.id}`}
              onClick={onRecheck}
              style={{
                width: '100%',
                padding: '11px 12px',
                marginTop: 4,
                marginBottom: 2,
                borderRadius: 10,
                border: `1.5px solid ${color}`,
                background: 'transparent',
                color: accentInk(color),
                fontSize: 13,
                fontWeight: 800,
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              Check-up due — see if it stayed →
            </button>
          )}
          {state === 'cleared' && row.tested && !owed && (
            <div
              data-testid={`course-unit-holding-${unit.id}`}
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: 'var(--subtext)',
                padding: '6px 2px 2px',
                lineHeight: 1.5,
              }}
            >
              {recheckDue
                ? 'Passed. Time to check it stayed.'
                : 'Passed. We will check it again in a few days to see it stayed.'}
            </div>
          )}
          {state === 'mastered' && !owed && (
            <div
              data-testid={`course-unit-mastered-${unit.id}`}
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: 'var(--ink-green)',
                padding: '6px 2px 2px',
              }}
            >
              Mastered — you passed it and it stayed.
            </div>
          )}
          {unit.lessons.map((lesson, i) => {
            const isDone = completed.has(lesson.id);
            return (
              <button
                key={lesson.id}
                data-testid={`course-lesson-${lesson.id}`}
                data-lesson-done={isDone ? '1' : '0'}
                onClick={() => onOpenLesson(lesson.id)}
                disabled={!!locked}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 10px',
                  marginTop: 4,
                  borderRadius: 10,
                  border: '1px solid var(--card-b)',
                  background: isDone ? 'rgba(22,163,74,.06)' : 'var(--bar-bg)',
                  cursor: locked ? 'default' : 'pointer',
                  opacity: locked ? 0.55 : 1,
                  textAlign: 'left',
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 12, flexShrink: 0, width: 16 }}>
                  {isDone ? '✓' : i + 1}
                </span>
                <span
                  style={{
                    flex: 1,
                    minWidth: 0,
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: 'var(--heading)',
                  }}
                >
                  {lesson.title || lesson.id}
                </span>
                <span style={{ fontSize: 12, color: 'var(--subtext)', flexShrink: 0 }}>→</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
