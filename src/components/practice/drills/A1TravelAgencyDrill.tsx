// src/components/practice/drills/A1TravelAgencyDrill.tsx
//
// Engine-backed drill for the A1 lesson `travel-agency` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/travelAgencyDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TRAVEL_AGENCY_DRILL_DATA,
  TRAVEL_AGENCY_MODE_LABELS,
} from '../../../data/drills/a1/travelAgencyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1TravelAgencyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1travelagency"
      title="At the Travel Agency"
      subtitle="Practise what the lesson taught"
      modeLabels={TRAVEL_AGENCY_MODE_LABELS}
      data={TRAVEL_AGENCY_DRILL_DATA}
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
