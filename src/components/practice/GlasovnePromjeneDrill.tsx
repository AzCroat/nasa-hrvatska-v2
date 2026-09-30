import React from 'react';
import ModeDrill from './ModeDrill';

// C2 sound-alternations drill (C2 tranche 2, 2026-08-15): the
// morphophonology behind every paradigm — sibilarization/palatalization,
// fleeting a, ije/je/e alternations, voicing assimilation and jotation.
const MODE_LABEL: Record<string, string> = {
  sibpal: '🎼 Sibilarizacija i palatalizacija',
  nepija: '🫥 Nepostojano a i ije/je',
  jednac: '🤝 Jednačenja i jotacija',
};

const DATA = [
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „ruka”:',
    opts: ['ruci', 'ruki', 'rukici', 'ruku'],
    answer: 'ruci',
    en: 'the dative/locative singular of hand',
    tip: 'Sibilarizacija k→c: ruka → ruci.',
  },
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „noga”:',
    opts: ['nozi', 'nogi', 'nožici', 'nogu'],
    answer: 'nozi',
    en: 'the dative/locative singular of leg',
    tip: 'Sibilarizacija g→z: noga → nozi.',
  },
  {
    mode: 'sibpal',
    q: 'Vokativ jednine od „Bog”:',
    opts: ['Bože', 'Bogu', 'Bogo', 'Božiću'],
    answer: 'Bože',
    en: 'the vocative of God',
    tip: 'Palatalizacija g→ž pred -e: Bog → Bože.',
  },
  {
    mode: 'sibpal',
    q: 'Vokativ jednine od „junak”:',
    opts: ['junače', 'junaku', 'junako', 'junakiću'],
    answer: 'junače',
    en: 'the vocative of hero',
    tip: 'Palatalizacija k→č: junak → junače.',
  },
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „svrha”:',
    opts: ['svrsi', 'svrhi', 'svrši', 'svrhu'],
    answer: 'svrsi',
    en: 'the dative/locative of purpose',
    tip: 'Sibilarizacija h→s: svrha → svrsi.',
  },
  {
    mode: 'sibpal',
    q: 'Nominativ množine od „oblak”:',
    opts: ['oblaci', 'oblaki', 'oblakovi', 'oblače'],
    answer: 'oblaci',
    en: 'the plural of cloud',
    tip: 'Sibilarizacija u N mn.: oblak → oblaci.',
  },
  {
    mode: 'sibpal',
    q: 'Prezent 1. l. jd. od „peći”:',
    opts: ['pečem', 'pekem', 'pećem', 'pecem'],
    answer: 'pečem',
    en: 'I bake (present tense of to bake)',
    tip: 'Palatalizacija k→č pred -em: peći (pek-) → pečem.',
  },
  {
    mode: 'sibpal',
    q: 'Dativ/lokativ jednine od „knjiga”:',
    opts: ['knjizi', 'knjigi', 'knjiži', 'knjigu'],
    answer: 'knjizi',
    en: 'the dative/locative of book',
    tip: 'Sibilarizacija g→z: knjiga → knjizi.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „pas”:',
    opts: ['psa', 'pasa', 'pesa', 'pas'],
    answer: 'psa',
    en: 'the genitive of dog',
    tip: 'Nepostojano a: pas → psa.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „vrabac”:',
    opts: ['vrapca', 'vrabca', 'vrabaca', 'vrapcu'],
    answer: 'vrapca',
    en: 'the genitive of sparrow',
    tip: 'Nepostojano a + jednačenje b→p: vrabac → vrapca.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „dijete”:',
    opts: ['djeteta', 'dijeteta', 'diteta', 'djetete'],
    answer: 'djeteta',
    en: 'the genitive of child',
    tip: 'Ije→je u kosim padežima: dijete → djeteta.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv jednine od „vrijeme”:',
    opts: ['vremena', 'vrijemena', 'vremenu', 'vrjemena'],
    answer: 'vremena',
    en: 'the genitive of time/weather',
    tip: 'Ije→e: vrijeme → vremena.',
  },
  {
    mode: 'nepija',
    q: 'Umanjenica od „cvijet”:',
    opts: ['cvjetić', 'cvijetić', 'cvitić', 'cvijetak'],
    answer: 'cvjetić',
    en: 'a little flower',
    tip: 'Ije→je pred sufiksom: cvijet → cvjetić.',
  },
  {
    mode: 'nepija',
    q: 'Komparativ od „lijep”:',
    opts: ['ljepši', 'lijepši', 'ljepšiji', 'lipši'],
    answer: 'ljepši',
    en: 'more beautiful',
    tip: 'Ije→je u komparativu: lijep → ljepši.',
  },
  {
    mode: 'nepija',
    q: 'Genitiv množine od „sestra”:',
    opts: ['sestara', 'sestri', 'sestra', 'sester'],
    answer: 'sestara',
    en: 'the genitive plural of sister',
    tip: 'Umetnuto (nepostojano) a: sestra → sestara.',
  },
  {
    mode: 'nepija',
    q: 'Ona je donijela, a on je ____.',
    opts: ['donio', 'donjeo', 'donesao', 'donijeo'],
    answer: 'donio',
    en: 'she brought it, and he brought it too',
    tip: 'Pridjev radni m. roda: donijeti → donio (ije→i).',
  },
  {
    mode: 'jednac',
    q: 'Mačka je izašla ____ stola.',
    opts: ['ispod', 'izpod', 'iz pod', 'izspod'],
    answer: 'ispod',
    en: 'the cat came out from under the table',
    tip: 'Jednačenje po zvučnosti z→s: iz+pod → ispod.',
  },
  {
    mode: 'jednac',
    q: 'Pridjev od „bez kraja”:',
    opts: ['beskrajan', 'bezkrajan', 'bezkrajni', 'bezkonačan'],
    answer: 'beskrajan',
    en: 'endless',
    tip: 'Jednačenje z→s pred bezvučnim k: bez+krajan → beskrajan.',
  },
  {
    mode: 'jednac',
    q: 'raz + staviti =',
    opts: ['rastaviti', 'razstaviti', 'rasstaviti', 'razastaviti'],
    answer: 'rastaviti',
    en: 'to take apart',
    tip: 'Jednačenje z→s pa ispadanje ss→s: raz+staviti → rastaviti.',
  },
  {
    mode: 'jednac',
    q: 'od + pisati =',
    opts: ['otpisati', 'odpisati', 'otpisivati', 'odpisat'],
    answer: 'otpisati',
    en: 'to write off',
    tip: 'Jednačenje d→t pred bezvučnim p: od+pisati → otpisati.',
  },
  {
    mode: 'jednac',
    q: 'Ženski rod od „težak”:',
    opts: ['teška', 'težka', 'teškana', 'težska'],
    answer: 'teška',
    en: 'heavy (feminine)',
    tip: 'Nepostojano a ispada, ž se jednači u š: težak → teška.',
  },
  {
    mode: 'jednac',
    q: 'Komparativ od „sladak”:',
    opts: ['slađi', 'sladiji', 'slatkiji', 'sladji'],
    answer: 'slađi',
    en: 'sweeter',
    tip: 'Jotacija d+j→đ: sladak → slađi.',
  },
  {
    mode: 'jednac',
    q: 'Komparativ od „drag”:',
    opts: ['draži', 'dragiji', 'dražiji', 'dragši'],
    answer: 'draži',
    en: 'dearer',
    tip: 'Jotacija g+j→ž: drag → draži.',
  },
  {
    mode: 'jednac',
    q: 'Vokativ jednine od „otac”:',
    opts: ['oče', 'otače', 'ocu', 'otac'],
    answer: 'oče',
    en: 'father! (vocative)',
    tip: 'Nepostojano a + palatalizacija c→č: otac → oče.',
  },
];

export { DATA as GLASOVNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GlasovnePromjeneDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="glasovnepromjene"
      title={'🌊 Glasovne promjene'}
      subtitle={'ruka → ruci, otac → oče — the sound alternation system'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — glasovi vas slušaju! 🏆',
        good: 'Vrlo dobro vladanje promjenama! 💪',
        more: 'Glasovne promjene traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
