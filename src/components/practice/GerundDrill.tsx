import React from 'react';
import ModeDrill from './ModeDrill';

// C2 verbal-adverb drill (glagolski prilozi) — the session pool's second C2
// grammar drill (Phase 2, fluency initiative). The learning unit exists in
// grammarAdvanced.js (VERBAL_ADVERBS); this drill is a SEPARATE, larger
// question bank so the daily session can grade the skill rather than only
// present it. Prompts are in Croatian — at C2 the metalanguage itself is part
// of the curriculum. Three modes: forming (tvorba), choosing present vs past
// (izbor), and the same-subject rule + register (pravila).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  izbor: '⚖️ Sadašnji ili prošli',
  pravila: '📏 Pravila i registar',
};

const DATA = [
  // ── Tvorba (formation) ──
  {
    mode: 'tvorba',
    q: "Glagolski prilog sadašnji od 'putovati' glasi:",
    opts: ['putujući', 'putovavši', 'putovajući', 'putujuvši'],
    answer: 'putujući',
    en: 'travelling / while travelling',
    tip: '3. l. mn. prezenta minus -u, plus -ći: putuju → putujući. Samo nesvršeni glagoli.',
  },
  {
    mode: 'tvorba',
    q: "Glagolski prilog prošli od 'stići' glasi:",
    opts: ['stigavši', 'stižući', 'stigvši', 'stigajući'],
    answer: 'stigavši',
    en: 'having arrived',
    tip: 'Svršeni glagol, osnova radnog pridjeva: stigao → stig- + -avši → stigavši.',
  },
  {
    mode: 'tvorba',
    q: "Glagolski prilog sadašnji od 'smijati se' glasi:",
    opts: ['smijući se', 'smijajući se', 'smijavši se', 'smješeći se'],
    answer: 'smijući se',
    en: 'laughing / while laughing',
    tip: 'smiju se → smijući se. Povratna zamjenica se ostaje uz prilog.',
  },
  {
    mode: 'tvorba',
    q: "Glagolski prilog prošli od 'vidjeti' glasi:",
    opts: ['vidjevši', 'videći', 'vidivši', 'vidjajući'],
    answer: 'vidjevši',
    en: 'having seen',
    tip: 'vidje- + -vši → vidjevši. Ijekavski refleks čuva se u osnovi.',
  },
  {
    mode: 'tvorba',
    q: 'Koji glagol NE MOŽE tvoriti glagolski prilog sadašnji?',
    opts: ['kupiti', 'kupovati', 'čitati', 'pjevati'],
    answer: 'kupiti',
    en: 'Which verb cannot form a present verbal adverb?',
    tip: 'Sadašnji prilog tvore samo NESVRŠENI glagoli — kupiti je svršen (kupovati → kupujući).',
  },
  {
    mode: 'tvorba',
    q: "Glagolski prilog prošli od 'reći' glasi:",
    opts: ['rekavši', 'rečući', 'rekvši', 'rekivši'],
    answer: 'rekavši',
    en: 'having said',
    tip: 'rekao → rek- + -avši → rekavši.',
  },
  {
    mode: 'tvorba',
    q: "Glagolski prilog sadašnji od 'davati' glasi:",
    opts: ['dajući', 'davajući', 'davši', 'dadući'],
    answer: 'dajući',
    en: 'giving / while giving',
    tip: '3. l. mn. prezenta: daju → dajući (ne od infinitivne osnove dava-).',
  },
  {
    mode: 'tvorba',
    q: "Glagolski prilog prošli od 'doći' glasi:",
    opts: ['došavši', 'dolazeći', 'došvši', 'dođavši'],
    answer: 'došavši',
    en: 'having come',
    tip: 'došao → doš- + -avši → došavši. „Dolazeći” je sadašnji prilog od nesvršenoga dolaziti.',
  },
  // ── Izbor (present vs past) ──
  {
    mode: 'izbor',
    q: '„____ novine, doznao je vijest.” (istodobno s glavnom radnjom)',
    opts: ['Čitajući', 'Pročitavši', 'Pročitati', 'Čitao'],
    answer: 'Čitajući',
    en: 'While reading the paper, he learned the news.',
    tip: 'Istodobnost → sadašnji prilog od nesvršenoga glagola (čitajući).',
  },
  {
    mode: 'izbor',
    q: '„____ posao, otišla je na zasluženi odmor.” (radnja dovršena prije)',
    opts: ['Završivši', 'Završavajući', 'Završavati', 'Završila'],
    answer: 'Završivši',
    en: 'Having finished the job, she went on a well-earned holiday.',
    tip: 'Prethodnost → prošli prilog od svršenoga glagola (završivši).',
  },
  {
    mode: 'izbor',
    q: '„____ prema moru, razgovarali su o svemu.”',
    opts: ['Hodajući', 'Dohodavši', 'Hodavši', 'Došavši'],
    answer: 'Hodajući',
    en: 'Walking towards the sea, they talked about everything.',
    tip: 'Radnje teku usporedno → sadašnji prilog (hodajući).',
  },
  {
    mode: 'izbor',
    q: '„____ sve račune, shvatio je koliko troši.”',
    opts: ['Zbrojivši', 'Zbrajajući', 'Zbrojiti', 'Zbrojen'],
    answer: 'Zbrojivši',
    en: 'Having added up all the bills, he realised how much he spends.',
    tip: 'Najprije je zbrojio, ONDA shvatio → prošli prilog (zbrojivši).',
  },
  {
    mode: 'izbor',
    q: '„Ne ____ što bi rekao, samo je kimnuo.”',
    opts: ['znajući', 'znavši', 'znati', 'znao'],
    answer: 'znajući',
    en: 'Not knowing what to say, he just nodded.',
    tip: 'Stanje istodobno s glavnom radnjom → ne znajući (negirani sadašnji prilog).',
  },
  {
    mode: 'izbor',
    q: '„____ ispit, izašao je proslaviti s društvom.”',
    opts: ['Položivši', 'Polažući', 'Položiti', 'Položen'],
    answer: 'Položivši',
    en: 'Having passed the exam, he went out to celebrate.',
    tip: 'Najprije je položio, ONDA slavi → prošli prilog. „Polažući” bi značilo da slavi usred ispita.',
  },
  {
    mode: 'izbor',
    q: '„____ rano, stigla je na prvi vlak.”',
    opts: ['Ustavši', 'Ustajući', 'Ustati', 'Ustala'],
    answer: 'Ustavši',
    en: 'Having got up early, she caught the first train.',
    tip: 'Ustajanje prethodi dolasku na vlak → prošli prilog (ustavši).',
  },
  {
    mode: 'izbor',
    q: '„Godinama ____ u inozemstvu, izgubio je kontakt s prijateljima.”',
    opts: ['živeći', 'proživjevši', 'živjeti', 'življen'],
    answer: 'živeći',
    en: 'Living abroad for years, he lost touch with his friends.',
    tip: '„Godinama” signalizira trajanje usporedno s gubljenjem kontakta → sadašnji prilog (živeći).',
  },
  // ── Pravila i registar ──
  {
    mode: 'pravila',
    q: 'Koja je rečenica GRAMATIČKI ispravna?',
    opts: [
      'Ulazeći u sobu, ugledao sam nered.',
      'Ulazeći u sobu, nered je bio velik.',
      'Ulazeći u sobu, vrata su škripala.',
      'Ulazeći u sobu, telefon je zazvonio.',
    ],
    answer: 'Ulazeći u sobu, ugledao sam nered.',
    en: 'Entering the room, I saw the mess.',
    tip: 'Vršitelj priloga mora biti SUBJEKT glavne rečenice — ja ulazim i ja gledam. U ostalima ulazi netko drugi.',
  },
  {
    mode: 'pravila',
    q: "U rečenici „Budući da kasnimo, požurimo!” — 'budući da' je:",
    opts: [
      'uzročni veznik (leksikaliziran)',
      'glagolski prilog sadašnji u izvornoj službi',
      'glagolski prilog prošli',
      'čestica',
    ],
    answer: 'uzročni veznik (leksikaliziran)',
    en: "Since we're late, let's hurry!",
    tip: 'Prilog „budući” leksikalizirao se u uzročni veznik „budući da” (= jer/zato što).',
  },
  {
    mode: 'pravila',
    q: 'Kojem registru glagolski prilozi ponajprije pripadaju?',
    opts: [
      'pisanom i književnom registru',
      'svakodnevnom razgovoru',
      'dijalektalnom govoru',
      'dječjem jeziku',
    ],
    answer: 'pisanom i književnom registru',
    en: 'Which register do verbal adverbs primarily belong to?',
    tip: 'U govoru se radije rabi vremenska surečenica (dok..., nakon što...). Prilozi su obilježje pisanoga stila.',
  },
  {
    mode: 'pravila',
    q: 'Kako se glagolski prilozi sklanjaju?',
    opts: [
      'ne sklanjaju se — nepromjenjivi su',
      'kao pridjevi (radeći, radećeg, radećem...)',
      'samo u množini',
      'samo u ženskom rodu',
    ],
    answer: 'ne sklanjaju se — nepromjenjivi su',
    en: 'How do verbal adverbs decline?',
    tip: 'Nepromjenjivi su. Oblici poput „radećeg” pripadaju POPRIDJEVLJENIM oblicima (glagolski pridjev), ne prilogu.',
  },
  {
    mode: 'pravila',
    q: 'Preoblikuj bez priloga: „Došavši kući, upalila je svjetlo.”',
    opts: [
      'Nakon što je došla kući, upalila je svjetlo.',
      'Dok je dolazila kući, upalila je svjetlo.',
      'Ako dođe kući, upalit će svjetlo.',
      'Premda je došla kući, upalila je svjetlo.',
    ],
    answer: 'Nakon što je došla kući, upalila je svjetlo.',
    en: 'Having come home, she turned on the light.',
    tip: 'Prošli prilog = prethodnost → „nakon što” + perfekt. „Dok” bi značio istodobnost.',
  },
  {
    mode: 'pravila',
    q: 'Preoblikuj bez priloga: „Čitajući u vlaku, uvijek zaspim.”',
    opts: [
      'Dok čitam u vlaku, uvijek zaspim.',
      'Nakon što pročitam u vlaku, uvijek zaspim.',
      'Ako pročitam u vlaku, uvijek zaspim.',
      'Premda čitam u vlaku, uvijek zaspim.',
    ],
    answer: 'Dok čitam u vlaku, uvijek zaspim.',
    en: 'Reading on the train, I always fall asleep.',
    tip: 'Sadašnji prilog = istodobnost → „dok” + prezent. „Nakon što” bi značilo prethodnost.',
  },
  {
    mode: 'pravila',
    q: 'U izrazu „ležeći policajac” riječ „ležeći” jest:',
    opts: [
      'popridjevljeni oblik (pridjev)',
      'glagolski prilog sadašnji u izvornoj službi',
      'glagolski pridjev radni',
      'prilog načina',
    ],
    answer: 'popridjevljeni oblik (pridjev)',
    en: 'a speed bump — literally "a lying policeman"',
    tip: 'Uz imenicu se prilog popridjevio: sklanja se i sročan je (ležećeg policajca). Pravi prilog je nepromjenjiv.',
  },
  {
    mode: 'pravila',
    q: 'Koja je rečenica stilski najprikladnija za GOVORNI jezik?',
    opts: [
      'Kad je došla kući, upalila je svjetlo.',
      'Došavši kući, upalila je svjetlo.',
      'Došavši kući, upalivši svjetlo, sjela je.',
      'Bivši došla kući, upalila je svjetlo.',
    ],
    answer: 'Kad je došla kući, upalila je svjetlo.',
    en: 'When she came home, she turned on the light.',
    tip: 'U govoru se rabi vremenska surečenica; gomilanje priloga (i oblik „bivši”) obilježja su lošega ili arhaičnog stila.',
  },
];

export { DATA as GERUND_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GerundDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="gerunddrill"
      title={'✍️ Glagolski prilozi'}
      subtitle={'radeći · napisavši — the literary gerunds'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Besprijekorno — prilozi su vaši! 🏆',
        good: 'Snažno vladanje pisanim registrom! 💪',
        more: 'Tvorba i pravilo istoga subjekta traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
