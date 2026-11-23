// src/components/practice/drills/A1AdjectivesBasicDrill.tsx
//
// Engine-backed drill for the A1 lesson `adjectives-basic`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/adjectivesBasicDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ADJECTIVES_BASIC_DRILL_DATA,
  ADJECTIVES_BASIC_MODE_LABELS,
} from '../../../data/drills/a1/adjectivesBasicDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AdjectivesBasicDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1adjectivesbasic"
      title={'Adjectives and Agreement'}
      subtitle="Practice what the lesson taught"
      modeLabels={ADJECTIVES_BASIC_MODE_LABELS}
      data={ADJECTIVES_BASIC_DRILL_DATA}
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
