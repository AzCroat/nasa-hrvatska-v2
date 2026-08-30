// src/components/practice/drills/FeelingsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/feelingsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { FEELINGS_DRILL_DATA, FEELINGS_MODE_LABELS } from '../../../data/drills/feelingsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FeelingsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="osjecaji"
      title="💙 Osjećaji"
      subtitle="bojim se psa, nadam se boljem, žao mi je"
      modeLabels={FEELINGS_MODE_LABELS}
      data={FEELINGS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve ste osjetili! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Osjećaji traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
