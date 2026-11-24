// src/components/practice/drills/A2ImpersonalDrill.tsx
//
// Engine-backed drill for the A2 lesson `impersonal`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/impersonalDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERSONAL_DRILL_DATA,
  IMPERSONAL_MODE_LABELS,
} from '../../../data/drills/a2/impersonalDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ImpersonalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2impersonal"
      title={'🚭 Bezlične rečenice'}
      subtitle="Practice what the lesson taught"
      modeLabels={IMPERSONAL_MODE_LABELS}
      data={IMPERSONAL_DRILL_DATA}
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
