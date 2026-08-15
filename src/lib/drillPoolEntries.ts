/**
 * drillPoolEntries — the C1/C2 drill tranches of the 2026-08 fluency
 * initiative (program target: 30+ drills per level), split out of
 * sessionPools.ts for max-lines. Spread into CEFR_EXERCISE_POOL where the
 * C-level section sits; future C-level tranches land here.
 */
import type { CefrPoolEntry } from './sessionPools';

export const C_LEVEL_DRILL_ENTRIES: CefrPoolEntry[] = [
  {
    id: 'frazeologija',
    label: 'Frazeologija',
    screen: 'frazeologija',
    cefr: 'C2',
    category: 'idioms',
  },
  {
    id: 'tvorbarijeci',
    label: 'Tvorba riječi',
    screen: 'tvorbarijeci',
    cefr: 'C2',
    category: 'nominalization',
  },
  {
    id: 'sinonimija',
    label: 'Sinonimija',
    screen: 'sinonimija',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'posudjenice',
    label: 'Posuđenice i standard',
    screen: 'posudjenice',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'glasovnepromjene',
    label: 'Glasovne promjene',
    screen: 'glasovnepromjene',
    cefr: 'C2',
    category: 'genitive',
  },
  {
    id: 'administrativni',
    label: 'Administrativni jezik',
    screen: 'administrativni',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'pravopis',
    label: 'Pravopis',
    screen: 'pravopis',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'konektori',
    label: 'Tekstni konektori',
    screen: 'konektori',
    cefr: 'C2',
    category: 'discourse',
  },
  {
    id: 'razgovorni',
    label: 'Razgovorni jezik',
    screen: 'razgovorni',
    cefr: 'C2',
    category: 'register',
  },
  {
    id: 'kolokacije',
    label: 'Kolokacije',
    screen: 'kolokacije',
    cefr: 'C1',
    category: 'register',
  },
  {
    id: 'emfaza',
    label: 'Red riječi',
    screen: 'emfaza',
    cefr: 'C1',
    category: 'word-order',
  },
  {
    id: 'vidnijanse',
    label: 'Vid — nijanse',
    screen: 'vidnijanse',
    cefr: 'C1',
    category: 'aspect-perfective',
  },
  {
    id: 'povratni',
    label: 'Povratni glagoli',
    screen: 'povratni',
    cefr: 'C1',
    category: 'register',
  },
  {
    id: 'sklonidbaimena',
    label: 'Sklonidba imena',
    screen: 'sklonidbaimena',
    cefr: 'C1',
    category: 'genitive',
  },
  {
    id: 'prijedlozni',
    label: 'Prijedložni izrazi',
    screen: 'prijedlozni',
    cefr: 'C1',
    category: 'genitive',
  },
  {
    id: 'pogodbene',
    label: 'Pogodbene rečenice',
    screen: 'pogodbene',
    cefr: 'C1',
    category: 'conditional',
  },
  {
    id: 'odredjenost',
    label: 'Određeni i neodređeni vid',
    screen: 'odredjenost',
    cefr: 'C1',
    category: 'nominative',
  },
  {
    id: 'datumi',
    label: 'Datumi i vrijeme',
    screen: 'datumi',
    cefr: 'C1',
    category: 'numerals',
  },
];
