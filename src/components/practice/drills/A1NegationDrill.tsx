// src/components/practice/drills/A1NegationDrill.tsx
//
// Engine-backed drill for the A1 lesson `negation`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/negationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { NEGATION_DRILL_DATA, NEGATION_MODE_LABELS } from '../../../data/drills/a1/negationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1NegationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1negation"
      title={'\ud83d\udeab Negacija'}
      subtitle="Practice what the lesson taught"
      modeLabels={NEGATION_MODE_LABELS}
      data={NEGATION_DRILL_DATA}
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
