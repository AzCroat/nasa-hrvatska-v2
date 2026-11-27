// src/components/practice/drills/B2ParticipialAdjectivesDrill.tsx
//
// Engine-backed drill for the B2 lesson `participial-adjectives`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/participialAdjectivesDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PARTICIPIAL_ADJECTIVES_DRILL_DATA,
  PARTICIPIAL_ADJECTIVES_MODE_LABELS,
} from '../../../data/drills/b2/participialAdjectivesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ParticipialAdjectivesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2participialadjectives"
      title={'🧩 Glagolski pridjev trpni'}
      subtitle="Practice what the lesson taught"
      modeLabels={PARTICIPIAL_ADJECTIVES_MODE_LABELS}
      data={PARTICIPIAL_ADJECTIVES_DRILL_DATA}
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
