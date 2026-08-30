// src/components/practice/drills/TranslationDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/translationDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TRANSLATION_DRILL_DATA,
  TRANSLATION_MODE_LABELS,
} from '../../../data/drills/translationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TranslationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prevodjenje"
      title="🪤 Zamke prevođenja"
      subtitle="eventualno, od strane, vršiti analizu — što odaje prijevod"
      modeLabels={TRANSLATION_MODE_LABELS}
      data={TRANSLATION_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — nitko ne bi rekao da je prevedeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Prevođenje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
