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
  buildCourseUnits,
  courseProgress,
  courseMapBlock,
  COURSE_MAP_COPY,
  type CourseMapBlock,
  type UnitProgress,
} from '../../lib/courseUnits';

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
}

export default function CourseMapScreen({ goBack, onOpenLesson }: CourseMapScreenProps) {
  const [spine, setSpine] = useState<CurriculumEntry[]>(() => readCurriculumSpine());
  const [fetchState, setFetchState] = useState<'pending' | 'failed' | 'settled'>(() =>
    readCurriculumSpine().length > 0 ? 'settled' : 'pending',
  );
  const [completed, setCompleted] = useState<ReadonlySet<string>>(() => readCompletedLessons());
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

  const units = useMemo(() => buildCourseUnits(spine), [spine]);
  const progress = useMemo(() => courseProgress(units, completed), [units, completed]);
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
      else setCompleted(readCompletedLessons());
    },
    [onOpenLesson],
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
          <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--heading)' }}>
            {progress.unitsDone} of {progress.unitsTotal} units finished
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
          Every learner takes the same path, from Unit 1. Work through a unit’s five lessons in
          order — you can move as fast as you like.
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
                {rows.filter((r) => r.state === 'done').length} of {rows.length} units
              </span>
            </div>
            {rows.map((row) => (
              <UnitRow
                key={row.unit.id}
                row={row}
                color={LEVEL_COLOR[level] || '#0e7490'}
                expanded={openUnit === row.unit.id}
                onToggle={() => setOpenUnit(openUnit === row.unit.id ? null : row.unit.id)}
                completed={completed}
                onOpenLesson={open}
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
  color,
  expanded,
  onToggle,
  completed,
  onOpenLesson,
}: {
  row: UnitProgress;
  color: string;
  expanded: boolean;
  onToggle: () => void;
  completed: ReadonlySet<string>;
  onOpenLesson: (lessonId: string) => void;
}) {
  const { unit, done, total, state } = row;
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
            color: state === 'done' ? '#fff' : color,
            background: state === 'done' ? color : `${color}1a`,
          }}
        >
          {state === 'done' ? '✓' : unit.index}
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
            color: state === 'current' ? color : 'var(--subtext)',
          }}
        >
          {done}/{total}
        </span>
      </button>

      {expanded && (
        <div style={{ padding: '0 14px 12px 14px' }}>
          {unit.lessons.map((lesson, i) => {
            const isDone = completed.has(lesson.id);
            return (
              <button
                key={lesson.id}
                data-testid={`course-lesson-${lesson.id}`}
                data-lesson-done={isDone ? '1' : '0'}
                onClick={() => onOpenLesson(lesson.id)}
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
                  cursor: 'pointer',
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
