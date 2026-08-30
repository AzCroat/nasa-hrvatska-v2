// src/components/practice/drills/SmalltalkDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/smalltalkDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { SMALLTALK_DRILL_DATA, SMALLTALK_MODE_LABELS } from '../../../data/drills/smalltalkDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SmalltalkDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="caskanje"
      title="💬 Tečnost u razgovoru"
      subtitle="pa, ovaj, zapravo — oklijevajte na hrvatskom, ne u tišini"
      modeLabels={SMALLTALK_MODE_LABELS}
      data={SMALLTALK_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — zvučite domaće! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Tečnost traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
