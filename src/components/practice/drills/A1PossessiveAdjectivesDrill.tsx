// src/components/practice/drills/A1PossessiveAdjectivesDrill.tsx
//
// Engine-backed drill for the A1 lesson `possessive-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/possessiveAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POSSESSIVE_ADJECTIVES_DRILL_DATA,
  POSSESSIVE_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/a1/possessiveAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PossessiveAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1possessiveadjectives"
      title="Ana's, Marko's"
      subtitle="Practise what the lesson taught"
      modeLabels={POSSESSIVE_ADJECTIVES_MODE_LABELS}
      data={POSSESSIVE_ADJECTIVES_DRILL_DATA}
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
