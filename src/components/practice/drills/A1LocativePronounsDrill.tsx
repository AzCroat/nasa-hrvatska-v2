// src/components/practice/drills/A1LocativePronounsDrill.tsx
//
// Engine-backed drill for the A1 lesson `locative-pronouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/locativePronounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  LOCATIVE_PRONOUNS_DRILL_DATA,
  LOCATIVE_PRONOUNS_MODE_LABELS,
} from '../../../data/drills/a1/locativePronounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1LocativePronounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1locativepronouns"
      title="About Me, About You"
      subtitle="Practise what the lesson taught"
      modeLabels={LOCATIVE_PRONOUNS_MODE_LABELS}
      data={LOCATIVE_PRONOUNS_DRILL_DATA}
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
