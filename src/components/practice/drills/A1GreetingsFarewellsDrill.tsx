// src/components/practice/drills/A1GreetingsFarewellsDrill.tsx
//
// Engine-backed drill for the A1 lesson `greetings-farewells`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/greetingsFarewellsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  GREETINGS_FAREWELLS_DRILL_DATA,
  GREETINGS_FAREWELLS_MODE_LABELS,
} from '../../../data/drills/a1/greetingsFarewellsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1GreetingsFarewellsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1greetingsfarewells"
      title={'\ud83d\udc4b Pozdravi'}
      subtitle="Practice what the lesson taught"
      modeLabels={GREETINGS_FAREWELLS_MODE_LABELS}
      data={GREETINGS_FAREWELLS_DRILL_DATA}
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
