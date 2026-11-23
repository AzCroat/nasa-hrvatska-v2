// src/components/practice/drills/A1ClothesAppearanceDrill.tsx
//
// Engine-backed drill for the A1 lesson `clothes-appearance`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/clothesAppearanceDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CLOTHES_APPEARANCE_DRILL_DATA,
  CLOTHES_APPEARANCE_MODE_LABELS,
} from '../../../data/drills/a1/clothesAppearanceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1ClothesAppearanceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1clothesappearance"
      title={'Clothes'}
      subtitle="Practice what the lesson taught"
      modeLabels={CLOTHES_APPEARANCE_MODE_LABELS}
      data={CLOTHES_APPEARANCE_DRILL_DATA}
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
