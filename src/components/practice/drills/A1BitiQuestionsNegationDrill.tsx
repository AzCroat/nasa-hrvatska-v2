// src/components/practice/drills/A1BitiQuestionsNegationDrill.tsx
//
// Engine-backed drill for the A1 lesson `biti-questions-negation` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/bitiQuestionsNegationDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  BITI_QUESTIONS_NEGATION_DRILL_DATA,
  BITI_QUESTIONS_NEGATION_MODE_LABELS,
} from '../../../data/drills/a1/bitiQuestionsNegationDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1BitiQuestionsNegationDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1bitiquestionsnegation"
      title="Am I? I Am Not: Questions and No with biti"
      subtitle="Practise what the lesson taught"
      modeLabels={BITI_QUESTIONS_NEGATION_MODE_LABELS}
      data={BITI_QUESTIONS_NEGATION_DRILL_DATA}
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
