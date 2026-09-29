import React from 'react';
import ModeDrill from './ModeDrill';

// B2 pronoun-forms drill (B2 tranche 6, 2026-08-15): the clitic/stressed
// pairs (mene/me, njemu/mu, nju/je-ju), where stressed forms are forced
// (after prepositions, contrast, one-word answers, sentence-initially,
// after i/ni) and clitic choice in context (vidio ju je).
const MODE_LABEL: Record<string, string> = {
  oblici: '👥 Parovi oblika',
  naglaseni: '💪 Naglašeni',
  recenica: '✍️ U rečenici',
};

const DATA = [
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „mene” (G/A) glasi:',
    opts: ['me', 'mi', 'ja', 'mnom'],
    answer: 'me',
    en: 'unstressed me (gen/acc)',
    tip: 'Mene → me; meni → mi.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „meni” (D) glasi:',
    opts: ['mi', 'me', 'mnom', 'ja'],
    answer: 'mi',
    en: 'unstressed to-me (dative)',
    tip: 'Meni → mi: Daj mi to.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njega” glasi:',
    opts: ['ga', 'mu', 'on', 'njim'],
    answer: 'ga',
    en: 'unstressed him',
    tip: 'Njega → ga; njemu → mu.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njemu” glasi:',
    opts: ['mu', 'ga', 'on', 'njim'],
    answer: 'mu',
    en: 'unstressed to-him',
    tip: 'Njemu → mu: Reci mu.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „nju” glasi:',
    opts: ['je (ju)', 'joj', 'ona', 'njom'],
    answer: 'je (ju)',
    en: 'unstressed her (acc)',
    tip: 'Nju → je/ju; njoj → joj.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njoj” glasi:',
    opts: ['joj', 'je', 'ju', 'njom'],
    answer: 'joj',
    en: 'unstressed to-her',
    tip: 'Njoj → joj: Kupio joj je cvijeće.',
  },
  {
    mode: 'oblici',
    q: 'Nenaglašeni oblik od „njih” glasi:',
    opts: ['ih', 'im', 'oni', 'njima'],
    answer: 'ih',
    en: 'unstressed them (acc)',
    tip: 'Njih → ih; njima → im.',
  },
  {
    mode: 'oblici',
    q: 'Instrumental „mnom” u rečenici traži:',
    opts: ['prijedlog (sa mnom)', 'enklitički položaj', 'nastavak -om', 'veliko slovo'],
    answer: 'prijedlog (sa mnom)',
    en: 'mnom needs a preposition',
    tip: 'Kraći oblik „mnom” stoji iza prijedloga (sa mnom); bez prijedloga: mnome (ponosi se mnome).',
  },
  {
    mode: 'naglaseni',
    q: 'Iza prijedloga dolazi ____ oblik: „za ____ ”. (ja)',
    opts: ['mene', 'meni', 'mi', 'mnom'],
    answer: 'mene',
    en: 'after prepositions use the stressed form',
    tip: 'Prijedlog + naglašeni oblik: za mene, kod njega.',
  },
  {
    mode: 'naglaseni',
    q: '„Vidim ____ , a ne njega!” (kontrast)',
    opts: ['tebe', 'te', 'ti', 'tobom'],
    answer: 'tebe',
    en: 'I see YOU, not him',
    tip: 'Kontrast/isticanje → naglašeni oblik: tebe.',
  },
  {
    mode: 'naglaseni',
    q: 'Na početku rečenice: „____ je pomogao.” (isticanje)',
    opts: ['Meni', 'Mi', 'Ja', 'Mnom'],
    answer: 'Meni',
    en: 'it was ME he helped',
    tip: 'Rečenica ne počinje enklitikom — naglašeno: Meni je pomogao.',
  },
  {
    mode: 'naglaseni',
    q: 'U odgovoru jednom riječju: „Koga su zvali?” — „____ .”',
    opts: ['Mene', 'Me', 'Mi', 'Ja'],
    answer: 'Mene',
    en: 'whom did they call? — Me.',
    tip: 'Samostalni odgovor traži naglašeni oblik.',
  },
  {
    mode: 'naglaseni',
    q: '„Došao je k ____ .” (mi, D)',
    opts: ['nama', 'nam', 'mi', 'nas'],
    answer: 'nama',
    en: 'he came to us',
    tip: 'Prijedlog k + naglašeni dativ: k nama.',
  },
  {
    mode: 'naglaseni',
    q: '„Bez ____ ne idem.” (ti)',
    opts: ['tebe', 'te', 'ti', 'tobom'],
    answer: 'tebe',
    en: 'I am not going without you',
    tip: 'Bez + genitiv, naglašeno: bez tebe.',
  },
  {
    mode: 'naglaseni',
    q: '„Misle samo na ____ .” (oni)',
    opts: ['njih', 'ih', 'im', 'njima'],
    answer: 'njih',
    en: 'they think only about them',
    tip: 'Na + akuzativ, naglašeno: na njih.',
  },
  {
    mode: 'naglaseni',
    q: 'Uz „i” (također) dolazi naglašeni oblik: „Pozvali su ____ .”',
    opts: ['i mene', 'i me', 'me i', 'mi i'],
    answer: 'i mene',
    en: 'they invited me too',
    tip: 'I/ni + naglašeni oblik: i mene, ni njega.',
  },
  {
    mode: 'recenica',
    q: 'Daj ____ tu knjigu. (ja)',
    opts: ['mi', 'mene', 'me', 'mnom'],
    answer: 'mi',
    en: 'give me that book',
    tip: 'Neutralno mjesto → enklitika: daj mi.',
  },
  {
    mode: 'recenica',
    q: 'Jesi li ____ vidio? (ona)',
    opts: ['je', 'ju je', 'joj', 'ona'],
    answer: 'je',
    en: 'have you seen her?',
    tip: 'A od ona: je (ispred pomoćnoga „je” rabi se ju: vidio ju je).',
  },
  {
    mode: 'recenica',
    q: 'Vidio ____ je jučer. (ona — izbjegni je + je)',
    opts: ['ju', 'je', 'joj', 'nju'],
    answer: 'ju',
    en: 'he saw her yesterday',
    tip: 'Ispred pomoćnoga JE akuzativ glasi JU: vidio ju je.',
  },
  {
    mode: 'recenica',
    q: 'Poklonili smo ____ knjigu. (on)',
    opts: ['mu', 'ga', 'njega', 'njemu bez mu'],
    answer: 'mu',
    en: 'we gave him a book',
    tip: 'Dativ enklitika: mu.',
  },
  {
    mode: 'recenica',
    q: 'Ne vjerujem ____ . (oni)',
    opts: ['im', 'ih', 'njih', 'njima bez im'],
    answer: 'im',
    en: 'I do not trust them',
    tip: 'Vjerovati + dativ: ne vjerujem im.',
  },
  {
    mode: 'recenica',
    q: 'Čekali smo ____ pola sata. (vi)',
    opts: ['vas', 'vam', 'vi', 'vama'],
    answer: 'vas',
    en: 'we waited for you for half an hour',
    tip: 'Čekati + akuzativ: čekali smo vas.',
  },
  {
    mode: 'recenica',
    q: 'Sviđa ____ se ovaj grad. (mi — množina)',
    opts: ['nam', 'nas', 'mi', 'nama bez nam'],
    answer: 'nam',
    en: 'we like this city',
    tip: 'Sviđati se + dativ: sviđa nam se.',
  },
  {
    mode: 'recenica',
    q: 'Boji ____ se. (ja)',
    opts: ['me', 'mi', 'mene bez me', 'mnom'],
    answer: 'me',
    en: 'he is afraid of me',
    tip: 'Bojati se + genitiv: boji me se.',
  },
];

export { DATA as ZAMJENICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ZamjeniceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zamjenice"
      title={'🎯 Naglašene i nenaglašene'}
      subtitle={'mene/me, njemu/mu — which pronoun form and when'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — zamjenice su vaše! 🏆',
        good: 'Vrlo dobro vladanje zamjenicama! 💪',
        more: 'Zamjenički oblici traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
