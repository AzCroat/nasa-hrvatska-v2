// src/components/practice/drills/A1NationalitiesDrill.tsx
//
// Engine-backed drill for the A1 lesson `nationalities` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/nationalitiesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NATIONALITIES_DRILL_DATA,
  NATIONALITIES_MODE_LABELS,
} from '../../../data/drills/a1/nationalitiesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1NationalitiesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1nationalities"
      title="Hrvat, Hrvatica, hrvatski"
      subtitle="Practise what the lesson taught"
      modeLabels={NATIONALITIES_MODE_LABELS}
      data={NATIONALITIES_DRILL_DATA}
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
