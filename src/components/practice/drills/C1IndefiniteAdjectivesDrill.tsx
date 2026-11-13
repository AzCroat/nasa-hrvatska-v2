// src/components/practice/drills/C1IndefiniteAdjectivesDrill.tsx
//
// Engine-backed drill for the C1 lesson `indefinite-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/indefiniteAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INDEFINITE_ADJECTIVES_DRILL_DATA,
  INDEFINITE_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/c1/indefiniteAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1IndefiniteAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1indefiniteadjectives"
      title="Nov or Novi? Indefinite and Definite Adjectives"
      subtitle="Practise what the lesson taught"
      modeLabels={INDEFINITE_ADJECTIVES_MODE_LABELS}
      data={INDEFINITE_ADJECTIVES_DRILL_DATA}
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
