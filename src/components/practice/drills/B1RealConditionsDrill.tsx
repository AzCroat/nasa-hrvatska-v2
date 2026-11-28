// src/components/practice/drills/B1RealConditionsDrill.tsx
//
// Engine-backed drill for the B1 lesson `real-conditions`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/realConditionsDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REAL_CONDITIONS_DRILL_DATA,
  REAL_CONDITIONS_MODE_LABELS,
} from '../../../data/drills/b1/realConditionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1RealConditionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1realconditions"
      title={'🔀 Stvarni uvjeti'}
      subtitle="Practice what the lesson taught"
      modeLabels={REAL_CONDITIONS_MODE_LABELS}
      data={REAL_CONDITIONS_DRILL_DATA}
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
