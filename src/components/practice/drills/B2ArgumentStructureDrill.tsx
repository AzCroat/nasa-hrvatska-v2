// src/components/practice/drills/B2ArgumentStructureDrill.tsx
//
// Engine-backed drill for the B2 lesson `argument-structure`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/argumentStructureDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ARGUMENT_STRUCTURE_DRILL_DATA,
  ARGUMENT_STRUCTURE_MODE_LABELS,
} from '../../../data/drills/b2/argumentStructureDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ArgumentStructureDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2argumentstructure"
      title={'🧩 Građenje argumenta'}
      subtitle="Practice what the lesson taught"
      modeLabels={ARGUMENT_STRUCTURE_MODE_LABELS}
      data={ARGUMENT_STRUCTURE_DRILL_DATA}
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
