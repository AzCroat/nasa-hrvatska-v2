// src/components/practice/drills/WishesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/wishesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { WISHES_DRILL_DATA, WISHES_MODE_LABELS } from '../../../data/drills/wishesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function WishesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zaljenje"
      title="🌠 Želje i žaljenje"
      subtitle="Trebao bih ili trebao sam — jedan samoglasnik"
      modeLabels={WISHES_MODE_LABELS}
      data={WISHES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — to je razina B2! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
