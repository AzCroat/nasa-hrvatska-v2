// src/components/practice/drills/B1NumbersNounsDrill.tsx
//
// Engine-backed drill for the B1 lesson `numbers-nouns` (book-order audit, 2026-11-13).
// The content is in ../../../data/drills/b1/numbersNounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NUMBERS_NOUNS_DRILL_DATA,
  NUMBERS_NOUNS_MODE_LABELS,
} from '../../../data/drills/b1/numbersNounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1NumbersNounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1numbersnouns"
      title="jedan dan, dva dana, pet dana"
      subtitle="Practise what the lesson taught"
      modeLabels={NUMBERS_NOUNS_MODE_LABELS}
      data={NUMBERS_NOUNS_DRILL_DATA}
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
