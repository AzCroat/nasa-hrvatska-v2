// src/components/practice/drills/A2ViVsTiDrill.tsx
//
// Engine-backed drill for the A2 lesson `vi-vs-ti`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/viVsTiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { VI_VS_TI_DRILL_DATA, VI_VS_TI_MODE_LABELS } from '../../../data/drills/a2/viVsTiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ViVsTiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2vivsti"
      title={'🎩 Vi ili ti'}
      subtitle="Practice what the lesson taught"
      modeLabels={VI_VS_TI_MODE_LABELS}
      data={VI_VS_TI_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
