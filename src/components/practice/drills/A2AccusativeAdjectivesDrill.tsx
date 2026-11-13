// src/components/practice/drills/A2AccusativeAdjectivesDrill.tsx
//
// Engine-backed drill for the A2 lesson `accusative-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/accusativeAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ACCUSATIVE_ADJECTIVES_DRILL_DATA,
  ACCUSATIVE_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/a2/accusativeAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2AccusativeAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2accusativeadjectives"
      title="A New Friend, a New Table"
      subtitle="Practise what the lesson taught"
      modeLabels={ACCUSATIVE_ADJECTIVES_MODE_LABELS}
      data={ACCUSATIVE_ADJECTIVES_DRILL_DATA}
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
