// src/components/practice/drills/A2DescribingPeopleDrill.tsx
//
// Engine-backed drill for the A2 lesson `describing-people`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/describingPeopleDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DESCRIBING_PEOPLE_DRILL_DATA,
  DESCRIBING_PEOPLE_MODE_LABELS,
} from '../../../data/drills/a2/describingPeopleDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2DescribingPeopleDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2describingpeople"
      title={'Describing People'}
      subtitle="Practice what the lesson taught"
      modeLabels={DESCRIBING_PEOPLE_MODE_LABELS}
      data={DESCRIBING_PEOPLE_DRILL_DATA}
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
