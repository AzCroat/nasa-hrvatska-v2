// src/components/practice/drills/B1CharacterTraitsDrill.tsx
//
// Engine-backed drill for the B1 lesson `character-traits` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/characterTraitsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CHARACTER_TRAITS_DRILL_DATA,
  CHARACTER_TRAITS_MODE_LABELS,
} from '../../../data/drills/b1/characterTraitsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1CharacterTraitsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1charactertraits"
      title="What Kind of Person?"
      subtitle="Practise what the lesson taught"
      modeLabels={CHARACTER_TRAITS_MODE_LABELS}
      data={CHARACTER_TRAITS_DRILL_DATA}
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
