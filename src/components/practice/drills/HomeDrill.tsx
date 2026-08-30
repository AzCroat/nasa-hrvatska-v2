// src/components/practice/drills/HomeDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/homeDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { HOME_DRILL_DATA, HOME_MODE_LABELS } from '../../../data/drills/homeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function HomeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dom"
      title="🏠 Kuća i stan"
      subtitle="u kući, na trećem katu, pored prozora — where a thing actually is"
      modeLabels={HOME_MODE_LABELS}
      data={HOME_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve je na svom mjestu! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Kuća traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
