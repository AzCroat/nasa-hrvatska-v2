// src/components/practice/drills/A2WorkJobsDrill.tsx
//
// Engine-backed drill for the A2 lesson `work-jobs`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/workJobsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { WORK_JOBS_DRILL_DATA, WORK_JOBS_MODE_LABELS } from '../../../data/drills/a2/workJobsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2WorkJobsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2workjobs"
      title={'Work and Jobs'}
      subtitle="Practice what the lesson taught"
      modeLabels={WORK_JOBS_MODE_LABELS}
      data={WORK_JOBS_DRILL_DATA}
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
