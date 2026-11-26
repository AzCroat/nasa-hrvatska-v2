// src/components/practice/drills/B2NegationAdvancedDrill.tsx
//
// Engine-backed drill for the B2 lesson `negation-advanced`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/negationAdvancedDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NEGATION_ADVANCED_DRILL_DATA,
  NEGATION_ADVANCED_MODE_LABELS,
} from '../../../data/drills/b2/negationAdvancedDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2NegationAdvancedDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2negationadvanced"
      title={'➖ Napredna negacija'}
      subtitle="Practice what the lesson taught"
      modeLabels={NEGATION_ADVANCED_MODE_LABELS}
      data={NEGATION_ADVANCED_DRILL_DATA}
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
