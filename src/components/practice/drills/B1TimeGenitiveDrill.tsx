// src/components/practice/drills/B1TimeGenitiveDrill.tsx
//
// Engine-backed drill for the B1 lesson `time-genitive` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/timeGenitiveDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TIME_GENITIVE_DRILL_DATA,
  TIME_GENITIVE_MODE_LABELS,
} from '../../../data/drills/b1/timeGenitiveDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1TimeGenitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1timegenitive"
      title="Prošle godine, svakog dana — Time in the Genitive"
      subtitle="Practise what the lesson taught"
      modeLabels={TIME_GENITIVE_MODE_LABELS}
      data={TIME_GENITIVE_DRILL_DATA}
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
