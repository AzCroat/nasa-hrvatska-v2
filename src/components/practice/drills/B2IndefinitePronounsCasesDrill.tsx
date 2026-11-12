// src/components/practice/drills/B2IndefinitePronounsCasesDrill.tsx
//
// Engine-backed drill for the B2 lesson `indefinite-pronouns-cases` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/indefinitePronounsCasesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INDEFINITE_PRONOUNS_CASES_DRILL_DATA,
  INDEFINITE_PRONOUNS_CASES_MODE_LABELS,
} from '../../../data/drills/b2/indefinitePronounsCasesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2IndefinitePronounsCasesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2indefinitepronounscases"
      title="Nekoga, ničega, ni s kim"
      subtitle="Practise what the lesson taught"
      modeLabels={INDEFINITE_PRONOUNS_CASES_MODE_LABELS}
      data={INDEFINITE_PRONOUNS_CASES_DRILL_DATA}
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
