// src/components/practice/drills/A2ImperativeReviewDrill.tsx
//
// Engine-backed drill for the A2 lesson `imperative-review` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/imperativeReviewDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IMPERATIVE_REVIEW_DRILL_DATA,
  IMPERATIVE_REVIEW_MODE_LABELS,
} from '../../../data/drills/a2/imperativeReviewDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2ImperativeReviewDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2imperativereview"
      title="Commands Revisited: Daj mi ga!"
      subtitle="Practise what the lesson taught"
      modeLabels={IMPERATIVE_REVIEW_MODE_LABELS}
      data={IMPERATIVE_REVIEW_DRILL_DATA}
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
