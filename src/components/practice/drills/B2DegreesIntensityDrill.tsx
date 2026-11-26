// src/components/practice/drills/B2DegreesIntensityDrill.tsx
//
// Engine-backed drill for the B2 lesson `degrees-intensity`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/degreesIntensityDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DEGREES_INTENSITY_DRILL_DATA,
  DEGREES_INTENSITY_MODE_LABELS,
} from '../../../data/drills/b2/degreesIntensityDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2DegreesIntensityDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2degreesintensity"
      title={'📈 Stupanj i intenzitet'}
      subtitle="Practice what the lesson taught"
      modeLabels={DEGREES_INTENSITY_MODE_LABELS}
      data={DEGREES_INTENSITY_DRILL_DATA}
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
