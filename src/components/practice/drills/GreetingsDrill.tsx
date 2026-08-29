// src/components/practice/drills/GreetingsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/greetingsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { GREETINGS_DRILL_DATA, GREETINGS_MODE_LABELS } from '../../../data/drills/greetingsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GreetingsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pozdravi"
      title="👋 Pozdravi"
      subtitle="dobro jutro, kako ste, doviđenja — greeting the right way"
      modeLabels={GREETINGS_MODE_LABELS}
      data={GREETINGS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — pozdravi su vaši! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Pozdravi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
