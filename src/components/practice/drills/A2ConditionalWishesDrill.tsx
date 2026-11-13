// src/components/practice/drills/A2ConditionalWishesDrill.tsx
//
// Engine-backed drill for the A2 lesson `conditional-wishes` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/conditionalWishesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONDITIONAL_WISHES_DRILL_DATA,
  CONDITIONAL_WISHES_MODE_LABELS,
} from '../../../data/drills/a2/conditionalWishesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ConditionalWishesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2conditionalwishes"
      title="Wishes and Polite Requests"
      subtitle="Practise what the lesson taught"
      modeLabels={CONDITIONAL_WISHES_MODE_LABELS}
      data={CONDITIONAL_WISHES_DRILL_DATA}
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
