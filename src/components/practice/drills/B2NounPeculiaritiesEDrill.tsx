// src/components/practice/drills/B2NounPeculiaritiesEDrill.tsx
//
// Engine-backed drill for the B2 lesson `noun-peculiarities-e` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/nounPeculiaritiesEDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NOUN_PECULIARITIES_E_DRILL_DATA,
  NOUN_PECULIARITIES_E_MODE_LABELS,
} from '../../../data/drills/b2/nounPeculiaritiesEDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2NounPeculiaritiesEDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2nounpeculiaritiese"
      title="Sestara, Majci, Učiteljice"
      subtitle="Practise what the lesson taught"
      modeLabels={NOUN_PECULIARITIES_E_MODE_LABELS}
      data={NOUN_PECULIARITIES_E_DRILL_DATA}
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
