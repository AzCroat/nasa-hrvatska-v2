// src/components/practice/drills/B2LiteracyAndLanguageDrill.tsx
//
// Engine-backed drill for the B2 lesson `literacy-and-language` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/literacyAndLanguageDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LITERACY_AND_LANGUAGE_DRILL_DATA,
  LITERACY_AND_LANGUAGE_MODE_LABELS,
} from '../../../data/drills/b2/literacyAndLanguageDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2LiteracyAndLanguageDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2literacyandlanguage"
      title="Pismenost"
      subtitle="Practise what the lesson taught"
      modeLabels={LITERACY_AND_LANGUAGE_MODE_LABELS}
      data={LITERACY_AND_LANGUAGE_DRILL_DATA}
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
