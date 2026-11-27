// src/components/practice/drills/B2AspectNegationDrill.tsx
//
// Engine-backed drill for the B2 lesson `aspect-negation`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/aspectNegationDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ASPECT_NEGATION_DRILL_DATA,
  ASPECT_NEGATION_MODE_LABELS,
} from '../../../data/drills/b2/aspectNegationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2AspectNegationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2aspectnegation"
      title={'🚫 Vid i niječnost'}
      subtitle="Practice what the lesson taught"
      modeLabels={ASPECT_NEGATION_MODE_LABELS}
      data={ASPECT_NEGATION_DRILL_DATA}
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
