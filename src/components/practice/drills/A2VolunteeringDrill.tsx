// src/components/practice/drills/A2VolunteeringDrill.tsx
//
// Engine-backed drill for the A2 lesson `volunteering` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/volunteeringDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  VOLUNTEERING_DRILL_DATA,
  VOLUNTEERING_MODE_LABELS,
} from '../../../data/drills/a2/volunteeringDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2VolunteeringDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2volunteering"
      title="Helping Out: Volunteering"
      subtitle="Practise what the lesson taught"
      modeLabels={VOLUNTEERING_MODE_LABELS}
      data={VOLUNTEERING_DRILL_DATA}
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
