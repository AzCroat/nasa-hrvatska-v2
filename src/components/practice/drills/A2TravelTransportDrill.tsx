// src/components/practice/drills/A2TravelTransportDrill.tsx
//
// Engine-backed drill for the A2 lesson `travel-transport`, built from Razgovarajte s nama A2-B1.
// The content is in ../../../data/drills/a2/travelTransportDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TRAVEL_TRANSPORT_DRILL_DATA,
  TRAVEL_TRANSPORT_MODE_LABELS,
} from '../../../data/drills/a2/travelTransportDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2TravelTransportDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2traveltransport"
      title={'Travel and Transport'}
      subtitle="Practice what the lesson taught"
      modeLabels={TRAVEL_TRANSPORT_MODE_LABELS}
      data={TRAVEL_TRANSPORT_DRILL_DATA}
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
