// src/components/practice/drills/C1IrregularNounsDobaDioDrill.tsx
//
// Engine-backed drill for the C1 lesson `irregular-nouns-doba-dio` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/irregularNounsDobaDioDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  IRREGULAR_NOUNS_DOBA_DIO_DRILL_DATA,
  IRREGULAR_NOUNS_DOBA_DIO_MODE_LABELS,
} from '../../../data/drills/c1/irregularNounsDobaDioDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1IrregularNounsDobaDioDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1irregularnounsdobadio"
      title="Posao, Posla — Dio, Dijela"
      subtitle="Practise what the lesson taught"
      modeLabels={IRREGULAR_NOUNS_DOBA_DIO_MODE_LABELS}
      data={IRREGULAR_NOUNS_DOBA_DIO_DRILL_DATA}
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
