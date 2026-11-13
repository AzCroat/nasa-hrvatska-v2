// src/components/practice/drills/B2DependentClausesB2Drill.tsx
//
// Engine-backed drill for the B2 lesson `dependent-clauses-b2` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/dependentClausesB2Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DEPENDENT_CLAUSES_B2_DRILL_DATA,
  DEPENDENT_CLAUSES_B2_MODE_LABELS,
} from '../../../data/drills/b2/dependentClausesB2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2DependentClausesB2Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2dependentclausesb2"
      title="Because, So That, As, If: Dependent Clauses"
      subtitle="Practise what the lesson taught"
      modeLabels={DEPENDENT_CLAUSES_B2_MODE_LABELS}
      data={DEPENDENT_CLAUSES_B2_DRILL_DATA}
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
