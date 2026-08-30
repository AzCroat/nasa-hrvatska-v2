// src/components/practice/drills/WeatherDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/weatherDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { WEATHER_DRILL_DATA, WEATHER_MODE_LABELS } from '../../../data/drills/weatherDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function WeatherDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="meteo"
      title="🌦️ Vrijeme i godišnja doba"
      subtitle="hladno je, pada kiša, ljeti — the sentence with no subject"
      modeLabels={WEATHER_MODE_LABELS}
      data={WEATHER_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — vrijeme je vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Vrijeme traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
