// src/components/practice/drills/B1InfinitiveVsDaDrill.tsx
//
// Engine-backed drill for the B1 lesson `infinitive-vs-da`, built from Razgovarajte s nama A2-B1. The content is in
// ../../../data/drills/b1/infinitiveVsDaDrill. Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INFINITIVE_VS_DA_DRILL_DATA,
  INFINITIVE_VS_DA_MODE_LABELS,
} from '../../../data/drills/b1/infinitiveVsDaDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1InfinitiveVsDaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1infinitivevsda"
      title={'🔤 Infinitiv ili da'}
      subtitle="Practice what the lesson taught"
      modeLabels={INFINITIVE_VS_DA_MODE_LABELS}
      data={INFINITIVE_VS_DA_DRILL_DATA}
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
