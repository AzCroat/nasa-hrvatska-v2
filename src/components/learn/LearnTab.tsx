import React, { useState } from 'react';
import { useContent } from '../../hooks/useContent';
import { evalCk } from '../../lib/learnPathRules';
import { getUserCefr } from '../../lib/cefr';
import { getDisplayLevel } from '../../lib/cefrCertification';
import { useApp } from '../../context/AppContext';
import { useStats } from '../../context/StatsContext';
import CharacterPortrait from '../family/CharacterPortrait';

const LESSON_TIPS = {
  greetings: {
    title: 'Greetings in Croatian',
    tip: 'Croatian has formal (Vi) and informal (ti) forms. Use "Vi" with strangers and elders, "ti" with friends and children.',
  },
  numbers: {
    title: 'Croatian Numbers',
    tip: 'Numbers 1-4 require noun case agreement. 1 uses nominative, 2-4 use genitive singular, 5+ use genitive plural.',
  },
  nouns: {
    title: 'Croatian Noun Gender',
    tip: 'Croatian nouns have 3 genders: masculine, feminine, neuter. Masculine usually ends in consonant, feminine in -a, neuter in -o/-e.',
  },
  verbs: {
    title: 'Croatian Verb Conjugation',
    tip: 'Croatian verbs conjugate for person (1st/2nd/3rd) and number (singular/plural). Infinitives end in -ti or -ći.',
  },
  adjectives: {
    title: 'Croatian Adjectives',
    tip: 'Adjectives agree with nouns in gender, number, and case. They usually come before the noun they modify.',
  },
  cases: {
    title: 'Croatian Cases',
    tip: 'Croatian has 7 grammatical cases. The nominative is for subjects, accusative for direct objects, dative for indirect objects.',
  },
  family: {
    title: 'Family Vocabulary',
    tip: 'Croatian family terms often differ by gender. Otac (father), majka (mother), brat (brother), sestra (sister).',
  },
  food: {
    title: 'Food & Dining',
    tip: 'The word "hvala" (thank you) is essential at mealtimes. "Dobar tek!" means "Enjoy your meal!" (similar to "Bon appétit").',
  },
  travel: {
    title: 'Travel Phrases',
    tip: 'Directions in Croatian use the locative case after "u" (in) and "na" (on/at). "Gdje je...?" means "Where is...?"',
  },
};

const STAGE_COLORS = [
  { bg: 'linear-gradient(135deg,#0e7490,#164e63)', light: '#f0f9ff', border: '#bae6fd' },
  { bg: 'linear-gradient(135deg,#059669,#065f46)', light: '#f0fdf4', border: '#bbf7d0' },
  { bg: 'linear-gradient(135deg,#d97706,#b45309)', light: '#fffbeb', border: '#fde68a' },
  { bg: 'linear-gradient(135deg,#7c3aed,#6d28d9)', light: '#f5f3ff', border: '#ddd6fe' },
  { bg: 'linear-gradient(135deg,#dc2626,#b91c1c)', light: '#fff1f2', border: '#fecaca' },
];

interface PendingLesson {
  lesson: Record<string, unknown>;
  tip: { title: string; tip: string };
}

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
  launchPathItem: (item: any) => void;
  launchAnimLesson: (lesson: any) => void;
}

// Q-4: Removed dead state setters — target screens manage their own init state.
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
  launchPathItem,
  launchAnimLesson,
}: LearnTabProps) {
  const { setScr } = useApp();
  const { stats: st } = useStats();
  const { content } = useContent();
  const LEARN_PATH = content?.LEARN_PATH ?? [];
  const [pendingLesson, setPendingLesson] = useState<PendingLesson | null>(null);

  // ── PATH PROGRESS ──────────────────────────────────────────────────────
  let totalDone = 0,
    totalItems = 0;
  let nextItem = null,
    currentStage = null,
    currentStageDone = 0;
  for (const lv of LEARN_PATH) {
    let lvd = 0;
    for (const it of lv.items) {
      totalItems++;
      if (st && evalCk(it.ckRule, st)) {
        totalDone++;
        lvd++;
      } else if (!nextItem) nextItem = { ...it, stageTitle: lv.title };
    }
    if (!currentStage && lvd < lv.items.length) {
      currentStage = lv;
      currentStageDone = lvd;
    }
  }
  if (!currentStage) currentStage = LEARN_PATH[LEARN_PATH.length - 1];
  const overallPct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;
  const stagePct = currentStage
    ? Math.round((currentStageDone / currentStage.items.length) * 100)
    : 100;
  const sc = STAGE_COLORS[((currentStage?.level || 1) - 1) % STAGE_COLORS.length]!;

  // CEFR level — MUST use the canonical single source of truth so the Learn-tab
  // header never contradicts the profile CEFR badge. The old hand-rolled formula
  // (capped at B2, ignored certification, used a different weighting) could show
  // A1 in the Learn tab while the profile showed B2 for the same user.
  const cefrLevel = st ? getDisplayLevel(getUserCefr(st.xp || 0, st.lc || 0, st.gc || 0)) : 'A1';

  function handleLaunchPathItem(lesson: Record<string, unknown>): void {
    const tipKey = Object.keys(LESSON_TIPS).find((k) =>
      ((lesson.name || lesson.title || lesson.cat || '') as string).toLowerCase().includes(k),
    );
    if (tipKey) {
      const tip = (LESSON_TIPS as Record<string, { title: string; tip: string }>)[tipKey];
      if (tip) {
        setPendingLesson({ lesson, tip });
        return;
      }
    }
    launchPathItem(lesson);
  }

  return (
    <React.Fragment>
      {/* ── UČENJE HERO — hosted by Profesor Kovač ──────────────────────── */}
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
                  fontSize: 9,
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
                {currentStage ? currentStage.title : 'Tvoj put'}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', marginTop: 3 }}>
                {totalDone} of {totalItems} lessons · {cefrLevel}
              </div>
            </div>
            <button
              onClick={() => setScr('grammar-ref')}
              aria-label="Grammar reference"
              style={{
                background: 'rgba(255,255,255,.15)',
                border: '1px solid rgba(255,255,255,.25)',
                borderRadius: 10,
                padding: '6px 10px',
                fontSize: 11,
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
                width: `${overallPct}%`,
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
          <span style={{ display: 'block', fontSize: 11, color: 'var(--subtext)', marginTop: 1 }}>
            Every unit from A1 to C2 — see exactly where you are
          </span>
        </span>
        <span style={{ fontSize: 15, color: 'var(--subtext)', flexShrink: 0 }}>→</span>
      </button>

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
          <span style={{ display: 'block', fontSize: 11, color: 'var(--subtext)', marginTop: 1 }}>
            Padeži, verbs, any lesson — the whole syllabus, any time
          </span>
        </span>
        <span style={{ fontSize: 15, color: 'var(--subtext)', flexShrink: 0 }}>→</span>
      </button>

      {/* ── CONTINUE LEARNING ───────────────────────────────────────────── */}
      {nextItem && (
        <div className="section-hdr" style={{ marginBottom: 10 }}>
          <div className="section-hdr-icon" style={{ background: 'rgba(99,102,241,.12)' }}>
            ⭐
          </div>
          <div className="section-hdr-text">
            <div className="section-hdr-title">Continue Learning</div>
            <div className="section-hdr-sub">Tap to resume where you left off</div>
          </div>
        </div>
      )}
      {nextItem && (
        <button
          onClick={() => handleLaunchPathItem(nextItem)}
          style={{
            width: '100%',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            borderRadius: 18,
            overflow: 'hidden',
            marginBottom: 16,
            background: sc.bg,
            boxShadow: '0 6px 24px rgba(0,0,0,.22)',
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 13,
                flexShrink: 0,
                background: 'rgba(255,255,255,.18)',
                border: '1.5px solid rgba(255,255,255,.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
              }}
            >
              {nextItem.icon || '📘'}
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 900,
                  color: 'rgba(255,255,255,.65)',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  marginBottom: 2,
                }}
              >
                CONTINUE · {nextItem.stageTitle}
              </div>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', lineHeight: 1.2 }}>
                {nextItem.name ||
                  ((nextItem as Record<string, unknown>).title as string) ||
                  'Next Lesson'}
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.65)', marginTop: 2 }}>
                {overallPct}% complete overall · Stage {overallPct < 100 ? stagePct : 100}% done
              </div>
            </div>
            <div
              style={{
                flexShrink: 0,
                background: 'rgba(255,255,255,.22)',
                border: '1px solid rgba(255,255,255,.3)',
                borderRadius: 10,
                padding: '6px 12px',
                fontSize: 12,
                fontWeight: 800,
                color: '#fff',
              }}
            >
              Resume →
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ height: 3, background: 'rgba(0,0,0,.2)' }}>
            <div
              style={{
                height: '100%',
                background: 'rgba(255,255,255,.55)',
                width: `${stagePct}%`,
                transition: 'width .6s',
              }}
            />
          </div>
        </button>
      )}

      {/* ── THE FULL PATH ────────────────────────────────────────────────
          The one door LearnPathWidget owned. Retiring the widget retired the
          list it rendered, not the `learnpath` SCREEN — which still holds the
          stage map, the lock rules and the Level Quiz CTA, and whose home tab
          is this one (`screenTabs.ts` says `learnpath: 'learn'`). Its other
          doors are a quest tile on Home and Me → Profile → Learning Path; a
          learner looking for their path looks HERE, so the link stays.
          Ungated on `nextItem`: someone who has finished every item still has
          a path to look at. */}
      <button
        onClick={() => setScr('learnpath')}
        data-testid="open-learn-path"
        className="b"
        style={{
          width: '100%',
          marginBottom: 16,
          fontSize: 12,
          fontWeight: 800,
          padding: '10px 12px',
          border: '1.5px solid var(--card-b)',
          background: 'transparent',
          color: 'var(--subtext)',
        }}
      >
        View full path — {totalDone}/{totalItems} lessons
      </button>

      {pendingLesson && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Grammar tip"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPendingLesson(null);
          }}
        >
          <div
            style={{
              background: 'var(--card)',
              borderRadius: 20,
              padding: 24,
              maxWidth: 360,
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,.3)',
            }}
          >
            <div style={{ fontSize: 28, textAlign: 'center', marginBottom: 8 }}>📖</div>
            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 'var(--text-lg)',
                color: 'var(--heading)',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              {pendingLesson.tip.title}
            </h3>
            <p
              style={{
                color: 'var(--subtext)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.6,
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              {pendingLesson.tip.tip}
            </p>
            <button
              className="b bp"
              style={{ width: '100%' }}
              onClick={() => {
                launchPathItem(pendingLesson.lesson);
                setPendingLesson(null);
              }}
            >
              Got it — Start Lesson →
            </button>
            <button
              className="b"
              style={{ width: '100%', marginTop: 8 }}
              onClick={() => setPendingLesson(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
