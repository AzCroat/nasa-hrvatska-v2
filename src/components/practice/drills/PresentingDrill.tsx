// src/components/practice/drills/PresentingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/presentingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PRESENTING_DRILL_DATA,
  PRESENTING_MODE_LABELS,
} from '../../../data/drills/presentingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PresentingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="izlaganje"
      title="🎤 Izlaganje"
      subtitle="najavite svaki obrat, i zatvorite s Hvala na pažnji"
      modeLabels={PRESENTING_MODE_LABELS}
      data={PRESENTING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sala je bila vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Izlaganje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
