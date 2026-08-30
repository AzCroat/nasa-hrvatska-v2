// src/components/practice/drills/SpontaneousDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/spontaneousDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SPONTANEOUS_DRILL_DATA,
  SPONTANEOUS_MODE_LABELS,
} from '../../../data/drills/spontaneousDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SpontaneousDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="spontano"
      title="⚡ Spontani govor"
      subtitle="Govoriti bez pripreme i ostati točan"
      modeLabels={SPONTANEOUS_MODE_LABELS}
      data={SPONTANEOUS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina C2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
