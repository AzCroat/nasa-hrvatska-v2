import React from 'react';
import ModeDrill from './ModeDrill';

// C2 capitalization drill (C2 tranche 5, 2026-08-15): peoples vs their
// languages/adjectives (Hrvat/hrvatski), holidays vs their adjectives
// (Bozic/bozicni), days/months/seasons lowercase, and institution, street
// and geographic naming (Sveuciliste u Zagrebu, Trg bana Jelacica).
const MODE_LABEL: Record<string, string> = {
  imena: '🧑 Imena i narodi',
  blagdani: '🎄 Blagdani i vrijeme',
  ustanove: '🏛️ Ustanove i mjesta',
};

const DATA = [
  {
    mode: 'imena',
    q: 'Pripadnik hrvatskoga naroda piše se:',
    opts: ['Hrvat', 'hrvat', 'HRVAT', 'hrVat'],
    answer: 'Hrvat',
    en: 'a Croat — capitalized',
    tip: 'Imena naroda velikim slovom: Hrvat, Slovenka.',
  },
  {
    mode: 'imena',
    q: 'Jezik kojim govorimo piše se:',
    opts: ['hrvatski', 'Hrvatski', 'HRVATSKI', 'hrvatski jezik veliko'],
    answer: 'hrvatski',
    en: 'the Croatian language — lowercase',
    tip: 'Pridjevi na -ski od imena: malim slovom (hrvatski, engleski).',
  },
  {
    mode: 'imena',
    q: 'Stanovnik Zagreba piše se:',
    opts: ['Zagrepčanin', 'zagrepčanin', 'ZAGREPČANIN', 'zagrebčanin'],
    answer: 'Zagrepčanin',
    en: 'a Zagreb resident',
    tip: 'Etnici velikim slovom + b→p: Zagrepčanin.',
  },
  {
    mode: 'imena',
    q: 'Pridjev od „Zagreb” u „____ katedrala” piše se:',
    opts: ['zagrebačka', 'Zagrebačka', 'ZAGREBAČKA', 'zagrebska'],
    answer: 'zagrebačka',
    en: 'the Zagreb cathedral (adj, lowercase)',
    tip: 'Odnosni pridjevi -ski/-čki/-ški malim slovom.',
  },
  {
    mode: 'imena',
    q: 'Posvojni pridjev od osobnog imena „Ivan” piše se:',
    opts: ['Ivanov', 'ivanov', 'IVANOV', 'ivanovljev'],
    answer: 'Ivanov',
    en: 'Ivan\u2019s — capitalized',
    tip: 'Posvojni na -ov/-ev/-in od IMENA: veliko (Ivanov, Marijin).',
  },
  {
    mode: 'imena',
    q: 'Naziv stanovnika kontinenta:',
    opts: ['Europljanin', 'europljanin', 'EUROPljanin', 'europejac'],
    answer: 'Europljanin',
    en: 'a European',
    tip: 'Etnici i od kontinenata velikim slovom.',
  },
  {
    mode: 'imena',
    q: '„bog” u značenju kršćanskoga Boga piše se:',
    opts: ['Bog', 'bog', 'BOG', 'b0g'],
    answer: 'Bog',
    en: 'God — capitalized as a name',
    tip: 'Jednobožačko božanstvo kao ime: Bog, Alah.',
  },
  {
    mode: 'imena',
    q: 'Ime „____ ” (slavni Modrić) piše se:',
    opts: ['Luka', 'luka', 'LUKA', 'lúka'],
    answer: 'Luka',
    en: "Modrić's first name — how is it written?",
    tip: 'Imena i nadimci velikim slovom; luka = harbour.',
  },
  {
    mode: 'blagdani',
    q: 'Naziv blagdana piše se:',
    opts: ['Božić', 'božić', 'BOŽIĆ', 'Božič'],
    answer: 'Božić',
    en: 'Christmas',
    tip: 'Blagdani velikim slovom: Božić, Uskrs, Nova godina.',
  },
  {
    mode: 'blagdani',
    q: 'Pridjev od blagdana u „____ običaji” piše se:',
    opts: ['božićni', 'Božićni', 'BOŽIĆNI', 'božičniji'],
    answer: 'božićni',
    en: 'Christmas customs (adj, lowercase)',
    tip: 'Pridjevi od blagdana malim: božićni, uskrsni.',
  },
  {
    mode: 'blagdani',
    q: '„____ godina” (blagdan 1. siječnja):',
    opts: ['Nova', 'nova', 'NOVA', 'Novogodišnja'],
    answer: 'Nova',
    en: 'New Year (the holiday)',
    tip: 'Blagdan: Nova godina — prva riječ velikim.',
  },
  {
    mode: 'blagdani',
    q: 'Dan u tjednu piše se:',
    opts: ['ponedjeljak', 'Ponedjeljak', 'PONEDJELJAK', 'po nedjeljak'],
    answer: 'ponedjeljak',
    en: 'Monday — lowercase',
    tip: 'Dani i mjeseci malim slovom: ponedjeljak, siječanj.',
  },
  {
    mode: 'blagdani',
    q: 'Mjesec u godini piše se:',
    opts: ['siječanj', 'Siječanj', 'SIJEČANJ', 'sječanj'],
    answer: 'siječanj',
    en: 'January — lowercase',
    tip: 'Mjeseci malim slovom (za razliku od engleskoga).',
  },
  {
    mode: 'blagdani',
    q: 'Povijesni događaj „____ svjetski rat” piše se:',
    opts: ['Drugi', 'drugi', 'DRUGI', 'II drugi'],
    answer: 'Drugi',
    en: 'the Second World War',
    tip: 'Povijesni događaji: prva riječ velikim (Drugi svjetski rat).',
  },
  {
    mode: 'blagdani',
    q: '„uskrsni ponedjeljak” ili „Uskrsni ponedjeljak” — blagdan se piše:',
    opts: [
      'Uskrsni ponedjeljak',
      'uskrsni ponedjeljak',
      'USKRSNI PONEDJELJAK',
      'uskrsni Ponedjeljak',
    ],
    answer: 'Uskrsni ponedjeljak',
    en: 'Easter Monday — a holiday name',
    tip: 'Kao ime blagdana: prva riječ velikim slovom.',
  },
  {
    mode: 'blagdani',
    q: 'Godišnje doba piše se:',
    opts: ['proljeće', 'Proljeće', 'PROLJEĆE', 'prolieće'],
    answer: 'proljeće',
    en: 'spring — lowercase',
    tip: 'Godišnja doba malim slovom.',
  },
  {
    mode: 'ustanove',
    q: 'Naziv države: „____ Hrvatska”',
    opts: ['Republika', 'republika', 'REPUBLIKA', 'Repubika'],
    answer: 'Republika',
    en: 'the Republic of Croatia',
    tip: 'Službena imena država: sve riječi velikim (osim veznika).',
  },
  {
    mode: 'ustanove',
    q: '„____ u Zagrebu” (najstarije hrvatsko sveučilište):',
    opts: ['Sveučilište', 'sveučilište', 'SVEUČILIŠTE', 'Sve Učilište'],
    answer: 'Sveučilište',
    en: 'the University of Zagreb',
    tip: 'Ime ustanove: prva riječ velikim — Sveučilište u Zagrebu.',
  },
  {
    mode: 'ustanove',
    q: 'Opća imenica u „idem na sveučilište” piše se:',
    opts: ['sveučilište', 'Sveučilište', 'SVEUČILIŠTE', 'sveučilišće'],
    answer: 'sveučilište',
    en: 'going to university (generic)',
    tip: 'Opća uporaba malim slovom; ime ustanove velikim.',
  },
  {
    mode: 'ustanove',
    q: 'Ulica se piše: „____ kralja Tomislava”',
    opts: ['Ulica', 'ulica', 'ULICA', 'Ul.'],
    answer: 'Ulica',
    en: 'King Tomislav Street',
    tip: 'Prva riječ imena ulice velikim: Ulica kralja Tomislava.',
  },
  {
    mode: 'ustanove',
    q: '„Trg ____ Jelačića” (ban):',
    opts: ['bana', 'Bana', 'BANA', 'banova'],
    answer: 'bana',
    en: 'Ban Jelačić Square',
    tip: 'Unutar imena trga opće imenice malim: Trg bana Jelačića.',
  },
  {
    mode: 'ustanove',
    q: 'Naziv mora: „____ more”',
    opts: ['Jadransko', 'jadransko', 'JADRANSKO', 'Jadran more'],
    answer: 'Jadransko',
    en: 'the Adriatic Sea',
    tip: 'Zemljopisna imena: Jadransko more, Plitvička jezera.',
  },
  {
    mode: 'ustanove',
    q: '„osnovna škola” kao opći pojam vs ime „____ škola Ivana Gundulića”:',
    opts: ['Osnovna', 'osnovna', 'OSNOVNA', 'OŠ velika sva'],
    answer: 'Osnovna',
    en: 'a primary school vs THE school\u2019s name',
    tip: 'Ime konkretne škole: prva riječ velikim.',
  },
  {
    mode: 'ustanove',
    q: 'Nebesko tijelo na kojem živimo, u astronomskom kontekstu:',
    opts: ['Zemlja', 'zemlja', 'ZEMLJA', 'zemja'],
    answer: 'Zemlja',
    en: 'planet Earth — capitalized in astronomy',
    tip: 'Planet Zemlja velikim; zemlja (tlo) malim.',
  },
];

export { DATA as VELIKO_SLOVO_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VelikoSlovoDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="velikoslovo"
      title={'🔠 Veliko i malo slovo'}
      subtitle={'Hrvat, hrvatski, Božić, božićni — when the capital matters'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — pravila su vaša! 🏆',
        good: 'Vrlo dobro vladanje velikim slovom! 💪',
        more: 'Veliko i malo slovo traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
