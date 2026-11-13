// src/components/practice/drills/B2ConcessionContrastDrill.tsx
//
// Engine-backed drill for the B2 lesson `concession-contrast` (B2 book comparison, 2026-11-13).
// The content is in ../../../data/drills/b2/concessionContrastDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONCESSION_CONTRAST_DRILL_DATA,
  CONCESSION_CONTRAST_MODE_LABELS,
} from '../../../data/drills/b2/concessionContrastDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ConcessionContrastDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2concessioncontrast"
      title="Unatoč Kiši: Concession and Contrast"
      subtitle="Practise what the lesson taught"
      modeLabels={CONCESSION_CONTRAST_MODE_LABELS}
      data={CONCESSION_CONTRAST_DRILL_DATA}
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
