// src/components/practice/drills/NegationDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/negationDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { NEGATION_DRILL_DATA, NEGATION_MODE_LABELS } from '../../../data/drills/negationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NegationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="negacija"
      title="🚫 Negacija"
      subtitle="ne znam, nemam, nikad nisam — saying no in Croatian"
      modeLabels={NEGATION_MODE_LABELS}
      data={NEGATION_DRILL_DATA}
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
