// src/components/practice/drills/B2PoliticsSocietyDrill.tsx
//
// Engine-backed drill for the B2 lesson `politics-society`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/politicsSocietyDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POLITICS_SOCIETY_DRILL_DATA,
  POLITICS_SOCIETY_MODE_LABELS,
} from '../../../data/drills/b2/politicsSocietyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2PoliticsSocietyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2politicssociety"
      title={'🏛️ Politika i društvo'}
      subtitle="Practice what the lesson taught"
      modeLabels={POLITICS_SOCIETY_MODE_LABELS}
      data={POLITICS_SOCIETY_DRILL_DATA}
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
