/**
 * phraseOfDaySanitize.test.ts — Sentry 933936a2 (2026-08-16): the phrase
 * generator returned bilingual OBJECTS ({hr, en}) in string positions and
 * React threw "Objects are not valid as a React child", killing /phraseofday
 * behind its boundary. The sanitizer coerces every renderable field to a
 * string before state, so a shape-drifting model can degrade content but
 * never crash the screen.
 */
import { describe, it, expect } from 'vitest';
import { sanitizePhraseData } from '../components/croatia/PhraseOfDayScreen';

describe('sanitizePhraseData', () => {
  it('passes a well-formed payload through', () => {
    const clean = sanitizePhraseData({
      phrase: 'Kako si, brate?',
      translation: 'How are you, man?',
      when_to_use: 'Casual greeting.',
      example_dialogue: [{ speaker: 'Ivan', line: 'Bog, brate!' }],
      related_phrases: ['Što ima?'],
    });
    expect(clean).not.toBeNull();
    expect(clean!.phrase).toBe('Kako si, brate?');
    expect(clean!.example_dialogue![0]!.line).toBe('Bog, brate!');
  });

  it('coerces the exact crashing shape — {hr, en} objects in string positions', () => {
    const clean = sanitizePhraseData({
      phrase: { hr: 'Svježe pecivo, molim.', en: 'A fresh roll, please.' },
      translation: { hr: 'Svježe pecivo, molim.', en: 'A fresh roll, please.' },
      cultural_note: { hr: 'Pekara je društveno mjesto.', en: 'The bakery is a social place.' },
      example_dialogue: [
        {
          speaker: { hr: 'Prodavačica', en: 'Shopkeeper' },
          line: { hr: 'Izvolite!', en: 'Here you go!' },
        },
      ],
      related_phrases: [{ hr: 'Koliko košta?', en: 'How much is it?' }],
    });
    expect(clean).not.toBeNull();
    // Croatian side for Croatian fields, English for glosses.
    expect(clean!.phrase).toBe('Svježe pecivo, molim.');
    expect(clean!.translation).toBe('A fresh roll, please.');
    expect(clean!.cultural_note).toBe('The bakery is a social place.');
    expect(clean!.example_dialogue![0]!.line).toBe('Izvolite!');
    expect(clean!.related_phrases![0]).toBe('Koliko košta?');
    // NOTHING non-string survives into renderable positions.
    for (const v of Object.values(clean!)) {
      if (Array.isArray(v)) {
        for (const item of v) {
          if (typeof item === 'object') {
            for (const f of Object.values(item as Record<string, unknown>)) {
              expect(typeof f).toBe('string');
            }
          } else {
            expect(typeof item).toBe('string');
          }
        }
      } else {
        expect(typeof v).toBe('string');
      }
    }
  });

  it('rejects payloads with no usable phrase (caller falls back to seeds)', () => {
    expect(sanitizePhraseData(null)).toBeNull();
    expect(sanitizePhraseData('Kako si?')).toBeNull();
    expect(sanitizePhraseData({ translation: 'no phrase here' })).toBeNull();
    expect(sanitizePhraseData({ phrase: { de: 'nicht kroatisch' } })).toBeNull();
  });

  it('drops undeclared fields instead of passing them through to render', () => {
    const clean = sanitizePhraseData({
      phrase: 'Dobar tek!',
      translation: 'Enjoy your meal!',
      surprise_object: { hr: 'x', en: 'y' },
    });
    expect(clean).not.toBeNull();
    expect('surprise_object' in clean!).toBe(false);
  });
});
