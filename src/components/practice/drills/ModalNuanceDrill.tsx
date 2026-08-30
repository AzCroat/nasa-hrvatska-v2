// src/components/practice/drills/ModalNuanceDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/modalNuanceDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MODAL_NUANCE_DRILL_DATA,
  MODAL_NUANCE_MODE_LABELS,
} from '../../../data/drills/modalNuanceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ModalNuanceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="modalninijanse"
      title="🔊 Nijanse modalnosti"
      subtitle="Koliko glasno zvuči savjet"
      modeLabels={MODAL_NUANCE_MODE_LABELS}
      data={MODAL_NUANCE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina B2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
