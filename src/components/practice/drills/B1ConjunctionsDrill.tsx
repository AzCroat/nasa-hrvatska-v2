// src/components/practice/drills/B1ConjunctionsDrill.tsx
//
// Engine-backed drill for the B1 lesson `conjunctions`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/conjunctionsDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONJUNCTIONS_DRILL_DATA,
  CONJUNCTIONS_MODE_LABELS,
} from '../../../data/drills/b1/conjunctionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1ConjunctionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1conjunctions"
      title={'🔗 Veznici'}
      subtitle="Practice what the lesson taught"
      modeLabels={CONJUNCTIONS_MODE_LABELS}
      data={CONJUNCTIONS_DRILL_DATA}
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
