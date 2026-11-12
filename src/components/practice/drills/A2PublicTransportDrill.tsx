// src/components/practice/drills/A2PublicTransportDrill.tsx
//
// Engine-backed drill for the A2 lesson `public-transport` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/publicTransportDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PUBLIC_TRANSPORT_DRILL_DATA,
  PUBLIC_TRANSPORT_MODE_LABELS,
} from '../../../data/drills/a2/publicTransportDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2PublicTransportDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2publictransport"
      title="Where Do I Get Off? Trams, Buses and Trains"
      subtitle="Practise what the lesson taught"
      modeLabels={PUBLIC_TRANSPORT_MODE_LABELS}
      data={PUBLIC_TRANSPORT_DRILL_DATA}
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
