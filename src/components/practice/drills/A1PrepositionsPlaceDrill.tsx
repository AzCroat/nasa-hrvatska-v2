// src/components/practice/drills/A1PrepositionsPlaceDrill.tsx
//
// Engine-backed drill for the A1 lesson `prepositions-place`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/prepositionsPlaceDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PREPOSITIONS_PLACE_DRILL_DATA,
  PREPOSITIONS_PLACE_MODE_LABELS,
} from '../../../data/drills/a1/prepositionsPlaceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PrepositionsPlaceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1prepositionsplace"
      title={'\ud83d\udccd Prijedlozi mjesta'}
      subtitle="Practice what the lesson taught"
      modeLabels={PREPOSITIONS_PLACE_MODE_LABELS}
      data={PREPOSITIONS_PLACE_DRILL_DATA}
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
