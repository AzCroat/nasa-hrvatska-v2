// src/components/practice/drills/A1WeatherSeasonsDrill.tsx
//
// Engine-backed drill for the A1 lesson `weather-seasons`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/weatherSeasonsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  WEATHER_SEASONS_DRILL_DATA,
  WEATHER_SEASONS_MODE_LABELS,
} from '../../../data/drills/a1/weatherSeasonsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1WeatherSeasonsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1weatherseasons"
      title={'Weather and Seasons'}
      subtitle="Practice what the lesson taught"
      modeLabels={WEATHER_SEASONS_MODE_LABELS}
      data={WEATHER_SEASONS_DRILL_DATA}
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
