// src/components/practice/drills/A1FleetingADrill.tsx
//
// Engine-backed drill for the A1 lesson `fleeting-a` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/fleetingADrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FLEETING_A_DRILL_DATA,
  FLEETING_A_MODE_LABELS,
} from '../../../data/drills/a1/fleetingADrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FleetingADrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1fleetinga"
      title="The A That Disappears"
      subtitle="Practise what the lesson taught"
      modeLabels={FLEETING_A_MODE_LABELS}
      data={FLEETING_A_DRILL_DATA}
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
