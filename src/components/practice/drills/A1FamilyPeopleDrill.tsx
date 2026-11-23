// src/components/practice/drills/A1FamilyPeopleDrill.tsx
//
// Engine-backed drill for the A1 lesson `family-people`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/familyPeopleDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FAMILY_PEOPLE_DRILL_DATA,
  FAMILY_PEOPLE_MODE_LABELS,
} from '../../../data/drills/a1/familyPeopleDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FamilyPeopleDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1familypeople"
      title={'Family and People'}
      subtitle="Practice what the lesson taught"
      modeLabels={FAMILY_PEOPLE_MODE_LABELS}
      data={FAMILY_PEOPLE_DRILL_DATA}
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
