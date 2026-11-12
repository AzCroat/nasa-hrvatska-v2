// src/components/practice/drills/A1PostcardsWishesDrill.tsx
//
// Engine-backed drill for the A1 lesson `postcards-wishes` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/postcardsWishesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POSTCARDS_WISHES_DRILL_DATA,
  POSTCARDS_WISHES_MODE_LABELS,
} from '../../../data/drills/a1/postcardsWishesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PostcardsWishesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1postcardswishes"
      title="Postcards and Good Wishes"
      subtitle="Practise what the lesson taught"
      modeLabels={POSTCARDS_WISHES_MODE_LABELS}
      data={POSTCARDS_WISHES_DRILL_DATA}
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
