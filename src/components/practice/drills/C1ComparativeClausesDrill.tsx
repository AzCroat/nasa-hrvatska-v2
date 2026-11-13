// src/components/practice/drills/C1ComparativeClausesDrill.tsx
//
// Engine-backed drill for the C1 lesson `comparative-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/comparativeClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPARATIVE_CLAUSES_DRILL_DATA,
  COMPARATIVE_CLAUSES_MODE_LABELS,
} from '../../../data/drills/c1/comparativeClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1ComparativeClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1comparativeclauses"
      title="Comparative Clauses"
      subtitle="Practise what the lesson taught"
      modeLabels={COMPARATIVE_CLAUSES_MODE_LABELS}
      data={COMPARATIVE_CLAUSES_DRILL_DATA}
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
