// src/components/practice/drills/PlacePrepositionsDrill.tsx
//
// Engine-backed drill: the content is in
// ../../../data/drills/placePrepositionsDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLACE_PREPOSITIONS_DRILL_DATA,
  PLACE_PREPOSITIONS_MODE_LABELS,
} from '../../../data/drills/placePrepositionsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PlacePrepositionsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="mjesto"
      title="📍 Prijedlozi mjesta"
      subtitle="u gradu or u grad — where you are vs where you are going"
      modeLabels={PLACE_PREPOSITIONS_MODE_LABELS}
      data={PLACE_PREPOSITIONS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — prijedlozi su vaši! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Prijedlozi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
