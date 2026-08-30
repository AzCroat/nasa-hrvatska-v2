// src/components/practice/drills/NormDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/normDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { NORM_DRILL_DATA, NORM_MODE_LABELS } from '../../../data/drills/normDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NormDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="norma"
      title="📐 Norma i uzus"
      subtitle="Što je propisano, a što se doista govori"
      modeLabels={NORM_MODE_LABELS}
      data={NORM_DRILL_DATA}
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
