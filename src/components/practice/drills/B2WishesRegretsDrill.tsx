// src/components/practice/drills/B2WishesRegretsDrill.tsx
//
// Engine-backed drill for the B2 lesson `wishes-regrets`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/wishesRegretsDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  WISHES_REGRETS_DRILL_DATA,
  WISHES_REGRETS_MODE_LABELS,
} from '../../../data/drills/b2/wishesRegretsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2WishesRegretsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2wishesregrets"
      title={'🌠 Želje i žaljenje'}
      subtitle="Practice what the lesson taught"
      modeLabels={WISHES_REGRETS_MODE_LABELS}
      data={WISHES_REGRETS_DRILL_DATA}
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
