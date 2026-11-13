// src/components/practice/drills/A2CarAndTrafficDrill.tsx
//
// Engine-backed drill for the A2 lesson `car-and-traffic` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/carAndTrafficDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CAR_AND_TRAFFIC_DRILL_DATA,
  CAR_AND_TRAFFIC_MODE_LABELS,
} from '../../../data/drills/a2/carAndTrafficDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2CarAndTrafficDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2carandtraffic"
      title="My Car Broke Down: Cars and Traffic"
      subtitle="Practise what the lesson taught"
      modeLabels={CAR_AND_TRAFFIC_MODE_LABELS}
      data={CAR_AND_TRAFFIC_DRILL_DATA}
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
