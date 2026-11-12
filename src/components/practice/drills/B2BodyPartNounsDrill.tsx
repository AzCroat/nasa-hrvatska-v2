// src/components/practice/drills/B2BodyPartNounsDrill.tsx
//
// Engine-backed drill for the B2 lesson `body-part-nouns` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/bodyPartNounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  BODY_PART_NOUNS_DRILL_DATA,
  BODY_PART_NOUNS_MODE_LABELS,
} from '../../../data/drills/b2/bodyPartNounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2BodyPartNounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2bodypartnouns"
      title="Oči, uši, ruke, noge"
      subtitle="Practise what the lesson taught"
      modeLabels={BODY_PART_NOUNS_MODE_LABELS}
      data={BODY_PART_NOUNS_DRILL_DATA}
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
