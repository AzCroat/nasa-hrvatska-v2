// src/components/practice/drills/A1CountriesLanguagesDrill.tsx
//
// Engine-backed drill for the A1 lesson `countries-languages`, built from Hrvatski za početnike 1.
// The content is in ../../../data/drills/a1/countriesLanguagesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COUNTRIES_LANGUAGES_DRILL_DATA,
  COUNTRIES_LANGUAGES_MODE_LABELS,
} from '../../../data/drills/a1/countriesLanguagesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1CountriesLanguagesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1countrieslanguages"
      title={'\ud83c\udf0d Zemlje i jezici'}
      subtitle="Practice what the lesson taught"
      modeLabels={COUNTRIES_LANGUAGES_MODE_LABELS}
      data={COUNTRIES_LANGUAGES_DRILL_DATA}
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
