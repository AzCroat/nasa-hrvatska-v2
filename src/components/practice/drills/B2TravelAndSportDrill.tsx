// src/components/practice/drills/B2TravelAndSportDrill.tsx
//
// Engine-backed drill for the B2 lesson `travel-and-sport` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/travelAndSportDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TRAVEL_AND_SPORT_DRILL_DATA,
  TRAVEL_AND_SPORT_MODE_LABELS,
} from '../../../data/drills/b2/travelAndSportDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2TravelAndSportDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2travelandsport"
      title="Hej, Haj, Uživaj! Free Time, Sport and Travel"
      subtitle="Practise what the lesson taught"
      modeLabels={TRAVEL_AND_SPORT_MODE_LABELS}
      data={TRAVEL_AND_SPORT_DRILL_DATA}
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
