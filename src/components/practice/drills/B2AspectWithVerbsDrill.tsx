// src/components/practice/drills/B2AspectWithVerbsDrill.tsx
//
// Engine-backed drill for the B2 lesson `aspect-with-verbs`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/aspectWithVerbsDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ASPECT_WITH_VERBS_DRILL_DATA,
  ASPECT_WITH_VERBS_MODE_LABELS,
} from '../../../data/drills/b2/aspectWithVerbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2AspectWithVerbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2aspectwithverbs"
      title={'🎚️ Vid uz glagole'}
      subtitle="Practice what the lesson taught"
      modeLabels={ASPECT_WITH_VERBS_MODE_LABELS}
      data={ASPECT_WITH_VERBS_DRILL_DATA}
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
