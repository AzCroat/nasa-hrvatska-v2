// src/components/practice/drills/B2IterativeConditionalDrill.tsx
//
// Engine-backed drill for the B2 lesson `iterative-conditional` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/iterativeConditionalDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ITERATIVE_CONDITIONAL_DRILL_DATA,
  ITERATIVE_CONDITIONAL_MODE_LABELS,
} from '../../../data/drills/b2/iterativeConditionalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2IterativeConditionalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2iterativeconditional"
      title="When We Were Children, We Would…"
      subtitle="Practise what the lesson taught"
      modeLabels={ITERATIVE_CONDITIONAL_MODE_LABELS}
      data={ITERATIVE_CONDITIONAL_DRILL_DATA}
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
