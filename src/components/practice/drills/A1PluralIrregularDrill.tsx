// src/components/practice/drills/A1PluralIrregularDrill.tsx
//
// Engine-backed drill for the A1 lesson `plural-irregular` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/pluralIrregularDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLURAL_IRREGULAR_DRILL_DATA,
  PLURAL_IRREGULAR_MODE_LABELS,
} from '../../../data/drills/a1/pluralIrregularDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PluralIrregularDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pluralirregular"
      title="People, Children, Brothers: The Irregular Plurals"
      subtitle="Practise what the lesson taught"
      modeLabels={PLURAL_IRREGULAR_MODE_LABELS}
      data={PLURAL_IRREGULAR_DRILL_DATA}
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
