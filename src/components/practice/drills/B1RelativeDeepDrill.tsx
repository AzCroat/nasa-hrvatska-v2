// src/components/practice/drills/B1RelativeDeepDrill.tsx
//
// Engine-backed drill for the B1 lesson `relative-deep` (čiji, gdje / kamo / odakle,
// ono što, što for a whole clause). The content is in ../../../data/drills/b1/relativeDeepDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  RELATIVE_DEEP_DRILL_DATA,
  RELATIVE_DEEP_MODE_LABELS,
} from '../../../data/drills/b1/relativeDeepDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1RelativeDeepDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1relativedeep"
      title="čiji, gdje, ono što, što"
      subtitle="Practise what the lesson taught"
      modeLabels={RELATIVE_DEEP_MODE_LABELS}
      data={RELATIVE_DEEP_DRILL_DATA}
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
