// src/components/practice/drills/B1ForeignNounsDeclensionDrill.tsx
//
// Engine-backed drill for the B1 lesson `foreign-nouns-declension` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/foreignNounsDeclensionDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FOREIGN_NOUNS_DECLENSION_DRILL_DATA,
  FOREIGN_NOUNS_DECLENSION_MODE_LABELS,
} from '../../../data/drills/b1/foreignNounsDeclensionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1ForeignNounsDeclensionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1foreignnounsdeclension"
      title="Foreign Names and Words in the Cases"
      subtitle="Practise what the lesson taught"
      modeLabels={FOREIGN_NOUNS_DECLENSION_MODE_LABELS}
      data={FOREIGN_NOUNS_DECLENSION_DRILL_DATA}
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
