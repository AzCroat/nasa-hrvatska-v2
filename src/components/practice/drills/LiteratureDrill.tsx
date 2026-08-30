// src/components/practice/drills/LiteratureDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/literatureDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LITERATURE_DRILL_DATA,
  LITERATURE_MODE_LABELS,
} from '../../../data/drills/literatureDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LiteratureDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="knjizevnost"
      title="📚 Književnost"
      subtitle="od čega početi, i kako čitati stranicu a ne rječnik"
      modeLabels={LITERATURE_MODE_LABELS}
      data={LITERATURE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sljedeća knjiga čeka! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Književnost traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
