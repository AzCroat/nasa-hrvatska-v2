import React from 'react';
import ModeDrill from './ModeDrill';

// B2 indefinite-pronouns drill (B2 tranche 2, 2026-08-15): the ne-/ni-/i-/
// sva- series (netko/nitko/itko/svatko), the preposition SPLITTING of
// ni-forms (ni s kim, ni o čemu), god-forms, and negative concord.
const MODE_LABEL: Record<string, string> = {
  oblici: '🎯 Pravi oblik',
  razdvajanje: '✂️ Razdvajanje s prijedlogom',
  god: '🌀 God-oblici i niječni sklad',
};

const DATA = [
  {
    mode: 'oblici',
    q: '____ te tražio jutros — mislim da je bio poštar.',
    opts: ['Netko', 'Nitko', 'Itko', 'Svatko'],
    answer: 'Netko',
    en: 'someone was looking for you this morning',
    tip: 'Potvrdna rečenica → ne-oblik: netko.',
  },
  {
    mode: 'oblici',
    q: 'Na moje pitanje nije odgovorio ____.',
    opts: ['nitko', 'netko', 'itko', 'svatko'],
    answer: 'nitko',
    en: 'nobody answered my question',
    tip: 'Uz niječni glagol dolazi ni-oblik: nitko nije odgovorio.',
  },
  {
    mode: 'oblici',
    q: 'Sumnjam da ____ to može riješiti sam.',
    opts: ['itko', 'nikoga', 'nitko', 'ikoga'],
    answer: 'itko',
    en: 'I doubt that anyone can solve that alone',
    tip: 'Iza sumnje, pitanja i pogodbe dolazi i-oblik: itko = itko uopće.',
  },
  {
    mode: 'oblici',
    q: '____ od nas ima svoje razloge.',
    opts: ['Svatko', 'Svakome', 'Nitko', 'Itko'],
    answer: 'Svatko',
    en: 'each of us has our own reasons',
    tip: 'SVATKO samostalno (za osobe); svako uz imenicu (svako dijete).',
  },
  {
    mode: 'oblici',
    q: 'Uzmi ____ za čitanje na put.',
    opts: ['nešto', 'išta', 'ništa', 'svašta'],
    answer: 'nešto',
    en: 'take something to read for the trip',
    tip: 'Potvrdni poticaj → nešto; išta tek uz sumnju/negaciju.',
  },
  {
    mode: 'oblici',
    q: 'Nakon poplave u podrumu nije ostalo ____.',
    opts: ['ništa', 'nešto', 'išta', 'svašta'],
    answer: 'ništa',
    en: 'after the flood nothing was left in the basement',
    tip: 'Niječni glagol traži ni-oblik: nije ostalo ništa.',
  },
  {
    mode: 'oblici',
    q: 'Bez ____ pomoći nećemo uspjeti.',
    opts: ['ičije', 'ičiju', 'ničije', 'ičijoj'],
    answer: 'ičije',
    en: 'without anyone’s help we will not succeed',
    tip: 'Iza prijedloga „bez” dolazi i-oblik: bez ičije pomoći.',
  },
  {
    mode: 'oblici',
    q: 'Na sajmu se moglo kupiti ____ — od meda do namještaja.',
    opts: ['svašta', 'sve što', 'išta', 'nešto'],
    answer: 'svašta',
    en: 'you could buy all sorts of things at the fair',
    tip: 'Svašta = svakojake stvari (sva-serija).',
  },
  {
    mode: 'razdvajanje',
    q: 'Ne želim razgovarati ni ____.',
    opts: ['s kim', 's nikim', 'sa nikime', 'kim'],
    answer: 's kim',
    en: 'I do not want to talk with anyone',
    tip: 'Prijedlog RAZDVAJA ni-: ni s kim (nikad „s nikim”).',
  },
  {
    mode: 'razdvajanje',
    q: 'Cijelu večer nisam mislio ni ____.',
    opts: ['o čemu', 'o ničemu', 'čemu', 'na ništa'],
    answer: 'o čemu',
    en: 'all evening I was not thinking about anything',
    tip: 'Ni + o + čemu: ni o čemu.',
  },
  {
    mode: 'razdvajanje',
    q: 'Konačna odluka ne ovisi ni ____.',
    opts: ['o kome', 'o nikome', 'kome', 'od nikoga'],
    answer: 'o kome',
    en: 'the final decision does not depend on anyone',
    tip: 'Ni o kome — prijedlog ulazi između ni i zamjenice.',
  },
  {
    mode: 'razdvajanje',
    q: 'Nismo se javili ____.',
    opts: ['nikomu', 'ni komu', 'ikomu', 'nekomu'],
    answer: 'nikomu',
    en: 'we did not get in touch with anyone',
    tip: 'BEZ prijedloga nema razdvajanja: nikomu (dativ).',
  },
  {
    mode: 'razdvajanje',
    q: 'Ni ____ ne bih mijenjao ovaj stan.',
    opts: ['za što', 'za ništa', 'što', 'za ničim'],
    answer: 'za što',
    en: 'I would not trade this flat for anything',
    tip: 'Ni za što — razdvojeni oblik uz prijedlog za.',
  },
  {
    mode: 'razdvajanje',
    q: 'Ni ____ slučaju nemoj otvarati ta vrata.',
    opts: ['u kojem', 'u nikojem', 'kojem', 'po kojem'],
    answer: 'u kojem',
    en: 'do not open that door under any circumstances',
    tip: 'Ni u kojem slučaju — ustaljena razdvojena sveza.',
  },
  {
    mode: 'razdvajanje',
    q: 'Nemamo se ____ požaliti.',
    opts: ['komu', 'nikomu', 'ikomu', 's kim'],
    answer: 'komu',
    en: 'we have no one to complain to',
    tip: 'Uz „nemati + infinitiv” dolazi goli upitni oblik: nemamo komu.',
  },
  {
    mode: 'razdvajanje',
    q: 'Smiri se — nema se ____ bojati.',
    opts: ['čega', 'ničega', 'išta', 'što'],
    answer: 'čega',
    en: 'calm down — there is nothing to be afraid of',
    tip: 'Nema se čega bojati — isti obrazac golog upitnog oblika.',
  },
  {
    mode: 'god',
    q: '____ god nazvao, javi se ljubazno.',
    opts: ['Tko', 'Koji', 'Što', 'Čiji'],
    answer: 'Tko',
    en: 'whoever calls, answer politely',
    tip: 'Tko god = bilo tko; god se piše odvojeno.',
  },
  {
    mode: 'god',
    q: 'Uzmi ____ god želiš s police.',
    opts: ['što', 'kome', 'tko', 'čega'],
    answer: 'što',
    en: 'take whatever you want from the shelf',
    tip: 'Što god = bilo što.',
  },
  {
    mode: 'god',
    q: '____ god pitao, nitko ne zna odgovor.',
    opts: ['Koga', 'Tko', 'Kome', 'Čega'],
    answer: 'Koga',
    en: 'whomever I ask, nobody knows the answer',
    tip: 'Pitati KOGA (akuzativ): koga god pitao.',
  },
  {
    mode: 'god',
    q: 'Nikad ____ nikome ništa obećao.',
    opts: ['nisam', 'sam', 'jesam', 'bih'],
    answer: 'nisam',
    en: 'I have never promised anyone anything',
    tip: 'Niječni sklad: hrvatski GOMILA niječnice (nikad-nisam-nikome-ništa).',
  },
  {
    mode: 'god',
    q: 'Dvostruka (višestruka) negacija u hrvatskome je:',
    opts: ['obvezna', 'pogrešna', 'strani utjecaj', 'moguća samo u pjesništvu'],
    answer: 'obvezna',
    en: 'multiple negation in Croatian',
    tip: 'Nitko NIJE došao — ni-oblik zahtijeva niječni glagol.',
  },
  {
    mode: 'god',
    q: 'Bilo ____ da nazoveš, bit ću tu.',
    opts: ['kad', 'kada god', 'kad bilo', 'god kad'],
    answer: 'kad',
    en: 'whenever you call, I will be there',
    tip: 'Bilo kad, bilo gdje, bilo tko — serija s „bilo”.',
  },
  {
    mode: 'god',
    q: 'Možeš spavati bilo ____ — ima mjesta.',
    opts: ['gdje', 'kamo', 'kuda', 'čime'],
    answer: 'gdje',
    en: 'you can sleep anywhere — there is room',
    tip: 'Mjesto (ne smjer) → gdje: bilo gdje.',
  },
  {
    mode: 'god',
    q: 'On je ____ drugo nego lijen — radi po cijele dane.',
    opts: ['sve', 'svašta', 'išta', 'nešto'],
    answer: 'sve',
    en: 'he is anything but lazy — he works all day',
    tip: 'Sve drugo nego… = ustaljeni obrazac isključivanja.',
  },
];

export { DATA as NEODREDJENE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NeodredjeneDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="neodredjene"
      title={'❓ Neodređene zamjenice'}
      subtitle={'ni s kim, ni o čemu — the split negatives'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — ni-oblici vam se više ne opiru! 🏆',
        good: 'Vrlo dobro vladanje zamjenicama! 💪',
        more: 'Neodređene zamjenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
