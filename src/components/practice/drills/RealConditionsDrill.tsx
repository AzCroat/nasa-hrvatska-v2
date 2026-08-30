// src/components/practice/drills/RealConditionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/realConditionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REAL_CONDITIONS_DRILL_DATA,
  REAL_CONDITIONS_MODE_LABELS,
} from '../../../data/drills/realConditionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RealConditionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="stvarniuvjeti"
      title="🌦️ Stvarni uvjeti"
      subtitle="Ako, kad i budem-oblik"
      modeLabels={REAL_CONDITIONS_MODE_LABELS}
      data={REAL_CONDITIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina B1! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
