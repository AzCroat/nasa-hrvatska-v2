// src/components/practice/drills/B2BusinessEconomyDrill.tsx
//
// Engine-backed drill for the B2 lesson `business-economy`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/businessEconomyDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  BUSINESS_ECONOMY_DRILL_DATA,
  BUSINESS_ECONOMY_MODE_LABELS,
} from '../../../data/drills/b2/businessEconomyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2BusinessEconomyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2businesseconomy"
      title={'💼 Posao i gospodarstvo'}
      subtitle="Practice what the lesson taught"
      modeLabels={BUSINESS_ECONOMY_MODE_LABELS}
      data={BUSINESS_ECONOMY_DRILL_DATA}
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
