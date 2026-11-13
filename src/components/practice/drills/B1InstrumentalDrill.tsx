// src/components/practice/drills/B1InstrumentalDrill.tsx
//
// Engine-backed drill for the B1 lesson `instrumental` (B1-13). The content is in
// ../../../data/drills/b1/instrumentalB1Drill. Lazy-loaded so the bank stays off the
// first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INSTRUMENTAL_B1_DRILL_DATA,
  INSTRUMENTAL_B1_MODE_LABELS,
} from '../../../data/drills/b1/instrumentalB1Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1InstrumentalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1instrumental"
      title="Čime? S kim? — the Instrumental"
      subtitle="Practise what the lesson taught"
      modeLabels={INSTRUMENTAL_B1_MODE_LABELS}
      data={INSTRUMENTAL_B1_DRILL_DATA}
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
