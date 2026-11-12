// src/components/practice/drills/A2ProblemsAtWorkDrill.tsx
//
// Engine-backed drill for the A2 lesson `problems-at-work` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/problemsAtWorkDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PROBLEMS_AT_WORK_DRILL_DATA,
  PROBLEMS_AT_WORK_MODE_LABELS,
} from '../../../data/drills/a2/problemsAtWorkDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ProblemsAtWorkDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2problemsatwork"
      title="Problems at Work and at Home"
      subtitle="Practise what the lesson taught"
      modeLabels={PROBLEMS_AT_WORK_MODE_LABELS}
      data={PROBLEMS_AT_WORK_DRILL_DATA}
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
