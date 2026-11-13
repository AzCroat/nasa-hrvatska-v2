// src/components/practice/drills/A2CliticOrderDrill.tsx
//
// Engine-backed drill for the A2 lesson `clitic-order` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/cliticOrderDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CLITIC_ORDER_DRILL_DATA,
  CLITIC_ORDER_MODE_LABELS,
} from '../../../data/drills/a2/cliticOrderDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2CliticOrderDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2cliticorder"
      title="Dao sam joj ga"
      subtitle="Practise what the lesson taught"
      modeLabels={CLITIC_ORDER_MODE_LABELS}
      data={CLITIC_ORDER_DRILL_DATA}
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
