// src/components/practice/drills/C1DisjunctiveGradationalClausesDrill.tsx
//
// Engine-backed drill for the C1 lesson `disjunctive-gradational-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/disjunctiveGradationalClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DISJUNCTIVE_GRADATIONAL_CLAUSES_DRILL_DATA,
  DISJUNCTIVE_GRADATIONAL_CLAUSES_MODE_LABELS,
} from '../../../data/drills/c1/disjunctiveGradationalClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1DisjunctiveGradationalClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1disjunctivegradationalclauses"
      title="Or, Only, Not Only… But Also"
      subtitle="Practise what the lesson taught"
      modeLabels={DISJUNCTIVE_GRADATIONAL_CLAUSES_MODE_LABELS}
      data={DISJUNCTIVE_GRADATIONAL_CLAUSES_DRILL_DATA}
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
