// src/components/practice/drills/A1InstrumentalMeansDrill.tsx
//
// Engine-backed drill for the A1 lesson `instrumental-means` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/instrumentalMeansDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INSTRUMENTAL_MEANS_DRILL_DATA,
  INSTRUMENTAL_MEANS_MODE_LABELS,
} from '../../../data/drills/a1/instrumentalMeansDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1InstrumentalMeansDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1instrumentalmeans"
      title="By Car, With a Pen"
      subtitle="Practise what the lesson taught"
      modeLabels={INSTRUMENTAL_MEANS_MODE_LABELS}
      data={INSTRUMENTAL_MEANS_DRILL_DATA}
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
