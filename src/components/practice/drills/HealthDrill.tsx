// src/components/practice/drills/HealthDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/healthDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { HEALTH_DRILL_DATA, HEALTH_MODE_LABELS } from '../../../data/drills/healthDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function HealthDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zdravlje"
      title="🤒 Tijelo i zdravlje"
      subtitle="boli me glava, bole me leđa — the pain does the hurting"
      modeLabels={HEALTH_MODE_LABELS}
      data={HEALTH_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — zdravi ste! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Zdravlje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
