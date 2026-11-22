// src/components/practice/drills/A1DirectionsTownDrill.tsx
//
// Engine-backed drill for the A1 lesson `directions-town`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/directionsTownDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DIRECTIONS_TOWN_DRILL_DATA,
  DIRECTIONS_TOWN_MODE_LABELS,
} from '../../../data/drills/a1/directionsTownDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1DirectionsTownDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1directionstown"
      title={'Finding Your Way'}
      subtitle="Practice what the lesson taught"
      modeLabels={DIRECTIONS_TOWN_MODE_LABELS}
      data={DIRECTIONS_TOWN_DRILL_DATA}
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
