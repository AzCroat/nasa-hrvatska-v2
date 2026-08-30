// src/components/practice/drills/TechnologyDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/technologyDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TECHNOLOGY_DRILL_DATA,
  TECHNOLOGY_MODE_LABELS,
} from '../../../data/drills/technologyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TechnologyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="tehnologija"
      title="💻 Tehnologija"
      subtitle="računalo ili kompjuter — dva sloja, dva mjesta"
      modeLabels={TECHNOLOGY_MODE_LABELS}
      data={TECHNOLOGY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — spojeni ste! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Tehnologija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
