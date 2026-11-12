// src/components/practice/drills/A2RelationalAdjectivesDrill.tsx
//
// Engine-backed drill for the A2 lesson `relational-adjectives` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/relationalAdjectivesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  RELATIONAL_ADJECTIVES_DRILL_DATA,
  RELATIONAL_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/a2/relationalAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2RelationalAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2relationaladjectives"
      title="Zagrebački, Splitski, Riječki"
      subtitle="Practise what the lesson taught"
      modeLabels={RELATIONAL_ADJECTIVES_MODE_LABELS}
      data={RELATIONAL_ADJECTIVES_DRILL_DATA}
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
