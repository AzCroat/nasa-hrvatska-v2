// src/components/practice/drills/A2ConditionalFormsDrill.tsx
//
// Engine-backed drill for the A2 lesson `conditional-forms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/conditionalFormsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONDITIONAL_FORMS_DRILL_DATA,
  CONDITIONAL_FORMS_MODE_LABELS,
} from '../../../data/drills/a2/conditionalFormsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ConditionalFormsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2conditionalforms"
      title="Would: Conditional I"
      subtitle="Practise what the lesson taught"
      modeLabels={CONDITIONAL_FORMS_MODE_LABELS}
      data={CONDITIONAL_FORMS_DRILL_DATA}
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
