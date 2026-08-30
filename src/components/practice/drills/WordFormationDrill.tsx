// src/components/practice/drills/WordFormationDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/wordFormationDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  WORD_FORMATION_DRILL_DATA,
  WORD_FORMATION_MODE_LABELS,
} from '../../../data/drills/wordFormationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function WordFormationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="tvorbac1"
      title="🧱 Tvorba riječi"
      subtitle="prefiks + korijen + sufiks — how to guess a word you have never met"
      modeLabels={WORD_FORMATION_MODE_LABELS}
      data={WORD_FORMATION_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — tvorba je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Tvorba riječi traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
