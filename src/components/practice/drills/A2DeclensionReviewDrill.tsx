// src/components/practice/drills/A2DeclensionReviewDrill.tsx
//
// Engine-backed drill for the A2 lesson `declension-review` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/declensionReviewDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DECLENSION_REVIEW_DRILL_DATA,
  DECLENSION_REVIEW_MODE_LABELS,
} from '../../../data/drills/a2/declensionReviewDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2DeclensionReviewDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2declensionreview"
      title="All Seven Cases, One Table"
      subtitle="Practise what the lesson taught"
      modeLabels={DECLENSION_REVIEW_MODE_LABELS}
      data={DECLENSION_REVIEW_DRILL_DATA}
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
