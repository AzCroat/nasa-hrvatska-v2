// src/components/practice/drills/WordplayDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/wordplayDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { WORDPLAY_DRILL_DATA, WORDPLAY_MODE_LABELS } from '../../../data/drills/wordplayDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function WordplayDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="humorjezik"
      title="😄 Jezični humor"
      subtitle="Igre riječima i kako ih čuti"
      modeLabels={WORDPLAY_MODE_LABELS}
      data={WORDPLAY_DRILL_DATA}
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
