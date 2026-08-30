// src/components/practice/drills/EducationDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/educationDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { EDUCATION_DRILL_DATA, EDUCATION_MODE_LABELS } from '../../../data/drills/educationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EducationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="skola"
      title="🎒 Škola i studij"
      subtitle="učiti ili studirati, učenik ili student, ispit iz matematike"
      modeLabels={EDUCATION_MODE_LABELS}
      data={EDUCATION_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — čista petica! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Škola traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
