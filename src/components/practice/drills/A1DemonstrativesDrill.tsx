// src/components/practice/drills/A1DemonstrativesDrill.tsx
//
// Engine-backed drill for the A1 lesson `demonstratives`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/demonstrativesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DEMONSTRATIVES_DRILL_DATA,
  DEMONSTRATIVES_MODE_LABELS,
} from '../../../data/drills/a1/demonstrativesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1DemonstrativesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1demonstratives"
      title={'\ud83d\udccd Pokazne zamjenice'}
      subtitle="Practice what the lesson taught"
      modeLabels={DEMONSTRATIVES_MODE_LABELS}
      data={DEMONSTRATIVES_DRILL_DATA}
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
