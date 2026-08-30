// src/components/practice/drills/PolitenessDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/politenessDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POLITENESS_DRILL_DATA,
  POLITENESS_MODE_LABELS,
} from '../../../data/drills/politenessDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PolitenessDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="persiranje"
      title="🎩 Vi ili ti"
      subtitle="Uljudno obraćanje i prijelaz na ti"
      modeLabels={POLITENESS_MODE_LABELS}
      data={POLITENESS_DRILL_DATA}
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
