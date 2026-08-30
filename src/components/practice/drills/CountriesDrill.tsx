// src/components/practice/drills/CountriesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/countriesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { COUNTRIES_DRILL_DATA, COUNTRIES_MODE_LABELS } from '../../../data/drills/countriesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function CountriesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zemlje"
      title="🌍 Zemlje i jezici"
      subtitle="Hrvatska, Hrvat, hrvatski — three words, one capital letter"
      modeLabels={COUNTRIES_MODE_LABELS}
      data={COUNTRIES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — zemlje su vaše! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Zemlje i jezici traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
