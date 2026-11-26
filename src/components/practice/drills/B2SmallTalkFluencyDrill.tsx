// src/components/practice/drills/B2SmallTalkFluencyDrill.tsx
//
// Engine-backed drill for the B2 lesson `small-talk-fluency`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/smallTalkFluencyDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SMALL_TALK_FLUENCY_DRILL_DATA,
  SMALL_TALK_FLUENCY_MODE_LABELS,
} from '../../../data/drills/b2/smallTalkFluencyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2SmallTalkFluencyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2smalltalkfluency"
      title={'💬 Tečnost u razgovoru'}
      subtitle="Practice what the lesson taught"
      modeLabels={SMALL_TALK_FLUENCY_MODE_LABELS}
      data={SMALL_TALK_FLUENCY_DRILL_DATA}
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
