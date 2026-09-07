// src/components/profile/ConceptMapCard.tsx
//
// THE CONCEPT MAP (owner recommendation 5, 2026-09-07).
//
// "Which of these things do I actually know, and which are slipping?" was not
// answerable anywhere in the app. The Me tab showed a CEFR badge, XP, streaks
// and per-skill percentages — aggregates. A learner could not see that their
// genitive is solid and their aspect is falling over, which is exactly the
// information that tells them what to do next.
//
// Everything shown here is DERIVED from what the app measured (lib/conceptMap):
// the retention ladder, the last check result, and which missed items the
// scheduler says are due. Nothing is estimated. A lesson never passed is
// counted as untaught and never listed as a weakness — not knowing something
// you were never taught is not a gap.
//
// The one action offered per concept is its OWN drill, resolved through the
// same two maps the session's teach→practice coupling uses, so a concept the
// card says is one tap from practice genuinely is. A concept with no honest
// drill gets no button rather than a wrong one.

import React, { useMemo, useState } from 'react';
import { readCurriculumSpine } from '../../lib/curriculumProgress';
import { buildConceptMap, conceptSummaryLine, type ConceptEntry } from '../../lib/conceptMap';
import type { CurriculumEntry } from '../../lib/curriculum';

/** How many weaknesses to list before the "show all" toggle. A wall of 40 rows
 *  is not a next step; the top few are. */
const VISIBLE = 5;

const STATE_STYLE: Record<string, { label: string; fg: string; bg: string }> = {
  solid: { label: 'Solid', fg: '#15803d', bg: '#dcfce7' },
  passed: { label: 'Passed', fg: '#0e7490', bg: '#cffafe' },
  due: { label: 'Due', fg: '#b45309', bg: '#fef3c7' },
  shaky: { label: 'Slipping', fg: '#b91c1c', bg: '#fee2e2' },
  untaught: { label: 'Not yet', fg: 'var(--subtext)', bg: 'var(--bar-bg)' },
};

interface Props {
  setScr: (screen: string) => void;
  /** Test seam only — production reads the cached spine. */
  spine?: CurriculumEntry[];
}

export default function ConceptMapCard({ setScr, spine }: Props) {
  const [showAll, setShowAll] = useState(false);
  const entries = useMemo(() => spine ?? readCurriculumSpine(), [spine]);
  const map = useMemo(() => buildConceptMap(entries), [entries]);

  const summary = conceptSummaryLine(map);
  // Nothing passed yet: a card claiming to show what you know, showing nothing,
  // is worse than no card. It appears the day the first lesson is passed.
  if (!summary) return null;

  const shown = showAll ? map.needsWork : map.needsWork.slice(0, VISIBLE);
  const learned = map.counts.solid + map.counts.passed + map.counts.due + map.counts.shaky;

  const bar = (
    [
      ['solid', map.counts.solid],
      ['passed', map.counts.passed],
      ['due', map.counts.due],
      ['shaky', map.counts.shaky],
    ] as const
  ).filter(([, n]) => n > 0);

  return (
    <div
      data-testid="concept-map"
      style={{
        background: 'var(--card)',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        border: '1px solid var(--card-b)',
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 2 }}>What you know</div>
      <p
        data-testid="concept-map-summary"
        style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6, margin: '0 0 12px' }}
      >
        {summary}
      </p>

      {/* The whole picture in one bar: proportions of what has been learned. */}
      <div
        data-testid="concept-map-bar"
        aria-hidden="true"
        style={{ display: 'flex', height: 10, borderRadius: 6, overflow: 'hidden', gap: 2 }}
      >
        {bar.map(([state, n]) => (
          <div
            key={state}
            data-testid={`concept-bar-${state}`}
            data-count={n}
            style={{ flex: n, background: STATE_STYLE[state]!.fg, opacity: 0.85 }}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          margin: '8px 0 0',
          fontSize: 11,
          color: 'var(--subtext)',
        }}
      >
        {bar.map(([state, n]) => (
          <span key={state} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: STATE_STYLE[state]!.fg,
                display: 'inline-block',
              }}
            />
            {n} {STATE_STYLE[state]!.label.toLowerCase()}
          </span>
        ))}
        <span data-testid="concept-map-total">
          {learned} of {map.total} taught
        </span>
      </div>

      {shown.length > 0 && (
        <React.Fragment>
          <div style={{ fontSize: 13, fontWeight: 800, margin: '16px 0 8px' }}>
            Worth revisiting
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {shown.map((e) => (
              <ConceptRow key={e.lessonId} entry={e} setScr={setScr} />
            ))}
          </div>
          {map.needsWork.length > VISIBLE && (
            <button
              data-testid="concept-map-more"
              onClick={() => setShowAll((v) => !v)}
              style={{
                marginTop: 10,
                background: 'none',
                border: 'none',
                color: 'var(--subtext)',
                fontSize: 12,
                fontWeight: 700,
                textDecoration: 'underline',
                cursor: 'pointer',
                fontFamily: 'inherit',
                padding: 0,
              }}
            >
              {showAll ? 'Show fewer' : `Show all ${map.needsWork.length}`}
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

function ConceptRow({ entry, setScr }: { entry: ConceptEntry; setScr: (s: string) => void }) {
  const style = STATE_STYLE[entry.state]!;
  return (
    <div
      data-testid="concept-row"
      data-lesson={entry.lessonId}
      data-state={entry.state}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px',
        borderRadius: 10,
        background: 'var(--bar-bg)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {entry.title}
        </div>
        <div style={{ fontSize: 11, color: 'var(--subtext)', marginTop: 2 }}>
          {entry.level}
          {entry.openMisses > 0 &&
            ` · ${entry.openMisses} question${entry.openMisses === 1 ? '' : 's'} to redo`}
        </div>
      </div>
      <span
        style={{
          fontSize: 10,
          fontWeight: 800,
          padding: '3px 7px',
          borderRadius: 6,
          color: style.fg,
          background: style.bg,
          whiteSpace: 'nowrap',
        }}
      >
        {style.label}
      </span>
      {entry.practiceScreen && (
        <button
          className="b bp"
          data-testid="concept-practice"
          data-screen={entry.practiceScreen}
          onClick={() => setScr(entry.practiceScreen!)}
          style={{ padding: '6px 12px', fontSize: 12, whiteSpace: 'nowrap' }}
        >
          Practise
        </button>
      )}
    </div>
  );
}
