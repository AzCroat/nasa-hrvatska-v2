// src/components/practice/drills/DialectsDeepDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/dialectsDeepDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DIALECTS_DEEP_DRILL_DATA,
  DIALECTS_DEEP_MODE_LABELS,
} from '../../../data/drills/dialectsDeepDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DialectsDeepDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dijalektic2"
      title="🗺️ Narječja u dubinu"
      subtitle="Štokavski, kajkavski i čakavski — što se doista razlikuje"
      modeLabels={DIALECTS_DEEP_MODE_LABELS}
      data={DIALECTS_DEEP_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina C2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
