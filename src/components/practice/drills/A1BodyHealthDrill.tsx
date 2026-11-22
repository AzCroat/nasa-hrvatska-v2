// src/components/practice/drills/A1BodyHealthDrill.tsx
//
// Engine-backed drill for the A1 lesson `body-health`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/bodyHealthDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  BODY_HEALTH_DRILL_DATA,
  BODY_HEALTH_MODE_LABELS,
} from '../../../data/drills/a1/bodyHealthDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1BodyHealthDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1bodyhealth"
      title={'The Body and Feeling Unwell'}
      subtitle="Practice what the lesson taught"
      modeLabels={BODY_HEALTH_MODE_LABELS}
      data={BODY_HEALTH_DRILL_DATA}
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
