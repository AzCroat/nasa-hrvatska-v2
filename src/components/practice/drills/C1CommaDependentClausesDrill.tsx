// src/components/practice/drills/C1CommaDependentClausesDrill.tsx
//
// Engine-backed drill for the C1 lesson `comma-dependent-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/commaDependentClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMMA_DEPENDENT_CLAUSES_DRILL_DATA,
  COMMA_DEPENDENT_CLAUSES_MODE_LABELS,
} from '../../../data/drills/c1/commaDependentClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CommaDependentClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1commadependentclauses"
      title="Mislim da… — Kad dođeš, …"
      subtitle="Practise what the lesson taught"
      modeLabels={COMMA_DEPENDENT_CLAUSES_MODE_LABELS}
      data={COMMA_DEPENDENT_CLAUSES_DRILL_DATA}
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
