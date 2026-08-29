// src/components/practice/drills/QuestionsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/questionsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { QUESTIONS_DRILL_DATA, QUESTIONS_MODE_LABELS } from '../../../data/drills/questionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function QuestionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="upitne"
      title="❓ Pitanja"
      subtitle="tko, što, gdje — and the li that makes a yes/no question"
      modeLabels={QUESTIONS_MODE_LABELS}
      data={QUESTIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sada znate pitati! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Pitanja traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
