// src/components/practice/drills/A2PrepositionsActionDrill.tsx
//
// Engine-backed drill for the A2 lesson `prepositions-action`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/prepositionsActionDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PREPOSITIONS_ACTION_DRILL_DATA,
  PREPOSITIONS_ACTION_MODE_LABELS,
} from '../../../data/drills/a2/prepositionsActionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2PrepositionsActionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2prepositionsaction"
      title={'Prepositions in Action'}
      subtitle="Practice what the lesson taught"
      modeLabels={PREPOSITIONS_ACTION_MODE_LABELS}
      data={PREPOSITIONS_ACTION_DRILL_DATA}
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
