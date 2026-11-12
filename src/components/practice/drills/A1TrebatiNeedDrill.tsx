// src/components/practice/drills/A1TrebatiNeedDrill.tsx
//
// Engine-backed drill for the A1 lesson `trebati-need` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/trebatiNeedDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TREBATI_NEED_DRILL_DATA,
  TREBATI_NEED_MODE_LABELS,
} from '../../../data/drills/a1/trebatiNeedDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1TrebatiNeedDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1trebatineed"
      title="Trebati: What You Need"
      subtitle="Practise what the lesson taught"
      modeLabels={TREBATI_NEED_MODE_LABELS}
      data={TREBATI_NEED_DRILL_DATA}
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
