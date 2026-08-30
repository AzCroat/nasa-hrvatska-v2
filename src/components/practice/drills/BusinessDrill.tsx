// src/components/practice/drills/BusinessDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/businessDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { BUSINESS_DRILL_DATA, BUSINESS_MODE_LABELS } from '../../../data/drills/businessDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function BusinessDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="poslovno"
      title="💼 Posao i gospodarstvo"
      subtitle="dobit i gubitak, gospodarstvo, i zašto sezona znači ono što znači"
      modeLabels={BUSINESS_MODE_LABELS}
      data={BUSINESS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — pozitivna bilanca! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Poslovni jezik traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
