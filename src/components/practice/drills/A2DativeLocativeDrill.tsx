// src/components/practice/drills/A2DativeLocativeDrill.tsx
//
// Engine-backed drill for the A2 lesson `dative-locative`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/dativeLocativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DATIVE_LOCATIVE_DRILL_DATA,
  DATIVE_LOCATIVE_MODE_LABELS,
} from '../../../data/drills/a2/dativeLocativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2DativeLocativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2dativelocative"
      title={'Dative & Locative Cases'}
      subtitle="Practice what the lesson taught"
      modeLabels={DATIVE_LOCATIVE_MODE_LABELS}
      data={DATIVE_LOCATIVE_DRILL_DATA}
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
