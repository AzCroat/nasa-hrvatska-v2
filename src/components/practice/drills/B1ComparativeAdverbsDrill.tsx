// src/components/practice/drills/B1ComparativeAdverbsDrill.tsx
//
// Engine-backed drill for the B1 lesson `comparative-adverbs` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/comparativeAdverbsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPARATIVE_ADVERBS_DRILL_DATA,
  COMPARATIVE_ADVERBS_MODE_LABELS,
} from '../../../data/drills/b1/comparativeAdverbsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1ComparativeAdverbsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1comparativeadverbs"
      title="Faster, Better, More"
      subtitle="Practise what the lesson taught"
      modeLabels={COMPARATIVE_ADVERBS_MODE_LABELS}
      data={COMPARATIVE_ADVERBS_DRILL_DATA}
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
