// src/components/practice/drills/B1JobApplicationDrill.tsx
//
// Engine-backed drill for the B1 lesson `job-application` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/jobApplicationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  JOB_APPLICATION_DRILL_DATA,
  JOB_APPLICATION_MODE_LABELS,
} from '../../../data/drills/b1/jobApplicationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1JobApplicationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1jobapplication"
      title="Prijava na natječaj — Writing a Job Application"
      subtitle="Practise what the lesson taught"
      modeLabels={JOB_APPLICATION_MODE_LABELS}
      data={JOB_APPLICATION_DRILL_DATA}
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
