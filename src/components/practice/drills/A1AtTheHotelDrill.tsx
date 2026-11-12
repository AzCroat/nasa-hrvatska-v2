// src/components/practice/drills/A1AtTheHotelDrill.tsx
//
// Engine-backed drill for the A1 lesson `at-the-hotel` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/atTheHotelDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  AT_THE_HOTEL_DRILL_DATA,
  AT_THE_HOTEL_MODE_LABELS,
} from '../../../data/drills/a1/atTheHotelDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AtTheHotelDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1atthehotel"
      title="At the Hotel"
      subtitle="Practise what the lesson taught"
      modeLabels={AT_THE_HOTEL_MODE_LABELS}
      data={AT_THE_HOTEL_DRILL_DATA}
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
