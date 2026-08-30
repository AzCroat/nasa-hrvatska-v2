// src/components/practice/drills/JobsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/jobsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { JOBS_DRILL_DATA, JOBS_MODE_LABELS } from '../../../data/drills/jobsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function JobsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zanimanja"
      title="💼 Posao i zanimanja"
      subtitle="učiteljica, radim kao konobar, bavim se sportom"
      modeLabels={JOBS_MODE_LABELS}
      data={JOBS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — posao je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Zanimanja traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
