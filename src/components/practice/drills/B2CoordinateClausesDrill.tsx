// src/components/practice/drills/B2CoordinateClausesDrill.tsx
//
// Engine-backed drill for the B2 lesson `coordinate-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/coordinateClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COORDINATE_CLAUSES_DRILL_DATA,
  COORDINATE_CLAUSES_MODE_LABELS,
} from '../../../data/drills/b2/coordinateClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2CoordinateClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2coordinateclauses"
      title="And, But, Or, So: Compound Sentences"
      subtitle="Practise what the lesson taught"
      modeLabels={COORDINATE_CLAUSES_MODE_LABELS}
      data={COORDINATE_CLAUSES_DRILL_DATA}
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
