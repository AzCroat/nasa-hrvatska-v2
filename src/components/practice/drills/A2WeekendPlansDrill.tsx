// src/components/practice/drills/A2WeekendPlansDrill.tsx
//
// Engine-backed drill for the A2 lesson `weekend-plans` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/weekendPlansDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  WEEKEND_PLANS_DRILL_DATA,
  WEEKEND_PLANS_MODE_LABELS,
} from '../../../data/drills/a2/weekendPlansDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2WeekendPlansDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2weekendplans"
      title="Planovi za vikend"
      subtitle="Practise what the lesson taught"
      modeLabels={WEEKEND_PLANS_MODE_LABELS}
      data={WEEKEND_PLANS_DRILL_DATA}
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
