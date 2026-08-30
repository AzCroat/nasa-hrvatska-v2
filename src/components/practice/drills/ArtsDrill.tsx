// src/components/practice/drills/ArtsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/artsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ARTS_DRILL_DATA, ARTS_MODE_LABELS } from '../../../data/drills/artsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ArtsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="umjetnost"
      title="🎨 Umjetnost i kultura"
      subtitle="potresna predstava je pohvala, a ne prigovor"
      modeLabels={ARTS_MODE_LABELS}
      data={ARTS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — dojmljivo! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Umjetnost traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
