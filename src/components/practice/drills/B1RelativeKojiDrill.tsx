// src/components/practice/drills/B1RelativeKojiDrill.tsx
//
// Engine-backed drill for the B1 lesson `relative-koji`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/relativeKojiDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  RELATIVE_KOJI_DRILL_DATA,
  RELATIVE_KOJI_MODE_LABELS,
} from '../../../data/drills/b1/relativeKojiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1RelativeKojiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1relativekoji"
      title={'🧲 Odnosna rečenica s koji'}
      subtitle="Practice what the lesson taught"
      modeLabels={RELATIVE_KOJI_MODE_LABELS}
      data={RELATIVE_KOJI_DRILL_DATA}
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
