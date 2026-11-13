// src/components/practice/drills/C1CoordinateConclusiveClausesDrill.tsx
//
// Engine-backed drill for the C1 lesson `coordinate-conclusive-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/coordinateConclusiveClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COORDINATE_CONCLUSIVE_CLAUSES_DRILL_DATA,
  COORDINATE_CONCLUSIVE_CLAUSES_MODE_LABELS,
} from '../../../data/drills/c1/coordinateConclusiveClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CoordinateConclusiveClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1coordinateconclusiveclauses"
      title="And, And Then, Therefore"
      subtitle="Practise what the lesson taught"
      modeLabels={COORDINATE_CONCLUSIVE_CLAUSES_MODE_LABELS}
      data={COORDINATE_CONCLUSIVE_CLAUSES_DRILL_DATA}
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
