// src/components/practice/drills/NumberNormDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/numberNormDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NUMBER_NORM_DRILL_DATA,
  NUMBER_NORM_MODE_LABELS,
} from '../../../data/drills/numberNormDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NumberNormDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="brojevinorma"
      title="🔢 Brojevi u normi"
      subtitle="Slaganje uz količinu — najčešća napredna pogreška"
      modeLabels={NUMBER_NORM_MODE_LABELS}
      data={NUMBER_NORM_DRILL_DATA}
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
