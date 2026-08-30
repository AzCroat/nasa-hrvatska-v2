// src/components/practice/drills/PreferencesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/preferencesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PREFERENCES_DRILL_DATA,
  PREFERENCES_MODE_LABELS,
} from '../../../data/drills/preferencesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PreferencesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="svidjanje"
      title="💚 Sviđanje i sklonosti"
      subtitle="volim kavu but sviđa mi se film — the flip English cannot make"
      modeLabels={PREFERENCES_MODE_LABELS}
      data={PREFERENCES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sviđanje je vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Sviđa mi se traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
