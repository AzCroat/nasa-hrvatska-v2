// src/components/practice/drills/B1LoveAndMarriageDrill.tsx
//
// Engine-backed drill for the B1 lesson `love-and-marriage` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/loveAndMarriageDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LOVE_AND_MARRIAGE_DRILL_DATA,
  LOVE_AND_MARRIAGE_MODE_LABELS,
} from '../../../data/drills/b1/loveAndMarriageDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1LoveAndMarriageDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1loveandmarriage"
      title="Love and Marriage"
      subtitle="Practise what the lesson taught"
      modeLabels={LOVE_AND_MARRIAGE_MODE_LABELS}
      data={LOVE_AND_MARRIAGE_DRILL_DATA}
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
