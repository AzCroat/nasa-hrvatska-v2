// src/components/practice/drills/B2ClimateEnvironmentDrill.tsx
//
// Engine-backed drill for the B2 lesson `climate-environment` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/climateEnvironmentDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CLIMATE_ENVIRONMENT_DRILL_DATA,
  CLIMATE_ENVIRONMENT_MODE_LABELS,
} from '../../../data/drills/b2/climateEnvironmentDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ClimateEnvironmentDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2climateenvironment"
      title="Klima i okoliš: Fires, Floods and Waste"
      subtitle="Practise what the lesson taught"
      modeLabels={CLIMATE_ENVIRONMENT_MODE_LABELS}
      data={CLIMATE_ENVIRONMENT_DRILL_DATA}
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
