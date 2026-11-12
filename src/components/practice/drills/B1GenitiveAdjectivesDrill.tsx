// src/components/practice/drills/B1GenitiveAdjectivesDrill.tsx
//
// Engine-backed drill for the B1 lesson `genitive-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/genitiveAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GENITIVE_ADJECTIVES_DRILL_DATA,
  GENITIVE_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/b1/genitiveAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1GenitiveAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1genitiveadjectives"
      title="Iz mojeg starog grada — Adjectives in the Genitive"
      subtitle="Practise what the lesson taught"
      modeLabels={GENITIVE_ADJECTIVES_MODE_LABELS}
      data={GENITIVE_ADJECTIVES_DRILL_DATA}
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
