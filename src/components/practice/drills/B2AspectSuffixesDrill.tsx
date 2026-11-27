// src/components/practice/drills/B2AspectSuffixesDrill.tsx
//
// Engine-backed drill for the B2 lesson `aspect-suffixes`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/aspectSuffixesDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ASPECT_SUFFIXES_DRILL_DATA,
  ASPECT_SUFFIXES_MODE_LABELS,
} from '../../../data/drills/b2/aspectSuffixesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2AspectSuffixesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2aspectsuffixes"
      title={'🔁 Nastavci za vid'}
      subtitle="Practice what the lesson taught"
      modeLabels={ASPECT_SUFFIXES_MODE_LABELS}
      data={ASPECT_SUFFIXES_DRILL_DATA}
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
