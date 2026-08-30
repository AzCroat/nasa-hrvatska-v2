// src/components/practice/drills/ReconstructionDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/reconstructionDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  RECONSTRUCTION_DRILL_DATA,
  RECONSTRUCTION_MODE_LABELS,
} from '../../../data/drills/reconstructionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ReconstructionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="rekonstrukcija"
      title="🧠 Rekonstrukcija argumenta"
      subtitle="Izvući tvrdnju iz teksta koji je ne kaže"
      modeLabels={RECONSTRUCTION_MODE_LABELS}
      data={RECONSTRUCTION_DRILL_DATA}
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
