// src/components/practice/drills/A2VocativeReviewDrill.tsx
//
// Engine-backed drill for the A2 lesson `vocative-review` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/vocativeReviewDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VOCATIVE_REVIEW_DRILL_DATA,
  VOCATIVE_REVIEW_MODE_LABELS,
} from '../../../data/drills/a2/vocativeReviewDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2VocativeReviewDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2vocativereview"
      title="Calling People: The Vocative Revisited"
      subtitle="Practise what the lesson taught"
      modeLabels={VOCATIVE_REVIEW_MODE_LABELS}
      data={VOCATIVE_REVIEW_DRILL_DATA}
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
