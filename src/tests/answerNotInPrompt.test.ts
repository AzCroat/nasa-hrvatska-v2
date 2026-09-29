/**
 * answerNotInPrompt.test.ts — no multiple-choice item may hand the learner its answer.
 *
 * OWNER REPORT, 2026-09-26: *"In objektne zamjenice you are giving the answers in the
 * questions. What the fuck. How is someone going to learn if you give them the answers?"*
 * and, of a second drill: *"Verb aspect drill also gives the answer."*
 *
 * Both were one defect with 124 instances. See `helpers/promptCues.ts` for the predicate
 * and why it is token containment inside a PARENTHETICAL rather than a substring search.
 *
 * OWNER REPORT, 2026-09-29: *"nominative case practice states zene in the question below
 * which is the answer."* — the English `en` line as a NOTE naming the Croatian answer
 * (`Feminine (nom pl): žene (women).`), which the arrow rule could not see. Sixty items
 * across the tree; see `glossRule` for the three rules and their scope.
 *
 * WHAT THIS IS NOT. It does not judge whether a distractor is plausible, whether the
 * English gloss is too generous, or whether an item is pedagogically sound. It closes
 * exactly one hole: an item that can be answered by copying its own cue tests nothing,
 * whatever else is true of it.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  GLOSS_IS_FEEDBACK,
  countScannedItems,
  cueGivesAnswer,
  cueGivesOrder,
  findCueLeaks,
  glossGivesAnswer,
  glossRule,
} from './helpers/promptCues';

const ROOT = process.cwd();

describe('a question must not contain its own answer', () => {
  it('no item in the content tree leaks its answer through a parenthetical cue', () => {
    const leaks = findCueLeaks(ROOT);
    const report = leaks
      .slice(0, 25)
      .map(
        (l) =>
          `  ${l.file}:${l.line}\n     q=${l.q}\n     ` +
          (l.via === 'gloss'
            ? `en=${l.cue}  <- the English gloss names the answer (rule: ${l.rule})`
            : `cue=(${l.cue})  <- the parenthetical gives it`) +
          `  answer=${l.answer}`,
      )
      .join('\n');
    expect(
      leaks.length,
      leaks.length
        ? `${leaks.length} item(s) can be answered by reading the question:\n${report}` +
            `\n\nA PARENTHETICAL: delete it. The options are almost always forms of one lemma,` +
            ` so the cue identifies nothing the learner cannot already see — keep one only when` +
            ` it names the PERSON or glosses the meaning in English. For a drill that tests` +
            ` clitic ORDER, scramble the cue instead of deleting it: the ingredients are the` +
            ` task.\nA GLOSS: drop the arrow and the Croatian after it. Every drill renders` +
            ` \`en\` above the options, before the learner answers.\nA NOTE (\`X = bread\`,` +
            ` \`Feminine (nom pl): X\`, \`the preposition of purpose is X\`, or an English` +
            ` sentence naming a word whose case forms are the options): TRANSLATE without the` +
            ` Croatian answer, or move the explanation to \`tip\`, which renders after the answer.`
        : '',
    ).toBe(0);
  });

  it('the scan is not vacuous — it reaches thousands of real items', () => {
    // Zero leaks is what a healthy tree reports AND what a broken walk reports. This is
    // the only clause that tells them apart: the floor is far below the measured count
    // (over five thousand) so ordinary content churn cannot trip it, but a walk that
    // stopped descending, a literal parser that stopped matching or a renamed question
    // field would all fall through it.
    expect(countScannedItems(ROOT)).toBeGreaterThan(3000);
    expect(countScannedItems(ROOT, ['src/data/drills'])).toBeGreaterThan(1000);
  });

  it('the predicate fires on the shapes the owner reported and not on the legitimate ones', () => {
    // The two reported defects, verbatim.
    expect(cueGivesAnswer('govoriti', 'govoriti'), 'the aspect drill shape').toBe(true);
    expect(cueGivesAnswer('ići', 'ići'), 'the future-tense shape').toBe(true);
    // The clitic-order shape, which a whole-STRING match missed and had to be found by
    // hand: the cue lists the clitics and their ORDER is the subject.
    expect(cueGivesAnswer('su + nas', 'su nas'), 'the cue IS the answer, plus separators').toBe(
      true,
    );
    // ORDER GIVEN THROUGH THE LONG FORMS — the owner's first example. No surface word is
    // shared, so only the pronoun mapping can see it.
    expect(cueGivesOrder('meni + nju', 'mi ju'), "the owner's own example").toBe(true);
    expect(cueGivesOrder('njemu + njega', 'mu ga je'), 'cue order is a prefix of the answer').toBe(
      true,
    );
    expect(cueGivesOrder('tebi + njega', 'ću ti ga'), 'cue order sits inside the answer').toBe(
      true,
    );
    // Scrambled, which is what the drill's correct items already do: the ingredients are
    // given and ordering them is the task.
    expect(cueGivesOrder('nju + meni', 'mi ju'), 'a scrambled cue restores the task').toBe(false);
    expect(cueGivesOrder('je + mi + ga', 'mi ga je'), 'a scrambled three-clitic cue').toBe(false);
    // Converting ONE long form to its clitic is a real exercise and must survive.
    expect(cueGivesOrder('njega', 'ga'), 'single-form conversion is the exercise').toBe(false);

    // Legitimate cues, which must survive.
    expect(cueGivesAnswer('njega', 'ga'), 'a long form cueing its own short form').toBe(false);
    expect(cueGivesAnswer('ja', 'mi'), 'a cue naming the PERSON, not the form').toBe(false);
    expect(cueGivesAnswer('knjiga', 'knjige'), 'a lemma cue for an inflected answer').toBe(false);
    expect(cueGivesAnswer('light', 'lakši'), 'an English gloss').toBe(false);
    expect(cueGivesAnswer('pozdrav gostu', 'došao'), 'a usage note').toBe(false);
  });

  it('a word is matched as a word, not as a substring', () => {
    // `kasniti` sits inside `zakasniti`, and the two are opposite aspects. A substring
    // rule flagged 255 items, over a hundred of them correct.
    expect(cueGivesAnswer('zakasniti — općenito', 'kasniti')).toBe(false);
    expect(cueGivesAnswer('kasniti — općenito', 'kasniti'), 'a note appended to the answer').toBe(
      true,
    );
  });

  it('a cue offering explicit alternatives is a scaffold, not an answer', () => {
    // Narrowing four options to two still makes the learner choose the aspect, which is
    // the skill. Banning this would push authors toward no cue at all where one helps.
    expect(cueGivesAnswer('čitati/pročitati', 'pročitati')).toBe(false);
    expect(cueGivesOrder('meni/nju', 'mi ju')).toBe(false);
  });

  it('the English gloss must not name the answer after an arrow', () => {
    // ModeDrill and every hand-written *Drill.tsx render `{cur.en}` above the options,
    // before the learner answers, so `money → lova` hands over the answer. Eleven items
    // did this; a slang drill held six of them.
    expect(glossGivesAnswer('money → lova', 'lova')).toBe(true);
    expect(glossGivesAnswer('weekend → vikend (adapted)', 'vikend'), 'a trailing note').toBe(true);
    // A plain translation is not a leak when the word coincides AND the options are
    // different words — a vocabulary item cannot be rendered in English without it.
    expect(
      glossGivesAnswer('I am connected to the internet.', 'internet', [
        'internet',
        'mobitel',
        'računalo',
        'struju',
      ]),
    ).toBe(false);
    expect(glossGivesAnswer('The fjaka has got me.', 'me', ['me', 'mi', 'ja', 'mene'])).toBe(false);
    // And an arrow pointing the OTHER way is a note about the source form, not the answer.
    expect(glossGivesAnswer('to take place', 'održati se', ['održati se', 'dogoditi se'])).toBe(
      false,
    );
  });

  // OWNER REPORT, 2026-09-29: "nominative case practice states zene in the question below
  // which is the answer." The item, verbatim as it shipped in NominativeDrill.tsx.
  const OWNER_ITEM = {
    q: 'Ženski rod (nom pl): ___',
    opts: ['žene', 'žena', 'ženama', 'ženu'],
    answer: 'žene',
    en: 'Feminine (nom pl): žene (women).',
  };

  it("the owner's item fails, by the rule it fails on, and through the real scanner", () => {
    expect(glossRule(OWNER_ITEM.en, OWNER_ITEM.answer, OWNER_ITEM.opts)).toBe('gloss');
    expect(glossGivesAnswer(OWNER_ITEM.en, OWNER_ITEM.answer, OWNER_ITEM.opts)).toBe(true);
    // The unit above proves the predicate; this proves the WALK reaches such an item —
    // the object-literal parser, the field matcher and the exemption path all sit between
    // the predicate and a real file, and any of them can silently stop matching.
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nh-gloss-'));
    try {
      fs.writeFileSync(
        path.join(tmp, 'ownerItem.ts'),
        `export const DATA = [\n  {\n    q: '${OWNER_ITEM.q}',\n    opts: [${OWNER_ITEM.opts
          .map((o) => `'${o}'`)
          .join(
            ', ',
          )}],\n    answer: '${OWNER_ITEM.answer}',\n    en: '${OWNER_ITEM.en}',\n  },\n];\n`,
      );
      const leaks = findCueLeaks(tmp, ['.']);
      expect(leaks).toHaveLength(1);
      expect(leaks[0]).toMatchObject({
        answer: 'žene',
        cue: OWNER_ITEM.en,
        via: 'gloss',
        rule: 'gloss',
      });
      expect(leaks[0]!.file).toContain('ownerItem.ts');
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it('a NOTE in `en` that names the Croatian answer is a leak — one control per rule', () => {
    // (a) GLOSS PUNCTUATION: the answer beside `=`, `:`, a dash, `!`, or after is/take(s).
    expect(glossRule('kruh = bread', 'kruh', ['kruh', 'kruv', 'kruk', 'krug'])).toBe('gloss');
    expect(glossRule('so-called = tzv.', 'tzv.', ['tzv.', 'tkz.', 't.z.v.', 'tzv'])).toBe('gloss');
    expect(
      glossRule('the preposition of purpose is radi', 'radi', ['radi', 'zbog', 'zato', 'jer']),
    ).toBe('gloss');
    expect(
      glossRule('gdje? takes the instrumental with pod/nad/pred/za', 'instrumental', [
        'instrumental',
        'akuzativ',
        'lokativ',
        'genitiv',
      ]),
      'an article between the verb and the answer',
    ).toBe('gloss');
    expect(
      glossRule('the clipped obzirom da is nonstandard', 'obzirom da', [
        'obzirom da',
        's obzirom na to da',
        'budući da',
        'zato što',
      ]),
      'the answer BEFORE `is`',
    ).toBe('gloss');
    expect(
      glossRule('Marko! (vocative = nominative)', 'Marko', ['Marko', 'Marku', 'Marče', 'Markone']),
    ).toBe('gloss');
    // (b) FORM: the options are case forms of the very word the English names. (`Zagreb
    // is …` also trips the `X is` gloss clause first; the rules are ordered and either
    // verdict is a leak — the pure-form controls are the two below it.)
    expect(
      glossRule('Zagreb is the capital of Croatia.', 'Zagreb', [
        'Zagreb',
        'Zagreba',
        'Zagrebu',
        'Zagrebom',
      ]),
    ).not.toBeNull();
    expect(
      glossRule('The train to Zagreb leaves at nine.', 'Zagreb', [
        'Zagreb',
        'Zagreba',
        'Zagrebu',
        'Zagrebom',
      ]),
    ).toBe('form');
    expect(
      glossRule('Ana reads a book.', 'Ana', ['Ana', 'Anu', 'Ane', 'Anom']),
      'a 3-letter name',
    ).toBe('form');
    // Over four DIFFERENT cities the form clause has nothing to say — and the `X is`
    // clause still flags it, correctly: an English sentence that names the answer among
    // four cities is a leak whatever the drill is called. (My first draft asserted null
    // here; it was the control that was wrong.)
    expect(
      glossRule('Zagreb is the capital of Croatia.', 'Zagreb', [
        'Zagreb',
        'Split',
        'Rijeka',
        'Osijek',
      ]),
    ).toBe('gloss');
    // `internet` over its case forms IS a leak — the 2026-09-26 census called it a
    // legitimate translation and it was one; the options made it a form test the English
    // answers. Fixed in technologyDrill (`I am online.`), not excused here.
    expect(
      glossRule('I am connected to the internet.', 'internet', [
        'internet',
        'interneta',
        'internetu',
        'internetom',
      ]),
    ).toBe('form');
    // (c) DIACRITIC: a lowercase Croatian word in English prose is a gloss.
    expect(
      glossRule('We walked through the šuma yesterday.', 'šuma', ['šuma', 'more', 'grad', 'polje']),
    ).toBe('diacritic');
    expect(glossRule('slušati glazbu', 'slušati', ['slušati', 'čuti', 'gledati', 'pratiti'])).toBe(
      'diacritic',
    );
  });

  it('the widened rules leave the legitimate homographs alone', () => {
    // A clitic coinciding with its English pronoun, in a drill that is NOT about forms of
    // one word — and under three characters besides.
    expect(glossRule('The fjaka has got me.', 'me', ['me', 'mi', 'ja', 'mene'])).toBeNull();
    expect(glossRule('He told me he loved me.', 'me', ['me', 'te', 'ga', 'nas'])).toBeNull();
    expect(glossRule('The area is 120 m².', 'm²', ['m²', 'm2', 'kvadrata m', 'm ²'])).toBeNull();
    expect(
      glossRule('he tried his hardest, yet there were no results', 'no', ['no', 'nego', 'naime']),
    ).toBeNull();
    // A definition item whose answer IS the English cognate: `Što je "referendum"?`
    expect(
      glossRule('What is a referendum?', 'referendum', [
        'referendum',
        'a report',
        'a recommendation',
        'a review',
      ]),
    ).toBeNull();
    // Fewer than two options, or no options at all: not this class.
    expect(glossRule('kruh = bread', 'kruh', ['kruh'])).toBeNull();
    expect(glossRule('kruh = bread', 'kruh')).toBeNull();
    // An English gloss beside the Croatian answer's TRANSLATION is the legitimate shape.
    expect(
      glossRule('Feminine, nominative plural (women).', 'žene', ['žene', 'žena', 'ženama', 'ženu']),
    ).toBeNull();
  });

  it('a file exempted as FEEDBACK renders `en` only after the learner has answered', () => {
    // CollocationsGame stores the whole Croatian collocation in `en` and renders it inside
    // `{answered && (…)}`. That is the ONLY thing that makes the exemption honest: an `en`
    // rendered above the options is a leak whatever the file is called.
    expect(GLOSS_IS_FEEDBACK.length).toBeGreaterThan(0);
    for (const rel of GLOSS_IS_FEEDBACK) {
      const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
      const renders = [...src.matchAll(/\{[a-zA-Z_.]*\.en\}/g)];
      expect(renders.length, `${rel} renders en somewhere`).toBeGreaterThan(0);
      for (const m of renders) {
        const at = m.index!;
        const open = src.lastIndexOf('{answered && (', at);
        expect(open, `${rel}: an en render with no {answered && ( before it`).toBeGreaterThan(-1);
        const between = src.slice(open + '{answered && ('.length, at);
        let depth = 1;
        for (const c of between) {
          if (c === '(') depth++;
          else if (c === ')') depth--;
        }
        expect(
          depth,
          `${rel}: the en render at ${at} is OUTSIDE its answered block`,
        ).toBeGreaterThan(0);
      }
      // STALENESS: the exemption must still be covering something. Run the scanner over
      // the file with the exemption removed — if nothing is flagged, the entry guards
      // nothing and is the stale-exemption shape.
      const unexempt = findCueLeaks(ROOT, [path.dirname(rel)], []).filter((l) => l.file === rel);
      expect(unexempt.length, `${rel} no longer needs its exemption`).toBeGreaterThan(0);
    }
    // And the exemption is FILE-scoped to feedback renderers only — never the engine, whose
    // `en` is rendered above the options before any answer.
    expect(GLOSS_IS_FEEDBACK).not.toContain('src/components/practice/ModeDrill.tsx');
    expect(GLOSS_IS_FEEDBACK).not.toContain('src/components/practice/PronunciationContrast.tsx');
  });

  it('when the item is about CAPITALISATION, a lowercase cue gives nothing away', () => {
    // VelikoSlovoDrill offers Sveučilište | sveučilište | SVEUČILIŠTE | Sve Učilište.
    // Two options are the same word differing only in case, which is how you can tell
    // the capital letter IS the question — so the cue withholds the thing being tested.
    const caseOpts = ['Sveučilište', 'sveučilište', 'SVEUČILIŠTE', 'Sve Učilište'];
    expect(cueGivesAnswer('najstarije hrvatsko sveučilište', 'Sveučilište', caseOpts)).toBe(false);
    // Where the options are different WORDS, a sentence-initial capital is incidental and
    // the cue does give the answer.
    expect(
      cueGivesAnswer('tijekom + puni oblik', 'Tijekom', ['Tijekom', 'U tijeku od', 'Kroz za']),
    ).toBe(true);
  });
});
