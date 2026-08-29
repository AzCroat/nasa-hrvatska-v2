// src/components/practice/drills/ComparisonDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/comparisonDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPARISON_DRILL_DATA,
  COMPARISON_MODE_LABELS,
} from '../../../data/drills/comparisonDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ComparisonDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="komparacija"
      title="📈 Komparacija"
      subtitle="bolji, najbolji, veći od mene — comparing in Croatian"
      modeLabels={COMPARISON_MODE_LABELS}
      data={COMPARISON_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — komparacija je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Komparacija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
