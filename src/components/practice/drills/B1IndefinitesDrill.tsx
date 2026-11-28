// src/components/practice/drills/B1IndefinitesDrill.tsx
//
// Engine-backed drill for the B1 lesson `indefinites`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/indefinitesDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INDEFINITES_DRILL_DATA,
  INDEFINITES_MODE_LABELS,
} from '../../../data/drills/b1/indefinitesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1IndefinitesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1indefinites"
      title={'❓ Neodređene zamjenice'}
      subtitle="Practice what the lesson taught"
      modeLabels={INDEFINITES_MODE_LABELS}
      data={INDEFINITES_DRILL_DATA}
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
