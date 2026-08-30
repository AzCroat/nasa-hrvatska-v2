// src/components/practice/drills/ModalityDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/modalityDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { MODALITY_DRILL_DATA, MODALITY_MODE_LABELS } from '../../../data/drills/modalityDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ModalityDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="naciniobveze"
      title="🎭 Glagolski načini"
      subtitle="Obveza, mogućnost i zabrana"
      modeLabels={MODALITY_MODE_LABELS}
      data={MODALITY_DRILL_DATA}
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
