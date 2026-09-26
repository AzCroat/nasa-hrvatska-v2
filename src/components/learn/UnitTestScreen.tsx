// src/components/learn/UnitTestScreen.tsx
//
// THE UNIT TEST (Step 3, increment 2, 2026-09-26).
//
// Fifteen items sampled across the unit's five lessons and INTERLEAVED by
// construction, graded at UNIT_PASS_THRESHOLD. The reasoning for the mix and the
// higher bar is in src/lib/unitTest.ts; what lives here is the sitting itself.
//
// IT STATES THE COUNT, NEVER THE PERCENTAGE (owner report, 2026-09-25: a learner
// read "8 / 12" beside a button saying "need 75%" and had to convert). Every
// place this screen mentions the bar, it says "13 of 15".
//
// FEEDBACK AFTER EACH ANSWER IS DELIBERATE, and it is not a softened test. The
// testing effect is strongest WITH corrective feedback (Roediger & Karpicke), the
// score is fixed at the moment the answer is chosen, and the item's own
// explanation is the most valuable thing the app can say at the one moment the
// learner is certain to read it. What is withheld is the VERDICT, which needs all
// fifteen.
//
// A FAIL RECORDS THE ATTEMPT AND NOTHING ELSE. No XP, no counter, no `vs`, no
// quest — the gate's rule, unchanged. The attempt is a diagnostic
// (`courseUnitProgress`), and the report names which lessons the misses came
// from, so "go back to this one" is an instruction rather than a suggestion.
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { H } from '../../data';
import { getLessons } from '../../lib/contentClient';
import { readCurriculumSpine } from '../../lib/curriculumProgress';
import type { CurriculumEntry } from '../../lib/curriculum';
import { buildCourseUnits, type CourseUnit } from '../../lib/courseUnits';
import {
  readUnitTestRequest,
  clearUnitTestRequest,
  recordUnitTest,
  markUnitTestInsufficient,
  unitRecord,
} from '../../lib/courseUnitProgress';
import {
  buildUnitTest,
  unitItemsNeeded,
  unitTestAvailability,
  unitTestBreakdown,
  unitTestPassed,
  unitTestScore,
  UNIT_TEST_MIN_ITEMS,
  type UnitTestItem,
} from '../../lib/unitTest';
import { shuffledOrder } from '../../lib/lessonCheck';

/** XP for a first pass. A cumulative test is the biggest single thing a learner
 *  does in a unit, and it is paid once — `passedAt` is written once. */
export const UNIT_TEST_XP = 50;

type Phase = 'loading' | 'failed' | 'insufficient' | 'running' | 'done';

interface UnitTestScreenProps {
  goBack: () => void;
  /** Awards XP. Optional only because several callers of screens like this one
   *  historically forgot it — this screen REQUIRES it, so the router cannot. */
  award: (xp: number, kind?: string) => void;
  /** Opens a lesson for review. Resolves false when it could not be opened. */
  onOpenLesson: (lessonId: string) => Promise<boolean>;
}

export default function UnitTestScreen({ goBack, award, onOpenLesson }: UnitTestScreenProps) {
  const unitId = useMemo(() => readUnitTestRequest(), []);
  const [phase, setPhase] = useState<Phase>('loading');
  const [unit, setUnit] = useState<CourseUnit | null>(null);
  const [items, setItems] = useState<UnitTestItem[]>([]);
  const [attempt, setAttempt] = useState(0);
  const [at, setAt] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [chosen, setChosen] = useState<number | null>(null);
  const recorded = useRef<string | null>(null);
  const [openFailed, setOpenFailed] = useState(false);

  const spine = useMemo<CurriculumEntry[]>(() => readCurriculumSpine(), []);
  const units = useMemo(() => buildCourseUnits(spine), [spine]);

  // ── Assemble the paper ──────────────────────────────────────────────────
  useEffect(() => {
    let live = true;
    const u = unitId ? (units.find((x) => x.id === unitId) ?? null) : null;
    if (!u) {
      // No unit named, or a spine that does not contain it. Not a failure of the
      // network, so it is not reported as one.
      setPhase(units.length === 0 ? 'failed' : 'insufficient');
      return;
    }
    setUnit(u);
    getLessons()
      .then((all) => {
        if (!live) return;
        const byId = new Map((all as { id: string }[]).map((l) => [l.id, l]));
        const bodies = u.lessons.map((l) => byId.get(l.id)).filter(Boolean) as {
          id: string;
          slides?: readonly { type?: string; items?: unknown }[];
        }[];
        const built = buildUnitTest(bodies, attempt);
        if (unitTestAvailability(built) === 'insufficient') {
          // MEASURED, NOT INVENTED: this records that the app tried and could not
          // assemble a real test from the cached bodies, so the course gate can
          // let the learner through rather than walling them behind missing data.
          markUnitTestInsufficient(u.id);
          setPhase('insufficient');
          return;
        }
        setItems(built);
        setAt(0);
        setAnswers({});
        setChosen(null);
        setPhase('running');
      })
      .catch(() => {
        if (live) setPhase('failed');
      });
    return () => {
      live = false;
    };
  }, [unitId, units, attempt]);

  // Leaving clears the handoff so a later visit cannot land on a stale unit.
  useEffect(() => clearUnitTestRequest, []);

  const total = items.length;
  const needed = unitItemsNeeded(total);
  const correct = useMemo(() => unitTestScore(items, answers), [items, answers]);
  const passed = unitTestPassed(correct, total);

  // ── CREDIT ON REACHING THE RESULT, NOT FROM A BUTTON ────────────────────
  // `creditFollowsWork`'s rule: a control that navigates away must not be the only
  // thing that pays. `total > 0` is load-bearing — a zero-item paper would
  // otherwise satisfy `unitTestPassed` nowhere but must never reach `award`.
  useEffect(() => {
    if (phase !== 'done' || !unit || total <= 0) return;
    if (recorded.current === `${unit.id}:${attempt}`) return;
    recorded.current = `${unit.id}:${attempt}`;
    const before = unitRecord(unit.id);
    const firstPass = passed && !before?.passedAt;
    recordUnitTest(unit.id, correct, total, passed);
    if (firstPass) award(UNIT_TEST_XP, 'grammar');
  }, [phase, unit, total, correct, passed, attempt, award]);

  const answer = useCallback(
    (sourceIndex: number) => {
      if (chosen !== null) return;
      setChosen(sourceIndex);
      setAnswers((prev) => ({ ...prev, [at]: sourceIndex }));
    },
    [chosen, at],
  );

  const next = useCallback(() => {
    setChosen(null);
    if (at + 1 >= total) setPhase('done');
    else setAt(at + 1);
  }, [at, total]);

  const review = useCallback(
    async (lessonId: string) => {
      setOpenFailed(false);
      const ok = await onOpenLesson(lessonId);
      if (!ok) setOpenFailed(true);
    },
    [onOpenLesson],
  );

  const title = unit ? unit.title : 'Unit test';

  if (phase === 'loading') {
    return (
      <div>
        {H('Unit test', title, goBack)}
        <Notice testId="unit-test-loading" tone="calm">
          Putting your test together — one moment.
        </Notice>
      </div>
    );
  }

  if (phase === 'failed') {
    return (
      <div>
        {H('Unit test', title, goBack)}
        <Notice testId="unit-test-failed" tone="bad">
          The test could not be loaded. Check your connection and try again.
        </Notice>
      </div>
    );
  }

  if (phase === 'insufficient') {
    return (
      <div>
        {H('Unit test', title, goBack)}
        <Notice testId="unit-test-insufficient" tone="calm">
          This unit does not have enough questions for a test yet — it needs at least{' '}
          {UNIT_TEST_MIN_ITEMS}. Your progress through the unit still counts, and you can carry on.
        </Notice>
      </div>
    );
  }

  if (phase === 'done') {
    const breakdown = unitTestBreakdown(items, answers);
    const weak = breakdown.filter((b) => b.correct < b.total);
    const lessonTitle = (id: string) =>
      unit?.lessons.find((l) => l.id === id)?.title || spine.find((e) => e.id === id)?.title || id;
    return (
      <div data-testid="unit-test-result" data-passed={passed ? '1' : '0'}>
        {H('Unit test', title, goBack)}
        <div
          style={{
            padding: 18,
            borderRadius: 16,
            border: `1.5px solid ${passed ? 'rgba(22,163,74,.45)' : 'rgba(204,0,0,.35)'}`,
            background: passed ? 'rgba(22,163,74,.07)' : 'rgba(204,0,0,.06)',
            marginBottom: 18,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--heading)' }}>
            {correct} of {total}
          </div>
          <div
            data-testid="unit-test-verdict"
            style={{ fontSize: 14, fontWeight: 800, marginTop: 6, color: 'var(--heading)' }}
          >
            {passed ? 'Unit passed — you have shown you know this.' : 'Not yet.'}
          </div>
          {/* STATE THE COUNT, NEVER THE PERCENTAGE. */}
          <div style={{ fontSize: 12.5, color: 'var(--subtext)', marginTop: 6, lineHeight: 1.5 }}>
            {needed} of {total} needed to pass.{' '}
            {passed
              ? 'Nothing here is taken away if a later attempt goes worse.'
              : 'Nothing has been taken away — go back over the lessons below and try again.'}
          </div>
        </div>

        {weak.length > 0 && (
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--subtext)',
                marginBottom: 8,
              }}
            >
              Where the misses were
            </div>
            {weak.map((b) => (
              <button
                key={b.lessonId}
                data-testid={`unit-test-review-${b.lessonId}`}
                onClick={() => review(b.lessonId)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  marginBottom: 6,
                  borderRadius: 10,
                  border: '1px solid var(--card-b)',
                  background: 'var(--bar-bg)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                <span style={{ flex: 1, fontSize: 12.5, fontWeight: 700, color: 'var(--heading)' }}>
                  {lessonTitle(b.lessonId)}
                </span>
                <span style={{ fontSize: 12, color: 'var(--subtext)' }}>
                  {b.correct}/{b.total} →
                </span>
              </button>
            ))}
          </div>
        )}

        {openFailed && (
          <Notice testId="unit-test-open-failed" tone="bad">
            That lesson could not be opened. Check your connection and try again.
          </Notice>
        )}

        <button
          data-testid="unit-test-retake"
          onClick={() => {
            setPhase('loading');
            setAttempt(attempt + 1);
          }}
          style={{
            width: '100%',
            padding: '13px 16px',
            borderRadius: 12,
            border: 'none',
            background: 'var(--accent,#0e7490)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: "'Outfit',sans-serif",
            marginTop: 4,
          }}
        >
          {passed ? 'Take it again' : 'Try the test again'}
        </button>
      </div>
    );
  }

  // ── Running ─────────────────────────────────────────────────────────────
  const item = items[at]!;
  const order = shuffledOrder(item.options.length, attempt, at);
  const answered = chosen !== null;

  return (
    <div data-testid="unit-test">
      {H('Unit test', title, goBack)}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <span
          data-testid="unit-test-progress"
          style={{ fontSize: 12, fontWeight: 800, color: 'var(--subtext)' }}
        >
          Question {at + 1} of {total}
        </span>
        <span style={{ fontSize: 11.5, color: 'var(--subtext)' }}>
          {needed} of {total} to pass
        </span>
      </div>
      <div
        style={{
          height: 5,
          borderRadius: 3,
          background: 'rgba(0,0,0,.08)',
          overflow: 'hidden',
          marginBottom: 18,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${Math.round(((at + (answered ? 1 : 0)) / total) * 100)}%`,
            background: 'var(--accent,#0e7490)',
            transition: 'width .3s',
          }}
        />
      </div>

      <div
        style={{
          fontSize: 16.5,
          fontWeight: 800,
          color: 'var(--heading)',
          lineHeight: 1.45,
          marginBottom: 14,
        }}
      >
        {item.q}
      </div>

      {order.map((sourceIndex) => {
        const isCorrect = sourceIndex === item.correct;
        const isChosen = chosen === sourceIndex;
        const show = answered && (isCorrect || isChosen);
        return (
          <button
            key={sourceIndex}
            data-testid={`unit-test-opt-${sourceIndex}`}
            onClick={() => answer(sourceIndex)}
            disabled={answered}
            style={{
              width: '100%',
              padding: '12px 14px',
              marginBottom: 8,
              borderRadius: 12,
              textAlign: 'left',
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Outfit',sans-serif",
              cursor: answered ? 'default' : 'pointer',
              color: 'var(--heading)',
              background: show
                ? isCorrect
                  ? 'rgba(22,163,74,.12)'
                  : 'rgba(204,0,0,.10)'
                : 'var(--card)',
              borderWidth: 1.5,
              borderStyle: 'solid',
              borderColor: show
                ? isCorrect
                  ? 'rgb(22, 163, 74)'
                  : 'rgba(204,0,0,.5)'
                : 'var(--card-b)',
            }}
          >
            {item.options[sourceIndex]}
          </button>
        );
      })}

      {answered && (
        <div style={{ marginTop: 12 }}>
          {item.explanation && (
            <div
              data-testid="unit-test-explanation"
              style={{
                padding: '12px 14px',
                borderRadius: 12,
                background: 'var(--bar-bg)',
                border: '1px solid var(--card-b)',
                fontSize: 13,
                lineHeight: 1.55,
                color: 'var(--heading)',
                marginBottom: 12,
              }}
            >
              {item.explanation}
            </div>
          )}
          <button
            data-testid="unit-test-next"
            onClick={next}
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: 12,
              border: 'none',
              background: 'var(--accent,#0e7490)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 800,
              cursor: 'pointer',
              fontFamily: "'Outfit',sans-serif",
            }}
          >
            {at + 1 >= total ? 'See your result' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}

function Notice({
  testId,
  tone,
  children,
}: {
  testId: string;
  tone: 'calm' | 'bad';
  children: React.ReactNode;
}) {
  return (
    <div
      data-testid={testId}
      role="status"
      style={{
        padding: '14px 16px',
        borderRadius: 12,
        background: tone === 'bad' ? 'rgba(204,0,0,.08)' : 'rgba(0,0,0,.05)',
        border: tone === 'bad' ? '1px solid rgba(204,0,0,.35)' : '1px solid rgba(0,0,0,.08)',
        fontSize: 13.5,
        fontWeight: 700,
        lineHeight: 1.5,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}
