// src/components/practice/drills/A1TravelCroatiaDrill.tsx
//
// Engine-backed drill for the A1 lesson `travel-croatia` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/travelCroatiaDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TRAVEL_CROATIA_DRILL_DATA,
  TRAVEL_CROATIA_MODE_LABELS,
} from '../../../data/drills/a1/travelCroatiaDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1TravelCroatiaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1travelcroatia"
      title="A Trip Around Croatia"
      subtitle="Practise what the lesson taught"
      modeLabels={TRAVEL_CROATIA_MODE_LABELS}
      data={TRAVEL_CROATIA_DRILL_DATA}
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
