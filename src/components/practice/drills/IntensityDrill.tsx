// src/components/practice/drills/IntensityDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/intensityDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { INTENSITY_DRILL_DATA, INTENSITY_MODE_LABELS } from '../../../data/drills/intensityDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function IntensityDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="intenzitet"
      title="📈 Stupanj i intenzitet"
      subtitle="sve bolje, vrlo or jako, and pre- meaning too"
      modeLabels={INTENSITY_MODE_LABELS}
      data={INTENSITY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — intenzitet je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Intenzitet traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
