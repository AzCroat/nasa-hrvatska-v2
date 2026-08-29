// src/components/practice/drills/SummarisingDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/summarisingDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SUMMARISING_DRILL_DATA,
  SUMMARISING_MODE_LABELS,
} from '../../../data/drills/summarisingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SummarisingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="sazimanje"
      title="📝 Sažimanje i parafraza"
      subtitle="riječ je o… — change the structure, not the synonyms"
      modeLabels={SUMMARISING_MODE_LABELS}
      data={SUMMARISING_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sažimanje je vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Sažimanje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
