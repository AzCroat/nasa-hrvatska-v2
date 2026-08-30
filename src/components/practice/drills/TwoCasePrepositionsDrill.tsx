// src/components/practice/drills/TwoCasePrepositionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/twoCasePrepositionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TWO_CASE_PREPOSITIONS_DRILL_DATA,
  TWO_CASE_PREPOSITIONS_MODE_LABELS,
} from '../../../data/drills/twoCasePrepositionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TwoCasePrepositionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dvopadezni"
      title="🔀 Dvopadežni prijedlozi"
      subtitle="Za, po, s i o — padež mijenja značenje"
      modeLabels={TWO_CASE_PREPOSITIONS_MODE_LABELS}
      data={TWO_CASE_PREPOSITIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina B2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
