// src/components/practice/drills/JobSearchDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/jobSearchDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { JOB_SEARCH_DRILL_DATA, JOB_SEARCH_MODE_LABELS } from '../../../data/drills/jobSearchDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function JobSearchDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zivotopis"
      title="📑 Zamolba i razgovor"
      subtitle="životopis, radio/radila sam, i odgovor s razlogom"
      modeLabels={JOB_SEARCH_MODE_LABELS}
      data={JOB_SEARCH_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — primljeni ste! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Zamolba traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
