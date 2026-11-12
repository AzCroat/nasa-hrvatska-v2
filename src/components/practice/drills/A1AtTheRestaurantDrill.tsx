// src/components/practice/drills/A1AtTheRestaurantDrill.tsx
//
// Engine-backed drill for the A1 lesson `at-the-restaurant` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/atTheRestaurantDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  AT_THE_RESTAURANT_DRILL_DATA,
  AT_THE_RESTAURANT_MODE_LABELS,
} from '../../../data/drills/a1/atTheRestaurantDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AtTheRestaurantDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1attherestaurant"
      title="At the Restaurant"
      subtitle="Practise what the lesson taught"
      modeLabels={AT_THE_RESTAURANT_MODE_LABELS}
      data={AT_THE_RESTAURANT_DRILL_DATA}
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
