// src/components/practice/drills/A1DailyRoutineDrill.tsx
//
// Engine-backed drill for the A1 lesson `daily-routine` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/dailyRoutineDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DAILY_ROUTINE_DRILL_DATA,
  DAILY_ROUTINE_MODE_LABELS,
} from '../../../data/drills/a1/dailyRoutineDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1DailyRoutineDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1dailyroutine"
      title="My Daily Routine"
      subtitle="Practise what the lesson taught"
      modeLabels={DAILY_ROUTINE_MODE_LABELS}
      data={DAILY_ROUTINE_DRILL_DATA}
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
