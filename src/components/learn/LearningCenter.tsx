/**
 * LearningCenter — look something up, at any time.
 *
 * The app schedules superbly and, until this screen, looked up nothing: every
 * teaching asset reached a learner only when the scheduler handed it over. A
 * learner who wanted the genitive RIGHT NOW, because they had just got it wrong
 * in conversation, had three hand-listed doors that between them opened 26 of
 * the 180 lessons.
 *
 * This screen is the lookup half. It renders whatever `useLearningIndex`
 * derives from the app's own catalogues — no list of content lives here — in two
 * modes: SEARCH while there is a query, and the SYLLABUS (every lesson, by level
 * and spine order) when there is not.
 *
 * TWO RULES IT HOLDS:
 *
 *   * LOOKING SOMETHING UP IS NOT CREDIT. This component awards nothing,
 *     completes nothing and records nothing. It opens content through exactly
 *     the launch path the browse modal already used (`launchAnimLesson` for a
 *     lesson, setScr + setCurEx for a screen), so a thing opened from here
 *     behaves precisely as the same thing opened from anywhere else — no new
 *     completion semantics are introduced by the existence of a search box.
 *
 *   * NOTHING IS GATED. Any of the 180 lessons opens at any level;
 *     `launchAnimLesson` has always been ungated and that is what makes "at any
 *     time" true. A learner reaching above their level is looking something up,
 *     not claiming to have learned it — the CEFR badge is unaffected, because
 *     this screen never writes.
 */
import React, { useMemo, useState } from 'react';
import { searchLearningIndex, lessonsByLevel, type LearningEntry } from '../../lib/learningIndex';
import { useLearningIndex } from '../../hooks/useLearningIndex';
import type { CefrLevel } from '../../lib/cefr';
import { readCompletedLessons } from '../../lib/curriculumProgress';
import { useContent } from '../../hooks/useContent';
import { useStats } from '../../context/StatsContext';
import { acquisitionPool, vocabLevel } from '../../lib/vocabPool';
import {
  flashcardPool,
  quizItems,
  matchPool,
  listeningItems,
  speakingItems,
  type Shuffle,
  type VocabRow,
} from '../../lib/practiceLaunch';
import ReferenceDesk from './ReferenceDesk';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

const KIND_LABEL: Record<LearningEntry['kind'], string> = {
  lesson: 'Lesson',
  drill: 'Practice',
  reference: 'Reference',
  concept: 'What it is',
  tool: 'Reference tool',
};

/**
 * Screens that render a `ScreenGuard` unless a launcher has seeded their state.
 * Opening one with a bare `setScr` lands the learner on the "start this
 * properly" dead end — which is exactly what this screen's first version did.
 *
 * DERIVED IN THE TEST, NOT TRUSTED HERE: `learningCenterLaunch.test.ts` reads
 * the REAL router, finds every pooled screen whose route can fall through to
 * ScreenGuard, and requires each to have an entry below — and each entry to
 * correspond to a genuinely guarded screen. Both directions, because a stale
 * entry guards nothing while a missing one is a dead end.
 */
export const LAUNCH_PAYLOAD: Record<
  string,
  (ctx: { pool: VocabRow[]; level: CefrLevel; sh: Shuffle }) => unknown[] | Promise<unknown[]>
> = {
  flashcards: ({ pool, sh }) => flashcardPool(pool, sh),
  mcgame: ({ pool, sh }) => quizItems(pool, sh),
  match: ({ pool, sh }) => matchPool(pool, sh),
  speaking: ({ pool, sh }) => speakingItems(pool, sh),
  listening: async ({ level, sh }) => {
    // The LISTEN bank lives in the content barrel; importing it at module scope
    // would drag chunk-data into this screen's chunk for a button most visits
    // never press. Same lazy shape `useSearch` uses for the vocabulary index.
    const { LISTEN } = (await import('../../data')) as { LISTEN: { level?: string }[] };
    return listeningItems(LISTEN, level, sh);
  },
};

interface LearningCenterProps {
  goBack: () => void;
  launchAnimLesson: (lessonId: string) => void;
  /** A payload is supplied for the screens above; the rest open cold. */
  onOpenScreen: (screen: string, payload?: unknown[]) => void;
  sh: Shuffle;
}

function Row({
  entry,
  done,
  onOpen,
}: {
  entry: LearningEntry;
  done: boolean;
  onOpen: () => void;
}): React.ReactElement {
  return (
    <button
      className="c"
      data-testid="lc-row"
      data-kind={entry.kind}
      onClick={onOpen}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        marginBottom: 8,
        textAlign: 'left',
        cursor: 'pointer',
        border: '1px solid var(--card-b)',
        fontFamily: "'Outfit',sans-serif",
      }}
    >
      <span style={{ fontSize: 20, flexShrink: 0, width: 24, textAlign: 'center' }}>
        {entry.icon || (entry.kind === 'lesson' ? '📘' : '🎯')}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 800,
            color: 'var(--heading)',
            lineHeight: 1.25,
          }}
        >
          {done && (
            <span aria-label="completed" title="Completed" style={{ color: 'var(--success)' }}>
              ✓{' '}
            </span>
          )}
          {entry.title}
        </span>
        <span
          style={{
            display: 'block',
            fontSize: 11,
            color: 'var(--subtext)',
            marginTop: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {KIND_LABEL[entry.kind]}
          {entry.subtitle ? ` · ${entry.subtitle}` : ''}
        </span>
      </span>
      {entry.level && (
        <span className={`cefr cefr-${entry.level.toLowerCase()}`} style={{ flexShrink: 0 }}>
          {entry.level}
        </span>
      )}
    </button>
  );
}

export default function LearningCenter({
  goBack,
  launchAnimLesson,
  onOpenScreen,
  sh,
}: LearningCenterProps): React.ReactElement {
  const { index, spineReady } = useLearningIndex();
  const { content } = useContent();
  const { stats: st } = useStats();
  const [launchError, setLaunchError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [openLevel, setOpenLevel] = useState<string | null>('A1');
  const [mode, setMode] = useState<'syllabus' | 'reference'>('syllabus');
  const [deskOpenId, setDeskOpenId] = useState<string | null>(null);

  // Read once per mount: the Center never writes progress, so it cannot go stale
  // under its own feet, and re-reading localStorage per render would be waste.
  const completed = useMemo(() => readCompletedLessons(), []);

  const results = useMemo(() => searchLearningIndex(index, query, { limit: 40 }), [index, query]);
  const syllabus = useMemo(() => lessonsByLevel(index), [index]);

  async function openScreen(screen: string): Promise<void> {
    const build = LAUNCH_PAYLOAD[screen];
    if (!build) {
      onOpenScreen(screen);
      return;
    }
    // A guarded screen needs its state seeded first. If the deck is empty we do
    // NOT navigate: sending the learner to the guard and calling it an exercise
    // is the dead end this whole change exists to remove.
    const level = vocabLevel(st ?? undefined);
    const pool = acquisitionPool(content, level) as VocabRow[];
    try {
      const payload = await build({ pool, level, sh });
      if (!payload || payload.length === 0) {
        setLaunchError('There are no words ready for that yet — try a lesson first.');
        return;
      }
      setLaunchError(null);
      onOpenScreen(screen, payload);
    } catch {
      setLaunchError('That could not be opened just now. Please try again.');
    }
  }

  function open(entry: LearningEntry): void {
    // One arm per target kind, exhaustively: the union is discriminated so a new
    // kind cannot be added without the compiler stopping here, which is how the
    // reference arm was caught when it landed rather than silently no-op-ing.
    if (entry.target.kind === 'lesson') {
      launchAnimLesson(entry.target.lessonId);
    } else if (entry.target.kind === 'screen') {
      void openScreen(entry.target.screen);
    } else {
      // A reference panel lives on this screen, so "opening" it means showing
      // the desk at that panel rather than navigating away. Clearing the query
      // is deliberate: the answer is now on screen, not in the result list.
      setQuery('');
      setMode('reference');
      setDeskOpenId(entry.target.refId);
    }
  }

  const searching = query.trim().length > 0;

  return (
    <div className="scr-wrap" data-testid="learning-center" style={{ paddingBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button
          onClick={goBack}
          className="b bg"
          style={{ fontSize: 13, padding: '6px 12px' }}
          data-testid="lc-back"
        >
          ← Back
        </button>
        <h2
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "'Playfair Display',serif",
            color: 'var(--heading)',
          }}
        >
          📚 Learning Center
        </h2>
      </div>

      <input
        type="search"
        data-testid="lc-search"
        aria-label="Search lessons, drills and references"
        placeholder="Search anything… padeži, genitive, aspect, verbs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 12,
          border: '1.5px solid var(--card-b)',
          background: 'var(--card)',
          color: 'var(--text)',
          fontSize: 14,
          fontFamily: "'Outfit',sans-serif",
          marginBottom: 14,
          boxSizing: 'border-box',
        }}
      />

      {launchError && (
        <p
          data-testid="lc-launch-error"
          style={{ fontSize: 12, color: 'var(--danger, #b91c1c)', marginBottom: 10 }}
        >
          {launchError}
        </p>
      )}

      {searching ? (
        <div data-testid="lc-results">
          <div style={{ fontSize: 11, color: 'var(--subtext)', marginBottom: 8, fontWeight: 700 }}>
            {results.length === 0
              ? `No results for "${query.trim()}"`
              : `${results.length} result${results.length === 1 ? '' : 's'}`}
          </div>
          {results.length === 0 && (
            <p
              data-testid="lc-empty"
              style={{ color: 'var(--subtext)', fontSize: 13, lineHeight: 1.6 }}
            >
              Try a grammar term (<em>genitive</em>, <em>padeži</em>, <em>aspect</em>), a topic (
              <em>food</em>, <em>travel</em>) or a skill (<em>listening</em>, <em>writing</em>).
            </p>
          )}
          {results.map((e) => (
            <Row
              key={e.key}
              entry={e}
              done={e.target.kind === 'lesson' && completed.has(e.target.lessonId)}
              onOpen={() => open(e)}
            />
          ))}
        </div>
      ) : (
        <React.Fragment>
          {/* Two standing modes when nothing is being searched: the SYLLABUS
              (which lesson comes where) and the REFERENCE desk (what a thing is
              and what its forms are). They answer different questions, so they
              are peers rather than one nested inside the other. */}
          <div
            role="tablist"
            aria-label="Learning Center view"
            style={{ display: 'flex', gap: 8, marginBottom: 14 }}
          >
            {(
              [
                ['syllabus', '\ud83d\uddc2\ufe0f Syllabus'],
                ['reference', '\ud83d\udcd6 Reference'],
              ] as const
            ).map(([m, label]) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                data-testid={`lc-mode-${m}`}
                onClick={() => setMode(m)}
                className="b"
                style={{
                  flex: 1,
                  fontSize: 12,
                  fontWeight: 800,
                  padding: '8px 10px',
                  border: '1.5px solid var(--card-b)',
                  background: mode === m ? 'var(--accent)' : 'transparent',
                  color: mode === m ? '#fff' : 'var(--subtext)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
          {mode === 'reference' ? (
            <ReferenceDesk initialOpenId={deskOpenId} />
          ) : (
            <div data-testid="lc-syllabus">
              <div className="section-hdr" style={{ marginBottom: 10 }}>
                <div className="section-hdr-icon" style={{ background: 'rgba(14,116,144,.12)' }}>
                  🗂️
                </div>
                <div className="section-hdr-text">
                  <div className="section-hdr-title">The whole syllabus</div>
                  <div className="section-hdr-sub">
                    {spineReady
                      ? `${syllabus.length} lessons · open any of them, at any level`
                      : 'Lessons are still loading — search works already'}
                  </div>
                </div>
              </div>

              {LEVELS.map((lvl) => {
                const rows = syllabus.filter((e) => e.level === lvl);
                if (rows.length === 0) return null;
                const doneCount = rows.filter(
                  (e) => e.target.kind === 'lesson' && completed.has(e.target.lessonId),
                ).length;
                const isOpen = openLevel === lvl;
                return (
                  <div key={lvl} style={{ marginBottom: 10 }}>
                    <button
                      data-testid={`lc-level-${lvl}`}
                      onClick={() => setOpenLevel(isOpen ? null : lvl)}
                      aria-expanded={isOpen}
                      className="c"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '12px 14px',
                        cursor: 'pointer',
                        border: '1px solid var(--card-b)',
                        fontFamily: "'Outfit',sans-serif",
                      }}
                    >
                      <span className={`cefr cefr-${lvl.toLowerCase()}`}>{lvl}</span>
                      <span
                        style={{
                          flex: 1,
                          textAlign: 'left',
                          fontSize: 13,
                          fontWeight: 800,
                          color: 'var(--heading)',
                        }}
                      >
                        {rows.length} lessons
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--subtext)' }}>
                        {doneCount}/{rows.length} done
                      </span>
                      <span
                        style={{
                          color: 'var(--subtext)',
                          fontSize: 16,
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform .2s',
                        }}
                      >
                        ▾
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ marginTop: 8 }}>
                        {rows.map((e) => (
                          <Row
                            key={e.key}
                            entry={e}
                            done={e.target.kind === 'lesson' && completed.has(e.target.lessonId)}
                            onOpen={() => open(e)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
