// src/components/practice/drills/IronyDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/ironyDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { IRONY_DRILL_DATA, IRONY_MODE_LABELS } from '../../../data/drills/ironyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function IronyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="ironija"
      title="🙃 Ironija i podtekst"
      subtitle="Ono što je rečeno i ono što se misli"
      modeLabels={IRONY_MODE_LABELS}
      data={IRONY_DRILL_DATA}
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
