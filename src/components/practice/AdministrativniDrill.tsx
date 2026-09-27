import React from 'react';
import ModeDrill from './ModeDrill';

// C2 administrative-register drill (C2 tranche 2, 2026-08-15): decoding
// bureaucratic paraphrase verbs (izvršiti uplatu), producing correct official
// phrasing (sukladno + D), and the distinctions that carry legal weight
// (odbaciti vs odbiti, dostava, po službenoj dužnosti).
const MODE_LABEL: Record<string, string> = {
  prevedi: '🔎 Prevedi na običan jezik',
  sroci: '✍️ Službena formulacija',
  dekod: '🧩 Što to znači?',
};

const DATA = [
  {
    mode: 'prevedi',
    q: '„Izvršiti uplatu” jednostavnije znači:',
    opts: ['platiti', 'naplatiti', 'isplatiti se', 'uplaćivati se'],
    answer: 'platiti',
    en: 'to make a payment = to pay',
    tip: 'Birokratski parafrazni glagol: izvršiti uplatu = platiti.',
  },
  {
    mode: 'prevedi',
    q: '„Izvršiti uvid u spis” znači:',
    opts: ['pregledati spis', 'potpisati spis', 'uništiti spis', 'fotokopirati spis'],
    answer: 'pregledati spis',
    en: 'to inspect the file',
    tip: 'Izvršiti uvid = pregledati, pogledati.',
  },
  {
    mode: 'prevedi',
    q: '„Staviti izvan snage” znači:',
    opts: ['ukinuti', 'pojačati', 'odgoditi', 'objaviti'],
    answer: 'ukinuti',
    en: 'to repeal (put out of force)',
    tip: 'Staviti izvan snage = ukinuti propis.',
  },
  {
    mode: 'prevedi',
    q: '„Dati suglasnost” znači:',
    opts: ['pristati', 'potpisati se', 'savjetovati', 'suosjećati'],
    answer: 'pristati',
    en: 'to give consent = to agree',
    tip: 'Dati suglasnost = pristati, odobriti.',
  },
  {
    mode: 'prevedi',
    q: '„U najkraćem mogućem roku” znači:',
    opts: ['što prije', 'u roku od dana', 'vrlo kratko', 'odmah sutra'],
    answer: 'što prije',
    en: 'as soon as possible',
    tip: 'Birokratska fraza za: što prije.',
  },
  {
    mode: 'prevedi',
    q: '„Izvršiti povrat sredstava” znači:',
    opts: ['vratiti novac', 'povući sredstva', 'preusmjeriti novac', 'naplatiti dug'],
    answer: 'vratiti novac',
    en: 'to refund the money',
    tip: 'Povrat sredstava = vraćanje novca.',
  },
  {
    mode: 'prevedi',
    q: '„Pristupiti glasovanju” znači:',
    opts: ['početi glasovati', 'doći na birališta', 'prijaviti se za glas', 'odgoditi glasovanje'],
    answer: 'početi glasovati',
    en: 'to proceed to a vote',
    tip: 'Pristupiti čemu = početi s čim (formalno).',
  },
  {
    mode: 'prevedi',
    q: '„Obustaviti postupak” znači:',
    opts: ['prekinuti postupak', 'ubrzati postupak', 'ponoviti postupak', 'platiti postupak'],
    answer: 'prekinuti postupak',
    en: 'to suspend the proceedings',
    tip: 'Obustaviti = zaustaviti, prekinuti.',
  },
  {
    mode: 'sroci',
    q: 'Zahtjev se podnosi ____ obrascu.',
    opts: ['na propisanom', 'u propisani', 'po propisanu', 'za propisani'],
    answer: 'na propisanom',
    en: 'the request is filed on the prescribed form',
    tip: 'Na + lokativ: na propisanom obrascu.',
  },
  {
    mode: 'sroci',
    q: 'Žalba ____ roku od 15 dana.',
    opts: ['se podnosi u', 'podnosi u', 'se podnese na', 'podnosi se za'],
    answer: 'se podnosi u',
    en: 'the appeal is filed within 15 days',
    tip: 'Podnosi se u roku od + G.',
  },
  {
    mode: 'sroci',
    q: 'Rješenje stupa na snagu danom ____.',
    opts: ['donošenja', 'donošenje', 'donošenju', 'donesenosti'],
    answer: 'donošenja',
    en: 'the decision takes effect on the day of adoption',
    tip: 'Danom + genitiv glagolske imenice.',
  },
  {
    mode: 'sroci',
    q: '____ članku 5. Zakona, naknada se ne plaća.',
    opts: ['Sukladno', 'Suglasno na', 'Prema na', 'Sukladno s'],
    answer: 'Sukladno',
    en: 'pursuant to Article 5 of the Act',
    tip: 'Sukladno + DATIV: sukladno članku.',
  },
  {
    mode: 'sroci',
    q: 'Prilaže se preslika ____.',
    opts: ['osobne iskaznice', 'osobnu iskaznicu', 'od osobne iskaznice', 'osobnoj iskaznici'],
    answer: 'osobne iskaznice',
    en: 'a copy of the identity card is attached',
    tip: 'Preslika + genitiv.',
  },
  {
    mode: 'sroci',
    q: 'Molba se ____ tajništvu fakulteta.',
    opts: ['upućuje', 'šalje na', 'piše za', 'izručuje'],
    answer: 'upućuje',
    en: 'the application is addressed to the faculty secretariat',
    tip: 'Uputiti/upućivati + dativ — formalni glagol slanja.',
  },
  {
    mode: 'sroci',
    q: 'Natječaj je otvoren ____ popune radnog mjesta.',
    opts: ['do', 'za', 'radi', 'od'],
    answer: 'do',
    en: 'the vacancy is open until the position is filled',
    tip: 'Do + G: do popune.',
  },
  {
    mode: 'sroci',
    q: 'Troškove postupka ____ podnositelj zahtjeva.',
    opts: ['snosi', 'nosi', 'trpi', 'ima'],
    answer: 'snosi',
    en: 'the applicant bears the costs of the proceedings',
    tip: 'Snositi troškove — pravna kolokacija.',
  },
  {
    mode: 'dekod',
    q: '„Nalaže se uklanjanje predmetnog objekta.” — objekt se mora:',
    opts: ['ukloniti', 'preurediti', 'ograditi', 'prijaviti'],
    answer: 'ukloniti',
    en: 'the structure must be removed',
    tip: 'Naložiti = narediti; predmetni = ovaj o kojem je riječ.',
  },
  {
    mode: 'dekod',
    q: '„Postupak je obustavljen zbog nenadležnosti.” — tijelo:',
    opts: [
      'nije bilo ovlašteno odlučivati',
      'nije imalo vremena',
      'odbilo je zahtjev kao neosnovan',
      'izgubilo je spis',
    ],
    answer: 'nije bilo ovlašteno odlučivati',
    en: 'the body had no jurisdiction',
    tip: 'Nenadležnost = izvan ovlasti toga tijela.',
  },
  {
    mode: 'dekod',
    q: '„Uvjerenje se izdaje u svrhu ostvarivanja prava.” — služi za:',
    opts: ['ostvarivanje prava', 'plaćanje pristojbe', 'evidenciju kazni', 'produljenje roka'],
    answer: 'ostvarivanje prava',
    en: 'the certificate serves to exercise a right',
    tip: 'U svrhu + G = radi.',
  },
  {
    mode: 'dekod',
    q: '„Protiv ovog rješenja žalba nije dopuštena.” — znači:',
    opts: [
      'odluka je konačna u postupku',
      'žalba se dodatno plaća',
      'žalba ide izravno sudu',
      'rješenje je privremeno',
    ],
    answer: 'odluka je konačna u postupku',
    en: 'no appeal lies against this decision',
    tip: 'Nedopuštena žalba = upravna odluka je konačna.',
  },
  {
    mode: 'dekod',
    q: '„Podnositelj se poziva da uredi podnesak.” — mora:',
    opts: [
      'ispraviti i dopuniti zahtjev',
      'osobno doći u ured',
      'platiti pristojbu',
      'povući zahtjev',
    ],
    answer: 'ispraviti i dopuniti zahtjev',
    en: 'the applicant is invited to put the submission in order',
    tip: 'Urediti podnesak = otkloniti formalne nedostatke.',
  },
  {
    mode: 'dekod',
    q: '„Zahtjev se ODBACUJE” (ne „odbija”) — znači:',
    opts: [
      'nije ni razmatran zbog formalnog nedostatka',
      'razmotren je i ocijenjen neosnovanim',
      'vraća se na doradu',
      'prosljeđuje se drugom tijelu',
    ],
    answer: 'nije ni razmatran zbog formalnog nedostatka',
    en: 'the request is dismissed (not examined on the merits)',
    tip: 'ODBACITI = ne ući u meritum; ODBITI = razmotriti pa reći ne.',
  },
  {
    mode: 'dekod',
    q: '„Rok teče od dana dostave.” — rok počinje:',
    opts: [
      'kad primite pismeno',
      'kad je odluka donesena',
      'prvog dana u mjesecu',
      'kad se žalite',
    ],
    answer: 'kad primite pismeno',
    en: 'the deadline runs from the day of service',
    tip: 'Dostava = uručenje pismena stranci.',
  },
  {
    mode: 'dekod',
    q: '„Izdaje se po službenoj dužnosti.” — znači:',
    opts: [
      'bez zahtjeva stranke',
      'uz plaćanje pristojbe',
      'samo službenim osobama',
      'na zahtjev suda',
    ],
    answer: 'bez zahtjeva stranke',
    en: 'issued ex officio',
    tip: 'Po službenoj dužnosti (ex offo) = tijelo postupa samo.',
  },
];

export { DATA as ADMINISTRATIVNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AdministrativniDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="administrativni"
      title={'🏛️ Administrativni jezik'}
      subtitle={'odbaciti nije odbiti — surviving official Croatian'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — nijedan vas dopis ne može zbuniti! 🏆',
        good: 'Vrlo dobro snalaženje u upravnom stilu! 💪',
        more: 'Upravni stil traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
