// src/components/practice/drills/A1JobsProfessionsDrill.tsx
//
// Engine-backed drill for the A1 lesson `jobs-professions` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/jobsProfessionsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  JOBS_PROFESSIONS_DRILL_DATA,
  JOBS_PROFESSIONS_MODE_LABELS,
} from '../../../data/drills/a1/jobsProfessionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1JobsProfessionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1jobsprofessions"
      title="Who Does What: Jobs for Men and Women"
      subtitle="Practise what the lesson taught"
      modeLabels={JOBS_PROFESSIONS_MODE_LABELS}
      data={JOBS_PROFESSIONS_DRILL_DATA}
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
