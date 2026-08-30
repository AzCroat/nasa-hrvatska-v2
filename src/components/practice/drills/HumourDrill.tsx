// src/components/practice/drills/HumourDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/humourDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { HUMOUR_DRILL_DATA, HUMOUR_MODE_LABELS } from '../../../data/drills/humourDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function HumourDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="humor"
      title="🎭 Humor i ton"
      subtitle="ma, podcjenjivanje, fjaka — ono što nije rečeno"
      modeLabels={HUMOUR_MODE_LABELS}
      data={HUMOUR_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve ste uhvatili! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Ton traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
