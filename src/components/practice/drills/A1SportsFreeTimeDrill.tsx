// src/components/practice/drills/A1SportsFreeTimeDrill.tsx
//
// Engine-backed drill for the A1 lesson `sports-free-time` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/sportsFreeTimeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SPORTS_FREE_TIME_DRILL_DATA,
  SPORTS_FREE_TIME_MODE_LABELS,
} from '../../../data/drills/a1/sportsFreeTimeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1SportsFreeTimeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1sportsfreetime"
      title="Sport and Free Time"
      subtitle="Practise what the lesson taught"
      modeLabels={SPORTS_FREE_TIME_MODE_LABELS}
      data={SPORTS_FREE_TIME_DRILL_DATA}
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
