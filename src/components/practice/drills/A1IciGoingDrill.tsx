// src/components/practice/drills/A1IciGoingDrill.tsx
//
// Engine-backed drill for the A1 lesson `ici-going` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/iciGoingDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ICI_GOING_DRILL_DATA, ICI_GOING_MODE_LABELS } from '../../../data/drills/a1/iciGoingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1IciGoingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1icigoing"
      title="Going: ići"
      subtitle="Practise what the lesson taught"
      modeLabels={ICI_GOING_MODE_LABELS}
      data={ICI_GOING_DRILL_DATA}
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
