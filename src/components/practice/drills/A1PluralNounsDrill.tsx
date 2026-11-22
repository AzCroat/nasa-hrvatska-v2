// src/components/practice/drills/A1PluralNounsDrill.tsx
//
// Engine-backed drill for the A1 lesson `plural-nouns`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/pluralNounsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PLURAL_NOUNS_DRILL_DATA,
  PLURAL_NOUNS_MODE_LABELS,
} from '../../../data/drills/a1/pluralNounsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PluralNounsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1pluralnouns"
      title={'Plural of Nouns'}
      subtitle="Practice what the lesson taught"
      modeLabels={PLURAL_NOUNS_MODE_LABELS}
      data={PLURAL_NOUNS_DRILL_DATA}
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
