/**
 * useScreenLauncher — all screen navigation and exercise launch functions.
 *
 * Extracted from App.jsx to isolate the "how do I start an exercise" logic.
 * Also owns the dwell-time tracker for LEARN_PATH "black hole" screens and goBack().
 */
import { useEffect, useRef, useCallback } from 'react';
import { trackStart, trackAbandon } from '../lib/learnerStyle.js';
import { clearActiveSessionActivity } from '../lib/sessionSignal.js';
import { pickSessionLesson } from '../lib/sessionLessonPick';
import { BLACK_HOLE_SCREENS, DWELL_XP } from '../lib/blackHoleScreens';
import { notifyLaunchFailure } from '../lib/launchFailure';
import { isChunkLoadError, reloadWithCachePurge } from '../lib/chunkErrors';
import { _getData, _getVocabSource, _buildAdaptivePool } from '../lib/exerciseData';
import type { VocabWord } from '../lib/exerciseData';
// The level-gated vocabulary deck. Every pool below used to be
// `allCats.flatMap((t) => V[t])` over a 56-name list hardcoded in App.tsx that
// had fallen 40 categories behind the server (the whole B1 band), so no drill
// could ever reach 1,030 of the core words and none reached the B2–C2 tiers.
// `allCats` survives only as an explicit override for test fixtures.
import { vocabPool, acquisitionPool, vocabCategories, vocabLevel } from '../lib/vocabPool';
import { isUnlocked } from '../lib/cefr';
import type { VocabSource } from '../lib/vocabPool';
import { reportError } from '../lib/errorReporter';
// Web Storage access THROWS (SecurityError) — it does not return null — when the
// profile blocks cookies/site data (Family Link, managed profiles, "block all
// cookies", some embedded webviews). Every launcher below writes nh_ex_start
// immediately BEFORE its setScr(...) call, and goBack()'s read is its literal
// first statement, so a raw call here meant nothing opened and nothing exited:
// the app was bricked for those profiles, not merely degraded. sessionStorage is
// governed by the same permission gate as localStorage — see safeStorage.ts.
import { lsGet, lsSet, lsRemove, ssGet, ssSet, ssRemove } from '../lib/safeStorage';
import { markExerciseDone } from './useAward.js';
import type { Stats, StatsDelta } from '../types/index.js';
import type { AwardActivityType } from '../lib/activityXp.js';
import { getContent, getGrammar, getLessons } from '../lib/contentClient';

// V is only needed when launching exercises — lazy import keeps chunk-data
// out of the startup bundle. GRAM and LESSONS are fetched server-side via
// getGrammar()/getLessons() (SP11b/SP11c).
// sh is a local Fisher-Yates using Math.random().
function _sh<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

type Row = VocabWord;
/**
 * The LISTEN bank at or below the learner's level. Every item carries a
 * `level`; before 2026-09-04 both launch sites shuffled the whole bank, so an A1
 * learner's Listening Quiz was mostly B1–C2 sentences. Falls back to the whole
 * bank when the levelled slice is too thin for a quiz — a launch must never
 * bail on a classification gap. Exported for the wiring test.
 */
export function _levelledListen(bank: unknown[], level = vocabLevel()): unknown[] {
  const ok = bank.filter((q) => {
    const lv = (q as { level?: string } | null)?.level;
    return !lv || isUnlocked(lv, level);
  });
  return ok.length >= 4 ? ok : bank;
}
/** Everything the learner may be served (distractors, topic fallbacks). */
function _servable(src: VocabSource, cats?: string[]): Row[] {
  return vocabPool(src, vocabLevel(), { cats }) as Row[];
}
/** What the learner should meet next (session decks, quiz questions). */
function _acquire(src: VocabSource, cats?: string[]): Row[] {
  return acquisitionPool(src, vocabLevel(), { cats }) as Row[];
}

interface McQuestion {
  hr: string;
  en: string;
  ph?: string;
  opts: string[];
  correct: string;
}

interface LearnPathItem {
  id?: string;
  go?: string;
  topic?: string;
  filter?: unknown;
  lessonId?: string;
}

interface ScreenLauncherParams {
  setScr: (screen: string) => void;
  navigate: (delta: number) => void;
  curEx: string;
  sCurEx: (ex: string) => void;
  currentScreen: string;
  setStats: (fn: (prev: Stats) => Stats) => void;
  award: (
    amt: number,
    celebrate?: boolean,
    activityType?: AwardActivityType,
    exerciseId?: string,
  ) => void;
  writeDelta: (delta: StatsDelta & Record<string, unknown>) => void;
  /** Test-fixture override of the derived deck; production omits it. */
  allCats?: string[];
  gc: number;
  tab: string;
  setTab: (tab: string) => void;
  // Lesson setters
  sLt: (v: unknown) => void;
  sLi: (v: unknown[]) => void;
  sLx: (v: number) => void;
  sLs: (v: number) => void;
  sLp: (v: string) => void;
  sLa: (v: boolean) => void;
  sLsl: (v: number) => void;
  sQi: (v: unknown[]) => void;
  // Grammar setters
  sGl: (v: unknown) => void;
  sGp: (v: string) => void;
  sGx: (v: number) => void;
  sGs: (v: number) => void;
  sGa: (v: boolean) => void;
  sGsl: (v: number) => void;
  // Exercise init pools
  setMcInitQ: (v: unknown[]) => void;
  setMcResultQ: (v: unknown[]) => void;
  setMcResultScore: (v: number) => void;
  setMcMistakes: (v: unknown[]) => void;
  setFcInitPool: (v: unknown[]) => void;
  setLsInitQ: (v: unknown[]) => void;
  setMatchInitPool: (v: unknown[]) => void;
  // Speaking setters
  sSi: (v: unknown[]) => void;
  sSx: (v: number) => void;
  sSw: (v: unknown) => void;
  sSr: (v: unknown) => void;
  sSsc: (v: number) => void;
  // Animated lesson
  setAnimLesson: (v: unknown) => void;
}

interface ScreenLauncherResult {
  resumeLesson: () => Promise<void>;
  launchAnimLesson: (lessonId: string) => Promise<void>;
  launchMcGame: (questions: McQuestion[]) => void;
  launchLegendary: (item: LearnPathItem) => Promise<void>;
  launchCheckpoint: (levelIndex: number, levelItems: LearnPathItem[]) => Promise<void>;
  mcGameComplete: (questions: McQuestion[], score: number, mistakes: unknown[]) => void;
  launchFlashcards: (pool: unknown[]) => void;
  launchListening: (questions: unknown[]) => void;
  launchMatch: (pool: unknown[]) => void;
  launchSpeaking: (items: unknown[]) => void;
  launchPathItem: (item: LearnPathItem) => Promise<void>;
  launchSessionActivity: (screen: string) => Promise<void>;
  goBack: () => void;
}

export function useScreenLauncher({
  setScr,
  navigate,
  curEx,
  sCurEx,
  currentScreen,
  setStats,
  award,
  writeDelta,
  allCats,
  gc,
  tab,
  setTab,
  sLt,
  sLi,
  sLx,
  sLs,
  sLp,
  sLa,
  sLsl,
  sQi,
  sGl,
  sGp,
  sGx,
  sGs,
  sGa,
  sGsl,
  setMcInitQ,
  setMcResultQ,
  setMcResultScore,
  setMcMistakes,
  setFcInitPool,
  setLsInitQ,
  setMatchInitPool,
  sSi,
  sSx,
  sSw,
  sSr,
  sSsc,
  setAnimLesson,
}: ScreenLauncherParams): ScreenLauncherResult {
  const lpDwellRef = useRef<{
    screen: string;
    statType: string;
    timer: ReturnType<typeof setTimeout>;
  } | null>(null);
  const returnContextRef = useRef<{ tab: string; screen?: string } | null>(null);

  useEffect(() => {
    const dwell = lpDwellRef.current;
    if (dwell && currentScreen !== dwell.screen) {
      clearTimeout(dwell.timer);
      lpDwellRef.current = null;
    }
  }, [currentScreen]);

  const resumeLesson = useCallback(async (): Promise<void> => {
    try {
      const r = JSON.parse(lsGet('nh_lesson_resume') || 'null') as {
        topic?: string;
      } | null;
      if (!r || !r.topic) return;
      const V = ((await _getVocabSource()).V ?? {}) as Record<string, Row[]>;
      const vocabPool = V[r.topic];
      if (!vocabPool || vocabPool.length < 2) {
        // Only a LOADED vocabulary can prove a topic is stale. When V is empty the
        // topic is unverifiable, and deleting the token on that basis threw away a
        // resumable lesson the user had not finished — so bail without touching it.
        if (Object.keys(V).length === 0) return;
        // Stale resume token referencing an unknown topic — clear it and go to learn path
        lsRemove('nh_lesson_resume');
        setScr('learnpath');
        return;
      }
      const items = _sh(vocabPool);
      returnContextRef.current = { tab: 'learn', screen: 'dashboard' };
      sLt(r.topic);
      sLi(items);
      sLx(0);
      sLs(0);
      sLp('learn');
      sLa(false);
      sLsl(-1);
      sQi([]);
      sCurEx('vocab_' + r.topic);
      ssSet('nh_ex_start', Date.now().toString());
      setScr('lesson');
    } catch (_) {}
  }, [setScr, sCurEx, sLt, sLi, sLx, sLs, sLp, sLa, sLsl, sQi]);

  const launchAnimLesson = useCallback(
    async (lessonId: string): Promise<void> => {
      const lessons = await getLessons();
      const l = lessons.find((x) => x.id === lessonId);
      if (l) {
        returnContextRef.current = { tab: tab || 'learn', screen: currentScreen || 'dashboard' };
        setAnimLesson(l);
        sCurEx('animlesson');
        setScr('animlesson');
      }
    },
    [setScr, sCurEx, setAnimLesson, tab, currentScreen],
  );

  const launchMcGame = useCallback(
    (questions: McQuestion[]): void => {
      if (!questions || questions.length === 0) return;
      returnContextRef.current = { tab: tab || 'practice', screen: currentScreen || 'dashboard' };
      setMcInitQ(questions);
      sCurEx('mcgame');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('quiz');
      setScr('mcgame');
    },
    [setScr, sCurEx, setMcInitQ, tab, currentScreen],
  );

  const launchCheckpoint = useCallback(
    async (levelIndex: number, levelItems: LearnPathItem[]): Promise<void> => {
      const src = await _getVocabSource();
      const V = (src.V ?? {}) as Record<string, Row[]>;
      const topics = levelItems.map((it) => it.topic).filter(Boolean) as string[];
      const pool =
        topics.length > 0
          ? topics.flatMap((t) => V[t] || []).filter((w) => w && w[0] && w[1])
          : _servable(src, allCats);
      if (pool.length === 0) {
        // Reported, not silent: this is a checkpoint over topics the path itself
        // offered, so an empty pool means the vocabulary source is broken — the
        // exact failure that went unseen while V was read off the client barrel.
        reportError(new Error('checkpoint launch: empty vocab pool'), 'launch-empty-pool');
        return;
      }
      const adaptivePool = _buildAdaptivePool(pool);
      const seen = new Set<string>();
      const deduped = _sh(adaptivePool).filter((w) => {
        if (seen.has(w[0])) return false;
        seen.add(w[0]);
        return true;
      });
      const globalPool = _servable(src, allCats);
      const qs: McQuestion[] = deduped.slice(0, 15).flatMap((w) => {
        const wr = _sh(globalPool.filter((x) => x[1] !== w[1]))
          .slice(0, 3)
          .map((x) => x[1]);
        if (wr.length < 3) return []; // skip if not enough distractors (tiny vocabulary pool)
        return [
          { hr: w[0], en: w[1], ph: w[2], opts: _sh([w[1]].concat(wr)), correct: w[1] },
        ] as McQuestion[];
      });
      ssSet('nh_checkpoint_level', String(levelIndex));
      returnContextRef.current = { tab: 'learn', screen: 'learnpath' };
      setMcInitQ(qs);
      sCurEx('mcgame');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('quiz');
      setScr('mcgame');
    },
    [setScr, sCurEx, setMcInitQ, allCats],
  );

  const launchLegendary = useCallback(
    async (item: LearnPathItem): Promise<void> => {
      const src = await _getVocabSource();
      const V = (src.V ?? {}) as Record<string, Row[]>;
      const topicPool = item.topic ? V[item.topic] || [] : [];
      const globalPool = _servable(src, allCats);
      const basePool =
        topicPool.length >= 5
          ? [...topicPool, ...globalPool.slice(0, Math.ceil(globalPool.length * 0.2))]
          : globalPool;
      const adaptivePool = _buildAdaptivePool(basePool.filter((w) => w && w[0] && w[1]));
      const seen = new Set<string>();
      const deduped = _sh(adaptivePool).filter((w) => {
        if (seen.has(w[0])) return false;
        seen.add(w[0]);
        return true;
      });
      const qs: McQuestion[] = deduped.slice(0, 15).flatMap((w) => {
        const wr = _sh(globalPool.filter((x) => x[1] !== w[1]))
          .slice(0, 4)
          .map((x) => x[1]);
        if (wr.length < 3) return [];
        return [
          { hr: w[0], en: w[1], ph: w[2], opts: _sh([w[1]].concat(wr)), correct: w[1] },
        ] as McQuestion[];
      });
      if (qs.length === 0) {
        // Unlike every sibling launcher this one had no empty guard, so an empty
        // pool navigated to McGame with ZERO questions — a dead screen the user
        // cannot finish or score. Fail without navigating, and report it.
        reportError(new Error('legendary launch: empty question set'), 'launch-empty-pool');
        return;
      }
      returnContextRef.current = { tab: 'learn', screen: 'learnpath' };
      setMcInitQ(qs);
      ssSet('nh_legendary_mode', '1');
      sCurEx('mcgame');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('quiz');
      setScr('mcgame');
    },
    [setScr, sCurEx, setMcInitQ, allCats],
  );

  const mcGameComplete = useCallback(
    (questions: McQuestion[], score: number, mistakes: unknown[]): void => {
      const cpLevel = ssGet('nh_checkpoint_level');
      if (cpLevel !== null) {
        const pct = questions.length > 0 ? score / questions.length : 0;
        if (pct >= 0.7) {
          try {
            const checkpoints = JSON.parse(lsGet('nh_checkpoints') || '{}') as Record<
              string,
              boolean
            >;
            checkpoints[cpLevel] = true;
            lsSet('nh_checkpoints', JSON.stringify(checkpoints));
          } catch (_) {}
        }
        ssRemove('nh_checkpoint_level');
      }
      setMcResultQ(questions);
      setMcResultScore(score);
      setMcMistakes(mistakes || []);
      setScr('mcresult');
    },
    [setScr, setMcResultQ, setMcResultScore, setMcMistakes],
  );

  const launchFlashcards = useCallback(
    (pool: unknown[]): void => {
      returnContextRef.current = { tab: tab || 'practice', screen: currentScreen || 'dashboard' };
      setFcInitPool(pool);
      sCurEx('flashcards');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('flashcards');
      setScr('flashcards');
    },
    [setScr, sCurEx, setFcInitPool, tab, currentScreen],
  );

  const launchListening = useCallback(
    (questions: unknown[]): void => {
      returnContextRef.current = { tab: tab || 'practice', screen: currentScreen || 'dashboard' };
      setLsInitQ(questions);
      sCurEx('listening');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('listening');
      setScr('listening');
    },
    [setScr, sCurEx, setLsInitQ, tab, currentScreen],
  );

  const launchMatch = useCallback(
    (pool: unknown[]): void => {
      returnContextRef.current = { tab: tab || 'practice', screen: currentScreen || 'dashboard' };
      setMatchInitPool(pool);
      sCurEx('match');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('matching');
      setScr('match');
    },
    [setScr, sCurEx, setMatchInitPool, tab, currentScreen],
  );

  const launchSpeaking = useCallback(
    (items: unknown[]): void => {
      if (!items || items.length === 0) return;
      returnContextRef.current = { tab: tab || 'practice', screen: currentScreen || 'dashboard' };
      sSi(items);
      sSx(0);
      sSw(items[0]);
      sSr(null);
      sSsc(0);
      sCurEx('speaking');
      ssSet('nh_ex_start', Date.now().toString());
      trackStart('speaking');
      setScr('speaking');
    },
    [setScr, sCurEx, sSi, sSx, sSw, sSr, sSsc, tab, currentScreen],
  );

  const launchPathItem = useCallback(
    async (item: LearnPathItem): Promise<void> => {
      if (!item) return;
      // Record path item visit by id immediately — enables vs.includes(id) click-through gates in ck()
      if (item.id) {
        let alreadyTracked = false;
        setStats((prev) => {
          if (prev.vs?.includes(item.id!)) {
            alreadyTracked = true;
            return prev;
          }
          return { ...prev, vs: [...(prev.vs || []), item.id!] };
        });
        if (!alreadyTracked && writeDelta) writeDelta({ vs: [item.id!] });
      }
      if (item.go === 'lesson') {
        const src = await _getVocabSource();
        const V = (src.V ?? {}) as Record<string, Row[]>;
        const raw = item.topic ? V[item.topic] : undefined;
        // Fall back to the learner's acquisition deck when the topic is missing or
        // has too little vocabulary — never silent-fail
        const pool = raw && raw.length >= 2 ? raw : _acquire(src, allCats);
        if (pool.length < 2) {
          // This is the app's primary lesson entry point (Learn Path tile, Home
          // "continue" chip, search result). It fell back to the whole vocabulary
          // and still came up short, so report rather than no-op invisibly.
          reportError(new Error('path lesson launch: empty vocab pool'), 'launch-empty-pool');
          return;
        }
        const items = _sh(pool);
        const cats = vocabCategories(src, vocabLevel(), { cats: allCats });
        const topic =
          item.topic ||
          (cats.length > 0 ? cats[Math.floor(Math.random() * cats.length)] : 'greetings');
        const returnScreen =
          currentScreen && currentScreen !== 'dashboard' ? currentScreen : 'dashboard';
        returnContextRef.current = { tab: 'learn', screen: returnScreen };
        sLt(topic);
        sLi(items);
        sLx(0);
        sLs(0);
        sLp('learn');
        sLa(false);
        sLsl(-1);
        sQi([]);
        ssSet('nh_ex_start', Date.now().toString());
        trackStart('flashcards');
        setScr('lesson');
        sCurEx('vocab_' + topic);
      } else if (item.go === 'grammar') {
        const grammar = await getGrammar();
        const GRAM = grammar.GRAM as unknown as {
          beginner: unknown[];
          intermediate: unknown[];
          advanced: unknown[];
        };
        // Flatten all grammar lessons and cycle via gc so each quest visit advances to the next lesson
        const allGramLessons = [
          ...(GRAM.beginner || []),
          ...(GRAM.intermediate || []),
          ...(GRAM.advanced || []),
        ];
        const lesson =
          allGramLessons.length > 0 ? allGramLessons[gc % allGramLessons.length] : GRAM.beginner[0];
        sGl(lesson);
        sGp('learn');
        sGx(0);
        sGs(0);
        sGa(false);
        sGsl(-1);
        ssSet('nh_ex_start', Date.now().toString());
        const returnScreen =
          currentScreen && currentScreen !== 'dashboard' ? currentScreen : 'learnpath';
        returnContextRef.current = { tab: 'learn', screen: returnScreen };
        trackStart('grammar');
        setScr('grammar');
        sCurEx('grammar');
      } else if (item.go === 'listening') {
        const { LISTEN } = (await _getData()) as { LISTEN: unknown[] };
        const pool = Array.isArray(LISTEN) ? _sh(_levelledListen(LISTEN)).slice(0, 10) : [];
        if (pool.length === 0) return;
        returnContextRef.current = { tab: 'learn', screen: 'learnpath' };
        setLsInitQ(pool);
        sCurEx('listening');
        ssSet('nh_ex_start', Date.now().toString());
        trackStart('listening');
        setScr('listening');
      } else if (item.go === 'speaking') {
        const pool = _acquire(await _getVocabSource(), allCats);
        const items = _sh(pool).slice(0, 6);
        if (items.length === 0) {
          reportError(new Error('path speaking launch: empty vocab pool'), 'launch-empty-pool');
          return;
        }
        returnContextRef.current = { tab: 'learn', screen: 'learnpath' };
        sSi(items);
        sSx(0);
        sSw(items[0]);
        sSr(null);
        sSsc(0);
        sCurEx('speaking');
        ssSet('nh_ex_start', Date.now().toString());
        trackStart('speaking');
        setScr('speaking');
      } else if (item.go === 'mcgame') {
        const pool = _acquire(await _getVocabSource(), allCats);
        const adaptivePool = _buildAdaptivePool(pool);
        const seen = new Set<string>();
        const deduped = _sh(adaptivePool).filter((w) => {
          if (seen.has(w[0])) return false;
          seen.add(w[0]);
          return true;
        });
        const qs: McQuestion[] = deduped.slice(0, 10).map((w) => {
          const wr = _sh(pool.filter((x) => x[1] !== w[1]))
            .slice(0, 3)
            .map((x) => x[1]);
          return { hr: w[0], en: w[1], ph: w[2], opts: _sh([w[1]].concat(wr)), correct: w[1] };
        });
        if (qs.length === 0) {
          // launchMcGame early-returns on an empty set, so this tap was a silent
          // no-op. Report before delegating so the dead tile is visible upstream.
          reportError(new Error('path mcgame launch: empty vocab pool'), 'launch-empty-pool');
          return;
        }
        launchMcGame(qs);
      } else if (item.go === 'animlesson' && item.lessonId) {
        const lessons = await getLessons();
        const l = lessons.find((x) => x.id === item.lessonId);
        if (!l) return;
        ssSet('nh_ex_start', Date.now().toString());
        returnContextRef.current = { tab: 'learn', screen: 'learnpath' };
        trackStart('grammar');
        setAnimLesson(l);
        sCurEx('animlesson');
        setScr('animlesson');
      } else {
        ssSet('nh_ex_start', Date.now().toString());
        // Always return to learnpath after completing any path item (black hole or direct screen).
        // This means the user only ever needs to click "Done" or "Back" — they land back on the path.
        const returnScreen =
          currentScreen && currentScreen !== 'dashboard' ? currentScreen : 'learnpath';
        returnContextRef.current = { tab: 'learn', screen: returnScreen };
        const typeMap: Record<string, string> = {
          review: 'srs_review',
          shadowing: 'shadowing',
          writing: 'writing',
          listening: 'listening',
          speaking: 'speaking',
          speaking_sprint: 'speaking',
          aiconvo: 'conversation',
          ai_listening: 'listening',
          cloze: 'cloze',
          reading: 'reading',
          readlist: 'reading',
        };
        if (item.go && typeMap[item.go]) trackStart(typeMap[item.go]!);
        const bhStat = item.go ? BLACK_HOLE_SCREENS[item.go] : undefined;
        if (bhStat && item.go) {
          if (lpDwellRef.current?.timer) clearTimeout(lpDwellRef.current.timer);
          const screenId = item.go;
          // Immediately record screen ID in vs — satisfies ck() checks that use the screen name
          // (e.g. 'phonology', 'aspect', 'vocative') rather than the item.id click-through gate.
          // Without this, users who exit in <20s see the item stuck as incomplete.
          // wasFirstVisit is captured by the closure and read 20s later (after React has rendered
          // and run the updater). The immediate writeDelta fires unconditionally — arrayUnion is
          // idempotent, so repeat writes are safe. This mirrors the click-through gate pattern.
          let wasFirstVisit = false;
          setStats((prev) => {
            if (prev.vs?.includes(screenId)) return prev;
            wasFirstVisit = true;
            return { ...prev, vs: [...(prev.vs || []), screenId] };
          });
          if (writeDelta) writeDelta({ vs: [screenId] });
          // After 20s of dwell time, award lc/gc progress credit and XP.
          // vs is already written above; the timer only handles the counter increment.
          const timer = setTimeout(() => {
            if (!wasFirstVisit) return; // repeat visit — counters already credited
            setStats((prev) => {
              if (bhStat === 'lc') return { ...prev, lc: prev.lc + 1 };
              if (bhStat === 'gc') return { ...prev, gc: prev.gc + 1 };
              return prev;
            });
            if (writeDelta) {
              const delta: StatsDelta & Record<string, unknown> = {};
              if (bhStat === 'lc') delta.lc = 1;
              if (bhStat === 'gc') delta.gc = 1;
              if (Object.keys(delta).length > 0) writeDelta(delta);
            }
            // Credit the black-hole screen BY NAME. `award` is a useCallback over
            // [curEx, …], so the one captured here carries curEx as it was at the
            // click — i.e. before the sCurEx(item.go) further down this same
            // function. Without the explicit id this 20s-later award attributes
            // itself to whatever exercise the user was in previously, which is not
            // cosmetic: it stamps that exercise's XP cooldown (destroying its XP
            // for the rest of the day), counts a synced production rep for it if it
            // is a production screen, and can complete an abandoned daily-session
            // activity. Only goBack() clears curEx, so any exit via the tab bar or
            // browser-back leaves a stale id to be mis-credited.
            //
            // XP rebalance (fluency initiative #3, 2026-08-14): dwell XP trimmed
            // 15 → 5. Presence on an info screen is worth a token amount, not a
            // third of a drill; the lc/gc counter credit above is untouched (it
            // drives Learn-Path completion, which stays as designed).
            award(DWELL_XP, undefined, 'lesson', screenId);
          }, 20000);
          lpDwellRef.current = { screen: screenId, statType: bhStat, timer };
        }
        if (item.go === 'readlist') {
          if (item.filter) ssSet('nh_readlist_filter', JSON.stringify(item.filter));
          else ssRemove('nh_readlist_filter');
        }
        // 'dashboard' is a milestone marker (e.g. "200 XP!"), not a navigable screen.
        // setScr('dashboard') → navigate('/') is a no-op when already on the home tab.
        if (item.go === 'dashboard') {
          setScr('learnpath');
          sCurEx('learnpath');
          return;
        }
        if (item.go) {
          setScr(item.go);
          sCurEx(item.go);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      setScr,
      sCurEx,
      setStats,
      award,
      writeDelta,
      allCats,
      launchMcGame,
      currentScreen,
      sLt,
      sLi,
      sLx,
      sLs,
      sLp,
      sLa,
      sLsl,
      sQi,
      sGl,
      sGp,
      sGx,
      sGs,
      sGa,
      sGsl,
      setLsInitQ,
      setAnimLesson,
    ],
  );

  // Launches any daily-session activity by screen ID. Pool-dependent screens
  // (flashcards, mcgame, match) async-load V and initialise their pools; all
  // other exercises navigate directly. Called from HomeTab's SessionCard.
  const launchSessionActivity = useCallback(
    async (screen: string, category?: string): Promise<void> => {
      try {
        returnContextRef.current = { tab: 'home', screen: 'dashboard' };

        // The caller (SessionCard.onStart) sets nh_session_started BEFORE calling us.
        // Any early exit that does NOT navigate (e.g. empty vocab pool) calls
        // clearActiveSessionActivity(), else nh_session_started stays set with no screen
        // able to complete it — pinning the session (re-tapping "Start" just re-bails).

        if (screen === 'flashcards' || screen === 'mcgame' || screen === 'match') {
          // V is NOT in the client data barrel — vocabulary moved server-side to
          // /api/content/core (see core.js KEYS, and the note at the foot of
          // data/content.tsx). Reading _getData().V therefore yielded {}, so every
          // pool below was empty and the launch bailed with 'empty-pool' on every
          // attempt. Every other vocab consumer in the app already reads
          // content.V via useContent(); this is the non-component equivalent.
          // getContent() can throw (offline / auth / rate-limit) — that is fine
          // here, the outer catch turns it into a clean 'load-error'.
          // Deliberately NOT _getVocab(): that helper swallows the rejection to
          // protect click handlers that have no catch. This branch HAS one, and
          // it distinguishes 'load-error' from 'empty-pool' and can route a
          // stale-chunk rejection into the healer. Do not unify them.
          const globalPool = _acquire(await getContent(), allCats);

          if (screen === 'flashcards') {
            if (globalPool.length === 0) {
              clearActiveSessionActivity();
              return notifyLaunchFailure('empty-pool');
            }
            setFcInitPool(_sh(globalPool).slice(0, 20));
            sCurEx('flashcards');
            ssSet('nh_ex_start', Date.now().toString());
            trackStart('flashcards');
            setScr('flashcards');
          } else if (screen === 'mcgame') {
            const qs = _sh(globalPool)
              .slice(0, 20)
              .flatMap((w) => {
                const wr = _sh(globalPool.filter((x) => x[1] !== w[1]))
                  .slice(0, 3)
                  .map((x) => x[1])
                  .filter((s): s is string => s != null);
                if (wr.length < 3) return [];
                return [
                  {
                    hr: w[0]!,
                    en: w[1]!,
                    ph: w[2] ?? '',
                    opts: _sh([w[1]!].concat(wr)),
                    correct: w[1]!,
                  },
                ];
              });
            if (qs.length === 0) {
              clearActiveSessionActivity();
              return notifyLaunchFailure('empty-pool');
            }
            setMcInitQ(qs);
            sCurEx('mcgame');
            ssSet('nh_ex_start', Date.now().toString());
            trackStart('quiz');
            setScr('mcgame');
          } else {
            const sel = _sh(globalPool).slice(0, 6);
            if (sel.length < 2) {
              clearActiveSessionActivity();
              return notifyLaunchFailure('empty-pool');
            }
            const matchPool = _sh([
              ...sel.map((w, i) => ({ id: `h${i}`, t: w[0], p: i, tp: 'hr' })),
              ...sel.map((w, i) => ({ id: `e${i}`, t: w[1], p: i, tp: 'en' })),
            ]);
            setMatchInitPool(matchPool);
            sCurEx('match');
            ssSet('nh_ex_start', Date.now().toString());
            trackStart('matching');
            setScr('match');
          }
        } else if (screen === 'listening') {
          const { LISTEN } = (await _getData()) as { LISTEN: unknown[] };
          const pool = Array.isArray(LISTEN) ? _sh(_levelledListen(LISTEN)).slice(0, 10) : [];
          if (pool.length === 0) {
            clearActiveSessionActivity();
            return notifyLaunchFailure('empty-pool');
          }
          setLsInitQ(pool);
          sCurEx('listening');
          ssSet('nh_ex_start', Date.now().toString());
          trackStart('listening');
          setScr('listening');
        } else if (screen === 'speaking') {
          // SpeakingScreen depends on parent-held state (speakItems/Word/Index/…);
          // the generic branch below sets only curEx + setScr, so a cold session
          // launch would hit the screen's `if (!sw || !sw[0]) return null` guard and
          // render BLANK. Initialise the spoken-vocab pool here (mirroring the
          // Practice-tab launchSpeaking path) BEFORE navigating, and bail without
          // navigating if no vocab is available — never route to an empty screen
          // (the dead-lesson class the session-routes guard protects against).
          // Unlike launchSpeaking we keep the home return-context set at the top.
          // V is NOT in the client data barrel — vocabulary moved server-side to
          // /api/content/core (see core.js KEYS, and the note at the foot of
          // data/content.tsx). Reading _getData().V therefore yielded {}, so every
          // pool below was empty and the launch bailed with 'empty-pool' on every
          // attempt. Every other vocab consumer in the app already reads
          // content.V via useContent(); this is the non-component equivalent.
          // getContent() can throw (offline / auth / rate-limit) — that is fine
          // here, the outer catch turns it into a clean 'load-error'.
          // Deliberately NOT _getVocab(): that helper swallows the rejection to
          // protect click handlers that have no catch. This branch HAS one, and
          // it distinguishes 'load-error' from 'empty-pool' and can route a
          // stale-chunk rejection into the healer. Do not unify them.
          const pool = _acquire(await getContent(), allCats);
          if (pool.length === 0) {
            clearActiveSessionActivity();
            return notifyLaunchFailure('empty-pool');
          }
          const items = _sh(pool).slice(0, 6);
          sSi(items);
          sSx(0);
          sSw(items[0]);
          sSr(null);
          sSsc(0);
          sCurEx('speaking');
          ssSet('nh_ex_start', Date.now().toString());
          trackStart('speaking');
          setScr('speaking');
        } else if (screen === 'animlesson') {
          // Wave 5: the 'animlesson' route renders only when the parent
          // animLesson state holds a full Lesson object, so the generic branch
          // would land on a BLANK screen. Pick the least-recently-served lesson
          // unlocked at the session's CEFR (policy in lib/sessionLessonPick).
          const pick = pickSessionLesson(await getLessons());
          if (!pick) {
            clearActiveSessionActivity();
            return notifyLaunchFailure('empty-pool');
          }
          setAnimLesson(pick);
          sCurEx('animlesson');
          ssSet('nh_ex_start', Date.now().toString());
          trackStart('grammar');
          setScr(screen);
        } else {
          // Conjugation drill carries its target category in curEx so the screen
          // can pick the right form-type; screen id stays 'conjpractice' for routing.
          const ex = screen === 'conjpractice' && category ? `conjpractice:${category}` : screen;
          // Topic-aware cloze: the adaptive categories dative-locative / instrumental
          // / vocative route to the generic cloze screen (no dedicated drill). Hand
          // the requested category to ClozeEngine via sessionStorage so it serves
          // sentences for THAT topic — the session chip promises it. We deliberately
          // do NOT fold the category into curEx (as conjpractice does): curEx is the
          // session-completion key compared against nh_session_started, and changing
          // it would strand the session at N-1/N (completion never fires).
          if (screen === 'cloze') {
            ssSet('nh_cloze_topic', category ?? '');
          }
          sCurEx(ex);
          ssSet('nh_ex_start', Date.now().toString());
          setScr(screen);
        }
      } catch (err) {
        // A launch must either navigate or visibly fail — never a silent no-op.
        // Clear the pinned session marker so re-tapping Start can retry cleanly.
        clearActiveSessionActivity();
        // Catching here means window.onunhandledrejection never sees a stale-chunk
        // rejection, so the launcher must route it to the healer itself; only if
        // the reload budget is spent (or it's not a chunk error) fail visibly.
        const msg = String(
          (err as Error)?.message ?? (err as Error)?.name ?? err ?? '',
        ).toLowerCase();
        if (isChunkLoadError(msg) && reloadWithCachePurge('nh_reload_attempt')) return;
        notifyLaunchFailure('load-error', err);
      }
    },
    [
      setScr,
      sCurEx,
      setFcInitPool,
      setMcInitQ,
      setMatchInitPool,
      setLsInitQ,
      setAnimLesson,
      allCats,
      sSi,
      sSx,
      sSw,
      sSr,
      sSsc,
    ],
  );

  const goBack = useCallback((): void => {
    const startTs = parseInt(ssGet('nh_ex_start') || '0');
    const dur = startTs ? Date.now() - startTs : 0;
    // Only mark the exercise as XP-cooldown-done if the user spent meaningful time (≥30s).
    // Calling markExerciseDone unconditionally on back-press consumed the daily XP slot
    // before award() ran, silently blocking re-entry XP for users who accidentally opened
    // and immediately exited an exercise. award() already calls markExerciseDone() on real completion.
    if (curEx && dur >= 30000) markExerciseDone(curEx);
    if (curEx && dur > 5000) {
      const typeMap: Record<string, string> = {
        flash: 'flashcards',
        flashcards: 'flashcards',
        mcgame: 'quiz',
        review: 'srs_review',
        listening: 'listening',
        ai_listening: 'listening',
        speaking: 'speaking',
        speaking_sprint: 'speaking',
        aiconvo: 'conversation',
        writing: 'writing',
        shadowing: 'shadowing',
        cloze: 'cloze',
        grammar: 'grammar',
        match: 'matching',
        readlist: 'reading',
      };
      const aType = typeMap[curEx] || (curEx.startsWith('vocab_') ? 'flashcards' : null);
      if (aType) trackAbandon(aType, dur);
    }
    ssRemove('nh_ex_start');
    sCurEx('');

    const ctx = returnContextRef.current;
    returnContextRef.current = null;
    if (ctx) {
      if (ctx.screen && ctx.screen !== 'dashboard') {
        setScr(ctx.screen);
      } else {
        setTab(ctx.tab || 'learn');
      }
    } else if (window.history.length <= 1) {
      setTab(tab || 'home');
    } else {
      navigate(-1);
    }
  }, [curEx, sCurEx, setScr, setTab, navigate, tab]);

  return {
    resumeLesson,
    launchAnimLesson,
    launchMcGame,
    launchLegendary,
    launchCheckpoint,
    mcGameComplete,
    launchFlashcards,
    launchListening,
    launchMatch,
    launchSpeaking,
    launchPathItem,
    launchSessionActivity,
    goBack,
  };
}
