// src/components/practice/drills/A1LikesPreferencesDrill.tsx
//
// Engine-backed drill for the A1 lesson `likes-preferences`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/likesPreferencesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LIKES_PREFERENCES_DRILL_DATA,
  LIKES_PREFERENCES_MODE_LABELS,
} from '../../../data/drills/a1/likesPreferencesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1LikesPreferencesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1likespreferences"
      title={'\ud83d\udc9a Svi\u0111anje i sklonosti'}
      subtitle="Practice what the lesson taught"
      modeLabels={LIKES_PREFERENCES_MODE_LABELS}
      data={LIKES_PREFERENCES_DRILL_DATA}
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
