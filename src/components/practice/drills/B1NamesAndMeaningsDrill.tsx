// src/components/practice/drills/B1NamesAndMeaningsDrill.tsx
//
// Engine-backed drill for the B1 lesson `names-and-meanings` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/namesAndMeaningsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NAMES_AND_MEANINGS_DRILL_DATA,
  NAMES_AND_MEANINGS_MODE_LABELS,
} from '../../../data/drills/b1/namesAndMeaningsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1NamesAndMeaningsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1namesandmeanings"
      title="Names and What They Mean"
      subtitle="Practise what the lesson taught"
      modeLabels={NAMES_AND_MEANINGS_MODE_LABELS}
      data={NAMES_AND_MEANINGS_DRILL_DATA}
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
