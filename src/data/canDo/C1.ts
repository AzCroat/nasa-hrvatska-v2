// src/data/canDo/C1.ts
//
// CAN-DO STATEMENTS for the six C1 units (academic recommendation 6, 2026-09-29).
// Each unit (C1-1 … C1-6, five consecutive lessons of the spine — see
// src/lib/courseUnits.ts) carries two or three plain-English statements a learner
// can check themselves against. They are drawn from the spine `objectives` of the
// unit's five lessons (functions/api/content/_data/curriculum.js) and claim only
// what those lessons teach and test: concrete, observable, beginning "I can …".

export const CAN_DO_C1: Readonly<Record<string, readonly string[]>> = {
  // clitics-advanced · i-nouns-mati-kci · accusative-measure-manner · coordinate-conclusive-clauses · abbreviations
  'C1-1': [
    'I can order every clitic in a full cluster without hesitating.',
    'I can decline kći and say radošću and ljubavlju.',
    'I can draw a conclusion with stoga or dakle and write abbreviations such as npr. and HNK-a.',
  ],
  // brojevi-norma · collective-nouns · temporal-accusative · adversative-clauses · comma-basics
  'C1-2': [
    'I can write numbers, dates and measurements the Croatian way.',
    'I can use collective nouns such as lišće and braća, and the -ad nouns momčad and unučad, with the right agreement.',
    'I can choose between nego, već and međutim and place the comma correctly.',
  ],
  // word-order-emphasis · collective-plural · temporal-locative-idioms · disjunctive-gradational-clauses · verb-government
  'C1-3': [
    'I can move the emphasis of a sentence by moving its words.',
    'I can use time phrases such as u mladosti and pri kraju.',
    'I can build a claim with ne samo… nego i and use the case each common verb demands.',
  ],
  // aspect-nuance · irregular-nouns-doba-dio · rare-genitive-prepositions · comma-dependent-clauses · text-connectors
  'C1-4': [
    'I can choose an aspect where both are grammatical and only one is right.',
    'I can decline posao and dio, use prepositions such as uoči and prigodom, and place commas around dependent clauses: Kad dođeš, nazovi me.',
    'I can link sentences into a text with connectors such as naime, osim toga and u tu svrhu.',
  ],
  // clause-types · verbal-nouns · emphatic-genitive-stalo · padezne-suptilnosti · multi-subject-agreement
  'C1-5': [
    'I can build every type of subordinate clause and compress one into a verbal noun.',
    'I can say what I care about: Stalo mi je do tebe.',
    'I can make a verb agree with two subjects: Majka i kći su otišle.',
  ],
  // slaganje-suptilnosti · cause-consequence-clauses · condensation · collocations · ethnonyms
  'C1-6': [
    'I can make a verb agree with a collective or quantity subject.',
    'I can give a cause with budući da and a consequence with tako da.',
    'I can choose the expected collocation and name town dwellers, such as Zagrepčanin and Splićanka.',
  ],
  // objective-genitive · capitals-names-geography · passive-choices · tvorba-rijeci · hypocoristics-dvojica
  'C1-7': [
    'I can use the genitive after a noun, as in zaštita okoliša or čovjek velikog srca.',
    'I can capitalise personal and place names correctly, as in Slavonski Brod.',
    'I can choose the passive a Croatian writer would use and count men with dvojica and trojica.',
  ],
  // sklonidba-iznimke · collective-numbers · ethical-dative · capitals-institutions · diminutives-augmentatives
  'C1-8': [
    'I can decline foreign names and the nouns that break the usual pattern.',
    'I can count mixed groups with dvoje and troje and use the ethical dative: Kako ti je mama?',
    'I can capitalise institutions such as Hrvatsko narodno kazalište and use diminutives with the right tone.',
  ],
  // indefinite-adjectives · exclamatory-dative · comparison-advanced · discourse-particles · idioms-register
  'C1-9': [
    'I can choose between nov and novi and use exclamations such as Blago tebi!',
    'I can soften or insist with particles such as pa, ma, baš and valjda.',
    'I can use idioms native speakers say and judge when one is too colloquial.',
  ],
  // depersonalization · prefixed-verbs · accent-prosody · summarising-paraphrase · academic-writing
  'C1-10': [
    'I can make impersonal statements such as Priča se da… and Kažu da…',
    'I can use the verbal prefixes and hear the pitch accent in word pairs.',
    'I can summarise a text in my own words and write an academic essay.',
  ],
  // aorist-imperfekt · pluskvamperfekt · comparative-clauses · direct-speech-spelling · debate-persuasion
  'C1-11': [
    'I can recognise the aorist, imperfect and pluperfect in literature.',
    'I can compare with kao da and punctuate direct speech with Croatian quotation marks.',
    'I can concede a point in a debate and then defeat it.',
  ],
  // formal-speech · translation-pitfalls · proofreading-editing · media-analysis · law-administration
  'C1-12': [
    'I can give a toast or a short formal address.',
    'I can fix calques and proofread my own Croatian for agreement, case and clitics.',
    'I can read news and legal documents critically and put them into plain Croatian.',
  ],
  // science-technology · arts-culture · regional-varieties · language-identity · diaspora-identity
  'C1-13': [
    'I can read technical and scientific Croatian and describe a process.',
    'I can discuss a book, film or exhibition and say why it moved me.',
    'I can recognise kajkavian and čakavian and talk about heritage and belonging.',
  ],
};
