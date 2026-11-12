// src/components/practice/drills/A1SibilarizationDrill.tsx
//
// Engine-backed drill for the A1 lesson `sibilarization` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/sibilarizationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SIBILARIZATION_DRILL_DATA,
  SIBILARIZATION_MODE_LABELS,
} from '../../../data/drills/a1/sibilarizationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1SibilarizationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1sibilarization"
      title="When K, G and H Change"
      subtitle="Practise what the lesson taught"
      modeLabels={SIBILARIZATION_MODE_LABELS}
      data={SIBILARIZATION_DRILL_DATA}
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
