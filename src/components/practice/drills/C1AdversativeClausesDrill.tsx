// src/components/practice/drills/C1AdversativeClausesDrill.tsx
//
// Engine-backed drill for the C1 lesson `adversative-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/adversativeClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ADVERSATIVE_CLAUSES_DRILL_DATA,
  ADVERSATIVE_CLAUSES_MODE_LABELS,
} from '../../../data/drills/c1/adversativeClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1AdversativeClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1adversativeclauses"
      title="But, Whereas, However"
      subtitle="Practise what the lesson taught"
      modeLabels={ADVERSATIVE_CLAUSES_MODE_LABELS}
      data={ADVERSATIVE_CLAUSES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
