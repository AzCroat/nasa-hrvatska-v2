// src/components/practice/drills/A1CasesDrill.tsx
//
// Engine-backed drill for the A1 lesson `cases`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/casesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { CASES_DRILL_DATA, CASES_MODE_LABELS } from '../../../data/drills/a1/casesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1CasesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1cases"
      title="The 7 Cases (Padeži)"
      subtitle="Practice what the lesson taught"
      modeLabels={CASES_MODE_LABELS}
      data={CASES_DRILL_DATA}
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
