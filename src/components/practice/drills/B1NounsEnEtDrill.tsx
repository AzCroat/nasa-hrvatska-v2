// src/components/practice/drills/B1NounsEnEtDrill.tsx
//
// Engine-backed drill for the B1 lesson `nouns-en-et` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b1/nounsEnEtDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NOUNS_EN_ET_DRILL_DATA,
  NOUNS_EN_ET_MODE_LABELS,
} from '../../../data/drills/b1/nounsEnEtDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1NounsEnEtDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1nounsenet"
      title="Ime, imena; dijete, djeteta — Neuter Nouns That Grow"
      subtitle="Practise what the lesson taught"
      modeLabels={NOUNS_EN_ET_MODE_LABELS}
      data={NOUNS_EN_ET_DRILL_DATA}
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
