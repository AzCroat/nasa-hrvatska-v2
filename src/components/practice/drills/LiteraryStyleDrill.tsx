// src/components/practice/drills/LiteraryStyleDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/literaryStyleDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LITERARY_STYLE_DRILL_DATA,
  LITERARY_STYLE_MODE_LABELS,
} from '../../../data/drills/literaryStyleDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LiteraryStyleDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="knjizevni"
      title="📖 Književni stil"
      subtitle="Kako se čita ono što nije napisano da bude jasno"
      modeLabels={LITERARY_STYLE_MODE_LABELS}
      data={LITERARY_STYLE_DRILL_DATA}
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
