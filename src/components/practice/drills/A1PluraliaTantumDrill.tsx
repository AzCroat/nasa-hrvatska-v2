// src/components/practice/drills/A1PluraliaTantumDrill.tsx
//
// Engine-backed drill for the A1 lesson `pluralia-tantum` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/pluraliaTantumDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLURALIA_TANTUM_DRILL_DATA,
  PLURALIA_TANTUM_MODE_LABELS,
} from '../../../data/drills/a1/pluraliaTantumDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PluraliaTantumDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pluraliatantum"
      title="Words That Are Only Plural"
      subtitle="Practise what the lesson taught"
      modeLabels={PLURALIA_TANTUM_MODE_LABELS}
      data={PLURALIA_TANTUM_DRILL_DATA}
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
