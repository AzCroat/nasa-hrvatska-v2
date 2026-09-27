import React from 'react';
import ModeDrill from './ModeDrill';

// C1 — register: recognising the standard/formal equivalent of a colloquial or
// slang word. Controlling register is a C1 competence.
const DATA = [
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'skužiti':",
    opts: ['shvatiti', 'čuti', 'gledati', 'pisati'],
    answer: 'shvatiti',
    en: 'to understand',
    tip: "'skužiti'/'kužiti' (colloq.) → 'shvatiti' (standard).",
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'lova':",
    opts: ['novac', 'hrana', 'kuća', 'posao'],
    answer: 'novac',
    en: 'money',
    tip: "'lova' (slang) → 'novac' (standard).",
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'frend':",
    opts: ['prijatelj', 'susjed', 'rođak', 'kolega'],
    answer: 'prijatelj',
    en: 'friend',
    tip: "'frend' (anglicism/slang) → 'prijatelj' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of dialectal 'kaj':",
    opts: ['što', 'tko', 'kako', 'gdje'],
    answer: 'što',
    en: 'what',
    tip: "'kaj' (kajkavian) → 'što' (standard).",
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'murja':",
    opts: ['policija', 'vojska', 'bolnica', 'škola'],
    answer: 'policija',
    en: 'police',
    tip: "'murja' (slang) → 'policija' (standard).",
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of colloquial 'faks':",
    opts: ['fakultet', 'razred', 'ured', 'tečaj'],
    answer: 'fakultet',
    en: 'university (faculty)',
    tip: "'faks' (colloq.) → 'fakultet' (standard).",
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'šljaka':",
    opts: ['posao', 'odmor', 'igra', 'put'],
    answer: 'posao',
    en: 'work / job',
    tip: "'šljaka' (slang) → 'posao' (standard).",
  },
  {
    mode: 'formalno',
    q: "More formal equivalent of 'super':",
    opts: ['izvrsno', 'dobro', 'onako', 'možda'],
    answer: 'izvrsno',
    en: 'excellent',
    tip: "'super' (colloq.) → 'izvrsno' / 'odlično' (formal).",
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'cuga':",
    opts: ['piće', 'jelo', 'pjesma', 'šala'],
    answer: 'piće',
    en: 'drink',
    tip: "'cuga' (slang) → 'piće' (standard).",
  },
  {
    mode: 'formalno',
    q: "Formal request form of 'Daj mi to.':",
    opts: ['Možete li mi to dati?', 'Daj to amo.', 'Daj mi to brzo.', 'Hajde, daj.'],
    answer: 'Možete li mi to dati?',
    en: 'Could you give me that? (formal/polite)',
    tip: 'Formal register uses the polite Vi-form and a question, not a bare imperative.',
  },
  {
    mode: 'sleng',
    q: "Standard equivalent of slang 'klopa':",
    opts: ['hrana', 'piće', 'novac', 'škola'],
    answer: 'hrana',
    en: 'food',
    tip: "'klopa' (slang) → 'hrana' (standard).",
  },
  {
    mode: 'formalno',
    q: "Greeting an official when you walk into an office in the morning, instead of 'Bog!':",
    opts: ['Dobro jutro.', 'Bog!', 'Ćao!', 'Hej!'],
    answer: 'Dobro jutro.',
    en: 'Good morning.',
    tip: "'Bog' and 'ćao' are for friends; strangers and officials get 'Dobro jutro', 'Dobar dan', 'Dobra večer'.",
  },
  {
    mode: 'formalno',
    q: "Formal equivalent of 'Hvala ti.':",
    opts: ['Hvala Vam.', 'Hvala ti puno.', 'Fala.', 'Hvala, stari.'],
    answer: 'Hvala Vam.',
    en: 'Thank you. (formal)',
    tip: "Formal address switches ti → Vi, and 'Vam' is capitalised in writing.",
  },
  {
    mode: 'formalno',
    q: "Formal equivalent of 'Kako si?':",
    opts: ['Kako ste?', 'Kako si ti?', 'Kako ide?', 'Što ima?'],
    answer: 'Kako ste?',
    en: 'How are you? (formal)',
    tip: 'The Vi-form uses the 2nd person plural, even to one person: Kako ste?',
  },
  {
    mode: 'formalno',
    q: "The opening of a formal email, instead of 'Bog,':",
    opts: ['Poštovani,', 'Bog,', 'Hej,', 'Dragi prijatelju,'],
    answer: 'Poštovani,',
    en: 'Dear Sir or Madam, (formal opening)',
    tip: "'Poštovani' (or 'Poštovana gospođo …') opens a formal letter; 'Bog' belongs to messages between friends.",
  },
  {
    mode: 'formalno',
    q: "Formal equivalent of 'Čekaj malo.':",
    opts: ['Pričekajte trenutak, molim Vas.', 'Čekaj malo.', 'Stani!', 'Daj, čekaj.'],
    answer: 'Pričekajte trenutak, molim Vas.',
    en: 'Please wait a moment. (formal)',
    tip: "Formal register uses the Vi-imperative (pričekajte) and 'molim Vas'.",
  },
  {
    mode: 'formalno',
    q: "Telling a customer 'Nemam pojma.' politely:",
    opts: ['Nažalost, ne znam.', 'Nemam pojma.', 'Pojma nemam, stari.', 'Ma tko zna.'],
    answer: 'Nažalost, ne znam.',
    en: "I'm afraid I don't know.",
    tip: "'Nemam pojma' is informal; at work soften it — 'Nažalost, ne znam' — and offer to find out.",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of kajkavian 'zakaj':",
    opts: ['zašto', 'kako', 'kada', 'gdje'],
    answer: 'zašto',
    en: 'why',
    tip: "'zakaj' (kajkavian) → 'zašto' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of kajkavian 'hiža':",
    opts: ['kuća', 'soba', 'ulica', 'crkva'],
    answer: 'kuća',
    en: 'house',
    tip: "'hiža' (kajkavian) → 'kuća' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of Dalmatian 'pomidor':",
    opts: ['rajčica', 'krumpir', 'jabuka', 'luk'],
    answer: 'rajčica',
    en: 'tomato',
    tip: "'pomidor' (Dalmatian, from Italian) → 'rajčica' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of Dalmatian 'kušin':",
    opts: ['jastuk', 'pokrivač', 'stolica', 'ormar'],
    answer: 'jastuk',
    en: 'pillow',
    tip: "'kušin' (Dalmatian, from Italian 'cuscino') → 'jastuk' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of Dalmatian 'bićikleta':",
    opts: ['bicikl', 'automobil', 'motor', 'čamac'],
    answer: 'bicikl',
    en: 'bicycle',
    tip: "'bićikleta' (Dalmatian and Istrian) → 'bicikl' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of Dalmatian 'teća':",
    opts: ['lonac', 'tanjur', 'čaša', 'nož'],
    answer: 'lonac',
    en: 'cooking pot',
    tip: "'teća' (Dalmatian) → 'lonac' (standard).",
  },
  {
    mode: 'dijalekt',
    q: "Standard equivalent of Dalmatian 'fureštar':",
    opts: ['stranac', 'susjed', 'ribar', 'turist'],
    answer: 'stranac',
    en: 'outsider, stranger',
    tip: "'fureštar' (Dalmatian, from Italian 'forestiero') → 'stranac' (standard).",
  },
];

// Three question types, 8 each (expanded 2026-09-27 from a single 10-item list), so
// the run is 4 of each — the same shape as every other engine drill.
const MODE_LABEL: Record<string, string> = {
  sleng: '🗣️ Sleng → standard',
  formalno: '🎩 Formalni izraz',
  dijalekt: '🗺️ Dijalekt → standard',
};

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RegisterDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="register"
      title={'🎩 Register'}
      subtitle={'Standard/formal vs colloquial'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Perfect! Register mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — register takes time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
