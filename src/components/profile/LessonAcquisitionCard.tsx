// src/components/profile/LessonAcquisitionCard.tsx
//
// DID THE TEACHING TAKE (owner request, 2026-09-07) — the readout for
// `lib/lessonAttempts`. A measurement nothing renders is the decorative-guard
// failure this repo keeps rediscovering, so the store gets a surface the day it
// ships.
//
// This is a DIFFERENT AXIS from the concept map beside it, and the distinction
// is worth keeping straight:
//   concept map      — RETENTION. Did it stay? (re-check ladder, item cards)
//   this card        — ACQUISITION. Did it land the first time?
// A lesson can be solid on one and poor on the other, which is exactly why both
// exist.
//
// Honest by construction: it reports only lessons actually attempted after
// being read. A lesson never reached is absent rather than a zero, because "not
// taught yet" and "taught badly" are different facts (NEVER DO 13). Test-out
// attempts are excluded upstream — they happen before the lesson is read.

import React from 'react';
import { qualityReport, type LessonQuality } from '../../lib/lessonAttempts';
import { readCurriculumSpine } from '../../lib/curriculumProgress';

/** How many to list before it stops being a next step and becomes a wall. */
const VISIBLE = 5;

export default function LessonAcquisitionCard() {
  const report = React.useMemo(() => qualityReport(), []);
  const titles = React.useMemo(() => {
    const m = new Map<string, string>();
    try {
      for (const e of readCurriculumSpine()) if (e.title) m.set(e.id, e.title);
    } catch {
      /* no spine cached — fall back to ids */
    }
    return m;
  }, []);

  // Nothing measured yet: a card claiming to show how lessons went, showing
  // nothing, is worse than no card.
  if (report.measured === 0) return null;

  const rate = Math.round((report.firstAttemptPasses / report.measured) * 100);
  const shown = report.neededMore.slice(0, VISIBLE);

  return (
    <div
      data-testid="lesson-acquisition"
      style={{
        background: 'var(--card)',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        border: '1px solid var(--card-b)',
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 2 }}>How the lessons landed</div>
      <p
        data-testid="acquisition-summary"
        style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6, margin: '0 0 12px' }}
      >
        {report.firstAttemptPasses} of {report.measured} lesson
        {report.measured === 1 ? '' : 's'} passed their check on the first reading ({rate}%).
      </p>

      {shown.length === 0 ? (
        <p style={{ fontSize: 13, color: 'var(--subtext)', margin: 0 }}>
          Every lesson you have taken passed first time.
        </p>
      ) : (
        <React.Fragment>
          <div style={{ fontSize: 13, fontWeight: 800, margin: '0 0 8px' }}>
            Took more than one go
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {shown.map((q) => (
              <AcquisitionRow key={q.lessonId} q={q} title={titles.get(q.lessonId) || q.lessonId} />
            ))}
          </div>
          {report.neededMore.length > VISIBLE && (
            <p
              data-testid="acquisition-more"
              style={{ fontSize: 12, color: 'var(--subtext)', margin: '10px 0 0' }}
            >
              and {report.neededMore.length - VISIBLE} more
            </p>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

function AcquisitionRow({ q, title }: { q: LessonQuality; title: string }) {
  const first = q.taught[0]!;
  return (
    <div
      data-testid="acquisition-row"
      data-lesson={q.lessonId}
      data-attempts={q.passedOnAttempt ?? 0}
      style={{ padding: '8px 10px', borderRadius: 10, background: 'var(--bar-bg)' }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 11, color: 'var(--subtext)', marginTop: 2 }}>
        First reading {first.score}/{first.total}
        {q.passedOnAttempt ? ` · passed on attempt ${q.passedOnAttempt}` : ' · not passed yet'}
        {q.firstAttemptMissed.length > 0 &&
          ` · missed question${q.firstAttemptMissed.length === 1 ? '' : 's'} ${q.firstAttemptMissed
            .map((i) => i + 1)
            .join(', ')}`}
      </div>
    </div>
  );
}
