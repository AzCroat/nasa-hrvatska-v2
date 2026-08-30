// src/components/practice/drills/DebateDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/debateDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { DEBATE_DRILL_DATA, DEBATE_MODE_LABELS } from '../../../data/drills/debateDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DebateDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="debata"
      title="🥊 Rasprava"
      subtitle="To stoji, ali… — prvo se popušta, pa se pobija"
      modeLabels={DEBATE_MODE_LABELS}
      data={DEBATE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — argument je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Rasprava traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
