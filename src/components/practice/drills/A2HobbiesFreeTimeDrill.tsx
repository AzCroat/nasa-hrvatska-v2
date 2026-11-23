// src/components/practice/drills/A2HobbiesFreeTimeDrill.tsx
//
// Engine-backed drill for the A2 lesson `hobbies-free-time`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/hobbiesFreeTimeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  HOBBIES_FREE_TIME_DRILL_DATA,
  HOBBIES_FREE_TIME_MODE_LABELS,
} from '../../../data/drills/a2/hobbiesFreeTimeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2HobbiesFreeTimeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2hobbiesfreetime"
      title={'Free Time and Hobbies'}
      subtitle="Practice what the lesson taught"
      modeLabels={HOBBIES_FREE_TIME_MODE_LABELS}
      data={HOBBIES_FREE_TIME_DRILL_DATA}
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
