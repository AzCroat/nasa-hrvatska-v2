// src/components/practice/drills/A1InstrumentalPronounsDrill.tsx
//
// Engine-backed drill for the A1 lesson `instrumental-pronouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/instrumentalPronounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INSTRUMENTAL_PRONOUNS_DRILL_DATA,
  INSTRUMENTAL_PRONOUNS_MODE_LABELS,
} from '../../../data/drills/a1/instrumentalPronounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1InstrumentalPronounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1instrumentalpronouns"
      title="With Me, With You"
      subtitle="Practise what the lesson taught"
      modeLabels={INSTRUMENTAL_PRONOUNS_MODE_LABELS}
      data={INSTRUMENTAL_PRONOUNS_DRILL_DATA}
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
