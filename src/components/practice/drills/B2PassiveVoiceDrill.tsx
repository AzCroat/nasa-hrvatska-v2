// src/components/practice/drills/B2PassiveVoiceDrill.tsx
//
// Engine-backed drill for the B2 lesson `passive-voice`, built from Razgovarajte s nama B2 and the B2-C1
// grammar book. The content is in ../../../data/drills/b2/passiveVoiceDrill. Lazy-loaded so the bank stays
// off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PASSIVE_VOICE_DRILL_DATA,
  PASSIVE_VOICE_MODE_LABELS,
} from '../../../data/drills/b2/passiveVoiceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2PassiveVoiceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2passivevoice"
      title={'🔄 Pasiv'}
      subtitle="Practice what the lesson taught"
      modeLabels={PASSIVE_VOICE_MODE_LABELS}
      data={PASSIVE_VOICE_DRILL_DATA}
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
