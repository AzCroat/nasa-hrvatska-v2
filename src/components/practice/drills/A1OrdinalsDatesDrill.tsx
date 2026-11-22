// src/components/practice/drills/A1OrdinalsDatesDrill.tsx
//
// Engine-backed drill for the A1 lesson `ordinals-dates`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/ordinalsDatesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ORDINALS_DATES_DRILL_DATA,
  ORDINALS_DATES_MODE_LABELS,
} from '../../../data/drills/a1/ordinalsDatesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1OrdinalsDatesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1ordinalsdates"
      title="Ordinals and Dates"
      subtitle="Practice what the lesson taught"
      modeLabels={ORDINALS_DATES_MODE_LABELS}
      data={ORDINALS_DATES_DRILL_DATA}
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
