// src/components/practice/drills/AdjectivesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/adjectivesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ADJECTIVES_DRILL_DATA,
  ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/adjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pridjevi"
      title="🎨 Pridjevi"
      subtitle="velik grad, velika kuća — making adjectives agree"
      modeLabels={ADJECTIVES_MODE_LABELS}
      data={ADJECTIVES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — slaganje je vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Slaganje pridjeva traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
