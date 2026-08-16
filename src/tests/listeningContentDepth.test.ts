// listeningContentDepth.test.ts — pins the listening content-depth work
// (fluency initiative #4, 2026-08-14): two-voice dialogues, long connected
// passages at B2+, and the native-pace playback plumbing.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { EXERCISES } from '../components/practice/listening/exercises';

type AnySet = {
  title: string;
  dialogue?: Array<{ s: string; hr: string }>;
  passage?: string;
  questions: Array<{ hr: string; en: string; opts: string[] }>;
};
const levels = EXERCISES as unknown as Record<string, { sets: AnySet[] }>;

describe('two-voice dialogue sets', () => {
  it.each(['A2', 'B1', 'B2'])('%s has at least one dialogue set', (lvl) => {
    expect(levels[lvl]!.sets.some((s) => Array.isArray(s.dialogue))).toBe(true);
  });

  it('every dialogue set is a real two-speaker conversation with quiz lines drawn from it', () => {
    let found = 0;
    for (const [lvl, data] of Object.entries(levels)) {
      for (const set of data.sets) {
        if (!set.dialogue) continue;
        found++;
        const speakers = new Set(set.dialogue.map((l) => l.s));
        expect(speakers, `${lvl}/${set.title}: both speakers present`).toEqual(new Set(['A', 'B']));
        expect(set.dialogue.length, `${lvl}/${set.title}: enough turns`).toBeGreaterThanOrEqual(8);
        const allLines = set.dialogue.map((l) => l.hr).join(' ');
        for (const q of set.questions) {
          expect(allLines.includes(q.hr), `${lvl}/${set.title}: "${q.hr}" not in dialogue`).toBe(
            true,
          );
          expect(q.opts).toHaveLength(4);
          expect(new Set(q.opts).size).toBe(4);
          expect(q.opts).toContain(q.en);
        }
      }
    }
    expect(found).toBeGreaterThanOrEqual(3);
  });
});

describe('long connected passages at B2+', () => {
  it.each(['B2', 'C1', 'C2'])('%s has a passage of at least six sentences', (lvl) => {
    const long = levels[lvl]!.sets.filter(
      (s) => typeof s.passage === 'string' && (s.passage.match(/[.!?]/g)?.length ?? 0) >= 6,
    );
    expect(long.length, `${lvl}: long passages`).toBeGreaterThanOrEqual(1);
  });
});

describe('playback plumbing (source pins)', () => {
  it('QuestionView renders DialoguePlayer for dialogue sets, with the OPPOSITE voice as speaker B', () => {
    const src = readFileSync('src/components/practice/listening/QuestionView.tsx', 'utf8');
    expect(src).toContain('DialoguePlayer');
    expect(src).toMatch(/voiceB=\{narrator === 'srecko' \? undefined : 'srecko'\}/);
    // Native pace is a B2+ affordance.
    expect(src).toMatch(/allowNativePace=\{\['B2', 'C1', 'C2'\]/);
  });

  it('speakAzure supports a per-call prosody rate that is part of the cache identity', () => {
    const src = readFileSync('src/lib/audio.ts', 'utf8');
    expect(src).toContain('body.prosody = { rate }');
    // rate must be in the client cache key or a native-pace play would collide
    // with the cached study-pace audio of the same sentence.
    expect(src).toMatch(/\+ phoneme \+ '\|' \+ rate/);
  });

  it('DialoguePlayer plays sequentially with per-line voice and a cancellation generation', () => {
    const src = readFileSync('src/components/practice/listening/DialoguePlayer.tsx', 'utf8');
    expect(src).toContain("line.s === 'A' ? voiceA : voiceB");
    expect(src).toContain('genRef.current !== myGen');
    expect(src).toMatch(/nativePace.*rate.*'0%'|rate = '0%'/s);
  });
});
