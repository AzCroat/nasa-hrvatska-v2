// src/components/learn/LevelReviewScreen.tsx
//
// THE END-OF-LEVEL REVIEW (owner request, 2026-09-27): "a review unit at the end of
// each level. It would mix practice across all six units right before the Level
// Check, so the learner is prepared rather than just tested."
//
// Eighteen items, three from each of the level's six units, interleaved by
// construction (src/lib/levelReview.ts has the reasoning). What lives here is the
// sitting, and it is PRACTICE, not a test:
//
//   - every answer is explained, right or wrong;
//   - a missed item comes back at the end of the round until it is answered right,
//     so the learner leaves having got every item right at least once;
//   - the result reports FIRST-TRY accuracy per unit — the honest readiness signal —
//     and names the units worth another look before the Level Check.
//
// It gates nothing: no pass mark, no lock, and it cannot un-advance anything. Its one
// record is that it was done (and how the first tries went), which is what stops the
// course serving it again.
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { H } from '../../data';
import { getLessons } from '../../lib/contentClient';
import { readCurriculumSpine } from '../../lib/curriculumProgress';
import type { CurriculumEntry } from '../../lib/curriculum';
import { buildCourseUnits, type CourseUnit } from '../../lib/courseUnits';
import {
  readLevelReviewRequest,
  clearLevelReviewRequest,
  recordLevelReview,
  markLevelReviewUnavailable,
  readCourseUnits,
} from '../../lib/courseUnitProgress';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import {
  buildLevelReview,
  reviewBreakdown,
  LEVEL_REVIEW_MIN_ITEMS,
  type LevelReviewItem,
  type ReviewLessonBody,
} from '../../lib/levelReview';
import { shuffledOrder } from '../../lib/lessonCheck';
import { COURSE_UNIT_TITLES } from '../../data/courseUnitTitles';

/** XP for the first finished review of a level. Paid once. */
export const LEVEL_REVIEW_XP = 30;

type Phase = 'loading' | 'failed' | 'insufficient' | 'missing' | 'running' | 'done';

interface LevelReviewScreenProps {
  goBack: () => void;
  award: (xp: number, kind?: string) => void;
  /** Opens a lesson for review. Resolves false when it could not be opened. */
  onOpenLesson: (lessonId: string) => Promise<boolean>;
  setScr: (screen: string) => void;
}

const primary: React.CSSProperties = {
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
  marginBottom: 8,
};

const secondary: React.CSSProperties = {
  ...primary,
  border: '1.5px solid var(--card-b)',
  background: 'transparent',
  color: 'var(--heading)',
};

export default function LevelReviewScreen({
  goBack,
  award,
  onOpenLesson,
  setScr,
}: LevelReviewScreenProps) {
  const level = useMemo(() => readLevelReviewRequest(), []);
  const [phase, setPhase] = useState<Phase>('loading');
  const [items, setItems] = useState<LevelReviewItem[]>([]);
  const [attempt, setAttempt] = useState(0);
  // The round is a QUEUE of item indices: a miss is appended, so it comes back.
  const [queue, setQueue] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [firstTry, setFirstTry] = useState<Record<number, boolean>>({});
  const recorded = useRef<string | null>(null);
  const [openFailed, setOpenFailed] = useState(false);

  const spine = useMemo<CurriculumEntry[]>(() => readCurriculumSpine(), []);
  const units = useMemo(() => buildCourseUnits(spine, COURSE_UNIT_TITLES), [spine]);
  const levelUnits = useMemo<CourseUnit[]>(
    () => (level ? units.filter((u) => u.level === level) : []),
    [units, level],
  );

  // ── Assemble the round ──────────────────────────────────────────────────
  useEffect(() => {
    let live = true;
    if (!level || levelUnits.length === 0) {
      setPhase(units.length === 0 ? 'failed' : 'missing');
      return;
    }
    getLessons()
      .then((all) => {
        if (!live) return;
        const byId = new Map((all as ReviewLessonBody[]).map((l) => [l.id, l]));
        const built = buildLevelReview(
          levelUnits.map((u) => ({
            unitId: u.id,
            lessons: u.lessons.map((l) => byId.get(l.id)).filter(Boolean) as ReviewLessonBody[],
          })),
          attempt,
        );
        if (built.length < LEVEL_REVIEW_MIN_ITEMS) {
          // MEASURED, NOT INVENTED: the app tried and the cached bodies could not make
          // a review, so the course is told to move on instead of serving it daily.
          markLevelReviewUnavailable(level);
          setPhase('insufficient');
          return;
        }
        setItems(built);
        setQueue(built.map((_, i) => i));
        setPos(0);
        setChosen(null);
        setFirstTry({});
        setPhase('running');
      })
      .catch(() => {
        if (live) setPhase('failed');
      });
    return () => {
      live = false;
    };
  }, [level, levelUnits, units.length, attempt]);

  // Leaving clears the handoff so a later visit cannot land on a stale level.
  useEffect(() => clearLevelReviewRequest, []);

  const total = items.length;
  const firstTryCorrect = useMemo(() => Object.values(firstTry).filter(Boolean).length, [firstTry]);

  // ── CREDIT ON REACHING THE RESULT, NOT FROM A BUTTON ────────────────────
  // `total > 0` is load-bearing: an empty round must never record or pay.
  useEffect(() => {
    if (phase !== 'done' || !level || total <= 0) return;
    if (recorded.current === `${level}:${attempt}`) return;
    recorded.current = `${level}:${attempt}`;
    // The session is a flow: reaching the result frees its slot.
    signalSessionCompleteIfActive('levelreview');
    const before = readCourseUnits().reviews?.[level];
    const firstReview = !before || before.unavailable === true || !(before.total > 0);
    recordLevelReview(level, firstTryCorrect, total);
    if (firstReview) award(LEVEL_REVIEW_XP, 'grammar');
  }, [phase, level, total, firstTryCorrect, attempt, award]);

  const current = queue[pos];
  const item = current !== undefined ? items[current] : undefined;

  const answer = useCallback(
    (sourceIndex: number) => {
      if (chosen !== null || current === undefined || !item) return;
      setChosen(sourceIndex);
      const right = sourceIndex === item.correct;
      setFirstTry((prev) => (current in prev ? prev : { ...prev, [current]: right }));
      // A MISS COMES BACK at the end of the round, until it is answered right.
      if (!right) setQueue((q) => [...q, current]);
    },
    [chosen, current, item],
  );

  const next = useCallback(() => {
    setChosen(null);
    if (pos + 1 >= queue.length) setPhase('done');
    else setPos(pos + 1);
  }, [pos, queue.length]);

  const review = useCallback(
    async (lessonId: string) => {
      setOpenFailed(false);
      const ok = await onOpenLesson(lessonId);
      if (!ok) setOpenFailed(true);
    },
    [onOpenLesson],
  );

  const heading = level ? `${level} review` : 'Level review';
  const subtitle = level ? 'All six units, mixed' : 'Your course';

  if (phase === 'loading') {
    return (
      <div>
        {H(heading, subtitle, goBack)}
        <Notice testId="level-review-loading" tone="calm">
          Putting your review together — one moment.
        </Notice>
      </div>
    );
  }

  if (phase === 'failed') {
    return (
      <div>
        {H(heading, subtitle, goBack)}
        <Notice testId="level-review-failed" tone="bad">
          The review could not be loaded. Check your connection and try again.
        </Notice>
      </div>
    );
  }

  if (phase === 'missing') {
    return (
      <div>
        {H(heading, subtitle, goBack)}
        <Notice testId="level-review-missing" tone="calm">
          No level review is open right now. Each level&apos;s review is on the course map.
        </Notice>
        <button
          data-testid="level-review-open-map"
          onClick={() => setScr('coursemap')}
          style={primary}
        >
          Open the course map →
        </button>
      </div>
    );
  }

  if (phase === 'insufficient') {
    return (
      <div>
        {H(heading, subtitle, goBack)}
        <Notice testId="level-review-insufficient" tone="calm">
          This level does not have enough questions for a review yet — it needs at least{' '}
          {LEVEL_REVIEW_MIN_ITEMS}. Your course carries on without it.
        </Notice>
      </div>
    );
  }

  if (phase === 'done') {
    const breakdown = reviewBreakdown(items, firstTry);
    const unitTitle = (id: string) => levelUnits.find((u) => u.id === id)?.title || id;
    const weak = breakdown.filter((b) => b.correct < b.total);
    const firstLessonOf = (unitId: string) => {
      // The lesson the misses came from first — a concrete place to start.
      const miss = items.findIndex((it, i) => it.unitId === unitId && firstTry[i] === false);
      return miss >= 0
        ? items[miss]!.lessonId
        : levelUnits.find((u) => u.id === unitId)?.lessons[0]?.id;
    };
    return (
      <div data-testid="level-review-result">
        {H(heading, subtitle, goBack)}
        <div
          style={{
            padding: 18,
            borderRadius: 16,
            border: '1.5px solid var(--card-b)',
            background: 'var(--card)',
            marginBottom: 18,
          }}
        >
          <div
            data-testid="level-review-first-try"
            style={{ fontSize: 26, fontWeight: 900, color: 'var(--heading)' }}
          >
            {firstTryCorrect} of {total} right first time
          </div>
          <div style={{ fontSize: 13, color: 'var(--subtext)', marginTop: 6, lineHeight: 1.5 }}>
            You answered every question correctly by the end. The first-try count is the one that
            says how ready you are for the {level} Level Check.
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <SectionLabel>
            {weak.length > 0 ? 'Worth another look' : 'Every unit, first time'}
          </SectionLabel>
          {breakdown.map((b) => {
            const shaky = b.correct < b.total;
            const lessonId = shaky ? firstLessonOf(b.unitId) : undefined;
            return (
              <button
                key={b.unitId}
                data-testid={`level-review-unit-${b.unitId}`}
                data-shaky={shaky ? '1' : '0'}
                disabled={!lessonId}
                onClick={() => lessonId && review(lessonId)}
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
                  cursor: lessonId ? 'pointer' : 'default',
                  textAlign: 'left',
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                <span style={{ flex: 1, fontSize: 12.5, fontWeight: 700, color: 'var(--heading)' }}>
                  {unitTitle(b.unitId)}
                </span>
                <span style={{ fontSize: 12, color: 'var(--subtext)' }}>
                  {b.correct}/{b.total}
                  {lessonId ? ' →' : ' ✓'}
                </span>
              </button>
            );
          })}
        </div>

        {openFailed && (
          <Notice testId="level-review-open-failed" tone="bad">
            That lesson could not be opened. Check your connection and try again.
          </Notice>
        )}

        <button
          data-testid="level-review-level-check"
          onClick={() => setScr('equivalency')}
          style={primary}
        >
          Take the Level Check →
        </button>
        <button
          data-testid="level-review-again"
          onClick={() => {
            setPhase('loading');
            setAttempt(attempt + 1);
          }}
          style={secondary}
        >
          Review again with new questions
        </button>
      </div>
    );
  }

  // ── Running ─────────────────────────────────────────────────────────────
  if (!item || current === undefined) return null;
  const order = shuffledOrder(item.options.length, attempt, pos);
  const answered = chosen !== null;
  const isRepeat = queue.indexOf(current) < pos;
  const right = answered && chosen === item.correct;

  return (
    <div data-testid="level-review" data-repeat={isRepeat ? '1' : '0'}>
      {H(heading, subtitle, goBack)}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <span
          data-testid="level-review-progress"
          style={{ fontSize: 12, fontWeight: 800, color: 'var(--subtext)' }}
        >
          {isRepeat ? 'Another try' : `Question ${Math.min(pos + 1, total)} of ${total}`}
        </span>
        <span style={{ fontSize: 11.5, color: 'var(--subtext)' }}>
          {unitName(levelUnits, item.unitId)} · practice, not scored
        </span>
      </div>
      <div
        style={{
          height: 5,
          borderRadius: 3,
          background: 'var(--bar-bg)',
          overflow: 'hidden',
          marginBottom: 18,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${Math.round(((pos + (answered ? 1 : 0)) / queue.length) * 100)}%`,
            background: 'var(--accent,#0e7490)',
            transition: 'width .3s',
          }}
        />
      </div>

      <div
        lang="hr"
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
            lang="hr"
            data-testid="level-review-option"
            data-verdict={show ? (isCorrect ? 'correct' : 'wrong') : undefined}
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
              color: show
                ? isCorrect
                  ? 'var(--ink-green)'
                  : 'var(--ink-error)'
                : 'var(--heading)',
              background: show
                ? isCorrect
                  ? 'var(--success-bg)'
                  : 'var(--error-bg)'
                : 'var(--card)',
              borderWidth: 1.5,
              borderStyle: 'solid',
              borderColor: show ? (isCorrect ? 'var(--success)' : 'var(--error)') : 'var(--card-b)',
            }}
          >
            {item.options[sourceIndex]}
          </button>
        );
      })}

      {answered && (
        <div style={{ marginTop: 12 }}>
          <div
            data-testid="level-review-feedback"
            role="status"
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
            <strong style={{ color: right ? 'var(--ink-green)' : 'var(--ink-error)' }}>
              {right ? '✅ Correct.' : '❌ Not this one — it will come back at the end.'}
            </strong>{' '}
            {item.explanation}
          </div>
          <button data-testid="level-review-next" onClick={next} style={primary}>
            {pos + 1 >= queue.length ? 'See how it went' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}

function unitName(units: CourseUnit[], id: string): string {
  const u = units.find((x) => x.id === id);
  return u ? `Unit ${u.indexInLevel}` : '';
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
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
        background: tone === 'bad' ? 'var(--error-bg)' : 'var(--bar-bg)',
        border: tone === 'bad' ? '1px solid var(--error)' : '1px solid var(--card-b)',
        color: 'var(--heading)',
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
