// src/components/practice/drills/PhraseologyDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/phraseologyDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PHRASEOLOGY_DRILL_DATA,
  PHRASEOLOGY_MODE_LABELS,
} from '../../../data/drills/phraseologyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PhraseologyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="frazemi"
      title="🧵 Frazeologija u dubinu"
      subtitle="Frazemi, njihovo podrijetlo i registar"
      modeLabels={PHRASEOLOGY_MODE_LABELS}
      data={PHRASEOLOGY_DRILL_DATA}
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
