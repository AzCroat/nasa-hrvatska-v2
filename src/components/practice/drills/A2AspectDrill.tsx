// src/components/practice/drills/A2AspectDrill.tsx
//
// Engine-backed drill for the A2 lesson `aspect`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/aspectDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ASPECT_DRILL_DATA, ASPECT_MODE_LABELS } from '../../../data/drills/a2/aspectDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AspectDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2aspect"
      title="⏳ Glagolski vid"
      subtitle="Practice what the lesson taught"
      modeLabels={ASPECT_MODE_LABELS}
      data={ASPECT_DRILL_DATA}
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
