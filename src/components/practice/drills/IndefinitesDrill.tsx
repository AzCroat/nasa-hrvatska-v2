// src/components/practice/drills/IndefinitesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/indefinitesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  INDEFINITES_DRILL_DATA,
  INDEFINITES_MODE_LABELS,
} from '../../../data/drills/indefinitesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function IndefinitesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="neodredjenea2"
      title="🔲 Netko, nitko, svatko"
      subtitle="Tri prefiksa i jedno pravilo o negaciji"
      modeLabels={INDEFINITES_MODE_LABELS}
      data={INDEFINITES_DRILL_DATA}
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
