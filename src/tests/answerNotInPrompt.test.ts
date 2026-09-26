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
 * WHAT THIS IS NOT. It does not judge whether a distractor is plausible, whether the
 * English gloss is too generous, or whether an item is pedagogically sound. It closes
 * exactly one hole: an item that can be answered by copying its own cue tests nothing,
 * whatever else is true of it.
 */
import { describe, it, expect } from 'vitest';
import {
  countScannedItems,
  cueGivesAnswer,
  cueGivesOrder,
  findCueLeaks,
  glossGivesAnswer,
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
            ? `en=${l.cue}  <- the English gloss names the answer`
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
            ` \`en\` above the options, before the learner answers.`
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
    // A plain translation is not a leak even when the word coincides — you cannot render
    // the sentence in English without it. 89 such items exist and all are correct.
    expect(glossGivesAnswer('I am connected to the internet.', 'internet')).toBe(false);
    expect(glossGivesAnswer('The fjaka has got me.', 'me')).toBe(false);
    // And an arrow pointing the OTHER way is a note about the source form, not the answer.
    expect(glossGivesAnswer('to take place', 'održati se')).toBe(false);
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
