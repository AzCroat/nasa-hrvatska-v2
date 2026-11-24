// src/components/practice/drills/A2AdverbsDrill.tsx
//
// Engine-backed drill for the A2 lesson `adverbs`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/adverbsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ADVERBS_DRILL_DATA, ADVERBS_MODE_LABELS } from '../../../data/drills/a2/adverbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AdverbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2adverbs"
      title={'🏃 Prilozi'}
      subtitle="Practice what the lesson taught"
      modeLabels={ADVERBS_MODE_LABELS}
      data={ADVERBS_DRILL_DATA}
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
