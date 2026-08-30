// src/components/practice/drills/AdverbsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/adverbsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ADVERBS_DRILL_DATA, ADVERBS_MODE_LABELS } from '../../../data/drills/adverbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AdverbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prilozia2"
      title="🏃 Prilozi"
      subtitle="Kako, koliko često — i zašto se ne mijenjaju"
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
