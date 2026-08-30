// src/components/practice/drills/ConjunctionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/conjunctionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONJUNCTIONS_DRILL_DATA,
  CONJUNCTIONS_MODE_LABELS,
} from '../../../data/drills/conjunctionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ConjunctionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="veznici"
      title="🔗 Veznici"
      subtitle="A ili ali, nego, jer — i zarezi"
      modeLabels={CONJUNCTIONS_MODE_LABELS}
      data={CONJUNCTIONS_DRILL_DATA}
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
