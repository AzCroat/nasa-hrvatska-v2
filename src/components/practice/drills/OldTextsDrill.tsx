// src/components/practice/drills/OldTextsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/oldTextsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { OLD_TEXTS_DRILL_DATA, OLD_TEXTS_MODE_LABELS } from '../../../data/drills/oldTextsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function OldTextsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="staritekstovi"
      title="📜 Stari tekstovi"
      subtitle="Čitati hrvatski napisan prije Gaja"
      modeLabels={OLD_TEXTS_MODE_LABELS}
      data={OLD_TEXTS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina C2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
