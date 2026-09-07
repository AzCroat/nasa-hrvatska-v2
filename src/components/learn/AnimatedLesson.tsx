// ═══════════════════════════════════════════════════════════
// AnimatedLesson — Animated Grammar Lesson Player
// The app's equivalent of pre-produced video lessons,
// built entirely in React with animations and live TTS.
// ═══════════════════════════════════════════════════════════

import React, { useState, useEffect, useRef } from 'react';
import { speak } from '../../lib/audio.js';
import { markQuest } from '../../lib/quests.js';
import { recordLessonTaught } from '../../lib/teachPractice';
import { markLessonComplete } from '../../lib/curriculumProgress';
import { localDateStr } from '../../lib/dateUtils';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import { lessonGate, gateStartSlide, countCorrect, lessonPassed } from '../../lib/lessonCheck';
import { useStats } from '../../context/StatsContext';
import {
  ProgressBar,
  IntroSlide,
  RuleSlide,
  ExampleSlide,
  TableSlide,
  QuizSlide,
  CheckSlide,
  SummarySlide,
} from './LessonSlides';

// ── Inline keyframes injected once ──────────────────────────
const SLIDE_ANIM_ID = 'nh-slide-anim';
if (typeof document !== 'undefined' && !document.getElementById(SLIDE_ANIM_ID)) {
  const style = document.createElement('style');
  style.id = SLIDE_ANIM_ID;
  style.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

// ── Helpers ──────────────────────────────────────────────────
function LS_GET<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : (JSON.parse(v) as T);
  } catch {
    return fallback;
  }
}
function LS_SET(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

interface LessonSlide {
  type: string;
  correct?: number;
  items?: Array<{ hr: string }>;
  [key: string]: unknown;
}

interface LessonData {
  id?: string;
  title: string;
  level: string;
  duration: string;
  bg: string;
  color: string;
  slides: LessonSlide[];
  [key: string]: unknown;
}

interface Props {
  lesson: LessonData | null;
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AnimatedLesson({ lesson, goBack, award }: Props) {
  const { setStats, writeDelta } = useStats();
  const [slide, setSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState(0);
  // Mastery check (lib/lessonCheck, 2026-09-07): answers by item index, in
  // SOURCE option order; `attempt` reshuffles presentation and remounts the
  // check on a retake.
  const [checkAnswers, setCheckAnswers] = useState<Record<number, number>>({});
  const [attempt, setAttempt] = useState(0);
  const [_done, setDone] = useState(false);
  // Default ON to match Flashcards' reading of the same key — the two screens
  // previously had opposite defaults, so this toggle's state contradicted
  // actual flashcard behavior until the user flipped it once.
  const [autoTTS, setAutoTTS] = useState(() => LS_GET('nh_autotts', true));
  const [ttsAvailable] = useState(() => typeof window !== 'undefined');
  const xpAwarded = useRef(false);

  const slides = lesson?.slides || [];
  const totalSlides = slides.length;
  const currentSlide = slides[slide];

  // THE GATE. A lesson is complete when its mastery check is PASSED (≥75%),
  // not when its summary is reached. Older cached payloads without a check
  // slide are gated on their formative quiz slides — absence degrades to the
  // strictest thing the data supports, never to "read it and you're done".
  const gate = lessonGate(slides);
  const gateCorrect =
    gate.kind === 'check'
      ? countCorrect(gate.items, checkAnswers)
      : gate.kind === 'quiz'
        ? score
        : 0;
  const passed = lessonPassed(gate, gateCorrect);
  const checkAllAnswered =
    gate.kind !== 'check' || gate.items.every((_, i) => checkAnswers[i] !== undefined);
  // One session-flow signal per failed attempt: the daily session is a practice
  // FLOW (sessionSignal.ts), so a finished-but-failed check must not strand it
  // at N-1/N — while the lesson itself records NOTHING and is served again.
  const failSignalledAttempt = useRef(-1);

  // Auto-TTS on slide change
  useEffect(() => {
    if (!autoTTS || !ttsAvailable || !currentSlide) return undefined;
    if (currentSlide.type === 'example' && currentSlide.items && currentSlide.items.length > 0) {
      const firstItem = currentSlide.items[0];
      const timer = setTimeout(() => {
        if (firstItem) speak(firstItem.hr);
      }, 600);
      return () => clearTimeout(timer);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  // Award XP + mark completion when the summary slide is reached WITH A PASS.
  // On a fail nothing below runs: no XP, no gc, no al_ key, no curriculum
  // completion, no taught-queue entry — the spine serves this lesson again.
  useEffect(() => {
    if (!currentSlide) return;
    if (currentSlide.type !== 'summary') return;
    if (!passed) {
      if (failSignalledAttempt.current !== attempt) {
        failSignalledAttempt.current = attempt;
        signalSessionCompleteIfActive('animlesson');
      }
      return;
    }
    if (!xpAwarded.current) {
      xpAwarded.current = true;
      // Record THIS lesson's completion under a distinct 'al_<lessonId>' key.
      // The Learn Path launcher writes vs:[item.id] on the tap that OPENS the
      // lesson, so gating on item.id let a single tap mark the lesson complete
      // without viewing it. The path gate now checks this key, which is written
      // only here — once the learner has reached the summary (past the quiz).
      const lessonId = (lesson as { id?: string }).id;
      if (lessonId) {
        const doneKey = 'al_' + lessonId;
        setStats((s) => (s.vs?.includes(doneKey) ? s : { ...s, vs: [...(s.vs || []), doneKey] }));
        if (writeDelta) writeDelta({ vs: [doneKey] });
        // Teach -> practice coupling (2026-08-20). The 45 content lessons finish
        // here rather than through completeExercise, so the queue write has to be
        // made explicitly - without it every server-side lesson (including the A1
        // verb lesson this coupling exists for) would teach a concept the session
        // builder never hears about. Keyed on the RAW lesson id, which is what
        // LESSON_TAUGHT_CATEGORY maps.
        recordLessonTaught(lessonId);
        // Curriculum progress (Wave 1, 2026-08-28). The spine sequences on
        // COMPLETED lesson ids, so without this write the learner is served the
        // same lesson every day and the syllabus never advances. Recorded here
        // for the same reason the vs key is: the summary slide is the only point
        // at which the lesson was demonstrably read, not merely opened.
        markLessonComplete(lessonId, localDateStr());
      }
      if (typeof award === 'function') {
        award(25, false, 'lesson');
        markQuest('grammar');
        setStats((s) => ({ ...s, gc: s.gc + 1 }));
        writeDelta({ gc: 1 });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, passed]);

  function handleCheckAnswer(itemIndex: number, sourceOptionIndex: number) {
    setCheckAnswers((prev) =>
      prev[itemIndex] === undefined ? { ...prev, [itemIndex]: sourceOptionIndex } : prev,
    );
  }

  // Reset every gated answer and start a new attempt. The formative quiz
  // slides are reset too, because on an older payload they ARE the gate.
  function resetAttempt() {
    setCheckAnswers({});
    setQuizAnswers({});
    setQuizResults({});
    setScore(0);
    setAttempt((a) => a + 1);
  }

  function retakeCheck() {
    resetAttempt();
    const start = gateStartSlide(gate);
    if (start !== null) setSlide(start);
  }

  function reviewLesson() {
    resetAttempt();
    setSlide(totalSlides > 1 ? 1 : 0);
  }

  function handleToggleTTS() {
    setAutoTTS((prev: boolean) => {
      const next = !prev;
      LS_SET('nh_autotts', next);
      return next;
    });
  }

  function handleAnswer(slideIndex: number, optionIndex: number) {
    setQuizAnswers((prev) => ({ ...prev, [slideIndex]: optionIndex }));
  }

  function handleCheck(slideIndex: number) {
    const s = slides[slideIndex];
    if (!s) return;
    const chosen = quizAnswers[slideIndex];
    if (chosen === undefined) return;
    const correct = chosen === s.correct;
    setQuizResults((prev) => ({ ...prev, [slideIndex]: correct }));
    if (correct) setScore((sc) => sc + 1);
  }

  function goNext() {
    if (slide < totalSlides - 1) {
      setSlide((s) => s + 1);
    } else {
      setDone(true);
      goBack();
    }
  }

  function goPrev() {
    if (slide > 0) setSlide((s) => s - 1);
  }

  // Guard: if lesson or slides are missing (e.g. state cleared before screen unmounted), bail gracefully
  if (!lesson || !currentSlide) return null;

  // Can we go next? For quiz slides, require answer checked before advancing;
  // for the check slide, every item answered; on a FAILED summary the Next
  // button becomes the retake.
  const isQuiz = currentSlide.type === 'quiz';
  const isCheck = currentSlide.type === 'check';
  const isSummary = currentSlide.type === 'summary';
  const quizRevealed = quizResults[slide] !== undefined;
  const failedSummary = isSummary && !passed;
  const canGoNext = isCheck ? checkAllAnswered : !isQuiz || quizRevealed;
  const isLastSlide = slide === totalSlides - 1;

  // ── Render slide content ─────────────────────────────────
  function renderSlide(cs: LessonSlide) {
    switch (cs.type) {
      case 'intro':
        return <IntroSlide slide={cs} lesson={lesson!} />;

      case 'rule':
        return <RuleSlide slide={cs} lesson={lesson!} />;

      case 'example':
        return (
          <ExampleSlide slide={cs} lesson={lesson!} autoTTS={autoTTS} ttsAvailable={ttsAvailable} />
        );

      case 'table':
        return <TableSlide slide={cs} lesson={lesson!} />;

      case 'quiz':
        return (
          <QuizSlide
            slide={cs}
            slideIndex={slide}
            lesson={lesson!}
            quizAnswers={quizAnswers}
            quizResults={quizResults}
            onAnswer={handleAnswer}
            onCheck={handleCheck}
          />
        );

      case 'check':
        return gate.kind === 'check' ? (
          <CheckSlide
            key={attempt}
            items={gate.items}
            lesson={lesson!}
            attempt={attempt}
            answers={checkAnswers}
            onAnswer={handleCheckAnswer}
          />
        ) : (
          <div style={{ color: 'var(--subtext)', padding: 24 }}>This check has no questions.</div>
        );

      case 'summary':
        return (
          <SummarySlide
            slide={cs}
            lesson={lesson!}
            score={gateCorrect}
            quizTotal={gate.total}
            xpAwarded={xpAwarded.current ? 1 : 0}
            passed={passed}
            gateKind={gate.kind}
            onRetake={retakeCheck}
            onReview={reviewLesson}
          />
        );

      default:
        return (
          <div style={{ color: 'var(--subtext)', padding: 24 }}>Unknown slide type: {cs.type}</div>
        );
    }
  }

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        maxWidth: 600,
        margin: '0 auto',
        padding: '0 0 calc(160px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 12,
          padding: '0 2px',
        }}
      >
        {/* Back button */}
        <button
          onClick={goBack}
          aria-label="Back to lesson list"
          style={{
            background: 'none',
            border: '1px solid var(--card-b)',
            borderRadius: 10,
            padding: '6px 10px',
            cursor: 'pointer',
            fontSize: 16,
            color: 'var(--subtext)',
            flexShrink: 0,
            fontFamily: 'inherit',
            transition: 'background .15s',
          }}
        >
          ←
        </button>

        {/* Title */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 900,
              color: 'var(--heading)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {lesson.title}
          </div>
          <div
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--subtext)',
              fontWeight: 600,
            }}
          >
            {lesson.level} · {lesson.duration}
          </div>
        </div>

        {/* TTS toggle */}
        {ttsAvailable && (
          <button
            onClick={handleToggleTTS}
            aria-label={autoTTS ? 'Disable auto-speak' : 'Enable auto-speak'}
            title={autoTTS ? 'Auto-speak ON' : 'Auto-speak OFF'}
            style={{
              background: autoTTS ? lesson.bg : 'var(--bar-bg)',
              border: '1px solid ' + (autoTTS ? lesson.color + '55' : 'var(--card-b)'),
              borderRadius: 10,
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: 15,
              color: autoTTS ? lesson.color : 'var(--subtext)',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flexShrink: 0,
              transition: 'all .15s',
            }}
          >
            <span aria-hidden="true">🔊</span>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700 }}>
              {autoTTS ? 'Auto' : 'Off'}
            </span>
          </button>
        )}
      </div>

      {/* ── Progress Bar ── */}
      <ProgressBar current={slide + 1} total={totalSlides} color={lesson.color} />

      {/* ── Slide Content (animated) ── */}
      <div key={`${slide}-${attempt}`} style={{ animation: 'slideIn 0.3s ease forwards' }}>
        {renderSlide(currentSlide)}
      </div>

      {/* ── Navigation — fixed above the app nav bar so it's always visible ── */}
      {/* Lesson nav: position:fixed above app nav (≈60px) — never requires scrolling to reach */}
      <div
        style={{
          position: 'fixed',
          bottom: 'calc(60px + env(safe-area-inset-bottom, 0px))',
          left: 0,
          right: 0,
          background: 'var(--app-bg)',
          borderTop: '1px solid var(--card-b)',
          padding: '10px 16px 8px',
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          {/* Quiz check reminder — inside fixed nav so it's always visible */}
          {isCheck && !checkAllAnswered && (
            <div
              data-testid="lesson-check-locked"
              style={{
                marginBottom: 8,
                padding: '7px 12px',
                background: lesson.bg,
                borderRadius: 10,
                border: '1px solid ' + lesson.color + '33',
                fontSize: 'var(--text-xs)',
                color: lesson.color,
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Answer every question to see your result
            </div>
          )}
          {isQuiz && !quizRevealed && quizAnswers[slide] !== undefined && (
            <div
              style={{
                marginBottom: 8,
                padding: '7px 12px',
                background: lesson.bg,
                borderRadius: 10,
                border: '1px solid ' + lesson.color + '33',
                fontSize: 'var(--text-xs)',
                color: lesson.color,
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Tap "Check Answer" before continuing
            </div>
          )}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {/* Prev */}
            <button
              onClick={goPrev}
              disabled={slide === 0}
              aria-label="Previous slide"
              style={{
                flex: 1,
                padding: '13px 16px',
                borderRadius: 12,
                border: '1px solid var(--card-b)',
                background: slide === 0 ? 'var(--bar-bg)' : 'var(--card)',
                color: slide === 0 ? 'var(--subtext)' : 'var(--heading)',
                cursor: slide === 0 ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
                fontSize: 'var(--text-base)',
                fontWeight: 700,
                opacity: slide === 0 ? 0.4 : 1,
                transition: 'all .15s',
              }}
            >
              ← Prev
            </button>

            {/* Slide type indicator dots */}
            <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0 }}>
              {slides.map((_s, i) => (
                <div
                  key={i}
                  style={{
                    width: i === slide ? 16 : 6,
                    height: 6,
                    borderRadius: 99,
                    background:
                      i === slide
                        ? lesson.color
                        : i < slide
                          ? lesson.color + '66'
                          : 'var(--bar-bg)',
                    transition: 'all .25s ease',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={failedSummary ? retakeCheck : goNext}
              disabled={!canGoNext}
              data-testid="lesson-nav-next"
              aria-label={
                failedSummary ? 'Retake the check' : isLastSlide ? 'Finish lesson' : 'Next slide'
              }
              style={{
                flex: 1,
                padding: '13px 16px',
                borderRadius: 12,
                border: 'none',
                background: canGoNext ? lesson.color : 'var(--bar-bg)',
                color: canGoNext ? '#fff' : 'var(--subtext)',
                cursor: canGoNext ? 'pointer' : 'not-allowed',
                fontFamily: 'inherit',
                fontSize: 'var(--text-base)',
                fontWeight: 800,
                transition: 'all .15s',
                opacity: canGoNext ? 1 : 0.5,
              }}
            >
              {failedSummary ? '↻ Retake check' : isLastSlide ? 'Finish ✓' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
