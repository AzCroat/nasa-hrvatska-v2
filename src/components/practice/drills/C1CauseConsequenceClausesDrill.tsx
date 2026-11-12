// src/components/practice/drills/C1CauseConsequenceClausesDrill.tsx
//
// Engine-backed drill for the C1 lesson `cause-consequence-clauses` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/causeConsequenceClausesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CAUSE_CONSEQUENCE_CLAUSES_DRILL_DATA,
  CAUSE_CONSEQUENCE_CLAUSES_MODE_LABELS,
} from '../../../data/drills/c1/causeConsequenceClausesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CauseConsequenceClausesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1causeconsequenceclauses"
      title="Because, and So"
      subtitle="Practise what the lesson taught"
      modeLabels={CAUSE_CONSEQUENCE_CLAUSES_MODE_LABELS}
      data={CAUSE_CONSEQUENCE_CLAUSES_DRILL_DATA}
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
