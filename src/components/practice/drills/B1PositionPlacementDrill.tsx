// src/components/practice/drills/B1PositionPlacementDrill.tsx
//
// Engine-backed drill for the B1 lesson `position-placement`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/positionPlacementDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POSITION_PLACEMENT_DRILL_DATA,
  POSITION_PLACEMENT_MODE_LABELS,
} from '../../../data/drills/b1/positionPlacementDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1PositionPlacementDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1positionplacement"
      title={'📍 Položaj'}
      subtitle="Practice what the lesson taught"
      modeLabels={POSITION_PLACEMENT_MODE_LABELS}
      data={POSITION_PLACEMENT_DRILL_DATA}
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
