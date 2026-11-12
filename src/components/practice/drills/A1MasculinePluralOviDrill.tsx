// src/components/practice/drills/A1MasculinePluralOviDrill.tsx
//
// Engine-backed drill for the A1 lesson `masculine-plural-ovi` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/masculinePluralOviDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  MASCULINE_PLURAL_OVI_DRILL_DATA,
  MASCULINE_PLURAL_OVI_MODE_LABELS,
} from '../../../data/drills/a1/masculinePluralOviDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1MasculinePluralOviDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1masculinepluralovi"
      title="Short Nouns, Long Plurals"
      subtitle="Practise what the lesson taught"
      modeLabels={MASCULINE_PLURAL_OVI_MODE_LABELS}
      data={MASCULINE_PLURAL_OVI_DRILL_DATA}
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
