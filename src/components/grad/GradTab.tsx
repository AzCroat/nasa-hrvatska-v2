import React, { useState } from 'react';
import { getUserCefr } from '../../lib/cefr';
import { getContentUnlockLevel } from '../../lib/cefrCertification';
import { LISTEN, getSR, getDueReviews, getStreak, DAILY_QUESTS } from '../../data';
import { useContent } from '../../hooks/useContent';
import { acquisitionPool, vocabLevel } from '../../lib/vocabPool';
import {
  flashcardPool,
  quizItems,
  matchPool,
  listeningItems,
  speakingItems,
  poolLaunchBlock,
  POOL_LAUNCH_COPY,
} from '../../lib/practiceLaunch';
import { useApp } from '../../context/AppContext';
import { useStats } from '../../context/StatsContext';
import { useAdaptivePractice } from '../../hooks/useAdaptivePractice';
import { buildExercises } from '../practice/exerciseCatalog';
import CharacterPortrait from '../family/CharacterPortrait';
import { PLACES, type PlaceId } from './places';
import { placeStats, recommendedVisit, type ModelCtx } from './gradModel';
import GradMap from './GradMap';
import PlaceScreen from './PlaceScreen';
import NextUpCard from '../shared/NextUpCard';
import QuestTracker from '../home/QuestTracker';
import { questsDoneToday, STREAK_QUEST_IDS } from '../../lib/questState';
import { lsGet } from '../../lib/safeStorage';

const RECENT_KEY = 'nh_recent_exercises';
function recordRecentExercise(id: string) {
  try {
    const prev = (JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') as string[]).filter(
      (x) => x !== id,
    );
    localStorage.setItem(RECENT_KEY, JSON.stringify([id, ...prev].slice(0, 6)));
  } catch {
    /* ignore */
  }
}

interface GradTabProps {
  sh: <T>(arr: T[]) => T[];
  sCurEx: (id: string) => void;
  onLaunchQuiz: (items: unknown[]) => void;
  onLaunchFlash: (items: unknown[]) => void;
  onLaunchListen: (items: unknown[]) => void;
  onLaunchMatch: (items: unknown[]) => void;
  onLaunchSpeaking: (items?: unknown[]) => void;
}

export default function GradTab({
  sh,
  sCurEx,
  onLaunchQuiz,
  onLaunchFlash,
  onLaunchListen,
  onLaunchMatch,
  onLaunchSpeaking,
}: GradTabProps) {
  const { setScr } = useApp();
  const { stats: st } = useStats();
  const { content, loading: contentLoading } = useContent();
  const lc = st?.lc ?? 0;
  const userCefr = getContentUnlockLevel(getUserCefr(st?.xp ?? 0, st?.lc ?? 0, st?.gc ?? 0));

  const [view, setView] = useState<'list' | 'map'>(
    () => (lsGet('nh_grad_view') as 'list' | 'map') || 'list',
  );
  const [openPlace, setOpenPlace] = useState<PlaceId | null>(null);
  // Why a pooled exercise could not open, in the learner's words. Cleared on a
  // successful launch and whenever they leave the place, so it can never
  // outlive the tap that caused it.
  const [launchError, setLaunchError] = useState<string | null>(null);

  function chooseView(v: 'list' | 'map') {
    setView(v);
    try {
      localStorage.setItem('nh_grad_view', v);
    } catch {
      /* ignore */
    }
  }

  // ── launch handlers (parity with the retired PracticeTab) ──────────────
  // The learner's acquisition deck (lib/vocabPool): own band plus anything
  // already tracked, so practice here meets level-appropriate words.
  const pool = acquisitionPool(content, vocabLevel(st ?? undefined));
  // The payload builders moved to lib/practiceLaunch so the Learning Center can
  // open these same five screens correctly. They are ScreenGuard-protected: a
  // bare setScr lands on the "start this properly" dead end, which is what the
  // Center's phase-2 rows did. One definition, two callers.
  //
  // EVERY POOLED LAUNCH GOES THROUGH HERE, AND NONE MAY BE SILENT (2026-09-24).
  // `pool` is empty until /api/content/core lands, and measured against the real
  // build that window cost the learner four of the five exercises in Grad:
  // Govori and Kviz did NOTHING AT ALL (`launchSpeaking` and `launchMcGame`
  // return on an empty list), while Kartice and Spoji parove navigated to the
  // ScreenGuard, which tells the learner to "start this from the Practice tab"
  // — the tab they are standing on, about a session that never existed.
  //
  // The Learning Center met this exact race and fixed it; the Grad tab is the
  // app's PRIMARY route to these same screens and was never touched. The
  // decision and its three sentences live in lib/practiceLaunch so the two
  // callers cannot drift.
  function launchPooled(build: () => unknown[], go: (items: unknown[]) => void): void {
    const items = content ? build() : [];
    const block = poolLaunchBlock(content, contentLoading, items);
    if (block) {
      setLaunchError(POOL_LAUNCH_COPY[block]);
      return;
    }
    setLaunchError(null);
    go(items);
  }

  function startQuiz() {
    launchPooled(() => quizItems(pool, sh), onLaunchQuiz);
  }
  function startFlashcards() {
    launchPooled(() => flashcardPool(pool, sh), onLaunchFlash);
  }
  function startMatch() {
    launchPooled(() => matchPool(pool, sh), onLaunchMatch);
  }
  function startListening() {
    // THE THIRD LISTEN LAUNCH SITE. The 2026-09-04 fix levelled the session and
    // learn-path launchers and recorded "both launch sites"; this one — the
    // Practice tab's own button — was never in that count, so it went on
    // handing an A1 learner a bank that is 84% B1-C2. The filter stays BEFORE
    // the slice inside listeningItems.
    onLaunchListen(listeningItems(LISTEN as { level?: string }[], vocabLevel(st), sh));
  }
  function startSpeaking() {
    launchPooled(() => speakingItems(pool, sh), onLaunchSpeaking);
  }
  function startReview() {
    setScr('review');
    sCurEx('review');
  }
  function startPitchAccent() {
    setScr('pitchaccent');
    sCurEx('pitchaccent');
  }
  function startShadowing() {
    setScr('shadowing');
    sCurEx('shadowing');
  }
  function startAspectDrill() {
    setScr('aspectdrill');
    sCurEx('aspectdrill');
  }
  const specialInit: Record<string, () => void> = {
    znam: () => {
      setScr('znam');
      sCurEx('znam');
    },
    unjumble: () => {
      setScr('unjumble');
      sCurEx('unjumble');
    },
    prepdrill: () => {
      setScr('prepdrill');
      sCurEx('prepdrill');
    },
    numtime: () => {
      setScr('numtime');
      sCurEx('numtime');
    },
  };
  const go = (screen: string, id?: string) => {
    const exerciseId = id ?? screen;
    if (screen.startsWith('slang:')) {
      const section = screen.slice(6);
      return () => {
        recordRecentExercise(exerciseId);
        localStorage.setItem('slangInitSection', section);
        setScr('slang');
        sCurEx('slang');
      };
    }
    const base =
      specialInit[screen] ??
      (() => {
        setScr(screen);
        sCurEx(screen);
      });
    return () => {
      recordRecentExercise(exerciseId);
      base();
    };
  };

  const EXERCISES = buildExercises({
    go,
    setScr,
    sCurEx,
    startPitchAccent,
    startShadowing,
    startReview,
    startAspectDrill,
  });

  const { practiceQueue } = useAdaptivePractice();

  const ctx: ModelCtx = {
    exercises: EXERCISES,
    extras: {
      quiz: startQuiz,
      flash: startFlashcards,
      match: startMatch,
      listen: startListening,
      speaking: startSpeaking,
      scr: (id: string) => () => {
        recordRecentExercise(id);
        setScr(id);
        sCurEx(id);
      },
    },
    userCefr,
    recs: {
      dueReviews: getDueReviews().length,
      weakCount: Object.values(getSR() as Record<string, { w?: number }>).filter(
        (v) => (v.w || 0) > 0,
      ).length,
      isNewUser: lc === 0 && !lsGet('nh_placement_done'),
      userGoal: lsGet('nh_goal'),
    },
    queue: practiceQueue,
  };

  const rec = recommendedVisit(ctx);

  // Daily quests. The dot row used to count a HARDCODED FOUR — speak, grammar,
  // master, reading — of the fourteen a learner can complete, which is why
  // finishing the other ten moved nothing visible. Both the row and the board
  // below now read one map (lib/questState), so they cannot disagree.
  const questsDoneMap = questsDoneToday(DAILY_QUESTS, (getStreak()?.count ?? 0) > 0);
  const questsDone = (() => {
    const ids = Object.keys(questsDoneMap).filter((id) => !STREAK_QUEST_IDS.includes(id));
    return { done: ids.filter((id) => questsDoneMap[id]).length, total: ids.length };
  })();

  if (openPlace) {
    return (
      <PlaceScreen
        placeId={openPlace}
        ctx={ctx}
        launchError={launchError}
        onBack={() => {
          setLaunchError(null);
          setOpenPlace(null);
        }}
      />
    );
  }

  const statsByPlace = Object.fromEntries(
    PLACES.map((p) => {
      const s = placeStats(p.id, ctx);
      return [p.id, { done: s.done, total: s.total, due: s.due, lockedCount: s.lockedCount }];
    }),
  ) as Record<string, { done: number; total: number; due: number; lockedCount: number }>;

  const teal = '#0e7490';

  return (
    <div>
      {/* ── HERO + VIEW TOGGLE ─────────────────────────────────────────── */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 900,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: '#c2410c',
              }}
            >
              u grad
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 22,
                fontWeight: 900,
                color: 'var(--heading)',
              }}
            >
              Grad
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              background: 'var(--bar-bg)',
              border: '1px solid var(--card-b)',
              borderRadius: 11,
              padding: 3,
              gap: 2,
            }}
          >
            <button
              onClick={() => chooseView('list')}
              aria-pressed={view === 'list'}
              style={toggleStyle(view === 'list', teal)}
            >
              📋 Popis
            </button>
            <button
              onClick={() => chooseView('map')}
              aria-pressed={view === 'map'}
              style={toggleStyle(view === 'map', teal)}
            >
              🗺️ Karta
            </button>
          </div>
        </div>
        <div
          style={{
            height: 3,
            borderRadius: 2,
            marginTop: 10,
            background: 'linear-gradient(90deg,#D40030 0 33%,#fff 33% 66%,#0e7490 66%)',
          }}
        />
      </div>

      {/* The single recommended action — a menu is never just a menu (owner
          directive 2026-08-16; same engine as the post-completion prompt). */}
      <NextUpCard />

      {view === 'map' ? (
        <GradMap rec={rec} onOpenPlace={setOpenPlace} statsByPlace={statsByPlace} />
      ) : (
        <>
          {/* ── TODAY CARD ───────────────────────────────────────────── */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 900,
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--subtext)',
              margin: '4px 2px 10px',
            }}
          >
            Danas u gradu
          </div>
          <button
            onClick={() => rec.launch()}
            style={{
              width: '100%',
              textAlign: 'left',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Outfit',sans-serif",
              background: 'linear-gradient(145deg,#0e7490 0%,#155e75 55%,#164e63 100%)',
              borderRadius: 20,
              padding: '16px 16px 14px',
              color: '#fff',
              boxShadow: '0 10px 28px rgba(14,116,144,.32)',
              marginBottom: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              <div
                style={{
                  flex: 'none',
                  borderRadius: '50%',
                  padding: 3,
                  background: 'linear-gradient(135deg,#C8980A,#e0b84a)',
                  display: 'flex',
                }}
              >
                {rec.host ? (
                  <CharacterPortrait name={rec.host} size={52} />
                ) : (
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 26,
                    }}
                  >
                    ☀️
                  </span>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 900,
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.7)',
                  }}
                >
                  Preporučeno za danas
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.2, marginTop: 2 }}>
                  {rec.hr}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.72)', marginTop: 3 }}>
                  {rec.en} · ~{rec.durationMin} min
                </div>
              </div>
              <span
                style={{
                  flex: 'none',
                  background: 'rgba(255,255,255,.2)',
                  border: '1px solid rgba(255,255,255,.3)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                Idemo →
              </span>
            </div>
          </button>
          {/* The Today card launches through the same `ctx.extras` functions the
              place rows do, so a pooled recommendation tapped from here can be
              blocked for the same reason — and the place screen that normally
              shows why is not on screen. */}
          {launchError && (
            <p
              data-testid="grad-launch-error"
              style={{ fontSize: 12, color: 'var(--danger, #b91c1c)', margin: '8px 2px 0' }}
            >
              {launchError}
            </p>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              margin: '11px 2px 2px',
              fontSize: 11,
              color: 'var(--subtext)',
              fontWeight: 600,
            }}
          >
            <span style={{ display: 'flex', gap: 5 }}>
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: i < questsDone.done ? '#C8980A' : 'var(--card-b)',
                  }}
                />
              ))}
            </span>
            {questsDone.done} of {questsDone.total} dnevnih zadataka
          </div>

          {/* ── DAILY QUESTS ─────────────────────────────────────────────
              QuestTracker was written for Home and has not been MOUNTED since
              the Phase 6 Grad redesign — nothing imported it, so its cards,
              colours, tier-progression and Start buttons were unreachable while
              the quests themselves kept being marked. It lives here now, under
              the row it expands, because this is where quests already surface
              and Home is a hero-only guided path by owner directive.

              `onQuestStart` goes through the REAL launchers where a screen needs
              one. `perfect` routes to `flashcards`, whose route renders
              ScreenGuard unless a launcher has seeded fcInitPool — so a plain
              setScr there would have put "Start →" on a dead end. Same for the
              Listening Quest and the LISTEN bank. */}
          <QuestTracker
            questsDone={questsDoneMap}
            allQuestsDone={questsDone.done === questsDone.total}
            onQuestStart={(_id, screen) => {
              if (screen === 'flashcards') startFlashcards();
              else if (screen === 'listening') startListening();
              else setScr(screen);
            }}
          />

          {/* ── PLACES LIST ──────────────────────────────────────────── */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 900,
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--subtext)',
              margin: '18px 2px 10px',
            }}
          >
            Mjesta u gradu
          </div>
          {PLACES.map((p) => {
            const s = statsByPlace[p.id]!;
            const recommended = rec.placeId === p.id;
            const signal = s.due > 0 ? `${s.due} due` : `${s.total} vježbi`;
            return (
              <button
                key={p.id}
                onClick={() => setOpenPlace(p.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 13,
                  background: 'var(--card)',
                  border: recommended ? '1.5px solid #C8980A' : '1px solid var(--card-b)',
                  borderRadius: 16,
                  padding: '13px 14px',
                  marginBottom: 10,
                  cursor: 'pointer',
                  fontFamily: "'Outfit',sans-serif",
                  boxShadow: recommended
                    ? '0 2px 10px rgba(200,152,10,.18)'
                    : '0 1px 3px rgba(0,0,0,.05)',
                }}
              >
                {p.host ? (
                  <span style={{ flex: 'none', display: 'flex' }}>
                    <CharacterPortrait name={p.host} size={48} />
                  </span>
                ) : (
                  <span
                    style={{
                      flex: 'none',
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: p.tint,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 25,
                    }}
                  >
                    {p.icon}
                  </span>
                )}
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 16,
                      fontWeight: 800,
                      color: 'var(--heading)',
                      lineHeight: 1.15,
                    }}
                  >
                    {p.name}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 11.5,
                      color: 'var(--subtext)',
                      marginTop: 2,
                    }}
                  >
                    {p.blurb}
                  </span>
                </span>
                <span
                  style={{
                    flex: 'none',
                    fontSize: 11,
                    fontWeight: 700,
                    // #6b4e0a clears WCAG AA (>=4.5:1) on the gold-tinted pill;
                    // the lighter #9a7407 measured 3.81:1 (axe serious).
                    color: recommended ? '#6b4e0a' : 'var(--subtext)',
                    background: recommended ? 'rgba(200,152,10,.14)' : 'transparent',
                    borderRadius: 8,
                    padding: recommended ? '2px 8px' : 0,
                  }}
                >
                  {signal}
                </span>
              </button>
            );
          })}
        </>
      )}
    </div>
  );
}

function toggleStyle(on: boolean, teal: string): React.CSSProperties {
  return {
    border: 'none',
    background: on ? 'var(--card)' : 'none',
    color: on ? teal : 'var(--subtext)',
    fontFamily: "'Outfit',sans-serif",
    fontSize: 12,
    fontWeight: 800,
    padding: '5px 11px',
    borderRadius: 8,
    cursor: 'pointer',
    boxShadow: on ? '0 1px 3px rgba(0,0,0,.12)' : 'none',
  };
}
