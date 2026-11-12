// src/components/practice/drills/A2LocativeAdjectivesDrill.tsx
//
// Engine-backed drill for the A2 lesson `locative-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/locativeAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LOCATIVE_ADJECTIVES_DRILL_DATA,
  LOCATIVE_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/a2/locativeAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2LocativeAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2locativeadjectives"
      title="U velikom gradu — the Locative of Adjectives"
      subtitle="Practise what the lesson taught"
      modeLabels={LOCATIVE_ADJECTIVES_MODE_LABELS}
      data={LOCATIVE_ADJECTIVES_DRILL_DATA}
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
