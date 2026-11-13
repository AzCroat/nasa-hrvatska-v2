// src/components/practice/drills/A2ConditionalIfDrill.tsx
//
// Engine-backed drill for the A2 lesson `conditional-if` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/conditionalIfDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONDITIONAL_IF_DRILL_DATA,
  CONDITIONAL_IF_MODE_LABELS,
} from '../../../data/drills/a2/conditionalIfDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ConditionalIfDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2conditionalif"
      title="If I Had the Time: Kad bih… bih"
      subtitle="Practise what the lesson taught"
      modeLabels={CONDITIONAL_IF_MODE_LABELS}
      data={CONDITIONAL_IF_DRILL_DATA}
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
