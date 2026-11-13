// src/components/practice/drills/A2DativeAdjectivesDrill.tsx
//
// Engine-backed drill for the A2 lesson `dative-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/dativeAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  DATIVE_ADJECTIVES_DRILL_DATA,
  DATIVE_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/a2/dativeAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2DativeAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2dativeadjectives"
      title="To My Old Friend: Adjectives in the Dative"
      subtitle="Practise what the lesson taught"
      modeLabels={DATIVE_ADJECTIVES_MODE_LABELS}
      data={DATIVE_ADJECTIVES_DRILL_DATA}
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
