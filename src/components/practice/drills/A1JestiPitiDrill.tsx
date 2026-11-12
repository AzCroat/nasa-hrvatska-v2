// src/components/practice/drills/A1JestiPitiDrill.tsx
//
// Engine-backed drill for the A1 lesson `jesti-piti` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/jestiPitiDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  JESTI_PITI_DRILL_DATA,
  JESTI_PITI_MODE_LABELS,
} from '../../../data/drills/a1/jestiPitiDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1JestiPitiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1jestipiti"
      title="Eating and Drinking"
      subtitle="Practise what the lesson taught"
      modeLabels={JESTI_PITI_MODE_LABELS}
      data={JESTI_PITI_DRILL_DATA}
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
