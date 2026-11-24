// src/components/practice/drills/A2SvojDrill.tsx
//
// Engine-backed drill for the A2 lesson `svoj`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/svojDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { SVOJ_DRILL_DATA, SVOJ_MODE_LABELS } from '../../../data/drills/a2/svojDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2SvojDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2svoj"
      title={'🪞 Svoj'}
      subtitle="Practice what the lesson taught"
      modeLabels={SVOJ_MODE_LABELS}
      data={SVOJ_DRILL_DATA}
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
