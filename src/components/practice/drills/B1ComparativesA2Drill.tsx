// src/components/practice/drills/B1ComparativesA2Drill.tsx
//
// Engine-backed drill for the B1 lesson `comparatives-a2`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/comparativesA2Drill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPARATIVES_A2_DRILL_DATA,
  COMPARATIVES_A2_MODE_LABELS,
} from '../../../data/drills/b1/comparativesA2Drill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1ComparativesA2Drill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1comparativesa2"
      title={'⚖️ Komparativ'}
      subtitle="Practice what the lesson taught"
      modeLabels={COMPARATIVES_A2_MODE_LABELS}
      data={COMPARATIVES_A2_DRILL_DATA}
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
