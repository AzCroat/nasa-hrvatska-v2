// src/components/practice/drills/B2RelativePronounsCasesDrill.tsx
//
// Engine-backed drill for the B2 lesson `relative-pronouns-cases` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/relativePronounsCasesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  RELATIVE_PRONOUNS_CASES_DRILL_DATA,
  RELATIVE_PRONOUNS_CASES_MODE_LABELS,
} from '../../../data/drills/b2/relativePronounsCasesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2RelativePronounsCasesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2relativepronounscases"
      title="Koji, Kojeg, Kojem, Kojim"
      subtitle="Practise what the lesson taught"
      modeLabels={RELATIVE_PRONOUNS_CASES_MODE_LABELS}
      data={RELATIVE_PRONOUNS_CASES_DRILL_DATA}
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
