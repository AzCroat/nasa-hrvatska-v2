// src/components/practice/drills/B2ConsumerismAdvertisingDrill.tsx
//
// Engine-backed drill for the B2 lesson `consumerism-advertising` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/consumerismAdvertisingDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CONSUMERISM_ADVERTISING_DRILL_DATA,
  CONSUMERISM_ADVERTISING_MODE_LABELS,
} from '../../../data/drills/b2/consumerismAdvertisingDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ConsumerismAdvertisingDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2consumerismadvertising"
      title="Buy, Buy, Buy: Consumers and Adverts"
      subtitle="Practise what the lesson taught"
      modeLabels={CONSUMERISM_ADVERTISING_MODE_LABELS}
      data={CONSUMERISM_ADVERTISING_DRILL_DATA}
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
