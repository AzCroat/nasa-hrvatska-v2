// src/components/practice/drills/B2ConditionalDrill.tsx
//
// Engine-backed drill for the B2 lesson `conditional` (B2 book comparison, 2026-11-13).
// The content is in ../../../data/drills/b2/conditionalB2Drill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONDITIONAL_B2_DRILL_DATA,
  CONDITIONAL_B2_MODE_LABELS,
} from '../../../data/drills/b2/conditionalB2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ConditionalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2conditional"
      title="Kad Bih… The Conditional"
      subtitle="Practise what the lesson taught"
      modeLabels={CONDITIONAL_B2_MODE_LABELS}
      data={CONDITIONAL_B2_DRILL_DATA}
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
