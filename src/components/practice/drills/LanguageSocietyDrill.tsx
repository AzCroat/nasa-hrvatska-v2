// src/components/practice/drills/LanguageSocietyDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/languageSocietyDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LANGUAGE_SOCIETY_DRILL_DATA,
  LANGUAGE_SOCIETY_MODE_LABELS,
} from '../../../data/drills/languageSocietyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LanguageSocietyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="jezikdrustvo"
      title="🧭 Jezik i društvo"
      subtitle="Što vaš izbor riječi govori o vama"
      modeLabels={LANGUAGE_SOCIETY_MODE_LABELS}
      data={LANGUAGE_SOCIETY_DRILL_DATA}
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
