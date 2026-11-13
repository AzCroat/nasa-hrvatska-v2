// src/components/practice/drills/C1PluperfectDrill.tsx
//
// Engine-backed drill for the C1 lesson `pluskvamperfekt` (book-vs-app fix, 2026-11-13).
// The content is in ../../../data/drills/c1/pluperfectDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLUPERFECT_DRILL_DATA,
  PLUPERFECT_MODE_LABELS,
} from '../../../data/drills/c1/pluperfectDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1PluperfectDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1pluperfect"
      title="Bio Sam Otišao"
      subtitle="Practise what the lesson taught"
      modeLabels={PLUPERFECT_MODE_LABELS}
      data={PLUPERFECT_DRILL_DATA}
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
