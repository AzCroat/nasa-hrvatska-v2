// src/components/practice/drills/C1ExclamatoryDativeDrill.tsx
//
// Engine-backed drill for the C1 lesson `exclamatory-dative` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/exclamatoryDativeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  EXCLAMATORY_DATIVE_DRILL_DATA,
  EXCLAMATORY_DATIVE_MODE_LABELS,
} from '../../../data/drills/c1/exclamatoryDativeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1ExclamatoryDativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1exclamatorydative"
      title="Blago tebi! The Exclamatory and Emphatic Dative"
      subtitle="Practise what the lesson taught"
      modeLabels={EXCLAMATORY_DATIVE_MODE_LABELS}
      data={EXCLAMATORY_DATIVE_DRILL_DATA}
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
