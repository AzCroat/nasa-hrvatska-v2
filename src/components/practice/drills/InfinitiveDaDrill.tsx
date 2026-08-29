// src/components/practice/drills/InfinitiveDaDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/infinitiveDaDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INFINITIVE_DA_DRILL_DATA,
  INFINITIVE_DA_MODE_LABELS,
} from '../../../data/drills/infinitiveDaDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function InfinitiveDaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="infda"
      title="🔀 Infinitiv ili da"
      subtitle="želim doći or želim da dođeš — one word, two jobs"
      modeLabels={INFINITIVE_DA_MODE_LABELS}
      data={INFINITIVE_DA_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — izbor je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Infinitiv i da traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
