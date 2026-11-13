// src/components/practice/drills/C1CollectiveNounsDrill.tsx
//
// Engine-backed drill for the C1 lesson `collective-nouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/collectiveNounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COLLECTIVE_NOUNS_DRILL_DATA,
  COLLECTIVE_NOUNS_MODE_LABELS,
} from '../../../data/drills/c1/collectiveNounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CollectiveNounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1collectivenouns"
      title="Leaves, Brothers, Calves"
      subtitle="Practise what the lesson taught"
      modeLabels={COLLECTIVE_NOUNS_MODE_LABELS}
      data={COLLECTIVE_NOUNS_DRILL_DATA}
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
