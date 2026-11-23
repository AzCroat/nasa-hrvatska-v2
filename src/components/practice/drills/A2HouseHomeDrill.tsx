// src/components/practice/drills/A2HouseHomeDrill.tsx
//
// Engine-backed drill for the A2 lesson `house-home`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/houseHomeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  HOUSE_HOME_DRILL_DATA,
  HOUSE_HOME_MODE_LABELS,
} from '../../../data/drills/a2/houseHomeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2HouseHomeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2househome"
      title={'House and Home'}
      subtitle="Practice what the lesson taught"
      modeLabels={HOUSE_HOME_MODE_LABELS}
      data={HOUSE_HOME_DRILL_DATA}
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
