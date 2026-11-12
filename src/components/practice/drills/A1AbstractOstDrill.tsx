// src/components/practice/drills/A1AbstractOstDrill.tsx
//
// Engine-backed drill for the A1 lesson `abstract-ost` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/abstractOstDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ABSTRACT_OST_DRILL_DATA,
  ABSTRACT_OST_MODE_LABELS,
} from '../../../data/drills/a1/abstractOstDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1AbstractOstDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1abstractost"
      title="Qualities as Nouns"
      subtitle="Practise what the lesson taught"
      modeLabels={ABSTRACT_OST_MODE_LABELS}
      data={ABSTRACT_OST_DRILL_DATA}
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
