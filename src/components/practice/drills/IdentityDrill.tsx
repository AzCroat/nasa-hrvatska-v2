// src/components/practice/drills/IdentityDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/identityDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { IDENTITY_DRILL_DATA, IDENTITY_MODE_LABELS } from '../../../data/drills/identityDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function IdentityDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="identitet"
      title="🇭🇷 Jezični identitet"
      subtitle="zrakoplov, sveučilište, glagoljica — što gradi hrvatski tekst"
      modeLabels={IDENTITY_MODE_LABELS}
      data={IDENTITY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve na svom mjestu! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Jezični identitet traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
