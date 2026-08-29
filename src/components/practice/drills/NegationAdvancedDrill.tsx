// src/components/practice/drills/NegationAdvancedDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/negationAdvancedDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NEGATION_ADVANCED_DRILL_DATA,
  NEGATION_ADVANCED_MODE_LABELS,
} from '../../../data/drills/negationAdvancedDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NegationAdvancedDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="negacijab2"
      title="➖ Napredna negacija"
      subtitle="nitko ne zna — Croatian requires the double negative"
      modeLabels={NEGATION_ADVANCED_MODE_LABELS}
      data={NEGATION_ADVANCED_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — negacija je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Negacija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
