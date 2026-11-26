// src/components/practice/drills/B2VerbalAdverbsDrill.tsx
//
// Engine-backed drill for the B2 lesson `verbal-adverbs`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/verbalAdverbsDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VERBAL_ADVERBS_DRILL_DATA,
  VERBAL_ADVERBS_MODE_LABELS,
} from '../../../data/drills/b2/verbalAdverbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2VerbalAdverbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2verbaladverbs"
      title={'🔗 Glagolski prilozi'}
      subtitle="Practice what the lesson taught"
      modeLabels={VERBAL_ADVERBS_MODE_LABELS}
      data={VERBAL_ADVERBS_DRILL_DATA}
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
