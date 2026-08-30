// src/components/practice/drills/MediaAnalysisDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/mediaAnalysisDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MEDIA_ANALYSIS_DRILL_DATA,
  MEDIA_ANALYSIS_MODE_LABELS,
} from '../../../data/drills/mediaAnalysisDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function MediaAnalysisDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="analizamedija"
      title="📰 Analiza medija"
      subtitle="tko je nestao u pasivu, i koja riječ nije odabrana"
      modeLabels={MEDIA_ANALYSIS_MODE_LABELS}
      data={MEDIA_ANALYSIS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve ste pročitali! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Analiza medija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
