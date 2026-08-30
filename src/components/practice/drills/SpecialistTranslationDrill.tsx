// src/components/practice/drills/SpecialistTranslationDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/specialistTranslationDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SPECIALIST_TRANSLATION_DRILL_DATA,
  SPECIALIST_TRANSLATION_MODE_LABELS,
} from '../../../data/drills/specialistTranslationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SpecialistTranslationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prevodjenjestr"
      title="🔧 Stručno prevođenje"
      subtitle="Nazivlje, a ne rječnik"
      modeLabels={SPECIALIST_TRANSLATION_MODE_LABELS}
      data={SPECIALIST_TRANSLATION_DRILL_DATA}
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
