// src/components/practice/drills/A1SchoolEducationDrill.tsx
//
// Engine-backed drill for the A1 lesson `school-education` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/schoolEducationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SCHOOL_EDUCATION_DRILL_DATA,
  SCHOOL_EDUCATION_MODE_LABELS,
} from '../../../data/drills/a1/schoolEducationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1SchoolEducationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1schooleducation"
      title="School and Studying"
      subtitle="Practise what the lesson taught"
      modeLabels={SCHOOL_EDUCATION_MODE_LABELS}
      data={SCHOOL_EDUCATION_DRILL_DATA}
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
