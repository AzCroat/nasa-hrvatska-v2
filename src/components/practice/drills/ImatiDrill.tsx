// src/components/practice/drills/ImatiDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/imatiDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { IMATI_DRILL_DATA, IMATI_MODE_LABELS } from '../../../data/drills/imatiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ImatiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="imatidrill"
      title="🤲 Imati i nemati"
      subtitle="imam vrijeme, nemam vremena — and why the case changes"
      modeLabels={IMATI_MODE_LABELS}
      data={IMATI_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — imati je vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Imati i nemati traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
