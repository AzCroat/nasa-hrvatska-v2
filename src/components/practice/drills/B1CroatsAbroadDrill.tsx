// src/components/practice/drills/B1CroatsAbroadDrill.tsx
//
// Engine-backed drill for the B1 lesson `croats-abroad` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/croatsAbroadDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CROATS_ABROAD_DRILL_DATA,
  CROATS_ABROAD_MODE_LABELS,
} from '../../../data/drills/b1/croatsAbroadDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1CroatsAbroadDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1croatsabroad"
      title="Croats in the World, the World in Croatia"
      subtitle="Practise what the lesson taught"
      modeLabels={CROATS_ABROAD_MODE_LABELS}
      data={CROATS_ABROAD_DRILL_DATA}
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
