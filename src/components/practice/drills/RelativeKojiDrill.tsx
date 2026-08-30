// src/components/practice/drills/RelativeKojiDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/relativeKojiDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  RELATIVE_KOJI_DRILL_DATA,
  RELATIVE_KOJI_MODE_LABELS,
} from '../../../data/drills/relativeKojiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RelativeKojiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kojia2"
      title="🧵 Riječ koji"
      subtitle="Rod izvana, padež iznutra"
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
