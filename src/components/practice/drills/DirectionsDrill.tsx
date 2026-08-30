// src/components/practice/drills/DirectionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/directionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DIRECTIONS_DRILL_DATA,
  DIRECTIONS_MODE_LABELS,
} from '../../../data/drills/directionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DirectionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="grad"
      title="🧭 Snalaženje u gradu"
      subtitle="idite ravno, skrenite lijevo — and understanding the answer"
      modeLabels={DIRECTIONS_MODE_LABELS}
      data={DIRECTIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — snalazite se! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Snalaženje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
