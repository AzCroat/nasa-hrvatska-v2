// src/components/practice/drills/B2HealthPreventionDrill.tsx
//
// Engine-backed drill for the B2 lesson `health-prevention` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/healthPreventionDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  HEALTH_PREVENTION_DRILL_DATA,
  HEALTH_PREVENTION_MODE_LABELS,
} from '../../../data/drills/b2/healthPreventionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2HealthPreventionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2healthprevention"
      title="Zdrav kao dren"
      subtitle="Practise what the lesson taught"
      modeLabels={HEALTH_PREVENTION_MODE_LABELS}
      data={HEALTH_PREVENTION_DRILL_DATA}
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
