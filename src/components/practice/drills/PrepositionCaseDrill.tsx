// src/components/practice/drills/PrepositionCaseDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/prepositionCaseDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PREPOSITION_CASE_DRILL_DATA,
  PREPOSITION_CASE_MODE_LABELS,
} from '../../../data/drills/prepositionCaseDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrepositionCaseDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prijedlozia2"
      title="🧭 Prijedlozi i padeži"
      subtitle="Kamo ili gdje — padež nosi značenje"
      modeLabels={PREPOSITION_CASE_MODE_LABELS}
      data={PREPOSITION_CASE_DRILL_DATA}
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
