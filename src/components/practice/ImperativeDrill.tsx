import React from 'react';
import ModeDrill from './ModeDrill';

const DATA = [
  {
    q: "'Speak!' (informal, govoriti)",
    opts: ['Govori!', 'Govorite!', 'Govoriti!', 'Govoriš!'],
    answer: 'Govori!',
    en: 'Speak! (to one person)',
    tip: "govoriti → stem 'govor' + i → 'govori'",
  },
  {
    q: "'Don't run!' (informal, trčati)",
    opts: ['Nemoj trčati!', 'Trčaj!', 'Trčiti moraš!', 'Trčiš se!'],
    answer: 'Nemoj trčati!',
    en: "Don't run!",
    tip: 'Negative imperative: nemoj + infinitive is the standard form',
  },
  {
    q: "'Come here!' (plural/formal, doći)",
    opts: ['Dođite ovamo!', 'Dođi ovamo!', 'Dođete ovamo!', 'Dođemo ovamo!'],
    answer: 'Dođite ovamo!',
    en: 'Come here! (to a group)',
    tip: 'doći → irregular: dođi (sg) / dođite (pl/formal)',
  },
  {
    q: "'Eat!' (informal, jesti)",
    opts: ['Jedi!', 'Jedite!', 'Jesti!', 'Jedeš!'],
    answer: 'Jedi!',
    en: 'Eat! (to one person)',
    tip: "jesti → stem 'jed' + i → 'jedi'",
  },
  {
    q: "'Write your name!' (plural, pisati)",
    opts: ['Napišite svoje ime!', 'Napiši svoje ime!', 'Pisajte svoje ime!', 'Pisajući svoje ime!'],
    answer: 'Napišite svoje ime!',
    en: 'Write your name! (to a group)',
    tip: 'pisati (perfective: napisati) → napišite for plural',
  },
  {
    q: "'Be quiet!' (informal, biti tih)",
    opts: ['Budimo tih!', 'Biti tih!', 'Budi tih!', 'Budeš tih!'],
    answer: 'Budi tih!',
    en: 'Be quiet! (to one boy or man)',
    tip: 'biti → budi (sg) / budite (pl). The adjective agrees with the person: budi tih (m), budi tiha (f)',
  },
  {
    q: "'Go home!' (informal, ići)",
    opts: ['Idi kući!', 'Idite kući!', 'Idem kući!', 'Ići kući!'],
    answer: 'Idi kući!',
    en: 'Go home! (to one person)',
    tip: 'ići → irregular: idi (sg) / idite (pl)',
  },
  {
    q: "'Listen to me!' (plural, slušati)",
    opts: ['Slušajte me!', 'Slušaj me!', 'Slušate me!', 'Slušajući me!'],
    answer: 'Slušajte me!',
    en: 'Listen to me! (to a group)',
    tip: 'slušati → slušaj (sg) / slušajte (pl)',
  },
  {
    q: "'Take this!' (informal, uzeti)",
    opts: ['Uzmi ovo!', 'Uzmite ovo!', 'Uzimi ovo!', 'Uzeo ovo!'],
    answer: 'Uzmi ovo!',
    en: 'Take this! (to one person)',
    tip: 'uzeti → irregular: uzmi (sg) / uzmite (pl)',
  },
  {
    q: "'Don't worry!' (informal, brinuti se)",
    opts: ['Nemoj se brinuti!', 'Nemoj se brineš!', 'Ne briniš se!', 'Nemoj brinuti!'],
    answer: 'Nemoj se brinuti!',
    en: "Don't worry!",
    tip: 'Negative: nemoj + infinitive (nemoj se brinuti); "ne brini se" is equally standard',
  },
  {
    q: "'Open the door!' (informal, otvoriti)",
    opts: ['Otvori vrata!', 'Otvorite vrata!', 'Otvaranje vrata!', 'Otvoriš vrata!'],
    answer: 'Otvori vrata!',
    en: 'Open the door! (to one person)',
    tip: "otvoriti (pf) → stem 'otvori' + i → 'otvori'",
  },
  {
    q: "'Wait!' (plural/formal, čekati)",
    opts: ['Čekajte!', 'Čekaj!', 'Čekate!', 'Čekajući!'],
    answer: 'Čekajte!',
    en: 'Wait! (formal/plural)',
    tip: 'čekati → čekaj (sg) / čekajte (pl)',
  },
  {
    q: "'Look at this!' (informal, pogledati)",
    opts: ['Pogledaj ovo!', 'Pogledajte ovo!', 'Gleda ovo!', 'Pogledaš ovo!'],
    answer: 'Pogledaj ovo!',
    en: 'Look at this! (to one person)',
    tip: "pogledati (pf) → stem 'pogleda' + j → 'pogledaj'",
  },
  {
    q: "'Travel safely!' (plural, putovati)",
    opts: ['Putujte sigurno!', 'Putuj sigurno!', 'Putujući sigurno!', 'Putovajte sigurno!'],
    answer: 'Putujte sigurno!',
    en: 'Travel safely! (to a group)',
    tip: 'putovati → putuj (sg) / putujte (pl)',
  },
  {
    q: "'Don't forget!' (informal, zaboraviti)",
    opts: ['Nemoj zaboraviti!', 'Nemoj zaboravi!', 'Zaboraviš ne!', 'Nemoj zaboraviš!'],
    answer: 'Nemoj zaboraviti!',
    en: "Don't forget!",
    tip: "Negative imperative with 'nemoj' + infinitive",
  },
  {
    q: "'Sit down!' (informal, sjesti)",
    opts: ['Sjedni!', 'Sjednite!', 'Sjediš!', 'Sjesti!'],
    answer: 'Sjedni!',
    en: 'Sit down! (to one person)',
    tip: 'sjesti → irregular: sjedni (sg) / sjednite (pl)',
  },
  {
    q: "'Help me!' (informal, pomoći)",
    opts: ['Pomozi mi!', 'Pomozite mi!', 'Pomažeš mi!', 'Pomoći mi!'],
    answer: 'Pomozi mi!',
    en: 'Help me! (to one person)',
    tip: 'pomoći → irregular: pomozi (sg) / pomozite (pl)',
  },
  {
    q: "'Please be careful!' (plural, biti pažljiv)",
    opts: ['Budite pažljivi!', 'Budi pažljiv!', 'Budite pažljiv!', 'Pažljivi!'],
    answer: 'Budite pažljivi!',
    en: 'Please be careful! (to a group)',
    tip: 'biti → budite (pl formal). Adjective agrees: pažljivi (pl)',
  },
  {
    q: "'Call me!' (informal, nazvati)",
    opts: ['Nazovi me!', 'Nazvite me!', 'Nazovite me!', 'Nazovim me!'],
    answer: 'Nazovi me!',
    en: 'Call me! (to one person)',
    tip: 'nazvati (pf) → nazovi (sg) / nazovite (pl)',
  },
  {
    q: "'Hurry up!' (informal, požuriti)",
    opts: ['Požuri!', 'Požurite!', 'Požuriš!', 'Požuruj!'],
    answer: 'Požuri!',
    en: 'Hurry up! (to one person)',
    tip: "požuriti → stem 'požuri' + i → 'požuri'",
  },
  {
    q: "'Learn Croatian!' (informal, učiti)",
    opts: ['Uči hrvatski!', 'Učite hrvatski!', 'Učiš hrvatski!', 'Učenje hrvatskog!'],
    answer: 'Uči hrvatski!',
    en: 'Learn Croatian! (to one person)',
    tip: "učiti → stem 'uč' + i → 'uči'",
  },
  {
    q: "'Don't be late!' (formal/plural, kasniti)",
    opts: ['Nemojte kasniti!', 'Nemoj kasniti!', 'Nemojte kasnite!', 'Ne kasni!'],
    answer: 'Nemojte kasniti!',
    en: "Don't be late! (formal/plural)",
    tip: 'Plural negative: nemojte + infinitive',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the correct imperative' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ImperativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="imperative"
      title={'⚡ Imperative Drill'}
      subtitle={'Commands — the essential production skill'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Flawless! Command the language! 🏆',
        good: 'Strong work on imperatives! 💪',
        more: 'Keep practising those command forms!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
