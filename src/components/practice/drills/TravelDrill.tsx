// src/components/practice/drills/TravelDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/travelDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { TRAVEL_DRILL_DATA, TRAVEL_MODE_LABELS } from '../../../data/drills/travelDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TravelDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="putovanje"
      title="🧳 Putovanje"
      subtitle="idem vlakom, vlak za Split, autobus iz Rijeke"
      modeLabels={TRAVEL_MODE_LABELS}
      data={TRAVEL_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sretan put! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Putovanje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
